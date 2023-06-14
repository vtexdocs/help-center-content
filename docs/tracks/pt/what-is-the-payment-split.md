---
title: O que é o Split de pagamento?
id: ctgx6ulwy40P0BV07LW9y
status: DRAFT
createdAt: 2020-11-05T17:15:47.387Z
updatedAt: 2021-06-28T19:53:35.022Z
publishedAt: 
firstPublishedAt: 2020-11-06T19:14:25.813Z
contentType: trackArticle
productTeam: Financial
slug: o-que-e-o-split-de-pagamento
trackId: 1ouDg8q56Kuz1AgtJUY9nv
trackSlugPT: split-de-pagamentos
---

Split de pagamentos é uma solução de pagamentos da VTEX voltada para a dinâmica entre [marketplace](https://help.vtex.com/pt/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8 "marketplace") e [seller](https://help.vtex.com/pt/tutorial/o-que-e-um-seller "seller"). Ou seja, quando uma loja opta por vender os produtos do seu catálogo em outra loja. 

Um exemplo seria o Carrefour, um marketplace, que vende tanto produtos próprios quanto produtos de outras marcas, os sellers.

Uma vez configurado, o split de pagamentos permite que o valor pago por um pedido seja dividido automaticamente entre os recebedores - marketplace e o(s) seller(s).

Entretanto, o montante pode, ou não, ser igualmente dividido entre os recebedores. O repartimento será feito de acordo com as condições pré-definidas pelo seller e o comissionamento do marketplace.

Nesta track, explicaremos como a solução funciona, incluindo alguns conceitos importantes para essa dinâmica, e como configurá-la. 

<div class="alert alert-info">
Se você já conhece a solução, vá para etapa  Configurar split de pagamento.
</div>

## Recebível 

Antes de prosseguirmos, é importante explicarmos o que é recebível - um conceito que não é apenas tratado na VTEX, mas também em vários cenários do mercado de pagamentos.

Desse modo, o recebível é o montante referente a uma [transação](https://help.vtex.com/pt/tutorial/o-que-e-uma-transacao--36vMP5PES4oUWMWQuskIQ6 "transação") bem sucedida. Isso significa que o recebível corresponde ao dinheiro que será transferido para o lojista.

No cenário de split de pagamento da VTEX, esse montante será repassado ao lojista de acordo com o meio de pagamento usado para pagar o pedido e com o plano de recebimento acordado com a [adquirente](https://help.vtex.com/pt/tutorial/o-que-e-um-adquirente--7N1oRTG8dGmOiIugC0cs4E "adquirente").

Atualmente, o split suporta os seguintes meios de pagamento:

- Cartão de Crédito
- Cartão de Débito
- Boleto bancário

<div class="alert alert-info">
No caso do cartão de crédito, o split suporta pagamentos realizados com dois cartões diferentes.
</div>

## Transação 

Quando um comprador finaliza uma compra e efetua o pagamento, esse valor não necessariamente será capturado e enviado para o lojista no mesmo dia. 

<div class="alert alert-info">
Existem exceções, como o Pix - Sistema de Pagamentos Instantâneos do Banco Central - em que a transação é efetuada em segundos. 

Porém, a maioria dos meios de pagamento oferecido nos Brasil hoje não envia o pagamento automaticamente ao lojista.
</div>

Na VTEX, o comportamento padrão é que os dados da compra sejam reunidos em uma transação. Essa transação, por sua vez, passará por várias etapas de validação para garantir que todos esses dados são legítimos. Esse processo de verificação é o que chamamos de [fluxo da transação](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y "fluxo da transação"). 

Depois que esse processo é concluído - quando todas as informações foram validadas e o pagamento é aprovado e capturado -, temos o recebível.

Entretanto, cada meio de pagamento tem suas peculiaridades. Consequentemente, o fluxo da transação se ajusta a essas características. 

Por exemplo, quando um pedido é pago com um boleto bancário, o fluxo da transação fica no status “Pagamento Pendente” até o comprador pagar o documento e o pagamento ser aprovado pela adquirente. Isso pode durar alguns dias.

Desse modo, o funcionamento do fluxo da transação quando o split de pagamentos está habilitado também tem suas características próprias. A seguir, explicaremos esse processo. 
