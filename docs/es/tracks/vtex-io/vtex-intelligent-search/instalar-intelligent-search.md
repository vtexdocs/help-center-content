---
title: 'Instalar Intelligent Search'
id: 4mwZGH252R3CCPRim8v0F3
status: PUBLISHED
createdAt: 2024-09-06T20:00:06.864Z
updatedAt: 2024-09-06T20:39:37.552Z
publishedAt: 2024-09-06T20:39:37.552Z
firstPublishedAt: 2024-09-06T20:07:32.752Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: installing-intelligent-search
locale: es
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugEN: vtex-intelligent-search
order: 2
---

Para configurar y empezar a utilizar Intelligent Search, debes tener instaladas las siguientes aplicaciones de búsqueda:

* `admin-search`: aplicación que permite configurar todas las funcionalidades disponibles en el Admin a por Intelligent Search.  
* `search-resolver`: aplicación principal de backend para Intelligent Search, encargada de gestionar todas las consultas de búsqueda.

Algunas tiendas tienen las aplicaciones de manera predeterminada, mientras que otras deben seguir los pasos de instalación. Consulta a continuación cómo verificar si las aplicaciones están instaladas y, de ser necesario, proceder con la instalación.

## Verificar Edition App

[Edition App](https://developers.vtex.com/docs/guides/vtex-io-documentation-edition-app) es un conjunto predefinido de aplicaciones esenciales que facilitan el desarrollo de una tienda. Dependiendo de Edition App de tu tienda, es posible que Intelligent Search esté disponible de manera predeterminada o que necesites instalarla. Consulta la tabla a continuación para más detalles:

| Edition App | Descripción |
| :---- | :---- |
| `vtex.edition-store@5.x` | Intelligent Search ya está incluida, por lo que no es necesario instalar las aplicaciones de esta tabla. Procede a [Iniciar la integración con el catálogo](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/2wBsO1AKTQZ04idbTKszI4). |
| `vtex.edition-store@4.x` | Debes instalar las aplicaciones de búsqueda manualmente. Sigue las instrucciones para [Instalar las aplicaciones de búsqueda](#instalar-aplicaciones-de-busqueda). |
| `vtex.edition-store@3.x` | Debes instalar las aplicaciones de búsqueda manualmente. Sigue las instrucciones para [Instalar las aplicaciones de búsqueda](#instalar-las-aplicaciones-de-busqueda). |
| Versiones anteriores de `vtex.edition-store` | No son compatibles con Intelligent Search. Si deseas migrar a una versión compatible, ponte en contacto con nuestro [soporte](https://help.vtex.com/es/support). |
| `vtex.edition-business@0.x` | No es compatible con Intelligent Search. Si deseas migrar a una versión compatible, ponte en contacto con nuestro [soporte](https://help.vtex.com/es/support). |

Consulta con tu equipo de desarrollo para verificar cuál es la Edition App actual de tu tienda. Para averiguarlo, es necesario utilizar el comando `vtex edition get` en [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference), según la [referencia de comandos](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference\#edition-get) disponible en el Developer Portal.

## Instalar aplicaciones de búsqueda

Si tu tienda utiliza `vtex.edition-store@3.x` o `vtex.edition-store@4.x`, solicita a tu equipo de desarrollo la instalación de `admin-search` y `search-resolver`.

Para instalar las aplicaciones, utiliza el comando `vtex install vtex.admin-search vtex.search-resolver` en [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference), como se detalla en la [guía para la implementación de Intelligent Search](https://developers.vtex.com/docs/guides/vtex-io-documentation-2-prerequesites\#step-2-implementing-the-vtex-intelligent-search).
