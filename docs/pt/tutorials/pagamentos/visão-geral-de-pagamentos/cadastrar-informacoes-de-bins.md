---
title: 'Cadastrar informações de BINs'
id: 7xvo4JJ53WM7aLzufdC4au
status: PUBLISHED
createdAt: 2024-05-02T19:11:00.734Z
updatedAt: 2025-08-11T19:36:44.910Z
publishedAt: 2025-08-11T19:36:44.910Z
firstPublishedAt: 2024-05-02T19:44:35.388Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: adding-bin-information
legacySlug: cadastrar-informacoes-de-bins
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

O Número de Identificação Bancária (BIN) é composto pelos primeiros seis ou oito dígitos de um cartão de crédito ou débito e caracteriza a instituição responsável pela emissão do cartão.  

![BIN_image_digits_PT_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/cadastrar-informacoes-de-bins_1.png)

Quando a instituição bancária deseja criar novos perfis de cartões ou emitir novos cartões para um modelo já existente, é necessário criar novos BINs. Isso também se aplica quando uma [bandeira](/pt/tutorial/o-que-e-uma-bandeira-de-cartao-de-credito--4bNba5QYuIwKEmac88KwyI) é comprada por outra.

Nestas situações, a VTEX precisa ser notificada para permitir que os novos cartões possam ser validados de forma correta no processo de pagamento em uma compra realizada na plataforma.

## Solicitar a inclusão de BINs

Para adicionar um novo BIN ou atualizar informações de um BIN já existente na VTEX, é necessário abrir um ticket no [Suporte VTEX](/pt/support).

> ⚠️ Para garantir a segurança e a legitimidade das alterações solicitadas, é obrigatório o envio de uma comprovação formal da instituição financeira atestando a propriedade dos BINs informados. Solicitações sem essa validação não poderão ser atendidas.

No ticket, você deve encaminhar em anexo uma planilha preenchida com as seguintes informações:

- __code__: novo BIN a ser adicionado ou BIN já existente que deverá ser atualizado.
- __cardBrand__: bandeira do cartão correspondente ao BIN.
- __cardType__: tipo de cartão (Crédito ou Débito).
- __country__: país de utilização do cartão.
- __bank__: banco responsável pela emissão do cartão.
- __cvvSize__: quantidade de caracteres do CVV (Card Verification Value).
- __cardLevel__: classificação do cartão (Gold, Platinum, Black, entre outros). 

Modelo de planilha preenchida:

![Bin_spreadsheet](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/cadastrar-informacoes-de-bins_2.PNG)

