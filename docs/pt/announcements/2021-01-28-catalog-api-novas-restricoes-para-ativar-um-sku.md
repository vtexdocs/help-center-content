---
title: 'Catalog API: novas restrições para ativar um SKU'
id: JcUDPA6hTMK4kwjTUAUn9
status: PUBLISHED
createdAt: 2021-01-28T18:30:48.345Z
updatedAt: 2021-05-04T18:11:05.378Z
publishedAt: 2021-05-04T18:11:05.378Z
contentType: updates
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: 2021-01-28-catalog-api-new-restrictions-to-activate-an-sku
locale: pt
legacySlug: catalog-api-novas-restricoes-para-ativar-um-sku
announcementImageID: ''
announcementSynopsisPT: 'Com essa nova atualização, a criação de SKUs por API apresenta novas restrições'
---

Atualizamos a [Catalog API](https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-overview) referente à criação de SKUs para evitar possíveis problemas de visualização dos SKUs da sua loja.

Antes, a validação de SKU por API apresentava efeitos colaterais indesejados para nossos clientes quando eles tentavam ativar um SKU criado ou atualizado. A partir de 11/03/2021, a criação de SKUs por API vai seguir o padrão já estabelecido no Admin, evitando comportamentos inesperados.

## O que muda?

A partir da atualização, ao criar um SKU por API, ele não é criado como ativo. Para ativá-lo, é preciso associar uma imagem a ele. Além disso, para SKUs que são kits, é necessário também associar um componente ativo para que seu status seja ativo.

Em nosso [guia](https://developers.vtex.com/vtex-rest-api/docs/how-to-activate-an-sku) há mais detalhes de como a mudança afeta os endpoints [Create SKU](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku#catalog-api-post-sku) e [Update SKU](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku#catalog-api-put-sku) e sobre o novo caminho de validação de SKU a partir da atualização.

## O que preciso fazer? 

No dia 11/03/2021, a atualização para a criação de novos SKUs será implementada automaticamente pela VTEX e os requisitos serão obrigatórios. Caso você não siga essa configuração, o SKU não será criado. Recomendamos que você implemente esse novo padrão imediatamente, para se adequar a tempo da atualização definitiva.

No caso de SKUs já cadastrados na sua loja, é necessário verificar se eles estão realmente ativos e devidamente conectados aos produtos. Caso você tenha um SKU quebrado, é preciso adequá-lo à atualização e [adicionar uma imagem a ele](https://help.vtex.com/pt/tutorial/como-atualizar-a-imagem-de-um-sku--5PMb54FnvUuWOq2qGyAosu#).

