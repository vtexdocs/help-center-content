---
title: 'Tempo limite do administrador'
id: 6Kp2viMZSnmGucJnciDNKx
status: PUBLISHED
createdAt: 2024-06-17T18:07:48.342Z
updatedAt: 2024-06-17T18:07:49.170Z
publishedAt: 2024-06-17T18:07:49.170Z
firstPublishedAt: 2024-06-17T18:07:49.170Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: admin-timeout
locale: pt
kiStatus: Backlog
internalReference: 1051070
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O aplicativo de mensagens está recebendo um erro de tempo limite aleatoriamente e algumas páginas de administração podem precisar de uma atualização para funcionar corretamente.

Isso pode estar relacionado a consultas GraphQL. Normalmente, você verá erros na rota `/meta` ou um timeout do aplicativo de mensagens relacionado à consulta `translateWithDeps`.

## Simulação


Tente acessar algumas páginas no administrador de uma conta e, aleatoriamente, essa página pode receber o erro abaixo:
 ![](https://vtexhelp.zendesk.com/attachments/token/zNzGxtaY5SszSHGFiKRMiCXda/?name=image.png)

 ![](https://vtexhelp.zendesk.com/attachments/token/KqbIgf2qqZIAdpYgXJcaiu5FJ/?name=image.png)

Quando você atualizar a página, tudo deverá voltar ao norma

## Workaround


N/A





