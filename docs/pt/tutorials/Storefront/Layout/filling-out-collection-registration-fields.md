---
title: 'Preencher campos de cadastro de Coleção'
id: 7eKL7CFRW3yGKlnDfQetbj
status: PUBLISHED
createdAt: 2019-06-03T20:13:01.481Z
updatedAt: 2024-09-09T14:09:09.775Z
publishedAt: 2024-09-09T14:09:09.775Z
firstPublishedAt: 2019-06-13T20:25:06.424Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6AcGyun1hSWewU8YcaQiO
slug: preencher-campos-de-cadastro-de-colecao
locale: pt
legacySlug: preencher-campos-de-cadastro-de-colecao
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

>⚠️ **Atenção:** existem duas formas de configurar coleções, por meio do CMS ou utilizando o módulo de Coleções Beta. Este artigo, refere-se à <a href = "https://help.vtex.com/pt/tutorial/cadastro-de-colecoes-cms--2YBy6P6X0NFRpkD2ZBxF6L">configuração de coleções por meio do CMS</a>.

Para entender melhor o significado dos campos de cadastro de uma coleção de produtos, veja abaixo a descrição completa de cada um deles:

- __Product Cluster Id__: número para a identificação da coleção de produtos. Esse campo será preenchido automaticamente pelo sistema ao salvar o cadastro da nova coleção.

- __Name__: nome para a identificação da coleção de produtos. Esse campo é obrigatório e deve conter apenas letras, números e hífen. O hífen não deve ser usado no ínicio ou no final do nome desejado.  

- __Highlight?__: essa opção deve ser marcada para que a coleção seja destacada na sua loja, através do controle `$product.HightLight`. Para entender melhor sobre o uso desse controle, acesse nosso artigo [Controles do template de prateleira](https://help.vtex.com/pt/tutorial/controles-do-template-de-prateleira--tutorials_550).

- __Searchable?__: essa opção deve ser marcada para que a coleção possa ser retornada na [API de Busca da VTEX](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search/-search-?endpoint=get-/api/catalog_system/pub/products/search/-search-). 

- __From/To__: intervalo de tempo em que a coleção de produtos estará ativa na sua loja. 

