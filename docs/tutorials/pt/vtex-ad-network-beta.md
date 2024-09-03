---
title: 'VTEX Ad Network (Beta)'
id: 2cgqXcBuJmXN2livQvClur
status: PUBLISHED
createdAt: 2024-04-23T17:38:07.378Z
updatedAt: 2024-08-09T21:21:48.620Z
publishedAt: 2024-08-09T21:21:48.620Z
firstPublishedAt: 2024-04-23T19:11:42.313Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: vtex-ad-network-beta
locale: pt
legacySlug: vtex-ad-network-beta
subcategory: 2AksvvAtAsbAfE7HsBIVDU
---

>ℹ️ O VTEX Ad Network está em fase Beta, o que significa que estamos trabalhando para aprimorá-lo. Se já é cliente da VTEX e deseja adotar essa funcionalidade em seu negócio, entre em contato com o [Suporte Comercial](https://help.vtex.com/pt/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/br-pt/contato/).

O **VTEX Ad Network** conecta lojas VTEX a marcas interessadas em anunciar seus produtos. Com esta conexão, anunciantes e lojas VTEX podem potencializar seu negócio:

- **Anunciantes:** marcas, que podem criar campanhas de anúncios para promover seus produtos nas frentes de lojas VTEX que possuem aqueles produtos em seus catálogos, aumentando suas vendas.
- **Lojas VTEX:** podem disponibilizar espaço publicitário para que marcas promovam seus produtos na sua frente de loja. Estas lojas receberão um valor por cada clique recebido em anúncios na sua loja.

## Campanhas

Uma campanha do **VTEX Ad Network** é definida pelas seguintes características:

- Produtos promovidos.
- Orçamento total.
- Lance, que é o custo por clique (CPC), ou seja, valor que o anunciante está disposto a pagar por cada clique recebido no anúncio. Este valor também determina a [prioridade de diferentes anúncios](#priorizacao-de-anuncios) por um mesmo espaço de exibição. Este valor é definido por produto.
- Duração.
- Cobertura, que determina se a campanha vai rodar em todo o Ad Network ou em lojas específicas.

Ao criar uma campanha, o anunciante define um ou mais códigos EAN (código de barras), associados aos produtos que deseja promover. Dessa forma, a VTEX poderá exibir estes anúncios em todas as lojas que vendam aquele produto e que tenham aderido ao **VTEX Ad Network**. Ou, se preferir, o anunciante pode selecionar em quais lojas deseja exibir sua campanha, dentre as possíveis.

## Formato de anúncio

Atualmente, a VTEX disponibiliza um único formato de anúncio: produtos patrocinados. Isso significa que produtos que foram promovidos por anunciantes podem aparecer em um lugar de destaque em alguns contextos onde há listagem de produtos:

- Resultados de busca.
- Páginas de categorias.

Veja abaixo um exemplo da exibição deste formato:

![vtex_ad_network_sponsored_PT](https://images.ctfassets.net/alneenqid6w5/1PlUii3Hd3Tma9trnhqnLS/12e38a4f482a08d13f823b17a88fbf5b/vtex_ad_network_sponsored.png)

Lojas participantes do **VTEX Ad Network** poderão [configurar a quantidade de espaços de anúncio](https://help.vtex.com/pt/tutorial/advertising-with-vtex-ad-network-beta--5WoXcJzHc7EQElpPjziqse#criando-uma-campanha) que disponibilizarão em cada um destes contextos na loja.

## Priorização de anúncios

Toda vez que um cliente navega até uma página de loja que têm espaços de anúncios disponíveis, o **VTEX Ad Network** determina que anúncios serão exibidos.

Este processo de priorização ocorre em três etapas:

#### 1. Seleção

- O **VTEX Ad Network** considera o contexto de navegação do cliente, ou seja, termo de busca, categoria ou vitrine, e seleciona campanhas que contêm produtos que se encaixam neste contexto. A plataforma considera inclusive uma pontuação mínima de relevância, para garantir que só serão exibidos anúncios que podem interessar ao cliente.
- Nesta etapa, a VTEX também considera compatibilidade do ponto de vista de [configurações da campanha](#campanhas) como cobertura e termos de busca negativos.

#### 2. Avaliação de ritmo de gasto

- Nesta etapa, a VTEX pondera o orçamento das campanhas, excluindo campanhas que não tem orçamento disponível e otimizando gastos. Esta otimização é baseada na probabilidade de haver cliques e conversão, com o objetivo de maximizar o sucesso da campanha.

#### 3. Leilão

- A partir dos candidatos selecionados nas etapas anteriores, o **VTEX Ad Network** determina os melhores produtos promovidos para preencher os espaços disponíveis.
- A plataforma classifica os anúncios com base no seu lance (CPC) e [índice de qualidade](#indice-de-qualidade).
- Há também um fator de exploração no cálculo do leilão para evitar vieses. Portanto, quanto maior o valor CPC x índice de qualidade, maior a probabilidade de um anúncio ser melhor classificado, mas não há garantia de que será sempre.

Uma vez determinados os anúncios exibidos na página, determina-se o valor dos lances. O lance vencedor do leilão terá o valor final do segundo maior lance mais R$ 0,01.

>❗ É possível que nenhum anúncio seja selecionado com o processo de priorização, caso não haja produtos promovidos que se encaixem no contexto de navegação, na cobertura de loja ou que não tenham orçamento disponível.

### Índice de qualidade

O índice de qualidade de anúncios estima a probabilidade de um usuário clicar no anúncio, baseando-se na taxa de cliques deste anúncio. Este índice influencia na etapa de leilão do processo de [Priorização de anúncios](#priorizacao-de-anuncios). Quanto maior o índice de qualidade, mais provável que um determinado anúncio tenha uma boa classificação no leilão.

### Exemplo de priorização

Considere os seguintes anúncios, de campanhas diferentes, que concorrem em uma mesma loja.

| **Anúncio** | **Produto** | **Índice de qualidade** | **Lance** | **Orçamento** |
| :---: | :---: | :---: | :---: | :---: |
| 1 | Perfume A | 10% | R$ 1,00 | R$ 0 |
| 2 | Perfume B | 1% | R$ 2,00 | R$ 10 |
| 3 | Perfume C | 10% | R$ 0,90 | R$ 10 |
| 4 | Xampu A | 5% | R$ 0,50 | R$ 10 |

Imagine que um cliente desta loja acessa a página da categoria **Perfumes**, que contém 300 produtos. Neste caso, o processo de priorização seguiria da seguinte forma:

1. Na etapa de direcionamento, a plataforma descarta o anúncio 4, pois não se encaixa no contexto de navegação do cliente.
2. Ao avaliar o ritmo, a plataforma descarta o anúncio 1, já que este não possui orçamento disponível.
3. No leilão, o produto 3 tem uma chance maior de ser classificado em primeiro lugar, considerando **Lance** e **Taxa de conversão**.

## Janela de atribuição

A janela de atribuição do **VTEX Ad Network** é de 15 dias. Isso significa que se um cliente clica em um anúncio de um produto e compra aquele produto até 15 dias depois deste clique, o VTEX Ad Network atribui esta venda ao anúncio.

Caso o cliente compre após esse período, a venda não será atribuída ao anúncio.

## Como fazer parte do VTEX Ad Network

Confira abaixo como você pode fazer parte do **VTEX Ad Network**, seja como [loja](#lojas) que exibe anúncios ou [anunciante](#anunciantes).

### Lojas

>⚠️ Por ora, apenas lojas desenvolvidas com [Store Framework](https://help.vtex.com/pt/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework) podem disponibilizar espaço de anúncios.

Para disponibilizar espaço publicitário na sua loja, você precisa entrar em contato com o [Suporte Comercial](https://help.vtex.com/pt/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ) para solicitar a instalação do app __VTEX Ad Network para lojas__ na sua conta VTEX.

Saiba mais sobre as funcionalidades para lojas com o artigo [Exibir anúncios do VTEX Ad Network na sua loja (Beta)](https://help.vtex.com/pt/tutorial/exibir-anuncios-do-vtex-ad-network-na-sua-loja-beta--6gWgZrMLcS5FDFFdl5LETA).

### Anunciantes

Qualquer marca que deseja promover seus produtos que já são vendidos em lojas VTEX pode anunciar com **VTEX Ad Network**. Para isso, você precisa entrar em contato com o [Suporte Comercial](https://help.vtex.com/pt/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ) para solicitar a instalação do app __VTEX Ad Network__ na sua conta VTEX.

Saiba mais sobre as funcionalidades disponíveis para anunciantes com o artigo [Anunciar com VTEX Ad Network (Beta)](https://help.vtex.com/pt/tutorial/anunciar-com-vtex-ad-network-beta--5WoXcJzHc7EQElpPjziqse).
