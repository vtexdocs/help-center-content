---
title: Nuevo flujo de Autorización de pedidos para conectores nativos
id: 3Y6aNbbRJRQxn7kykYPfU6
status: PUBLISHED
createdAt: 2021-12-28T20:44:32.579Z
updatedAt: 2022-01-03T15:38:03.027Z
publishedAt: 2022-01-03T15:38:03.027Z
contentType: updates
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: nuevo-flujo-de-autorizacion-de-pedidos-para-conectores-nativos
legacySlug: nuevo-flujo-de-autorizacion-de-pedidos-para-conectores-nativos
announcementImageID: 
announcementSynopsisES: Pedidos de conectores nativos con error de divergencia de precios ahora son procesados por Gestión de pedidos.
---

Cuando el precio establecido por un seller es diferente del precio ofrecido por los marketplaces, es posible que los pedidos realizados en los marketplaces no se procesen correctamente. En VTEX, el flujo de Autorización de pedidos permite el control y aprobación automática de estos pedidos, en base a la configuración que hace el seller de una [regla de Divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW).

Esta función tenía alcance global para los marketplaces VTEX, los marketplaces externos y los [conectores certificados (partners)](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-certificado-partner), pero estaba en fase Beta para los [conectores nativos](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-nativo-vtex). Ahora se aplica a todas las integraciones con conectores nativos, con la excepción de Zoom.

Con esta mejora, el seller [configura la regla de Divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe) y los pedidos con errores de diferencia de precio del conector nativo ahora se procesan mediante el flujo de autorización de pedidos. Esto le permite crear reglas de aprobación automática y reglas que dependen de la aprobación manual. Otro beneficio es que es más fácil administrar los pedidos con precios divergentes, ya que este proceso ahora se realiza en **Gestión de pedidos**.

## ¿Qué cambió?

La [regla de Divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) era válida para los marketplaces VTEX, los marketplaces externos y los conectores certificados (partners). Ahora también es válido para integraciones con [conectores nativos](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-nativo-vtex).

La siguiente tabla compara el flujo de procesamiento de pedidos para conectores nativos _antes_ y _ahora_:

| **ANTES** | **AHORA** |
| ---------- | ---------- | 
| La configuración de una regla de procesamiento de pedidos con error era realizada en el paso de configuración de integración, completando un campo obligatorio en el registro del conector. | El procesamiento de pedidos con error se realiza en la [configuración de la regla de Divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe), en el flujo de Autorización de pedidos. |
| Los pedidos con error de divergencia de precios no se creaban automáticamente, solo después del reprocesamiento manual. | Los pedidos con error de divergencia de valores se crean automáticamente. La [autorización manual](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-manualmente) de un pedido solo es necesaria cuando se configura una regla de autorización que requiera esta acción. |
| No se llevó a cabo la reserva de stock del pedido. | La reserva de stock del pedido se realiza de forma automática. |
| La configuración solo permitía definir un rango porcentual del precio de la orden a autorizar y otro rango para negar la integración de una orden con divergencia de valores. | La [configuración de regla de Divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe) permite crear diferentes reglas automáticas para varios rangos de porcentaje del precio del pedido. Se pueden crear reglas que requieran la autorización manual de un usuario autorizado. |
| Cualquier usuario con permiso de acceso a Admin VTEX podría reprocesar manualmente los pedidos con error de divergencia de precios, en **MARKETPLACE > Integraciones > Pedidos**. | Solo los usuarios autorizados pueden [procesar manualmente](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-manualmente) pedidos con un error de divergencia de precios. |
| La gestión de pedidos con divergencia de precio se realizaba en Admin VTEX, en **MARKETPLACE > Integraciones > Pedidos**. | La gestión de pedidos con divergencia de precios se realiza en el Admin VTEX, en **PEDIDOS > Gestión de pedidos > Todos los pedidos**. |

Los campos obligatorios para configurar el procesamiento de pedidos con error de discrepancia de precios tenían esos nombres en los conectores nativos:

