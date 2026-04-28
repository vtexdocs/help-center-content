---
title: 'Preços Data Pipeline'
id: 3NMGJ8dtv73Bwvo9PSz1fz
status: PUBLISHED
createdAt: 2024-06-21T14:58:43.084Z
updatedAt: 2025-01-29T19:45:12.726Z
publishedAt: 2025-01-29T19:45:12.726Z
firstPublishedAt: 2024-06-21T15:27:43.768Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: prices-data-pipeline-beta
legacySlug: precos-data-pipeline-beta
locale: pt
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados de preços contém informações históricas de preços para cada SKU da loja de um seller, permitindo a análise dos valores de markup e das tendências mensais de preços.  

Neste artigo você encontra as seguintes informações:
[Características dos dados](#caracteristicas-dos-dados)
[Tabela pricing_latest](#tabela-pricing-latest)
[Tabela pricing_historical](#tabela-pricing-historical)
[Análise com dados de preços](#analise-com-dados-de-precos)
[Correlações com outros dados](#correlacoes-com-outros-dados)

## Características dos dados
| **Característica** | **Descrição** |
|:------:|:--------:|
| Origem do dado | Módulo de preços. |
| Disponibilidade | VTEX Admin e APIs de preços. É importante ressaltar que os dados disponibilizados pela API podem não estar estruturados exatamente como neste conjunto de dados do Data Pipeline. |
| Histórico | O histórico de dados começa em agosto de 2023. Para clientes que já usam a plataforma VTEX, os dados são retidos por dois anos a partir de 2024.|
| Menor intervalo de atualização possível | Uma hora. | 

## Tabela pricing_latest  

A tabela `pricing_latest` contém dados dos preços atuais dos produtos da loja. Veja a seguir os campos que compõem essa tabela.

| **Nome da Coluna**  | **Tipo de Coluna** 	| **Descrição da Coluna**  |
|:--------:|:--------:|:-----------:|
| account_name | character varying(255) 	| Nome da conta relacionada ao item. |
| last_date | date 	| Data e hora da última alteração no preço. |
| sku_id | character varying(255) | Identificador do SKU. |
| batch_id  | character varying(255) 	| Identificador usado quando os dados são carregados na tabela para controle de qualidade da ingestão de dados. |
| listPrice | double precision | Preço de lista do SKU. |
| costPrice | double precision | Preço de custo do SKU. |
| markup  | double precision 	| Markup do SKU. |
| basePrice| double precision | Preço-base do SKU. |
| fixedPrices| super | Preço fixo.|

## Tabela pricing_historical

A tabela `pricing_historical` apresenta registro histórico dos preços da sua loja. Veja abaixo seguir os campos que compõem essa tabela.  

| **Nome da coluna**  | **Tipo de coluna**  | **Descrição da coluna** |
|:--------:|:---------:|:----------:|
| account_name | character varying(255) | Nome da conta relacionada ao item. |
| date | date  | Data e hora da última alteração no preço. |
| sku_id | character varying(255) 	| Identificador do SKU. |
| author_id | character varying(255) 	| Identificação do usuário que fez a alteração de preço. |
| batch_id | character varying(255) | Identificador usado quando os dados são carregados na tabela para controle de qualidade da ingestão de dados. |
| id | character varying(255) | ID da alteração de preço. |
| listPrice | double precision | Preço de lista do SKU. |
| costPrice | double precision	| Preço de custo do SKU. |
| markup | double precision| Markup do SKU. |
| basePrice | double precision | Preço-base do SKU.|
| fixedPrices | super | Preço fixo.  |

## Análise com dados de preços

Os dados de preços podem ser empregados nas seguintes análises:  

- __Preço atual do SKU:__ avalie o preço atual para um SKU específico ou para toda uma gama de produtos.  
- __Histórico de preços do SKU:__ analise o histórico de preços para um SKU específico ou para toda uma gama de produtos.  
- __Preço do SKU por conta:__ para lojas com múltiplas contas VTEX, estes dados ajudam a comparar preços em várias lojas.  

## Correlações com outros dados  

O conjunto de dados de preços possui correlações com os seguintes conjuntos do ecossistema de dados da VTEX:  

- **Interação com dados de pedidos:** analisar dados de pedidos conjuntamente fornece insights valiosos sobre vendas de um produto em função do preço, permitindo uma análise de elasticidade.  
- **Relação com o inventário:** a integração com dados de inventário capacita você a avaliar com precisão o valor total de seus ativos.  
- **Impacto da taxa de conversão:** ao analisar dados de navegação e funil de conversão, você pode entender o impacto do preço nas taxas de conversão.  

### Conheça outros Conjuntos de dados

- [Inventário](/pt/docs/tutorials/inventario-data-pipeline-beta)  
- [Navegação](/pt/docs/tutorials/navegacao-data-pipeline-beta)   
- [Pagamentos](/pt/docs/tutorials/pagamentos-data-pipeline-beta)  
- [Pedidos](/pt/docs/tutorials/pedidos-data-pipeline-beta) 
- [Promoção](/pt/docs/tutorials/promocoes-data-pipeline-beta)
- [Vale-presente](/pt/docs/tutorials/vale-presente-data-pipeline)
- [Logs do Bridge](/pt/docs/tutorials/logs-do-bridge-data-pipeline)
