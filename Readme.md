# 🕹️ Projeto Pong com GitHub Copilot

Este projeto foi desenvolvido como parte do curso da Alura sobre **GitHub Copilot**, no qual aprendi a utilizar essa ferramenta para **criar um jogo estilo Pong usando JavaScript e a biblioteca p5.js**.

## 🚀 Sobre o Projeto

Durante o curso, criamos uma versão personalizada do clássico jogo **Pong**, com um jogador humano à esquerda e o computador à direita. Contamos com a ajuda do GitHub Copilot para acelerar o desenvolvimento e aprender boas práticas de codificação.

### ⚙️ Funcionalidades Implementadas

- 🎮 Controle do jogador e inteligência artificial do oponente
- 🏓 Movimento da bola com rotação ao longo do tempo
- 🧱 Lógica de colisão entre bola e raquetes
- 🔊 Efeitos sonoros personalizados para colisões e gols
- 🎨 Assets visuais personalizados (imagem de fundo, sprites)
- 🗣️ Contador de pontos com Web Speech API (voz sintetizada)
- 🧠 Sugestões e refatorações feitas com auxílio do Copilot

## 💡 Aprendizados com o GitHub Copilot

Durante o desenvolvimento, explorei diversas formas de interagir com o Copilot:

- Comandos em **comentários para gerar funções**
- Sugestões de **refatoração de código**
- **Testes de diferentes prompts** para melhorar resultados
- Uso de **inglês para aumentar a precisão das sugestões**

### 🧩 Refatorações e Melhorias Sugeridas

- Criar uma **classe `Jogo`** para organizar melhor o código (atualmente, todo o jogo está no `sketch.js` com ~177 linhas)
- Agrupar variáveis globais em objetos ou classes específicas
- Utilizar funções do p5.js como `constrain()` para simplificar lógica de limites
- Melhorar o uso de `if`s repetitivos com boas práticas de abstração
- Separar responsabilidades: desenho, lógica, som e placar

## 📚 Estrutura do Código

- `Raquete`: Classe com métodos como `update()`, verificação de controle (jogador ou computador), limites de movimento e renderização com imagem.
- `Bola`: Classe com `reset()`, lógica de rotação, colisão com raquetes, e placar.
- `função preload()`: Pré-carregamento de imagens e sons.
- `função setup()`: Inicialização dos elementos.
- `função draw()`: Lógica principal de atualização e renderização do jogo.

## 🎯 Desafios e Superações

- A **colisão da bola** com as raquetes foi uma das partes mais desafiadoras.
- A **matemática envolvida no redimensionamento de imagens** e nos limites da tela exigiu atenção especial.
- Descobri que o Copilot é um **copiloto**, não o piloto: ele auxilia, mas não substitui o conhecimento e análise humana.

## 👾 Personalize você também!

O projeto pode ser adaptado com seus próprios sons, imagens e regras. Explore sua criatividade e crie sua própria versão do Pong!

---

> _"À medida que utilizamos o GitHub Copilot, passamos a entender melhor seus limites e potenciais. Ele é uma ótima ferramenta, mas o aprendizado vem com a prática."_  
> — Curso Alura | GitHub Copilot

---

## 🧪 Tecnologias Utilizadas

- JavaScript
- GitHub Copilot
- Web Speech API

## 📂 Arquivo Principal

- `sketch.js`: Contém toda a lógica do jogo. Refatorações futuras poderão separar responsabilidades em arquivos diferentes.

---


👨‍💻 Desenvolvido durante o curso da [Alura](https://cursos.alura.com.br/course/github-copilot-chatgpt-desenvolvimento-ia) com foco em boas práticas no uso do **GitHub Copilot**.
