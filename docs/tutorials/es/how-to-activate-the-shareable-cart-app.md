---
title: 'Cómo activar la app Carrito Compartido (Social Selling)'
id: 1lS3fQdXpOoC0BTeVhydfg
status: PUBLISHED
createdAt: 2020-05-01T23:27:25.719Z
updatedAt: 2023-03-29T15:34:32.868Z
publishedAt: 2023-03-29T15:34:32.868Z
firstPublishedAt: 2020-05-01T23:33:47.947Z
contentType: tutorial
productTeam: Apps
author: 56yU9Wz6mLwmzo82TjgAHy
slug: como-activar-la-app-carrito-compartido
locale: es
legacySlug: como-activar-la-app-carrito-compartible
subcategory: 
---

La app [Carrito Compartido](https://apps.vtex.com/vtex-social-selling/p) permite a los vendedores seleccionar productos para sus clientes y compartir el carrito lleno por canales como WhatsApp, Facebook Messenger y correo electrónico.

![Shareable Cart Demo](https://images.ctfassets.net/alneenqid6w5/sf2zbYOG7janUXWbgkajd/93aa5f4ea002c5877a9620722af67890/Jy98kJ.gif)

Este artículo explica cómo instalar la app y configurar la funcionalidad en su tienda. Una vez completados los pasos de activación, sus vendedores podrán seguir las [instrucciones de uso](https://help.vtex.com/es/tutorial/como-usar-o-app-carrinho-compartilhavel--3ePPpkmeZ96GXbeIoGZbTN) para comenzar sus estrategias de Social Selling.

## Instalación

Para instalar la aplicación en su tienda, realice los siguientes pasos:

1. Acceda a la [página de la app](https://apps.vtex.com/vtex-social-selling/p) en VTEX App Store.
2. Haga clic en el botón **Obtener**.
3. Introduzca el nombre de su cuenta en el campo **Información de la cuenta**.
4. Haga clic en el botón **Confirmar pedido e iniciar instalación**.
5. Haga clic en el botón **Instalar**. 

Una vez completados estos pasos, la app se instalará en la cuenta informada. El siguiente paso es revisar la configuración de la app para ajustarla a las necesidades de su tienda.

<div class="alert alert-warning" role="alert">El nombre de su cuenta es el identificador utilizado para acceder a su Admin, en el lugar de <code class="c-link">{accountName}</code> en la dirección: <code>https://<span class="c-link">{accountName}</span>.myvtex.com/admin</code></div>

## Configuración

Al finalizar la instalación de la app en su tienda, será dirigido a su página de configuración. Se puede encontrar en *Apps > Mis Apps > Social Selling > Configuración*.

Revise los detalles de cada configuración a continuación. Si necesita hacer algún ajuste, no olvide pulsar el botón **Guardar** para que se apliquen los cambios en su tienda.

### Activar app

Cuando está activada, esta configuración hace que la interfaz de carrito compartible aparezca para los usuarios que acceden a su tienda a través del enlace:

`https://{Dirección web de su tienda}/checkout/?socialselling=on`

Cuando está desactiva, la interfaz deja de aparecer para todos los usuarios.

### Agregar vendedor

Esta configuración permite activar la identificación de los vendedores a través de campos específicos en el pedido.

- __Activo__: permite mostrar u ocultar el botón __Agregar código de vendedor__ en la interfaz de carrito compartible.

- __Agregar utmiCampaign__: habilita el campo `utmiCampaign` para rellenar.

- __Agregar marketingTag__: habilita el campo `marketingTag` para rellenar.

La elección del campo en el que se ingresará el código del vendedor depende de las necesidades de la tienda. En el formulario de pedido, `utmiCampaign` recibe apenas un valor, mientras que `marketingTags` permite ingresar múltiples valores.

Si se seleccionan ambas alternativas, el vendedor debe indicar qué campo está rellenando en la interfaz de carrito compartible.

<div class="alert alert-info" role="alert">La información registrada puede encontrarse en el card <strong>Promociones y Marketing</strong> en los <a href="https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/204AjAQseJe8RLUi8GAhiC?locale=pt" target="_blank">detalles del pedido</a> o en el objeto <code>marketingData</code> devuelto al obtener la información del pedido mediante <a href="https://developers.vtex.com/reference/orders#getorder">Orders API</a>.</div>

### Canales

Esta configuración le permite activar los canales que desea utilizar en la interfaz para compartir el carrito.

- Whatsapp
- Facebook Messenger
- SMS
- Enlace 
- Gmail
- Correo electrónico 

<div class="alert alert-warning" role="alert">Recuerde que el vendedor deberá iniciar sesión en las cuentas de las redes sociales y aplicaciones utilizadas para compartir en el dispositivo empleado para crear el carrito.</div>

## Personalización (opcional)

Si desea personalizar los colores de los botones de la interfaz de carrito compartible de su tienda, esto es posible a través de la [personalización del Checkout](https://help.vtex.com/es/tutorial/configurar-template-no-smartcheckout--frequentlyAskedQuestions_599).

En la siguiente imagen, la opción A muestra los colores originales y la opción B una posible personalización.

![shareable-cart-ui-customization](https://images.ctfassets.net/alneenqid6w5/7qzGILGsBqu6sD2n052VQl/ba27c3afc9c744907ac707f10658e8e1/shareable-cart-ui-customization.png)

El código que figura a continuación debe añadirse al final del archivo `checkout5-custom.css` o `checkout6-custom.css`, disponible para su personalización en *Configuración de la tienda > Checkout > Código*. El archivo que debe editarse depende de la versión de Checkout utilizada por su tienda.

<div class="alert alert-danger" role="alert"><strong>Atención:</strong> Errores en la personalización del checkout pueden afectar el flujo de compras de sus clientes. En caso de que no entienda el siguiente código, pida ayuda a su equipo técnico.</div>

Luego, basta con cambiar las propiedades en el código CSS según sea necesario. 

```
/* START Pick Color Nuevo Carrito */
.sb-b-erasecart .sb-icon,
.sb-b-erasecart .sb-label,
.sb-b-erasecart a:hover .sb-icon {
   color: #fff!important;
   background-color: #ee38ed!important
}
/* END Pick Color Nuevo Carrito */
/* START Pick Color Codigo Vendedor */
.sb-b-codigovendedor .sb-icon,
.sb-b-codigovendedor .sb-label,
.sb-b-codigovendedor a:hover .sb-icon {
   color: #fff!important;
   background-color: #a62a9a!important
}
/* END Pick Color Codigo Vendedor */
/* START Pick Color Whatsapp */
.sb-b-whatsapp .sb-icon,
.sb-b-whatsapp .sb-label,
.sb-b-whatsapp a:hover .sb-icon {
   color: #fff!important;
   background-color: #ad28ac!important
}
/* END Pick Color Whatsapp */
/* START Pick Color Facebook Messenger */
.sb-b-facebook-messenger .sb-icon,
.sb-b-facebook-messenger .sb-label,
.sb-b-facebook-messenger a:hover .sb-icon {
   color: #fff!important;
   background-color: #8e208d!important
}
/* END Pick Color Facebook Messenger */
/* START Pick Color SMS */
.sb-b-sms .sb-icon,
.sb-b-sms .sb-label,
.sb-b-sms a:hover .sb-icon {
   color: #fff!important;
   background-color: #751b74!important
}
/* END Pick Color SMS */
/* START Pick Color Link */
.sb-b-link .sb-icon,
.sb-b-link .sb-label,
.sb-b-link a:hover .sb-icon {
   color: #fff!important;
   background-color: #5a155a!important
}
/* END Pick Color Link */
/* START Pick Color GMAIL */
.sb-b-gmail .sb-icon,
.sb-b-gmail .sb-label,
.sb-b-gmail a:hover .sb-icon {
   color: #fff!important;
   background-color: #480b48!important
}
/* END Pick Color GMAIL */
/* START Pick Color Email */
.sb-b-email .sb-icon,
.sb-b-email .sb-label,
.sb-b-email a:hover .sb-icon {
   color: #fff!important;
   background-color: #330133!important
}
/* END Pick Color Email */
/* START Pick Color BUTTON OK */
.swal2-styled.swal2-confirm {
   border: 0!important;
   border-radius: .25em!important;
   background: initial!important;
   background-color: #31c431!important;
   color: #fff!important;
   font-size: 1.0625em!important;
}
/* END Pick Color BUTTON OK */
/* START Pick Color BUTTON CANCEL */
.swal2-styled.swal2-cancel {
   border: 0!important;
   border-radius: .25em!important;
   background: initial!important;
   background-color: #a0a0a0!important;
   color: #fff!important;
   font-size: 1.0625em!important;
}
/* END Pick Color BUTTON CANCEL */
```

## Preguntas frecuentes (FAQ)

### ¿Cómo esta funcionalidad es técnicamente posible?

La app utiliza la funcionalidad de [carrito compartido](https://help.vtex.com/es/tutorial/o-que-e-o-carrinho-compartilhado--3oKJZfoAoUm8g0ukCIGsUu?locale=pt) de VTEX, que permite que más de un cliente añada, elimine o actualice ítems e información de un mismo carrito.

### ¿Cómo identificar al vendedor y a la promoción?

Presentamos algunas posibilidades en la tabla de abajo. Recomendamos que el equipo de soporte técnico de la tienda evalúe la forma más sencilla de satisfacer las necesidades comerciales.

<table style="border-spacing:0;border-collapse:collapse" class="w-100 center mv7 bb b--gray">
  <thead>
    <tr class="bb b--muted-3">
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Escenario</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Descripción</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Detalles</th>
    </tr>
  </thead>
  <tbody>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width:5rem"><strong>1</strong></td>
   <td class="t-body pa5">utmi_campaign + marketingTag</td>
    <td class="t-body pa5" style="min-width:25rem">
      <p><code>utmiCampaign = codigoVendedor</code></p>
      <p><code>marketingTags[1] = promo10off</code></p>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5"><strong>2</strong></td>
   <td class="t-body pa5">marketingTag</td>
   <td class="t-body pa5">
     <p><code>marketingTags[1] = codigoVendedor</code></p>
     <p><code>marketingTags[2] = promo10off</code></p>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5"><strong>3</strong></td>
   <td class="t-body pa5">utmi_campaign + cupón</td>
   <td class="t-body pa5">
     <p><code>utmiCampaign = codigoVendedor</code></p>
     <p><code>coupon = cuponDescuento</code></p>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5"><strong>4</strong></td>
   <td class="t-body pa5">cupon</td>
   <td class="t-body pa5"><code>coupon = cuponDescuentoVendedor</code></td>
  </tr>
  </tbody>
</table>

<div class="alert alert-info" role="alert">En el escenario 4 es necesario <a href="https://help.vtex.com/es/tutorial/consigo-gerar-um-cupom-em-massa--frequentlyAskedQuestions_348?locale=pt">generar cupones masivamente</a>, para que cada vendedor tenga su propio cupón para la identificación y la activación del descuento.</div>

### ¿Quién rellena los datos personales y la dirección: el vendedor o el cliente?

El vendedor no necesita iniciar sesión para empezar la navegación y seleccionar los productos. El ingreso de los datos personales y la dirección por parte del vendedor es **opcional**.

Por consiguiente, tanto el vendedor como el cliente pueden ingresarlos, según la preferencia del cliente. **Los datos de pago siempre deben ser ingresados por el cliente**.

### ¿Tendrá el vendedor acceso a datos confidenciales, como la dirección y el pago?

No, el vendedor no tendrá acceso a los datos confidenciales del cliente. Aunque el vendedor rellene los datos personales y de entrega, el cliente podrá cambiarlos al recibir el enlace.

Por lo tanto, incluso si el cliente recibe un enlace con los datos del vendedor  vinculados, **necesita** confirmar en nombre de quién y en qué dirección, de hecho, se hará la compra.

### ¿Cómo puede el vendedor abordar al cliente?

Para que el abordaje del vendedor sea efectivo, lo ideal es presentar condiciones promocionales diferenciadas para privilegiar las ventas asistidas en relación con las compras realizadas directamente a través del comercio electrónico.

**Si el vendedor ya tiene un historial de contacto con el cliente**, puede contactar y atender la venta en tiempo real, creando el carrito mientras habla con el cliente.

**Si no tiene ese contacto directo**, el vendedor puede crear opciones de carrito según la estrategia de marketing y/o el perfil del cliente. Y luego abordar al cliente de forma activa, presentando las diferencias de cada opción.

### ¿Cómo puede el vendedor hacer un seguimiento de los pedidos?

El cliente siempre tendrá acceso al seguimiento de su pedido por correo electrónico. **Por eso, es esencial asegurarse de que se rellene correctamente**.

Para que el vendedor también tenga acceso puede:

- Utilizar el SAC de la empresa para atención a los vendedores.
- Crear una página de consulta de ventas personalizada.

La página de consulta de ventas personalizada se desarrollaría utilizando las [APIs de VTEX](https://developers.vtex.com/docs/getting-started-list-of-rest-apis) para consultar los pedidos que utilizaron el código del vendedor, dar visibilidad al status de cada pedido y facilitar el control de la conversión, la entrega y el cálculo de la comisión.

### ¿Cómo alterar un carrito que ya ha sido compartido?

Solo tiene que abrir el enlace compartido para cargar el carrito y hacer las alteraciones necesarias. Todos los usuarios con acceso al enlace pueden ver los ítems, añadir y eliminar productos, e incluso pagar el pedido.

### Si altero los ítems o datos de un carrito, ¿esto afecta otros carritos compartidos anteriormente?

No. Todos los cambios afectan solamente el carrito al que se accedió, identificable por el parámetro orderFormId visto en el enlace compartido.

### ¿Por cuánto tiempo existe un carrito compartido?

Cada carrito compartido creado tiene validez hasta que se finalice la compra o por un período máximo de dos años.

### ¿Por qué debo generar un nuevo carrito con cada venta?

El carrito compartido funciona como un carrito de compras normal, cada comprador debe tener el suyo. Compartir no crea varios carritos con los ítems escogidos, solo permite que más de un usuario modifique su contenido.

