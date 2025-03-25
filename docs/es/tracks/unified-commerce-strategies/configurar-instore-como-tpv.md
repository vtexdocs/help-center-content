---
title: 'inStore como TPV'
id: 5XWo7q35jkDDq3PxUs1EVi
status: ARCHIVED
createdAt: 2020-07-01T12:46:45.819Z
updatedAt: 2022-02-21T16:56:37.470Z
publishedAt: 
firstPublishedAt: 2020-07-01T13:10:52.289Z
contentType: trackArticle
productTeam: Shopping
slugEN: setting-up-instore-as-a-pos
locale: es
trackId: 3WGDRRhc3vf1MJb9zGncnv
trackSlugES: estrategias-de-comercio-unificado
---

El propósito de esta guía es enseñar los pasos necesarios para usar la aplicación inStore como punto de venta (TPV) en sus tiendas físicas. Es decir, los vendedores de su tienda física deben poder cerrar las compras a través de inStore, lo que significa que el app debe estar integrado con una máquina de tarjetas y debe poder emitir facturas.

## Prerrequisitos

En primer lugar, consideremos los requisitos previos que su tienda necesita. Consulte nuestro artículo sobre [Requisitos previos para utilizar inStore](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u "Requisitos previos para utilizar inStore").

## Implementar inStore como TPV

>ℹ️ Aunque es posible implementar inStore como TPV de otras formas, en este artículo explicaremos cómo hacerlo utilizando las features de Cuenta Franquicia y Seller White Label. Esto se debe a que esta es la arquitectura más recomendada por VTEX para este tipo de proyecto.

Estos son los pasos para implementar inStore como TPV:

1. Cree cuentas franquicia Seller White Label.
2. Cree puntos de recogida para sus tiendas físicas.
3. Conecte los puntos de recogida a los inventarios de la tienda física local.
4. Cree una integración con un sistema responsable por emitir facturas.

### Crear cuenta franquicia

Recomendamos utilizar la feature de [cuenta franquicia](https://help.vtex.com/es/tutorial/definicoes-de-conta-franquia-e-seller-white-label) para implementar inStore como TPV. Con ella, cada una de sus tiendas físicas tendrá un ambiente separado, con su propia logística, pero todas heredarán el catálogo del ambiente principal.

Para solicitar la creación de una cuenta franquicia,  póngase en contacto con [nuestro Soporte](https://support.vtex.com/hc/es-419/requests).

Sus cuentas franquicia funcionarán como Sellers White Label. Esto significa que, cuando se realize un pedido en cualquier canal, ya sea una tienda física o el e-commerce, el sistema buscará entre todos aquellos que puedan entregar con el mejor SLA.

La logística y el inventario de cada cuenta de franquicia se pueden administrar en un entorno VTEX separado. Para acceder a este entorno, ingrese la URL `{{AccountName}}.myvtex.com/admin`, donde `{{AccountName}}` debe reemplazarse con el nombre de la cuenta franquicia.

### Crear puntos de recogida

Para que su cliente pueda comprar (ya sea en la tienda o por otro canal) y recoger productos en la tienda, usted debe configurar tiendas físicas como puntos de recogida. Para hacer esto, siga los pasos a continuación.

1. Inicie sesión en el Admin de la cuenta franquicia deseada y, en el menú lateral, haga clic en __Inventario y envío__.
2. Haga clic en __Puntos de recogida__.
3. Haga clic en el botón __Agregar punto de recogida__.
4. Complete la información sobre la tienda (nombre, dirección y horario de apertura).

### Conecte los puntos de recogida a los inventarios

Ahora, debe conectar el punto de recogida al inventario local de la tienda física. Es decir, debe informar al sistema que los productos que se recogerán en ese punto de recogida (la tienda misma) saldrán del inventario local (es decir, también del inventario propio de la tienda). Para hacer esto, siga los pasos a continuación.

1. En el menú lateral del Admin, haga clic en __Inventario y envío__, si aún no está allí.
2. Haga clic en la pestaña __Almaceness__.
3. Seleccione el almacén local de la tienda física (o cree uno, si aún no lo ha hecho).
4. En la sección Almacén inStore, seleccione el __punto de recogida__ que acaba de crear en el menú desplegable.

Con eso, su inventario está conectado al punto de recogida, y los clientes ya pueden recoger productos en esta tienda física.

### Generar integración con sistema de emisión de facturas

Para usar inStore como punto de venta, además del [adquirente y la máquina de tarjetas](https://help.vtex.com/es/tracks/instore-payments--43B4Nr7uZva5UdwWEt3PEy) conectados al sistema, es necesario integrarse con un sistema de emisión de facturas.
