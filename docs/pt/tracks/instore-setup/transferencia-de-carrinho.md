---
title: 'Transferência de carrinho'
id: 4UOGpAFVOUougwiGQMi4Ca
status: ARCHIVED
createdAt: 2018-06-22T17:12:42.573Z
updatedAt: 2020-08-03T19:58:03.049Z
publishedAt: 
firstPublishedAt: 2018-06-22T18:02:29.060Z
contentType: trackArticle
productTeam: Shopping
slugEN: cart-transfer
locale: pt
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

A funcionalidade de __Transferência de carrinho__ permite que uma compra iniciada em um dispositivo possa ser finalizada em qualquer outro dispositivo presente no fluxo da compra, sem a necessidade de re-bipar os produtos.

Um exemplo de uso são lojas em que o cliente pode ser atendido por mais de um vendedor. Nesse caso, a cada interação com um vendedor, este adiciona os produtos em um mesmo carrinho no inStore que vai sendo transferido até o final da compra, agilizando o fechamento do pedido e facilitando o comissionamento dos vendedores envolvidos naquela venda, pois remove a necessidade de etiquetas com códigos de identificação de vendedor.

Para ativar a __Transferência de carrinho__ no inStore, será necessário editar o arquivo `checkout-instore-custom.js` presente no admin do Portal. Por se tratar de um JavaScript presente em diversos fluxos de uso da aplicação, é importante que você tenha conhecimentos de programação antes de alterá-lo, para evitar a quebra de outras funcionalidades.

Dentro do arquivo você precisa encontrar o objeto `window.INSTORE_CONFIG` e adicionar a propriedade `transferEnabled` com o valor `true` para habilitar a __Transferência de carrinho__.
Não remova nenhuma das outras propriedades presentes nesse objeto, porém o resultado deve ser algo parecido com:

```
window.INSTORE_CONFIG = {
  transferEnabled: true, // Allow transfer carts between devices
}
```

Ao realizar essa alteração, você deve perceber que aparecerão duas bolinhas no fim da página de identificação do inStore:

![01 inStore slider transferencia](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/instore-setup/transferencia-de-carrinho_1.png)

Ao arrastar a tela para a lateral você verá a tela para __“Capturar carrinho”__:

![02 inStore capturar carrinho](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/instore-setup/transferencia-de-carrinho_2.png)

Nela é possível capturar um carrinho pelo código do carrinho, QR code ou até por vendedor.

Para gerar um código ou QR code de um carrinho você deve usar a opção __“Transferir”__ presente no carrinho do inStore:

![03 inStore transferir](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/instore-setup/transferencia-de-carrinho_3.png)
