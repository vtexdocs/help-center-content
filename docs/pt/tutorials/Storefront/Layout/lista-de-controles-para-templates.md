---
title: 'Lista de controles para templates'
id: tutorials_563
status: ARCHIVED
createdAt: 2017-04-27T22:00:32.542Z
updatedAt: 2022-09-08T16:44:42.282Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:39.646Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: list-of-controls-for-templates
locale: pt
legacySlug: lista-de-controles-para-templates
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Os controles listados neste artigo podem ser utilizados pelo desenvolvedor _front-end_ da sua loja para criar o layout das páginas da loja no módulo **CMS > Layout**.

- [Controles gerais](#controles-gerais)
- [Controles para página de produto](#controles-para-pagina-de-produto)
 - [Controles de RichSnippets](#controles-de-richSnippets)
- [Controles para Páginas de Departamento, Categoria e Busca](#controles-para-paginas-de-departamento-categoria-e-busca)
- [Outros controles](#outros-controles)
- [Controles deprecados](#controles-deprecados)

## Controles gerais
Os controles listados abaixo podem ser utilizados na maioria das páginas da sua loja.

| Controle | Descrição     |
| -------- | ------------- |
| `<vtex.cmc:breadCrumb/>` | **Breadcrumb:** indica a localização atual do usuário no site da sua loja e por quais páginas ele passou até chegar na atual. Funciona  nas páginas de Produto, Departamento, Categoria e Busca. |
| `<vtex.cmc:fullTextSearchBox/>` | **Controle de Busca:** exibe a barra de busca na sua loja. Leia [Controle de Busca - fulltextSearchBox](https://help.vtex.com/pt/tutorial/controle-de-busca-fulltextsearchbox--tutorials_549) para mais informações.  |
| `<vtex.cmc:welcomeMessage/>`                   | **Welcome message:** exibe uma mensagem de boas-vindas para quem acessar a sua loja. Para personalizar essa mensagem, acesse __Configurações__ no módulo __CMS__. Na aba Textos da loja, busque pelo comando `topbarSaudacao` nas opções de ID e selecione-o. Na caixa de texto que aparecerá automaticamente, você pode alterar a mensagem de boas-vindas e clicar em `Salvar` para armazenar a alteração.|
| `<vtex:metaTags/>`| **Meta Tags:** define as Meta Tags da página , ou seja, etiquetas que são úteis para que os motores de busca identifiquem o seu conteúdo com facilidade.   |
| `<vtex.cmc:canonicalPage disable="true"/>`     | **Desabilitar a canonical tag:** ao aplicar este controle com o valor `true`, você desabilita a canonical tag na página em questão. O uso desta tag é uma forma de informar aos mecanismos de busca sobre conteúdos duplicados e priorizá-los corretamente no rastreamento das páginas.        |
| `<vtex.cmc:departmentLinks/>`                  | **Links de departamentos:** apresenta links para o primeiro nível de categorias criadas no Admin, ou seja, departamentos. Para que a categoria seja listada, é necessário que você tenha habilitado o campo Menu durante a [criação](https://help.vtex.com/pt/tutorial/cadastrando-categoria--tutorials_206) dela.      |
| `<vtex.cmc:departmentNavigator/>`              | **Menu de departamentos:** apresenta um menu com os departamentos e categorias cadastrados na sua loja (1° e 2° níveis). Para exibir o link Lista Completa, é necessário que você tenha habilitado o campo Menu durante a [criação](https://help.vtex.com/pt/tutorial/cadastrando-categoria--tutorials_206) das categorias. Este menu também exibe as marcas que têm a opção *Exibir no menu da Home* habilitadas em seu [cadastro](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-marca--37Ky7lTbEkiWIAYA80EMyI) e as especificações de categorias, por exemplo, tamanho e cor. Este controle é indicado para uso lateral.  |
| `<vtex.cmc:searchTitle/>`                     | **Título da página:** exibe o título das páginas de departamento, categoria e busca.      |
| `<vtex.cmc:productQuickView/>`                 | **QuickView:** este controle precisa ser adicionado antes do fechamento da tag `</body>` do template de página de QuickView. Ele é fundamental para o carregamento dos arquivos necessários da página.    |
| `<vtex.cmc:ProductQueryStringReferenceShelf/>` | **Prateleira:** permite configurar uma prateleira na sua loja, utilizando os atributos listados abaixo.                                  |

Veja a seguir a descrição dos atributos do controle de **Prateleira** `<vtex.cmc:ProductQueryStringReferenceShelf/>`:

| Atributo da Tag               | Descrição   |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `layout`                    | ID do template da prateleira. Atributo obrigatório.       |
| `itemCount`                 | Quantidade de itens a serem apresentados. Atributo obrigatório.        |
| `columnCount`               | Quantidade de colunas. Atributo obrigatório.           |
| `showUnavailable`           | Quando este atributo é configurado com o valor `true`, a página vai exibir os produtos esgotados.    |
| `selectionMode=”batch-buy”` | Atributo não obrigatório que permite realizar compras em lote.         |
| `isTrackable`               | Quando este atributo é configurado com o valor `true`, este controle é rastreável.  |
| `InternalCampaign`          | Nome da [audiência de campanha](https://help.vtex.com/pt/tutorial/criar-audiencia-de-campanhas--6cnuDZJzIkIeocewAQQK4K) interna. |
| `InternalPart`              | Nome da viewpart interna.   |

Exemplo de uso do controle de **Prateleira**:

```
<vtex.cmc:ProductQueryStringReferenceShelf layout="e2ed81f5-6241-4418-a47b-018d7482fcf0" itemCount="3" columnCount="3" showUnavailable="true" isTrackable="true" InternalCampaign="Destaque landing" InternalPart="Prateleira destaque"/>
```

## Controles para página de produto

| Controle | Descrição  |
| -------- | ---------- |
| `<vtex.cmc:ProductGifts />` |	**Exibir brindes na página do produto:** exibe os brindes atrelados ao produto, caso você tenha configurado uma promoção Compre e Ganhe na sua loja. [Veja como configurar este tipo de promoção](https://help.vtex.com/pt/tutorial/configurar-promocao-compre-e-ganhe-para-um-sku-especifico--4QlFtwxAju6qOwaCi2YS0G). |
| `<vtex.cmc:productName/>` |	**Nome do Produto:** exibe o nome do produto cadastrado. |
| `<vtex.cmc:brandName/>` |	**Marca do produto com link:** exibe o nome da marca do produto, com um link para acessar a lista de produtos da marca na sua loja. |
| `<vtex.cmc:ProductImage/>` | **Imagem principal do produto com thumbs:** exibe a imagem principal do produto com thumbnail, ou seja, miniatura. Para ativar o zoom, é necessário adicionar o atributo `zoom` na tag. Exemplo: `<vtex.cmc:ProductImage zoom="on"/>`. |
| `<vtex.cmc:productReference/>` | **Código de Referência do Produto:** exibe o código de referência do produto cadastrado. |
| `<vtex.cmc:skuReference/>` |	**Código de Referência do SKU:** exibe o código de referência do SKU cadastrado. |
| `<vtex.cmc:skuPrice/>` |	**Preço de, Preço por, Parcelamento e Economia de:** o "preço de" e "economia de" é exibido apenas se o "preço por" for menor que o "preço de". Será exibido o parcelamento mais vantajoso ao cliente considerando o valor final da compra e somente as opções sem juros. Não traz conteúdo quando o modo de exibição dos produtos é **Lista de SKUs**. |
| `<vtex.cmc:skuSelection />` |	**Seleção de SKUs:** possibilita selecionar a variação do produto desejada, seguindo a configuração do Admin (`radio` e `combo`). |
| `<vtex.cmc:OtherPaymentMethod/>` |	**Ver outras formas de pagamento:** exibe a melhor condição de pagamento e parcelamento para o SKU. É necessário que o SKU esteja com estoque disponível para a exibição. Esse controle não funciona para categorias com o modo de exibição do tipo “Lista” em produtos com múltiplos SKUs.  |
| `<vtex.cmc:Delivery/>` |	**Disponibilidade:** exibe uma estimativa de prazo para disponibilidade do produto, considerando cidade e estado padrão. |
| `<vtex.cmc:stockKeepingUnitRewardValue/>` |	**Valor para Fidelidade:** exibe o valor do SKU no programa de fidelidade da loja. |
| `<vtex.cmc:BuyTogether/>` |	**Compre Junto:** exibe os SKUs selecionados no campo **Mostrar junto** durante o cadastro do SKU em questão. |
| `<vtex.cmc:ProductDescription/>` |	**Descrição do produto:** apresenta o valor do campo **Descrição** do cadastro do produto. |
| `<vtex.cmc:productDescriptionShort/>` |	**Descrição Curta do produto:** apresenta o valor do campo **Nome Complemento** do cadastro do produto. |
| `<vtex.cmc:productSpecification/>` |	**Especificação do produto:** apresenta as propriedades adicionais que podem ser cadastradas nos produtos.  |
| `<vtex.cmc:StockKeepingUnitAttributes/>` |	**Especificações do SKU:** traz também o grupo "Atributos não estruturados", usado em produtos de sellers. |
| `<vtex.cmc:stockKeepingUnitMeasures/>` |	**Dimensões reais do SKU:** apresenta altura, largura, comprimento e peso reais do SKU. |
| `<vtex.cmc:ProductTag/>` |	**Tags associadas** |
| `<vtex.cmc:PageSearch/>` |	**Busca dentro da página de produto** |
| `<vtex.cmc:BuyButton/>` |	**Botão Comprar:** exibe o botão para adicionar o produto ao carrinho. Se o produto estiver esgotado, este controle exibirá a opção de Avise-me, [se ela estiver habilitada](https://help.vtex.com/pt/tutorial/configurar-o-avise-me--2VqVifQuf6Co2KG048Yu6e).  |
| `<vtex.cmc:BuyInPage/>` |	**Botão Comprar (Assíncrono):** este controle adiciona o item ao carrinho de maneira assíncrona, ou seja, sem sair da página do produto. Para o seu funcionamento correto deste controle, é obrigatória a utilização do controle `<vtex.cmc:AmountItemsInCart/>` , [descrito posteriormente neste artigo](#controles-para-paginas-de-departamento-categoria-e-busca). |
| `<vtex.cmc:stockKeepingUnitAmountAndUnitSelection />` | **Seletor de quantidade com unidade multiplicadora:** renderiza um campo de quantidade fracionada, trabalhando em conjunto com a unidade de medida e multiplicador de unidade (cadastrados no SKU) e resultando na quantidade a ser comprada. |
| `<vtex.cmc:evaluationRate/>` |	**Avaliações dos consumidores (estrelas):** exibe o total de classificações feitas pelos usuários. |
| `<vtex.cmc:UserReview/>` |	**Avaliações e comentários:** adiciona a opção de avaliar o produto e fazer um comentário. Exibe o resultado das avaliações e comentários de clientes. |
| `<vtex.cmc:giftListInsertSku/>` |	**Adicionar produto a uma lista** |
| `<vtex.cmc:GiftListFormV2/>` |	**Form para criação de uma lista** |
| `<vtex.cmc:HightLight/>` |	**Flag de Destaque de Coleção** |
| `<vtex.cmc:discountHightLight/>` |	**Flags Destaques de Promoções** |
| `<vtex.cmc:sellerDescription />` |	**SellerDescription:** nome e imagem cadastrados para o seller do produto em questão. |
| `<vtex.cmc:SellerOptions />` |	**SellerOptions:** exibe os sellers que entregam o produto da página, o preço do produto vendido por cada seller e o parcelamento (limite de até 3 preços diferentes). |
| `<vtex.cmc:SalesChannelDropList />` |	**Lista de Políticas Comerciais:** exibe uma lista com as políticas comerciais disponíveis. |
| `<vtex:contentPlaceHolder id="ColecaoQVVT"/>` |	**Prateleira “Quem viu viu também”:** no CMS, adiciona um controle do tipo Produtos Relacionados. Ao editar o elemento, selecionar `QuemViu_Viu_Tambem` no campo `_Tipo` e criar novo template de prateleira. |
| `<vtex:contentPlaceHolder id="ColecaoQVCT"/>` |	**Prateleira “Quem viu comprou também”:** no CMS, adiciona um controle do tipo Produtos Relacionados. Ao editar o elemento, selecionar `QuemComprou_Viu_Tambem` no campo `_Tipo` e criar novo template de prateleira. Para funcionar de forma adequada, sua loja precisa de um fluxo elevado de visitantes e compras. |
| `<vtex:contentPlaceHolder id="ColecaoQCCT"/>` | **Prateleira “Quem comprou comprou também”:** no CMS, adiciona um controle do tipo Produtos Relacionados. Ao editar o elemento, selecionar `QuemComprou_Comprou_Tambem` no campo `_Tipo` e criar novo template de prateleira. |
| `<vtex:contentPlaceHolder id="Similares"/>` |	**Similar (Produtos Suplentes):** no CMS, adiciona um controle do tipo **Produtos Relacionados**. Ao editar o elemento, selecionar `Similar` no campo **Tipo**. |
| `<vtex:contentPlaceHolder id="Acessorios"/>` |	**Accesórios:** no CMS, adiciona um controle do tipo **Produtos Relacionados**. Ao editar o elemento, selecione `Acessorios` no campo **Tipo**. |
| `<vtex:contentPlaceHolder id="Sugestoes"/>` |	**Sugestões:** no CMS, adiciona um controle do tipo **Produtos Relacionados**. Ao editar o elemento, selecione `Sugestão` no campo **Tipo**. |
| `<vtex.cmc:facebookLike/>` |	**Facebook Like** |

### Controles de RichSnippets

O controle `<vtex.cmc:productRichSnippets />` adiciona tags específicas de compartilhamento de informações com redes sociais (Google microformats, Facebook Open Graph e Twitter card). As ferramentas de teste são:

1. [Google Structured Data Testing Tool](https://www.google.com/webmasters/tools/richsnippets)
2. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
3. [Twitter Card Validator](https://cards-dev.twitter.com/validator)

| Propriedade | Valores Possíveis |
|---|---|
| `showGoogle` |`{ “1”, “true”, “on”, “sim” }` |
| `showFacebook` | `{ “1”, “true”, “on”, “sim” }` |
| `Twitter` | `@accountname` da conta do Twitter
| `doNotshowPrice` | `{ “1”, “true”, “on”, “sim” }` |
| `googleRate` | `{ “1”, “true”, “on”, “sim” }` |
| `fbAdmins` ||
| `fbAppId` ||

| Controle        | Exemplo de uso         |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `<vtex.cmc:productRichSnippets showGoogle="1"/>` | Para que o produto seja indexado pelo Google, o controle precisa ser inserido dentro da tag `<body>` |
| `<vtex.cmc:productRichSnippets showFacebook="1" fbAdmins="[fbAdmins]" fbAppId="[fbAppId]"/>` | No caso do Facebook, o controle precisa ser inserido dentro da tag `<head>`. As configurações de `fbAdmins` e `fbAppId` são opcionais. |
| `<vtex.cmc:productRichSnippets Twitter="[TwitterAccount]"/>`     | No caso do Twitter, o controle pode ser inserido dentro de `<head>` ou `<body>`. As configurações também podem ser agrupadas.     |

## Controles para Páginas de Departamento, Categoria e Busca

| Controle | Descrição |
|---|---|
| `<vtex.cmc:advancedSearchFilter/>` |	**Filtro de Busca Avançada**
| `<vtex.cmc:singleDepartmentNavigator/>` |	**Menu de Departamento:** atributo disponível é `keepCurrentPath`. Quando o atributo está configurado com o valor `true`, os produtos serão exibidos na página exibida. |
| `<vtex.cmc:searchNavigator/>` |	**Menu / filtro de Busca:** apresenta um menu com os departamentos e categorias cadastrados na sua loja (1° e 2° níveis). Para exibir o link **Lista Completa**, é necessário que você tenha habilitado o campo **Menu** durante a [criação das categorias](https://help.vtex.com/pt/tutorial/cadastrando-categoria--tutorials_206).
| `<vtex.cmc:miniCart/>`          | **Controle Minicart:** controle de carrinho utilizado no menu superior em todas as páginas, exceto no Checkout e na página de confirmação da compra. Esse controle exibe informações do carrinho: itens, quantidades e preços.             |
| `<vtex.cmc:AmountItemsInCart/>` | **Quantidade de itens no carrinho:** exibe informações básicas do carrinho. É obrigatório utilizar este controle caso você utilize o controle `<vtex.cmc:BuyInPage/>`. Ele pode ser utilizado para os casos de [KitLook](https://help.vtex.com/tutorial/como-montar-um-kit-look/), por exemplo. |
| `<vtex.cmc:searchResult/>`      | Resultado da busca de produtos. Veja abaixo quais são os atributos deste controle.       |

Confira a seguir a descrição dos atributos do controle `<vtex.cmc:searchResult/>`:

| Atributo da Tag               | Descrição                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------- |
| `layout`                    | Atributo obrigatório. Código do template da prateleira que exibirá os produtos.                 |
| `itemCount`                 | Atributo obrigatório. Quantidade de itens por página.                                           |
| `columnCount`               | Atributo obrigatório. Quantidade de colunas. |
| `showUnavailable`           | Quando o atributo está setado para true significa que devem ser exibidos os produtos esgotados. |
| `selectionMode=”batch-buy”` | Atributo não obrigatório que permite a realização de compra em lote.                            |
| `isTrackable`               | Quando o atributo está setado para true significa que este controle deve ser rastreável.        |
| `InternalCampaign`          | Nome da audiência de campanha interna.        |
| `InternalPart`              | Nome da _viewpart_ interna.                    |

Exemplo de uso do controle de resultados de busca:
```
<vtex.cmc:searchResult layout="48e223e6-da80-4610-b3d5-4e5cfaf94f13" itemCount="10" columnCount="4" isTrackable="true" InternalCampaign="Resultado busca landing" InternalPart="Resultado Busca" /> 
```

Para mais informações, leia o tutorial [Controles do template de prateleira](https://help.vtex.com/tutorial/controles-do-template-de-prateleira/).

## Outros controles
| Controle | Descrição |
|--------- |---------- |
|`<vtex.cmc:orderList/>`| Exibe a listagem de pedidos do cliente para a aba **Pedidos** da página **Minha Conta** - `/account/orders` |
|`<vtex.cmc:accountUserProfile/>`| Exibe os dados de cadastro do cliente para a página **Minha conta** - `/account` |
|`<vtex.cmc:accountAddress/>`| Exibe os endereços cadastrados do cliente para a página **Minha conta** - `/account`|
| `<vtex.cmc:sellerInfo />` |	Exibe informações cadastradas para o seller, devendo ser utilizado na página de detalhes de um seller, na pasta `seller-info`. |

## Controles deprecados

| Controle               | Descrição               | Página            |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `<vtex.cmc:productPageTitle/>`    | **Título do produto:** controle deprecado.                  | Página de produto |
| `<vtex.cmc:stockKeepingUnitSelection/>`         | **Seleção de SKU:** controle deprecado. Agora você precisa utilizar o `<vtex.cmc:skuSelection/>`. | Página de produto |
| `<vtex.cmc:skuRichSelection changeImage="1"/>`                        | **Seleção de SKU Checkbox:** controle deprecado.     | Página de produto |
| `<vtex.cmc:shippingValue/>`                                            | **Calcular valor do frete e prazo de entrega:** controle deprecado, pois apresenta um [problema conhecido](https://help.vtex.com/known-issues/a-viewpart-shippingvalue-nao-exibe-prazos-em-horas-corretamente--5hvl9eGxPLZAuNcFAFc9Vb). | Página de produto |
| `<vtex.cmc:stockKeepingUnitService/>`                                  | **Serviços do SKU:** controle deprecado.       | Página de produto |
| `<vtex.cmc:StockKeepingUnitPriceHistory Months="6" Percentile="100"/>` | **Histórico de Preço**     | Página de produto |
| `<vtex.cmc:evaluationRate/>`    |   **Avaliações dos consumidores (estrelas):** controle deprecado. Exibia a média em estrelas das classificações feitas pelos usuários.               | Página de produto |
| `<vtex.cmc:UserReview/>`    | **Avaliações e comentários:** controle deprecado. Anteriormente, exibia a opção de avaliar o produto com estrelas, um formulário para fazer comentários, os resultados das avaliações e os comentários realizados.      | Página de produto |
| `<vtex.cmc:welcomeMessage/>`   |   **Login do usuário:** controle deprecado.  Anteriormente, era responsável pela criação do cookie IPI utilizado pelo controle `<vtex.cmc:UserReview/>`. Sem ele, ao tentar fazer uma avaliação, o login era requerido em loop.                | Página de produto |

