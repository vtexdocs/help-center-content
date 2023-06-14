---
title: 'Usando o campo de observação no checkout'
id: tutorials_2726
status: DRAFT
createdAt: 2017-04-27T21:52:49.197Z
updatedAt: 2022-07-21T20:19:44.774Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:55.184Z
contentType: tutorial
productTeam: Shopping
author: authors_3
slug: usando-o-campo-de-observacao-no-checkout
legacySlug: usando-o-campo-de-observacao-no-checkout
subcategory: 8AGXmtpbTqUE2KQu0Swwk
---

É possível ativar um campo de observação na página de checkout, o texto preenchido neste campo será registrado no pedido e pode ser utilizado posteriormente pelo lojista. 

Este campo virá, por padrão, com sua exibição desabilitada. Para habilitá-lo é necessário inserir a seguinte regra no CSS:

`.note { display: block; }`

O conteúdo deste campo estará disponível via API, ao se obter o pedido, no campo **openTextField**.

E, além disso, estará no JSON do Message Center, no campo **openTextField**. Ou seja, esse campo pode ser usado no template dos e-mails da loja.

