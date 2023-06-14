---
title: 'Integrar con Netshoes'
id: 3hnIjBAOkM2moqkG86kmsU
status: DRAFT
createdAt: 2017-11-29T15:03:17.240Z
updatedAt: 2020-03-06T13:58:00.166Z
publishedAt: 
firstPublishedAt: 2017-12-01T14:11:11.825Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: integrar-con-netshoes
legacySlug: integrar-con-netshoes
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Netshoes es uno de los mayores marketplace de artículos deportivos y está disponible para su integración a través de la funcionalidad nativa VTEX.

## Registro de la integración

1.	En el menú Admin, haga clic en __Integraciones__.
2.	Ingrese al ítem __Configuración__.
3.	Busque la caja de __Netshoes__ y haga clic en __Integrar__.
4.	Rellene los __campos__ que aparecen en la pantalla. A continuación, vamos a detallar cómo llenar cada uno de estos.
5.	Con todo rellenado correctamente, haga clic en el botón __Salvar Configuración__.

### Detalle de los campos

- **Integración:** seleccione `Activada` para que la integración comience a operar. Si selecciona `Desactivada`, toda la configuración de la integración se borrará, incluyendo el afiliado.

- **Id del afiliado:** este campo debe rellenarse con un ID de [afiliado](es/faq/que-es-afiliado) que aún no exista en el registro de afiliados de Gestión de pedidos. El ID acepta solamente tres dígitos (todos deben ser consonantes). Sugerencia: `NTS`. Si tiene configuraciones de [integración para multidominios](/es/tutorial/como-crear-multiloja-multidominio), preste especial atención al ID del afiliado, porque este campo debe tener un valor diferente para cada dominio.

- **Política comercial:** ID de la política comercial que será utilizada para la integración con Netshoes. Son los productos de esta política comercial que serán enviados al marketplace.

- **Clave de acceso a la API de Netshoes:** este campo debe rellenarse con el __token__ de identificación de su tienda en el marketplace. Esta información es proporcionada directamente por Netshoes, luego de la contratación.

- **Nombre del SKU:** determina el formato como se enviarán los nombres de marcas, productos y SKUs de su tienda. 

- **Porcentaje de tolerancia en la divergencia del valor del pedido:** es la tasa de aceptación de la diferencia de valor de un pedido. Cualquier pedido que tenga una diferencia entre el precio de venta del marketplace y el precio determinado por el seller [será comparado con este valor](/es/faq/por-que-el-pedido-fue-cerrado-con-el-precio-incorrecto). Si la divergencia, en porcentaje, es menor que el valor definido en este campo, el pedido se integrará con normalidad. De lo contrario, el pedido no se integrará y usted podrá visualizarlo en la [pestaña de pedidos (dentro de la sección de integraciones en el Admin)](/es/tutorial/como-verificar-la-integracion-en-bridge).

- **E-mails para creación del Afiliado:** rellene con un e-mail.

- **Mapeo de Tipo de Entrega (SLA) -> Normal:** aquí debe ingresarse el [tipo de transportadora](es/tutorial/como-se-maneja-el-tipo-de-entrega) que desea utilizar para entrega __normal__.

_`Ej.: `imagine que usted utiliza Correios (PAC) como transportista y su Tipo de Transportista en el panel de transportadoras de VTEX se denomina "Común". Entonces, debe escribir en el campo el nombre __Común__. Recuerde que la palabra debe ser exactamente igual a la registrada en la sección Inventario y envío._

<div class="alert alert-warning">
<strong>OBS:</strong> si se deja el campo en blanco, la integración usará la transportadora <strong>más barato disponible</strong> en el momento de integrar el pedido.
</div>	

- **Mapeo de Tipo de Entrega (SLA) -> Expresa:** Ingresa el [tipo de transportadora](/es/tutorial/como-se-maneja-el-tipo-de-entrega) que desea utilizar para entrega __expresa__.

_`Ej.:` imagine que usted utiliza la transportadora XPTO, que entrega más rápido, pero es más caro. Su Tipo de Transportista en el panel de transportadoras de VTEX se llama "Entrega Rápida". Entonces, debe escribir en el campo el nombre __Entrega Rápida__. Recuerde que la palabra debe ser exactamente igual a la registrada en la sección de Inventario y envío._

