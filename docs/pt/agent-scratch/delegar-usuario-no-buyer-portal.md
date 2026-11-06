---
title: 'Delegar um usuário no Buyer Portal'
createdAt: '2026-11-06T14:26:27.541Z'
updatedAt: '2026-11-06T14:26:27.541Z'
contentType: tutorial
productTeam: 'B2B'
slugEN: delegate-a-user-in-buyer-portal
locale: pt
---

Este artigo explica como você delega, pelo próprio **User Settings**, a outro usuário a capacidade de agir em seu nome no Buyer Portal, aprovando solicitações, visualizando pedidos e realizando compras, por meio de uma Delegação com data de início e data de término definidas.

## Antes de começar

- Estar logado como comprador, com token de frente de loja, no Buyer Portal.
- O usuário a ser delegado deve pertencer à mesma Root Org Unit do comprador que está criando a delegação.

## Passo a passo

Siga as instruções a seguir para delegar um usuário no Buyer Portal:

1. Acesse **User Settings** e localize o cartão **"Usuários que podem agir em meu nome"**.
2. Clique em **Add Delegate** para abrir o modal de criação da delegação.
3. Selecione o usuário Delegado em uma lista suspensa, filtrada pela mesma árvore de Org Unit e pesquisável por nome ou e-mail.
4. Informe a **Data de início** da delegação. O valor padrão é a data de hoje.
5. Informe a **Data de término** da delegação. Esse campo é obrigatório, pois não existe delegação sem prazo definido.
6. **Motivo (opcional):** descreva o motivo da delegação.
7. Clique em **Submit** para confirmar a criação da delegação.

   > ℹ️ A linha da delegação passa a listar o nome do Delegado, o e-mail, a data de início, a data de término e o status, que pode ser "Active", "Upcoming", "Expired" ou "Revoked".

Após a confirmação, o comprador deve ver a nova delegação listada no cartão **"Usuários que podem agir em meu nome"**, com o status correspondente ao período definido.
