---
title: 'O que significa ativar o multiplicador de brinde em uma promoção?'
id: 1gydgkmjEWcoo2CskUwuYK
status: CHANGED
createdAt: 2019-01-24T20:45:34.467Z
updatedAt: 2025-09-23T13:51:20.561Z
publishedAt: 2020-12-22T22:46:17.767Z
firstPublishedAt: 2019-01-24T22:13:50.154Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6dI9ZPE1e80iq8IuIsww2s
slugEN: what-does-it-mean-to-activate-a-gift-multiplier-on-a-promotion
legacySlug: o-que-significa-ativar-o-multiplicador-de-brinde-em-uma-promocao
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Ao configurar uma promoção do tipo Compre e Ganhe ou Promoção Regular, você pode adicionar o Multiplicador de brindes. Essa opção altera o comportamento da quantidade máxima de brindes que o cliente pode selecionar no carrinho, com base na quantidade de SKUs elegíveis.

## Como configurar no Admin
1. No Admin VTEX, acesse **Promoções > Promoções**, ou digite **Promoções** no topo da página na barra de busca.
2. Clique em `Criar promoção`.
3. Escolha o tipo de promoção:
    - Regular
    - Compre e Ganhe
4. No campo `Configurar benefício`, selecione Brinde.
5. Selecione os SKUs que darão direito ao brinde.
6. No campo **Quantidade máxima de brindes**, defina quantos brindes o cliente poderá selecionar.
7. No seletor ao lado, selecione **Por carrinho ou Por item elegível no carrinho**.
8. Finalize os demais campos da promoção e clique em **Salvar**.

A seguir, explicaremos como o multiplicador funciona nos dois cenários possíveis e como configurá-la no Admin VTEX.

## Comportamento do multiplicador de brindes
No campo de Adicionar benefício de brinde, há um seletor que define como será aplicada a quantidade máxima de brindes. Ele oferece duas opções:

### Por carrinho
A quantidade máxima de brindes é aplicada uma única vez, independentemente da quantidade de SKUs elegíveis no carrinho.

- Exemplo:

    - Quantidade máxima: `2`
    - SKUs elegíveis no carrinho: `3`
    - Brindes disponíveis: `2`

### Por item elegível
A quantidade máxima de brindes é multiplicada pelo número de SKUs elegíveis para definir a quantidade total de brindes disponíveis.

- Exemplo:

    - Quantidade máxima: `2`
    - SKUs elegíveis no carrinho: `3`
    - Brindes disponíveis: `6` (2 × 3)
