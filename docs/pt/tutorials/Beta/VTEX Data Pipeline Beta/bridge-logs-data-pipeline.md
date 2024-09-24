---
title: 'Logs do Bridge Data Pipeline'
id: 2RFVJZL19nsWBSB4IXA0Z
status: PUBLISHED
createdAt: 2024-09-13T16:45:05.348Z
updatedAt: 2024-09-13T17:38:17.507Z
publishedAt: 2024-09-13T17:38:17.507Z
firstPublishedAt: 2024-09-13T17:17:56.608Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: logs-do-bridge-data-pipeline
locale: pt
legacySlug: logs-do-bridge-data-pipeline
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados de Bridge inclui informações históricas sobre logs do Bridge. 

>⚠️ Atualmente, o conjunto de dados fornece somente as informações de logs de rastreamento e de pedidos cancelados.  

Nesta seção você encontra as seguintes informações:  

- [Características dos dados de Bridge](#caracteristicas-dos-dados)  
- [Tabela order_status_change](#tabela-order-status-change)  
- [Análises com dados do Bridge](#analise-com-dados-do-bridge)  
- [Correlações com outros dados](#correlacoes-com-outros-dados)  

#### Características dos dados

| **Característica** | **Descrição** |
|:---:|:---:|
| Fonte de dados | Obtido a partir das informações presentes no módulo **Conexões > Pedidos** e **Conexões > Rastreamento**. |
| Disponibilidade | VTEX Admin. |
| Histórico | Os dados são mantidos por dois anos, a partir de 2024 para clientes que já utilizam a plataforma VTEX. |
| Intervalo mínimo de atualização | Uma hora. |

#### Tabela `order_status_change`

Conheça a seguir os campos que constituem a tabela:  

| **Nome da coluna** | **Tipo da coluna** | **Descrição da coluna** |
|:---:|:---:|:---:|
| main_account | character varying(100)	 | A conta principal da VTEX associada a esta conta. |
| account_name | character varying(100) | Nome da loja ou conta filha responsável pelo pedido. |
| marketplace | character varying(50) | O nome do marketplace de onde este pedido se originou. |
| bridge_order_id | character varying(300) | Identificador do pedido enviado pelo marketplace. |
| vtex_order_id | character varying(300) | O ID do pedido no OMS da VTEX. Normalmente é o ID do pedido do marketplace com um prefixo de ID afiliado. |
| marketplace_order_id | character varying(300) | O ID do pedido no marketplace externo. |
| bridge_log_type | character varying(25) | Indica se a atualização é de um evento de pedido (entrada ou aprovação do pedido) ou evento de rastreamento (fatura, status de entrega). |
| bridge_log_status | character varying(25) | Indica o status da entrada do log. Os status possíveis são, success, warning e error.|
| bridge_log_message | character varying(65535) | A mensagem visível para o comerciante no bridge. |
| update_timestamp | timestamp without time zone | O horário em que a integração processou a atualização. |
| batch_id | character(13) | O ID de cada lote de dados. Lembre-se de que esta tabela tem atualizações em suas linhas, o que faz com que o batch_id seja atualizado no momento da atualização. |

#### Análises com dados do Bridge

Aqui estão algumas análises que você pode realizar usando a tabela Bridge:  

- **Análise de pedidos do marketplace:** compreenda os logs associados aos seus pedidos de marketplaces externos.  
- **Insights sobre logs de marketplaces externos:** realize análises em lote sobre mensagens de marketplaces externos relacionadas ao rastreamento e cancelamento de pedidos.  

#### Correlações com outros dados

Os dados do Bridge estão relacionados aos dados de [pedidos](https://help.vtex.com/pt/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz), proporcionando uma análise abrangente de compras e vendas. Abaixo está um exemplo:

**Análise abrangente de pedidos provenientes de marketplaces externos:** integrar este modelo de dados com os dados de [pedidos](https://help.vtex.com/pt/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz) fornece uma visão completa dos pedidos vendidos via marketplace externo. Use o `order_id` para unir ambas as tabelas.

### Conheça outros Conjuntos de dados
- [Inventário](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navegação](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)
- [Pagamentos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)
- [Pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)
- [Promoção](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Vale-presente](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)

