---
title: 'Cómo utilizar el Messages en apps del VTEX IO'
id: tfvQmmt8Ozr95nLnQRQT1
status: DRAFT
createdAt: 2019-02-08T16:54:01.853Z
updatedAt: 2020-03-13T21:24:58.464Z
publishedAt: 
firstPublishedAt: 2019-02-08T17:00:10.078Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slug: como-utilizar-el-messages-en-apps-del-vtex-io
locale: es
legacySlug: como-utilizar-el-messages-en-apps-del-vtex-io
subcategory: 54gbzsku02c4bKmgFbp3v3
---

El VTEX IO tiene un servicio de internacionalización embutido llamado __Messages__. En este tutorial usted aprenderá cómo internacionalizar su aplicación de frontend y las respuestas de su backend.

>ℹ️ Esta funcionalidad sólo está disponible para las aplicaciones react/graphql/typedql.

## Traducción del Messages

Muchos actores pueden contribuir con la traducción, como usuarios, aplicaciones y la traducción automática. __Messages__ agrega todos los servicios de traducción de la plataforma. De esta forma, dado un mensaje para traducir, Messages primero intentará traducir por el contenido definido por el usuario, luego por las traducciones de las aplicaciones (definidas en la carpeta `/messages`) y, finalmente, por el sistema de traducción automática.

Como se dijo anteriormente, las aplicaciones también pueden contribuir con las traducciones. Traducir una app a todos los idiomas es una tarea difícil, por lo que sugerimos que usted defina precisamente las traducciones a su público-objetivo y deje la traducción automática hacer el trabajo más pesado.

## Configuración

El Messenger App tiene algunas configuraciones opcionales. En principio, toda string será traducida a todas las lenguas, pero hay dos variables que se pueden definir:

- __defaultLanguage__: es la lengua predeterminada (si el valor es `*`, todos los idiomas serán soportados).
- __supportedLanguages__: es el vector de lenguas que desea admitir (si el request para el Messages App tiene un idioma de destino no compatible, la traducción se hará para el idioma predeterminado).

Para establecer la configuración primero instale la aplicación __Messages__ en su workspace con el comando `vtex install vtex.messages@1.x` y luego utilice la CLI de vtex para configurar la aplicación con el comando` vtex settings set <app> <fields> <value> `o configure por la página de administrador.

## Traducir una aplicación de front-end

Para traducir una aplicación de front-end usted tendrá que utilizar el nuevo MessagesBuilder (v1.x) y el ReactBuilder (v3.x).

Cree una carpeta llamada `/messages` en el directorio raíz de su aplicación. Esta carpeta contiene todas las traducciones de su aplicación. Por ejemplo, para admitir italiano, agregue un archivo denominado `it.json` con el siguiente contenido:

``` it.json
{
   “New user greeting”: “Ciao”
}
```

El contenido anterior es un json, clave-valor, en el que la clave es el ID utilizado en el `<FormattedMessage>` del React Intl y el valor es la traducción deseada. Como traducir todas las strings a todas las lenguas es una tarea difícil, que consume mucho tiempo, recomendamos que la traducción automática sea usada para lenguas menos importantes de acuerdo con su público-objetivo.

Para obtener una traducción automática más precisa, cree un archivo llamado `context.json` en su carpeta `/messages` con el siguiente contenido:

```context.json
{
   “New user greeting”: “Greeting new user that logged in”
}
```

Este archivo funciona para eliminar las posibles ambigüedades de las traducciones. Por ejemplo, la palabra 'Ciao' en italiano significa _Hola_ y también _Hasta luego_ en español. La descripción, por lo tanto, es importante para saber el significado exacto y tener una traducción correcta.

>⚠️ El archivo `context.json` es obligatorio y debe contener todas las claves de traducción.

### Migración del MessagesBuilder 0.x

Si usted ya utiliza el ReactBuilder (v3.x) y el [MessagesBuilder (v0.x)](/es/announcement/nueva-forma-de-organizar-los-archivos-de-traduccion-en-su-app-io), la migración es fácil: acceda al
`manifest.json`, aumente la versión de MessagesBuilder de `0.x` a `1.x` y cree el archivo `context.json`.

