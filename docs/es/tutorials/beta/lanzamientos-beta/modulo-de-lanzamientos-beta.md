---
title: 'Módulo de Lanzamientos (Beta)'
id: n2tN0WX5I6MJMbrJrS0Kb
status: PUBLISHED
createdAt: 2022-06-13T17:20:32.280Z
updatedAt: 2025-08-29T17:00:05.064Z
publishedAt: 2025-08-29T17:00:05.064Z
firstPublishedAt: 2022-06-13T18:10:50.488Z
contentType: tutorial
productTeam: Others
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: releases-module-beta
legacySlug: modulo-de-lanzamientos-beta
locale: es
subcategoryId: 3vXj7HrnYK8V5riTOwUuYv
---

> ℹ️ El módulo **Lanzamientos** se encuentra en la versión Beta, por lo tanto, estamos trabajando para mejorarlo. Esta funcionalidad es válida únicamente para las tiendas que usan FastStore.

La gestión de una operación de _ecommerce_ exige que el _retailer_ haga una serie de actualizaciones y cambios en su tienda que, muchas veces, suelen relacionarse entre sí; por ejemplo, una campaña publicitaria en la cual se deben configurar distintos elementos del _storefront_.

Con el módulo **Lanzamientos**, el _retailer_ puede administrar grupos de cambios relacionados a fin de coordinar la planificación, la creación, la programación y la publicación de los cambios en la tienda. En la versión Beta, los cambios que se pueden agrupar deben estar relacionados con el [CMS](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2). Aún no se incluyeron otros módulos de la plataforma VTEX.

Los principales beneficios para el módulo son:

- Optimización del rendimiento de la plataforma, ya que la publicación de los cambios agrupados elimina las colas de procesamiento.
- Simplificación en la administración de los cambios relacionados, lo cual aumenta la eficiencia de la operación.
- Mayor control al probar y revisar los cambios antes de la publicación.
- Facilidad para programar o eliminar grupos de cambios.

> ℹ️ El módulo **Lanzamientos** debe estar configurado en el CMS para poder usarlo. Obtén más información en [Installing Releases on VTEX Headless CMS](https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Installing%20Releases%20on%20VTEX%20Headless%20CMS).

Este artículo trata los siguientes temas:

