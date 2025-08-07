---
title: 'Cadastrar preço fixo'
id: 3g39iXkQza4AW7C7L814mj
status: CHANGED
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
---

Há três formas de cadastrar um preço fixo:

- [Pelo módulo de Preços no Admin](#admin)
- [Pela planilha de preços fixos](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D)
- [Pela Pricing API](#pricing-api)

## Admin

Para criar um preço fixo pelo Admin, siga os seguintes passos:

<ol>
    <li>No Admin VTEX, acesse <strong>Preços &gt; Lista de preços</strong>, ou digite <strong>Lista de preços</strong> na barra de busca no topo da página.</li>
    <li>Marque a tabela de preço desejada.</li>
    <li>Clique na célula de preço de SKU da tabela de preço desejada.</li>
    <li>Clique em <strong>Definir preços fixos</strong>.</li>
    <li>Clique em <strong>Não definido</strong>.</li>
    <li>Preencha os campos descritos abaixo.</li>
    <ul>
        <li><strong>Quantidade mínima:</strong> quantidade mínima do item que precisa ser adicionada ao carrinho para que o preço fixo seja aplicado.</li>
        <li><strong>Preço:</strong> valor do preço fixo.</li>
        <li><strong>Definir preço de lista:</strong> opção para adicionar <i class="fas fa-toggle-on"></i> ou não <i class="fas fa-toggle-off"></i> um preço de lista.
            <ul>
                <li><strong>Preço de lista:</strong> valor do preço de venda sugerido para o item.</li>
            </ul>
        </li>
        <li><strong>Agendar preço fixo:</strong> opção para agendar <i class="fas fa-toggle-on"></i> ou não <i class="fas fa-toggle-off"></i> um preço fixo.
            <ul>
                <li><strong>Status:</strong> status indicando se o agendamento está agendado ou inativo.</li>
                <li><strong>Data Início:</strong> data de início do agendamento do preço fixo. Será a partir dessa data que o preço fixo será válido.</li>
                <li><strong>Hora Início:</strong> hora de início do agendamento do preço fixo. Será a partir dessa hora que o preço fixo será válido.</li>
                <li><strong>Data Fim:</strong> data de fim do agendamento do preço fixo. Será a partir dessa data que o preço fixo não será mais válido.</li>
                <li><strong>Hora Fim:</strong> hora de fim do agendamento do preço fixo. Será a partir dessa hora que o preço fixo não será mais válido.</li>
            </ul>
        </li>
    </ul>
    <li>Clique em <code>Salvar</code>.</li>
</ol>

### Remover preço fixo

Para excluir um preço fixo existente, siga os passos abaixo.

1. No Admin VTEX, acesse **Preços > Lista de preços**, ou digite **Lista de preços** na barra de busca no topo da página.
2. Clique na linha do SKU para o qual você deseja remover o preço fixo.
3. Clique no preço fixo cadastrado.
4. Clique em `Remover`.

<div class = "alert alert-info">
Não é possível fazer exclusão em massa de preços fixos pela planilha. A exclusão deve ser feita manualmente, seguindo os passos acima, ou via API <a href="https://developers.vtex.com/docs/api-reference/pricing-api#delete-/pricing/prices/-itemId-/fixed/-priceTableId-">Delete fixed prices on a price table or trade policy</a>.
</div>

## Pricing API

Para cadastrar um preço fixo por API, use o endpoint [Create or update base or fixed prices](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-) da Pricing API.

### Saiba mais

* [Agendar preço](https://help.vtex.com/pt/tutorial/agendar-preco--4vVha6TGzYkguWuMOqCcCk)
