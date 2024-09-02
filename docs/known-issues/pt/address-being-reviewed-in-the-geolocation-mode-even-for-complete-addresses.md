---
title: 'Endereço sendo revisto no modo de geolocalização mesmo para endereços completos'
id: 6eHvTDvNlIiBGmlUJAAsNU
status: PUBLISHED
createdAt: 2022-08-11T18:40:54.009Z
updatedAt: 2022-11-25T21:50:49.555Z
publishedAt: 2022-11-25T21:50:49.555Z
firstPublishedAt: 2022-08-11T18:40:54.667Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: endereco-sendo-revisto-no-modo-de-geolocalizacao-mesmo-para-enderecos-completos
locale: pt
kiStatus: Backlog
internalReference: 618724
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O botão "calculate shipping", usado para validação de endereço no modo de geolocalização (endereço inserido via Google Maps), está sendo mostrado mesmo para endereços completos. Ele deve ser mostrado apenas para endereços editados - devido a informações alteradas ou endereços incompletos no primeiro momento - para garantir que eles sejam válidos, mas não para endereços completos.



## Simulação


Em uma loja que esteja usando o modo de geolocalização, inserir um endereço. Certifique-se de ser um endereço completo que devolva a rua, bairro e, especialmente, o número. O botão "calcular envio" não deve ser mostrado.

Isso pode não acontecer em todos os países.



## Workaround


N/A

