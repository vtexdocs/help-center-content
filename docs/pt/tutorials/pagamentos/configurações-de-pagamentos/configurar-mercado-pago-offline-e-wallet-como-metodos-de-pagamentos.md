---
title: 'Configurar Mercado Pago Offline e Wallet como métodos de pagamentos'
id: 1oXH6VnfhGcVHdE7RD6cpd
status: PUBLISHED
createdAt: 2021-11-30T22:49:18.953Z
updatedAt: 2023-03-23T15:44:05.324Z
publishedAt: 2023-03-23T15:44:05.324Z
firstPublishedAt: 2021-11-30T23:24:03.450Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-mercado-pago-offline-and-wallet-as-payment-methods
legacySlug: configurar-mercado-pago-offline-e-wallet-como-metodos-de-pagamentos
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O Mercado Pago possui alguns métodos de pagamentos exclusivos, dentre os quais podemos destacar:
- __Mercado Pago Offline__:  Permite o uso de [pagamentos offline disponíveis na América Latina (LATAM)](/pt/tutorial/what-offline-payment-conditions-are-available-in-latin-america--2lXPwiH6KcsSMuWaoigueq#).
- __Mercado Pago Wallet__: Carteira digital que permite realizar o pagamento utilizando os créditos de sua conta no Mercado Pago.

Para utilizar as soluções do Mercado Pago, entre em contato com a VTEX e solicite a instalação do aplicativo “Mercado Pago Payment APP”. Caso o aplicativo não esteja instalado, o seu cliente não visualiza o popup para fechar a compra ao final da transação.

Da mesma forma, certifique-se que os subadquirentes [MercadoPagoV1](/pt/tutorial/configurar-o-subadquirente-mercadopagov1#) ou [MercadoPagoV2](/pt/tutorial/configurar-o-subadquirente-mercadopagov2) estejam cadastrados na sua loja.

## Configurando o Mercado Pago Offline

Para configurar o Mercado Pago Offline, siga as instruções abaixo:
<ol>
  <li>Acesse o **Admin** VTEX.</li>
  <br>
  <li>Clique em **Pagamentos**.</li>
  <br>
  <li>Em seguida, clique em **Configurações**.</li>
  <br>
  <li>Na aba Condições de pagamento, clique no botão **+**.</li>
  <br>
  <li>Busque e clique em **MercadoPagoOff**.</li>
  <br>
  <li>No topo da página, preencha o campo **Nome da Regra** com um nome de sua preferência para identificação.</li>
  <br>
  <li>Logo abaixo, clique no botão **Status** para ativar a regra.</li>
<br>
> ℹ️ Não é necessário selecionar o campo **Processar com afiliação**, pois o subadquirente MercadoPagoV2 já vem configurado como afiliação padrão para o MercadoPagoOff.
<br>
  <li>Se optar por utilizar o antifraude, habilite a opção **Usar Antifraude** e escolha uma das opções de antifraude disponíveis.</li>
  <br>
  <li>Se desejar, você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).</li>
  <br>
  <li>Clique em **Salvar**.</li>
</ol>
Assim que todas as configurações forem concluídas, aguarde até 10 minutos para que as soluções sejam exibidas no checkout.

## Configurando o Mercado Pago Wallet

Para configurar o Mercado Pago Wallet, siga as instruções abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba Condições de pagamento, clique no __botão "+"__.
3. Busque e clique em __MercadoPagoWallet__.
4. No topo da página, preencha o campo __Nome da Regra__ com um nome de sua preferência para identificação.
5. Logo abaixo, clique no botão __Status__ para ativar a regra.
6. Em __Processar com a afiliação__, selecione uma das opções: _MercadoPagoV1_ ou _MercadoPagoV2_.
7. Se optar por utilizar o antifraude, habilite a opção __Usar Antifraude__ e escolha uma das opções de antifraude disponíveis.
8. Você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
9. Clique em __Salvar__.

Assim que todas as configurações forem concluídas, aguarde até 10 minutos para que as soluções sejam exibidas no checkout.

