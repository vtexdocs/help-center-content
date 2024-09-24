---
title: "A interface do usuário de configurações não atualiza o 'período de expiração' das cotações"
id: 4CmuAYwDn7tcCiR9DQHSFb
status: PUBLISHED
createdAt: 2023-08-07T19:42:22.810Z
updatedAt: 2024-05-08T18:04:41.362Z
publishedAt: 2024-05-08T18:04:41.362Z
firstPublishedAt: 2023-08-07T19:43:56.788Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: settings-ui-doesnt-update-expiration-period-of-quotes
locale: pt
kiStatus: Backlog
internalReference: 876576
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A UI de configurações de cotação B2B não atualiza o valor do período de expiração; ele é sempre 30.

## Simulação



- Acesse a página de configurações de cotações B2B e altere o "período de expiração".
- Atualize a página; nenhuma alteração é aplicada

## Workaround



- Acesse o GraphQL IDE e selecione vtex.b2b-quotes-graphql;
- Use a consulta abaixo para obter a data de expiração:

    { getAppSettings{ adminSetup { cartLifeSpan } }}

- Envie uma mutação para atualizar a data de expiração para um valor diferente:

    mutation SaveAppSettings($input: AppSettingsInput!) { saveAppSettings(input: $input) { adminSetup { cartLifeSpan } }}{ "input": { "cartLifeSpan": }}





