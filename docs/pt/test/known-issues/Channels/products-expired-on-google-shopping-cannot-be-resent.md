---
title: 'Produtos expirados no Google Shopping não podem ser reenviados'
id: 7nZszdQ8YEMg2q2MGqoQG
status: PUBLISHED
createdAt: 2018-06-11T16:20:09.949Z
updatedAt: 2022-12-22T15:10:33.256Z
publishedAt: 2022-12-22T15:10:33.256Z
firstPublishedAt: 2018-06-11T16:27:10.065Z
contentType: knownIssue
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
tag: Connections
slug: produtos-expirados-no-google-shopping-nao-conseguem-ser-reenviados
locale: pt
kiStatus: Fixed
internalReference: 
---

## Sumário

O Google Shopping faz com que os produtos enviados expirem automaticamente após 30 dias se não sofrerem nenhuma atualização. Isso inclui qualquer alteração no produto, seja ela de preço, estoque ou especificação. Para produtos que não foram atualizados de nenhuma maneira, seria necessário reindexá-los para notificar a integração. 

Porém, as notificações só acontecem se houver alteração de preço/estoque/produto. Assim, apenas __reindexar a base não vai influenciar no envio de produtos pela integração__. Dessa forma, os produtos expirados no Google Shopping têm a necessidade de uma atualização para que a integração seja notificada.

## Simulação

1. Escolha um produto expirado no Google Shopping.
2. Faça a reindexação desse produto na VTEX.
3. A integração não será notificada e o produto não ficará ativo no Google Shopping.

## Workaround

Faça uma alteração de preço ou estoque nos produtos desejados e eles serão reenviados para o Google Shopping.

