---
title: 'Save user data opt-in no Checkout: utilizando informações pessoais e de pagamento salvas em futuras compras'
id: ZZQyqkBLort425Mer2E7N
status: PUBLISHED
createdAt: 2022-06-21T11:47:21.760Z
updatedAt: 2022-10-21T16:44:56.661Z
publishedAt: 2022-10-21T16:44:56.661Z
contentType: updates
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2022-06-21-save-user-opt-in-using-stored-information-for-future-purchases
locale: pt
legacySlug: save-user-opt-in-utilizando-informacoes-salvas-em-futuras-compras
announcementImageID: 'undefined'
announcementSynopsisPT: 'Permita que seus clientes escolham se os seus dados devem ser salvos para utilização em futuras compras.'
---

Em atendimento a regulamentações que promovem a preservação e proteção de dados dos consumidores, tais como GDPR (General Data Protection Regulation da Europa) e LGPD (Lei Geral de Proteção de Dados) no Brasil, a VTEX desenvolveu a funcionalidade **Save user data opt-in**. Por meio desta solução, o lojista permite que o cliente tome a decisão de manter os seus dados salvos ou não na loja onde está efetuando uma compra.

## O que mudou?

Anteriormente, após o cadastro na loja ou primeira compra, os dados do cliente eram salvos de forma automática na loja, sem a necessidade de realizar nenhum tipo de confirmação. 

A partir de agora, duas caixas de seleção estarão disponíveis na tela do Checkout, permitindo que o usuário indique se deseja que suas informações pessoais e de pagamento sejam armazenadas e reutilizadas para futuras compras. Dessa maneira, será  reduzido o tempo de compra realizado pelo cliente. 

![ Save user data opt-in PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2022/2022-06-21-save-user-opt-in-utilizando-informacoes-salvas-em-futuras-compras_1.PNG)

Saiba mais em [SmartCheckout - Preenchimento automático de dados do cliente](https://help.vtex.com/pt/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan#).

## O que precisa ser feito?

Para habilitar o **Save user data opt-in** em sua loja, é necessário modificar o parâmetro `savePersonalDataAsOptIn` no objeto `orderForm` do Checkout. Saiba mais em [Save user data opt-in on Checkout](https://developers.vtex.com/vtex-rest-api/docs/enable-the-save-user-data-opt-in).

