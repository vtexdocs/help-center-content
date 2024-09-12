---
title: 'Atualização de anexos e criação de validação API em campos de valores de domínio que não funcionam'
id: 1NAwwi7C65xM2G61uaTLrB
status: PUBLISHED
createdAt: 2023-02-09T16:10:03.814Z
updatedAt: 2024-07-01T18:48:48.654Z
publishedAt: 2024-07-01T18:48:48.654Z
firstPublishedAt: 2023-02-09T16:10:04.449Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: atualizacao-de-anexos-e-criacao-de-validacao-api-em-campos-de-valores-de-dominio-que-nao-funcionam
locale: pt
kiStatus: No Fix
internalReference: 751091
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Via UI (diretamente na VTEX admin) é possível criar um anexo sem o campo **Valores permitidos** preenchidos:
 ![](https://vtexhelp.zendesk.com/attachments/token/8rFw6593yoVr64CViajezsXW0/?name=image.png)

Entretanto, via API existe esta validação para este campo:

    <Erro>>Mensagem>DomínioValores no Domínio na posição 0 não podem ser nulos ou vazios</Mensagem>>/Erro>


O que significa que você não pode criar um anexo como este:

    {"Id": 6, "Nome": "Test", "IsRequired": falso, "IsActive": verdadeiro, "Domains": { {"Nome de Campo": "Teste", "MaxCaracters": "20", "DomainValues": "20", "DomainValues": "20", "DomainValues": "20": ""      }  ]}




##

## Simulação



1. Utilize o seguinte API: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/attachment
2. Tente deixá-lo vazio o campo DomainValues
3. Verifique se a mensagem de erro mencionada acima foi devolvida.


##

## Workaround


Criar o anexo via Admin.





