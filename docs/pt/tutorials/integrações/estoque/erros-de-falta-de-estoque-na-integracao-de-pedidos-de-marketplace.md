---
title: 'Erros de falta de estoque na integração de pedidos de marketplace'
id: s1i5OCcPFslrMkZJLDnfP
status: PUBLISHED
createdAt: 2021-07-28T19:50:13.475Z
updatedAt: 2023-03-28T14:41:11.666Z
publishedAt: 2023-03-28T14:41:11.666Z
firstPublishedAt: 2021-07-28T19:55:21.464Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: out-of-stock-errors-in-marketplace-integration-orders
legacySlug: erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace
locale: pt
subcategoryId: 7lxg0kyL3TYIsrlSQlf1zP
---

Quando um pedido realizado em marketplace não é integrado na VTEX, uma mensagem de erro sinaliza o tipo de problema que ocorreu. O _status_ de integração do pedido aparece no seu Admin, em **MARKETPLACE > Conexões > Pedidos**. Para visualizar a mensagem de erro, basta clicar sobre o pedido.

Muitas vezes a mensagem de erro se refere à falta de estoque. Uma das formas mais simples de conferir se há disponibilidade de um SKU em estoque é realizando uma [simulação de envio](https://help.vtex.com/pt/tutorial/simulacao-de-frete). O Simulador de Envio é uma ferramenta que possibilita checar as condições de entrega do produto sem de fato abrir um pedido.

Erros de falta de estoque podem ocorrer por diferentes motivos, os mais comuns são:

- **Indisponibilidade de estoque:** um ou mais SKUs do pedido estão indisponíveis, é necessário [atualizar a quantidade de SKUs em estoque](https://help.vtex.com/pt/tutorial/como-atualizar-estoque--2MDwYV1COA6YuoiY22AyGo).
- **SKU inativo:** o SKU não está ativo, e somente SKUs ativos são integrados. Verifique o _status_ do item no seu Admin, em _Catálogo > Produtos e SKUs._
- **Estoque negativo:** é possível que o [estoque esteja negativo](https://help.vtex.com/pt/tutorial/atualizar-quantidade-de-skus-em-estoque--IKMWjOjMcMqKusSGko8c0#por-que-meu-estoque-esta-negativo). Isso ocorre quando existem mais itens reservados do que a quantidade total disponível em estoque.
- **Item não consta na coleção ou política comercial**: verifique se o SKU está marcado corretamente na coleção ou política comercial definidos para o marketplace. Saiba mais em [Associação de SKU à Política Comercial](https://help.vtex.com/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).

Após solucionar o erro, o pedido deve ser reprocessado manualmente. No seu Admin, no módulo **MARKETPLACE > Conexões > Pedidos**, clique sobre o pedido com erro. Feito isso, o botão **Ações** se torna visível, clique sobre ele e escolha a opção **Reprocessar**.

> ℹ️ Caso o erro persista, abra um [chamado para suporte VTEX.](https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM?locale=pt)

### Saiba mais

- [Controle de estoque mínimo para integrações](https://help.vtex.com/pt/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D)
- [Configurar o Alerta de Estoque Crítico](https://help.vtex.com/pt/tutorial/configurar-o-alerta-de-estoque-critico--6FD0GHeQPCsKIMgkQ88SGu)
- [Configurar Estoque Futuro](https://help.vtex.com/pt/tutorial/configurar-estoque-futuro--UMSGjooqRfkRbeoh94kS4)
