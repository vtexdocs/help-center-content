---
title: Configurar o tipo de taxa de juros
id: 3h9ollbIS9YTXWcsmz8iF8
status: DRAFT
createdAt: 2019-02-13T16:48:24.960Z
updatedAt: 2022-01-27T19:56:23.586Z
publishedAt: 
firstPublishedAt: 2019-02-13T16:51:05.020Z
contentType: tutorial
productTeam: Financial
author: 5fYXkMJagMwcSAeMAsAuOI
slug: configurar-o-tipo-de-taxa-de-juros
legacySlug: configurar-o-tipo-de-taxa-de-juros
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

## Identificar o ID da forma de pagamento

O ID da forma de pagamento, que será configurada com Juros Simples, é obtido da seguinte forma:

- Acesse o módulo Pagamentos
- Acesse à esquerda, a sessão Configurações
- Acesse a aba de Condições de Pagamento
- Acesse a Condição de Pagamento que deseja configurar para usar Juros Simples
- Copie o último parâmetro da URL, que indica o ID dessa Forma de Pagamento (ver imagem)

![imagem para valer do artigo em português de financial](https://images.ctfassets.net/alneenqid6w5/2Q1rgCboSZE7N9hQ5k7qlD/f179a4a58dc9c75a1154b48141d3c003/imagem_para_valer_do_artigo_em_portugu__s_de_financial.png)

## Configurar o tipo de juros usando API

O campo "interestRateMethod" é onde deverá ser configurado se usarmos o algoritmo de cálculo de Juros Simples ou de Juros Compostos:
- **Juros Simples** será "interestRateMethod": 1.
- **Juros Compostos** será "interestRateMethod": null.

Inicialmente, será feita uma chamada "GET Rule by ID" para obter a configuração atual da Forma de Pagamento por meio da seguinte API:

https://developers.vtex.com/reference/configuration-1#rulebyid

O response que retornou a chamada anterior "GET Rule by ID" será o request da seguinte chamada "POST Rule by ID", para registrar a nova configuração, onde somente deverá ser modificado o valor "interestRateMethod": 1:

https://developers.vtex.com/reference/configuration-1#putrulebyid

<div class="alert alert-danger">
IMPORTANTE: Atualmente, a forma de pagamento somente pode ser modificada via API. Caso seja necessário modificar a forma de pagamento a partir da interface do usuário, o processo de configuração por API deverá ser repetido, pois ao Salvar as alterações, será considerado valor vazio por padrão.
</div>
