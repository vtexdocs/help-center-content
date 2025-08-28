---
title: 'Configurar pago con Clip'
id: 2xtInjWMbY3N7bEiYdkfHO
status: PUBLISHED
createdAt: 2025-05-30T17:26:28.618Z
updatedAt: 2025-06-12T14:55:25.590Z
publishedAt: 2025-06-12T14:55:25.590Z
firstPublishedAt: 2025-05-30T17:46:56.723Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-clip
legacySlug: configurar-pago-con-clip
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Clip. Con este proveedor, su tienda puede realizar ventas a través de Clip.

Para configurar Clip, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **Clip** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Clip.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Clip en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del Proveedor**, seleccione o complete los campos **Credencial publica**, **Credencial Privada**, **Personalizar pagos**, **Metodos de pago aceptados (debit,credit,cash,bank_transfer)**, **¿ Quieres aceptar tarjetas internacionales ?**, **Marcas de pago aceptados (visa,mastercard,amex,carnet,discover,diners)**, **¿ Aceptas 3 meses sin intereses ?**, **Monto mínimo de compra para 3 meses sin intereses**, **¿ Aceptas 6 meses sin intereses ?**, **Monto mínimo de compra para 6 meses sin intereses**, **¿ Aceptas 9 meses sin intereses ?**, **Monto mínimo de compra para 9 meses sin intereses**, **¿ Aceptas 12 meses sin intereses ?**, **Monto mínimo de compra para 12 meses sin intereses**, **¿ Aceptas 18 meses sin intereses ?**, **Monto mínimo de compra para 18 meses sin intereses**, **¿ Aceptas 24 meses sin intereses ?**, **Monto mínimo de compra para 24 meses sin intereses**, **Mostrar propinas**, y **Duración del checkout (horas)** según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Haga clic en __Clip__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Clip puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
