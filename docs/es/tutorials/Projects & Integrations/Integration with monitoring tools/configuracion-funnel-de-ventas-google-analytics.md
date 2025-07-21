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
locale: es
legacySlug: configuracion-funnel-de-ventas-google-analytics
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

Las metas de **Google Analytics** sirven para ayudarle a evaluar si se cumplen los objetivos de su sitio. En este artículo se mostrará cómo configurar una meta de conversión, conocida como __Embudo de Ventas__, en las tiendas que utilizan SmartCheckout de VTEX. Para saber más acerca de las metas, acceda al tema de conversión en la ayuda de Google Analytics.

Con el embudo de ventas configurado, es posible acompañar y analizar los pasos del cliente hasta la finalización de un pedido. Para configurar el embudo de ventas vamos a tener en cuenta que el proceso de compra se inicia en la pantalla de su producto y pasa por el carrito de compras, checkout (datos personales, entrega, pago) y llega hasta la meta, que es la página de pedido confirmado.

<div class="alert alert-info">
Para facilitar, toda la configuración que se muestra en este artículo se puede <a href="https://support.google.com/analytics/answer/1032415?hl=es" target="_blank">importar directamente a Google Analytics</a> con <a href="https://analytics.google.com/analytics/web/template?uid=tTp2GkIJRiGodszJbq8RsA" target="_blank">esta plantilla</a>.
</div>

Para la configuración manual o la edición de una meta existente, el primer paso es acceder a Analytics y hacer clic en el botón __Administrador__ en la esquina inferior izquierda. A continuación, vaya a la opción __Metas__, de la columna "Vista".

![image](https://images.ctfassets.net/alneenqid6w5/1br6W1yFRuMWoO2wW8Iu04/de2c4c8938a856821b25fde18b2632a7/image.png)

En la pantalla de administración de metas, opte por crear una nueva o editar una ya existente.

__En el paso 1__ usted puede seguir con una meta de tipo personalizado:

![image](https://images.ctfassets.net/alneenqid6w5/7GPxGfEoaA2GUqOGA48U2a/3b731dfd468a389813d0da16802df98f/image.png)

__En el paso 2__ usted puede definir el nombre que prefiera para su meta y un código de posición (de uso interno de Google Analytics). En el tipo, vamos a usar "Destino":

![image](https://images.ctfassets.net/alneenqid6w5/6Sdi6PJ4e4SKiuUSeEgMii/d0f1e7fb597333867e4d56453922847a/image.png)

__En el paso 3__ tenemos las configuraciones más sensibles. En él configuramos la página que determina la conclusión de la meta y el camino que los clientes van a recorrer para alcanzarla.

En el campo "Destino" seleccione la opción de expresión regular e introduzca la dirección URL de la página de pedido completa: `^/checkout/orderPlaced`

![image](https://images.ctfassets.net/alneenqid6w5/6lxVMRQt7GWcqqSiCGe40g/177d2cf23b65d5f2134fc389a5646b9b/image.png)

Luego configure la ruta que el cliente va a recorrer hasta que finalice un pedido. En este caso, tenemos en cuenta que el proceso de compra se inicia en la pantalla del producto; entonces mi embudo servirá para medir la cantidad de clientes que accede a esa pantalla, cuántos pedidos se han finalizado y en qué paso los clientes están desistiendo de la compra.

Aún en el paso 3, active la opción __Embudo__ con los siguientes pasos:

 - __Producto__ =  `/p($|\?)`
 - __Carrito__ = `^/checkout/(\?.*)?(#/cart)$`
 - __Identificación__ = `^/checkout/(\?.*)?#/email$`
 - __Datos Personales__ = `^/checkout/(\?.*)?#/profile$`
 - __Envío__ = `^/checkout/(\?.*)?#/shipping$`
 - __Pago__ =  `^/checkout/(\?.*)?#/payment$`

![image](https://images.ctfassets.net/alneenqid6w5/4gzupPXI4w0gYWISUaCUQS/efb5f7cd239cae3cfd992b2b649e58b9/image.png)

Una forma de comprobar si la meta está configurada correctamente es usar el enlace "Compruebe esta meta". Google va a generar una simulación de la conversión de la meta en los últimos 7 días.

Ahora sólo hay que guardar la meta y esperar el tiempo que el sistema tarda en empezar a contabilizar los datos. Normalmente este tiempo es de 24 horas.

Para ver su embudo, consulte los informes de Analytics y acceda al menú __Conversiones__ y a la opción __Metas__.

<div class="alert alert-warning">
<p>Si tienes una tienda en varios idiomas con idiomas como <a href="https://support.google.com/webmasters/answer/182192?hl=es#locale-specific-urls">subdirectorios con gTLD</a> debes reemplazar cada <a href="https://support.google.com/analytics/answer/1034376?hl=es&ref_topic=1034375">símbolo de intercalación</a> (<code>^</code>) con una <a href="https://support.google.com/analytics/answer/1034324?hl=es">regex</a> que coincide con los diferentes subdirectorios. Por ejemplo, si su sitio web está disponible en:</p>
  <ul>
    <li><strong>Italiano: </strong><code>example.com/it</code></li>
    <li><strong>Español: </strong><code>example.com/es</code></li>
    <li><strong>Francés: </strong><code>example.com/fr</code></li>
  </ul>
  <p>Tendrías que cambiar su destino:</p>
  <ul>
<li><strong>De: </strong><code>^/checkout/orderPlaced</code></li> 
<li><strong>Para: </strong><code>^/(it|es|fr)/checkout/orderPlaced</code></li>
  </ul>
  <p>Esto también debe hacerse para cada paso del embudo.</p>
</div>

<div class="alert alert-warning">
<p>La configuración de embudo de este artículo ha sido actualizada para acompañar la nueva versión de <a href="http://help.vtex.com/es/tutorial/que-es-el-carrito-compartido">carrito compartido del SmartCheckout</a>.</p>
<p>Para efectos de comparación, abajo tenemos la configuración antigua:</p>
<ol>
<li>Producto: <code>/p($|\?)</code> (no obligatorio)</li>
<li>Carrito: <code>^/checkout/(#/cart)?$</code></li>
<li>Identificación: <code>^/checkout/#/email</code></li>
<li>Fatos Personales: <code>^/checkout/#/profile</code></li>
<li>Envío: <code>^/checkout/#/shipping</code></li>
<li>Pago: <code>^/checkout/#/payment</code></li>
</ol>
</div>
