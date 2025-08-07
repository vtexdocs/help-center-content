---
title: 'Como identificar qual arquivo JavaScript está sendo aplicado em uma página?'
id: frequentlyAskedQuestions_6132
status: PUBLISHED
createdAt: 2019-01-24T20:46:02.714Z
updatedAt: 2023-03-29T14:21:09.594Z
publishedAt: 2023-03-29T14:21:09.594Z
firstPublishedAt: 2019-01-24T22:01:54.751Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_35
slugEN: how-to-know-which-javascript-file-is-being-applied-to-a-page
legacySlug: como-identificar-qual-arquivo-javascript-esta-sendo-aplicado-em-uma-pagina
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal Legado.
</div>

A plataforma VTEX é extremamente flexível. Por isso, é comum que os clientes tenham diversas customizações no front-end do e-commerce. Diferentes ferramentas podem ser responsáveis por essas customizações, entre as quais o Google Tag Manager ou mesmo arquivos JavaScript incluídos no CMS.

Muitas vezes, o número de customizações é tão grande que, com o tempo, o próprio lojista esquece o que cada um desses arquivos faz, certo?

Uma forma de identificar qual arquivo javascript está aplicando determinado efeito é por meio do caminho abaixo.

Tenha em mente certo texto contido num efeito de "mouse over", por exemplo. Ao passar o cursor sobre o simbolo do carrinho, o seguinte texto aparece: "Você ainda não possui produtos no carrinho".
Para identificar o JavaScript responsável por essa customização para conseguir alterá-lo, siga os passos abaixo:

1. Com sua página aberta, clique em **F12** ou escolha **Inspecionar página**;
2. Abra a aba **Network**;
3. Use o campo de busca do console e insira a frase **"Você ainda não possui produtos no carrinho"**;
4. A lista mostrará o arquivo que contém a string buscada;
5. No Admin VTEX, acesse **Storefront > Layout > CMS** e procure pelo arquivo na pasta CMS, pelo seguinte caminho:

*Files Manager > .js > Procure por \_nome\_do\_arquivo\_.js*

Caso queira investigar se uma customização de javascript está causando um erro de layout, clique [aqui](/pt/faq/como-identificar-erros-de-layout-ocasionados-por-arquivos-javascript/) para saber como identificar erros de JavaScript.
