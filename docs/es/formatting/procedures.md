---
title: 'Procedimientos'
id: formatting0004-es
status: PUBLISHED
createdAt: 2025-12-27T15:00:00.388Z
publishedAt: 2025-12-27T15:00:00.388Z
firstPublishedAt: 2025-12-27T15:00:00.388Z
contentType: trackArticle
productTeam: Education
slugES: procedimientos
locale: es
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugES: procedimientos
---

Los procedimientos presentan una secuencia de pasos para realizar una tarea.

## Frases introductorias

Comienza a describir cada procedimiento con una oración introductoria que aporte el contexto que no figura en el título de la sección. Estas oraciones ayudan a entender el propósito, el alcance y los prerrequisitos antes de empezar.

> ⚠️ Si el título explica el procedimiento y no se necesita contexto adicional, no es necesario incluir una introducción.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| Antes de comenzar, comprueba si tienes acceso al dashboard como administrador. | En esta sección se explica cómo configurar el dashboard. |
| Sigue las instrucciones a continuación para corregir errores en el flujo de pago. | A continuación, presentamos los pasos del flujo de pago. |
| Instala VTEX IO CLI para gestionar y desarrollar el proyecto de tu tienda. | Esta sección explica cómo instalar CLI. |

No utilices **paso a paso** como sustantivo al hablar de las etapas que debe seguir el usuario. Opta por **pasos** o **instrucciones**.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| Para crear una redirección sigue las instrucciones a continuación. Para crear una redirección sigue los pasos a continuación. | Para crear una redirección, sigue el paso a paso a continuación. Para crear una redirección sigue el paso a paso a continuación. |

Al explicar un procedimiento, usa el imperativo para dar instrucciones claras y ayudar al usuario a identificar las acciones. Evita comenzar con una frase incompleta que dependa de pasos posteriores para poder entenderse.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| Para personalizar los botones sigue las instrucciones a continuación: | Para personalizar los botones: |
| Antes de implementarla, verifica que tu aplicación haya sido publicada y probada. | Pasos para implementación: |

La oración puede terminar con dos puntos o un punto.

* Utiliza dos puntos si la oración introductoria precede inmediatamente al procedimiento.  
* Utiliza punto si hay más contenido (por ejemplo, un callout o una captura de pantalla) entre la introducción y el procedimiento.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| Para gestionar las categorías de productos de tu tienda sigue los pasos a continuación: Accede al Admin VTEX. … | Pasos para gestionar las categorías de productos de tu tienda. Primero, accede al Admin VTEX. … | Instalar las dependencias del proyecto:|
| ⚠️ Asegúrate de que tu proyecto cumpla todos los prerrequisitos descritos en la sección [Antes de comenzar].| ⚠️ Debes verificar que tu proyecto tenga todos los prerrequisitos descritos en la sección [Antes de comenzar].|
| 1. Abre el terminal y ejecuta `yarn install`. | Ejecuta `yarn install`.|
| 2. ... | 2. ...|

## Contenido

Al inicio de los procedimientos, utiliza **Antes de empezar** como título. 

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| Antes de empezar | Antes de comenzar |

Cada fila de la guía debe corresponder a una acción que el usuario debe realizar.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| 1. Agrega un nombre a la categoría. | 1. Agrega el nombre de la categoría, haz clic en "Guardar" y regresa a la página **Categorías**. |
| 2. Haz clic en "Guardar". |  |
| 3. Regresa a la página **Categorías**. |  |

