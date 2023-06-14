---
title: Conceptos avanzados
id: 6a4cJHg8fVgDNDEdcq9S9Q
status: PUBLISHED
createdAt: 2022-12-22T19:24:34.808Z
updatedAt: 2022-12-22T19:57:22.738Z
publishedAt: 2022-12-22T19:57:22.738Z
firstPublishedAt: 2022-12-22T19:57:22.738Z
contentType: trackArticle
productTeam: VTEX IO
slug: conceitos-avancados
trackId: 3fHF3GIjK8UugnQKIakpl9
trackSlugES: desarrollo-de-la-tienda
---

Ahora que estás más familiarizado con los principales aspectos y tecnologías utilizadas en el desarrollo de la tienda en VTEX, exploraremos algunos conceptos más avanzados que te pueden ayudar en tus tareas diarias como desarrollador.

## Abstracción de la infraestructura

VTEX IO es una tecnología propia de VTEX, pero que también admite el uso de diferentes frameworks y lenguajes de programación ya conocidos por los desarrolladores, tales como:

- TypeScript.
- React.
- GraphQL.
- .NET.
- Node.

Al abstraer varias capas de desarrollo de software mediante VTEX IO, el desarrollador no tiene que ocuparse de servidores, problemas de infraestructura y escalabilidad.

Otra facilidad que ofrece la plataforma es automáticamente sincronizar todo el desarrollo con los servidores de VTEX. Esto permite no mantener ningún código localmente, lo que simplifica las actualizaciones y evita problemas como el caché. 

## Entornos de desarrollo seguros

Destinado a ser la plataforma integral para todo VTEX, VTEX IO apoya el desarrollo de todos los sistemas y ofrece una forma segura de modificar el funcionamiento y la apariencia de una tienda sin afectar el entorno de producción. La clave de todo son los workspaces.

### Workspaces

VTEX IO permite desarrollar aplicaciones en múltiples entornos separados que se llaman workspaces. Los workspaces son entornos de desarrollo y prueba aislados entre sí que funcionan como diferentes versiones de la misma cuenta VTEX. 

Esto significa que hay una separación entre los entornos de desarrollo y producción, lo que aumenta la seguridad de la tienda que utiliza VTEX IO.

Hay tres tipos principales de workspaes:
- **Workspace de desarrollo**: utilizado principalmente por los desarrolladores de software para trabajar en modo de borrador al construir o ampliar aplicaciones de backend y frontend.
- **Workspace de producción**: utilizado principalmente por los equipos de desarrollo y control de calidad para validar las aplicaciones de VTEX IO. Estos workspaces pueden recibir tráfico de producción cuando se utilizan en pruebas A/B.
- **Workspace primario**: un workspace único de producción que refleja el contenido entregado a los consumidores finales de una tienda.

La principal forma de configurar un workspace es instalando o desinstalando aplicaciones. Esto crea un sistema plug-and-play para modificar el comportamiento de la tienda, que es una de las ventajas más atractivas de VTEX IO.

