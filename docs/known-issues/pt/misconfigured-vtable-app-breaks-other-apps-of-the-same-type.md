---
title: App de VTable mal configurada quebra outras apps do mesmo tipo
id: cxsyuFBHRmG2mweiiC66Y
status: PUBLISHED
createdAt: 2019-01-03T21:10:51.083Z
updatedAt: 2022-12-22T20:45:09.551Z
publishedAt: 2022-12-22T20:45:09.551Z
firstPublishedAt: 2019-01-04T15:33:52.071Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: app-de-vtable-mal-configurada-quebra-outras-apps-do-mesmo-tipo
kiStatus: Backlog
internalReference: 
---

## Sumário

Uma app quebrada (em vermelho) inibe o funcionamento correto de outras apps.

Principais causas de uma app mal configurada:
1.  JSON Schema inexistente  (Campo "Model"  no JSON da app)
2.  Apps com o mesmo nome
3.  Discrepância entre o JSON Schema da entidade e os campos no JSON da app.

## Simulação

No caso de um JSON Schema inexistente, coloque no campo `model` o nome correto do JSON Schema.

Por exemplo: ![Screen Shot 2019-01-03 at 19.31.53](https://images.ctfassets.net/alneenqid6w5/EVwmyhWMmGmcs2Y8wEQiw/ddbf9f821818f2c061a5f262ee43e675/Screen_Shot_2019-01-03_at_19.31.53.png)

Observe como a borda da app fica vermelha e a mensagem de erro no console indica o erro "Error to get jsonschema by name": ![Screen Shot 2019-01-03 at 19.24.22](https://images.ctfassets.net/alneenqid6w5/62I23QUXPauQGGcUcoCucK/b484536ae3e462823b7715ff52a737ea/Screen_Shot_2019-01-03_at_19.24.22.png)

## Workaround

A app quebrada vai estar em vermelho. Para resolver, basta apagá-la.

