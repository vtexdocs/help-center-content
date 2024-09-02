---
title: 'O valor do prêmio não foi adicionado ou foi adicionado um valor diferente ao cartão-presente'
id: 3i9TwGKpYOkwnHUXDON9V7
status: PUBLISHED
createdAt: 2023-06-14T16:06:37.154Z
updatedAt: 2023-06-27T12:44:59.727Z
publishedAt: 2023-06-27T12:44:59.727Z
firstPublishedAt: 2023-06-14T16:06:37.696Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-valor-do-premio-nao-foi-adicionado-ou-foi-adicionado-um-valor-diferente-ao-cartaopresente
locale: pt
kiStatus: Backlog
internalReference: 844079
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O valor do prêmio pode não ser ou ter um valor diferente adicionado ao cartão-presente do comprador quando a promoção estiver configurada para aplicar o valor do prêmio quando o status do pedido mudar para pagamento aprovado.

## Simulação



- Crie uma promoção de valor de prêmio para aplicar quando o status do pedido mudar para pagamento aprovado;
- Conclua uma compra;
- Verifique as interações em Detalhes do pedido no admin; não haverá a mensagem "_XX adicionado ao programa de fidelidade do usuário_

## Workaround



- Selecione via admin a opção "Gift Cards" (Cartões-presente) no menu, selecione o cartão-presente do comprador e clique em "Statement" (Declaração) na coluna Actions (Ações) para adicionar o valor adequado;
- Configure a promoção do valor do prêmio para ser aplicada quando o status do pedido mudar para faturado.



