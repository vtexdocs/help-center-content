---
title: 'Configurar pago con Nuvei'
id: 67DjdrpIaZZmhXv9Iwa6Ev
status: DRAFT
createdAt: 2024-03-27T12:55:27.016Z
updatedAt: 2024-03-27T17:47:53.436Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-nuvei
locale: es
legacySlug: configurar-pago-con-nuvei
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con Nuvei. A través de este proveedor, tu tienda puede realizar ventas con tarjetas de crédito y débito.

Para utilizar Nuvei, siga los pasos a continuación:

- [Configurar Nuvei en VTEX](#configurar-proveedor-nuvei-en-vtex)
- [Configurar la URL DMN en Nuvei](#configurar-la-URL-DMN-en-Nuvei)

## Configurar proveedor Nuvei en VTEX

<blockquote><ui>1. En el Admin VTEX, accede a <b>Configuración de la tienda > Pago > Proveedores</b>, o escribe <b>Proveedores</b> en la barra de búsqueda en la parte superior de la página.</ui>

<blockquote><ui>2. En la pantalla de proveedores, haga clic en el botón <b>Nuevo proveedor</b>.</ui>

<blockquote><ui>3. Escriba el nombre <b>nuvei-payment-provider</b> en la barra de búsqueda y haga clic en el nombre del proveedor.</ui>

<blockquote><ui>4. En <b>Autorización del proveedor</b>, rellene los campos de registro <b>Clave de aplicación</b> y <b>Token de aplicación</b> con la información de su cuenta Nuvei.</ui>

<blockquote><ui>5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Nuvei en la pantalla VTEX Admin, ingrese la información en el campo <b>Nombre</b> en <b>Información general</b>.</ui>

<blockquote><ui>6. En <b>Control de pago</b>, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en <b>Activar modo de prueba</b>.</ui>

<blockquote><ui>7. Para rellenar los campos <b>Merchant Id</b>, <b>Merchant Site Id</b> y <b>Client Secret</b> (Secret Key), 
acceder a la información disponible en <b>Settings > My Integration Settings</b> dentro del panel de control de su cuenta en el entorno Nuvei.</ui>

<blockquote><ui>>⚠️ Nuvei tiene credenciales (Merchant Id, Merchant Site Id e Client Secret) específicas para cada tipo de entorno. Acceder a entornos de prueba [(Integration)](sandbox.nuvei.com) y [Live](cpanel.nuvei.com) 
> identificar las credenciales relativas a cada uno de ellos.</blockquote>
<br>  
<blockquote><ui>8. En <b>Environment</b>, seleccione si desea configurar el proveedor Nuvei en el entorno <b>Integration</b> o <b>Live</b>.</ui>

<blockquote><ui>9. En <b>Test 3ds challenge Integration only</b>, si ha seleccionado el entorno de prueba (<b>Integration</b>) es posible realizar pruebas de seguridad 3DS a través de las opciones <b>Force 3ds Challenge</b>, <b>Force 3ds Frictionless</b> o <b>User cardHolder name</b>. 
Para más información sobre las pruebas accede a la documentación <a href="https://docs.nuvei.com/documentation/integration/testing/testing-cards/?highlight=test%20cards#3d-secure-v2-test-scenarios">Nuvei</a>.</ui>

 <blockquote><ui>>⚠️ Siempre que el **Environment** del proveedor esté configurado como **Live**, la opción seleccionada para el campo **Test 3ds challenge Integration only** debe ser **User cardHolder name**.</blockquote>
<br>  
<blockquote><ui>10. Haga clic en <b>Guardar</b>.</ui>

## Configurar la URL DMN en Nuvei

Para configurar la información de la URL DMN en Nuvei, siga los pasos a continuación:

1. Acceda a su entorno de nube de prueba ([Integración](sandbox.nuvei.com)) o [Life](cpanel.nuvei.com).
2. En el menú __Configuración__, haga clic en __Mis configuraciones de integración__.
3. En __DMN URL__, reemplace el campo __{nombre-cuenta}__ con el nombre de su cuenta VTEX.

`https://master--{nombre-de-cuenta}.myvtex.com/_v/api/nuvei-paid-provider/v0/dmn` 

Para configurar los métodos de pago a procesar por Nuvei, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Nuvei puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
