---
title: Os destaques de produtos não funcionam em uma lista de produtos
id: 7lh3YMj55vQvs3EEQFUas1
status: PUBLISHED
createdAt: 2022-03-21T17:34:16.526Z
updatedAt: 2022-11-25T21:58:31.156Z
publishedAt: 2022-11-25T21:58:31.156Z
firstPublishedAt: 2022-03-21T17:34:17.170Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: os-destaques-de-produtos-nao-funcionam-em-uma-lista-de-produtos
kiStatus: Backlog
internalReference: 546844
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando há uma promoção com destaque habilitado e o produto, que está incluído nesta promoção, está dentro de uma lista, como uma prateleira, o crachá que informa a promoção não é exibido.

Componente em destaque do produto: https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-highlights



## Simulação


Crie uma promoção com recursos e insira um produto, incluído na promoção, em um contexto de lista dentro de uma página.



## Workaround


Criar uma coleção com o nome da promoção e habilitar a bandeira Adicionar etiqueta de coleção;
Adicionar o destaque do produto no contexto da lista com o tipo: coleção;

Criando Coleções: https://help.vtex.com/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye

