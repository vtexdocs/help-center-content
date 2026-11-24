---
title: 'Configurar pago con Fiserv AR'
createdAt: 2024-10-07T20:10:41.652Z
updatedAt: 2026-11-05T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-fiserv-ar
locale: es
hidden: false
---

En VTEX es posible la integración con el proveedor de pagos Fiserv AR. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito, débito, privatelabels, pagarés, Fiserv y medios de pago locales como Naranja, Cabal, OCA, Creditel, Club del Este, Lider, Passcard, ANDA, Creditos Directos, Edenred y Sodexo.

Para configurar Fiserv AR, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Fiserv AR__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por Fiserv.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Fiserv en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Campos del proveedor__, complete los campos __Ingrese su Store ID__, __Ingrese su API Key Pública__ y __Ingrese su API Key Privada__ con la información de su cuenta Fiserv.
8. En __3DS - Visa__, __3DS - Mastercard__, __Autorización y captura diferidos__, __Plan Gobierno__, __Plan Z - Naranja__ y __Soft Descriptor__, seleccione o complete las opciones deseadas.
9. Si su tienda procesa pagos en Uruguay, complete el campo __Legislación aplicable (Aplica solo para Uruguay)__ según las instrucciones del proveedor.
10. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Fiserv AR, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Fiserv AR puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
