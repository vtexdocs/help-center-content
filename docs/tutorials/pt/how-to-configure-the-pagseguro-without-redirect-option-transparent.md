---
title: 'Configurar o PagSeguro sem redirect (transparente)'
id: tutorials_449
status: PUBLISHED
createdAt: 2017-04-27T22:04:37.656Z
updatedAt: 2023-03-29T01:24:00.848Z
publishedAt: 2023-03-29T01:24:00.848Z
firstPublishedAt: 2017-04-27T23:03:25.912Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: como-configurar-o-pagseguro-sem-redirect-transparente
locale: pt
legacySlug: como-configurar-o-pagseguro-sem-redirect-transparente
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

_As configurações documentadas neste artigo são realizadas em um ambiente fora da VTEX, portanto, podem ser descontinuadas sem prévio aviso._

Se você possui uma conta no PagSeguro e já utiliza a opção com redirect em sua loja, é possível habilitar a opção sem o redirect no Pagamentos. Isso significa que, na finalização de compra, o cliente não mais sairá de seu site para realizar o pagamento, mesmo transacionando pela PagSeguro. Isso ocorrerá de forma transparente.

Essa opção está disponível como um novo conector na opção **Afiliações de Gateways**.

Atenção: Caso o lojista tenha garantia de chargeback, é necessário configurar o antifraude do PagSeguro. Este processo exige uma etapa de configuração no Google Tag Manager. Para mais detalhes de como realizar essa ação, confira o [artigo na página do PagSeguro](https://dev.pagseguro.uol.com.br/v2/docs/configurando-device-fingerprint "artigo na página do PagSeguro").

Para habilitá-la, confira o passo a passo a seguir:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
4. Clique em __Afiliações de Gateways__ e depois em __"+"__.
5. Clique a afiliação __PagSeguroV2__.
6. Salve a __afiliação__.
7. Retorne para o __painel__ de afiliações.
8. Selecione a afiliação __PagSeguroV2__ recém-criada.
9. Clique em __Autorizar__.
10. Selecione e envie a __regra desejada__.
11. Clique em __Entre com seu email e senha__.
12. Entre na __conta__ com seu e-mail e senha PagSeguro.
13. Autorize a __aplicação__.
14. Clique em __Salvar__.

## Configurar condição de pagamento

Após configurar a afiliação PagSeguro sem redirect (transparente), será necessário vincular um meio de pagamento a esta afiliação, conforme descrito em nosso tutorial [Configurar condições de pagamento](/pt/tutorial/condicoes-de-pagamento/).

É importante que __o valor dos juros seja igual__ ao configurado no ambiente do PagSeguro e que a configuração da cobrança seja __Fim do período__.
