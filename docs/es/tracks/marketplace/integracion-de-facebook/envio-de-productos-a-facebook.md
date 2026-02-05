---
title: 'Envío de productos a Facebook'
id: 41qzoa7TWIYTyIhABHdgzI
status: PUBLISHED
createdAt: 2021-02-08T19:45:07.202Z
updatedAt: 2025-09-04T15:36:46.974Z
publishedAt: 2025-09-04T15:36:46.974Z
firstPublishedAt: 2021-02-08T20:10:14.152Z
contentType: trackArticle
productTeam: Channels
slugEN: sending-products-to-facebook
locale: es
trackId: 7h8KvIC4DbRRc8VlyJ8PFc
trackSlugEN: integracion-de-facebook
order: 5
---

Después de completar la autenticación de tu cuenta, los productos se envían a Facebook automáticamente. Los datos enviados son:

- Nombre de visualización del producto
- Imagen
- Categoría
- Precio
- Moneda
- Descripción
- Marca
- Status del producto
- Disponibilidad

La actualización es automática y se realiza cada vez que se modifica uno de los datos. Es importante destacar que el valor _moneda_ se define en la política comercial, y que la _disponibilidad_ no refleja el stock real: solo determina si los productos están disponibles para la venta. Para más información, consulta [Cómo funciona la disponibilidad de inventario en la página de producto](/es/docs/tutorials/como-funciona-la-disponibilidad-de-inventario-en-la-pagina-de-producto).

Si deseas enviar los atributos de tus productos a Facebook, debes completar un paso adicional. Los atributos son [especificaciones](/es/docs/tracks/especificaciones-definicion-de-concepto) de los productos, es decir, son propiedades que se pueden registrar en los productos o los SKUs.

El paso adicional es mapear las especificaciones de los productos. El mapeo permite la correspondencia entre los atributos registrados en tu tienda VTEX y los estándares de Facebook.

> ⚠️ El mapeo de atributos por plantilla es opcional; sin embargo, si decides realizarlo debes completar todos los pasos que se describen en este artículo. De lo contrario, pueden producirse errores en la integración.

## Enviar atributos a Facebook

Si deseas enviar los atributos de tus productos a Facebook, debes completar los siguientes pasos:

