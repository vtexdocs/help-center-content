---
title: 'Cadastrar preço fixo'
id: 3g39iXkQza4AW7C7L814mj
status: CHANGED
createdAt: 2019-07-04T13:53:38.630Z
updatedAt: 2023-03-29T21:16:34.391Z
publishedAt: 2023-03-29T18:18:57.294Z
firstPublishedAt: 2019-07-17T19:46:38.452Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: cadastrar-preco-fixo
locale: pt
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugPT: precos-101
---

Há três formas de cadastrar um preço fixo:

- [Pelo módulo de Preços no Admin](#admin)
- [Pela planilha de preços fixos](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D)
- [Pela Pricing API](#pricing-api)

## Admin

Para criar um preço fixo pelo Admin, siga os seguintes passos:

1. No Admin VTEX, acesse *Preços > Lista de preços*, ou digite *Lista de preços* na barra de busca no topo da página.
2. Marque a tabela de preço desejada.
3. Clique na célula de preço de SKU da tabela de preço desejada.
4. Clique em **Definir preços fixos**.
5. Clique em **Não definido**.
7. Preencha os campos descritos abaixo.
- **Quantidade mínima:** quantidade mínima do item que precisa ser adicionada ao carrinho para que o preço fixo seja aplicado.
- **Preço:** valor do preço fixo.
- **Definir preço de lista:** opção para adicionar <i class="fas fa-toggle-on"></i> ou não <i class="fas fa-toggle-off"></i> um preço de lista.
  - **Preço de lista:** valor do preço de venda sugerido para o item.

- **Agendar preço fixo:** opção para agendar <i class="fas fa-toggle-on"></i> ou não <i class="fas fa-toggle-off"></i> um preço fixo.
  - **Status:** status indicando se o agendamento está agendado ou inativo.
  - **Data Início:** data de início do agendamento do preço fixo. Será a partir dessa data que o preço fixo será válido.
  - **Hora Início:** hora de início do agendamento do preço fixo. Será a partir dessa hora que o preço fixo será válido.
  - **Data Fim:** data de fim do agendamento do preço fixo. Será a partir dessa data que o preço fixo não será mais válido.
  - **Hora Fim:** hora de fim do agendamento do preço fixo. Será a partir dessa hora que o preço fixo não será mais válido.
8. Clique em `Salvar`.

### Remover preço fixo

Para excluir um preço fixo existente, siga os passos abaixo.

1. No Admin VTEX, acesse *Preços > Lista de preços*, ou digite *Lista de preços* na barra de busca no topo da página.
2. Clique na linha do SKU cujo preço fixo você deseja remover.
3. Clique no preço fixo cadastrado.
4. Clique no botão `Remover`.

## Pricing API

Para cadastrar um preço fixo por API, use o endpoint [Create or update base or fixed prices](https://developers.vtex.com/vtex-rest-api/reference/prices-and-fixed-prices#createupdatepriceorfixedprice) da Pricing API.

### Saiba mais

* [Agendar preço](https://help.vtex.com/pt/tutorial/agendar-preco--4vVha6TGzYkguWuMOqCcCk)
