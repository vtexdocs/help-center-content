---
title: 'A API da Attachents não permite "domainValues" nulos (e deveria)'
id: 7KMb6nh0ulcWdEfz7USbPg
status: PUBLISHED
createdAt: 2023-09-11T19:02:51.514Z
updatedAt: 2023-09-11T19:02:52.164Z
publishedAt: 2023-09-11T19:02:52.164Z
firstPublishedAt: 2023-09-11T19:02:52.164Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-api-da-attachents-nao-permite-domainvalues-nulos-e-deveria
locale: pt
kiStatus: Backlog
internalReference: 897480
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As solicitações de atualização para a API /api/catalog/pvt/attachment/ não estão permitindo atualizações para o campo Valor do domínio como um valor nulo.

Esse campo é anulável, portanto, essa resposta da API está respondendo incorretamente com:

`{`
` "Mensagem": "DomainValues in Domain at position 1 can not be null or empty value"`
`}`

## Simulação


1 - Criar um anexo via UI ou API: https://help.vtex.com/pt/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU

2 - tente atualizá-lo enviando o campo domainValue como um nulo, por exemplo:

`{`
` "Id": 123,`
` "Name": "payload com domínio nulo",`
` "IsRequired": true,`
` "IsActive": true,`
` "Domains" (Domínios): [`
` {`
` "FieldName": "Basic test",`
` "MaxCaracters": "354534",`
` "DomainValues": ""`
` }`
` ]`
`}`

3 - um tipo de resposta "Bad request" será exibido para você, quando na verdade deveria aceitar valores nulos para esse campo

## Workaround


Atualize os valores permitidos manualmente, por meio da interface do usuário, ou crie-os já nulos (o método POST está funcionando, mas o PUT não).