1. [Descargar la plantilla de mapeo](#descarga-de-la-plantilla-de-mapeo).
2. [Llenar la plantilla de mapeo](#llenar-la-plantilla-de-mapeo).
3. [Cargar la plantilla de mapeo](#cargar-la-plantilla-de-mapeo).

### Descargar la plantilla de mapeo

El mapeo por plantilla es lo que le permite establecer la correspondencia entre los atributos de tus productos en la plataforma VTEX y los estándares utilizados por Facebook.

El primer paso para realizar el mapeo es descargar el archivo [Plantilla de mapeo Facebook.xlsx](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/es/tracks/marketplace/integracion-de-facebook/Planilha_de_Mapeamento_Facebook.xlsx).

### Llenar la plantilla de mapeo

El segundo paso para el mapeo es completar los datos en el archivo descargado. La plantilla consta de una sola pestaña, en la que se puede identificar cinco columnas.

> ℹ️ La plantilla de mapeo de Facebook distingue entre mayúsculas y minúsculas.

- **Primera columna, ID Category:** se debe completar con el número de identificación de la categoría del producto en la plataforma VTEX. Puedes encontrar el ID de una categoría en el Admin, en el módulo _Productos > Catálogo > Categorías_. El ID de la categoría es el número que se encuentra a la izquierda del nombre de la categoría.
- **Segunda columna, VTEX attribute name:** debe contener el nombre del atributo registrado en VTEX.
Ejemplo: si el campo referente a la tonalidad de los productos en tu tienda VTEX está registrado como Clr, debes completar la columna _VTEX attribute name_ con la palabra _Clr_.  

- **Tercera columna, Facebook attribute name:** se debe completar con el término utilizado por Facebook que corresponde a cada atributo.
Ejemplo: si la correspondencia de Facebook para el atributo _Clr_ es _Color_.
Para ver los nombres de los atributos y los valores de referencia, consulta la documentación de Facebook [Universal Basic Attributes](https://developers.facebook.com/docs/commerce-platform/catalog/fields?locale=es_LA#universal-basic-attributes). Si no hay ninguna correspondencia para un atributo o valor, llena la columna Facebook attribute name con el mismo término utilizado en VTEX.

- **Cuarta columna, VTEX attribute value:** se debe completar con los valores de tus atributos en VTEX.
Ejemplo: si para el atributo _Género_ tienes el valor _Femenino_ en tu tienda VTEX, debes completar la columna _VTEX attribute value_ con la palabra _Femenino_.

- **Quinta columna, Facebook attribute value:** debe contener los términos utilizados en los valores de atributos en Facebook.
> Ejemplo: para el valor _Femenino_, el término correspondiente en Facebook es _female_.

A continuación se muestra una plantilla de ejemplo completada:  

| **CategoryId** | **VTEX attribute name** | **Facebook attribute name** | **VTEX attribute value** | **Facebook attribute value** | 
| ---------- | ---------- | ---------- | ---------- | ---------- | 
| 23 | Color | Color | Amarillo | Yellow |
| 23 | Tamaño | Size | Pequeño | P |
| 23 | Tamaño | Size | Grande | G |
| 23 | Género | Gender | Femenino | female |

### Cargar la plantilla de mapeo

El tercer y último paso para finalizar el mapeo es cargar la plantilla llenada. Esta acción se realiza en el Admin mediante los siguientes pasos:  

1. Accede al Admin.  
2. En el módulo Marketplace, haz clic en Marketplace e integraciones.  
3. Busca Facebook en la barra de búsqueda.  
4. Haz clic en `Editar`.
5. Selecciona la opción Mapeo de categorías.  
6. Haz clic en `Elegir un archivo`.  
7. Selecciona la plantilla de mapeo llenada. 
8. Haz clic en `Cargar archivo`.  

Después de completar los pasos, habrás finalizado el mapeo de categorías y atributos de tus productos. El tiempo que tarda para reflejarse en Facebook depende de la extensión de tu catálogo.

## Utilizar custom labels
Además de la información básica de los productos, puedes enviar etiquetas personalizadas, también conocidas como custom labels, a Facebook Business Manager. Este recurso permite clasificar anuncios utilizando criterios que hayas definido en tu tienda, como campañas promocionales, temporada, márgenes o público objetivo.
Estas etiquetas son útiles para:
Agrupar productos por campaña específica (ejemplo: Black Friday, Envío gratis).
Crear informes por grupos de productos con comportamientos similares.

### Configuración
Debes crear las etiquetas personalizadas en Facebook Business Manager. Después de crearlas, sigue el tutorial [Registrar especificaciones o campos de producto](/es/docs/tutorials/registrar-especificaciones-o-campos-de-producto) para asociarlas a un anuncio específico mediante **especificaciones de productos**.

Cuando crees el nuevo campo de especificación de producto, úsalo para ingresar los siguientes valores:

| **Campo** | **Valor** |
|:---: | :---: |
| Nombre del campo de la especificación | `facebook-labels`|
|Tipo de campo | Radio |

Después de crear el nuevo campo de especificación debes asociar las etiquetas a los anuncios siguiendo las instrucciones a continuación:

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o escribe **Productos y SKUs** en la barra de búsqueda en la parte superior de la página.  
2. En la fila del producto, haz clic en los tres puntos verticales y luego en `Editar producto`. 
3. Accede a la pestaña **Productos**.  
4. Llena el campo `facebook-labels` con los valores deseados separados por punto y coma `;`.  
5. Haz clic en `Guardar`.  

> ⚠️ Un anuncio puede tener un máximo de cinco etiquetas asociadas.

