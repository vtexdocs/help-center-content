---
title: 'Realizar um teste para verificar problemas de layout'
id: tutorials_545
status: PUBLISHED
createdAt: 2017-04-27T22:01:40.228Z
updatedAt: 2024-09-24T14:38:10.328Z
publishedAt: 2024-09-24T14:38:10.328Z
firstPublishedAt: 2017-04-27T23:03:38.289Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5S2MYtrgEoSGaGMqsICaEC
slugEN: how-to-test-for-layout-problems
legacySlug: como-realizar-um-teste-para-verificar-problemas-de-layout
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ Tutorial válido apenas para lojas CMS Portal (Legado).

Quando nos deparamos com cenários onde há algum comportamento estranho no site, há alguns procedimentos que possamos fazer para sanar de onde está vindo a dúvida.

O primeiro teste é desligar o JS no tools, caso tenha duvidas de como fazer [clique aqui e saiba como desabilitá-lo.](/pt/tutorial/como-identificar-erros-de-layout-ocasionados-por-arquivos-javascript--frequentlyAskedQuestions_588)

Caso mesmo desabilitando o tools ainda não tenha certeza se é algum JS colocado na página, tente pegar um template praticamente limpo e faça o teste usando o LID do template cadastrado.

1. Para fazer isso, no Admin VTEX, acesse **Storefront > Layout > CMS** e crie um template novo em **HTML Templates** e adicione o somente com as informações que precisar testar.

2. Em seguida, acesse a área de layouts e vá até a pasta da página que você quer testar e clique em **Novo Layout**.

3. Adicione o nome do layout e selecione o template que você criou anteriormente.

4. Acesse o site e vá até a pagina que você está testando e depois, coloque a Lid do layout que você criou como uma QueryString (com ? ou &).
