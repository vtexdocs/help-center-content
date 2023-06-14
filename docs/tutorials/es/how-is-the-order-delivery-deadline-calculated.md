---
title: ¿Cómo se calcula el plazo de entrega del pedido?
id: 1TOuKCIjGQmqOqQkEqCg82
status: PUBLISHED
createdAt: 2018-01-12T12:56:52.805Z
updatedAt: 2023-03-29T14:09:06.429Z
publishedAt: 2023-03-29T14:09:06.429Z
firstPublishedAt: 2018-01-12T14:42:26.502Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: como-se-calcula-el-plazo-de-entrega-del-pedido
legacySlug: como-se-calcula-el-plazo-de-entrega-del-pedido
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

El plazo de entrega de una solicitud tiene en cuenta los __temos de costo__ definidos para las cinco etapas de la ruta de logística:

- Almacén.
- Doca.
- Transportadora.
- Feriados.
- Horários de corte.

Es decir, para cada uno de estos pasos usted puede establecer un tiempo de costo - y el plazo de entrega que su cliente verá en el checkout es la suma de estos tiempos de coste.

![deliveryCostTimes](//images.contentful.com/alneenqid6w5/hA6N4VPj440AEqEecIUck/0a6784f0c3d6f6d88b65547762600a7d/deliveryCostTimes.png)

Los tiempos de coste del __almacén__ y de la __doca__ se definen en las pantallas de configuración de cada uno de estos pasos en el módulo **Envío > Estratégia de Envío.**

![entrega1.es](https://images.ctfassets.net/alneenqid6w5/11Sxc5vISEU8Knt0cf9uyJ/25e7778597e647d3bd5cd8c41fd6ccb9/entrega1.es.png) 

![entrega2.es](https://images.ctfassets.net/alneenqid6w5/187jUxkOBm3zEyU5zr1Uzy/c117ef2faf8d9f1aefd890cc4654739d/entrega2.es.png)

El tiempo de coste de la __transportadora__ se define en la tabla de flete, enviada a VTEX a través de la pantalla de configuración del transportista, en **Envío > Estratégia de Envío > Política de Envío.**

![entrega3.es](https://images.ctfassets.net/alneenqid6w5/3gd2irrk8fStTd7XSEf5eC/5d693f6e0a0e2538157f16ee97cb1665/entrega3.es.png)

### Para obtener más información

Por medio de la simulación de flete, puede comprobar cómo se ha calculado el plazo de entrega de una solicitud específica. Entiende como en el artículo [Verificar como el plazo de entrega de una solicitud fue calculado](/es/tutorial/comprobar-como-se-calculo-el-plazo-de-entrega-de-un-pedido).
