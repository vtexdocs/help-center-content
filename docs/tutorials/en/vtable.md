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
legacySlug: vtable
subcategory: 5gtjaqCG7eIseyCI0aSqc2
---

VTable is a flexible and dynamic user interface to manage data from Master Data.

It uses **JSON Schema** to generate a lot of amazing tables.

If you are not familiarized with JSON Schema please take a look ar the [JSON Schema specification](http://json-schema.org/) before you continue reading this document.

To have an app rendered in VTable you will need to set these up:
- A JSON Schema defined for a data entity in Master Data.
- An app configuration that will be explained later in this document.

## JSON Schema configurations

VTable will parse the JSON Schema configuration and any field to a corresponding UI component. These are some examples of posible configurations:

### Checkbox

To render a checkbox the field must have type **boolean**.

JavaScript
```
"approved": {
  "type": "boolean",
  "title": "Approved"
}
```

### DropDown

To render a DropDown the field must have the **enum** keyword.

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

To render a DatePicker the field must have the keyword **format** with value **date-time**.

JavaScript
```
"birthdate":{
   "type":"string",
   "format":"date-time"
}
```

### TextArea

To render a textArea the field must have type **string** in the JSON Schema definiton and the keyword **multiline** with value **true** in the app configuration

JavaScript
```
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

The LinkControl represents the reference of one dataentity into another dataentity. To render the LinkControl the field must use the keywords **link** and **linked_field** where the value of link is the link to the referenced schema and the value of `linked_field` is the field that will be referenced.

The LinkControl lets you navigate between the related tables. For that you need to specify in the app configuration of the field the properties **relatedApp** and **relatedTable**.

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

To render a TextBox the field must be a **string** or **number** or **integer**. All the kewords of the JSON Schema that are used to validate the field as **pattern**, **minLenght**, **maxLenght**... will be used by VTable to validate the value of the field.

You can add a **mask** to the field in the APP configuration.

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

To render a MultiOptions control the type of the field must be **array** and the items must be of type **string** and must have defined the domain using the **enum** keyword.

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

If the field type is **array** and the field schema doesn't match a special case the VTable will use de ArrayControl.

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

To render a ObjectControl the field type must be **object**. The ObjectControl is recursive, then it can contain another object as property.

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

## Creating an App

VTable use Master Data to store the configuration of the apps to render. To create an app we need to create a JSON that contains the data that VTable uses to render an specific table. A commom app looks like the following JSON.

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

You can use this JSON as a base to create your own apps. There are some important considerations when creating your app.

- The **entity** field is the data entity in Master Data and it must exist before creating the app.
- The **model** field is the schema related to the data entity in Master Data
- The **fields** field contains the list of fields to be rendered. Each field  contains a simple configuration defining the width that each field will take when rendered in the table.
- The **list** field contains the list of fields tha will be rendered in the table.
- The **editor** field contains the configuration for rendering the form.

The following JSON Schema contains the structure and validation of the VTable app objects. You can validate the app using a JSON Schema Validator such as [jsonschemavalidator](https://www.jsonschemavalidator.net/).

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

## Saving to Master Data

To save the app JSON Object to Master Data, you need to add the document to the Vtable data entity. An example of that call is:

`https://{{AccountName}}.vtexcommercestable.com.br/api/dataentities/vtable/documents/{{app-name}}?_schema=app`

For more information read the [Master Data API documentation](https://developers.vtex.com/reference/master-data-api-v2-overview).
