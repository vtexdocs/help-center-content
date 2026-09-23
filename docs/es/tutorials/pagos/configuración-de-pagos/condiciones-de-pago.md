---
title: 'Configurar condiciones de pago'
id: tutorials_455
status: PUBLISHED
createdAt: 2017-04-27T22:04:07.105Z
updatedAt: 2026-07-03T00:00:00.000Z
publishedAt: 2025-04-23T13:29:53.447Z
firstPublishedAt: 2017-04-27T23:03:26.687Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-configure-payment-conditions
legacySlug: condiciones-de-pago
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Las condiciones de pago son las formas de pago que se muestran en el sitio web para finalizar la compra. Con esta funcionalidad puedes configurar opciones como pagos en cuotas, intereses, condiciones especiales, etc.

## Configuración

Antes de iniciar la configuración de una condición de pago debes registrar una [integración de pago](/es/docs/tutorials/afiliaciones-de-gateway).

Una vez definido tu proveedor, para cualquiera de las condiciones de pago que vayas a elegir, siempre será necesario:

- Llenar el campo **Nombre de la condición** con un nombre de tu preferencia para identificarla.
- Activar la condición en el campo **Status**.
- Indicar en **Procesar con proveedor** el proveedor que procesará esta condición de pago.
- Definir si deseas utilizar un [sistema antifraude](/es/docs/tutorials/como-configurar-antifraude) en **Utilizar antifraude**.

Además, puedes definir si el pago será al contado o en cuotas, con o sin interés, o con [condiciones especiales de pago](/es/docs/tutorials/condiciones-especiales).

## Información sobre cuotas e intereses

### Nombre de la condición

Identificador interno de la condición de pago (regla) en el Admin VTEX. Puedes crear varias reglas para el mismo medio de pago, como por ejemplo: "Visa 10 cuotas sin interés" y "Visa 12 cuotas con interés"), siempre que se diferencien por red de tarjeta, cantidad de cuotas o [condiciones especiales](/es/docs/tutorials/condiciones-especiales).

### Número total de cuotas

Define cuántas opciones de pago en cuotas estarán disponibles:

- **Intervalo:** crea opciones de cuotas dentro de un rango continuo. Por ejemplo, `1-10` crea opciones de 1 a 10 cuotas.
- **Única:** crea solo las opciones de cuotas indicadas. Por ejemplo, `1,3,6` crea únicamente las opciones de 1, 3 y 6 cuotas.

### Cuota mínima

El campo **Cuota mínima** define el valor mínimo de cada cuota. Las cuotas cuyo valor calculado quede por debajo de ese límite no se muestran. Por ejemplo, con una cuota mínima de 50.00 USD y un pedido de 200.00 USD, se ofrecerá un máximo de 4 cuotas (50.00 USD por cuota), aunque se hayan configurado hasta 10 cuotas.

### Facturación

Afecta solo los pagos en cuotas con interés. Define si el cobro se calcula al principio o al final de cada periodo, lo que impacta el valor final de la cuota. Consulta las fórmulas en [¿Cómo se hace el cálculo del pago en cuotas con interés compuesto?](/es/docs/tutorials/como-se-hace-el-calculo-del-pago-en-plazos-con-intereses-compuesto).

### Interés por cuota

Al hacer clic en **Establecer tasa de interés** se muestra una lista con campos de interés para cada cantidad de cuotas. Puedes definir tasas diferentes por opción (por ejemplo: 1.99% en 6 cuotas y 2.49% en 12 cuotas). Para más detalles sobre las diferencias entre interés simple y compuesto, consulta [Cómo elegir el tipo de interés de una condición de pago](/es/docs/tutorials/como-elegir-el-tipo-de-interes-de-una-condicion-de-pago).

### Visualización de cuotas en el checkout

El objetivo del pago en cuotas es reducir el valor que se paga cada mes. Cuando aumentar el número de cuotas no reduce el valor de cada cuota frente a una opción con menos cuotas, la plataforma no muestra esas opciones en el checkout porque no representan una ventaja para el cliente.

Este comportamiento puede ocurrir, por ejemplo, cuando el redondeo del valor de la cuota da como resultado el mismo valor en opciones con diferente número de cuotas.

> ℹ️ Si configuraste más cuotas de las que se muestran en el checkout, verifica la **Cuota mínima**, el valor del pedido y las tasas de interés configuradas para cada cantidad de cuotas.

> ⚠️ Cualquier cambio en las condiciones de pago puede tardar hasta 10 minutos en mostrarse en el checkout de tu tienda.

