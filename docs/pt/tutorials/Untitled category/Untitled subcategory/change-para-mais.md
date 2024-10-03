---
title: 'Change para mais'
id: 6ddTjw83726w8YssCEmi84
status: ARCHIVED
createdAt: 2017-05-24T18:35:05.275Z
updatedAt: 2020-03-05T18:21:11.018Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Post-purchase
author: 
slugEN: untitled-entry-2017-05-24-at-06-35-05
locale: pt
legacySlug: change-para-mais
subcategoryId: unknown-subcategory
---

Documentação change para mais referente ao chamado https://vtexhelp.zendesk.com/agent/tickets/45971


__Situação 1 – Change para Mais __

Pedido cliente -> R$ 200,00 
Utilizou 2 cartões de Crédito para pagamento 
Visa -> R$ 100,00 
Master -> R$ 100,00 
Existiu change para Maior de algum produto (exemplo picanha) valor de R$ 15,00 a mais

- Nosso serviço enviará a change do valor, porém como Vtex irá debitar esse valor a mais, pra qual cartão ela fará isso?

- Assim também vale para change de corte, de qual transação irá capturar o valor a menor?


__Respostas para as perguntas acima:__

No cenário exposto, a cobrança nos cartões será realizada da seguinte maneira:

- __Change para mais:__ a cobrança será realizada no primeiro cartão transacionado. (primeiro cartao que aparece no OMS dentro do pedido)
- __Change para menos:__ a cobrança será proporcional entre os 2 cartões.

__Exemplo:__
Total 200,00 (100,00 no cartao 1 | 100,00 no cartao 2)
Alteração: 15,00
Novo Total: 185,00

Cartão 1: 92,5
Cartão 2: 92,5


- No change pra mais, caso o cliente não tenha mais limite disponível no primeiro cartão, o que acontece?

Assim que você confirma a operação de alteração do item ou alteração do valor, o PCI monta uma nova transação e se comunica com o conector. Se o cliente não tiver crédito suficiente, o PCI retorna para o OMS uma mensagem "TransactionAuthorizationDenied" e cancela a operação.
