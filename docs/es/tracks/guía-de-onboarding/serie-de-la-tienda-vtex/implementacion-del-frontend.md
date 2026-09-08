---
title: 'Implementación del frontend'
id: 67SCtUreXxKYWhZh8n0zvZ
status: PUBLISHED
createdAt: '2024-01-31T22:25:47.689Z'
updatedAt: '2025-08-01T17:28:03.949Z'
publishedAt: '2025-08-01T17:28:03.949Z'
firstPublishedAt: '2024-02-22T14:07:19.178Z'
contentType: trackArticle
productTeam: Others
slugEN: frontend-implementation
locale: es
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: trilha-da-loja-vtex
order: 7
---

El frontend de una tienda online, también conocido como storefront, es la interfaz visual e interactiva de la tienda a través de la cual los clientes interactúan con los productos y realizan acciones, como navegar por las categorías, buscar y agregar productos al carrito.

Este artículo tiene como objetivo ayudarte a elegir qué tecnología utilizar para construir el storefront y las configuraciones correspondientes, considerando los siguientes puntos:

- Tecnologías de desarrollo de storefront de VTEX.
- Principales funcionalidades de cada tecnología.
- Fases de desarrollo.

La implementación del frontend es una etapa enfocada en definir las tecnologías que se van a utilizar de acuerdo con las necesidades del negocio relacionadas con el storefront.

