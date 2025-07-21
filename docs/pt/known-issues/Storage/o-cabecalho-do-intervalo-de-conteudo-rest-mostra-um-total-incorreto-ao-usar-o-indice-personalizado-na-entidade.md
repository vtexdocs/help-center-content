---
title: "O cabeçalho do intervalo de conteúdo REST mostra um total incorreto ao usar o índice personalizado na entidade"
id: 2T8DqFKMI0BhVAZp8RZ9PU
status: PUBLISHED
createdAt: 2025-06-25T13:50:22.910Z
updatedAt: 2025-06-26T19:10:15.645Z
publishedAt: 2025-06-26T19:10:15.645Z
firstPublishedAt: 2025-06-25T13:50:23.692Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: o-cabecalho-do-intervalo-de-conteudo-rest-mostra-um-total-incorreto-ao-usar-o-indice-personalizado-na-entidade
locale: pt
kiStatus: Backlog
internalReference: 1249679
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao consultar documentos usando um índice personalizado como filtro e o cabeçalho REST-Range (por exemplo, resources=0-100), o cabeçalho REST-Content-Range da resposta retorna um total incorreto de recursos (por exemplo, 300). Entretanto, a consulta com um intervalo maior (por exemplo, resources=300-400) revela que o total real é maior. Isso acontece porque a consulta usa um índice personalizado em vez do indexador.

## Simulação



1.

Realize uma pesquisa com o índice personalizado como um filtro em uma entidade que tenha mais de 300 documentos com o cabeçalho:

    REST-Range: resources=0-100

2. Observe que a resposta `REST-Content-Range` indica um total de `300`.
3.

Faça outra solicitação usando:

    REST-Range: resources=300-400

4. Observe que os documentos continuam retornando, indicando que o total real é maior que 300

## Workaround


Remova o índice personalizado. Isso forçará o aplicativo a consultar diretamente o indexador, que retorna corretamente a contagem total.




