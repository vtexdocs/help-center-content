---
title: "Erro ao atualizar segredos no Admin"
id: V5MAN3bb0peDm5qhHpg6r
status: PUBLISHED
createdAt: 2025-05-27T12:26:53.265Z
updatedAt: 2025-06-02T13:06:53.466Z
publishedAt: 2025-06-02T13:06:53.466Z
firstPublishedAt: 2025-05-27T12:26:54.455Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: erro-ao-atualizar-segredos-no-admin
locale: pt
kiStatus: Fixed
internalReference: 1233661
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao usar o Webops e tentar editar um segredo que você já adicionou ao recurso da interface do usuário, você pode receber o erro:

    "message": "Falha ao atualizar o segredo no Vercel. Atualização do AWS bloqueada. Erro: Ocorreu um erro ao atualizar o segredo na Vercel. Mais informações: Variável de ambiente com a chave \"\" não encontrada"


## Simulação



- Se estiver usando Webops, tente adicionar um novo segredo na interface do usuário;
- Clique para atualizar o segredo;
- Você receberá um erro interno do servidor 500 com a mensagem acima

## Workaround


N/A





