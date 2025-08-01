---
title: 'Implementación del frontend'
id: 67SCtUreXxKYWhZh8n0zvZ
status: PUBLISHED
createdAt: 2024-01-31T22:25:47.689Z
updatedAt: 2024-03-07T17:10:29.946Z
publishedAt: 2024-03-07T17:10:29.946Z
firstPublishedAt: 2024-02-22T14:07:19.178Z
contentType: trackArticle
productTeam: Others
slugEN: frontend-implementation
locale: es
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugES: serie-de-la-tienda-vtex
---

El frontend de una tienda online, también conocido como storefront, es la interfaz visual e interactiva de la tienda a través de la cual los clientes interactúan con los productos y realizan acciones, como navegar por las categorías, buscar y agregar productos al carrito.

El propósito de este artículo es brindar orientación en la elección de la tecnología para construir el storefront, detallando los ajustes necesarios para cada opción, considerando los siguientes puntos:

- Tecnologías de desarrollo de storefront de VTEX.
- Principales funcionalidades de cada tecnología.
- Etapas de desarrollo.

La implementación del frontend es una etapa centrada en la definición de las tecnologías a implementar, en función de las necesidades del negocio relacionadas con el storefront.

<div class = "alert alert-info">
El frontend puede ser implementado tanto por el equipo de desarrollo interno de la empresa como por nuestros <a href="https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#partners-de-implementacion">partners de implementación</a>. <a href="https://help.vtex.com/es/tutorial/gestionar-usuarios--tutorials_512">Los usuarios</a> con acceso al Admin VTEX pueden consultar la lista de nuestros partners a través del <a href="https://partnerportal.vtex.com/">Partner Portal</a> (exclusivo Brasil).
</div>

## Antes de empezar

Antes de empezar a implementar el frontend, se recomienda que la tienda complete las siguientes fases de configuración:

