---
title: 'Opção de parcelamento de 1x ausente no Checkout com várias condições de pagamento e configuração padrão definida para uma opção diferente'
id: 6xzCd4cSKl7ygcptvqwZs9
status: PUBLISHED
createdAt: 2023-05-11T17:23:35.529Z
updatedAt: 2023-05-11T17:23:36.035Z
publishedAt: 2023-05-11T17:23:36.035Z
firstPublishedAt: 2023-05-11T17:23:36.035Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: opcao-de-parcelamento-de-1x-ausente-no-checkout-com-varias-condicoes-de-pagamento-e-configuracao-padrao-definida-para-uma-opcao-diferente
kiStatus: Backlog
internalReference: 709971
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando há mais de uma condição de pagamento configurada para um sistema de pagamento e uma condição de pagamento diferente daquela com a opção de parcelamento em 1x está configurada como padrão, a opção de parcelamento em 1x não aparece na página de checkout. Nesses casos, apenas a opção de parcelamento em 1x é removida do checkout.

## Simulação


Para simular esse problema, siga estas etapas:

1. Vá para o painel de administração e configure três condições de pagamento para um sistema de pagamento com cartão de crédito, por exemplo, Visa. A condição de pagamento A poderia ter parcelas de 1x-3x, a condição B com parcelas de 4x-8x e a condição C com parcelas de 9x-12x.

2. Em seguida, vá para a página de checkout e observe que todas as opções de parcelamento aparecem na página de checkout.

3. Em seguida, defina a condição de pagamento B ou C como padrão e vá para a página de checkout novamente. Você notará que a opção de parcelamento em 1x desaparece da página de checkout.

4. Entretanto, se você definir a condição de pagamento A como padrão novamente, a opção de parcelamento em 1x reaparecerá na página de checkout.



## Workaround


Para resolver esse problema, você pode definir a opção de regra de pagamento de parcela mais baixa como padrão ou remover a configuração padrão excluindo a condição de pagamento com essa configuração e configurando uma nova condição de pagamento sem o sinalizador padrão.

