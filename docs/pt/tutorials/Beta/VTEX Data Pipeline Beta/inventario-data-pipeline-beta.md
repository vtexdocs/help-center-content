---
title: 'Inventário Data Pipeline '
id: 2IvKMZV9SNrE6ipBRQr8h2
status: PUBLISHED
createdAt: 2024-02-02T17:41:24.979Z
updatedAt: 2024-09-13T17:28:37.925Z
publishedAt: 2024-09-13T17:28:37.925Z
firstPublishedAt: 2024-05-27T19:26:59.588Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: inventory-data-pipeline-beta
locale: pt
legacySlug: inventario-data-pipeline-beta
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados composto pela tabela `item_inventory` fornece informações sobre a disponibilidade de itens no inventário. Ele detalha a quantidade total e disponível de itens, reservas ativas, possibilidade de estoque infinito, além de incluir identificações de SKU e estoque. A tabela também registra atualizações com registro de data e hora e IDs de controle.

Nesta seção você encontra as seguintes informações:

- [Características dos dados de inventário](#caracteristicas-dos-dados-de-inventario)
- [Tabela item_update_latest](#tabela-item-update-latest)
- [Tabela: item_update_historical](#tabela-item-update-historical)
- [Análise com item_inventory](#analises-com-item_inventory)
- [Correlações com outros dados](#correlacoes-com-outros-dados)

## Características dos dados de inventário

| **Característica** | **Descrição** |
|:---:|:---:|
| **Origem do dado** | Alimentado por informações do **módulo de logística**. |
| **Disponibilidade** | Admin da VTEX. |
| **Histórico** | Os dados são mantidos por dois anos, a partir de 2024 para clientes que já utilizam a plataforma VTEX. |
| **Menor intervalo de atualização possível** | Uma hora. |

## Tabela item_update_latest

Conheça a seguir os campos que constituem a tabela:  

| **Nome da Coluna** | **Tipo da Coluna** | **Descrição da Coluna** |
|:---:|:---:|:---:|
| **batch_id** | character varying(13) | Identificador usado quando os dados são carregados na tabela para controle de qualidade da ingestão de dados. |
| **last_date** | timestamp without time zone | Data e hora da última alteração no inventário. |
| **item_availabilty_id** | character varying(65535) | ID do esquema de inventário do SKU. |
| **item_id** | character varying(65535) | Identificador do item. |
| **main_account_name** | character varying(65535) | Nome da conta principal associada ao item. |
| **account_name** | character varying(65535) | Nome da conta relacionada ao item. |
| **is_unlimited_quantity** | boolean | Indicador booleano que indica se um SKU está sempre disponível, independentemente de sua quantidade. |
| **quantity** | integer | Quantidade de SKU em estoque. |
| **reserved_quantity** | integer | Unidades de SKU reservadas. Pedidos para essas reservas ainda não foram aprovados para pagamento. |
| **reservation_id** | character varying(65535) | Identificação de uma reserva para esse item. |

## Tabela item_update_historical

| **Nome da Coluna**| **Tipo da Coluna** | **Descrição da Coluna**|
|:----:|:---:|:---:|
| **batch_id** | character varying(13) | Identificador usado quando os dados são carregados na tabela para controle de qualidade da ingestão de dados. |
| **created_at** | timestamp without time zone  | Data e hora da alteração no inventário. |
| **item_availabilty_id**| character varying(65535)| ID do esquema de inventário do SKU. |
| **item_id** | character varying(65535)| Identificador do item. |
| **main_account_name**| character varying(65535) | Nome da conta principal associada ao item. |
| **account_name** | character varying(65535) | Nome da conta relacionada ao item.|
| **author_id** | character varying(65535) | Autor da alteração no inventário. |
| **event_type** | character varying(65535) | Tipo de alteração na disponibilidade (por exemplo, criação de reserva, cancelamento de reserva, atualização de disponibilidade do item). |
| **metadata_created_at** | timestamp without time zone| Hora em que um evento foi gerado. |
| **is_unlimited_quantity** | boolean | Indicador booleano que indica se um SKU está sempre disponível, independentemente de sua quantidade.|
| **quantity** | integer | Quantidade de SKU em estoque.|
| **reserved_quantity** | integer | Unidades de SKU reservadas. Pedidos para essas reservas ainda não foram aprovados para pagamento.|
| **reservation_id** | character varying(65535)| Identificação de uma reserva para esse item. |

## Análises com inventory

Veja abaixo algumas das análises possíveis com a tabela de inventário:

**- Análise de níveis de inventário:** avalie se o inventário atende à demanda e identificar itens com risco de esgotamento.  
**- Tendências de reserva de inventário:** analise a quantidade de itens reservados ao longo do tempo para identificar padrões e ajustar estratégias de gestão de inventário.  
**- Análise de distribuição de inventário por conta:** otimize a gestão de inventário em várias contas e entender como o inventário é distribuído.  

## Correlações com outros dados

Os dados de inventário se correlacionam com os conjuntos de pedidos e produtos, e proporcionam análises mais abrangentes para compras, vendas e marketing. Veja alguns exemplos:  

**- Interação com dados de pedidos:** a análise conjunta com os dados de pedidos oferece insights sobre a eficiência em atender às demandas dos clientes e ajuda a prever necessidades de reabastecimento.  
**- Relação com os SKUs:** a integração com os dados de SKUs ajuda a gerenciar o inventário com base na popularidade e disponibilidade dos produtos.  
**- Dados de compras e fornecedores:** a coordenação com os dados de compras permite manter um equilíbrio ideal no inventário, evitando superlotação ou escassez.  
**- Análises de vendas e marketing:** a compreensão do inventário impacta diretamente as estratégias de marketing e vendas, alinhando promoções e campanhas com a disponibilidade de produtos.  

### Conheça outros Conjuntos de dados

- [Navegação](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)   
- [Pagamentos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Preços](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)
- [Promoção](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Vale-presente](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Logs do Bridge](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)
