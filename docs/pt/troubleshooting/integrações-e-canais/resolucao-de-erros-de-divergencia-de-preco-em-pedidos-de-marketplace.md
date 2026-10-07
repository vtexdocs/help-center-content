---
title: 'Resolução de erros de divergência de preço em pedidos de marketplace'
id: 6MbmPX4SKyRkcTJxVhRna8
status: PUBLISHED
createdAt: 2021-08-03T21:56:44.320Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T21:22:43.831Z
firstPublishedAt: 2021-08-03T22:16:58.511Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: troubleshooting-price-divergence-errors-in-marketplace-orders
legacySlug: resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace
locale: pt
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Preços
  - Integrações
symptomFilters:
  - Erro de sincronização
  - Configuração incorreta
---

Quando o preço definido pelo seller é diferente do preço oferecido pelo marketplace, o pedido pode não ser integrado. Para verificar o erro, no Admin VTEX, acesse **Marketplace > Conexões > Pedidos** ou digite **Pedidos** na barra de busca.

O erro mais comum de divergência de preço em pedidos de marketplace é:

- **Preço diferente do valor determinado na VTEX**

## Solução

Para corrigir erros de divergência de preço em pedidos de marketplace, considere a opção apresentada na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**O preço do pedido no marketplace é diferente do seu valor determinado na VTEX.**|O preço do seller e o preço do marketplace divergem. Em conectores nativos, o pedido fica retido até que exista uma regra de divergência de valores. Em marketplaces VTEX, marketplaces externos e conectores certificados, o pedido é aprovado automaticamente enquanto a regra não existe.|[Configure uma regra de divergência de valores](/pt/docs/tutorials/configuracao-da-regra-de-divergencia-de-valores). Somente usuários com [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) Admin Super (Owner) ou OMS Full podem fazer isso. A regra vale para todos os marketplaces em que a loja é seller. Saiba mais em [Por que o pedido foi fechado com um preço errado?](/pt/troubleshooting/meu-pedido-foi-fechado-com-o-preco-errado).|
