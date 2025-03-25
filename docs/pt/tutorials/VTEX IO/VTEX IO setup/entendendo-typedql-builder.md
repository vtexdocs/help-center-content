---
title: 'O que é TypedQL Builder?'
id: 4i3PCEkW6nmiPsUiM4N1qF
status: ARCHIVED
createdAt: 2019-03-11T15:24:00.191Z
updatedAt: 2020-03-13T21:24:58.105Z
publishedAt: 
firstPublishedAt: 2019-03-11T15:27:46.068Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slugEN: understanding-typedql-builder
locale: pt
legacySlug: typeql-builder
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

O TypedQL Builder é um recurso do VTEX IO para o desenvolvimento de projetos de backend.

Similar ao GraphQL Builder, ele surge como uma alternativa para apps de backend escritas em GraphQL + TypeScript. Ele se propõe a ser mais moderno e genérico, utilizando somente arquivos de Declaração de Tipos de TypeScript para criar a interface de GraphQL automaticamente.

Desse modo, projetos baseados em TypeScript são beneficiados pela utilização desse Builder. Ao desenvolver um projeto de backend usando TypeScript + GraphQL, o desenvolvedor precisa escrever um conjunto de tipos de TypeScript para tipar o comportamento de seus _resolvers_ e, ao mesmo tempo, escrever GraphQL Schemas usando a GraphQL SDL.

Com o TypedQL Builder, o desenvolvedor precisa escrever apenas os tipos de TypeScript, pois o GraphQL Schema é automaticamente gerado. Algumas vantagens desse recurso são:

### 1. Unificação da descrição do protocolo

Usando o GraphQL Builder, qualquer modificação na interface do Schema (TypeScript) precisa refletir em uma atualização do TypeScript (Schema). Isso torna o processo propenso a falhas, o que não acontece se o Schema é autogerado pelo TypedQL Builder.

### 2. Reducão de código

Essa mesma condição leva o desenvolvedor a escrever a mesma interface duas vezes. Usando a transpilação automática do TypedQL você reduz seu esforço pela metade além de não ter que se preocupar em aprender a sintaxe de uma nova linguagem.

### 3. Estímulo a tipagem, desestímulo à inconsistência

A necessidade de escrever interfaces TypeScript para os _resolvers_ estimula sua tipificação adequada e automaticamente de acordo com a descricão GraphQL. Isso desestimula inconsistências como o uso de GraphQL Fields como `Nullable` sem necessidade.

### 4. Acesso a funcionalidades de TypeScript não permitidas em GraphQL

Isso permite descrever Schemas complexos de maneira muito mais fácil e rápida. Alguns exemplos de recursos aproveitáveis de TypeScript são:

- __Herança__: Criar GraphQL Types com aproveitamento de código.
- __Unions de unions__: Combinar TypeScript Unions entre si para gerar GraphQL Unions de maneira escalável.
- __Unions de enums__: Combinar TypeScript Enums com unions para gerar GraphQL Enums de maneira escalável.
- __Import e Export__: Divida suas definições em vários arquivos, exponha e busque somente o que for necessário.

## Funcionamento básico

Para utilizar o TypedQL Builder basta adicioná-lo à lista de Builders do seu `manifest.json` como:

```js
//[...]
"builders": {
  "typedql": "0.x"   
}
//[...]
```

O Builder procurará por uma pasta `typedql/` localizada na raíz do seu projeto. Dentro dela deve haver um arquivo `schema.ts` que é o ponto de entrada para as definicões `Query` e `Mutation` de sua app. Para um clássico **Hello World!** ponha no `schema.ts`:

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
O que deverá gerar o Schema
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

O TypedQL Builder vai sempre procurar pela declaração das interfaces `Query` e `Mutation` em `schema.ts`, a partir da qual gerará os types Query e Mutation padrões da GraphQL SDL. O TypedQL Builder só emite tipos que estejam de alguma forma utilizados por `Query` e `Mutation`, seja como Field Resolver, como propriedade, parâmetro em lista de argumentos, retorno de função, etc.

