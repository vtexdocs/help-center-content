---
title: 'Agregar o editar SKUs'
id: 4ryZ6J45kwn3jDiQBxGiiN
status: PUBLISHED
createdAt: 2024-08-29T19:24:29.305Z
updatedAt: 2025-04-15T15:17:18.932Z
publishedAt: 2025-04-15T15:17:18.932Z
firstPublishedAt: 2024-08-29T19:28:11.129Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: adding-or-editing-skus
locale: es
legacySlug: agregar-skus-beta
subcategoryId: pwxWmUu7T222QyuGogs68
---

La página [Productos y SKUs](/es/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By) permite a los retailers registrar productos y variaciones nuevas o gestionar los existentes. Este artículo describe cómo agregar o editar SKUs. Para más información sobre productos, consulta el artículo [Agregar o editar productos](/es/tutorial/agregar-o-editar-productos--29IkdEu6GofCFlltsZh2H8).

Todo nuevo SKU debe vincularse a un producto. Para registrar un nuevo SKU después de haber creado un producto, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o ingresa **Productos y SKUs** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en la fila del producto deseado.
3. Haz clic en la pestaña **SKUs**.
4. Haz clic en el ícono + para **Abrir las opciones de agregar SKUs**.
5. Haz clic en `Agregar nuevo SKU`.

  <div class="alert alert-info">
Puedes crear un nuevo SKU a partir de otro SKU existente en el producto en la pestaña SKUs, haciendo clic en <b>ícono de menú del SKU > Duplicar > Guardar</b>.
</div>

