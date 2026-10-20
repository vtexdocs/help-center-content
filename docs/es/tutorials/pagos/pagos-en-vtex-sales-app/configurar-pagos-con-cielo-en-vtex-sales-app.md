---
title: 'Configurar pagos con Cielo en VTEX Sales App'
id: 2p8rALKTNojgEl8zKn5BtG
status: PUBLISHED
createdAt: 2024-08-16T15:15:25.799Z
updatedAt: 2026-02-02T20:58:47.728Z
publishedAt: 2025-07-17T20:58:47.728Z
firstPublishedAt: 2024-08-16T18:22:08.305Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-payment-with-cielo-in-vtex-sales-app
legacySlug: configurar-pagos-con-cielo-en-vtex-sales-app
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, es posible integrarse con el proveedor de pago Cielo. A través de este conector, su tienda puede ofrecer transacciones de pago en tiendas físicas vía **VTEX Sales App**, utilizando puntos de venta (POS). Para más información acceda [¿Qué es VTEX Sales App?](https://help.vtex.com/es/docs/tracks/vtex-sales-app-primeros-pasos-y-configuracion).

> ℹ️ Para utilizar el proveedor Cielo en su tienda a través de otros canales de venta en línea (excepto **VTEX Sales App**), visite [Configurar pago con CieloEcommerce](https://help.vtex.com/es/docs/tutorials/configurar-pago-con-cieloecommerce).

Para utilizar el proveedor Cielo en la **VTEX Sales App**, es necesario:

- [Configurar claves en el entorno Cielo](#configurar-claves-en-el-entorno-de-cielo)
- [Instalar aplicación de pago en VTEX](#instalar-aplicacion-de-pago-en-vtex)
- [Configurar el conector Cielo (VTEX Sales App) en VTEX](#configurar-el-conector-cielo-vtex-sales-app-en-vtex)
- [Configurar condición de pago](#configurar-condicion-de-pago)

> ⚠️ Las configuraciones realizadas en un entorno externo a VTEX puede interrumpirse o modificarse sin previo aviso. Consulta tu cuenta Cielo para obtener información actualizada.

## Configurar claves en el entorno de Cielo

Los siguientes pasos describen las configuraciones mínimas a realizar para que el conector Cielo quede correctamente configurado. Otras configuraciones personalizadas que se apliquen a los clientes, habilitando métodos de pago específicos o características particulares de la plataforma, deberán realizarse de acuerdo con Cielo.

1. Accede al [portal para desarrolladores de Cielo](https://desenvolvedores.cielo.com.br/api-portal/pt-br) para crear una nueva cuenta.

    > ⚠️ El portal de desarrolladores Cielo permite al usuario obtener información sobre todas las claves necesarias para configurar la conexión entre VTEX y Cielo Lio. Recomendamos que el procedimiento a continuación lo realice un usuario que ya tenga acceso a las otras claves en su cuenta Cielo.

2. Inicía la sesión con tu cuenta Cielo.
3. Solicite la creación de claves de SalesApp a través del [enlace](https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108) o accediendo **Suporte > Cielo Smart LIO > Envie sua pergunta > Token de integração remota** en [portal da Cielo](https://devcielo.zendesk.com/hc/pt-br).
4. Introduzca los siguientes datos:

    - **Assunto:** Solicitação de chaves de produção.
    - **Nome do PDV:** SalesApp.

5. Envíe la solicitud haciendo clic en el botón de confirmación.

> ℹ️ Las claves estarán disponibles en el portal de desarrolladores Cielo dentro de 2 días hábiles.

## Instalar aplicación de pago en VTEX

1. [En VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), ejecute el comando `vtex login {{nombredecuenta}}` para iniciar sesión en su cuenta.
2. Instale la aplicación de pago **vtex.challenge-wait-for-confirmation** por meio del comando `vtex install app vtex.challenge-wait-for-confirmation`.

> ℹ️ Para más información, consulte [Payment Provider Protocol for Point of Sale (POS) - VTEX Sales App](https://developers.vtex.com/docs/guides/payments-integration-ppp-applied-to-pos).

## Configurar el conector Cielo (VTEX Sales App) en VTEX

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón **Nuevo proveedor**.
3. Escriba el nombre **CieloEcommerce** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Clave de aplicación**, ingresa el nombre de tu **MerchantID** proporcionado por Cielo.
5. En **Token de aplicación**, inserte la clave **Client token** generada en el portal de desarrolladores Cielo.
6. Si desea modificar el nombre de identificación que se mostrará para el proveedor Cielo en la pantalla de VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
7. En **Control de pago**, desactive el entorno de prueba desmarcando la opción **Activar modo de teste**.
8. Deje sin marcar la opción **Activar dividir cuentas por cobrar y enviar destinatarios de pagos**.
9. En **Integration**, seleccione la opción **Adquirencia** (clientes Cielo 3.0) o **Gateway** (clientes Braspag).
10. En **Provider**, seleccione la opción **Cielo** (clientes Cielo 3.0) o **Cielo30** (clientes Braspag).
11. En **IsSplit**, seleccione la opción **False**.
12. En **useCieloMDR**, seleccione la opción **Not Defined**.
13. En **UseMpi**, seleccione la opción **False**.
14. Mantenga los siguientes campos en blanco: **MpiClientId**, **MpiClientSecret**, **MpiMerchantName**, **MpiMCC**, **MpiEstablishmentCode** y **SoftDescriptor**.
15. En **AntifraudProvider**, seleccione la opción **Not Defined**.
16. En **Antifraud**, seleccione la opción **Not Defined**.
17. En **AntifraudSequenceCriteria**, seleccione la opción **Not Defined**.
18. En **Captura**, seleccione la opción **Imediatamente**.
19. En **UseVerifyCard**, seleccione la opción **False**.
20. En **AcceptInternationalCard**, seleccione la opción **True**.
21. En **AcceptPrePaidCard**, seleccione la opción **True**.
22. En **SaveCard**, seleccione la opción **False**.
23. En **CancelRefundType**, seleccione la opción **Automático siempre que posible**.
24. En **CieloLIOClientId**, complete la clave Lio proporcionada por Cielo.
25. Haga clic en **Guardar**.

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **Venda Direta Debito** o **Venda Direta Credito**.
4. En **Procesar con proveedor**, seleccione el conector previamente configurado.
5. Active la condición en el campo **Status**.
6. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
7. Si desea, puede [configurar condiciones especiales de pago](/es/docs/tutorials/condiciones-especiales).
8. Haga clic en `Guardar`.

Tras seguir los pasos indicados, el proveedor Cielo puede tardar hasta 10 minutos para aparecer como opción de pago en la **VTEX Sales App** de su tienda.
