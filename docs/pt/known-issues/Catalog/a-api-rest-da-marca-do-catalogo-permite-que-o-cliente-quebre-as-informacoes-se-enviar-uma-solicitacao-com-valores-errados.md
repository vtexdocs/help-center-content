---
title: 'A API REST da marca do catálogo permite que o cliente quebre as informações se enviar uma solicitação com valores errados'
id: 1nYTOhy1TjaQOK6xDvU5H6
status: PUBLISHED
createdAt: 2023-03-10T20:26:07.105Z
updatedAt: 2023-05-11T18:00:44.063Z
publishedAt: 2023-05-11T18:00:44.063Z
firstPublishedAt: 2023-03-10T20:26:07.692Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-brand-api-rest-allows-the-client-to-break-the-information-if-sending-request-with-wrong-values
locale: pt
kiStatus: Fixed
internalReference: 269109
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Há muitas rotas que suportam algum tipo de valor, mas se o cliente usar outro tipo de valor (por exemplo, inserir nulo em vez de booleano) pode quebrar a interface do produto / SKU / categoria / marca. Negar ao cliente a atualização das informações por meio do administrador.


## Simulação


Para as rotas `api/catalog/pvt/brand?an=`ou` /api/catalog/pvt/brand/?an=`, a documentação diz que o campo `MenuHome` só aceita valores booleanos. Mas se enviarmos uma solicitação com "null", por exemplo, a rota retornará um 200 e poderemos inserir esse valor. Depois disso, se tentarmos editar a marca na interface de administração, não será possível. Ele retornará um erro Something Went Wrong (Algo deu errado) com a mensagem `exception_message="Object cannot be cast from DBNull to other types."`

## Workaround


Atualize as informações novamente por meio da API.






