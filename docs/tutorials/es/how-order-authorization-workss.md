---
title: Cómo funciona la autorización de pedidos
id: 59otf1ZTweLmtZ07hIR854
status: DRAFT
createdAt: 2019-03-12T16:37:03.426Z
updatedAt: 2020-03-05T18:16:51.131Z
publishedAt: 
firstPublishedAt: 2019-03-12T16:38:58.550Z
contentType: tutorial
productTeam: Post-purchase
author: 523NSmHfn2IKEoiy2Q44YS
slug: como-funciona-la-autorizacion-de-pedidoss
legacySlug: untitled-entry-2019-03-12-at-04-37-03
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

En el módulo de gestión de pedidos, __La Autorización de pedidos__ permite el control y la aprobación de pedidos con divergencias de precios en su tienda.

![autorização-de-pedidos ES](//images.ctfassets.net/alneenqid6w5/7bov7XWzWzQ2qFPZ5OnJg7/3044ddd44a533fbd7a5d2499e7353374/autoriza____o-de-pedidos__ES.png)
 
Las divergencias de precios entre pedidos se pueden encontrar en dos escenarios principales:

### Descuentos manuales
 
Cuando el pedido se originó en la propia tienda utilizando descuentos manuales, aplicados por operadores de televentas de la tienda, por ejemplo.
 
### Divergencia de valores
 
Cuando el pedido fue originado en un [marketplace](https://help.vtex.com/tutorial/que-es-un-marketplace--680lLJTnmEAmekcC0MIea8) con un precio diferente del registrado en el [seller](https://help.vtex.com/tutorial/que-es-un-seller--5FkLvhZ3Few4CWWIuYOK2w).

Para evitar pérdida de facturación con errores de integración o con pedidos cuyos precios fueron alterados manualmente, por ejemplo, la Autorización de pedidos permite que se definan reglas para cada rango porcentual de variaciones de precio existente en su tienda, tal como:
 
- De 0 a 5% de variación, el pedido será aprobado automáticamente.
- De 5,01 a 30% de variación, el pedido será enviado para la aprobación del usuario `usuario@ejemplo.com`.
- De 30,01% a 100% de variación, el pedido será negado automáticamente.
 
Como muestra el ejemplo anterior, la funcionalidad también permite la delegación de usuarios operacionales con [permisos](https://help.vtex.com/tutorial/cómo-crear-un-perfil-de-acceso--tutorials_526) para la aprobación de pedidos.
 
En estos escenarios, el usuario registrado como responsable recibe una notificación para cada nuevo pedido demandante de `waiting-for-manual-authorization`, a través de VTEX DO.
 
Al ser notificado, el usuario entonces deberá:
 
1. Acceder a los detalles del pedido deseado en <strong>Todos los pedidos</strong>, en el módulo <strong>Gestión de Pedidos</strong>;
2. Seleccione el botón <strong>Aprobar pedido</strong>;
3. Confirmar estar de acuerdo con el impacto de las acciones.
 
Los demás pedidos, clasificados en los rangos de variación de precio cuyas reglas son automatizadas, serán procesados por el sistema automáticamente.
 
<div class="alert alert-warning">
No siendo posible configurar la Autorización de pedidos para aprobaciones en cadena o jerárquicas, los pedidos deben ser aprobados por un usuario apenas.
</div>

