---
title: 'Interacting with MasterData through GraphQL'
id: MbAYQ85gmkX8v5n7QZbvz
status: ARCHIVED
createdAt: 2019-01-16T12:06:57.031Z
updatedAt: 2020-04-08T14:21:48.640Z
publishedAt: 
firstPublishedAt: 2019-01-16T15:29:54.529Z
contentType: tutorial
productTeam: Master Data
author: TnXcuQydAAOuwWACo864E
slugEN: interacting-with-masterdata-through-graphql
locale: en
legacySlug: interacting-with-masterdata-through-graphql
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

This tutorial explores the development of a MasterData resolver, allowing the application to connect, query and filter VTEX's MasterData.


The GraphQL application we will be building will allow querying through Id, outputting the user's firstName, lastName and email.  We will then move on to add filtering and sorting to our queries.

You can find the finished code [here](https://github.com/vtex-apps/masterdata-graphql-guide)


Start off by making sure you have the latest version of the VTEX CLI and cloning the available `graphql getting-started` app.

run `vtex init` and select `graphql getting-started`

![Screen Shot 2019-01-16 at 15.00.29](//images.ctfassets.net/alneenqid6w5/6Ms4swzkPZ7zdyZyTllB78/f4fde23e90b0f4bc9845cbf86fd83431/Screen_Shot_2019-01-16_at_15.00.29.png)

We'll be using it's basic structure to adapt to our needs.


Navigate to the `graphql` folder, and open `schema.graphql`  
Delete everything inside, we'll be building out queries from scratch.

Here we will be defining 2 important structures inside our Schema:  Our DataType and our Query.

As stated above, our DataType will be an object from MasterData containing `firstName`, `lastName`and `email`

Our code should look like this:

```

type CLDataType {
  firstName: String
  lastName: String
  email: String
}


```

Let's start writing our Query structure.
We know it's supposed to get the client information based on the id, and return the object CLDataType we just recently defined.

```

type Query {
  getClientById(
    id: String!
  ): CLDataType

```

Note that `id` is a `String`, not an integer and is mandatory. :)  This will save us some headaches up ahead.

### Writing our `resolver`

Let's move along to `index.ts` where I'll explain how VTEX.IO and the resolver interact.
Delete everything inside since I'll be explaining bit by bit our logic.

We'll startoff by importing a library called `[axios](https://github.com/axios/axios)` that will be handling our HTTP requests.
Add `import axios from axios` to the top of index.ts and add     "axios": "^0.18.0" to your `dependencies` inside `package.json`

All set :)

## Writing our resolver.
The code below creates our Query object.  Notice the `args` and `ctx` parameters.
`Args`is where our previously defined schema.graphql will flow through.
`ctx` contains lot's of VTEX information including your generated authtoken and additional account information.  This is done automatically through VTEX.IO  We then set the content of `ctx.vtex.authToken` inside our headers object used in http requests

We'll be naming our Query function `getClientById`  because that is how we named it inside `schema.graphql` 

```export const resolvers = {
  Query: {
    getClientById: async (_, args, ctx) => {
      console.log(`[get documents by id] with args: ${JSON.stringify(args)} \n and context: ${JSON.stringify(ctx.vtex)}`)
      ## Here we instantiate our http object so we can make requests.
      const http = axios.create({
        headers: {
          'VtexIdclientAutCookie': ctx.vtex.authToken,
        }
      })

```

