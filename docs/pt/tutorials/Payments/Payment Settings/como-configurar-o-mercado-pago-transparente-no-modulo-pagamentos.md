---
title: 'Como configurar o Mercado Pago Transparente no módulo Pagamentos?'
id: tutorials_4570
status: ARCHIVED
createdAt: 2017-04-27T21:50:13.164Z
updatedAt: 2022-07-13T19:38:22.935Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:16.836Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-configure-mercado-pago-transparente-in-the-payments-module
locale: pt
legacySlug: como-configurar-o-mercado-pago-transparente-no-modulo-pci
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O objetivo deste artigo é explicar os passos para adicionar e configurar o conector Mercado Pago Transparente.

Primeiro, você deve acessar o módulo Pagamentos e clicar em **Configurações**, que fica à direita na barra superior.
![2017-01-26 19_04_37-Transações _ VTEX PCI Gateway](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Depois, clique no item **Afiliações de Gateways** e, então, no ícone **+**, que fica à direita. Uma tela com todos os conectores disponíveis vai se abrir e você deve selecionar o card do Mercado Pago Transparente (__MercadoPagoV1__).
![2017-01-26 19_12_51-Conectores _ VTEX PCI Gateway](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

Vão surgir os campos de edição relacionados ao conector que você escolheu. Recomendamos que você renomeie o campo **Nome da afiliação**, para facilitar sua localização em **Condições de pagamento**.
![2017-01-26 20_00_11-Mercado Pago Transparente - Nova configuração _ VTEX PCI Gateway](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

Então, faça a [configuração do anti-fraude](/pt/faq/como-configurar-mercadopago-transparente/) e [preencha as credenciais](/pt/faq/onde-acessar-minhas-credenciais-do-mercado-pago-transparente/). Lembrando que os códigos do **Client Id** e do **Client Secret** não devem começar com **APP_USR**.

Por fim, você só deve escolher a moeda em que as transações vão ser feitas (no campo **Currency**), se quer boletos registrados (campo **Boleto Registrado**) e se deseja pedir um documento para o usuário que efetuar uma compra (campo **Solicitar documento ao comprador**). 

Aí, é só clicar em **Salvar** e pronto. O Mercado Pago Transparente já vai estar configurado na sua loja.