É possível dividir sua Type Declarations em múltiplos arquivos, usando `export` para expôr para arquivos externos e `import` para importar de arquivos externos.
Para fazer o TypedQL Builder ignorar alguma linha de codigo, comente-a como comentários de linha `//`.

## TypedQL Migrator

A VTEX desenvolveu uma app exemplo chamada **TypedQL Migrator** para auxiliar no teste rápido de conversão de declaracões de tipo TypeScript para GraphQL Schema.

Para usá-la, basta ter a VTEX CLI instalada e digitar na linha de comando:

```sh
vtex install vtex.typedql-migrator
```
Isso deverá instalar a app no workspace atual e você poderá acessar a ferramenta em:

`<workspace>--<account>.myvtex.com/typedqlmigrator`

## Features

GraphQL SDL e TypeScript Type Declarations têm intersecção grande mas não total. Conceitos próprios de GraphQL que não possuem um equivalente intuitivo em TypeScript são informados ao transpilador utilizando **JSDoc** e a anotação especial `@graphql <Marcação>`. A tabela mostra tags compreendidas pelo transpilador

| Conceito GraphQL |Marcação JSDoc|
| ---------------- |:-------------:|
| ID                | `@graphql ID` |
| Int               | `@graphql Int` |
| Float             | `@graphql Float`|
| Input             | `@graphql Input`|
| Field Directives  | `@graphql Directives`|

#### GraphQL Scalars

Existem 5 tipos primitivos em GraphQL: `ID`, `Int`, `Float`, `Boolean` e `String`. Seus equivalentes de TypeScript, naturalmente, são `string`, `number`, `number`, `boolean` e `string`. Isso gera certas ambiguidades que precisam ser removidas usando **JSDoc** para se obter o resultado desejado. Por exemplo:

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
É convertido para:

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
#### GraphQL Object Types, Fields e Arguments

Como já mostrado, um GraphQL Type pode ser descrito por uma TypeScript Interface. As propriedades de uma Interface são `Required` por padrão. Para remover esse comportamento é necessário realizar a união do tipo com `null` ou `undefined` ou, no caso de listas de argumentos e propriedades de interfaces, com o token `?`.

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

É transpilado para:

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

#### Herança

Tipos podem ser combinados entre si sem discriminação. Também é possível usar herança para combinar Types apesar de GraphQL não suportar esse recurso.

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

Gera:

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

Apesar de TypeScript não suportar herança múltipla, ele suporta interfaces, assim como GraphQL. Para que um tipo seja emitido como uma GraphQL Interface, no entanto, ele não pode ser propriedade de alguma TypeScript Interface ou retorno de algum método. Nesse caso, o TypedQL percebe automaticamente a necessidade do tipo ser concreto e emite um GraphQL Type apropriado:

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

TypeScript Enums são diretamente equivalentes a GraphQL Enums.
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

Não é possível combinar Enums em GraphQL, mas o TypedQL Builder é capaz de reconhecer uniões de enums, criando combinações automaticamente:


```ts
declare enum CoresQuentes {
    VERMELHO,
    AMARELO,
}
declare enum CoresFrias {
    AZUL,
    VERDE,
}
type Cores = CoresQuentes | CoresFrias
```
```gql
enum CoresQuentes {
    VERMELHO,
    AMARELO
}
enum CoresFrias {
    AZUL,
    VERDE
}
enum Cores {
    VERMELHO,
    AMARELO,
    AZUL,
    VERDE,
}
```

#### GraphQL Unions

GraphQL aceita a união de GraphQL Objects como um único tipo, como TypeScript. No entanto, Union de TypeScript pode ser interpretada de diversas formas dependendo dos objetos envolvidos e pode facilmente ser interpretada. Cheque a seção **Disclaimers** por exemplos. De maneira geral, GraphQL Unions são válidas entre Object Types.

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

