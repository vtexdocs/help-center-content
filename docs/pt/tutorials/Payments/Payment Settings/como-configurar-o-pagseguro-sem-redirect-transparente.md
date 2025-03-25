---
title: 'Configurar o PagSeguro sem redirect (transparente)'
id: tutorials_449
status: ARCHIVED
createdAt: 2017-04-27T22:04:37.656Z
updatedAt: 2024-07-24T12:05:55.438Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:25.912Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-configure-the-pagseguro-without-redirect-option-transparent
locale: pt
legacySlug: como-configurar-o-pagseguro-sem-redirect-transparente
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

_As configurações documentadas neste artigo são realizadas em um ambiente fora da VTEX, portanto, podem ser descontinuadas sem prévio aviso._

Se você possui uma conta no PagSeguro e já utiliza a opção com redirect em sua loja, é possível habilitar a opção sem o redirect no Pagamentos. Isso significa que, na finalização de compra, o cliente não mais sairá de seu site para realizar o pagamento, mesmo transacionando pela PagSeguro. Isso ocorrerá de forma transparente.

Atenção: Caso o lojista tenha garantia de chargeback, é necessário configurar o antifraude do PagSeguro. Este processo exige uma etapa de configuração no Google Tag Manager. Para mais detalhes de como realizar essa ação, confira o [artigo na página do PagSeguro](https://dev.pagseguro.uol.com.br/v2/docs/configurando-device-fingerprint "artigo na página do PagSeguro").

Para habilitá-la, confira o passo a passo a seguir:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __PagSeguroV2__ na barra de busca e clique sobre o nome do provedor.
4. Clique em __Authorize via OAuth__.
5. Selecione e envie a __regra desejada__.
6. Clique em __Entre com seu email e senha__.
7. Entre na __conta__ com seu e-mail e senha PagSeguro.
8. Autorize a __aplicação__.
9. Clique em `Salvar`.

## Configurar condição de pagamento

Após configurar a afiliação PagSeguro sem redirect (transparente), será necessário vincular um meio de pagamento a esta afiliação, conforme descrito em nosso tutorial [Configurar condições de pagamento](/pt/tutorial/condicoes-de-pagamento/).

É importante que __o valor dos juros seja igual__ ao configurado no ambiente do PagSeguro e que a configuração da cobrança seja __Fim do período__.