Explica los conceptos por separado (por ejemplo, en los callouts o en la introducción) y evita utilizar pasos exclusivamente para explicar conceptos.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| Los workspaces de desarrollo permiten vincular, publicar e instalar aplicaciones. Para crear un workspace de desarrollo sigue los pasos a continuación: | 1. Los workspaces de desarrollo permiten vincular, publicar e instalar aplicaciones. Para crear un workspaces de desarrollo, inicia sesión en tu cuenta VTEX.| 
| 1. Inicia sesión en la cuenta VTEX deseada. | 2. Crea un workspace de desarrollo ejecutando el comando `vtex use {workspaceName}`.
| 2. Crea un workspace de desarrollo ejecutando el comando `vtex use {workspaceName}`. |  |

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| 1. Abre el terminal. | 1. Abre un terminal. |
| Inicia un servidor de desarrollo local para alojar tu sitio web ejecutando `faststore dev`. | 2. Inicia un servidor de desarrollo local para alojar tu sitio web ejecutando `faststore dev`.|
| ℹ️ El comando `faststore dev`, parte de la [CLI de FastStore](https://developers.vtex.com/docs/guides/faststore/getting-started-3-faststore-cli), actualiza el proyecto de la tienda con el paquete `@faststore/core`.| 3. El comando `faststore dev`, parte de la [CLI de FastStore](https://developers.vtex.com/docs/guides/faststore/getting-started-3-faststore-cli), actualiza su proyecto de tienda con el paquete `@faststore/core`. |

Incluye todas las acciones necesarias. No omitas ningún paso ni asumas que el usuario ya conoce un paso específico.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| 1. Ingresa **install**. Presiona `Enter` para iniciar la instalación. | 1. Ingresa **install**. *(Supone que el usuario sabe presionar* `*Enter*`*)* |

Si alguno de los pasos es demasiado extenso, divídelo en varios. También puedes combinar acciones pequeñas en un solo paso usando corchetes angulares (>) para seleccionar menús secuenciales.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| 1. Accede a **Catálogo > Atributos personalizados de producto > Tipos de servicio**. | 1. Accede a **Catálogo**. 
|  | 2. Ve a **Atributos personalizados de producto**. |
|  | 3. Luego a **Tipos de servicio**. |

Mantén el tiempo verbal consistente a lo largo del tutorial.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| 1. Configura el stock. | 1. Configuración de stock. |
| 2. Ingresa un nombre. | 2. Ingresa un nombre. |
| 3. Haz clic en `Guardar`. | 3. Haz clic en `Guardar`. |

Indica el propósito de la acción y dónde debe realizarse.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| Para crear un nuevo documento en el software, haz clic en **Archivo > Nuevo > Documento**. | Haz clic en **Archivo > Nuevo > Documento** para crear un nuevo documento en el software. |

Si hay más de una forma de completar una tarea, haz lo siguiente:

* Escribe el procedimiento que sea accesible para todos los usuarios.  
* Si es necesario documentar cada paso, deja claro al lector que esta es una forma alternativa de realizar la misma tarea.  
* Utiliza encabezados, páginas o pestañas separadas para diferenciar el procedimiento alternativo.

<details>

<summary><b>✅ Correcto</b></summary>

```md  
## Enviar archivos

1. Haz clic en **Enviar**.  
2. Selecciona el archivo.  
3. …

### Método alternativo: Cargar archivos (CLI)

1. Abre el terminal.  
2. Ejecuta `upload --file=<path>`.  
3. …
```

</details>

<details>

<summary><b>❌ Incorrecto</b></summary>

```md

## Enviar archivos

1. Haz clic en Cargar o ejecuta `upload --file=<path>` en el terminal.  
//(Mezcla de métodos sin diferenciación clara.)
```

</details>

Para un paso opcional, agrega (*Opcional*) al principio de la oración.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| (Opcional) String arbitraria. | String arbitraria. |

Evite usar lenguaje direccional que haga referencia al diseño visual (p. ej., "en la parte superior", "inferior", "derecha") para guiar al lector. Este tipo de lenguaje no es eficaz para la accesibilidad ni la localización, ya que depende de la visión y de un layout de pantalla específico. En su lugar, utiliza texto descriptivo que nombre los elementos de la interfaz de usuario por su funcionalidad o título.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| 1. Haz clic en el menú ☰. | 1. Haz clic en el botón con tres líneas. |
| 2. En el siguiente diagrama, ... | 2. En el diagrama de abajo, ... |

> ⚠️ Al mencionar elementos de la interfaz del Admin que contengan texto, transcribe el texto tal como aparece en la interfaz, conservando las mayúsculas y minúsculas. Para más información, consulta [Interfaces de usuario](https://contentguide.vtex.com/es/docs/formatting/computer-interfaces).

### Pasos secundarios en procedimientos numerados

Los pasos secundarios dividen las instrucciones complejas en acciones secuenciales más pequeñas que deben completarse en un orden específico. Utilizan etiquetas jerárquicas (letras, números romanos) para mostrar las dependencias entre las acciones, guiando a los usuarios a través de los pasos dependientes y manteniendo la claridad.

#### Etiquetas y puntuación

* Pasos principales: números (`1.`, `2.`).  
* Pasos secundarios: letras minúsculas (`a.`, `b.`).  
* Subpasos: números romanos en minúscula (`i.`, `ii.`)  
* Si un paso introduce pasos secundarios, termínalo con dos puntos (`:`).  
* Si es un paso independiente, utiliza un punto (`.`).

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| 1. Para agregar una instancia de VM sigue los pasos a continuación: | 1. Para agregar una instancia de VM, haz lo siguiente: |
| a. Haz clic en "Crear instancia". |  a. Haz clic en "Crear instancia". |
| b. Ingresa un *Nombre* para la instancia de VM y luego: | b. Ingresa un *Nombre* para la instancia de VM y luego: |
| i. Selecciona la *Región* en la que deseas implementar la instancia de VM. | Selecciona la *Región* en la que deseas implementar la instancia de VM. |
| ii. Selecciona el *Tipo de máquina*. | Selecciona el *Tipo de máquina*. |
| c. Haz clic en "Crear". | Haz clic en "Crear". |
| 2. Para conectarte a la instancia de VM mediante SSH, haz clic en `SSH`. | 2. Para conectarte a la instancia de VM mediante SSH, haz clic en `SSH`.  |

#### Acciones no secuenciales

Para ítems independientes que no requieren una secuencia específica, utiliza una lista con viñetas.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| 1. Ve a **Configuración**. | 1.  Ve a **Configuración**. |
| 2. Completa los campos de la pantalla listados a continuación según sea necesario. | 2. Completa los campos de la pantalla listados a continuación según sea necesario. |
| • … | a. … |
| • … | b. … |
| • … | c. … |
| 3. Haz clic en Guardar. | 3. Haz clic en Guardar. |

### Formato

Al describir un procedimiento es fundamental mantener una numeración continua. Esto significa que los pasos deben fluir sin interrupciones (p. ej., 1., 2., 3., etc.).

Para garantizar la claridad y mantener la fluidez, comprueba siempre que el contenido insertado (como capturas de pantalla, diagramas o notas) no interrumpa la progresión lógica de los pasos. Insertar estos elementos incorrectamente puede reiniciar accidentalmente la lista numerada, dando la impresión de que un nuevo procedimiento comienza en "1", aunque la intención era continuar con la misma secuencia de instrucciones.

| ✅ Correcto | ❌ Incorrecto |
| :---- | :---- |
| 1. Accede al Admin VTEX. | Accede al Admin VTEX. |
| 2. Ve a **Catálogo > Productos y SKUs**. | 2. Ve a **Catálogo > Productos y SKUs**. |
| `Captura de pantalla de la interfaz de Productos y SKUs.` | `Captura de pantalla de la interfaz de Productos y SKUs.` |
| 3. Haz clic en `Agregar producto`. | 1. Haz clic en `Agregar producto`. |
