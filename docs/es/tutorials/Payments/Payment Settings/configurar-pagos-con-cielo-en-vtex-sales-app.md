---
title: 'Configurar pagos con Cielo en VTEX Sales App'
id: 2p8rALKTNojgEl8zKn5BtG
status: PUBLISHED
createdAt: 2024-08-16T15:15:25.799Z
updatedAt: 2024-09-24T16:17:56.062Z
publishedAt: 2024-09-24T16:17:56.062Z
firstPublishedAt: 2024-08-16T18:22:08.305Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-payment-with-cielo-in-vtex-sales-app
locale: es
legacySlug: configurar-pagos-con-cielo-en-vtex-sales-app
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, es posible integrarse con el proveedor de pago Cielo. A través de este conector, su tienda puede ofrecer transacciones de pago en tiendas físicas (VTEX Sales App), utilizando puntos de venta (POS). Para más información acceda [¿Qué es VTEX Sales App?](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf).

>ℹ️ Para utilizar el proveedor Cielo en su tienda a través de otros canales de venta en línea (excepto VTEX Sales App), visite [Configurar pago con CieloEcommerce](https://help.vtex.com/es/tutorial/configurar-pago-con-cieloecommerce--6zuELBqEo0QzApbU4l7L4).

Para utilizar el proveedor Cielo en la VTEX Sales App, es necesario:

- [Configurar claves en el entorno Cielo](#configurar-claves-en-el-entorno-de-cielo)
- [Configurar el conector Cielo (VTEX Sales App) en VTEX](#configurar-el-conector-cielo-vtex-sales-app-en-vtex)
- [Configurar condición de pago](#configurar-condicion-de-pago)

>⚠️ Las configuraciones realizadas en un entorno externo a VTEX puede interrumpirse o modificarse sin previo aviso. Consulta tu cuenta Cielo para obtener información actualizada.

## Configurar claves en el entorno de Cielo

Los siguientes pasos describen las configuraciones mínimas a realizar para que el conector Cielo quede correctamente configurado. Otras configuraciones personalizadas que se apliquen a los clientes, habilitando métodos de pago específicos o características particulares de la plataforma, deberán realizarse de acuerdo con Cielo.

<blockquote><ui>1. Accede al <a href="https://desenvolvedores.cielo.com.br/api-portal/pt-br">portal para desarrolladores de Cielo</a> para crear una nueva cuenta.</ui>

<blockquote><ui>>⚠️ El portal de desarrolladores Cielo permite al usuario obtener información sobre todas las claves necesarias para configurar la conexión entre VTEX y Cielo Lio. Recomendamos que el procedimiento a continuación lo realice un usuario que ya tenga acceso a las otras claves en su cuenta Cielo.</blockquote>

<blockquote><ui>2. Luego de iniciar sesión, solicite la creación de claves de SalesApp a través del enlace <a href="https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108">https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108</a> 
o accediendo <b>Suporte > Cielo Lio > Envie sua pergunta > Token de integração remota</b> dentro del portal. Introduzca los siguientes datos: <i>Assunto: Solicitação de chaves de produção</i> y <i>Nome do PDV: SalesApp</i>.</ui> 

<blockquote><ui>>ℹ️ Las claves estarán disponibles en el portal de desarrolladores Cielo dentro de 2 días hábiles.</blockquote>

## Configurar el conector Cielo (VTEX Sales App) en VTEX

<blockquote><ui>1. En el Admin VTEX, accede a <b>Configuración de la tienda > Pago > Proveedores</b>, o escribe <b>Proveedores</b> en la barra de búsqueda en la parte superior de la página.</ui>

<blockquote><ui>2. En la pantalla de proveedores, haga clic en el botón <b>Nuevo proveedor</b>.</ui>

<blockquote><ui>3. Escriba el nombre <b>CieloEcommerce</b> en la barra de búsqueda y haga clic en el nombre del proveedor.</ui>

<blockquote><ui>4. En <b>Clave de aplicación</b>, ingresa el nombre de tu <b>MerchantID</b> proporcionado por Cielo.</ui>

<blockquote><ui>5. En <b>Token de aplicación</b>, inserte la clave <b>Client token</b> generada en el portal de desarrolladores Cielo.</ui>  

<blockquote><ui>6. Si desea modificar el nombre de identificación que se mostrará para el proveedor Cielo en la pantalla de VTEX Admin, ingrese la información en el campo <b>Nombre</b> en <b>Información general</b>.</ui>

<blockquote><ui>7. En <b>Control de pago</b>, desactive el entorno de prueba desmarcando la opción <b>Activar split de cobros y enviar destinatarios de pago</b>.</ui>

<blockquote><ui>8. Deje la opción <b>Activar dividir cuentas por cobrar y enviar destinatarios de pagos</b> sin marcar.</ui>   

<blockquote><ui>9. En <b>Integration</b>, seleccione la opción <b>Adquirencia</b> (clientes Cielo 3.0) o <b>Gateway</b> (clientes Braspag).</ui>

<blockquote><ui>10. En <b>Provider</b>, seleccione la opción <b>Cielo</b> (clientes Cielo 3.0) o <b>Cielo30</b> (clientes Braspag).</ui>

<blockquote><ui>11. En <b>IsSplit</b>, seleccione la opción <b>False</b>.</ui>

<blockquote><ui>12. En <b>useCieloMDR</b>, seleccione la opción <b>Not Defined</b>.</ui> 

<blockquote><ui>13. En <b>UseMpi</b>, seleccione la opción <b>False</b>.</ui> 

<blockquote><ui>14. Mantenga los siguientes campos en blanco: <b>MpiClientId</b>, <b>MpiClientSecret</b>, <b>MpiMerchantName</b>, <b>MpiMCC</b>, <b>MpiEstablishmentCode</b> y <b>SoftDescriptor</b>.</ui>

<blockquote><ui>15. En <b>AntifraudProvider</b>, seleccione la opción <b>Not Defined</b>.</ui>  

<blockquote><ui>16. En <b>Antifraud</b>, seleccione la opción <b>Not Defined</b>.</ui>   

<blockquote><ui>17. En <b>AntifraudSequenceCriteria</b>, seleccione la opción <b>Not Defined</b>.</ui> 

<blockquote><ui>18. En <b>Captura</b>, seleccione la opción <b>Imediatamente</b>.</ui>   

<blockquote><ui>19. En <b>UseVerifyCard</b>, seleccione la opción <b>False</b>.</ui>

<blockquote><ui>20. En <b>AcceptInternationalCard</b>, seleccione la opción <b>True</b>.</ui>

<blockquote><ui>21. En <b>AcceptPrePaidCard</b>, seleccione la opción <b>True</b>.</ui>

<blockquote><ui>22. En <b>SaveCard</b>, seleccione la opción <b>False</b>.</ui>  

<blockquote><ui>23. En <b>CancelRefundType</b>, seleccione la opción <b>Automático Sempre que possível</b>.</ui> 

<blockquote><ui>24. En <b>CieloLIOClientId</b>, complete la clave Lio proporcionada por Cielo.</ui>   

<blockquote><ui>25. Haga clic en <b>Guardar</b>.</ui>

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
