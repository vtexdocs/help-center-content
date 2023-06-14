---
title: 'utmi_p e utmi_pc não sendo mantido na URL após o login'
id: 7e8EO8EWEJCLbXs16ZofQk
status: PUBLISHED
createdAt: 2022-03-16T16:17:55.535Z
updatedAt: 2022-11-25T22:11:21.772Z
publishedAt: 2022-11-25T22:11:21.772Z
firstPublishedAt: 2022-03-16T16:17:55.979Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: utmip-e-utmipc-nao-sendo-mantido-na-url-apos-o-login
locale: pt
kiStatus: Backlog
internalReference: 372787
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



## Simulação


- Acesse um modelo restrito com uma URL no pedido, por exemplo: `.myvtex.com/Sistema/401?utm_source=utmSource&utm_medium=utmMedium&utm_campaign=utmCampaign&utmi_cp=utmiCampaign&utmi_pc=utmiPart&utmi_p=utmipage`
- Verifique se, após o login, os utmi_p e utmi_pc do UTM não estão sendo mantidos



## Workaround


Use outro tipo de UTMs, por exemplo, utm_source e umt_campaign.

