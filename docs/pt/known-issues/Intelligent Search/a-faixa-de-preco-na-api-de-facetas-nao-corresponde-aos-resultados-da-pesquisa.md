---
title: "A faixa de preço na API de facetas não corresponde aos resultados da pesquisa"
id: 2X9Z21u9kJh55uWu6o6sP3
status: PUBLISHED
createdAt: 2024-03-08T22:36:43.149Z
updatedAt: 2024-03-08T22:36:44.086Z
publishedAt: 2024-03-08T22:36:44.086Z
firstPublishedAt: 2024-03-08T22:36:44.086Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: a-faixa-de-preco-na-api-de-facetas-nao-corresponde-aos-resultados-da-pesquisa
locale: pt
kiStatus: Backlog
internalReference: 997121
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As faixas de preço da API de facetas ("Obter lista das facetas possíveis para uma determinada consulta") podem variar entre o retorno de baldes de valores "de" e "para" com preços arredondados e os preços mínimo e máximo entre os resultados da pesquisa.

Embora os preços arredondados gerem uma experiência de usuário melhor para apresentar uma lista de faixas de preço ao comprador, não é desejável usá-los como um "controle deslizante" de preço.

Além disso, como os preços mínimo e máximo são aplicados em um segundo momento, as faixas de preço como "baldes" em uma pesquisa que já aplica um filtro de preço ficam fora dos limites em relação aos preços especificados.

## Simulação


Usando a API, faça uma solicitação com e sem um filtro de preço como "/price/100:500" e observe as faixas de preço retornadas (de/para) no objeto "values" para a faceta com o tipo "PRICERANGE"

## Workaround


N/A

