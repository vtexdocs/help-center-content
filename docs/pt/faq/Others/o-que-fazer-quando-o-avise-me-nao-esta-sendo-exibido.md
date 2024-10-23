---
title: "O que fazer quando o 'Avise-me' não está sendo exibido"
id: oNb6JK1LPMOQwYsecKKCs
status: PUBLISHED
createdAt: 2019-01-24T20:30:45.175Z
updatedAt: 2022-04-04T16:36:16.943Z
publishedAt: 2022-04-04T16:36:16.943Z
firstPublishedAt: 2019-01-24T20:30:45.618Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: 5fYXkMJagMwcSAeMAsAuOI
slugEN: what-to-do-when-the-notify-me-option-is-not-displayed
locale: pt
legacySlug: 
---

Existe um caso em que, mesmo com o Avise-me [corretamente configurado](/pt/tutorial/configurar-o-avise-me), ele não aparece. É **quando o tipo de exibição da categoria está selecionado como Lista de SKUs**.

![categoria-lista-de-skus PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Others/o-que-fazer-quando-o-avise-me-nao-esta-sendo-exibido_1.png)

Neste caso, além das configurações padrão, é necessário o uso do controle `vtex.cmc:SkuSelection`, mesmo que não exista mais de um SKU por página.

Logo, quando a Categoria do produto desejado estiver setada para Lista de SKUs, como na imagem acima, é necessário que seja inserido o controle `vtex.cmc:SkuSelection` no template de página para que o *Avise-me* seja exibido.
