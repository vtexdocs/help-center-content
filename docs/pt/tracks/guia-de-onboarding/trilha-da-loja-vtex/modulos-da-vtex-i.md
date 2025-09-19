---
title: 'Módulos da VTEX I'
id: 75MX4aorniD0BYAB8Nwbo7
status: PUBLISHED
createdAt: 2024-01-17T19:53:53.326Z
updatedAt: 2025-01-13T14:57:00.646Z
publishedAt: 2025-01-13T14:57:00.646Z
firstPublishedAt: 2024-02-22T14:07:05.427Z
contentType: trackArticle
productTeam: Others
slugEN: vtex-modules-i
locale: pt
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: trilha-da-loja-vtex
order: 5
---

A plataforma VTEX se organiza em diferentes módulos, cada um deles responsável por uma parte da operação da loja. Este artigo apresenta uma visão geral e principais configurações dos seguintes módulos:

- [Catálogo](#catalogo)
- [Preços](#precos)
- [Promoções](#promocoes)
- [Logística](#logistica)

> ℹ️ O artigo [Módulos da VTEX II](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ) apresenta os módulos [Pagamentos](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#pagamentos), [Pedidos](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#pedidos), e [Checkout](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#checkout).

## Catálogo

[Catálogo](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR) é o módulo da VTEX onde lojistas configuram produtos para torná-los disponíveis no site da loja. É a estrutura do catálogo que define a experiência de compra dos clientes no ecommerce ao navegar nas categorias de classificação dos produtos. Uma [visão geral de Catálogo](/pt/tutorial/catalog-overview--77M8ItLhDXs6aBdQTqToVe) para desenvolvedores sobre a [Catalog API](https://developers.vtex.com/docs/api-reference/catalog-api) pode ser encontrada no guia [Catalog](https://developers.vtex.com/docs/guides/catalog-overview).

### Antes de começar em Catálogo

Não existem configurações prévias que devam ser realizadas antes das configurações no Catálogo, mas vale ressaltar os seguintes pontos de atenção:

- __Navegação do cliente no site:__ é importante que a loja planeje como deseja organizar sua [árvore de categorias](#arvore-de-categorias) e saber de antemão qual experiência de navegação deseja promover aos clientes na hierarquia de categorias.
- __Tornar produtos disponíveis para clientes:__ para [disponibilizar um produto na loja](/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382), após as configurações de Catálogo, é preciso que o SKU tenha [preço](#precos) cadastrado e [logística](#logistica) para envio. Além disso, o CMS da loja precisa estar configurado corretamente.

### Arquitetura do Catálogo

A arquitetura do Catálogo apresenta alguns conceitos fundamentais: categoria, marca, produto, SKU (_Stock Keeping Unit_) e especificação. A imagem abaixo ilustra a relação entre esses conceitos:

![arquitetura-catalogo-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/trilha-da-loja-vtex/modulos-da-vtex-i_1.png)

O catálogo da loja deve ser criado seguindo a ordem dos passos abaixo:

1. Criação da [árvore de categorias](#arvore-de-categorias).
2. Cadastro de [Marcas](#marcas).
3. Cadastro de [Especificações](#especificacoes).
4. Importação de [Produtos](#produtos).
5. Importação de [SKUs](#skus).

A tabela a seguir apresenta as principais configurações de Catálogo da loja, conforme a ordem de criação:

| **Assunto** | **Configuração via Admin VTEX** | **Configuração via API** |
| :--- | --- | :--- |
| 1. [Árvore de categorias](/pt/tutorial/catalog-overview--77M8ItLhDXs6aBdQTqToVe#categorias) | [Cadastrar uma Categoria](/pt/tutorial/cadastrando-categoria--tutorials_206) | - [Categories](https://developers.vtex.com/docs/guides/categories) <br> - [Create Category](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/category) |
| 2. [Marcas](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh) | [Cadastrar marcas](/pt/tutorial/cadastrando-marcas--tutorials_1414) | - [Brands](https://developers.vtex.com/docs/guides/brands) <br> - [Create Brand](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/brand) |
| 3.1. [Especificações de produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacao-de-produto) | [Cadastrar especificações ou campos de produto](/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106) | - [Product specifications](https://developers.vtex.com/docs/guides/product-specifications) <br> - [Create Specification](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/specification) |
| 3.2. [Especificações de SKU](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacao-de-sku) | [Cadastrar especificações ou campos de SKU](/pt/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119) | - [SKU specifications](https://developers.vtex.com/docs/guides/sku-specifications) <br> - [Create Specification](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/specification) |
| 4. [Produtos](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru) | [Cadastrar produtos](/pt/tutorial/cadastrando-produtos--tutorials_2567) | - [Products](https://developers.vtex.com/docs/guides/products) <br> - [Create Product with Category and Brand](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product) |
| 5. [SKUs](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) | [Preencher campos de cadastro de SKU](/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY?&utm_source=autocomplete) | - [SKUs](https://developers.vtex.com/docs/guides/skus) <br> - [Create SKU](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit) |

<br>

> ⚠️ Para saber como importar produtos de um sistema ERP (Enterprise Resource Planning) ou PIM (Product Information Manager) para a plataforma VTEX, veja o artigo [Integrações de backend](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu).

#### Árvore de categorias

A [árvore de categorias](/pt/tutorial/catalog-overview--77M8ItLhDXs6aBdQTqToVe#categorias) é a definição da estrutura base do Catálogo. As categorias atuam como níveis hierárquicos de classificação de produtos, simplificando a busca do cliente e mantendo o catálogo da loja organizado. 

Recomendamos a criação de uma hierarquia de até três níveis, incluindo [Departamento](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf#departamento), [Categorias](/pt/tutorial/catalog-overview--77M8ItLhDXs6aBdQTqToVe#categorias) e [Subcategorias](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf#subcategoria). No entanto, algumas lojas podem se beneficiar de uma estrutura mais simples de dois níveis, com Departamentos e Categorias. Isso depende da complexidade da operação e tipos de produtos oferecidos.

**Exemplo:** Departamento `Feminino`, Categoria `Blusas e camisas` e Subcategoria `Camisetas`.

Antes de importar o catálogo da loja para a VTEX, recomendamos começar a trabalhar na árvore de categorias criando uma tabela como a ilustrada abaixo. Isto permite uma melhor visualização de como a árvore está organizada e como as especificações serão apresentadas.

![catalog_arquitecture_table_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/trilha-da-loja-vtex/modulos-da-vtex-i_2.png)

> ℹ️ Informações sobre como importar especificações para back-office podem ser encontradas no artigo [Integrações de backend](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu).

#### Marcas

[Marcas](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh) geralmente identificam a empresa que cria ou revende um ou mais produtos. Na VTEX, é necessário cadastrar as marcas de maneira independente e, ao criar um produto, é obrigatório associá-lo a uma marca já cadastrada na loja.

#### Especificações

[Especificações](/pt/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) são propriedades adicionais que podem ser atribuídas a produtos e SKUs da loja, como por exemplo, tamanho, cor, voltagem ou material. Ou seja, existem [especificações de produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacao-de-produto) e [especificações de SKU](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacao-de-sku).

No __Catálogo__ da VTEX, as especificações são criadas na seguinte ordem:

1. __Grupos de especificações__: são agregadores de campos de especificação. Devem ser atribuídos a categorias. É comum apenas um grupo ser criado no nível raiz e todos os campos de especificação serem associados a este grupo.
2. __Campos de especificação__: são os campos que irão possuir as informações adicionais de produtos e SKUs. Devem ser atribuídos a categorias e grupos de especificações.
3. __Valores de especificação__: são valores de escolha atribuídos aos campos de especificação.

As especificações seguem a hierarquia do Catálogo, então quando um desses grupos é criado em um Departamento ou Categoria, ele é herdado nos níveis abaixo.

#### Produtos

O [Produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru) é o nível da organização do catálogo que se localiza na hierarquia abaixo das Categorias e acima dos SKUs. Como o produto está acima do SKU na hierarquia do catálogo, podemos entendê-lo como uma definição genérica dos itens que são vendidos em sua loja. É obrigatório que um produto tenha pelo menos um SKU associado a ele.

#### SKUs

[SKU](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) (_Stock Keeping Unit_) é uma variação do produto e representa a unidade física em estoque que é adquirida pelo cliente. O SKU é o último nível na organização de um catálogo e, para ficar ativo, é necessário que o SKU tenha uma imagem e especificações preenchidas.

### Configurações opcionais do Catálogo

A tabela a seguir apresenta outras configurações opcionais de Catálogo na VTEX:

| **Funcionalidade** | **Descrição** | **Saiba mais** |
| :---: | :--- | :--- |
| Coleções | Uma coleção representa o agrupamento de dois ou mais produtos que podem ou não compartilhar características específicas. <br> As coleções podem ser criadas com o propósito de associar produtos com base em critérios diversos, como datas comemorativas, lançamentos ou produtos mais vendidos. | __Help Center__ <br> - [Coleções - Definição de conceito](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4hN41yU8IPeb8HKmmaXoca) <br> - [Cadastrar Coleções (Beta)](/pt/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye)  <br> __Developer Portal__  <br> - [Create Collection](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/collection/) <br> - [Get All Inactive Collections](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/collection/inactive) <br> - [Get All Collections](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/collection/search) <br> - [Get Collections by search terms](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/collection/search/-searchTerms-) <br> - [Import File Example](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/collection/stockkeepingunit/importfileexample) <br> - [Add products to Collection by imported file](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/collection/-collectionId-/stockkeepingunit/importinsert) |
| Anexos | Um anexo é uma customização opcional e gratuita do produto, usada para adicionar informações a um SKU. | __Help Center__ <br> - [Cadastrar um anexo](/pt/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU) <br> - [Como criar um anexo de assinatura](/pt/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK?&utm_source=autocomplete) <br> - [O que é um Anexo?](/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm?&utm_source=autocomplete)  <br> __Developer Portal__ <br> - [Catalog API - Attachment](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/attachment/-attachmentid-) <br> - [Catalog API - SKU attachment](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuattachment) |
| Assembly Options | Assembly Options é um tipo de anexo para casos complexos, como personalização de produtos, no qual você precisa gerenciar diferentes combinações de produtos, quantidade, itens adicionais, custos e estoque, e exibir essas opções na página do produto. | __Developer Portal__ <br> - [Assembly Options](/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH) <br> - [Assembly Option App](https://developers.vtex.com/docs/guides/assembly-options-app) |
| Serviços | Serviço com custo extra que pode ser oferecido com um produto de forma opcional. Ele é usado para atribuir um serviço adicional a um SKU, como embalagem de presente, personalização ou acordos de garantia especial. | __Help Center__ <br> - [O que é um Serviço?](/pt/tutorial/o-que-e-um-servico--46Ha8CEEQoC6Y40i6akG0y) <br> - [Gerenciamento de Serviços](/pt/tutorial/gerenciamento-de-servicos--3sGqSI93t878ETAWzCZ0E2) <br> - [Importação de Serviços](/pt/tutorial/importacao-de-servicos--2LRgMnGbX0af7krrs6tXy3) <br> - [Relatório de Serviços](/pt/tutorial/relatorio-de-servicos--7djPWfxtf9qb6hFTOgKDE8) <br> - [Agendamento de Serviços](/pt/tutorial/agendamento-de-servicos--78HPYBxDCmpCfa8i40zo7R)  <br> __Developer Portal__ <br> - [Catalog API - SKU service](https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/skuservice/-skuServiceId-) <br> - [Catalog API - SKU service attachment](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicetypeattachment) <br> - [Catalog API - SKU service type](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicetype) <br> - [Catalog API - SKU service value](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicevalue) |
| Kits | Um kit é um conjunto de SKUs que são vendidos juntos, ou seja, um SKU composto por um ou mais SKUs. | __Help Center__ <br> - [O que é um kit?](/pt/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28) <br> - [Cadastrar kit](/pt/tutorial/cadastrando-kit--tutorials_215) <br> __Developer Portal__ <br> - [Catalog API - SKU Kit](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-kit) |

## Preços

[Preços](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) é o módulo da VTEX responsável pela criação, edição e armazenamento dos dados de preços dos SKUs da loja. Para que um produto seja vendido, o cliente precisa saber quanto custa cada item exibido na loja. O módulo de preços possui funcionalidades que permitem o uso de diferentes estratégias de precificação no seu negócio.

### Antes de começar em Preços

Antes de configurar os preços da loja, é necessário cadastrar o [Catálogo](#catalogo) com os produtos que serão vendidos. O catálogo da loja deve conter [categorias](/pt/tutorial/cadastrando-categoria--tutorials_206), [marcas](/pt/tutorial/cadastrando-marcas--tutorials_1414), [produtos](/pt/tutorial/cadastrando-produtos--tutorials_2567) e [SKUs](/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY) já cadastrados e ativos. Caso o cadastro do catálogo tenha sido realizado pela [integração com um sistema ERP](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu#integracao-com-erp), é essencial checar se as informações estão corretas antes de prosseguir. 

### Como funciona o módulo Preços

É importante conhecer os principais termos relacionado ao módulo, eles são apresentados na tabela a seguir:

| **Termo** | **Definição** |
| :---: | :--- |
| Preços | Informações dos valores de venda dos SKUs da loja. |
| [Tabelas de preços](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8) | Conjunto de preços de SKUs que pode ser aplicado a um determinado contexto, como a uma [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV). Essas tabelas guardam as informações dos preços que são exibidos no storefront da loja. |
| Preço de custo | Preço que foi pago pela loja para adquirir o SKU. |
| Markup | Margem de lucro desejada pela loja com a venda do SKU. |
| [Preço base](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#definicao) | Valor calculado através da combinação entre o __preço de custo__ e o __markup__. É o preço de referência do SKU para todas as tabelas de preço. |
| [Preço de lista](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) | Preço de venda sugerido para um SKU. Este preço será exibido na página de produto como o preço __De__ e o preço base funciona como o preço __Por__. |
| [Regra de preço](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/2rBirbpB7wLnei4dQ9KGMW) | Altera o preço de um SKU para apenas uma tabela de preço sem alterar o preço base das demais. Para isso, é necessário cadastrar uma regra de preço associada à tabela desejada. |
| [Preço fixo](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy#definicoes) | Preço que se sobrepõe a todas as outras configurações de preços existentes numa tabela de preços. |
| [Arredondamento de preços](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/1tUIUvF6BUkDgMsknGaMkF#definicoes) | Estratégia de precificação que se baseia no arredondamento de preços. Este método tem como objetivo influenciar a decisão de compra do consumidor ao exibir preços com um formato mais amigável e intuitivo. |
| [Trava de preço](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7JZhLmI3mjBVu0RMOueoy3#definicao) | Configura as variações máximas e mínimas do preço de um item. Esta funcionalidade garante que os preços dos SKUs não sejam alterados para valores indesejados. |

Mais informações sobre a arquitetura de preços podem ser encontradas no artigo [Arquitetura do sistema de preços](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx).

### Cadastrar tabela de preços

A arquitetura do módulo Preços é organizada a partir de três conceitos fundamentais:

- Preços
- Tabelas de preços
- Contextos de aplicação das tabelas de preços

Os preços são as informações dos valores de venda dos seus SKUs. Estes preços são armazenados em tabelas de preços. Por sua vez, estas tabelas de preços podem ser aplicadas a diferentes contextos.

O relacionamento entre preços, tabela de preço e o contexto que será aplicado está representado na imagem abaixo:

![Conceito de Preços-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/trilha-da-loja-vtex/modulos-da-vtex-i_3.png)

É possível cadastrar tabelas de preços para os SKUs da loja de três maneiras:

- [Via Admin VTEX](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/2WQ3pVYfQpXkJnHr7VTFBv#admin)
- [Via planilha](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D#)
- [Via API](https://developers.vtex.com/docs/api-reference/pricing-api)

Preços podem ser agendados para eventos especiais, como descrito no artigo [Agendar preço](/pt/tutorial/agendar-preco--4vVha6TGzYkguWuMOqCcCk).

### Relação entre tabelas de preços e políticas comerciais

Há uma diferença entre as tabelas de preços criadas para [políticas comerciais](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) e tabelas de preços criadas para outros contextos.

As tabelas de preços não associadas a políticas comerciais podem ser usadas em contextos como __promoções__ e __clusters de clientes__. As tabelas criadas para políticas comerciais só podem ser associadas à própria política comercial. Assim, a tabela de preço associada a uma política comercial informa o preço dos SKUs para esta política e não pode ser associada a outros contextos.

> ⚠️ Os conceitos de **tabela de preços** e [política comercial](LINK) são diferentes. A política comercial é o contexto ao qual uma tabela de preços é associada.

Ao configurar uma política comercial, é essencial [especificar a moeda que será utilizada na loja](/pt/tutorial/criar-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE). A criação de políticas comerciais distintas, cada uma associada a uma moeda diferente, possibilita à loja exibir preços em diversas moedas para os clientes. 

## Promoções

Na VTEX, o lojista pode criar uma série de regras para determinar se os clientes podem ter descontos em certos contextos de compra e esses descontos devem ser aplicados. [Promoções](/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR) é o módulo VTEX responsável pela criação, edição e aplicação de descontos no carrinho de compras de clientes.

### Antes de começar em Promoções

Antes de configurar as promoções da loja, é necessário cadastrar o [Catálogo](/pt/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe#) com os produtos que serão vendidos e estabelecer os [preços](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu#) dos SKUs na loja.

### Como funciona o módulo Promoções

Neste contexto, é importante conhecer os principais termos utilizados, conforme apresentado na tabela abaixo:

| **Termo** | **Definição** |
| :---: | :--- |
| Promoção | Desconto concedido ao cliente, podendo estar associado a um ou mais produtos do carrinho, ou ainda ao frete ou a um brinde. |
| Cupom | Código promocional, composto de uma sequência de letras e números. Os cupons são associados a promoções sobre o valor do carrinho. Assim, ao informar o código de um cupom válido no momento da compra, o cliente pode obter descontos sobre o valor do pedido. |
| Audiência de campanha | Audiência de campanha é uma funcionalidade que permite definir o [público-alvo](/pt/tutorial/audiencias-de-campanhas--3o7lhpNseXY2WmjZO0gQ6m#publico-alvo) para uma promoção. A funcionalidade consiste em criar critérios para segmentar clientes. A partir desses critérios, a plataforma VTEX valida automaticamente se os clientes são elegíveis a uma determinada audiência de campanha e, consequentemente, às [promoções de campanha](/pt/tutorial/promocao-de-campanha--1ChYXhK2AQGuS6wAqS8Ume) associadas. |
| Promoção de campanha | A promoção de campanha é sempre atrelada a uma audiência de campanha, ou seja, um público alvo específico. Uma promoção desse tipo será aplicada somente para o público-alvo definido na campanha. |

### Criar promoções

Na VTEX, o lojista pode criar uma série de regras que, de acordo com o contexto da compra, determinam se e como o desconto será aplicado. Entre os parâmetros considerados por essas regras, estão: listas de produtos, listas de clientes, intervalos de CEP, valor mínimo de itens no carrinho, entre outros.

Os descontos podem ser de dois tipos principais:

- __Nominal__: desconto de um valor bruto, como R$ 20.
- __Percentual__: desconto de um valor percentual, como 10% do valor total do carrinho.

Há seis tipos diferentes de promoções, cada uma relacionada a um cenário diferente:

| **Tipo de promoção** | **Definição** |
| :---: | :--- |
| [Promoção Regular](/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) | Promoção que permite à loja oferecer descontos de forma flexível, combinando múltiplas condições, restrições e benefícios. |
| [Compre Junto](/pt/tutorial/compre-junto--tutorials_323) | Promoção utilizada para conceder desconto para produtos quando colocados ao mesmo tempo no carrinho. O desconto pode ser aplicado em ambos os produtos. Ainda há a opção de o desconto ser aplicado apenas se for inserida no carrinho uma determinada quantidade de um dos produtos. |
| [Leve Mais Por Menos](/pt/tutorial/leve-mais-por-menos--tutorials_325) | Promoção usada para conceder desconto quando o cliente adiciona várias unidades do mesmo produto ao carrinho. |
| [Desconto Progressivo](/pt/tutorial/desconto-progressivo--tutorials_324) | Promoção utilizada quando se deseja oferecer um percentual de desconto para determinada quantidade de produtos inseridos no carrinho. |
| [Compre e Ganhe](/pt/tutorial/compre-e-ganhe--tutorials_322) | Promoção utilizada para oferecer frete grátis ou um brinde caso determinado produto seja comprado. |
| [Promoção de Campanha](/pt/tutorial/promocao-de-campanha--1ChYXhK2AQGuS6wAqS8Ume) | Promoção que é sempre atrelada a uma audiência de campanha, ou seja, a um público alvo específico. |

Para todas as promoções, é possível definir um período de validade, além de restrições e limitações de uso. Promoções também podem ser agendadas para eventos especiais, como descrito no artigo [Agendamento para eventos especiais](/pt/tutorial/agendamento-para-eventos-especiais--2nd50tPWdKK4waXRZLg0JI#agendar-promocoes).

Mais informações sobre possibilidades de aplicação de promoções podem ser conferidas no artigo [Exemplos de promoção](/pt/tutorial/exemplos-de-promocao--5A8UTc7knvAscxo7e7rMFD).

### Criar cupons

É possível criar cupons de desconto pelo [Admin VTEX](/pt/tutorial/criar-cupom-beta--7lMk3MmhNp2IEccyGApxU) ou por [API](https://developers.vtex.com/docs/guides/creating-and-managing-coupons-with-promotions-api). Para ser utilizado, um cupom precisa estar vinculado a pelo menos uma promoção. 

> ⚠️ Há uma quantidade limitada de cupons ativos. A reutilização de cupons é altamente recomendada, uma vez que um grande número de cupons pode comprometer o desempenho do módulo de Promoções.

### Criar promoções de campanha

Antes de criar uma promoção de campanha, é necessário criar uma [audiência de campanha](/pt/tutorial/criar-audiencia-de-campanha--6cnuDZJzIkIeocewAQQK4K) para definir o público alvo da promoção. Assim, é possível selecionar segmentos de clientes elegíveis na promoção, que funcionam como gatilho, a partir dos critérios definidos pelo lojista.

Uma vez que a audiência de campanha foi criada, é preciso associá-la a uma [Promoção Regular](/pt/tutorial/promocao-regular--tutorials_327), criando assim uma promoção de campanha. Esse tipo de promoção engloba todas as possibilidades presentes na [Promoção Regular](/pt/tutorial/promocao-regular--tutorials_327) e algumas opções a mais, que são:

- Público-alvo específico.
- Frete grátis para todos os fretes disponíveis.
- Tabela de preços promocionais.
- Brinde entregue por sellers.

### Destaque de promoções na página de produto

É possível dar destaque a uma promoção na página do produto (PDP). Para isso, basta seguir as passos abaixo:

1. [Crie uma promoção](/pt/tutorial/criar-promocoes--tutorials_320) de qualquer tipo, com exceção da promoção Compre Junto.
2. Ative o campo __Destaque nos produtos__ no formulário da promoção.
3. Salve a promoção.
4. No [CMS Legado](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), insira o controle de exibição de promoção no template: `<vtex.cmc:discountHightLight/>`. 

### Sincronização de datas de promoção, banners e ativos digitais

É importante se certificar de uma coordenação perfeita ao sincronizar a linha do tempo das promoções com as datas de entrega dos banners e ativos digitais. Para isso, as datas das promoções e dos banners devem ser verificados. Esse alinhamento estratégico garante que as campanhas promocionais sejam apoiadas por materiais visuais oportunos e relevantes, maximizando seu impacto e eficácia.

## Logística

Na VTEX, o módulo [Logística](/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx) é o responsável pela [logística e o fulfillment](/pt/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP) de pedidos da loja, incluindo planejamento, transporte, armazenamento de produtos e envio de pedidos a clientes.

### Antes de começar em Logística

Para realizar as configurações de logística, é necessário ter concluído as seguintes etapas:

- __Cadastrar catálogo__: como o fulfillment de pedidos está relacionado ao armazenamento de itens, os produtos e SKUs da loja precisam estar cadastrados no [Catálogo](#catalogo).
- __Configurar política comercial__: as [políticas comerciais](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) moldam a experiência do cliente no site de uma loja, segmentando desde condições de venda para cada público, até produtos ofertados, preços, promoções e formas de envio.

Além disso, caso o modelo de negócio envolva lojas internacionais e vendas [cross-border](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/5qgXy9Erm7FDP3UB5Ox8Bs), é importante primeiro considerar qual seria o modelo de [arquitetura da loja](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#arquitetura-da-loja).

### Configurações obrigatórias em Logística

O conjunto de configurações essenciais de logística de uma loja VTEX é chamado de [Estratégia de envio](/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3), composta de três conceitos principais: política de envio, estoque e doca.

- __[Política de envio](#politica-de-envio)__: conjunto de regras que definem as opções de envio do pedido e condições de frete.
- __[Doca](#doca)__: local de distribuição dos itens vendidos.
- __[Estoque](#estoque)__: espaço físico de armazenamento das mercadorias vendidas.

A imagem abaixo mostra como esses conceitos se relacionam entre si na venda de um produto:

![shipping_strategy_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/trilha-da-loja-vtex/modulos-da-vtex-i_4.png)

A tabela a seguir apresenta as principais configurações de logística da loja na VTEX:

>  A ordem de configuração inicial sugerida é a seguinte: primeiro política de envio, segundo doca e terceiro estoque.

| **Assunto** | **Configuração via Admin VTEX** | **Configuração via API** |
| :---: | :--- | :--- |
| [Política de envio](#politica-de-envio) | [Política de Envio](/pt/tutorial/politica-de-envio--tutorials_140) | [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) |
| [Doca](#doca) | [Gerenciar Doca](/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) | [Create/update dock](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/docks) |
| [Estoque](#estoque) | [Gerenciar Estoque](/pt/tutorial/gerenciar-estoque--tutorials_137) | [Create/update warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) |
| [Inventário](#gerenciamento-de-inventario) | [Gerenciamento de inventário](/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139) | [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-) |

#### Política de envio 

[Política de envio](/pt/tutorial/politica-de-envio--tutorials_140) é um conjunto de regras que definem as opções e condições de envio que serão apresentadas aos clientes no checkout. As condições de envio incluem transportadora, prazos de entrega, custo de frete, entre outros. A política de envio é vinculada ao estoque pela doca.

A [transportadora](/pt/tutorial/o-que-e-uma-transportadora--7u9duMD5UQa2QQwukAWMcE) que será responsável pelo envio do pedido é determinada por meio da política de envio. Primeiro, o cadastro de transportadoras é feito na [planilha de frete](/pt/tutorial/planilha-de-frete--tutorials_127), em seguida, a planilha de frete é associada quando se cria uma política de envio.

#### Doca
A [doca](/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) é o local a partir dos quais os itens são distribuídos e escoados para envio, o ponto intermediário entre estoques e transportadoras. Pela doca, ocorre a integração entre estoque, política comercial e política de envio. Alguns dos casos de uso são:

- Diferentes pontos de escoamento para um único estoque.
- Doca como centro de distribuição.
- Doca e estoque correspondem ao mesmo espaço físico.

Para determinados produtos, é possível que não exista necessidade de um espaço físico de distribuição. Ainda assim, a doca é uma configuração obrigatória para o funcionamento correto das operações da plataforma VTEX.

#### Estoque

É a partir do [estoque](/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) que se inicia a rota logística. Ele corresponde ao espaço físico de armazenamento das mercadorias vendidas pela loja. Uma vez que os itens vendidos são separados do estoque, eles são encaminhados para a doca.

### Gerenciamento de inventário

O [inventário](/pt/tutorial/gerenciar-inventario--tutorials_139) da loja corresponde aos itens armazenados que estão disponíveis para a venda. O estoque é a identificação do local físico de armazenamento, enquanto o inventário é o conjunto de SKUs em estoque que estão prontos para serem vendidos.

> ❗ Na VTEX, a atualização de inventário após a venda dos itens precisa ser controlada pela própria loja. Desta forma, após a venda, o lojista garante o devido controle da quantidade de itens restantes e de operações de fatura com ERP. Informações sobre importação de inventário via back-office podem ser encontradas no artigo [Integrações de backend](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu).

### Lead time

No Admin VTEX, em __Catálogo > Estoque > Gerenciamento de inventário__, existe uma configuração opcional chamada [Lead time](/pt/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B), que permite atribuir um tempo de envio a nível de SKU. Configurar o lead time significa adicionar um período de tempo ao [cálculo](#calculo-de-envio-de-pedidos) de envio de pedido, o que é estratégico em alguns contextos.

Dentre os [principais casos de uso](/pt/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B#principais-casos-de-uso), podemos citar produtos de fornecedores externos, cenários de _dropshipping_ e venda de itens personalizáveis. Poder configurar o lead time significa ter mais flexibilidade para definir prazos de manipulação e envio do produto por terceiros.

### Cálculo de envio de pedidos

Para [calcular o prazo de envio](/pt/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) de pedidos, a plataforma VTEX considera as seguintes configurações:

![Envio de Pedidos_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/trilha-da-loja-vtex/modulos-da-vtex-i_5.png)

- [Lead time](/pt/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B): quantidade de tempo configurável para o SKU de um estoque. A configuração é opcional e, por padrão, está definida como zero dias.
- [Tempo de estoque](/pt/tutorial/gerenciar-estoque--tutorials_137): tempo que o SKU leva para sair de um estoque para uma [doca](/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj). Essa configuração é obrigatória, mas o tempo pode ser definido igual a zero.
- [Tempo de doca](/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW): tempo que o SKU leva para sair da doca para ser enviado para o cliente. Essa configuração é obrigatória, mas o tempo pode ser definido igual a zero.
- [Política de envio](/pt/tutorial/politica-de-envio--tutorials_140): agrupa as regras e condições de envio apresentadas aos clientes no checkout, incluindo transportadoras, custo de envio, horário de funcionamento da transportadora, janelas de entrega e capacidade de entrega.

O [simulador de envio](/pt/tutorial/simulador-de-envio--tutorials_144) permite ao lojista simular e analisar as opções de entrega disponíveis para um pedido em uma localidade. A simulação verifica a viabilidade e as condições de envio do pedido, tais como disponibilidade de itens, formas de envio, custos e prazos.

### Configurações opcionais de Logística

Para atender a diversos modelos de negócio, a plataforma VTEX disponibiliza uma série de configurações opcionais, conforme apresentado na tabela abaixo:

| **Funcionalidade** | **Descrição** |
| :---: | :--- |
| Pontos de retirada | [Pontos de retirada](/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) são locais físicos que a loja configura para que os clientes possam retirar seus pedidos. Configurar pontos de retirada é interessante para operações omnichannel, especialmente quando há um grande número de lojas físicas, pois cada loja física pode se tornar uma opção para o cliente retirar seu pedido, aumentando a versatilidade da sua malha logística. |
| Feriados | A funcionalidade [Feriados](/pt/tutorial/cadastrar-feriados--2ItOthSEAoyAmcwsuiO6Yk) permite que a loja configure dias que não são válidos para o envio, e isso será considerado ao calcular o prazo de envio do pedido. |
| Reserva | A [reserva](/pt/tutorial/como-a-reserva-funciona--tutorials_92) é uma solução que impede que um mesmo item seja vendido mais de uma vez. Quando o cliente apenas insere o produto no carrinho, isso não gera reserva, sua prioridade sobre o item só ocorre após a finalização do pedido. |
| Capacidade de entrega | A [Capacidade de entrega](/pt/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi#capacidade-de-entrega) é o limite de envios que podem ser realizados pela loja em determinado período. Poder delimitar uma quantidade de itens ou pedidos que podem ser enviados em cada janela de envio significa ter mais controle sobre o preparo de pedidos e aumentar as chances de cumprir o acordo de entrega feito ao cliente no checkout. |
| Geolocalização | [Geolocalização](/pt/tutorial/gerenciar-geolocalizacao--tutorials_138) é o cadastro dos locais de envio a partir da latitude e longitude dos endereços. Essa funcionalidade é muito utilizada em endereços de zonas rurais e industriais, onde há divisão por lotes, ou áreas de risco, quando é preciso excluir determinados locais de entrega dentro de uma região. |

Outras informações sobre conceitos logísticos na VTEX podem ser encontradas no artigo [Glossário de logística](/pt/tutorial/glossario-de-logistica--16DSSiXn548rsidi0A8Hby), e conteúdo para desenvolvedores sobre a [Logistics API](https://developers.vtex.com/docs/api-reference/logistics-api#overview), no artigo [Fulfillment and Logistics](https://developers.vtex.com/docs/guides/fulfillment).
