---
title: 'Cómo integrar un proveedor externo de Tarjeta de Regalo a VTEX'
id: tutorials_450
status: PUBLISHED
createdAt: 2017-04-27T22:05:26.566Z
updatedAt: 2023-04-13T12:40:41.423Z
publishedAt: 2023-04-13T12:40:41.423Z
firstPublishedAt: 2017-04-27T23:03:24.938Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: como-configurar-pago-con-gift-card
legacySlug: como-integrar-un-proveedor-externo-de-tarjeta-de-regalo-a-vtex
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, una de las opciones para usar una tarjeta de regalo es que se utilice como un programa de créditos. 

En este contexto, hay algunos casos de clientes que ya trabajan con su propio proveedor. Este sistema gestiona su relación de créditos o puntos bajo una base de clientes que participan en un sistema de fidelización, por ejemplo.

Dicho esto, el cliente tiene la opción de integrar la solución externa al sistema VTEX. Aquí, explicaremos el procedimiento para realizar esta integración.

## Desarrollo de provider
VTEX cuenta con Gift Card Provider Protocol, es decir, una guía de llamadas de API que se harán para comunicarse con nuestro sistema.

De este modo, el cliente debe desarrollar un middleware —sistema que intermedia entre dos sistemas diferentes, en este caso, el proveedor externo y los sistemas de VTEX.
                                                                                  Luego, una vez implementado, podrá recibir las llamadas de VTEX e interpretar la información contenida en cada una de estas.

Para más detalles, consulte nuestra documentación técnica sobre [Gift Card Provider Protocol](https://developers.vtex.com/docs/guides/giftcard-provider-protocol-overview). 

## Envío del endpoint 
Terminada la primera etapa, el cliente debe enviar a VTEX el endpoint que se utilizará para realizar las llamadas. Esta ruta funcionará como un puente entre los dos sistemas. 

Por último, VTEX registra el endpoint del proveedor en su sistema. Así, el sistema externo de tarjeta de regalo se integrará a VTEX y se utilizará en todo cierre de compra en el que el cliente lo utilice como medio de pago.
