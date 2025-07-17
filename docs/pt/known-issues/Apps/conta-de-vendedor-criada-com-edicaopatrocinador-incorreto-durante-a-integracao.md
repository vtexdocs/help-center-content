---
title: "Conta de vendedor criada com edição/patrocinador incorreto durante a integração"
id: 4Hux4THmu1cvgR05bEeFbH
status: PUBLISHED
createdAt: 2025-06-04T19:21:33.198Z
updatedAt: 2025-06-04T19:21:46.467Z
publishedAt: 2025-06-04T19:21:46.467Z
firstPublishedAt: 2025-06-04T19:21:46.467Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: conta-de-vendedor-criada-com-edicaopatrocinador-incorreto-durante-a-integracao
locale: pt
kiStatus: Backlog
internalReference: 1238783
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Durante o processo de integração de novos vendedores por meio do Portal do Vendedor, algumas contas estão sendo criadas com a edição e/ou o patrocinador incorretos. O comportamento esperado é que a conta seja provisionada com a edição "edição-vendedor" patrocinada pela conta do patrocinador. No entanto, em alguns casos, a conta é criada usando a edição/esponja padrão da VTEX.

A investigação indica que esse problema tem origem em falhas ou eventos de repetição durante o processo de provisionamento de IO. A carga útil enviada para a criação da conta contém as informações corretas, mas se houver uma nova tentativa interna no IO, a edição/patrocinador pode não ser aplicada corretamente, levando a um ambiente de vendedor inconsistente.

## Simulação



- Inicie o fluxo de integração de um novo vendedor na plataforma por meio do Portal do Vendedor.
- O vendedor receberá um convite e o aceitará, acionando ações internas de provisionamento (Onboarding.Web, OnboardingBO, Billing).
- Monitore os registros de integração e de criação de conta (especialmente vendor_onboarding, chamadas onboarding-api, criação de conta no Billing).
- Se ocorrer um erro interno de IO ou uma nova tentativa durante a configuração da edição/patrocinador, a conta poderá ser criada com uma edição e/ou patrocinador incorretos.
- O vendedor afetado não terá o ambiente correto, o que afetará os recursos e as permissões

## Workaround


N/A