- **Mercado Livre Classic y Premium:** Porcentaje de divergencia de precio aceptable.
- **Amazon:** Porcentaje de divergencia de precio aceptable.
- **Dafiti:** Porcentaje de divergencia de precio aceptable.

Estos campos se eliminaron de los registros del conector y se agregó el siguiente mensaje:

> Atención: los pedidos con divergencia de precio entre el marketplace y VTEX solo se integrarán mediante la [configuración de una regla de Divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

<div class = "alert alert-info">
Al realizar la primera integración con un conector nativo, es recomendable que el seller cree la regla de Divergencia de precios antes de configurar la integración. No seguir la recomendación no impide que se complete la integración.
</div>

Para el seller que se integra con un conector nativo por primera vez y no crea la regla de Divergencia de precios, los pedidos con error de divergencia de valores estarán pendientes en el Admin VTEX, en **MARKETPLACE > Integraciones > Pedidos**. El mensaje de error en la interfaz es el siguiente:

> El precio del pedido en el marketplace es diferente del valor determinado en VTEX. Para integrar automáticamente los pedidos con divergencia de valores en el OMS, accede a _Pedidos > Gestión de pedidos > Autorización de pedidos_ y [configura una regla de Divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

Para los seller que ya están integrados con conectores nativos, la antigua configuración en el registro del conector de integración seguirá siendo válida. Para unirse al nuevo flujo, se debe [configurar una regla de Divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

## ¿Por qué realizamos este cambio?

Los pedidos con error de divergencia de precios pueden ser frecuentes en integraciones con conectores nativos. Debido a que no se reservaba stock para estos pedidos en el flujo anterior, el resultado era una mayor dificultad en la gestión del stock y una disminución en la tasa de conversión.

Los principales beneficios del nuevo flujo son:

- Opciones versátiles para configurar reglas de procesamiento automático mediante la [configuración de la regla de Divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe). Puede definir diferentes reglas de autorización para rangos de porcentaje del precio del pedido y crear reglas que requieran procesamiento manual por parte de un usuario autorizado.
- Mayor control sobre qué porcentaje del precio del pedido debe depender de la [autorización manual ](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-manualmente)y cuál puede ser aprobado o denegado automáticamente.
- Más seguridad en su operación, con el control de usuarios con permiso para autorizar pedidos manualmente.
- Garantiza que los pedidos con error de divergencia de precios se creen automáticamente. Lo que podría estar pendiente es la autorización manual del pedido, cuando se haya configurado una regla de autorización del mismo.
- La reserva de stock del pedido está asegurada, ya que la creación del pedido ya no está pendiente.
- Gestión más sencilla de pedidos con error de divergencia de precios, que ahora se realiza en **Gestión de pedidos**.

## ¿Qué se necesita hacer?

Para activar el flujo de autorización de pedidos para conectores nativos, debe [configurar una regla de Divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe). Solo los usuarios con el rol de acceso OMS Full o Admin Super (Owner) pueden hacer esto.

Una vez que haya configurado la regla de divergencia de precios, se aplicará a todos los mercados en los que sea seller.

Para los VTEX marketplaces, los marketplaces externos y los conectores certificados (partners), siempre que no se haya creado la regla de Divergencia de precios, los pedidos con error de divergencia de valores se aprueban automáticamente.

<div class="alert alert-warning">
Para los <a href= "https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-nativo-vtex">conectores nativos</a>, aunque el seller no <a href= "https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe">configura la regla de Divergencia de precios</a>, se retienen los pedidos con divergencia de valores. Puede consultarlos en su VTEX Admin, en <b>MARKETPLACE > Integraciones > Pedidos</b>.
</div>

Si no desea que los conectores nativos obedezcan la regla de Divergencia de precios, puede mantener el flujo antiguo. En este caso, póngase en [contacto con el equipo de soporte de VTEX.](https://support.vtex.com/hc/es-es/requests)
