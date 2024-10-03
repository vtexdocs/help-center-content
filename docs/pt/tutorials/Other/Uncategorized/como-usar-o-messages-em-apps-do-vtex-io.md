---
title: 'Como usar o Messages em apps do VTEX IO '
id: tfvQmmt8Ozr95nLnQRQT1
status: ARCHIVED
createdAt: 2019-02-08T16:54:01.853Z
updatedAt: 2020-03-13T21:24:58.464Z
publishedAt: 
firstPublishedAt: 2019-02-08T17:00:10.078Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slugEN: how-to-use-messages-on-your-io-apps
locale: pt
legacySlug: como-usar-o-messages-em-apps-do-vtex-io
subcategoryId: 54gbzsku02c4bKmgFbp3v3
---

O VTEX IO possui um serviço de internacionalização embutido chamado __Messages__. Neste tutorial você vai aprender como internacionalizar seu app de front end e as respostas dos seu back end. 

>ℹ️ Essa funcionalidade é disponível apenas para aplicativos react/graphql/typedql.

## Tradução do Messages

Muitos atores podem contribuir com a tradução, como usuários, aplicativos e a tradução automática. O __Messages__ agrega todos os serviços de tradução da plataforma. Dessa forma, dado uma mensagem para traduzir, o Messages primeiro tentará traduzir pelo conteúdo definido pelo usuário, depois pelas traduções dos aplicativos (definidas na pasta `/messages`) e, finalmente, pelo sistema de tradução automática.

Como dito acima, aplicativos também podem contribuir com as traduções. Traduzir um aplicativo para todos os idiomas é uma tarefa difícil, portanto, sugerimos que você defina precisamente as traduções para o seu público alvo e deixe a tradução automática fazer o trabalho mais pesado.

## Configurações

O Messages App possui algumas configurações opcionais. A princípio, toda string será traduzida para todas as linguas, mas existem duas variáveis que podem ser definidas:

- __defaultLanguage__: é a língua padrão (se o valor for `*`, todas as linguas serão suportadas).
- __supportedLanguages__: é o vetor de línguas que você quer suportar (se a request para o Messages App possui uma lingua destino não suportada, a tradução será feita para a língua padrão).

Para definir as configurações primeiro instale o app __Messages__ em seu workspace com o comando `vtex install vtex.messages@1.x` e então use a CLI da vtex para configurar o app com o comando `vtex settings set <app> <fields> <value>` ou configure pela página de admin. 

## Traduzindo um app de front-end 

Para traduzir um aplicativo de front end você terá que o usar o novo MessagesBuilder (v1.x) e ReactBuilder(v3.x). 

Crie uma pasta chamada  `/messages` no diretório raiz de sua aplicação. Essa pasta conterá todas as traduções de seu app. Por exemplo, para suportar italiano, adicione um arquivo com o nome `it.json` com o seguinte conteúdo:

``` it.json
{
   “New user greeting”: “Ciao”
}
```

O conteúdo acima é um json, chave-valor, em que a chave é o id usado no `<FormattedMessage>` do React Intl e o valor é a tradução desejada. Como traduzir todas as strings para todas as linguas é uma tarefa difícil, que consome muito tempo, recomendamos que a tradução automática seja usada para linguas menos importantes de acordo com o seu público-alvo.

Para obter uma tradução automática mais precisa, crie um arquivo chamado `context.json` na sua pasta `/messages` com o seguinte conteúdo:

```context.json
{
   “New user greeting”: “Greeting new user that logged in”
}
```

Esse arquivo funciona para remover as possíveis ambiguidades das traduções. Por exemplo, a palavra 'Ciao' em italiano significa _Oi_ e _Tchau_ ao mesmo tempo em português . A descrição, portanto, é importante para saber o significado exato e ter uma tradução correta. 

>⚠️ O arquivo `context.json` é obrigatório e precisa conter todas as chaves de traduções.

### Migrando do MessagesBuilder 0.x

Se você já está usando o ReactBuilder (v3.x) e o [MessagesBuilder (v0.x)](https://help.vtex.com/pt/announcement/nova-forma-de-organizar-os-arquivos-de-traducao-em-sua-app-io), a migração é fácil: visite o 
`manifest.json`, aumente a versão do MessagesBuilder de `0.x` para `1.x` e crie o arquivo `context.json`.

Se você está usando versões antigas do ReactBuilder, migre primeiramente para o ReactBuilder 3.x.

### Comportamentos e boas práticas

Ao traduzir uma mensagem de um aplicativo react para uma língua que não possui um arquivo JSON, o __Messages__ envia o valor definido em `en.json` para o serviço de tradução automática. Portanto, é uma boa prática ter este arquivo em todos os aplicativos react. Caso não exista uma tradução em inglês, a própria chave será traduzida, logo, uma outra boa prática é usar chaves com espaços ao invés de pontos ou traços.
  
O serviço de tradução automática suporta [ICU MessageFormat](http://format-message.github.io/icu-message-format-for-translators/). No entanto, uma vez que cada componente da mensagem é traduzido independentemente, a tradução automática não será de excelência, sendo melhor definir traduções específicas para mensagens ICU complexas.
  
Se uma mensagem possui chaves ('{'), o __Messages__ assume que é uma mensagem ICU. Portanto, se chaves são parte de sua string, e ela não é do tipo ICU você deve usar '\\{' e '\\{'.

## Traduzindo a resposta de uma app back-end  

Traduzir a resposta dos nossos apps back-end é fácil e rápido. São apenas dois passos:

1. Escrever `scalar IOMessage` na primeira linha do arquivo `schema.graphql` do app.
2. Alterar de `String` para `IOMessage` os dados que você quer que sejam traduzidos.

`IOMessage` é um tipo escalar embutido em nossa infraestrutura de GraphQL, usado para strings traduzíveis. Para aprender melhor como esse tipo funciona, veja a seção sobre IOMessages.

Suponha que você tenha um aplicativo GraphQL com a seguinte estrutura:

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

Agora, desejamos retornar um produto com nome e categorias traduziveis. Usaríamos, então, uma estrutura similar com a seguinte:

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

Agora você tem campos que são automaticamente traduzidos para qualquer idioma. Note que você não precisa modificar como seus dados são devolvidos ou armazenados.

## Exportando traduções customizadas

É possível exportar traduções customizadas para o __Messages__ via um app de customização. Isso pode ser um facilitador se você deseja traduzir dados de uma API externa, como a de catálogo. 

Para exportar tais configurações, crie um app com o MessagesBuilder 1.x e uma pasta `/messages` no diretório raiz do app com as traduções desejadas. 

Por exemplo, suponha que você tenha um produto em sua loja com o nome _Cool Shorts_. A tradução automática para o português o define como _Bermuda Legal_, mas você gostaria de sobrescrever o termo. Para essa finalidade, você deve criar um Messages app. O `manifest.json` desse app é:

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
E na pasta `/messages` os seguintes arquivos:

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

Com isso, o nome do produto __Cool Shorts__ será traduzido para o português de acordo com a tradução definida pelo app. 


## Referência da API IOMessage

O tipo IOMessage tem a seguinte estrutura:

```
{
   content: String!
   description: String
   from: String
}
```

- `content` é a string que será traduzida.

- `description` é a descrição do contexto da string.  

- `from` é a língua de origem do conteúdo.

Note que, se seu _resolver_ de GraphQL devolver o objeto IOMessage ao invés de uma string, o __Messages__ teria mais informações para traduzir o conteúdo, gerando uma tradução ainda melhor. Apesar disso, se seu backend não prover tais informações, você pode devolver apenas uma string e os outros parâmetros serão populados automaticamente.


