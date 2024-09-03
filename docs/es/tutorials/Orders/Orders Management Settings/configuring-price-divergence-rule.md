---
title: 'Configuración de regla de Divergencia de precios'
id: awAKP0sS5J8jgLs2g7pPe
status: PUBLISHED
createdAt: 2021-12-03T01:24:41.194Z
updatedAt: 2024-08-13T20:39:38.157Z
publishedAt: 2024-08-13T20:39:38.157Z
firstPublishedAt: 2021-12-03T01:31:08.666Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: configuracion-de-regla-de-divergencia-de-valores
locale: es
legacySlug: configuracion-de-regla-de-divergencia-de-valores
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

Cuando el precio definido por el _seller_ es diferente del precio ofrecido por el _marketplace_, es posible que los pedidos no se procesen correctamente. En VTEX, el flujo de autorización de pedidos permite controlar y aprobar automáticamente estos pedidos, a partir de la configuración de una [regla de divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW). Este artículo explica cómo los _sellers_ pueden crear y editar una regla de divergencia de precios y autorizar pedidos manualmente.

Cuando no se crea ninguna regla de divergencia de precios, la plataforma VTEX tendrá un comportamiento específico para cada una de las situaciones que se indican a continuación:

- **Pedidos creados por la interfaz del marketplace:** se denegarán automáticamente.
- **Pedidos creados a través de la API:** se denegarán automáticamente si no se envía el campo `isCreatedAsync`.
- **Pedidos con divergencia de precios relacionados con descuentos manuales:** se aprobarán automáticamente.

