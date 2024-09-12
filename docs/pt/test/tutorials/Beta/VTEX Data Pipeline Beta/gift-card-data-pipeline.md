---
title: 'Vale-presente Data Pipeline'
id: 4XAnyc4scy3OG6RdnD7OEf
status: PUBLISHED
createdAt: 2024-09-02T18:39:23.356Z
updatedAt: 2024-09-02T19:22:21.354Z
publishedAt: 2024-09-02T19:22:21.354Z
firstPublishedAt: 2024-09-02T19:20:54.808Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: vale-presente-data-pipeline
locale: pt
legacySlug: vale-presente-data-pipeline
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados de `gift cards` inclui informações históricas sobre gift cards criados ou modificados. Este conjunto de dados fornece apenas informações dos gift cards criados nativamente na VTEX, usando a [API de Giftcard](https://developers.vtex.com/docs/api-reference/giftcard-api).

<div class=”alert alert-warning”>
Os gift cards criados em aplicativos personalizados ou externos não aparecerão dentre os dados deste modelo.
</div>

Nesta seção inclui as seguintes informações:

- [Características dos dados de gift cards](#caracteristicas-dos-dados-de-gift-cards)  
- [Tabela gift_cards_events_raw](#tabela-gift-cards-events-raw)  
- [Análises com gift cards](#analises-com-gift-cards)  
- [Correlações com outros dados](#correlacao-com-outros-dados)  

#### Características dos dados

| **Características** | **Descrição** |
|:---:|:---:|
| Fonte de dados | Obtido a partir de informações do [Audit](https://help.vtex.com/pt/tutorial/searching-for-events-on-audit--5RXf9WJ5YLFBcS8q8KcxTA). |
| Disponibilidade | VTEX Admin. |
| Histórico | Os dados são mantidos por dois anos, a partir de 2024 para clientes que já utilizam a plataforma VTEX. |
| Intervalo mínimo de atualização | Uma hora. |

#### Tabela `gift_cards_events_raw`

Conheça a seguir os campos que constituem a tabela:

| **Nome da coluna** | **Tipo da coluna** | **Descrição da coluna** |
|:---:|:---:|:---:|
| account_name | character varying(255) | Nome da conta relacionada à operação do Gift Card. |
| event_date | timestamp with time zone | Data e hora da operação. |
| operation | character varying(200) | Tipo de operação. |
| subject_id | character varying(200) | Subtipo de operação. |
| author_id | character varying(1000) | Autor da operação. |
| giftcardid | character varying(5000) | ID do Gift Card usado na operação. Disponível apenas para operações `CREATE_GIFT_CARD` ou `EDIT_GIFT_CARD`. |
| giftcardvalue | character varying(5000) | Valor do gift card usado na operação. Disponível apenas para operações `CREATE_GIFT_CARD` ou `EDIT_GIFT_CARD`. |
| edit_initial_value | character varying(5000) | Valor inicial do Gift Card, antes da operação de edição. Disponível apenas para a operação `EDIT_GIFT_CARD`. |
| edit_final_value | character varying(5000)	 | Valor final do Gift Card, após a operação de edição. Disponível apenas para a operação `EDIT_GIFT_CARD`. |
| batch_id | character varying(100) | Identificador usado quando os dados são carregados na tabela para controle de qualidade da ingestão de dados. |

#### Análises com Gift Cards

Veja abaixo algumas das análises possíveis com a tabela de gift cards:  

- **Lista de gift cards criados:** revise a lista atual de gift cards criados.  
- **Auditoria das informações dos gift cards:** examine as atividades relacionadas aos seus gift cards, incluindo a identificação de quem criou um gift card específico e o histórico das edições de um gift crad.  

#### Correlações com Outros Dados

Os dados de gift card estão relacionados aos dados de pedidos, proporcionando uma análise abrangente de compras e vendas. Aqui estão alguns exemplos:  

- **Gift cards mais usados:** combinando este modelo de dados com os dados de [pedidos](https://help.vtex.com/pt/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz), é possível entender como os gift cards estão sendo utilizados e monitorar seu uso.  
- **Impacto nas vendas:** da mesma forma, ao combinar com dados de [pedidos](https://help.vtex.com/pt/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz), é possível avaliar como os gift cards influenciam as vendas.  

