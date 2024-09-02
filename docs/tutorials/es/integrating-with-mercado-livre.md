---
title: 'Integrar con Mercado Libre'
id: tutorials_416
status: DRAFT
createdAt: 2017-04-27T22:06:05.698Z
updatedAt: 2020-03-06T13:56:49.727Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:24.390Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: integrando-con-mercado-libre
locale: es
legacySlug: integrando-con-mercado-libre
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Este tutorial va a enseñar paso a paso cómo configurar la integración de su tienda con __Mercado Libre__.

El tutorial está dividido en cuatro etapas:

1. [Configuración de la integración](/es/tutorial/integrando-con-mercado-libre#configuracion-de-la-integracion)
2. [Configuración del template](/es/tutorial/integrando-con-mercado-libre#configuracion-del-template)
3. [Configuración de la logística](/es/tutorial/integrando-con-mercado-libre#configuracion-de-la-logistica)
4. [Autorización de la integración en el panel del VTEX](/es/tutorial/integrando-con-mercado-libre#autorizacion-de-la-integracion-en-vtex)

Siga, en orden, cada una de estas etapas para que la integración se realice correctamente.



## Configuración de la integración

### Primeros pasos

Los pasos iniciales son esenciales para que las configuraciones se realicen con éxito:

1. Configure una [política comercial](/es/tutorial/politica-comercial-para-marketplace/) para integrar con Mercado Libre.
2. Configure la [logística](/es/tutorial/como-configurar-logistica-para-politica-comercial/) para esta política comercial. Esta será la logística responsable por las entregas de pedidos realizados en Mercado Libre.
3. Usted debe entrar en contacto con el e-mail `comercial@mercadolivre.com` para crear su cuenta en Mercado Libre y ajustar los detalles comerciales.

### Configurar el panel del Mercado Libre en VTEX

1. En el menu del Admin, haga clic en __Intgraciones__.
2. Haga clic en __Configuración__.
3. Busque por la caja del __Mercado Libre__ y haga clic en __Integrarse__.
4. Rellene los __campos__ que aparecen en la pantalla. A continuación, vamos a detallar cómo llenar cada campo.
5. Haga clic en el botón __Salvar Configuración__.

### Detalle de los campos

&bull; __Id del afiliado__: Este campo debe rellenarse con un ID de [afiliado](/es/faq/que-es-afiliado) que no exista en el registro de afiliados del OMS. El ID acepta sólo tres dígitos y consonantes. Sugerencia: `MLB`, `MML` o `MRC`. Si tiene configuraciones de integración para multi-dominios, tenga en cuenta el ID del afiliado. Este campo debe tener un valor diferente para cada dominio.

&bull; __Política comercial__: ID de la política comercial que será utilizada para el Mercado Libre. Son los productos de esta política comercial que serán enviados al Mercado Libre.

&bull; __Tipo de anuncio__: Este campo se puede rellenar con *Clásico* o *Premium (12x sin intereses)*. Usted debe elegir qué tipo de anuncio desea para sus productos en Mercado Libre. Cada tipo de anuncio tiene un valor de comisión a ser pagado al Mercado Libre. Para conocer el valor de estas comisiones, póngase en contacto con Mercado Libre.

&bull; __Título del anuncio__: En este campo, usted debe elegir cuál es el formato del nombre que su producto tendrá en el Mercado Libre. Es importante tener en cuenta el número de caracteres del título. En Mercado Libre, hay una restricción de 60 caracteres.

&bull; __Descripción del producto__: Este campo se puede rellenar con *plain/text* o *html*. Las descripciones con HTML no son aceptadas para las tiendas de Brasil y Argentina, siendo obligatoria la elección de la opción *plain/text*. Para estos países, las tags HTML serán ignoradas por el Mercado Libre. Para los demás países, las personalizaciones en HTML todavía se permiten. Ver en la sección __Configuración del Template__ las tags aceptadas por el Mercado Libre.

>❗ **OBS:** A pesar de existir la opción, las descripciones con HTML **no son más aceptadas** por Mercado Libre, siendo obligatoria la elección de la opción *plain/text*. En breve discontinuamos esta opción de la interfaz. En la sección **Configuración del Template** las tags aceptadas por el Mercado Libre.


&bull; __Associar productos a los pick-up points registrados__: Marque esta flag si desea que sus configuraciones de puntos de retirada sean reflejadas en el Mercado Libre. Es importante recordar que sólo son elegibles para esta flag las configuraciones hechas en la sección [Puntos de Retirada](/es/tutorial/configurar-puntos-de-recogida-pickup-points) del módulo __Logistics__.

&bull; __Tasa de divergencia de precio (Porcentual)__: Tasa de aceptación de la divergencia de valor de un pedido. Cualquier pedido que tenga una divergencia entre el precio de venta del marketplace y el precio determinado por el seller [será comparado con ese valor](/es/faq/por-que-el-pedido-fue-cerrado-con-el-precio-incorrecto). Si la divergencia en porcentaje es menor que el valor definido en ese campo, el pedido se integrará normalmente. En caso contrario, el pedido no se integrará y se le notificará en la [pestaña de pedidos (dentro de la sección de Integraciones en Admin)](/es/tutorial/como-verificar-la-integracion-en-bridge).

&bull; __Id de la tienda oficial en el mercado libre__: Si su tienda es elegible para ser una tienda oficial en el Mercado Libre, usted debe llenar este campo con el ID de su tienda en Mercado Libre. Esta información puede obtenerse de su contracto comercial con Mercado Libre. El ID generalmente se compone de tres o cuatro números. Ejemplos: __160__, __1406__.

&bull; __Taxa de confiabilidade da categorização automática__: la integración da la opción de categorizar automáticamente sus anuncios a través de una __ferramenta del Mercado Libre__. Esta herramienta depende de la información como el nombre del producto y el precio, y, si no puede inferir correctamente, puede categorizar de manera incorrecta su producto. Por lo tanto, será necesario definir una tasa de confiabilidad en la configuración de la integración. Es decir, el producto sólo se integrará si la tasa devuelta por la herramienta de Mercado Libre está por encima de la que ha configurado. Llene con la tarifa que desee.

  >❗ **OBS:** VTEX **no** recomienda realizar la categorización de manera automática. Indicamos utilizar la asignación de hoja de cálculo que se explica en [este artículo](http://help.vtex.com/es/tutorial/mapeo-de-categor%C3%ADas-y-variaciones#categorizacion).

&bull; __Stock mínimo__: Como la comunicación entre los sistemas de VTEX y del Mercado Libre no actualiza algunas de las informaciones en tiempo real, el stock exhibido en Mercado Libre puede quedar desfasado en relación a la acción real del producto en su tienda. Para que no se produzcan ventas de productos sin stock, usted debe rellenar este campo con un valor mínimo de stock de seguridad. Así, cuando el stock en el Mercado Libre llegue a este valor, el anuncio será pausado para que no suceda la venta de un producto sin stock.


&bull; Los campos abajo son referentes a la característica de __Mensajería__ en el Mercado Libre. Para entender más, haga [clic aquí](/es/announcement/feature-vtex-para-usar-la-mensajeria-del-mercadolibre). El relleno de estos campos es opcional, por lo tanto, si cualquiera de ellos se deja en blanco, su mensaje no se enviará. Es importante destacar que __no es posible__ utilizar HTML o variables en estas mensajes.

  - __Mensagem de aprovação do pedido__: inserte en este campo el mensaje que desea enviar al cliente cuando lo pedido está integrado con éxito en VTEX.

  - __Mensagem de envio de tracking__: inserte en este campo el mensaje que desea enviar al cliente __cuando se ha despachado lo pedido__ y la __URL de rastreo está disponible para la consulta__. Es importante destacar que, automáticamente VTEX va insertar en este campo la URL de rastreo justo al lado de su mensaje. Entonces, si la URL no está disponible todavía, recomendamos facturar la pedido sin la URL. Una vez que esté disponible, inserte en el pedido.
>Ex: "¡Hola! Usted ya puede seguir el estado de su entrega a través de la siguiente URL: http://status.transportadora.com.br/tracking/nº-del-pedido"

  >❗ OBS: si la URL de rastreo no se rellena en la factura del pedido, este mensaje **no** se enviará.

  - __Mensagem de pedido entregue__: inserte en este campo el mensaje que desea enviar al cliente cuando el pedido haya sido entregado por el transportista.

&bull; __Atributos omitidos en la plantilla del producto__: Veremos más abajo que, en la configuración de la plantilla para el Mercado Libre, usted puede incluir los atributos del producto que desea que se muestren en el template. La configuración de este campo permite omitir atributos que no desea que aparezcan en la plantilla de Mercado Libre.

>⚠️ >
> Los campos *Actualizar descripción del anuncio, el texto para la evaluación automática del comprador y el correo electrónico del afiliado* se suspenderán en la UI. Por lo tanto, no es necesario rellenarlos. Las APIs continuarán activas.



## Envío de los atributos de los productos para el Mercado Libre

>❗ Este paso es necesario sólo para las tiendas que venden productos como **ropa, calzado y bolsos**. Si su tienda tiene estos tipos de producto, es necesario hacer el registro de las especificaciones de ellos. Acceda a [este artículo](https://help.vtex.com/es/tutorial/envio-de-los-atributos-de-ropa-calzado-y-bolsos-para-el-mercado-libre) para saber cómo hacer este registro. Si su tienda no tiene estos productos, siga directamente a la sección **Configuración del template**

__Listo! __ Usted ha terminado la configuración del *primer paso* de la integración. Ahora vamos a la etapa de __Configuración del Template__.



## Configuración del template

Para que su producto sea ofertado en el Mercado Libre, es necesario configurar el template del anuncio donde el producto será exhibido. Para configurar este template, siga el paso a paso abajo:

1. Acceda al módulo **Message Center**.
2. Busque por el template **Bridge - integración del mercado libre**.
3. Introduzca las variables del producto que desea ver en el template. Las variables disponibles se enumeran a continuación.
4. Haga clic en el botón **Guardar**.

A continuación, se enumeran las variables disponibles para que se muestren en el template de su anuncio en Mercado Libre:

``{{DESCRICAO}}``: Variable que devuelve la __descripción del producto__ registrada en VTEX.

``{{IMAGENS}}``: Esta variable contiene el enlace con la __imagen principal del producto__ registrada en VTEX.

``{{TITULO}}``: Variable que contiene el __nombre del producto__. El nombre del producto se mostrará de acuerdo con el formato elegido en el campo __Título del anuncio__, configurado en el primer paso de este tutorial, en la __configuración de la integración__.

``{{NOME_ATRIBUTO_PRODUTO}}``: Esta variable inserta en el template el __valor__ de un atributo específico del producto. De esta forma, usted debe indicar qué atributo desea mostrar. Ejemplo: para mostrar el valor de un atributo llamado "Detalle técnico", debe insertar la variable `{{DETALHE_TECNICO}}` en el template. La variable se debe escribir siempre en letras mayúsculas, sustituyendo los espacios del nombre del atributo por underscore (\_) y tampoco debe tener acentuación.

Si desea incluir todos los atributos y valores de los atributos en la plantilla, debe incluir en su plantilla el código que se describe a continuación. Esta es la estructura que debe ser utilizada para renderizar todos los atributos del producto y sus respectivos valores en el template:

``{{#each ATRIBUTOS}} {{NOME}} – {{VALOR}} <br> {{/each}}``

>ℹ️ Si desea omitir algún atributo en el template, usted puede hacer esta configuración en el la **configuración de la integración**, rellenando el campo **Atributos omitidos en el template del producto**, como se explica en la sección **Configurar el panel del Mercado Libre en VTEX** del paso anterior.

__Muy bien!__ Usted ha terminado el *segundo paso* de la integración! Ahora, vamos a configurar la logística para las entregas de pedidos hechos en Mercado Libre.



## Configuración de la logística

La configuración de la logística para atender a los pedidos realizados en Mercado Libre tiene algunas particularidades. __Es el Mercado Libre quien determina el tipo de flete que su tienda debe configurar__. La elección de este tipo de flete ocurre en función del acuerdo comercial que su tienda realizó con el Mercado Libre. Compruebe con el Mercado Libre cuál es el tipo de flete que su tienda debe configurar.

Los fletes pueden ser de __dos tipos__:

### Mercado Envíos 1 (ME1)

En la modalidad ME1, __es el comerciante quien realiza la entrega del pedido__. Esto significa que el comerciante es el responsable del envío de los productos. A continuación, explicaremos cómo configurar correctamente el ME1 en VTEX:

1. En el momento del cierre de la compra, el Mercado Libre no realiza simulaciones de flete en tiempo real en VTEX. El cálculo del flete se realiza a partir de una hoja de flete que usted debe enviar al Mercado Libre. Este envío no se produce a partir de VTEX. Póngase en contacto con el Mercado Libre para conocer más detalles sobre el envío de esta hoja de flete.
2. Cuando un pedido se cierra en Mercado Libre, VTEX intentará integrar este pedido en nuestro OMS. Dentro de la rutina de integración, el sistema realiza una __simulación de flete__ en VTEX para saber qué transportista deberá entregar el pedido. __Sin el dato del transportista, el pedido no puede ser integrado__.
3. Como el Mercado Libre ya realizó el cálculo del flete con los valores de la tabla enviada en el primer paso, podría ocurrir alguna diferencia entre el valor calculado por el Mercado Libre y el valor calculado en la simulación de flete en VTEX. __Esta diferencia de valores podría ocasionar errores de integración de los pedidos__. Para que esta diferencia no ocurra, __recomendamos fuertemente el registro de una promoción de flete gratis__ para el afiliado del Mercado Libre. Para saber cómo crear esta promoción, [vea nuestro tutorial](/es/tutorial/promocion-para-marketplace/).
4. Con el flete gratuito, __no habrá competencia entre el valor del flete calculado por VTEX y el valor del flete calculado por el Mercado Libre__. Así, la información del transportista que realizará la entrega será guardada en el pedido y la integración ocurrirá con éxito.

Usted tendrá en VTEX entonces __todas las informaciones necesarias__ para hacer la entrega del pedido.


### Mercado Envios 2 (ME2)

En la modalidad ME2, __la entrega del pedido es responsabilidad del Mercado Libre__. Por lo tanto, cuando un pedido se realiza con el flete ME2, __el pedido será integrado en VTEX sin el valor del flete__.

Como la entrega del pedido no será hecha por su tienda, el campo del __tipo de entrega__ en el JSON del pedido será llenado con el valor `vtex:fob_xxxx`, donde `xxxx` es el ID de su stock donde el SKU fue reservado. `FOB` es la sigla para *Free on board*. Este tipo de entrega indica que el proceso de envío del pedido será responsabilidad del marketplace.

En esta modalidad, __hay dos formas de el pedido ser entregado__. Estas formas de entrega se determinan por su acuerdo comercial con el Mercado Libre. Siga los pasos a continuación para que el pedido sea entregado correctamente por el Mercado Libre:

#### Tienda lleva el paquete al punto de entrega determinado por el Mercado Libre

1. Una vez que el pedido se ha integrado con VTEX, acceda al pedido en el módulo __OMS__.
2. En la pantalla del pedido, busque la caja con el título __ETIQUETA DE ENTREGA__ y haga clic en el enlace con el nombre del transportista que realizará la entrega. Este link abre una pestaña con la etiqueta que contiene la información de entrega.
3. Imprima la etiqueta y pegue en el paquete de entrega.
4. Lleve el paquete al punto de entrega determinado por Mercado Libre.
5. El Mercado Libre enviará el producto al cliente final.

#### Mercado Libre busca el pedido en el CD de su tienda (Mercado Envíos Colección)

En este escenario, Mercado Libre busca el pedido directamente en los Centros de Distribución de su tienda y hace la entrega al cliente final.

>⚠️ >
> No se recomienda el uso del tipo de entrega *Entrega combinada*. En pedidos cerrados con este tipo de entrega, como no tenemos la información de la dirección de entrega, el pedido no se integrará con VTEX. Para que un pedido sea integrado correctamente, es necesario que tenga la información de entrega. Por lo tanto, siempre recomendamos utilizar el **Mercado Envíos**.


### Convivencia Logística

Con el objetivo de mejorar la experiencia logística con la integración del Mercado Libre, vendedores con logística ME1 pueden trabajar usando también la modalidad ME2.

_`Ex:` usted vende electrodomésticos. La entrega de artículos grandes, como neveras y cocinas, es hecha por usted (modalidad ME1). Pero usted quiere que Mercado Libre haga la entrega (modo ME2) de elementos más pequeños, como tostadoras, licuadores, mezcladores, etc._

>⚠️ **OBS:** sólo tiendas que ya son ME1 pueden tener ME2 también.

>⚠️ **OBS2:** para poder usar las dos opciones, primero deberá haber un acuerdo directamente con el asesor comercial de Mercado Libre, ya que esa aún no es una funcionalidad pública.

De esta manera, es necesario segmentar sus productos indicando para la integración cuáles serán asignados a la modalidad ME2. Para ello, siga el paso a paso siguiente:

1. Cree una [especificación de producto](/es/tutorial/criando-um-campo-de-produto) en la categoría deseada, obligatoriamente con el nombre `meli_shipping_mode`.
2. Esta especificación debe recibir el valor `me2`.
3. Después de registrar la especificación, debe acceder al registro de cada producto y asignar el valor a la especificación. O lo hace de manera masiva a través [de este tutorial](/es/tutorial/importando-e-exportando-especificacao-de-produto-e-sku).

>⚠️ **OBS:** es importante comprobar si la categoría en la que está enviando los productos está apta para usar ME2. Acceda a la siguiente URL en el navegador (sustituyendo la variable entre claves {CategoryId} por el ID de la categoría de Mercado Libre) para comprobar.
>
>
> </br>
> api.mercadolibre.com/categories/{CategoryId}
>
>
> </br>
> Puede ver esto en el campo *"shipping_modes"*. Si el campo tiene el valor "me2", significa que la categoría acepta esta modalidad de entrega.


__Listo!__ Usted cumplió el *tercer paso*! Ahora ya tiene la información necesaria para manejar el envío de pedidos realizados en Mercado Libre. Vamos a la última etapa: __Autorizar su integración__.



## Mapeo de categorías y variaciones

Para realizar este paso, accede a [este artículo](/es/tutorial/mapeo-de-categorías-y-variaciones). Luego vuelva al paso siguiente.



## Autorización de la integración en VTEX

Después de realizar las configuraciones anteriores, es necesario autorizar su integración con el Mercado Libre. Siga los pasos abajo:

>⚠️ >
> El Mercado Libre requiere que la autorización sea efectuada por el **usuario Master** de la cuenta en Mercado Libre.

1. En el menu del Admin, haga clic en __Intgraciones__.
2. Haga clic en __Configuración__.
3. Haga clic en __Autorización__.
4. Haga clic en __Desejo me autenticar__ ("Deseo autenticarme").
5. Usted será redirigido al ambiente del Mercado Libre. Conéctese con el __usuario Master__ de la cuenta en Mercado Libre.
6. En el ambiente de Mercado Libre, haga clic en el botón __Permitir__.
7. Usted se redirirá de nuevo al sección de __Integraciones__ en Admin de VTEX.

__Felicitaciones! Ahora su tienda ya está integrada con Mercado Libre!__
