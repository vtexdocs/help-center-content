---
title: 'Google Analytics: preguntas frecuentes'
id: 2VRtB07muo3vwO6KEmMVn0
status: PUBLISHED
createdAt: 2021-12-17T18:41:26.175Z
updatedAt: 2024-12-18T02:45:12.661Z
publishedAt: 2024-12-18T02:45:12.661Z
firstPublishedAt: 2021-12-17T18:53:43.536Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: google-analytics-faq
legacySlug: google-analytics-preguntas-frecuentes
locale: es
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

Consulta a continuación las respuestas a algunas de las preguntas más frecuentes sobre Google Analytics en tiendas VTEX.

## ¿Cómo instalar Google Analytics en tu tienda?

La instalación se realiza a través de [Google Tag Manager](https://help.vtex.com/es/tutorial/integracao-com-o-google-tag-manager#), como se describe en el artículo [Configuración de Google Analytics en tiendas VTEX](https://help.vtex.com/es/tutorial/how-to-setup-google-analytics-in-vtex-store--G2P0rmSrEiqCcmUMyUUwG#).

## ¿De dónde provienen los datos mostrados en Google Analytics? ¿Qué son las etiquetas de Google?

La instalación y configuración de Google Analytics se basa en la inclusión de etiquetas (scripts predeterminados) en el front-end de tu tienda.

En general, estas etiquetas corresponden a las acciones de los usuarios. Por ejemplo, se puede desencadenar un script específico cada vez que haya un nuevo acceso a la tienda, registrando en Google Analytics información sobre ese acceso. Puede haber una etiqueta de conversión, que se desencadena al cargar la página que confirma al cliente que el pedido se ha completado.

La información disponible en la plataforma de Google proviene de los desencadenadores de estas etiquetas. Por lo tanto, VTEX no envía datos a Google Analytics.

## ¿Qué son los modelos de atribución?

Los modelos de atribución dictan la metodología utilizada por una plataforma para atribuir una causa a un evento determinado. Cuando hablamos de Google Analytics, esto significa definir si una determinada venta en una tienda se produjo como resultado de un anuncio en una red social o de un email marketing, por ejemplo.

Obtén más información sobre los [modelos de atribución en Google Analytics](https://support.google.com/analytics/answer/1662518?hl=es).

## ¿Por qué las métricas que se muestran en VTEX y en Google Analytics son diferentes?

Hay diferencias en la forma en que cada plataforma obtiene los datos de tu tienda y esto puede dar lugar a cifras diferentes en el análisis. A continuación indicamos algunos de los casos más frecuentes y explicamos cómo interpretar estas diferencias.

### Transacciones

Como VTEX procesa las transacciones de tu tienda, todas las transacciones se registran en la plataforma. Sin embargo, en Google Analytics a veces hay irregularidades o fallas en la activación de la tag correspondiente. Algunos ejemplos son:

- Navegadores con estricta configuración de privacidad.
- Navegadores que bloquean JavaScript.
- Bloqueadores de anuncios.
- Error de configuración de la capa de datos de Google Analytics. Consulta la documentación oficial de Google para ver más información sobre cómo tu equipo de desarrollo puede [configurar la capa de datos de Google Analytics 4](https://developers.google.com/tag-manager/ecommerce-ga4).
- La tag de transacción se activa incluso con transacciones que no se completaron con éxito.
- Falla o duplicación de la visualización de la página de confirmación del pedido, si la tag de transacción está vinculada a la visualización de esta página.

> ℹ️ También debes tener en cuenta que hay un retraso de hasta 48 horas en el registro de datos de transacciones en Google Analytics.

Además, las integraciones pueden construirse de forma que acaben por no desencadenar determinadas etiquetas en tu storefront. Por ejemplo, hay integraciones que utilizan una [aplicación de pago](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-payment-app) y finalizan la compra sin redirigir al cliente a la página de confirmación del pedido, como la integración desarrollada por AME Digital. Las transacciones siempre se registrarán en VTEX, pero en este caso es probable que no se registre en Google Analytics, generando divergencias.

### Atribución de ventas

Es normal que existan diferencias entre la atribución en la plataforma VTEX y en Google Analytics, ya que son herramientas diferentes con [modelos de atribución](#que-son-los-modelos-de-atribucion) distintos y que capturan la información a través de diferentes cookies.

La información de UTM reconocida por VTEX se puede verificar en el panel de herramientas para desarrolladores de tu navegador, en el objeto `marketingData` del [OrderForm](https://developers.vtex.com/docs/guides/orderform-fields). Obtén más información en este artículo sobre las [UTM de marketing en el checkout](https://developers.vtex.com/docs/guides/check-marketing-utms-used-at-checkout).

Google Analytics utiliza por defecto el modelo de Última interacción.
También se pueden utilizar diferentes modelos, descritos en la [documentación de Google Analytics sobre modelos de atribución](https://support.google.com/analytics/answer/1662518?hl=es).

Si también analizas los datos de los anuncios de Facebook, puedes encontrar otras divergencias. Por ejemplo, Facebook tendrá en cuenta a los clientes que vieron el anuncio y compraron en algún momento posterior, aunque hayan llegado a la tienda por otro camino en el momento de la compra.

La diferencia en la forma de atribución no afecta en absoluto a la venta en sí, solo a la interpretación de cada plataforma.

### Sesiones

Al igual que hay diferentes maneras de atribuir el origen de los eventos que ocurren en tu tienda, hay diferentes maneras de definir las sesiones. El concepto de sesión utilizado por VTEX está pensado para asemejarse al [concepto de sesión de Google Analytics](https://support.google.com/analytics/answer/2731565?hl=es#time-based-expiration&zippy=%2Cneste-artigo), pero no se trata de una réplica.

Por lo tanto, los eventos que se interpretan como sesiones en VTEX pueden no ser interpretados de la misma manera en Google Analytics y viceversa.

Por ello, es importante que el equipo de tu tienda realice un análisis basado en una única fuente. Los análisis que comparan diferentes fuentes, con diferentes conceptos de sesión, están sujetos a distorsiones en los resultados.

A pesar de las diferencias, cabe destacar que ambas plataformas consideran que una sesión se cierra tras 30 minutos de inactividad del usuario.

### Embudo de ventas

VTEX genera una visualización del embudo de ventas de tu tienda a partir de los registros de navegación generados por la plataforma, desde las páginas de producto hasta el flujo de carrito de compras y checkout.

Por su parte, Google Analytics proporciona un embudo de ventas que se genera automáticamente con base en las tags de Google que estén configuradas en tu frontend. Aprende más sobre [cómo Google genera la visualización del embudo](https://support.google.com/analytics/answer/6014872#zippy=%2Ccontenido-del-art%C3%ADculo).

Las visualizaciones del embudo, por estar basadas en información diferente, pueden presentar divergencias.

Puedes configurar otro embudo de ventas en Google Analytics, que permite una vista personalizada y un mejor control de la jornada de compra. Consulta este artículo sobre cómo [implementar el embudo de ventas en Google Analytics](https://help.vtex.com/es/tutorial/configurar-funil-de-vendas-no-google-analytics).

## Qué es el funil de ventas de Google Analytics?

Los objetivos de **Google Analytics** se utilizan para evaluar si se están cumpliendo con las metas de su sitio.

Este artículo se mostrará cómo establecer un objetivo de conversión, conocida como "embudo de ventas". Para aprender más sobre las mediciones de Metas, puede visitar el centro de ayuda de Google Analytics.

Con el Funnel de ventas configurado, se puede realizar un seguimiento y analizar los pasos de los clientes hasta la finalización de una orden. Para configurar el embudo de ventas en SmartCheckout tomemos en cuenta que el proceso de compra se inicia en la pantalla del producto y pasa a través de carrito de la compra, pago y envío (datos personales, la entrega y el envío, el pago) y alcanza el objetivo.

