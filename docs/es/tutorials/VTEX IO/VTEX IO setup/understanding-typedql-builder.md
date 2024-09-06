---
title: '¿Qué es TypedQL Builder?'
id: 4i3PCEkW6nmiPsUiM4N1qF
status: ARCHIVED
createdAt: 2019-03-11T15:24:00.191Z
updatedAt: 2020-03-13T21:24:58.105Z
publishedAt: 
firstPublishedAt: 2019-03-11T15:27:46.068Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slug: entendiendo-typedql-builder
locale: es
legacySlug: typeql-builder
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

# TypedQL Builder

TypedQL Builder es una feature del VTEX IO para el desarrollo de proyectos de backend.

Similar al GraphQL Builder, es una alternativa a las aplicaciones de backend escritas en GraphQL + TypeScript. Se propone ser más moderno y genérico, utilizando sólo archivos de Declaración de Tipos de TypeScript para crear la interfaz de GraphQL automáticamente.

De este modo, los proyectos basados en TypeScript se benefician ampliamente por el uso de este Builder. Al desarrollar un proyecto de backend usando TypeScript + GraphQL, el desarrollador debe escribir un conjunto de tipos de TypeScript para tipificar el comportamiento de sus _resolvers_ pero al mismo escribir GraphQL Schemas con la GraphQL SDL.

Con el TypedQL Builder, el desarrollador debe escribir sólo los tipos de TypeScript. El GraphQL Schema se genera automáticamente. Algunas ventajas de esta feature son:

### 1. Unificación de la descripción del protocolo

Utilizando el GraphQL Builder, cualquier modificación en la interfaz del Schema (TypeScript) debe reflejarse en una actualización de TypeScript (Schema). Esto facilita la aparición de fallas en el proceso, lo que no sucede si el Schema es automáticamente generado por el TypedQL Builder.

### 2. Reducción de código

Esta misma condición lleva al desarrollador a escribir la misma interfaz dos veces. Utilizando la transpilación automática de TypedQL usted reduce su esfuerzo por la mitad además de no tener que preocuparse de aprender la sintaxis de un nuevo lenguaje.

### 3. Estímulo a la tipificación, desestímulo a la inconsistencia

La necesidad de escribir interfaces TypeScript para los resolvers estimula su tipificación adecuada y automáticamente de acuerdo con la descripción GraphQL. Esto dificulta la ocurrencia de inconsistencias como el uso de GraphQL Fields como `Nullable` sin necesidad.

### 4. Acceso a las features de TypeScript no permitidas en GraphQL

Esto permite describir Schemas complejos de manera mucho más fácil y rápida. Algunos ejemplos de features aprovechables de TypeScript son:

- __Herencia__: Crear GraphQL Types con aprovechamiento de código;
- __Unions de unions__: Combinar TypeScript Unions entre sí para generar GraphQL Unions de manera escalable;
- __Unions de enums__: Combinar TypeScript Enums con unions para generar GraphQL Enums de manera escalable;
- __Import y Export__: Divida sus definiciones en varios archivos, exponga y busque sólo lo que sea necesario.

## Funcionamiento básico

Para utilizar el TypedQL Builder basta con añadirlo a la lista de Builders de su `manifest.json` como:

```js
//[...]
"builders": {
  "typedql": "0.x"   
}
//[...]
```

El Builder buscará una carpeta `typedql/` ubicada en la raíz de su proyecto. Dentro de ella debe haber un archivo `schema.ts` que es el punto de entrada para las definiciones `Query` y `Mutation` de su aplicación. Para un clásico **Hello World!** ponga en el `schema.ts`:

```ts
/** @graphql ID */
type ID = string

interface World {
    id: ID
}
interface Query {
    hello: World
}
```
Lo que debe generar el Schema:

```gql
type World {
    id: ID!
}

type Query {
    hello: World!
}

schema {
    query: Query
}
```

El TypedQL Builder siempre buscará la declaración de las interfaces `Query` y `Mutation` en `schema.ts`, a partir de la cual generará los tipos Query y Mutation estándares de la GraphQL SDL. El TypedQL Builder sólo emite tipos que estén de alguna manera utilizados por `Query` y `Mutation`, sea como _Field Resolver_, como propiedad, parámetro en lista de argumentos, retorno de función, etc.

