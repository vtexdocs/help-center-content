---
title: 'Erro 403 para todos os URLs que contêm develop-'
id: X6JDmLhD0StgHPGXJd9cZ
status: PUBLISHED
createdAt: 2024-02-01T13:46:53.024Z
updatedAt: 2024-02-01T13:46:54.008Z
publishedAt: 2024-02-01T13:46:54.008Z
firstPublishedAt: 2024-02-01T13:46:54.008Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: erro-403-para-todos-os-urls-que-contem-develop
locale: pt
kiStatus: Backlog
internalReference: 975182
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Espera-se que um URL possa conter qualquer palavra sem gerar um erro, mas a palavra "**develop "** seguida pelo caractere "**-**" gera um erro 403 automático.
Por exemplo, um produto com o link de texto `how-to-develot-a-culture-of-custumer-centricity` exibirá um erro 403, pois contém a string "develop-".

## Simulação



1. Coloque a string "develop-" em um link de texto
2. Carregue o produto
3. Veja o erro 403



## Workaround


Não usar a string "develop-"





