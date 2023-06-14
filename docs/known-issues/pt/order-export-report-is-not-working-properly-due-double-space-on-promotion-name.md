---
title: O Relatório de Exportação de Pedidos não está funcionando corretamente devido ao espaço duplo no nome da Promoção
id: 3dVPZEs544WyPDBNzTesWx
status: PUBLISHED
createdAt: 2023-04-06T20:22:47.489Z
updatedAt: 2023-04-06T20:22:48.141Z
publishedAt: 2023-04-06T20:22:48.141Z
firstPublishedAt: 2023-04-06T20:22:48.141Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: o-relatorio-de-exportacao-de-pedidos-nao-esta-funcionando-corretamente-devido-ao-espaco-duplo-no-nome-da-promocao
kiStatus: Backlog
internalReference: 786216
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Para promoção de pedidos, não é correto usar espaço doble ou caráter especial nos nomes, isto pode quebrar o filtro ou faltar algum pedido no relatório de exportação do pedido.
Nome na matriz "ratesAndBenefitsData".


##

## Simulação


Criar pedido usando alguma promoção com nome incorreto, por exemplo, com espaço doble no nome.
Depois disso, vai para o gerenciamento de pedidos todos os pedidos e executa um filtro com esta promoção como condição.
Nesse momento você pode ver o pedido na lista de pedidos filtrados, mas escolhendo o relatório de exportação que a exportação não obterá o pedido com promoção com espaço duplo.


##

## Workaround


Não há nenhuma solução disponível.





