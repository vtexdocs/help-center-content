---
title: 'Qual estilo de CSS deve ser usado nos e-mails?'
id: frequentlyAskedQuestions_5390
status: PUBLISHED
createdAt: 2019-01-24T20:46:02.325Z
updatedAt: 2019-12-31T15:29:01.217Z
publishedAt: 2019-12-31T15:29:01.217Z
firstPublishedAt: 2019-01-24T22:16:01.974Z
contentType: tutorial
productTeam: Post-purchase
author: authors_3
slug: como-inserir-css-num-e-mail
locale: pt
legacySlug: como-inserir-css-num-e-mail
subcategory: 4D5LrWwlHGmOWMomOaaGee
---

A seguinte regra vale para qualquer tipo de e-mail, seja e-mail marketing, template do Message Center ou Master Data: use sempre **CSS inline**.

Isto porque diversos servidores de e-mail ignoram código CSS no head, assim como arquivos de estilo externos ao HTML. Portanto, para que seu código seja lido e renderizado, é preciso inserir o CSS no **body** do HTML.

__Dica!__ Sempre que quiser esconder alguma característica de um elemento que o controle da VTEX traz automaticamente, altere a cor desse elemento para a cor de fundo de seu e-mail. Ex.: No carrinho abandonado, a prateleira de itens é montada em uma estrutura `ul` &gt; `li`. Essa estrutura exibe pontos (•) no HTML. Para esconder esses pontos, basta alterar essa propriedade.

Antes de chamar a prateleira, torne tudo branco (ou a cor de fundo de seu e-mail). No template de prateleira, volte a aplicar a cor (preto ou qualquer outra cor de seu texto) no conteúdo. Dessa forma, a `ul` e as `li` serão brancas (invisíveis), mas dentro delas, os textos serão aplicados com cor (visíveis).
