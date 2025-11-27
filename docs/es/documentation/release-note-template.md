---
title: 'Notas de release'
id: edu0009-es
status: PUBLISHED
createdAt: 2025-11-25T19:24:22.388Z
updatedAt: 2025-11-25T11:55:00.388Z
publishedAt: 2025-11-25T19:24:22.388Z
firstPublishedAt: 2025-11-25T19:24:22.388Z
contentType: trackArticle
productTeam: Education
slugES: notas-de-release
locale: es
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugES: notas-de-release
---

Una release note (o nota de la versión) informa a los usuarios sobre actualizaciones, mejoras y correcciones de errores en una nueva versión del producto. Consulta en esta guía las pautas generales sobre cómo redactar releases notes y su estructura.

> ℹ️ Para saber más, accede a [Mejores prácticas para la redacción de documentación](https://contentguide.vtex.com/docs/documentation/documentation-overview#best-practices-for-writing-documentation).

> ℹ️ Este tipo de contenido se publica únicamente en inglés.

## Cómo redactar release notes

| **Tema** | **Descripción** |
| --------- | --------------- |
| **Introducción** | <ol><li>Comienza el primer párrafo con una descripción general, explicando el cambio y su impacto.</li><li>Garantiza que el usuario comprenda de inmediato el impacto que los cambios de la release note tendrán en las operaciones de su tienda.</li></ol> |
| **"¿Qué cambió?"** | Explica los cambios implementados. |
| **"¿Por qué realizamos este cambio?"** | Explica qué motivó a VTEX a realizar estos cambios y los problemas que se resolvieron. |
| **"¿Qué se necesita hacer?"** | <ol><li>Indica cómo aprovechar estas nuevas funcionalidades o adaptarse a los cambios.</li><li>Agrega una llamada a la acción para que el usuario pueda consultar más información.</li></ol> |

## Plantilla de release notes

Las release notes deben comenzar con las siguientes tags:

| **Nombre de la tag** | **Ícono** | **Descripción** |
| ------------ | -------- | --------------- |
| `added`      | `+`      | Nuevas funcionalidades, elementos o componentes introducidos en la versión. |
| `deprecated` | `➖` | Ya no se recomienda el uso de una funcionalidad, elemento o componente. |
| `info` | `ℹ` | Información importante o actualizaciones que no están vinculados a cambios específicos pero que son relevantes para los usuarios. |
| `fixed` | `✔` | Errores o problemas que se han resuelto en la versión. |
| `removed` | `x` | Se ha eliminado una funcionalidad, elemento o componente. |
| `improved` | `^` | Mejoras u optimizaciones realizadas a funcionalidades o productos existentes. |

<details>
<summary><b>Plantilla de release notes</b></summary>

```md
# Nombre de la funcionalidad: resumen
 
Creamos/actualizamos esta funcionalidad para <insertar el beneficio principal>, de modo que puedas <alcanzar tu objetivo o realizar la tarea deseada>.

## ¿Qué cambió?

Antes era necesario <describir cómo el usuario resolvía el problema anteriormente>.
Ahora, dispones de <nuevo botón/pantalla/experiencia> que te permite <ingresar beneficio o mejora principal>.

## ¿Por qué realizamos este cambio?

Con el objetivo de <facilitar tu objetivo o tarea>, desarrollamos <ingresar tema o componente>.
Esta actualización está disponible para <usuarios específicos o todos los usuarios>.

## ¿Qué se necesita hacer?
Para <utilizar este nuevo recurso>, es necesario <instalar x, ajustar una configuración o realizar una acción específica>.

Para más información <sobre la funcionalidad, módulo o producto>, consulta <el artículo correspondiente>.
```

</details>

> Accede a ejemplos de release notes en [Developer Portal](https://developers.vtex.com/updates/release-notes).
