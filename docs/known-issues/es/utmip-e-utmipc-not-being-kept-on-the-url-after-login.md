---
title: 'utmi_p e utmi_pc no se mantienen en la URL después del inicio de sesión'
id: 7e8EO8EWEJCLbXs16ZofQk
status: PUBLISHED
createdAt: 2022-03-16T16:17:55.535Z
updatedAt: 2024-02-16T20:29:25.217Z
publishedAt: 2024-02-16T20:29:25.217Z
firstPublishedAt: 2022-03-16T16:17:55.979Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: utmip-e-utmipc-no-se-mantienen-en-la-url-despues-del-inicio-de-sesion
locale: es
kiStatus: No Fix
internalReference: 372787
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



## Simulación


- Acceder a una plantilla restringida con una URL en la solicitud, por ejemplo: `.myvtex.com/Sistema/401?utm_source=utmSource&utm_medium=utmMedium&utm_campaign=utmCampaign&utmi_cp=utmiCampaign&utmi_pc=utmiPart&utmi_p=utmipage`.
- Comprueba que tras el inicio de sesión no se guardan los utmi_p y utmi_pc del UTM



## Workaround


Utilice otro tipo de UTM, por ejemplo, utm_source y umt_campaign.

