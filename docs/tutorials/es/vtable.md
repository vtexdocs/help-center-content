---
title: 'VTable'
id: 35ygHE0Ohaw46Si2MSEAE4
status: DRAFT
createdAt: 2017-12-05T19:52:08.543Z
updatedAt: 2022-08-03T00:05:20.931Z
publishedAt: 
firstPublishedAt: 2017-12-06T19:25:08.827Z
contentType: tutorial
productTeam: Master Data
author: 3vtAArasKQiuQKUg6AAuqq
slug: vtable
locale: es
legacySlug: vtable
subcategory: 5gtjaqCG7eIseyCI0aSqc2
---

VTable es una interfaz de usuario flexible y dinámica para administrar datos del Master Data.

Utiliza **JSON Schema** para generar tablas increíbles.

Si no está familiarizado con JSON Schema, eche un vistazo a las [especificaciones del JSON Schema](http://json-schema.org/) antes de seguir leyendo este documento.

Para que una aplicación sea procesada en VTable usted necesitará hacer lo siguiente:
- Un JSON Schema definido para una entidad de datos en el Master Data.
- Configurar la aplicación como se explica más adelante en este artículo.

## Configuraciones de JSON Schema

VTable utilizará la configuración del JSON Schema y de cualquier campo para montar un componente UI correspondiente. Estos son algunos ejemplos de configuraciones posibles:

### Checkbox

Para renderizar una casilla de verificación, el campo debe tener el tipo **boolean**.

```JavaScript
"approved": {
  "type": "boolean",
  "title": "Approved"
}
```

### DropDown

Para renderizar un DropDown, el campo debe tener la palabra clave **enum**.

```JavaScript
"gender": {
  "type": "string",
  "enum": [
    "Male",
    "Female"
  ]
}
```

### DatePicker

Para renderizar un DatePicker, el campo debe tener la palabra clave **format** con el valor **date-time**.

```JavaScript
"birthdate":{
   "type":"string",
   "format":"date-time"
}
```

### TextArea

Para renderizar una textArea, el campo debe tener tipo **string** en la definición del JSON Schema y la palabra clave **multiline** con valor **true** en la configuración de la app.

```JavaScript
// JSON Schema configuration
"lastName":{
   "type":"string",
   "title":"LastName",
   "maxLenght":250
},
// APP configuration
"lastName":{
   "width":300,
   "multiLine":true
}
```

### Link

El LinkControl representa la referencia de una entidad de datos a otra. Para renderizar el LinkControl, el campo debe utilizar las palabras clave **link** y **linked_field**, donde el valor del enlace es el enlace al schema referenciado, y el valor de `linked_field` es el campo al que se hace referencia.

LinkControl permite navegar entre las tablas relacionadas. Para ello necesita especificar las propiedades **relatedApp** y **relatedTable** en la configuración del campo.

```javascript
// JSON Schema Configuration
"user":{
   "type":"string",
   "link":"http://api.vtex.com/{accountName}/dataentities/users/schemas/user-v1",
   "linked_field":"email"
}
// APP Configuration
"user":{
   "width":300,
   "relatedApp":"users",
   "relatedTable":"main"
}
```

### TextBox

Para renderizar un TextBox, el campo debe ser una **string** o **number** o **integer**. Todas las palabras clave del JSON Schema que se utilizan para evaluar el campo como **pattern**, **minLenght**, **maxLenght**... serán usadas por VTable para validar el valor del campo.

Usted puede agregar una **mask** al campo en la configuración de la aplicación.

```javascript
// JSON Schema
"phone":{
   "type":"string",
   "maxLenght":100,
   "title":"Phone",
   "pattern":"[0-9]{10,11}"
}

// APP Configuration
"phone":{
   "width":200,
   "mask":"(99) 99999-9999"
},
```

### MultiOptions

Para renderizar un control MultiOptions, el tipo del campo debe ser **array**, y los items deben ser del tipo **string**, debiendo haber definido el dominio, usando la palabra clave **enum**.

```javascript
"nationality":{
   "type":"array",
   "items":{
      "type":"string",
      "enum":[
         "Brasil",
         "Argentina",
         "Colombia",
         "Uruguai",
         "Chile",
         "Paraguai"
      ]
   }
},
```

### ArrayControl

Si el tipo del campo es **array** y el schema del campo no coincide con un caso especial, VTable utilizará el ArrayControl.

```javascript
"list":{
   "type":"array",
   "title":"List",
   "items":{
      "type":"object",
      "properties":{
         "productId":{
            "type":"string",
            "title":"ProductId"
         },
         "quantity":{
            "type":"integer",
            "title":"Qty"
         },
         "name":{
            "type":"string",
            "title":"Name"
         }
      }
   }
}
```

### ObjectControl

Para renderizar un ObjectControl, el tipo de campo debe ser **object**. El ObjectControl es recursivo, por lo que puede contener otro objeto como propiedad.

```javascript
"complex":{
   "type":"object",
   "title":"Complex",
   "properties":{
      "name":{
         "type":"string",
         "title":"Name"
      },
      "age":{
         "type":"number",
         "title":"Age",
         "minimum":0,
         "maximum":100
      },
      "birthdate":{
         "type":"string",
         "title":"BirthDate",
         "format":"date-time"
      },
      "innerObject":{
         "type":"object",
         "properties":{
            "innerName":{
               "type":"string",
               "title":"InnerName"
            },
            "innerAge":{
               "type":"number",
               "title":"Idade 3",
               "minimum":0,
               "maximum":100
            }
         }
      }
   }
}
```

## Crear una App

VTable utiliza el Master Data para almacenar la configuración de las aplicaciones a renderizar. Para crear una aplicación, necesitamos crear un JSON que contenga los datos que utiliza VTable para representar una tabla específica. Una aplicación habitual se parece al siguiente JSON.

```javascript
{
   "name":"users",
   "title":"Users Admin",
   "tables":[
      {
         "id":"main",
         "title":"Users",
         "entity":"users",
         "model":"user-v1",
         "fields":{
            "id":{
               "width":200
            },
            "email":{
               "width":200
            },
            "firstName":{
               "width":300
            }
         },
         "list":[
            "email",
            "firstName",
            "lastName"
         ],
         "editor":{
            "settings":{
               "sections":[
                  {
                     "name":"Personal Data",
                     "fields":[
                        "firstName",
                        "email",
                        "lastName"
                     ]
                  }
               ]
            }
         }
      }
   ]
}
```

Usted puede utilizar este JSON como base para crear sus propias aplicaciones. Hay algunas consideraciones importantes para tener en cuenta al crear su aplicación.

- El campo **entity** es la entidad de datos del Master Data y debe existir antes de crearse la aplicación.
- El campo **model** es el schema relacionado con la entidad de datos en Master Data.
- El campo **fields** contiene la lista de campos a renderizar. Cada campo contiene una configuración simple que define el ancho que cada campo tendrá cuando se hace en la tabla.
- El campo **list** contiene la lista de campos que se representan en la tabla.
- El campo **editor** contiene la configuración para representar el formulario.

El siguiente JSON Schema contiene la estructura y validación de los objetos de aplicación de VTable. Usted puede validar la aplicación mediante un JSON Schema Validator como [jsonschemavalidator](https://www.jsonschemavalidator.net/).

JavaScript
```
{
   "properties":{
      "name":{
         "type":"string",
         "minLength":1,
         "maxLenght":50
      },
      "title":{
         "type":"string",
         "minLength":1,
         "maxLenght":50
      },
      "tables":{
         "type":"array",
         "minItems":1,
         "items":{
            "type":"object",
            "properties":{
               "id":{
                  "type":"string",
                  "minLength":1
               },
               "title":{
                  "type":"string",
                  "minLength":1
               },
               "entity":{
                  "type":"string",
                  "minLength":1
               },
               "model":{
                  "type":"string",
                  "minLength":1
               },
               "list":{
                  "type":"array",
                  "minItems":1,
                  "uniqueItems":true,
                  "items":{
                     "type":"string",
                     "minLength":1
                  }
               },
               "editor":{
                  "type":"object",
                  "properties":{
                     "settings":{
                        "type":"object",
                        "properties":{
                           "sections":{
                              "type":"array",
                              "minItems":1,
                              "items":{
                                 "type":"object",
                                 "properties":{
                                    "name":{
                                       "type":"string",
                                       "minLength":1
                                    },
                                    "fields":{
                                       "type":"array",
                                       "minItems":1,
                                       "uniqueItems":true,
                                       "items":{
                                          "type":"string",
                                          "minLength":1
                                       }
                                    }
                                 },
                                 "required":[
                                    "name",
                                    "fields"
                                 ]
                              }
                           }
                        },
                        "required":[
                           "sections"
                        ]
                     }
                  },
                  "required":[
                     "settings"
                  ]
               },
               "fields":{
                  "type":"object",
                  "properties":{
                     "id":{
                        "type":"object",
                        "properties":{
                           "width":{
                              "type":"integer"
                           }
                        },
                        "required":[
                           "width"
                        ]
                     }
                  },
                  "required":[
                     "id"
                  ],
                  "additionalProperties":{
                     "type":"object",
                     "properties":{
                        "width":{
                           "type":"integer"
                        }
                     },
                     "required":[
                        "width"
                     ]
                  }
               }
            },
            "required":[
               "fields",
               "entity",
               "model",
               "id",
               "title",
               "list",
               "editor"
            ]
         }
      }
   },
   "required":[
      "name",
      "title",
      "tables"
   ]
}
```

## Guardar en Master Data

Para guardar la aplicación en Master Data, usted debe agregar el documento a la entidad de datos Vtable. Un ejemplo de esta llamada es:

`https://{{AccountName}}.vtexcommercestable.com.br/api/dataentities/vtable/documents/{{app-name}}?_schema=app`

Para más informaciones, usted puede leer la [documentación de API de Master Data](https://developers.vtex.com/reference/master-data-api-v2-overview).