6. Rellena los campos del formulario de registro de SKU, según se describe en las secciones:

    * [Nombre y status](#nombre-y-status)
    * [Especificaciones](#especificaciones)
    * [Contenido multimedia](#contenido-multimedia)
    * [Identificadores](#identificadores)
    * [Logística](#logistica)
    * [Estrategia comercial](#estrategia-comercial)
    * [Personalizaciones](#personalizaciones)
    * [Cross-sells y up-sells](#cross-sells-y-up-sells)

    > Los campos obligatorios están marcados con un asterisco (*).

7. Haz clic en `Guardar`.

<div class="alert alert-warning">
Puedes inactivar un SKU después de crearlo, pero no puedes eliminarlo si es el único SKU del producto. La plataforma solo permite eliminar SKUs y productos en masa mediante <a href="https://help.vtex.com/es/tutorial/manutencao-de-base-full-cleanup--34P9LGs7BCIQK6acQom802">Mantenimiento de base de datos (Full Cleanup)</a>.
</div>

Después de crear el SKU, puedes monitorear su disponibilidad para la venta a través del ícono de color. Al pasar el mouse sobre el ícono, se muestra un texto que explica el significado del color, según se ilustra en la siguiente imagen. Más información en [Productos y SKUs](/es/tutorial/productos-y-skus--2ig7TmROlirWirZjFWZ3By).

![adding_or_editting_sku_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Products%20and%20SKUs/agregar-o-editar-skus_1.png)

Además, después de registrar el SKU puedes agregarlo a un [kit](/es/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28) haciendo clic en el ícono de menú en la fila del SKU deseado y seleccionando la opción `Crear kit`. Ten en cuenta que transformar un SKU en un kit es permanente y no se puede deshacer.

En las siguientes secciones se describen los campos del formulario, incluyendo detalles sobre cómo rellenarlos.

<div class="alert alert-warning">
  <p>Hay un límite de 50 SKU por producto. Para solicitar que se amplíe el límite, ponte en contacto con <a href= "https://support.vtex.com/hc/es-419/requests">nuestro Soporte</a>.</p>
</div>

## Nombre y status

La primera parte incluye el nombre y activación del SKU:

* **Nombre*:** ingresa el nombre del SKU, es decir, la identificación de la variante del producto. El nombre tiene un límite de 200 caracteres. Ejemplo: para el producto "Refrigerador", el nombre del SKU puede ser "436 L".
* **Activo:** para activar el SKU que estás creando, habilita el botón de alternancia <i class="fas fa-toggle-on" aria-hidden="true"></i>. Para mantenerlo inactivo, deja el botón de alternancia deshabilitado <i class="fas fa-toggle-off" aria-hidden="true"></i>. Si el SKU no está disponible para la venta después de activarlo, consulta el artículo [¿Por qué el producto no aparece en el sitio web?](/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).

## Especificaciones

Las especificaciones son características configuradas en el SKU que el cliente puede seleccionar para agregar al carrito. Por ejemplo, la capacidad de un electrodoméstico es una especificación, y el cliente puede elegir entre 436 L o 517 L.

Los campos de la sección **Especificaciones** pueden variar dependiendo del producto al que el SKU está asociado.

<div class="alert alert-warning">
Cuando existe una especificación de SKU, es obligatorio rellenarla. Para más información, consulta el artículo <a href="https://help.vtex.com/es/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119">Registrar especificaciones o campos de SKU</a>.
</div>

<div class="alert alert-danger">
No es posible crear un SKU con la misma combinación de valores que ya existen en otro SKU. Por ejemplo, si la combinación de SKU A es negro y talla S, no sería posible crear el SKU B con negro y talla S, ya que se generaría un conflicto. Sin embargo, si el color del SKU A fuera negro y el del SKU B fuera azul, incluso manteniendo la talla P para ambos, no habría conflicto, ya que las combinaciones serían diferentes. Si lo deseas, puedes desactivar un SKU, pero la plataforma no te permite eliminar un solo SKU.
</div>

## Contenido multimedia

En esta sección puedes añadir imágenes o videos al SKU.

### Imágenes

Al hacer clic en `Agregar` en el campo **Imágenes**, se muestran dos opciones para cargar imágenes y fotos:

* `Seleccionar archivos`: agrega imágenes almacenadas localmente en tu dispositivo.
* `Agregar links`: agrega imágenes con una URL.

La siguiente tabla presenta los límites y formatos aceptados para las imágenes:

| **Límites y formatos** | **Valores aceptados** |
| :--- | :--- |
| Tamaño máximo en píxeles | 5000 x 5000 píxeles |
| Tamaño máximo en MB | 4 MB |
| Extensiones de archivo permitidas | <p><ul><li>JPG</li><li>PNG</li><li>GIF</li><li>ICO</li><li>SVG</li><li>WEBP</li></ul></p> |

Después cargar una imagen, puedes editar los metadatos siguiendo los pasos a continuación:

1. Pasa el mouse sobre la imagen para ver los íconos existentes.
2. Haz clic en el ícono de menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
3. Haz clic en `Editar metadatos`.
4. En la ventana modal, rellena la información de los metadatos.
5. Haz clic en `Aplicar`.

Además de agregar nuevas imágenes a un SKU, puedes replicar las imágenes de un SKU en otros SKUs relacionados con el mismo producto. siguiendo los pasos a continuación:

1. En la esquina superior derecha de la sección **Imágenes**, haz clic en el ícono de copiar <i class="far fa-clone" aria-hidden="true"></i>.
2. En la ventana modal **Escoge los SKUs en que deseas replicar los elementos multimedia**, haz clic en los SKUs a los que deseas agregar las imágenes copiadas.
3. Haz clic en `Aplicar`.

<div class="alert alert-warning">
Uno de los requisitos para activar un SKU es que tenga al menos una imagen. Para más información sobre las condiciones para mostrar un ítem en el storefront, consulta el artículo <a href="https://help.vtex.com/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382">¿Por qué el producto no aparece en el sitio web?</a>.
</div>

### Videos

Al hacer clic en `+ Agregar` en el campo **Videos** se abre la ventana **Agrega los links del contenido multimedia de los SKUs**. Para cargar un video, ingresa su URL y luego haz clic en `Aplicar`.

El SKU puede tener hasta 6 videos y la **única forma de agregarlos es utilizando links de las plataformas Vimeo o YouTube**. Los formatos admitidos son:

**Vimeo**

- `https://vimeo.com/{VIDEO_ID}`

**YouTube**

- `https://youtu.be/{VIDEO_ID}`
- `https://www.youtube.com/watch?v={VIDEO_ID}`
- `https://www.youtube.com/embed/{VIDEO_ID}`
- `https://www.youtube.com/v/{VIDEO_ID}`

<div class="alert alert-warning">Sustituye <code>{VIDEO_ID}</code> con el ID del video que deseas mostrar.</div>

## Identificadores

Los campos de esta sección se refieren a los códigos que identifican el SKU:

* **Código de referencia:** un código de referencia único para ayudar en la organización del catálogo.
* **EAN/UPC:** el EAN (European Article Number) y el UPC (Universal Product Code) son códigos de identificación internacionales y corresponden al código de barras del ítem. Cada SKU solo puede estar asociado a uno de ellos. Se pueden diferenciar por el número de caracteres alfanuméricos, que son 13 para el EAN y 12 para el UPC.
* **Código del fabricante:** código proporcionado por el fabricante para identificar el SKU. Si un SKU tiene un código específico, este campo debe rellenarse.

## Logística

Los campos del SKU relacionados con [logística](/es/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP) son los siguientes:

### Modal (opcional)

[Modal](/es/tutorial/como-funciona-o-modal--tutorials_125) es una configuración para transportadoras que realizan entregas especializadas, ya que algunos productos requieren condiciones de transportación especiales, tales como refrigeración o capacidad de transportar cargas químicas. 

Si se crearon opciones de modal para el SKU, se mostrarán en una lista desplegable que te permite escoger una sola opción. Para más información, consulta el artículo [Configurar modal para transportadoras](/es/tutorial/configurar-modal-para-transportadoras--3jhLqxuPhuiq24UoykCcqy).

### Peso y dimensiones de envío

Los siguientes campos se utilizan para [calcular el factor volumétrico de peso](/es/tutorial/como-o-peso-cubado-e-calculado--tutorials_128) del SKU y están relacionados con el paquete que se utilizará para transportarlo:

* **Peso del paquete:** valor absoluto del peso.
* **Anchura del paquete:** valor absoluto de la anchura.
* **Altura del paquete:** valor absoluto de la altura.
* **Longitud del paquete:** valor absoluto de la longitud.

<div class="alert alert-info">
Los campos deben llenarse solo con números sin unidades de medida, ya que el sistema considera automáticamente las unidades registradas en el catálogo de la tienda.
</div>

### Peso y dimensiones reales

Los siguientes campos corresponden a las dimensiones reales del producto que también se muestran en la página de detalles del producto (PDP) y deben rellenarse solo con números:

* **Peso real:** valor absoluto del peso del producto, sin incluir empaques.
* **Anchura real:** valor absoluto de la anchura del producto, sin incluir empaques.
* **Altura real:** valor absoluto de la altura del producto, sin incluir empaques.
* **Longitud real:** valor absoluto de la longitud del producto, sin incluir empaques.

### Medidas de stock

Los siguientes campos definen cómo se organizará y contabilizará el SKU en el [almacén](/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb):

* **Unidad de medida:** identificación de la unidad de medida utilizada para contabilizar los ítems en stock.
* **Multiplicador de unidad:** valor numérico que se utiliza para multiplicar el SKU y definir la cantidad en el carrito. Por ejemplo, un multiplicador de 5 significa que cada SKU representa 5 ítems en el carrito y solo permite compras en múltiplos de 5 como, por ejemplo, 10 o 15 ítems. Los valores de fracciones se pueden separar con punto o coma. Por ejemplo, medio kilogramo se puede indicar como 0.5 o 0,5.

## Estrategia comercial

Esta sección incluye campos relacionados con las estrategias de venta de la tienda:

* **Condición comercial:** define las promociones o [condiciones de pago](/es/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q) que deben aplicarse al SKU. Si no deseas indicar una condición comercial, selecciona la opción `Predeterminado`. Para saber más, consulta el artículo [Registrar condición comercial](/es/tutorial/como-cadastrar-condicao-comercial--tutorials_445).
* **Fecha de preventa:** asigna una fecha de preventa al SKU. La fecha de preventa es la fecha prevista en que el ítem llegará a las tiendas y estará disponible para la venta. Para configurarla, debes tomar en cuenta la fecha de release del ítem y el [cálculo de envío](/es/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) a los clientes.
* **Generar crédito en tarjeta de regalo:** cuando esta opción está activada, indica que la venta del SKU al cliente debe generar un crédito en forma [tarjeta de regalo](/es/tutorial/gift-card--tutorials_995).
* **Valor de fidelidad:** crédito que el cliente recibe al completar la compra de 1 unidad de determinado SKU. Por ejemplo, si rellenas este campo con un valor de 1.00 USD, los clientes que compren este SKU obtendrán un crédito de 1.00 USD en la tienda para compras futuras.

## Personalizaciones

Puedes configurar los SKUs para ofrecer opciones personalizadas a los clientes. Por ejemplo, el cliente puede elegir agregar un nombre a una camiseta. Las personalizaciones pueden ser de dos tipos: [anexos](/es/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) o [servicios](/es/tutorial/o-que-e-um-servico).

Para vincular una personalización al SKU, haz clic en el ícono de agregar +, selecciona una opción y completa los pasos correspondientes: 

* `Anexos`: al hacer clic en esta opción, se abre la ventana modal **Selecciona los anexos que deseas vincular**. Selecciona los anexos deseados y haz clic en `Aplicar`.
* `Servicios`: al hacer clic en esta opción, se abre la ventana modal **Nuevo servicio**. Rellena los campos y activa el botón de alternancia <i class="fas fa-toggle-on" aria-hidden="true"></i> **Activo**. Para guardar la información, haz clic en `Aplicar`.

<div class="alert alert-warning">
Las opciones de anexos y servicios disponibles para el SKU deben configurarse previamente. Para más información, consulta los artículos <a href="https://help.vtex.com/es/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU">Registrar un anexo</a> y <a href="https://help.vtex.com/es/tutorial/criar-servico-para-um-sku--tutorials_252">Crear servicio para un SKU</a>.
</div>

## Cross-sells y up-sells

Esta sección permite configurar opciones de [cross-selling](/es/tutorial/configurar-producto-similar-sugerencias-accesorios-y-genericos--tutorials_280#que-es-cross-selling) y/o [up-selling](/es/tutorial/configurar-producto-similar-sugerencias-accesorios-y-genericos--tutorials_280#que-es-up-selling) para el nuevo SKU que se reflejarán en la vitrina de la tienda y en la experiencia de navegación de los clientes.

A continuación se describen los tipos de ítems que puedes asociar al SKU que estás registrando:

* **Accesorios:** ítems sugeridos como opciones que complementan la venta.
* **Sugerencias:** ítems que se muestran como sugerencias de compra.
* **Productos similares:** ítems ofrecidos como alternativa o simplemente como un producto similar.
* **Mostrar juntos:** ítems recomendados para comprar juntos.

Para configurar alguna de estas opciones, sigue los pasos a continuación:

1. En la sección, **Cross-sells y up-sells**, haz clic en el ícono +.
2. Haz clic en una de las opciones:

    * Accesorios
    * Sugerencias
    * Productos similares
    * Mostrar juntos

3. En el campo de texto de la ventana modal que se abre, ingresa el ID de SKU del ítem deseado.
4. Haz clic en `Aplicar`.

<div class="alert alert-info">
Para más información, consulta el artículo <a href="https://help.vtex.com/es/tutorial/configurar-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280">Consultar producto similar, sugerencias, accesorios y genéricos</a>.
</div>

## Más información

* [Productos y SKUs](/es/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By)
* [Agregar o editar productos](/es/tutorial/agregar-o-editar-productos--29IkdEu6GofCFlltsZh2H8)
* [Catálogo: información general](/es/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe)
* [Catálogo](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ) (serie de artículos)
