---
title: 'Mejorar la performance de imágenes de productos'
id: tutorials_4833
status: PUBLISHED
createdAt: 2017-04-27T21:50:00.291Z
updatedAt: 2019-12-31T15:28:58.754Z
publishedAt: 2019-12-31T15:28:58.754Z
firstPublishedAt: 2017-04-27T23:11:16.876Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_65
slugEN: improving-the-performance-of-product-images
legacySlug: mejorando-la-performance-de-imagenes-de-productos
locale: es
subcategoryId: pwxWmUu7T222QyuGogs68
---

Las imágenes de productos muchas veces son el principal enemigo de la performance de su tienda..

El objetivo de este artículo es mostrar cómo usar VTEX Img para cargar las imágenes  de manera más eficiente para así  mejorar el performance del sitio.

**VTEX Img**, es un servicio que entrega estas imágenes al FRONT de la tienda, existe una API que, si es bien utilizada, puede traer grandes beneficios a sus clientes.

La URL de una imagen de un SKU tiene el siguiente formato:
`http://[ACCOUNT_NAME].vteximg.com.br/arquivos/ids/[ID](-[LARGO]-[ALTO])/([NOMBRE_DE_LA_IMAGEM])`

Los campos escritos en negrito son valores que cambian de acuerdo a su tienda, SKU e imagen (o sea, el nombre de la tienda (Account name de la tienda, el ID, el largo, la altura y el nombre de la imagen)

Los campos en paréntesis son parámetros opciones (o sea, largo, altura y nombre de la imagen)

## Ejemplo

Nuestro catálogo envía las imágenes de los SKUs en el siguiente formato:
`http://instoreqa.vteximg.com.br/arquivos/ids/155602/robo.jpg`

En este URL, tenemos:

- **[ACCOUNT\_NAME]**: instoreqa
- **[ID]**: 155602
- **[LARGO]**: não especificada
- **[ALTO]**: não especificada
- **[NOMBRE\_DE\_LA\_IMAGEN]**: robo.jpg

El nombre de la imagen es un parámetro opcional. Por esto, una misma imagen puede ser abierta en la siguiente URL :
`http://instoreqa.vteximg.com.br/arquivos/ids/155602/`

## Mejorando la performance

La manera más eficaz de mejorar la performance de las imágenes es hacer que ellas tengan el tamaño que será realmente utilizado en el sitio. Por ejemplo:

Una tienda que quiera exhibir en una página una imagen de un producto con tamaño de 50&#215;50. Imagine que la tienda escriba en su código de html la siguiente URL:
`http://instoreqa.vteximg.com.br/arquivos/ids/155602/robo.jpg`

En este caso, el navegador descargara la imagen con tamaño completo, o sea una misma imagine en alta definición, que fue enviada a cargar en el catálogo.

Esto significa que los datos que están siendo traficados están siendo más que necesarios, lo que va en perjuicio de la performance de su tienda.

### ¿Qué hacer?

Podemos solicitar a VTEX Img que envíe una imagen que un tamaño especifico.

En nuestro ejemplo anterior, basta escribir de la siguiente manera la URL de la imagen en código HTML:
`http://instoreqa.vteximg.com.br/arquivos/ids/155602**-50-50**/`

De esta forma, el VTEX Img entregara la imagen con un tamaño de 50&#215;50. Esto realizara la carga de su site mucho más rápido.

![tamanhosImg](//images.contentful.com/alneenqid6w5/p4aDcgaE4SmyYkCwaW0CI/189307d29c86dae17beabde67780d907/tamanhosImg.png)
_Entregar imágenes un tamaño mayor que el de exhibición perjudica la performance de su tienda._

## Imagenes rectangulares

Al redimensionar imágenes rectangulares, **VTEX Img** mantiene su proporción, o sea, estas son redimensionadas sin distorsión.

En tiendas de ropa, por ejemplo, es muy común que las imágenes tengan un formato retrato, en que la altura es mayor de que el largo, como 300x400. Si la tienda necesitara de esta imagen cuadrada (en formato de 50x50, por ejemplo) esta acabara distorcionada.

**VTEX Img** impide distorsiones completando el espacio vacío con un fondo blanco.