En las siguientes instrucciones vamos a utilizar la tarjeta de crédito como ejemplo de condición de pago.

### Al contado

![pago-al-contado es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_1.png)

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Condiciones de pago**, haz clic en el botón **+**.
3. Elige el medio de pago tarjeta de crédito (cualquier red).
4. Completa el campo **Nombre de la condición** con un nombre de tu preferencia para identificarla.
5. Activa la condición en el campo **Status**.
6. En el campo **Procesar con proveedor**, elige el proveedor que configuraste. Importante: antes de activar la condición de pago, verifica con el gateway o adquirente si la marca/medio de pago está disponible en su sistema.
7. Si deseas utilizar un sistema antifraude, selecciona la opción **Utilizar antifraude**.
8. En el campo **¿Pago al contado o en cuotas?**, selecciona **Al contado**.
9. Haz clic en **Guardar**.

> ℹ️ En el paso 3 puedes elegir otros medios de pago como tarjetas de débito, cobranded o private label, además de pagarés, boletos, Pix (Brasil), entre otros.

### Cuotas sin interés

![cuotas-sin-interés es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_2.png)

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Condiciones de pago**, haz clic en el botón **+**.
3. Elige el medio de pago tarjeta de crédito (cualquier red).
4. Completa el campo **Nombre de la condición** con un nombre de tu preferencia para identificarla.
5. Activa la condición en el campo **Status**.
6. En el campo **Procesar con proveedor**, elige el proveedor que configuraste.
7. Si deseas utilizar un sistema antifraude, selecciona la opción **Utilizar antifraude**.
8. En el campo **¿Pago al contado o en cuotas?**, selecciona **En cuotas**.
9. En el campo **Número total de cuotas**, configura el rango de cuotas secuenciales (ej.: 1-10) o las cuotas únicas (ej.: 1,3,6).
10. Define la **Cuota mínima** (valor mínimo de cada cuota). Las cuotas cuyo valor calculado quede por debajo de este límite no se mostrarán en el checkout.
11. El campo **Facturación** solo se tomará en cuenta para pagos en cuotas con interés, por lo que cualquier opción es válida.
12. Haz clic en **Guardar**.

### Cuotas con interés

![cuotas-con-interés es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_3.png)

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Condiciones de pago**, haz clic en el botón **+**.
3. Elige el medio de pago tarjeta de crédito (cualquier red).
4. Completa el campo **Nombre de la condición** con un nombre de tu preferencia para identificarla.
5. Activa la condición en el campo **Status**.
6. En el campo **Procesar con proveedor**, elige el proveedor que configuraste.
7. Si deseas utilizar un sistema antifraude, selecciona la opción **Utilizar antifraude**.
8. En el campo **¿Pago al contado o en cuotas?**, selecciona **En cuotas**.
9. En el campo **Número total de cuotas**, configura el rango de cuotas secuenciales (ej.: 1-10) o únicas (ej.: 1,3,6).
10. Define la **Cuota mínima** (valor mínimo de cada cuota). Las cuotas cuyo valor calculado quede por debajo de ese límite no se mostrarán en el checkout.
11. En **Facturación**, selecciona la fecha de cobro en el inicio o fin del periodo (valor utilizado para el cálculo del valor de la cuota con interés).
12. Haz clic en **Establecer tasa de interés**.
13. En **Interés(%)**, configura la tasa de interés para cada cantidad de cuotas. Puedes definir tasas distintas por opción (por ejemplo: 1.99% en 6 cuotas y 2.49% en 12 cuotas). El campo acepta valores con hasta 2 decimales, por ejemplo, `1.25` o `10.89`.
14. Para escoger entre interés compuesto o simple, haz clic en **Se aplicó el interés compuesto. Cambiar**. Se muestra un menú desplegable con las dos opciones.
15. Haz clic en **Guardar**.

![Interés - es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_4.png)

## Eliminar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Condiciones de pago**, haz clic en la condición de pago que deseas eliminar.
3. Haz clic en el ícono de papelera.

![Eliminar condición de pago](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_5.png)

## Más información

- [Configurar condiciones especiales de pago](https://help.vtex.com/es/docs/tutorials/condiciones-especiales)
- [Cómo elegir el tipo de interés de una condición de pago](https://help.vtex.com/es/docs/tutorials/como-elegir-el-tipo-de-interes-de-una-condicion-de-pago)
- [¿Cómo se hace el cálculo del pago en cuotas con interés compuesto?](https://help.vtex.com/es/docs/tutorials/como-se-hace-el-calculo-del-pago-en-plazos-con-intereses-compuesto)