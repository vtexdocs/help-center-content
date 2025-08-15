---
title: 'Modificar a ordem de meios de pagamento no checkout'
id: frequentlyAskedQuestions_490
status: PUBLISHED
createdAt: 2019-01-24T20:45:54.205Z
updatedAt: 2023-10-31T17:27:08.660Z
publishedAt: 2023-10-31T17:27:08.660Z
firstPublishedAt: 2019-01-24T22:12:00.925Z
contentType: tutorial
productTeam: Shopping
author: authors_84
slugEN: how-to-change-the-order-of-payment-methods-at-checkout
legacySlug: como-modificar-a-ordem-de-meios-de-pagamento-no-checkout
locale: pt
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Você pode mudar a ordem de exibição dos meios de pagamento no Checkout da sua loja de duas formas: 
- Pelo Admin.
- Por meio de uma customização no JavaScript. 

> ⚠️ **Atenção:** ainda que exista essa possibilidade, por questões de segurança e performance, **não recomendamos** que você modifique os arquivos JavaScript do Checkout. A VTEX não se responsabiliza por qualquer problema gerado após a edição desse código.

## Como funciona o ordenação

De modo geral, a exibição das [condições de pagamento](/pt/tutorial/condicoes-de-pagamento) no checkout é definida pela ordem em que elas foram cadastradas na seção de Pagamentos do Admin. Ou seja, o meio de pagamento que está ativo há mais tempo na sua loja será exibido em primeiro lugar para seu cliente.

Mas alterar essa ordenação é simples: primeiro, basta desativar as condições de pagamento pré-estabelecidas. Em seguida, você pode organizar os meios de pagamento da forma que preferir e, assim, as condições novamente.    

No entanto, esse comportamento não é uma regra universal. Isso acontece porque alguns meios de pagamento precisam do código de identificação (ID) e dos nomes gerados pela afiliação usada para processá-los para aparecerem na interface.

A VTEX faz uma chamada para a afiliação e recebe os dados necessários para, então, exibir os meios de pagamento. Como essas chamadas são as últimas a serem retornadas, os meios de pagamento que passam por esse processo ficam sempre no fim da lista.
