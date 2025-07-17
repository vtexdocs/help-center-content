---
title: "Caracteres específicos removidos do URL de pesquisa filtrado"
id: 3Kh69v05JvswhmIwAUdEhl
status: PUBLISHED
createdAt: 2025-03-18T21:51:08.329Z
updatedAt: 2025-03-18T21:51:09.350Z
publishedAt: 2025-03-18T21:51:09.350Z
firstPublishedAt: 2025-03-18T21:51:09.350Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: caracteres-especificos-removidos-do-url-de-pesquisa-filtrado
locale: pt
kiStatus: Backlog
internalReference: 1196131
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Alguns caracteres especiais, como a vírgula, podem ser removidos do URL do filtro. Isso pode gerar uma colisão entre produtos com valores diferentes.

## Simulação



Dois produtos diferentes com um atributo Size e valores "2,5" e "25" usarão o mesmo URL: "/size/25".

Embora você possa ver os dois valores de filtro a serem selecionados na loja, eles resultarão nos mesmos produto

## Workaround


N/A




