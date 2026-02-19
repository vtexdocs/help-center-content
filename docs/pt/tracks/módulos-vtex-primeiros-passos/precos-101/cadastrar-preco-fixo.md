---
title: 'Cadastrar preço fixo'
id: 3g39iXkQza4AW7C7L814mj
status: PUBLISHED
createdAt: 2019-07-04T13:53:38.630Z
updatedAt: 2025-05-01T16:09:41.194Z
publishedAt: 2024-08-20T13:48:57.885Z
firstPublishedAt: 2019-07-17T19:46:38.452Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: adding-a-fixed-price
locale: pt
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: precos-101
order: 10
---

Há três formas de cadastrar um preço fixo:

- [Pelo módulo de Preços no Admin](#admin)
- [Pela planilha de preços fixos](/pt/docs/tracks/exportacao-e-importacao-via-planilha-de-precos)
- [Pela Pricing API](#pricing-api)

## Admin

Para criar um preço fixo pelo Admin, siga os seguintes passos:

<ol>
    <li>No Admin VTEX, acesse **Preços &gt; Lista de preços**, ou digite **Lista de preços** na barra de busca no topo da página.</li>
    <li>Marque a tabela de preço desejada.</li>
    <li>Clique na célula de preço de SKU da tabela de preço desejada.</li>
    <li>Clique em **Definir preços fixos**.</li>
    <li>Clique em **Não definido**.</li>
    <li>Preencha os campos descritos abaixo.</li>
    <ul>
        <li>**Quantidade mínima:** quantidade mínima do item que precisa ser adicionada ao carrinho para que o preço fixo seja aplicado.</li>
        <li>**Preço:** valor do preço fixo.</li>
        <li>**Definir preço de lista:** opção para adicionar <i class="fas fa-toggle-on"></i> ou não <i class="fas fa-toggle-off"></i> um preço de lista.
            <ul>
                <li>**Preço de lista:** valor do preço de venda sugerido para o item.</li>
            </ul>
        </li>
        <li>**Agendar preço fixo:** opção para agendar <i class="fas fa-toggle-on"></i> ou não <i class="fas fa-toggle-off"></i> um preço fixo.
            <ul>
                <li>**Status:** status indicando se o agendamento está agendado ou inativo.</li>
                <li>**Data Início:** data de início do agendamento do preço fixo. Será a partir dessa data que o preço fixo será válido.</li>
                <li>**Hora Início:** hora de início do agendamento do preço fixo. Será a partir dessa hora que o preço fixo será válido.</li>
                <li>**Data Fim:** data de fim do agendamento do preço fixo. Será a partir dessa data que o preço fixo não será mais válido.</li>
                <li>**Hora Fim:** hora de fim do agendamento do preço fixo. Será a partir dessa hora que o preço fixo não será mais válido.</li>
            </ul>
        </li>
    </ul>
    <li>Clique em `Salvar`.</li>
</ol>

### Remover preço fixo

Para excluir um preço fixo existente, siga os passos abaixo.

1. No Admin VTEX, acesse **Preços > Lista de preços**, ou digite **Lista de preços** na barra de busca no topo da página.
2. Clique na linha do SKU para o qual você deseja remover o preço fixo.
3. Clique no preço fixo cadastrado.
4. Clique em `Remover`.

> ℹ️ Não é possível fazer exclusão em massa de preços fixos pela planilha. A exclusão deve ser feita manualmente, seguindo os passos acima, ou via API [Delete fixed prices on a price table or trade policy](https://developers.vtex.com/docs/api-reference/pricing-api#delete-/pricing/prices/-itemId-/fixed/-priceTableId-).

## Pricing API

Para cadastrar um preço fixo por API, use o endpoint [Create or update base or fixed prices](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-) da Pricing API.

### Saiba mais

* [Agendar preço](/pt/docs/tutorials/agendar-preco)
