---
title: "Os clientes externos estão recebendo 301 erros ao tentar acessar o vteximg"
id: 7ccanjU8GMJ4JEUPbsaPfo
status: PUBLISHED
createdAt: 2024-12-12T18:57:08.245Z
updatedAt: 2024-12-12T20:27:28.192Z
publishedAt: 2024-12-12T20:27:28.192Z
firstPublishedAt: 2024-12-12T18:57:09.086Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: os-clientes-externos-estao-recebendo-301-erros-ao-tentar-acessar-o-vteximg
locale: pt
kiStatus: Backlog
internalReference: 1150100
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao fazer uma solicitação por meio de um aplicativo para acessar um ponto de extremidade `vteximg` em um cliente externo, a resposta pode ser um 301 (redirecionamento). Isso ocorre porque o `colossus-legacy-proxy` está manipulando a solicitação.

O Kube-Router recebe a solicitação e a envia para o `colossus-legacy-proxy` para ser resolvida. Mas o proxy altera a solicitação de `https://.vteximg.com.br` para `http://.vtexcommercestable.com.br,` e essa solicitação volta para o Kube-Router. Ele pesquisa essa solicitação fora de nossos clusters, mas o recurso original está em `vteximg`, não em `vtexcommercestable`, o que nos leva à resposta de redirecionamento (301). A solicitação segue o caminho inverso e retorna a resposta 301 dizendo que a solicitação não está no `vtexcommercestable`, mas no `vteximg`.

## Simulação


Tente chamar o ponto de extremidade `vteximg` em um ExternalClient.



## Workaround


N/A





