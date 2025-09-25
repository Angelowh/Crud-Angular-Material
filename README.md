# Crud-Angular-Material

Projeto simples desenvolvido em Angular, criado não apenas para demonstrar implementação de Formulários, mas também como forma de **estudo prático** sobre como aplicar **estética** e **personalização visual** com Angular Material.


## Status do Projeto:

Finalizado ✅


## 🛠️ Funcionalidades Principais

- Listagem de clientes: tabela dinâmica com pesquisa e ordenação para visualizar todos os clientes cadastrados.

- Cadastro/Edição de clientes: formulário para incluir novos clientes ou editar clientes existentes, com campos como nome, e-mail etc.

- Persistência local: utiliza o localStorage do navegador para gravar os dados dos clientes, permitindo que as informações sejam mantidas entre sessões.

- Interface Angular Material: todos os elementos da UI (tabelas, botões, formulários, diálogos, etc.) são feitos com componentes do Angular Material, seguindo as diretrizes do Material Design.

- Integração com a Brasil API para listar UFs e Municípios de acordo com a UF escolhida.


## Tecnologias e Pré-requisitos

- Angular (com Angular Material): framework JavaScript para a construção da aplicação e sua interface.

- Node.js (versão LTS) e npm: usados para instalar dependências do projeto.

- Angular CLI: ferramenta de linha de comando do Angular, necessária para servir o projeto localmente.


## Instalação e Execução

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

