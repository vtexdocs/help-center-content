---
title: Erro na visualização do envioEstimativaData na Nova UI
id: 7K9hFPStESW2urw4yzkY6t
status: PUBLISHED
createdAt: 2022-09-21T12:37:43.379Z
updatedAt: 2022-11-25T23:17:49.772Z
publishedAt: 2022-11-25T23:17:49.772Z
firstPublishedAt: 2022-09-21T12:37:44.030Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: erro-na-visualizacao-do-envioestimativadata-na-nova-ui
kiStatus: Backlog
internalReference: 661040
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Ao fazer um pedido com mais de um produto/SKU com datas de entrega diferentes, New_UI obtém as informações (shippingEstimateDate) do ItemIndex=0, que está no GET Orders API em "ShippingData">"LogisticsInfo">"ItemIndex", em vez de obter as informações (shippingEstimateDate) do ItemIndex com o maior tempo.




## Simulação



1- Fazer um pedido inserindo produtos/UKUs com datas de entrega diferentes (shippingEstimateDate);

2- você notará que na New_UI a (shippingEstimateDate) do ItemIndex=0 é exibida e não do ItemIndex com a maior (shippingEstimateDate) exibida na API Get Orders.




## Workaround



Como alternativa, é possível utilizar a Old_UI.

