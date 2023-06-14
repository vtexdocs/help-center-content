---
title: 'Website Binding com informações antigas do License Manager'
id: 1F8B0AD7IEGgmqWswAAkYe
status: PUBLISHED
createdAt: 2017-04-10T13:26:43.145Z
updatedAt: 2022-12-22T20:46:11.599Z
publishedAt: 2022-12-22T20:46:11.599Z
firstPublishedAt: 2017-04-10T13:43:26.648Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: License Manager
slug: website-binding-com-informacoes-antigas-do-license-manager
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

A ferramenta __Website Binding__ é responsável por fazer a ponte entre o CMS (Portal) e as informações definidas no License Manager de um __storename__ específico.

Se, em algum momento, o lojista mudar as informações de uma __storename__  com novas informações, o Portal irá adicionar essas informações ao Website Binding existente, ao invés de sobrescrever.

Possíveis problemas com esse bug envolvem XML, que ao ser gerado usa o primeiro domínio encontrado no Binding. 

O exemplo da loja __Delacasa__ ilustra o bug:

Antes de se chamar __delacasa__ haviam criado o domínimo __decoramovel__, o Portal criou o Binding e posteriormente adicionou as novas informações do novo domínio no mesmo Binding.

As novas informações inseridas no LM:
![license-manager-delacasa](//images.contentful.com/alneenqid6w5/6rC1pqQuQ0yeI60YqqS0Si/2d0cf344afd3f7cea14cf844ea86329b/license-manager-delacasa.JPG) 

O dicionário do Website (mundinho) como ficou, deixando o comportamento em evidência:
![dicionario-delacasa](//images.contentful.com/alneenqid6w5/2w9Zf8aK1aw0euMsSouUEm/59b5b620f7c36f52f81af250be71b542/dicionario-delacasa.JPG) 

A parte de Webiste Binding que mostra o resultado:
![binding-delacasa](//images.contentful.com/alneenqid6w5/4JqhEdsgdGWgo2QOCksUaM/bc67aa1883df5f8827d399f4e89fc123/binding-delacasa.JPG)

## Simulação

Criar um __storename__ no License Manager e posteriormente editar as informações desse mesmo storename no License Manager.


## Workaround

O License Manager está salvando as informações no Banco de Dados de forma correta, ou seja, ele sobrescreve as informações. O Portal que ao puxar essas informações está atualizando de forma errada.

O melhor caminho seria criar um novo Website Binding para esse mesmo Website (mundinho).

O novo Binding irá carregar as informações novas.

Após criar o novo, fazer a mudança e posteriormente, se necessário, excluir o antigo.

Importante manter essa ordem, para evitar que o site saia do ar.
![2017-04-10 10 40 41-Index](//images.contentful.com/alneenqid6w5/Jvzm768i64YeqQkqCYAWk/3261595cb7f9af998aac4f0c99fe3fb6/2017-04-10_10_40_41-Index.png)

