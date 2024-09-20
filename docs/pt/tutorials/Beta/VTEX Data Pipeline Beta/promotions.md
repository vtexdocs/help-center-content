---
title: 'Promoções Data Pipeline '
id: 3WZ1syNucDFdvVhfKtA6Qd
status: PUBLISHED
createdAt: 2024-02-02T18:02:01.395Z
updatedAt: 2024-09-13T17:33:13.910Z
publishedAt: 2024-09-13T17:33:13.910Z
firstPublishedAt: 2024-05-27T19:26:59.739Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slug: promocoes-data-pipeline-beta
locale: pt
legacySlug: promocoes-data-pipeline-beta
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados de Promoções é constituído por quatro tabelas: `promotion_archived`, `promotion_created`, `promotion_removed` e `promotion_unarchived`. Essas quatro tabelas abrange todo o ciclo de vida das campanhas promocionais, do lançamento ao arquivamento, reativação ou remoção, fornecendo uma visão integral das estratégias promocionais da loja.

Nesta seção você encontra as seguintes informações:

- [Características dos dados de promoções](#caracteristicas-dos-dados-de-promocoes)
- [Tabela promotion_archivied](#tabela-promotion_archivied)
- [Tabela promotion_created](#tabela-promotion_created)
- [Tabela promotion_removed](#tabela-promotion_removed)
- [Tabela promotion_unarchivied](#tabela-promotion_unarchivied)
- [Análise com dados de promoções](#analise-com-dados-de-promocoes)
- [Correlações com outros dados](#correlacoes-com-outros-dados)

## Características dos dados de promoções

| **Característica** | **Descrição** |
|:---:|:---:|
| **Origem do dado** | São originadas do <a href="https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR">módulo de Promoções</a> do Admin VTEX. |
| **Disponibilidade** | Os dados de Promoções podem ser acessados através do Admin da VTEX e também por <a href="https://developers.vtex.com/docs/guides/promotions-overview">APIs de Promotions</a>. |
| **Histórico** | Os dados são mantidos por dois anos, a partir de 2024 para clientes que já utilizam a plataforma VTEX. |
| **Menor intervalo de atualização possível** | Uma hora. |

## Tabela promotion_archivied

A tabela `promotion_archivied` registra todas as promoções arquivadas. Inclui detalhes sobre as promoções removidas temporariamente ou permanentemente do uso ativo, permitindo um histórico e análise de campanhas anteriores. Veja a seguir os campos que compõem essa tabela.

| **Nome da Coluna** | **Tipo de Coluna** | **Descrição da Coluna** |
|:---:|:---:|:---:|
| version | character varying(16383) | Versão dos dados na tabela, útil para controle de versões e compatibilidade. |
| ingestion_time | timestamp without time zone | Data e hora em que os dados foram inseridos na tabela. |
| payload | super | Conjunto de dados efetivamente armazenados na tabela, englobando diversas informações. |
| batch_id | character varying(13) | Identificador do lote de dados, utilizado para rastrear a ingestão e gerenciamento dos dados. |

## Tabela promotion_created

A tabela `promotion_created` contém informações sobre promoções recém-criadas, ela é crucial para rastrear o lançamento de novas campanhas promocionais, oferecendo insights sobre as estratégias e iniciativas de marketing atuais. Veja a seguir os campos que compõem a tabela.

| **Nome da Coluna** | **Tipo de Coluna** | **Descrição da Coluna** |
|:---:|:---:|:---:|
| version | character varying(16383) | Indica a versão dos dados presentes na tabela. |
| ingestion_time | timestamp without time zone | Representa o momento em que os dados foram inseridos na tabela. |
| payload | super | Contém o conjunto de dados ou informações efetivamente carregadas na tabela. |
| batch_id | character varying(13) | Identificador único do lote de dados, utilizado para rastrear e gerenciar a ingestão de dados. |

## Tabela promotion_removed

A tabela `promotion_removed` registra as promoções excluídas ou desativadas, e permite analisar quais promoções foram descontinuadas e entender os motivos das decisões. Veja a seguir os campos que compõem a tabela.

| **Nome da Coluna** | **Tipo de Coluna** | **Descrição da Coluna** |
|:---:|:---:|:---:|
| version | character varying(16383) | Versão dos dados. |
| ingestion_time | timestamp without time zone | Data e hora da ingestão dos dados. |
| payload | super | Conteúdo dos dados inseridos. |
| batch_id | character varying(13) | ID de controle do lote de dados. |

## Tabela promotion_unarchived

A tabela `promotion_unarchived` armazena informações de promoções reativadas ou retiradas do arquivo. Ela fornece informações sobre campanhas reintroduzidas, ajudando a compreender as estratégias de reutilização ou revisão de promoções anteriores. Veja a seguir os campos que compõem a tabela.  

| **Nome da Coluna** | **Tipo de Coluna** | **Descrição da Coluna** |
|:---:|:---:|:---:|
| version | character varying(16383) | Versão dos dados na tabela. |
| ingestion_time | timestamp without time zone | Data e hora em que os dados foram inseridos na tabela. |
| payload | super | Conjunto de dados efetivamente armazenados na tabela. |
| batch_id | character varying(13) | Identificador do lote de dados inseridos na tabela. |

## Análise com dados de Promoções

Veja a seguir alguns exemplos de análises com o conjunto de sados de promoções:

**- Análise de ciclo de vida da promoção:** compare a frequência e duração das promoções para avaliar a longevidade e o sucesso das campanhas.  
**- Taxa de reativação de promoções:** analise quantas promoções são reativadas para determinar a eficácia de reutilizar ou revisar campanhas anteriores.  
**- Tendências de remoção de promoções:** rastreie o número e os tipos de promoções descontinuadas para entender os motivos da remoção e ajustar futuras estratégias.  
**- Impacto de novas promoções:** compare os lançamentos de promoções com as vendas e o tráfego para avaliar seu impacto imediato.  

## Correlações com outros dados

Veja a seguir a correlação do conjunto de dados de promoções, com alguns outros conjuntos de dados:

**- Dados de [pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv):** a análise da influência das promoções nos pedidos ajuda a compreender seu impacto nas vendas.  
**- Dados de [inventário](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2):** a correlação com o inventário é crucial para garantir a disponibilidade de produtos promovidos.  
**- Análises de marketing e publicidade:** a integração com esses dados permite medir a efetividade das promoções em atrair tráfego e engajamento.
**- Dados de [navegação no Site](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd):** analisar o efeito das promoções na navegação fornece insights sobre o comportamento do cliente e a eficácia da colocação das promoções. 

### Conheça outros Conjuntos de dados

- [Inventário](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navegação](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd) 
- [Pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)  
- [Pagamentos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Preços](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)   
- [Vale-presente](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
[Logs do Bridge](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)

