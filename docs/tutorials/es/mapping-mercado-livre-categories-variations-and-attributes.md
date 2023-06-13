---
title: Mapeo de categorías, variaciones y atributos de Mercado Libre
id: 4xNFUZZmboCSUVdLCFo6eA
status: DRAFT
createdAt: 2021-09-01T20:12:18.080Z
updatedAt: 2022-01-14T18:32:27.882Z
publishedAt: 
firstPublishedAt: 2021-09-02T19:30:32.642Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: mapeo-de-categorias-variaciones-y-atributos-de-mercado-libre
legacySlug: mapeo-de-categorias-variaciones-y-atributos-de-mercado-libre
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

<div class="alert alert-info">
Si va a enviar sus productos a Mercado Libre por primera vez, le recomendamos que utilice la <a href="https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA">nueva documentación de Mapeo de categorías.</a>
</div>

Después de realizar la [configuración inicial para la integración con Mercado Libre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/15NZiQstCET8zyQUIa7nhw), es necesario categorizar las variaciones y los atributos de los productos y enviarlos al marketplace. El envío de esta información se realiza mediante la **carga de la plantilla de mapeo**, que hace la correspondencia entre las categorías, variaciones y atributos de su tienda con los estándares adoptados por Mercado Libre.

Esta funcionalidad agiliza el proceso de catalogación de sus productos en Mercado Libre, permitiendo que estén disponibles para la venta en los marketplaces en menos tiempo. 

