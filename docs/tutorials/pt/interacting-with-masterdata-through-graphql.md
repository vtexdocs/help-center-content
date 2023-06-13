---
title: Interagindo com o MasterData por meio do GraphQL
id: MbAYQ85gmkX8v5n7QZbvz
status: DRAFT
createdAt: 2019-01-16T12:06:57.031Z
updatedAt: 2020-04-08T14:21:48.640Z
publishedAt: 
firstPublishedAt: 2019-01-16T15:29:54.529Z
contentType: tutorial
productTeam: Master Data
author: TnXcuQydAAOuwWACo864E
slug: interagindo-com-o-masterdata-por-meio-do-graphql
legacySlug: interacting-with-masterdata-through-graphql
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Este tutorial explora o desenvolvimento de um resolver do MasterData, permitindo que o aplicativo se conecte, consulte e filtre o MasterData da VTEX.

A aplicação em GraphQL que vamos construir permitirá a consulta por meio do ID, exibindo o firstName, o lastName e o email do usuário. Em seguida, vamos adicionar filtragem e classificação às nossas consultas.

Você pode encontrar o código acabado [aqui](https://github.com/vtex-apps/masterdata-graphql-guide).

Comece certificando-se de ter a versão mais recente do VTEX CLI e clonando o aplicativo `graphql getting-started` disponível.

Execute o comando `vtex init` e selecione `graphql getting-started`.

![Screen Shot 2019-01-16 at 15.00.29](//images.ctfassets.net/alneenqid6w5/6Ms4swzkPZ7zdyZyTllB78/f4fde23e90b0f4bc9845cbf86fd83431/Screen_Shot_2019-01-16_at_15.00.29.png)

Vamos usar sua estrutura básica para adaptá-la às nossas necessidades.

Navegue até a pasta `graphql` e abra `schema.graphql`.

Exclua tudo que estiver lá dentro, pois criaremos consultas a partir do zero.

Aqui definiremos 2 estruturas importantes dentro do nosso Schema: nosso DataType e nossa Query.

Como dito acima, nosso DataType será um objeto do MasterData contendo `firstName`, `lastName` e `email`

Nosso código deve ficar assim:

```

type CLDataType {
  firstName: String
  lastName: String
  email: String
}


```

Vamos começar a escrever a estrutura da nossa query.
Sabemos que é necessário obter as informações do cliente com base no ID e retornar o objeto CLDataType que acabamos de definir.

```

type Query {
  getClientById(
    id: String!
  ): CLDataType

```

Note que `id` é uma `string`, não um inteiro, e é obrigatório. :) Isso nos poupará algumas dores de cabeça à frente.

### Escrevendo nosso `resolver`

Vamos seguir para `index.ts` onde explicaremos como o VTEX.IO e o resolver interagem.

Apague tudo lá dentro, já que vou explicar cada etapa da nossa lógica.

Comece importando uma biblioteca chamada `[axios](https://github.com/axios/axios)` que vai manipular nossos requests HTTP.
Adicione `import axios from axios` ao topo de index.ts e depois adicione "axios": "^0.18.0" às suas `dependencies` dentro de `package.json`

Tudo pronto :)

## Escrevendo nosso resolver

O código abaixo cria nosso objeto Query. Observe os parâmetros `args` e `ctx`.

`Args` é por onde o fluxo do nosso schema.graphql previamente definido passará.

`ctx` contém muitas informações da VTEX, incluindo seu authtoken e informações adicionais da conta. Isso é feito automaticamente pelo VTEX.IO.

Em seguida, definimos o conteúdo do `ctx.vtex.authToken` dentro do objeto do nosso header usado em requests HTTP

Vamos nomear nossa função de consulta `getClientById` porque é assim que a nomeamos dentro de `schema.graphql`

```export const resolvers = {
  Query: {
    getClientById: async (_, args, ctx) => {
      console.log(`[get documents by id] with args: ${JSON.stringify(args)} \n and context: ${JSON.stringify(ctx.vtex)}`)
      ## Aqui instanciamos nosso objeto HTTP para podermos fazer requests.
      const http = axios.create({
        headers: {
          'VtexIdclientAutCookie': ctx.vtex.authToken,
        }
      })

```

Seguindo em frente, vamos criar nosso objeto de dados escrevendo o seguinte código:

```
try {
        const { data } = await http.get(`http://${ctx.vtex.account}.myvtex.com/api/dataentities/CL/documents/${args.id}')
        console.log(`[get document by id] MD response data: ${JSON.stringify(data)}`)
        return data
      } catch (e) {
        console.error(e)
        throw e
      }
    },
    
```

O que nosso código (no ES6) está dizendo é "Crie um data object" usando o resultado desse endpoint. O endpoint é o mesmo que usaríamos para [fazer uma busca na entidade CL do MasterData V1](https://documenter.getpostman.com/view/164907/masterdata-api-v102/2TqWsD#8af01160-a283-46fd-adef-cdeb821e1dc1). Depois passaremos para o `args.id`, o ID do objeto que estamos consultando.
    

Como você deve ter notado, estamos perdendo os campos que definimos em nosso `schema.graphql`. Isso quebrará nosso contrato e produzirá uma mensagem de erro desagradável. Vamos adicionar o `firstName`, `lastName` e ` email` ao nosso endpoint.

Nosso novo objeto de dados agora se parece com isso:
`const { data } = await http.get(`http://${ctx.vtex.account}.myvtex.com/api/dataentities/CL/documents/${args.id}?_fields=firstName,lastName,email`)
` 

### Adicionando permissões de leitura do MasterData
Vá para o `manifest.json`. Dentro de `policies`, delete `"vbase-read-write:` e cole `"READONLY_USER_DS"`

