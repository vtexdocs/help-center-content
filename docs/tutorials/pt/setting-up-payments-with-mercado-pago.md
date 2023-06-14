---
title: 'Configurar pagamentos com Mercado Pago'
id: 2FPdhTma6QywUmwEcEUGoS
status: PUBLISHED
createdAt: 2018-03-08T21:11:28.158Z
updatedAt: 2023-03-23T16:02:38.696Z
publishedAt: 2023-03-23T16:02:38.696Z
firstPublishedAt: 2018-03-08T22:43:32.092Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagamentos-com-mercado-pago
legacySlug: configurar-pagamentos-com-mercado-pago
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Além de um subadquirente para processar transações realizadas com diversas condições de pagamento, o Mercado Pago também oferece um serviço de [carteira digital](/pt/faq/o-que-e-uma-carteira-digital-e-wallet). Para habilitar essa condição de pagamento, você precisa primeiro configurar uma das afiliações de gateway compatíveis:

- MercadoPago
- [MercadoPagoV1](https://help.vtex.com/pt/tutorial/configurar-o-subadquirente-mercadopagov1#)
- [MercadoPagoV2](https://help.vtex.com/pt/tutorial/configurar-o-subadquirente-mercadopagov2#)

Abaixo estão as configurações para o conector __Mercado Pago__.

## Configurar afiliação de gateway MercadoPago
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __MercadoPago__.
4. Preencha os campos de cadastro com as credenciais fornecidas pelo MercadoPago (campos _Client id_ e _Client secret_). Lembrando que elas não devem começar com __APP\_USR__.
5. No campo __País__, selecione o país da sua loja.
6. Em __Time Zone__, indique a região que define seu horário local.
7. Em __orderExpirationHours__, defina por quantas horas o sistema deve checar o status do pedido antes de sua expiração. Quando essa opção não é preenchida, é adotado o padrão de 192 horas.
8. No campo __maxInstallments__, escolha a quantidade máxima de parcelas enviadas ao MercadoPago.
9. Em __Categoria Principal__, escolha a categoria que mais se encaixa com sua loja.
10. Acesse o link `http://developers.mercadopago.com/documentation/instant-payment-notifications` e clique no botão __Configure the URL where you want to receive notifications__.
11. Acesse o domínio `vtexpayments` através do link `https://{AccountName}.vtexpayments.com.br/mp/payment/notifications` para configurar as notificações que vão ser enviadas pelo MercadoPago.
12. No campo __Tipo de estorno__, escolha entre o processo automático ou a solicitação manual (neste caso, o MercadoPago vai enviar um e-mail avisando do estorno pendente).
13. Clique em __Salvar__.  

<div class="alert alert-warning">
O passo indicado no item <strong>11</strong> é realizado em ambiente externo à VTEX. Portanto, o processo indicado pode ser atualizado sem aviso prévio. 
</div>

## Configurar condição de pagamento MercadoPago
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações > Condições de pagamento**, ou digite **Configurações** na barra de busca no topo da página.
2. Clique no botão __+__.
3. Selecione o meio de pagamento __MercadoPago__.
4. Clique no botão __Status__ para ativar essa condição de pagamento.
5. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa __Usar Antifraude__.
6. Escolha entre __à vista__ ou __parcelado__. Saiba mais sobre essas opções [neste artigo do Help](/pt/tutorial/condicoes-de-pagamento).
7. Você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
8. Clique em __Salvar__.

Depois de seguir os passos indicados, o MercadoPago vai aparecer no checkout da sua loja como uma opção de pagamento. Depois de clicar em __Finalizar Compra__, seu cliente será direcionado para o ambiente da carteira digital, onde deverá seguir as etapas de autenticação.
