---
title: "Variações de caso no ID do documento causam duplicações no indexador"
id: 5KaMjJpOrpEQiUanTmqTox
status: PUBLISHED
createdAt: 2025-04-01T19:30:55.908Z
updatedAt: 2025-04-01T19:30:57.200Z
publishedAt: 2025-04-01T19:30:57.200Z
firstPublishedAt: 2025-04-01T19:30:57.200Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: variacoes-de-caso-no-id-do-documento-causam-duplicacoes-no-indexador
locale: pt
kiStatus: Backlog
internalReference: 1203412
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao criar um documento e, em seguida, aplicar uma solicitação de patch com o ID em um caso diferente (por exemplo, todas as letras maiúsculas), o sistema o trata como uma nova entrada em alguns componentes. Esse problema ocorre porque a persistência do documento no banco de dados não diferencia maiúsculas de minúsculas, o que significa que apenas um documento existe de fato. No entanto, outros fluxos, como o indexador, tratam o ID sem normalização de maiúsculas e minúsculas, o que leva a entradas duplicadas na API de pesquisa.

## Simulação



1. Crie um documento com um ID em letras minúsculas.
2. Aplique uma solicitação de correção usando o mesmo ID, mas em maiúsculas (ou qualquer outra variação de maiúsculas e minúsculas).
3. Observe que o indexador cria vários registros para o mesmo ID de documento, mesmo que exista apenas um documento no banco de dados.



## Workaround


Certifique-se de que todas as referências de ID usem um caso consistente antes de enviar solicitações para evitar duplicações não intencionais no indexador.





