---
title: 'Integrar con Via Varejo/CNova'
id: frequentlyAskedQuestions_6673
status: ARCHIVED
createdAt: 2019-01-24T20:46:02.807Z
updatedAt: 2020-03-06T13:56:49.627Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:15:37.714Z
contentType: tutorial
productTeam: Channels
author: authors_4
slugEN: integrating-with-viavarejo-cnova
locale: es
legacySlug: integrar-con-viavarejo-cnova
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Este artículo tiene por objetivo orientar el registro de la integración con Via Varejo/CNova.

## Registro de la integración

1. En el menú del Admin, haga clic en __Integraciones__.
2. Acceda al ítem __Configuración__.
3. Busque por la casilla de __Via Varejo__ y haga clic en el botón __Integrar__.
4. Rellene los __campos__ que aparecen en la pantalla. A continuación, vamos a detallar cómo llenar cada uno de ellos.
5. Con todo rellenado correctamente, haga clic en el botón __Guardar Configuración__.

### Detalle de los campos

&bull; __Id del afiliado\*__: este campo debe rellenarse con un ID de [afiliado](/es/faq/que-es-afiliado) que aún no exista en el registro de afiliados del OMS. El ID acepta sólo tres dígitos (todos deben ser consonantes). Sugerencias: `VVJ`,` CNV` o `NVP`. Si tiene configuraciones de [integración para multidominios](/es/tutorial/como-crear-multiloja-multidominio), preste atención especial al ID del afiliado, porque este campo debe tener un valor diferente para cada dominio.

&bull; __Política comercial\*__: ID de la política comercial que será utilizada para la integración con Via Varejo. Son los productos de esa política comercial que serán enviados al marketplace.

&bull; __Clave de acceso__: no se debe rellenar porque se generará automáticamente en el paso de autorización.

&bull; __CNPJ\*__: rellene este campo con el CNPJ de su tienda. Esta información es obligatoria para que sea posible facturar los pedidos ([usted puede saber más aquí](/es/tutorial/como-funciona-la-integracion-de-cnova-via-varejo).

&bull; __Título del producto\*__: en ese campo, usted debe elegir el formato del nombre que su producto tendrá en Via Varejo.

&bull; __Nombre del campo de especificación de producto que contiene su descripción__: si desea utilizar una descripción diferente de la que ya está registrada en el catálogo de VTEX, usted tiene la opción de crear un [campo de producto](/es/tutorial/criando-um-campo-de-produto) de tipo _Texto Grande_. Rellenando ese campo, la integración va a priorizar el envío de la descripción contenida en él (en lugar de la descripción original del producto).

>❗ **OBS:** atente a las configuraciones en la creación de este nuevo campo para que la nueva información creada **no** aparezca en su sitio.

& bull; __Tasa de Divergencia de Precio\*:__ es la tasa de aceptación de la diferencia de valor de un pedido. Cualquier pedido que tenga una diferencia entre el precio de venta en el marketplace y el precio determinado por el seller [será comparado con ese valor](/es/faq/por-que-el-pedido-fue-cerrado-con-el-precio-incorrecto). Si la divergencia, en porcentual, es menor que el valor definido en ese campo, el pedido se integrará normalmente. En caso contrario, el pedido no se integrará y usted podrá verlo en la pestaña de pedidos [dentro de la sección de integraciones en el Admin](/es/tutorial/como-verificar-la-integracion-en-bridge).

& bull; __E-mails para notificación de pedidos no integrados\*:__ llene con un e-mail. Recuerde hacer clic en el botón `+` para insertarlo.

*Los campos marcados con `*` son obligatorios.*

Esta es la *primera etapa* de la integración. En el siguiente paso, vamos a realizar el registro de una API fundamental para su funcionamiento.


## Registro de la API
 
Para funcionar, la integración con Via Varejo requiere que la API de envío sea registrada en el panel del marketplace.

### API de envío

La implementación de esta API permite a Via Varejo consultar, en tiempo real, el precio y plazo de un envío para sus productos (de acuerdo con el CEP). Tenga en cuenta que el término `{AccountName}` debe ser reemplazado por el nombre del ambiente de su tienda.

`http://novaintegration.vtexcommercestable.com.br/api/marketplace-nv/pub/{{AccountName}}/freight?skuId={{skuId}},{{cantidad}}&zipcode={{cep}}`

Este es el *segundo paso* de la configuración de la integración. Para concluir el proceso, es necesario autorizar la integración de Via Varejo en el panel de VTEX.


## Autorizar la integración de Via Varejo en el panel de VTEX

Después de realizar todos los pasos anteriores, siga los siguientes pasos para autorizar su integración con la Vía Varejo:

1. En el menú Admin, haga clic en __Integraciones__.
2. Acceda al ítem __Configuración__.
3. En el card de Via Varejo, haga clic en __Autorización__.
4. Haga clic en __Deseo autenticarme__.
5. Usted será redirigido al ambiente de Via Varejo.
6. En el ambiente de Via Varejo, acceda al panel de desarrolladores.
7. Usted será redirigido de nuevo a la pestaña de __Integraciones__ de VTEX.

Después de cumplir más esta etapa, su tienda ya está completamente integrada con Via Varejo.
