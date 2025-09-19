---
title: 'Produto continua reservado em estoque após faturamento do pedido'
id: 5kQ3sJTo7hxIjysT7f9EvD
status: PUBLISHED
createdAt: 2024-10-29T16:42:28.787Z
updatedAt: 2024-11-08T19:36:08.007Z
publishedAt: 2024-11-08T19:36:08.007Z
firstPublishedAt: 2024-10-29T16:51:27.322Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: product-remains-available-in-stock-after-the-order-has-been-invoiced
legacySlug: produto-continua-reservado-em-estoque-apos-faturamento-do-pedido
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Estoque
  - Reserva
---

A reserva de estoque é uma funcionalidade essencial, que garante que o produto vendido em um pedido não seja disponibilizado para outro cliente até que o pedido seja completamente processado. No entanto, uma dúvida comum entre lojistas é entender por que a reserva permanece ativa, mesmo após o faturamento do pedido.

Após a venda de um produto, ele passa pelos seguintes status no inventário da loja, que refletem a transição do pedido:

1. [Reserva autorizada](/pt/tutorial/como-a-reserva-funciona--tutorials_92#reserva-autorizada): ocorre imediatamente após a finalização da compra e a criação do pedido.

2. [Reserva confirmada](/pt/tutorial/como-a-reserva-funciona--tutorials_92#reserva-confirmada): este status é alcançado após a aprovação do pagamento do pedido.

3. [Reserva reconhecida](/pt/tutorial/como-a-reserva-funciona--tutorials_92#reserva-reconhecida): o pedido entra no status **Preparando entrega**, indicando que o produto está prestes a ser enviado.

Somente quando o pedido está no status **Preparando entrega** que os produtos são retirados do estoque. A [baixa no estoque](/pt/tutorial/como-a-reserva-funciona--tutorials_92#baixa-no-estoque), que corresponde à atualização da quantidade de itens disponíveis para venda, pode ser feita manualmente pelo lojista ou de forma automática por meio do ERP. Esse processo é realizado por meio do [gerenciamento de inventário](/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139) ou pelo endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).

## Soluções

Considere os seguintes processos para atualização do estoque em pedidos com status "Preparando Entrega":

- [Atualizar estoque manualmente](#atualizando-o-estoque-manualmente): caso seja necessário ajustar a quantidade de itens no estoque manualmente para refletir a quantidade real disponível e reservada de produtos.

- [Configurar o ERP](#configurando-seu-erp-para-atualizacao-do-estoque): assegure-se de que seu ERP está configurado para atualizar o estoque automaticamente ao mudar o status do pedido, removendo itens reservados.

### Atualizando o estoque manualmente

Para atualizar manualmente o saldo do inventário, siga as etapas abaixo:

1. No Admin VTEX, acesse **Catálogo > Inventário > Gerenciamento de inventário** ou digite **Gerenciamento de inventário** na barra de busca no topo da página.

2. Clique em **Gerenciamento de inventário**.

3. Busque pelo SKU desejado.

4. Na **coluna Atualizar contagem**, insira a quantidade correta de itens físicos no estoque, considerando a soma dos itens disponíveis mais os itens reservados.

5. Clique em **Salvar**.

### Configurando seu ERP para atualização do estoque

Ao atingir o status **Preparando Entrega**, é fundamental que o sistema de estoque atualize o produto, removendo-o do status de reservado e ajustando a quantidade disponível. Para isso, o ERP deve sincronizar o saldo de produtos em estoque, descontando os produtos que já estão reservados para pedidos em andamento.

A configuração e integração do ERP são de responsabilidade do lojista. Esse processo pode ser automatizado através do endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-), que permite a comunicação entre o sistema ERP e o estoque da loja, garantindo que as informações estejam sempre atualizadas.

