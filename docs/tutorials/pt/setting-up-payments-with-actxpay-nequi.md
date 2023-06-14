---
title: 'Configurar pagamento com actXpay-Nequi'
id: 1Kqx4Q2tJgk6tP6vocDn0l
status: DRAFT
createdAt: 2022-05-05T17:19:13.381Z
updatedAt: 2022-12-23T19:51:33.076Z
publishedAt: 
firstPublishedAt: 2022-05-05T17:59:50.717Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-actxpay-nequi
legacySlug: configurar-pagamento-com-actxpay-nequi
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos actXpay-Nequi. Com este conector, sua loja pode realizar vendas por meio do __Nequi__ (sistema de pagamento colombiano).

Para configurar a afiliação actXpay-Nequi, siga os passos abaixo:

1. Acesse o __Admin__ VTEX.
2. Clique em __Pagamentos__.
3. Em seguida, clique em __Configurações__.
4. Na aba __Afiliações de Gateways__, clique no botão `+`.
5. Clique no conector __Actxpay-nequi__.
6. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta actXpayments.
7. Clique em __Salvar__.

## Configurar condição de pagamento

1. Acesse o __Admin__ VTEX.
2. Clique em __Pagamentos__.
3. Em seguida, clique em __Configurações__.
4. Clique na aba __Pagamentos Customizados__.
5. Em __Promissórias__, clique em uma das 5 caixas de configuração (Configurar).
6. Preencha os seguinte campos com as devidas informações:
- __Nome:__ Nome que será usado para identificar o pagamento (actXpay-Nequi).
- __Descrição:__ Detalhes sobre a condição de pagamento.
- __Validade da promissória:__ Tempo limite que seu cliente terá para pagar a promissória antes de perder a validade.
- __Autorizar automaticamente:__ Autorize ou não os pagamentos de forma automática. Recomendamos essa opção somente para casos em que o pagamento é feito na entrega ou retirada do pedido na loja. Ao escolher Yes, o status do pedido muda automaticamente para Preparando Entrega, sem passar por nenhuma verificação de pagamento.
- __Change margin:__ Margem percentual permitida para alteração no valor do pagamento realizado com promissória. Para alguns clientes, pode ser importante autorizar mudanças nos pedidos ([change order](https://help.vtex.com/pt/tutorial/change-mudanca-em-pedidos--3d1XLIgPQcwaKGyMiWaYog?&utm_source=autocomplete)). Nesse caso, o campo Change Margin deve ser preenchido para determinar a margem percentual de alteração permitida.
- __Ativar split de pagamento:__ Escolha se utilizará a solução de [split de pagamentos](https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx?&utm_source=autocomplete). Caso opte por essa opção, quando a venda envolver lojas do marketplace, a promissória será dividida entre os sellers e o marketplace.
- __Faturamento automático:__ Quantidade de dias para faturamento automático da promissória após autorização. Promissórias são faturadas no momento da autorização do pagamento. Ao configurar esse campo, o faturamento deixará de acontecer na autorização e passará a ser feito após o número de dias definido pelo cliente.<br>

<ul>  
7. Clique em <b>Salvar</b>.  
</ul>

Depois de seguir os passos indicados, o conector actXpay-Nequi pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

Para maiores informações sobre o sistema de pagamento Nequi acesse o website da [actXpayments](https://www.actx.com.co/actxpayments).
