---
title: 'Configurar un A/B test con triggers del Master Data'
id: 4xFzBMHYty6gmEosWGWMC0
status: DRAFT
createdAt: 2018-04-02T17:58:30.057Z
updatedAt: 2022-08-03T00:23:33.093Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:46:23.597Z
contentType: tutorial
productTeam: Financial
author: authors_64
slug: configurar-a-b-test
locale: es
legacySlug: configurar-a-b-test
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

La configuración de triggers del Master Data tiene una propiedad llamada __weight__, o sea, "peso".

Es un campo integer en que se puede poner un número entre 0 y 100. Este número es un valor porcentual de distribución entre triggers.

Esta feature solo funciona si hay al menos dos acciones con valor en la propiedad `weight`.

Ejemplo 1: A/B test entre dos triggers con un 50% de carga.

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

Ejemplo 2: A/B Test entre cuatro triggers con pesos diferentes.
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
