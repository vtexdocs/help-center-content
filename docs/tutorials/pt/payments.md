---
title: 'Pagamentos Data Pipeline (Beta)'
id: 7LWkFaA1jPabzc5JAt1rGs
status: PUBLISHED
createdAt: 2024-02-02T17:53:35.949Z
updatedAt: 2024-06-21T16:28:44.958Z
publishedAt: 2024-06-21T16:28:44.958Z
firstPublishedAt: 2024-05-27T19:26:59.478Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slug: pagamentos-data-pipeline-beta
locale: pt
legacySlug: pagamentos-data-pipeline-beta
subcategory: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados de pagamentos é constituído por duas principais tabelas: a `payments_transitions` e a `transaction_tansitions`.

Nesta seção você encontra as seguintes informações:  

- [Características dos dados de pagamentos](#caracteristicas-dos-dados-de-pagamento)
- [Tabela payments_transitions](#tabela-payments_transitions)
- [Tabela transaction_trasitions](#tabela-transaction_transitions)
- [Análise com dados de pagamentos](#analises-com-dados-de-navegacao)
- [Correlações com outros dados](#correlacoes-com-outros-dados)

## Características dos dados

| **Característica** | **Descrição** |
|:---:|:---:|
| **Origem do dado** | Os dados desse conjunto se origina do <a href="https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB">módulo de Pagamentos da VTEX</a>. Eles são coletados e organizados de modo a refletir as transações e os pagamentos realizados na plataforma. |
| **Disponibilidade** | Os dados de navegação podem ser acessados somente no Admin da VTEX. |
| **Histórico** | Os dados são mantidos por dois anos, a partir de 2023 para clientes que já utilizam a plataforma VTEX. Os dados da tabela `transactions_interactions` só possuem o histórico desde 07/05/24 (dd/mm/yy).|
| **Menor intervalo de atualização possível** | Uma hora. |

## Tabela `payments_transitions`

A tabela `payments_transitions` armazena informações detalhadas sobre os pagamentos, incluindo o conector e o meio de pagamento usado em cada transação. Veja a seguir os campos que compõem a tabela.  

| **Nome da Coluna** | **Tipo de Campo** | **Descrição** |
|:---:|:---:|:---:|
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

## Tabela `transaction_transitions`

A tabela `transaction_transitions` armazena as transações, que estão vinculadas aos pedidos realizados. Cada transação contém um conjunto de pagamentos e muda de status, de acordo com um fluxo de trabalho pré-definido. Veja a seguir os campos que compõem a tabela.

| **Nome da Coluna** | **Tipo de Campo** | **Descrição** |
|:---:|:---:|:---:|
| batch_id | character varying(13) | ID de controle do lote de ingestão de dados. |
| event_date_time | timestamp with time zone | Data e hora da transição, incluindo informações de fuso horário. |
| account | character varying(128) | Mapeia para um 'account_name' no sistema de gerenciamento de licenças da VTEX. |
| account_id | character varying(36) | Mapeia para um 'id' no sistema de gerenciamento de licenças da VTEX após remover hífens. |
| delta_value | double precision | Tempo, em milissegundos, gasto na transição 'from_transition'. |
| from_transition | character varying(64) | Estado da transação até a data e hora do evento. |
| to_transition | character varying(64) | Novo estado da transação a partir da data e hora do evento. |
| transaction_id | character varying(36) | Identificador único da transação. |

## Análise com dados de Pagamentos  

As análises com o conjunto de dados de Pagamentos são as seguintes:  

**- Análise de eficiência do processador de pagamento:** avalie o desempenho dos diferentes conectores de pagamento, analisando o tempo médio gasto em cada transição, para identificar os mais eficientes e confiáveis.  
**- Monitoramento de transições de estado de pagamento:** rastreie as mudanças de estado dos pagamentos ao longo do tempo para compreender padrões e identificar possíveis problemas no fluxo de pagamento.  
**- Análise de volume de transações por conta:** determine o volume de transações processadas por cada conta, ajudando a entender a demanda por serviços de pagamento em diferentes contas.  
**- Distribuição do tipo de pagamento:** analise a distribuição do uso de diferentes sistemas de pagamento para avaliar as preferências dos clientes por diversos métodos de pagamento.  

## Correlações com outros dados

Nos dados de pagamentos da plataforma VTEX, notam-se correlações com outros conjuntos de dados que ampliam a compreensão do ciclo de compras:  

**- Interação com dados de [pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv):** análise dos dados de pagamento em conjunto com os pedidos oferece insights sobre como os métodos de pagamento influenciam nas conversões de pedidos, revelando tendências no comportamento de compra dos clientes.  
**- Análises financeiras e contábeis:** integrar dados de pagamento com análises financeiras contribui para uma gestão mais eficiente do fluxo de caixa e permite previsões financeiras mais precisas, auxiliando na saúde financeira da empresa.

### Conheça outros Conjuntos de dados

- [Inventário](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navegação](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd) 
- [Pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)  
- [Preços](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)
- [Promoção](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)  

