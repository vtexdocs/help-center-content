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
slug: como-configurar-o-mercado-pago-transparente-no-modulo-pagamentos
locale: pt
legacySlug: como-configurar-o-mercado-pago-transparente-no-modulo-pci
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O objetivo deste artigo é explicar os passos para adicionar e configurar o conector Mercado Pago Transparente.

Primeiro, você deve acessar o módulo Pagamentos e clicar em **Configurações**, que fica à direita na barra superior.
![2017-01-26 19_04_37-Transações _ VTEX PCI Gateway](//images.contentful.com/alneenqid6w5/6Gxdu2Z0NqyggYkEe8A8q0/7fd3e1c15fd89ec76c90473329ff1439/2017-01-26-19_04_37-Transa_C3_A7_C3_B5es-_-VTEX-PCI-Gateway-300x105.png)

Depois, clique no item **Afiliações de Gateways** e, então, no ícone **+**, que fica à direita. Uma tela com todos os conectores disponíveis vai se abrir e você deve selecionar o card do Mercado Pago Transparente (__MercadoPagoV1__).
![2017-01-26 19_12_51-Conectores _ VTEX PCI Gateway](//images.contentful.com/alneenqid6w5/69Wai0Un0A0S4C0EyuCsme/8bcdc06f9863147fb04c403e83125fea/2017-01-26-19_12_51-Conectores-_-VTEX-PCI-Gateway-300x245.png)

Vão surgir os campos de edição relacionados ao conector que você escolheu. Recomendamos que você renomeie o campo **Nome da afiliação**, para facilitar sua localização em **Condições de pagamento**.
![2017-01-26 20_00_11-Mercado Pago Transparente - Nova configuração _ VTEX PCI Gateway](//images.contentful.com/alneenqid6w5/3oiEcYJ3LGCGiGA0Uq2ucm/2e15790c707b2496e38d2d89fc88687f/2017-01-26-20_00_11-Mercado-Pago-Transparente-Nova-configura_C3_A7_C3_A3o-_-VTEX-PCI-Gateway-300x208.png)

Então, faça a [configuração do anti-fraude](/pt/faq/como-configurar-mercadopago-transparente/) e [preencha as credenciais](/pt/faq/onde-acessar-minhas-credenciais-do-mercado-pago-transparente/). Lembrando que os códigos do **Client Id** e do **Client Secret** não devem começar com **APP_USR**.

Por fim, você só deve escolher a moeda em que as transações vão ser feitas (no campo **Currency**), se quer boletos registrados (campo **Boleto Registrado**) e se deseja pedir um documento para o usuário que efetuar uma compra (campo **Solicitar documento ao comprador**). 

Aí, é só clicar em **Salvar** e pronto. O Mercado Pago Transparente já vai estar configurado na sua loja.

