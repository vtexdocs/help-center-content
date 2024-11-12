---
title: 'Cadastrar especificações de produto'
id: 4fcdmJzQ6QYA9zWf3bLWin
status: ARCHIVED
createdAt: 2019-06-18T16:56:58.820Z
updatedAt: 2022-07-06T14:25:25.296Z
publishedAt: 
firstPublishedAt: 2019-06-25T19:06:35.046Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: adding-product-specifications
locale: pt
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugPT: catalogo-101
---

Há três formas de cadastrar suas especificações: por meio do admin, por planilha ou por API.

>⚠️ Na VTEX, as especificações seguem uma lógica de “herança”, ou seja, ao criar uma especificação em um nível de categoria mais alto, a especificação será apresentada em todos os níveis de categoria abaixo dela. Portanto, se for necessário criar uma especificação de produto ou SKU que se aplique a apenas uma categoria, esta deve ser criada no nível dessa categoria.

Siga o passo a passo abaixo para cadastrar as especificações:

## Admin

Para cadastrar as especificações sua loja precisa ter departamentos, categorias e subcategorias já criados. Depois disso, siga os passos abaixo:

 1. Clique  em **Catálogo**.
 2. Clique em **Categorias**.
 3. Clique na categoria que deseja adicionar especificações.
 4. Um pequeno retângulo azul vai aparecer na tela. Clique em **Ações**.
 5. Clique em **Campo Produto**.
 6. Clique em **Novo Campo**.
 7. Preencha os campos do formulário de especificações. Para entender melhor o significado de cada campo, acesse nosso artigo sobre [como preencher campos de especificações de produto](https://help.vtex.com/pt/tutorial/criando-um-campo-de-produto--tutorials_106).
 8.  Clique em **Salvar**.

![1.PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.gif)

Para adicionar valores à especificação de um produto, siga os passos abaixo:

 1. Clique  em **Catálogo**.
 2. Clique em **Categorias**.
 3. Clique na categoria que deseja adicionar os valores das especificações.
 4. Um pequeno retângulo azul vai aparecer na tela. Clique em **Ações**.
 5. Clique em **Campo Produto**.
 7. Na especificação desejada, passe o mouse na **seta para baixo**, ao lado do botão **Alterar**.
 8. Clique em **Valores**.
 9. Clique em **Novo Valor**.
 10. Escreva o **Nome** do valor desejado e clique em **Salvar**.

![2.PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.gif)

### Vincular as especificações a um produto

Depois de cadastrar as especificações, você poderá  vincular seus valores a um produto.

Para incluir as especificações em um **Produto** siga os seguintes passos:

 1. Clique em **Catálogo**.
 2. Clique em **Produtos e SKUs**.
 3. No produto desejado,  clique em **Alterar**.
 4. Clique na aba **Especificações** e escolha o valor da especificação para esse produto.
 5. Clique na aba **Produto** e depois clique em **Salvar**.

![3.PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.gif)

## Planilha 

Para cadastrar suas especificações por planilha é necessário primeiro exportar a planilha padrão VTEX. Para fazer isso, siga o passo a passo abaixo:

1. Clique em **Catálogo**.
2. Clique em **Importação e Exportação**.
3. Clique na aba **Especificação de produto**.
4. Clique com o botão direito em cima da categoria desejada.
5. Clique em **Export**.
6. Um retângulo verde aparecerá na tela.
7. Clique em **Clique aqui para baixar o arquivo** para exportar a planilha.

Ao receber a planilha, preencha as linhas com os dados da especificação do produto.

Apenas altere a coluna "ValorEspecificacao" da planilha. As demais colunas deverão permanecer inalteradas pois seus valores serão utilizados para validação dos dados.

Para entender melhor o significado de cada campo, acesse nosso artigo sobre [como preencher campos da planilha de importação de produtos e SKUs](https://help.vtex.com/pt/tutorial/preencher-campos-da-planilha-de-importacao--4nYhx63Q5yokQWaMguaIgI)

Depois de preencher os dados da planilha, siga o passo a passo para Importar suas especificações:

1. Clique em **Catálogo**.
2. Clique em **Importação e Exportação**.
3. Clique na aba **Especificação de produto**.
4. Desça a página até **Upload de Arquivo para Importação**.
5. Clique em **Select** para selecionar a planilha de Importação.
6.  Clique em **Importar**.

![4.PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.gif)

## API 

Siga o guia [Como criar uma especificação](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification) (em inglês) para criar uma especificação de produto por API.
