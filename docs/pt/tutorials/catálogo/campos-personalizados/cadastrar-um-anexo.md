---
title: 'Cadastrar um anexo'
id: 7zHMUpuoQE4cAskqEUWScU
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.901Z
updatedAt: 2023-11-16T17:23:31.034Z
publishedAt: 2023-11-16T17:23:31.034Z
firstPublishedAt: 2019-01-24T22:06:25.639Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: adding-an-attachment
legacySlug: cadastrar-um-anexo
locale: pt
subcategoryId: 1hoOi2R0Rm6ky0yCwOUoiy
---

O objetivo de um anexo é [complementar o produto com uma informação personalizada](/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm). Para cadastrar um anexo, você precisa seguir o passo a passo abaixo no Admin VTEX.

1. No Admin VTEX, acesse **Catálogo**, ou digite **Catálogo** na barra de busca no topo da página.
2. Clique em **Campos personalizados**.
3. Clique em `Novo anexo`.
4. Preencha os campos referentes ao anexo:
    * **Nome:** nome do anexo que você deseja cadastrar. O nome precisa ser único no sistema e pode conter apenas letras, números ou pontos. Este campo é obrigatório.
    * **Anexo Obrigatório:** define se o anexo será obrigatório ou opcional quando o cliente for adquirir o produto.
    * **Status:** ativa ou desativa o anexo na sua loja.
5. Clique em `Salvar`.

## Adicionar chaves e valores permitidos

Após realizar o cadastro inicial do anexo, você precisa adicionar as chaves e os **Valores Permitidos** relacionados ao anexo criado. Você pode adicionar quantas chaves desejar. Para adicionar as chaves e os **Valores Permitidos**, siga os passos a seguir.

1. Na página **Campos personalizados**, identifique a linha do anexo criado e clique em `Alterar`, conforme ilustrado na imagem abaixo.
   ![anexos.pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/cat%C3%A1logo/campos-personalizados/cadastrar-um-anexo_1.png)
2. Preencha os campos listados a seguir.
    * **Nome da Chave:** nome da informação personalizada. Este campo é obrigatório e não pode conter caracteres especiais, apenas letras, números ou pontos. Exemplo: se o produto personalizável for uma Camisa da Seleção Brasileira, os nomes das suas chaves podem ser `Nome` e `Numero`.
    * **Máximo de Caracteres:** máximo de caracteres que o cliente pode digitar para inserir uma informação personalizada no produto. Este campo é obrigatório. Exemplo: neste campo você poderia estipular o limite de caracteres para o nome que será impresso em uma camisa.
    * **Valores Permitidos:** valores que o cliente da sua loja vai poder selecionar para a personalização em questão, separados por vírgula. Exemplo: ao preencher este campo com `5,7,9,10`, você pode permitir que o seu cliente opte por incluir um desses números em uma camisa.
3. Clique em `Inserir Novo`. Você pode cadastrar outras chaves repetindo esse processo, se desejar.
4. Para finalizar, clique em `Salvar`.

> ⚠️ É obrigatório preencher o campo **Máximo de Caracteres**. Caso esse campo não seja preenchido, o anexo não vai aparecer para o seu cliente como uma opção de seleção no carrinho.

## Associar o anexo a um SKU

Após criar o anexo de SKU e configurar as chaves e os valores permitidos, você precisa associar o anexo criado a um ou mais SKUs existentes. Para fazer isso pelo Admin VTEX, siga os passos abaixo.

1. No Admin VTEX, acesse **Catálogo**, ou digite **Catálogo** na barra de busca no topo da página.
2. Acesse **Todos os produtos**.
3. Selecione o SKU ao qual você deseja associar o anexo.
4. Acesse a aba **Configurações Avançadas**.
5. Associe o anexo que você criou, marcando a caixa de seleção.
6. Clique em `Salvar`.

Você também pode associar um anexo ao SKU utilizando a [Catalog API](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuattachment), se desejar.

> ⚠️ A VTEX não controla o estoque de um anexo. Essa função é do Marketplace ou do Seller.
