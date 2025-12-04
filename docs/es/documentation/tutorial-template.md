---
title: 'Tutoriales'
id: edu0011-es
status: PUBLISHED
createdAt: 2025-11-25T19:24:22.388Z
updatedAt: 2025-11-25T11:55:00.388Z
publishedAt: 2025-11-25T19:24:22.388Z
firstPublishedAt: 2025-11-25T19:24:22.388Z
contentType: trackArticle
productTeam: Education
slugES: Tutoriales
locale: es
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugES: Tutoriales
---

Un tutorial es una guía completa y detallada que enseña a los usuarios a realizar una serie de tareas o comprender conceptos en profundidad.

Consulta en esta guía las plantillas disponibles, directrices y ejemplos de tutoriales.

> ℹ️ Asegúrate de revisar las pautas de [Mejores prácticas para redactar documentación](https://contentguide.vtex.com/docs/documentation/documentation-overview#best-practices-for-writing-documentation).

## Diferencias entre tutorial y guía práctica (how-to guide)

Aunque tanto los tutoriales como las [guías prácticas](https://contentguide.vtex.com/docs/documentation/how-to-guides-template) son recursos didácticos, difieren en su estructura y propósito:

<details>
<summary><b>Objetivo</b></summary>

| **Tutorial** | **Guía práctica** |
| ------------ | ---------------- |
| Orientado al aprendizaje. Enseña un concepto, habilidad o proceso de forma detallada. | Orientado a tareas. Se centra en ayudar al usuario a completar una tarea u objetivo específico. |

</details>

<details>
<summary><b>Alcance</b></summary>

| **Tutorial** | **Guía práctica** |
| ------------ | ---------------- |
| Cubre una serie de pasos o conceptos, normalmente relacionados con el aprendizaje de una nueva habilidad. | Su alcance es limitado, generalmente abarcando una tarea o proceso en etapas. |

</details>

<details>
<summary><b>Contenido</b></summary>

| **Tutorial** | **Guía práctica** |
| ------------ | ---------------- |
| Educativo, ofrece contexto, antecedentes y explicaciones. | Práctico, con instrucciones directas y orientadas a la acción. |

</details>

<details>
<summary><b>Audiencia</b></summary>

| **Tutorial** | **Guía práctica** |
| ------------ | ---------------- |
| Orientado a usuarios que desean aprender una habilidad o comprender un concepto en profundidad. | Orientado a usuarios que necesitan alcanzar rápidamente un objetivo específico y ya tienen conocimientos previos. |

</details>

## Cómo escribir un tutorial

| **Elemento** | **Descripción** |
| --------- | ------------ |
| **Título** | Como este tipo de tutoriales se escribe únicamente en inglés, debes indicar el objetivo del mismo con un verbo en gerundio. Considera a tu audiencia y la acción que quieres que realicen. Por ejemplo: `Setting up your development environment` |
| **Antes de comenzar** (opcional)  | Lista todos los prerrequisitos que el usuario debe cumplir antes de seguir los pasos de la guía, incluyendo: <ol><li>Requisitos de herramientas y software: especifica los requisitos mínimos del sistema, como versiones del sistema operativo, instalaciones de software concretas y configuraciones de hardware.</li><li>Creación o configuración de la cuenta: si el usuario necesita crear una cuenta o configurar elementos específicos, proporciona instrucciones claras o links a recursos relevantes.</li><li>Conocimientos o habilidades básicas: si la guía asume cierto nivel de familiaridad con conceptos o herramientas específicos, describe brevemente esos prerrequisitos o proporciona links a recursos de aprendizaje adicionales.</li></ol> |
| **Pasos** | Los pasos se presentarán en forma de lista. La lista se encuentra en las plantillas después de la frase `A continuación, se presenta una descripción general de las partes:`. <ol><li>Proporciona instrucciones detalladas, pasos a seguir para completar la tarea o alcanzar el objetivo.</li><li>Divide el proceso en pasos, asegurándote de que cada paso sea claro y accionable.</li><li>Considera lo que el usuario necesita lograr al final de la guía y describe todas las tareas necesarias para llegar a ese punto. Por ejemplo, si el objetivo es gestionar un módulo del Admin, considera cada paso que el usuario debe completar para lograrlo.</li></ol> |
| **Contenido de los pasos**  | <ol><li>Cada paso debe guiar al usuario de un punto al siguiente en una secuencia lógica. Cuando corresponda, incluye ejemplos, contenido multimedia o advertencias para ayudar a los usuarios.</li><li>Cada línea de las instrucciones debe corresponder a un paso que el usuario deba realizar.</li><li>No asumas conocimientos del usuario. Por ejemplo, si el usuario debe presionar `Enter` en un paso, incluye esa instrucción como parte del mismo.</li><li>Utiliza corchetes angulares (`>`) para desglosar pasos complejos o combinar pasos simples para acciones secuenciales. Por ejemplo: *1. En el Admin VTEX, accede a _Storefront > Site Editor_*.</li><li>Mantén la coherencia en el tiempo verbal a lo largo de las instrucciones utilizando verbos en imperativo. Por ejemplo: *1. Haz clic en Archivo > New > Documento*.</li></ol>|
| **Título de los pasos** | En los títulos de los pasos del tutorial, comienza con un verbo en infinitivo para describir acciones, como 'Agregar un muelle' o 'Configurar tu entorno'.

Esto indica de forma clara el propósito de cada paso y mantiene la coherencia con el tono didáctico del tutorial. Expresa que el usuario realizará la acción descrita.|

## Plantillas de tutoriales

<details>
<summary><b>Plantilla 1</b></summary>

```md
# [Título del tutorial]

[Proporciona una breve descripción del tutorial, incluyendo las habilidades o conocimientos que el usuario adquirirá al finalizarlo.]

A continuación, se presenta una descripción general de las partes:

<Flex>

<WhatsNextCard
título="Paso 1. título"
descripción="Proporciona una breve descripción del paso."
linkTo="https://developers.vtex.com/docs/guides"
linkTitle="Ver más"
/>

<WhatsNextCard
título="Paso 2. título"
descripción="Proporciona una breve descripción del paso."
linkTo="https://developers.vtex.com/docs/guides"
linkTitle="Ver más"
/>

<WhatsNextCard
título="Paso 3. título"
descripción="Proporciona una breve descripción del paso."
linkTo="https://developers.vtex.com/docs/guides"
linkTitle="Ver más"
/>

...

## Antes de comenzar

[Enumera todos los requisitos previos que el usuario debe cumplir o completar antes de seguir los pasos de la guía.]
 
</Flex>
```

</details>
<details>
<summary><b>Plantilla 2</b></summary>

```md
# [Título del tutorial]

[Proporciona una breve descripción del tutorial, incluyendo las habilidades o conocimientos que el usuario adquirirá al finalizarlo.]

A continuación, se presenta una descripción general de las partes:

- [Paso 1. Título](https://developers.vtex.com/docs/add-the-step-slug-here)
- [Paso 2. Título](https://developers.vtex.com/docs/add-the-step-slug-here)
- [Paso 3.](https://developers.vtex.com/docs/add-the-step-slug-here)
...

## Antes de comenzar

[Enumera todos los requisitos previos necesarios que el usuario debe tener o completar antes de seguir los pasos de la guía.]
 
</Flex>
```

</details>

## Ejemplos de tutoriales

- [Getting started: Storefront apps](https://www.google.com/url?q=https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developing-storefront-apps-using-react-and-vtex-io&sa=D&source=docs&ust=1736199224966224&usg=AOvVaw0BptDzlbA0vq4Xi6GkqX1E)
- [Getting started: Pixel apps](https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developnativeintegrationswithpixelapps)
- [Getting started: FastStore](https://developers.vtex.com/docs/guides/faststore/getting-started-overview)
- [Getting started: Store Framework](https://developers.vtex.com/docs/guides/getting-started-3)
