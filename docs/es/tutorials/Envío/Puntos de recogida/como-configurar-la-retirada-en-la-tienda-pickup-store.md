---
title: '¿Cómo configurar la retirada en la tienda (Pickup Store)?'
id: frequentlyAskedQuestions_153
status: DRAFT
createdAt: 2019-01-24T20:45:50.866Z
updatedAt: 2020-12-03T15:23:21.852Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:01:24.853Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: configuring-the-pickup-in-store
legacySlug: como-configurar-la-retirada-en-la-tienda-pickup-store
locale: es
subcategoryId: 1c5Btie9ou2Gg2iUo0ggqM
---

<div class="alert alert-danger">
Este artículo está obsoleto. Para configurar correctamente el punto de retirada, acceda al artículo <a href="https://help.vtex.com/es/tutorial/configurar-puntos-de-recogida-pickup-points">Configurar Puntos de Recogida (Pickup Points)</a>
</div>

La configuración de retirada en la tienda permite que el cliente opte por no recibir el producto en casa, sino que lo irá a buscar en una tienda. Con los pasos abajo es posible darle al cliente la opción de elegir la tienda donde desea retirar su compra en el checkout, durante el flujo de compra. La configuración se realiza en 3 módulos diferentes de la de la plataforma, descritos abajo.

## Logística

1. Registre, en logistics, una transportadora para cada tienda física en la que el cliente puede retirar sus compras.
2. En la planilla de flete de esas transportadoras, recuerde de hacer disponibles todos los CEPs de clientes que pueden buscar productos en la tienda. No necesariamente serían atendidos por la entrega, pero pueden buscar pedidos.
3. Para esas transportadores, se recomienda que no se cobre valor de flete.
4. Una vez creadas todas las transportadoras, es necesario crear una transportadora con el nombre genérico de _Retirada no local _la que será usada en la programación del front-end de la tienda (en la opción de selección de flete).

![](https://images.contentful.com/alneenqid6w5/1aPl4HkPD8IagOICkCuigu/185dffc5b9bfd322697b6bf7ae0e7942/1.jpg)

## Customización visual (Front-end)

Deberá implementarse un archivo _javascript_ en el checkout de la tienda, de acuerdo a las orientaciones abajo.

1. El usuario hará la compra normal de los productos hasta la página de checkout.
2. Después de rellenar los datos personales, el usuario llega al área de selección de la transportadora. El comportamiento normal de la herramienta es el de presentar todas las transportadoras disponibles configuradas. Por lo tanto, después de configurarlas, el _javascript_ deberá “esconder” las opciones de las tiendas disponibles y presentar solo la transportadora genérica que fue creada en el punto 4 arriba llamada de **Retirada en Sucursal**.![OpcoesdeEnvio](https://images.contentful.com/alneenqid6w5/3YpLqm1q2ckOm4i4g8KWAQ/edc9d9ff1e32352306c1b152c12997e7/OpcoesdeEnvio.png)
3. Cuando el usuario seleccione la opción retirada en sucursal, el _javascript _abre un _lightbox _presentando en la pantalla las opciones de tiendas para que el usuario seleccione. Las opciones que aparecen aquí son las transportadoras registradas en el admin en los pasos 1 y 2. La imagen abajo muestra cómo optó la tienda por presentar visualmente la selección de las tiendas para retirada.![](https://images.contentful.com/alneenqid6w5/XZ0kevBW6sEK2sGKsYsGm/84c5681cf6c9cf923e90d337d3a727d8/3.jpg)
4. Cuando el usuario elige alguna de las opciones, el _javascript _cierra el_ lightbox_ y vuelve_ a_ la opción de selección de flete, informando que la selección se grabó con éxito.![](//assets.contentful.com/alneenqid6w5/4ekRwP5Hy0yE8ckaWGCAQG/b358a05721f4ce0cc0221fd6eb0ff955/4.bmp)
5. Después de esa vuelta a selección, el _javascript _debe modificar la opción de entrega genérica por la opción real de la tienda registrada, ésta que hasta el momento no estaba visible en el front-end.![](https://images.contentful.com/alneenqid6w5/3DlztWQIEUOqoomMeA8yiq/15f3ffa1fe1a10d004ab0c13938ec7fe/5.jpg)
6. Después de esa área de selección, el cliente sigue el flujo normal de compra.

_Inserte una leyenda informando en cuántos el pedido estará disponible para búsqueda en la tienda física._

## Pedidos

En el OMS será posible visualizar el pedido del cliente, en el que aparecerá cuál tienda seleccionó él para retirar el pedido. Esa información la puede encontrar en el área donde se presentan los productos.

![](https://images.contentful.com/alneenqid6w5/5LIVnwfutq826ciMOOcmUQ/6b1e5180ff186b6199460eb0d7a456c2/6.jpg)

¡Recuerde! El javascript necesario para este escenario debe ser desarrollado por el equipo de desarrollo de la tienda o por uno de nuestros [asociado acreditado](http://store.vtex.com/ "asociado acreditado").
