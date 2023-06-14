---
title: 'How to use Messages on your IO apps'
id: tfvQmmt8Ozr95nLnQRQT1
status: DRAFT
createdAt: 2019-02-08T16:54:01.853Z
updatedAt: 2020-03-13T21:24:58.464Z
publishedAt: 
firstPublishedAt: 2019-02-08T17:00:10.078Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slug: how-to-use-messages-on-your-io-apps
legacySlug: how-to-use-messages-on-your-io-apps
subcategory: 54gbzsku02c4bKmgFbp3v3
---

VTEX IO has a built-in internationalization service called __Messages__. In this tutorial you will learn how to internationalize your front end apps as well as the responses of your back end. 

<div class="alert alert-info">
This feature is only available for react/graphql/typedql apps.
</div>

## Messages translation 

Many actors can contribute to a translation, like users, apps and automatic translation. __Messages__ aggregates all the translation services in the platform. Given a message to translate, Messages will first go through content defined by the user, then the apps’ translations (defined in the `/messages` folder) and finally through the automatic translation system. 

Since translating an app to all languages is an arduous task, we suggest that you structure a precise translation for your target audience and let the automatic translation do the heavy lifting on the other languages for you.

### Settings

The Messages App has some optional configurations. Although by default Messages App will translate every string to every available language, it also offers two additional settings that the developer can define: 

- __defaultLanguage__: the default language you want to fallback to (if the value is `*`, all languages will be supported).
- __supportedLanguages__: an array of languages you want to support (if the request to Messages App has a target language not supported, it will translate to the default language).

To set the settings first install the __Messages__ app in your workspace with the command `vtex install vtex.messages@1.x` and then use the vtex CLI to set the app’s settings with the command `vtex settings set <app> <fields> <value>` or set it in the admin page. 

## Translating a Front-end app

To translate a frontend app you will need to use the new MessagesBuilder (v1.x) and ReactBuilder(v3.x). 

Create a folder named `/messages` in your app's root directory. This folder will contain all translations for your app. For example, to support italian language, just add a file called `it.json` with the folling content:

``` it.json
{
   “New user greeting”: “Ciao”
}
```

This is a key-value json where the key is the id used in `<FormattedMessage>` of React Intl and the value is the desired translation. Since translating all strings manually is an arduous process, we recommend using automatic translation for languages not part of your target audience.

To leverage better automatic translations, create a file called `context.json` in your `/messages` folder with the following content:

```context.json
{
   “New user greeting”: “Greeting new user that logged in”
}
```

This file works as a translation disambiguation. For example, the string ‘Ciao’ in italian means both ‘Hello’ and ‘Goodbye’ in english, therefore the description is important since it let's us know the exact meaning for a correct translation. 

<div class="alert alert-warning">
The `context.json` file is necessary and has to contain all translation keys
</div>
 
### Migrating from MessagesBuilder 0.x

If you are already using ReactBuilder (v3.x) and  [MessagesBuilder (v0.x)](https://help.vtex.com/en/announcement/new-way-of-adding-multilingual-support-to-your-vtex-io-app), upgrading is easy. Simply visit your app's `manifest.json`, bump the MessagesBuilder version from `0.x` to `1.x`, and create the `context.json` file. 

If you are using older versions of ReactBuilder, please migrate first to ReactBuilder 3.x.

### Behaviours and best practices

When trying to translate a react app message to a language that does not have a JSON file, __Messages__ sends the value defined in the `en.json` to the automatic translation service. Therefore it is a good practice to have that file in all react apps. If there isn't a english translation, the key itself will be translated, so another good practice is to use human-readable keys (using spaces instead of dots and dashes).

The automatic translations service supports [ICU MessageFormat](http://format-message.github.io/icu-message-format-for-translators/). Since each component of the message is translated independently, the automatic translation is not great, then it is better to have a defined translation for complex ICU messages.
  
If a message has a bracket ('{') __Messages__ will assume it is a ICU Message. So, if a bracket is part of your string and it is not a ICU Message you should escape it (‘\\{‘).
 
## Translating the response of a backend app 

Translating our backend app's response is easy enough that it can be done in two steps:

1. Write `scalar IOMessage` in the first line of the app’s `schema.graphql` file. 
2. Change from `String` to `IOMessage` the data that you want to be translatable.

`IOMessage` is a scalar type built into our GraphQL infrastructure that is used for translatable strings. To learn more on how this scalar type works, please read the IOMessages section

Suppose that you have an graphql app that has the following schema:

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

Now, we want to return a product with translatable name and categories. You'll be working with a schema similar to the one below:

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

You now have fields that are automatically translated to any language. Notice that you don't need to change how your data is returned or stored. 

## Exporting custom translations

It's also possible to export custom translations to __Messages__ via a custom app. This can be handy if you want to translate external api data, like the catalog. 

To export such configurations, create an app with MessagesBuilder 1.x and a `/messages` folder in the app's root directory with the desired translations.

For example, suppose you have a product with the name _Cool Shorts_ and it is being translated automatically to portuguese to _Bermuda legal_, but for some reason you would like to overwrite that. To this end, you should create a Messages app. This app's `manifest.json` is

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
And in its `/messages` folder has the following files

```context.json
{
    “Cool Shorts”: “A clothing item (shorts) that is cool.”
}
```

```pt.json
{
    “Cool Shorts”: “Super Bermuda”
}
```

With that, the product name _Cool Shorts_ will be translated to portuguese according to the translation defined by this app. 


## IOMessage API Reference

The IOMessage type has the following structure:

```
{
   content: String!
   description: String
   from: String
}
```

- `content` is the string that will be translated.

- `description` is the description of the context of the string.

- `from` is the source language of content.

Note that if your GraphQL resolver returns the IOMessage object structure instead of a raw string, __Messages__ would have more information, allowing it to generate an even better translation. On the other hand, if your backend does not provide such info, you can return a raw string and the other parameters will be populated automatically.
