# 🚀 Guia de Configuração e Execução do Cypress

Este guia fornece as instruções para configurar e executar os testes automatizados usando o Cypress.

## 🛠️ Requisitos

Antes de começar, você precisa ter os seguintes itens instalados:

- **Visual Studio Code (VS Code)**: IDE recomendada para desenvolvimento e execução de testes. [Download VS Code](https://code.visualstudio.com/)
- **Node.js**: Ambiente de execução JavaScript necessário para instalar e rodar o Cypress. [Download Node.js](https://nodejs.org/)

## 📥 Clonando o Repositório

1. **Clone o repositório do projeto**:
    Primeiro, você precisa clonar o repositório do projeto onde os testes estão localizados. Use o comando abaixo substituindo `URL_DO_REPOSITORIO` pela URL do repositório:

    ```bash
    git clone URL_DO_REPOSITORIO
    ```

2. **Acesse o diretório do projeto**:
    Após clonar o repositório, entre no diretório do projeto com:

    ```bash
    cd nome-do-repositorio
    ```

## 📦 Instalando o Cypress

1. **Instale o Node.js**: Se ainda não tiver o Node.js instalado, você pode baixá-lo [aqui](https://nodejs.org/).

2. **Instale o Cypress**:
    No terminal, dentro do diretório do seu projeto (certifique-se de estar no diretório onde seu `package.json` está localizado), execute o seguinte comando:
    ```bash
    npm install cypress --save-dev
    ```

## 🎯 Inicializando o Cypress

1. **Abra o Cypress**:
    Após a instalação, você pode abrir o Cypress usando o comando:
    ```bash
    npx cypress open
    ```

   Esse comando abrirá a interface gráfica do Cypress onde você poderá visualizar e executar os testes.

2. **Executar o Cypress com o Navegador Electron**:
    Para executar os testes no navegador Electron, utilize o comando:
    ```bash
    npx cypress open
    ```

   O Electron é o navegador padrão e geralmente oferece maior estabilidade para os testes.

## 🔍 Teste de API

Foi realizado um teste de API simples para verificar a estabilidade do sistema. 

## ⚠️ Observações

- **Instabilidade em Outros Navegadores**:
  - **Google Chrome** e **Microsoft Edge** podem apresentar instabilidade em alguns casos. Recomendamos o uso do navegador Electron para evitar problemas.

## 📚 Recursos Adicionais

- **Documentação do Cypress**: [Cypress Documentation](https://docs.cypress.io)
- **VS Code**: [Download VS Code](https://code.visualstudio.com/)
- **Node.js**: [Download Node.js](https://nodejs.org/)

Obrigada pela oportunidade! Espero que gostem!