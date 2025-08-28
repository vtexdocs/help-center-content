---
title: 'Configurar pago con Nuvei'
id: 67DjdrpIaZZmhXv9Iwa6Ev
status: PUBLISHED
createdAt: 2024-03-27T12:55:27.016Z
updatedAt: 2024-09-13T17:39:52.427Z
publishedAt: 2024-09-13T17:39:52.427Z
firstPublishedAt: 2024-09-13T17:39:52.427Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-nuvei
legacySlug: configurar-pago-con-nuvei
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con Nuvei. A través de este proveedor, tu tienda puede realizar ventas con tarjetas de crédito y débito.

Para utilizar Nuvei, siga los pasos a continuación:

- [Configurar Nuvei en VTEX](#configurar-proveedor-nuvei-en-vtex)
- [Configurar la URL DMN en Nuvei](#configurar-la-URL-DMN-en-Nuvei)

## Configurar proveedor Nuvei en VTEX

<blockquote><ui>1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.</ui>

<blockquote><ui>2. En la pantalla de proveedores, haga clic en el botón **Nuevo proveedor**.</ui>

<blockquote><ui>3. Escriba el nombre **nuvei-payment-provider** en la barra de búsqueda y haga clic en el nombre del proveedor.</ui>

<blockquote><ui>4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con la información de su cuenta Nuvei.</ui>

<blockquote><ui>5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Nuvei en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.</ui>

<blockquote><ui>6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.</ui>

<blockquote><ui>7. Para rellenar los campos **Merchant Id**, **Merchant Site Id** y **Client Secret** (Secret Key), 
acceder a la información disponible en **Settings > My Integration Settings** dentro del panel de control de su cuenta en el entorno Nuvei.</ui>

<blockquote><ui>> ⚠️ Nuvei tiene credenciales (Merchant Id, Merchant Site Id e Client Secret) específicas para cada tipo de entorno. Acceder a entornos de prueba [(Integration)](sandbox.nuvei.com) y [Live](cpanel.nuvei.com) identificar las credenciales relativas a cada uno de ellos.</blockquote>
<br>  
<blockquote><ui>8. En **Environment**, seleccione si desea configurar el proveedor Nuvei en el entorno **Integration** o **Live**.</ui>

<blockquote><ui>9. En **Test 3ds challenge Integration only**, si ha seleccionado el entorno de prueba (**Integration**) es posible realizar pruebas de seguridad 3DS a través de las opciones **Force 3ds Challenge**, **Force 3ds Frictionless** o **User cardHolder name**. 
Para más información sobre las pruebas accede a la documentación [Nuvei](https://docs.nuvei.com/documentation/integration/testing/testing-cards/?highlight=test%20cards#3d-secure-v2-test-scenarios).</ui>

 <blockquote><ui>> ⚠️ Siempre que el **Environment** del proveedor esté configurado como **Live**, la opción seleccionada para el campo **Test 3ds challenge Integration only** debe ser **User cardHolder name**.</blockquote>
<br>  
<blockquote><ui>10. Haga clic en **Guardar**.</ui>

## Configurar la URL DMN en Nuvei

Para configurar la información de la URL DMN en Nuvei, siga los pasos a continuación:

1. Acceda a su entorno de nube de prueba ([Integración](sandbox.nuvei.com)) o [Life](cpanel.nuvei.com).
2. En el menú __Configuración__, haga clic en __Mis configuraciones de integración__.
3. En __DMN URL__, reemplace el campo __{nombre-cuenta}__ con el nombre de su cuenta VTEX.

`https://master--{nombre-de-cuenta}.myvtex.com/_v/api/nuvei-paid-provider/v0/dmn` 

Para configurar los métodos de pago a procesar por Nuvei, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Nuvei puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
