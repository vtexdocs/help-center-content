---
title: 'Configurar boleto (Brasil)'
createdAt: 2017-04-27T22:04:55.249Z
updatedAt: 2026-10-05T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: how-to-configure-a-boleto
locale: es
hidden: false
---
En VTEX, si tu tienda opera en Brasil puede ofrecer el boleto como medio de pago. Para configurarlo sigue estos pasos:

1. [Registrar proveedor del boleto](#registrar-proveedor-del-boleto)
2. [Configurar condición de pago](#configurar-condicion-de-pago)
3. [Validar la configuración](#validar-la-configuracion)

## Antes de comenzar

Antes de configurar el boleto verifica que tu tienda tenga:

- Contrato con un banco o proveedor de pagos que procese boletos. Para saber qué proveedores están disponibles en tu operación accede a [Lista de proveedores de pago por país](/es/docs/tutorials/lista-de-proveedores-de-pago-por-pais).
- Las credenciales proporcionadas por el banco o proveedor de pago, necesarias para registrar el proveedor en el Admin VTEX.
- Permiso de acceso al módulo Pago en el Admin VTEX.

## Registrar proveedor del boleto

El proveedor de pago registrado en tu tienda procesa los boletos bancarios. Para registrar un proveedor sigue estos pasos:

1. En el Admin VTEX accede a **Configuración de la tienda > Pago > Proveedores**, o ingresa **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores haz clic en el botón `Nuevo proveedor`.
3. Ingresa el nombre del proveedor que procesa el boleto en la barra de búsqueda y haz clic en el resultado correspondiente.
4. Rellena los campos del formulario según los datos proporcionados por el proveedor o el banco.
5. Haz clic en `Guardar`.

> ℹ️ Los campos que se muestran en el formulario varían según el proveedor. Para consultar las instrucciones de cada proveedor abre el artículo correspondiente en la [Lista de proveedores de pago por país](/es/docs/tutorials/lista-de-proveedores-de-pago-por-pais).

## Configurar condición de pago

Para crear la condición de pago de boleto que se mostrará en el checkout sigue los pasos a continuación:

1. En el Admin VTEX accede a **Configuración de la tienda > Pago > Configuración**, o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Agregar nueva condición de pago para** haz clic en el botón de agregar condición `+`.
3. En **Boleto** selecciona la opción **Boleto Bancário**.
4. Activa la condición en el campo **Status**.
5. En **Procesar con proveedor** selecciona el proveedor configurado anteriormente.
6. (Opcional) Define [condiciones especiales de pago](/es/docs/tutorials/condiciones-especiales) para el boleto bancario.
7. Haz clic en `Guardar`.

## Validar la configuración

1. Espera hasta 10 minutos después de guardar la condición de pago.
2. En el checkout de la tienda confirma que **Boleto Bancário** aparece como opción de pago.

Si la opción no aparece después de ese plazo, consulta [Resolución de problemas](#resolucion-de-problemas).

## Vencimiento y cancelación del boleto

Algunos proveedores de pago permiten configurar la vigencia del boleto, es decir, el plazo (en días) que el cliente tiene para pagarlo, directamente en la pantalla de configuración del proveedor. Cuando el proveedor no ofrece este campo en el Admin VTEX la configuración debe realizarse directamente con el soporte del proveedor.

El plazo de cancelación de un pedido con boleto no pagado depende de la vigencia del boleto y del plazo de liberación de la reserva de stock. Para conocer el cálculo de ambos plazos accede a [¿En cuánto tiempo un pedido de boleto sin pago se cancela?](/es/docs/tutorials/en-cuanto-tiempo-un-pedido-de-boleto-sin-pago-se-cancela)

## Resolución de problemas

Si el boleto no se muestra en el checkout después de 10 minutos verifica las siguientes causas:

- **Condición de pago inactiva**: en la pestaña **Condiciones de pago** confirma que el campo **Status** esté activo.
- **Proveedor sin soporte para boleto**: confirma con el proveedor de pago o con el banco si el boleto está disponible en su sistema para tu tienda.
- **Proveedor incorrecto en la condición de pago**: en el campo **Procesar con proveedor** selecciona el proveedor que procesa el boleto.

## Próximos pasos

- [¿Cómo se hace la aprobación de pago del boleto?](/es/docs/tutorials/como-se-hace-la-aprobacion-de-pago-del-boleto)
- [Aprobar pago de boleto](/es/docs/tutorials/como-aprobar-un-pago)
- [¿En cuánto tiempo un pedido de boleto sin pago se cancela?](/es/docs/tutorials/en-cuanto-tiempo-un-pedido-de-boleto-sin-pago-se-cancela)
- [Cambiar el logotipo del boleto](/es/docs/tutorials/cambiar-el-logotipo-del-boleto)
