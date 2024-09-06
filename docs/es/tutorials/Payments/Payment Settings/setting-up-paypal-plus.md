---
title: 'Configurar PayPal Plus (PayPal Transparente)'
id: 2akxq3I92k8A4kymIYOiWy
status: ARCHIVED
createdAt: 2018-02-20T20:15:36.950Z
updatedAt: 2024-03-18T20:30:56.156Z
publishedAt: 
firstPublishedAt: 2018-02-20T22:56:13.192Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: configurar-paypal-plus-paypal-transparente
locale: es
legacySlug: configurar-paypal-plus-paypal-transparente
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

En el gateway de VTEX, usted puede configurar el subadquirente PayPal Plus, el checkout transparente de PayPal. En esta modalidad, basta con que el cliente introduzca la información de tarjeta de crédito y finalice la compra normalmente. El pago se realiza directamente en su sitio, sin redirigir a sus clientes.

Para realizar la configuración, siga los pasos abajo:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PayPalPlus__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Si desea modificar el nombre de identificación que se mostrará para el proveedor iugu en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
5. En __Control de pago__, seleccione si desea activar PayPal Plus en un entorno de prueba haciendo clic en __Activar modo de prueba__.
6. Rellena los siguientes campos según los datos proporcionados por PayPal:
    - Em __ID do cliente__ insira o _clientId_.
    - Em __Secret__ insira o _secret_.
    - Em __Nombre do usuario__ insira o _userName_.
    - Em __Contraseña__ insira o _password_.
    - Em __Firma__ insira o _signature_.

<blockquote><ui>  7. En <b>Guardar tarjetas</b>, seleccione <b>Sí</b> para que el cliente pueda seleccionar la opción de guardar la tarjeta al finalizar la compra. Si no desea habilitar esta opción, seleccione <b>No</b>.</ui>

<blockquote><ui>  8. En <b>Moneda</b>, elija la moneda de la transacción.</ui>

<blockquote><ui>  9. En <b>Lugar de la transacción</b>, seleccione el país de la transacción.</ui>

<blockquote><ui>  10. En <b>Activar API de riesgo (STC)</b>, seleccione la opción según su configuración de PayPal.</ui>

<blockquote><ui>  11. Haga clic en <b>Guardar</b>.</ui>

## Configurar la condición de pago PayPal Plus

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __PayPalPlus__.
4. Complete el campo __Nombre de la condición__ con un nombre de su elección para identificación.
5. Active la condición en el campo __Status__.
6. Seleccione si desea utilizar un sistema antifraude seleccionando la opción __Utilizar antifraude__.
7. Indique si los pagos con tarjeta de crédito deben realizarse [al contado o en cuotas (con y sin intereses)](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455).
8. Si lo deseas, también puedes configurar [condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
9. Haga clic en `Guardar`.

Después de seguir los pasos indicados, PayPal Plus puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
