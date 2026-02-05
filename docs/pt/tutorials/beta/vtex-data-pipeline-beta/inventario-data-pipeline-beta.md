---
title: 'Inventário Data Pipeline'
id: 2IvKMZV9SNrE6ipBRQr8h2
status: PUBLISHED
createdAt: 2024-02-02T17:41:24.979Z
updatedAt: 2025-04-15T14:02:23.916Z
publishedAt: 2025-04-15T14:02:23.916Z
firstPublishedAt: 2024-05-27T19:26:59.588Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: inventory-data-pipeline-beta
legacySlug: inventario-data-pipeline-beta
locale: pt
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados composto pela tabela `item_inventory` fornece informações sobre a disponibilidade de itens no inventário. Ele detalha a quantidade total e disponível de itens, reservas ativas, possibilidade de estoque infinito, além de incluir identificações de SKU e estoque. A tabela também registra atualizações com registro de data e hora e IDs de controle.

Nesta seção você encontra as seguintes informações:

- [Características dos dados de inventário](#caracteristicas-dos-dados-de-inventario)
- [Tabela item_inventory](#tabela-item_inventory)
- [Análise com item_inventory](#analises-com-item_inventory)
- [Correlações com outros dados](#correlacoes-com-outros-dados)

## Características dos dados de inventário

| **Característica** | **Descrição** |
|:---:|:---:|
| **Origem do dado** | Alimentado por informações do **módulo de logística**. |
| **Disponibilidade** | Admin da VTEX. |
| **Histórico** | Os dados são mantidos por dois anos, a partir de 2024 para clientes que já utilizam a plataforma VTEX. |
| **Menor intervalo de atualização possível** | Uma hora. |

## Tabela item_inventory

Conheça a seguir os campos que constituem a tabela:  

| **Nome da Coluna** | **Tipo da Coluna** | **Descrição da Coluna** |
|---------|------------|----------|
|parent_account_name | character varying(200) | Nome da conta principal associada à entidade fundamental à qual o estoque pertence.|
| main_account | character varying(200)| Nome da conta principal do comerciante no Gerenciador de Licenças.  |
| account_name| character varying(200) | Nome da conta à qual o estoque pertence.|
| quantity| bigint| A quantidade total de itens disponíveis em estoque.|
| reserved_quantity | bigint  | Número de reservas ativas para um item.  |
| is_unlimited_quantity  | boolean| Indica se o item pode ter estoque infinito (True) ou não (False).|
| batch_id  | character(13) | Identifica o último lote de ingestão que atualizou esta linha.  |
| warehouse_id | character varying(400) | ID do depósito onde o estoque está localizado. |
| item_id | character varying(300) | Identifica o item cujo estoque está sendo quantificado. |
| last_update| timestamp without time zone  | A última vez que o estoque desse item específico foi atualizado. |
| warehouse_status | varchar(8) | Exibe o status atual do estoque onde este inventário está armazenado. Os valores aceitos são: ativo, inativo ou excluído. |

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

- [Navegação](/pt/docs/tutorials/navegacao-data-pipeline-beta)   
- [Pagamentos](/pt/docs/tutorials/pagamentos-data-pipeline-beta)  
- [Pedidos](/pt/docs/tutorials/pedidos-data-pipeline-beta) 
- [Preços](/pt/docs/tutorials/precos-data-pipeline-beta)
- [Promoção](/pt/docs/tutorials/promocoes-data-pipeline-beta)
- [Vale-presente](/pt/docs/tutorials/vale-presente-data-pipeline)
- [Logs do Bridge](/pt/docs/tutorials/logs-do-bridge-data-pipeline)
