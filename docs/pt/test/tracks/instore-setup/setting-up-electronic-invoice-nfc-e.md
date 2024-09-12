---
title: 'Configurar impressão de Nota Fiscal de Consumidor Eletrônica (NFC-e)'
id: 3v0HJIbYdWIsQggoQgUYsg
status: ARCHIVED
createdAt: 2018-06-25T22:29:30.122Z
updatedAt: 2021-08-24T20:47:32.245Z
publishedAt: 
firstPublishedAt: 2018-06-25T22:40:47.613Z
contentType: trackArticle
productTeam: Shopping
slug: configurar-impressao-de-nota-fiscal-de-consumidor-eletronica-nfc-e
locale: pt
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

Utilizando o inStore você pode vender os produtos de sua loja física recebendo com a máquina de cartão e gerando a NFC-e na hora. Para realizar a impressão da NFC-e dependemos de duas etapas:

- Gerar a NFC-e
- Imprimir a NFC-e e os recibos do cartão

## Gerar a NFC-e

Para gerar a NFC-e você dependerá do serviço de um parceiro VTEX que irá realizar toda a configuração necessária para o faturamento. Recomendamos os parceiros e-Millenium e Webbsys.

> __IMPORTANTE__: Se você estiver em um estado em que o uso do SAT Fiscal seja obrigatório, como no caso de São Paulo, você também precisará desse equipamento.


## Imprimir a NFC-e e os recibos do cartão

__IMPORTANTE__: Você pode precisar da ajuda de um profissional de infraestrutura para configurar sua rede e de um desenvolvedor para alterar as configurações do inStore em JavaScript.

1. Conecte a impressora térmica não fiscal USB ao computador Windows onde o programa faturador de nosso parceiro está rodando.
2. Instale e execute o inStore nesse computador Windows (baixe em http://instore.vtex.com/download).
3. Defina um IP fixo nesse computador Windows para ser utilizado como endereço de impressão.
4. Assumindo que você configurou o inStore utilizando o __Easy Setup__, adicione o trecho de código abaixo no arquivo `checkout-instore-custom.js` (disponível no admin do Portal):
 
```
/* Print configurations (uncomment for invoice on each sale) */

const IP_GLOBAL = '127.0.0.1' // Replace for correct internal IP on your network

window.ORDER_PLACED_HOOK_GLOBAL = {
 url: 'http://' + IP_GLOBAL + ':6061/invoice-order',
 cancelUrl: 'http://' + IP_GLOBAL + ':6061/invoice-order',
 invoiceEndpoints: {
   Output: 'http://' + IP_GLOBAL + ':6060/api/vtex/order',
   Input: 'http://' + IP_GLOBAL + ':6060/api/vtex/cancela',
 },
 // printImmediately: false, // If true, it prints the receipt as soon as the "Order placed" screen is opened. If undefined the behavior is to print after a sale and to not print when visiting past orders
}
```

5) Substitua o valor de `IP_GLOBAL` presente no código de configuração exemplificado acima pelo IP fixo do computador Windows.
