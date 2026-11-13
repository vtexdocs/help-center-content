---
title: 'Configurar pagamentos com Mercado Pago Offline e Wallet'
createdAt: 2021-11-30T22:49:18.953Z
updatedAt: 2026-11-11T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-mercado-pago-offline-and-wallet-as-payment-methods
locale: pt
hidden: false
---

O Mercado Pago oferece dois meios de pagamento exclusivos que você pode configurar na VTEX:

- **Mercado Pago Offline**: permite o uso de [pagamentos offline disponíveis na América Latina (LATAM)](/pt/docs/tutorials/lista-de-provedores-de-pagamento-por-pais).
- **Mercado Pago Wallet**: carteira digital que permite ao cliente pagar com os créditos da conta dele no Mercado Pago.

Cada um deles é configurado como uma condição de pagamento, com os campos comuns descritos em [Configurar condições de pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

## Antes de começar

- Abra um ticket no [Suporte VTEX](https://supporticket.vtex.com/support) e solicite a instalação do aplicativo **Mercado Pago Payment App** na sua loja. Sem esse aplicativo, o cliente não visualiza o popup do Mercado Pago para fechar a compra ao final da transação.
- Cadastre o provedor [MercadoPagoV2](/pt/docs/tutorials/configurar-o-subadquirente-mercadopagov2), que processa os dois meios de pagamento. Se a sua loja ainda usa o MercadoPagoV1, migre para o MercadoPagoV2, que substitui esse conector legado conforme descrito no Announcement [Descontinuidade de conectores legados de pagamento](/pt/announcements/2024-03-15-descontinuidade-de-conectores-legados-de-pagamento).

## Configurar o Mercado Pago Offline

Para configurar o Mercado Pago Offline, siga estes passos:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de pagamento**, clique em `+`.
3. Busque e clique em **MercadoPagoOff**.
4. No topo da página, preencha o campo **Nome da regra** com um nome de sua preferência para identificação.
5. Clique em **Status** para ativar a regra.
6. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
7. Se desejar, você também pode [condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
8. Clique em **Salvar**.

> ℹ️ Não é necessário preencher o campo **Processar com o provedor**, pois o MercadoPagoV2 já vem configurado como provedor padrão do MercadoPagoOff.

## Configurar o Mercado Pago Wallet

Para configurar o Mercado Pago Wallet, siga estes passos:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de pagamento**, clique em `+`.
3. Busque e clique em **MercadoPagoWallet**.
4. No topo da página, preencha o campo **Nome da regra** com um nome de sua preferência para identificação.
5. Clique em **Status** para ativar a regra.
6. Em **Processar com o provedor**, selecione **MercadoPagoV2**.
7. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
8. Se desejar, você também pode [condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
9. Clique em **Salvar**.


Depois de salvar, o Mercado Pago Offline ou Mercado Pago Wallet pode levar até 10 minutos para aparecer como opção de pagamento no checkout da sua loja.
