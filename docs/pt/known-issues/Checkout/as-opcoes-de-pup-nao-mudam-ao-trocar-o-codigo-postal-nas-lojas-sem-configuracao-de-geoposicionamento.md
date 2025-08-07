---
title: "As opções de PUP não mudam ao trocar o código postal nas lojas sem configuração de geoposicionamento"
id: 6adZlmhb88zZsqifmWubO1
status: PUBLISHED
createdAt: 2022-08-30T20:06:15.411Z
updatedAt: 2022-11-25T21:50:10.149Z
publishedAt: 2022-11-25T21:50:10.149Z
firstPublishedAt: 2022-08-30T20:06:15.864Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: as-opcoes-de-pup-nao-mudam-ao-trocar-o-codigo-postal-nas-lojas-sem-configuracao-de-geoposicionamento
locale: pt
kiStatus: Fixed
internalReference: 648604
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Quando a loja não utiliza uma configuração de geolocalização e o usuário muda o código postal no componente PUP, ele envia apenas o código postal para nosso backend que não afeta realmente a distância, pois este valor é calculado com base nas geo Coordenadas, assim, mesmo que o código postal seja diferente, ele mantém a mesma distância de coleta calculada anteriormente.

Além disso, se o usuário escolhe o PUP e muda o código postal, além de não calcular a nova distância como mencionado, também permite passar códigos postais que não eram aceitos anteriormente.



## Simulação



Vá a uma loja sem uma configuração de geolocalização e digite um código postal válido no PUP. Depois disso, mude o código postal para um novo, para que você possa ver que a distância não muda na UI.



## Workaround



Nenhuma solução.

