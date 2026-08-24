---
title: "Roles y permisos"
createdAt: "2026-07-08T10:00:00.219Z"
updatedAt: "2026-08-13T10:00:00.219Z"
contentType: tutorial
productTeam: CMS
slugEN: roles-and-permissions
locale: es
---

Los roles y permisos en el CMS determinan lo que cada integrante del equipo puede crear, editar y publicar. Al asignar el rol adecuado a cada usuario garantizas que la creación y publicación de contenido se mantengan organizadas y que solo usuarios autorizados puedan hacer modificaciones en el storefront de producción.

## El flujo de publicación basado en ramas

El CMS utiliza un modelo de ramificación similar al de Git. Entender este modelo aclara por qué los roles de Content Editor y Content Producer existen como niveles de permisos independientes.

* Las ramas son el espacio de creación de contenido. Cualquier usuario autenticado, incluidos quienes tienen rol de Producer, puede crear y editar contenido aquí.
* La rama `main` representa el contenido publicado en producción. Las modificaciones en la rama `main` se aplican de inmediato en el storefront de producción. Solo Editors y Administrators pueden hacer commit o merge en `main`.
* El paso de merge funciona como instancia de aprobación. Cuando un Producer termina de trabajar en una rama, un Editor o Administrator revisa y hace merge, implementando los cambios en el storefront. Este modelo permite a los equipos separar la creación de contenido de su publicación, dando control sobre lo que se publica y cuándo.

## Roles

El CMS incluye tres roles predefinidos:

* **Content Producer**: crea y edita contenido dentro de las ramas. No puede publicar en el storefront de producción (rama Main).
* **Content Editor**: gestiona el ciclo de vida completo del contenido: crear, editar y publicar. Gestiona las operaciones de rama.
* **Content Administrator**: acceso completo, incluidas todas las funciones de Content Editor, además de la configuración de la tienda y de la configuración regional.

### Agregar roles

Los roles se asignan vía Admin VTEX. No se requiere configuración. Los tres roles están predefinidos y disponibles en cuanto se instala la aplicación. Para que estén disponibles en tu cuenta sigue estos pasos:

1. En el Admin VTEX, accede a **Configuración de la cuenta > Roles de usuario**.
2. Haz clic en `Nuevo rol`.
3. En el campo **Seleccionar rol** selecciona uno de los tres roles: **Content Administrator**, **Content** **Producer** o **Content** **Editor**.
4. En el campo **Nombre del rol** ingresa un nombre para ese rol.
5. Haz clic en `Guardar`.

## Ramas

La siguiente tabla muestra las acciones de gestión de ramas que puede realizar cada rol.

| Acción | Content Producer | Content Editor | Content Administrator |
| ---- | ----- | --- | --- |
| Guardar en la rama `main` | Publica las modificaciones en el storefront. | ❌ | ✅ | ✅ |
| Remover de la rama `main` | Despublica del storefront. | ❌ | ✅ | ✅ |
| Hacer merge de la rama | Promueve una rama de funcionalidad a la rama Main de inmediato o en una fecha programada. | ❌ | ✅ | ✅ |
| Eliminar rama | Elimina todas las versiones con modificaciones dentro de la rama. | ❌ | ✅ | ✅ |
| Crear rama | Crea una rama nueva para desarrollar y revisar contenido antes de publicarlo. | ✅ | ✅ | ✅ |

## Entradas

La siguiente tabla muestra las acciones de nivel inicial que puede realizar cada rol.

| Acción | Content Producer | Content Editor | Content Administrator |
| ---- | ----- | --- | --- |
| Ver contenido | Explora entradas en todas las ramas. | ✅ | ✅ | ✅ |
| Crear y editar entradas | Crea y modifica entradas de contenido en ramas de funcionalidad. | ✅ | ✅ | ✅ |
| Eliminar entradas | Elimina de forma permanente una entrada y todas sus versiones. Esta acción es no se puede deshacer. | ❌ | ❌ | ✅ |

## Stores

La siguiente tabla muestra qué acciones de configuración de la tienda puede realizar cada rol.

| Acción | Content Producer | Content Editor | Content Administrator |
| ---- | ---- | --- | --- |
| Crear y configurar tiendas | Configura tiendas y gestiona los ajustes relacionados, incluidas las configuraciones del storefront, los idiomas y la configuración regional. | ❌ | ❌ | ✅ |

## Casos de uso

Los siguientes escenarios muestran cómo interactúan los roles en los flujos de contenido más comunes.

### Lanzar una campaña de temporada

Cuando tu equipo está preparando una campaña de temporada, un Content Producer trabaja en las páginas dentro de una rama de funcionalidad y, una vez que el contenido está listo, un Content Editor lo revisa y hace merge a `Main` para publicarlo.

![lauching-a-seasonal-campaign-flow](https://vtexhelp.vtexassets.com/assets/docs/src/lauching-a-seasonal-campaign___4a8f3b593f6c2901c192d9a698646b2e.png)

### Agregar una nueva configuración regional en el storefront

Cuando tu tienda necesita admitir un nuevo idioma, un Content Administrator se encarga primero de la preparación de la configuración regional y, una vez lista, los Content Producers pueden empezar a crear contenido y los Content Editors pueden publicarlo.

![storefront-locale-role-flow](https://vtexhelp.vtexassets.com/assets/docs/src/storefront-locale-role-flow___db87989d885e827bbf1b42ae69958494.png)
