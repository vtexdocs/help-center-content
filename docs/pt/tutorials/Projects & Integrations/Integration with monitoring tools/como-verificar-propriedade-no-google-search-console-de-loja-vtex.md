---
title: 'Verificar propriedade no Google Search Console para loja VTEX'
id: frequentlyAskedQuestions_594
status: PUBLISHED
createdAt: 2019-01-24T20:45:55.830Z
updatedAt: 2024-12-20T00:27:16.190Z
publishedAt: 2024-12-20T00:27:16.190Z
firstPublishedAt: 2019-01-24T22:00:50.515Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-check-the-ownership-of-vtex-store-on-google-search-console
locale: pt
legacySlug: como-verificar-propriedade-no-google-search-console-de-loja-vtex
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

Para acessar os dados do [Google Search Console](https://support.google.com/webmasters/answer/9128668?hl=en&ref_topic=9128571&sjid=1026872664762099007-SA), é necessário verificar a propriedade da sua loja, ou seja, informar ao Google o endereço do site da sua loja, seja o domínio (`mystore`) ou a URL (`https://mystore.com`). Com isso, você poderá monitorar o desempenho da indexação no Google.

Para habilitar o acesso, confira as instruções neste tutorial.

## Instruções

1. Acesse o [Google Search Console](https://search.google.com/search-console) com sua conta Google.
2. Para adicionar a propriedade da sua loja, siga as instruções em [Adicionar uma propriedade do site ao Search Console](https://support.google.com/webmasters/answer/34592?hl=pt).
3. Após adicionar a propriedade, faça a validação da propriedade clicando em **Tag de HTML** da seção **Outros métodos de validação**.
4. Copie a metatag do passo 1.
5. Escolha o método de instalação de acordo com a tecnologia da sua loja:

- [Store Framework e FastStore](#store-framework-e-faststore)
- [Legacy CMS Portal](#legacy-cms-portal)

### Store Framework e FastStore

1. No Admin VTEX, acesse **Loja de aplicativos**.
2. Procure pelo app **Google Search Console** e clique `INSTALAR`. Você será redirecionado para página do app na App Store.
3. Clique `OBTER APP`.
4. Digite o nome da sua conta e clique `CONFIRMAR`. Você será redirecionado para página de checkout do app.

<div class="alert alert-info" role="alert"> 
O app Google Search Console é gratuito.
</div>

5. Clique `FAZER PEDIDO`.
6. Clique `ACESSE A PÁGINA DE INSTALAÇÃO` e você será redirecionado para página do app no Admin.
7. Clique `INSTALAR`. Uma mensagem de sucesso para a instalação aparecerá e você será redirecionado para página de configuração do app no Admin.

![Google Search Console PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Projects%20&%20Integrations/Integration%20with%20monitoring%20tools/como-verificar-propriedade-no-google-search-console-de-loja-vtex_1.png)

8. No campo **Content**, adicione apenas o conteúdo após a flag `content` da metatag que copiou do Google Search Console [anteriormente](#instrucoes). Por exemplo, se a sua metatag for o seguinte `<meta name="google-site-verification" content="{contentID}" />`, adicione no campo **Content** apenas o que está dentro de `{contentID}`.
9. Clique `SALVAR`.
10. Volte no  [Google Search Console](https://search.google.com/search-console) e clique `VALIDAR`. A verificação dará acesso aos dados de indexação da loja.

### Legacy CMS Portal

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Acesse a pasta `CMS > HTML Templates` e clique no arquivo `Home`.
3. Adicione a metatag que copiou [anteriormente](#instrucoes) no `<head>` do template de `Home` da sua loja.
4. Volte no [Google Search Console](https://search.google.com/search-console) e clique `VALIDAR`. A verificação dará acesso aos dados de indexação da loja.

