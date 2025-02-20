
# 📺 IPTV Player

Um player de IPTV desenvolvido em **JavaScript puro**, que permite ao usuário carregar e assistir canais de televisão via listas M3U, tanto de URLs externas quanto arquivos locais. O player utiliza a biblioteca **hls.js** para suporte ao streaming de vídeos no formato HLS (HTTP Live Streaming).

## 🚀 Funcionalidades

- 🔗 **Carregar lista M3U via URL:** Basta inserir a URL da lista e carregar os canais disponíveis.
- 📂 **Carregar arquivo M3U local:** Permite fazer upload de um arquivo M3U diretamente do seu dispositivo.
- 🌎 **Playlists pré-definidas:**
  - **Todos os Canais:** Lista global com vários canais.
  - **Canais Brasil:** Lista com canais abertos do Brasil.
- 📺 **Reprodução de canais ao vivo:** Reproduza vídeos diretamente no navegador usando o elemento `<video>`.
- 🎚️ **Seleção de canais:** Interface intuitiva para escolher o canal desejado.

💡 **Recomendação:** Para baixar listas IPTV adicionais, visite [htforum.net](http://htforum.net/).

---

## 💾 Como Usar o Projeto

### 🔨 **Passo 1: Clone o repositório**

```bash
https://github.com/usuario/repositorio-iptv-player.git
```

### 🖥️ **Passo 2: Abra o projeto no Visual Studio Code**

```bash
cd repositorio-iptv-player
code .
```

### 🌐 **Passo 3: Execute o projeto**

✅ **Recomendado:** Utilize a extensão **Live Server** do VS Code:

1. Clique com o botão direito no arquivo `index.html` localizado no diretório raiz.
2. Selecione **"Open with Live Server"**.

🔗 **Alternativa:** Abra o arquivo `index.html` diretamente em seu navegador.

---

## 📝 Estrutura do Projeto

```
├── css
│   └── style.css               # Estilos personalizados do projeto
├── img
│   ├── glenn-carstens-peters-EOQhsfFBhRk-unsplash.jpg  # Imagem adicional
│   ├── icon.png                # Ícone da aba do navegador
│   ├── Logo horizontal.png     # Logotipo principal
│   └── logo.png                # Logo alternativo
├── js
│   └── script.js               # Lógica principal em JavaScript puro
├── Listas_IPTV
│   ├── Canais BR.m3u                   # Lista de canais brasileiros
│   ├── Canais_Abertos_BR.m3u           # Canais abertos do Brasil
│   ├── CineTV_Brasil.m3u               # Lista temática de cinema e TV
│   └── Paulo.m3u                       # Exemplo de lista personalizada
├── index.html                  # Página principal do IPTV Player
```

---

## 📜 **Descrição do Código JavaScript (`script.js`)**

- 🔄 **Gerenciamento de Playlists:** Carrega listas M3U pré-definidas e personalizadas inseridas pelo usuário.
- 🔍 **Análise de Arquivos M3U:** Processa arquivos M3U para extrair nomes e URLs dos canais.
- 🎥 **Reprodução de Vídeo:**
  - Usa `hls.js` para streaming HLS.
  - Suporte nativo para navegadores compatíveis.
- 📝 **Funções Principais:**
  - `addPlaylist()`: Adiciona nova playlist a partir de uma URL.
  - `loadPlaylist(type)`: Carrega e analisa a playlist especificada.
  - `parseM3U(m3uText)`: Analisa o conteúdo do arquivo M3U.
  - `loadLocalFile()`: Carrega e processa arquivos M3U locais.
  - `loadChannel()`: Reproduz o canal selecionado.

---

## ⚡ **Tecnologias Utilizadas**

- 💡 **HTML5**
- 🎨 **CSS3** (com **Bootstrap 5** para responsividade)
- 💻 **JavaScript puro**
- 📚 **hls.js** para suporte a streaming HLS

---

## 🖼️ **Pré-visualização**

![IPTV Player](img/Logo%20horizontal.png)

---

## 💬 **Contribuições**

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Fork o projeto
2. Crie sua branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas alterações: `git commit -m 'Adiciona nova funcionalidade'`
4. Push na sua branch: `git push origin feature/nova-funcionalidade`
5. Abra um pull request

---

## 📜 **Licença**

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

## 🙋 **Autor**

Desenvolvido por [Seu Nome](https://github.com/seuusuario) 💙

---

🔗 **Referências:**
- [hls.js Documentation](https://github.com/video-dev/hls.js/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- 🌐 [htforum.net - Listas IPTV](http://htforum.net/)

---

🎉 **Divirta-se assistindo seus canais favoritos com o IPTV Player!**
