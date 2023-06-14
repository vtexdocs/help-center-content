---
title: Registro de la integración de Magazine Luiza
id: 4QWLcDhsh2GSSamouyu6M0
status: PUBLISHED
createdAt: 2018-10-17T12:39:05.174Z
updatedAt: 2021-03-18T19:30:46.167Z
publishedAt: 2021-03-18T19:30:46.167Z
firstPublishedAt: 2018-11-06T02:08:03.031Z
contentType: trackArticle
productTeam: Channels
slug: registro-de-la-integracion-de-magazine-luiza
trackId: 5Yx5IrNa7Y48c6aSC8wu2Y
trackSlugES: configurar-la-integracion-de-magazine-luiza
---

La integración con Magazine Luiza se realiza a través de IntegraCommerce, una integradora que intermedia las informaciones enviadas por VTEX y las repasa a Magazine Luiza. De esta manera, VTEX se integra con IntegraCommerce, pero al final sus productos se dirigen a Magazine Luiza.

1. En el menú lateral del Ad,om, haga clic en __Integraciones__.
2. Acceda al ítem __Configuración__.
3. Busque por el box de __Magazine Luiza__ y haga clic en __Integrar__.
4. Rellene los __campos__ que aparecen en la pantalla. A continuación, vamos a detallar cómo llenar cada uno de ellos.
5. Con todo rellenado correctamente, haga clic en el botón __Guardar Configuración__.

Con esa integración, será posible __crear nuevas cuentas__ y también __migrar cuentas ya existentes (pronto)__ en Magazine Luiza. El paso a paso siguiente se adecua a los dos casos.

<div class="alert alert-warning">
<strong>NB:</strong> actualmente <strong>no se puede migrar cuentas antiguas</strong>. Estamos trabajando y pronto esta migración se hará automáticamente.</div>


## Detalle de los campos

&bull; __Integración\*:__ marque `Activada` para que la integración comience a operar. Si se marca `Desactivada`, toda la configuración de la integración se va a borrar, incluso el afiliado.

&bull; __Id del afiliado\*:__ ese campo debe rellenarse con un ID de [afiliado](/es/faq/que-es-afiliado) que aún no exista en el registro de afiliados. El ID acepta sólo tres dígitos (todos deben ser consonantes). Sugerencia: `MGZ`.

Si su tienda tiene configuración de [integración para multidominios](/es/tutorial/como-crear-multiloja-multidominio), preste una atención especial al ID del afiliado, porque este campo debe tener un valor diferente para cada dominio.

Si usted está migrando una cuenta, vamos a aprovechar el afiliado ya usado para la integración antigua y pasaremos a usarlo en esa integración.

&bull; __Política comercial\*:__ ID de la política comercial que será utilizada para la integración con Magazine Luiza. Son los productos de esa política comercial que serán enviados al marketplace.

&bull; __Percentual de tolerancia en la divergencia del valor del pedido\*:__ es la tasa de aceptación de la diferencia de valor de un pedido. Cualquier pedido que tenga una diferencia entre el precio de venta del marketplace y el precio determinado por el seller [será comparado con ese valor](/es/faq/por-que-el-pedido-fue-cerrado-con-el-precio-incorrecto). Si la divergencia, en porcentual, es menor que el valor definido en ese campo, el pedido se integrará normalmente. En caso contrario, el pedido no se integrará y usted podrá verlo en la [pestaña de pedidos (en la sección de integraciones en el Admin)](/es/tutorial/como-verificar-la-integracion-en-bridge).

&bull; __Mapeo de SLA Personalizable\*:__ en estos campos se debe hacer un de/para entre los [tipos de transportista](/es/tutorial/como-se-maneja-el-tipo-de-entrega) registrados en IntegraCommerce y los registros en la logística de VTEX. Al hacer el mapeo, haga clic en el botón `+` para guardarlo.

_`Ejemplo:` imagine que usted utiliza los Correios (PAC) como transportista, su tipo de transportador en IntegraCommerce sea "normal" y en el panel logístico de VTEX se llama "Común". En este escenario, usted debe rellenar el primer campo con "Normal" y el segundo con "Común". Recuerde que las palabras deben ser exactamente iguales a las registradas en la logística.

&bull; __Estoque mínimo\*:__ usted debe rellenar este campo con un valor mínimo de stock de seguridad. Aunque la comunicación entre los sistemas de VTEX y de Magazine Luiza sea rápida, el stock mostrado en el marketplace puede quedar desfasado en relación al estoque real del producto en su tienda (aunque por algunos minutos). Así, cuando el stock en VTEX llegue a ese valor, la integración va a borrar el stock para que la venta de un producto sin stock no ocurra.

_Leyenda:_<br />
* * Campos obligatorios.<br />

Una vez que se hayan rellenado los campos, haga clic en el botón __"Guardar configuración"__.

*__Listo.__ Después de cumplir esta etapa, su tienda ya está completamente integrada con Magazine Luiza.*
