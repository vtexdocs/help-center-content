---
title: 'Os endereços são exibidos no Checkout quando o comprador tem a permissão "Can add shipping" (Pode adicionar frete)'
id: 2ssiTryGJ6kGoZWxWkGnFF
status: PUBLISHED
createdAt: 2024-05-21T22:03:55.172Z
updatedAt: 2024-05-21T22:03:56.435Z
publishedAt: 2024-05-21T22:03:56.435Z
firstPublishedAt: 2024-05-21T22:03:56.435Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: os-enderecos-sao-exibidos-no-checkout-quando-o-comprador-tem-a-permissao-can-add-shipping-pode-adicionar-frete
locale: pt
kiStatus: Backlog
internalReference: 1037067
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando uma função tem a permissão "Pode adicionar envio" nas configurações de checkout B2B e um comprador tem endereços registrados no sistema de perfil, clicar em "Entregar em outro endereço" na etapa de envio e clicar em "Voltar à lista de endereços" mostra os endereços do sistema de perfil.

## Simulação



- Adicione a permissão "Can add shipping" (Pode adicionar remessa) nas B2B Checkout Settings (Configurações de checkout B2B) via administrador a uma função;
- Adicione a função a um comprador;
- Faça login na loja e monte um carrinho;
- Depois de acessar o checkout, clique em "Change shipping options" (Alterar opções de envio)
- Clique em "Deliver to another address" (Entregar em outro endereço) na etapa de envio e clique em "Back to address list" (Voltar à lista de endereços),
- Diferentes endereços do centro de custo estão no carrinho

## Workaround


Ative a opção Salvar dados do usuário para que nenhum endereço seja adicionado ao sistema de perfil.