Como o nosso request HTTP está apontando para `.myvtex`, não precisaremos adicionar `Outbound Access` em nosso manifest.json
    
Sua entrada policies deve ficar assim:
    
```

"policies": [
    {
      "name": "READONLY_USER_DS"
    }
  ]

```

## Fantástico! Vamos testar nosso aplicativo!

Vá para o seu terminal e execute o vtex link. 
Seu aplicativo agora deve começar a ser executado.

Procure por uma saída de terminal contendo uma URL que termine em ` /graphiql/v1`

Com o seu cliente Apollo em funcionamento, seria útil encontrar um ID específico para consultar.

Abra o Postman e digite a seguinte pesquisa:
`https://{account}.vtexcommercestable.com.br/api/dataentities/CL/search?_fields=id` 

Escolha um ID e copie-o. Vamos colá-lo em nossa consulta.

![Screen Shot 2019-01-16 at 16.14.31](//images.ctfassets.net/alneenqid6w5/2eDkOdvUmisBlGWOIDMU5S/b77a875756854e0977c838494a287c14/Screen_Shot_2019-01-16_at_16.14.31.png)

![Screen Shot 2019-01-16 at 17.34.04](//images.ctfassets.net/alneenqid6w5/3C82QeSWvvPNjAKTd8TKhC/c89275da1bb55836c3bf10f87d72ae37/Screen_Shot_2019-01-16_at_17.34.04.png)

Agora você deve ver a luz de output à direita.
Parabéns! Você realizou sua primeira consulta simples em tempo recorde.

Voltando ao terminal, você pode olhar sob o capô e perceber o GraphQL resolvendo as consultas, como normalmente você teria feito.
![Screen Shot 2019-01-16 at 16.29.03](//images.ctfassets.net/alneenqid6w5/38KV7YYgHz8xTcsY18ySPf/e6a33fd274c4f40610e47793ff2ca0d3/Screen_Shot_2019-01-16_at_16.29.03.png)

**Mas e se quisermos pesquisar usando todos os filtros possíveis?**
Vamos seguir em frente para definir uma nova estrutura de consulta e criar um novo resolver para lidar com os novos parâmetros.

## Pesquisando com Filtros
Vamos voltar ao `schema.graphql` para criar um novo tipo de consulta que nos permitirá passar filtros.

Escreva o seguinte contrato:

```
  searchClientWithAllPossibleFilters(
    where: String,
    from: Int,
    to: Int,
  ): [CLDataType]
}
```


Vá para index.ts

Vamos copiar o resolver getClientById e renomeá-lo de acordo com `searchClientWithAllPossibleFilters`. Vamos receber argumentos do `schema.graphql` e defini-los com valores hardcoded, a menos que especificado de outra forma.

```searchClientWithAllPossibleFilters: async (_, args, ctx) => {
      const {
        where,
        from = 0,
        to = 10,
      } = args

```

## Ajustando nosso endpoint para lidar com filtros

Crie uma variável `BASE_URL`, copie o endpoint usado em nosso resolver `getClientById` e adapte-o mudando `/documents` para `/search`

A variável deve ficar assim:
```
const BASE_URL = `http://${ctx.vtex.account}.myvtex.com/api/dataentities/CL/search?_fields=firstName,lastName,email`
      
```
 
Agora vamos criar uma variável para guardar o parâmetro `where` que usaremos para interpolação.

```
const WHERE_PARAM = where ? `&_where=(${where})` : ''
```

O que o código acima faz é uma instrução if simplificada, que adiciona o parâmetro `where` ao endpoint, se aplicável.

E agora adicionamos `BASE_URL` e `WHERE_PARAM` juntos:

```
const FINAL_URL = BASE_URL + WHERE_PARAM
```

Vamos adaptar o código que usamos no resolver `getClientById` para aceitar `from`, `to` e usar a variável `FINAL_URL` que acabamos de declarar.

Copie e cole o código abaixo no resolver `searchClientWithAllPossibleFilters`:

Note no código abaixo que estamos passando `from` e `to` dentro de nosso `REST-Range`, exatamente como faríamos com um GET tradicional.
```

  console.log(`[searching for specified clients ] with args: ${JSON.stringify(args)} \n and context: ${JSON.stringify(ctx.vtex)}`)
      const http = axios.create({
        headers: {
          'REST-Range': `resources=${from}-${to}`,
          'VtexIdclientAutCookie': ctx.vtex.authToken,
        }
      })
      try {
        const { data } = await http.get(FINAL_URL)
        console.log(`[search for specified clients] MD response data: ${JSON.stringify(data)}`)
        return data
      } catch (e) {
        console.error(e)
        throw e
```

## Testando nosso novo resolver com suporte a filtro

Experimente nosso novo resolver retornando ao cliente Apollo e digitando:
```

query{
  searchClientWithAllPossibleFilters{
    firstName
    lastName
    email
  }
}

```

Como codificamos os valores em nosso resolver, devemos receber apenas os outputs 0-10 :)

## Consultando usuários com e-mails que terminam em `@gmail.com`**

Faça sua consulta assim:

```

query{
  searchClientWithAllPossibleFilters(
    where: "email=*@gmail.com*",
    to:4
  ){
    firstName
    lastName
    email
  }
}

```

![Screen Shot 2019-01-16 at 17.23.00](//images.ctfassets.net/alneenqid6w5/6Q06UiMGSQVeJjQKpLuant/92de5aeaf26a41b1cffa22603391a834/Screen_Shot_2019-01-16_at_17.23.00.png)

E é isso :)  Happy coding!