La herramienta de Mercado Libre identifica la categoría de los productos durante la carga. Si usted [configuró una tasa de confiabilidad](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4YvYdgICMosaEgISOYogsi#configuracoes-basicas) inferior al 80%, sus productos tal vez no sean integrados. Recuerde que estos también deben tener un stock para que su integración sea posible.

## Entendiendo la plantilla de mapeo

Antes de comenzar el mapeo, se debe descargar la [Plantilla de mapeo de Mercado Libre](https://assets.ctfassets.net/alneenqid6w5/qyDp7OSL5YAGaGKagWiK0/07900f41a952a460185e18f9db190eb1/Planilha_de_Mapeamento_do_Mercado_Livre.xlsx) en formato `.xlsx.`, el objetivo de esta plantilla es indicar a la integración la correspondencia entre los estándares adoptados por su tienda y por Mercado Libre. 

El mapeo solo se realizará una vez para cada categoría. Esto significa que después de hacer el mapeo una vez, los nuevos productos que se creen serán integrados directamente en la categoría correspondiente, con sus respectivas variaciones y atributos.

La misma plantilla se utilizará para realizar tres etapas macro: categorización, variaciones y atributos. El rellenado en las etapas de variaciones y atributos es similar, la diferencia es que mientras las variaciones son especificaciones de SKUs de su tienda, los atributos son especificaciones de productos.

Siga las indicaciones a continuación para rellenar los campos de la plantilla de mapeo:

## Categorización

La primera etapa para rellenar la plantilla de mapeo se divide en dos columnas denominadas CategoryID y MeliCategoryID, que tienen la finalidad de hacer la correspondencia entre las categorías de su tienda y las de Mercado Libre:

1. __CategoryId:__ corresponde al ID de la categoría en su tienda VTEX.
2. __MeliCategoryId:__ equivale al ID de la categoría en Mercado Libre.

Para descubrir el **CategoryId** del producto en su tienda, acceda en el Admin a *Productos > Catálogo > Categorías*. 

Descubra el **MeliCategoryID** accediendo a esta  [API de Mercado Libre](https://api.mercadolibre.com/sites/MLB/categories) en Brasil para consultar las categorías y sus respectivos IDs. Dentro de las categorías. usted encontrará las subcategorías. Utilice los IDs de estas últimas para rellenar su plantilla.

Para consultar los IDs de las categorías en otros países, acceda a las APIs de Mercado Libre que correspondan:

<br/>- [Argentina](https://api.mercadolibre.com/sites/MLA/categories)
<br/>- [México](https://api.mercadolibre.com/sites/MLM/categories)
<br/>- [Colombia](https://api.mercadolibre.com/sites/MCO/categories)
<br/>- [Chile](https://api.mercadolibre.com/sites/MLC/categories)

### Ejemplo

Usted tiene el siguiente árbol en VTEX:

- Ropas (ID=2) > Camisetas (ID=3)

Y en Mercado Libre tiene este árbol:

- Zapatos, Ropas y Carteras (ID=MLB1430) > Camisetas (ID=MLB31447)

Por lo tanto, su plantilla se rellenará de esta manera: 

| CategoryId | MeliCategoryId |
| ---------- | ---------- |
| 3 | MLB31447 |

## Variaciones

La segunda etapa para rellenar la plantilla de mapeo es hacer la correspondencia entre las especificaciones de SKUs de su tienda y su equivalente ‘variaciones’ en el marketplace. Ambos son nombres de las características usadas para diferenciar las variantes de un mismo producto. En Mercado Libre, existen dos tipos de variaciones: las obligatorias y las personalizables. 

### Variaciones obligatorias

Las variaciones obligatorias son atributos indispensables para el mapeo de determinadas categorías del producto. Si se trata de un `calzado`, `ropa`, `bolsa`, `cinturón` o `electrodoméstico`, será necesario mapear las variaciones obligatorias. 

El nombre de estas debe estar exactamente de acuerdo con los valores aceptados por el marketplace. [Descargue aquí](//assets.ctfassets.net/alneenqid6w5/5nLnBUVonS8qgWqqeck4MQ/28d9a8e7ce08b03d243b43bb6b759c5d/Planilha_de_Atributos_do_Mercado_Livre.xlsx) la __Plantilla de Variaciones de Mercado Libre__ para verificar los valores aceptados de acuerdo con cada tipo de producto.

### Variaciones personalizables 

Son variaciones adicionales que se pueden crear de acuerdo con su necesidad. Solo se puede tener una variación personalizable por producto. El nombre de la variación y sus valores son de libre elección.  

<div class="alert alert-info">Mercado Libre no permite usar precios diferentes para cada variación de un anuncio, los precios de los SKUs tienen que ser rigurosamente los mismos. Para modificar el precio de su producto, acceda en el Admin a Productos > Precios > Lista de precios.</div>

<div class="alert alert-info">En caso de que el SKU no tenga una especificación (color, por ejemplo), será necesario <a href="https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin">registrarla en VTEX</a> antes de completar el proceso de integración. Se recomienda agregar el atributo que falta como una especificación de producto. </div>

## Atributos

La tercera etapa para rellenar la plantilla de mapeo incluye hacer la correspondencia entre las especificaciones de los productos de su tienda y los atributos de Mercado Libre. Ambos son nombres de las características usadas para describir un producto. 

Se puede complementar la información de los productos utilizando atributos (equivalentes a las especificaciones de productos en VTEX). Para eso, se tendrán que mapear los atributos de acuerdo con los valores aceptados por Mercado Libre. 

Para descubrir las especificaciones de su producto en Mercado Libre, copie la URL que está abajo en su navegador y reemplace la variable `{CategoryId}` por el ID de la categoría de Mercado Libre que está mapeando para descargar la plantilla de los atributos y sus respectivos valores aceptados. 

http://portal.vtexcommercestable.com.br/api/meliintegration/category/{CategoryId}/attributes

<div class="alert alert-info">Si está mapeando la categoría “Camisetas” (MLB31447), usted notará que se pueden registrar varios atributos, entre ellos “Género” que solo acepta los valores “Masculino”, “Femenino”, “Niñas”, “Niños”, “Bebés”, “Sin género”. Cualquier valor que sea diferente no será aceptado por Mercado Libre. También tome en cuenta que se pueden registrar atributos con valores que tienen <strong>Texto libre</strong>, es decir, en los que se puede ingresar cualquier valor para los atributos.</div>

## Ingresando las variaciones y atributos en la plantilla de mapeo 

Para rellenar las variaciones y los atributos en la plantilla, utilizaremos las columnas Type, VtexEspc, MeliEspec, VtexValue y MeliValue. Cada fila de la plantilla se podrá rellenar con una variación de SKU o atributo del producto.

### Type

Ingrese el valor `Variation` si se trata de una variación. En caso de que sea un atributo, utilice el valor `Information`.

### VtexEspc

Rellene con el nombre del [campo de SKU](https://help.vtex.com/pt/tutorial/criando-campo-de-sku) si se trata de una variación, o con el nombre del [campo de producto](https://help.vtex.com/pt/tutorial/criando-um-campo-de-produto) si es un atributo.

`Ej.:`

1. Variación: campos como "Tamaño", "Color", "Material", entre otros.
2. Atributo: campos como "Género", "Capacidad total", "Memoria interna", entre otros.

### MeliEspc

Rellene con el nombre de la especificación en la Plantilla de variaciones de Mercado Libre, que corresponde al campo de SKU que usó en el campo `VtexEspc`. O ingrese el nombre de la especificación que corresponde al campo de producto que usted utilizó en ese campo, tomando como referencia la plantilla de atributos.

`Ej.:`

1. Si utilizó "Colores" en la columna `VtexEspc` como variación, entonces el nombre correspondiente en Mercado Libre será "Color". 
2. En caso de que haya usado "Capacidad" en la columna `VtexEspc` como atributo, entonces deberá usar "Capacidad total" en `MeliEspc`. 

### VtexValue

Si es una variación, rellene con el nombre del valor usado en el campo de SKU en VTEX. Si se trata de un atributo, rellene con el nombre del valor usado en el campo de producto en VTEX. 

`Ej.:`

1. Para una especificación de "Color", los valores de este campo serían los colores usados en la tienda, como "Rojo", "Negro", "Blanco", etc. 
2. Para una especificación de "Memoria interna", la plantilla acepta los valores de "Unidad de Medida". Por lo tanto, rellene este campo con los valores de su tienda especificando siempre la unidad de medida, como "32GB", "64GB", "128GB", entre otras.

### MeliValue

Si se trata de una variación, ingrese los valores que corresponden a los usados en el campo `VtexValue`. En la Plantilla de variaciones de Mercado Libre, acceda a la pestaña de su país y verifique los valores aceptados para cada especificación que rellenó en la columna `MeliEspc`. 

Si es un atributo, rellene con el nombre de los valores que corresponden a los que usó en el campo `VtexEspc`, tomando como referencia la plantilla de atributos. En caso de que el campo sea del tipo Texto libre, usted deberá escribir exactamente lo que quiere que aparezca como atributo en Mercado Libre. 

`Ej.:`

1. Usted rellenó el campo `MeliEspc` con Tamaño y el `VtexValue` con "Pequeño", podrá observar que el valor aceptado por Mercado Libre es "P". 
2. Si usted rellenó `VtexValue` con "32GB", entonces también tendrá que usar "32GB" en `MeliValue`.

#### Ejemplos

Usted pretende vender una camiseta; para eso necesitará mapear las variaciones obligatorias. Las variaciones obligatorias para la categoría Ropa son Tamaño y Color, un atributo del producto podría ser Genero.  Por lo tanto, la plantilla se rellenará así:

| CategoryId | MeliCategoryId | Type | VtexEspc | MeliEspc | VtexValue | MeliValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 3 | MLB31447 | Variation | Colores | Color | Gelo | Branco |
| 3 | MLB31447 | Variation | Colores | Color | Rojo | Rojo |
| 3 | MLB31447 | Variation | Tamaño | Tamaño | P | P |
| 3 | MLB31447 | Variation | Tamaño | Tamaño | G | G |

Usted vende celulares que varían de acuerdo con el tamaño de la memoria. En Mercado Libre el anuncio agruparía todos los tamaños:

| CategoryId | MeliCategoryId | Type | VtexEspc | MeliEspc | VtexValue | MeliValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 28 | MLB1055 | Variation | Voltagem | Voltagem | 110V | 110V |
| 28 | MLB1055 | Variation | Voltagem | Voltagem | 220V | 220V |
| 28 | MLB1055 | Information | Memoria |  Memoria interna | 32GB | 32GB |
| 28 | MLB1055 | Information | Memoria | Memoria interna | 64GB | 64GB |

## Cargando la plantilla

Al concluir las etapas para rellenar la plantilla de mapeo, usted debe seguir los siguientes pasos para cargarla: 

1. Acceda al Admin.
2. En el módulo Marketplace, haga clic en Integraciones.
3. Seleccione la opción Configuración.
4. En la integración Mercado Libre, haga clic en el engranaje<img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />
5. Elija la opción **Carga de mapeo**.
6. Seleccione la opción **Elegir un archivo**.
7. Ahora, seleccione la plantilla de mapeo de categorías, atributos y variaciones de Mercado Libre.
8. Haga clic en **Subir archivo**.

Después de finalizar la carga, la integración envía a Mercado Libre todos los productos de las categorías utilizadas en la plantilla de forma automática. 

<div class="alert alert-warning">
Si después de cargar una plantilla usted desea cargar otra, debe saber que la nueva plantilla reemplazará a la antigua. Por eso, recomendamos que la nueva plantilla que cargue contenga los datos antiguos y nuevos. </div>
