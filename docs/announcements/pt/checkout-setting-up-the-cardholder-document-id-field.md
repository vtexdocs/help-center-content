---
title: "Checkout - Configuração do campo de identificação do titular do cartão"
id: R5Pz4ofU9ueB2e5bMhSWH
status: PUBLISHED
createdAt: 2022-04-29T12:21:40.419Z
updatedAt: 2022-05-03T18:15:16.054Z
publishedAt: 2022-05-03T18:15:16.054Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: checkout-configuracao-do-campo-de-identificacao-do-titular-do-cartao
legacySlug: checkout-configuracao-do-campo-de-identificacao-do-titular-do-cartao
announcementImageID: ""
announcementSynopsisPT: Configurando a exibição do campo de identificação do titular do cartão no checkout.
---

Para permitir que os nossos parceiros possam operar em diferentes localidades e regiões, cada qual com seus próprios requisitos e características de consumo, a VTEX está implementando a possibilidade de configurar de forma opcional a exibição do campo de **Identificação do titular do cartão** no Checkout. Desse modo, os provedores de antifraude e lojistas terão a autonomia de decidir se este tipo de informação deverá ser solicitada ou não do cliente, quando as compras forem realizadas por meio de cartão de crédito ou débito.

## O que mudou?

Anteriormente, ao selecionar o cartão de crédito ou débito como métodos de pagamento na tela do Checkout, o cliente preenchia as seguintes informações dos dados do cartão:

* Número
* Nome impresso
* Validade 
* CVV
* Identificação do titular do cartão

A partir de agora, caso o provedor de antifraude entenda que o campo **Identificação do titular do cartão** não seja obrigatório para a sua análise antifraude, o lojista poderá configurar no Admin VTEX se o campo deverá ser exibido ou não no Checkout.

<div class = "alert alert-info">
  O campo <b>Identificação do titular do cartão</b> deve ser preenchido com um dado específico para cada país, como CPF (Brasil) e Social Security Number (Estados Unidos). O nome do campo será exibido de formas diferentes no Checkout, de acordo com o país onde a compra está sendo realizada.
</div>

## Por que realizamos esta mudança?

Para nos adequarmos às práticas dos diversos mercados, onde existem países nos quais este tipo de identificação não é solicitada ao realizar transações com cartões de crédito e débito.

## O que precisa ser feito?

Para verificar se os provedores de antifraude configurados em sua loja permitem a configuração de exibição do campo **Identificação do titular do cartão**, siga os passos abaixo.

1. Acesse o **Admin VTEX**.
2. Em **Pagamentos**, clique em **Configurações > Afiliações de Gateway**. 
3. Ao selecionar o provedor de antifraude escolhido, verifique se a opção **Campo de documento do titular do cartão **está disponível na tela de configuração.

![campo de documento do titular do cartão](//images.ctfassets.net/alneenqid6w5/23Hyo1jo4hkC3nXPmOa7NW/5bbfb8cbfce605b09d61e10a8ff06e3b/campo_de_documento_do_titular_do_cart__o.png)

<div class = "alert alert-warning">
  Caso a opção <b>Campo de documento do titular do cartão</b> não esteja disponível na tela de configuração do seu provedor de antifraude, o campo <b>Identificação do titular do cartão</b> continuará sendo exibido na tela do Checkout da loja e deverá ser obrigatoriamente preenchido pelo cliente.
</div>

Para maiores informações sobre como configurar a exibição do campo no Checkout de sua loja, acesse [Campo de documento do titular do cartão](https://help.vtex.com/pt/tutorial/antifraud-provider--4aZtmdpgFikcsQomWyqAOq#campo-de-documento-do-titular-do-cartao).

Para maiores informações sobre as configurações efetuadas internamente pelo provedor de antifraude, acesse [Cardholder Document Configuration](https://developers.vtex.com/vtex-rest-api/docs/cardholder-document-configuration).

