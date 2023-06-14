---
title: 'Registrar afiliaciones de gateway'
id: tutorials_444
status: PUBLISHED
createdAt: 2017-04-27T22:05:18.209Z
updatedAt: 2023-03-21T20:55:24.198Z
publishedAt: 2023-03-21T20:55:24.198Z
firstPublishedAt: 2017-04-27T23:03:24.823Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: afiliaciones-de-gateway
legacySlug: afiliaciones-de-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Una afiliación de gateway es un conjunto de configuraciones que representa su contrato con un proveedor de pago (gateway, adquirente o subadquirente).

En VTEX, puede configurar varios proveedores de pago y ofrecer diferentes métodos y condiciones de pago a sus clientes.

Para configurar una afiliación de gateway, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Afiliaciones de Gateway__, haga clic en el botón __+__.
3. Haga clic en su proveedor de pago preferido.
4. Rellene los campos de registro __Application Key__ y __Application Token__ con la información proporcionada por el proveedor de pago.
5. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón __Instalar aplicación__ y siga las instrucciones de instalación. Este mensaje solo se muestra para algunos tipos de afiliaciones de pgateway. 
6. Haga clic en el botón **Guardar**.

<div class = "alert alert-info">
  <p>Si hay otros campos para completar además de la <b>Application Key</b> y <b>Application Token</b> (Paso 6), la afiliación de gateway debe configurarse de acuerdo con el tutorial específico. Para más información, consulte la subsección <a href="https://help.vtex.com/es/subcategory/configuracoes-de-pagamentos--3tDGibM2tqMyqIyukqmmMw">Configuración de Pagos</a>.</p>
</div>

<div class = "alert alert-danger">
Las credenciales utilizadas para rellenar los campos <strong>Clave de aplicación</strong> y <strong>Token de aplicación</strong> deben ser proporcionadas por el proveedor de pagos para identificar la tienda. No se deben utilizar las credenciales <a href="https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet">generadas en el Admin</a>, que empiezan por <code>vtexappkey-</code>.
</div>

Para configurar los métodos de pago que procesará su proveedor de pago elegido, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento). 

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete).
