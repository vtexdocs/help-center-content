---
title: 'Busca por geocoordenadas'
id: 5fxWoPd11Cyk6OoG0sMWQ6
status: ARCHIVED
createdAt: 2018-04-26T22:29:52.462Z
updatedAt: 2022-08-04T22:35:26.226Z
publishedAt: 
firstPublishedAt: 2018-04-27T14:20:45.626Z
contentType: tutorial
productTeam: Post-purchase
author: authors_64
slugEN: search-by-geo-coordinates
locale: pt
legacySlug: busca-por-geocoordenadas
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

>⚠️ **Atenção:** Essa funcionalidade está em BETA.

### Configurando JSON Schema

Para buscar documentos no Master Data filtrando por geocoordenadas, é preciso configurar um objeto no JSON Schema com propriedades `latitude` e `longitude`:

    {
    	"properties": {
    		"{{yourFieldName}}": {
    			"type": "object",
    			"properties": {
    				"latitude": { "type": "number" },
    				"longitude": { "type": "number" }
    			},
    			"additionalProperties": false
    		}
    	}
    }
    
    
E adicionar o campo na lista de campos indexados:

    {
     "v-indexed": [ "{{yourFieldName}}" ]
    }
    
### Salvando documentos

Agora, ao salvar um documento, é preciso preencher o campo configurado como geocoordenada:

    {
      "{{yourFieldName}}": {
        "latitude": {{value}},
        "longitude": {{value}}
      }
    }
   
### Filtrando documentos
 
Para consultar os documentos que estão em um determinado raio (medido em km), basta adicionar o filtro na querystring:
 
     {{yourFieldName}}={{latitudeValue}},{{longitudeValue}},{{integer}}km
 
     address.location=-23.01227,-43.46163,25km
     
### Ordenando pela distância
 
Para ordenar os documentos com base em uma geocoordenada, basta adicioná-la na querystring:
 
     _sort={{yourFieldName}} {{asc/desc}} {{latitudeValue}},{{longitudeValue}} km
 
     _sort=address.location asc -23.01227,-43.46163 km
     
Ao ordenar documentos pela geolocalização, o campo `_sort` pode ser solicitado na resposta (`_fields=_sort`). O valor do campo `_sort` é preenchido com a distância do documento em comparação com a geocoordenada informada no campo `_sort` da querystring.


### Exemplo real

JSON Schema:

	{
		"properties": {
			"name": {
				"type": "string"
			},
			"isActive": {
				"type": "boolean"
			},
			"address": {
				"type": "object",
				"properties": {
					"state": {
						"type": "string"
					},
					"location": {
						"type": [
							"null",
							"object"
						],
						"properties": {
							"latitude": {
								"type": "number"
							},
							"longitude": {
								"type": "number"
							}
						},
						"additionalProperties": false
					}
				}
			}
		},
		"v-indexed": [
			"name",
			"isActive",
			"address"
		],
		"v-default-fields": [
			"id",
			"name",
			"address",
			"_sort"
		]
	}

Query:

    /search?address.location=-23.01227,-43.46163,100km&_schema=v1&_sort=address.location asc -23.01227,-43.46163 km&_fields=id,_sort
    
Resultado:

    [
    	{
    		"id": "AME",
    		"_sort": [
    			0
    		]
    	},
    	{
    		"id": "BAR",
    		"_sort": [
    			10.71936198115181
    		]
    	},
    	{
    		"id": "BAN",
    		"_sort": [
    			14.87184710662879
    		]
    	},
    	{
    		"id": "BRX",
    		"_sort": [
    			27.607623540300178
    		]
    	}
    ]
    

