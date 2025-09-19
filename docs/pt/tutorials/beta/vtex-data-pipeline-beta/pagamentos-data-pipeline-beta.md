---
title: 'Pagamentos Data Pipeline'
id: 7LWkFaA1jPabzc5JAt1rGs
status: PUBLISHED
createdAt: 2024-02-02T17:53:35.949Z
updatedAt: 2025-04-15T14:55:06.016Z
publishedAt: 2025-04-15T14:55:06.016Z
firstPublishedAt: 2024-05-27T19:26:59.478Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: payments
legacySlug: pagamentos-data-pipeline-beta
locale: pt
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados de pagamentos é constituído por duas principais tabelas: a `payments_transitions` e a `transaction_tansitions`.

Nesta seção você encontra as seguintes informações:  

- [Características dos dados de pagamentos](#caracteristicas-dos-dados-de-pagamento)
- [Tabela payments_transitions](#tabela-payments_transitions)
- [Tabela transaction_trasitions](#tabela-transaction_transitions)
- [Tabela transactions_interactions](#tabela-transactions_interactions)
- [Tabela authorizations_consolidated](#tabela-authorizations_consolidated)
- [Tabela transaction_consolidation](#tabela-transaction-consolidation)
- [Análise com dados de pagamentos](#analises-com-dados-de-navegacao)
- [Correlações com outros dados](#correlacoes-com-outros-dados)

## Características dos dados

| **Característica** | **Descrição** |
|:---:|:---:|
| **Origem do dado** | Os dados desse conjunto se origina do [módulo de Pagamentos da VTEX](/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB). Eles são coletados e organizados de modo a refletir as transações e os pagamentos realizados na plataforma. |
| **Disponibilidade** | Os dados de navegação podem ser acessados somente no Admin da VTEX. |
| **Histórico** | Os dados são mantidos por dois anos, a partir de 2023 para clientes que já utilizam a plataforma VTEX. Os dados da tabela `transactions_interactions` só possuem o histórico desde 07/05/24 (dd/mm/yy).|
| **Menor intervalo de atualização possível** | Uma hora. |

## Tabela payments_transitions

A tabela `payments_transitions` armazena informações detalhadas sobre os pagamentos, incluindo o conector e o meio de pagamento usado em cada transação. Veja a seguir os campos que compõem a tabela.  

| **Nome da Coluna** | **Tipo da coluna** | **Descrição da coluna** |
|:---:|:---:|---|
| batch_id | character varying(13) | ID de controle do lote de ingestão de dados. |
| event_date_time | timestamp with time zone | Data e hora da transição, incluindo informações de fuso horário. |
| account | character varying(128) | Nome da conta, mapeado para 'account_name' no License Manager da VTEX. |
| account_id | character varying(36) | Identificador da conta, mapeado para 'id' no License Manager da VTEX após remoção de hífens. |
| connector | character varying(1024) | O conector responsável pelo processamento do pagamento. |
| delta_value | double precision | Tempo em milissegundos gasto na transição 'from_transition'. |
| from_transition | character varying(64) | Estado do pagamento até a data e hora do evento. |
| to_transition | character varying(64) | Novo estado da transação a partir da data e hora do evento. |
| payment_id | character varying(32) | Identificador único do pagamento. |
| payment_system | character varying(1024) | Tipo de pagamento, como cartão de crédito, débito, etc. |
| transaction_id | character varying(36) | Identificador único da transação à qual este pagamento pertence. |
| tid | character varying(1024) | Código externo recebido do Operador, representando um número de identificação para uma transação de e-commerce. |
| nsu | character varying(1024) | Número Sequencial Único que identifica uma operação de venda com cartão, correspondendo a cada fatura criada. |
| currency_code | character varying(1024) | Código de moeda em três letras maiúsculas. |
| value | integer | Valor do pagamento multiplicado por 100, ou seja, este valor será 235 para um pagamento de $2,35. |

## Tabela transaction_transitions

A tabela `transaction_transitions` armazena as transações, que estão vinculadas aos pedidos realizados. Cada transação contém um conjunto de pagamentos e muda de status, de acordo com um fluxo de trabalho pré-definido. Veja a seguir os campos que compõem a tabela.

| **Nome da Coluna** | **Tipo da coluna** | **Descrição da coluna** |
|:---:|:---:|---|
| batch_id | character varying(13) | ID de controle do lote de ingestão de dados. |
| event_date_time | timestamp with time zone | Data e hora da transição, incluindo informações de fuso horário. |
| account | character varying(128) | Mapeia para um 'account_name' no sistema de gerenciamento de licenças da VTEX. |
| account_id | character varying(36) | Mapeia para um 'id' no sistema de gerenciamento de licenças da VTEX após remover hífens. |
| delta_value | double precision | Tempo, em milissegundos, gasto na transição 'from_transition'. |
| from_transition | character varying(64) | Estado da transação até a data e hora do evento. |
| to_transition | character varying(64) | Novo estado da transação a partir da data e hora do evento. |
| transaction_id | character varying(36) | Identificador único da transação. |
| key_id| character varying(35)| Identificador único da interação. Representa o ID da interação.|
| key_transaction_id| character varying(35)| Identificador único da transação relacionada.|
| payment_id | character varying(120)| Identificador único do pagamento. Este campo **não é obrigatório**.|
| source | character varying(120)| Indica a origem da atualização da interação. Pode ser um nome de função ou regra de negócio. **Obrigatório**. |
| status | character varying(60) | Representa o status atualizado da transação. Este campo é **obrigatório**.|
| date | timestamp without time zone  | Data e hora em que a transação ocorreu. Este campo é **obrigatório**.|
| message| character varying(65535)| Informação detalhada sobre a atualização da transação. Este campo é **não estruturado** e **obrigatório**. |
| ticks| character varying(60)| Identificador único para o "tick" do pagamento. Este campo é **obrigatório**. |
| batch_id | character varying(13)| Indica a data e hora em que o job que ingeriu os dados foi processado. Formato: `YYYY_MM_DD_hh`. |
| account | character varying(60)| Nome da conta associada à transação. Este campo é **obrigatório**. |

## Tabela transactions_interactions

Esta tabela rastreia atualizações de transações por meio de várias interações. Abaixo está uma descrição detalhada de cada campo:

| **Nome da Coluna** | **Tipo da Coluna** | **Descrição da coluna** |
|:----------------:|:----------------:|-----------|
| key_id | character varying(35) | Identificador único da interação. Representa o ID da interação. |
| key_transaction_id | character varying(35) | Identificador único da transação relacionada. |
| payment_id | character varying(120) | Identificador único do pagamento. Este campo **não é obrigatório**. |
| source | character varying(120) | Indica a origem da atualização da interação. Pode ser um nome de função ou regra de negócio. **Obrigatório**. |
| status | character varying(60) | Representa o status atualizado da transação. Este campo é **obrigatório**. |
| date | timestamp without time zone | Data e hora em que a transação ocorreu. Este campo é **obrigatório**. |
| message | character varying(65535) | Informação detalhada sobre a atualização da transação. Este campo é **não estruturado** e **obrigatório**. |
| ticks | character varying(60) | Identificador único para o "tick" do pagamento. Este campo é **obrigatório**. |
| batch_id | character varying(13) | Indica a data e hora em que o job que ingeriu os dados foi processado. Formato: `YYYY_MM_DD_hh`. |
| account | character varying(60) | Nome da conta associada à transação. Este campo é **obrigatório**. |

## Tabela authorizations_consolidated

Esta tabela consolida detalhes sobre autorizações de pagamento, rastreando informações-chave sobre cada transação, incluindo avaliação de risco, detalhes de pagamento e controle de ingestão. Abaixo está uma descrição de cada campo:

| **Nome da Coluna** | **Tipo da Coluna** | **Descrição da coluna** |
|:----------------:|:----------------:|-----------|
| account | character varying(63) | Nome da conta associada à transação. Sempre será igual ao `merchant_name`. |
| merchant_name | character varying(63) | Nome do comerciante onde a transação ocorreu. Sempre será igual ao `account`. |
| transaction_start_date | timestamp with time zone | Data e hora em que a autorização ocorreu, incluindo a informação de fuso horário. |
| connector | character varying(80) | Nome do conector de pagamento envolvido na transação (por exemplo, gateway de pagamento). |
| payment_id | character varying(255) | Identificador único do pagamento. |
| payment_system | character varying(255) | Tipo de pagamento utilizado na transação (por exemplo, cartão de crédito, cartão de débito, etc.). |
| transaction_id | character varying(63) | Identificador único da transação à qual este pagamento pertence. |
| currency | character varying(4) | Código da moeda representado por três letras maiúsculas (por exemplo, USD, EUR). |
| payment_value | double precision | Valor do pagamento multiplicado por 100. Por exemplo, um pagamento de $2,35 será armazenado como 235. |
| authorized | boolean | Indica se a transação foi autorizada (`true`) ou não (`false`). |
| installments | integer | Número de parcelas em que a transação está sendo paga. |
| recipients_count | integer | Número de destinatários envolvidos na transação (por exemplo, pagamentos divididos entre vários comerciantes). |

## Tabela transaction_consolidation

Esta tabela contém os metadados de transações de pagamento, incluindo informações detalhadas sobre valores, status, afiliados, conectores de pagamento, análise antifraude, parcelamentos e dados de origem.

| **Nome da Coluna**  | **Tipo da coluna**    | **Descrição da coluna** |
|:---------------:|:------------:|----------|
| id    | character varying(65535)   | ID único da transação à qual este pagamento pertence. |
| transaction_value   | double precision   | Valor do pagamento no formato decimal. |
| status_transaction | character varying(65535) | Último estado da transação. |
| reference_key   | character varying(65535)  | Identificador interno usado para conciliação ou como referência da transação. Campo enviado pelo Checkout ao Payments ao solicitar a criação da transação. |
| merchant_name   | character varying(65535) | Nome da conta que inclui: conta principal, subcontas, contas filhas, etc. |
| account_name    | character varying(16383)  | Nome da conta que inclui: conta principal, subcontas, contas filhas, etc. |
| main_account_name  | character varying(16383)  | Nome da conta principal. |
| is_active  | boolean  | Indica se a transação foi autorizada ou não. |
| is_operating  | boolean  | Indica se a conta ou o conector estava operacional no momento da transação. |
| recipients_count   | integer   | Número de divisões: quantidade de vendedores ou contas que receberam o pagamento. Inclui a conta principal. |
| date    | date     | Última data da transação. |
| account_verification_only     | boolean    | Indica se a transação foi apenas para verificação da conta ou método de pagamento, sem valor monetário real. |
| payment_id  | character varying(65535)| ID único do pagamento. |
| value_payment   | double precision  | Valor monetário do primeiro pagamento associado à transação. |
| status_payment  | character varying(65535)  | Status final do primeiro pagamento (ex: aprovado, cancelado). |
| currency_code  | character varying(65535) | Código de moeda com três letras em maiúsculo. |
| connector_name | character varying(65535)  | Nome do conector que processa o pagamento. |
| affiliation_id  | character varying(65535)      | ID da afiliação com o conector de pagamento configurado para uma conta específica. |
| affiliation_name  | character varying(65535)  | Nome descritivo da afiliação do conector usada no primeiro pagamento. |
| is_legacy_connector  | boolean    | Indica se o conector é legado. |
| payment_system     | integer    | Código numérico do tipo de pagamento (ex: 1, 2, 3...). |
| installments    | integer     | Número de parcelas. |
| payment_system_name  | character varying(65535)  | Nome do tipo de pagamento (ex: cartão de crédito, débito, etc.). |
| return_code   | character varying(65535) | Código de retorno fornecido pelo conector de pagamento. |
| antifraud_affiliation_id  | character varying(65535)  | Identificador da instância do serviço antifraude usada no primeiro pagamento. |
| antifraud_affiliation_name    | character varying(65535)  | Nome descritivo da afiliação do serviço antifraude usado no primeiro pagamento. |
| antifraud_provider_name   | character varying(65535) | Nome do provedor do serviço antifraude. |
| antifraud_analysis_result   | character varying(65535)  | Resultado da análise antifraude. |
| pan_type   | character varying(65535)  | Tipo de cartão usado no primeiro pagamento (ex: crédito, débito, pré-pago). |
| payment_origin   | character varying(65535) | Origem ou canal do pagamento (ex: loja física, site, app). |
| is_3ds_required  | boolean  | Indica se o pagamento exigiu autenticação 3D Secure. |
| payment_id_2  | character varying(65535)  | ID do segundo pagamento (quando aplicável). |
| value_payment_2   | double precision   | Valor monetário do segundo pagamento (quando aplicável). |
| status_payment_2  | character varying(65535)  | Status final do segundo pagamento (ex: aprovado, cancelado). |
| currency_code_2  | character varying(65535) | Código de moeda em três letras para o segundo pagamento. |
| connector_name_2   | character varying(65535) | Nome do conector que processa o segundo pagamento. |
| affiliation_id_2 | character varying(65535) | ID da afiliação do conector para o segundo pagamento. |
| affiliation_name_2  | character varying(65535)  | Nome descritivo da afiliação usada no segundo pagamento. |
| is_legacy_connector_2    | boolean   | Indica se o segundo conector é legado. |
| installments_2   | integer    | Número de parcelas do segundo pagamento. |
| payment_system_2  | integer   | Código do tipo de pagamento usado no segundo pagamento. |
| payment_system_name_2  | character varying(65535)      | Nome do método de pagamento usado no segundo pagamento. |
| return_code_2  | character varying(65535)      | Código de retorno do segundo pagamento. |
| antifraud_affiliation_id_2    | character varying(65535)      | ID da afiliação antifraude do segundo pagamento. |
| antifraud_affiliation_name_2  | character varying(65535)  | Nome descritivo da afiliação antifraude do segundo pagamento. |
| antifraud_provider_name_2     | character varying(65535) | Nome do provedor antifraude usado no segundo pagamento. |
| antifraud_analysis_result_2   | character varying(65535)  | Resultado da análise antifraude do segundo pagamento. |
| pan_type_2| character varying(65535) | Tipo de cartão usado no segundo pagamento. |
| payment_origin_2   | character varying(65535)  | Origem do segundo pagamento (ex: loja, app, site). |
| is_3ds_required_2   | boolean   | Indica se o segundo pagamento exigiu autenticação 3D Secure. |
| transaction_value_usd   | double precision  | Valor da transação em dólar (FX Neutral). |
| value_payment_usd  | double precision   | Valor do primeiro pagamento em dólar (FX Neutral). |
| value_payment_2_usd  | double precision   | Valor do segundo pagamento em dólar (FX Neutral). |
| batch_id   | character varying(13)    | ID de controle de lote da ingestão de dados. |

## Análise com dados de Pagamentos 

As análises com o conjunto de dados de Pagamentos são as seguintes:  

**- Análise de eficiência do processador de pagamento:** avalie o desempenho dos diferentes conectores de pagamento, analisando o tempo médio gasto em cada transição, para identificar os mais eficientes e confiáveis.  
**- Monitoramento de transições de estado de pagamento:** rastreie as mudanças de estado dos pagamentos ao longo do tempo para compreender padrões e identificar possíveis problemas no fluxo de pagamento.  
**- Análise de volume de transações por conta:** determine o volume de transações processadas por cada conta, ajudando a entender a demanda por serviços de pagamento em diferentes contas.  
**- Distribuição do tipo de pagamento:** analise a distribuição do uso de diferentes sistemas de pagamento para avaliar as preferências dos clientes por diversos métodos de pagamento.  

## Correlações com outros dados

Nos dados de pagamentos da plataforma VTEX, notam-se correlações com outros conjuntos de dados que ampliam a compreensão do ciclo de compras:  

**- Interação com dados de [pedidos](/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv):** análise dos dados de pagamento em conjunto com os pedidos oferece insights sobre como os métodos de pagamento influenciam nas conversões de pedidos, revelando tendências no comportamento de compra dos clientes.  
**- Análises financeiras e contábeis:** integrar dados de pagamento com análises financeiras contribui para uma gestão mais eficiente do fluxo de caixa e permite previsões financeiras mais precisas, auxiliando na saúde financeira da empresa.

### Conheça outros Conjuntos de dados

- [Catálogo](/tutorial/catalogo-data-pipeline--7ARDELPaugrBu5dZT7Vx2b)
- [Inventário](/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navegação](/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd) 
- [Pedidos](/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Preços](/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)
- [Promoção](/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)  
- [Vale-presente](/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Logs do Bridge](/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)
