---
title: 'Catálogo Data Pipeline'
id: 7ARDELPaugrBu5dZT7Vx2b
status: PUBLISHED
createdAt: 2025-03-06T15:48:35.084Z
updatedAt: 2025-08-12T14:55:58.564Z
publishedAt: 2025-08-12T14:55:58.564Z
firstPublishedAt: 2025-03-07T11:30:01.994Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: catalog-data-pipeline
legacySlug: catalogo-data-pipeline
locale: pt
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados é composto por cinco tabelas que fornecem as informações mais recentes do catálogo de uma conta VTEX. Neste conjunto de dados são disponibilizadas informações de **produtos, SKUs, marcas, categorias** e **especificações.**  

> ⚠️ No modelo de dados de Catálogo, somente **Marcas** e **Categorias** com pelo menos um produto ou SKU vinculado no catálogo são elegíveis para envio, mesmo que estejam inativas.

Nesta seção você encontrará as seguintes informações:  

- [Características dos dados](#características-dos-dados)
- [Tabela produtos](#tabela-produtos)
- [Tabela SKUs](#tabela-skus)
- [Tabela marcas](#tabela-marcas)
- [Tabela categorias](#tabela-categorias)
- [Tabela especificações](#tabela-especificacoes)
- [Tabela cluster](#tabela-cluster)
- [Análise com dados de catálogo](#analise-com-dados-de-catalogo)
- [Correlações com outros dados](#correlacao-com-outros-dados)

## Características dos dados

| **Caracterítica** | **Descrição** |
|:---:|:---:|
| **Origem dos dados** | Os dados são obtidos a partir do [módulo de catálogo](/pt/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe). |
| **Disponibilidade** | Os dados podem ser acessados no Admin VTEX. |
| **Histórico** | Os dados disponibilizado são a partir de fevereiro de 2025. |
| **Menor intervalo de atualização possível** | Uma hora. |

## Tabela product

A tabela `product` contém informações sobre os produtos cadastrados no catálogo VTEX, incluindo identificadores, categorias, marcas e visibilidade na loja. Também armazena informações sobre imagens, SKUs relacionados e canais de venda nos quais o produto está disponível. Também registra datas importantes, como criação, atualização e lançamentos.

| __Nome da Coluna__  | __Tipo da coluna__  | __Descrição__ |
|-----------------|---------------|-----------|
| account  | character varying(255) | Conta proprietária do produto. |
| product_id | integer | Identificador único do produto, gerado pela VTEX. |
| product_ref_id  | character varying(255) | Código de referência interno configurado pelo comerciante. |
| brand_id | super | Identificador da marca do produto. |
| category_id | super  | Código de referência interna da categoria do produto. |
| skus| super  | Coleção de SKUs associados ao produto. |
| clusters_id  | super  | Identificador dos clusters aos quais o produto pertence. |
| product_name | character varying(255) | Nome do produto. |
| product_image  | character varying(65535) | Imagem principal utilizada para representar o produto. |
| is_active  | boolean | Indica se o produto está ativo no catálogo. Outros fatores, como estoque e preço, também podem afetar sua disponibilidade na loja. |
| is_visible | boolean | Indica se o produto está visível na loja. |
| tax_code | character varying(255)  | Código fiscal do produto, utilizado para cálculo de impostos. |
| product_path  | character varying(255) | Parte da URL da página do produto. |
| related_categories  | super  | Lista de categorias relacionadas ao produto. |
| similar_categories  | super  | Lista de categorias similares, usada para agrupar produtos relacionados. |
| sales_channels  | super | Canais de venda nos quais o produto está disponível. |
| dt_first_release    | timestamp with time zone | Data planejada de lançamento do produto. |
| dt_last_release | timestamp with time zone| Data do último lançamento do produto. |
| dt_created | timestamp with time zone | Data de criação do registro nos sistemas internos. |
| dt_updated | timestamp with time zone| Data da última atualização do registro nos sistemas internos. |
| batch_id  | character varying(13) | Identificador do lote para rastreamento de atualizações. |
| sk_product | character varying(32) | Chave sintética do produto, usada como chave primária. |
| sk_brand| character varying(32)| Chave estrangeira para associação com a tabela de marcas. |
| sk_category| character varying(32) | Chave estrangeira para associação com a tabela de categorias. |
| sk_skus| super | Informações sobre os SKUs do produto. |
| sk_cluster  | super| Informações sobre clusters associados ao produto. |
| sk_related_categories | super| Lista de categorias relacionadas ao produto, seguindo uma configuração hierárquica. |

## Tabela sku

Esta tabela detalha os SKUs associados a produtos. Inclui identificadores exclusivos, dimensões físicas, códigos de fabricante e EANs. Também armazena informações sobre imagens, serviços adicionais, kits e atributos específicos de cada SKU. Datas de criação e atualização são registradas para controle. 

| __Nome da Coluna__ | __Tipo da coluna__ | __Descrição__ |
|----------------|--------------|-----------|
| account | character varying(255) | Conta proprietária do SKU. |
| product_id  | bigint | Identificador único do produto associado ao SKU. |
| sku_id| bigint | Identificador único do SKU. |
| is_active| boolean  | Indica se o SKU está ativo no catálogo. Outros fatores, como estoque e preço, também podem afetar sua disponibilidade. |
| is_kit  | boolean  | Indica se o SKU é um kit composto por múltiplos produtos. |
| sku_ref_id| character varying(65535) | Código de referência interna do SKU. |
| sku_dimensions | super | Dimensões do SKU, utilizadas para cálculos de frete. |
| sku_real_dimensions | super | Dimensões reais do produto sem embalagem, usadas na página de detalhes do produto. |
| sku_manufacturer_code | character varying(65535) | Código de referência do fabricante. |
| sku_eans | super  | Códigos EAN associados ao SKU. |
| sku_kit_items | super  | Itens incluídos no kit do SKU. |
| sku_image_url | character varying(65535)     | URL da imagem principal do SKU. |
| sku_image_gallery  | super  | Galeria de imagens do SKU. |
| sku_services | super| Serviços adicionais associados ao SKU (ex.: embalagem para presente). |
| sku_attachments  | super | Anexos relacionados ao SKU, como personalizações. |
| sku_attributes| super| Atributos específicos do SKU. |
| sku_videos  | super  | Vídeos relacionados ao SKU. |
| sku_files| super | Arquivos associados ao SKU. |
| dt_created  | timestamp with time zone | Data de criação do registro nos sistemas internos. |
| dt_updated| timestamp with time zone| Data da última atualização do registro nos sistemas internos. |
| batch_id  | character varying(13)| Identificador do lote para rastreamento de atualizações. |
| sk_sku | character varying(32)| Identificador único do SKU, usado para integração com a tabela de produtos. |
| sk_product  | character varying(32)  | Identificador único do produto associado ao SKU. |

## Tabela brand

A tabela `brand` contém informações sobre as marcas registradas no catálogo VTEX, incluindo identificadores, nomes e status de ativação. Também mantém registros de criação e atualização, além de um identificador único para integração com outras tabelas.

| __Nome da Coluna__  | __Tipo da coluna__  | __Descrição__ |
|-----------------|---------------|-----------|
| account | character varying(255)   | Conta proprietária da marca. |
| brand_id | bigint  | Identificador único da marca. |
| brand_name| character varying(65535) | Nome da marca. |
| is_active | boolean | Indica se a marca está ativa. |
| dt_created| timestamp with time zone | Data de criação do registro. |
| dt_updated | timestamp with time zone | Data da última atualização do registro. |
| batch_id | character varying(13)  | Identificador do lote de processamento. |
| sk_brand | character varying(32) | Identificador único da marca no catálogo. |

## Tabela category

A tabela `category` apresenta os produtos em categorias hierárquicas. Armazena identificadores, nomes, caminhos completos de categoria e status de ativação. Permite a organização dos produtos dentro da estrutura do catálogo.

| __Nome da Coluna__  | __Tipo da coluna__  | __Descrição__ |
|-----------------|---------------|-----------|
| sk_category | character varying(32) | Identificador único da categoria (chave primária). |
| account | character varying(255)  | Conta proprietária da categoria. |
| category_id | bigint | Identificador único da categoria. |
| category_name  | character varying(65535) | Nome da categoria. |
| category_full_path_uri_name | character varying(65535) | Caminho hierárquico da categoria por nome. |
| category_full_path | character varying(65535) | Caminho hierárquico da categoria por ID. |
| is_active  | boolean | Indica se a categoria está ativa. |
| dt_created | timestamp with time zone | Data de criação do registro. |
| dt_updated | timestamp with time zone | Data da última atualização do registro. |
| batch_id | character varying(13) | Identificador do lote de processamento. |

## Tabela specification

A tabela `specification` armazena especificações técnicas dos produtos e SKUs, como grupos de especificação, valores atribuídos e se uma especificação é obrigatória. Também contém identificadores para facilitar a integração com produtos, SKUs e grupos de especificação, garantindo um detalhamento mais preciso dos itens cadastrados.

| __Nome da Coluna__   | __Tipo da coluna__ | __Descrição__ |
|------------------|--------------|-----------|
| sk_specification  | character varying(32)   | Identificador único da especificação. |
| sk_product  | character varying(32)   | Identificador único do produto. |
| sk_specification_group  | character varying(32)   | Identificador único do grupo de especificação. |
| sk_sku  | character varying(32)   | Identificador único do SKU. |
| specification_name  | character varying(65535) | Nome da especificação. |
| specification_value  | character varying(65535) | Valor da especificação. |
| dt_created| timestamp with time zone | Data de criação do registro. |
| dt_updated | timestamp with time zone | Data da última atualização do registro. |
| batch_id | character varying(13)   | Identificador do lote de processamento. |

## Tabela cluster

A tabela cluster armazena informações sobre agrupamentos de contas, representando conjuntos de lojas ou sellers.

| __Nome da Coluna__       | __Tipo da coluna __ | __Descrição__ |
|:----------:|:-------------:|:-----------:|
| sk_category         | character varying(32)      | Chave sintética criada por hash da conta e do category_id, usada como chave primária. |
| account            | character varying(255)     | Conta associada ao cluster, representando o comerciante ou loja. |
| cluster_id         | bigint                      | Identificador único do cluster dentro da conta. |
| cluster_name       | character varying(65535)   | Nome do cluster, usado para exibição e identificação. |
| is_active          | boolean                     | Indica se o cluster está ativo e deve ser considerado nas operações. |
| is_searchable      | boolean                     | Indica se o cluster é pesquisável e pode ser encontrado em funcionalidades de busca. |
| cluster_date_from  | timestamp with time zone   | Data de início do cluster, indicando quando ele se torna ativo. |
| cluster_date_to    | timestamp with time zone   | Data de término do cluster, indicando quando ele se torna inativo. |
| dt_created        | timestamp with time zone   | Data e hora em que o registro foi criado no datalake, no fuso UTC. |
| dt_updated        | timestamp with time zone   | Data e hora em que o registro foi atualizado no datalake, no fuso UTC. |
| batch_id          | character varying(13)      | Identificador do lote, usado para processamento e rastreamento de atualizações. |

## Análise com dados de catálogo

Algumas opções de análise com os dados de catálogo são:

**- Verificar o status de um produto:** use o campo `isActive` para verificar se o módulo de catálogo considera um produto ativo.  
**- Identificar SKUs relacionados:** obtenha uma lista de todos os SKUs vinculados a um produto principal.  
**- Detalhar especificações do produto:** recupere todas as especificações de um produto, incluindo sua marca, categoria e outros detalhes relevantes.  

## Correlação com outros dados

Os dados do catálogo estão conectados a vários outros modelos de dados. Aqui estão algumas correlações importantes:

**- Relação com estoque:** ao integrar os dados do catálogo com as informações de estoque, é possível determinar com precisão a quantidade disponível de cada produto.  
**- Relação com pedidos:** a combinação dos dados do catálogo com os detalhes dos pedidos permite analisar com exatidão o número de pedidos associados a cada produto no catálogo.  
**- Impacto na taxa de conversão:** a avaliação dos dados de navegação para determinar a taxa de conversão do funil da loja ajuda a entender o papel de cada produto no comportamento de navegação dos usuários.  

### Conheça outros Conjuntos de dados

- [Inventário](/pt/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)  
- [Pagamentos](/pt/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Pedidos](/pt/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)  
- [Preços](/pt/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Promoção](/pt/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)  
- [Vale-presente](/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)  
- [Logs do Bridge](/pt/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)  

