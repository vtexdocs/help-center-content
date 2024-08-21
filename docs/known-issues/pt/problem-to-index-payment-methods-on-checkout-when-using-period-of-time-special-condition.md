---
title: 'Problema para indexar os métodos de pagamento no checkout ao usar período de tempo condição especial'
id: 1sM1ZtZw0GZ9TFuULg3Igd
status: PUBLISHED
createdAt: 2022-04-15T18:34:49.426Z
updatedAt: 2022-11-25T22:07:14.687Z
publishedAt: 2022-11-25T22:07:14.687Z
firstPublishedAt: 2022-04-15T18:34:50.048Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: problema-para-indexar-os-metodos-de-pagamento-no-checkout-ao-usar-periodo-de-tempo-condicao-especial
locale: pt
kiStatus: Backlog
internalReference: 402857
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Temos um problema para indexar os métodos de pagamento no checkout. Isso acontece com condições de pagamento que são configuradas com um período de tempo de condições especiais.

Se um Método de Pagamento tem uma única regra, e essa regra foi indexada fora de seu período de tempo válido, então o Método de Pagamento não aparecerá no índice. Ele não aparecerá também no formulário de caixa da UI. Ele permanecerá ausente até que uma nova indexação seja acionada dentro de seu período de validade.

Se um Pagamento tem uma única regra, e essa regra foi indexada dentro de seu período de tempo válido, então o Método de Pagamento aparecerá no índice, e por extensão, no formulário de Checkout UI. Mesmo se a regra expirar mais tarde, mas não houver nova indexação acionada, então o índice não será alterado e o método de pagamento continuará a aparecer no formulário UI de Checkout.

Pior ainda, se for um Cartão de Crédito, então bem a API de Checkout solicita as Opções de Instalação, o Gateway notará que a regra está fora de seu período de validade e retornará um conjunto vazio de opções, o que prejudicará a IU de Checkout. Ela permanecerá em "cálculo de parcelas" mesmo que as solicitações já tenham sido devolvidas.



## Simulação


O cenário pode ser reproduzido adicionando uma nova condição de pagamento com um período de tempo condição especial para um método de pagamento que ainda não tem outras condições de pagamento configuradas. No período válido da programação, o método de pagamento não aparecerá no checkout.

Depois disso, você pode configurar outra condição de pagamento (como ativo) para a mesma forma de pagamento sem agendamento e a primeira condição de pagamento aparecerá no checkout. Depois disso, você pode desativar esta condição de pagamento secundária e a primeira ainda aparecerá no checkout.

Mas este método de pagamento não desaparecerá da caixa sem outra ajuda de indexação, mesmo quando estiver fora do período estabelecido na programação.



## Workaround


Para uma condição de pagamento com um período de tempo em que a condição especial não aparece no checkout, o cliente pode definir outra condição de pagamento usando o mesmo método de pagamento e ela aparecerá no checkout. Mas isso não resolve todos os problemas, pois se a programação for liquidada para um período de tempo diário, o cliente precisará forçar a indexação toda vez que o método de pagamento precisar aparecer e desaparecer no checkout.

