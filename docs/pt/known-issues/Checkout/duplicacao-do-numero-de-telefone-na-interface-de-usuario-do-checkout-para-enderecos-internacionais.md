---
title: "Duplicação do número de telefone na interface de usuário do checkout para endereços internacionais"
id: 2BKELWWj8lhLf47Zt1FpZx
status: PUBLISHED
createdAt: 2025-07-11T21:06:14.660Z
updatedAt: 2025-07-11T21:06:15.438Z
publishedAt: 2025-07-11T21:06:15.438Z
firstPublishedAt: 2025-07-11T21:06:15.438Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: duplicacao-do-numero-de-telefone-na-interface-de-usuario-do-checkout-para-enderecos-internacionais
locale: pt
kiStatus: Backlog
internalReference: 1259047
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Foi identificado que, na loja ARG, quando um número de telefone internacional (por exemplo, 3454 15402807) é inserido no checkout, o campo do número de telefone é exibido duplicado na interface do usuário do checkout após a conclusão da etapa de informações pessoais. A duplicação está presente apenas na exibição da interface do usuário do checkout; o valor armazenado no formulário de pedido permanece correto, sem duplicação. O problema foi observado para números argentinos, mas pode ocorrer em casos internacionais semelhantes.

## Simulação



1. Adicione itens aleatórios ao carrinho e prossiga para o checkout.
2. Na etapa de informações pessoais, digite um número de telefone internacional, como 3454 15402807.
3. Continue para a etapa de envio.
4. Observe que o número de telefone aparece duplicado na tela de checkout.
5. Se você recarregar a página, o número será exibido corretamente novamente.
6. No formulário de pedido, o número armazenado não apresenta duplicação.



## Workaround


N/A