Es posible dividir su _Type Declarations_ en múltiples archivos, usando `export` para exponer a archivos externos y `import` para importar archivos externos.
Para hacer que el TypedQL Builder ignore alguna línea de código, comentela como comentarios de línea `//`.

## TypedQL Migrator

VTEX desarrolló una aplicación de ejemplo llamada **TypedQL Migrator** para ayudarle en la prueba rápida de conversión de declaraciones de tipo TypeScript a GraphQL Schema.

Para utilizarla, basta con tener la VTEX CLI instalada y escribir en la línea de comandos:

```sh
vtex install vtex.typedql-migrator
```

Esto debe instalar la aplicación en el workspace actual y usted tendrá acceso a la herramienta en:

`<workspace>--<account>.myvtex.com/typedqlmigrator`

## Features

GraphQL SDL y TypeScript Type Declarations tienen intersección grande pero no total. Los conceptos propios de GraphQL que no tienen un equivalente intuitivo en TypeScript son informados al transpilador utilizando **JSDoc** y la anotación especial `@graphql <Marcación>`. La tabla muestra las tags comprendidas por el transpilador:

| Concepto GraphQL | Marcación JSDoc |
| ---------------- |:-------------:|
| ID                | `@graphql ID` |
| Int               | `@graphql Int` |
| Float             | `@graphql Float`|
| Input             | `@graphql Input`|
| Field Directives  | `@graphql Directives`|

#### GraphQL Scalars

Hay 5 tipos primitivos en GraphQL: `ID`,` Int`, `Float`, `Boolean` y `String`. Sus equivalentes de TypeScript, por supuesto, son `string`, `number`, `number`, `boolean` y `string`. Esto genera ciertas ambigüedades que necesitan ser removidas con **JSDoc** para obtener el resultado deseado. Por ejemplo:

```
/** @graphql ID */
type ID = string
/** @graphql Int */
type Int = number
/** @graphql Float */
type Float = number
interface Foo {
    a: ID,
    b: number,
    c: Int,
    d: Float,
    e: boolean,
    f: string
}
```
Se convierte a:

```
type Foo {
    a: ID!
    b: Float!
    c: Int!
    d: Float!
    e: Boolean!
    f: String!
}
```

#### GraphQL Object Types, Fields y Arguments

Como se ha mostrado, un GraphQL Type puede ser descrito por una TypeScript Interface. Las propiedades de una interfaz son `Required` de forma predeterminada. Para eliminar este comportamiento es necesario realizar la unión del tipo con `null` o `undefined` o, en el caso de listas de argumentos y propiedades de interfaces, con el token `?`.

```ts
/** @graphql ID */
type ID = string
/** @graphql Int */
type Int = number

interface IDCollection {
    id1: ID
    id2: ID | undefined
    id3: ID | null
    id4?: ID
    getId(which: Int): ID | undefined
    getIds(from: Int, to: Int): (ID | null)[] | null
    getNullableIds: (ID | undefined)[]
    getNonNullableIds(from: Int, to: Int | null): ID[] | null
}
```
Es transpilado para:

```gql
type IDCollection {
    id1: ID!
    id2: ID
    id3: ID
    id4: ID
    getId(which: Int!): ID
    getIds(from: Int!, to: Int!): [ID]
    getNullableIds: [ID]!
    getNonNullableIds(from: Int!, to: Int): [ID!]
}
```

#### Herencia
Los tipos pueden combinarse entre sí sin discriminación. También se puede utilizar herencia para combinar Types aunque GraphQL no admite este recurso.

```ts
/** @graphql Int */
type Int = number

interface Tire {
    diameter: number,
    material: string
}

interface Vehicle {
    numTires: Int
    getTires: Tire[]
}

interface MotorCycle extends Vehicle {
    hasSideCar: boolean
}

interface Car extends Vehicle {
    getLeftTires: Tire[]
    getRightTires: Tire[]
}
```

Crea:

```
type Tire {
  diameter: Float!
  material: String!
}

type Vehicle {
  getTires: [Tire!]!
  numTires: Int!
}

type Car {
  getLeftTires: [Tire!]!
  getRightTires: [Tire!]!
  getTires: [Tire!]!
  numTires: Int!
}

type MotorCycle {
  getTires: [Tire!]!
  hasSideCar: Boolean!
  numTires: Int!
}
```

