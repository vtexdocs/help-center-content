---
title: 'Tempo limite Geração de chaves internas do aplicativo'
id: 11U62yvD8i6Mp79rUC38FU
status: PUBLISHED
createdAt: 2024-05-08T11:28:41.002Z
updatedAt: 2024-05-09T12:04:05.533Z
publishedAt: 2024-05-09T12:04:05.533Z
firstPublishedAt: 2024-05-08T11:28:41.857Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: tempo-limite-geracao-de-chaves-internas-do-aplicativo
locale: pt
kiStatus: Fixed
internalReference: 1029425
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Atualmente, temos um problema que pode afetar alguns clientes durante a geração de chaves de aplicativos.

## Simulação



Quando o cliente usa seu próprio SMTP para o modelo do gerenciador de licenças no centro de mensagens, a interface do usuário da chave do aplicativo tentará usar seu SMTP para enviar o e-mail, mas se houver um tempo limite durante o envio do e-mail, a chave do aplicativo também não será gerada

## Workaround



O cliente pode alterar o SMTP do gerenciador de licenças no centro de mensagens para configurar o SMTP da VTEX em vez de seu próprio SMTP, evitando o tempo limite. Ou ele pode apenas tentar resolver o problema com o tempo limite do SMTP.





