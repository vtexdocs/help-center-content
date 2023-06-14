---
title: 'Envío de productos a Facebook'
id: 41qzoa7TWIYTyIhABHdgzI
status: PUBLISHED
createdAt: 2021-02-08T19:45:07.202Z
updatedAt: 2021-07-09T22:04:10.786Z
publishedAt: 2021-07-09T22:04:10.786Z
firstPublishedAt: 2021-02-08T20:10:14.152Z
contentType: trackArticle
productTeam: Channels
slug: envio-de-productos-a-facebook
trackId: 7h8KvIC4DbRRc8VlyJ8PFc
trackSlugES: integracion-de-facebook
---

Después de que se concluye la etapa de autenticación de su cuenta, el envío de productos a Facebook es un proceso automático. Los datos enviados son:

- Nombre de visualización del producto
- Imagen
- Categoría
- Precio
- Moneda
- Descripción
- Marca
- Estado del producto
- Disponibilidad

La actualización es automática, se realiza cada vez que se modifica uno de los datos. Es importante destacar que el valor «moneda» se define en la política comercial, y que la «disponibilidad» solo indica si hay productos disponibles o no, porque no hay un control del _stock_.  Para más información, lea [Cómo funciona la disponibilidad de inventario en la página de producto](https://help.vtex.com/es/tutorial/como-funciona-a-disponibilidade-de-estoque-na-pagina-de-produto--gyVfuG5dTyUyGA02iiU0y).

Si desea enviar los atributos de sus productos a Facebook, hay una etapa adicional que debe realizar. Los atributos son [especificaciones](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) de los productos, es decir, son propiedades que se pueden registrar en los productos o los SKU.

La etapa adicional es la realización de un mapeo de las especificaciones de los productos. El mapeo permite la correspondencia entre los atributos registrados en su tienda VTEX y los estándares adoptados por Facebook.

<div class="alert alert-warning">
El mapeo de atributos por plantilla es opcional; sin embargo, si decide realizarlo debe efectuar todos los pasos que se describen en este artículo. De lo contrario, pueden producirse errores en la integración.
</div>

## Envío de atributos a Facebook

Si desea enviar los atributos de sus productos a Facebook, debe realizar las siguientes etapas:

1. [Descargar la plantilla de mapeo](#descarga-de-la-plantilla-de-mapeo).
2. [Rellenar la plantilla de mapeo](#rellenado-de-la-plantilla-de-mapeo).
3. [Cargar de la plantilla de mapeo](#carga-de-la-plantilla-de-mapeo).

### Descarga de la plantilla de mapeo

El mapeo por plantilla es lo que le permite establecer la correspondencia entre los atributos de sus productos en la plataforma VTEX y los estándares utilizados por Facebook.

El primer paso para realizar el mapeo es descargar el archivo [Plantilla de mapeo Facebook.xlsx](https://drive.google.com/uc?export=download&id=1XD8AO0VEzLXxmb8yjjkFQCNce1IfufkN).

### Rellenado de la plantilla de mapeo

El segundo paso para el mapeo es completar los datos en el archivo descargado. La plantilla consta de una sola pestaña, en la que se puede identificar cinco columnas.

<div class="alert alert-info">
La plantilla de mapeo de Facebook es case sensitive, es decir, distingue el uso de letras mayúsculas y minúsculas.
</div>

- **Primera columna, ID Category:** se debe completar con el número de identificación de la categoría del producto en la plataforma VTEX. Puede encontrar el ID de una categoría en el Admin, en el módulo _Productos > Catálogo > Categorías_. El ID de la categoría es el número que se encuentra a la izquierda del nombre de la categoría.
- **Segunda columna, VTEX attribute name:** debe contener el nombre del atributo registrado en VTEX.
> Ejemplo: el campo referente a la tonalidad de los productos en su tienda VTEX está registrado como _Color_. Por tanto, debe completar la columna VTEX attribute name con la palabra _Color_.

- **Tercera columna, Facebook attribute name:** se debe completar con el término utilizado por Facebook que corresponde a cada atributo. 
> Ejemplo: la correspondencia de Facebook para el atributo _Color_ es _Color_.

  <div class="alert alert-info">
Para conocer los nombres de los atributos y los valores de referencia, consulte la documentación de Facebook <a href="https://developers.facebook.com/docs/commerce-platform/catalog/fields?locale=es_LA#universal-basic-attributes">Universal Basic Attributes</a>. Si no hay ninguna correspondencia para un atributo o valor, complete la columna Facebook attribute name con el mismo término utilizado en VTEX.
</div>

- **Cuarta columna, VTEX attribute value:** se debe completar con los valores de sus atributos en VTEX.
> Ejemplo: supongamos que para el atributo _Género_ existe el valor _Femenino_ en su tienda VTEX. Por lo tanto, la columna VTEX attribute value se debe completar con la palabra _Femenino_. 

- **Quinta columna, Facebook attribute value:** debe contener los términos utilizados en los valores de atributos en Facebook.
> Ejemplo: para el valor _Femenino_, el término correspondiente en Facebook es _female_.

Vea un ejemplo de plantilla llenada:

| **CategoryId** | **VTEX attribute name** | **Facebook attribute name** | **VTEX attribute value** | **Facebook attribute value** | 
| ---------- | ---------- | ---------- | ---------- | ---------- | 
| 23 | Color | Color | Amarillo | Yellow |
| 23 | Tamaño | Size | Pequeño | P |
| 23 | Tamaño | Size | Grande | G |
| 23 | Género | Gender | Femenino | female |

### Carga de la plantilla de mapeo

El tercer y último paso para finalizar el mapeo es cargar la plantilla llenada.  Esta acción se realiza en el Admin, a través de los siguientes pasos:

1. Acceda al Admin.
2. En el módulo _MARKETPLACE_, haga clic en `Integracione`.
3. Seleccione la opción `Configuración`.
4. En la tarjeta de Facebook, haga clic en <i class="fas fa-cog"></i>
5. Elija la opción `Carga de mapeo`.
6. Haga clic en `Elegir un archivo`.
7. Seleccione la plantilla de mapeo llenada.
8. Haga clic en `Subir archivo`.

Después de realizar los anteriores pasos, habrá finalizado el mapeo de categorías y atributos de sus productos.  El tiempo para que esto se refleje en Facebook dependerá de la extensión de su catálogo.
