---
title: "Erro de console [Report Only] - Recusou-se a aplicar o estilo inline porque ele viola a seguinte segurança de conteúdo"
id: mix75F8F7a7D4iTWyHLyM
status: PUBLISHED
createdAt: 2024-04-16T10:30:41.610Z
updatedAt: 2024-04-16T10:30:42.934Z
publishedAt: 2024-04-16T10:30:42.934Z
firstPublishedAt: 2024-04-16T10:30:42.934Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: erro-de-console-report-only-recusouse-a-aplicar-o-estilo-inline-porque-ele-viola-a-seguinte-seguranca-de-conteudo
locale: pt
kiStatus: Backlog
internalReference: 1017370
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Temos alguns logs no console que relatam bloqueios de script devido a restrições por meio do cabeçalho CSP.
As chamadas de estilo inline para o host io2.vtex.com têm esse log de bloqueio porque ele não é liberado no CSP do host anterior, gerando, assim, mensagens de erro no console.


    [Report Only] Recusou-se a executar o script inline porque ele viola a seguinte diretiva da Política de Segurança de Conteúdo: "script-src 'self' https://io.vtex.com.br https://*.vtex.com.br https://*.vtexpayments.com.br https://*.myvtex.com https://*.vtexcommercestable.com.br https://*.vtexcommercebeta.com.br https://*.vteximg.com.br https://*.vtexassets.com 'report-sample'". É necessária a palavra-chave 'unsafe-inline', um hash ('sha256-AdqydPwVZwz4OteEhuvEEzsFBDTM/J6q0/ZlIWf9Wr4=') ou um nonce ('nonce-...') para permitir a execução inline.



## Simulação



1. Vá para o caixa da loja;
2. Abra o console e verifique as mensagens de relatório;



## Workaround


N/A





