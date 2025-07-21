---
title: "As regras de merchandising manual não funcionam quando o acionador global está ativado"
id: 3doeP1bZWa4mBjWUEiAht8
status: PUBLISHED
createdAt: 2024-12-06T20:21:13.547Z
updatedAt: 2024-12-06T20:47:13.251Z
publishedAt: 2024-12-06T20:47:13.251Z
firstPublishedAt: 2024-12-06T20:21:14.324Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: as-regras-de-merchandising-manual-nao-funcionam-quando-o-acionador-global-esta-ativado
locale: pt
kiStatus: Backlog
internalReference: 1147282
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As regras de merchandising manual não funcionam quando o acionador global está ativado.

Esse cenário pode ocorrer ao atualizar uma regra de merchandising ativando o acionador global sem excluir as regras de acionamento existentes anteriormente.

## Simulação


Siga as etapas a seguir para simular o cenário:

1. Clique em **Edit** para editar uma regra de merchandising específica.
2. Ative o **Global Trigger**.
3. Clique em **Save** para salvar as atualizações.

Após atualizar as Regras de merchandising, pesquise qualquer termo e a Regra de merchandising não será ativada. Entretanto, ao pesquisar qualquer termo que se encaixe nas regras de acionamento anteriores, a regra de merchandising poderá ser ativada

## Workaround


Como solução alternativa, siga as etapas a seguir:

1. Edite uma regra de merchandising.
2. Desative o **Global Trigger**.
3. Clique em **Salvar** para aplicar as alterações. Ao salvar as alterações, as regras de acionamento existentes serão exibidas.
4. No bloco **Trigger Rules** do formulário de edição, clique em **Clear Rules** para excluir as regras de acionamento existentes.
5. Em seguida, ative o **Global Trigger**.
6. Clique em **Salvar** para aplicar as alterações.



