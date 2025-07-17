---
title: "Loop de login infinito no Pick and Pack"
id: 6BHXEZeLc4ZIo9XJ6abfng
status: PUBLISHED
createdAt: 2025-04-07T20:57:54.309Z
updatedAt: 2025-04-08T00:37:20.769Z
publishedAt: 2025-04-08T00:37:20.769Z
firstPublishedAt: 2025-04-08T00:37:20.769Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: loop-de-login-infinito-no-pick-and-pack
locale: pt
kiStatus: Backlog
internalReference: 1206772
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Foi observado um problema em que o login do aplicativo **Pick and Pack** permanecia preso em um estado de carregamento, impedindo que os usuários acessassem o sistema. Após a investigação, não foram encontrados erros no aplicativo ou no backend. O problema estava relacionado aos **dados do navegador armazenados localmente**, como cookies, cache ou armazenamento local.

## Simulação



- Acesse o aplicativo em: https://picking.pickingnpacking.com/
- Tentativa de fazer login usando credenciais válidas.
- A tela de login permanece carregando e não é concluída.
 ![](https://vtexhelp.zendesk.com/collaboration/graphql/attachments/download/s3-b69bd53f-4385-4f00-94f7-299f63b07c7d/image.png

## Workaround


Sim, as ações a seguir podem ajudar a resolver o problema:

- Limpar **cookies** e **dados do site** (incluindo cache e armazenamento local).
- Use o navegador no **modo anônimo/privado**.
- Tente acessar a partir de um **navegador ou dispositivo** diferente.
- Verifique se a **hora do sistema e o fuso horário** estão definidos corretamente.
Essas etapas atualizam o ambiente de autenticação e permitem o acesso bem-sucedido.





