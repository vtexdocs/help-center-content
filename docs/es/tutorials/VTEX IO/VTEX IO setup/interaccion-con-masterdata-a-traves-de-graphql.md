---
title: 'Interacción con MasterData a través de GraphQL'
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
locale: es
legacySlug: interaccion-con-masterdata-a-traves-de-graphql
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

Este tutorial explora el desarrollo de un resolver de MasterData, permitiendo que la aplicación se conecte, consulte y filtre el MasterData de VTEX.

La aplicación en GraphQL que vamos a construir permitirá la consulta a través del ID, mostrando el firstName, el lastName y el email del usuario. A continuación, vamos a agregar filtros y clasificación a nuestras consultas.

Usted puede encontrar el código terminado [aquí](https://github.com/vtex-apps/masterdata-graphql-guide)


Comienze asegurándose de tener la versión más reciente de la VTEX CLI y clonando la aplicación `graphql get-started` disponible.

Ejecute el comando `vtex init` y seleccione `graphql get-started`.

![Screen Shot 2019-01-16 at 15.00.29](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/VTEX%20IO/VTEX%20IO%20setup/interaccion-con-masterdata-a-traves-de-graphql_1.png)

Vamos a usar su estructura básica y adaptarla a nuestras necesidades.


Navegue hasta la carpeta `graphql` y abra `schema.graphql`.

Elimine todo lo que hay dentro, ya que crearemos consultas desde cero.

Aquí definiremos dos estructuras importantes dentro de nuestro Schema: nuestro DataType y nuestra Query.

Como se mencionó anteriormente, nuestro DataType será un objeto de MasterData que contiene `firstName`, `lastName` y `email`

Nuestro código debe quedar así:

```

type CLDataType {
  firstName: String
  lastName: String
  email: String
}


```

Vamos a empezar a escribir la estructura de nuestra consulta.
Sabemos que es necesario obtener la información del cliente basada en el ID y devolver el objeto CLDataType que acabamos de definir.

```

type Query {
  getClientById(
    id: String!
  ): CLDataType

```

Note que `id` es una `string`, no un entero, y es obligatorio. :) Esto nos ahorrará algunos dolores de cabeza por delante.

### Escribiendo nuestro `resolver`

Vamos a seguir a `index.ts` donde explicaremos cómo el VTEX IO y el resolver interactúan.

Borre todo dentro, ya que explicaremos cada paso de nuestra lógica.

Comience importando una biblioteca llamada `[axios](https://github.com/axios/axios)` que va a manipular nuestros requests HTTP.
Añada `import axios from axios` a la cima de index.ts y luego añada "axios": "^0.18.0" a sus `dependencies` dentro de `package.json`

Listo :)

## Escribiendo nuestro resolver

El código siguiente crea nuestro objeto Query. Observe los parámetros `args` y `ctx`.

`Args` es por donde el flujo de nuestro schema.graphql previamente definido pasará.

`ctx` contiene mucha información de VTEX, incluyendo su authtoken e información adicional de la cuenta. Esto es hecho automáticamente por VTEX.IO.

A continuación, definimos el contenido del `ctx.vtex.authToken` dentro del objeto de nuestro header utilizado en requests HTTP.

Vamos a nombrar nuestra función de consulta `getClientById` porque es así que la nombramos dentro de `schema.graphql`

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

Siguiendo adelante, vamos a crear nuestro objeto de datos escribiendo el siguiente código:

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