#### GraphQL Interfaces

Aunque TypeScript no admite herencia múltiple, admite interfaces, así como GraphQL. Para que un tipo se emita como una GraphQL Interface, sin embargo, no puede ser propiedad de alguna TypeScript Interface o retorno de algún método. En ese caso el TypedQL percibe automáticamente la necesidad de que el tipo sea concreto y emite un GraphQL Type apropiado.

```ts
type Noise {
  duration: number
  intensity: number
}
interface Noisy {
    makeNoise: Noise
}
interface Dirty {
    dirtyLevel: number
}
interface Car extends Noisy, Dirty {
    gasLevel: number
}

interface Query {
    getCar: Car
}
```
```gql
type Noise {
  duration: Float!
  intensity: Float!
}
interface Noisy {
    makeNoise: Noise!
}
interface Dirty {
    dirtyLevel: Float!
}
type Car {
    dirtyLevel: DirtyLevel!
    gasLevel: Float!
    makeNoise: Noise!
}
type Query {
    getCar: Car!
}
```

#### GraphQL Enums

TypeScript Enums son directamente equivalentes a GraphQL Enums:

```ts
enum DirtyLevel {
    LOW,
    MEDIUM,
    HIGH
}
interface Dirty {
    dirtyLevel: DirtyLevel
}
```
```
enum DirtyLevel {
    LOW
    MEDIUM
    HIGH
}
type Dirty {
    dirtyLevel: DirtyLevel!
}
```

No se pueden combinar Enums en GraphQL, pero el TypedQL Builder es capaz de reconocer uniones de enums, creando combinaciones automáticamente:

```ts
declare enum ColoresCalientes {
    ROJO,
    AMARILLO,
}
declare enum ColoresFrias {
    AZUL,
    VERDE,
}
type Colores = ColoresCalientes | ColoresFrias
```
```gql
enum ColoresCalientes {
    ROJO,
    AMARILLO
}
enum ColoresFrias {
    AZUL,
    VERDE
}
enum Colores {
    ROJO,
    AMARILLO,
    AZUL,
    VERDE,
}
```

#### GraphQL Unions

GraphQL acepta la unión de GraphQL Objects como un solo tipo, como TypeScript. Sin embargo, Union de TypeScript se puede interpretar de varias formas dependiendo de los objetos implicados y se puede interpretar fácilmente. Vea la sección **Disclaimers** para ejemplos. En general, GraphQL Unions son válidas entre Object Types.

```ts
/** @graphql ID */
type ID = string
interface Book {
    id: ID
}
interface Magazine {
    id: ID
}
type SellItem = Book | Magazine
interface Bookstore {
    sell(id: ID) => SellItem
}
```

Transpila para:

```
type Book {
    id: ID!
}
type Magazine {
    id: ID!
}
union SellItem = Book | Magazine
type Bookstore {
    sell(id: ID!): SellItem!
}
```

#### GraphQL Field Directives

Directivas son una poderosa feature de GraphQL que actualmente no tiene equivalente en TypeScript. TypedQL Builder acepta la descripción de Field Directives a través de **JSDoc** según el ejemplo abajo. Todas las JSDoc Tags descritas debajo de `@graphql Directives` se interpretan como GraphQL Directives. Este recurso es muy importante, por ejemplo, para hacer uso de los recursos del Apollo GraphQL.

```ts
interface Store {
    /** @graphql Directives
    *   @cacheControl (scope: PUBLIC, maxAge: 14400)
    *   @filter (pattern: "vtex-io")
    */
    product(slug: string): Product
    /** @graphql Directives
    *   @smartcache
    *   @filter (pattern: "vtex-io")
    */
    products: Product[]
}
```
```gql
type Store {
    product(slug: String!): Product! @cacheControl(scope:PUBLIC, maxAge:14400)
    products: [Product!]! @smartcache @filter(pattern:"vtex-io")
}
```

En la actualidad, TypedQL Builder acepta como argumentos de Directives **Named Type**, **String Literai**, **Int**, **Float** y **Boolean** de GraphQL SDL.

#### GraphQL Input

GraphQL Input Objects se diferencian de Type Objects porque sus Fields no pueden tener listas de argumentos y pueden ser utilizados sólo como argumentos de un Type Object Field. No hay un concepto restrictivo similar en TypeScript y por eso hay que anotar interfaces para avisar al compilador que una interfaz es un `input`.

