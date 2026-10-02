---
title: 'Agente de Colecciones'
createdAt: 2026-10-02T00:00:00.000Z
updatedAt: 2026-10-02T00:00:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: collections-agent
locale: es
---

> ℹ️ El **Agente de Colecciones** está en fase beta, lo que significa que estamos trabajando para mejorarlo. Actualmente la disponibilidad es solo para cuentas seleccionadas. Si tienes alguna duda, ponte en contacto con [nuestro Soporte](https://supporticket.vtex.com/support).

El **Agente de Colecciones** es un agente de inteligencia artificial que permite crear y gestionar colecciones y surtidos mediante una experiencia conversacional en el Admin VTEX. Este artículo explica el funcionamiento del agente y presenta las acciones en colecciones y surtidos que puedes realizar de forma conversacional.

La [colección](https://help.vtex.com/es/docs/tutorials/tipos-de-coleccion) es el agrupamiento de productos, mientras que el surtido es la entidad que agrupa colecciones en escenarios que utilizan [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es). Con el **Agente de Colecciones**, proporcionas una instrucción (prompt) en lenguaje natural mediante una interfaz conversacional y el agente la convierte en una colección o surtido.

> ⚠️ Actualmente, el surtido es un recurso exclusivo para tiendas que utilizan [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es).

## Diferencia entre el agente y la interfaz legada

Además de permitir hacer todo lo que se hacía en la [interfaz legada](https://help.vtex.com/es/docs/tutorials/creando-colecciones-de-productos), el **Agente de Colecciones** ofrece otras ventajas:

- Una experiencia conversacional intuitiva.
- La posibilidad de crear y gestionar surtidos
- La opción de gestionar colecciones usando como criterio especificaciones de producto y especificaciones de SKU.

> ℹ️ El **Agente de Colecciones** no permite cambiar directamente el orden de los productos vía chat. Para reordenarlos es necesario cargar al agente una plantilla actualizada con los ítems en el orden deseado y en formato `.xls` o `.xlsx`. Esta opción de ordenación solo está disponible para colecciones estáticas.

## Avisos de la fase beta

El **Agente de Colecciones** está en beta y durante este periodo la funcionalidad tiene las siguientes características:

- **Alcance:** incluye, para colecciones y sortimentos, las acciones de creación, edición, importación/exportación en masa y vista del plan creado por el agente antes de la confirmación del usuario.
- **Surtido restringido:** la creación y el uso de surtidos están disponibles solo para tiendas que utilizan **B2B Buyer Portal**.
- **Una colección o surtido por vez:** el agente opera sobre una única colección o surtido en cada operación de vista, creación o edición.
- **Tiempo de propagación:** una colección no es visible de inmediato después de crearla o editarla. El agente informa que la indexación está en curso y que la propagación de datos tarda aproximadamente una hora hasta que la colección esté disponible para consulta.
- **Verificación de pertenencia después de la creación:** confirmar si un producto específico forma parte de una colección es confiable solo después de la creación y la indexación. Las verificaciones de pertenencia antes de la creación están fuera del alcance por ahora.

> ℹ️ Las instrucciones presentadas sobre colecciones y surtidos son solo ejemplos y no la única forma de interactuar con el agente.

## Prerrequisitos

Además de usar [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es), como el **Agente de Colecciones** actúa sobre colecciones y surtidos, es necesario que la tienda tenga registradas [marcas](https://help.vtex.com/es/docs/tutorials/que-es-una-marca), [categorías](https://help.vtex.com/es/docs/tutorials/registrar-categoria), [productos](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-productos) y [SKUs](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-skus), pues las reglas de creación se aplican a estos ítems.

## Acceder al agente

En el Admin VTEX, accede a **Catálogo > Agente de Colecciones** o ingresa **Agente de Colecciones** en la barra de búsqueda en la parte superior de la página. La interfaz se compone de un chat y una sugerencia de instrucción (prompt), como se muestra en la siguiente imagen:

![collections_agent_interface_es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/catálogo-beta/collections_agent_interface_es.png)

Al hacer clic en la sugerencia `Crea una colección`, o ingresar otra instrucción en el chat, el agente guía la interacción hasta completar la acción deseada.

## Reglas de funcionamiento

El **Agente de Colecciones** opera a partir de las siguientes reglas:

- **Creación estática o dinámica:** crea y edita colecciones de forma estática (lista explícita de IDs de producto, de SKUs o códigos de referencia) o dinámica (criterios como marcas, categorías, especificaciones de producto y especificaciones de SKU).
- **Reglas de inclusión y de exclusión:** combina y excluye colecciones mediante reglas de inclusión y de exclusión. Las reglas de exclusión siempre prevalecen sobre las de inclusión.
- **Combinaciones complejas Y/O:** admite combinaciones lógicas complejas entre criterios y reglas. No necesitas montar las subcolecciones manualmente: el agente presenta la estructura lógica final para aprobación.
- **Propagación automática:** una misma colección puede formar parte de varios surtidos. Al editar una colección compartida, la modificación se propaga automáticamente a todos los surtidos que la incluyen. Este es el principal valor del modelo de bloques reutilizables.
- **Ajuste incremental:** el agente agrega a lo que ya se definió en lugar de reemplazarlo, y entiende modificadores relativos como "deshaz esto" o "cambia X por Y".
- **Desambiguación conversacional:** cuando una instrucción es vaga o corresponde a más de una entidad del catálogo, el agente se detiene y presenta opciones en lugar de adivinar.
- **Confirmación antes de cambios de alto impacto:** antes de modificaciones relevantes (por ejemplo, editar una colección compartida por muchos surtidos), el agente muestra el alcance del cambio y solicita la confirmación del usuario.

## Realizar acciones en colecciones

> ⚠️ Los ejemplos de instrucciones presentados a continuación son solo con fines ilustrativos y no son la única forma en que el agente puede ejecutar una acción.

Puedes realizar las siguientes acciones:

- Crear una colección usando lenguaje natural
  - Revisar el plan de la colección
  - Aprobar el plan de la colección
- Crear una colección mediante la importación de una plantilla
- Verificar las relaciones en colecciones
- Editar y refinar una colección
- Buscar, listar y filtrar colecciones

### Crear una colección usando lenguaje natural

Para crear una colección usando lenguaje natural ingresa en el chat las instrucciones (prompt) para crear la colección con los productos que deseas reunir. Algunos ejemplos de instrucciones son:

- "Crea una colección con todos los productos de la marca Infotech."
- "Crea una colección con los productos de las categorías Electrónicos e Informática, excepto los de la marca Infotech."
- "Crea una colección con todos los productos de la categoría Verano que tienen la especificación Color igual a Azul."

Puedes usar una instrucción más completa, como: "crea una colección con los productos de las categorías Electrónicos e Informática que tengan la especificación Color igual a Negro, excepto los de la marca Infotech."

Después de ingresar las instrucciones en el chat, presiona `Enter` o haz clic en el botón de flecha hacia arriba en el chat. El **Agente de Colecciones** interpretará la solicitud y montará la colección con los criterios y las reglas correspondientes. Al terminar el procesamiento, el agente puede solicitar información adicional.

**Ejemplo:** el agente recibió el comando "Monta una colección con todos los productos de la categoría de ID 6". Después del procesamiento puede solicitar un nombre y una descripción para la colección y, una vez proporcionados, el agente presenta el plan de la colección.

#### Revisar el plan de la colección

El plan de la colección presentado por el agente es un resumen que debes revisar antes de confirmar la operación. Este plan incluye información como:

- Nombre de la colección que se está creando
- Descripción de la colección
- [Regla de creación](#reglas-de-funcionamiento) que se utilizará
- Comportamiento futuro para la inclusión de productos en la colección

#### Aprobar el plan de la colección

Después de revisar el plan confirma la operación para que el agente aplique los cambios. El agente finaliza el procesamiento e informa, por ejemplo:

- El status de la operación (éxito o error).
- El ID de la nueva colección.
- El nombre de la colección (en caso de que el usuario no lo haya proporcionado).

> ❗ La propagación de datos puede tardar cerca de una hora en reflejarse en el Admin VTEX, pero en la navegación se refleja en unos minutos.

### Crear una colección mediante importación de plantilla

Puedes montar una nueva colección mediante la importación de datos a través de una plantilla en formato `.csv` o `.xlsx`. La plantilla debe contener una lista de ítems con las siguientes columnas de identificación:

| Columna de la plantilla | Descripción |
| :--- | :--- |
| Product ID | Código numérico identificador del producto. |
| Product Reference ID | Código de referencia del producto. |
| SKU ID | Código numérico identificador del SKU. |
| SKU Reference ID | Código de referencia del SKU. |

Para importar la plantilla sigue los pasos a continuación:

1. Haz clic en el ícono de clip en el chat del **Agente de Colecciones** para adjuntar la plantilla.
2. Selecciona desde tu dispositivo la plantilla en formato `.csv` o `.xlsx`.
3. Haz clic en `Abrir`.

Sigue los mismos pasos de la creación de colección mediante lenguaje natural para [revisar](#revisar-el-plan-de-la-coleccion) y [aprobar el plan de la colección](#aprobar-el-plan-de-la-coleccion). El plan se actualiza con cada nueva instrucción y tú apruebas la estructura final sin necesidad de configurar la lógica interna de las subcolecciones. Las instrucciones posibles son:

- **Agregar** ítems a la lista existente.
- **Remover** ítems de la lista existente.
- **Reemplazar** toda la lista.

> ⚠️ La importación nunca se interrumpe por fallos en filas individuales: el agente procesa toda la plantilla siguiendo estas reglas:
>
> - Las filas con IDs encontrados se importan y se registran.
> - Las filas con IDs no encontrados se ignoran, se registran y se muestran para que puedas corregirlas (por ejemplo, "Fila 5: SKU '362' no encontrado").
> - Los IDs duplicados se ignoran en las filas siguientes.

### Verificar las relaciones en colecciones

El **Agente de Colecciones** puede usarse para consultar las relaciones de pertenencia o ausencia de productos en una colección. Puedes, por ejemplo, preguntar por chat por qué se incluyó o excluyó un producto de una colección, y el agente explicará el criterio o la regla que llevó a esa decisión. Ejemplo de instrucción: "¿Por qué el producto de ID 74 está en la colección Moda playa?".

### Editar y refinar una colección

En una conversación continua, el **Agente de Colecciones** agrega las nuevas instrucciones al borrador actual en lugar de reemplazarlo. Es decir, no necesitas empezar desde cero para ajustar una colección. El agente entiende modificadores relativos como "deshaz esto" o "cambia la marca X por la marca Y", y el plan de la colección se actualiza en cada interacción.

El refinamiento de colecciones a partir de nuevas instrucciones aplica tanto para una colección que se está montando como para una ya creada.

> ℹ️ El **Agente de Colecciones** verifica el impacto de la edición. Es decir, antes de aplicar cambios de alto impacto, como editar una colección compartida por varios surtidos, el agente muestra qué colecciones y surtidos se verán afectados y pide tu confirmación.

### Buscar, listar y filtrar colecciones

Para localizar y gestionar la colección correcta puedes buscarla por **nombre** o **ID** y ordenar o filtrar la lista por atributos comunes, como fecha de creación, nombre e ID. Al abrir una colección puedes ver su definición.

## Realizar acciones en surtidos

Puedes realizar las siguientes acciones:

- Crear un surtido con lenguaje natural
- Ver el resultado
- Verificar las relaciones en surtidos
- Aprobar el plan del surtido
- Editar y refinar un surtido
- Buscar, listar y filtrar surtidos

> ⚠️ Actualmente, el surtido es un recurso exclusivo para tiendas que utilizan **B2B Buyer Portal**.

### Crear un surtido con lenguaje natural

Un surtido se compone a partir de colecciones, con reglas de inclusión y de exclusión. Describe en la conversación el conjunto final de productos que deseas y el agente monta el surtido correspondiente. Ejemplos de instrucciones:

- "Crea un surtido que incluya las colecciones Electrónicos y Accesorios, pero que excluya la colección Productos Apple."
- "Usa las colecciones 2 y 3, pero excluye la colección 4."

### Ver el resultado

Antes de confirmar, el agente presenta el plan del surtido con un resumen de las colecciones incluidas y excluidas y la lógica aplicada. El plan se actualiza con cada instrucción y el agente actúa sobre un surtido por vez.

### Verificar las relaciones en surtidos

El **Agente de Colecciones** permite consultar las relaciones entre colecciones y surtidos de tres formas distintas:

- Listando todas las colecciones relacionadas con un surtido, agrupadas en incluidas y excluidas.
- Listando todos los surtidos que usan una determinada colección, agrupados en incluidos y excluidos.
- Preguntando el motivo por el que una colección está o no en un surtido, y el agente explica qué criterio o regla llevó a esa decisión. Ejemplo de instrucción: "¿Por qué la colección de ID 463 está en el surtido Filial Norte?".

### Aprobar el plan del surtido

Después de revisar el plan, confirma la operación para que el agente aplique los cambios en el surtido.

### Editar y refinar un surtido

Al igual que con las colecciones, puedes ajustar un surtido sin empezar desde cero. En una conversación continua, el agente agrega las nuevas instrucciones al borrador actual en lugar de reemplazarlo y entiende comandos como "deshaz esto" o "cambia la colección X por la colección Y". Puedes refinar tanto surtidos ya creados como el surtido en construcción.

> ❗ Como una colección puede formar parte de varios surtidos, editarla puede afectarlos a todos. Antes de cambios de alto impacto, el agente muestra qué colecciones y surtidos se verán afectados y pide confirmación antes de ejecutar la acción.

### Buscar, listar y filtrar surtidos

Para localizar y gestionar el surtido deseado, puedes buscarlo por nombre o ID, y ordenar o filtrar la lista por atributos comunes:

- Fecha de creación del surtido
- Nombre del surtido
- ID del surtido

## Incluir todos los productos del catálogo en una colección

Actualmente no existe una forma automática de incluir todos los productos del catálogo en una colección de modo que permanezca sincronizada. Puedes incluir todos los productos usando las reglas dinámicas existentes, pero cada una tiene sus limitaciones:

- **Por categorías:** al seleccionar todas las categorías del catálogo, como todo producto debe tener una categoría, todos los productos quedan incluidos.
- **Por marcas:** al seleccionar todas las marcas, como todo producto debe tener una marca, todos los productos quedan incluidos.
- **Por especificación de producto:** al seleccionar una especificación con el mismo valor presente en todos los productos. La especificación debe estar activa y ser de tipo combo (selección múltiple) o radio (selección única), ya que el tipo texto no es compatible.

Aspectos a tener en cuenta en todas estas opciones:

- Las categorías, marcas o especificaciones **inactivas** se incluyen en la colección, pero sus productos no se muestran en la navegación mientras estén inactivos. Si se activan después, los productos pasan a mostrarse (regla de [Intelligent Search](https://help.vtex.com/es/docs/tutorials/intelligent-search-vision-general)).
- Si una categoría, marca o especificación se **desactiva** después de crear la colección, sus productos permanecen en la colección, pero dejan de mostrarse en la navegación (regla de **Intelligent Search**).
- Las categorías y marcas **creadas después** de la colección no se incluyen automáticamente.
- Una categoría, marca o especificación **removida** del catálogo después de crear la colección retira sus productos de la colección.
- En el caso de la especificación de producto, los productos sin la especificación, con el valor en blanco o con un valor diferente quedan excluidos.

Ninguna de estas opciones mantiene la colección sincronizada con el catálogo: los productos que forman "todos los productos" hoy pueden cambiar con el tiempo, y lo que se cree después no se agrega automáticamente. Independientemente de la opción elegida, se genera un plan con la estructura propuesta para su aprobación antes de aplicar cualquier modificación.
