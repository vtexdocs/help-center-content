---
title: 'Compactação de imagens'
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
locale: pt
legacySlug: compactacao-automatica-de-imagens
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

A compactação ou compressão de imagens é um processo que reduz o tamanho dos arquivos de imagem para otimizá-las para a web, para garantir que as imagens sejam carregadas rapidamente enquanto um usuário navega em um site.

O objetivo desse processo é aumentar a velocidade e a performance da loja, que têm impacto na experiência do usuário, no [SEO](https://developers.google.com/search/blog/2010/04/using-site-speed-in-web-search-ranking) e nas taxas de conversão.

Existem dois tipos de compactação de imagens, descritos na tabela abaixo:

| Tipo de compactação | Descrição |
| - | - |
| Lossy (com perdas) | Reduz o tamanho e a qualidade da imagem de forma a reter as informações mais significativas sem manter todos os pixels. | 
| Lossless (sem perdas) | Reescreve um arquivo de imagem sem remover nenhuma informação. Apesar de manter a qualidade original, é menos eficaz do que a compactação lossy ao reduzir o arquivo. |

Na VTEX, os arquivos são armazenados em seu formato original, mas compactados em tempo real durante a navegação na loja.

Fazemos uma conversão automática para o formato [WebP](https://developers.google.com/speed/webp?hl=pt-br) sempre que for mais vantajoso, ou seja, sempre que o tamanho da imagem for menor, independentemente se a imagem original é no formato **PNG** ou **JPG / JPEG**.

O uso do WebP pode gerar um ganho de 1 a 2 segundos no tempo de carregamento das páginas, variando conforme o layout. Confira a seguir como funciona a otimização de imagens em cada formato.

>ℹ️ Navegadores que ainda não são [compatíveis com o formato WebP](https://developers.google.com/speed/webp/faq?hl=pt-br#which_web_browsers_natively_support_webp) e serviços como integrações e marketplaces sempre recebem imagens não convertidas, em qualquer formato. Arquivos no formato GIF não passam pela conversão para WebP.

## PNG

Para imagens em formato PNG, indicado para cores sólidas, gráficos detalhados e alto contraste, a conversão para WebP é realizada com compressão lossless, para evitar perdas grandes de qualidade. As imagens WebP lossless podem ser até 26% menores em comparação com as imagens em PNG.

Paralelamente, ocorre a otimização de imagens PNG utilizando [pngquant](https://pngquant.org/), mantendo o formato, mas reduzindo o tamanho da imagem em até 70%.

Por fim, a VTEX entrega o menor arquivo, entre o WebP lossless e o PNG otimizado, conforme ilustrado no diagrama abaixo.

![png-image-compression-pt](//images.ctfassets.net/alneenqid6w5/2i6UAp6HkiWl87Q7SDfIMB/fc5d276c114827f9692cf4b4bf8fd31b/png-image-compression-pt.PNG)

## JPG / JPEG

Para imagens no formato **JPG / JPEG**, indicado para fotos, a conversão para WebP é realizada com compressão lossy, podendo haver perdas de qualidade, mas garantindo um tamanho otimizado. Imagens WebP lossy são de 25% a 34% menores que imagens similares com índice de qualidade [SSIM](https://ece.uwaterloo.ca/~z70wang/research/ssim/) equivalente.

A VTEX entrega ao cliente a imagem com menor tamanho de arquivo, dentre a original e a convertida em WebP lossless, conforme ilustrado no diagrama abaixo.

![webp-image-compression-pt](//images.ctfassets.net/alneenqid6w5/6fZVHgF3ExpBr4XOpjw2pi/b22f2eea1c7d528e32932d58a537b36c/webp-image-compression-pt.PNG)

## Artigos relacionados

* [Boas práticas para o uso de imagens no Catálogo](https://help.vtex.com/pt/tutorial/boas-praticas-para-o-uso-de-imagens-no-catalogo--738K2yfq5U86kUI2k4AQIk)
* [Adicionar imagem à descrição do produto](https://help.vtex.com/pt/tutorial/adicionar-imagem-a-descricao-do-produto--2hQGTAAiyUSoISGSyOK8Y4)
* [Importar imagens por planilha](https://help.vtex.com/pt/tutorial/importando-imagens-por-planilha--tutorials_262)
* [Como atualizar a imagem de um SKU?](https://help.vtex.com/pt/tutorial/como-atualizar-a-imagem-de-um-sku--5PMb54FnvUuWOq2qGyAosu)[Reutilizando imagens com o Image Widget](https://help.vtex.com/pt/tutorial/image-widget--7pRSVI2xXpQUzjUZj0m4ov)
