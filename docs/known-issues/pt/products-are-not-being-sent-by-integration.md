---
title: 'Produtos não estão sendo enviados pela integração ao salvar o cadastro'
id: 3iY2DwQyiIwIsMaicGAI6e
status: PUBLISHED
createdAt: 2018-05-04T17:26:27.239Z
updatedAt: 2022-12-22T15:09:45.266Z
publishedAt: 2022-12-22T15:09:45.266Z
firstPublishedAt: 2018-05-04T17:44:09.981Z
contentType: knownIssue
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
tag: Connections
slug: produtos-nao-estao-sendo-enviados-pela-integracao-ao-salvar-cadastro
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao salvar a configuração de alguma integração de marketplace no Bridge, os produtos não estão sendo enviados. Mesmo forçando uma reindexação da base, os produtos continuam sem ser enviados.


## Simulação

1. Acessar o módulo Bridge ou Integrações > Configurações no menu do Admin e escolher algum marketplace para integrar.
2. Realizar o processo de cadastro do martketplace e salvar a configuração.

Você verá na aba de Produtos que a integração não tentou enviar nenhum produto.

## Workaround

A solução no momento é fazer qualquer alteração no produto (acrescentar um espaço na descrição, por exemplo), ou no preço (uma alteração de um centavo, por exemplo) ou no estoque. Isto fará com que o sistema de notificação identifique uma mudança no produto e gere uma notificação aos afiliados.

