---
title: 'Change Seller'
id: 5TBAwO2kOAMw44uyaaQMQO
status: PUBLISHED
createdAt: 2018-02-05T21:31:15.704Z
updatedAt: 2023-06-13T14:35:00.451Z
publishedAt: 2023-06-13T14:35:00.451Z
firstPublishedAt: 2018-03-05T14:10:53.091Z
contentType: tutorial
productTeam: Channels
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: change-seller
legacySlug: veja-como-utilizar-o-change-seller
locale: pt
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

O Change Seller é a funcionalidade que dá aos marketplaces autonomia para trocar o seller que vai realizar o fulfillment do pedido.

> ℹ️ A funcionalidade Change Seller só pode ser configurada por meio de APIs. Para mais informações, consulte a [documentação para desenvolvedores Change Seller](https://developers.vtex.com/vtex-rest-api/docs/change-seller).

A troca de seller pode ocorrer em duas situações:

- Seller cancela o pedido.
- Marketplace decide trocar o seller.

![seller_cancela_pedido_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integra%C3%A7%C3%B5es/pedidos/change-seller_1.png)

Você pode [configurar a janela de tempo para mudar seller de 0 a 30 dias](https://developers.vtex.com/vtex-rest-api/reference/updatewindowtochangeseller), sendo que, por padrão, são dois dias. Ao configurar a janela em 0 dias, não existe um período efetivo para a troca de sellers e a feature, apesar de configurada, não funciona na prática, fazendo com que o pedido siga para cancelamento.

Ao ser notificado pelo seller sobre o cancelamento, o marketplace pode configurar quantos dias deseja para tomar uma ação e decidir entre cancelar a compra ou mudar de seller. Mas atenção: caso escolha pela troca, é de responsabilidade do próprio marketplace a decisão de informar a mudança ao cliente final.

![mkt_cancela_seller_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integra%C3%A7%C3%B5es/pedidos/change-seller_2.png)

## Limitações

Nas situações abaixo, a troca de seller não pode ser feita:
- Itens do pedido com serviços ou anexos.
- Pedidos intermediários em caso de [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4).
- Pedidos com outras alterações.
- Pedidos com impostos.
- Pedidos com [split de pagamento](https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) que não utilizam cartão de crédito.
- Pedidos com split de pagamento entre diferentes sellers.
- Pedidos que usam o meio de pagamento do seller e não utilizam cartão de crédito com tokenização.
- Pedidos que usam o meio de pagamento do seller e possuem mais de um merchant envolvido.
- Pedidos que usam o meio de pagamento do seller e possuem parcelamento com juros.
- Pedidos que usam o meio de pagamento do seller e não possuem as mesmas condições de parcelamento e meios de pagamento no novo seller.
- Pedidos feitos anteriormente ao anúncio do Change Seller.
- Pedidos  em que o seller original é um seller não VTEX.
- Alteração para novo seller não VTEX caso exista serviços ou [assembly options](https://help.vtex.com/pt/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH) envolvidos.
- Caso a nova opção solicite envio por retirada em [pontos de retirada](https://help.vtex.com/pt/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).
- No caso do marketplace decidir por trocar de seller, a troca só pode ser feita nos [status](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196) `Pagamento pendente` e `Aguardando confirmação do seller`.
- Pedidos de sellers externos à VTEX.
- Se a transportadora escolhida não estiver associada a mesma [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) do pedido.
