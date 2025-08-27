---
title: 'Configurar pagos con Cielo en VTEX Sales App'
id: 2p8rALKTNojgEl8zKn5BtG
status: PUBLISHED
createdAt: 2024-08-16T15:15:25.799Z
updatedAt: 2025-07-17T20:58:47.728Z
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

En VTEX, es posible integrarse con el proveedor de pago Cielo. A través de este conector, su tienda puede ofrecer transacciones de pago en tiendas físicas (VTEX Sales App), utilizando puntos de venta (POS). Para más información acceda [¿Qué es VTEX Sales App?](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf).

> ℹ️ Para utilizar el proveedor Cielo en su tienda a través de otros canales de venta en línea (excepto VTEX Sales App), visite [Configurar pago con CieloEcommerce](https://help.vtex.com/es/tutorial/configurar-pago-con-cieloecommerce--6zuELBqEo0QzApbU4l7L4).

Para utilizar el proveedor Cielo en la VTEX Sales App, es necesario:

- [Configurar claves en el entorno Cielo](#configurar-claves-en-el-entorno-de-cielo)
- [Configurar el conector Cielo (VTEX Sales App) en VTEX](#configurar-el-conector-cielo-vtex-sales-app-en-vtex)
- [Configurar condición de pago](#configurar-condicion-de-pago)

> ⚠️ Las configuraciones realizadas en un entorno externo a VTEX puede interrumpirse o modificarse sin previo aviso. Consulta tu cuenta Cielo para obtener información actualizada.

## Configurar claves en el entorno de Cielo

Los siguientes pasos describen las configuraciones mínimas a realizar para que el conector Cielo quede correctamente configurado. Otras configuraciones personalizadas que se apliquen a los clientes, habilitando métodos de pago específicos o características particulares de la plataforma, deberán realizarse de acuerdo con Cielo.

<blockquote><ui>1. Accede al [portal para desarrolladores de Cielo](https://desenvolvedores.cielo.com.br/api-portal/pt-br) para crear una nueva cuenta.</ui>

<blockquote><ui>> ⚠️ El portal de desarrolladores Cielo permite al usuario obtener información sobre todas las claves necesarias para configurar la conexión entre VTEX y Cielo Lio. Recomendamos que el procedimiento a continuación lo realice un usuario que ya tenga acceso a las otras claves en su cuenta Cielo.</blockquote>

<blockquote><ui>2. Luego de iniciar sesión, solicite la creación de claves de SalesApp a través del enlace [https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108](https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108) 
o accediendo **Suporte > Cielo Lio > Envie sua pergunta > Token de integração remota** dentro del portal. Introduzca los siguientes datos: *Assunto: Solicitação de chaves de produção* y *Nome do PDV: SalesApp*.</ui> 

<blockquote><ui>> ℹ️ Las claves estarán disponibles en el portal de desarrolladores Cielo dentro de 2 días hábiles.</blockquote>

## Configurar el conector Cielo (VTEX Sales App) en VTEX

<blockquote><ui>1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.</ui>

<blockquote><ui>2. En la pantalla de proveedores, haga clic en el botón **Nuevo proveedor**.</ui>

<blockquote><ui>3. Escriba el nombre **CieloEcommerce** en la barra de búsqueda y haga clic en el nombre del proveedor.</ui>

<blockquote><ui>4. En **Clave de aplicación**, ingresa el nombre de tu **MerchantID** proporcionado por Cielo.</ui>

<blockquote><ui>5. En **Token de aplicación**, inserte la clave **Client token** generada en el portal de desarrolladores Cielo.</ui>  

<blockquote><ui>6. Si desea modificar el nombre de identificación que se mostrará para el proveedor Cielo en la pantalla de VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.</ui>

<blockquote><ui>7. En **Control de pago**, desactive el entorno de prueba desmarcando la opción **Activar split de cobros y enviar destinatarios de pago**.</ui>

<blockquote><ui>8. Deje la opción **Activar dividir cuentas por cobrar y enviar destinatarios de pagos** sin marcar.</ui>   

<blockquote><ui>9. En **Integration**, seleccione la opción **Adquirencia** (clientes Cielo 3.0) o **Gateway** (clientes Braspag).</ui>

<blockquote><ui>10. En **Provider**, seleccione la opción **Cielo** (clientes Cielo 3.0) o **Cielo30** (clientes Braspag).</ui>

<blockquote><ui>11. En **IsSplit**, seleccione la opción **False**.</ui>

<blockquote><ui>12. En **useCieloMDR**, seleccione la opción **Not Defined**.</ui> 

<blockquote><ui>13. En **UseMpi**, seleccione la opción **False**.</ui> 

<blockquote><ui>14. Mantenga los siguientes campos en blanco: **MpiClientId**, **MpiClientSecret**, **MpiMerchantName**, **MpiMCC**, **MpiEstablishmentCode** y **SoftDescriptor**.</ui>

<blockquote><ui>15. En **AntifraudProvider**, seleccione la opción **Not Defined**.</ui>  

<blockquote><ui>16. En **Antifraud**, seleccione la opción **Not Defined**.</ui>   

<blockquote><ui>17. En **AntifraudSequenceCriteria**, seleccione la opción **Not Defined**.</ui> 

<blockquote><ui>18. En **Captura**, seleccione la opción **Imediatamente**.</ui>   

<blockquote><ui>19. En **UseVerifyCard**, seleccione la opción **False**.</ui>

<blockquote><ui>20. En **AcceptInternationalCard**, seleccione la opción **True**.</ui>

<blockquote><ui>21. En **AcceptPrePaidCard**, seleccione la opción **True**.</ui>

<blockquote><ui>22. En **SaveCard**, seleccione la opción **False**.</ui>  

<blockquote><ui>23. En **CancelRefundType**, seleccione la opción **Automático Sempre que possível**.</ui> 

<blockquote><ui>24. En **CieloLIOClientId**, complete la clave Lio proporcionada por Cielo.</ui>   

<blockquote><ui>25. Haga clic en **Guardar**.</ui>

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **Venda Direta Debito** o **Venda Direta Credito**.
4. En **Procesar con proveedor**, seleccione el conector previamente configurado.
5. Active la condición en el campo **Status**.
6. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
7. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
8. Haga clic en `Guardar`.

Tras seguir los pasos indicados, el proveedor Cielo puede tardar hasta 10 minutos para aparecer como opción de pago en la App Ventas VTEX de su tienda.
