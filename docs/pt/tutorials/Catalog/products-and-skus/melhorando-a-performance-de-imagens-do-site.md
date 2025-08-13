---
title: 'Melhorar a performance de imagens de produtos'
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
legacySlug: melhorando-a-performance-de-imagens-do-site
locale: pt
subcategoryId: pwxWmUu7T222QyuGogs68
---

As imagens dos produtos são muitas vezes o principal vilão da performance de sua loja.

O objetivo deste artigo é mostrar como usar o VTEX Img para tornar o carregamento das imagens mais eficiente e melhorar a performance do site.

O **VTEX Img**, serviço que entrega essas imagens ao front da loja, tem uma pequena API que, se bem utilizada, pode trazer grandes benefícios aos seus clientes.

A URL da imagem de um SKU tem o seguinte formato:
`http://[ACCOUNT_NAME].vteximg.com.br/arquivos/ids/[ID](-[LARGURA]-[ALTURA])/([NOME_DA_IMAGEM])`

O que está entre colchetes são valores que mudam de acordo com a loja, SKU e imagem (ou seja, o account name da loja, o ID, a largura, a altura e o nome da imagem).

O que está entre parênteses são parâmetros opcionais (ou seja, largura, altura e nome da imagem).

## Exemplo

O nosso catálogo envia as imagens dos SKUs no seguinte formato:
`http://instoreqa.vteximg.com.br/arquivos/ids/155602/robo.jpg`

Nessa URL, temos:

- **[ACCOUNT\_NAME]**: instoreqa
- **[ID]**: 155602
- **[LARGURA]**: não especificada
- **[ALTURA]**: não especificada
- **[NOME\_DA\_IMAGEM]**: robo.jpg

O nome da imagem é um parâmetro opcional. Por isso, a mesma imagem é entregue se abrirmos a seguinte URL:
`http://instoreqa.vteximg.com.br/arquivos/ids/155602/`

## Melhorando a performance

A maneira mais eficaz de melhorar a performance das imagens é fazer com que elas tenham o tamanho que será realmente usado no site. Por exemplo:

Uma loja quer exibir em uma página a imagem de um produto com tamanho de 50x50. Imagine que a loja escreva em seu código html a seguinte URL:
`http://instoreqa.vteximg.com.br/arquivos/ids/155602/robo.jpg`

Neste caso, o navegador irá baixar a imagem com tamanho completo, ou seja, a mesma imagem em alta definição que foi enviada no upload para o Catálogo.

Isso significa que os dados que estão sendo trafegados estão além do necessário, o que é ruim para a performance da loja.

### O que fazer?

Podemos pedir ao VTEX Img que envie a imagem em um tamanho específico.

No nosso exemplo anterior, basta escrever da seguinte maneira a URL da imagem no código html:
`http://instoreqa.vteximg.com.br/arquivos/ids/155602-50-50/`

Desta forma, o VTEX Img entregará a imagem com um tamanho de 50x50. Isto tornará seu carregamento muito mais rápido.

![tamanhosImg](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/products-and-skus/melhorando-a-performance-de-imagens-do-site_1.png)
_Entregar imagens em um tamanho maior que o de exibição prejudica a performance da sua loja._

## Imagens retangulares

Ao redimensionar imagens retangulares, o VTEX Img mantém sua proporção, ou seja, elas são redimensionadas sem distorção.

Em lojas de roupas, por exemplo, é muito comum as imagens terem um formato de retrato, em que a altura é maior do que a largura, como 300x400. Se a loja precisar dessa imagem quadrada (num formato de 50x50, por exemplo) ela acabará distorcida.

O VTEX Img impede distorções completando o espaço vazio com um fundo branco.
