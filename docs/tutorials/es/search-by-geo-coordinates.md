---
title: 'Búsqueda por geocoordenadas'
id: 5fxWoPd11Cyk6OoG0sMWQ6
status: DRAFT
createdAt: 2018-04-26T22:29:52.462Z
updatedAt: 2022-08-04T22:35:26.226Z
publishedAt: 
firstPublishedAt: 2018-04-27T14:20:45.626Z
contentType: tutorial
productTeam: Post-purchase
author: authors_64
slug: busqueda-por-geocoordenadas
legacySlug: busqueda-por-geocoordenadas
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

<div class="alert alert-warning">
<strong>Atención:</strong> Esta funcionalidad todavía se encuentra en BETA.</div>

### Configurar el JSON Schema

Para buscar documentos en el Master Data filtrando por geocoordenadas, es necesario configurar un objeto en el JSON Schema con propiedades `latitude` y `longitude`:

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
    
    
Y añadir el campo en la lista de campos indizados:

    {
     "v-indexed": [ "{{yourFieldName}}" ]
    }
    
### Guardar documentos

Ahora, al guardar un documento, es necesario rellenar el campo configurado como geocoordenada:

    {
      "{{yourFieldName}}": {
        "latitude": {{value}},
        "longitude": {{value}}
      }
    }
   
### Filtrar documentos
 
Para consultar los documentos que están en un determinado radio (medido en km), basta con añadir el filtro en la querystring:
 
     {{yourFieldName}}={{latitudeValue}},{{longitudeValue}},{{integer}}km
 
     address.location=-23.01227,-43.46163,25km
     
### Ordenar por distancia
 
Para ordenar los documentos basados en una geocoordenada, basta con añadirla a la querystring:
 
     _sort={{yourFieldName}} {{asc/desc}} {{latitudeValue}},{{longitudeValue}} km
 
     _sort=address.location asc -23.01227,-43.46163 km
 
Al ordenar documentos por geolocalización, el campo `_sort` puede ser solicitado en la respuesta (`_fields=_sort`). El valor del campo `_sort` se rellenará con la distancia del documento en comparación con la geocoordenada informada en el campo `_sort` de la querystring.


### Ejemplo real

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
