---
title: 'Por que o pedido foi fechado com um preço errado?'
id: frequentlyAskedQuestions_708
status: PUBLISHED
createdAt: 2017-04-27T22:28:49.849Z
updatedAt: 2021-03-23T20:08:37.325Z
publishedAt: 2021-03-23T20:08:37.325Z
firstPublishedAt: 2017-04-27T23:02:33.393Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slugEN: why-was-the-order-closed-with-the-wrong-price
locale: pt
legacySlug: por-que-o-pedido-foi-fechado-com-um-preco-errado
---

Na seção de Integrações, dentro da [aba de Pedidos](/pt/tutorial/verificando-integracao-no-bridge "Bridge"), são informados o status dos pedidos fechados por maketplaces certificados. Algumas vezes, o motivo para um pedido não ter integrado é porque o valor do pedido no marketplace não é o mesmo valor esperado pela VTEX. 

`Total do pagamento (311,77) é diferente do pretendido pela loja (313,61)`

Quando o pedido é integrado, dentro de seus detalhes no Gerenciamento de pedidos apresenta-se a seguinte mensagem:

`O marketplace XXX decididiu vender este pedido com valor menor que o praticado pela sua loja. Confira o desconto.`

Dentro dos detalhes do pedido, nós até evidenciamos esse ponto em um card escrito "valor assumido pelo afiliado". Mas, tanto esse card quanto o "DISCOUNT@SHIPPINGMARKETPLACE" no JSON do pedido, são __meramente informativos__. Pois, na verdade, isso não é exatamente um desconto. O que você deve considerar de fato no seu ERP é apenas o valor total do pedido.

Ou o valor do pedido pode estar sendo influenciado pela **Taxa de Divergência de Preço**, que é a taxa de aceitação da diferença de valor de um pedido. Qualquer pedido que possua uma diferença entre o preço de venda no marketplace e o preço determinado pelo seller será comparado com esse valor. Se a divergência, em percentual, for menor que o valor definido neste campo, o pedido será integrado normalmente. Caso contrário, o pedido não será integrado e você poderá visualizá-lo na [aba de pedidos, dentro da seção de integrações no Admin](https://help.vtex.com/pt/tutorial/verificando-integracao-no-bridge).

Este artigo tem como objetivo esclarecer o motivo desse cenário ocorrer. Existem três possibilidades:

## Preço do produto assumido pelo marketplace

Este cenário acontece quando há algum empecilho ao enviar o preço na VTEX para o marketplace. Isto pode acontecer por conta de algum erro na integração, que será reportado no [painel de integrações](/pt/tutorial/verificando-integracao-no-bridge/#preco) ou porque o marketplace teve algum problema para computar o preço novo (mesmo tendo recebido com sucesso a atualização da VTEX).

## Frete calculado no marketplace

Nas configurações da logística para as vendas pelo marketplace, é possível realizar a [configuração de frete](/pt/tutorial/configurando-logistica-para-marketplace/) pelo parceiro. Ou seja, o frete não é calculado na VTEX. Porém, esse cenário pode causar a diferença de preço caso a promoção de frete grátis não tenha sido configurada.

Além disso, pode ser que a consulta ao valor do frete não foi realizada pelo marketplace ou [ocorreu algum problema no processo](/pt/faq/por-que-o-pedido-foi-fechado-sem-estoque) e, por isso, foi assumido o valor do frete do marketplace.

Isto é, a consulta do marketplace pode não resultar em sucesso e para não perder o pedido, o parceiro usa valores internos de contingência. Podendo então diferenciar dos valores originalmente cadastrados na VTEX, implicando no erro.

Além disso, alguns marketplaces consultam o frete na VTEX no momento da finalização de compra e outros não. Os marketplaces que não realizam essa consulta têm mais chances de apresentarem este cenário.

Os marketplaces que consultam o frete na VTEX no momento da finalização de compra são:

- Walmart
- Via Varejo
- B2W
- Netshoes
- Carrefour

Os marketplaces que não consultam o frete na VTEX no momento da finalização de compra são:

- Buscapé
- Mercado Livre
- Magazine Luiza
- Amazon

## Preço do SKU alterado antes da integração do pedido

Esta opção é mais rara que as anteriores, que é quando o pedido é fechado e, logo após, é realizada a alteração de preço do SKU. Como a integração do pedido finalizado leva alguns minutos, quando a integração for realizada, o preço do SKU será outro e o cálculo na VTEX não dará o mesmo resultado do cálculo do marketplace e o pedido ficará na fila de erro do Integrações.

## Como resolver

Em todos os casos, o pedido poderá ser integrado [reprocessando-o no painel de integrações](/pt/tutorial/verificando-integracao-no-bridge). Isso fará com que a VTEX aceite o pedido com valor diferente do esperado.

Também é recomendado que se configure a taxa de divergência de preço, que é o percentual de diferença de preço aceitável para a integração. Essa configuração é feita na configuração de cada integração.
