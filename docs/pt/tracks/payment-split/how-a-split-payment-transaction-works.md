---
title: 'Como funciona uma transação com split de pagamento'
id: 4ztN7yya2GoRbSnz8WGEUA
status: ARCHIVED
createdAt: 2020-11-05T17:41:50.805Z
updatedAt: 2021-06-28T19:53:24.634Z
publishedAt: 
firstPublishedAt: 2020-11-06T19:14:38.444Z
contentType: trackArticle
productTeam: Financial
slug: como-funciona-uma-transacao-com-split-de-pagamento
locale: pt
trackId: 1ouDg8q56Kuz1AgtJUY9nv
trackSlugPT: split-de-pagamentos
---

O fluxo de uma transação com o split de pagamento segue as mesmas etapas do fluxo de transação comum. Porém, é uma operação um pouco mais complexa.  

Isso acontece porque o valor do carrinho - valor total da compra que inclui os valores dos produtos e do frete - precisa ser dividido entre os três agentes da operação: adquirente, marketplace e seller.

Antes de prosseguirmos, vamos esclarecer alguns conceitos relacionados a essa divisão.

## MDR
Ao processar uma transação, o adquirente retira um percentual do valor total da compra para si. Essa taxa é a MDR - sigla em inglês para Merchant Discount Rate. 

>ℹ️ A MDR é aplicada em todas as transações processadas pela adquirente.

No caso do split, tanto marketplace quanto seller(s) podem ser os responsáveis pelo pagamento dessa taxa. Também existe a possibilidade dos dois recebedores se encarregarem do pagamento. 

## Comissão

É o percentual do valor total da compra que cabe ao marketplace. 

Ou seja, toda vez que um seller vende um produto em um marketplace, uma parte do valor total dessa compra é encaminhada para esse mesmo marketplace. 

## Chargeback

O chargeback acontece quando seller perde uma [disputa](https://help.vtex.com/pt/tutorial/o-que-e-uma-disputa--7KJsfF1qZILm59C0PQtdF6 "disputa") e precisa devolver o dinheiro ao comprador. Não é um evento esperado no fluxo da transação, mas pode acontecer.

Dito isto, o estorno precisa ser realizado por um dos recebedores ou por ambos. 

## Exemplo prático
No contexto de split, imagine uma compra que o valor total seja de 100 reais. Todos os produtos do carrinho somaram 90 reais e o frete foi 10 reais. 

Esse é o montante que será dividido entre marketplace, seller e adquirente. Aqui, consideramos que o marketplace é o responsável por pagar o MDR ao adquirente.

Desse modo, o montante será direcionado ao marketplace para realizar as devidas divisões. Lembrando que o estabelecimento tem a opção de aplicar taxas diferentes sobre o valor dos produtos e o valor do frete.

Um possível cenário seria:

- Aplicar uma comissão de 5% sobre valor do produto. Ou seja, realizando os cálculos - R$ 90 * 5% -, o marketplace ficaria com R$ 4,50.

- Aplicar uma comissão de 20% sobre o valor do frete, o que resultaria R$ 2,00.

- A taxa do MDR é definida pelo adquirente. Se considerarmos um percentual de 2% para R$ 100, seriam R$ 2,00 para o adquirente.

Desse modo, seriam R$ 6,50 de taxas retidas pelo marketplace. Assim, o seller ficaria com R$ 93,50 do valor total da compra.

Esses mesmos R$ 6,50 serão divididos entre marketplace e adquirente. Como o MDR foi de R$ 2, sobram R$ 4,50 para o marketplace.

Confira o diagrama abaixo:

![Split de pagamento](https://images.ctfassets.net/alneenqid6w5/3D3Lso54Ho1lXbelILxaZO/ed7b92307403f708227bb85f492d0984/Split.png)
