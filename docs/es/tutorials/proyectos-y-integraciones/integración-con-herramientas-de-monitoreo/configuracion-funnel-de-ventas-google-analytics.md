---
title: 'Configurar embudo de ventas en Google Analytics'
id: 4yM6QJumWs6iaEQuO42mu2
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.554Z
updatedAt: 2021-10-04T18:45:21.795Z
publishedAt: 2021-10-04T18:45:21.795Z
firstPublishedAt: 2019-01-24T22:10:10.005Z
contentType: tutorial
productTeam: Shopping
author: authors_4
slugEN: setting-up-the-sales-funnel-on-google-analytics
legacySlug: configuracion-funnel-de-ventas-google-analytics
locale: es
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

Las metas de **Google Analytics** sirven para ayudarle a evaluar si se cumplen los objetivos de su sitio. En este artículo se mostrará cómo configurar una meta de conversión, conocida como __Embudo de Ventas__, en las tiendas que utilizan SmartCheckout de VTEX. Para saber más acerca de las metas, acceda al tema de conversión en la ayuda de Google Analytics.

Con el embudo de ventas configurado, es posible acompañar y analizar los pasos del cliente hasta la finalización de un pedido. Para configurar el embudo de ventas vamos a tener en cuenta que el proceso de compra se inicia en la pantalla de su producto y pasa por el carrito de compras, checkout (datos personales, entrega, pago) y llega hasta la meta, que es la página de pedido confirmado.

> ℹ️ Para facilitar, toda la configuración que se muestra en este artículo se puede [importar directamente a Google Analytics](https://support.google.com/analytics/answer/1032415?hl=es) con [esta plantilla](https://analytics.google.com/analytics/web/template?uid=tTp2GkIJRiGodszJbq8RsA).

Para la configuración manual o la edición de una meta existente, el primer paso es acceder a Analytics y hacer clic en el botón __Administrador__ en la esquina inferior izquierda. A continuación, vaya a la opción __Metas__, de la columna "Vista".

![image](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/proyectos-y-integraciones/integración-con-herramientas-de-monitoreo/configuracion-funnel-de-ventas-google-analytics_1.png)

En la pantalla de administración de metas, opte por crear una nueva o editar una ya existente.

__En el paso 1__ usted puede seguir con una meta de tipo personalizado:

![image](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/proyectos-y-integraciones/integración-con-herramientas-de-monitoreo/configuracion-funnel-de-ventas-google-analytics_2.png)

__En el paso 2__ usted puede definir el nombre que prefiera para su meta y un código de posición (de uso interno de Google Analytics). En el tipo, vamos a usar "Destino":

![image](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/proyectos-y-integraciones/integración-con-herramientas-de-monitoreo/configuracion-funnel-de-ventas-google-analytics_3.png)

__En el paso 3__ tenemos las configuraciones más sensibles. En él configuramos la página que determina la conclusión de la meta y el camino que los clientes van a recorrer para alcanzarla.

En el campo "Destino" seleccione la opción de expresión regular e introduzca la dirección URL de la página de pedido completa: `^/checkout/orderPlaced`

![image](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/proyectos-y-integraciones/integración-con-herramientas-de-monitoreo/configuracion-funnel-de-ventas-google-analytics_4.png)

Luego configure la ruta que el cliente va a recorrer hasta que finalice un pedido. En este caso, tenemos en cuenta que el proceso de compra se inicia en la pantalla del producto; entonces mi embudo servirá para medir la cantidad de clientes que accede a esa pantalla, cuántos pedidos se han finalizado y en qué paso los clientes están desistiendo de la compra.

Aún en el paso 3, active la opción __Embudo__ con los siguientes pasos:

 - __Producto__ =  `/p($|\?)`
 - __Carrito__ = `^/checkout/(\?.*)?(#/cart)$`
 - __Identificación__ = `^/checkout/(\?.*)?#/email$`
 - __Datos Personales__ = `^/checkout/(\?.*)?#/profile$`
 - __Envío__ = `^/checkout/(\?.*)?#/shipping$`
 - __Pago__ =  `^/checkout/(\?.*)?#/payment$`

![image](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/proyectos-y-integraciones/integración-con-herramientas-de-monitoreo/configuracion-funnel-de-ventas-google-analytics_5.png)

Una forma de comprobar si la meta está configurada correctamente es usar el enlace "Compruebe esta meta". Google va a generar una simulación de la conversión de la meta en los últimos 7 días.

Ahora sólo hay que guardar la meta y esperar el tiempo que el sistema tarda en empezar a contabilizar los datos. Normalmente este tiempo es de 24 horas.

Para ver su embudo, consulte los informes de Analytics y acceda al menú __Conversiones__ y a la opción __Metas__.

> ⚠️ Si tienes una tienda en varios idiomas con idiomas como [subdirectorios con gTLD](https://support.google.com/webmasters/answer/182192?hl=es#locale-specific-urls) debes reemplazar cada [símbolo de intercalación](https://support.google.com/analytics/answer/1034376?hl=es&ref_topic=1034375) (`^`) con una [regex](https://support.google.com/analytics/answer/1034324?hl=es) que coincide con los diferentes subdirectorios. Por ejemplo, si su sitio web está disponible en: <ul> <li>**Italiano: **`example.com/it`</li> <li>**Español: **`example.com/es`</li> <li>**Francés: **`example.com/fr`</li> </ul> Tendrías que cambiar su destino: <ul> <li>**De: **`^/checkout/orderPlaced`</li> <li>**Para: **`^/(it|es|fr)/checkout/orderPlaced`</li> </ul> Esto también debe hacerse para cada paso del embudo.

> ⚠️ La configuración de embudo de este artículo ha sido actualizada para acompañar la nueva versión de [carrito compartido del SmartCheckout](/es/tutorial/que-es-el-carrito-compartido). Para efectos de comparación, abajo tenemos la configuración antigua: <ol> <li>Producto: `/p($|\?)` (no obligatorio)</li> <li>Carrito: `^/checkout/(#/cart)?$`</li> <li>Identificación: `^/checkout/#/email`</li> <li>Fatos Personales: `^/checkout/#/profile`</li> <li>Envío: `^/checkout/#/shipping`</li> <li>Pago: `^/checkout/#/payment`</li> </ol>
