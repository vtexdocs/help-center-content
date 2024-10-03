---
title: '¿Qué hacer cuando hay problemas con una transacción?'
id: 3d183R70xqAYoyyqwaAmGa
status: PUBLISHED
createdAt: 2017-05-09T13:38:39.142Z
updatedAt: 2019-12-31T14:25:26.812Z
publishedAt: 2019-12-31T14:25:26.812Z
firstPublishedAt: 2017-05-09T13:44:57.343Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_35
slugEN: what-should-i-do-when-there-are-problems-with-a-transaction
locale: es
legacySlug: que-hacer-cuando-hay-problemas-con-una-transaccion
---

Para poder resolver rápidamente un problema que involucre transacciones, recomendamos que el comerciante esté esteja a par da estructura de *logs* detallada en las transacciones en Admin de VTEX. Vea [aqui](https://help.vtex.com/es/tutorial/como-visualizar-detalle-del-pedido/) cómo visualizar una transacción.

En el log quedan registradas todas las interacciones entre VTEX y el aliado, sea el Gateway oo el AntiFraude. Empezando desde la parte inferior de la página hasta la parte superior, donde están las interacciones más recientes.

Los cambios de Status y mensajes de respuesta están claramente marcados, facilitando el entendimiento de esa línea de tiempo.

En ocasiones puede ocurrir una falla de comunicación entre VTEX y el aliado. Hay recursos de seguridad activos, como re-intentos automáticos, pero también puede haber errores humanos, como si el aliado realiza una actualización en su plataforma y no realiza la integración con VTEX.

Casos como ése generan logs o mantienen el pedido en un looping. Una vez que se identifique un comportamiento errático, el camino más rápido es verificar si el status del pedido está igual en ambas plataformas. Como, por ejemplo, el Gateway haber atualizado el Status como "Settling", pero posteriormente contestar que el Status no está correcto para captura, sin embargo el Status estaría correcto. Vea el ejemplo:

El día 08 de febrero, VTEX recibió una notificación del Gateway en la que hay un cambio de Status.
![2017-04-11-17 28 32-4820587- -VTEX-PCI-Gateway-300x65](https://images.contentful.com/alneenqid6w5/7us92BzXFYwyQsUqWQa0sM/9c8e7dc490e5497bf8cfa16e0f7874ce/2017-04-11-17_28_32-4820587-_-VTEX-PCI-Gateway-300x65.png) 

El día 03 de abril el gateway retorna error en el Status
![2017-04-11-17 26 40-4820587- -VTEX-PCI-Gateway-300x87](//images.contentful.com/alneenqid6w5/35WTOXDAC4WgS0Ki866SSS/6d7f6ed699ef653d79d709c97320d10c/2017-04-11-17_26_40-4820587-_-VTEX-PCI-Gateway-300x87.png)

Otro ejemplo sería el Gateway (aliado) retornar que no posee los datos completos de la tarjeta de crédito para proseguir con la compra. Sin embargo, en los detalles de la transacción en la parte superior de la página, es posible confirmar que la información existe – incluso porque el pedido no se habría creado sin esa información. El camino aquí sería el mismo, ponerse en contacto con su Gateway.

La __TID__ es el número que debe usarse para identificar una transacción en el Gateway.

El hecho de existir una TID significa, incluso, que la transacción tuvo un inicio, pues esa información es generada cuando se establece una conexión con el Gateway.
