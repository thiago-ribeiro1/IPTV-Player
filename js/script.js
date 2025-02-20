// Obtém os elementos do DOM que serão manipulados
const videoElement = document.getElementById("videoPlayer");
const playlistSelect = document.getElementById("playlistSelect");
const channelSelect = document.getElementById("channelSelect");
const fileInput = document.getElementById("m3uFile");

// Lista de playlists disponíveis com URLs de arquivos M3U
let playlists = {
  all: "https://iptv-org.github.io/iptv/index.m3u",
  br: "../Listas_IPTV/Canais_Abertos_BR.m3u", // carrega a lista de canais abertos BR pelo arquivo
};

/**
 * Adiciona uma nova playlist personalizada ao sistema com base em uma URL inserida pelo usuário
 */
function addPlaylist() {
  const newUrl = document.getElementById("m3uUrl").value;
  if (newUrl) {
    playlists.custom = newUrl;
    loadPlaylist("custom");
  }
}

/**
 * Faz o download do arquivo M3U da playlist selecionada e o processa
 * @param {string} type - Tipo de playlist a ser carregada (por exemplo, 'all', 'br', 'custom')
 */
async function loadPlaylist(type) {
  const playlistURL = playlists[type]; // Obtém a URL correspondente ao tipo de playlist
  if (!playlistURL) return; // Se a playlist não existir, sai da função

  // Faz a requisição HTTP para obter o conteúdo do arquivo M3U
  const response = await fetch(playlistURL);
  const m3uText = await response.text();
  parseM3U(m3uText); // Processa o conteúdo do arquivo M3U para extrair os canais
}

/**
 * Analisa o conteúdo do arquivo M3U e extrai as informações dos canais disponíveis
 * @param {string} m3uText - Conteúdo do arquivo M3U.
 */
function parseM3U(m3uText) {
  const lines = m3uText.split("\n"); // Divide o texto em linhas
  let channels = [];

  // Percorre todas as linhas do arquivo M3U
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("#EXTINF")) {
      // Verifica se a linha contém informações do canal
      const name = lines[i].split(",")[1].trim(); // Extrai o nome do canal
      const url = lines[i + 1].trim(); // Obtém a URL do stream na linha seguinte
      if (url.startsWith("http")) {
        // Verifica se a URL é válida
        channels.push({ name, url }); // Adiciona o canal à lista de canais
      }
    }
  }

  // Atualiza a lista de canais disponíveis no select (dropdown)
  channelSelect.innerHTML = "";
  channels.forEach((channel) => {
    let option = document.createElement("option");
    option.value = channel.url; // Define o valor da opção como a URL do stream
    option.textContent = channel.name; // Define o nome do canal como o texto exibido
    channelSelect.appendChild(option);
  });
}

/**
 * Carrega um arquivo M3U localmente e o processa.
 */
function loadLocalFile() {
  const file = fileInput.files[0]; // Obtém o arquivo selecionado pelo usuário
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      parseM3U(event.target.result); // Processa o conteúdo do arquivo M3U carregado
    };
    reader.readAsText(file); // Lê o arquivo como texto
  }
}

/**
 * Carrega e reproduz o canal selecionado na lista de canais.
 */
function loadChannel() {
  const selectedURL = channelSelect.value;

  // Obtém a URL do canal selecionado
  if (Hls.isSupported()) {
    let hls = new Hls();
    hls.loadSource(selectedURL); // Define a origem do stream
    hls.attachMedia(videoElement); // Anexa o stream ao elemento de vídeo

    // Caso contrário, verifica se o navegador pode reproduzir nativamente o formato M3U8
  } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
    videoElement.src = selectedURL; // Define diretamente a URL do stream
  }
}
