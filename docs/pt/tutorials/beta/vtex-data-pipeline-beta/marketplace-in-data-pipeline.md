---
title: 'Marketplace in Data Pipeline'
id: 4L3hlSqsnxGqVyxmoYvjTV
status: PUBLISHED
createdAt: 2024-11-22T18:54:14.211Z
updatedAt: 2025-03-07T11:30:02.324Z
publishedAt: 2025-03-07T11:30:02.324Z
firstPublishedAt: 2024-11-22T20:13:33.475Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: marketplace-in-data-pipeline
legacySlug: marketplace-in-data-pipeline
locale: pt
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados `marketplace_in` contém informações históricas sobre cada vendedor de um marketplace, incluindo suas informações mais importantes, como pedidos e inventário.

Neste artigo você encontra as seguintes informações:

- [Características dos dados de marketplace in](#caracteristicas-dos-dados)  
- [Tabela: sellers_latest](#tabela-sellers-latest)  
- [Tabela: sellers_inventory](#tabela-sellers-inventory)  
- [Tabela: sellers_pricing](#tabela-sellers-pricing)  
- [Tabela: sellers_promotions](#tabela-sellers-promotions)  
- [Tabela: sellers_orders](#tabela-sellers-orders)  
- [Tabela: sellers_orders_items](#tabela-sellers-orders-items)  
- [Tabela: sellers_orders_rateandbenefitsidentifiers](#tabela-sellers-orders-rateandbenefitsidentifiers)  
- [Tabela: sku_binding](#tabela-sku-binding)  
- [Análises com dados de marketplace in](#analises-com-dados-de-marketplace-in)  
- [Correlação com outro dado](#correlacao-com-outros-dados)  

## Características dos Dados

|**Características** | **Descrição**|
|:---:|:---:|
|Fonte dos Dados | Obtidos do módulo marketplace.|
|Disponibilidade | Admin VTEX.|
|Histórico | O histórico de dados começa em setembro de 2024. Os dados são mantidos por dois anos a partir de 2024.|
|Intervalo Mínimo de Atualização | Uma hora.|

## Tabela: sellers_latest

Os campos da tabela são descritos abaixo:

|**Nome da Coluna** | **Tipo da Coluna** | **Descrição da Coluna**
|:---:|:---:|:---:|
|pk | bigint | Chave primária que identifica exclusivamente cada linha.
main_account | character varying(100) | Nome da conta principal associada ao vendedor.|
|seller_id | character varying(100) | ID do vendedor.|
|seller_name | character varying(200) | Nome do vendedor.|
|is_better_scope | boolean | Relevante apenas para vendedores whitelabel. Define se o vendedor whitelabel é abrangente (true) ou não (false). Um vendedor abrangente não está limitado a uma localização, ou seja, se uma loja for acessada sem definir uma localização, apenas vendedores abrangentes serão considerados.|
|is_active| boolean | Indica se o vendedor está ativo (true) ou não (false).|
|allow_hybrid_payments | boolean | Indica se os clientes podem usar cartões-presente do vendedor para comprar produtos no marketplace (true) ou não (false).  Se true, identifica compras feitas com cartão-presente para que apenas o preço final (com descontos aplicados) seja pago ao vendedor.|
|seller_type | character varying(25) | Determina se o vendedor é padrão ou whitelabel.|
|trust_policy | character varying(50) | Política de confiança usada pelo vendedor.|
|sales_channels | character varying(65535) | Canais de vendas do vendedor.|
|integration | character varying(50) | Nome da integração usada pelo vendedor.|
|integration_type | character varying(25) | As integrações são classificadas como:  VTEX Seller: O vendedor é outra conta VTEX.VTEX Seller Portal: O vendedor usa o Seller Portal da VTEX.Vendedor Externo: O vendedor usa uma conexão externa não relacionada à VTEX.Não Configurado: O vendedor ainda não configurou a integração.|
|created_at | timestamp | Data de criação do vendedor.|
|updated_at | timestamp | Data da última atualização do vendedor.|
|batch_id | character(13) | ID do lote onde esses dados chegaram. Permite saber quando esses dados foram entregues.|

## Tabela sellers_inventory

Os campos da tabela são descritos abaixo:

|**Nome da Coluna** | **Tipo da Coluna** | **Descrição da Coluna**
|:---:|:---:|:---:|
|main_account | character varying(100) | Nome da conta principal associada ao vendedor.
|seller_id | character varying(100) | ID do vendedor.|
|seller_is_active | boolean | Indica se o vendedor está ativo (true) ou não (false).|
|warehouse_id | character varying(400) | ID do depósito.|
|item_id | character varying(400) | Identificador do item.|
|is_unlimited_quantity | boolean | Flag que indica se um SKU está sempre disponível, independentemente da sua quantidade.|
|quantity | bigint | Quantidade de SKU em estoque.|
|reserved_quantity | bigint | Unidades reservadas do SKU. Pedidos para essas reservas ainda não foram aprovados para pagamento.|
|last_update | timestamp | Data da última atualização do inventário.|
|batch_id | character(13) | ID do lote onde esses dados chegaram. Permite saber quando esses dados foram entregues.|

## Tabela sellers_pricing

Os campos da tabela são descritos abaixo:

|**Nome da Coluna** | **Tipo da Coluna** | **Descrição da Coluna**
|:---:|:---:|:---:|
|main_account | character varying(100) | Nome da conta principal associada ao vendedor.|
|seller_id | character varying(100) | ID do vendedor.|
|seller_is_active | boolean | Indica se o vendedor está ativo (true) ou não (false).|
|item_id | character varying(255) | Identificador do item.|
|list_price | double precision | Preço de lista do SKU.|
|cost_price | double precision | Preço de custo do SKU.|
|base_price | double precision | Preço base do SKU.|
|fixed_price | super | Preço fixo do SKU.|
|markup | double precision | Margem do SKU.|
|last_date| date | Data e hora da última atualização do preço.|
|batch_id | character(13) | ID do lote onde esses dados chegaram. Permite saber quando esses dados foram entregues.|

## Tabela sellers_promotions

Os campos da tabela são descritos abaixo:

|**Nome da Coluna** | **Tipo da Coluna** | **Descrição da Coluna**|
|:---:|:---:|:---:|
|main_account | character varying(100) | Nome da conta principal associada ao vendedor.|
|seller_id | character varying(100) | ID do vendedor.|
|seller_is_active | boolean | Indica se o vendedor está ativo (true) ou não (false).|
|id_calculator_configuration | character varying(256) | ID da promoção.|
|begin_date_utc| timestamp | Data de início da promoção.|
|end_date_utc | timestamp | Data de término da promoção.|
|last_modified | timestamp | Data e hora da última atualização da promoção.|
|is_active| boolean | True se a promoção estiver ativa.|
|is_archived | boolean | True se a promoção estiver arquivada.|
|is_featured | boolean | True se a promoção for destaque.|
|offset | numeric(18,0) | O deslocamento a ser aplicado às datas de início e término da promoção.|
|cumulative | boolean | Determina se a promoção pode ser combinada com outras do mesmo tipo de desconto.
|apply_to_all_shippings| boolean | Especifica se a promoção se aplica a todos os métodos de envio ou apenas ao mais barato.|
|total_value_mode | character varying(256) | Define quais itens são considerados para calcular o valor total do carrinho.|
|item_max_price| numeric(18,0) | Configuração do preço máximo de um item para ativar a promoção.|
|item_min_price | numeric(18,0) | Configuração do preço mínimo de um item para ativar a promoção.|
|is_first_buy| boolean | Indica se a promoção é válida apenas para a primeira compra do usuário.|
|batch_id | character(13) | ID do lote onde esses dados chegaram. Permite saber quando esses dados foram entregues.|

## Tabela sellers_orders

Os campos da tabela são descritos abaixo:

|**Nome da Coluna** | **Tipo da Coluna** | **Descrição da Coluna**|
|:---:|:---:|:---:|
|main_account | character varying(100) | Nome da conta principal associada ao vendedor.|
|seller_id | character varying(100) | ID do vendedor.|
|seller_is_active | boolean | Indica se o vendedor está ativo (true) ou não (false).|
|hostname | character varying(16383) | Nome do host relacionado ao pedido.|
|order_id | character varying(16383) | Identificador único do pedido.|
|seller_order_id | character varying(16383) | Identificador único do pedido dentro de um vendedor.|
|order_group | character varying(16383) | Grupo de pedidos ao qual este pedido pertence.|
|value | double precision | Valor monetário total do pedido, incluindo impostos, descontos e custos de envio.|
|is_completed | boolean | Especifica se o pedido foi concluído.|
|status | character varying(16383) | Status atual do pedido, como __pendente, enviado__ ou __faturado.__|
|sales_channel | character varying(16383) | Canal de vendas pelo qual o pedido foi feito (loja online, loja física, etc.).|
||creation_date | timestamp com fuso horário | Data e hora de criação do pedido, incluindo fuso horário.|
|authorized_date | timestamp com fuso horário | Data e hora de autorização do pedido.|
|invoiced_date | timestamp com fuso horário | Data e hora de emissão da nota fiscal do pedido.|
|last_change | timestamp com fuso horário | Data e hora da última alteração no pedido.|
|shippingdata_address_city | character varying(65535) | Cidade de envio do pedido.|
|shippingdata_address_state | character varying(65535) | Estado de envio do pedido.|
|shippingdata_address_country | character varying(65535) | País de envio do pedido.|

## Tabela: sellers_orders_items

A tabela *sellers_orders_items* armazena detalhes dos itens em pedidos realizados por vendedores do VTEX Seller Portal. Os campos da tabela são descritos abaixo:

|**Nome da Coluna** | **Tipo da Coluna** | **Descrição da Coluna**|
|:---:|:---:|:---:|
|item_id | character varying(65535) | Identificador único do item dentro do pedido. Pode ser associado à tabela sellers_inventory para detalhes adicionais.|
|product_id | character varying(65535) | Identificador do produto associado ao item.|
|order_id | character varying(16383) | Identificador único do pedido. Pode ser associado às tabelas de pedidos para detalhes adicionais.|
|seller_id | character varying | Identificador do vendedor em `sellers_latest`.|
|main_account | character varying | Conta principal associada ao vendedor.|
|hostname | character varying(16383) | Nome do host associado ao pedido, indicando o servidor ou domínio que gerencia o pedido.|
|marketplace_name | character varying(16383) | Nome do marketplace onde o pedido foi realizado.|
|seller_integration_type | character varying | Tipo de integração do vendedor. Nesta tabela, é sempre 'VTEX Seller Portal'.|
|seller_is_active | boolean | Indica se o vendedor está ativo no momento.|
|status | character varying(16383) | Status atual do pedido.|
|tax | double precision | Valor de impostos aplicado ao item (convertido de centavos para unidades monetárias).|
|quantity | integer | Quantidade do produto no pedido.|
|seller | character varying(65535) | Identificador ou nome do vendedor do produto conforme registrado no pedido.|
|sellersku | character varying(65535) | SKU do produto conforme listado pelo vendedor.|
|pricevaliduntil | timestamp with time zone | Data e hora até quando o preço do produto é válido.|
|name | character varying(65535) | Nome do produto.|
|additionalinfo_brandname | character varying(65535) | Marca do produto.|
|additionalinfo_brandid | character varying(65535) | Identificador da marca do produto.|
|additionalinfo_categoriesid | character varying(65535) | Identificadores de categorias associadas ao produto.|
|additionalinfo_dimension_cubicweight | double precision | Peso cúbico do produto para fins de envio.|
|additionalinfo_dimension_height | double precision | Altura do produto.|
|additionalinfo_dimension_length | double precision | Comprimento do produto.|
|additionalinfo_dimension_weight | double precision | Peso do produto.|
|additionalinfo_dimension_width | double precision | Largura do produto.|
|price | double precision | Preço do produto (convertido de centavos para unidades monetárias).|
|pricetags | super | Price tags associadas ao produto, incluindo descontos e ofertas.|
|sellingprice | double precision | Preço de venda do produto (convertido de centavos para unidades monetárias).|
|listprice | double precision | Preço de lista do produto (convertido de centavos para unidades monetárias).|
|imageurl | character varying(65535) | URL da imagem do produto.|
|measurementunit | character varying(65535) | Unidade de medida do produto.|
|unitmultiplier | double precision | Multiplicador de unidade do produto, usado nos cálculos de preço e quantidade.|
|creationdate | timestamp with time zone | Data e hora de criação do pedido, incluindo fuso horário.|
|lastchange | timestamp with time zone | Data e hora da última alteração no pedido.|
|batch_id | character varying(13) | Identificador usado quando os dados são carregados para controle de qualidade da ingestão.|
|uniqueid | character varying(65535) | Identificador único do item, que pode ser usado para relacionar esta linha com outras tabelas.|

## Tabela: sellers_orders_rateandbenefitsidentifiers

A tabela *sellers_orders_rateandbenefitsidentifiers* contém dados sobre promoções aplicadas a pedidos de vendedores. Os campos da tabela são descritos abaixo:

|**Nome da Coluna** | **Tipo da Coluna** | **Descrição da Coluna**|
|:---:|:---:|:---:|
|orderid | character varying(16383) | Identificador único de cada pedido.|
|hostname | character varying(16383) | Nome do host associado ao pedido, indicando o servidor ou domínio que gerencia o pedido.|
|marketplace_name | character varying(16383) | Nome do marketplace associado ao pedido.|
|creationdate | timestamp with time zone | Data e hora de criação do pedido, incluindo fuso horário.|
|lastchange | timestamp with time zone | Data e hora da última alteração no pedido, refletindo o status ou conteúdo mais recente.|
|status | character varying(16383) | Status atual do pedido.|
|rateandbenefitsidentifiers_id | character varying(65535) | Identificador único dos rate and benefits identifiers associados ao pedido.|
|rateandbenefitsidentifiers_name | character varying(65535) | Nome dos rate and benefits identifiers, que identifica a promoção ou sobretaxa.|
|rateandbenefitsidentifiers_featured | boolean | Indica se os rate and benefits identifiers estão em destaque ou possuem algum atributo especial.|
|rateandbenefitsidentifiers_description | character varying(65535) | Descrição detalhada dos rate and benefit identifiers e seus benefícios.|
|batch_id | character varying(13) | Identificador usado quando os dados são carregados na tabela para controle de qualidade da ingestão.|

## Tabela: sku_binding

A tabela `sku_binding` serve como referência cruzada entre os identificadores internos de SKU do marketplace e os identificadores externos de SKU utilizados por cada vendedor.

Os campos da tabela são descritos abaixo:

|**Nome da Coluna** | **Tipo da Coluna** | **Descrição da Coluna**|
|:---:|:---:|:---:|
|sk_sku_binding | character varying | Chave substituta para o registro de binding de SKU que identifica exclusivamente cada mapeamento de SKU de um vendedor para um SKU do marketplace.|
|sk_sku | character varying | Chave substituta referenciando o SKU na tabela item_catalog_silver.sku.|
|sk_product | character varying | Chave substituta referenciando o produto na tabela item_catalog_silver.product.|
|account | character varying | Identificador da conta VTEX da loja proprietária do catálogo de produtos.|
|product_id | character varying | Identificador único do produto no catálogo VTEX. Um produto agrupa um ou mais SKUs.|
|sku_id | character varying | Identificador único do SKU no catálogo VTEX da conta. Representa uma variante específica de um produto disponível para venda.|
|seller_sku_id | character varying | Identificador próprio do vendedor para este SKU. Este é o ID que o vendedor utiliza internamente para referenciar o SKU em seu próprio sistema.|
|seller_id | character varying | Identificador único do vendedor no marketplace VTEX. Identifica qual vendedor está vinculado ao SKU.|
|is_deleted | boolean | Indica se o vínculo SKU-vendedor foi logicamente excluído. Definido como FALSE quando o vínculo existe nos dados de origem e TRUE via exclusão lógica quando o vínculo não está mais presente.|
|record_created_at | timestamp | Timestamp de quando este registro foi criado pela primeira vez na camada silver.|
|record_updated_at | timestamp | Timestamp de quando este registro foi atualizado pela última vez na camada silver.|
|batch_id | character varying | Identificador usado quando os dados são carregados na tabela para controle de qualidade da ingestão de dados.|

## Análises com dados de marketplace in

Algumas das análises que podem ser feitas usando a tabela de preços são mencionadas abaixo:  

- **Lista atual de vendedores:** Avaliar vendedores atualmente ativos ou determinar quantos estão conectados, mas ainda não ativos.    
- **Principais vendedores:** Analisar os vendedores com o maior número de pedidos e seus respectivos valores brutos de mercadorias (GMV).  
- **Inventário do vendedor:** Revisar o inventário de cada vendedor ativo.  

## Correlação com outro dado

Os dados de Marketplace in estão intimamente ligados aos dados de pedidos, proporcionando uma análise mais profunda de compras e vendas. Um exemplo é analisar dados de pedidos em conjunto com esta tabela oferece insights ainda mais valiosos sobre os detalhes dos pedidos feitos por cada vendedor.

### Conheça outros Conjuntos de dados  

- [Catálogo](/pt/docs/tutorials/catalogo-data-pipeline)
- [Inventário](/pt/docs/tutorials/inventario-data-pipeline-beta)  
- [Navegação](/pt/docs/tutorials/navegacao-data-pipeline-beta)  
- [Pagamentos](/pt/docs/tutorials/pagamentos-data-pipeline-beta)  
- [Pedidos](/pt/docs/tutorials/pedidos-data-pipeline-beta) 
- [Preços](/pt/docs/tutorials/precos-data-pipeline-beta)  
- [Promoções](/pt/docs/tutorials/promocoes-data-pipeline-beta)
- [Vale-presente](/pt/docs/tutorials/vale-presente-data-pipeline)
- [Logs do bridge](/pt/docs/tutorials/logs-do-bridge-data-pipeline)
