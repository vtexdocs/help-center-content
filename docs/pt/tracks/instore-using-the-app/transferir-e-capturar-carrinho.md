---
title: 'Transferir e capturar carrinho'
id: 2hlBqxHlxgFo2o4R52pbsk
status: PUBLISHED
createdAt: 2021-08-05T14:01:27.341Z
updatedAt: 2023-05-31T16:04:15.374Z
publishedAt: 2023-05-31T16:04:15.374Z
firstPublishedAt: 2021-08-05T14:46:46.816Z
contentType: trackArticle
productTeam: Shopping
slugEN: cart-transfer-and-capture
locale: pt
trackId: 4BYzQIwyOHvnmnCYQgLzdr
trackSlugPT: instore-usando-o-app
---

O VTEX Sales App permite [habilitar uma funcionalidade de transferência de carrinho](/pt/tracks/instore-customizations--1z9kBm12oBPyVNDo1ivVc2/1PqUW2NuQzaVxTJp0lBK0r). Essa funcionalidade permite que uma compra iniciada em um dispositivo possa ser finalizada em qualquer outro dispositivo presente no fluxo da compra, sem a necessidade de re-bipar os produtos.

## Transferir carrinho

Para o vendedor compartilhar um carrinho, ele pode gerar um código numérico ou um QR Code. Para isso, estando na tela do carrinho, basta clicar no botão __Transferir__. Veja um exemplo na imagem abaixo.

![24. Enable cart transfer between devices - 3](https://images.ctfassets.net/alneenqid6w5/1rk5DOgk5a0XAWwWqLCO4t/dcc5225d218120953155432b30f43c21/24._Enable_cart_transfer_between_devices_-_3.png)

Ao clicar nesse botão, o aplicativo mostra um QR Code e um código numérico de quatro dígitos.

![31. VTEX Sales App - Product Overview - 9](https://images.ctfassets.net/alneenqid6w5/3pefz4lrKG7nWWZpJjmR5N/c1149aec863d3554fb2ea67cc79d97ba/31._VTEX Sales App_-_Product_Overview_-_9.png)

Um outro vendedor logado na mesma loja pode, então, capturar esse carrinho e continuar a venda a partir do seu dispositivo.

## Capturar carrinho

Para capturar um carrinho, basta entrar no menu principal do VTEX Sales App e clicar em `Capturar carrinho`.

Alternativamente, na tela inicial do aplicativo, o vendedor pode simplesmente arrastar a tela para a direita. Ao arrastar a tela para a direita, você verá a tela para __Capturar Carrinho__, conforme mostra a imagem abaixo.

![24. Enable cart transfer between devices - 2](https://images.ctfassets.net/alneenqid6w5/2BdYpDo4UL0GETBeTM72u3/a017156e7e2beac121abb5d2cd0b1ba0/24._Enable_cart_transfer_between_devices_-_2.png)

Nessa tela, é possível capturar um carrinho por um desses três métodos:
- Código do carrinho
- QR Code
- Vendedor

O vendedor deve, então, digitar o código numérico mostrado no dispositivo do vendedor que transferiu o carrinho ou clicar em `Ler QR Code` e então usar a câmera do seu dispositivo para ler o QR Code gerado no dispositivo do primeiro vendedor.

Feito isso, o carrinho será transferido para esse segundo dispositivo, de onde a venda poderá seguir normalmente.
