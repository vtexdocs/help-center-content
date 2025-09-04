---
title: 'Por que não aparece o "Avise-me"?'
id: frequentlyAskedQuestions_628
status: PUBLISHED
createdAt: 2017-04-27T22:31:23.053Z
updatedAt: 2019-12-31T14:24:27.768Z
publishedAt: 2019-12-31T14:24:27.768Z
firstPublishedAt: 2017-04-27T23:02:25.457Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_84
slugEN: why-is-let-me-know-not-showing
locale: pt
legacySlug: por-que-nao-aparece-o-avise-me
---

As configurações básicas para a exibição do **Avise-me** quando o produto está indisponível são:

- Módulo **CMS** > Configurações > Gerais > Marcar flag "Exibe Avise-me quando produto esgotar".
- Configuração do template - Uso do controle `vtex.cmc:BuyButton` no template de página.

Porém, existe um caso em que, mesmo com os itens acima configurados, o Avise-me não aparece, que é **quando o tipo de exibição da Categoria está selecionado como Lista de SKUs**.

![categoria-lista-de-skus PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/marketing-and-merchandising/por-que-nao-aparece-o-avise-me_1.png)

Neste caso, além das configurações padrão, é necessário o uso do controle `vtex.cmc:SkuSelection`, mesmo que não exista mais de um SKU por página.
Logo, quando a Categoria do produto desejado estiver setada para Lista de SKUs, como na imagem acima, é necessário que seja inserido o controle `vtex.cmc:SkuSelection` no template de página para que o avise-me seja exibido.
