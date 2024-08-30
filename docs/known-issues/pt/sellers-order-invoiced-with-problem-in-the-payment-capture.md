---
title: 'Pedido do vendedor faturado com problema na captura do pagamento'
id: 59M66kN7D6qy8ErLnbdT9r
status: PUBLISHED
createdAt: 2024-01-29T16:51:46.993Z
updatedAt: 2024-01-29T16:51:47.674Z
publishedAt: 2024-01-29T16:51:47.674Z
firstPublishedAt: 2024-01-29T16:51:47.674Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: pedido-do-vendedor-faturado-com-problema-na-captura-do-pagamento
locale: pt
kiStatus: Backlog
internalReference: 376646
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


No momento, da forma como nossa arquitetura foi construída, tanto o vendedor quanto o marketplace são duas entidades totalmente diferentes. Funciona assim: o Marketplace é responsável por receber o dinheiro do cliente e o Vendedor é responsável por toda a logística até o momento em que entrega as mercadorias ao cliente.

A parte do "recebimento de dinheiro" é dividida em Autorização e Captura. Ambas são ações separadas no Gateway e são executadas em dois momentos distintos. O primeiro é quando o cliente faz a compra e o segundo é quando uma fatura é inserida no sistema. Após o processo de Autorização, o Marketplace "informa" ao Vendedor que ele pode prosseguir com a preparação e o envio das mercadorias ao cliente. Como há um intervalo de tempo entre a Autorização e a Captura e como são ações separadas, não há garantia de que a ação de Captura será executada corretamente.

Isso nos deixa com o problema de que o Vendedor recebeu uma notificação para enviar as mercadorias, inseriu uma notificação de fatura no sistema e o Marketplace teve um problema ao tentar realizar a ação de Captura.

Nesses casos de notificação de Autorização e Captura, o Gateway sempre notifica inicialmente o Marketplace que, por sua vez, notifica o Vendedor.

O problema é que o fluxo do vendedor não é interrompido por problemas que ele possa ter na captura de pagamento, mas isso se reflete no fluxo do Marketplace.

## Simulação


Não temos um passo a passo para replicar, porém, é possível validar um pedido de exemplo.

Podemos ver que a ordem do Marketplace relatou um problema na captura e não conseguiu concluir o fluxo, exibindo o erro: "Settlement operation has returned Failed" (A operação de liquidação retornou com falha)

No fluxo, o status da ordem no Marketplace será "Verifying invoice" e nas interações a mensagem: "Settlement operation has returned Failed" (A operação de liquidação retornou com falha) será exibida.

Nos eventos de transação, a mensagem: "Error: A resposta foi Entity_Declined" será exibida.

Enquanto o pedido do vendedor chega a Invoiced, porque, para o vendedor na arquitetura atual, a captura do pagamento não é de sua responsabilidade, mesmo sendo o proprietário do pagamento.

## Workaround


No momento, não temos uma solução alternativa para completar o fluxo do Marketplace, pois isso depende de a captura ser realizada corretamente. Sem a confirmação do Gateway, o pedido não poderá avançar. Infelizmente, a saída para esse tipo de inconsistência é cancelar a ordem de MKT e tentar fazer uma nova ordem manualmente.

É importante sempre validar se a captura do pagamento foi concluída antes de entregar os produtos






