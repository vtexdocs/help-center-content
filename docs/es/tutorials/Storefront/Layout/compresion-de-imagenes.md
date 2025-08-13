---
title: 'Compresión de imágenes'
id: 4klbgpsPksq44KcwqKeye8
status: PUBLISHED
createdAt: 2017-08-17T22:59:59.002Z
updatedAt: 2024-04-15T14:59:26.688Z
publishedAt: 2024-04-15T14:59:26.688Z
firstPublishedAt: 2017-08-17T23:30:18.772Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: image-compression
legacySlug: como-funciona-la-compactacion-automatica-de-imagenes
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

La compresión de imágenes es un proceso que reduce el tamaño de los archivos de imagen para optimizarlos para la web y garantizar que las imágenes se carguen rápidamente cuando los usuarios navegan por el sitio web.

El objetivo de este proceso es aumentar la velocidad y el desempeño de la tienda, lo que a su vez impacta la experiencia del usuario en[ SEO](https://developers.google.com/search/blog/2010/04/using-site-speed-in-web-search-ranking?hl=es) y tasas de conversión.

Hay dos tipos de compresión de imágenes, que se describen en la siguiente tabla:

| Tipo de compresión | Descripción |
| - | - |
| Compresión con pérdida (lossy) | Reduce el tamaño y la calidad de la imagen reteniendo la información más importante. No mantiene todos los píxeles. |
| Compresión sin pérdida (lossless) | Reescribe el archivo de imagen sin eliminar ninguna información. Aunque mantiene la calidad original, es menos eficaz que la compresión con pérdida a la hora de reducir el archivo. |

En VTEX, los archivos se almacenan en su formato original, pero se comprimen en tiempo real durante la navegación por la tienda.

Realizamos una conversión al formato[ WebP](https://developers.google.com/speed/webp?hl=es-419) siempre que sea más ventajoso, es decir, siempre que el tamaño de la imagen resultante sea menor, independientemente de si el formato es **PNG o **JPG/JPEG.

El uso de WebP puede disminuir el tiempo de carga de páginas entre 1 a 2 segundos, dependiendo del layout. A continuación se describe cómo funciona la optimización de imágenes en cada formato.

> ℹ️ Los navegadores que todavía no son[ compatibles con el formato WebP](https://developers.google.com/speed/webp/faq?hl=es-419#which_web_browsers_natively_support_webp) y los servicios como integraciones y marketplaces siempre reciben imágenes no convertidas, sin importar el formato. Los archivos en formato GIF no se convierten a WebP.

## PNG

Para las imágenes en formato PNG, indicado para colores sólidos, gráficos detallados y para alto contraste, la conversión a WebP se realiza con compresión sin pérdida para evitar una degradación de la calidad notable. Las imágenes WebP sin pérdida pueden ser hasta un 26 % más compactas que las imágenes PNG.

Al mismo tiempo, las imágenes PNG se optimizan utilizando[ pngquant](https://pngquant.org/), manteniendo el formato pero reduciendo el tamaño de la imagen hasta un 70 %.

Por último, VTEX entrega el archivo más compacto de entre el WebP sin pérdida y el PNG optimizado, como se ilustra en el siguiente diagrama.

![png-image-compression-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Layout/compresion-de-imagenes_1.PNG)

## JPG/JPEG

Para imágenes en formato **JPG/JPEG**, indicado para fotos, la conversión a WebP se realiza con compresión con pérdida, lo que puede suponer una pérdida en calidad pero garantiza un tamaño optimizado. Las imágenes WebP con pérdida son de un 25 % a un 34 % más compactas que imágenes similares con índice de calidad[ SSIM](https://ece.uwaterloo.ca/~z70wang/research/ssim/) equivalente.

VTEX entrega al cliente la imagen que tenga el tamaño de archivo más pequeño de entre la original y la convertida a WebP sin pérdida, como se ilustra en el siguiente diagrama.

![webp-image-compression-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Layout/compresion-de-imagenes_2.PNG)

## Artículos relacionados

* [Buenas prácticas para el uso de imágenes en el Catálogo](https://help.vtex.com/es/tutorial/boas-praticas-para-o-uso-de-imagens-no-catalogo--738K2yfq5U86kUI2k4AQIk)
* [Añadir imagen a la descripción del producto](https://help.vtex.com/es/tutorial/adicionar-imagem-a-descricao-do-produto--2hQGTAAiyUSoISGSyOK8Y4)
* [Importar imágenes por plantilla](https://help.vtex.com/es/tutorial/importando-imagens-por-planilha--tutorials_262)
* [¿Cómo actualizar la imagen de un SKU?](https://help.vtex.com/es/tutorial/como-atualizar-a-imagem-de-um-sku--5PMb54FnvUuWOq2qGyAosu)
* [Reutilización de imágenes con Image Widget](https://help.vtex.com/es/tutorial/image-widget--7pRSVI2xXpQUzjUZj0m4ov)
