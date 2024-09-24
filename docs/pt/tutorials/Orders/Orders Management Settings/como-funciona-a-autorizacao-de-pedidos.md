---
title: 'Como funciona a Autorização de pedidos'
id: 3MBK6CmKHAuUjMBieDU0pn
status: PUBLISHED
createdAt: 2019-03-25T17:18:05.295Z
updatedAt: 2024-07-08T17:06:56.254Z
publishedAt: 2024-07-08T17:06:56.254Z
firstPublishedAt: 2019-03-25T17:24:44.319Z
contentType: tutorial
productTeam: Post-purchase
author: authors_41
slugEN: how-order-authorization-works
locale: pt
legacySlug: Saiba-como-criar-fluxos-para-a-liberação-ou-aprovação-de-pedidos-dos-canais
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

No Admin VTEX, em **Configurações da loja > Pedidos > Autorização de pedidos**, é possível controlar a aprovação de pedidos com divergência de preços na sua loja.

![print_autorizacao_pedidos_PT](//images.ctfassets.net/alneenqid6w5/3OSC6hxQchdd8SoWYwRI6l/92157acf2f5d379f30136b846e28a37f/print_autorizacao_pedidos_PT.png)

A divergência de preços de pedidos podem ser encontradas em dois principais cenários:

- [Descontos manuais](https://help.vtex.com/pt/tutorial/como-funciona-a-autorizacao-de-pedidos--3MBK6CmKHAuUjMBieDU0pn#descontos-manuais)
- [Divergência de valores](https://help.vtex.com/pt/tutorial/como-funciona-a-autorizacao-de-pedidos--3MBK6CmKHAuUjMBieDU0pn#divergencia-de-valores)

## Descontos manuais

São aqueles pedidos originados na sua loja, que possuem descontos manuais aplicados por operadores de televendas, por exemplo. 

Nos casos de descontos manuais, a **Autorização de pedidos** verifica todos os itens do pedido checando pelo desconto de cada item, apenas o desconto de cada item individualmente. Os efeitos possíveis dessa análise são negar, aceitar ou criar uma tarefa de autorização.

Caso um ou mais produtos recebam mais que o desconto máximo permitido, todo o pedido é cancelado, não importando se o valor total chegou ao desconto ou não.

## Divergência de valores

Quando o preço definido por um seller é diferente do preço oferecido pelo marketplace, pedidos realizados em marketplaces podem não ser processados corretamente. Na VTEX, o fluxo de Autorização de pedidos permite o controle e a aprovação automática desses pedidos, a partir da configuração de uma [regra de Divergência de valores](https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW).

### Saiba mais

- [Regra de Divergência de valores](https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW)
- [Configuração da regra de Divergência de valores](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe)
- [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
