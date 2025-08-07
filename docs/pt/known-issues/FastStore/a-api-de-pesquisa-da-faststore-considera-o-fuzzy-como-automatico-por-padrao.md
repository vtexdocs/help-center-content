---
title: "A API de pesquisa da Faststore considera o fuzzy como automático por padrão"
id: 5cfq9MV5QrygIaqJXqbXwZ
status: PUBLISHED
createdAt: 2024-11-11T18:37:39.992Z
updatedAt: 2024-12-02T16:40:08.053Z
publishedAt: 2024-12-02T16:40:08.053Z
firstPublishedAt: 2024-11-11T20:20:29.842Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: a-api-de-pesquisa-da-faststore-considera-o-fuzzy-como-automatico-por-padrao
locale: pt
kiStatus: Fixed
internalReference: 1133355
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


No pacote @fatstore/api, para o resolvedor da Pesquisa Inteligente, estamos considerando o fuzzy como automático por padrão quando deveria ser 0. Isso está fazendo com que o comportamento do fuzzy seja aplicado, causando uma "falsa correspondência incorreta" nos resultados da pesquisa quando realmente temos uma correspondência exata com o termo pesquisado, mas exibimos mais resultados independentemente disso

## Simulação



## Workaround



