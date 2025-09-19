---
title: 'Regla de Divergencia de precios'
id: 6RlFLhD1rIRRshl83KnCjW
status: PUBLISHED
createdAt: 2021-12-25T20:10:25.853Z
updatedAt: 2024-03-22T15:11:31.300Z
publishedAt: 2024-03-22T15:11:31.300Z
firstPublishedAt: 2021-12-25T21:05:20.600Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: price-divergence-rule
legacySlug: regla-de-divergencia-de-valores
locale: es
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

Cuando un _seller_ vende en un _marketplace_, a veces hay una diferencia entre el precio fijado en la configuración de VTEX y el ofrecido por el _marketplace_, lo que resulta en pedidos con valores diferentes a los que esperaba el _seller_. Esta situación puede ocurrir en cualquier tipo de _marketplace_: _marketplaces_ VTEX, _marketplaces_ externos, [conectores certificados (partners)](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-certificado-partner) y [conectores nativos](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-nativo-vtex).

Para optimizar el procesamiento de los pedidos con errores de diferencia de precios, existe el flujo de Autorización de pedidos, en el que el _seller_ puede [configurar una regla de Divergencia de precios](/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe). En el Admin VTEX, accede a **Configuración de la tienda > Pedidos > Autorización de pedidos**, o escribe **Autorización de pedidos** en la barra de búsqueda en la parte superior de la página.

> ⚠️ Una vez que el seller ha creado la regla de Divergencia de precios, esta se aplica a todos los marketplaces.

La regla de Divergencia de precios se compone de una o varias reglas de autorización de pedidos. Cada regla de autorización corresponde a un rango porcentual del precio del pedido y puede variar del 0% al 100%. Se debe asociar una de las tres acciones a cada regla de autorización:

- **Autorizar automáticamente:** los pedidos con una diferencia de precio dentro del rango definido se integran automáticamente.
- **Negar automáticamente:** los pedidos con una diferencia de precio dentro del rango definido se rechazan automáticamente y no se integran.
- **Crear una tarea en VTEX DO para aprobación:** para diferencias de precio dentro del rango configurado, el pedido se integra pero queda pendiente de [autorización manual](/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-manualmente) por parte de un usuario autorizado.

![price_divergence_rules_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pedidos/configuraci%C3%B3n-de-gesti%C3%B3n-de-pedidos/regla-de-divergencia-de-precios_1.png)

Cuando no se ha [configurado la regla de Divergencia de precios](/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe), los pedidos con errores de divergencia de precios se aprueban automáticamente. Esto se aplica a los _marketplaces_ VTEX, a los _marketplaces_ externos y a los conectores certificados (_partners_), pero no a los [conectores nativos](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-nativo-vtex).

> ⚠️ Cuando un seller está integrado con un conector nativo, como Mercado Libre, pero no ha configurado una regla de Divergencia de precios, los pedidos con error por diferencia de valores quedan pendientes hasta que se cree la regla. Puedes seguirlos en tu Admin VTEX, en **Marketplace > Conexiones > Pedidos**.

Tras la creación de la regla de Divergencia de precios, los pedidos de integraciones con conectores nativos que presentan una diferencia de valores se mostrarán en la página [Todos los pedidos](/es/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi).

Recomendamos que el _seller_ cree la regla de Divergencia de precios antes de configurar la integración con un conector nativo. Si no se cumple esta recomendación la integración se realiza, pero los pedidos con divergencia de valores se retienen hasta que se [configure la regla de Divergencia de precios](/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

## Permiso de usuarios

En VTEX, los [roles](/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) garantizan la seguridad en la gestión de tu operación, ya que restringen el acceso de los empleados a las acciones necesarias dentro de la plataforma. Consulta las [buenas prácticas de seguridad para la gestión de usuarios](/es/faq/metodos-de-seguranca-para-criacao-de-perfis-de-usuarios-em-uma-loja--15YDwC9jGgqWi3rvcDaiGM).

Para crear una regla de Divergencia de precios, el usuario debe tener el rol Admin Super (_Owner_) o OMS Full. Lo mismo se aplica a los usuarios responsables de la [autorización manual](/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-manualmente) de pedidos con diferencias de valores.

## Gestión de pedidos con Divergencia de precios

Puedes hacer el seguimiento de los pedidos integrados a partir de la regla de Divergencia de precios en el Admin VTEX, en **Pedidos > [Todos los pedidos](/es/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi)**.

> ℹ️ Es importante hacer un seguimiento periódico de los pedidos en la Gestión de pedidos. Si requieren aprobación manual, los pedidos quedan pendientes hasta que un usuario habilitado conceda la autorización necesaria.

### Más información

- [Configuración de regla de Divergencia de precios](/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe)
- [Estructura de la página de Gestión de pedidos](/es/tutorial/estrutura-da-pagina-do-oms--2dDZmUUFXWeyQ4s2gqiY0A)
- [Estrategias de marketplace en VTEX](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
