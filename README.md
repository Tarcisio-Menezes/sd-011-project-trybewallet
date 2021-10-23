# Boas vindas ao repositório do projeto Trybe Wallet!

Nesta aplicação é possível registrar e converter despesas, em diferentes taxas de câmbio, para o real. De forma simples e organizada.
O projeto Trye-Wallet foi desenvolvido de forma avaliativa durante o curso de desenvolvimento web da Trybe.

# Tecnologias

  * ReactJS

  * Store no Redux em aplicações React

  * Reducers no Redux em aplicações React

  * Actions no Redux em aplicações React

  * Dispatchers no Redux em aplicações React

  * Conectar Redux aos componentes React

  * Actions assíncronas.

---

## Para executar a aplicação:

1. Clone o repositório
  * Entre na pasta do repositório que você acabou de clonar

2. Instale as dependências e inicialize a aplicação
  * Instale as dependências:
    * `npm install`
  * Inicialize a aplicação:
    * `npm start` (uma nova página deve abrir no seu navegador)

## Como usar a aplicação:

* A aplicação vai iniciar na página de login.
* Digite um e-mail válido e uma senha com mais de 6 caracteres para habilitar o botão `entrar`.
* Aperte o botão `entrar` para ir para acessar a wallet.
* Na parte superior, voCê identificará o seu e-mail e o total de suas despesas registradas, em real.
* Para registrar uma despesa digite um valor, adicione uma descrição, moeda utilizada, método de pagamento e uma tag.
* O botão `Adicionar despesa` deverá ser habilitado.
* Clique em `Adicionar despesa` para adicionar o registro, uma linha deverá ser adicionada a tabela abaixo.
* Você pode excluir o registro clicando em `Excluir` na linha do próprio registro.
* O `Total` na parte superior atualiza automáticamente.
* A aplicação trabalha com o . (ponto) como separador de milhar.

## Documentação da API de Cotações de Moedas

A aplicação consome os dados da API do _awesomeapi API de Cotações_ para realizar a busca de câmbio de moedas.

- https://economia.awesomeapi.com.br/json/all

Se você quiser mais informações sobre a API, veja a [documentação](https://docs.awesomeapi.com.br/api-de-moedas).

---
