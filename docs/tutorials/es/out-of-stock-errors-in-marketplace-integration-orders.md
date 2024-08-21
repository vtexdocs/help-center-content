---
title: 'Errores de falta de stock en la integración de pedidos de marketplace'
id: s1i5OCcPFslrMkZJLDnfP
status: PUBLISHED
createdAt: 2021-07-28T19:50:13.475Z
updatedAt: 2023-03-28T14:41:11.666Z
publishedAt: 2023-03-28T14:41:11.666Z
firstPublishedAt: 2021-07-28T19:55:21.464Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: errores-de-falta-de-stock-en-la-integracion-de-pedidos-de-marketplace
locale: es
legacySlug: errores-de-falta-de-stock-en-pedidos-de-la-integracion-con-el-marketplace
subcategory: 7lxg0kyL3TYIsrlSQlf1zP
---

Cuando un pedido realizado en el _marketplace_ no se integra en VTEX, un mensaje de error señala el tipo de problema que se produjo. El _status_ de integración del pedido aparece en su Admin, en el módulo **MARKETPLACE > Conexiones > Pedidos**. Para visualizar el mensaje de error, simplemente haga clic en el pedido.

Por lo general, el mensaje de error se refiere a la falta de_ stock_. Una de las formas más sencillas de verificar si un SKU está disponible en el _stock_ es realizar una [simulación de envío](https://help.vtex.com/es/tutorial/simulacao-de-frete). El simulador de envío es una herramienta que permite consultar las condiciones de entrega del producto sin necesidad de crear un pedido.

Los errores de falta de _stock_ se pueden producir por diferentes razones, las más comunes son:

- **Indisponibilidad de stock:** un SKU o varios del pedido no están disponibles, se debe [actualizar la cantidad de SKUs en inventario](https://help.vtex.com/es/tutorial/como-atualizar-estoque--2MDwYV1COA6YuoiY22AyGo).
- **SKU inactivo:** el SKU no está activo, y solo se integran los SKU activos. Verifique el _status_ del ítem en su Admin, en el módulo _Catálogo > Productos y SKUs._
- **Stock negativo:** es posible que el [_stock_ esté negativo](https://help.vtex.com/es/tutorial/atualizar-quantidade-de-skus-em-estoque--IKMWjOjMcMqKusSGko8c0#por-que-mi-stock-esta-negativo). Esto ocurre cuando los ítems reservados superan a la cantidad total disponible en stock.
- **Ítem que no consta en la colección o política comercial:** verifique si el SKU está marcado correctamente en la colección o política comercial que se definió para el _marketplace_. Encuentre más información en [Asociación de SKU a una política comercial](https://help.vtex.com/es/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).

Después de solucionar el error, el pedido se debe reprocesar manualmente. En su Admin, en el módulo **MARKETPLACE > Conexiones > Pedidos**, haga clic en el pedido con error. Luego, el botón **Acciones** se vuelve visible, haga clic en el mismo y elija la opción **Reprocesar**.

>ℹ️ Si el error persiste, abra un [ticket para el soporte VTEX](https://help.vtex.com/es/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM).

### Sepa más

- [Control de stock mínimo para integraciones](https://help.vtex.com/es/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D)
- [Configurar la alerta de Stock Crítico](https://help.vtex.com/es/tutorial/configurar-o-alerta-de-estoque-critico--6FD0GHeQPCsKIMgkQ88SGu)
- [Configurar Inventario Futuro](https://help.vtex.com/es/tutorial/configurar-estoque-futuro--UMSGjooqRfkRbeoh94kS4)
