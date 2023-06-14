---
title: 'Como atualizar a imagem de um SKU?'
id: 5PMb54FnvUuWOq2qGyAosu
status: PUBLISHED
createdAt: 2018-01-24T17:56:32.670Z
updatedAt: 2023-03-24T13:55:22.775Z
publishedAt: 2023-03-24T13:55:22.775Z
firstPublishedAt: 2018-01-25T19:29:50.366Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: como-atualizar-a-imagem-de-um-sku
legacySlug: como-atualizar-a-imagem-de-um-sku
subcategory: pwxWmUu7T222QyuGogs68
---

Você pode atualizar uma imagem de SKU no Admin VTEX ou utilizando a Catalog API.

<div class="alert alert-danger">
Este procedimento deve ser realizado com muito cuidado, pois envolve a <em>exclusão de todas as imagens</em> de um SKU, o que vai torná-lo <strong>INATIVO</strong>. Fique atento às recomendações nos passos abaixo para que a atualização das imagens ocorra com sucesso.
</div>

Como este procedimento envolve a exclusão de todas as imagens de um SKU, tornando-o inativo, recomendamos que o processo de substituição de imagens seja realizado em pequenos lotes de SKUs.

## No Admin VTEX

### Apagar as imagens

1. Acesse o módulo __Catálogo__.
2. Clique em __Produtos e SKUs__.
3. Clique no SKU desejado.
4. Clique na aba __Imagens__.
5. Escolha as imagens que deseja apagar e clique em __Retirar__.

<div class="alert alert-danger">
Recomendamos que essas atualizações de imagens sejam feitas em pequenos lotes. Lembre-se que ao apagar todas as imagens de um SKU ele ficará inativo.
</div>

### Adicionar as novas imagens

1. Ainda na mesma tela, clique em __Inserir__.
2. Escolha a imagem desejada.
3. Preencha os campos __Texto__ e __Label__.
4. Clique em __Enviar__.

### Ativar o SKU

1. Na aba __SKU__, marque a opção __Ativar o SKU se possível__.
2. Clique em __Salvar__.

Pronto! Agora seu produto entrará na [fila de indexação](/pt/tutorial/entendendo-o-funcionamento-da-indexacao). Após ser indexado, o SKU será exibido com as novas imagens.

## Catalog API

Para realizar essa ação pela Catalog API, utilize o endpoint [Update SKU File](https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-sku-file#catalog-api-put-sku-file).
