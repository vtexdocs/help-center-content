---
title: 'Fluxo do pedido'
id: 4811ExCe3WrEiRMV3sy9n8
status: PUBLISHED
createdAt: 2019-11-14T13:46:22.682Z
updatedAt: 2023-10-24T15:32:07.852Z
publishedAt: 2023-10-24T15:32:07.852Z
firstPublishedAt: 2019-11-14T15:38:27.680Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: order-flow
locale: pt
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugEN: pedidos
---

O [fluxo do pedido](https://help.vtex.com/pt/tutorial/order-flow-and-status--tutorials_196) é o caminho percorrido por um pedido na plataforma VTEX, desde o momento em que o cliente clica no botão de Finalizar Compra até o momento em que o pedido é faturado ou cancelado.

Alterações no pedido - sejam elas causadas pelo cliente, pela loja ou por sistemas externos - geram mudanças no __status do pedido__. E com, isso, o pedido se movimenta dentro do fluxo.

## Marketplaces e Sellers

Os conceitos de [Marketplace e Seller](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) são fundamentais para o entendimento do fluxo de um pedido na VTEX. Vamos entender por quê:

- __Marketplace__ é o ambiente onde é realizado o fechamento do pedido, ou seja, onde o cliente realiza o processo de checkout. 
- __Seller__ é o dono do SKU. É, portanto, o responsável pelo fulfilment - ou seja, por fazer a entrega do produto ao cliente. 

> ℹ️ Toda loja que vende produtos em seu próprio ambiente e realiza suas próprias entregas é Marketplace e Seller ao mesmo tempo.

É importante entender esses conceitos porque o fluxo do pedido no Marketplace é diferente do fluxo no Seller.

## Fluxo do pedido no Marketplace

![Screen Shot Fluxo de Marketplace](//images.ctfassets.net/alneenqid6w5/51d58fXMpuxCTqFCyLkdaV/21d945a4e3d519e1500a8b73f7c24c02/Screen_Shot_Fluxo_de_Marketplace.png)

Ocorre quando a loja atua apenas como Marketplace no pedido. Ou seja, quando a loja vende produtos de outra loja - seu Seller.

Neste caso, a responsabilidade da loja se concentra em __aprovar o pagamento__.

Depois que o cliente finaliza a compra, a loja precisa aguardar a confirmação do seller antes de seguir com o pedido. Isto porque ela precisa da confirmação por parte do Seller, que é quem detem os produtos, de que vai ser possível cumprir com o pedido.

Uma vez que o Seller envia essa confirmação para a VTEX, o pedido passa para o status `Pagamento Pendente`. Se a transação for concluída com sucesso, o status passa a ser `Pagamento Aprovado`.

Então, o despacho é autorizado e logo em seguida entra-se no status `Carência para cancelamento`. Nesse status, o cliente ainda pode cancelar o pedido. Por padrão, o período de carência é de meia hora, mas isso pode ser ajustado na plataforma. 

## Fluxo do pedido no Seller

![screenshoot fluxo seller PT](//images.ctfassets.net/alneenqid6w5/19xYHIDMJf3wClpHAnTwuf/8adf145a324fdbc36db70785f55675c0/screenshoot_fluxo_seller_PT.JPG)

Ocorre quando a loja atua como Seller. Ou seja, quando ela é a dona do produto.

Neste caso, o pedido foi fechado em outra loja (o Marketplace). Portanto, o fluxo do Seller começa já depois que o pagamento foi efetuado e aprovado.

O Seller precisa então autorizar o despacho para que o pedido saia do status `Aguardando autorização para despachar` e entre na `Carência para cancelamento`.

Após o fim da carência, o status passa a ser `Pronto para manuseio`, o que significa que o Seller pode seguir com o picking e o packing.

O próximo status é então o de `Preparando entrega`, quando o Seller prepara a nota fiscal e o rastreamento do pedido.

## Fluxo completo do pedido

![Screen Shot Fluxo completo](//images.ctfassets.net/alneenqid6w5/7A1IWqoCQw4INm34u6lOWF/f21882fb0c337fbaf2ebb462ebb197f7/Screen_Shot_Fluxo_completo.png)

Ocorre quando a loja é ao mesmo tempo Marketplace e Seller. Ou seja, é quando o pedido foi fechado na loja e a própria loja é a dona do produto, sendo responsável pelo fulfillment.

Neste caso, o status inicial do pedido passa automaticamente de `Aguardando confirmação do Seller` para `Pagamento pendente.`

Depois de aprovado o pagamento, o pedido segue para `Pagamento aprovado` e em seguida para a `Carência de cancelamento` e, quando terminado o período de carência, para `Pronto para manuseio` e finalmente para `Preparando entrega`.

Ou seja, neste caso tanto as etapas de pagamento quanto de entrega são responsabilidade da loja.

> ℹ️ Todo pedido é finalizado em apenas um destes dois status possíveis:<br> <ul> <li>Faturado</li> <li>Cancelado</li> </ul>

> ℹ️ Para entender em mais detalhes cada status dos pedidos, veja uma tabela com todos os status em [Entendendo os status](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196#entendendo-os-status).
