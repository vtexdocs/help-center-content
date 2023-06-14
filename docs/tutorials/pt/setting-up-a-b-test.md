---
title: 'Configurar um teste A/B com triggers do Master Data'
id: 4xFzBMHYty6gmEosWGWMC0
status: DRAFT
createdAt: 2018-04-02T17:58:30.057Z
updatedAt: 2022-08-03T00:23:33.093Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:46:23.597Z
contentType: tutorial
productTeam: Financial
author: authors_64
slug: configurar-teste-a-b
legacySlug: configurar-teste-a-b
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

A configuração de triggers do Master Data conta com uma propriedade chamada __weight__, ou seja, "peso".

É um campo integer em que pode-se colocar um número entre 0 e 100. Este número é um valor percentual de distribuição entre triggers.

Esta feature funciona somente se você tiver pelo menos duas ações com valor na propriedade `weight`.

Exemplo 1: Teste A/B entre dois triggers com 50% de carga.

```json
    {
    	"properties": { ... },
    	"v-triggers": [
    		{
    			"name": "scenario-1",
    			"weight": 50,
          ...
    		},
    		{
    			"name": "scenario-2",
    			"weight": 50,
          ...
    		}
    	]
    }
```

Exemplo 2: Teste A/B entre quatro triggers com pesos diferentes.
```json
    {
    	"properties": { ... },
    	"v-triggers": [
    		{
    			"name": "scenario-1",
    			"weight": 40,
          ...
    		},
    		{
    			"name": "scenario-2",
    			"weight": 30,
          ...
    		},
    		{
    			"name": "scenario-3",
    			"weight": 20,
          ...
    		},
    		{
    			"name": "scenario-4",
    			"weight": 10,
          ...
    		}
    	]
    }
```
