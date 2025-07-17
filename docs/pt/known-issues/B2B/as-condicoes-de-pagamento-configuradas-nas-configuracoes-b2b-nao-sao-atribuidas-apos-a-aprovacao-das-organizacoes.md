---
title: "As condições de pagamento configuradas nas configurações B2B não são atribuídas após a aprovação das organizações"
id: 7pUMnYPWPHlhPzlWwTtWsL
status: PUBLISHED
createdAt: 2024-02-26T22:29:03.516Z
updatedAt: 2024-02-26T22:29:04.387Z
publishedAt: 2024-02-26T22:29:04.387Z
firstPublishedAt: 2024-02-26T22:29:04.387Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: as-condicoes-de-pagamento-configuradas-nas-configuracoes-b2b-nao-sao-atribuidas-apos-a-aprovacao-das-organizacoes
locale: pt
kiStatus: Backlog
internalReference: 989507
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As condições de pagamento configuradas nas configurações de organizações B2B não são salvas nos detalhes da organização.

## Simulação



- Configure as condições de pagamento padrão nas configurações de organizações B2B;
- Criar uma solicitação de organização;
- Aprovar a solicitação da organização;
- Verifique os detalhes da organização; ela não terá nenhuma condição de pagamento atribuída

## Workaround



- Atribua as condições de pagamento à organização por meio do administrador;
- Crie um acionador para o esquema da entidade da organização.




