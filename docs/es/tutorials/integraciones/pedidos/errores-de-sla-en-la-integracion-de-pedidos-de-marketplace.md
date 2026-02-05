---
title: 'Errores de SLA en la integración de pedidos de marketplace'
id: X8lSfxT44OyxkxwvnRk1X
status: PUBLISHED
createdAt: 2021-08-02T22:55:49.181Z
updatedAt: 2023-03-29T23:48:42.116Z
publishedAt: 2023-03-29T23:48:42.116Z
firstPublishedAt: 2021-08-02T23:29:49.747Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: sla-errors-in-marketplace-integration-orders
legacySlug: errores-de-sla-en-la-integracion-de-pedidos-de-marketplace
locale: es
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Cuando un pedido realizado en el _marketplace_ no se integra en VTEX, un mensaje de error señala el tipo de problema que se produjo. El _status_ de integración del pedido aparece en su Admin, en el módulo **MARKETPLACE > Integraciones > Pedidos**. Para visualizar el mensaje de error, simplemente haga clic en el pedido.

Por lo general, el mensaje de error se refiere al SLA, acrónimo de _Service Level Agreement,_ que es el acuerdo de nivel servicio firmado entre la tienda VTEX y el _marketplace_. Los errores de SLA significan que algún factor está impidiendo la entrega del pedido al consumidor final. 

Para identificar la naturaleza del problema, realice una [simulación de envío](/es/tutorial/simulacao-de-frete). El simulador de envío es una herramienta que permite consultar las condiciones de entrega del producto sin necesidad de crear un pedido.

Los problemas más comunes que causan errores de SLA son:

- **Falta de _stock_:** indisponibilidad de uno o más SKUs del pedido. Para más información, consulte [Errores de falta de stock en la integración de pedidos de marketplace](/es/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP).
- **Ítem que no consta en la colección o política comercial:** verifique si el SKU está marcado correctamente en la colección o política comercial que se definió para el _marketplace_. Encuentre más información en [Asociación de SKU a una política comercial](/es/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).
- **Código postal de entrega que no es atendido por la estrategia de envío:** la entrega del pedido a la dirección requerida no está configurada en su [política de envío](/es/tutorial/politica-de-envio--tutorials_140). 
- **Muelle no asociado a la política comercial:** al [registrar el muelle](/es/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW), este debe estar vinculado a la política comercial que se definió para el _marketplace_.
- **SKU inactivo:** el SKU no está activo, y solo se integran los SKU activos. Verifique el _status_ del ítem en su Admin, en el módulo _PRODUCTOS > Catálogo > Productos y SKU._

Después de solucionar el error, el pedido se debe reprocesar manualmente. En su Admin, en el módulo **MARKETPLACE > Integraciones > Pedidos**, haga clic en el pedido con error. Después de eso, el botón **Acciones** se vuelve visible, haga clic en el mismo y elija la opción **Reprocesar**.

> ℹ️ Si el error persiste, abra un [ticket para el soporte VTEX](/es/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM).

### Sepa más

- [Errores de falta de stock en la integración de pedidos de marketplace](/es/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [Simulador de envío](/es/tutorial/simulacao-de-frete)
- [Resolución de errores de divergencia de precio en pedidos de marketplace](/es/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8)
