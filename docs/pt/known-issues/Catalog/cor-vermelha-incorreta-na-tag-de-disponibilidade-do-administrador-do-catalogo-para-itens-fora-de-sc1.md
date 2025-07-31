---
title: "Cor vermelha incorreta na tag de disponibilidade do administrador do catálogo para itens fora de sc=1"
id: 16UZBv5zFB2pwSm5WMritS
status: PUBLISHED
createdAt: 2025-04-16T21:43:49.877Z
updatedAt: 2025-04-16T21:43:50.461Z
publishedAt: 2025-04-16T21:43:50.461Z
firstPublishedAt: 2025-04-16T21:43:50.461Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: cor-vermelha-incorreta-na-tag-de-disponibilidade-do-administrador-do-catalogo-para-itens-fora-de-sc1
locale: pt
kiStatus: Backlog
internalReference: 1212652
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, a exibição da verificação de disponibilidade no administrador do catálogo tem 3 tipos diferentes de cores para sinalizar a disponibilidade de um item:

Verde = ativo e disponível para compra
Vermelho = ativo, mas indisponível para compra
Em branco = inativo

No entanto, o status Vermelho considera apenas a disponibilidade para o canal de vendas padrão da loja (geralmente sc=1). Portanto, se um item estiver disponível para outros canais de vendas, mas não para o padrão, ele ainda deverá exibir uma tag verde, mas será exibido como vermelho.

## Simulação


1 - Em uma loja com vários canais de vendas, crie um produto com disponibilidade para um canal de vendas diferente de sc=1
2 - Verifique sua tag visual de disponibilidade no catálogo, aquela que pode ser vista na listagem do catálogo

 ![](https://vtexhelp.zendesk.com/attachments/token/OpqtMAd4kvj5EW4HUxlAdrBo0/?name=image.png)

3 - Mesmo com o item disponível para outros canais de vendas, como sc=2, a tag só ficará verde se estiver ativa e disponível para sc=1

## Workaround


-





