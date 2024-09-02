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
slug: como-se-calcula-el-plazo-de-entrega-del-pedido
locale: es
legacySlug: como-se-calcula-el-plazo-de-entrega-del-pedido
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

El plazo de envío de un pedido es calculado considerando los seguientes aspectos:

- [Lead time](https://help.vtex.com/es/tutorial/lead-time-tempo-de-envio-a-nivel-de-sku--16yv5Mkj6bTyWR1hCN2f4B)
- [Almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)
- [Muelle](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj)
- [Política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140)

![lead_time_image_total_time_ES](https://images.ctfassets.net/alneenqid6w5/WDlW2CzaAKl3KtzzsgGwc/f9610838cce53ee740054bee68e634d1/lead_time_image_total_time_ES.png)

Usted define una duración para cada una de esas etapas y su cliente en checkout vé um plazo de envío que es la suma de estos tiempos.  

El tiempo de envío de la transportadora está definido por la [plantilha de flete](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127), que tiene que estar asociada a su estrategia de envío por medio de una [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140).

Para configurar una política de envío, almacén o muelle, acceda a su Admin VTEX an **Envío > Estratégia de Envío**. Para configurar el lead time, acceda a **Catálogo > Gerenciamento de stock**.

### Sepa más

- [Simulador de envío](https://help.vtex.com/es/tutorial/simulador-de-envio--tutorials_144)
- [Verificar como el plazo de entrega de una solicitud fue calculado](https://help.vtex.com/es/tutorial/comprobar-como-se-calculo-el-plazo-de-entrega-de-un-pedido).