Moving along let's create our data object by typing the following code: 
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
What our code (in ES6) is saying is "Create me an object data" using the result from this endpoint.  The endpoint is the same one we would use for [searching through MasterData V1 CL entity.](https://documenter.getpostman.com/view/164907/masterdata-api-v102/2TqWsD#8af01160-a283-46fd-adef-cdeb821e1dc1)  We'll then pass inside `args.id` the id of the object we're querying.
    
    
As you might have noticed, we're missing the fields we defined  on our `schema.graphql`.  This will break our contract and produce an ugly error message.  Let's add the `firstName`, `lastName` and ` email`  to our endpoint.

our new data object now looks like this:
`const { data } = await http.get(`http://${ctx.vtex.account}.myvtex.com/api/dataentities/CL/documents/${args.id}?_fields=firstName,lastName,email`)
` 

### Adding MasterData reading permissions
Head on over to `manifest.json`.  Inside `policies`, delete `"vbase-read-write:` and paste in `"READONLY_USER_DS"`

Because our http request is pointing towards `.myvtex` we won't need to add `Outbound Access` in our manifest.json
    
Your policies entry should look like this:
    
```

"policies": [
    {
      "name": "READONLY_USER_DS"
    }
  ]

```

## Fantastic! Let's give our app a try!

Go to your terminal, and run ` vtex link` 
Your app should now start running.

Look for a terminal output containing a URL that ends in ` /graphiql/v1` 

With your Apollo client up and running, it would be useful to find  specific ID to query.

Open up Postman and type in the following search:
`https://{account}.vtexcommercestable.com.br/api/dataentities/CL/search?_fields=id` 

Choose an ID, copy it.  We'll be pasting it in our query.

![Screen Shot 2019-01-16 at 16.14.31](//images.ctfassets.net/alneenqid6w5/2eDkOdvUmisBlGWOIDMU5S/b77a875756854e0977c838494a287c14/Screen_Shot_2019-01-16_at_16.14.31.png)

![Screen Shot 2019-01-16 at 17.34.04](//images.ctfassets.net/alneenqid6w5/3C82QeSWvvPNjAKTd8TKhC/c89275da1bb55836c3bf10f87d72ae37/Screen_Shot_2019-01-16_at_17.34.04.png)

You should now see the output light up on the right. 
Congratulations! You've already acomplished a simple query in record time.

You can look under the hood by switching back to the terminal and seeing GraphQL resolving the queries how you normally would have.
![Screen Shot 2019-01-16 at 16.29.03](//images.ctfassets.net/alneenqid6w5/38KV7YYgHz8xTcsY18ySPf/e6a33fd274c4f40610e47793ff2ca0d3/Screen_Shot_2019-01-16_at_16.29.03.png)


**But what if we want to SEARCH by using all possible filters?**
We will proceed to define a new query structure and create a new resolver to handle the new parameters.

## Searching with Filters
Let's head back to `schema.graphql` to create a new type of Query that will allow us to pass filters.

Type in the following contract:

```
  searchClientWithAllPossibleFilters(
    where: String,
    from: Int,
    to: Int,
  ): [CLDataType]
}
```


Head on over to index.ts

Let's copy the getClientById resolver and rename it accordingly to `searchClientWithAllPossibleFilters`.  We'll be taking arguments from `schema.graphql` and setting them to hardcoded values unless otherwise specified.

 ```searchClientWithAllPossibleFilters: async (_, args, ctx) => {
      const {
        where,
        from = 0,
        to = 10,
      } = args

```

## Adjusting our endpoint to handle filtering

Create a variable `BASE_URL`, copy the endpoint used in our `getClientById` resolver and adapt it by changing `/documents` to `/search` 

The variable should look like this:
```
const BASE_URL = `http://${ctx.vtex.account}.myvtex.com/api/dataentities/CL/search?_fields=firstName,lastName,email`
      
 ```
Now we'll create a variable to contain the `where`  parameter that we will use for interpolation`
```
const WHERE_PARAM = where ? `&_where=(${where})` : ''
```
What the code above does, is a simplified if statement, that adds the `where` parameter to the endpoint if applicable.

And now we add `BASE_URL` and `WHERE_PARAM` together:
```
const FINAL_URL = BASE_URL + WHERE_PARAM
```
We'll now adapt the code we used in resolver `getClientById` to accept `from`,`to` and use the variable `FINAL_URL`  we just declared.

Copy and paste the code below into resolver `searchClientWithAllPossibleFilters`:

Note on the code below that we're passing `from` and `to` inside our `REST-Range` just how we normally would with a traditional GET.
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

## Testing our new resolver with filter support.
Revisit our Apollo client by visiting and type the following underneath our previous query:

Try out our new resolver by returning to the Apollo client and typing in:
```

query{
  searchClientWithAllPossibleFilters{
    firstName
    lastName
    email
  }
}

```
Since we hardcoded the values in our resolver, we should only receive outputs 0-10 :)

## Querying for for users with emails ending in `@gmail.com`**

Make your query like this:

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

And there you have it :) Happy coding!
