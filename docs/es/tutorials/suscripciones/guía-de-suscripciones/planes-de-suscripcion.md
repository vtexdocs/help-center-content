---
title: 'Planes de suscripción'
id: 5kczKRqHEsrs1tYtRcY8wR
status: CHANGED
createdAt: 2021-07-06T14:33:32.850Z
updatedAt: 2022-07-26T22:51:42.731Z
publishedAt: 2021-07-06T17:47:04.593Z
firstPublishedAt: 2021-07-06T15:07:38.880Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: subscription-plans
legacySlug: planes-de-suscripcion-beta
locale: es
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

La página de **Planes** del módulo de **Suscripciones** muestra la lista de todos los planes de suscripción configurados en su tienda, tanto los creados desde la [página de Nuevo plan](/es/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) como [los anexos de SKU](/es/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK). 

Para que los planes de suscripción estén disponibles, primero debe instalar la aplicación Suscripciones y configurar todos los ajustes necesarios. Lea el artículo [Cómo configurar Suscripciones en su tienda](/es/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj) para más información.

En la página de **Planes**, puede ver y gestionar los planes de suscripción disponibles para los clientes de su tienda, según se ilustra a continuación.

![planslist ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/suscripciones/gu%C3%ADa-de-suscripciones/planes-de-suscripcion_1.png)

Las principales funcionalidades de esta página son:

* [Crear un nuevo plan](#crear-un-nuevo-plan)
* [Buscar](#buscar)
* [Filtrar](#filtrar)
* [Información sobre los planes](#informacion-sobre-los-planes)
* [Mostrar filas](#mostrar-filas)
* [Paginación](#paginacion)

## Crear un nuevo plan

Al hacer clic en el botón `Nuevo plan`, se le dirigirá a la página de registro de un nuevo plan de suscripción. Vea el artículo [Crear un plan de suscripción (Beta)](/es/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) para obtener más detalles sobre este proceso.

## Buscar

Para buscar un plan de suscripción específico, puede ingresar el nombre del plan en la barra de búsqueda situada en la parte superior de la lista de planes.

Los resultados de la búsqueda se actualizan en tiempo real, es decir, a medida que escribe, la lista de planes mostrados se actualiza de acuerdo con el término de búsqueda.

## Filtrar

Puede filtrar los planes de suscripción que aparecen en la lista por **Status**. Las opciones son:

* **Todos:** muestra los planes activos e inactivos.
* **Activo:** solo muestra los planes activos en su tienda.
* **Inactivo:** solo muestra los planes inactivos en su tienda.

Para saber más sobre el significado de los status, consulte la sección [Información sobre los planes](#informacion-sobre-los-planes).

## Información sobre los planes

Cada columna de la lista de planes de suscripción muestra información sobre el plan. A continuación se describe la información que se muestra y las acciones que se pueden realizar en la lista.

* **Nombre:** muestra el nombre del plan de suscripción configurado al crear el plan. Después de guardar el nuevo plan, no puede cambiar el nombre posteriormente.
* **Id:** muestra el identificador del plan de suscripción, que sigue el formato `vtex.subscription.{nombre}`. El ID se genera automáticamente al rellenar el nombre del plan en la [página de creación de planes de suscripción](/es/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) y equivale al nombre del anexo de suscripción [cuando se configura manualmente](/es/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK). Este campo no se puede modificar.
* **Productos:** muestra la cantidad de productos asociados al plan de suscripción, es decir, el número de productos de su catálogo que ofrecen la opción de suscripción en el momento en que el cliente de la tienda pasa a finalizar la compra o crea una suscripción a través de __Mi Cuenta__, independientemente de la cantidad de SKU de cada producto.
* **Status:** muestra el status actual del plan de suscripción y un botón <i class="fa-toggle-on"></i> para cambiar de un status a otro. Los status posibles son:
    * **Activo:** significa que el plan está disponible para que los clientes lo utilicen al crear nuevas suscripciones con los productos asociados.
    * **Inactivo:** significa que el plan no está disponible al crear nuevas suscripciones, aunque tenga productos asociados.

> ℹ️ Los planes inactivos se desactivan solo para las nuevas compras. Si hay clientes que ya habían creado suscripciones mientras el plan estaba activo, el plan seguirá creando pedidos con las frecuencias establecidas durante los siguientes ciclos de esos clientes incluso después de ser desactivado.

* **Botón** <i class="fas fa-ellipsis-v"></i>**:** al hacer clic en este botón, puede seleccionar las siguientes acciones.
    * **Editar:** abre la página para editar el plan de suscripción.
    * **Eliminar:** permite eliminar el plan de forma permanente. Antes de eliminar, aparece una pantalla para confirmar la acción. Después de hacer clic en `Eliminar plan`, esta acción **no** puede revertirse.

> ⚠️ Cuando elimina un plan, **no** se generarán los pedidos de los clientes que compraban con las frecuencias de ese plan a partir del siguiente ciclo de suscripción. Para evitar que se use el plan al crear nuevas suscripciones, pero mantener los próximos pedidos de los clientes que tienen suscripciones existentes, debe desactivar el plan en lugar de eliminarlo.

## Mostrar filas

La cantidad estándar de filas que se muestran en la página es 5. Si desea ver más filas, puede elegir mostrar 10 o 15 filas seleccionando la opción deseada en la parte inferior de la lista de planes.

## Paginación

Para navegar entre las páginas de la lista de planes de suscripción, utilice las flechas <i class="fas fa-chevron-left"></i> y <i class="fas fa-chevron-right"></i> en la esquina inferior derecha de la página.

## Más información

* [Cómo crear un plan de suscripción (Beta)](/es/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC)
