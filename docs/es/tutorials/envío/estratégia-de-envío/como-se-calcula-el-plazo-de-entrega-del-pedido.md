---
title: '¿Cómo se calcula el plazo de entrega del pedido?'
id: 1TOuKCIjGQmqOqQkEqCg82
status: PUBLISHED
createdAt: 2018-01-12T12:56:52.805Z
updatedAt: 2023-09-23T00:34:19.034Z
publishedAt: 2023-09-23T00:34:19.034Z
firstPublishedAt: 2018-01-12T14:42:26.502Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: how-is-the-order-delivery-deadline-calculated
legacySlug: como-se-calcula-el-plazo-de-entrega-del-pedido
locale: es
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

El plazo de envío de un pedido es calculado considerando los seguientes aspectos:

- [Lead time](/es/docs/tutorials/lead-time-tiempo-de-envio-a-nivel-de-sku)
- [Almacén](/es/docs/tutorials/almacen)
- [Muelle](/es/docs/tutorials/muelles)
- [Política de envío](/es/docs/tutorials/politica-de-envio)

![lead_time_image_total_time_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/estratégia-de-envío/como-se-calcula-el-plazo-de-entrega-del-pedido_1.png)

Usted define una duración para cada una de esas etapas y su cliente en checkout vé um plazo de envío que es la suma de estos tiempos.  

El tiempo de envío de la transportadora está definido por la [plantilha de flete](/es/docs/tutorials/plantilla-de-flete), que tiene que estar asociada a su estrategia de envío por medio de una [política de envío](/es/docs/tutorials/politica-de-envio).

Para configurar una política de envío, almacén o muelle, acceda a su Admin VTEX an **Envío > Estratégia de Envío**. Para configurar el lead time, acceda a **Catálogo > Gerenciamento de stock**.

### Sepa más

- [Simulador de envío](/es/docs/tutorials/simulador-de-envio)
- [Verificar como el plazo de entrega de una solicitud fue calculado](/es/tutorial/comprobar-como-se-calculo-el-plazo-de-entrega-de-un-pedido).
