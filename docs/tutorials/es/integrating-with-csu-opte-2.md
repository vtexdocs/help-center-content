---
title: Integrar con CSU (Opte+)
id: tutorials_4258
status: PUBLISHED
createdAt: 2017-04-27T21:51:31.608Z
updatedAt: 2023-03-29T23:06:21.223Z
publishedAt: 2023-03-29T23:06:21.223Z
firstPublishedAt: 2017-04-27T23:11:15.330Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: integrar-con-csu
legacySlug: integrar-con-csu
subcategory: 1qvm3kIrt6KA6IeGc4EQ6k
---

Este artículo explica el paso a paso necesario para configurar la integración de su tienda con el marketplace CSU (Opte+).

CSU trabaja solamente con un modelo de Marketplace: **Checkout na CSU**. A través del mismo, todo el procesamiento del pago se hace en CSU, y el Seller sólo recibe el pedido y la autorización para despachar el pedido.

## Primeros pasos

1. Configure la [política comercial](http://help.vtex.com/es/tutorial/politica-comercial-para-marketplace/) (la indicación de CSU es que usted utilice la misma política de su propio site).
2. Configure la [logística](http://help.vtex.com/es/tutorial/como-configurar-logistica-para-politica-comercial/) para esa política comercial.

## Crear afiliado

Una vez configuradas la política comercial y la logística, hay que crear el afiliado. Para eso, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pedidos > Configuración**, o escribe *Pedidos* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Pedidos*.
2. En la pestaña **Afiliados**, haz clic en `+ Nuevo afiliado`.
3. Complete los campos de la pantalla, descritos abajo, y luego haz clic en `Guardar`.
    - **Nombre:** nombre del afiliado/marketplace. Trate de elegir nombres significativos del modelo que va a configurar;
    - **ID:** código de identificación del afiliado con tres dígitos. En este campo sólo se permiten consonantes. CSU solicita que se cree un afiliado para cada canal, o sea, uno para el Marketplace de CSU, uno para el programa de fidelidad de cada uno de los clientes de CSU y uno para cada shopping corporativo. Vamos a crear primero el del Marketplace. CSU le envía a usted, juntamente con un manual, un archivo en Excel con todos los sites de CSU para que usted pueda crear afiliados conforme a lo indicado por CSU.
        - **PTM**: Marketplace Optemais (para el Marketplace).
        - **PSS**: Pasaporte (para el programa de fidelidad del Marketplace).
    - **Política comercial:** ID de la política comercial donde está definido el surtido de productos que serán trabajados en el Marketplace. La indicación de CSU es que usted utilice la misma política de su propio site. Normalmente los Sellers usan la política comercial 1.
    - **Email para notificaciones:** dirección de email que recibirá cualquier notificación de conflicto en las integraciones de pedidos.
    - **Endpoint de busca:** será el mismo para los diversos marketplaces de CSU: http://stage.optemais.com.br/Notificacao/Vtex/Sku.
    - **Versión del endpoint de busca:** 1.x.x.
    - **Usar mi medio de pago:** Jamás marcar esta flag.

## Crear acceso

Una vez creado el afiliado, es necesario crear y dar permiso para la clave de CSU. Este procedimiento sólo hay que realizar una vez, independientemente del número de afiliados de CSU.

Es necesario crear el usuario asociando la clave, y luego asociar a un perfil de acceso. Los dos modelos usan el mismo perfil de acceso. Vea a continuación el paso a paso:

1. En el Admin VTEX, accede a **Configuración de la cuenta > Usuarios**, o escribe **Usuarios** en la barra de búsqueda en la parte superior de la página.
2. Busque el valor `vtexappkey-parceirocsu-ERUXDY`.
3. Seleccione el usuario encontrado y asocia a él el perfil de acceso `IntegrationProfile-Fulfillment_Gateway_GetOrder`.
4. Haz clic en `Guardar`.

Tras ese procedimiento, la integración con la CSU está configurada, y el [usuario titular](https://help.vtex.com/es/tutorial/what-is-the-sponsor-user--3oPr7YuIkEYqUGmEqIMSEy) del Seller debe solicitar una reindexación de su catálogo para agilizar el envío de los SKUs a la CSU.

Es necesario tener permisión de usuario titular para realizar este paso: acceda a su admin (http://_nomedaloja_/admin/site/fullcleanup.aspx) y haga clic en el botón **Reindexar Base** (este procedimiento debe hacerse con mucho cuidado y no debe repetirse siempre, pues puede afectar la performance del site).

Usted está a punto de ser un aliado Opte+. Póngase en contacto con CSU para que ellos chequeen si todo está correcto.

### Sepa más

- [Estrategias de marketplace en VTEX](https://help.vtex.com/es/tutorial/marketplace-strategies-at-vtex--tutorials_402).
