---
title: "Assinaturas: impasse entre data de cobrança e frequência do pedido"
id: 4k32lnRONWU3YzXyvXJItO
status: PUBLISHED
createdAt: 2021-06-14T20:32:51.367Z
updatedAt: 2022-12-22T14:54:57.938Z
publishedAt: 2022-12-22T14:54:57.938Z
firstPublishedAt: 2021-06-14T20:40:45.787Z
contentType: knownIssue
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
tag: Order Management
slugEN: assinaturas-impasse-entre-data-de-cobranca-e-frequencia-do-pedido
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O sistema de Assinaturas utiliza informações como a frequência da compra e data do ciclo para gerar um pedido de assinatura. Porém, existem dois cenários em que esses dois critérios (frequência e data do ciclo da assinatura) se contradizem e a assinatura é gerada com um atraso.

## Simulação

#### Cenário 1

Vamos supor que no dia 20/01 um cliente criou uma assinatura com frequência mensal. Portanto, ele receberá o produto a cada 30 dias. O cliente optou pela data do ciclo de assinatura no dia 5 de cada mês, ou seja, vai receber a cobrança de seu pedido todo dia 5.

Por ser uma assinatura mensal, o sistema entende que o próximo pedido deverá ser realizado 30 dias após a data de compra, portanto, no dia 20/02.

Neste ponto, há um impasse: o sistema não pode gerar o pedido antes dos 30 dias (por conta da frequência mensal), nem consegue realizar a cobrança no dia 20/02 (considerando que a data de cobrança selecionada é dia 5 de cada mês).

Isso porque, considerando que a data de cobrança desejada é dia 5, só se passariam 15 dias entre a data de cobrança e a próxima assinatura - e não os 30 dias da frequência mensal.

Diante dessa situação, o sistema realiza o pedido de assinatura no próximo dia 5 disponível: nesse caso, 05/03, quando já não há impasse. Devido a esse conflito, o cliente acaba recebendo seu produto com atraso. 

#### Cenário 2

Agora vamos supor que, às 23h do dia 09/05, um cliente criou uma assinatura com frequência mensal e optou pela data do ciclo de assinatura no dia 9 de cada mês, com a expectativa de que o primeiro pedido fosse feito no dia 09/06.

O sistema de Gerenciamento de pedidos trabalha no fuso horário previamente cadastrado na loja (vamos considerar GMT -3, fuso horário de Brasília). Já o sistema de Assinaturas trabalha no fuso horário GMT 0. Isso quer dizer que, apesar de a assinatura ter sido criada às 23h, para o sistema de Assinaturas, ela foi criada 3 horas depois, ou seja, já no dia 10/05.

Nesse caso, o sistema considera a data de criação da assinatura 10/05 para calcular o próximo ciclo de assinatura. Dessa forma, 09/06 seria um período de tempo menor do que o estabelecido (29 dias e não a periodicidade escolhida de 1 mês).

Por esse motivo, o sistema define a data da próxima compra para o mês 07, já que ele entende que a assinatura não pode ser executada no mês 06, pelo ciclo inferior a 30 dias. Assim, o cliente recebe o produto após a data esperada.

## Workaround

Hoje não há uma solução para esse problema. Caso seu cliente se encontre nessa situação, entre em contato com o suporte da VTEX. 

Para evitar esse tipo de situação no momento da criação da assinatura, o cliente precisa escolher a data de cobrança exatamente igual à data em que está fazendo o pedido (se for antes das 21h) ou então uma data posterior no mesmo mês.

Para lojas que utilizam o módulo de Assinaturas V3, existe a possibilidade de [criar a assinatura sem a necessidade de fechar um pedido imediatamente](https://help.vtex.com/pt/announcements/novo-modulo-assinaturas--6PfEmqovkZF97AZUp1owdf#novas-funcionalidades-para-seu-cliente), que dá liberdade ao usuário para escolher a data da primeira compra.