```ts
/** @graphql input */
interface SomeInput {
    someValue: boolean
}
interface Foo {
    bar(ham: SomeInput) => boolean
}
```
```gql
input SomeInput {
    someValue: Boolean!
}
type Foo {
    bar(ham: SomeInput!): Boolean!
}
```

## Disclaimers

Hay una gran intersección entre escribir TypeScript Type Declarations y GraphQL SDL, por lo que debe ser intuitivo el equivalente TypeScript de un GraphQL Schema. Sin embargo, hay algunos casos de uso y conceptos que pueden ser contra-intuitivos.

#### No existe alias en GraphQL SDL

Aunque en TypeScript es posible crear alias de tipos primitivos, como por ejemplo:

```ts
type StringAlias = string
```

Esto no es una feature soportada en GraphQL y esto se interpreta en realidad como la declaración de un **Custom Scalar**, donde la implementación interna del backend trata `StringAlias` como una `string`.
```gql
scalar StringAlias
```

Para los tipos no primitivos, sin embargo, es posible realizar algo equivalente a un alias utilizando `union`, por lo que:

```ts
interface SomeType {
    foo: boolean!
}
type SomeTypeAlias = SomeType
```

Se traduce a:

```gql
type SomeType {
    foo: Boolean
}
union SomeTypeAlias = SomeType
```

Sin embargo, por comodidad, TypedQL Builder reconoce la unión de Scalars y Object Types con `null` y `undefined` como Syntatic Sugar para NotNull Wrapping de GraphQL. Es decir:

```ts
type NullableString = string | null
interface Return {
    content: NullableString
}
type NullableReturn = Return | undefined
interface Foo {
    bar: NullableReturn
}
```

Se interpreta como:

```gql
type Return {
    content: String
}
type Foo {
    bar: Return
}
```
#### Propiedades de Interfaces, parámetros y retornos de funciones se emiten Required de forma predeterminada

A pesar de que, en GraphQL SDL, Fields y Arguments no son requeridos de forma predeterminada y usted necesita agregar `!` Para hacerlos Required, el comportamiento en TypeScript es exactamente lo contrario. Si una función se establece para recibir 3 parámetros, ella **requiere** que usted agregue tres parámetros y si una Interfaz tiene cierta propiedad, ella **requiere** que esa propiedad no sea `undefined`.

#### Unions en TypeScript no necesitan ser nombradas como son en GraphQL

Es decir:

```ts
/** @graphql ID */
type ID = string
interface A {
    id: ID
}
interface B {
    id: ID
}
interface C {
    c: A | B
}
```

Es válido en TypeScript pero no lo es en GraphQL SDL. Para obtener el comportamiento deseado tendríamos que hacer:

```ts
/** @graphql ID */
type ID = string
interface A {
    id: ID
}
interface B {
    id: ID
}
type UnionAB = A | B
interface C {
    c: UnionAB
}
```
Para obtener:

```gql
type A {
    id: ID!
}
type B {
    id: ID!
}
union UnionAB = A | B
type C {
    c: UnionAB!
}
```

#### GraphQL no admite Types vacíos

En TypeScript es posible crear Interfaces sin ninguna propiedad, simplemente por cuestiones de nombramiento. En GraphQL esto no es aceptado. Para evitarlo, el TypedQL Builder agrega un campo "place holder" sólo para garantizar la creación del Type. Esto es:

```ts
interface Vacío {
    
}
```

Para facilitar la realización de pruebas, se convierte en:

```gql
type Vacío {
   __placeholder: Boolean 
}
```

#### GraphQL no admite Scalars, Interfaces y Unions en la declaración de un Union

A pesar de que las construcciones siguientes son completamente válidas en TypeScript, van a crear errores al intentar convertir un GraphQL Schema utilizando el TypedQL Builder.

```ts
type ScalarsUnion = number | boolean // No se admite
type interface Foo {
    foo: string
}
type interface Bar extends Foo {
    bar: string
}
type interface Quux {
    quux: string
}
type UnionUnion = ScalarsUnion | Bar // No se admite
type InterfaceUnion = Foo | Quux // No se admite
interface Query {
    getBar: Bar
}
```
## Referencia

https://facebook.github.io/graphql/June2018
https://www.typescriptlang.org/docs
