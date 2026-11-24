---
title: 'Por que não consigo inserir selo da promoção no marketplace?'
excerpt: "O selo de promoção é uma flag de CSS/HTML da loja VTEX. O marketplace recebe só o preço com desconto, então o selo precisa ser configurado lá."
id: frequentlyAskedQuestions_702
status: PUBLISHED
createdAt: 2017-04-27T22:29:05.018Z
updatedAt: 2020-11-27T19:39:57.343Z
publishedAt: 2020-07-28T18:55:24.508Z
firstPublishedAt: 2017-04-27T23:02:33.692Z
contentType: frequentlyAskedQuestion
productTeam: Marketplace
author: authors_3
slugEN: why-am-i-unable-to-include-the-promotion-seal-on-the-marketplace
locale: pt
legacySlug: por-que-nao-consigo-inserir-selo-da-promocao-no-marketplace
---

O selo da promoção é uma flag que aparece no front-end da loja. Para que essa flag apareça, é necessário uma tag no HTML que é lido pelo CSS para a exibição.

Ou seja, essa configuração só é valida para a loja VTEX, pois, a configuração depende do front da loja e não da integração dos produtos e preços.

Em qualquer promoção, a informação repassada para o marketplace é o valor do produto já com o desconto das promoções cadastradas para ele.

Portanto, a maneira de configurar é diretamente pelo markpetlace, caso exista alguma regra de promoção com a exibição de selo.

### Artigos relacionados

[Configurar promoção para marketplace](/pt/docs/tutorials/configurar-promocao-para-marketplace)
