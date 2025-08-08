---
title: 'Configurar o Alerta de Estoque Crítico'
id: 6FD0GHeQPCsKIMgkQ88SGu
status: PUBLISHED
createdAt: 2017-07-20T22:00:33.917Z
updatedAt: 2023-03-29T17:51:04.547Z
publishedAt: 2023-03-29T17:51:04.547Z
firstPublishedAt: 2017-07-20T22:18:34.892Z
contentType: tutorial
productTeam: Post-purchase
author: authors_39
slugEN: setting-up-the-critical-stock-alert
legacySlug: configurar-o-alerta-de-estoque-critico
locale: pt
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

O alerta de estoque crítico é uma funcionalidade de logística que tem o objetivo de alertar o lojista caso itens da sua loja estejam perto de ficarem esgotados no estoque.

## Configuração do Alerta de Estoque Crítico

1. No Admin VTEX, acesse **Configurações da loja > Envio > Configurações**, ou digite *Envio* na barra de busca no topo da página e selecione *Configurações da loja / Envio*.      
2. Preencha o campo de **Alerta de estoque crítico** com a quantidade de itens ou porcentagem de estoque desejada.
3. Clique em **Salvar**.

![alerta-estoque-critico pt](//images.ctfassets.net/alneenqid6w5/4NNqAy9PJ6wUQsywOyE0UK/b033e0752c942adfbe5bab4e616acb63/alerta-estoque-critico_pt.png)

## Como funciona o Alerta

Quando o estoque do item atingir a quantidade mínima configurada, será criada uma tarefa no [VTEX DO](https://help.vtex.com/pt/tutorial/vtex-do-interface--7KMbRL4OslN8DTX9oiuCiu). Ela será disparada sempre no momento em que a reserva do pedido for feita, ou seja, no fechamento do pedido, e pode demorar de 1 a 5 minutos para aparecer no VTEX DO.

Caso a reserva seja cancelada, por exemplo por conta de um cancelamento de pedido por parte do cliente, a tarefa será fechada automaticamente.

Se o estoque do item for atualizado, a tarefa também será encerrada. Mas, caso seja feita outra reserva, uma nova tarefa será criada.

## Perguntas frequentes

### Se o produto fizer parte de 2 estoques e apenas 1 deles atingir a quantidade mínima, o alerta é acionado?

Sim, o alerta é considerado por estoque, separadamente.

### Esse alerta serve para itens que estão no estoque de Sellers?

Não, o Logistics verifica apenas os estoques disponíveis da loja.

### Onde vejo esses alertas? Como posso acessar o VTEX DO?

Os alertas ficam registrados no [VTEX DO](https://help.vtex.com/pt/tutorial/vtex-do-interface--7KMbRL4OslN8DTX9oiuCiu) e, por enquanto, só podem ser acessados em **Gerenciamento de pedidos**. No entanto, também disponibilizamos uma [API](https://developers.vtex.com/docs/api-reference/vtex-do-api) para o caso de você querer buscar ou atribuir uma tarefa a alguma pessoa, por exemplo.
