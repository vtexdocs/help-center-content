---
title: 'Como funciona o aviso de compra suspeita no VTEX DO'
id: tutorials_7102
status: ARCHIVED
createdAt: 2017-04-27T21:48:17.808Z
updatedAt: 2020-01-08T20:23:04.348Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:20.650Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: understanding-the-suspicious-purchase-notice-on-vtex-do
locale: pt
legacySlug: entendendo-o-aviso-de-compra-suspeita-no-vtex-do
subcategoryId: unknown-subcategory
---

A VTEX está sempre preocupada em garantir a segurança de todas as operações da sua loja. Por isso, desenvolvemos uma integração entre o SherlockBOT e o VTEX DO que lhe avisa sempre que um comportamento suspeito for identificado no fechamento de compras.

### O que é o SherlockBOT

O SherlockBOT é um robô que faz uma varredura de todas as lojas VTEX em busca de padrões de fechamento de compras suspeitos. Ele trabalha com base em um conjunto de regras pré-definidas.

### Como o lojista é avisado

Quando o SherlockBOT identifica um pedido fechado de maneira que pode indicar atividade maliciosa, o lojista é avisado pelo [VTEX DO](/pt/tutorial/vtex-do) ㅡ o gerenciador de tarefas da VTEX ㅡ, que envia um alerta ao admin da loja por meio do módulo Pagamentos.

Veja um exemplo desse alerta no screenshot abaixo:

![sherlock (1)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

O lojista pode ainda ser incluído nas barreiras de segurança do Gateway, ou seja, a VTEX pode aplicar à sua loja regras de proteção contra testes de cartão de crédito. 

Quando um comportamento suspeito é identificado, essas regras são ativadas. Com isso, o pedido não deixa de ser processado, mas fazemos um processamento posterior que inviabiliza o teste de cartão de crédito.

Para aplicar essas regras à sua loja, basta digitar `Yes` no campo de comentário do alerta enviado pelo VTEX DO.

**Importante:** Pedidos realizados pelos operadores Televendas não são alertados pelo SherlockBOT. Isso significa que eles não são considerados comportamento suspeito, com isso não serão exibidos no VTEX DO.

_É importante ressaltar que o SherlockBOT **não** substitui e não tem a intenção de substituir o seu anti-fraude. Ele apenas bloqueia transações claramente suspeitas, visando a proteger a loja e reduzindo o custo de análises desnecessárias. O anti-fraude continua sendo fundamental para a segurança da sua loja e a proteção contra *chargebacks*._
