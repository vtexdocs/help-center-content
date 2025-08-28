---
title: 'Arquitetura do sistema de Preços'
id: 7GptzvlPDVM11ojEjywIQx
status: PUBLISHED
createdAt: 2019-07-04T13:51:00.418Z
updatedAt: 2024-04-22T19:20:30.485Z
publishedAt: 2024-04-22T19:20:30.485Z
firstPublishedAt: 2019-07-17T19:40:40.258Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: pricing-system-architecture
locale: pt
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: precos-101
order: 2
---

## Definição

A arquitetura do módulo de preços é organizada a partir de **três conceitos fundamentais**:

- Preços
- Tabelas de preços
- Contextos de aplicação das tabelas de preços

Os **preços** são as informações dos valores de venda dos seus SKUs. Estes preços são armazenados em **tabelas de preços**. Por sua vez, estas tabelas de preços podem ser aplicadas a diferentes **contextos**. 

Estes podem ser: 

- uma **política comercial**
- um grupo de **clientes autenticados** na sua loja
- a **origem do tráfego** para sua loja (UTMs)
- as **condições de uma promoção**

Abaixo, vemos um esquema de como os conceitos de *preços*, *tabela de preços* e *contextos* se relacionam:

![enter image description here](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/m%C3%B3dulos-vtex-primeiros-passos/precos-101/arquitetura-do-sistema-de-precos_1.svg)

## Preço computado

Existem alguns critérios que são levados em conta na decisão do sistema sobre qual deve ser o **preço de venda de um SKU para uma determinada tabela de preço**. Este preço de venda é chamado de **preço computado**.

O módulo de preços considera 4 critérios para calcular o preço computado para uma tabela de preços:

- Preço-base
- Regra de Preço
- Arredondamento de Preços
- Preço Fixo

1. Caso o SKU tenha apenas o *preço-base* cadastrado, o preço computado para uma determinada tabela de preços será igual ao **preço-base**. ![enter image description here](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/m%C3%B3dulos-vtex-primeiros-passos/precos-101/arquitetura-do-sistema-de-precos_2.svg)

2. Se o SKU tiver uma *regra de preço* configurada para uma determinada tabela de preços, o preço computado será igual ao **preço-base modificado pela regra de preço**.![enter image description here](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/m%C3%B3dulos-vtex-primeiros-passos/precos-101/arquitetura-do-sistema-de-precos_3.svg)

3. Em um outro cenário, vamos considerar um SKU com *preço-base*, *regra de preço* e *arredondamento de preços*. **O preço computado para uma determinada tabela de preço será calculado por uma combinação entre esses três fatores**. Primeiro, o preço base será modificado pela regra de preço. Depois disso, ocorrerá o arredondamento pela regra de preço psicológico.![rule3-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/m%C3%B3dulos-vtex-primeiros-passos/precos-101/arquitetura-do-sistema-de-precos_4.svg)

4. Por fim, se um SKU tiver um *preço fixo* cadastrado, **o preço computado para uma determinada tabela de preços será igual ao preço fixo**. Este preço tem um peso superior aos outros preços. Desta maneira, o módulo de preços *ignora os outros preços* caso encontre um preço fixo associado a um SKU.![enter image description here](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/m%C3%B3dulos-vtex-primeiros-passos/precos-101/arquitetura-do-sistema-de-precos_5.svg)

## Validar preço computado

Para verificar o preço de venda de um SKU em uma determinada tabela de preços, você pode consultar o **valor do preço computado** na seção **Lista de preços** do Admin da VTEX. No exemplo abaixo, vemos que o preço computado do **SKU 14** para a **tabela da política comercial 1** é igual a **334,62**:

![enter image description here](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/m%C3%B3dulos-vtex-primeiros-passos/precos-101/arquitetura-do-sistema-de-precos_6.png)

Você também pode verificar qual o preço computado de um SKU em uma tabela de preços **fazendo uma chamada por API**. Para isso, você deve fazer um **GET** no endpoint [Get Computed Price by price table or trade policy](https://developers.vtex.com/docs/api-reference/pricing-api#get-/pricing/prices/-itemId-/computed/-priceTableId-).

Esta chamada retorna o `sellingPrice` de um SKU na tabela de preço `1`. **Esta é a informação que o módulo de preços entrega como *preço de venda* do SKU**.

Nos próximos passos dessa trilha, entraremos em detalhes sobre cada um dos conceitos apresentados neste artigo e como cadastrar os preços dos seus SKUs na plataforma.
