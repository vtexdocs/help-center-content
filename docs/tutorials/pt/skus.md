---
title: 'SKUs Data Pipeline (Beta)'
id: 4zkfF1asM3ayvIigsySevw
status: DRAFT
createdAt: 2024-02-02T18:06:58.601Z
updatedAt: 2024-05-27T20:55:21.862Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slug: skus-data-pipeline-beta
locale: pt
legacySlug: skus-data-pipeline-beta
subcategory: oMrzcOMVbBpH0reeMFHFg
---

# SKUs  

O conjunto de dados de SKUs é composto pela tabela `products_sku`, que centraliza informações detalhadas dos produtos, incluindo identificadores, descrições, dados de marca, URLs de imagem e especificações do SKU, facilitando a gestão e análise de catálogos de produtos.

Nesta seção você encontra as seguintes informações:

- [Características dos dados de SKUs](#caracteristicas-dos-dados-de-skus)
- [Tabela products_sku](#tabela-products_sku)
- [Análise com products_sku](#analise-com-products_sku)
- [Correlações com outros dados](#correlacoes-com-outros-dados)

## Características dos dados

| **Característica** | **Descrição** |
|:---:|:---:|
| **Origem do dado** | São originados do **Catálogo de produtos**. |
| **Disponibilidade** | Os dados de catálogo podem ser acessados através do relatório do Admin da VTEX e também por <a href="https://developers.vtex.com/docs/api-reference/catalog-api/">APIs de catálogo</a>. |
| **Histórico** | Os dados são mantidos por dois anos, a partir de 2024 para clientes que já utilizam a plataforma VTEX. |
| **Menor intervalo de atualização possível** | Uma hora. |

## Tabela products_sku

Além das informações já citadas sobre os dados de catálogo, a tabela `products_sku` centraliza informações de identificação do produto como, descrição, marca e especificações. Conheça a seguir os campos que constituem a tabela.

| **Nome da Coluna** | **Tipo de Coluna** | **Descrição da Coluna** |
|:---:|:---:|:---:|
| id | integer | Identificador único do produto. |
| product_id | integer | Identificador único do produto no sistema. |
| name_complete | character varying(255) | Nome completo do produto. |
| complement_name | character varying(255) | Nome complementar do produto. |
| product_name | character varying(255) | Nome do produto. |
| product_description | character varying(1000) | Descrição detalhada do produto. |
| sku_name | character varying(255) | Nome do SKU do produto. |
| product_ref_id | character varying(255) | Referência externa ou interna do produto. |
| tax_code | character varying(255) | Código fiscal associado ao produto. |
| is_active | boolean | Indica se o produto está ativo. |
| is_transported | boolean | Indica se o produto é transportável. |
| is_inventoried | boolean | Indica se o produto está sujeito a inventário. |
| is_gift_card_recharge | boolean | Indica se o produto é um recarregamento de cartão-presente. |
| image_url | character varying(1024) | URL da imagem do produto. |
| detail_url | character varying(1024) | URL de detalhes do produto. |
| csc_identification | character varying(255) | Identificação CSC do produto. |
| brand_id | character varying(255) | Identificador da marca do produto. |
| brand_name | character varying(255) | Nome da marca do produto. |
| is_brand_active | boolean | Indica se a marca do produto está ativa. |
| dimension | super | Dimensões do produto. |
| real_dimension | super | Dimensões reais do produto. |
| manufacturer_code | character varying(255) | Código do fabricante do produto. |
| is_kit | boolean | Indica se o produto é um kit. |
| kit_items | super | Itens incluídos no kit do produto. |
| services | super | Serviços associados ao produto. |
| categories | super | Categorias às quais o produto pertence. |
| categories_full_path | super | Caminho completo das categorias do produto. |
| attachments | super | Anexos relacionados ao produto. |
| collections | super | Coleções às quais o produto pertence. |
| sku_sellers | super | Vendedores do SKU do produto. |
| sales_channels | super | Canais de venda do produto. |
| images | super | Imagens do produto. |
| videos | super | Vídeos do produto. |
| sku_specifications | super | Especificações do SKU do produto. |
| product_specifications | super | Especificações do produto. |
| product_clusters_ids | character varying(255) | IDs dos clusters de produtos. |
| positions_in_clusters | super | Posições nos clusters de produtos. |
| product_cluster_names | super | Nomes dos clusters de produtos. |
| product_cluster_highlights | super | Destaques dos clusters de produtos. |
| product_category_ids | character varying(255) | IDs das categorias do produto. |
| is_direct_category_active | boolean | Indica se a categoria direta do produto está ativa. |
| product_global_category_id | integer | ID da categoria global do produto. |
| product_categories | super | Categorias do produto. |
| commercial_condition_id | integer | ID da condição comercial do produto. |
| reward_value | double precision | Valor de recompensa associado ao produto. |
| alternate_ids | super | IDs alternativos do produto. |
| alternate_id_values | super | Valores dos IDs alternativos do produto. |
| estimated_date_arrival | character varying(255) | Data estimada de chegada do produto. |
| measurement_unit | character varying(255) | Unidade de medida do produto. |
| unit_multiplier | double precision | Multiplicador de unidade do produto. |
| information_source | character varying(255) | Fonte de informação do produto. |
| modal_type | character varying(255) | Tipo de modal do produto. |
| key_words | character varying(1000) | Palavras-chave associadas ao produto. |
| release_date | character varying(255) | Data de lançamento do produto. |
| product_is_visible | boolean | Indica se o produto é visível. |
| show_if_not_available | boolean | Indica se o produto deve ser mostrado mesmo se não estiver disponível. |
| is_product_active | boolean | Indica se o produto está ativo. |
| product_final_score | integer | Pontuação final do produto. |
| account_name | character varying(255) | Nome da conta associada ao produto. |
| batch_id | character varying(13) | ID de controle do lote de ingestão de dados. |

## Análises com products_sku

Veja abaixo algumas das diversas possibilidades de análises possíveis com a tabela de catálogo:  

**- Análise de desempenho do produto:** calcule as vendas por SKU para identificar os produtos mais populares, direcionando estratégias de marketing e reabastecimento.  
**- Tendências de categoria de produto:** agrupe SKUs por categorias para analisar as tendências de vendas em diferentes segmentos, ajustando o foco do catálogo conforme necessário.  
**- Análise de preços e promoções:** examine os preços e as condições comerciais de cada SKU para identificar oportunidades para promoções e ajustes de preço.  
**- Monitoramento de inventário:** verifique a disponibilidade de cada SKU em relação às tendências de vendas para gerenciar o inventário eficientemente.  

## Correlações com outros dados

As Correlações dos dados de catálogo com outros conjuntos de dados são cruciais para análises aprofundadas, veja alguns exemplos:

**- Interação com dados de inventário:** a correlação entre os SKUs e o inventário é essencial para gerenciar as operações de venda e estoque, alinhando a disponibilidade de produtos com a demanda.  
**- Dados de pedidos:** a análise conjunta do catálogo com os dados de pedidos revela insights sobre as preferências de compra, ajudando a otimizar o catálogo com base nas tendências de vendas.  
**- Dados de navegação:** a interação com dados de navegação oferece uma visão sobre como os clientes exploram o catálogo, indicando quais produtos atraem mais atenção e orientando estratégias de marketing e promoção.  

### Conheça outros Conjuntos de dados

- [Inventário](2IvKMZV9SNrE6ipBRQr8h2)
- [Navegação](4X4hK0zdIHN0Xn5x2MLYYd) 
- [Pedidos](2f3GlRJ5L5IRGVIxOmzrFv)  
- [Pagamentos](7LWkFaA1jPabzc5JAt1rGs)   
- [Promoção](3WZ1syNucDFdvVhfKtA6Qd)
