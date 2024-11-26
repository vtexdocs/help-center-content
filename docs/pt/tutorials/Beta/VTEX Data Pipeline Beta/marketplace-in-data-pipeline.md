---
title: 'Marketplace in Data Pipeline'
id: 4L3hlSqsnxGqVyxmoYvjTV
status: PUBLISHED
createdAt: 2024-11-22T18:54:14.211Z
updatedAt: 2024-11-22T20:17:59.186Z
publishedAt: 2024-11-22T20:17:59.186Z
firstPublishedAt: 2024-11-22T20:13:33.475Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: marketplace-in-data-pipeline
locale: pt
legacySlug: marketplace-in-data-pipeline
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados `marketplace_in` contém informações históricas sobre cada vendedor de um marketplace, incluindo suas informações mais importantes, como pedidos e inventário.

Neste artigo você encontra as seguintes informações:

- [Características dos dados de marketplace in](#caracteristicas-dos-dados)  
- [Tabela: sellers_latest](#tabela-sellers-latest)  
- [Tabela: sellers_inventory](#tabela-sellers-inventory)  
- [Tabela: sellers_pricing](#tabela-sellers-pricing)  
- [Tabela: sellers_orders](#tabela-sellers-orders)  
- [Análises com dados de marketplace in](#analises-com-dados-de-marketplace-in)  
- [Correlação com outro dado](#correlacao-com-outros-dados)  

#### Características dos Dados

|**Características** | **Descrição**|
|:---:|:---:|
|Fonte dos Dados | Obtidos do módulo marketplace.|
|Disponibilidade | Admin VTEX.|
|Histórico | O histórico de dados começa em setembro de 2024. Os dados são mantidos por dois anos a partir de 2024.|
|Intervalo Mínimo de Atualização | Uma hora.|

#### Tabela: sellers_latest

Os campos da tabela são descritos abaixo:

|**Nome da Coluna** | **Tipo da Coluna** | **Descrição da Coluna**
|:---:|:---:|:---:|
|pk | bigint | Chave primária que identifica exclusivamente cada linha.
main_account | character varying(100) | Nome da conta principal associada ao vendedor.|
|seller_id | character varying(100) | ID do vendedor.|
|seller_name | character varying(200) | Nome do vendedor.|
|is_better_scope | boolean | Relevante apenas para vendedores whitelabel. Define se o vendedor whitelabel é abrangente (true) ou não (false). Um vendedor abrangente não está limitado a uma localização, ou seja, se uma loja for acessada sem definir uma localização, apenas vendedores abrangentes serão considerados.|
|is_active| boolean | Indica se o vendedor está ativo (true) ou não (false).|
|allow_hybrid_payments | boolean | Indica se os clientes podem usar cartões-presente do vendedor para comprar produtos no marketplace (true) ou não (false). <p> Se true, identifica compras feitas com cartão-presente para que apenas o preço final (com descontos aplicados) seja pago ao vendedor.</p>|
|seller_type | character varying(25) | Determina se o vendedor é padrão ou whitelabel.|
|trust_policy | character varying(50) | Política de confiança usada pelo vendedor.|
|sales_channels | character varying(65535) | Canais de vendas do vendedor.|
|integration | character varying(50) | Nome da integração usada pelo vendedor.|
|integration_type | character varying(25) | As integrações são classificadas como: <p> VTEX Seller: O vendedor é outra conta VTEX.</p><p>VTEX Seller Portal: O vendedor usa o Seller Portal da VTEX.</p><p>Vendedor Externo: O vendedor usa uma conexão externa não relacionada à VTEX.</p><p>Não Configurado: O vendedor ainda não configurou a integração.</p>|
|created_at | timestamp | Data de criação do vendedor.|
|updated_at | timestamp | Data da última atualização do vendedor.|
|batch_id | character(13) | ID do lote onde esses dados chegaram. Permite saber quando esses dados foram entregues.|

#### Tabela: sellers_inventory

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

#### Tabela: sellers_pricing

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

#### Tabela: sellers_promotions

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

#### Tabela: sellers_orders

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

#### Análises com dados de marketplace in

Algumas das análises que podem ser feitas usando a tabela de preços são mencionadas abaixo:  

- **Lista atual de vendedores:** Avaliar vendedores atualmente ativos ou determinar quantos estão conectados, mas ainda não ativos.    
- **Principais vendedores:** Analisar os vendedores com o maior número de pedidos e seus respectivos valores brutos de mercadorias (GMV).  
- **Inventário do vendedor:** Revisar o inventário de cada vendedor ativo.  

#### Correlação com outro dado

Os dados de Marketplace in estão intimamente ligados aos dados de pedidos, proporcionando uma análise mais profunda de compras e vendas. Um exemplo é analisar dados de pedidos em conjunto com esta tabela oferece insights ainda mais valiosos sobre os detalhes dos pedidos feitos por cada vendedor.

__Conheça outros Conjuntos de dados__  

[Inventário](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)  
[Navegação](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)  
[Pagamentos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
[Pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)  
[Preços](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
[Promoções](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
[Vale-presente](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
[Logs do bridge](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)
