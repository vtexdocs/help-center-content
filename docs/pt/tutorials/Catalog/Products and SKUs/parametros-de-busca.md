---
title: 'Como funcionam os parâmetros de busca'
id: tutorials_567
status: ARCHIVED
createdAt: 2017-04-27T22:00:24.532Z
updatedAt: 2022-09-13T14:41:46.984Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:39.531Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: search-parameters
locale: pt
legacySlug: parametros-de-busca
subcategoryId: pwxWmUu7T222QyuGogs68
---

>⚠️ **Atenção**: a VTEX apresenta duas opções da busca - a busca VTEX e o VTEX Intelligent Search. Esse artigo se refere à busca VTEX. Para saber mais sobre o aplicativo VTEX Intelligent Search acesse <a href = "https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nossa track</a>.

Ao realizar buscas na VTEX, existem algumas possibilidades de URLs. Temos as URLs de Departamentos e Categorias, que são formadas da seguinte maneira:

![](//images.contentful.com/alneenqid6w5/1MhPmB1yxKS426UCsASUsY/eeaf45262ccde7b0a50ee6ef6b787afb/arvore_categoria.png)

Na árvore de categorias acima, os links ficariam da seguintes forma:

- www.loja.com.br/artes-e-entretenimento

- www.loja.com.br/artes-e-entretenimento/festas-e-comemoracoes

- www.loja.com.br/artes-e-entretenimento/festas-e-comemoracoes/artigos-para-festas

Ao utilizar o campo de busca, a url sempre será formada pelo termo buscado:

![](//images.contentful.com/alneenqid6w5/tJYda31CZUUOCii0EcwmE/89481a9321a61fb50fd5463217d6760d/campo_busca.png)

- www.loja.com.br/cama

Os filtros de navegação também possuem uma url específica, que é definida por determinados parâmetros na URL

Estes parâmetros são:

## Padrão 1:

URL: www.loja.com.br/busca/?fq=**C:\[IdDepartamento/IdCategoria/IdSubcategoria\]**&amp;fq=**B:\[IdMarca\]**&amp;fq=**H:\[IdColeção\]**&amp;fq=**spec\_fct\_\[IdCampoProduto/Sku\]:\[ValorBuscado\]**&amp;**ft=\[TermoBuscado\]**

Onde:

**C:\[IdDepartamento/IdCategoria/IdSubcategoria\]**: Retorna produtos de uma determinada subcategoria, de acordo com os IDs informados do departamento, categoria e subcategoria. Este código é apresentado ao lado dos nomes das categorias em **Cadastro de Produtos -> Categoria**:

![](//images.contentful.com/alneenqid6w5/44i8Rue6hiMmMs64wiks86/8f31981e162596d825190865cefd121e/id_categoria1.png)

>Observação: 

OBS: O ID da categoria também pode ser encontrado em sua página de edição, ao final da URL.

**B:\[IdMarca\]:** Retorna produtos de uma determinada marca, de acordo com o ID informado. Este código é apresentado ao final da URL, na página de alteração de uma marca, em **Cadastro de Produtos -> Marca**:

![](//images.contentful.com/alneenqid6w5/2CuMf8UzCIkiYyMKUiIOcy/9c354e12e064bdb7f310611f7fc0ee41/id_marca.png)

>⚠️ **Atenção:** existem duas formas de configurar coleções, por meio do CMS ou utilizando o módulo de Coleções Beta. Este artigo, refere-se à <a href = "https://help.vtex.com/pt/tutorial/cadastro-de-colecoes-cms--2YBy6P6X0NFRpkD2ZBxF6L">configuração de coleções por meio do CMS</a>.

**H:\[IdColeção\]**: Retorna produtos de uma determinada coleção, de acordo com o ID informado. Este código é informado na edição da coleção, em **Configurações &gt; Portal &gt; Pasta Portal &gt; Subpasta Coleções:**

![](//images.contentful.com/alneenqid6w5/2vqAbADq0cUQO224YoOQAQ/7eef524621cbf80d9c37b37c9cc4099e/id_colecao.png)

**spec\_fct\_\[IdCampoProduto/Sku\]:\[ValorBuscado\]:** Retorna produtos cujo valor do campo produto/sku com o ID indicado seja igual ao valor informado. Este código pode ser obtido na página de alteração de um campo produto/sku, ao final da url:

![](//images.contentful.com/alneenqid6w5/7noRXDnenuSU4ugc8mmoSg/7a85e4ab97b87c00d4306c57c2462ecc/id_campo-560x386.png)

Um exemplo de utilização deste campo seria:

www.loja.com.br/busca/?fq=spec_fct_1:110v

No exemplo acima seriam retornados todos os produtos cujo campo **Voltagem**(de ID **1**) tivessem o valor **110v**.

**ft=\[TermoBuscado\]**: Este parâmetro representa uma busca _fulltext(Ex: pesquisa de um termo específico no campo de busca)_ do termo especificado de acordo com os demais parâmetros informados.

Os parâmetros acima podem ser combinados de diversas formas, porém, vale ressaltar que a ordem da busca será feita de acordo com a ordem dos próprios parâmetros informados, ou seja, ao utilizar um parâmetro de categoria seguido de um parâmetro de marca, por exemplo, será realizada primeiramente uma busca pela categoria e, dentre os resultados desta busca, será realizada uma segunda busca por marca.

## Padrão 2

>ℹ️ Para lojas hospedadas no VTEX IO, o padrão 2 é o modelo indicado.

URL: www.loja.com.br/**\[NomeCategoria\]**/**\[NomeMarca\]**/**\[IdColeção\]**/**\[ValorBuscado\]?map=c,b,productClusterIds,specificationFilter_\[IdCampoProduto/Sku\]**

Onde:

- www.loja.com.br**/\[NomeCategoria\]?map=c**

Retorna os produtos cuja categoria seja especificada pelo nome informado na url.

- www.loja.com.br**/\[NomeMarca\]?map=b**

Retorna os produtos cuja marca seja especificada pelo nome informado na url.

- www.loja.com.br**/\[IdColeção\]?map=productClusterIds**

Retorna os produtos cuja coleção seja especificada pelo ID informado na url.

- www.loja.com.br/**\[ValorBuscado\]**?map=**specificationFilter_\[IdCampoProduto/Sku\]**

Retorna produtos cujo valor do campo produto/SKU com o ID indicado seja igual ao valor informado.

Os parâmetros acima também podem ser combinados entre si. A ordem dos valores passados no parâmetro **map** define como será entendido cada valor presente no início da url (entre as “/”s).

**OBS: Os dois padrões acima são válidos, vale ressaltar que o melhor para SEO seria o padrão 2.**

