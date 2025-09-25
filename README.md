# Crud-Angular-Material

Projeto simples desenvolvido em Angular, criado não apenas para demonstrar implementação de Formulários, mas também como forma de **estudo prático** sobre como aplicar **estética** e **personalização visual** com Angular Material.


## 🚧 Status do Projeto:

Finalizado ✅

## 📖 Objetivos do projeto:

- Aprender a estilizar interfaces com Angular Material
- Praticar a criação de componentes reutilizáveis

## 🛠️ Funcionalidades Principais

- Listagem de clientes: tabela dinâmica com pesquisa e ordenação para visualizar todos os clientes cadastrados.

- Cadastro/Edição de clientes: formulário para incluir novos clientes ou editar clientes existentes, com campos como nome, e-mail etc.

- Persistência local: utiliza o localStorage do navegador para gravar os dados dos clientes, permitindo que as informações sejam mantidas entre sessões.

- Interface Angular Material: todos os elementos da UI (tabelas, botões, formulários, diálogos, etc.) são feitos com componentes do Angular Material, seguindo as diretrizes do Material Design.

- Integração com a [Brasil API](https://brasilapi.com.br/) para listar UFs e Municípios de acordo com a UF escolhida.


## 🚧 Tecnologias e Pré-requisitos

- Angular (com Angular Material): framework JavaScript para a construção da aplicação e sua interface.

- Node.js (versão LTS) e npm: usados para instalar dependências do projeto.

- Angular CLI: ferramenta de linha de comando do Angular, necessária para servir o projeto localmente.


## 🔍 Prints das telas:

### Listagem de Clientes:

<img width="1902" height="712" alt="image" src="https://github.com/user-attachments/assets/2c42bb88-7a52-4b59-a40a-b91c4cdce682" />

### Cadastro de Clientes:

<img width="1918" height="718" alt="image" src="https://github.com/user-attachments/assets/812a8cbd-4d35-4753-ba81-782674af8ccc" />

### Integração com a Brasil API

![Gravando 2025-09-25 085639](https://github.com/user-attachments/assets/63368521-dc1d-48f5-96fe-50aaffdcfeac)


## 📌 Instalação e Execução

Para rodar o projeto localmente, siga estes passos:

1. Clone este repositório:

```cli
git clone https://github.com/Angelowh/Crud-Angular-Material.git
```


2. Entre na pasta do projeto:

```cli
cd Crud-Angular-Material
```


3. Instale as dependências:

```cli
npm install
```


4. Inicie o servidor de desenvolvimento:

```cli
ng serve -o
```

O comando ng serve -o “compila e serve a aplicação”, atualizando-a automaticamente a cada alteração. O comando também abre o navegador automáticamente ao concluir a compilação.

