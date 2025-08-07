---
title: 'Lead time: configure tempo de envio a nível de SKU'
id: 39Q8TeXaDCbmTXFtwpNXlf
status: PUBLISHED
createdAt: 2023-09-22T14:07:20.464Z
updatedAt: 2023-09-28T17:47:25.398Z
publishedAt: 2023-09-28T17:47:25.398Z
contentType: updates
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: 2023-09-22-lead-time-configuring-shipping-time-at-sku-level
locale: pt
legacySlug: lead-time-configure-tempo-de-envio-a-nivel-de-sku
announcementImageID: ''
announcementSynopsisPT: 'Lançamento global do lead time, uma configuração opcional do tempo de envio a nível de SKU.'
---

A VTEX disponibilizou para todas as lojas o [lead time](/pt/tutorial/lead-time-tempo-de-envio-a-nivel-de-sku--16yv5Mkj6bTyWR1hCN2f4B), uma configuração do tempo de envio do SKU de um estoque. Ou seja, você pode definir a nível de SKU um tempo de envio adicional no cálculo das promessas de envio apresentadas para os clientes no checkout.

![lead_time_image_total_time_PT](https://images.ctfassets.net/alneenqid6w5/WDlW2CzaAKl3KtzzsgGwc/7aae98aad97be4947233c9ef489f266a/lead_time_image_total_time_PT.png)

O uso do lead time é opcional e, quando não configurado, o envio de pedidos da loja segue inalterado. Vale ressaltar que as regras de consolidação do checkout se mantêm, calculando o prazo de envio total do pedido pelo maior tempo de um dos itens.

## O que mudou?

Antes, o [cálculo de envio](/pt/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) de pedidos considerava os períodos configurados na sua estratégia de envio a nível de:

* [Estoque](/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)
* [Doca](/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW)
* [Política de envio](/pt/tutorial/politica-de-envio--tutorials_140)

Agora, existe também a opção de configurar o tempo de envio a nível de SKU, com a nova coluna do lead time na página [Gerenciamento de inventário](/pt/tutorial/gerenciar-inventario--tutorials_139), que se encontra no seu Admin VTEX, em **Catálogo > Estoque > Gerenciamento de inventário**, como na imagem abaixo:

![lead_time_inventory_management_PT](https://images.ctfassets.net/alneenqid6w5/mfWUVzj7tgHMQxJTnVjGX/37732ea98f52933cabb401cb6246ab2f/lead_time_inventory_management_PT.png)

<div class="alert alert-warning">
Pelo Admin VTEX, o lead time é configurado em dias, até o limite de 365 dias. Por padrão, os dias são contados em dias úteis, mas você pode configurar sua política de envio para que a <a href="https://help.vtex.com/pt/tutorial/lead-time-tempo-de-envio-a-nivel-de-sku--16yv5Mkj6bTyWR1hCN2f4B#configurar-a-contagem-do-lead-time-em-dias-do-calendario-opcional">contagem seja feita em dias corridos</a>. Para configurar períodos em horas, minutos e segundos, é necessário utilizar o endpoint <a href="https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-">Update inventory by SKU and warehouse</a>.
</div>

## Por que fizemos essa mudança?

Os principais benefícios com a nova configuração lead time são:

* **Maior flexibilidade no gerenciamento de inventário**, especialmente útil para negócios com produtos criados sob demanda e cenários _dropshipping_ (o fornecedor envia o produto direto para o cliente).
* **Configurações mais precisas de prazos de envio**, o que facilita a sua gestão de estoque.
* **Estimativas de promessas de envio mais acuradas** para os clientes, o que contribui para melhor experiências de compra.

## O que precisa ser feito?

A página [Gerenciamento de inventário](/pt/tutorial/gerenciar-inventario--tutorials_139) do Admin VTEX de todas as lojas foi atualizada com uma coluna do lead time, e não é necessária qualquer ação da sua parte. A utilização do novo campo é opcional, caso você não realize nenhuma configuração, o prazo de envio dos seus pedidos seguirá inalterado.