> ℹ️ El frontend puede implementarlo el equipo de desarrollo interno de la empresa o nuestros [partners de implementación](https://help.vtex.com/es/docs/tracks/cuentas-y-arquitectura#partners-de-implementacion). Los [usuarios](https://help.vtex.com/es/docs/tutorials/gestionar-usuarios-administradores) con acceso al Admin VTEX pueden consultar la lista de nuestros partners en el [Partner Portal](https://www.vtex.com/es-mx/partners/).

## Antes de comenzar

Antes de empezar a implementar el frontend se recomienda que la tienda complete las siguientes fases de configuración:

| Fase                                                                     | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definición de la arquitectura de la tienda y la estrategia de ventas     | El equipo definió la arquitectura de tu tienda VTEX de acuerdo con las estrategias y necesidades de tu modelo de negocio.<br><br>Más información en el artículo [Cuentas y arquitectura](/es/docs/tracks/cuentas-y-arquitectura).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Configuración de roles                                                   | El equipo configuró los accesos necesarios para usar la plataforma VTEX para cada [usuario](https://help.vtex.com/es/docs/tutorials/gestionar-usuarios-administradores).<br><br>Más información en el artículo [Roles](https://help.vtex.com/es/docs/tutorials/roles).                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Configuración del catálogo                                               | El equipo configuró el [catálogo](https://help.vtex.com/es/docs/tracks/modulos-de-vtex-i#catalogo) con los productos, el árbol de categorías y la información relacionada, como descripciones, imágenes y precios, para llenar y probar la tienda, incluyendo recursos como páginas de lista de productos (PLP), funcionalidad de búsqueda, páginas de detalles del producto (PDP) y checkout.<br><br>La ausencia de un catálogo puede resultar en pruebas incompletas y problemas de integración de datos, retrasando la implementación.<br><br>Más información en el artículo [Módulos de VTEX I](https://help.vtex.com/es/docs/tracks/modulos-de-vtex-i). |
| Definición de las aplicaciones necesarias para la operación de la tienda | El equipo definió las aplicaciones, nativas o de terceros, necesarias para la operación de la tienda.<br><br>Para tiendas que se construirán con [Store Framework](#store-framework) existe una lista de aplicaciones nativas y de terceros.<br><br>Más información en el artículo [VTEX IO apps](https://developers.vtex.com/docs/vtex-io-apps).                                                                                                                                                                                                                                                                                                                                                  |

> ℹ️ La [fase de desarrollo](#fases-de-desarrollo) puede ocurrir en paralelo con otras fases de las [integraciones de backend](https://help.vtex.com/es/docs/tracks/integraciones-de-backend) y [configuración de módulos](https://help.vtex.com/es/docs/tracks/modulos-de-vtex-i), como por ejemplo las configuraciones de medios de pago y logística. Esto dependerá del tipo de [arquitectura y planificación](https://help.vtex.com/es/docs/tracks/cuentas-y-arquitectura) elegido para la tienda VTEX y deberá contar con el monitoreo de la [agencia implementadora](https://help.vtex.com/es/docs/tracks/cuentas-y-arquitectura#partners-de-implementacion) o del [Soporte VTEX](https://help.vtex.com/es/docs/tracks/soporte-vtex).

## Tecnologías de desarrollo de frontend en VTEX

VTEX cuenta con tres tecnologías distintas para el desarrollo del storefront: [FastStore](#FastStore), [Store Framework](#store-framework) y [CMS Portal (Legado)](/es/docs/tracks/cms-portal-legado). CMS Portal (Legado) fue la primera tecnología de VTEX para la construcción de storefronts, basada en HTML, CSS y JavaScript, y todo el desarrollo y la edición del código de esta tecnología se realizan vía Admin VTEX.

> ⚠️ Aunque todavía algunas tiendas lo utilizan, [CMS Portal (Legado)](/es/docs/tracks/cms-portal-legado) es una tecnología heredada y ya no está disponible para nuevas tiendas en VTEX.

Las siguientes secciones tratan sobre las principales características y funcionalidades de FastStore y Store Framework.

## FastStore

FastStore es una tecnología de storefront innovadora que permite a los equipos de desarrollo crear tiendas enfocadas en el desempeño y la estabilidad. Además, facilita el mantenimiento y la edición de las páginas del sitio web de la tienda.

Esta tecnología es un _toolkit de código abierto_ basado en _React_ y en la arquitectura [Jamstack](https://jamstack.org/). Para más información, consulta el portal de documentación de [FastStore](https://developers.vtex.com/docs/guides/faststore).

### Principales funcionalidades de FastStore

La siguiente tabla muestra algunas de las principales funcionalidades de FastStore:

| Funcionalidad                                                                                                                                                                                                                                                                                                                                                   | Descripción                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Starter](https://starter.vtex.app/)                                                                                                                                                                                                                                                                                                                            | Plantilla funcional diseñada para el desarrollo rápido de la tienda, que ya integra los componentes de [FastStore UI](https://developers.vtex.com/docs/guides/faststore/components-index). Incluye páginas como páginas de inicio, páginas de lista de productos (PLP), páginas de detalles de productos (PDP) y también la funcionalidad minicart. |
| [FastStore UI](https://developers.vtex.com/docs/guides/faststore/components-index)                                                                                                                                                                                                                                                                              | Biblioteca de componentes para ecommerce que ofrece recursos y estilos básicos para agilizar la implementación y personalización de storefronts.                                                                                                                                                                                                                                                          |
| Tecnología headless                                                                                                                                                                                                                                                                                                                                             | Proceso de personalización que separa el código de la tienda desarrollado por el equipo de desarrollo del código base proporcionado por VTEX. Esto simplifica las actualizaciones del frontend de la tienda, permitiendo actualizaciones sin afectar el código personalizado.                                                                                                             |
| Integración con [GitHub](https://github.com/)                                                                                                                                                                                                                                                                                                                   | Los equipos de desarrollo pueden gestionar todo el código del storefront utilizando [GitHub](https://github.com/).                                                                                                                                                                                                                                                                                        |
| [Headless CMS (Legacy)](https://developers.vtex.com/docs/guides/faststore/headless-cms-overview)                                                                                                                                                                                                                                             | Sistema de gestión de contenido (CMS) que permite la edición y creación de nuevas páginas, así como la vista previa de los cambios en el contenido.                                                                                                                                                                                                                                    |
| Verificaciones automáticas                                                                                                                                                                                                                                                                                                                                      | Las pruebas funcionales y la evaluación del desempeño de la tienda y de la calidad del código se ejecutan continuamente de forma automatizada para detectar lentitud y errores durante toda la fase de desarrollo del storefront.                                                                                                                                                                         |
| Integración con [Intelligent Search](https://developers.vtex.com/docs/guides/faststore/getting-started-1-setting-up-your-environment#step-4-enabling-the-vtex-intelligent-search-app)                                                                                                                                                                           | Funcionalidad de autocompletar en la barra de búsqueda, junto con sugerencias de búsqueda y productos basados en preferencias configurables.                                                                                                                                                                                                                                                              |
| Integraciones con [Checkout](https://developers.vtex.com/docs/guides/faststore/go-live-3-integrating-the-vtex-checkout), [Mi Cuenta](https://developers.vtex.com/docs/guides/faststore/go-live-4-integrating-the-vtex-order-placed-and-my-account) e [Inicio de sesión](https://developers.vtex.com/docs/guides/faststore/go-live-2-integrating-the-vtex-login) | Integración con otras fases de la jornada de compra del cliente. Las tiendas VTEX previamente desarrolladas con Store Framework pueden mantener los ajustes relacionados con Checkout, Mi cuenta e Inicio de sesión al migrar a FastStore, ya que ambas se benefician de la misma infraestructura.                                                                                        |

## Store Framework

Store Framework es una solución ya establecida basada en un framework de implementación de storefronts low-code, enfocada en el modelo de composable commerce. Es decir, el framework permite combinar diferentes aplicaciones de VTEX IO (https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io) para crear el storefront.

En esta tecnología, la implementación y el lanzamiento de la tienda se centra en componentes preconstruidos, también conocidos como bloques, y en la posibilidad de personalizar estos componentes en función de las necesidades del modelo de negocio. Este framework se basa en:

- React
- TypeScript
- Node.js
- GraphQL

Para más información, consulta el artículo [What is VTEX Store Framework](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework).

### Entorno de desarrollo

En la implementación de frontend, es importante recordar que VTEX IO (https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io) no es una tecnología para construir storefronts, sino una plataforma de desarrollo. Store Framework es una tecnología de construcción de storefront ejecutada por VTEX IO, que a su vez es una solución de desarrollo y ejecución basada en la nube para aplicaciones personalizadas y storefronts.

Esto significa que cuando trabajas con VTEX IO, desarrollas tu código localmente. Sin embargo, para implementar y ejecutar la tienda, VTEX IO también se encarga del proceso de deploy y gestiona la infraestructura, CI/CD y la seguridad. La siguiente imagen muestra cómo se relacionan estos conceptos entre sí:

![Arquitetura de desenvolvimento frontend](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/trilha-da-loja-vtex/implementacao-de-frontend_1.png)

### Principales funcionalidades de Store Framework

La tabla a continuación muestra algunas de las principales funcionalidades de Store Framework:

| Funcionalidad                                                                                                                         | Descripción                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Starter](https://github.com/vtex-apps/store-theme)                                                                                   | Plantilla funcional diseñada para el desarrollo rápido de la tienda, que ya integra los componentes preconstruidos.                                                                                          |
| [Componentes preconstruidos](https://developers.vtex.com/docs/vtex-io-apps)                                                           | Componentes nativos basados en React.                                                                                                                                                                        |
| Arquitectura modular                                                                                                                  | Personalización y reutilización del código de elementos de la interfaz para lanzar y replicar tiendas rápidamente.                                                                                           |
| [Workspaces y entornos de prueba](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace)                            | Posibilidad de crear distintas versiones de la tienda y probarlas antes para hacer cambios con seguridad.                                                                                                    |
| [Site Editor](https://help.vtex.com/es/docs/tutorials/site-editor-vision-general)                                                     | Sistema de gestión de contenido (CMS) para editar plantillas y crear nuevas páginas en el sitio web de la tienda.                                                                         |
| [Pruebas A/B nativas](https://developers.vtex.com/docs/guides/ab-tests)                                                               | Posibilidad probar y validar la versión de la tienda que tiene las tasas de conversión más altas.                                                                                                            |
| Integración con [Intelligent Search](https://help.vtex.com/es/docs/tracks/vision-general-intelligent-search)                          | Funcionalidad de autocompletar en la barra de búsqueda, junto con sugerencias de búsqueda y productos basados en tus preferencias.                                                                           |
| [Progressive Web App (PWA)](https://help.vtex.com/es/docs/tutorials/habilitar-las-notificaciones-pwa-de-la-tienda) | Experiencias similares a las de una aplicación nativa en cualquier dispositivo con tecnología preparada para PWA.                                                                                            |
| [Cross-border](https://help.vtex.com/es/docs/tracks/tiendas-transfronterizas-cross-border)                                            | Una [multitienda](https://help.vtex.com/es/docs/tracks/cuentas-y-arquitectura#elegirentre-multitienda-y-ambiente-adicional) VTEX operando en diferentes países con un enfoque propio para cada uno de ellos. |
| Integración con Checkout, [Mi cuenta](https://help.vtex.com/es/docs/tutorials/como-funciona-mi-cuenta) e Inicio de sesión             | Integración con otras fases de la jornada de compra del cliente.                                                                                                                                             |

## Elegir tecnología frontend

A la hora de elegir entre Store Framework y FastStore el equipo debe evaluar las necesidades específicas del proyecto y considerar la experiencia del equipo con ambas tecnologías.

Store Framework es una opción más madura, que ofrece una estructura flexible adecuada para casos de uso complejos, además de soporte para tiendas que operan internacionalmente y con varios idiomas.
Para tiendas B2B, Store Framework es una excelente opción, ya que ofrece [B2B Suite](https://developers.vtex.com/docs/apps/vtex.b2b-suite), una aplicación que permite la gestión de organizaciones, permisos de frontend de la tienda y configuraciones de checkout para relaciones comerciales B2B.

FastStore es una alternativa más reciente, enfocada en el desempeño de la tienda. Esta solución ofrece una experiencia de carga rápida, que es esencial para mantener el interés de los visitantes de la tienda y reducir las tasas de abandono de carrito. Para casos de uso más simples y enfocados en desempeño, FastStore puede ser la tecnología más recomendada.

> ℹ️ El equipo de [Soporte VTEX](https://help.vtex.com/es/docs/tracks/soporte-vtex) puede ayudarte a elegir entre las tecnologías de storefront disponibles.

En la tabla a continuación se comparan las dos tecnologías según sus principales funcionalidades:

<table>
    <tbody><tr>
        <td>**Funcionalidad**</td>
        <td>**Store Framework**</td>
        <td>**FastStore**</td>
    </tr>
    <tr>
      <td>Starter (plantilla inicial)</td>
        <td>[Store Theme](https://github.com/vtex-apps/store-theme) es la plantilla inicial que el equipo puede utilizar como base para iniciar el proyecto de la tienda o comenzar desde cero.</td>
        <td>[Starter FastStore](https://starter.vtex.app/) ya está disponible al finalizar el [Onboarding de FastStore](https://developers.vtex.com/docs/guides/faststore/getting-started-2-starting-the-project), lo que permite al equipo comenzar el proyecto con una plantilla base centrada en desempeño.</td>
    </tr>
    <tr>
        <td>Desempeño</td>
        <td>Los recursos de SSR (Server Side Rendering) generan todo el HTML de una página en el servidor en respuesta a una solicitud de página, mientras que el SPA (Single Page Application) carga elementos como el encabezado solo una vez que la página se ha cargado.</td>
        <td>Posibilidad de alcanzar el máximo desempeño, ya que utiliza la arquitectura Jamstack (https://jamstack.org/) para crear con anticipación las páginas del sitio web de la tienda, lo que permite una entrega más rápida y eficiente en términos de recursos.</td>
    </tr>
    <tr>
        <td>Tech Stack</td>
        <td>
            <ul>
                <li>TypeScript</li>
                <li>React</li>
                <li>GraphQL</li>
                <li>Node.js</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>GraphQL</li>
                <li>Node.js</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Personalización de componentes</td>
        <td>Flexible y de fácil personalización.</td>
        <td>Permite personalizar los componentes nativos y garantiza un buen desempeño de la tienda siguiendo las mejores prácticas.</td>
    </tr>
    <tr>
        <td>Gestión del código</td>
        <td>Utiliza [Workspaces](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace) y la arquitectura de VTEX IO para el versionado, actualización y rollback de los componentes y las aplicaciones.</td>
        <td>Utiliza GitHub y el concepto de [ramas](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) para la colaboración. Los usuarios con autorización para acceder al repositorio del storefront en GitHub pueden ver y trabajar en el código.</td>
    </tr>
    <tr>
        <td>Comunidad y Soporte</td>
        <td>
            <ul>
                <li>[Documentación oficial](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework)</li>
                <li>[VTEX Community](https://community.vtex.com/c/store-development/store-framework/17)</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>[Documentación oficial](https://developers.vtex.com/docs/guides/faststore)</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Monitoreo del desempeño y Analytics</td>
        <td>
            <ul>
                <li>Posibilidad de configurar [VTEX Google Tag Manager](https://developers.vtex.com/docs/guides/google-tag-manager) para analizar los datos de navegación de la tienda.</li>
                <li>Posibilidad de aumentar el desempeño del sitio web de la tienda usando herramientas de [optimización de desempeño](https://developers.vtex.com/docs/guides/vtex-io-documentation-best-practices-for-optimizing-performance).</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Posibilidad de configurar el módulo nativo de Analytics.</li>
                <li>Posibilidad de aumentar el desempeño del sitio web de la tienda utilizando herramientas tecnológicas.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Sistema de gestión de contenidos (CMS)</td>
        <td>Compatible con [Site Editor](https://help.vtex.com/es/docs/tutorials/site-editor-vision-general).</td>
        <td>Compatible con [Headless CMS (Legacy)](https://developers.vtex.com/docs/guides/faststore/headless-cms-overview).</td>
    </tr>
</tbody></table>

## Fases de desarrollo

Antes de lanzar la tienda en producción y del [go live](https://help.vtex.com/es/docs/tracks/planificacion-del-go-live), es importante enumerar las configuraciones y funcionalidades esenciales que se deben incluir en el storefront. Estas definiciones ayudan a definir el Producto Mínimo Viable (MVP) para el storefront. Los siguientes temas describen:

- [Los requisitos para un MVP de FastStore](#requisitos-para-un-mvp-de-faststore)
- [Los requisitos para un MVP de Store Framework](#requisitos-para-un-mvp-de-store-framework)

> ℹ️ Las siguientes recomendaciones son para configuraciones básicas de storefront. Dependiendo de la [arquitectura elegida](https://help.vtex.com/es/docs/tracks/cuentas-y-arquitectura) para la operación de la tienda pueden ser necesarias otras configuraciones.

### Desarrollo con FastStore

El equipo de desarrollo debe iniciar un nuevo proyecto con FastStore mediante el proceso de [onboarding](https://developers.vtex.com/docs/guides/faststore/getting-started-2-starting-the-project). Al final de este proceso el equipo tendrá una tienda básica y funcional basada en el [Starter de FastStore](https://starter.vtex.app/). Una vez hecho esto ya se habrán implementado los requisitos básicos de la página:

- Página de inicio
- Página de lista de productos (PLP)
- Página de detalles del producto (PDP)
- Minicart

![FastStore template](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/trilha-da-loja-vtex/implementacao-de-frontend_2.png)

#### Requisitos para un MVP de FastStore

A continuación se presentan los requisitos para cada tema:

- Catálogo
  - [Agregar productos y SKUs](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-productos)
  - [Construir el árbol de categorías](https://help.vtex.com/es/docs/tutorials/registrar-categoria), ([departamentos](https://help.vtex.com/es/docs/tutorials/que-es-un-departamento), [categorías](https://help.vtex.com/es/docs/tutorials/que-es-una-categoria) y [subcategorías](https://help.vtex.com/es/docs/tutorials/que-es-una-subcategoria))
  - [Definir filtros y tipos de especificaciones por categoría](https://help.vtex.com/es/docs/tutorials/crear-grupo-de-especificaciones-en-una-categoria)
  - [Registrar imágenes de los SKUs](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-skus)
  - [Registrar precios de los SKUs](https://help.vtex.com/es/docs/tracks/registrar-precio-base)
  - [Gestión del stock](https://help.vtex.com/es/docs/tutorials/gestionar-items-en-inventario)
- VTEX Intelligent Search
  - [Integrar la aplicación de Intelligent Search en la cuenta](https://developers.vtex.com/docs/guides/faststore/getting-started-1-setting-up-your-environment#step-4-enabling-the-vtex-intelligent-search-app)
- Integración con Headless CMS (Legacy)
  - [Configurar Headless CMS (Legacy) en la cuenta](https://developers.vtex.com/docs/guides/faststore/headless-cms-1-configuring-the-vtex-account)
  - [Definir content types y secciones que estarán disponibles](https://developers.vtex.com/docs/guides/faststore/headless-cms-2-setting-up-the-headless-cms)
  - Crear y editar páginas utilizando Headless CMS (Legacy) en el Admin VTEX
- Página de inicio
  - Editar los componentes y estilos ya presentados en [Starter](https://starter.vtex.app/)
- Página de inicio de sesión
  - [Integrar VTEX Login](https://developers.vtex.com/docs/guides/faststore/go-live-2-integrating-the-vtex-login)
  - Editar los componentes y estilos ya presentados en [Starter](https://starter.vtex.app/)
- Página de lista de productos (PLP)
  - Editar los componentes y estilos ya presentados en [Starter](https://starter.vtex.app/)
- Página de detalles del producto (PDP)
  - Editar los componentes y estilos ya presentados en [Starter](https://starter.vtex.app/)
- Configuración de Minicart
  - Editar los componentes y estilos ya presentados en [Starter](https://starter.vtex.app/)
- Checkout
  - Integrar [VTEX Checkout](https://developers.vtex.com/docs/guides/faststore/go-live-3-integrating-the-vtex-checkout)
  - Integrar [VTEX Order Placed y My Account](https://developers.vtex.com/docs/guides/faststore/go-live-4-integrating-the-vtex-order-placed-and-my-account)
- Logística
  - [Registrar muelle](https://help.vtex.com/es/docs/tutorials/gestionar-el-muelle)
  - [Registrar estrategia de envío](https://help.vtex.com/es/docs/tutorials/estrategia-de-envio)
  - [Relacionar la estrategia de envío y almacén con el muelle](https://help.vtex.com/es/docs/tutorials/gestionar-el-muelle)
- Pagos
  - [Configurar el conector Pagarés](https://help.vtex.com/es/docs/tutorials/configurar-conector-pagares)
  - Registrar proveedores de pagos y antifraude

- Desempeño y SEO
  - Aumentar el desempeño del sitio web de la tienda utilizando herramientas indicadas [para la tecnología](https://v1.faststore.dev/how-to-guides/performance)
- Métricas
  - Configurar el módulo [Analytics](https://v1.faststore.dev/reference/sdk/analytics)

### Desarrollo con Store Framework

El equipo de desarrollo debe iniciar un nuevo proyecto con Store Framework clonando y [vinculando](https://developers.vtex.com/docs/guides/vtex-io-documentation-linking-an-app) el [Store Theme](https://github.com/vtex-apps/store-theme) en un [workspace de desarrollo](https://developers.vtex.com/docs/guides/vtex-io-documentation-creating-a-development-workspace). Store Theme es una plantilla funcional básica para iniciar una tienda con componentes esenciales y páginas como:

- Página de inicio
- Página de lista de productos (PLP)
- Página de detalles del producto (PDP)

![Store Framework template](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/trilha-da-loja-vtex/implementacao-de-frontend_3.png)

#### Requisitos para un MVP de Store Framework

A continuación se presentan los requisitos para cada tema:

- Catálogo
  - [Registrar productos y SKUs](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-productos)
  - [Construir el árbol de categorías](https://help.vtex.com/es/docs/tutorials/registrar-categoria), ([departamentos](https://help.vtex.com/es/docs/tutorials/que-es-un-departamento), [categorías](https://help.vtex.com/es/docs/tutorials/que-es-una-categoria) y [subcategorías](https://help.vtex.com/es/docs/tutorials/que-es-una-subcategoria))
  - [Definir filtros y tipos de especificaciones por categoría](https://help.vtex.com/es/docs/tutorials/crear-grupo-de-especificaciones-en-una-categoria)
  - [Registrar imágenes de los SKUs](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-skus)
  - [Registrar precios de los SKUs](https://help.vtex.com/es/docs/tracks/registrar-precio-base)
  - [Gestión del stock](https://help.vtex.com/es/docs/tutorials/gestionar-items-en-inventario)
- VTEX Intelligent Search
  - [Integrar la aplicación de Intelligent Search en la cuenta](https://help.vtex.com/es/docs/tracks/vision-general-intelligent-search)
- Página de inicio
  - Editar los componentes y estilos ya presentados en [Starter](https://storetheme.vtex.com/)
- Página de inicio de sesión
  - Integrar VTEX Login
  - Editar los componentes y estilos ya presentados en [Starter](https://storetheme.vtex.com/)
- Página de lista de productos (PLP)
  - Editar los componentes y estilos ya presentados en [Starter](https://storetheme.vtex.com/clothing?_q=clothing&map=ft)
- Página de detalles del producto (PDP)
  - Editar los componentes y estilos ya presentados en [Starter](https://storetheme.vtex.com/ten-top-shirts/p)
- Configuración de Minicart
  - Editar los componentes y estilos ya presentados en [Starter](https://storetheme.vtex.com/)
- Logística
  - [Registrar muelle](https://help.vtex.com/es/docs/tutorials/gestionar-el-muelle)
  - [Registrar estrategia de envío](https://help.vtex.com/es/docs/tutorials/estrategia-de-envio)
  - [Relacionar la estrategia de envío y almacén con el muelle](https://help.vtex.com/es/docs/tutorials/gestionar-el-muelle)
- Pagos
  - [Configurar el conector Pagarés](https://help.vtex.com/es/docs/tutorials/configurar-conector-pagares)
  - [Registrar afiliaciones de gateway](https://help.vtex.com/es/docs/tutorials/afiliaciones-de-gateway)
- Desempeño
  - Aumentar el desempeño del sitio web de la tienda usando herramientas de [optimización de desempeño](https://developers.vtex.com/docs/guides/vtex-io-documentation-best-practices-for-optimizing-performance)
- Métricas
  - Configurar [Google Tag Manager](https://developers.vtex.com/docs/guides/google-tag-manager)
