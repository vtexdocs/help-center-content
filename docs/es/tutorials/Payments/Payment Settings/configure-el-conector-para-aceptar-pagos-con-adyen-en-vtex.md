---
title: 'Configure el conector para aceptar pagos con Adyen en VTEX'
id: tutorials_2337
status: ARCHIVED
createdAt: 2017-04-27T21:55:10.101Z
updatedAt: 2024-03-18T17:52:42.714Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:52.166Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-set-up-the-connector-to-accept-payments-with-adyen-at-vtex
locale: es
legacySlug: como-configurar-el-gateway-adyen-en-vtex
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

>⚠️ Las configuraciones documentadas en este artículo se realizan en un ambiente  externo a VTEX. Por lo tanto, pueden ser descontinuadas sin previo aviso.

Si su procesador de pagos elegido es Adyen, realice el siguiente procedimiento  con la configuración necesaria para que la comunicación entre VTEX y Adyen funcione perfectamente.

## Configuraciones en Adyen

Esta configuración para aceptar pagos depende de las configuraciones que se realicen en VTEX y también en Adyen. A continuación, encontrará las instrucciones sobre cómo configurar y cómo obtener las informaciones necesarias para la posterior configuración en VTEX.

<ui>1. Acceda al panel de Adyen:

  - Ambiente Test Adyen: https://ca-test.adyen.com/ca/ca/login.shtml
  - Ambiente Live Adyen: https://ca-live.adyen.com/ca/ca/login.shtml</ui>

<ui>2. Haga clic en **Developers** en el menú lateral.</ui>

<ui>3. Haga clic en **Webhooks**.</ui>

<ui>4. Haga clic en el botón **+ Webhook** en la parte superior de la pantalla.</ui>

<ui>5. Haga clic en el botón **Add** al lado de **Standard Notification**.</ui>

<ui>6. Rellene el campo **URL** con el valor `https://{accountName}.vtexpayments.com.br/adyen/panel-notification`.

 - Tenga en cuenta que `{accountName}` debe substituirse por el nombre de su tienda en VTEX.</ui>

<ui>7. Acceda a **Additional Settings** y haga las configuraciones necesarias:</ui>

  - La versión SSL debe ser TLSv1.2.
  - Los campos "Accept expired", "Accept self-signed" y "Accept untrusted Root Certificates" no deben estar seleccionados.
  - Certificate Alias es `signed.adyen.com`.
  - El campo Active debe estar seleccionado.
  - Service Version = 1.
  - Method = JSON.
  - Populate SOAP Action header no debe estar seleccionado.
  - Expandir las cajas "Additional Settings", enseguida seleccionar **apenas** los siguientes campos:
    - Add Acquirer Result.
    - Add Raw Acquirer Result.
    - Include Acquirer Reference.
    - Include Card Bin.</ui>

<ui>8. Haga clic en **Save Configuration**.</ui>

Con esta configuración, creamos la conexión del endpoint del módulo de Pagos de VTEX con Adyen. Su tienda está más segura.

Luego, solo tiene que recoger las informaciones de Adyen para registrarlas en VTEX. Todavía en el panel de Adyen:

1. Acceda a **Developers** en el menú lateral.
2. Haga clic en **API credentials**.
3. Haga clic en el botón **Create new credential**.
4. En el campo **User Type**, haga clic en el usuario de tipo **Webservice**.
5. ¡Recuerde anotar el nombre de usuario y la contraseña que aparecerá en el campo Password, ya que no volverá a estar visible!
6. Haga clic en el botón **Save**, que está al final de la página.
7. Después de estos pasos, su usuario debería haber sido creado con éxito. El número 1 (indicado en la imagen en rojo) es el username. El número 2 es la contraseña (password) que deberá ingresarse en el ambiente VTEX.
![Adyen - Image 2](https://images.ctfassets.net/alneenqid6w5/7jtKskh7uYiUuMnI6t7UqJ/ea01c037ad5c541a26fdef50b1a0d4fd/image2.png)
8. Envíe un e-mail para el soporte de Adyen (suporte@adyen.com) solicitando las habilitaciones listadas en el siguiente modelo:

> Asunto: Configuración de los permisos de usuario webservice de VTEX para `{accountName}`
> Cuerpo del e-mail: Soporte Adyen, envío este e-mail para pedir que concedan los permisos necesarios para el usuario `nombredeusuario@Company.nombredelacompany` para que pueda usarse en la plataforma de VTEX.  Agradezco de antemano su atención.  

Solamente después de la confirmación de Adyen es que estará listo para hacer las  configuraciones en VTEX.

### Pasos adicionales para el análisis antifraude con revisión manual de pedidos

Si pretende utilizar la plataforma de Adyen para hacer análisis antifraude con revisión manual de pedidos, es muy importante que realice los siguientes pasos:

<ui>1. Vaya hasta el panel de Adyen.</ui>

<ui>2. Busque el menú **Risk** y haga clic en **Risk settings**.</ui>

<ui>3. En la sección **Case Management behavior** marque **Send notification** para:

  - Accept.
  - Reject.</ui>

<ui>4. En el expire seleccione **Reject** en el campo **Notification**.</ui>

<ui>5. La configuración deberá verse conforme sigue abajo. Asegúrese de hacer clic en **Save configuration** después de completar las alteraciones.</ui>

![Adyen - Image 1](//images.ctfassets.net/alneenqid6w5/1K5aqITpHU74XYQ5eO7wKc/a29d285086d15dd28a596ab344d72763/image1.png)

## Configuraciones en VTEX

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Adyen__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos del formulario con los datos obtenidos en Adyen y haga clic en el botón **Guardar**:

- **username** - username Adyen (instrucción 5 de las **Configuraciones en  Adyen**).
- **password** - password Adyen (instrucción 5 de las **Configuraciones en Adyen**).
- **account** - nombre de Merchant Account en Adyen (puede consultar este nombre yendo al panel de Adyen, haciendo clic en el menú _Accounts > Merchant Accounts_).
- **currency** - moneda.
- **banco del boleto bancario** - banco emisor de boleto.
- **instrucciones del boleto** - instrucciones que se aplicarán en el boleto.
- **código de Skin HPP** - debe quedar en blanco. `*`
- **idioma** - rellene con el idioma de su checkout.
- **clave para firma HMAC HPP** - debe quedar en blanco. `*`
- **captura de seguridad anticipada** - captación anticipada.
- **usa antifraude** - opción que posibilita el uso de antifraude.

`*` - Estos campos serán usados solamente para integraciones con HPP, como el caso de Multibanco, usado en Portugal. Consulte la [documentación de Adyen](https://docs.adyen.com/payments-fundamentals/payment-glossary#hosted-payment-pages-hpp) para más informaciones.