Directives são um recurso poderoso de GraphQL que atualmente não possui equivalente em TypeScript. O TypedQL Builder aceita a descrição de Field Directives por meio de **JSDoc** conforme o exemplo abaixo. Todas as JSDoc Tags descritas abaixo de `@graphql Directives` são interpretadas como GraphQL Directives. Esse recurso é muito importante, por exemplo, para fazer uso de recursos do Apollo GraphQL.

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

Atualmente o TypedQL Builder aceita como argumentos de Directives **Named Type**, **String Literai**, **Int**, **Float** e **Boolean** de GraphQL SDL.

#### GraphQL Input

GraphQL Input Objects se diferenciam de Type Objects por seus Fields não poderem ter listas de argumentos e poderem serem utilizados somente como argumentos de um Type Object Field. Não existe conceito restritivo similar em TypeScript e por isso é preciso anotar interfaces para avisar o compilador que uma interface é um `input`.

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

Existe uma grande intersecção entre escrever TypeScript Type Declarations e GraphQL SDL, de forma que deve ser intuitivo o equivalente TypeScript de um GraphQL Schema. No entanto, existem alguns casos de uso e conceitos que podem ser contra-intuitivos.

#### Não existe alias em GraphQL SDL

Apesar de em TypeScript é possível criar aliases de tipos primitivos como por exemplo:

```ts
type StringAlias = string
```

Isso não é uma feature suportada em GraphQL e é na verdade interpretado como a declaração de um **Custom Scalar**, em que a implementação interna do backend trata `StringAlias` como uma `string`.

```gql
scalar StringAlias
```
Para tipos não primitivos, no entanto, é possível realizar algo equivalente a um alias utilizando `union`, portanto:

```ts
interface SomeType {
    foo: boolean!
}
type SomeTypeAlias = SomeType
```

É traduzido para:

```gql
type SomeType {
    foo: Boolean
}
union SomeTypeAlias = SomeType
```

No entanto, por comodidade, o TypedQL Builder reconhece a união de Scalars e Object Types com `null` e `undefined` como Syntatic Sugar para NotNull Wrapping de GraphQL. Em outras palavras:

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
É interpretado como:

```gql
type Return {
    content: String
}
type Foo {
    bar: Return
}
```
#### Propriedades de Interfaces, parâmetros e retornos de funções são emitidos Required por padrão

Apesar de que, em GraphQL SDL, Fields e Arguments não são Required por padrão e você precisa adicionar `!` para torná-los Required, o comportamento em TypeScript é exatamente o oposto. Se uma função é definida para receber 3 parâmetros, ela **requer** que você adicione três parâmetros e se uma Interface tem certa propriedade, ela **requer** que essa não seja `undefined`.

#### Ao contrário de GraphQL, Unions em TypeScript não precisam ser nomeadas

Em outras palavras, o exemplo abaixo é válido em TypeScript mas não em GraphQL SDL:

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
Para obter o comportamento desejado teríamos que fazer:

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

Obtendo:

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

#### GraphQL não suporta Types vazios

Em TypeScript é possível simplesmente criar Interfaces sem nenhuma propriedade, simplesmente por questões de nomeação. Em GraphQL isso não é aceito. Para contornar isso, o TypedQL Builder adiciona um campo "place holder" apenas para garantir a criação do Type. Isso é:

```ts
interface Vazio {
    
}
```

Para facilitar a realização de testes, é convertido em:

```gql
type Vazio {
   __placeholder: Boolean 
}
```

#### GraphQL não aceita Scalars, Interfaces e Unions na declaração de um Union

Apesar das construções abaixo serem completamente válidas em TypeScript, elas vão gerar erros ao tentar converter para um GraphQL Schema usando o TypedQL Builder:

```ts
type ScalarsUnion = number | boolean // Não aceito
type interface Foo {
    foo: string
}
type interface Bar extends Foo {
    bar: string
}
type interface Quux {
    quux: string
}
type UnionUnion = ScalarsUnion | Bar // Não aceito
type InterfaceUnion = Foo | Quux // Não aceito
interface Query {
    getBar: Bar
}
```
## Reference

https://facebook.github.io/graphql/June2018
https://www.typescriptlang.org/docs