- [Crear lanzamientos](#crear-lanzamientos)
- [Visualizar lanzamientos](#visualizar-lanzamientos)
- [Buscar lanzamientos](#buscar-lanzamientos)
- [Programar lanzamientos](#programar-lanzamientos)
- [Publicar lanzamientos](#publicar-lanzamientos)
- [Eliminar lanzamientos](#eliminar-lanzamientos)

## Crear lanzamientos

Existen dos formas de crear un nuevo lanzamiento:

- A través de la sección **Páginas**.
- A través del módulo **Lanzamientos**.

### Crear lanzamiento a través de la sección Páginas

Para crear un lanzamiento, sigue las instrucciones paso a paso a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > CMS (Beta) > Páginas (Beta).**
2. Haz clic en el botón `CREAR NUEVA`. 
3. Haz clic sobre el tipo de cambio que deseas realizar:
    - Página de inicio
    - PLP
    - Configuración global SEO
    - Página institucional
4. Luego de realizar los cambios deseados en la página que creaste, haz clic en el botón `PUBLICAR`.
5. Selecciona la opción `Agregar lanzamiento`.
6. Haz clic en `Crear lanzamiento`.
7. Rellena el campo _Nombre_ con un nombre para el lanzamiento.

  > ℹ️ En esta etapa, no es obligatorio rellenar los campos **Día de publicación** y **Hora**. Esto puede determinarse más adelante, tal como veremos en [Programar lanzamientos](https://help.vtex.com/es/tutorial/modulo-lancamentos-beta--n2tN0WX5I6MJMbrJrS0Kb#programar-lanzamientos).

8. Haz clic en `Crear`.

![print_cms_beta_es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/lanzamientos-beta/modulo-de-lanzamientos-beta_1.png)

### Crear lanzamiento a través del módulo Lanzamientos

Para crear un lanzamiento, sigue las instrucciones paso a paso a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Lanzamientos**.
2. Haz clic en el botón `Crear`.
3. Rellena el campo _Nombre_ con un nombre para el lanzamiento.

  > ℹ️ En esta etapa, no es obligatorio rellenar los campos Día de publicación y Hora. Esto puede determinarse más adelante, tal como veremos en Programar lanzamientos.

4. Haz clic en `Crear`.

## Visualizar lanzamientos

Todos los lanzamientos creados aparecen en una lista en el Admin VTEX en **Configuración de la tienda > Lanzamientos**. La página muestra dos pestañas, `PROGRAMADOS` y `NO PROGRAMADOS`, dependiendo de si el lanzamiento se creó con una fecha de publicación o no. 

![print_releases_es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/lanzamientos-beta/modulo-de-lanzamientos-beta_2.png)

En la pestaña `PROGRAMADOS`, la descripción de cada columna es la siguiente:

| **Columna** | **Descripción** |
| ---------- | ---------- |
| Nombre | Nombre que identifica el lanzamiento, definido en la etapa de creación. Si no se publicó el lanzamiento, se lo puede editar en cualquier momento. |
| Último cambio | Tiempo transcurrido desde el último cambio relacionado con el lanzamiento, por ejemplo, una actualización, agregado o eliminación de contenido. |
| Creado por | Identificación del usuario que creó el lanzamiento. |
| Fecha de publicación | Día y horario previstos para la publicación del lanzamiento. |
| Fecha de finalización | Cuando el lanzamiento se agenda con una fecha de finalización, esa fecha aparece en esta columna. Luego de la fecha de finalización, las actualizaciones del lanzamiento quedan sin efecto. |
| Status | Existen cinco status posibles para un lanzamiento: <ul><li>**Programado:** hay una fecha definida para la publicación del lanzamiento.</li><li>**En cola:** significa que la publicación del lanzamiento está en etapa de implantación. No es necesario hacer nada para que el lanzamiento pase al siguiente status que es *Publicando*.</li><li>**Publicando:** la plataforma VTEX está procesando la solicitud de publicación del lanzamiento.</li><li>**Publicado:** el contenido asociado al lanzamiento está publicado y el consumidor puede verlo en el storefront de la tienda.</li><li>**Error al publicar:** ocurrió un error y no se publicó el lanzamiento. Al hacer clic sobre el nombre del lanzamiento, aparece una página que incluye los detalles del lanzamiento y brinda más información sobre el tipo de error y cómo solucionarlo.</li></ul> |

En la pestaña `NO PROGRAMADOS`, hay solo tres columnas con los mismos significados descriptos anteriormente:

- Nombre
- Último cambio
- Creado por

Para obtener más información sobre determinado lanzamiento basta con hacerle clic.

## Buscar lanzamientos

En la página **Lanzamientos**, se puede encontrar un lanzamiento por nombre si se usa el recuadro de búsqueda. La búsqueda se realiza inmediatamente a partir de la inserción de caracteres, y si el nombre está mal escrito, la búsqueda no arroja ningún resultado.

Otra manera de buscar en los lanzamientos es mediante el uso de filtros, pero esta opción solo está disponible en la pestaña `PROGRAMADOS`. Para hacerlo, haz clic en **Filtros** y selecciona la combinación deseada entre los status de un lanzamiento y/o el periodo previsto de publicación.

## Programar lanzamientos

Al crear un lanzamiento, se puede definir o no la fecha de publicación. Existen tres acciones posibles con respecto a las programaciones:

- **Programar:** definir una fecha de publicación para el lanzamiento cuando no existe ninguna.
- **Desprogramar:** cancelar la fecha de publicación, lo cual hace que el lanzamiento pase al status `No programado`.
- **Reprogramar:** definir una fecha nueva para un lanzamiento que ya tenía una fecha determinada.

> ℹ️ Al programar o reprogramar la publicación de un lanzamiento es posible seleccionar la opción **Agregar fecha de finalización** para definir un plazo en el que se quitará la publicación del lanzamiento. La fecha de finalización no significa que se [eliminará el lanzamiento](https://help.vtex.com/es/tutorial/modulo-lancamentos-beta--n2tN0WX5I6MJMbrJrS0Kb#e#eliminar-lanzamientos), sino que se archivará y podrá publicarse nuevamente en cualquier momento.

### Programar

Cuando el lanzamiento tiene el status `No programado`, existen dos formas de programar una fecha de publicación. Para programar a través del módulo **Lanzamientos**:

1. En el Admin VTEX, accede a **Configuración de la tienda > Lanzamientos**.
2. Haz clic en la pestaña `NO PROGRAMADOS` o [realiza una búsqueda](#buscar-lanzamientos) usando la barra de búsqueda y los filtros para encontrar el lanzamiento deseado.
3. En la línea correspondiente al lanzamiento, haz clic en el ícono de menú <i class="fas fa-ellipsis-v"></i>.  
4. Selecciona la opción `Programar`.
5. Define una fecha en el calendario y una hora para la publicación.
6. Si lo deseas, selecciona una fecha para dejar de publicar el lanzamiento haciendo clic en `Agregar fecha de finalización`.
7. Haz clic en `Programar`.

Programar a través de la página de detalles del lanzamiento:

1. En la página **Lanzamientos**, haz clic sobre el nombre del lanzamiento que deseas programar.
2. En la página de detalles del lanzamiento, haz clic en el botón `Programar`.
3. Selecciona una fecha en el calendario y una hora para la publicación.
4. Si lo deseas, selecciona una fecha para dejar de publicar el lanzamiento haciendo clic en `Agregar fecha de finalización`.
5. Haz clic en `Programar`.

### Desprogramar o reprogramar

Cuando el lanzamiento tiene el status `Programado`, puedes:

- Reprogramar y definir una nueva fecha para la publicación.
- Desprogramar y pasar el lanzamiento al status `No programado`. 

Ambas opciones se realizan siguiendo las instrucciones en la sección [Programar](#programar). La diferencia es que las opciones de configuración disponibles serán `Reprogramar` o `Desprogramar`.

## Publicar lanzamientos

Se pueden publicar los lanzamientos que tengan los siguientes status:

- `No programado`
- `Programado`
- `Error al publicar`

Para publicar un lanzamiento a través del módulo **Lanzamientos** y hacer visibles los cambios en el _storefront_ de la tienda, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Lanzamientos**.
2. En la línea correspondiente al lanzamiento deseado, haz clic en el ícono de menú <i class="fas fa-ellipsis-v"></i>.
3. Haz clic en `Publicar ahora`.
4. Haz clic en `Publicar`.

Otra forma de publicar es ingresar en la página de detalles del lanzamiento y seguir las instrucciones que se detallan a continuación:

1. En la página **Lanzamientos**, haz clic sobre el nombre del lanzamiento que deseas publicar.
2. En la página de detalles del lanzamiento, haz clic en <i class="fas fa-ellipsis-v"></i> `Más`.
3. Haz clic en `Publicar ahora`.
4. Haz clic en `Publicar`.

## Eliminar lanzamientos

Sigue estas instrucciones paso a paso para eliminar un lanzamiento:

> ❗ Los lanzamientos eliminados se borran y son irrecuperables. Se mantienen las actualizaciones que formaban parte del lanzamiento, pero deja de existir como grupo.

1. En el Admin VTEX, accede a **Configuración de la tienda > Lanzamientos**.
2. En la línea correspondiente al lanzamiento deseado, haz clic en el ícono de menú <i class="fas fa-ellipsis-v"></i>. 
3. Haz clic en `Eliminar`.
4. Haz clic en `Borrar`.

Otra forma de eliminar un lanzamiento es ingresar en la página de detalles del lanzamiento y seguir las instrucciones paso a paso a continuación:

1. En la página **Lanzamientos**, haz clic sobre el nombre del lanzamiento que deseas eliminar.
2. En la página de detalles del lanzamiento, haz clic en <i class="fas fa-ellipsis-v"></i> **Más**.
3. Haz clic en `Eliminar`.
4. Haz clic en `Borrar`.