Si usted utiliza versiones antiguas del ReactBuilder, migre primero al ReactBuilder 3.x.

### Comportamientos y buenas prácticas

Al traducir un mensaje de una aplicación react a un idioma que no tiene un archivo JSON, el __Messages__ envía el valor definido en `en.json` para el servicio de traducción automática. Por lo tanto, es una buena práctica tener este archivo en todas las aplicaciones react. En caso de que no exista una traducción en inglés, la propia clave será traducida, luego, otra buena práctica es usar claves con espacios en lugar de puntos o trazos.

El servicio de traducción automática admite [ICU MessageFormat](http://format-message.github.io/icu-message-format-for-translators/). Sin embargo, una vez cada componente del mensaje se traduce independientemente, la traducción automática no es óptima, siendo mejor definir traducciones específicas para mensajes ICU complejos.
  
Si un mensaje tiene claves ('{'), el __Messages__ asume que es un mensaje ICU. Por lo que, si las claves son parte de su cadena y no es del tipo ICU, debe utilizar '\\ {' y '\\ {'.

## Traducir la respuesta de una app back-end

Traducir la respuesta de nuestras aplicaciones back-end es fácil y rápido. Son sólo dos pasos:

1. Escriba `scalar IOMessage` en la primera línea del archivo `schema.graphql` de la aplicación.
2. Cambie de `String` a `IOMessage` los datos que desea que se traduzcan.

`IOMessage` es un tipo escalar incrustado en nuestra infraestructura de GraphQL, usado para strings traducibles. Para aprender mejor cómo funciona este tipo, vea la sección sobre IOMessages.

Suponga que usted tiene una aplicación GraphQL con la siguiente estructura:

``` 
type Product {
    id: ID
    name: String
    categories: [String] 
}

Type Query {
    productById(id: ID): Product
}
```

Ahora, deseamos crear un producto con nombre y categorías traducibles. Se utilizará entonces una estructura similar con la siguiente:

``` 
scalar IOMessage

type Product {
    id: ID
    name: IOMessage
    categories: [IOMessage]
}

Type Query {
    productById(id: ID): Product
}
```

Ahora usted tiene campos que se traducen automáticamente a cualquier idioma. Tenga en cuenta que no es necesario modificar cómo se devuelven o se almacenan los datos.

## Exportación de traducciones personalizadas

Es posible exportar traducciones personalizadas al __Messages__ a través de una aplicación de personalización. Esto puede ser un facilitador si usted desea traducir datos de una API externa, como la del catálogo.

Para exportar estas configuraciones, cree una aplicación con el MessagesBuilder 1.x y una carpeta `/messages` en el directorio raíz de la aplicación con las traducciones deseadas.

Por ejemplo, suponga que tiene un producto en su tienda con el nombre _Cool Shorts_. La traducción automática al portugués le define como _Bermuda Legal_, pero le gustaría sobrescribir el término. Para ello, usted debe crear un Messages app. El `manifest.json` de esta aplicación es:

```manifest.json
  "name": "catalog-messages",
  "vendor": "vtex",
  "version": "0.1.0",
  "title": "Catalog Messages",
  "description": "Translations for the catalog",
  "builders": {
    "messages": "1.x"
  }
}
```
Y en la carpeta `/messages` los siguientes archivos:

```context.json
{
    “Cool Shorts”: “A clothing item (shorts) that is cool.”
}
```

```pt.json
{
    “Cool Shorts”: “Super shorts”
}
```

El nombre del producto __Cool Shorts__ será traducido al portugués según la traducción definida por la aplicación.


## Referencia de la API IOMessage

El tipo IOMessage tiene la siguiente estructura:

```
{
   content: String!
   description: String
   from: String
}
```

- `content` es la string que será traducida.

- `description` es la descripción del contexto de la string.

- `from` es el idioma de origen del contenido.

Note que si su _resolver_ de GraphQL devuelve el objeto IOMessage en lugar de una string, el __Messages__ tendría más información para traducir el contenido, generando una traducción aún mejor. A pesar de eso, si su backend no provee dicha información, usted puede devolver sólo una string y los demás parámetros se poblarán automáticamente.
