---
title: 'O seletor do método de entrega desaparece no fluxo específico quando só há entrega programada'
id: 7I24nVw5W7YUuoTvgH8W5k
status: PUBLISHED
createdAt: 2022-08-12T18:07:34.922Z
updatedAt: 2022-11-25T21:49:41.399Z
publishedAt: 2022-11-25T21:49:41.399Z
firstPublishedAt: 2022-08-12T18:07:35.420Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-seletor-do-metodo-de-entrega-desaparece-no-fluxo-especifico-quando-so-ha-entrega-programada
kiStatus: Fixed
internalReference: 296786
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O seletor de data/hora para entrega programada desaparece quando o usuário muda de "pegar" para "receber", este comportamento ocorre independentemente do uso do recurso de envio enxuto.

Aparentemente, o fator comum é que as únicas opções "receber" são programadas, e as opções "retirar" não são programadas, portanto, este problema pode não acontecer em outros cenários.



## Simulação


1- Tenha um item cuja entrega pode ser feita de forma programada e também tem a opção de pick in store.
2- Inserir este item no carrinho
3- Avançar para a etapa de entrega
4- Insira um código postal que tenha disponibilidade de entrega.
5- Na área de expedição, escolha a opção de "remover" no toogle
6- Agora escolha a opção "entrega" no toogle;
7- Neste momento a IU não exibirá mais o botão "escolher data e hora de entrega".



## Workaround


N/A

