---
title: Habilitar transferência de carrinho entre dispositivos
id: 1PqUW2NuQzaVxTJp0lBK0r
status: DRAFT
createdAt: 2020-06-28T18:40:36.128Z
updatedAt: 2021-11-25T13:59:54.379Z
publishedAt: 
firstPublishedAt: 2020-06-28T18:46:41.828Z
contentType: trackArticle
productTeam: Shopping
slug: habilitar-transferencia-de-carrinho-entre-dispositivos
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugPT: habilitar-transferencia-de-carrinho-entre-dispositivos
---

<div class="alert alert-danger">
A ativação de Transferência de carrinho, explicada neste artigo, envolve e alteração do arquivo JavaScript <code>checkout-instore-custom.js</code>. Essa operação deve ser realizada somente por pessoas com experiência em programação. Alterações incorretas nesse arquivo podem causar erros críticos.
</div>

A funcionalidade de __Transferência de carrinho__ do inStore permite que uma compra iniciada em um dispositivo possa ser finalizada em qualquer outro dispositivo presente no fluxo da compra, sem a necessidade de re-bipar os produtos.

Um exemplo de uso são lojas em que o cliente pode ser atendido por mais de um vendedor. Nesse caso, a cada interação com um vendedor diferente, este pode adicionar produtos ao mesmo carrinho usado pelo vendedor anterior. Este mesmo carrinho é transferido entre um vendedor e outro, até o fechamento da compra. 

Isso agiliza o pedido e facilita o comissionamento dos vendedores envolvidos na compra, uma vez que remove a necessidade de etiquetas com códigos de identificação de vendedor.

Para ativar a __Transferência de carrinho__ no inStore, é necessário editar o arquivo `checkout-instore-custom.js`. Dentro do arquivo, você precisa encontrar o objeto `window.INSTORE_CONFIG` e adicionar a propriedade `transferEnabled` com o valor `true`. Não remova nenhuma das outras propriedades presentes nesse objeto. O resultado deve ser algo parecido com:

```json
window.INSTORE_CONFIG = {
  transferEnabled: true, // Allow transfer carts between devices
}
```

Após realizar essa alteração, abra o menu do inStore e atualize os dados, clicando no botão __Restaurar dados__. Feito isso, aparecerão duas bolinhas ao fim da página de identificação do inStore:

![24. Enable cart transfer between devices - 1](https://images.ctfassets.net/alneenqid6w5/4HXR0QuEd2wa6GiRFL9gsm/4515dcc3ca2bb5a7d6d2304886724704/24._Enable_cart_transfer_between_devices_-_1.png)

Ao arrastar a tela para a direita, você verá a tela para __Capturar Carrinho__, conforme mostra a imagem abaixo.

![24. Enable cart transfer between devices - 2](https://images.ctfassets.net/alneenqid6w5/2BdYpDo4UL0GETBeTM72u3/a017156e7e2beac121abb5d2cd0b1ba0/24._Enable_cart_transfer_between_devices_-_2.png)

Nessa tela, é possível capturar um carrinho por um desses três métodos:
- Código do carrinho
- QR Code
- Vendedor

## Compartilhando um carrinho

Para o vendedor compartilhar um carrinho, ele pode gerar um código numérico ou um QR Code. Para isso, estando na tela do carrinho, basta clicar no botão __Transferir__. Veja um exemplo na imagem abaixo.

![24. Enable cart transfer between devices - 3](https://images.ctfassets.net/alneenqid6w5/1rk5DOgk5a0XAWwWqLCO4t/dcc5225d218120953155432b30f43c21/24._Enable_cart_transfer_between_devices_-_3.png)
