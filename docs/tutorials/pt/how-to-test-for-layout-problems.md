---
title: Realizar um teste para verificar problemas de layout
id: tutorials_545
status: PUBLISHED
createdAt: 2017-04-27T22:01:40.228Z
updatedAt: 2023-03-29T13:52:48.907Z
publishedAt: 2023-03-29T13:52:48.907Z
firstPublishedAt: 2017-04-27T23:03:38.289Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5S2MYtrgEoSGaGMqsICaEC
slug: como-realizar-um-teste-para-verificar-problemas-de-layout
legacySlug: como-realizar-um-teste-para-verificar-problemas-de-layout
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal Legado.
</div>

Quando nos deparamos com cenários onde há algum comportamento estranho no site, há alguns procedimentos que possamos fazer para sanar de onde está vindo a dúvida.

O primeiro teste é desligar o JS no tools, caso tenha duvidas de como fazer [clique aqui e saiba como desabilitá-lo.](/pt/faq/como-identificar-erros-de-layout-ocasionados-por-arquivos-javascript "clique aqui e saiba como desabilitá-lo.")

Caso mesmo desabilitando o tools ainda não tenha certeza se é algum JS colocado na página, tente pegar um template praticamente limpo e faça o teste usando o LID do template cadastrado.

1. Para fazer isso, no Admin VTEX, acesse **Storefront > Layout > CMS** e crie um template novo em **HTML Templates** e adicione o somente com as informações que precisar testar.

2. Em seguida, acesse a área de layouts e vá até a pasta da página que você quer testar e clique em **Novo Layout**.

3. Adicione o nome do layout e selecione o template que você criou anteriormente.

4. Acesse o site e vá até a pagina que você está testando e depois, coloque a Lid do layout que você criou como uma QueryString (com ? ou &).
