---
title: 'O preenchimento do catálogo não aciona uma nova indexação de busca inteligente'
id: 3QAE7sE58h96m4mw2Xv4qw
status: PUBLISHED
createdAt: 2022-11-25T15:09:58.987Z
updatedAt: 2023-03-13T12:35:14.659Z
publishedAt: 2023-03-13T12:35:14.659Z
firstPublishedAt: 2022-11-25T15:09:59.567Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: o-preenchimento-do-catalogo-nao-aciona-uma-nova-indexacao-de-busca-inteligente
locale: pt
kiStatus: Fixed
internalReference: 449763
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao executar uma limpeza completa (https://{AccountName}.myvtex.com/admin/Site/fullcleanup.aspx) no catálogo, a emissora não envia a notificação de atualização para o indexador de Busca Inteligente, e os dados do produto podem ficar desatualizados, causando discrepâncias entre o conteúdo PDP e PLP.



##

## Simulação


Execute uma limpeza completa no Catálogo, e os produtos excluídos ainda estarão ativos na Busca Inteligente.



##

## Workaround


A VTEX não recomenda a exclusão de produtos do Catálogo, uma melhor maneira de lidar com este cenário é marcar os produtos como Inativos.

Se for necessária uma fullcleanup, ligue para o Suporte VTEX e peça uma indexação forçada na Busca Inteligente.





