---
title: 'Falha na validação do esquema para tipos personalizados no Headless CMS'
id: 2dcDsFQkqbNqJZXEzztQ11
status: PUBLISHED
createdAt: 2023-09-19T21:43:59.145Z
updatedAt: 2023-09-19T21:43:59.945Z
publishedAt: 2023-09-19T21:43:59.945Z
firstPublishedAt: 2023-09-19T21:43:59.945Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: schema-validation-failing-for-custom-types-in-headless-cms
locale: pt
kiStatus: Backlog
internalReference: 903687
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Temos falhas nas validações de esquema em campos obrigatórios sem valor padrão no Headless CMS para tipos de página personalizados, a biblioteca que usamos está considerando a falha, mas os campos obrigatórios são preenchidos corretamente

## Simulação



Criar uma estrutura de esquema para uma página específica com um campo obrigatório e não colocar um valor padrão para esse campo obrigatório


    ... "required": ["field1"],"properties": {"field1": { "title": "Field" (Campo), "type" (Tipo): "string", "description": "Alguma descrição" }}...

## Workaround


Coloque um valor padrão nos campos obrigatórios





