---
title: 'Configurar pago con CieloEcommerce'
id: 6zuELBqEo0QzApbU4l7L4
status: PUBLISHED
createdAt: 2023-09-18T14:07:22.540Z
updatedAt: 2025-04-09T19:25:40.961Z
publishedAt: 2025-04-09T19:25:40.961Z
firstPublishedAt: 2023-09-18T15:29:57.321Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-cieloecommerce
legacySlug: configurar-pago-con-cieloecommerce
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el CieloEcommerce. Con esta integración, su tienda puede rrealizar ventas a través de tarjetas de credito, debito, private y cobranded labels, boletos, PIX, entre otros. 

Para configurar CieloEcommerce, siga los siguientes pasos:

<blockquote><ui>1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.</ui>

<blockquote><ui>2. En la pantalla de proveedores, haga clic en el botón **Nuevo proveedor**.</ui>

<blockquote><ui>3. Escriba el nombre **CieloEcommerce** en la barra de búsqueda y haga clic en el nombre del proveedor.</ui>

<blockquote><ui>4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los **MerchantID** y **MerchantKey** proporcionados por su cuenta CieloEcommerce.</ui>

<blockquote><ui>5. Si desea modificar el nombre de identificación que se mostrará para el proveedor CieloEcommerce en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.</ui>

<blockquote><ui>6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.</ui>

<blockquote><ui>7. Si desea utilizar [Split de pagos](/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) en su tienda, seleccione la opción **Activar split de cobros y enviar destinatarios de pago** e indique el **Responsable de cargos de procesamiento de pagos** y el **Responsable de contracargos** (marketplace, sellers o marketplace y sellers).</ui>

<blockquote><ui>8. En **Integration**, seleccione si el conector se utilizará como **Adquirencia** o **Gateway**.</ui>

<blockquote><ui>9. En **Provider**, seleccione el adquiriente que se utilizará con el conector CieloEcommerce.</ui>

<blockquote><ui>10. En **DaysToInvoiceCancel**, seleccione el número de días deseado para cancelar la factura.</ui>

<blockquote><ui>11. En **IsSplit**, elija si la opción de split estará disponible.</ui>

<blockquote><ui>12. En **useCieloMDR**, seleccione la opción configurada en el proveedor CieloEcommerce.</ui>

<blockquote><ui>13. En **UseMpi**, elija si autenticarán las transacciones (3DS 2.0). Este campo es obligatorio para el tipo de pago débito. Si selecciona "True", vaya al Paso 12. Si selecciona "False", vaya al Paso 13.</ui>

<blockquote><ui>14. Rellene los campos **MpiClientId**, **MpiClientSecret**, **MpiMerchantName**, **MpiMCC** y **MpiEstablishmentCode** con tus datos de acceso a Mpi.</ui>

<blockquote><ui>15. En **DataOnly**, seleccione la opción configurada en el proveedor CieloEcommerce.</ui>

<blockquote><ui>16. En **SoftDescriptor**, indicar la información que se mostrará para identificar la transacción realizada en su tienda.</ui>

<blockquote><ui>17. En **UseAntifraudSolution**, seleccione la opción deseada.</ui>  

<blockquote><ui>18. En **AntifraudProvider**, seleccione el proveedor antifraude que desea utilizar con CieloEcommerce.</ui>

<blockquote>> ⚠️ Consulte con Cielo si las opciones antifraude en CieloEcommerce ya están disponibles para su uso. Si aún está en desarrollo, ambos campos descritos en el paso 15 deben dejarse en blanco. Para obtener más información sobre el uso de opciones antifraude en su tienda, visite [Configurar el antifraude](/es/tutorial/como-configurar-antifraude).</blockquote>
<br>

<blockquote><ui>19. En **Antifraud** y **AntifraudSequenceCriteria**, seleccione las opciones según información de CieloEcommerce antifraude. Consulta con CieloEcommerce si el antifraude ya está disponible para su uso, si aún está en desarrollo debes dejar ambos campos en blanco.</ui>

<blockquote><ui>20. En **CaptureOnLowRisk** y **VoidOnHighRisk**, seleccione las opciones configuradas en el proveedor CieloEcommerce.</ui>  

<blockquote><ui>21. En **CustomMdds**, seleccione las opciones según la información antifraude de CieloEcommerce.</ui>

<blockquote><ui>22. Em **Captura**, seleccione el período en el que se debe solicitar la captura de pago. El horario estándar se realizará cuatro días después de la autorización.</ui>

<blockquote><ui>23. Seleccione los campos **UseVerifyCard**, **AcceptInternationalCard**, **AcceptPrePaidCard** y **CancelRefundType** según su configuración en CieloEcommerce.</ui>

<blockquote><ui>24. En **CieloLIOClientId**, complete según la información del proveedor CieloEcommerce.</ui>  

<blockquote><ui>25. Haga clic en **Guardar**.</ui>

Para configurar los métodos de pago a procesar por CieloEcommerce, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, CieloEcommerce puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
