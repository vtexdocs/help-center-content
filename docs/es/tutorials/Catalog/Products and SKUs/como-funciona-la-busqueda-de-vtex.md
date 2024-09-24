---
title: 'Cómo funciona la búsqueda de VTEX'
id: tutorials_542
status: PUBLISHED
createdAt: 2017-04-27T22:02:07.746Z
updatedAt: 2023-03-29T15:35:26.589Z
publishedAt: 2023-03-29T15:35:26.589Z
firstPublishedAt: 2017-04-27T23:03:37.560Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-does-vtex-search-work
locale: es
legacySlug: como-funciona-la-busqueda-de-vtex
subcategoryId: pwxWmUu7T222QyuGogs68
---

Este artículo tiene el objetivo de describir el funcionamiento del sistema de búsqueda de VTEX.

>⚠️ VTEX presenta dos opciones de búsqueda - La búsqueda VTEX y VTEX Intelligent Search. Este artículo se refiere a la búsqueda VTEX. Para saber más sobre la aplicación VTEX Intelligent Search, consulte <a href = "https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nuestra guía</a>.

## Cómo el buscador de VTEX prioriza la exhibición de productos

El buscador de VTEX posee un algoritmo inteligente que, a partir del término buscado, identifica cuál es el mejor resultado para presentarle al usuario.

Es decir, se presenta siempre el resultado que más generará conversión de venta. Está claro que el éxito de este resultado depende, exclusivamente, del registro del catálogo (marca, departamento, categoría, producto, especificación, etc.).

De acuerdo con el término buscado, el sistema puede renderizar los siguientes resultados en este orden de prioridad:

1. Landing Page
2. Marca
3. Departamento
4. Búsqueda por término (palabra clave)

### 1. Landing Page:

Si el término buscado corresponde exactamente al nombre de una carpeta configurada en el CMS (es decir, a una landing page), esa carpeta será renderizada.

>⚠️ **Atención**: para que una carpeta pueda buscarse, esta debe poseer un layout.
>
> **Aunque la búsqueda sea por una carpeta hija, el padre también requiere un layout.**

### 2. Marca

Si el término buscado corresponde exactamente al nombre o palabra sustituta de alguna marca registrada, el sistema renderizará apenas los productos de esta marca. Si el sistema identifica dos o más marcas con la misma **palabra sustituta** (lo que se considera una inconsistencia de registro), el sistema renderizará apenas la primera encontrada (y sus productos).

El resultado de esta página será una página de marca. Viendo por el código fuente de la página: `<!--CommerceContext.Current.VirtualFolder.Name: marca -->`

### 3. Departamento

Si el término buscado corresponde exactamente al nombre o palabra sustituta de algún departamento registrado, el sistema renderizará apenas los productos de este departamento. Si el sistema identifica dos o más departamentos con la misma **palabra sustituta** (lo que se considera una inconsistencia de registro), el sistema renderizará apenas el primer departamento encontrado (y sus productos);

El resultado de esta página será una página de Departamento. Usted puede verificar cuál página vino como resultado consultando el código fuente. En este caso, el siguiente comentario debe estar en el código de la página: `<!--CommerceContext.Current.VirtualFolder.Name: @departamento@ -->`

### 4. Búsqueda por término (palabra clave)

Si el sistema no identifica una Landing Page, una Marca o un Departamento correspondiente al término buscado, aplica una búsqueda por término (palabra clave).

El resultado de esta página será una página de búsqueda. Usted puede verificar cuál  página vino como resultado consultando el código fuente. En este caso, el siguiente comentario debe estar en el código de la página: `<!-- CommerceContext.Current.VirtualFolder.Name: Busca -->`

Cuando la búsqueda es por término, el buscador aplica la consulta en el __indexador__, que es el responsable del algoritmo de búsqueda por término.

__Puntuación:__
Este algoritmo utiliza el concepto de puntuación para priorizar y ordenar los productos. A cada consulta realizada, el indexador puntúa los productos de acuerdo al término consultado. Algunos campos de la base (con pesos distintos) son considerados para el cálculo de esa puntuación.
La vitrina se arma en base a esa puntuación, en orden decreciente; es decir, el producto más puntuado será el primero a ser exhibido y el menos puntuado, el último.

## Cómo funciona la búsqueda

Para entender la búsqueda de VTEX, inicialmente es necesario saber cómo funciona el indexador y su proceso de actualización.

### Indexador del catálogo

El indexador del catálogo es una base de datos escalable de acceso rápido, con algoritmos configurables de priorización de resultados. Está posicionado entre la base de datos convencional y el usuario. Vea el siguiente esquema:

![](//images.contentful.com/alneenqid6w5/4PSR97lU5y2iac2QkoUAKg/10b9097341faf0de317fa6984104da95/indexacao.png)

En el indexador encontramos todas las informaciones referentes al catálogo de productos (productos, SKUs, marcas, departamentos, categorías). El buscador utiliza estas informaciones para localizar los productos y mostrarlos en las vitrinas y los resultados de búsqueda. Por lo tanto, __solamente los productos indexados pueden ser encontrados por la búsqueda__.

### Proceso de actualización (Indexación)

Alteraciones en las características de cualquier producto (datos principales, precio, inventario, colección, etc.) generan actualizaciones del indexador. Es decir, __siempre que se altera un producto, se envía al final de la fila de indexación__.

Cuando se consume esta fila de indexación, las alteraciones aplicadas estarán disponibles para su visualización en el sitio. El proceso de indexación es seguro y cuenta con reglas de reintentos. Es decir, siempre que, por alguna razón, un elemento no se indexa en el primer intento, el sistema realiza otros intentos.

### Campos y pesos

Estos son los campos utilizados por el algoritmo de búsqueda y sus pesos para puntuación de productos:

- __Nombre del Producto__: 2.8
- __Primer nombre del producto__: 2.5
- __Primero y segundo nombre del producto__: 1.2
- __Nombre complemento del producto__: 1.0
- __Palabras sustitutas (producto y marca)__: 0.7
- __Especificaciones de Producto (apenas para campos de los tipos `texto indexado` y `texto largo indexado`)__: 0.5

__Ejemplo__

Considerando el siguiente indexador:

| Nombre del Producto      | Nombre Complemento del Producto
    | Palabras sustitutas      | Especificaciones de Producto     |
| ---------- | ---------- | ---------- | ---------- |
| Pelota de fútbol       | Society       | pelota de futbol, pelota de football      | Blanca       |
| Pelota       | Society       | sozaite, sossaite       | Pelota de fútbol       |
| Zapatillas de fútbol       | Campo       | Sapatillas de fútbol, Zapatillas de football       | Blanca       |

<div class=alert>Término buscado 1: <b>Pelota de fútbol</b></div>

Resultado:
1. **Pelota de fútbol** (Mejor puntuado, pues el término corresponde exactamente al nombre del producto)
2. **Pelota** (Segundo mejor puntuado, pues parte del término buscado corresponde a parte del nombre del producto)
3. **Zapatillas de fútbol** (Tercer mejor puntuado, pues parte del término corresponde a una especificación)

**Dato:** La utilización de __palabras sustitutas__, pese a tener un peso bajo para la puntuación del indexador, es un recurso extremadamente importante. Con este recurso se hace posible alcanzar a usuarios que realizan búsquedas por términos gramaticalmente equivocados, pero con la misma semántica.

## Lea mas

 - [¿Cómo funciona el campo Score?] (https://help.vtex.com/es/tutorial/como-funciona-el-campo-score--1BUZC0mBYEEIUgeQYAKcae)