<div class="alert alert-warning">
<strong>OBS:</strong> si se deja el campo en blanco, la integración usará la transportadora <strong>más barato disponible</strong> en el momento de integrar el pedido.
</div>

_Leyenda:_<br />
`*` Campos obligatorios.<br />

Esta es la _primera etapa_ de la integración. En el siguiente paso, vamos a realizar el registro de APIs fundamentales para el funcionamiento de esta.

## Registro de API

Para funcionar, la integración con Netshoes requiere que la API de flete sea registrada en el panel del marketplace.

### API de Notificación de Productos Aprobados 

Para que la integración pueda enviar precio y inventario de un producto aprobado por Netshoes, es recomendable habilitar la API de Notificación Producto Aprobado en el panel de ellos. Basta seguir los pasos descritos en esta [documentación de Netshoes] (https://developers.netshoes.com.br/api-portal/content/notificacao) y usar la URL siguiente (sustituyendo `{AccountName}` por el nombre del ambiente de su tienda):
`http://{accountName}.vtexcommercestable.com.br/api/netshoesintegration/product/approved/notification`

### API de Importación de Pedidos

Para activar la importación de pedidos de Netshoes para VTEX, se recomienda habilitar la API siguiente (sustituyendo `{AccountName}` por el nombre del ambiente de su tienda). Basta seguir los pasos descritos en esta [documentación de Netshoes](https://developers.netshoes.com.br/api-portal/content/notificacao).
`http://{accountName}.vtexcommercestable.com.br/api/netshoesintegration/order/notification`


### API de Flete

La implementación de esta API permite que Netshoes consulte, en tiempo real, el precio y el plazo de un flete para sus productos (de acuerdo con el código postal). Para esto, debe ir al panel de Netshoes y seguir los pasos descritos en esta [documentación](https://developers.netshoes.com.br/api-portal/content/apidefrete). La siguiente URL (sustituyendo `{AccountName}` por el nombre del ambiente de su tienda) será registrada:

`http://{accountName}.vtexcommercestable.com.br/api/netshoesintegration/freight`

<div class="alert alert-warning">
<strong>OBS:</strong> si los Mapeos de Entrega no se han realizado, no habrá retorno de informaciones de entrega y flete para esta API.
</div> 

<div class="alert alert-warning">
<strong>OBS 2:</strong> para que la consulta de la API se realice con éxito, el ID de la transportadora y el ID del muelle en VTEX debe ser un valor que contenga solamente números.
</div>

Este es el _segundo paso_ de la integración. Para concluir el proceso, es necesario realizar el envío de las especificaciones de sus productos a Netshoes.

## Envío de las especificaciones de productos a Netshoes

Hechas las configuraciones iniciales para la integración con Netshoes, ahora vamos a enviar los datos de los __atributos__ de los productos al marketplace. El envío de estas informaciones será realizado por __upload de la planilla de mapeo__.

Con este feature, es posible categorizar correctamente sus productos en Netshoes y también crear variaciones y atributos para estos.

El Mapeo debe realizarse siempre que un producto se envíe por primera vez a Netshoes. Esto significa que, ya habiendo hecho el mapeo una vez, los productos que ya fueron integrados no necesitan pasar por este proceso nuevamente. De la misma forma, los productos nuevos siempre deben pasar por el mapeo.

1. [Descargue aquí](https://s3.amazonaws.com/Marketplace-Integration/NetshoesIntegration/Template/Mapeamento.xlsx) la __Planilla de Mapeo de Netshoes__ en formato `.xlsx`.
2. [Descargue aquí](https://s3.amazonaws.com/Marketplace-Integration/NetshoesIntegration/Template/Atributos.xlsx) la __Planilla de Mapeo de Netshoes__ para verificar los valores aceptados de acuerdo con cada columna de la Planilla de Mapeo del paso anterior. Esta planilla es __exclusivamente para la consulta__.

### Rellenando la Planilla de Mapeo

Siga el paso a paso siguiente, haciendo el de / para en la __Planilla de Mapeo__ entre lo que está registrado en su producto en VTEX y los valores especificados de acuerdo con la __Planilla de Consulta__ de Netshoes.

<div class="alert alert-warning">
<strong>OBS:</strong> cualquier valor usado que no esté en la Planilla de Consulta va a ocasionar un error de integración.
</div>

1. __ID del SKU:__ es el ID del SKU en VTEX. Este es el Id del SKU que usted desea enviar a Netshoes.

2. __Departamento:__ rellene con el valor del Departamento al cual su SKU pertenece en Netshoes.
<br/>_`Ej.:` si un producto está registrado en VTEX en el departamento `Moto`, en la Planilla de Mapeo el valor correspondiente en la columna __Departamento__ debe ser `Motociclismo`._

3. __Tipo de Producto:__ rellene con el valor del Tipo de Producto de su SKU. De acuerdo con el departamento escogido en el paso anterior, compruebe en la Planilla los Tipos de Producto posibles para este departamento.
<br/>_`Ej.:`usted está mapeando una zapatilla casual. De acuerdo con la Planilla de Consulta, esta entraría en el Departamento "Casual" y la columna __Tipo de Producto__ sería rellenada con el valor `Zapatilla`.

4. __Marca:__ rellene con el valor correspondiente a la Marca del Producto en VTEX.
<br/>_`Ej:` usted está mapeando una camisa Nike. De acuerdo con la Planilla de Consulta, la columna __Marca__ debe rellenarse con el valor `Nike`.

<br/>
<div class="alert alert-warning">
<strong>OBS:</strong> si la marca de sus productos no está en la Planilla de Consulta, entre en contacto con Netshoes solicitando la inclusión de esta en el sistema. Una vez que confirmen el registro, usted podrá utilizar la marca en el mapeo. Si ellos no lo tienen registrado aún, el producto va a sufrir un error de integración.</div>

5. __Color__: rellene con el valor del Color del SKU.
<br/>_`Ej.:` usted está mapeando un short azul y blanco. De acuerdo con la Planilla de Consulta, la columna __Color__ debe rellenarse con el valor `Azul+Blanco`._

6. __Sabor__: rellene con el valor del Sabor del SKU.
<br/>_`Ej.:` usted está mapeando un suplemento vitamínico sabor fresa. De acuerdo con la Planilla de Consulta, la columna __Sabor__ debe rellenarse con el valor `Fresa`._

7. __Tamaño__: rellene con el valor del Tamaño del SKU.
<br/>_`Ej.:` usted está mapeando una bermuda pequeña. De acuerdo con la Planilla de Consulta, la columna __Tamaño__ debe rellenarse con el valor `P`._

8. __Género__: rellene con el valor del Género del SKU.
<br/>_`Ej.:` usted está mapeando un zapato femenino. De acuerdo con la Planilla de Consulta, la columna __Género__ debe rellenarse con el valor `Mujer`._


### Otras Especificaciones

Existen algunos __otros__ atributos de productos listados en la pestaña "Atributos" de la Planilla de Consulta que son __obligatorios__, pero que __no__ se envían a través de la Planilla de Mapeo explicada en el paso anterior.

Para enviar estos atributos, es necesario tener registrado en VTEX las [especificaciones del producto](/es/tutorial/criando-um-campo-de-produto) indicadas como obligatorias en la Planilla de Consulta.

_`Ej.:` un producto del Departamento __Básquet__, del Tipo de Producto __Zapatilla__, debe tener el Atributo `Altura de Caña` registrado como especificación de producto en VTEX. En este ejemplo, los valores permitidos para el atributo son `Caña Alta`,` Caña Mediana` y `Caña Baja`. Si la especificación en VTEX no tiene los valores esperados por Netshoes, el producto se rechaza en la integración._

### Haciendo el upload

Después de rellenar la planilla, ingrese a __Integraciones__ en el menú Admin:

1. Haga clic en __Configuración__.
2. Busque el card de Netshoes y haga clic en el __ícono de engranaje__.
3. A continuación, haga clic en __Carga de Mapeo__.
4. Seleccione la planilla con los datos y haga clic en __Enviar Archivo__.

Con el upload concluido, la integración envía automáticamente todos los productos de la planilla a Netshoes.

Después de cumplir esta etapa, su tienda ya está completamente integrada con Netshoes.
