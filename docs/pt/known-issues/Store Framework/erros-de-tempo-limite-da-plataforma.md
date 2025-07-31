---
title: "Erros de tempo limite da plataforma"
id: 6Kp2viMZSnmGucJnciDNKx
status: PUBLISHED
createdAt: 2024-06-17T18:07:48.342Z
updatedAt: 2024-10-10T14:32:44.370Z
publishedAt: 2024-10-10T14:32:44.370Z
firstPublishedAt: 2024-06-17T18:07:49.170Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: erros-de-tempo-limite-da-plataforma
locale: pt
kiStatus: Backlog
internalReference: 1051070
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O aplicativo de mensagens recebe aleatoriamente um erro de tempo limite, e algumas páginas podem precisar ser atualizadas para funcionar corretamente. Isso está relacionado às páginas de administração, mas qualquer outra página da plataforma também pode receber esse erro.

Isso pode estar relacionado a consultas GraphQL. Normalmente, você verá erros na rota `/meta` ou um timeout do aplicativo de mensagens relacionado à consulta `translateWithDeps`.

## Simulação


Tente acessar algumas páginas no administrador, por exemplo, de uma conta, e, aleatoriamente, essa página pode receber o erro abaixo. Essa imagem também pode aparecer no ambiente myvtex ao acessar quaisquer outras páginas:
 ![](https://vtexhelp.zendesk.com/attachments/token/bpiTuFWDjmPfEtLAiVcLhiMRs/?name=image.png)
Quando você atualizar a página, tudo deverá voltar ao normal

Você pode ver mais detalhes do erro no console ou apenas esperar que ele seja atualizado

## Workaround


N/A





