---
title: 'Configurar una condición de pago '
id: 6bzGxlz4inf8sKmvZ1c7i3
status: PUBLISHED
createdAt: 2019-11-26T17:47:27.426Z
updatedAt: 2024-03-13T21:42:43.233Z
publishedAt: 2024-03-13T21:42:43.233Z
firstPublishedAt: 2019-11-26T20:43:48.321Z
contentType: trackArticle
productTeam: Financial
slug: configurar-una-condicion-de-pago
locale: es
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugES: pagos
---

Ahora, el siguiente paso es configurar las condiciones de pago.

Pero antes debemos aclarar la diferencia entre los medios de pago y las condiciones de pago. Como ambos conceptos son semejantes, a menudo hay confusión al momento de configurar las condiciones de pago.

## Medios de pago
Los medios de pago son las formas que pueden utilizarse para que el dinero cambie de manos y, así, hacer viable las relaciones de compra y venta. VTEX da soporte a varios medios de pago, como tarjetas de crédito y débito, boletos  bancarios, billeteras digitales, vales y muchos otros.

## Condiciones de pago
Las condiciones de pago son las reglas que debe seguir una persona que desee comprar en su tienda. En la práctica, las condiciones de pago son las opciones que aparecen en la pantalla del usuario al momento de finalizar la compra.

Dicho esto, podemos pasar a configurar el medio de pago en sí.

## Configuraciones generales

Para configurar una condición de pago, primero debe registrar un proveedor de pago, como se describe en [Registrar proveedores de pago y antifraude](https://help.vtex.com/es/tutorial/afiliaciones-de-gateway--tutorials_444).

Independientemente de la condición de pago a elegir, siempre se deberán realizar las siguientes acciones:
- Definir el nombre de la regla según lo que representa, para ayudar a identificarla;
- Actívalo;
- Definir qué proveedor de pago procesará esta condición;
- Defina si utilizará o no [antifraude](https://help.vtex.com/es/tutorial/como-configurar-antifraude--tutorials_446).

Además, para algunas condiciones de pago puede ser necesario definir si el pago se realizará en efectivo o a plazos, con o sin intereses y [condiciones especiales](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).

Como la __Tarjeta de Crédito__ es un método de pago que te permite aplicar todas estas características, mira a continuación cómo configurarla:

## Al contado 
Aquí, antes de activar la condición de pago, debe verificar con el gateway o el adquirente si la bandera o el medio de pago está disponible en su sistema.

Hecho esto, siga las instrucciones:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en **Condiciones de Pago**.
3. Haga clic en el botón **+**.
4. Escoja el medio de pago tarjeta de crédito.
5. Denomine la regla en el campo **Nombre de la Regla**.
6. Active la condición en el campo **Status**.
7. En el campo **Procesar con proveedor**, elija el proveedor previamente configurado.
8. En el campo **¿Al Contado o En Cuotas?**, seleccione la opción **Al Contado**.
9. Haga clic en **Guardar**.

## En cuotas 

La configuración para el pago en cuotas es muy similar a la de los pagos al contado. Sin embargo, para esta opción, es posible definir si los pagos se realizarán: sin intereses, con intereses o mediante cuotas automáticas.

### Sin intereses 

Cabe mencionar que el campo "Facturación" solo se tendrá en cuenta para cuotas con intereses. Por lo tanto, cualquier opción es válida.

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en **Condiciones de Pago**.
3. Haga clic en el botón **+**.
4. Escoja el medio de pago tarjeta de crédito.
5. Denomine la regla en el campo **Nombre de la Regla**.
6. Active la condición en el campo **Status**.
7. En el campo **Procesar con proveedor**, elija el proveedor previamente configurado.
8. En el campo **¿Al Contado o En Cuotas?**, seleccione la opción **En Cuotas**.
9. Configure el número de cuotas secuenciales o individuales en el campo Total de Cuotas.
10. Defina una cuota mínima que se aplicará de acuerdo con el valor de cada producto.
11. Haga clic en **Guardar**.

### Con intereses 
Si decide configurar un medio de pago que acepte cuotas con intereses, este campo acepta valores de hasta dos decimales. Por ejemplo: 1.25 o 10.89 son valores posibles.

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en **Condiciones de Pago**.
3. Haga clic en el botón **+**.
4. Escoja el medio de pago tarjeta de crédito.
5. Denomine la regla en el campo **Nombre de la Regla**.
6. Active la condición en el campo **Status**.
7. En el campo **Procesar con proveedor**, elija el proveedor previamente configurado.
8. En el campo **¿Al Contado o En Cuotas?**, seleccione la opción **En Cuotas**.
9. Configure el número de cuotas secuenciales o individuales en el campo **Total de Cuotas**.
10. Defina una cuota mínima que se aplicará de acuerdo con el valor de cada producto.
11. Seleccione la fecha de facturación con inicio o fin del periodo. 
12. Haga clic en el botón **Agregar Intereses**.
13. Digite el valor de los intereses que desea aplicar a cada una de las cuotas. 
14. Haga clic en **Interés compuesto aplicado. Cambiar** para escoger entre intereses compuestos o simples.
15. Haga clic en **Guardar**.  

### Cuota Automática
La opción Cuota Automática le permite configurar los detalles de las cuotas directamente en el proveedor de pago (fuera del entorno VTEX).
Para habilitar esta opción, seleccione "Sí" en el campo **Utilizar pago en cuotas externo** durante el paso de [configuración de proveedor](https://help.vtex.com/es/tutorial/afiliacoes-de-gateway--tutorials_444).

![cuotaautomatica](//images.ctfassets.net/alneenqid6w5/3ErHSFlSGyUwbLzJWaUlXw/5e3f569ad3db6cb29111199467b34892/parcelamentoautomaticoes.JPG)

Después de habilitar la cuota automática en el proveedor, siga estos pasos:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en **Condiciones de Pago**.
3. Haga clic en el botón **+**.
4. Escoja el medio de pago tarjeta de crédito.
5. Denomine la regla en el campo **Nombre de la Regla**.
6. Active la condición en el campo **Status**.
7. En el campo **Procesar con proveedor**, elija el proveedor previamente configurado.
8. Si desea utilizar un sistema antifraude, seleccione la opción **Usar antifraude**.
9. Seleccione una opción antifraude.
10. En el campo **¿Al Contado o En Cuotas?**, seleccione la opción **Automático**.
11. Haga clic en **Guardar**.

