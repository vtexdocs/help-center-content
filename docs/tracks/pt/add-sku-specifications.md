---
title: 'Cadastrar especificações de SKU'
id: 6UjLHdAT5YLuflki10SXLr
status: DRAFT
createdAt: 2019-06-18T17:27:49.997Z
updatedAt: 2022-07-06T17:44:14.393Z
publishedAt: 
firstPublishedAt: 2019-06-25T19:06:43.640Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: cadastrar-especificacoes-de-sku
locale: pt
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugPT: catalogo-101
---

Há três formas de cadastrar suas especificações de SKU: por meio do admin, por planilha ou por ERP.

>⚠️ Na VTEX, as especificações seguem uma lógica de “herança”, ou seja, ao criar uma especificação em um nível de categoria mais alto, a especificação será apresentada em todos os níveis de categoria abaixo dela. Portanto, se for necessário criar uma especificação de produto ou SKU que se aplique a apenas uma categoria, esta deve ser criada no nível dessa categoria.

Siga o passo a passo abaixo para cadastrar as especificações:

## Admin

Para cadastrar as especificações sua loja precisa ter departamentos, categorias e subcategorias já criados. Depois disso, siga os passos abaixo:

 1. Clique  em **Catálogo** 
 2. Clique em **Categorias**
 3. Clique na categoria que deseja adicionar especificações
 4. Um pequeno retângulo azul vai aparecer na tela. Clique em **Ações**
 5. Clique em **Campo SKU**
 6. Clique em **Novo Campo**
 7. Preencha os campos do formulário de especificações. No caso dos SKUs,  a flag de campo obrigatório sempre está selecionada por default. Para entender melhor o significado de cada campo, acesse nosso artigo sobre [como preencher campos de especificações de SKU](https://help.vtex.com/pt/tutorial/criando-campo-de-sku--tutorials_119)
 8.  Clique em **Salvar**

![1.PT](https://images.ctfassets.net/alneenqid6w5/5b2UFRxvAQ6BoL6eStxf0D/fa7b4836240b18cd3d941f6260b512b8/1.PT.gif)

Para adicionar valores à especificação de SKU, siga os passos abaixo:

 1. Clique  em **Catálogo** 
 2. Clique em **Categorias**
 3. Clique na categoria que deseja adicionar os valores das especificações
 4. Um pequeno retângulo azul vai aparecer na tela. Clique em **Ações**
 5. Clique em **Campo SKU**
 6. Na especificação desejada, passe o mouse na **seta para baixo**, ao lado do botão **Alterar**
 7. Clique em **Valores**
 8. Clique em **Novo Valor**
 9. Escreva o **Nome** do valor desejado e clique em **Salvar**

![2.PT](https://images.ctfassets.net/alneenqid6w5/5MwO6aTSuIzCbxlrnzjTHQ/8f8ee16b8a59dd7be5e5b77f358fba0c/2.PT.gif)

### Vincular as especificações a um SKU

Depois de cadastrar as especificações, você poderá  vincular seus valores a um SKU.

Para incluir as especificações em um **SKU** siga os seguintes passos:

 1. Clique em **Catálogo**,
 2. Clique em **Produtos e SKUs**
 3. No produto com o SKU desejado, clique na **seta azul**, ao lado do botão  **Alterar**, do lado direito da página
 4. Clique em **SKU**
 5. No SKU desejado, clique em **Alterar** 
 6. Clique na aba **Especificações** e escolha o valor da especificação para esse SKU
 7. Clique em **Salvar**

![3.PT](https://images.ctfassets.net/alneenqid6w5/6mV0lyVG6Z2ywmtNheePEf/f1a986c79116835f7abb23853b51278e/3.PT.gif)

## Planilha 

Para cadastrar suas especificações por planilha é necessário primeiro exportar a planilha padrão VTEX. Para fazer isso, siga o passo a passo abaixo:

1. Clique em **Catálogo**
2. Clique em **Importação e Exportação**
3. Clique na aba **Especificação de SKU** 
4. Clique com o botão direito em cima da categoria desejada
5. Clique em **Export**
6. Um retângulo verde aparecerá na tela.
7. Clique em **Clique aqui para baixar o arquivo** para exportar a planilha

Ao receber a planilha, preencha as linhas com os dados da especificação do SKU.

Apenas altere a coluna "ValoreEspecificaCao" da planilha. As demais colunas deverão permanecer inalteradas pois seus valores serão utilizados para validação dos dados.

Para entender melhor o significado de cada campo, acesse nosso artigo sobre [como preencher campos da planilha de importação de produtos e SKUs](https://help.vtex.com/pt/tutorial/preencher-campos-da-planilha-de-importacao--4nYhx63Q5yokQWaMguaIgI)

Depois de preencher os dados da planilha, siga o passo a passo para Importar suas especificações:

1. Clique em **Catálogo**
2. Clique em **Importação e Exportação**
3. Clique na aba **Especificação de SKU** 
4. Desça a página até **Upload de Arquivo para Importação**
5. Clique em **Select** para selecionar a planilha preenchida
6.  Clique em **Importar**

![4.PT](https://images.ctfassets.net/alneenqid6w5/6apU0Qp7SqnH6ZfPT5lzrr/39b16e05c0e7f952fed25892902da30e/4.PT.gif)

## API 

Siga o guia [Como criar uma especificação](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification) (em inglês) para criar uma especificação de SKU por API.
