---
title: VTable
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
legacySlug: vtable
subcategory: 5gtjaqCG7eIseyCI0aSqc2
---

O VTable é uma interface de usuário flexível e dinâmica para gerenciar dados do Master Data.

Ele usa **JSON Schema** para gerar tabelas incríveis.

Se você não está familiarizado com JSON Schema, dê uma olhada nas [especificações do JSON Schema](http://json-schema.org/) antes de continuar a ler este documento.

Para que um aplicativo seja processado no VTable você precisará fazer o seguinte:
- Um JSON Schema definido para uma entidade de dados no Master Data.
- Configurar o aplicativo conforme explicado mais adiante neste artigo.

## Configurações do JSON Schema

O VTable usará a configuração do JSON Schema e o de qualquer campo para montar um componente UI correspondente. Estes são alguns exemplos de configurações possíveis:

### Checkbox

Para renderizar uma caixa de seleção, o campo deve ter o tipo **boolean**.

JavaScript
```
"approved": {
  "type": "boolean",
  "title": "Approved"
}
```

### DropDown

Para renderizar um DropDown, o campo deve ter a palavra-chave **enum**.

JavaScript
```
"gender": {
  "type": "string",
  "enum": [
    "Male",
    "Female"
  ]
}
```

### DatePicker

Para renderizar um DatePicker, o campo deve ter a palavra-chave **format** com valor **date-time**.

```JavaScript
"birthdate":{
   "type":"string",
   "format":"date-time"
}
```

### TextArea

Para renderizar uma textArea, o campo deve ter tipo **string** na definição do JSON Schema e a palavra-chave **multiline** com valor **true** na configuração da app.

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

O LinkControl representa a referência de uma entidade de dados a outra. Para renderizar o LinkControl, o campo deve usar as palavras-chave **link** e **linked_field**, onde o valor do link é o link para o esquema referenciado, e o valor de `linked_field` é o campo que será referenciado.

O LinkControl permite navegar entre as tabelas relacionadas. Para isso você precisa especificar as propriedades **relatedApp** e **relatedTable** na configuração do campo.

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

Para renderizar um TextBox, o campo deve ser uma **string** ou **number** or **integer**. Todas as palavras-chave do JSON Schema são usadas para avaliar o campo como **pattern**, **minLenght**, **maxLenght**... Serão usadas pelo VTable para validar o valor do campo.

Você pode adicionar uma **mask** ao campo na configuração da app.

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

Para renderizar um controle MultiOptions, o tipo do campo deve ser **array**, e os itens devem ser do tipo **string**, devendo ainda ter definido o domínio, usando a palavra-chave **enum**.

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

Se o tipo de campo for **array** e o esquema do campo não coincidir com um caso especial, o VTable usará o ArrayControl.

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

Para renderizar um ObjectControl, o tipo de campo deve ser **object**. O ObjectControl é recursivo, então ele pode conter outro objeto como propriedade.

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

## Criando uma App

O VTable usa o Master Data para armazenar a configuração das aplicações a renderizar. Para criar um aplicativo, precisamos criar um JSON que contenha os dados que o VTable usa para renderizar uma tabela específica. Um aplicativo usual se parece com o seguinte JSON.

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

Você pode usar este JSON como base para criar seus próprios aplicativos. Há algumas considerações importantes para lver em conta ao criar seu aplicativo.

- O campo **entity** é a entidade de dados do Master Data e deve existir antes de se criar o aplicativo.
- O campo **model** é o esquema relacionado à entidade de dados no Master Data.
- O campo **fields** contém a lista de campos a renderizar. Cada campo contém uma configuração simples que define a largura que cada campo terá quando renderizado na tabela.
- O campo **list** contém a lista de campos que serão renderizados na tabela.
- O campo **editor** contém a configuração para renderizar o formulário.

O seguinte JSON Schema contém a estrutura e validação dos objetos do aplicativo do VTable. Você pode validar o aplicativo usando um JSON Schema Validator como [jsonschemavalidator](https://www.jsonschemavalidator.net/).

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

## Salvando no Master Data

Para salvar o aplicativo no Master Data, você precisa adicionar o documento à entidade de dados Vtable. Um exemplo dessa chamada é:

`https://{{AccountName}}.vtexcommercestable.com.br/api/dataentities/vtable/documents/{{app-name}}?_schema=app`

Para mais informações, leia a [documentação de API do Master Data](https://developers.vtex.com/reference/master-data-api-v2-overview).
