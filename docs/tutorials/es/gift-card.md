---
title: Configurar Tarjeta de regalo
id: tutorials_995
status: PUBLISHED
createdAt: 2017-04-27T21:57:54.816Z
updatedAt: 2023-04-27T17:11:31.494Z
publishedAt: 2023-04-27T17:11:31.494Z
firstPublishedAt: 2017-04-27T23:03:42.674Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: gift-card
legacySlug: gift-card
subcategory: 3qWeS7abxCyC0G0GMq42gA
---

GiftCard, tarjeta de regalo o vale de compra es uno de los recursos del Módulo de Pagos que puede funcionar de dos maneras: 

- Medio de pago para compras.
- Programa de fidelidad que el administrador de la tienda puede conectar con el sistema VTEX.

Para conocer más detalles sobre la segunda opción de uso, consulte nuestra documentación técnica sobre [cómo integrar con GiftCard](https://help.vtex.com/es/tutorial/integrando-com-gift-card?locale=pt "cómo integrar con GiftCard").  

## Cómo crear el vale de compra por el Admin

Por estándar VTEX, el vale de compra se considera una forma de pago. Este producto tiene un valor nominal que puede utilizarse en el momento de la compra para reducir parte del valor de un pedido.

Para crear un nuevo vale de compra, siga los pasos a continuación:
<ol>
  <li>En el Admin VTEX, accede a <b>Promociones > Tarjetas de regalo</b>, o escribe __<b>Tarjetas de regalo</b> en la barra de búsqueda en la parte superior de la página.</li>
  <br>
  <li>Haga clic en el botón azul <b>Nuevo vale</b>.</li>
  <br>   
<div class = "alert alert-info">
  <p>En la página de finalización, el campo <b>Vale</b> es el ID del vale. Esto es generado automáticamente por el sistema VTEX y se mostrará en el SmartCheckout para vales que no estén asociados con un CPF o CNPJ exclusivo.</p>
</div>
<br>
  <li>Complete los campos presentados de acuerdo con las orientaciones que se indican a continuación:</li>
  <br>
<ul>  
  <li><b>Valor</b>: valor nominal que se concederá para el uso del vale.</li>
  <li><b>Fecha de vencimiento</b>: es la fecha de vigencia de uso del vale.</li>
  <li><b>Doc. de identificación</b>: dato que identifica y define el vale para un cliente específico.</li>
  <li><b>Colección</b>: determina la colección de productos que define los ítems a los que se puede aplicar el vale.</li>
</ul><br>

<div class="alert alert-warning">
<strong>Atención</strong>: los campos “Valor” y “Fecha de vencimiento” deben completarse de forma <strong>obligatoria</strong>. De lo contrario, el vale no se guardará.
</div>

<div class="alert alert-danger">
La funcionalidad de creación de tarjetas de regalo por colecciones de productos no está funcionando. Hay más información sobre este problema en el artículo <a href="https://help.vtex.com/en/known-issues/restricting-the-use-of-giftcards-to-a-collection-of-products-does-not-work--7kdbZUdscJLo1sGY6bo1jp" target="_blank">Restricting the use of GiftCards to a collection of products does not work</a>.
</div>

Después de completar los campos correctamente, el usuario puede seleccionar hasta tres opciones de configuración: 
<ul>
  <li><b>Restricto</b>: solo el cliente que hace referencia al CPF o CNPJ informado anteriormente puede usar este vale.</li>
  <li><b>Recargable</b>: mientras este vale esté disponible, su saldo puede alterarse.</li>
  <li><b>Reutilizable</b>: puede hacer nuevas compras con este vale hasta que su valor sea utilizado en su totalidad.</li>
</ul>
<br>
  <li>Por último, haga clic en el botón <b>Guardar</b>.</li>
<br>
<div class="alert alert-info">
La creación de cupones no tiene límite, sin embargo, solo se pueden exportar 8000 cupones a la vez.
</div>

</ol>

## Cómo crear un lote de vales de compra por el Admin

Para crear más de un nuevo vale de compra al mismo tiempo (un lote), siga los pasos a continuación:
<ol>
  <li>En el Admin VTEX, accede a <b>Promociones > Tarjetas de regalo</b>, o escribe <b>Tarjetas de regalo</b> en la barra de búsqueda en la parte superior de la página.</li>
  <br>
  <li>Haga clic en el botón azul <b>Nuevos vales en masa</b>.</li>
  <br>
  <li>Complete los campos presentados de acuerdo con las orientaciones que se indican a continuación:</li>
<br>
<ul>
  <li><b>Cantidad de vales</b>: este es el número de vales que desea crear como lote. Se puede crear un máximo de 500 (quinientos) vales por lote;</li>
  <li><b>Valor</b>: valor nominal que se concederá a todos los vales de este lote;</li>
  <li><b>Fecha de vencimiento</b>: es la fecha de vigencia de uso de todos los vales de este lote.</li>
  <li><b>Colección</b>: determina la colección de productos que define los ítems a los que se pueden aplicar los vales.</li>
<br>
<div class="alert alert-warning">
<strong>Atención</strong>: los campos “Cantidad de vales”, “Valor” y “Fecha de vencimiento” deben completarse de forma <strong>obligatoria</strong>. De lo contrario, los vales no se guardarán.
</div>
<br>
<div class="alert alert-danger">
La funcionalidad de creación de tarjetas de regalo por colecciones de productos no está funcionando. Hay más información sobre este problema en el artículo <a href="https://help.vtex.com/en/known-issues/restricting-the-use-of-giftcards-to-a-collection-of-products-does-not-work--7kdbZUdscJLo1sGY6bo1jp" target="_blank">Restricting the use of GiftCards to a collection of products does not work</a>.
</div>
<br>
  <li><b>Recargable</b>: mientras estos vales estén disponibles, sus saldos pueden alterarse.</li>
  <li><b>Reutilizable</b>: puede hacer nuevas compras con estos vales hasta que sus valores sean utilizados en su totalidad.</li>
</ul><br>  
  <li>Haga clic en el botón <b>Guardar</b>.</li>
<br>
Aparecerá una nueva pantalla confirmando que se ha generado el número solicitado de vales y también se mostrarán sus identificaciones.<br>
<br>
  <li>Por último, haga clic en el botón <b>Volver</b>.</li>
<br>
<div class="alert alert-info">
La creación de cupones no tiene límite, sin embargo, solo se pueden exportar 8000 cupones a la vez.
</div>
  </ol>

## Cómo configurar un Vale de Compra como un método de pago 

<div style="text-align: justify"> ¡Perfecto! Ahora que su vale de compra se creó, es necesario configurarlo como un método de pago. Eso hará que su Gift Card se muestre en el Checkout y, así, sus clientes podrán finalizar compras utilizando el crédito del vale.</div>

Realice las siguientes instrucciones: 

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en conector __Vale__.
4. Al inicio de la página, cree un __nombre__ para esta condición de pago.
5. Active la condición en el campo __Status__.
6. En __Procesar con afiliación__, seleccione el proveedor de giftcard deseado.
7. Haga clic en `Salvar`.

También puede agregar condiciones especiales de pago a su Vale de Compra. No hay límites en las condiciones que pueden aplicarse a un método de pago, especificamos cómo configurar cada una de estas [aquí](https://help.vtex.com/es/tutorial/condicoes-especiais--tutorials_456?locale=es "aquí"). 

Para finalizar, haga clic en el botón azul __“Salva”__ para guardar las configuraciones.

## Cómo gestionar el vale

Una vez creado el vale, puede ser gestionado de algunas formas a través del Admin. De este modo, el usuario puede: 

- Agregar o quitar valor, siempre y cuando el vale sea "Recargable".
- Ver el extracto.
- Consultar en cuál compra se utilizó el vale.
- Cancelar un vale.
