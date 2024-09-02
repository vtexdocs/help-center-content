---
title: 'Nas páginas de Ordens de Lista, as Ordens de Exportação não estão funcionando quando o filtro selecionado tem caracteres especiais'
id: 2eA1rykmTHxhUsiCQmeNoA
status: PUBLISHED
createdAt: 2022-09-21T17:54:38.517Z
updatedAt: 2022-11-25T22:01:23.310Z
publishedAt: 2022-11-25T22:01:23.310Z
firstPublishedAt: 2022-09-21T17:54:39.474Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: nas-paginas-de-ordens-de-lista-as-ordens-de-exportacao-nao-estao-funcionando-quando-o-filtro-selecionado-tem-caracteres-especiais
locale: pt
kiStatus: Backlog
internalReference: 662821
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A nova IU tem uma limitação para exportar alguns pedidos uma vez que o filtro selecionado tem no nome um exemplo de caráter especial ("&" e "á" ou "ú") acontece porque mesmo a nova IU pode filtrar os pedidos que ela chama de antiga rota OMS para exportar os pedidos.
E esta limitação na verdade está na rota antiga das OMS, porque a correção automática não pode lidar com todos os casos de nomes.



## Simulação



1 - Ir para a página de pedidos;

2 - Selecione, por exemplo, um vendedor com & no nome;

3 - A lista de ordens será capaz de ver; (usando a rota de ordens)

4 - Mas quando você clicar para exportar, receberá uma mensagem: (neste momento os pedidos chamam a antiga rota oms com problema)

'Exportação concluída. 0 pedidos foram enviados para seu e-mail!`



## Workaround


Não há solução para esta questão.

