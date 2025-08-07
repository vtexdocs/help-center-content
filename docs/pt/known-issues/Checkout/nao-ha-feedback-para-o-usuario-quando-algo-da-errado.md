---
title: "Não há feedback para o usuário quando algo dá errado"
id: 6mjLK4MVOqWeiAXtwcl8rS
status: PUBLISHED
createdAt: 2022-05-12T14:51:16.913Z
updatedAt: 2024-02-16T20:29:29.074Z
publishedAt: 2024-02-16T20:29:29.074Z
firstPublishedAt: 2022-05-12T14:51:17.267Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: nao-ha-feedback-para-o-usuario-quando-algo-da-errado
locale: pt
kiStatus: No Fix
internalReference: 339072
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o usuário está em caixa inserindo seus dados para finalizar sua compra e a internet cai e volta, nenhum feedback é devolvido ao usuário.



## Simulação


Como simulação, estou compartilhando um vídeo nos anexos. Pelo menos uma mensagem como: "Algo deu errado" ou "Por favor, recarregue sua página" deve ser enviada quando algo assim acontece.

Como outro exemplo, quando o usuário está inserindo os dados de envio para escolher se eles vão como entrega ou PUP e a internet vai para baixo, você pode ver o erro: Erro: Não foi possível carregar a API do Google Maps`_


## Workaround


Ao receber uma mensagem da API do Google como o exemplo acima em Simulação, poderíamos pegar essa mensagem e simplesmente passá-la ao usuário.

