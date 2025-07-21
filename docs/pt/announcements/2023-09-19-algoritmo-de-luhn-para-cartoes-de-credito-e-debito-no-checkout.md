---
title: 'Algoritmo de Luhn para cartões de crédito e débito no Checkout'
id: 22hAb6KVWUitIG9OzFzgi2
status: PUBLISHED
createdAt: 2023-09-19T15:43:01.350Z
updatedAt: 2023-09-19T16:47:51.216Z
publishedAt: 2023-09-19T16:47:51.216Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2023-09-19-luhn-algorithm-for-credit-and-debit-cards-at-checkout
locale: pt
legacySlug: algoritmo-de-luhn-para-cartoes-de-credito-e-debito-no-checkout
announcementImageID: ''
announcementSynopsisPT: 'Reduza o percentual de transações rejeitadas por motivo de número de cartão inválido'
---

A VTEX disponibiliza a partir de agora no Checkout, a validação dos números de cartão de crédito e débito por meio do algoritmo de Luhn.

## O que mudou?

Anteriormente, no momento em que um cliente inseria um número de cartão no Checkout, não era possível identificar se o número correspondia a um cartão válido. Quando ocorriam erros de digitação ou preenchimento, a transação de pagamento era criada e posteriormente cancelada durante a fase de autorização.

A partir de agora, o algoritmo de Luhn será aplicado para assegurar que somente um número de cartão válido possa ser utilizado na compra. Desta forma, o percentual de transações rejeitadas pelo uso de um número de cartão inválido será reduzido.

Caso um cliente digite um número incorreto, uma mensagem de erro será exibida no Checkout. Nesta situação, o cliente deverá verificar o número inserido e corrigí-lo para prosseguir com a finalização da compra.

![algoritmo_luhn_pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2023-09-19-algoritmo-de-luhn-para-cartoes-de-credito-e-debito-no-checkout_1.PNG)

## Por que fizemos essa mudança?

A rejeição de uma transação de pagamento por motivo de número de cartão inválido, poderia contribuir para a desistência do cliente em realizar uma nova compra, já que seria necessário corrigir o número do cartão. Portanto, esta melhoria na experiência de compra visa aumentar a taxa de conversão da sua loja.

## O que precisa ser feito?

Nenhuma ação é necessária. O algoritmo de Luhn já está ativo em todas as lojas VTEX.

<div class="alert alert-warning">
O algoritmo de Luhn não tem a função restringir fraudes por ataques de cartões. Seu objetivo específico é a verificação de erros de digitação ou preenchimento dos números dos cartões.
</div>
