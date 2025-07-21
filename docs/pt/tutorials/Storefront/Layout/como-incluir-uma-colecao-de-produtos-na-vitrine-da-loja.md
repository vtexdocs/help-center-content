---
title: 'Incluir uma coleção de produtos na vitrine da loja'
id: frequentlyAskedQuestions_589
status: PUBLISHED
createdAt: 2019-01-24T20:45:55.516Z
updatedAt: 2025-02-01T00:12:59.875Z
publishedAt: 2025-02-01T00:12:59.875Z
firstPublishedAt: 2019-01-24T22:12:59.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-include-a-collection-of-products-in-the-shop-window
locale: pt
legacySlug: como-incluir-uma-colecao-de-produtos-na-vitrine-da-loja
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div class = "alert alert-warning">
  <p><b>Atenção:</b> existem duas formas de configurar coleções, por meio do CMS ou utilizando o módulo de Coleções Beta. Este artigo, refere-se à <a href = "https://help.vtex.com/pt/tutorial/cadastro-de-colecoes-cms--2YBy6P6X0NFRpkD2ZBxF6L">configuração de coleções por meio do CMS</a>.</p>
</div>

As vitrines são utilizadas no destaque de produtos em diversas páginas, elas também podem ser utilizadas para recomendações, na página do produto.

Primeiramente, antes de definir uma vitrine, deve-se criar uma coleção (vide instruções [aqui](/pt/tutorial/criando-colecao-de-produtos "aqui")) com os produtos que serão exibidos nela. Também é necessário que as páginas estejam devidamente estruturadas, com os devidos controles inseridos em seus templates.

Realizadas as devidas definições, o vínculo da coleção com a vitrine é feito em **Storefront > Layout**.

No exemplo a seguir, iremos definir a vitrine apresentada na Home, para isso, selecione **Settings**, depois **add object**, conforme na imagem a seguir.

![coleção2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-incluir-uma-colecao-de-produtos-na-vitrine-da-loja_1.png)

Esse comando irá abrir o **Visual Controls**, ou seja, o controle correspondente à vitrine em que se deseja exibir a coleção. Adicione uma _Coleção_, porém não se esqueça de definir um nome para ela.

![coleção3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-incluir-uma-colecao-de-produtos-na-vitrine-da-loja_2.png) 

![coleção4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-incluir-uma-colecao-de-produtos-na-vitrine-da-loja_3.png)

Para editar o controle criado, é necessário salvar as configurações primeiramente em **Save Settings**.

![coleção5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-incluir-uma-colecao-de-produtos-na-vitrine-da-loja_4.png)

![coleção6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-incluir-uma-colecao-de-produtos-na-vitrine-da-loja_5.png)

Ao editar o controle é necessário adicionar seus conteúdos, que representam cada conjunto de itens que serão exibidos.
São eles:
_Layout_: Selecione o template de prateleira utilizado na vitrine.
_Number of Columns, Number of Items,Show Unavailable, Ramdom ad Paged_: Definem a disposição, quantidade e qual o critério de exibição dos itens.

![coleção7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-incluir-uma-colecao-de-produtos-na-vitrine-da-loja_6.png)

Lembre-se de salvar as alterações antes de efetuar uma busca ou mudar de página.

O próximo passo é adicionar o conteúdo, selecionando **Add Content**.
![coleção8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-incluir-uma-colecao-de-produtos-na-vitrine-da-loja_7.png)

É possível definir cada conteúdo utilizando coleções ou resultados de busca, utilizando parâmetros de busca (mais detalhes [aqui](/pt/tutorial/como-funciona-a-busca-da-vtex--tutorials_542)).

Os conteúdos a serem preenchidos na parte **Content**:
_Content_: Nome que identificará cada conjunto de itens
_QueryString_: Os parâmetros preenchidos nesse campo definem o resultado de busca que será exibido neste conteúdo.

No campo **Product Cluster (Collection)**, é necessário selecionar a coleção que será exibida, para isso, siga o passo a seguir:

![coleção10](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-incluir-uma-colecao-de-produtos-na-vitrine-da-loja_8.png)

Os conteúdos a serem preenchidos na parte **Display Condition**:
_Partner, Campaign_ e _Source_: Definem a exibição deste conteúdo, caso o visitante possua alguma UTM correspondente em sua URL de origem.
_Keywords_: Vincula a exibição do conteúdo a uma busca por termo(s) específico(s).
_Category_ e _Brand_: Vincula a exibição do conteúdo em uma página de Categoria e/ou Marca específico(s).
_Peridos_: Define o período em que o conteúdo ficará ativo. 

Após as definições, deve-se marcar a opção **Active Content** e adicionar na lista de conteúdo, salvando todas as configurações posteriormente.

No exemplo abaixo temos uma vitrine padrão, sem condições de exibição, e outra exclusiva para as visitas oriundas das audiências de campanhas patrocinadas do Google (utm_source=**google**/utm_medium=**cpc**):

![coleção9](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-incluir-uma-colecao-de-produtos-na-vitrine-da-loja_9.png)

No cenário acima, caso o cliente tenha origem na audiência de campanha patrocinada serão exibidos na vitrine **Lançamentos**, localizada na Home, os produtos que correspondem ao resultado de uma busca pela Marca de ID 200000, caso contrário, serão exibidos os produtos da coleção de ID 8.

Sempre que utilizar mais de um conteúdo ativo no mesmo controle, deve-se ordená-los (clicando e arrastando seus conteúdos) de forma que o conteúdo sem condições de exibição sempre fique na última posição, conforme acima.