Lo que nuestro código (en ES6) está diciendo es "Cree un objeto de datos" utilizando el resultado de este endpoint. El endpoint es el mismo que utilizaríamos para [hacer una búsqueda en la entidad CL del MasterData V1](https://documenter.getpostman.com/view/164907/masterdata-api-v102/2TqWsD#8af01160-a283-46fd-adef- cdeb821e1dc1). Luego pasaremos al `args.id`, el ID del objeto que estamos consultando.


Como usted debe haber notado, estamos perdiendo los campos que definimos en nuestro `schema.graphql`. Esto romperá nuestro contrato y producirá un mensaje de error desagradable. Vamos a añadir el `firstName`, `lastName` y `email` a nuestro endpoint.

Nuestro nuevo objeto de datos ahora se parece a esto:
`const { data } = await http.get(`http://${ctx.vtex.account}.myvtex.com/api/dataentities/CL/documents/${args.id}?_fields=firstName,lastName,email`)
` 

### Añadir permisos de lectura de MasterData
Vaya al `manifest.json`. Dentro de `policies`, borre `"vbase-read-write:` y pegue `"READONLY_USER_DS"`

Como nuestro request HTTP está apuntando a `.myvtex`, no necesitaremos añadir `Outbound Access` en nuestro manifest.json.

Su entrada policies debe quedar así:

```

"policies": [
    {
      "name": "READONLY_USER_DS"
    }
  ]

```

## Fantástico! ¡Vamos a probar nuestra aplicación!

Vaya a su terminal y ejecute el vtex link.
Su aplicación debe comenzar a ejecutarse.

Busque una salida de terminal que contenga una URL que termine en ` /graphiql/v1`

Con su cliente Apollo en funcionamiento, sería útil encontrar un ID específico para consultar.

Abra el Postman y escriba la siguiente búsqueda:
`https://{account}.vtexcommercestable.com.br/api/dataentities/CL/search?_fields=id` 

Seleccione un ID y cópielo. Vamos a pegarlo en nuestra consulta.

![Screen Shot 2019-01-16 at 16.14.31](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/VTEX%20IO/VTEX%20IO%20setup/interaccion-con-masterdata-a-traves-de-graphql_2.png)

![Screen Shot 2019-01-16 at 17.34.04](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/VTEX%20IO/VTEX%20IO%20setup/interaccion-con-masterdata-a-traves-de-graphql_3.png)

Ahora usted debe ver la luz de salida a la derecha.
Muy bien! Usted realizó su primera consulta simple en tiempo récord.

Volviendo al terminal, usted puede mirar debajo del capó y percibir el GraphQL resolviendo las consultas, como normalmente usted habría hecho.
![Screen Shot 2019-01-16 at 16.29.03](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/VTEX%20IO/VTEX%20IO%20setup/interaccion-con-masterdata-a-traves-de-graphql_4.png)

**Pero ¿y si queremos buscar utilizando todos los filtros posibles?**
Vamos a seguir adelante para definir una nueva estructura de consulta y crear un nuevo resolver para manejar los nuevos parámetros.

## Búsqueda con filtros
Vamos a volver al `schema.graphql` para crear un nuevo tipo de consulta que nos permitirá pasar filtros.

Escriba el siguiente contrato:

```
  searchClientWithAllPossibleFilters(
    where: String,
    from: Int,
    to: Int,
  ): [CLDataType]
}
```


Vaya a index.ts

Vamos a copiar el resolver getClientById y cambiar el nombre de acuerdo con `searchClientWithAllPossibleFilters`. Vamos a recibir argumentos del `schema.graphql` y establecerlos con valores hardcoded, a menos que se especifique de otra manera.

```searchClientWithAllPossibleFilters: async (_, args, ctx) => {
      const {
        where,
        from = 0,
        to = 10,
      } = args

```

## Ajuste de nuestro endpoint para manejar filtros

Cree una variable `BASE_URL`, copie el endpoint utilizado en nuestro resolver `getClientById` y adaptelo cambiando `/documents` a `/search`.

La variable debe quedar así:
```
const BASE_URL = `http://${ctx.vtex.account}.myvtex.com/api/dataentities/CL/search?_fields=firstName,lastName,email`
      
```
 
Ahora vamos a crear una variable para guardar el parámetro `where` que usaremos para interpolación.
```
const WHERE_PARAM = where ? `&_where=(${where})` : ''
```

Lo que el código anterior hace es una instrucción if simplificada, que añade el parámetro `where` al endpoint, si procede.

Y ahora agregamos `BASE_URL` y `WHERE_PARAM`:
```
const FINAL_URL = BASE_URL + WHERE_PARAM
```

Vamos a adaptar el código que usamos en el resolver `getClientById` para aceptar `from`, `to` y usar la variable `FINAL_URL` que acabamos de declarar.

Copie y pegue el siguiente código en el resolver `searchClientWithAllPossibleFilters`:

Note en el siguiente código que estamos pasando `from` y `to` dentro de nuestro `REST-Range`, exactamente como lo haríamos con un GET tradicional.
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

## Probando nuestro nuevo resolver con soporte de filtro

Pruebe nuestro nuevo resolver volviendo al cliente Apollo y escribiendo:
```

query{
  searchClientWithAllPossibleFilters{
    firstName
    lastName
    email
  }
}

```

Como codificamos los valores en nuestro resolver, debemos recibir sólo los outputs 0-10 :)

## Consultando usuarios con correos electrónicos que terminan en `@gmail.com`**

Haga su consulta así:

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

![Screen Shot 2019-01-16 at 17.23.00](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/VTEX%20IO/VTEX%20IO%20setup/interaccion-con-masterdata-a-traves-de-graphql_5.png)

Y esto es todo :) Happy coding!
