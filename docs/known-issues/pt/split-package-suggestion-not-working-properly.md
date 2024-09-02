---
title: 'Sugestão de pacote dividido que não funciona corretamente'
id: 1amgn9hWwc6i2nLx1U3wDC
status: DRAFT
createdAt: 2022-09-13T02:01:52.651Z
updatedAt: 2022-12-21T15:01:43.876Z
publishedAt: 
firstPublishedAt: 2022-09-13T02:01:53.252Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: sugestao-de-pacote-dividido-que-nao-funciona-corretamente
locale: pt
kiStatus: Backlog
internalReference: 656810
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A sugestão do pacote dividido não está funcionando corretamente, quando você termina a compra a IU sugere os pacotes divididos em casos de docas diferentes ou tamanhos diferentes e estratégias de embarque diferentes.
Atualmente a IU está apenas dividindo os pacotes de caixas com diferentes (Métodos de Embarque), mesmo no logistcsinfo tem diferentes canais de entrega e diferentes docas.



## Simulação


Faça um pedido com mais de um item, e estes itens precisam de cada um um canal de entrega diferente, mas com o mesmo método de envio. A IU não irá sugerir a divisão de pacotes porque a "selectedSla" é como a variável mais significativa, ignorando as dockids para exame.



## Workaround


A maneira de evitar isso é mudar o método delírio das estratégias de embarque.

PS.: Esta não é uma solução adequada, pois inclui comportamentos diferentes na saída da caixa.

