---
title: 'Integrações de backend'
id: 7euXDZR5CCnVFSrXyczIhu
status: PUBLISHED
createdAt: 2024-02-05T13:23:32.848Z
updatedAt: 2024-02-23T02:06:48.878Z
publishedAt: 2024-02-23T02:06:48.878Z
firstPublishedAt: 2024-02-22T14:06:58.203Z
contentType: trackArticle
productTeam: Others
slugEN: backend-integrations
locale: pt
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: trilha-da-loja-vtex
order: 4
---

Normalmente, as integrações começam com os softwares de back-office, permitindo o gerenciamento de partes essenciais da operação relacionadas a [Catálogo](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalogo), [Preços](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#precos), [Logística](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistica), [Pedidos](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#pedidos). Os principais tipos de software presentes no back-office são:

- ERP (Enterprise Resource Planning)
- WMS (Warehouse Management System)
- PIM (Product Information Manager)
- CRM (Customer Relationship Management)

Além do back-office, pode-se integrar a plataforma de comércio eletrônico a outros sistemas que adicionam novos recursos. Um exemplo são os [provedores de pagamento](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#pagamentos), que permitem a comunicação entre a plataforma VTEX e os provedores para realizar o processamento dos pagamentos e incluir métodos de pagamento adicionais no [Checkout](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#checkout).

## Integração com ERP

A configuração de integração do back-office de uma loja começa pelo software ERP (Enterprise Resource Planning). É possível que outros tipos de software sejam utilizados no back-office para finalidades específicas, como o PIM (Product Information Manager) lidando com dados de produtos, e o WMS (Warehouse Management System) lidando com inventário.

ERPs e outros tipos de softwares podem possuir integrações nativas com a VTEX. Caso não possua, será necessário implementar um middleware próprio utilizando as [APIs da VTEX](https://developers.vtex.com/docs/api-reference) para integrar o software com a conta VTEX.

A configuração tem duas fases: a **configuração inicial** e a **configuração de middleware**. Após esta configuração, estará visível o fluxo em andamento, utilizado para a operação do dia a dia da loja. Veja mais detalhes sobre a configuração no [Back office integration guide (ERP/PIM/WMS)](https://developers.vtex.com/docs/guides/erp-integration-guide).

### Configuração inicial

Nesta fase são feitos os procedimentos para que a [conta VTEX](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex) receba todas as informações relacionadas aos produtos. Aqui serão integrados o catálogo, os produtos, os preços e o inventário da loja. Em geral, as configurações desta fase podem ser feita de três formas: 

- Integração com ferramentas externas.
- Importação de planilhas.
- Inserção manual pelo Admin VTEX.

Os passos de configuração desta fase devem ser seguidos na ordem apresentada abaixo. Os detalhes sobre cada passo estão descritos nas respectivas subseções da seção [Integrações](#integracoes) deste artigo.

1. [Arquitetura do Catálogo](#arquitetura-do-catalogo)

  a. Árvore de categorias

  b. Marcas

  c. Especificações (grupos e campos)

2. [Importação dos produtos](#importar-produtos)

  a. Importar produtos

  b. Importar especificações dos produtos

  c. Adicionar os produtos à política comercial

  d. Importar SKUs

  e. Importar especificações dos SKUs

  f. Importar imagens dos SKUs

3. [Importação dos preços](#precos)

  a. Definir preço-base

  b. Definir preços fixos para contextos específicos

4. [Importação do inventário](#inventario)

  a. Criar estoques

  b. Atualizar inventário de SKUs

### Configuração de middleware

Nesta fase são feitos os procedimentos para permitir que a loja processe os pedidos. Aqui serão integradas as notificações sobre alterações dos pedidos e as ações para executar o processamento dos pedidos. A integração pode ser realizada de duas formas:

- **Integração de plataformas:** esta opção envolve a utilização de uma plataforma de terceiros, conhecida como Platform-as-a-Service (PaaS), que já oferece uma solução pronta para integrar-se à VTEX, demandando um esforço mínimo de desenvolvimento.
- **Desenvolvimento interno:** esta opção envolve a construção e manutenção do próprio software de integração. O middleware deve ser capaz de lidar com questões de escalabilidade que podem surgir com picos de vendas, como os que costumam acontecer em eventos de vendas como a Black Friday.

Os passos para esta configuração devem ser seguidos na ordem apresentada abaixo. Os detalhes sobre cada passo estão descritos nas respectivas subseções da seção [Integrações](#integracoes).

1. [Configuração de integração/notificação de pedidos](#integracao-de-pedidos)

  a. Configurar feed ou hook

2. [Configuração de processamento de pedidos](#processamento-de-pedidos)

  a. Alterar pedido

  b. Cancelamento

  c. Faturamento

  d. Rastreamento

### Comportamento da integração com ERP

Após configurar a loja e fazer a integração com middleware, o fluxo geral de informações terá o seguinte formato:

![ERP-integrations-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/trilha-da-loja-vtex/integracoes-de-backend_1.jpg)

Cada uma das requisições ou processos representados pelas setas no diagrama acima é acionada por um tipo diferente de evento na operação do dia a dia de um ecommerce. Para saber mais detalhes sobre esse fluxo, veja o [Back office integration guide (ERP/PIM/WMS)](https://developers.vtex.com/docs/guides/erp-integration-guide#ongoing-middleware-flow).

## Integrações

Nesta seção, serão abordadas as principais integrações para o funcionamento de uma loja VTEX. Essas integrações abrangem uma ampla gama de aspectos, desde a integração de catálogo e dados de clientes até a gestão de pedidos e autenticação única (SSO). Cada uma dessas integrações será examinada a seguir.

### Arquitetura do Catálogo

Na VTEX, o [Catálogo](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalogo) é o módulo para configurar as características dos produtos da loja de forma a tornar estes produtos disponíveis para os clientes. O Catálogo deve ser criado seguindo a ordem dos passos abaixo:

1. Criação da [árvore de categorias](#arvore-de-categorias).
2. Cadastro de [Marcas](#marcas).
3. Cadastro de [Especificações (opcional)](#especificacoes).
4. Importação de [Produtos](#importar-produtos).
5. Importação de [SKUs](#importar-produtos).
6. [Associação de especificações a produtos e SKUs](#importar-produtos).

Mais informações sobre configuração do Catálogo com back-office nos artigos [Catalog](https://developers.vtex.com/docs/guides/catalog-overview) e [Set up catalog](https://developers.vtex.com/docs/guides/erp-integration-set-up-catalog).

#### Árvore de categorias

Após compreender e planejar a [Arquitetura do Catálogo](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#arquitetura-do-catalogo) da loja, a criação das categorias pode ser realizada pelas seguintes formas:

1. __Admin VTEX:__ criar cada categoria usando a interface de usuário. Veja os detalhes em [Cadastrar Categorias](/pt/docs/tracks/cadastrar-categorias).
2. __API do Catálogo:__ criar cada categoria fazendo chamadas de API. Veja os detalhes na [API do Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/category).
3. __Integração com back-office:__ importar as categorias a partir de um software externo de back-office (ERP ou PIM) integrado à VTEX. O software pode já oferecer integração nativa com a VTEX ou requerer o desenvolvimento de um middleware que utiliza a [API do Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#overview). Veja os detalhes em [Migração de Categorias a partir do ERP](https://developers.vtex.com/docs/guides/erp-integration-set-up-catalog#category-migration-from-erps).

> ⚠️ Ao importar as categorias de um software externo, a estrutura de categorias no software pode ser diferente da VTEX. Nesse caso, é recomendado criar uma categoria simulada inativa que não será visível no storefront e que pode ser usada para receber todos os produtos e SKUs durante a importação. Após a conclusão da importação, os produtos podem ser arranjados manualmente no Admin VTEX para se adequarem à árvore de categorias desejada.

Existem algumas limitações para lidar com categorias, são elas:

- __Mover categorias:__ embora seja possível mover categorias para diferentes níveis (mais alto/mais baixo) e/ou diferentes departamentos, isto é muito arriscado devido às especificações anexadas à categoria. Esta ação pode negativamente afetar informações sobre o produto, já que produtos herdam não apenas as especificações anteriores, mas também as novas.
- __Apagar categorias:__ não é possível apagar uma categoria a menos que se faça uma [limpeza completa](/pt/docs/tutorials/manutencao-de-base-full-cleanup) do catálogo da loja.

Mais informações sobre importação para back-office de categorias no artigo [Categories](https://developers.vtex.com/docs/guides/categories).

#### Marcas

[Marcas](/pt/docs/tracks/marcas-definicao-de-conceito) são atributos de produtos que ajudam os clientes a identificar o produto e a empresa responsável por ele. Um produto deve estar associado a uma única marca, o que significa que criar marcas é um passo obrigatório na configuração do Catálogo. É possível criar marcas das seguintes formas:

1. __Admin VTEX:__ criar cada marca usando a interface de usuário. Veja os detalhes em [Cadastrar Marcas](/pt/docs/tracks/cadastrar-marcas).
2. __API do Catálogo:__ criar cada marca fazendo chamadas de API. Veja os detalhes na [API do Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/brand).
3. __Integração com back-office:__ importar as marcas a partir de um software externo de back-office (ERP ou PIM) integrado à VTEX. O software pode já oferecer a integração nativa com a VTEX ou pode requerer o desenvolvimento de um middleware que utiliza a [API do Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#overview). Veja os detalhes em [Criar Marcas no guia de configuração do Catálogo para back-office](https://developers.vtex.com/docs/guides/erp-integration-set-up-catalog#create-brands).

> ⚠️ Caso o sistema de back-office não possua informação sobre marcas, pode ser feito o mesmo procedimento mencionado acima para migração de categorias, criando uma marca simulada inativa, exclusivamente para fins de migração. Posteriormente, as informações dos produtos podem ser inseridas manualmente.

Mais informações sobre importação para back-office de marcas para no artigo [Brands](https://developers.vtex.com/docs/guides/brands).

#### Especificações

[Especificações](/pt/docs/tracks/especificacoes-definicao-de-conceito) são propriedades adicionais que podem ser atribuídas a produtos e SKUs da loja para serem usadas na criação de filtros de busca e para diferenciar SKUs e produtos na página do produto. A criação de especificações pode ser realizada por meio de [integrações de back-office](https://developers.vtex.com/docs/guides/erp-integration-set-up-catalog#create-specifications-groups) utilizando a [Catalog API](https://developers.vtex.com/docs/api-reference/catalog-api#overview).

Existem três tipos de especificações e elas devem ser criadas na seguinte ordem:

1. Grupos de especificações
2. Campos de especificação
3. Valores de especificação

O diagrama abaixo ilustra este procedimento:

![catalog_specification_diagram_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/trilha-da-loja-vtex/integracoes-de-backend_2.png)

As especificações seguem a hierarquia do Catálogo. Quando um grupo é criado em um departamento ou categoria, ele será herdado nos níveis abaixo. 

Após criar grupos, campos e valores, deve ser feita a associação de especificações a produtos e SKUs. Estes procedimentos estão descritos na próxima seção, [Importar produtos](#importar-produtos).

Mais informações sobre importação para back-office de especificações no artigo [Specifications](https://developers.vtex.com/docs/guides/specifications).

### Importar produtos

Importar produtos refere-se ao ato de transferir todas as informações relevantes do produto de um sistema ERP ou PIM para a plataforma VTEX. Esta etapa mantém o catálogo de produtos atualizado e sincronizado com a loja. Seja lidando com uma ampla variedade de produtos, SKUs ou variações diferentes, a importação eficaz de produtos é essencial para a experiência do cliente.

Na VTEX, é importante compreender a distinção entre Produtos e SKUs:

- [Produto](/pt/docs/tracks/produtos-definicao-de-conceito): unidade abstrata do catálogo, visível nas prateleiras da loja. 
- [SKU](/pt/docs/tracks/sku-definicao-de-conceito): unidade concreta do catálogo no estoque, representando as variações específicas de um produto, como cor, tamanho e outros atributos. Os SKUs são exibidos como itens individuais em páginas de produtos.

> ℹ️ A maneira como produtos e SKUs são estruturados tem impacto direto na experiência de compra dos clientes.

A importação de produtos segue os passos na ordem da tabela abaixo:

| **Ação** | **Descrição** | **Métodos** |
| :--- | :--- | :--- |
| [1. Importar produtos](https://developers.vtex.com/docs/guides/products) | Registrar os produtos no catálogo. | <ul><li>Integração pela [API do Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product)</li><li>Importação de planilhas ([método clássico](/pt/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ#spreadsheet) e [app google-drive-import](https://developers.vtex.com/docs/apps/vtex.google-drive-import@0.x)).</li><li>Entrada manual no [Admin VTEX](/pt/docs/tracks/cadastrar-produto).</li></ul>|
| [2. Importar especificações dos produtos](https://developers.vtex.com/docs/guides/product-specifications) | Preencher as especificações dos produtos no catálogo. | <ul><li>Integração usando a [API do Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/specification).</li><li>Entrada manual no [Admin VTEX](/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106#preencher-especificacoes-de-produto).</li></ul> |
| [3. Adicionar os produtos à política comercial](https://developers.vtex.com/docs/guides/erp-integration-import-products#add-product-to-trade-polic) | Associar os produtos às devidas [políticas comerciais](/pt/docs/tutorials/como-funciona-uma-politica-comercial), definindo regras específicas (Preços, Pagamentos, estratégia de envio, etc.) de acordo com o canal de venda ou público. No mínimo, deve-se adicionar todos os produtos à política comercial principal. | <ul><li>Integração usando a [API do Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/salespolicy/-tradepolicyId-).</li><li>Entrada manual no [Admin VTEX ao cadastrar um produto](/pt/docs/tracks/cadastrar-produto).</li></ul> |
| [4. Importar SKUs](https://developers.vtex.com/docs/guides/skus) | Adicionar SKUs aos produtos no Catálogo. | <ul><li>Integração usando a [API do Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit).</li><li>Entrada manual no [Admin VTEX](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ#adicionar-novo-sku-a-um-produto-ja-cadastrado).</li></ul> |
| [5. Importar especificações dos SKUs](https://developers.vtex.com/docs/guides/sku-specifications) | Preencher as especificações dos SKUs no Catálogo. | <ul><li>Integração usando a [API do Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/specification).</li><li>Entrada manual no [Admin VTEX](/pt/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119#preencher-especificacoes-de-sku).</li></ul> |
| [6. Importar imagens dos SKUs](https://developers.vtex.com/docs/guides/images) | Adicionar imagens aos SKUs. | <ul><li>Integração usando a [API do Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file).</li><li>Entrada manual no [Admin VTEX](/pt/docs/tutorials/como-atualizar-a-imagem-de-um-sku).</li></ul> |

> ⚠️ É comum que as informações de produtos no ERP não sejam adequadas para uso e exibição em um ecommerce. Por isso, deve ser feito um processo de enriquecimento, que pode incluir a reestruturação de categorias, e a criação de descrições de produtos mais descritivas e cativantes.

Após a importação, também é importante garantir que as informações sobre produtos e SKUs se mantenham atualizadas. Veja as instruções no artigo [Update or delete information](https://developers.vtex.com/docs/guides/erp-integration-updating-and-deleting-information).

Mais informações sobre importação para back-office de produtos no artigo [Import products](https://developers.vtex.com/docs/guides/erp-integration-import-products).

### Preços

[Preços](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#precos) são as informações dos valores de venda dos SKUs, os quais são armazenados em [tabelas de preços](/pt/docs/tracks/tabelas-de-preco-definicao-de-conceito). Para garantir que os produtos da loja tenham preços competitivos e adaptados aos diferentes canais de vendas, é necessário compreender como as informações de preços são integradas à VTEX. 

Em operações de venda, é comum delegar o cálculo do preço para o ERP, de onde esses dados podem ser importados. Os preços têm um valor base definido para cada SKU e podem variar de acordo com o contexto. Os passos para realizar a importação de preços são:

1. **Definir preço-base:** o preço-base serve como referência para determinar o preço de um produto no sistema de precificação da VTEX. O preço-base de um SKU pode ser importado por integração utilizando a [API de Preços](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-) ou [criado pelo Admin VTEX](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29#admin).
2. **Definir preços fixos para contextos específicos:** o preço-base pode ser ajustado ou modificado com base em regras específicas, cálculos ou preços fixos para chegar ao preço final de varejo do SKU em diferentes contextos, a depender da [política comercial](/pt/docs/tutorials/como-funciona-uma-politica-comercial), [grupo de clientes](/pt/docs/tutorials/como-criar-um-cluster-de-clientes), [promoção](/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR), entre outros fatores. Os preços fixos para contextos específicos podem ser importados por integração utilizando a [API de Preços](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-), [importados por planilha](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D#importacao-de-precos) ou [criados pelo Admin VTEX](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3g39iXkQza4AW7C7L814mj#admin).

Após a importação, também é importante garantir que as informações sobre preços se mantenham atualizadas. Veja as instruções no artigo [Update or delete information](https://developers.vtex.com/docs/guides/erp-integration-updating-and-deleting-information#pricing-updates).

Mais informações sobre importação para back-office de preços no artigo [Import prices](https://developers.vtex.com/docs/guides/erp-integration-import-prices).

### Inventário

No módulo [Logística](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistica) da VTEX, o [inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque) é a relação entre os itens de venda de uma loja (SKUs) e os locais onde estes itens estão armazenados, conhecidos como [estoques](/pt/docs/tutorials/estoque). Gerenciar com eficiência o inventário de uma loja é uma etapa essencial para importar o inventário para a VTEX e garantir que os clientes possam acessar informações precisas de disponibilidade de produtos, agilizando o processo de [logística e envio](/pt/docs/tutorials/fulfillment-logistica-vtex).

Os passos para realizar a importação de inventário são:

1. **Criar estoques:** cadastrar os locais físicos ou virtuais onde os SKUs serão armazenados. Os estoques podem ser importados por integração utilizando a [API de Logística](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) ou [criados pelo Admin VTEX](/pt/tutorial/gerenciar-estoque--tutorials_137#cadastrar-estoque).
2. **Atualizar inventário de SKUs:** inserir a quantidade disponível de cada item nos estoques. O inventário pode ser importado por integração utilizando a [API de Logística](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-), por [planilha de estoque](/pt/docs/tutorials/importando-e-exportando-planilha-de-estoque) ou [atualizado pelo Admin VTEX](/pt/docs/tutorials/atualizacao-da-quantidade-de-itens-em-estoque).

Após a importação, também é importante garantir que as informações sobre preços se mantenham atualizadas. Para conferir as instruções, basta acessar o artigo [Update or delete information](https://developers.vtex.com/docs/guides/erp-integration-updating-and-deleting-information#pricing-updates).

Mais informações sobre importação para back-office de inventário no artigo [Import inventory](https://developers.vtex.com/docs/guides/erp-integration-import-inventory).

### Dados de clientes

A importação de dados de clientes permite integrar informações de clientes de outros sistemas, como aplicações de CRM (Customer Relationship Management), com a VTEX. Por padrão, a VTEX armazena os dados dos clientes no [Master Data V1](/pt/docs/tutorials/master-data). 

Os dados no Master Data são organizados em [entidades de dados](/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#entidades-de-dados), que podem ser comparadas a tabelas em outros sistemas de bancos de dados, contendo [documentos](/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#documentos) que se assemelham a linhas ou registros. Os dados de perfil dos clientes são armazenados na entidade `CL` e os endereços dos clientes na entidade `AD`.

Os passos para realizar a importação de dados de clientes são:

1. **Criar novos perfis de clientes:** criar documentos na entidade `CL` contendo os dados de perfil dos clientes, como nome, email, telefone, entre outros. Estes dados podem ser importados por integração utilizando a [API do Master Data](https://developers.vtex.com/docs/api-reference/masterdata-api#post-/api/dataentities/-acronym-/documents).
2. **Criar endereços:** criar documentos na entidade `AD` contendo os endereços dos clientes, incluindo informações como rua, cidade, código postal, etc. Cada endereço é associado a um cliente, e um cliente pode ter vários endereços associados. Estes dados podem ser importados por integração utilizando a [API do Master Data](https://developers.vtex.com/docs/api-reference/masterdata-api#post-/api/dataentities/-acronym-/documents).

Mais informações sobre importação para back-office de dados de clientes no artigo [Import customer data](https://developers.vtex.com/docs/guides/import-customer-data).

## Integração de pedidos

[Pedidos](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#pedidos) são gerados na plataforma VTEX assim que um cliente clica no botão de finalizar a compra no checkout. Cada pedido carrega várias informações, incluindo os itens do carrinho, o valor da compra, o método de pagamento, entre outros.

A integração de pedidos permite a comunicação entre a aplicação de back-office, ERP ou WMS, e o OMS (_Order Management System_) da VTEX. Tal integração desempenha um papel fundamental para:

- Lidar com os eventos relacionados às mudanças de [status do pedido](/pt/docs/tutorials/fluxo-e-status-de-pedidos).
- Obter [detalhes do pedido](/pt/docs/tutorials/pagina-de-detalhes-do-pedido).
- Transmitir as informações relacionadas ao [processamento de pedidos](#processamento-de-pedidos).

#### Receber atualizações de pedidos

Com o back-office recebendo as atualizações dos pedidos, é possível agilizar e automatizar os procedimentos realizados no [processamento de pedidos](#processamento-de-pedidos), como faturamento e cancelamento.

Existem duas formas de rastrear mudanças de status de pedidos na VTEX:

- [Feed v3](https://developers.vtex.com/docs/guides/orders-feed): é uma lista de eventos sobre atualizações de pedidos. Para este tipo de integração, a VTEX fornece um [endpoint](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/orders/feed/config?endpoint=get-/api/orders/feed/config) para que o back-office possa realizar consultas aos itens da lista, processar os pedidos, e em seguida, remover os itens da lista.
- [Hook](https://developers.vtex.com/docs/guides/orders-feed#hook): é um canal para envio automático de notificações sobre atualizações de pedidos. Para este tipo de integração, a aplicação de back-office fornece um [endpoint](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/orders/hook/config?endpoint=get-/api/orders/hook/config) para que a VTEX o notifique sobre atualizações dos pedidos. Após receber uma notificação, o back-office procede com o processamento do pedido.

Para os dois tipos de integração, é possível aplicar [filtros](https://developers.vtex.com/docs/guides/orders-feed#filter) para selecionar os tipos de evento que devem ser processados pelo back-office.

> ℹ️ Para a maioria dos casos, a VTEX recomenda a integração de pedidos pelo [Feed v3](https://developers.vtex.com/docs/guides/orders-feed) devido à sua resiliência.

#### Obter detalhes do pedido

Além das mudanças de status, a operação pode precisar obter informações adicionais sobre um pedido. As informações detalhadas de um pedido podem ser obtidas através da [API de Pedidos](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-), a qual pode ser utilizada em uma integração com o sistema de back-office desejado.

Os detalhes do pedido são utilizados em vários procedimentos no processamento de pedidos, como os itens do pedido para fazer o manuseio e o valor da compra para fins de faturamento.

#### Iniciar manuseio

Após os detalhes do pedido serem submetidos ao back-office, o passo final antes de iniciar o processamento de pedidos é alterar o status do pedido para `Iniciar manuseio`. Este procedimento pode ser integrado com o back-office pela [API de Pedidos](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling).

Mais informações sobre integração para back-office de pedidos nos artigos [Set up order integration](https://developers.vtex.com/docs/guides/erp-integration-set-up-order-integration) e [Feed v3](https://developers.vtex.com/docs/guides/orders-feed).

### Processamento de pedidos

Nesta etapa, é configurada a integração para enviar atualização de pedidos do back-office, ERP ou WMS, para a VTEX. Durante o manuseio de um pedido, várias ações podem ser aplicadas, incluindo alteração, cancelamento e faturamento.

Abaixo se encontram os eventos que o back-office pode transmitir para a VTEX. A integração entre a VTEX e o back-office para a transmissão desses eventos é realizada por meio da [API de Pedidos](https://developers.vtex.com/docs/api-reference/orders-api).

- **Alterar pedido:** alterar itens ou valores do pedido.
- **Cancelar pedido:** finalizar o pedido e cancelar o pagamento.
- **Faturar pedido:** [inserir a nota fiscal ao pedido](/pt/docs/tracks/faturar-um-pedido). Essa é a indicação de que o pedido foi concluído com sucesso e está pronto para ser enviado.
- **Rastrear pedido:** enviar as informações de rastreamento. Pode ser o código ou URL de rastreamento da transportadora, ou as notificações sobre atualizações no rastreamento.

Mais informações sobre configurar processamento de pedidos para back-office nos artigos [Set up order processing](https://developers.vtex.com/docs/guides/erp-integration-set-up-order-processing) e [Change order](https://developers.vtex.com/docs/guides/change-order).

### SSO (Single Sign-On)

Single Sign-On é um sistema que permite a autenticação de usuários na plataforma utilizando um único conjunto de credenciais de login, eliminando a necessidade de fazer login separadamente em cada aplicativo. A VTEX oferece suporte à integração de provedores de identidade externos. Além das integrações nativas com serviços, como o [Google](/pt/docs/tutorials/cadastrar-client-id-e-client-secret-para-login-com-google), é possível criar novas integrações com outros provedores.

O **VTEX ID** é o serviço responsável por identificar os usuários na plataforma. Este serviço opera de acordo com a audiência, as regras de negócios, e o tipo de persona que pode interagir com cada módulo VTEX. As audiências disponíveis são:

| **Audiência** | **Contexto** | **Tecnologia** |
| :---: | :--- | :--- |
| [Admin VTEX](https://developers.vtex.com/docs/guides/login-integration-guide-admin-saml2) | Identificação no painel administrativo VTEX, também conhecido como [Admin VTEX](/pt/docs/tutorials/admin-vtex-comece-aqui), destinado a administradores e operadores da loja. | SAML 2.0 (Security Assertion Markup Language). |
| [Webstore](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2) | Identificação no storefront VTEX, destinado a clientes da loja. | OAuth 2.0 (Open Authorization). |

Mais informações no artigo [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide).

### Pagamentos

Os sistemas de [Pagamento]() da VTEX oferecem recursos extensivos para dar suporte a vários [métodos de pagamento](https://developers.vtex.com/docs/guides/payments-integration-payment-methods), [condições](/pt/docs/tutorials/condicoes-de-pagamento) e integrações. Os pagamentos na VTEX possuem as seguintes opções de [fluxo de compra](https://developers.vtex.com/docs/guides/payments-integration-purchase-flows):

- **Transparente:** o pagamento acontece diretamente no checkout, e o comprador escolhe o método de pagamento.
- **Redirecionamento:** abre uma nova janela no navegador do comprador, onde o pagamento é processado por um serviço externo. Após finalizar o pagamento, o comprador retorna ao checkout para finalizar a compra.
- **Payment App:** abre uma janela modal na página do checkout. Ao finalizar o pagamento, a janela se fecha e o fluxo da compra continua no checkout. Este fluxo também pode ser utilizado para o método de autenticação [3D Secure 2 (3DS2)](https://developers.vtex.com/docs/guides/payments-integration-payment-app#scenario-2-payment-app-and-3d-secure-2).

Para adicionar pagamentos em uma loja VTEX, existem as seguintes opções:

- **Provedor de pagamentos suportado nativamente:** caso a VTEX ofereça a integração com o provedor de pagamentos desejado, é necessário possuir um contrato com o provedor e configurar as opções de pagamento através do Admin VTEX. Veja os detalhes sobre configurações no artigo [Pagamentos](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#pagamentos) e os provedores de pagamentos suportados pela VTEX na [Lista de Provedores de Pagamentos por País](/pt/docs/tutorials/lista-de-provedores-de-pagamento-por-pais).
- **Provedor de pagamentos personalizado:** Caso o provedor de pagamentos desejado não possua uma integração com a VTEX, é necessário criar uma integração de pagamento utilizando o [Payment Provider Protocol](/pt/docs/tutorials/payment-provider-protocol) contendo os [endpoints da API](https://developers.vtex.com/docs/api-reference/payment-provider-protocol) para se conectar com o nosso [gateway de pagamentos](/pt/docs/tutorials/o-que-e-um-gateway-de-pagamentos). O conector pode ser implementado por uma [agência parceira da VTEX](https://vtex.com/pt-br/parceiros/). Para que o provedor seja disponibilizado na VTEX, é necessário testar a integração criada e passar pelo [processo de homologação](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-homologation). 

Mais informações sobre integrar um novo provedor de pagamentos no artigo [Integrating a new payment provider on VTEX](https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex).

### Vales-presente

Na VTEX, vales-presente, também conhecidos como gift cards, podem ser usados como uma opção de pagamento no **Checkout**, e como parte de programas de fidelidade. A VTEX fornece uma solução nativa de vales-presente e também suporta integrações com provedores de vale-presente externos.

Para adicionar vales-presente em uma loja VTEX, existem as seguintes opções:

- **Solução nativa de vales-presente:** caso deseje utilizar a solução nativa de vales-presente da VTEX ou alguma integração já existente, deve-se configurar os vales-presente pelo Admin VTEX seguindo os passos do artigo [Configurar Vale-presente](/pt/docs/tutorials/gift-card).
- **Provedor de vales-presente personalizado:** caso o provedor de vales-presente desejado não possua uma integração com a VTEX, é necessário implementar a própria integração utilizando o [Gift Card Provider Protocol](/pt/tutorial/integrando-com-gift-card). Através deste protocolo, provedores podem desenvolver uma integração contendo os endpoints descritos na nossa [Gift Card Provider Protocol API](https://developers.vtex.com/docs/api-reference/giftcard-provider-protocol#overview) e conectar com o nosso [Gift Card Hub](https://developers.vtex.com/docs/api-reference/giftcard-hub-api#overview).

### Antifraude

O antifraude é um sistema especializado em analisar as compras realizadas nos sites, com o intuito de identificar operações fraudulentas. Na VTEX, primeiro a operadora do pagamento aprova a compra e, em seguida, o antifraude avalia o pedido. 

Para adicionar um sistema de antifraude aos pagamentos de uma loja VTEX, existem as seguintes opções:

- **Sistema de antifraude suportado nativamente:** caso já exista uma integração com o sistema de antifraude desejado na VTEX, é necessário possuir um contrato com uma das empresas parceiras e fazer a configuração no Admin VTEX. Mais informações nos artigos [Configurar o antifraude](/pt/docs/tutorials/como-configurar-antifraude) e [O que é antifraude?](/pt/docs/tutorials/o-que-e-antifraude).
- **Sistema de antifraude personalizado:** caso o sistema de antifraude desejado não possua uma integração com a VTEX, é necessário implementar a própria integração de antifraude utilizando o [Antifraud Provider Protocol](https://developers.vtex.com/docs/guides/how-the-integration-protocol-between-vtex-and-antifraud-companies-works) contendo os endpoints da [Anti-fraud Provider API](https://developers.vtex.com/docs/api-reference/antifraud-provider-protocol).

## Extensões e apps

Além dos serviços essenciais oferecidos pela VTEX, é possível aprimorar as funcionalidades das lojas VTEX com a incorporação de extensões. Essas extensões são ferramentas que ampliam as capacidades da plataforma VTEX e oferecem diversas possibilidades, como adicionar provedores de pagamento e marketplace, personalizar o storefront, construir serviços de backend personalizados e criar novas aplicações para o Admin VTEX.

Uma das formas de inserir novas funcionalidades à plataforma VTEX é criando apps utilizando o [VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io), nossa plataforma de desenvolvimento responsável por proporcionar um gerenciamento de alto desempenho, escalabilidade e segurança robusta. Com o VTEX IO, desenvolvedores focam em construir soluções de negócio sem se preocupar com questões de infraestrutura.

### O que é um app na VTEX

Um [app](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-a-vtex-app) na VTEX é uma aplicação construída utilizando o VTEX IO. Apps são um tipo de extensão, ou seja, também são responsáveis por estender as funcionalidades da plataforma VTEX. Apps podem ser [desenvolvidos](https://developers.vtex.com/docs/app-development) localmente, com código personalizado, e posteriormente integrados às lojas que operam na nossa infraestrutura. Apps também podem ser disponibilizados e adquiridos através da [VTEX App Store](https://developers.vtex.com/docs/guides/vtex-app-store).

Os tipos de apps disponíveis na VTEX são:

- [Storefront](/pt/docs/tracks/implementacao-de-frontend): temas de loja desenvolvidos com o [Store Framework](/pt/tracks/store-development--3fHF3GIjK8UugnQKIakpl9/5DTcawNjc5MovtD7HNqURl#store-framework).
- [Frontend](https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developing-storefront-apps-using-react-and-vtex-io): componentes [React](https://react.dev/) que compõem temas de loja desenvolvidos com Store Framework.
- [Admin VTEX](https://learn.vtex.com/docs/course-admin-lang-en): módulos e funcionalidades para o [Admin VTEX](/pt/docs/tutorials/admin-vtex-comece-aqui).
- [Serviços (backend)](https://developers.vtex.com/docs/guides/vtex-io-documentation-service): serviços [Node](https://nodejs.org/en) ou [.NET Core](https://dotnet.microsoft.com/en-us/) capazes de lidar com eventos e gatilhos, exportar rotas HTTP, e expor resolvedores GraphQL.
- [Pixel](https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developnativeintegrationswithpixelapps): scripts de serviços terceiros que são executados na frente de loja (frontend), provendo soluções como monitoramento de vendas, suporte ao usuário, coleta de dados e serviços de marketing.
- [Edition](https://developers.vtex.com/docs/guides/vtex-io-documentation-edition-app): conjunto de configurações, políticas, apps backend e frontend encapsulados e exportados por uma [Sponsor Account](https://developers.vtex.com/docs/guides/vtex-io-documentation-sponsor-account).

Para conhecer as opções de implementação de apps, basta conferir a [lista de builders](https://developers.vtex.com/docs/guides/vtex-io-documentation-builders#list-of-builders).

Mais informações no artigo [O que é um App VTEX](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-a-vtex-app). 

### O que levar em consideração ao escolher um app para ser instalado na sua loja?

Antes de iniciar o processo de desenvolvimento de um novo app, é recomendável explorar as soluções prontas para instalação na sua loja. Essas soluções podem ser encontradas no [Hub de Extensões](/pt/tracks/extensions-hub--AW7klkYMh557y5IUOgzco), o painel do Admin VTEX que centraliza o gerenciamento de extensões. No Hub de Extensões estão disponíveis os seguintes painéis:

- **App Store:** marketplace onde estão disponíveis apps desenvolvidos pela VTEX e por terceiros. Neste painel é possível visualizar, adquirir e instalar apps para uma conta VTEX. Existem apps gratuitos e pagos, que possuem diversas formas de cobrança.
- **Gerenciamento de Aplicativos:** página que permite instalar, desinstalar, remover e configurar apps na loja.

Veja alguns exemplos de soluções disponíveis na App Store:

- [Assembly Options](https://developers.vtex.com/docs/guides/assembly-options-app): adiciona opções de [anexos](/pt/docs/tutorials/o-que-e-um-anexo) para personalização de SKUs. Por exemplo, adicionar uma frase em uma camiseta ou ingredientes em um sanduíche.
- [Gift List](https://developers.vtex.com/docs/apps/vtex.list): permite criar listas de presente, que podem ser compartilhadas para que outras pessoas comprem os itens a serem presenteados. São úteis para eventos como aniversário, casamento e chá de bebê. Os itens comprados são transformados em créditos na loja, que podem ser utilizados para comprar quaisquer itens disponíveis na loja.
- [Live Shopping](https://developers.vtex.com/docs/apps/vtexventures.livestreaming): permite a transmissão ao vivo no site da loja para engajar os clientes em tempo real. Cria oportunidades para promover produtos e possui vários componentes além do reprodutor de vídeo como número de espectadores, botão de curtir, chat em tempo real e barra lateral para apresentar produtos.
- **Apps de chat com clientes**: adicionam um componente de chat para interagir com clientes. Podem possuir chatbot para interação automática, além de fornecer suporte humano. Alguns exemplos de apps são [JivoChat](https://developers.vtex.com/docs/apps/vtex.jivochat), [Tawk.to](https://developers.vtex.com/docs/apps/vtex.tawk-to) e [Zendesk Chat](https://developers.vtex.com/docs/apps/vtex.zendesk-chat).
- **Apps de análise e avaliação:** adicionam componentes para que clientes avaliem os produtos da loja, geralmente por uma nota numérica ou um texto. Alguns exemplos de apps são [Reviews and Ratings by VTEX](https://developers.vtex.com/docs/apps/vtex.reviews-and-ratings), [Bazaarvoice](https://developers.vtex.com/docs/apps/vtex.bazaarvoice) e [PowerReviews](https://developers.vtex.com/docs/apps/vtex.powerreviews).
- **Apps de mídias sociais:** permite a interação com mídias sociais, por exemplo para divulgar os produtos da loja por anúncios na plataforma de mídia. Alguns exemplos de apps são [TikTok for Business](https://developers.vtex.com/docs/apps/vtexbr.tiktok-tbp) e [Facebook Business Extension](https://developers.vtex.com/docs/apps/vtex.facebook-fbe).

### O que levar em consideração ao criar um app para a sua loja

Se a loja VTEX não encontrar um app que atenda às necessidades do seu modelo de negócio, existe a alternativa de desenvolver uma solução própria. Neste sentido, existem vários aspectos a serem considerados para desenvolver apps na VTEX:

- **Quem será responsável pelo desenvolvimento e manutenção?** Os apps podem ser desenvolvidos e mantidos pelo time de desenvolvimento interno da empresa ou por uma agência certificada VTEX. Os [parceiros de implementação da VTEX](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#parceiros-de-implementacao) podem ser encontrados no nosso [Partner Portal](https://vtex.com/pt-br/parceiros/) (somente português). Além do desenvolvimento, o responsável pelo app é encarregado da sua manutenção e atualizações.
- **Que tipo de app deve ser desenvolvido?** É importante saber o contexto em que a solução desejada irá atuar. Os tipos de apps disponíveis estão descritos [acima](#o-que-e-um-app-na-vtex). Nós temos guias de “desenvolvimento para alguns tipos de apps como [storefront](https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developing-storefront-apps-using-react-and-vtex-io), [serviço](https://developers.vtex.com/docs/guides/vtex-io-documentation-developing-service-configuration-apps) e [Pixel](https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developnativeintegrationswithpixelapps).
- **Como desenvolver um app?** O desenvolvimento de um app é feito em várias etapas. Em geral, o processo de desenvolvimento segue os seguintes passos:

    a. **Preparar o ambiente de desenvolvimento:** os principais requisitos antes de começar a desenvolver um app são [instalar](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install) a [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference) (command-line interface) e [criar um workspace de desenvolvimento](https://developers.vtex.com/docs/guides/vtex-io-documentation-creating-a-development-workspace) na conta da loja.

    b. **Interagir com o código**: normalmente, o desenvolvimento se inicia a partir de um template inicial, seguido da implementação local no código. O template deve ser escolhido de acordo com o tipo de app desejado. É possível verificar os templates disponíveis rodando o [comando da CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference) `vtex init`. Além disso, é necessário configurar do arquivo [manifest.json](https://developers.vtex.com/docs/guides/vtex-io-documentation-manifest), onde são definidos vários parâmetros como o nome do app, o nome do desenvolvedor (vendor) e as [permissões](https://developers.vtex.com/docs/guides/vtex-io-documentation-policies). Após a edição do código, o app é inserido no workspace de desenvolvimento pelo [comando da CLI vtex link](https://developers.vtex.com/docs/guides/vtex-io-documentation-linking-an-app) para realização de testes.

    c. **Empacotar o código em uma nova versão:** após os testes, deve-se seguir os passos para [lançar uma nova versão do app](https://developers.vtex.com/docs/guides/vtex-io-documentation-releasing-a-new-app-version) e [publicar um app](https://developers.vtex.com/docs/guides/vtex-io-documentation-publishing-an-app). Isso permite que o código fique salvo na infraestrutura da VTEX e possa ser instalado em [workspaces de produção](https://developers.vtex.com/docs/guides/vtex-io-documentation-creating-a-production-workspace).

    d. **(Opcional) Validar se o meu app atende a minha necessidade de negócio:** após ter a versão publicada, pode ser interessante instalar o app em um [workspace de produção](https://developers.vtex.com/docs/guides/vtex-io-documentation-creating-a-production-workspace) e realizar um [teste A/B](https://developers.vtex.com/docs/guides/ab-tests) a fim de comparar a taxa de conversão das vendas considerando o seu novo app.

> ℹ️ Caso queira aprender mais sobre o desenvolvimento de apps, recomendamos acessar o nosso [Learning Center](https://learn.vtex.com/).

- **Deseja tornar o app disponível publicamente?** É possível [disponibilizar](https://developers.vtex.com/docs/guides/vtex-io-documentation-making-your-new-app-version-publicly-available) o app na App Store, permitindo que outras contas possam se alavancar da solução desenvolvida.
- **Deseja tornar o app disponível na App Store?** Existem algumas vantagens em tornar o app disponível na App Store, como aumentar a visibilidade do seu app e a possibilidade de [monetizá-lo](https://developers.vtex.com/docs/guides/vtex-io-documentation-setting-your-apps-billing-model). Para isso, é necessário seguir alguns passos e regras. Em resumo, deve-se tornar um [desenvolvedor registrado](https://developers.vtex.com/docs/guides/vtex-io-documentation-becoming-a-registered-vtex-app-store-developer), ter o código do app armazenado em um repositório do [GitHub](https://github.com), desenvolver o app obedecendo as [melhores práticas da App Store](https://developers.vtex.com/docs/guides/vtex-io-documentation-homologation-requirements-for-vtex-app-store) e [submetê-lo](https://developers.vtex.com/docs/guides/vtex-io-documentation-submitting-your-app-in-the-vtex-app-store) ao processo de homologação. Após homologado, o app estará disponível na App Store.
