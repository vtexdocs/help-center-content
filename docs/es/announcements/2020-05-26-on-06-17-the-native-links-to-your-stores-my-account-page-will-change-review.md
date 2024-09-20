---
title: 'Mi Cuenta: En 17/06 los links de la página Mi Cuenta van a cambiar - revise sus configuraciones'
id: 2N9T3weFs2VDXan6vrGgnC
status: CHANGED
createdAt: 2020-05-26T14:16:56.645Z
updatedAt: 2020-11-27T19:40:22.264Z
publishedAt: 2020-06-04T13:39:08.653Z
contentType: updates
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: en-17-06-los-links-de-la-pagina-mi-cuenta-van-a-cambiar-revise-sus
locale: es
legacySlug: en-17-06-los-links-de-la-pagina-mi-cuenta-van-a-cambiar-revise-sus
announcementImageID: ''
announcementSynopsisES: 'En el 17 de junio, su cliente accederá a toda su información, a través de una única URL "/account".'
---

La página "Mi Cuenta", nativa en la plataforma, que muestra toda la información personal y de compra al consumidor, ha experimentado una serie de evoluciones en los últimos meses. Una de estas evoluciones fue la unificación de todos los datos relacionados con el cliente en una sola página. En términos prácticos, esto significa que el cliente accederá a toda su información, incluyendo los pedidos, a través de una única URL "/account". La URL anterior "/account/orders", que listaba los pedidos, se suspenderá.

A partir del día __17 de junio de 2020__, todos los enlaces nativos de la plataforma dirigirán al usuario a la URL "/account". Por ejemplo, en los correos electrónicos transaccionales de pedido, el enlace a la página de mis pedidos, que anteriormente era "/account/orders", cambiará a "/account#/orders", con enlace interno.

## ¿Qué va a cambiar?

Los enlaces nativos de la plataforma, presentes en correos electrónicos transaccionales, página de confirmación de compra, OMS y otros, ahora dirigirán al usuario a la URL "/account" o como se dijo anteriormente "/account#/orders". Dejaremos de dar soporte a la URL anterior "/account/orders".

## ¿Por qué estamos haciendo este cambio?

Esta estandarización es necesaria para que podamos seguir evolucionando los productos VTEX de manera uniforme. Además, la tecnología utilizada en la nueva página garantiza un mayor rendimiento y una mejor experiencia para el cliente.

## ¿Qué es necesario hacerse?

La revisión y la eventual adaptación de este cambio deben aplicarse a través de los tres siguientes pasos. Involucre al responsable del front-end de su tienda y comparta este mensaje con esta persona.

Pasos necesarios para la revisión y adaptación:

1. __Configuración básica__: Revise si el template de la página "/account" (imagen a continuación) ya utiliza view part `<vtex.cmc:accountUserProfile />` y, si es necesario, realice una actualización.  View part es responsable por cargar toda la información del cliente, incluyendo sus pedidos. Se debe eliminar de este template view parts anteriores, `<vtex.cmc:accountAddress/>` y `<vtex.cmc:orderList />`.![account](//images.ctfassets.net/alneenqid6w5/LIki0Pf7j1gOUi01EIajh/f7089fece0b6b10921fcb969066e2f4a/account.png)  
2. __Personalización__: Si la página "/account/orders" tiene alguna personalización de front-end, debe migrarse y adaptarse a la nueva URL "/account#/orders". Revise y realice todas las pruebas necesarias garantizando el funcionamiento de todos los recursos personalizados.  
3. __Enlaces del sitio__: Revise y actualice todos los enlaces personalizados del sitio y de los correos electrónicos transaccionales que antes dirigían al usuario a la URL "/account/orders". Estos enlaces ahora deben direccionar al usuario a "/account#/orders".

## ¿Qué impactos puede sufrir su operación si no se realiza la adaptación?

En la mayoría de los casos, cuando la tienda no tiene mucha personalización front-end, la nueva versión de la página "mi cuenta" funciona perfectamente sin la necesidad de ningún ajuste. Sin embargo, la revisión es necesaria para validar la experiencia del consumidor.

En otras situaciones, si no hay una revisión y eventual adaptación, la experiencia del usuario puede verse comprometida, lo que provoca que algunas acciones no funcionen como se espera y, en casos extremos, incluso impide la visualización de pedidos y otras informaciones.

Para más informaciones, acceda a nuestra documentación sobre [Mi Cuenta](https://help.vtex.com/es/tutorial/como-funciona-o-my-account--2BQ3GiqhqGJTXsWVuio3Xh?locale=pt). Si tiene alguna duda, contáctenos.
