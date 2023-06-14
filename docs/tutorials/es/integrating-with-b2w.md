---
title: 'Integrar con SkyHub/B2W'
id: tutorials_408
status: DRAFT
createdAt: 2017-04-27T22:06:17.861Z
updatedAt: 2020-03-06T13:56:49.709Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:23.750Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: integrando-con-b2w
locale: es
legacySlug: integrando-con-b2w
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

La integración con B2W se realiza a través de SkyHub, una integradora que intermedia las informaciones enviadas por VTEX y las repasa a B2W. De esta manera, VTEX se integra con SkyHub, pero al final sus productos son dirigidos a B2W.


## Registro de la integración de B2W
Siga los pasos a continuación para iniciar la configuración de la integración:

1.	En el menú Admin, haga clic en __Integraciones__.
2.	Ingrese a la pestaña __Configuración__.
3.	Busque por la caja de __B2W__ y haga clic en __Integrar__.
4.	Rellene los __campos__ exhibidos en la pantalla. A continuación, vamos a detallar cómo rellenar cada uno de ellos.
5.	Con todo rellenado correctamente, haga clic en el botón __Guardar Configuración__.


### Detalle de los campos 
&bull; __E-mail de acceso de SkyHub*:__ rellene este campo con su e-mail de SkyHub.

&bull; __Clave de acceso de SkyHub*:__ este campo debe rellenarse con el __token__ de identificación de su tienda en el marketplace. Esta información debe ser obtenida con  SkyHub.

&bull; __Id del afiliado*__: este campo debe rellenarse con un ID de [afiliado](/es/faq/que-es-afiliado) que aún no exista en el registro de afiliados de Orders (antiguo OMS). El ID acepta solamente tres dígitos (todos deben ser consonantes). Sugerencia: `BWW`. Si tiene configuraciones de [integración para multidominios](/es/tutorial/como-crear-multiloja-multidominio), preste especial atención al ID del afiliado, porque este campo debe tener un valor diferente para cada dominio.

&bull; __Política comercial*__: ID de la política comercial que se utilizará para la integración con  B2W. Son los productos de esta política comercial que serán enviados para el marketplace.

&bull; __URL de la tienda__: este campo debe rellenarse con el URL de su tienda.
<br />_`Ej.:` www.mitienda.com_

&bull; __Informe aquí el nombre de sus atributos utilizados para hacer la variación de sus productos__: Ingresar las especificaciones de SKUs utilizadas en la tienda.

&bull; __Tasa de Divergencia de Precio*:__ es la tasa de aceptación de la diferencia de valor de un pedido. Cualquier pedido que tenga una diferencia entre el precio de venta del marketplace  y el precio determinado por el seller [será comparado con este valor](/es/faq/por-que-el-pedido-fue-cerrado-con-el-precio-incorrecto). Si la divergencia, en porcentaje, es menor que el valor definido en este campo, el pedido se integrará con normalidad. En caso contrario, el pedido no se integrará y usted podrá visualizarlo en la [pestaña de pedidos (dentro de la sección de integraciones en el Admin)](/es/tutorial/como-verificar-la-integracion-en-bridge).

&bull; __E-mails para Notificación de Pedidos no Integrados*:__ rellene con un e-mail. Recuerde hacer  clic en el botón `+` para agregarlo.

_Leyenda:_<br />
`*` Campos obligatorios.<br />

Después de guardar la configuración, la integración envía automáticamente todos los productos asociados a la política comercial determinada a SkyHub.

Esta es la primera etapa de la integración. En el siguiente paso, vamos a realizar el registro de una API fundamental para el funcionamiento de ella.


## Registro de APIs
La integración proporciona automáticamente la API para consulta de flete. Sin embargo, hay situaciones específicas en las que usted necesitará abrir un requerimiento con B2W, solicitando la inserción manual de la API en el portal del marketplace.

### API de Flete
La implementación de la API permite que B2W consulte, en tiempo real, el precio y el plazo del envío de sus productos (de acuerdo con el código postal). Tenga en cuenta que el término `{AccountName}` debe ser reemplazado por el nombre del ambiente de su tienda.

`http://simulation.vtexcommercestable.com.br/api/skyhubintegration/freight?an={accountName}`

Después de cumplir con este paso, su tienda ya está completamente integrada con B2W.


## Artículos relacionados
- [¿Cómo funciona la integración de SkyHub?](/es/tutorial/como-funciona-la-integracion-de-skyhub)
- [Integrar con marketplace](/es/tutorial/integrando-con-marketplace)

