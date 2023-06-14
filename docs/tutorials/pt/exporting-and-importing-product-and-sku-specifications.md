---
title: Exportar e importar especificações de produto e de SKU
id: tutorials_274
status: PUBLISHED
createdAt: 2017-04-27T22:10:43.787Z
updatedAt: 2023-03-29T15:30:59.932Z
publishedAt: 2023-03-29T15:30:59.932Z
firstPublishedAt: 2017-04-27T23:03:12.428Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: exportar-e-importar-especificacoes-de-produto-e-de-sku
legacySlug: importando-e-exportando-especificacao-de-produto-e-sku
subcategory: pwxWmUu7T222QyuGogs68
---

Após a definição da árvore de categorias e o cadastro de [especificações de produtos e de SKUs](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) na sua loja, é necessário preencher os valores das especificações criadas. No Admin VTEX, esse processo pode ser realizado através de uma planilha ou de forma manual no cadastro do [produto](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106#cadastro-do-produto) e no cadastro do [SKU](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119#cadastro-do-sku).

Neste artigo, explicamos como funciona a exportação e importação de planilhas com as especificações de produto e de SKU no Admin VTEX.

<div class = "alert alert-info">
  <p>Para exportar e importar especificações utilizando a <strong>Catalog API</strong>, siga o guia para desenvolvedores <a href="https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification">How to create a specification</a>.</p>
</div>

## Exportar especificações de produto ou de SKU

Veja a seguir como exportar a planilha com as especificações de produto ou de SKU:

1.No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em __Importação e exportação__.
3. Clique na aba __Especificações de produto__ ou __Especificações de SKU__, dependendo da sua necessidade.
    ![skuexport.pt](//images.ctfassets.net/alneenqid6w5/2GmGsYDBCUlq01JyLJF6q/63708fe7dece1cf9ec100eeaf0851674/skuexport.pt.png)
4. Clique com o botão direito na categoria desejada.
    Não é possível exportar especificações de todas as categorias de uma só vez. É preciso escolher apenas uma categoria cujas especificações você deseja exportar.
5. Clique na opção `Exportar`.
    Um retângulo verde aparecerá na tela.
6. Clique em `Clique aqui para baixar o arquivo`.

![skuexport2.pt](//images.ctfassets.net/alneenqid6w5/32z4zfvN7GeKcfZsuVQsGA/cac3411fabd0a1d32cb85b4592d0a4dd/skuexport2.pt.png)

## Importar especificações de produto ou de SKU

Para a importação das especificações, é recomendável a utilização de uma planilha exportada do sistema, pois a mesma apresenta os requisitos necessários para a importação, além de conter dados de referência que poderão auxiliar no preenchimento.

Na planilha de importação, a única coluna a ser preenchida é a `ValorEspecificaCao`. As demais colunas deverão permanecer inalteradas pois seus valores serão utilizados para validação dos dados.

A estrutura da planilha apresenta uma linha para cada campo do produto ou SKU, ou seja, o mesmo produto ou SKU será apresentado diversas vezes de acordo com os campos existentes em sua categoria.

<div class="alert alert-warning">
  <p>Na planilha exportada, a coluna referente a "ValorEspecificacao" é "NomeCampoValor (Não alterável)". Ao preencher o campo, a grafia das características deve ser exata. Letras maiúsculas e minúsculas fazem diferença nesse caso.</p>
  </div>

Siga os passos abaixo para importar a planilha:

1. No Admin VTEX, ainda em __Catálogo > Importação e exportação > Especificação de produto__ ou __Especificação de SKU__, desça a página até __Upload de arquivo para importação__.
2. Clique em __Selecionar__ para escolher o arquivo com a planilha preenchida no seu computador.
3. Clique em `Importar`.

![skuexport3.pt](//images.ctfassets.net/alneenqid6w5/4KnRQf8W5vHakt5FNyHup0/0a7cbb37721b6110065c14599f0288d7/skuexport3.pt.png)

## Saiba mais
- [Especificações de produto e de SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)
- [Cadastrar especificações ou campos de produto](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106)
- [Cadastrar especificações ou campos de SKU](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119)
