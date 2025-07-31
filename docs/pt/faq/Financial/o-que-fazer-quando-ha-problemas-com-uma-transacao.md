---
title: 'O que fazer quando há problemas com uma transação?'
id: 3d183R70xqAYoyyqwaAmGa
status: PUBLISHED
createdAt: 2017-05-09T13:38:39.142Z
updatedAt: 2019-12-31T14:25:26.812Z
publishedAt: 2019-12-31T14:25:26.812Z
firstPublishedAt: 2017-05-09T13:44:57.343Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_35
slugEN: what-should-i-do-when-there-are-problems-with-a-transaction
locale: pt
legacySlug: o-que-fazer-quando-ha-problemas-com-uma-transacao
---

Para conseguir resolver rapidamente um problema envolvendo transações, recomendamos que o lojista esteja a par da estrutura de *logs* nos detalhes das transações no Admin da VTEX. Veja [aqui](/pt/tutorial/como-visualizar-detalhes-do-pedido/) como visualizar uma transação.

No *log* ficam registradas todas as interações entre VTEX e o parceiro, seja o gateway ou o antifraude. Começando da parte inferior da página até a parte superior, onde estão as interações mais recentes.

As mudanças de status e mensagens de resposta estão claramente marcadas, facilitando o entendimento dessa linha do tempo.

Em algumas ocasiões pode ocorrer uma falha de comunicação entre VTEX e o parceiro. Existem recursos de segurança ativos, como retentativas automáticas, mas erros humanos também podem existir, como o parceiro fazer uma atualização em sua plataforma e não atualizar a integração com VTEX.

Casos como esse geram logs ou mantém o pedido em um looping. Uma vez que um comportamento errático seja identificado, o caminho mais rápido é verificar se o status do pedido está igual em ambas plataformas. Como por exemplo, o gateway ter atualizado o status como "Settling", mas posteriormente retornar que o status não está correto para captura, contudo o status estaria correto. Veja o exemplo:

No dia 08 de fevereiro a VTEX recebeu uma notificação do gateway em que há uma mudança de status.
![2017-04-11-17 28 32-4820587- -VTEX-PCI-Gateway-300x65](https://images.contentful.com/alneenqid6w5/7us92BzXFYwyQsUqWQa0sM/9c8e7dc490e5497bf8cfa16e0f7874ce/2017-04-11-17_28_32-4820587-_-VTEX-PCI-Gateway-300x65.png) 

No dia 03 de abril o gateway retorna erro no status
![2017-04-11-17 26 40-4820587- -VTEX-PCI-Gateway-300x87](https://images.contentful.com/alneenqid6w5/35WTOXDAC4WgS0Ki866SSS/6d7f6ed699ef653d79d709c97320d10c/2017-04-11-17_26_40-4820587-_-VTEX-PCI-Gateway-300x87.png)

Um outro exemplo seria o gateway (parceiro) retornar que não possui os dados completos do cartão de crédito para prosseguir com a compra. Contudo, nos detalhes da transação no topo da página é possível confirmar que a informação existe - até porque o pedido não teria sido criado sem essas informações. O caminho aqui seria o mesmo, entrar em contato com o seu gateway.

A __TID__ é o número que deve ser usado para identificar uma transação no gateway.

O fato de existir uma TID significa, inclusive, que a transação teve um início, pois essa informação é gerada quando se estabelece uma conexão com o gateway.
