---
title: 'Configurar condiciones de pago'
id: tutorials_455
status: PUBLISHED
createdAt: 2017-04-27T22:04:07.105Z
updatedAt: 2023-10-18T17:17:55.702Z
publishedAt: 2023-10-18T17:17:55.702Z
firstPublishedAt: 2017-04-27T23:03:26.687Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-configure-payment-conditions
locale: es
legacySlug: condiciones-de-pago
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Las condiciones de pago son las formas de pago que aparecen en el sitio para la finalización de la compra. A través de esta funcionalidad es posible configurar opciones como: cuotas, intereses, [condiciones especiales de pago](https://help.vtex.com/es/tutorial/condicoes-especiais--tutorials_456#).

## Cómo configurar

Antes de comenzar a configurar un término de pago, es necesario registrar una [afiliación de gateway](https://help.vtex.com/es/tutorial/afiliacoes-de-gateway/). 

Una vez que hayas definido tu afiliación de gateway, para elegir cualquiera de las condiciones de pago, siempre necesitarás:

- Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
- Activar la condición en el campo __Status__.
- Indicar en __Proceso con afiliación__, qué afiliación de gateway tramitará esta condición de pago.
- Defina si desea utilizar un [sistema antifraude](https://help.vtex.com/es/tutorial/como-configurar-antifraude) en __Usar antifraude__.

Además, hay la posibilidad de definir si el pago será a vista o en cuotas, con o sin intereses y las condiciones especiales.

>⚠️ Cualquier cambio en las condiciones de pago puede llevar hasta 10 minutos en aparecer en el checkout de su tienda.

En los pasos siguientes, utilizaremos la tarjeta de crédito como ejemplo de condición de pago.

### A vista

![pagamento-a-vista es](//images.ctfassets.net/alneenqid6w5/2nH3F7oSW4OMiMQKcoAWeM/a5a96ec62da667f4f853cfc70d2def29/pago-a-vista.png)

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Elija el medio de pago tarjeta de crédito (cualquier bandera).
4. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
5. Active la condición en el campo __Status__.
6. En el campo __Proceso con la afiliación__, elija la afiliación que configuró (Importante: Antes de activar la condición de pago, comprobar con el gateway o adquirente si la bandera / medio de pago está disponible en su sistema).
7. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
8. En el campo “A vista o en cuotas?”, seleccione A vista.
9. Haga clic en __Guardar__.

>ℹ️ En el Paso 5. puede elegir otros métodos de pago como tarjetas de débito, cobranded, privado, pagarés, boletos, PIX, entre otros.

### En cuotas sin interés

![parcelamento-sem-juros es](//images.ctfassets.net/alneenqid6w5/185SM0Kebg4S2a8IcysEsG/d0ec61a4b01dd19d2a9bcca5394d50a0/cuotas-sin-interes.png)

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Elija el medio de pago tarjeta de crédito (cualquier bandera).
4. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
5. Active la condición en el campo __Status__.
6. En el campo __Proceso con la afiliación__, elija la afiliación que configuró.
7. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
8. En el campo __A vista o en cuotas?__, seleccione en cuotas.
9.  Configure el número de cuotas secuenciales (ej.: 1-10) o individuales (ej.:1,3,6), en el campo __Cuotas totales__.
10. Defina una cuota mínima, para que sea aplicada conforme el valor de cada producto.
11. Seleccione la fecha de cobro con inicio o fin del período.
12. Haga clic en __Guardar__.

### En cuotas con interés

![parcelamento-com-juros es](//images.ctfassets.net/alneenqid6w5/3ZdPenx28oK0yG4QyeIq0c/b7184b8eeeda1573eaa60cf167be0e2c/cuotas-com-interes.png)

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Elija el medio de pago tarjeta de crédito (cualquier bandera).
4. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
5. Active la condición en el campo __Status__.
6. En el campo __Proceso con la afiliación__, elija la afiliación que configuró.
7. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
8. En el campo __A vista o en cuotas?__, seleccione en cuotas.
9. Configure el número de cuotas secuenciales (ej.: 1-10) o individuales (ej.: 1,3,6), en el campo __Cuotas totales__.
10. Defina una cuota mínima, para que sea aplicada conforme el valor de cada producto.
11. Seleccione la fecha de cobro con inicio o fin del período.
12. Haga clic en el botón __Set interés__.
13. Digite el valor del interés que desea si aplicado a cada una de las cuotas. __El campo permite agregar valores con hasta 2 decimales__ (por ejemplo, `1,25` y `10,89` son valores posibles).
14. Para elegir entre interés compuesto e interés simple, haga clic en __Interés compuesto aplicado. Cambiar__. Aparecerá una casilla de verificación que ofrece ambas opciones.
15. Haga clic en __Guardar__.

![Juros - es](//images.ctfassets.net/alneenqid6w5/5DQndlL3ixGVYBKBOTsVM7/70c11c8cbf6fa5d088c381c34d63454b/Juros_-_es.png)

#### Intereses Externos

En algunos países, los intereses de las compras parceladas son cobrados directamente por la institución financiera. Para estos casos, es posible activar el botón __Intereses externos__. Este botón rellena con `null` el valor de los intereses en el JSON enviado al conector. Este valor `null` indica que los intereses serán cobrados posteriormente por la institución financiera. Para activar esta feature, basta hacer clic en el botón de __Intereses Externos__ en la configuración del pago en cuotas con interés.

>ℹ️ Atención: la funcionalidad de interés externo solo es válida para algunas afiliaciones de gateway (asegúrese de que esta opción esté disponible al registrar la afiliación deseada). Los pedidos realizados por afiliaciones que no soporten esta funcionalidad serán cancelados en el sistema.

## Remover condición de pago

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. En la pestana __Condiciones de pago__, haga clic en el condición de pago que desea eliminar.
3. Haga clic en el icono de la papelera.

![Remover condición de pago](//images.ctfassets.net/alneenqid6w5/30AGmwCJOclqEqvcNPzuxV/76f4023f4e0262ebaefa8318e46330b3/remover_condicion_pago.png)
