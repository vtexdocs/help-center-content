---
title: Enviar atributos de SKU a Amazon
id: 3KTNjHRtVmWWe02my8suEo
status: DRAFT
createdAt: 2018-06-21T17:09:05.337Z
updatedAt: 2020-05-25T18:47:37.861Z
publishedAt: 
firstPublishedAt: 2018-06-21T19:25:22.139Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: enviar-atributos-de-sku-a-amazon
legacySlug: enviar-atributos-de-sku-a-amazon
subcategory: 
---

Hechas las configuraciones iniciales para la [integración con Amazon](/es/tutorial/integrar-con-amazon), ahora vamos a enviar los datos de los atributos de los SKUs al marketplace. El envío de esta información será realizado por __upload de la planilla de mapeo__.

La asignación sólo se realizará una vez para cada categoría. De esta forma, incluso ya habiendo hecho un mapeo, cuando nuevos productos sean creados, ellos serán integrados directamente. Se hará un __de/para__ de los atributos registrados en VTEX con los atributos aceptados por Amazon.

1. Cree una __planilla de upload__ en el formato `.xlsx` y rellene el título de las columnas según la imagen abajo.![Modelo Atributos Amazon](https://images.ctfassets.net/alneenqid6w5/1oqAPItLPaMc8gYICU6oWa/7d54955d0c179a2fbcb036e62ede9dc3/Modelo_Atributos_Amazon.png)

2. Rellene los campos de la hoja de asignación de acuerdo con las indicaciones siguientes:

<div class="alert alert-danger">
Nota: si <strong>ningún</strong> de los atributos de su categoría es requerido obligatoriamente por Amazon, entonces <strong>no es necesario hacer el mapeo</strong>. Basta con reindexar sus productos para que sean enviados directamente por la integración.
</div>

1. __ID categoría:__ es el ID de categoría en VTEX. Usted puede encontrarlo en el lado del nombre de cada categoría al expandir el árbol.
2. __VariationTheme:__ es la manera que el SKU varía en el mercado. Usted debe llenar con los Variations Themes que se adecuan a la categoría de sus productos y respectivos PTDs.
> Ex: si el producto varía por tamaño y color, se debe usar "SizeColor".
> Ex2: si el producto varía sólo por color, se debe usar "Color".
3. __Type:__ es el tipo de especificación que se utilizará y se debe rellenar con uno de los valores siguientes:
  - `Variation`: tipo destinado a diferenciar los SKUs (así como [campos de SKUs en VTEX](/es/tutorial/criando-campo-de-sku)). Si la columna `VariationTheme` se ha rellenado, entonces la columna `Type` siempre se rellenará como Variation.
  - `Information`: tipo destinado a complementar información sobre los productos (así como [campos de productos en VTEX](/es/tutorial/criando-um-campo-de-produto). Si la columna `VariationTheme` se ha dejado en blanco, entonces la columna` Type` siempre se rellenará como Información.
- __VtexEspc:__ es el nombre del [campo SKU](/es/tutorial/criando-campo-de-sku) usado en su tienda en VTEX.
> Ex: campos como "Tamaño", "Color", "Material"...
- __AmzEspec:__ es el nombre de la especificación acceptada por Amazon que corresponde al campo SKU que usted utilizó en el campo `VtexEspec`. 
> EX: si utilizó "Tamaño" en la columna `VtexEspc`, entonces el nombre correspondiente en Amazon sería" Size ".
- __VtexValue:__ nombre del valor utilizado en el campo SKU en VTEX.
> Ex: para una especificación de "Color", los valores de este campo serían los propios colores utilizados en la tienda, como "Rojo", "Negro", "Blanco" ...
- __AmazValue:__ en esta columna debe rellenar los valores aceptados por Amazon correspondientes a los valores utilizados en el campo `VtexValue`. 
> Ex: si has completado el `AmzEspec` con ColorMap y el `VtexValue` con 'Rojo', ver que el valor aceptado por Amazon es 'Red'.

Planilla de ejemplo usando la categoría Clothing & Accessories:

![Amazon Mapeamento ](https://images.ctfassets.net/alneenqid6w5/5p6RrFb0T6my86cCOmW0c8/a5e93f7732929c9d9ea4cc0dd855b9a1/Amazon_Mapeamento.png)

<div class="alert alert-danger">
Recuerde que estos valores deben estar de acuerdo con los valores acceptados por Amazon. Consulte los términos permitidos y haga el De/Para entre lo que está registrado en su campo SKU en VTEX y los valores acceptador por Amazon.
</div>

Después de rellenar la hoja de trabajo, acceda a __Integraciones__ en el menú Admin:

1. Haga clic en __Configuración__.
2. Busque por la caja de Amazon y haga clic en el __botón de engranaje__.
3. A continuación, haga clic en __Upload de Mapeo__.
4. Seleccione la planilla con los datos y haga clic en __Enviar Archivo__.
