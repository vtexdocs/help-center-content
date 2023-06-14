---
title: 'Configurar índice en Master Data'
id: tutorials_785
status: PUBLISHED
createdAt: 2017-04-27T21:58:03.173Z
updatedAt: 2022-10-17T18:32:35.482Z
publishedAt: 2022-10-17T18:32:35.482Z
firstPublishedAt: 2017-04-27T23:03:42.760Z
contentType: tutorial
productTeam: Post-purchase
author: authors_3
slug: configurando-indice-en-el-vtex-master-data
locale: es
legacySlug: configurando-indice-en-el-vtex-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

Índice es una referencia a una o más columnas, utilizada para la optimización de las das consultas en una entidad de datos. O sea, es una estructura que permite una búsqueda más rápida de registros.

Para demonstrar, imagine que el índice en el VTEX Master Data funciona como un índice de un libro, que contiene la indicación de los capítulos del libro. Cuando se desea hacer una pesquisa, al revés de buscar por todas las páginas del libro, una a una para encontrar el resultado de su búsqueda, es posible accesar el índice e ir directo al capítulo que desea. Es así que funciona el índice en el VTEX Master Data, provendo un método más eficiente de recuperación de datos.

<!--En el VTEX Master Data, existen dos usos para el índice:-->

## Consultas rápidas que retornan hasta mil documentos

El uso del índice indicado para resultado de búsquedas hasta mil documentos. En caso de que el retorno de la búsquedas retorne un valor mayor a mil documentos, es mejor para el performance que se &#8220;indexe&#8221; el campo, o sea, que lo marque como filtro en la configuración del mismo. En resumen, en búsquedas con resultado sobre los mil documentos, [ es más recomendada la configuración de un filtro con el campo que estava en el indice](/tutorial/filtrando-dados-no-master-data/ " es más recomendada la configuración de un filtro con el campo que estava en el indice"). Con eso, la búsqueda será hecha de manera más rápida que con el índice.

## Restricción de valores por documento (una llave alternativa)

Existe también la posibilidad de crear un block de una o más columnas para receber valores repetidos. El nombre técnico utilizado para éste concepto es &#8220;llave alternativa&#8221;. La llave alternativa es configurada por el campo **Valores Únicos** en la creación del índice y funciona de manera diferente dependendo de la cantidad de campos insertados en el índice.

### Uno solo campo en el índice

La llave alternativa no va a permitir que um valor que ya fue registrado en éste campo sea registrado nuevamente.

**Ejemplos:**
La tabla cliente posee 2 columnas: ID y &#8220;nome&#8221;(nombre).
ID es un número que no se repite, pues es el número que identifica el cliente. Nome (Nombre) es el nombre del cliente.
Sin embargo, para facilitar la búsqueda, la columna nome (nombre) fue creada como índice y configurada como **Valores Únicos**. 

[![indice1](//images.contentful.com/alneenqid6w5/2Z02pI4DxeaaWOmYw42Suu/60bb0d893f5bd07f94928288390a5526/image011.png)](//images.contentful.com/alneenqid6w5/2Z02pI4DxeaaWOmYw42Suu/60bb0d893f5bd07f94928288390a5526/image011.png "![indice1](//images.contentful.com/alneenqid6w5/2Z02pI4DxeaaWOmYw42Suu/60bb0d893f5bd07f94928288390a5526/image011.png)")Con eso, en caso de que quiera insertar un nombre que ya haya sido registrado en Cliente, no será posible.

[![indice2](//images.contentful.com/alneenqid6w5/FwEjcrqaQwKE8U4AEMOY4/ca741feb38fb89e6c3e0bd3ec442ba37/image002.png)](//images.contentful.com/alneenqid6w5/FwEjcrqaQwKE8U4AEMOY4/ca741feb38fb89e6c3e0bd3ec442ba37/image002.png "![indice2](//images.contentful.com/alneenqid6w5/FwEjcrqaQwKE8U4AEMOY4/ca741feb38fb89e6c3e0bd3ec442ba37/image002.png)")
Este ejemplo no muestra que la opción **Valores Únicos** debe ser utilizada con mucho cuidado, pues, en caso de que el valor pueda ser repetido, no será permitido registrar dicho valor de acuerdo a la configuración hecha.

### Vários campos en el Índice

En este caso, la llave alternativa va a bloquear que la combinación de los campos selecionados se repitan.

Seguindo el mismo ejemplo, imagine que la entidad cliente tiene una columna más: CPF (DNI). Luego, la configuración del índice, en **Composição de campos**, fueron insertadas las columnas nome (nombre) y CPF (DNI).

[![indice3](//images.contentful.com/alneenqid6w5/41Y8vUIFjWGuqoqwA6UYaK/0a33bc147f17f95ea5038124bbd5132a/image021.png)](//images.contentful.com/alneenqid6w5/41Y8vUIFjWGuqoqwA6UYaK/0a33bc147f17f95ea5038124bbd5132a/image021.png "![indice3](//images.contentful.com/alneenqid6w5/41Y8vUIFjWGuqoqwA6UYaK/0a33bc147f17f95ea5038124bbd5132a/image021.png)")
Con eso, es posible incluir el &#8220;Marcos&#8221; del ejemplo anterior, sin embargo no puede tener el mismo CPF (DNI) ya insertado anteriormente, o sea, solamente la combinación de campos es que no podrá repetirse. Pueden haver CPFs (DNIs) repetidos entre ellos y pueden haber nombres repetidos entre ellos, pero, jamás nombre + CPF iguales en registros diferentes.

[![indice4](//images.contentful.com/alneenqid6w5/36308RenwQq2aYcSkAYq6K/5a18bd8e7eca83e3f7ac40d3e6ca41ad/image031.png)](//images.contentful.com/alneenqid6w5/36308RenwQq2aYcSkAYq6K/5a18bd8e7eca83e3f7ac40d3e6ca41ad/image031.png "![indice4](//images.contentful.com/alneenqid6w5/36308RenwQq2aYcSkAYq6K/5a18bd8e7eca83e3f7ac40d3e6ca41ad/image031.png)")

__Lembre-se!__ En este caso, también es necesario tener atención pues la misma combinación de valores no podrán repetirse y el registro será impedido de ser guardado. Sugerimos que el atributo **Valores Únicos** en el índice sea utilizado solamente cuando los valores no tienen la posibilidad de repetirse.
