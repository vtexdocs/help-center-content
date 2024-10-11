---
title: 'Impresión del resumen del pedido'
id: 5UeqJA3sHp5goJacvHwPoS
status: PUBLISHED
createdAt: 2021-08-05T14:40:53.752Z
updatedAt: 2023-07-26T19:01:33.402Z
publishedAt: 2023-07-26T19:01:33.402Z
firstPublishedAt: 2021-08-05T14:47:18.680Z
contentType: trackArticle
productTeam: Shopping
slugEN: printing-an-order-summary
locale: es
trackId: 4BYzQIwyOHvnmnCYQgLzdr
trackSlugES: instore-utilizando-la-aplicación
---

Al finalizar un pedido utilizando VTEX Sales App, es posible imprimir un resumen del mismo si esta personalización está habilitada y si hay un dispositivo de impresión correctamente configurado.

Para ello, el vendedor puede hacer clic en el botón `Imprimir pedido` en la pantalla del pedido finalizado, como se ilustra a continuación. Otra opción es configurar VTEX Sales App para que imprima el resumen del pedido automáticamente en cuanto se finalice el pedido.

![15. Configurar impressão de resumo do pedido - 1 - ES](https://images.ctfassets.net/alneenqid6w5/I5tu0upqIMUVTCxTHFfmL/5a3aabdd6ad7b66958a744955fbfa979/print-order-es.png)

Para habilitar la impresión del resumen del pedido, sigue los pasos descritos a continuación.

## 1. Personalización de VTEX Sales App

En primer lugar, los desarrolladores de tu tienda tienen que seguir las instrucciones de la guía [Set up the order summary printing](https://developers.vtex.com/vtex-rest-api/docs/set-up-the-order-summary-printing) para habilitar esta personalización.

## 2. Configuración del dispositivo de impresión en VTEX Sales App

A continuación, debes configurar una impresora conectada a VTEX Sales App para imprimir los resúmenes de los pedidos.

### Requisitos previos

Para emparejar VTEX Sales App con una impresora, deben cumplirse los siguientes requisitos previos:

* Utilizar un computador con sistema operativo Windows 7 o superior.
* Si no tienes VTEX Sales App en tu computador, instala la aplicación siguiendo nuestra guía de [Instalación](https://help.vtex.com/es/tracks/instore-usando-el-app--4BYzQIwyOHvnmnCYQgLzdr/2rPSJ8519UCCZo5uEBkqxh).
* Obtener un par de credenciales (AppKey y AppToken) con los permisos de acceso correspondientes. Lee el artículo [Claves de aplicación](https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet) para obtener más información.

>ℹ️ Recomendamos que el perfil de acceso relacionado con estas credenciales sea el **VTEX Sales App Sales Person**. Sin embargo, también se puede utilizar un perfil con acceso a otros módulos del Admin, como **Admin Super**.

### Paso a paso

Después de obtener el AppKey y el AppToken, sigue los pasos a continuación.

1. Conecte la impresora a través de Wi-Fi, Bluetooth o USB al computador en el que está instalado VTEX Sales App.
2. Abre la aplicación VTEX Sales App e introduce el nombre de la tienda en la que quieres configurar la impresora.
3. En el menú principal de inStore, en la sección **Configuración**, haz clic en la opción <i class="fas fa-cog"></i> **Configurar el dispositivo**, ilustrada a continuación.

![15. Configurar impressão de resumo do pedido - 2 - ES](//images.ctfassets.net/alneenqid6w5/KxD08Gfiwa8mj6y6KzaKu/901224ec3c5342310a3ad2c54274caf8/configuracion-es.png)

<ol start="4">
  <li>A continuación, verás el resumen del dispositivo configurado. Si es la primera vez que se realiza esta configuración, los campos en la pantalla estarán vacíos, como se muestra en la siguiente imagen. Si un dispositivo ha sido configurado anteriormente, verás el <b>Nombre del dispositivo</b> y la <b>Impresora estándar</b>. Haz clic en el botón <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Editar</span>.</li>
</ol>

![15. Configurar impressão de resumo do pedido - 4 - ES](//images.ctfassets.net/alneenqid6w5/4Xrv2WFGkaQ5ejAYZlF3ly/f8ad79cb1907905f230318c0c25ad964/image_4__1_.png)

<ol start="5">
  <li>Rellena el formulario con los campos descritos a continuación.
    <ul>
      <li><b>App Key:</b> nombre de la clave de aplicación. Lee la sección <a href="#requisitos-previos" rel="noopener noreferrer" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Requisitos previos</a> para obtener más información.</li>
    <li><b>App Token:</b> token de la clave de aplicación. Lee la sección <a href="#requisitos-previos" rel="noopener noreferrer" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Requisitos previos</a> para obtener más información.</li>
    <li><b>Introduce el nombre del dispositivo:</b> nombre que deseas utilizar para identificar el dispositivo.</li>
    <li><b>Impresora predeterminada:</b>  selecciona la impresora de la lista de impresoras conectadas a tu computador.</li></ul></li>
  <li>Después de introducir estos datos, haz clic en <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Configurar</span>.</li>
</ol>

Una vez finalizado este proceso, los vendedores podrán seleccionar la impresora de la lista de opciones para imprimir sus resúmenes de pedidos en VTEX Sales App. El sistema identifica la impresora a través de Internet.
