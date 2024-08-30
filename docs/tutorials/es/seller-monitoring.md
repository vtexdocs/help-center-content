---
title: 'Monitoreo de seller'
id: 3Gt3Zu7BPFAaTRRehi27ez
status: DRAFT
createdAt: 2023-07-18T19:35:09.684Z
updatedAt: 2023-07-19T13:53:51.474Z
publishedAt: 
firstPublishedAt: 2023-07-18T19:55:46.688Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: monitoreo-de-seller
locale: es
legacySlug: monitoreo-de-seller
subcategory: 2xWRgEIlR2ookieEmm4KQu
---

El **Monitoreo de seller** es una herramienta del módulo [Gestión de sellers](https://help.vtex.com/pt/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv) que permite que el *marketplace* mida el desempeño de los *sellers* que venden a través de su tienda. Si deseas acceder a esta página,en el Admin VTEX,ve a **Marketplace > Sellers > Gestión de sellers > y haz clic en el botón Configurar métrica**. En la página de inicio,encontrarás las siguientes secciones:

- **Integridad de la operación**: En esta sección,verás la información de todos los *sellers* que venden en tu tienda,entre la que se incluye:
  - Total de sellers activos
  - Tiempo promedio de facturación
- **Resumen**: Aquí podrás ver la métrica detallada con información pormenorizada de la infracción que resultó en un status ⚠ **Aceptable** o ❌ **Insatisfactorio** del *seller*. Si haces clic en el botón (incluir símbolo del botón), puedes filtrar por *seller* y seleccionar solo los *sellers* que deseas.

Al hacer clic en el botón **Ver pedidos,** se abrirá una ventana emergente con el **ID del pedido**, el **Tiempo** y el botón **Ver.**

|**Campo**|**Descripción**|
| - | - |
|**ID del pedido**|Código que se genera automáticamente para cada pedido realizado en el *marketplace*.|
|**Tiempo**|Tiempo que tarda en facturarse el pedido.|
|**Ver**| Botón de direccionamiento. Al hacer clic en este botón, el *marketplace* te direccionará a la información detallada del pedido en el OMS.|

Si es la primera vez que accedes a la herramienta,deberás configurar la métrica **Tiempo de facturación**. Aquí definirás el tiempo máximo y el tiempo de preferencia para que se facturen los pedidos de los *sellers*. A continuación, se muestra cómo realizar la configuración.

## Cómo configurar las métricas

Si deseas configurar las métricas, sigue estas instrucciones.

1. En tu Admin VTEX, ve a **Marketplace >  Sellers > Gestión de sellers > Configurar métrica.**
2. Haz clic en **Tiempo de facturación** y rellena los campos que aparecen.
3. Haz clic en **+ Agregar variación** y rellena los campos requeridos para configurar las variaciones de un segmento o grupo de *sellers*.
4. Haz clic en **Guardar**.

Al hacer clic en **`Guardar`**, recibirás notificaciones en el Admin sobre el desempeño de la operación de los *sellers* y podrás ver a los *sellers* que no cumplen los plazos previstos.

|**Campo( * obligatorio)**|**Descripción**|
| - | - |
|**Valor límite*** |Valor máximo que se define para medir si el *seller* cumple o no los estándares de tu *marketplace*.|
|**Segmentación*** |Definirás cuáles son los *sellers* o el grupo de *sellers* que estarán sujetos a un valor definido en **Valor límite.**|
|**Límite preferido**|Valor que se define para alertar al *seller* que se está acercando al **Valor límite.**|

Cuando hayas configurado una variación en una métrica, el orden establecido es el que define la prioridad. En los casos en que solo hay una segmentación por grupo y otra por excepción, el único conflicto que existe está relacionado con la clasificación.

## Editar una métrica

Puedes editar la métrica después de haberla configurado. Para hacerlo, sigue estos pasos:

1. Haz clic en el botón **Editar métrica.**
2. Cambia los valores de los campos que se mostrarán.
3. Haz clic en el botón **Guardar**.
