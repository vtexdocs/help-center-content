---
title: Cómo funcionan las consultas en Master Data
id: tutorials_4629
status: DRAFT
createdAt: 2017-04-27T21:49:52.453Z
updatedAt: 2022-08-09T22:18:07.598Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:17.103Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: comprendiendo-el-funcionamiento-de-consultas-en-el-master-data
legacySlug: comprendiendo-el-funcionamiento-de-consultas-en-el-master-data
subcategory: 5gtjaqCG7eIseyCI0aSqc2
---

La extensibilidad de VTEX Master Data te permite configurar los campos como **Buscável** (permite que se haga búsquedas) o **Filtro**. Pero lo que significan estos campos? El propósito de este artículo es responder a esta pregunta.

Prime, vamos explicar el flujo de consultas. Existen dos tipos:

1. Consulta por el ID.
2. Consulta  a una colección de documentos.

### Consulta por el ID

Este tipo de consulta es la manera más rápida de recuperación de datos. El id es la referencia más fuerte que nos indica la dirección exacta del almacenamiento.
_Sugerimos que siempre se utilize el atributo **id**, pues siempre será más rápido que cualquier otro tipo  de consulta a VTEX Master Data._

### Consulta a una colección de documentos

En este tipo de consulta, los campos marcados como **Buscável** o **Filtro** poseen relevancia. Pero, no solamente ellos deben ser considerados. Los **índices** también hacen parte del proceso. La mejor manera de entender el flujo de este tipo de consulta és por medio de ejemplo.

En nuestro ejemplo, tenemos la entidad de datos  `Cliente`, abreviación `CL`, y tienes la seguinte configuración:

| Nome do campo     | Tipo     | é filtro     | é buscável     |
| ---------- | ---------- | ---------- | ---------- |
| Email       | Email       | Sim       | Sim       |
| Nome       | Varchar 100       | não       | sim       |
| Idade       | Integer       | sim       | não       |
| TamanhoRoupa       | Varchar 10       | não       | não       |

### Es filtro

El atributo `é filtro` indica que podremos realizar un filtro por medio de campo(s) específico(s). En nuestro ejemplo, podremos realizar filtro por medio de los campos  `Email` y `Idade`.

Por API, hay manera de hacer una consulta utilizando la ruta `search`:

1. /dataentities/CL/search?Email=meuemail@provider.com
2. /dataentities/CL/search?Idade=18

Si  se realiza un filtro por el campo `Nome`, lo cual no fue marcado como filtro, la respuesta será `Bad Request` informando que el campo `Nome`  no fue configurado como filtro.

### Es buscável

El atributo `é buscável` indica que podremos hacer una búsqueda por medio del atributo `_keyword` de la ruta `search`. El `_keyword` es utilizado para el seguinte escenario: &#8220;Quiero todos los documentos que tengan el valor  `maria`.&#8221;

Por API, quedará tal cual el ejemplo abajo:

`/dataentities/CL/search?_keyword=maria`

Los asteriscos son indicadores para una consulta parcial. O sea, no van a ser buscados los documentos que tengan el valor exacto `maria`, pero los que tengan en alguna parte este grupo de caracteres.

En el resultado de la consulta tenemos los documentos que poseen los atributos `Nome` y `Email` los valores como: Nome=Maria Joaquina | Email=maria@provider.com.

### Consulta por índices

El índice es un recurso de VTEX MasterData que funciona tal cual un &#8220;atajo&#8221; para encontrar documentos. Este no pasa por el Engine de Busqueda (tecnologia utilizada para consultas con filtros, consultas fulltext y agregación).

Utilizando este recurso, la consulta es más rápida que un filtro normal. Sin embargo, cuanto mayor la cantidad de índices, más lento quedará el guardar de documentos. Hay que tener cuidado en su modelo de datos para que el proceso de guardar y leer sean lo más eficiente posible en la resolución de su escenario.

La consulta por índices es realizada por medio de la ruta `search`. Dentro del flujo de búsqueda, cuando el VTEX MasterData está interpretando la query, él hace la seguinte pregunta:

`Esto filtro hace parte de un índice?`

Si la respuesta es positiva, la consulta se realiza a través del índice.Se a resposta for positiva, a consulta é realizada através do índice.

### Reindexación

La reindexación es un proceso en background que funciona de la seguinte manera:

1. Realiza la lectura de las configuraciones de los campos marcados como **Filtro **y **&#8220;Buscável&#8221;**;
2. Actualiza la Engine de Búsqueda com los nuevos campos;
3. Realiza una consulta a todos los documentos almacenados y acttualiza los valores de la Engine de Búsqueda.

Cuando los campos de un documento son guardados en la Engine de Búsqueda, decimos que este documento está indexado. Por eso el nombre "reindexación".

_Atención: éste recurso tiene efecto solamente en los casos en que los campos son marcados como  `é filtro` o  `é "buscável"` son alterados._
