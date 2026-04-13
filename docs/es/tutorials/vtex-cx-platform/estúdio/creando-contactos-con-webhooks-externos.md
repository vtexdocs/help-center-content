---
title: "Creando contactos con webhooks externos"
id: 2uiciJ2WsW6G9tfSDpvE12
status: PUBLISHED
createdAt: 2025-09-12T16:55:38.856Z
updatedAt: 2025-10-03T14:21:49.419Z
publishedAt: 2025-10-03T14:21:49.419Z
firstPublishedAt: 2025-10-03T14:21:49.419Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: creating-contact-from-an-external-webhook
legacySlug: creando-contactos-con-webhooks-externos
locale: es
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

En este artículo, te mostraremos de manera simple cómo traer contactos desde tu plataforma externa a la Plataforma Weni.

La Plataforma Weni tiene docenas de [APIs](https://dash.weni.ai/api/flows/api/v2/explorer) que pueden ser utilizadas para diversas funcionalidades. En este artículo, nos enfocaremos específicamente en la integración de contactos para automatizar tu comunicación.

Los contactos son los registros de cada persona dentro de un determinado canal de comunicación. En ellos, se pueden guardar campos predeterminados, como nombre, correo electrónico, teléfono y WhatsApp, así como diversos campos personalizados que pueden crearse y utilizarse libremente en la comunicación.

Normalmente, los webhooks se disparan a partir de un determinado evento dentro del software asociado, como, por ejemplo:

- Al crear, actualizar o eliminar un registro de cliente.- Al cambiar el estado de un registro de lead en una plataforma CRM.Cuando ocurren estos eventos, deben dispararse solicitudes a la Plataforma Weni para actualizar los registros de contactos, permitiendo que toda la automatización de comunicación se modifique en tiempo real.

## Añadiendo contactos

Puedes añadir un nuevo contacto enviando una solicitud **POST** a esta URL con los siguientes datos:

- **Name**: el nombre completo del contacto (cadena, opcional).
- **Language**: el idioma preferido del contacto (código ISO de 3 dígitos, opcional).
- **Urns**: una lista de URNs que deseas asociar a este contacto (array de hasta 100 cadenas, opcional). En los URNs se utiliza un prefijo con el canal en el que se puede iniciar la comunicación con este contacto, algunos ejemplos son:**tel**: Teléfono para el envío de SMS y llamadas.- **whatsapp**: Teléfono de WhatsApp para la comunicación por este canal. En este caso, deben usarse 8 o 9 dígitos para el teléfono, dependiendo de cómo esté registrado en WhatsApp.- **mailto**: El correo electrónico no es un canal de comunicación para recibir, solo para enviar.
- **Ext**: Identificador externo que se puede utilizar para el canal externo o para facilitar la búsqueda de un contacto mediante cualquier identificador.
- **Groups**: una lista de UUIDs de grupos a los que pertenece este contacto (array de hasta 100 cadenas, opcional).
- **Fields**: los campos de contacto que deseas configurar o actualizar para este contacto. Los campos deben estar previamente creados (diccionario de hasta 100 elementos, opcional).Ejemplo:

```
POST /api/v2/contacts.json
​{​
​""name""​:​ ​""Manu Silva""​,​
​""language""​:​ ​""por""​,​
​""urns""​:​ ​[
""tel:+558299331122""​,​
""whatsapp:​558299331122""​,
""mailto:​manu@weni.ai​"",
""ext:123456""
],​
​""groups""​:​ ​[​""6685e933-26e1-4363-a468-8f7268ab63a9""​],​
​""fields""​:​ ​{​
​""nickname""​:​ ​""Manu""​,​
​""side_kick""​:​ ​""Emanoela da Silva""​
​}
}
```

## Actualizando contactos

Una solicitud **POST** también puede ser utilizada para actualizar un contacto existente si especificas en la URL tanto su **UUID** como una de sus **URNs**. Solo los campos incluidos en el cuerpo serán actualizados en el contacto, los demás permanecerán intactos.

Si estás utilizando una **URN** en la URL, no la incluyas en el cuerpo de la solicitud. Además, si no existe un contacto con esa **URN**, crearemos uno nuevo y recibirás una respuesta **201** en ese caso.

Ejemplo:

```
POST ​/​api​/​v2​/​contacts​.​json​?​uuid​=​09d23a05​-​47fe​-​11e4​-​bfe9​-​b8f6b119e9ab
​{​
​""name""​:​ ​""Manu Silva""​,​
​""language""​:​ ​""por""​,​
​""urns""​:​ ​[​""tel:+558299331122""​,​ ​""whatsapp:5582999990000""​],​
​""groups""​:​ ​[
{​
""name""​:​ ​""Devs""​,​
​ ""uuid""​:​ ​""6685e933-26e1-4363-a468-8f7268ab63a9""​
}
],​
​""fields""​:​ ​{}​
}​

POST ​/​api​/​v2​/​contacts​.​json​?​urn​=​tel​%​3A​%​2B90987877​
{​
​""fields""​:​ ​{​""nickname""​:​ ​""Manu""​}​
}
```

## Eliminando contactos

Una solicitud **DELETE** también puede usarse para eliminar un contacto existente si especificas en la URL tanto su **UUID** como uno de sus **URNs**.

Ejemplo:

```
DELETE /api/v2/contacts.json?uuid=27fb583b-3087-4778-a2b3-8af489bf4a93

DELETE /api/v2/contacts.json?urn=tel%3A%2B250783835665
```

Recibirás una respuesta **204** si tu contacto fue eliminado correctamente, o una respuesta **404** si no se encontró ningún contacto con los parámetros proporcionados.

## Añadiendo campos personalizados

Una solicitud **POST** puede utilizarse para crear un nuevo campo de contacto. No necesitas especificar una clave, ya que se generará automáticamente.

- **label**: El nombre o etiqueta de visualización (cadena).
- **value_type**: Uno de los tipos de datos aceptados (cadena).
- **text**: Campos del tipo texto.
- **datetime**: Campos con información de fecha y hora (ejemplo de formato: 2020-01-31T09:27:39.071299-03:00).
- **numeric**: Campos numéricos.

Ejemplo:

```
​POST ​/​api​/​v2​/​fields​.​json
​{​
​""label""​:​ ​""Nick name""​,​
​""value_type""​:​ ​""text""
}
```

Recibirás un objeto (con la nueva clave del campo) si la respuesta es exitosa:

```
​{​
​""key""​:​ ​""nick_name""​,​
​""label""​:​ ​""Nick name""​,​
​""value_type""​:​ ​""text""
}
```

## Añadiendo un grupo de contacto

Una solicitud **POST** puede utilizarse para crear un nuevo grupo de contacto. No es necesario especificar un **UUID**, ya que se generará automáticamente.

- **name**: el nombre del grupo (cadena).

Ejemplo:

```
POST /api/v2/groups.json
​{​
​""name""​:​ ​""""​
}
```

Recibirás un objeto de grupo si la respuesta es exitosa:

```
​{​
​""uuid""​:​ ​""5f05311e-8f81-4a67-a5b5-1501b6d6496a""​,​
​""name""​:​ ​""Reporters""​,​
​""count""​:​ ​0​,​
​""query""​:​ ​null
}
```

## Actualizando un grupo

Una solicitud **POST** puede utilizarse para actualizar un grupo de contactos existente si especificas el **UUID** en la URL.

Ejemplo:

```
​POST ​/​api​/​v2​/​groups​.​json​?​uuid​=​5f05311e-8f81​-​4a67​-​a5b5​-​1501b6d6496a​
{​
​""name""​:​ ​""Checked""​
}
```

Recibirás un objeto de grupo actualizado si la respuesta es exitosa:

```
{​
​""uuid""​:​ ​""5f05311e-8f81-4a67-a5b5-1501b6d6496a""​,​
​""name""​:​ ​""Checked""​,​
​""count""​:​ ​0​,​
​""query""​:​ ​null
}
```

## Eliminando un grupo

Una solicitud **DELETE** puede utilizarse para eliminar un grupo de contacto si especificas el **UUID** en la URL.

**Notas**: No puedes eliminar grupos que están asociados con campañas, flujos o triggers. Debes primero eliminar los objetos relacionados a través de la interfaz web.

Ejemplo:

```
​DELETE ​/​api​/​v2​/​groups​.​json​?​uuid​=​5f05311e-8f81​-​4a67​-​a5b5​-​1501b6d6496a
```

Recibirás una respuesta **204** si el grupo fue eliminado correctamente, o una respuesta **404** si no se encontró ningún grupo con los parámetros proporcionados.

## Conclusión

Al final, tu plataforma estará habilitada para sincronizar los datos en tiempo real con nuestra plataforma, lo que permitirá al usuario aprovechar el poder de las automatizaciones y la Inteligencia Artificial para comunicarse de manera más cercana y continua con su audiencia.
