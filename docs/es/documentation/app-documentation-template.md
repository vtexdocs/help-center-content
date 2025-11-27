---
title: 'Documentación de aplicaciones'
id: edu0005-es
status: PUBLISHED
createdAt: 2025-11-25T19:24:22.388Z
updatedAt: 2025-11-25T11:55:00.388Z
publishedAt: 2025-11-25T19:24:22.388Z
firstPublishedAt: 2025-11-25T19:24:22.388Z
contentType: trackArticle
productTeam: Education
slugES: documentacion-de-aplicaciones
locale: es
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugES: documentacion-de-aplicaciones
---

Este tipo de documentación sobre apps ayuda a los usuarios a comprender las [aplicaciones VTEX](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-a-vtex-app), incluyendo la instalación y la configuración.

> ℹ️ Para agregar documentación a una aplicación, debes usar [Docs Builder](https://developers.vtex.com/docs/guides/vtex-io-documentation-docs-builder). La documentación se escribe en archivos Markdown dentro del repositorio de la aplicación. Al usar Docs Builder, la documentación pasa a estar disponible públicamente en el [VTEX Developer Portal](https://developers.vtex.com/).

En esta guía conocerás la plantilla disponible, las pautas generales y ejemplos de artículos de onboarding.

> ⚠️ Esta guía forma parte de las [directrices de la App Store](https://developers.vtex.com/docs/guides/vtex-io-documentation-homologation-requirements-for-vtex-app-store) y es uno de los requisitos para enviar una app al proceso de homologación y [publicarla en la App Store](https://developers.vtex.com/docs/guides/vtex-io-documentation-homologation-requirements-for-vtex-app-store).

## Redactar documentación de aplicaciones

<details>
<summary><b>Audiencia</b></summary>

**Descripción:** Identifica a tus lectores.

| **✅ Correcto** | **❌ Incorrecto** |
| :--- | :--- |
| Diferencia entre desarrolladores y usuarios de negocio. | Suponer que hay una audiencia única. |

</details>

<details>
<summary><b>Objetivos de aprendizaje</b></summary>

**Descripción:** Define la conclusión principal que debe obtener el usuario.

| **✅ Correcto** | **❌ Incorrecto** |
| :--- | :--- |
| Indica claramente qué deben aprender los usuarios. | Dejar los objetivos de aprendizaje ambiguos. |

</details>

<details>
<summary><b>Título</b></summary>

**Descripción:** Utiliza un título claro y conciso.

| **✅ Correcto** | **❌ Incorrecto** |
| :--- | :--- |
| <ol><li>Utiliza el nombre de la aplicación y un verbo que describa el objetivo de aprendizaje.</li><li>Escribe con mayúscula la primera letra de cada palabra.</li></ol> | Incluir signos de puntuación, números de versión o la palabra `App`. |

</details>

<details>
<summary><b>Introducción</b></summary>

**Descripción:** Presenta brevemente la aplicación y sus beneficios.

| **✅ Correcto** | **❌ Incorrecto** |
| :--- | :--- |
| <ol><li>Resume el propósito de la aplicación y los beneficios para el usuario.</li><li>Incluye una imagen y callouts para avisos importantes.</li></ol> | Centrarse exclusivamente en los detalles técnicos. |

</details>

<details>
<summary><b>Antes de comenzar (opcional)</b></summary>

**Descripción:** Enumera los requisitos previos a la instalación.

| **✅ Correcto** | **❌ Incorrecto** |
| :--- | :--- |
| <ol><li>Utiliza viñetas o listas de verificación claras.</li><li>Utiliza callouts si corresponde.</li></ol> | Redactar párrafos extensos explicando los requisitos previos. |

</details>

<details>
<summary><b>Instalación</b></summary>

**Descripción:** Proporciona una guía paso a paso con fragmentos de código (si corresponde).

| **✅ Correcto** | **❌ Incorrecto** |
| :--- | :--- |
| <ul><li>Proporciona pasos claros y concisos.</li><li>Mejora la claridad con fragmentos de código.</li></ul> | Omitir pasos o no incluir instrucciones específicas. |

</details>

<details>
<summary><b>Configuración</b></summary>

**Descripción:** Guía a los usuarios a través de la configuración de la aplicación.

| **✅ Correcto** | **❌ Incorrecto** |
| :--- | :--- |
| Enumera todos los ajustes esenciales con pasos detallados, tal como se define en [settingsSchema](https://developers.vtex.com/docs/guides/vtex-io-documentation-manifest#settingsschema). | Omitir detalles de configuración. |

</details>

<details>
<summary><b>Cómo funciona</b></summary>

**Descripción:** (Opcional) Detalla las funciones de la aplicación y proporciona los pasos para usarla.

| **✅ Correcto** | **❌ Incorrecto** |
| :--- | :--- |
| <ol><li>Utiliza listas numeradas para cada operación, con pasos claros y concisos.</li><li>Utiliza imágenes para ilustrar la interfaz de usuario.</li></ol> | Omitir pasos o carecer de instrucciones específicas. |

</details>

<details>
<summary><b>Personalización</b></summary>

**Descripción:** (Opcional) Proporciona los pasos para personalizar la aplicación.

| **✅ Correcto** | **❌ Incorrecto** |
| :--- | :--- |
| <ul><li>Incluye [CSS handles](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization) y una tabla relacionada, si corresponde.</li><li>Consulta la documentación externa para obtener información sobre la personalización de CSS.</li></ul> | Ignorar las opciones de personalización. |

</details>

<details>
<summary><b>Colaboradores</b></summary>

**Descripción:** (Opcional) Reconoce la contribución de los colaboradores.

| **✅ Correcto** | **❌ Incorrecto** |
| :--- | :--- |
| Sigue el contenido estipulado en [All-Contributors specification](https://github.com/all-contributors/all-contributors). | Omitir el reconocimiento de los colaboradores. |

</details>

<details>
<summary><b>Callouts</b></summary>

**Descripción:** (Opcional) Reconoce la contribución de los colaboradores.

| ✅ Correcto | ❌ Incorrecto |
| :--- | :--- |
| Resalta la información mediante callouts. | <ul><li>Utiliza los tipos de callout proporcionados (Information, Warning, Danger) con los mensajes apropiados.</li><li>Utilizar texto genérico para resaltar la información.</li></ul> |

</details>

## Plantilla de documentación de aplicaciones

<details>
<summary><b>Plantilla de documentación de aplicaciones</b></summary>

```md
# `{Inserta el nombre de la aplicación}`

`{insertar nombre de la aplicación}` `{propósito de la aplicación empezando con un verbo}` para poder `{tarea a realizar}`.

![insertar-una-vista-previa-de-imagen](/)

## Antes de comenzar

Necesitas tener `{insertar lo que el usuario necesita tener: una cuenta en otra plataforma, CLI, conocimiento sobre otra aplicación, etc.}`.

Si no tienes `{insertar lo que el usuario necesita tener y cómo obtenerlo}`.

## Instalación

1. [Instala](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-installing-an-app) la aplicación `{insert app name}` en la cuenta VTEX deseada ejecutando `vtex install {appVendor}.{appName}` en tu terminal.
2. (Opcional, para aplicaciones frontend) Abre el directorio de la aplicación Store Theme en tu editor de código.
3. (Opcional, para aplicaciones frontend) Abre el archivo `manifest.json` de la aplicación y agrega la aplicación `{insertar nombre de la aplicación}` en el campo `peerDependencies`.


      "peerDependencies": {
          "vtex.{appName}": "{appVersion}"
      }
      

4. (Opcional, para aplicaciones frontend) Declara la aplicación `{insertar nombre de la aplicación}` en la plantilla deseada. Por ejemplo:

      "store.home": {
          "blocks": [
      +     "{app-name}",
          ]
      },

*![insertar-una-imagen-de-vista-previa](/)*

## Configuración

Una vez instalada la aplicación, puedes `{describir la configuración de la aplicación en el Admin VTEX como se define en settingsSchema[https://developers.vtex.com/docs/guides/vtex-io-documentation-manifest#settingsschema], por ejemplo}`.

1. `Primer paso`.
2. `Segundo paso`.
3. `Tercer paso`.

## Personalización (Opcional, para aplicaciones de frontend)

Para aplicar personalizaciones CSS a este y otros bloques, sigue las instrucciones de [Using CSS Handles for store customization](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization).

| CSS Handles |
| ------------------ |
| csshandlesName |
| csshandlesName |
| csshandlesName |

## Cómo funciona la aplicación (opcional)

Utiliza esta sección para [aplicaciones del Admin](https://learn.vtex.com/docs/course-admin-lang-en) cuando la aplicación requiera interacción del usuario más allá de la configuración de administrador.

`{Detalla qué se puede hacer con la aplicación y proporciona los pasos para realizar cada operación.}`

## Contribuidores

Agradecemos la labor de estas maravillosas personas:

- `{insertar el nombre de usuario de GitHub}`

Este proyecto sigue la especificación de [all-contributors](https://github.com/all-contributors/all-contributors). Se agradecen las contribuciones de cualquier tipo.
```

</details>

## Ejemplos de artículos de documentación de aplicaciones

- [Breadcrumb](https://developers.vtex.com/docs/apps/vtex.breadcrumb)
- [SKU Selector](https://developers.vtex.com/docs/apps/vtex.store-components/skuselector)
- [Store Locator](https://developers.vtex.com/docs/apps/vtex.store-locator)
- [Store Sitemap](https://developers.vtex.com/docs/apps/vtex.store-sitemap)
- [Assembly Options](https://developers.vtex.com/docs/guides/assembly-options-app)
- [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager)
- [Live Shopping](https://developers.vtex.com/docs/apps/vtexventures.livestreaming)
- [Personal Shopper](https://developers.vtex.com/docs/apps/vtexventures.personal-shopper-free)
- [Pinterest app](https://developers.vtex.com/docs/apps/pinterestpartnerbr.pinterest@1.x)