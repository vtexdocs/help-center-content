---
title: 'SMS 2FA enviado pela VTEX aparece como "provável golpe" para usuários na Irlanda'
id: frBwPRkJwnn5KYwHb0K0j
status: PUBLISHED
createdAt: 2025-07-30T13:10:03.084Z
updatedAt: 2025-07-30T13:10:03.743Z
publishedAt: 2025-07-30T13:10:03.743Z
firstPublishedAt: 2025-07-30T13:10:03.743Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: sms-2fa-enviado-pela-vtex-aparece-como-provavel-golpe-para-usuarios-na-irlanda
locale: pt
kiStatus: Backlog
internalReference: 1268097
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As mensagens SMS 2FA da VTEX são marcadas como "provável fraude" na Irlanda porque os regulamentos irlandeses exigem que o ID do remetente seja registrado no ComReg, que é o órgão regulador de telecomunicações local. Sem esse registro, os remetentes de SMS corporativos não são reconhecidos pelas operadoras móveis locais, o que resulta em alertas automáticos de fraude para os usuários finais e, consequentemente, prejudica a confiança e a eficácia do processo de autenticação. A responsabilidade pelo registro do ID do remetente é das equipes reguladoras ou jurídicas, e não da engenharia/tecnologia pura.

## Simulação



- Configure a autenticação 2FA por SMS para usuários do VTEX Admin com um número de telefone na Irlanda;
- Solicitar um login 2FA;
- Observe que o SMS recebido será sinalizado pelo provedor local (operadoras de telefonia móvel na Irlanda) como "provável fraude" devido à ausência do registro do Sender ID da VTEX no ComReg.



## Workaround


Não há nenhuma solução alternativa disponível.





