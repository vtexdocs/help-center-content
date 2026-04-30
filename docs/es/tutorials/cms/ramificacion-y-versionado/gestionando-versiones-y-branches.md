---
title: "Gestionar versiones y ramas"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-03-31T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: managing-versions-and-branches
locale: es
---

Al trabajar con contenido en el CMS, los cambios ocurren con frecuencia, ya sea actualizando una página de producto, preparando una campaña o probando nuevos diseños. Las versiones y ramas te ayudan a gestionar estos cambios de forma segura mientras colaboras con tu equipo.

* **[Versiones](#versiones)** te permiten preparar cambios para el futuro, rastrear ediciones, revisar estados anteriores del contenido y restaurar versiones anteriores cuando sea necesario.
* **[Ramas](#ramas)** te permiten agrupar múltiples versiones de páginas para colaborar y evolucionar tu contenido antes de publicarlo en la tienda.

<video controls width="100%">
  <source src="https://raw.githubusercontent.com/vtexdocs/help-center-content/cms-branches-update/docs/es/tutorials/cms/ramificacion-y-versionado/Branches_es.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

En esta guía, aprende cómo usar versiones y ramas para rastrear cambios de contenido, realizar pruebas de forma segura, restaurar contenido anterior y gestionar flujos de trabajo de publicación.

## Versiones

Las versiones mantienen un historial de cada cambio guardado en una entrada para que puedas revisar cómo evolucionó el contenido, comparar estados anteriores y restaurar una versión previa cuando sea necesario. Cada vez que guardas una entrada en la rama `main` u otra rama, el CMS almacena una nueva versión en el historial de versiones, junto con el nombre del usuario que realizó el cambio y la fecha. Con el tiempo, esto crea un historial de versiones para la entrada.

> ℹ️ El **Tipo de contenido** funciona como plantilla (por ejemplo, `Landing Page`). Una **entrada**, como la **Landing Page** que se muestra en el video a continuación, es una página específica o elemento de contenido derivado de esa plantilla para una tienda y localidad determinadas, que contiene valores únicos para sus campos (como `path`, `title` y `sections`).

Las versiones muestran dónde existe la entrada (por ejemplo, qué versión está publicada en `main` y qué ramas de borrador están disponibles), para que puedas cambiar de contexto o crear una nueva versión en una rama.

![versions-modal](https://vtexhelp.vtexassets.com/assets/docs/src/cms-versions-es___240494472d543f16bd848f041bbb0ce8.png)

El control de versiones ofrece varias ventajas para la gestión de contenidos:

* **Capacidad de reversión:** [Restaura rápidamente](#restaurar-versiones-anteriores) una versión publicada anteriormente para solucionar problemas como diseños rotos o ediciones incorrectas.  
* **Seguimiento de cambios:** Mantén un registro claro de quién realizó cambios y cuándo, para respaldar revisiones y aprobaciones.  
* **Experimentación segura:** Prueba nuevos textos, diseños o campañas sin riesgo, sabiendo que puedes revertir a la versión anterior si los resultados son insatisfactorios.  
* **Reutilización de contenido:** Ahorra tiempo reutilizando contenido de una campaña anterior en lugar de empezar desde cero.

### Historial de versiones

El historial de versiones registra eventos de ramificación y fusión de entradas, mostrando quién realizó qué cambios y cuándo. Muestra la línea de tiempo de eventos dentro de la entrada seleccionada, lo que te permite revisar estados anteriores y restaurar una versión pasada cuando sea necesario.

![version-history-modal](https://vtexhelp.vtexassets.com/assets/docs/src/cms-version-history-es___87646e54cc38e5599d21a67e45cdd6f1.png)

### Crear una nueva versión

Cada vez que modificas una entrada, se crea una nueva versión. Por ejemplo, si hacemos un pequeño cambio en el **Default page title** dentro del ejemplo de **Landing Page** a continuación, el CMS genera una nueva versión:

![creating-a-new-version](https://vtexhelp.vtexassets.com/assets/docs/src/cms-creating-version-es___27870a92db152a9eecbae5351e657c39.gif)

Una vez que hayas realizado los cambios, tienes las siguientes acciones disponibles:

| Acción | Descripción |
| :---- | :---- |
| `Guardar en main` | Guarda tus ediciones actuales directamente en la rama `main`, actualizando la versión publicada de esa entrada y actualizando la tienda visible para los compradores. |
| `Guardar en branch` | Guarda tus ediciones como una nueva versión solo en la rama seleccionada (por ejemplo, `black-friday`), manteniendo la rama `main` sin cambios. Úsalo para trabajar en borradores o campañas sin afectar lo que está publicado en la tienda. |
| `Descartar` | Elimina todos los cambios no guardados en el formulario y restaura la entrada a su última versión guardada en `main` u otra rama, sin crear una nueva versión. Esta acción no se puede deshacer. |

> ℹ️ Para más información sobre ramas, consulta la sección [Ramas](#ramas).

### Restaurar versiones anteriores

Las versiones guardadas en la rama `main` pueden visualizarse y restaurarse para publicar contenido del pasado. En el panel de Historial de versiones, al pasar el cursor sobre una versión publicada anteriormente, aparece la acción **Ver versión**.

![restore-past-versions](https://vtexhelp.vtexassets.com/assets/docs/src/restore-versions-es___f661dc97592e64a27d9cc5bca55f4ee9.png)

Una vez visualizada, puedes elegir entre las siguientes acciones:

| Acción | Descripción |
| :---- | :---- |
| `Restaurar en Main` | Duplica la versión y la publica en la rama `main` como una nueva versión en la tienda. |
| `Restaurar en branch` | Duplica la versión y la añade a una rama de destino para edición adicional, sin afectar la tienda. |
| `Cerrar` | Cierra la versión anterior y te devuelve a la rama `main` sin aplicar ninguna restauración. |

> ℹ️ Para más información sobre ramas, consulta la sección [Ramas](#ramas).

## Ramas

Las ramas facilitan la colaboración en equipo, los cambios de contenido masivos en múltiples páginas y los flujos de trabajo de aprobación. Las ramas te permiten editar, revisar, previsualizar y probar cambios antes de publicarlos. Se utilizan habitualmente para proyectos de contenido o campañas específicas, como Black Friday, o para otras actualizaciones especiales de contenido que implican editar y publicar múltiples páginas simultáneamente.

> ⚠️ **Límites de ramas**: ten en cuenta que cada cuenta puede tener hasta 10 ramas activas.

![branches-overview](https://vtexhelp.vtexassets.com/assets/docs/src/branches-overview-es___c0ecb683a97155912c2a328fe8e87b25.png)

| Función | Descripción |
| :---- | :---- |
| **Ramas (`+`)** | Lista todas las ramas de la tienda. Usa el **`+`** para crear una nueva rama. |
| **Búsqueda** | Encuentra entradas por nombre dentro de la rama y la tienda actuales. |
| **Filtro por tipo de contenido** | Filtra la lista de entradas por tipo de contenido (por ejemplo, `home`, `pdp`, `landingPage`). |
| **Filtro de última actualización** | Ordena o filtra entradas por el tiempo de actualización más reciente. |
| **Tabla de entradas** | Muestra las entradas en la rama, incluyendo información de **Nombre**, **Tipo de contenido**, **Tienda** y **Última actualización**. |
| **Mostrar solo cambios** | Filtra la lista para mostrar solo las entradas modificadas en la rama activa. |
| **Ícono de paginación** | Navega entre páginas de entradas. |
| **Crear contenido** | Crea una nueva entrada en la rama y la tienda actuales. |
| **Previsualización** (ícono de ojo) | Abre una previsualización para revisar el contenido en borrador en la tienda. |
| **Hacer merge** | Fusiona los cambios de la rama en `main`, de forma inmediata o en una fecha programada. Para más detalles, consulta [Publicar y programar cambios](#publicar-y-programar-cambios). |

### Comprender la rama `main` y otras ramas

La rama `main` contiene el contenido publicado en la tienda. Cuando haces clic en `Guardar en main`, tus cambios se publican de inmediato.

Otras ramas se utilizan para desarrollar y revisar contenido antes de publicarlo en main. Cuando haces clic en `Guardar en branch`, tus cambios se guardan como una [nueva versión](#crear-una-nueva-versión) dentro de esa rama, sin afectar la tienda.

### Publicar y programar cambios

La página de **Ramas** incluye la capacidad de `Merge` de la rama actual a la rama `main`, lo que ofrece dos formas de publicar contenido en la tienda:

* `Hace merge ahora` toma los cambios contenidos en la rama y los fusiona en la rama `main`. Esta acción publica los cambios inmediatamente en la tienda.

* `Programar merge` te permite planificar la fusión de una rama en la rama main para una fecha y hora futuras. El CMS ejecutará automáticamente la fusión una vez que llegue la fecha y hora programadas.

![publish-and-schedule-changes](https://vtexhelp.vtexassets.com/assets/docs/src/merge-schedule-es___6846f381b15becc901dbce1f36fc192f.gif)

> ⚠️ El contenido puede estar en caché incluso después de la fusión y puede tardar unos minutos más en aparecer en la tienda.

### Eliminar rama

Este proceso elimina todas las versiones que contienen cambios dentro de la rama. Las entradas y otras versiones de ramas no se verán afectadas.

## Gestión de eliminación de contenido

Hay tres formas distintas de eliminar o revertir contenido.

### Eliminar entrada

Elimina la entrada completa y todas sus versiones. Esta acción es irreversible. Para eliminar una entrada, sigue estos pasos:

1. Elige una de las entradas de una rama que hayas creado, por ejemplo, **Home**.  
2. En **Home**, haz clic en el menú y elige `Eliminar`.  
3. Haz clic en `Mantener para eliminar`, y la entrada será eliminada.  

   ![delete-entry](https://vtexhelp.vtexassets.com/assets/docs/src/delete-entry-es___435687065e1de4cbb72aa8a6f46062bc.gif)

### Deshacer cambios

Descarta tus cambios en una rama y restaura la entrada a su última versión publicada.

![undo-changes](https://vtexhelp.vtexassets.com/assets/docs/src/undo-changes-es___8567a42c089993e19677f64acb3f5158.png)

### Eliminar del `main`

Elimina la entrada de la rama `main` manteniendo las versiones en otras ramas. Esto cancela la publicación del contenido en la tienda.

![delete-from-main](https://vtexhelp.vtexassets.com/assets/docs/src/delete-from-main-es___f0d4e193a301dc42ed793a8465ad9f24.png)
