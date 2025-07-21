---
title: "O resultado da pesquisa pode não exibir a faceta sellerName em lojas multilíngues em locais adicionais"
id: 1KD5Q3GTtx379yKHUFo38O
status: PUBLISHED
createdAt: 2025-02-25T23:17:55.030Z
updatedAt: 2025-06-06T18:18:44.623Z
publishedAt: 2025-06-06T18:18:44.623Z
firstPublishedAt: 2025-02-25T23:17:55.741Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: o-resultado-da-pesquisa-pode-nao-exibir-a-faceta-sellername-em-lojas-multilingues-em-locais-adicionais
locale: pt
kiStatus: Backlog
internalReference: 1186137
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A pesquisa de facetas na Intelligent Search pode não exibir a faceta `sellerName` quando a localidade é uma localidade adicional.

Esse problema ocorre ao pesquisar facetas por meio do GraphQL e da API.

## Simulação



As etapas para simular o problema conhecido são:

1. Na ferramenta Postman, ou em outra ferramenta de desenvolvedor, crie uma solicitação de API do ponto de extremidade Obter lista das facetas possíveis para uma determinada consulta.
2. Na solicitação de API, adicione uma localidade que não seja a localidade padrão ao parâmetro `locale` da string de consulta.
3. Execute o ponto de extremidade.

O resultado da pesquisa não retorna a faceta `sellerName`

## Workaround


N/A