| Fase | Descripción |
|---|---|
| Definición de la arquitectura de la tienda y la estrategia de ventas | El equipo define la arquitectura de la tienda VTEX en función de las estrategias y necesidades de tu modelo de negocio.<br/><br/>Más información en el artículo [Cuentas y arquitectura](/en/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl). |
| Configuración de roles | El equipo configura los roles de acceso necesarios de cada [usuario](/es/tutorial/gestionar-usuarios--tutorials_512) para la utilización de la plataforma VTEX. <br/><br/>Más información en el artículo [Roles](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc). |
| Configuración del catálogo | El equipo configura el [catálogo](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalogo) con los productos, el árbol de categorías y la información relacionada, como descripciones, imágenes y precios, para completar y probar la tienda, incluyendo recursos como las páginas de lista de productos (PLP), funcionalidad de búsqueda, las páginas de detalles de producto (PDP) y checkout.<br/><br/>La falta de catálogo puede resultar en pruebas incompletas y problemas en la integración de datos, lo que retrasa la implementación.<br/><br/>Más información en el artículo [Módulos de VTEX I](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7). |
| Definición de las aplicaciones necesarias para la operación de la tienda | El equipo define las aplicaciones, tanto nativas como de terceros, necesarias para la operación de la tienda.<br/><br/>Hay una lista de aplicaciones nativas y de terceros para tiendas que se construyan usando [Store Framework](#store-framework).<br/><br/>Más información en el artículo [VTEX IO Apps](https://developers.vtex.com/docs/vtex-io-apps). |

<div class = "alert alert-info">
La <a href="#fases-de-desarrollo">fase de desarrollo</a> puede llevarse a cabo simultáneamente con otras fases de las <a href="https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu">integraciones de backend</a> y <a href="https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7">configuración de módulos</a>, como por ejemplo, la configuración de medios de pago y ajustes logísticos. Esto va a depender del tipo de <a href="https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl">arquitectura y planificación</a> elegida para la tienda VTEX y deberá ir acompañado de la <a href="https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6ylpartners-de-implementacion">agencia implementadora</a> o del <a href="https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/7w7cUmbrdPEKpTMItjXEB8">soporte VTEX</a>.
</div>

## Tecnologías de desarrollo de frontend de VTEX

VTEX cuenta con tres diferentes tecnologías para el desarrollo del storefront: [FastStore](#faststore), [Store Framework](#store-framework) y [CMS Portal Legado](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj). CMS Portal Legado fue la primera tecnología de VTEX para la construcción de storefronts. Este sistema, basado en HTML, CSS y JavaScript, centraliza todo el proceso de desarrollo y edición de código a través del Admin VTEX.

<div class="alert alert-warning">
Aunque algunas tiendas aún lo utilizan, <a href="https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj">CMS Portal Legado</a> es una tecnología heredada y ya no está disponible para tiendas que inician su trayectoria con VTEX.
</div>

Las siguientes secciones tratan sobre las principales características y funcionalidades de FastStore y Store Framework.

## FastStore

FastStore es una innovación tecnológica diseñada para permitir a los equipos de desarrollo crear tiendas enfocadas en el desempeño y la estabilidad. Además, destaca por su facilidad de mantenimiento, incluso para editar páginas del sitio web de la tienda. 

Esta tecnología es un toolkit open-source basado en [React](https://react.dev/) y en la arquitectura [Jamstack](https://jamstack.org/). Para más información, consulta el portal de documentación de [FastStore](https://www.faststore.dev/docs).

### Principales funcionalidades de FastStore

La siguiente tabla muestra algunas de las principales funcionalidades de FastStore:

| Funcionalidad | Descripción |
|---|---|
| [Starter](https://starter.vtex.app/) | Plantilla funcional diseñada para el desarrollo rápido de la tienda, que ya integra los componentes de [FastStore UI](https://www.faststore.dev/components). Incluye páginas como páginas de inicio, páginas de lista de productos (PLP), páginas de detalles de productos (PDP) y también la funcionalidad minicart. |
| [FastStore UI](https://www.faststore.dev/components) | Biblioteca de componentes para ecommerce que ofrece recursos y estilos básicos para agilizar la implementación y personalización de storefronts. |
| Tecnologia headless | Proceso de personalización que separa el código de la tienda, creado por el equipo de desarrollo, del código base suministrado por VTEX. Esto simplifica las actualizaciones del frontend de la tienda, haciendo que no impacten al código personalizado. |
| Integración con [GitHub](https://github.com/) | Los equipos de desarrollo pueden gestionar todo el código del storefront mediante [GitHub](https://github.com/). |
| [Headless CMS](https://www.faststore.dev/docs/headless-cms-overview) | Sistema de gestión de contenido (CMS) que permite editar y crear nuevas páginas y previsualizar los cambios en el contenido. |
| Verificaciones automáticas | Se llevan a cabo de forma continua y automática pruebas funcionales y evaluación del desempeño de la tienda y de la calidad del código para detectar impactos de velocidad y bugs durante toda la fase de desarrollo del storefront. |
| Integración con [Intelligent Search](https://www.faststore.dev/docs/getting-started-requirements#enable-the-vtex-intelligent-search-app-in-your-account) | Funcionalidad de autocompletar en la barra de búsqueda, junto con sugerencias de búsqueda y productos basados en preferencias configurables. |
| Integraciones con [Checkout](https://www.faststore.dev/docs/go-live/4-integrating-the-vtex-checkout), [My Account](https://www.faststore.dev/docs/go-live/5-integrating-the-vtex-order-placed-and-my-account) y [Login](https://www.faststore.dev/docs/go-live/3-integrating-the-the-vtex-login) | Integración con otras fases de la jornada de compra del cliente. Las tiendas VTEX previamente desarrolladas con Store Framework pueden mantener los ajustes relacionados con Checkout, My Account y Login al migrar a FastStore, ya que ambas se benefician de la misma infraestructura. |

## Store Framework

Store Framework es una solución tecnológica establecida de framework para implementar storefronts low-code con un enfoque en el modelo composable commerce, es decir, el framework permite combinar diferentes apps de [VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io) para crear un storefront.

En esta tecnología, la implementación y el lanzamiento de la tienda se centra en componentes preconstruidos, también conocidos como bloques, y en la posibilidad de personalizar estos componentes en función de las necesidades del modelo de negocio. Este framework se basa en:

- React
- TypeScript
- Node.js
- GraphQL

Para más información, consulta el artículo [What is VTEX Store Framework](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework).

### Entorno de desarrollo

Cuando se habla de implementación frontend, cabe recordar que [VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io) no es una tecnología de construcción de storefront, sino una plataforma de desarrollo. Store Framework es una tecnología de construcción de storefront ejecutada por VTEX IO, que a su vez es una solución de desarrollo y ejecución basada en la nube para aplicaciones personalizadas y storefronts.

Esto significa que cuando trabajas con VTEX IO, desarrollas tu código localmente. Sin embargo, en lo que respecta a implementar y ejecutar la tienda, además de encargarse del proceso de deploy, VTEX IO gestiona la infraestructura, CI/CD y la seguridad. La siguiente imagen muestra cómo se relacionan estos conceptos entre sí:

![Arquitectura de desarrollo frontend](https://images.ctfassets.net/alneenqid6w5/70awnhEGvAlpk5NBrGJJJ6/b86208e7447890ebd62183059c0b22f6/frontend_image3_ES.png)

### Principales funcionalidades de Store Framework

La siguiente tabla muestra algunas de las principales funcionalidades de Store Framework:

| Funcionalidad | Descripción |
|---|---|
| [Starter](https://github.com/vtex-apps/store-theme) | Plantilla funcional diseñada para el desarrollo rápido de la tienda, que ya integra los componentes preconstruidos. |
| [Componentes preconstruidos](https://developers.vtex.com/docs/vtex-io-apps) | Componentes nativos basados en React. |
| Arquitectura modular | Personalización y reutilización del código de elementos de la interfaz para lanzar y replicar tiendas rápidamente. |
| [Workspaces y entornos de prueba](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace) | Permite crear distintas versiones de la tienda y probarlas antes para hacer cambios con seguridad. |
| [Site Editor](/es/tutorial/site-editor-vision-general--299Dbeb9mFczUTyNQ9xPe1) | Sistema de gestión de contenido (CMS) para editar plantillas y crear nuevas páginas en el sitio web de la tienda. |
| [Pruebas A/B nativas](https://developers.vtex.com/docs/guides/ab-tests) | Permite probar y validar la versión de la tienda que tiene las tasas de conversión más altas. |
| Integración con [Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) | Funcionalidad de autocompletar en la barra de búsqueda, junto con sugerencias de búsqueda y productos basados en tus preferencias. |
| [Progressive Web App (PWA)](/es/tutorial/habilitar-las-notificaciones-pwa-de-la-tienda--1be3ZPhbsgZSbE7h5H46pG) | Permite experiencias similares a las de una aplicación nativa en cualquier dispositivo con tecnología preparada para PWA. |
| [Cross-border](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/5qgXy9Erm7FDP3UB5Ox8Bs) | Posibilita que una [multitienda](http://link-warm-up-multiloja) VTEX opere en diferentes países, adaptando su estrategia de manera individualizada para cada uno de ellos. |
| Integración con Checkout, [My Account](/es/tutorial/como-funciona-mi-cuenta--2BQ3GiqhqGJTXsWVuio3Xh) y Login | Integración con otras fases de la jornada de compra del cliente. |

## Elegir la tecnología frontend

A la hora de elegir entre Store Framework y FastStore, el equipo debe evaluar las necesidades específicas del proyecto y considerar la experiencia del equipo con ambas tecnologías.

Store Framework es una opción más madura, que ofrece una estructura flexible adecuada para casos de uso complejos, así como soporte para tiendas que operan a escala internacional y con varios idiomas. Para las tiendas B2B, Store Framework es una excelente opción, ya que ofrece el [B2B Suite](https://developers.vtex.com/docs/apps/vtex.b2b-suite), una aplicación que permite el manejo de organizaciones, permisos de la tienda virtual y configuraciones de pago para relaciones comerciales B2B.

FastStore es una alternativa más reciente en proceso de evolución, enfocada en el desempeño de la tienda. Esta solución ofrece una experiencia de carga rápida, que es esencial para mantener el interés de los visitantes de la tienda y reducir las tasas de abandono de carrito. FastStore es la tecnología más recomendada para casos de uso más simples enfocados en desempeño.

<div class = "alert alert-info">
El equipo de <a href="https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/7w7cUmbrdPEKpTMItjXEB8">soporte de VTEX</a> puede ayudarte a elegir una de las tecnologías de storefront disponibles.
</div>

En la siguiente tabla se comparan las dos tecnologías según sus principales funcionalidades:

<table>
    <tr>
        <td><strong>Funcionalidad</strong></td>
        <td><strong>Store Framework</strong></td>
        <td><strong>FastStore</strong></td>
    </tr>
    <tr>
        <td>Starter (plantilla inicial)</td>
        <td><a href="https://github.com/vtex-apps/store-theme">Store Theme</a> es la plantilla inicial que el equipo puede utilizar como base para iniciar el proyecto de tienda o comenzar desde cero.</td>
        <td><a href="https://starter.vtex.app/">FastStore Starter</a> se disponibiliza al finalizar el <a href="https://www.faststore.dev/docs/getting-started/1-faststore-onboarding/overview">Onboarding de FastStore</a>, lo que permite al equipo comenzar el proyecto con una plantilla base centrada en desempeño.</td>
    </tr>
    <tr>
        <td>Desempeño</td>
        <td>Los recursos SSR (Server Side Rendering) generan todo el HTML de una página en el servidor en respuesta a un request de la página, mientras que la SPA (Single Page Application) carga elementos como el header solamente cuando la página se ha cargado.</td>
        <td>Posibilidad de máximo desempeño, ya que utiliza la arquitectura <a href="https://jamstack.org/">Jamstack</a> para crear las páginas del sitio web de la tienda con antelación, lo que hace que la entrega del sitio web sea más rápida y eficiente en términos de recursos.</td>
    </tr>
    <tr>
        <td>Tech Stack</td>
        <td>
            <ul>
                <li>TypeScript
                <li>React
                <li>GraphQL
                <li>Node.js
            </ul>
        </td>
        <td>
            <ul>
                <li>TypeScript
                <li>React
                <li>Next.js
                <li>GraphQL
                <li>Node.js
            </ul>
        </td>
    </tr>
    <tr>
        <td>Personalización de componentes</td>
        <td>Flexible y fácil de personalizar.</td>
        <td>Permite personalizar los componentes nativos y garantiza el desempeño de la tienda basándose en las mejores prácticas.</td>
    </tr>
    <tr>
        <td>Gestión del código</td>
        <td>Utiliza <a href="https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace">workspaces</a> y la arquitectura VTEX IO para distintas versiones, actualización y rollback (reversión) de componentes y aplicaciones.</td>
        <td>Utiliza GitHub y el concepto de <a href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches">branch</a> para colaboración. Los usuarios con autorización para acceder al repositorio del storefront en GitHub pueden ver y trabajar en el código.</td>
    </tr>
    <tr>
        <td>Comunidad de soporte</td>
        <td>
            <ul>
                <li><a href="https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework">Documentación oficial</a>
                <li><a href="https://community.vtex.com/c/store-development/store-framework/17">VTEX Community</a>
            </ul>
        </td>
        <td>
            <ul>
                <li><a href="https://www.faststore.dev/docs">Documentación oficial</a>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Monitoreo del desempeño y Analytics</td>
        <td>
            <ul>
                <li>Posibilidad de configurar <a href="https://developers.vtex.com/docs/guides/google-tag-manager">VTEX Google Tag Manager</a> para analizar los datos de navegación de la tienda.
                <li>Posibilidad de aumentar el desempeño del sitio web de la tienda utilizando herramientas de <a href="https://developers.vtex.com/docs/guides/vtex-io-documentation-best-practices-for-optimizing-performance">optimización de desempeño</a>.
            </ul>
        </td>
        <td>
            <ul>
                <li>Posibilidad de configurar el módulo de Analytics nativo.
                <li>Posibilidad de aumentar el desempeño del sitio web de la tienda utilizando herramientas tecnológicas.
            </ul>
        </td>
    </tr>
    <tr>
        <td>Sistema de gestión de contenido (CMS)</td>
        <td>Compatible con <a href="https://help.vtex.com/es/tutorial/site-editor-vision-general--299Dbeb9mFczUTyNQ9xPe1">Site Editor</a>.</td>
        <td>Compatible con <a href="https://www.faststore.dev/docs/headless-cms-overview">Headless CMS</a>.</td>
    </tr>
</table>

## Fases de desarrollo

Antes de lanzar la tienda en producción, y antes del [go-live](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/6xYnNxDHUcY6FyChgziCoH), enumera los ajustes esenciales y las características que deben incluirse en el storefront. Estas definiciones ayudan a establecer el Producto Mínimo Viable (PMV) para el storefront. En los siguientes temas se describen:

- [Requisitos para un PMV de FastStore](#requisitos-para-un-pmv-de-faststore)
- [Requisitos para un PMV de Store Framework](#requisitos-para-un-pmv-de-store-framework).

<div class = "alert alert-info">
Las recomendaciones a continuación abordan configuraciones básicas de storefront. Dependiendo de la <a href="https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl">arquitectura elegida</a> para la operación de la tienda, pueden ser necesarias otras configuraciones.
</div>

### Desarrollo con FastStore

El equipo de desarrollo debe iniciar un nuevo proyecto con FastStore a través del proceso de [Onboarding](https://www.faststore.dev/docs/getting-started/1-faststore-onboarding/overview). Al final de este proceso, el equipo tendrá una tienda básica y funcional basada en [FastStore Starter](https://starter.vtex.app/). Una vez hecho esto, ya se habrán implementado los requisitos básicos de la página:

- Página de inicio
- Página de lista de productos (PLP)
- Página de detalles de producto (PDP)
- Minicart

![FastStore template](https://images.ctfassets.net/alneenqid6w5/gRMxctAER60dhr8UEIEh2/56b79e81aae806bf7ab17d6088267f90/frontend_image4_ALL.png)

#### Requisitos para un PMV de FastStore

A continuación se presentan los requisitos de cada tema:

- Catálogo
  - [Registrar productos y SKU](/es/tutorial/registrar-productos--tutorials_2567)
  - [Construir un árbol de categorías](/es/tutorial/registrar-categoria--tutorials_206) ([departamentos](/es/tutorial/que-es-un-departamento--22rKjmYWVmmKAK8CWa8yKw), [categorías](/es/tutorial/que-es-una-categoria--6HV4Q3E2FauUoOQoiCCgCg) y [subcategorías](/es/tutorial/que-es-una-subcategoria--2cb0aRkG3i6AeiAMM24iwY))
  - [Definir filtros y tipos de especificaciones por categoría](/es/tutorial/crear-grupo-de-especificaciones-en-una-categoria--tutorials_246)
  - [Registrar imágenes de los SKU](/es/tutorial/campos-de-registro-de-sku--21DDItuEQc6mseiW8EakcY#imagenes)
  - [Registrar precios de los SKU](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29)
  - [Gestión del stock](/es/tutorial/gestionar-items-en-inventario--tutorials_139)
- VTEX Intelligent Search
  - [Integrar la aplicación de Intelligent Search con la cuenta](https://www.faststore.dev/docs/getting-started-requirements#enable-the-vtex-intelligent-search-app-in-your-account)
- Integración con Headless CMS
  - [Configurar Headless CMS en la cuenta](https://www.faststore.dev/docs/headless-cms-integration/1-configuring-the-vtex-account)
  - [Definir content types y las secciones que estarán disponibles](https://www.faststore.dev/docs/headless-cms-integration/2-setting-up-the-headless-cms)
  - Crear y editar páginas utilizando Headless CMS en el Admin VTEX
- Página de inicio
  - Editar los componentes y estilos ya presentados en [Starter](https://starter.vtex.app/)
- Página de inicio de sesión
  - [Integrar con VTEX Login](https://www.faststore.dev/docs/go-live/3-integrating-the-the-vtex-login)
  - Editar los componentes y estilos ya presentados en [Starter](https://starter.vtex.app/)
- Página de lista de producto (PLP)
  - Editar los componentes y estilos ya presentados en [Starter](https://starter.vtex.app/office)
- Página de detalles de producto (PDP)
  - Editar los componentes y estilos ya presentados en [Starter](https://starter.vtex.app/4k-philips-monitor-99988213/p)
- Configuración de minicart
  - Editar los componentes y estilos ya presentados en [Starter](https://starter.vtex.app/)
- Checkout
  - Integrar con [VTEX Checkout](https://www.faststore.dev/docs/go-live/4-integrating-the-vtex-checkout)
  - Integrar con [VTEX Order Placed y My Account](https://www.faststore.dev/docs/go-live/5-integrating-the-vtex-order-placed-and-my-account)
- Logística
  - [Registrar muelle](/es/tutorial/gestionar-el-muelle--7K3FultD8I2cuuA6iyGEiW)
  - [Registrar estrategia de envío](/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)
  - [Relacionar la estrategia de envío y almacén con el muelle](/es/tutorial/gestionar-el-muelle--7K3FultD8I2cuuA6iyGEiW)
- Pagos
  - [Configurar el proveedor Pagarés](/es/tutorial/configurar-conector-pagares--7Gy0SJRVS0Qi2CuWMAqQc0)
  - [Registrar proveedores de gateway](/es/tutorial/afiliaciones-de-gateway--tutorials_444)
- Desempeño y SEO
  - Optimizar el desempeño del sitio web de la tienda utilizando herramientas [tecnológicas](https://v1.faststore.dev/how-to-guides/performance)
- Métricas
  - Configurar o módulo [Analytics](https://v1.faststore.dev/reference/sdk/analytics)

### Desarrollo con Store Framework

El equipo de desarrollo debe iniciar un nuevo proyecto con Store Framework clonando y [asociando](https://developers.vtex.com/docs/guides/vtex-io-documentation-linking-an-app) el [Store Theme](https://github.com/vtex-apps/store-theme) en un [workspace de desarrollo](https://developers.vtex.com/docs/guides/vtex-io-documentation-creating-a-development-workspace). Store Theme es una plantilla funcional básica para iniciar una tienda con componentes esenciales y páginas como:

- Página de inicio
- Página de lista de productos (PLP)
- Página de detalles de producto (PDP)

![Store Framework template](https://images.ctfassets.net/alneenqid6w5/5TpA31coQ1lu5ZoMkj8boS/d1f1bfb2f0e46ff3755375e00658a466/frontend_image5_ALL.png)

#### Requisitos para un PMV de Store Framework

A continuación se presentan los requisitos para cada tema:

- Catálogo
  - [Registrar productos y SKU](/es/tutorial/registrar-productos--tutorials_2567)
  - [Construir un árbol de categorías](/es/tutorial/registrar-categoria--tutorials_206) ([departamentos](/es/tutorial/que-es-un-departamento--22rKjmYWVmmKAK8CWa8yKw), [categorías](/es/tutorial/que-es-una-categoria--6HV4Q3E2FauUoOQoiCCgCg) y [subcategorías](/es/tutorial/que-es-una-subcategoria--2cb0aRkG3i6AeiAMM24iwY))
  - [Definir filtros y tipos de especificaciones por categoría](/es/tutorial/crear-grupo-de-especificaciones-en-una-categoria--tutorials_246)
  - [Registrar imágenes de los SKU](/es/tutorial/campos-de-registro-de-sku--21DDItuEQc6mseiW8EakcY#imagenes)
  - [Registrar precios de los SKU](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29)
  - [Gestión del stock](/es/tutorial/gestionar-items-en-inventario--tutorials_139)
- VTEX Intelligent Search
  - [Integrar la aplicación de Intelligent Search con la cuenta](https://www.faststore.dev/docs/getting-started-requirements#enable-the-vtex-intelligent-search-app-in-your-account)
- Página de inicio
  - Editar los componentes y estilos ya presentados en [Starter](https://storetheme.vtex.com/)
- Página de inicio de sesión
  - Integrar con VTEX Login
  - Editar los componentes y estilos ya presentados en [Starter](https://storetheme.vtex.com/)
- Página de lista de producto (PLP)
  - Editar los componentes y estilos ya presentados en [Starter](https://storetheme.vtex.com/clothing?_q=clothing&map=ft)
- Página de detalles de producto (PDP)
  - Editar los componentes y estilos ya presentados en [Starter](https://storetheme.vtex.com/ten-top-shirts/p)
- Configuración de minicart
  - Editar los componentes y estilos ya presentados en [Starter](https://storetheme.vtex.com/)
- Logística
  - [Registrar muelle](/es/tutorial/gestionar-el-muelle--7K3FultD8I2cuuA6iyGEiW)
  - [Registrar estrategia de envío](/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)
  - [Relacionar la estrategia de envío y almacén con el muelle](/es/tutorial/gestionar-el-muelle--7K3FultD8I2cuuA6iyGEiW)
- Pagos
  - [Configurar el proveedor Pagarés](/es/tutorial/configurar-conector-pagares--7Gy0SJRVS0Qi2CuWMAqQc0)
  - [Registrar proveedores de gateway](/es/tutorial/afiliaciones-de-gateway--tutorials_444)
- Desempeño y SEO
  - Optimizar el desempeño del sitio web de la tienda utilizando herramientas [tecnológicas](https://developers.vtex.com/docs/guides/vtex-io-documentation-best-practices-for-optimizing-performance)
- Métricas
  - Configurar [Google Tag Manager](https://developers.vtex.com/docs/guides/google-tag-manager)
