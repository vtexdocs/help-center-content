---
title: 'Entendiendo Pedidos B2B'
id: 1arpUseqasZZ45Lq7PgevO
status: PUBLISHED
createdAt: 2020-10-20T15:50:59.558Z
updatedAt: 2022-07-13T21:58:03.246Z
publishedAt: 2022-07-13T21:58:03.246Z
firstPublishedAt: 2020-11-17T17:03:21.123Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: understanding-b2b-orders
locale: es
legacySlug: entendiendo-pedidos-b2b
subcategoryId: 1WkESJBcI6r61dS82PQKF9
---

En una operación de comercio electrónico B2B, habitualmente se necesita informar el status de un pedido a colaboradores  de la empresa que no fueron responsables por realizar la compra. Para eso, el equipo de atención al cliente de la tienda necesita consultar el ERP, puesto que en la tienda en línea no existen vínculos entre los pedidos realizados por diferentes usuarios.

La app **Pedidos B2B** simplifica este proceso y permite que cualquier colaborador de la empresa que realizó la compra  pueda consultar los pedidos realizados accediendo a la tienda virtual.

![orders VTEX B2B](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Esa experiencia de autoservicio es posible gracias a una integración vía API con el ERP. De esta forma, el colaborador puede buscar pedidos por: 

- **Web order number:** número de identificación del pedido en sitio web de la tienda.
- **ERP order number:** número de identificación del pedido en el ERP de la tienda.
- **My order:** número de identificación asociado al cliente que efectuó la compra.

>⚠️ Esta app solo está disponible para las tiendas desarrolladas con 
>     [VTEX IO](https://vtex.com/br-pt/store-framework/).
> Antes de continuar, necesita <a href = "https://developers.vtex.com/vtex-developer-docs/docs/querying-b2b-order-statuses">instalar y configurar Pedidos B2B</a> en su tienda.

## Contexto

En el escenario B2B, el principal objetivo es la experiencia del cliente, toda vez que la fidelidad es esencial para la relación entre empresas. El comercio electrónico se propone llevar esa misma satisfacción al ambiente digital, permitiendo la integración de los servicios manuales con los procesos digitales.

En la práctica, esto significa simplificar los procesos para que el cliente adquiera sus productos de la manera más adecuada y conveniente. Él puede elegir el servicio que le resulte más apropiado para realizar una compra, ya sea sitio web o por el canal de televenta. Además, puede acceder a los pedidos ingresando al sitio web sin depender de ningún intermediario.

En el anterior escenario de VTEX, para tener acceso a los pedidos de una empresa, cada colaborador tenía que acceder a la tienda con su propio email. No era posible contar con un acceso general para los colaboradores de una misma empresa. Para hacerlo, la propia empresa necesitaba crear su aplicación.

## Beneficios

Con el objetivo de crear una experiencia de servicio consistente y multicanal en respuesta al escenario anterior, creamos Pedidos B2B. Cuando instala la aplicación en su tienda, esta permite que todos los colaboradores de la empresa compradora tengan acceso a los pedidos realizados con un inicio de sesión general. Pedidos B2B utiliza una API que consulta al ERP la información de la empresa, y no la del colaborador. De esta forma, se tiene un acceso a los pedidos de la empresa en su conjunto. 

Otro beneficio de esta aplicación es la integración de los pedidos realizados a través de diferentes canales. Normalmente, el operador de televenta utiliza el ERP para realizar un pedido. Sin embargo, a partir de la integración con el ERP, la aplicación permite consultar los pedidos hechos tanto por el canal de televenta como por el sitio web. De esta manera, el administrador de la tienda y el cliente pueden verificar y hacer seguimiento de los pedidos realizados.

Además, Pedidos B2B permite consultar las facturas y los diferentes comprobantes de pago generados.

