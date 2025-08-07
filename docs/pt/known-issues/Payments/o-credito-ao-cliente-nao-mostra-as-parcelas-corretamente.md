---
title: "O crédito ao cliente não mostra as parcelas corretamente"
id: 5qhiwp1EhfJepX6ZFqDsiG
status: PUBLISHED
createdAt: 2022-03-28T02:52:15.222Z
updatedAt: 2022-11-25T22:45:55.160Z
publishedAt: 2022-11-25T22:45:55.160Z
firstPublishedAt: 2022-03-28T02:52:15.598Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: o-credito-ao-cliente-nao-mostra-as-parcelas-corretamente
locale: pt
kiStatus: Backlog
internalReference: 501730
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

O crédito do cliente não exibe os diferentes valores entre regras com o mesmo número de parcelas e períodos diferentes. Para entender melhor este problema, devemos observar a porta de entrada e o comportamento do crédito do cliente:

**Gateway***
Quando o portal tem mais de uma regra com o mesmo número de parcelas, ele exibe apenas a regra mais vantajosa em termos de valor no checkout.
Ex: **Regra A*** tem 2x prestações e 1% de juros e **regra B*** tem 2x prestações e 2% de juros. A porta de entrada só envia **regra A*** para a caixa porque **regra B*** ofereceria o mesmo benefício por um preço mais alto.
Com este exemplo entendemos que o gateway envia apenas uma opção de pagamento de 2x (uma opção em 3x, uma em 4x...) entre todas as opções registradas.

**Crédito ao cliente***
Cabe ao crédito do cliente criar as diversas opções de pagamento de acordo com os períodos configurados.
Exemplo: **regra C**-> 2x para pagar dentro de 15 e 30 dias e **regra D**-> 2x para pagar dentro de 30 e 45 dias e 2% de juros.
Entretanto, o Crédito ao Cliente não traz os preços com juros porque o preço foi trazido pela porta de entrada e a porta de entrada ignorou os valores com juros "desvantajosos" anteriormente.
O resultado destes dois comportamentos são várias regras com parcelas iguais, períodos diferentes e valores iguais (os juros estabelecidos na regra são ignorados).

É importante dizer que o comportamento da porta de entrada é esperado. Mas o Crédito ao Cliente deve ser resiliente para trazer o interesse mesmo sabendo que a porta de entrada ignoraria o interesse de antemão.

## Simulação


1. Criar duas condições de pagamento de Crédito ao Cliente com o mesmo número de parcelas e períodos diferentes.
2. Em seguida, configurar os juros para um deles.
3. Criar uma conta de Crédito ao Cliente com o crédito disponível.
4. Vá ao checkout e observe as duas opções com o mesmo valor, sem juros.


## Workaround


N/A

