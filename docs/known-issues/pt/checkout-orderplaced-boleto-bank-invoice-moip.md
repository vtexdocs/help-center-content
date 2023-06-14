---
title: 'Pedido de checkoutFatura de Boleto Bancário'
id: 6LfWcVU6fgXalUXslYATIc
status: PUBLISHED
createdAt: 2022-05-18T18:35:54.748Z
updatedAt: 2022-11-25T22:01:04.364Z
publishedAt: 2022-11-25T22:01:04.364Z
firstPublishedAt: 2022-05-18T18:35:55.124Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: pedido-de-checkoutfatura-de-boleto-bancario
locale: pt
kiStatus: Backlog
internalReference: 376951
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O OrderPlaced tem um recurso automático que injeta o PDF do "Boleto - Bank Invoice" em um iframe dentro da página de pedido acabado.
Mas especialmente o tipo Moip não permite a incorporação do arquivo em outra página.

Vemos também este erro abaixo, onde não será possível exibir o boleto.
"porque seu tipo MIME ('text/html') não é uma folha de estilo MIME suportada, e a verificação MIME estrita está habilitada".



## Simulação


Fatura bancária como tipo MOIP é o método de pagamento que deve ser selecionado para fazer uma compra.
E não verá a fatura do Banco tipo Moip porque não é possível ver o arquivo na página de pedidos colocados.




## Workaround


Não há solução, a maneira de evitar para aqueles que usam moip é esconder o "Boleto - Fatura Bancária" com CSS.

