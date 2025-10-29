---
title: 'Como remover a mensagem de erro "Request headers must contain only ASCII characters"'
id: 19psKZvLXrBqqK1bPaTIHG
status: PUBLISHED
createdAt: 2024-07-25T16:54:41.663Z
updatedAt: 2025-08-14T22:48:13.680Z
publishedAt: 2025-08-14T22:48:13.680Z
firstPublishedAt: 2024-07-25T21:21:03.197Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: removing-error-message-request-headers-must-only-contain-ascii
legacySlug: removendo-mensagem-de-erro-request-headers-must-contain-only-ascii
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Request headers
  - UTM
  - Javascript customizado
---

A mensagem "__Request headers must contain only ASCII characters__" pode ser exibida no navegador do usuário quando ele está navegando na loja e tenta acessar uma nova página ou realizar uma ação no site, por exemplo, adicionando itens no carrinho de compras.

Este cenário ocorre se a página ou funcionalidade solicitada contém um cookie com caracteres especiais (não-ASCII).

![ascii_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/operações-da-loja/removendo-mensagem-de-erro-request-headers-must-contain-only-ascii_1.png)

Segundo as normas do [IETF](https://www.ietf.org/) (Internet Engineering Task Force), instituição responsável por documentar os padrões utilizados na internet, cookies não devem conter caracteres especiais (não-ASCII). Para mais informações sobre os caracteres aceitos em cookies e headers, acesse [IETF - Request for Comments 7230 - Section 3.2.6 - Field Value Components](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6). 

## Soluções

Para remover a mensagem de erro e permitir que a página ou funcionalidade possa ser acessada novamente, é necessário realizar as seguintes ações:

- [Identificar cookie com caracteres especiais](#identificando-cookies-com-caracteres-especiais)
- [Desabilitar cookie com caracteres especiais](#desabilitando-cookies-com-caracteres-especiais)
- [Criar script de limpeza do cache](#criando-script-para-remocao-de-cookies)

### Identificando cookies com caracteres especiais

Na página em que a mensagem "__Request headers must contain only ASCII characters__" foi exibida, siga os passos abaixo para identificar qual cookie contém caracteres especiais:

1. Acesse o [DevTools](/pt/tutorial/products-and-skus-beta--2ig7TmROlirWirZjFWZ3By) em seu navegador pressionando a tecla **F12** ou clicando com o botão direito, e escolhendo a opção **Inspecionar**.

2. Na barra superior da tela, acesse a aba **Rede** e ordene as requisições clicando em **Status**. A informação **400** no status indica que uma requisição não foi processada corretamente e, dentre os erros possíveis, pode haver cookies incorretos.  

![ascii 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/operações-da-loja/removendo-mensagem-de-erro-request-headers-must-contain-only-ascii_2.png)    

3. Clique sobre uma requisição e depois na aba **Visualização** para identificar se o erro encontrado é referente à mensagem "**Request headers must contain only ASCII characters**".

![ascii 3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/operações-da-loja/removendo-mensagem-de-erro-request-headers-must-contain-only-ascii_3.png)

4. Clique na aba **Cabeçalhos** e copie os dados do cookie.  

![ascii 4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/operações-da-loja/removendo-mensagem-de-erro-request-headers-must-contain-only-ascii_4.png)    

5. Acesse um [validador online de caracteres ASCII](https://pages.cs.wisc.edu/~markm/ascii.html) e insira a informação do cookie. Se um ou mais caracteres especiais forem identificados, os tipos e posições serão exibidas na parte inferior do validador de caracteres.     

![ascii 5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/operações-da-loja/removendo-mensagem-de-erro-request-headers-must-contain-only-ascii_5.png)  

6. Repita os passos 3 a 5 com todas as requisições com erro para identificar quais delas contêm cookies com caracteres especiais.      

### Desabilitando cookies com caracteres especiais

Uma vez identificados os cookies contendo caracteres especiais, é necessário verificar a sua origem para que sejam removidos da página. As fontes mais comuns de cookies incorretos são:

- [UTMs](/pt/tutorial/o-que-sao-as-utms-internas-utmi-cp-utmi-pc-e-utmi-p--5Pvo8ufYWs00AUeCCEY68a) criados em sua loja ou em campanhas de publicidade do Google, Facebook, entre outros, que possuam caracteres acentuados. Exemplo de UTM utilizado em data comemorativa: `www.site.com?utm_source=dia-das-mães`.
- Javascripts customizados, onde implementações de front-end utilizadas para armazenar dados ou outro tipo de função podem conter caracteres especiais.
- Scripts de clientes parceiros que criam cookies com caracteres especiais.

Assim que localizar a procedência do cookie, realize os procedimentos necessários para removê-lo da página ou solicite ao cliente parceiro que interrompa o envio do cookie para a sua loja.

### Criando script para remoção de cookies 

Ao remover o cookie com caracteres especiais, a página ou funcionalidade deve voltar ao normal e a mensagem "__Request headers must contain only ASCII characters__" não será mais exibida. Entretanto, esse cenário ocorrerá somente para novos usuários da página, ou seja, clientes que ainda não haviam acessado a página durante o tempo em que o cookie incorreto esteva habilitado.

Usuários que acessaram a página ou funcionalidade enquanto o cookie incorreto estava habilitado continuarão a ver a mensagem de erro *"Request headers must contain only ASCII characters"* em seu navegador. Isto ocorre porque o cookie foi armazenado no cache do navegador do usuário.

Para resolver este problema, e permitir que todos os usuários tenham acesso correto na loja, é necessário criar um script na página a ser executado no navegador do usuário (client-side) visando realizar a expiração do cookie incorreto.

O script deve configurar o cookie para expirar em uma data antiga (qualquer período anterior a criação do script). Veja um exemplo abaixo:

`document.cookie = "cookiename= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"`  

Se desejar, você também pode incluir no script as seguintes funções:
- Interceptar valores de cookies no momento do request da página
- Realizar a validação de caracteres ASCII nos cookies
- Expirar automaticamente os cookies contendo caracteres especiais
- Acionar o recarregamento da página por meio da função `window.location.reload()`  

> ⚠️ A remoção dos cookies via script não é uma solução definitiva. Conforme descrito na seção **Desabilitando cookies com caracteres especiais**, é necessário identificar a origem e interromper o processo de envio de cookies com caracteres especiais.  

