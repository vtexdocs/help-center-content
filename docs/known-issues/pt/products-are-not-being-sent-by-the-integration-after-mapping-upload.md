---
title: 'Produtos não estão sendo enviados pela integração ao se fazer o upload de mapeamento'
id: 2A6AvKjkTm2wocOg4ywIAa
status: PUBLISHED
createdAt: 2018-05-04T17:50:27.140Z
updatedAt: 2022-12-22T15:11:03.363Z
publishedAt: 2022-12-22T15:11:03.363Z
firstPublishedAt: 2018-05-04T17:55:57.383Z
contentType: knownIssue
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
tag: Connections
slug: produtos-nao-estao-sendo-enviados-pela-integracao-o-upload-mapeamento
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao fazer o upload de mapeamento de alguma integração do Bridge, os produtos não estão sendo enviados. Mesmo forçando uma reindexação da base, os produtos continuam sem ser enviados.

## Simulação

1. Acessar o módulo Bridge ou a aba de Integrações > Configurações.
2. Clicar no botão `Upload de Mapeamento` de algum marketplace em que a loja já esteja integrada.
3. Realizar o processo de upload da planilha e clicar em `Enviar`.

Você verá na aba de Produtos que a integração não tentou enviar nenhum produto.

## Workaround

A solução no momento é fazer qualquer alteração mínima no produto (acrescentar um espaço na descrição, por exemplo), ou no preço (uma alteração de um centavo, por exemplo) ou no estoque. Isto fará com que o sistema de notificação identifique uma mudança no produto e gere uma notificação aos afiliados. Desta forma, a integração tentará o envio destes produtos.

