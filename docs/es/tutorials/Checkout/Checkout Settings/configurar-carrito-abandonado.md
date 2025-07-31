---
title: 'Configurar carrito abandonado'
id: tutorials_740
status: PUBLISHED
createdAt: 2017-04-27T21:59:05.882Z
updatedAt: 2024-08-09T13:03:53.859Z
publishedAt: 2024-08-09T13:03:53.859Z
firstPublishedAt: 2017-04-27T23:03:41.572Z
contentType: tutorial
productTeam: Shopping
author: authors_3
slugEN: setting-up-abandoned-carts
locale: es
legacySlug: configurar-carrito-abandonado
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Carrito abandonado es la funcionalidad de VTEX que envía emails a los clientes para recordarles que finalice la compra en un carrito que se armó pero no se completó.

La configuración del carrito abandonado se puede realizar de dos formas diferentes, según el entorno operativo de la tienda:
- [VTEX Legado](#configuracion-para-tiendas-vtex-legado): a través de diversos módulos de la plataforma VTEX (CMS, Master Data y Centro de Mensajens) y también en su servidor host.
- [VTEX IO](#configuracion-para-tiendas-vtex-io): a través de la instalación de la aplicación “Abandoned Cart”, la configuración de lo pmodelo de email en el Centro de mensajens y el Trigger en Master Data.

## Configuración para tiendas VTEX Legado

Esta sección presenta los siguientes temas para configurar la funcionalidad de carrito abandonado en las tiendas VTEX Legado:

- [Configurar template de email en CMS](#configurar-template-de-email-en-cms)
- [Configurar modelo de email en el Centro de mensajes](#configurar-modelo-de-email-en-el-centro-de-mensajes)
- [Liberación del SPF](#liberacion-del-spf)
- [Configurar trigger](#configurar-trigger)

### Configurar template de email en CMS

Puede crear su propio template de email personalizado o utilizar la opción de emplate de email personalizado de carrito abandonado predeterminada. Para crear un template personalizado, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Storefront > Layout__, o escribe __Envío por geolocalización__ en la barra de búsqueda en la parte superior de la página.
2. En __CMS > HTML Templates__, haga clic en el icono `new template`.
3. Agregar un nombre en el campo __Template Name__.
4. Rellene el campo __Template XHTML__ con los códigos de template.
5. Haga clic en `Save Template`.

![template xhtml](https://images.ctfassets.net/alneenqid6w5/44IZ7N3din2EELL15z5FeQ/5e4164dc9abd8f5139d7934cae41e44c/Template_XHTML.PNG)

<div class="alert alert-warning">
Recomendamos que lo realicen profesionales familiarizados con el módulo CMS, que ya hayan realizado la configuración de otros templates de página y expositor.
</div>

Para utilizar una opción de modelo estándar, siga los pasos que se indican a continuación:

1. En el Admin VTEX, accede a __Storefront > Layout__, o escribe __Envío por geolocalización__ en la barra de búsqueda en la parte superior de la página.
2. En __CMS > HTML Templates__, haga clic en el icono `CEM-Abandoned-Cart`.
3. Verifique la información de los códigos de template presentes en el campo __Template XHTML__.

![CEM-Abandoned-Cart](https://images.ctfassets.net/alneenqid6w5/5ZBXBk2KNJVjekmT7P7RqQ/0dd187775baec69f3deee305c05950cb/CEM-Abandoned-Cart.PNG)

### Configurar modelo de email en el Centro de mensajes

Una vez que se haya creado el nuevo template de email o se hayan utilizado los datos de lo template predeterminado, acceda al Centro de mensajes para configurar lo modelo de email. Siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Plantillas de email > Plantillas__, o escribe __Plantillas__ en la barra de búsqueda en la parte superior de la página.
2. Clique no botão `New Template`.
3. Haga clic en __New template__ y escriba el mismo nombre utilizado en el template de email creado o predeterminado en el CMS (tiendas legado).
4. Seleccione __Enable email?__ e __Use default sender__.
5. Rellene el campo __Email title__ como desee.
6. Rellene el campo __Recipiente (To)__ con {{email}}.
7. En __Html__, ingrese la información del template de email creado o predeterminado.
8. Haga clic `Save`. 

<div class = "alert alert-info">
El campo JSON Data no debe completarse ni sus datos deben usarse en el template de email. Solo contiene información para permitir una vista previa del formato en el que se verán los datos en el email.
</div>

![New template - message center](https://images.ctfassets.net/alneenqid6w5/7nX1YnaZoesV51yG24Z3ls/68a8a4f2f7ad9f9911598b3aab475817/Novo_template.PNG)

### Liberación del SPF

La liberación del SPF es fundamental para evitar problemas de entregabilidad del e-mail, y debe ser realizada conforme al artículo [Configuraçión del SPF](/es/tutorial/configuracao-de-spf--42t0lkl2VyC6Yewc4wA6wI#).

Como buena práctica para configurar DNS para un dominio genérico (no obligatorio), siga el siguiente ejemplo:

![Hostnames - SPF](https://images.ctfassets.net/alneenqid6w5/4txj9x3nVeN7Z3WEZmSpev/45230f3dbeda2d8ee040ec8a6ee39d31/Hostnames_-_SPF.PNG)

Para obtener más información sobre este asunto, consulte [Configurar el apuntamiento del DNS para VTEX](/es/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280#).

### Configurar trigger

En esta etapa, es necesario configurar un [trigger en Master Data](/es/tutorial/criando-trigger-no-master-data--tutorials_1270). El proceso consiste en rellenar algunos valores que determinarán la activación del trigger, algunos de los cuales son filtros:

- __Checkout:__ el trigger se activará si no se completa el checkout y es diferente de nulo, es decir, si el cliente no finaliza la compra.
- Carrito:__ relacionado con los últimos productos que el cliente agregó al carrito. El trigger se activa si el valor es diferente de nulo.
- __Último carrito:__ registra la fecha y hora de creación del carrito. El trigger se activa si el valor es diferente de nulo.
- __¿Recibe newsletter?:__ garantiza el cumplimiento de los <a href="https://help.vtex.com/pt/tutorial/data-subject-rights--6imchxTx09icupKMbzHVIM">derechos de titulares de datos</a>, ya que solo los clientes suscritos al newsletter recibirán emails de carrito abandonado. La suscripción al newsletter se puede gestionar desde el checkout o en la sección <a href="https://help.vtex.com/pt/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh#perfil">Mi cuenta</a> de la tienda. El trigger se activa si el valor es verdadero.

Para que la activación del trigger sea posible, es necesario que los filtros estén rellenados según las instrucciones a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Master Data__.
2. En Master Data, haz clic en __Aplicaciones > Configuración avanzada > Estructura de datos__.
3. Haz clic en la pestaña __Trigger__.
4. Haz clic en el botón `Agregar`.
5. Rellena los campos a continuación:

   * **Nombre:** ingresa el nombre del trigger.
   * **Entidad de datos:** selecciona la entidad Cliente.
   * **Status:** marca la opción __Activado__.
6. En la pestaña **Reglas**, selecciona *Se modifica el valor de un atributo*.
7. En **Campo**, selecciona *Última sesión*.
8. Haz clic en `Agregar filtro` cinco veces para ver los campos de filtros. Selecciónalos y rellena la información como se indica a seguir:

   - *Checkout - Diferente de - Finalizado - y*
   - *Checkout - No es nulo - y*
   - *Carrito - No es nulo - y*
   - *Último carrito - No es nulo - y*
   - *¿Recibe newsletter? - Igual a - True*

9. Haz clic en la pestaña __Programar__ y selecciona si el envío del email debe realizarse lo antes posible, en una fecha específica o en una fecha dinámica.
11. Haz clic en la pestaña __Si es positivo__.
12. Rellena la pestaña según las instrucciones a continuación:

	* **Acción:** selecciona _Enviar un email_.
	* **Destinatario:** como prueba, ingresa tu email y haz clic en `Agregar email estático`.
	* **Formato del cuerpo de email:** selecciona _HTML_.
	* **Nombre del remitente:** ingresa el nombre de tu tienda tal y como deseas que aparezca en el remitente del email.
	* **Responder a:** rellena la dirección de email a la que el cliente puede enviar una respuesta.
	* __Tipo de contenido:__ selecciona *Contenido de la URL*.
	* __Asunto:__ rellena el asunto del email.
	* __URL:__ ingresa la dirección de tu tienda con la carpeta en que se configuró el carrito abandonado e incluye la tag del carrito`{!carttag_SCORE}` al final. Ejemplo: `nombredelatienda.com/CEM/Abandoned-Cart?refs={!carttag_SCORE}`.
	* __Agregar utm_source a todos los links con este valor:__ ingresa *CEM* para facilitar la identificación de las compras derivadas del carrito abandonado.
	* __Sobrescribir utm_source:__ marca esta opción.

13. Haz clic en `Guardar`.
14. Crea un carrito y cierra la página para probar el trigger.

  <div class="alert alert-warning">
	<p>La sesión de una página expira en 30 minutos. Es después de este periodo que Master Data inicia el conteo del periodo programado para activar el trigger de carrito abandonado. Por lo tanto, el tiempo hasta que llega el email corresponde al tiempo de sesión (30 minutos) más el periodo programado en el trigger.</p>
</div>

14. Después de que recibas el email de carrito abandonado, en el campo __Destinatario__ (paso 12), selecciona la opción __CL:Email__ y haz clic en `Agregar email dinámico`.
15. Haz clic en `Guardar`.

## Configuración para tiendas VTEX IO

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
