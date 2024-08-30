---
title: 'Configurar a Greenlist'
id: 2NryhZ5B0cikuwQU2GYI6a
status: DRAFT
createdAt: 2017-09-26T20:18:34.384Z
updatedAt: 2021-02-18T22:23:02.404Z
publishedAt: 
firstPublishedAt: 2019-01-25T13:43:43.063Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: configurar-a-greenlist
locale: pt
legacySlug: configurar-a-greenlist
subcategory: 6dLwF22Zwcy4iec2QSMeyG
---

A Greenlist é uma app gratuita que pode ser instalada na sua loja VTEX por meio da nossa [loja de extensões](/pt/tutorial/instalando-extensoes-na-extension-store).

1. [O que é a Greenlist](#o-que-e-a-greenlist).
2. [Assinatura do pedido](#assinatura-do-pedido).
3. [Recorrência da assinatura](#recorrencia-da-assinatura).
4. [Valor máximo do pedido](#valor-maximo-do-pedido).
5. [Prazo de segurança para chargeback](#prazo-de-seguranca-para-chargeback).
6. [Ativando a Greenlist](#ativando-a-greenlist).

## O que é a Greenlist

Se a sua loja usa antifraude, cada vez que um cliente finaliza um pedido, o sistema realiza os seguintes passos:
1. Verifica se o cliente tem crédito;
2. Caso o cliente tenha crédito, consulta o antifraude para saber se o cliente é confiável;
3. Se o antifraude aprovar o cliente, o pedido segue em frente.

Havendo ou não aprovação por parte do antifraude, uma vez que este serviço já foi consultado, o lojista é cobrado. A cobraça do antifraude acontece por meio de uma porcentagem do valor do pedido. Portanto, __para cada pedido que passa pelo antifraude, o lojista precisa pagar um valor correspondente ao total do pedido para o serviço de antifraude__.

__A Greenlist é uma lista de clientes pré-aprovados pelo lojista de acordo com determinadas condições.__ Uma vez que esses clientes façam um certo número de compras em seu site, sempre informando os mesmos dados (como e-mail e número do cartão de crédito), eles são marcados como confiáveis. Assim, nas próximas vezes em que fizerem uma compra no seu site, os pedidos deles não passarão pelo antifraude, e sua loja economizará o valor que teria de pagar por esse serviço.

>⚠️ Quanto mais dados de assinatura você exigir, mais rígidas serão suas regras, e menos clientes entrarão na Greenlist.

## Configurar a Greenlist

### Assinatura do pedido

Para marcar um cliente como confiável, o lojista usa alguns critérios. Estes critérios são os __dados de compra que compõem a assinatura de um pedido__:

![Greenlist - assinatura](https://images.contentful.com/alneenqid6w5/3CvVVFRIJ22wS6o8sq6ok6/45cdf4a8259437d36aa74a40a8a04715/Greenlist_-_assinatura.png)

Digamos que você marque três das opções da tela acima: __E-mail__, __Endereço de entrega__ e __Cartão de crédito__. Isso significa que, para que novos pedidos desse cliente não passem pelo antifraude, ele precisa usar em novas compras os mesmos dados de e-mail, endereço e cartão de crédito. 

Se ele fizer o número mínimo de compras usando estes mesmos dados, torna-se confiável; mas se em algum momento fizer uma compra usando, por exemplo, outro endereço de entrega, o pedido dele passará pelo antifraude normalmente.

### Recorrência da assinatura

A recorrência da assinatura define o número de pedidos que um cliente deve fazer usando os mesmos dados de assinatura para ser considerado confiável e assim entrar na Greenlist.

Este número deve ser definido pelo próprio lojista, e pode variar de __1 a 10__.

![Greenlist - recorrencia](https://images.contentful.com/alneenqid6w5/2TFJUnw1Cw8I0KcqCcAsmS/6aaec62228ec8ff5a38093e743a4229b/Greenlist_-_recorrencia.png)

Se você definir a recorrência para 6, por exemplo, todos os clientes da sua loja que fizerem seis compras usando os mesmos dados definidos na assinatura deixam de passar pelo antifraude a partir da próxima compra.

### Valor máximo do pedido

Você pode configurar um valor máximo para que a Greenlist seja válida. Isto porque mesmo que um cliente já tenha sido marcado como confiável, você pode preferir que - para valores muito altos, em que o risco de perda é maior - o antifraude atue independentemente do histórico de compras desse cliente.

![Greenlist - valor maximo](https://images.contentful.com/alneenqid6w5/1CG6Wm74qIu4Qam2WekkE4/02f3e165b7970651406d667ae66e4589/Greenlist_-_valor_maximo.png)

### Prazo de segurança para Chargeback

Às vezes, depois que um pedido é efetuado e o antifraude aprova a compra, pode acontecer chargeback após vários dias. Ou seja, pode ser que - mesmo tendo aprovado o pedido inicialmente - o antifraude venha a identificar que tratava-se de uma fraude.

Neste caso, é interessante definir uma margem de segurança para a análise do Greenlist. Ao escolher, por exemplo, um prazo de segurança de 30 dias, o lojista está dizendo que todo pedido aprovado pelo antifraude será avaliado pela Greenlist apenas depois de 30 dias.

![Greenlist - chargeback](https://images.contentful.com/alneenqid6w5/314Ig5HLCU2uy0kyYEu4gC/105ed241ac49923035a7b4d441d698e0/Greenlist_-_chargeback.png)

### Ativando a Greenlist

Ao terminar de definir as regras da sua Greenlist, siga os passos abaixo:
- Verifique se o botão de __Status__, no topo da página, está ativado. Isto é necessário para que a Greenlist funcione; 
- Revise a configuração das suas regras na caixa __Resumo da Regra__;
- Se estiver tudo OK, clique em __Salvar Regra__. 

Feito isso, a Greenlist já estará valendo para novos pedidos.

### Retirar um cliente da Greenlist

Se você identificar o pedido de um cliente integrante da Greenlist (ou qualquer outro cliente) é uma fraude, você pode indicar isto manualmente. Basta seguir os passos abaixo:

1. Acesse o módulo __PCI Gateway__ no Admin da sua loja; 
2. Na lista de transações, clique na transação que você deseja marcar como fruade;
3. Clique no botão __Marcar o pagamento como fraude__.

![Marcar como fraude](https://images.contentful.com/alneenqid6w5/3EiAcGulosCgQq4qCIGqQE/d0be6c70e7129f63b189c56bdb79012b/fraud.png)

Uma vez que uma transação é marcada como fraude, o cliente que fez o pedido é retirado da Greenlist. 
