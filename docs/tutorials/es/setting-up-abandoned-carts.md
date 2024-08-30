---
title: 'Configurar carrito abandonado'
id: tutorials_740
status: PUBLISHED
createdAt: 2017-04-27T21:59:05.882Z
updatedAt: 2024-06-24T14:49:04.124Z
publishedAt: 2024-06-24T14:49:04.124Z
firstPublishedAt: 2017-04-27T23:03:41.572Z
contentType: tutorial
productTeam: Shopping
author: authors_3
slug: configurar-carrito-abandonado
locale: es
legacySlug: configurar-carrito-abandonado
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

Carrito abandonado es la funcionalidad de VTEX que envía emails a los clientes para recordarles que finalice la compra en un carrito que se armó pero no se completó.

La configuración del carrito abandonado se puede realizar de dos formas diferentes, según el entorno operativo de la tienda:
- [VTEX Legado](#configuracion-para-tiendas-vtex-legado): a través de diversos módulos de la plataforma VTEX (CMS, Master Data y Centro de Mensajens) y también en su servidor host.
- [VTEX IO](#configuracion-para-tiendas-vtex-io): a través de la instalación de la aplicación “Abandoned Cart”, la configuración de lo pmodelo de email en el Centro de mensajens y el Trigger en Master Data.

### Configuración para tiendas VTEX Legado

Esta sección presenta los siguientes temas para configurar la funcionalidad de carrito abandonado en las tiendas VTEX Legado:

- [Configurar template de email en CMS](#configurar-template-de-email-en-cms)
- [Configurar modelo de email en el Centro de mensajes](#configurar-modelo-de-email-en-el-centro-de-mensajes)
- [Liberación del SPF](#liberacion-del-spf)
- [Configuración de trigger](#configuracion-de-trigger)

#### Configurar template de email en CMS

Puede crear su propio template de email personalizado o utilizar la opción de emplate de email personalizado de carrito abandonado predeterminada. Para crear un template personalizado, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Storefront > Layout__, o escribe __Envío por geolocalización__ en la barra de búsqueda en la parte superior de la página.
2. En __CMS > HTML Templates__, haga clic en el icono `new template`.
3. Agregar un nombre en el campo __Template Name__.
4. Rellene el campo __Template XHTML__ con los códigos de template.
5. Haga clic en `Save Template`.

![template xhtml](https://images.ctfassets.net/alneenqid6w5/44IZ7N3din2EELL15z5FeQ/5e4164dc9abd8f5139d7934cae41e44c/Template_XHTML.PNG)

>⚠️ Recomendamos que lo realicen profesionales familiarizados con el módulo CMS, que ya hayan realizado la configuración de otros templates de página y expositor.

1. En el Admin VTEX, accede a __Storefront > Layout__, o escribe __Envío por geolocalización__ en la barra de búsqueda en la parte superior de la página.
2. En __CMS > HTML Templates__, haga clic en el icono `CEM-Abandoned-Cart`.
3. Verifique la información de los códigos de template presentes en el campo __Template XHTML__.

![CEM-Abandoned-Cart](https://images.ctfassets.net/alneenqid6w5/5ZBXBk2KNJVjekmT7P7RqQ/0dd187775baec69f3deee305c05950cb/CEM-Abandoned-Cart.PNG)

#### Configurar modelo de email en el Centro de mensajes

Una vez que se haya creado el nuevo template de email o se hayan utilizado los datos de lo template predeterminado, acceda al Centro de mensajes para configurar lo modelo de email. Siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Plantillas de email > Plantillas__, o escribe __Plantillas__ en la barra de búsqueda en la parte superior de la página.
2. Clique no botão `New Template`.
3. Haga clic en __New template__ y escriba el mismo nombre utilizado en el template de email creado o predeterminado en el CMS (tiendas legado).
4. Seleccione __Enable email?__ e __Use default sender__.
5. Rellene el campo __Email title__ como desee.
6. Rellene el campo __Recipiente (To)__ con {{email}}.
7. En __Html__, ingrese la información del template de email creado o predeterminado.
8. Haga clic `Save`. 

>ℹ️ El campo JSON Data no debe completarse ni sus datos deben usarse en el template de email. Solo contiene información para permitir una vista previa del formato en el que se verán los datos en el email.

![New template - message center](https://images.ctfassets.net/alneenqid6w5/7nX1YnaZoesV51yG24Z3ls/68a8a4f2f7ad9f9911598b3aab475817/Novo_template.PNG)

#### Liberación del SPF

La liberación del SPF es fundamental para evitar problemas de entregabilidad del e-mail, y debe ser realizada conforme al artículo [Configuraçión del SPF](https://help.vtex.com/es/tutorial/configuracao-de-spf--42t0lkl2VyC6Yewc4wA6wI#).

Como buena práctica para configurar DNS para un dominio genérico (no obligatorio), siga el siguiente ejemplo:

![Hostnames - SPF](https://images.ctfassets.net/alneenqid6w5/4txj9x3nVeN7Z3WEZmSpev/45230f3dbeda2d8ee040ec8a6ee39d31/Hostnames_-_SPF.PNG)

Para obtener más información sobre este asunto, consulte [Configurar el apuntamiento del DNS para VTEX](https://help.vtex.com/es/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280#).

#### Configuración de trigger

En esta configuración será necesario crear un [trigger en Master Data](https://help.vtex.com/es/tutorial/criando-trigger-no-master-data?locale=pt#). El proceso consiste en rellenar algunos valores que determinarán el disparo de trigger.

Entre estos, tres filtros adicionales como: 

- Checkout
- Carrinho
- Último carrinho

El filtro "Checkout" establece una de las condiciones para que se dispare el trigger. En el siguiente ejemplo, el trigger se activará si el carrito no es finalizado y es diferente a nulo. Es decir, en caso de si el cliente no completa la compra y no ha incluido nada en el carrito.

Además, tenemos incluso los filtros "Carrito" y "Último carrito". Por mucho que ambos sean semejantes, los comportamientos son diferentes. El "Carrito" se refiere a los últimos productos que el cliente agregó en el carrito de compras propiamente dicho. El "Último carrito" consiste en el registro de fecha y hora en que se creó el carrito.

>⚠️ Para que se realice el disparo de trigger, los tres filtros deben, obligatoriamente, rellenarse de acuerdo con el siguiente ejemplo.

<blockquote><ui>1. En el Admin VTEX, accede <b>Configuración de la tienda</b> > <b>Storefront</b> > <b>Master Data.</b></ui>

<blockquote><ui>2. En Master Data, haz clic en <b>Aplicações</b> > <b>Estrutura de dados.</b></ui>

<blockquote><ui>2. Haga clic en la pestaña <b>Trigger</b>.</ui>

<blockquote><ui>3. Haga clic en el botón <b>Add New</b> (Nuevo).</ui>

<blockquote><ui>4. Ingrese el nombre del trigger.</ui>

<blockquote><ui>5. En<b>Data Entity</b> (Entidad), seleccione el valor <b>Cliente</b>.</ui>

<blockquote><ui>6. En <b>Status</b>, marque <b>Enabled</b> (Activo).</ui>

<blockquote><ui>7. En <b>Trigger Rule</b> (Condición de trigger), seleccione <b>O valor de um atributo for alterado</b> (El valor de un atributo es alterado).</ui>

<blockquote><ui>8. En <b>Field</b> (Informe el atributo), seleccione <b>Última sessão</b> (Última sesión).</ui>

<blockquote><ui>9. Haga clic en <b>Add filter</b> (Agregar filtro) (5x) para habilitar los campos. Seleccione y rellene como se indica e ilustra a continuación.  

<blockquote><blockquote><ui>-> Checkout - Diferente - Finalizado - and</ui>

<blockquote><blockquote><ui>-> Checkout - Não está nulo - and</ui>

<blockquote><blockquote><ui>-> Carrinho - Não está nulo - and</ui>

<blockquote><blockquote><ui>-> Último Carrinho - Não está nulo</ui> 

![Filter master data 2](https://images.ctfassets.net/alneenqid6w5/6aME0zp72kjwJiulRdoRNl/d6c7e5d4e84c5d2b8b870de4ee0db4bc/Filter_Master_Data.PNG)

>⚠️ Además de los filtros indicados anteriormente, se recomienda insertar otro filtro en el siguiente formato: `Receives newsletter? - Equal to - True`. Esto garantiza el cumplimiento de los [derechos de los titulares de datos](https://help.vtex.com/es/tutorial/data-subject-rights--6imchxTx09icupKMbzHVIM), ya que solo los clientes suscritos al boletín recibirán correos electrónicos de carritos abandonados. La suscripción al boletín de su tienda se puede realizar en el momento de la compra o en la sección [Mi Cuenta](https://help.vtex.com/es/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh#profile) de su tienda.

<blockquote><ui> 10. Haga clic en pestaña <b>Schedule</b> (Programación) y seleccione si desea enviar el correo electrónico en una fecha específica o en una fecha dinámica.</ui>

![Schedule date](https://images.ctfassets.net/alneenqid6w5/3SiaNvXMctzVtBzSjzsg3E/840f17bdc08c9703fdc972b2c8793668/Schedule_date.PNG)

<blockquote><ui>11. En la pestaña <b>If positive</b> (Si es positivo):</ui>

<blockquote><blockquote><ui>a. En Action, seleccione <b>Send an email</b> (Enviar email).</ui>

<blockquote><blockquote><ui>b. En <b>Recipient</b> (Destinatario), para realizar una prueba del sistema, ingrese su email y haga clic en <b>Add Static email</b> (Añadir email estático).</ui>

>⚠️ Una vez que haya completado las otras configuraciones a continuación y haya verificado que recibió el mensaje de carrito abandonado en su email, regrese a este paso, seleccione la opción **CL**: **Email**, haga clic en **Add Dynamic email** (Añadir email dinámico), y luego en **Save**.

<blockquote><blockquote><ui>c. En <b>Email body format</b> (Formato del cuerpo del email), seleccione <b>Html</b>.</ui>

<blockquote><blockquote><ui>d. En <b>Sender's name</b> (Nombre del remitente), ingrese el nombre de su tienda.</ui>

<blockquote><blockquote><ui>e. En <b>Reply to</b> (Email de respuesta), complete con la dirección de email a la que el cliente podrá responder con sus dudas.</ui>

<blockquote><blockquote><ui>f. En <b>Content type</b> (Origen del contenido), seleccione <b>URL content</b> (Contenido de una URL).</ui>

<blockquote><blockquote><ui>g. Complete el campo <b>Subject</b> (Asunto).</ui>

<blockquote><blockquote><ui>h. En <b>URL</b>, ingrese la dirección de su tienda con las carpetas en las que el layout del carrito abandonado fue configurado, con el tag del carrito después (?refs={!carttag_SCORE}). Ex.: nomedaloja.com.br/CEM/Abandoned-Cart?refs={!carttag_SCORE}.</ui>

  ![PastasCarrinhoAbandonado](https://images.ctfassets.net/alneenqid6w5/4DSsVaeDvWmaaw2iwySCOy/b579eb818e0bcda140dba0ae96ecc90f/PastasCarrinhoAbandonado.png)

>⚠️ Esta URL debe ser la final de la tienda, y no la URL con vtexcommercestable.

<blockquote><blockquote><ui>i. En <b>Add utm_source to all links whose value is</b>, rellene con "CEM", para facilitar la identificación de compras por el carrito abandonado.</ui>

<blockquote><blockquote><ui>j. Seleccione la opción <b>Overwrite utm_source</b> (Sobrescribir utm_source).</ui>

<blockquote><blockquote><ui>k. Haga clic en el botón <b>Save</b>.</ui>

>⚠️ La sesión de una página expira en 30 minutos. Solamente después de ese tiempo consideramos la programación del disparo de trigger de Carrito Abandonado. Es decir, el tiempo a ser considerado es el tiempo de la sesión + la programación de trigger.

![If positive tab](https://images.ctfassets.net/alneenqid6w5/2GDAJ2St3ayiKjcWoONDRc/d863f83956f876035351cd222a0482ad/If_positive_Tab.PNG)

### Configuración para tiendas VTEX IO

Para configurar la funcionalidad de carrito abandonado en las tiendas VTEX IO, siga estos pasos:

1. Instala la aplicación [Abandoned Cart Service](https://developers.vtex.com/vtex-developer-docs/docs/vtex-abandoned-cart-service) en tu tienda.
2. Configure el modelo de email en el [Centro de Mensajes](#configurar-modelo-de-email-en-el-centro-de-mensajes). Las especificaciones JSON están disponibles en [Message Center Information](https://developers.vtex.com/vtex-developer-docs/docs/vtex-abandoned-cart-service#message-center-information).
3. Realice la [liberación del SPF](#liberacion-del-spf).
4. [Configure el trigger](#configuracion-de-trigger) de la misma manera que en las tiendas Legacy hasta el Paso 10. A partir del Paso 11 (pestaña __Si es positivo__), siga las instrucciones disponibles en [Trigger configuration information](https://developers.vtex.com/vtex-developer-docs/docs/vtex-abandoned-cart-service#trigger-configuration-information).

![If positive tab IO](https://images.ctfassets.net/alneenqid6w5/4kuuU7JySZQVklXS2jtfsp/ce32f7997824f648690edefe77ad03c0/If_positive_Tab_IO.PNG)

## Dudas frecuentes

### Mi trigger está configurada correctamente pero los emails no están llegando al email de prueba. ¿Qué hay que verificar?

Para asegurar el flujo correcto de los disparos, debemos comprobar dos detalles:

1. ¿Está funcionando la URL del template?

 Para asegurar que esté funcionando la URL, usted debe probarla directamente en el browser. Sustituya el valor **{!carttag_SCORE}** por el ID de algún SKU activo y disponible en el site. Si la URL retorna algún error, los disparos no ocurrirán de manera correcta.

2. ¿Está funcionando el RC (Request Capture)?

 Para verificar si está funcionando el RC, atualice la home del site monitoreando los requests por la herramienta de desarrollador del browser (en el chrome, el F12). Localice el request **rc.js** y verifique si el mismo está retornando contenido. Si el retorno está vacío, póngase en contacto con VTEX.

### ¿Los dados capturados por el RC están actualizando el registro en el Master Data?

Para verificar, acceda al site de su tienda y ponga un producto en el carrito. Haga clic en finalizar compra, inserte el email y confirme. Cierre el navegador en cualquier parte de la finalización de compra (desde el llenado de datos personales hasta formas de pago). Espere 30 minutos, acceda al módulo de Master Data y vea si el email utilizado ha entrado como nuevo registro, con los campos de &#8220;Datos da última navegación&#8221; fueron actualizados.

Si ya tiene registro en la tienda, basta hacer login al acceder al site, incluir un producto en el carrito y cerrar un navegador. Espere los 30 minutos, acceda al módulo del Master Data y verifique si los campos de **Datos de la última navegación** fueron actualizados.

### ¿Puedo tener más de un template de abandono?

El cliente puede tener la cantidad de emails que estime necesaria, sólo hay que informar todas las URLs y la periodicidad de cada una.

### ¿Puedo dar descuento en ese email? ¿Cómo hacerlo?

Sí, es posible ofrecer un descuento al cliente que retorne a la tienda a través de ese email. Para tanto será necesario crear un cupon de descuento que será informado a través del email al cliente o la creación de una promoción por UTM directo en el template.

### ¿Consigo un informe de cuántas compras fueron recuperadas a través de esta funcionalidad?

Por medio de su herramienta de Analytics, usted conseguirá monitorear esas recuperaciones de ventas.

### ¿Hay algún requisito para configurar esta funcionalidad en mi tienda?

Para configurar la funcionalidad de carrito abandonado, su tienda debe estar en producción para que los campos del Master Data sean actualizados. Esta funcionalidad no está disponible para ambientes de desarrollo.