Para utilizar el flujo de autorización de pedidos en casos de divergencia de precios es necesario enviar el campo `isCreatedAsync` en la [API de Place Fulfillment order](https://developers.vtex.com/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/fulfillment/pvt/orders), independientemente del tipo de conector utilizado. Este escenario es válido para marketplaces VTEX, marketplaces externos, [conectores certificados (partners)](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro) o [conectores nativos.](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex)

Cuando un _seller_ está integrado a un conector nativo, como Mercado Libre, pero no ha configurado una regla de divergencia de precios, los pedidos con error por diferencia de valores quedan pendientes hasta que se cree la regla. Puedes seguirlos en tu Admin VTEX, en **MARKETPLACE > Conexiones > Pedidos**.

Recomendamos que el _seller_ cree la regla de Divergencia de precios antes de configurar la integración con un conector nativo. Si no se cumple esta recomendación la integración se realiza, pero los pedidos con divergencia de valores se retienen hasta que se cree la regla de divergencia de precios.

## Crear una regla de divergencia de precios

La [regla de divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) se compone de una o varias reglas de autorización de pedidos, que corresponden a intervalos entre el 0% y el 100% del precio del pedido. La configuración se realiza de forma que cada intervalo esté asociado a una acción automática de procesamiento.

>ℹ️ Para crear una regla de divergencia de precios, el usuario debe tener el [rol](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) Admin Super (Owner) o OMS Full. Garantiza la seguridad en la gestión de tus operaciones y consulta las [buenas prácticas de seguridad para la gestión de usuarios](https://help.vtex.com/es/faq/metodos-de-seguranca-para-criacao-de-perfis-de-usuarios-em-uma-loja--15YDwC9jGgqWi3rvcDaiGM).

Para crear una regla de divergencia de precios, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pedidos > Autorización de pedidos**, o escribe **Autorización de pedidos** en la barra de búsqueda en la parte superior de la página.
2. En la sección _Divergencia de precios, haz clic en `CREAR REGLAS`.
3. En la nueva página que se abre, haz clic en `CREAR REGLAS`.

Verás la siguiente pantalla:

![print_01_ES](https://images.ctfassets.net/alneenqid6w5/6lp2IKdU8VvaFgOUhHv5GA/9f087e8080a0a18dbb9caeb890a4beae/print_01_ES.png)

La pestaña **Todas** muestra todas las reglas de autorización configuradas.

Para crear la primera regla de autorización, haz clic en **CREAR REGLAS**. Se mostrará una nueva pestaña, llamada **1ª regla**. Al clicar en esta pestaña, aparecerán las opciones de configuración.

![print_02_ES](https://images.ctfassets.net/alneenqid6w5/Q8TwzIWNwQPg13tcaALd6/b44238cace132525165ab84ba6eacf7c/print_02_ES.png)

Para configurar la **1ª regla**, puedes aumentar o disminuir el porcentaje de divergencia arrastrando los extremos de la barra. El signo > define el inicio del intervalo y el signo < determina su fin. El intervalo elegido puede ser del 0% al 100%.

Si creas una sola regla de autorización y es inferior al 100%, los pedidos con variación de precio fuera del límite configurado no se integrarán.

Una vez definido el intervalo de la regla de autorización, selecciona una de las siguientes opciones:

- **Autorizar automáticamente:** los pedidos con una diferencia de precio dentro del rango definido se integran automáticamente.
- **Negar automáticamente:** los pedidos con una diferencia de precio dentro del rango definido se rechazan automáticamente y no se integran.
- **Crear una tarea en VTEX DO para aprobación:** para diferencias de precio dentro del rango configurado, el pedido se integra pero queda pendiente de autorización por parte de un usuario habilitado. En el campo **Personas autorizadas**, debes introducir el email de los usuarios que pueden [autorizar manualmente estos pedidos](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-manualmente).

Para configurar una jerarquía de usuarios responsables de aprobar los pedidos, debes introducir más de un email y ordenar los usuarios registrados. Puedes cambiar estos usuarios en cualquier momento editando la regla de autorización de pedidos. Ten en cuenta que solo usuarios con los [roles](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) Admin Super (Owner) o OMS Full pueden editar la regla.

Para crear la **segunda regla**, haz clic en el <i class="fas fa-plus" aria-hidden="true"></i> signo más. Lo mismo se aplica a la creación de una tercera o cuarta regla, y así en adelante. Tras hacer clic en el ícono, se mostrará la siguiente interfaz:

![print_03_ES](https://images.ctfassets.net/alneenqid6w5/6Yxvh93ja2V69Yywn3CyWt/4c61f021b61f9147dbf87ff2a68b474f/print_03_ES.png)

Configura la nueva regla de autorización y, después de definir todas las reglas que desees, haz clic en el botón **GUARDAR REGLAS**. Verás el siguiente mensaje: _Después de guardar las reglas, puedes editarlas o eliminarlas cuando quieras_. Haz clic en **OK** para confirmar. Una vez que hayas hecho esto, se creará la regla de divergencia de precios.

>⚠️ Después de que hayas configurado la regla de divergencia de precios, esta se aplicará a todos los <i>marketplaces</i> en los que actúes como seller.

## Editar una regla de divergencia de precios

La regla de divergencia de precios se puede editar en cualquier momento. Para hacerlo, ve al Admin VTEX y haz clic en **Configuración de la tienda > Pedidos > Autorización de pedidos > Divergencia de precios > EDITAR REGLAS**.

En la página de edición de reglas, puedes eliminar la regla de divergencia de precios haciendo clic en **ELIMINAR REGLAS**. Esto hace que todas las reglas de autorización configuradas se eliminen permanentemente.

>ℹ️ Si eliminas la regla de divergencia de precios, esta acción no se puede revertir. Para que vuelva a aplicarse, será necesario configurarla de nuevo. Lo mismo se aplica a las reglas de autorización que componen la regla de divergencia de precios.

En la misma página, en la pestaña **Todas**, puedes ver la lista de todas las reglas de autorización de pedidos creadas. Para eliminar una regla de autorización, haz clic en el botón **ELIMINAR REGLA** junto a la regla que deseas eliminar.

Si quieres editar una regla de autorización, haz clic en la pestaña correspondiente a la regla que quieres modificar. El proceso de edición de reglas es el mismo que el que se describe en la etapa de [creación de la regla de divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#crear-una-regla-de-divergencia-de-precios).

Una vez que hayas hecho los cambios deseados, haz clic en el botón **GUARDAR REGLAS** y luego en **OK**.

## Autorizar pedidos manualmente

Cuando una regla de autorización se configura con la opción _Crear una tarea en VTEX DO para aprobación_, esto significa que se ha asignado al menos un usuario para autorizar manualmente el pedido. La [gestión de pedidos con divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW#gestion-de-pedidos-con-divergencia-de-precios) es similar a la de otros canales de venta, como la tienda física o el ecommerce.

>⚠️ Es importante hacer un seguimiento regular de los pedidos en **Pedidos > Todos los pedidos**. Si requieren aprobación manual, los pedidos con errores de divergencia de precios quedan pendientes de autorización por parte de un usuario habilitado, definido al crear la regla de autorización. Una buena práctica es tener al menos dos usuarios con autorización para realizar el procesamiento manual.

Hay dos maneras de autorizar manualmente un pedido con divergencia de precios:

- [Autorizar pedidos por el OMS](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-un-pedido-por-la-gestion-de-pedidos)
- [Autorizar pedidos por VTEX DO](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-por-vtex-do)

### Autorizar un pedido por el módulo Pedidos

Esta forma de aprobación se realiza en la página [Todos los pedidos](https://help.vtex.com/es/tutorial/lista-de-pedidos-interface--2QTduKHAJMFIZ3BAsi6Pi). Para ello, sigue los pasos a continuación:

1. Accede al Admin VTEX y haz clic en _PEDIDOS > Gestión de pedidos > Todos los pedidos_.
2. Haz clic en el pedido que tiene el status `Esperando autorización manual`.
3. Haz clic en `Confirmar pedido`.

### Autorizar pedidos por VTEX DO

VTEX DO es un gestor de las tareas producidas por los módulos de la plataforma VTEX. Permite a los usuarios habilitados realizar manualmente tareas como autorizar o cancelar pedidos, entre otras. Aprende más en el artículo [VTEX DO](https://help.vtex.com/es/tutorial/vtex-do--7KMbRL4OslN8DTX9oiuCiu).

Para autorizar un pedido con divergencia de valores por VTEX DO, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. En la esquina inferior derecha de la pantalla, haz clic en el componente de VTEX DO.
3. Haz clic en el pedido con autorización pendiente.
4. Haz clic en `Cerrar`.
5. A continuación, haz clic en la opción `Authorize`.

### Más información

- [Regla de Divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW)
- [Todos los pedidos](https://help.vtex.com/es/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi)
- [Estrategias de marketplace en VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)

