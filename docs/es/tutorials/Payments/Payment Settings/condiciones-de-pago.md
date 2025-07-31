---
title: 'Configurar condiciones de pago'
id: tutorials_455
status: PUBLISHED
createdAt: 2017-04-27T22:04:07.105Z
updatedAt: 2025-04-23T13:29:53.447Z
publishedAt: 2025-04-23T13:29:53.447Z
firstPublishedAt: 2017-04-27T23:03:26.687Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-configure-payment-conditions
locale: es
legacySlug: condiciones-de-pago
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Las condiciones de pago son las formas de pago que aparecen en el sitio para la finalización de la compra. A través de esta funcionalidad es posible configurar opciones como: cuotas, intereses, [condiciones especiales de pago](/es/tutorial/condicoes-especiais--tutorials_456#).

## Cómo configurar

Antes de comenzar a configurar un término de pago, es necesario registrar una [integración de pagos](/es/tutorial/afiliacoes-de-gateway/). 

Una vez que hayas definido tu proveedor, para elegir cualquiera de las condiciones de pago, siempre necesitarás:

- Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
- Activar la condición en el campo __Status__.
- Indicar en __Procesar con proveedor__, qué proveedor tramitará esta condición de pago.
- Defina si desea utilizar un [sistema antifraude](/es/tutorial/como-configurar-antifraude) en __Utilizar antifraude__.

Además, hay la posibilidad de definir si el pago será al contado o en cuotas, con o sin intereses y las condiciones especiales.

<div class="alert alert-warning">
 Cualquier cambio en las condiciones de pago puede llevar hasta 10 minutos en aparecer en el checkout de su tienda.
</div>

En los pasos siguientes, utilizaremos la tarjeta de crédito como ejemplo de condición de pago.

### Al contado

![pagamento-a-vista es](https://images.ctfassets.net/alneenqid6w5/16U7FyAeXiC88gWCwkKmSU/e4b130c50f632f7bb341675c3d69f5bb/pagamento_a_vista_es.png)

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Elija el medio de pago tarjeta de crédito (cualquier bandera).
4. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
5. Active la condición en el campo __Status__.
6. En el campo __Procesar con proveedor__, elija el proveedor que configuró (Importante: Antes de activar la condición de pago, comprobar con el gateway o adquirente si la bandera / medio de pago está disponible en su sistema).
7. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
8. En el campo __Pago al contado o en cuotas?__, seleccione __Al contado__.
9. Haga clic en __Guardar__.

<div class="alert alert-info">
En el Paso 5. puede elegir otros métodos de pago como tarjetas de débito, cobranded, privado, pagarés, boletos, PIX, entre otros.
</div>

### En cuotas sin interés

![parcelamento-sem-juros es](https://images.ctfassets.net/alneenqid6w5/5UuCXeD07moeaQiqqmuCMe/841c2830d1a8f031c3c0cbf716bcc4c5/pagamento_sem_juros_es.png)

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Elija el medio de pago tarjeta de crédito (cualquier bandera).
4. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
5. Active la condición en el campo __Status__.
6. En el campo __Proceso con proveedor__, elige el proveedor que configuraste.
7. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
8. En el campo __Pago al contado o en cuotas?__, seleccione __En cuotas__.
9.  Configure el número de cuotas secuenciales (ej.: 1-10) o individuales (ej.:1,3,6), en el campo __Número total de cuotas__.
10. Defina una cuota mínima, para que sea aplicada conforme el valor de cada producto.
11. El campo __Facturación__ sólo se tendrá en cuenta para cuotas que devenguen intereses, por lo que cualquier opción es válida.
12. Haga clic en __Guardar__.

### En cuotas con interés

![parcelamento-com-juros es](https://images.ctfassets.net/alneenqid6w5/46wBJ8tCUgCaWmAyOgkycY/37586fac3ee5495ab4be1e2aaa6eb733/pagamento_com_juros_es.png)

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Elija el medio de pago tarjeta de crédito (cualquier bandera).
4. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
5. Active la condición en el campo __Status__.
6. En el campo __Proceso con proveedor__, elige el proveedor que configuraste.
7. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
8. En el campo __Pago al contado o en cuotas?__, seleccione __En cuotas__.
9. Configure el número de cuotas secuenciales (ej.: 1-10) o individuales (ej.: 1,3,6), en el campo __Número total de cuotas__.
10. Defina una cuota mínima, para que sea aplicada conforme el valor de cada producto.
11. En __Facturación__, seleccione la fecha de facturación con el inicio o fin del período (valor utilizado para calcular el monto de la cuota que devenga intereses).
12. Haga clic en __Establecer tasa de interés__.
13. En __Interés(%)__, digite el valor del interés que desea si aplicado a cada una de las cuotas. El campo permite agregar valores con hasta 2 decimales (por ejemplo, `1,25` y `10,89` son valores posibles).
14. Para elegir entre interés compuesto e interés simple, haga clic en __Se aplicó el interés compuesto. Cambiar__. Aparecerá una casilla de verificación que ofrece ambas opciones.
15. Haga clic en __Guardar__.

![Juros - es](https://images.ctfassets.net/alneenqid6w5/6LByLxJORIELFs7gTY3kmA/93f4c4c2accb7c5a0efa08b31452b9fb/juros_es.png)

## Remover condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el condición de pago que desea eliminar.
3. Haga clic en el icono de la papelera.

![Remover condición de pago](https://images.ctfassets.net/alneenqid6w5/30AGmwCJOclqEqvcNPzuxV/76f4023f4e0262ebaefa8318e46330b3/remover_condicion_pago.png)
