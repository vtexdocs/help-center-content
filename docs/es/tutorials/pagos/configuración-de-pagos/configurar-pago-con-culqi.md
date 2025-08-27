---
title: 'Configurar pago con Culqi'
id: 6LUOpYBpg48XSL8X0Le6e3
status: PUBLISHED
createdAt: 2023-11-16T13:31:38.132Z
updatedAt: 2025-08-26T18:27:28.927Z
publishedAt: 2025-08-26T18:27:28.927Z
firstPublishedAt: 2023-11-16T14:54:41.647Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-culqi
legacySlug: configurar-pago-con-culqi
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Culqi. Con este proveedor, su tienda puede realizar ventas a través de diferentes de Culqi.

Para configurar Culqi, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Culqi__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__, __Application Token__ y __Public key__ con los datos proporcionados por el Culqi.
5. En el campo __Captura automática de pago__, seleccione una de las siguientes opciones:
<ul>
    	<li>**Utiliza El Comportamiento Recomendado Por El Procesador de Pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li>**Imediatamente: Captura Automática Al Autorizar El Pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li>**Imediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Captura automática al autorizar el pago").</li>
   		<li>**Programado: Establece Cuándo Se Realizará La Captura Automática**: al seleccionar esta opción, se mostrará el campo **Periodo de tiempo programado en horas para la captura automática**, que deberá rellenarse con el periodo en el que se realizará la captura automática. Este periodo debe respetar los límites permitidos por el proveedor de pagos.</li>        
   		<li>**Desactivado: No Capturado Automáticamente**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>
6. En __Aceptar tarjetas de crédito__, seleccione si desea aceptar tarjetas de crédito como medio de pago.
7. En __Aceptar YAPE__, seleccione si deseas aceptar [YAPE](https://www.yape.com.pe/) como medio de pago.
8. En __Aceptar billeteras móviles__, seleccione si desea aceptar billeteras digitales como medio de pago.
9. En __Aceptar banca móvil o internet__, Seleccione si desea aceptar pagos a través de dispositivos móviles y banca por Internet.
10. En __Aceptar agentes y bodegas__, seleccione si desea aceptar pagos a través de agentes y bodegas.
11. En __Aceptar cuotéalo BCP__, seleccione si desea aceptar pagos en cuotas vía [cuotéalo BCP](https://www.viabcp.com/cuotealo).
12. En __Tiempo de vencimiento del pago__, seleccione el período (en días) para que venzan los pagos.
13. En los campos __URL de logo__, __Tema elegido__, __RSA Id__, __Llave pública RSA__, __Usuario Webhook__ y __Password Webhook__, ingrese la información proporcionada por Culqi.
14. En __¿Activar split y enviar receptores?__, seleccione si los pagos divididos estarán disponibles para el marketplace y sellers.
15. Haga clic en `Salvar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda__ > __Pago__ > __Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Elige la condición de pago __Culqi__.
4. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
5. Active la condición en el campo __Status__.
6. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
7. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Culqi puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
