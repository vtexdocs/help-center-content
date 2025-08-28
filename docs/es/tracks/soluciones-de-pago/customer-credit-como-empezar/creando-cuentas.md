---
title: 'Creación de cuentas en Customer Credit'
id: 7FHLd0cmxqqGeEUuc8uioU
status: PUBLISHED
createdAt: 2018-11-06T20:24:28.924Z
updatedAt: 2024-11-04T18:08:56.036Z
publishedAt: 2024-11-04T18:08:56.036Z
firstPublishedAt: 2018-11-06T21:15:02.053Z
contentType: trackArticle
productTeam: Financial
slugEN: creating-accounts
locale: es
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugEN: customer-credit-como-empezar
order: 3
---

El siguiente paso es crear cuentas para los clientes a los que desea ofrecer crédito en su tienda. Las cuentas se pueden crear de tres maneras diferentes:

- [Cuenta individual (Admin VTEX)](#crear-cuentas-individualmente)
- [Múltiples cuentas masivas (Admin VTEX)](#crear-varias-cuentas-importacion-masiva)
- [Cuenta individual (Customer Credit API)](#crear-cuenta-a-traves-de-api)

> ℹ️ Las cuentas creadas en la aplicación Customer Credit no tienen relación ni comparten datos con la base de clientes registrada en [entidades de Master Data](https://help.vtex.com/es/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#entidades-de-datos) de la tienda. Para que un cliente pueda utilizar Customer Credit como método de pago, el comerciante debe registrar su cuenta en la aplicación, incluso si el cliente ya tiene una cuenta en la tienda.

## Crear cuentas individualmente

Para registrar un nuevo cliente en Customer Credit, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Apps > Customer Credit > Cuentas__, o escribe __Cuentas__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla __Cuentas__, haga clic en el botón "NUEVA".
3. En __Identificación__, seleccione el __Tipo de documento__ y complete los campos __Documento__ y __Email__ con la información del cliente que desea registrar.
4. En __Crédito__, ingrese los valores de __Límite de crédito (BRL)__ y __Tolerancia__ que desea poner a disposición del cliente.
5. Haga clic en `Confirmar`.

> ⚠️ El llenado del campo **Email** es obligatorio, ya que la plataforma VTEX utiliza esta información para autentificar el acceso del cliente a los límites de crédito de su cuenta. Para obtener más información sobre protección de datos, visite [Seguridad de SmartCheckout](https://help.vtex.com/es/tutorial/seguridad-de-smartcheckout--3SrJuuhrqwePUg1rp1exfB).

A partir de este momento, la nueva cuenta creada se mostrará en la pantalla __Cuentas__.

![CC_nueva_cuenta_1_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/soluciones-de-pago/customer-credit-como-empezar/creando-cuentas_1.JPG)

## Crear varias cuentas (importación masiva)

Para crear varias cuentas al mismo tiempo (en masa) en Customer Credit, puede utilizar una plantilla en formato CSV (Comma Separated Value) que contiene la información de cada cliente. Siga los pasos a continuación para crear varias cuentas:

1. En el Admin VTEX, accede a __Apps > Customer Credit > Cuentas__, o escribe __Cuentas__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla __Cuentas__, haga clic en el botón `IMPORTAR`.
3. En __¿Quieres crear o actualizar cuentas?__, selecciona la opción __Crear__ y haz clic en `CONTINUAR`.
4. Haga clic en `DESCARGAR PLANTILLA`. Se enviará una plantilla en formato .csv a su dispositivo (computadora, teléfono celular o tableta).
5. Complete cada línea:
<br>
<ul>
  <li>Columnas **Email**, **Document** y **Document Type**: información al cliente.</li>
  <li>Columnas **Credit limit** y **Tolerance rate**: valores disponibles para cada cliente. La **tasa de tolerancia** debe ingresarse en formato decimal, por ejemplo, una tolerancia del 5% debe indicarse como 0,05.</li>
</ul>

![CC_criar_conta_2_ALL](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/soluciones-de-pago/customer-credit-como-empezar/creando-cuentas_2.JPG)

<blockquote><ui>6. Guardar la plantilla .csv.</ui>

<blockquote><ui>7. Regrese a la pantalla **Cuentas** y haga clic en el botón **IMPORTAR** nuevamente.</ui>

<blockquote><ui>8. En **¿Quieres crear o actualizar cuentas?**, selecciona la opción **Actualizar** y haz clic en **CONTINUAR**.</ui>

<blockquote><ui>9. Inserta o selecciona la plantilla .csv en el espacio **Suelta áqui tu archivo CSV o elige uno**.</ui>

<blockquote><ui>10. Haga clic en el botón **IMPORTAR ARCHIVO**.</ui>

A partir de este momento, las nuevas cuentas creadas mediante la plantilla .csv estarán disponibles en la pantalla __Cuentas__.

> ⚠️ También es posible rastrear procesos anteriores de creación de múltiples cuentas, identificando si las cuentas se crearon correctamente. Para comprobar esta información, haga clic en **Historial de importación** en la pantalla **Cuentas**.  

### Actualizar varias cuentas (importación masiva)

Para actualizar información, como documento, tipo de documento, correo electrónico, límite de crédito y tolerancia, en varias cuentas al mismo tiempo, también puede utilizar la función de importación masiva.  

El procedimiento es similar a [crear múltiples cuentas](#crear-varias-cuentas-importacion- masiva). Sin embargo, ya debes tener descargada y completada la hoja de cálculo .csv en tu dispositivo (computadora, celular o tableta). Siga los pasos a continuación para actualizar la información del cliente:  

1. En el Admin VTEX, accede a __Apps > Customer Credit > Cuentas__, o escribe __Cuentas__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla __Cuentas__, haga clic en el botón `IMPORTAR`.
3. En __¿Quieres crear o actualizar cuentas?__, selecciona la opción __Actualizar__ y haz clic en `CONTINUAR`.
4. Inserta o selecciona la plantilla .csv en el espacio __Suelta áqui tu archivo CSV o elige uno__.
5. Haga clic en el botón __IMPORTAR ARCHIVO__.
6. Después de cargar la plantilla en Admin, verifique en la pantalla __Cuentas__ si la información se actualizó correctamente en las cuentas de cada cliente.   

## Crear cuenta a través de API

También puede crear cuentas para sus clientes en Customer Credit a través  endpoint [POST - Open an account](https://developers.vtex.com/docs/api-reference/customer-credit-api#post-/api/creditcontrol/accounts).

Para obtener más información sobre los endpoints de la API de Customer Credit, acesse [Customer Credit API - Overview](https://developers.vtex.com/docs/api-reference/customer-credit-api#overview).
