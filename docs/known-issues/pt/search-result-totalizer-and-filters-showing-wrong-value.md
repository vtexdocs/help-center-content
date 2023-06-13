---
title: Totalizador de resultado de busca e filtros apresentando valor equivocado
id: 62FJLXM5ckM8sqYUIQg0C4
status: PUBLISHED
createdAt: 2017-12-22T16:50:30.032Z
updatedAt: 2022-12-22T20:43:16.683Z
publishedAt: 2022-12-22T20:43:16.683Z
firstPublishedAt: 2017-12-22T17:02:52.492Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slug: totalizador-de-resultado-de-busca-e-filtros-apresentando-valor-equivocado
kiStatus: Backlog
internalReference: 
---

## Sumário

<div class = "alert alert-warning">
  <strong>Atenção</strong>: a VTEX apresenta duas opções da busca - a busca VTEX e o VTEX Intelligent Search. Esse artigo se refere à busca VTEX. Para saber mais sobre o aplicativo VTEX Intelligent Search acesse <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nossa track</a>.
</div>

Ao fazer qualquer tipo de busca (categoria, marca, por termo etc), o controle searchNavigator exibe, normalmente na lateral, todos os filtros possíveis para o resultado. Do lado de cada filtro, o sistema exibe o totalizador, ou seja, a quantidade de produtos que existe para cada opção. Eventualmente esse totalizador não apresenta um valor correto e, ao clicar na opção, o resultado exibe mais ou menos produtos do que a quantidade indicada no filtro.

O totalizador do searchResult também, eventualmente, se comporta de maneira inesperanda, apresentando um valor divergente da realidade.

## Simulação

Para simular (não ocorre com qualquer loja ou configuração):
1. Acesse uma página que possua filtros laterais;
2. Observe o totalizador de algum filtro (o problema acontece normalmente com opções com mais de 30 produtos);
3. Clique em algum filtro;
4. Observe que a quantidade de produtos retornados é diferente do totalizador apresentado no filtro;

## Workaround

Não há solução de contorno.

