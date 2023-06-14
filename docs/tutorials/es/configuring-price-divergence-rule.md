---
title: Configuración de regla de Divergencia de precios
id: awAKP0sS5J8jgLs2g7pPe
status: PUBLISHED
createdAt: 2021-12-03T01:24:41.194Z
updatedAt: 2023-03-29T19:19:25.326Z
publishedAt: 2023-03-29T19:19:25.326Z
firstPublishedAt: 2021-12-03T01:31:08.666Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: configuracion-de-regla-de-divergencia-de-valores
legacySlug: configuracion-de-regla-de-divergencia-de-valores
subcategory: 1qvm3kIrt6KA6IeGc4EQ6k
---

Cuando el precio definido por el _seller_ es diferente del precio ofrecido por el _marketplace_, es posible que los pedidos no se procesen correctamente. En VTEX, el flujo de Autorización de pedidos permite controlar y aprobar automáticamente estos pedidos, a partir de la configuración de una [regla de Divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW). Este artículo explica cómo los _sellers_ pueden crear y editar una regla de Divergencia de precios y autorizar pedidos manualmente.

Cuando no se ha creado ninguna regla de Divergencia de precios, los pedidos con divergencia de valores se aprueban automáticamente. Esto se aplica a los _marketplaces_ VTEX, a los _marketplaces_ externos y a los [conectores certificados (_partners_)](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-certificado-partner), pero no a los [conectores nativos](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-nativo-vtex). 

Cuando un _seller_ está integrado a un conector nativo, como Mercado Libre, pero no ha configurado una regla de Divergencia de precios, los pedidos con error por diferencia de valores quedan pendientes hasta que se cree la regla. Puedes seguirlos en tu Admin VTEX, en **MARKETPLACE > Conexiones > Pedidos**.

Recomendamos que el _seller_ cree la regla de Divergencia de precios antes de configurar la integración con un conector nativo. Si no se cumple esta recomendación la integración se realiza, pero los pedidos con divergencia de valores se retienen hasta que se crie la regla de Divergencia de precios.

## Crear una regla de Divergencia de precios

La [regla de Divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) se compone de una o varias reglas de autorización de pedidos, que corresponden a intervalos entre el 0% y el 100% del precio del pedido. La configuración se realiza de forma que cada intervalo esté asociado a una acción automática de procesamiento.

<div class = "alert alert-info">
Para crear una regla de Divergencia de precios, el usuario debe tener el <a href="https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc">rol</a> Admin Super (Owner) o OMS Full. Garantiza la seguridad en la gestión de tus operaciones y consulta las <a href="https://help.vtex.com/es/faq/metodos-de-seguranca-para-criacao-de-perfis-de-usuarios-em-uma-loja--15YDwC9jGgqWi3rvcDaiGM">buenas prácticas de seguridad para la gestión de usuarios</a>.
</div>

Para crear una regla de Divergencia de precios, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pedidos > Autorización de pedidos**, o escribe **Autorización de pedidos** en la barra de búsqueda en la parte superior de la página.  
2. En la sección _Divergencia de precios, haz clic en `CREAR REGLAS`.
3. En la nueva página que se abre, haz clic en `CREAR REGLAS`. 

Verás la siguiente pantalla:

![print_01_ES](https://drive.google.com/uc?export=download&id=1SHYBnQSnp-B8k-Gm3SSBxwPtNa57sQvx)

La pestaña **Todas** muestra todas las reglas de autorización configuradas. 

Para crear la primera regla de autorización, haz clic en **CREAR REGLAS**. Se mostrará una nueva pestaña, llamada **1ª regla**. Al clicar en esta pestaña, aparecerán las opciones de configuración.

![print_02_ES](https://drive.google.com/uc?export=download&id=1mzQfJw-9llpMJzrI_sWmVusEIzpeqQGi)

Para configurar la **1ª regla**, puedes aumentar o disminuir el porcentaje de divergencia arrastrando los extremos de la barra. El signo > define el inicio del intervalo y el signo < determina su fin. El intervalo elegido puede ser del 0% al 100%.

Si creas una sola regla de autorización y es inferior al 100%, los pedidos con variación de precio fuera del límite configurado no se integrarán.

Una vez definido el intervalo de la regla de autorización, selecciona una de las siguientes opciones:

- **Autorizar automáticamente:** los pedidos con una diferencia de precio dentro del rango definido se integran automáticamente.
- **Negar automáticamente:** los pedidos con una diferencia de precio dentro del rango definido se rechazan automáticamente y no se integran.
- **Crear una tarea en VTEX DO para aprobación:** para diferencias de precio dentro del rango configurado, el pedido se integra pero queda pendiente de autorización por parte de un usuario habilitado. En el campo **Personas autorizadas**, debes introducir el email de los usuarios que pueden [autorizar manualmente estos pedidos](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-manualmente).

Para configurar una jerarquía de usuarios responsables de aprobar los pedidos, debes introducir más de un email y ordenar los usuarios registrados. Puedes cambiar estos usuarios en cualquier momento editando la regla de autorización de pedidos. Ten en cuenta que solo usuarios con los [roles](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) Admin Super (Owner) o OMS Full pueden editar la regla.

Para crear la **segunda regla**, haz clic en el <img class="shadow-4" src="https://https://images.ctfassets.net/alneenqid6w5/7E2BhdEapQ5Lmm4fLRKxpp/2770eaaa5af9653a71416c2f9677eb37/__cone_regras.JPG" /> signo más. Lo mismo se aplica a la creación de una tercera o cuarta regla, y así en adelante. Tras hacer clic en el ícono, se mostrará la siguiente interfaz:

![print_03_ES](https://drive.google.com/uc?export=download&id=1nEg5Ra2shCtA9gPSzejiXxDF-lX3t0T5)

Configura la nueva regla de autorización y, después de definir todas las reglas que desees, haz clic en el botón **GUARDAR REGLAS**. Verás el siguiente mensaje: _Después de guardar las reglas, puedes editarlas o eliminarlas cuando quieras_. Haz clic en **OK** para confirmar. Una vez que hayas hecho esto, se creará la regla de Divergencia de precios.

<div class="alert alert-warning">
Después de que hayas configurado la regla de Divergencia de precios, esta se aplicará a todos los <i>marketplaces</i> en los que actúes como seller.
</div>

## Editar una regla de Divergencia de precios

La regla de Divergencia de precios se puede editar en cualquier momento. Para ello, ve al Admin VTEX y haz clic en **Configuración de la tienda > Pedidos > Autorización de pedidos > Divergencia de precios > EDITAR REGLAS**.

En la página de edición de reglas, puedes eliminar la regla de Divergencia de precios haciendo clic en **ELIMINAR REGLAS**. Esto hace que todas las reglas de autorización configuradas se eliminen permanentemente.

<div class = "alert alert-info">
Si eliminas la regla de Divergencia de precios, esta acción no se puede revertir. Para que vuelva a aplicarse, será necesario configurarla de nuevo. Lo mismo se aplica a las reglas de autorización que componen la regla de Divergencia de precios.
</div>

En la misma página, en la pestaña **Todas**, puedes ver la lista de todas las reglas de autorización de pedidos creadas. Para eliminar una regla de autorización, haz clic en el botón **ELIMINAR REGLA** junto a la regla que deseas eliminar.

Si quieres editar una regla de autorización, haz clic en la pestaña correspondiente a la regla que quieres modificar. El proceso de edición de reglas es el mismo que el que se describe en la etapa de [creación de la regla de Divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#crear-una-regla-de-divergencia-de-precios).

Una vez que hayas hecho los cambios deseados, haz clic en el botón **GUARDAR REGLAS** y luego en **OK**.

## Autorizar pedidos manualmente

Cuando una regla de autorización se configura con la opción _Crear una tarea en VTEX DO para aprobación_, esto significa que se ha asignado al menos un usuario para autorizar manualmente el pedido. La [gestión de pedidos con Divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW#gestion-de-pedidos-con-divergencia-de-precios) es similar a la de otros canales de venta, como la tienda física o el ecommerce.

<div class="alert alert-warning">
Es importante hacer un seguimiento regular de los pedidos en <b>Pedidos > Todos los pedidos</b>. Si requieren aprobación manual, los pedidos con errores de divergencia de precios quedan pendientes de autorización por parte de un usuario habilitado, definido al crear la regla de autorización. Una buena práctica es tener al menos dos usuarios autorizados a realizar el procesamiento manual.
</div>

Hay dos maneras de autorizar manualmente un pedido con divergencia de precios:

- [Autorizar pedidos por el OMS](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-un-pedido-por-la-gestion-de-pedidos)
- [Autorizar pedidos por VTEX DO](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-por-vtex-do)

### Autorizar un pedido por el módulo Pedidos

Esta forma de aprobación se realiza en la página de la [Todos los pedidos](https://help.vtex.com/es/tutorial/lista-de-pedidos-interface--2QTduKHAJMFIZ3BAsi6Pi). Para ello, sigue los pasos a continuación:

1. Accede al Admin VTEX y haz clic en _PEDIDOS > Gestión de pedidos > Todos los pedidos_.
2. Haz clic en el pedido que tiene el status `Esperando autorización manual`.
3. Haz clic en `Confirmar pedido`.

### Autorizar pedidos por VTEX DO

VTEX DO es un gestor de las tareas producidas por los módulos de la plataforma VTEX. Permite a los usuarios habilitados realizar manualmente tareas como autorizar o cancelar pedidos, entre otras. Aprende más en el artículo [VTEX DO](https://help.vtex.com/es/tutorial/vtex-do--tutorials_203).

Para autorizar un pedido con Divergencia de valores por VTEX DO, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. En la esquina inferior derecha de la pantalla, haz clic en el componente de VTEX DO.
3. Haz clic en el pedido con autorización pendiente.
4. Haz clic en `Cerrar`.
5. A continuación, haz clic en la opción `Authorize`.

### Más información

- [Regla de Divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW)
- [Todos los pedidos](https://help.vtex.com/es/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi)
- [Estrategias de marketplace en VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
