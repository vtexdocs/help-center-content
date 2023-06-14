---
title: 'Guía de talles'
id: 4z0rWTM8tdYV5QeyP6JIxx
status: DRAFT
createdAt: 2020-10-13T17:43:29.309Z
updatedAt: 2021-08-30T13:11:11.443Z
publishedAt: 
firstPublishedAt: 2020-10-14T14:47:28.848Z
contentType: trackArticle
productTeam: Channels
slug: guia-de-talles
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugES: configurar-integracion-con-mercado-libre
---

Al comprar ropa o calzados en línea, muchos usuarios suelen tener preguntas sobre las medidas de los productos. La guía de tallas es la mejor alternativa para aclarar muchas de esas dudas y ofrecer información precisa a sus consumidores sobre los ítems que desean adquirir. 

La guía de tallas de Mercado Libre es una tabla de medidas o equivalencias que permite que los usuarios vean las medidas exactas para que puedan elegir el producto ideal para ellos. 

![MLB tamanosARG](//images.ctfassets.net/alneenqid6w5/4xmAfYyY7z2sVGNKAaR2XM/404d040e8a9bae57b462da40b78e2321/MLB_tamanosARG.gif)

## Entendiendo la guía de tallas

Para crear una guía de tallas y asociarla a los anuncios publicados, se necesita utilizar la [Plantilla de mapeo](https://drive.google.com/uc?export=download&id=10RCqLbKs0YXTJR-M5Iv3lFulZ5_zCAlz) como modelo. La plantilla posee 2 pestañas: *Mapeo y Guía de tallas*. 

La primera pestaña ya fue enviada a Mercado Libre en la etapa de [Mapeo de categorías, variaciones y atributos](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA). Sin embargo, para enviar la guía de tallas, debe reenviar esta plantilla de mapeo con la segunda pestaña rellenada. 

La pestaña Guía de tallas contiene las siguientes columnas: 

| Nombre de la columna | Descripción |
| ---------- | ---------- |
| CategoryID | ID de la Categoría en VTEX |
| TableName | Nombre de la guía de tallas en Mercado Libre | 
| SizeName | Tallas que se ingresarán en la guía | 
| Column | Columnas que se ingresarán en la guía |
| Value | Valores que se ingresarán en la guía |

## Categorías

La primera etapa para rellenar la plantilla consiste en elegir las Categorías de su tienda que se asociarán a la guía de tallas. Elija categorías de Moda y Ropa como *Camisetas, Calzados y Vestidos*.

Luego de elegir las categorías, complete la columna CategoryID con el ID de la Categoría en VTEX. Puede encontrar el mismo al lado de Nombre de la categoría, al navegar por el árbol de categorías disponible en *Productos > Catálogo > Categorías*.

## Tablas

En la segunda etapa, defina los nombres que desea darles a sus tablas. Debe asignarle un nombre a cada tabla que se creará. Se puede asociar la misma tabla a varias categorías. La siguiente imagen muestra cómo este nombre aparece en la pantalla de creación manual de Mercado Libre. En este caso, la tabla se denominó **Camisetas deportivas**.

Después de elegir las tablas, complete la columna TableName con el nombre de la guía de tallas que se utilizarán en cada categoría.  

## Tallas

En la tercera etapa, elija el nombre de las tallas de su tabla. La siguiente imagen muestra cómo estas aparecen en la pantalla de creación manual de Mercado Libre. En este caso, las tallas son P y M.

Luego de elegir las tablas, complete la columna SizeName con el nombre de las tallas que se utilizarán en la guía.

## Columnas 

En la cuarta etapa, determine las columnas que desea incluir en la guía de tallas. La siguiente imagen muestra las opciones que aparecen en la pantalla de creación manual en Mercado Libre, note que puede asociar hasta 5 columnas por tabla. 

En la plantilla de mapeo, se necesita utilizar códigos específicos para indicar las columnas que se deben incluir en la Guía de tallas:

| Tipo | Columna | Código |
| ---------- | ---------- | ---------- |
| Medidas del cuerpo | Altura (cm) | CHILD_HEIGHT |
| Medidas del cuerpo | Largo de la pierna (cm) | INSEAM_LENGTH |
| Medidas del cuerpo | Largo del pie (cm) | FOOT_LENGTH |
| Medidas del cuerpo | Cintura (cm) | WAIST_CIRCUMFERENCE |
| Medidas del cuerpo | Pecho (cm) | CHEST_CIRCUMFERENCE |
| Medidas del cuerpo | Cuello (cm) | NECK_CIRCUMFERENCE |
| Medidas del cuerpo | Cadera (cm) | HIP_CIRCUMFERENCE |
| Medidas del cuerpo | Ancho del pie (cm) | FOOT_WIDTH |
| Medidas del cuerpo | Peso (kg) | WEIGHT | 
| Medidas de la ropa | Manga (cm) | SLEEVE_LENGTH |
| Medidas de la ropa | Comprimento (cm) | TOTAL_LENGTH |
| Equivalencias de la talla | BR | BR_EQUIVALENCE |
| Equivalencias de la talla | EUA | US_EQUIVALENCE |
| Equivalencias de la talla | EUR | EUR_EQUIVALENCE |
| Equivalencias de la talla | UK | UK_EQUIVALENCE |

Después de elegir las columnas, complete la columna Column con el nombre de las tallas que se utilizarán en cada guía de tallas.  

## Valores

En la quinta etapa para rellenar la plantilla, ingrese los valores de cada uno de los atributos, definidos en la etapa anterior, en la columna Value. Se deben completar todas las columnas de las tallas. Vea las unidades que se aplican cada una de estas columnas.

## Ejemplo

En este ejemplo, completaremos la pestaña Guía de tallas para dos tipos de productos: Camisetas y Zapatillas.

### Etapa 1: Categorías 

En esta etapa, identificamos las categorías que tendrán guías de tallas. Supongamos que su árbol de categorías en VTEX está organizado de esta forma: 

- Ropas (22) > Camisetas (23)
- Calzados (24) > Zapatillas (25)

Considerando que pretendemos crear guías de tallas para Camisetas y Zapatillas, necesitamos encontrar el ID de estas categorías. Como los números entre paréntesis representan el ID de Categoría, se debe ingresar los números 23 y 25 en la Plantilla de mapeo.

| CategoryId | TableName | SizeName | Column | Value | 
| ---------- | ---------- | ---------- | ---------- | ----------|
| 23 | | | | | 
| 25 | | | | | 

### Etapa 2: Tablas

En esta etapa, elegimos el nombre de las guías de tallas de las Camisetas y Zapatillas.

| CategoryId | TableName | SizeName | Column | Value | 
| ---------- | ---------- | ---------- | ---------- | ----------|
| 23 | Talla de camiseta | | | | 
| 25 | Talla de zapatillas | | | | 

### Etapa 3: Tallas

En esta etapa, incluimos dos tallas de camiseta y dos tallas de zapatillas (estándar EE.UU.). Se necesita crear una nueva fila para cada talla y reutilizar los valores de las columnas que ya fueron completadas.

| CategoryId | TableName | SizeName | Column | Value | 
| ---------- | ---------- | ---------- | ---------- | ----------|
| 23 | Talla de camiseta | M | | | 
| 23 | Talla de camiseta | G | | | 
| 25 | Talla de zapatillas | 9.5 | | | 
| 25 | Talla de zapatillas | 11 | | | 

### Etapa 4: Columnas

En esta etapa, elegimos dos columnas para cada tabla. Se necesita crear una nueva fila para cada una y reutilizar los valores de las columnas que ya fueron completadas.  

| CategoryId | TableName | SizeName | Column | Value | 
| ---------- | ---------- | ---------- | ---------- | ----------|
| 23 | Talla de camiseta | M | CHEST_CIRCUMFERENCE | | 
| 23 | Talla de camiseta | M | TOTAL_LENGTH | |
| 23 | Talla de camiseta | G | CHEST_CIRCUMFERENCE | | 
| 23 | Talla de camiseta | G | TOTAL_LENGTH | |
| 25 | Talla de zapatillas | 9.5 | BR_EQUIVALENCE | | 
| 25 | Talla de zapatillas | 9.5 | FOOT_LENGTH | | 
| 25 | Talla de zapatillas | 11 | BR_EQUIVALENCE | | 
| 25 | Talla de zapatillas | 11 | FOOT_LENGTH | | 

### Etapa 5: Valores

En esta etapa, completamos cada fila con los valores correspondientes.

| CategoryId | TableName | SizeName | Column | Value | 
| ---------- | ---------- | ---------- | ---------- | ----------|
| 23 | Talla de camiseta | M | CHEST_CIRCUMFERENCE | 25 | 
| 23 | Talla de camiseta | M | TOTAL_LENGTH | 35 |
| 23 | Talla de camiseta | G | CHEST_CIRCUMFERENCE | 25 | 
| 23 | Talla de camiseta | G | TOTAL_LENGTH | 55 |
| 25 | Talla de zapatillas | 9.5 | BR_EQUIVALENCE | 41 | 
| 25 | Talla de zapatillas | 9.5 | FOOT_LENGTH | 27,5 | 
| 25 | Talla de zapatillas | 11 | BR_EQUIVALENCE | 43 | 
| 25 | Talla de zapatillas | 11 | FOOT_LENGTH | 29 | 

## Cargando la plantilla

Después de completar la segunda pestaña, se necesita reenviar la plantilla de mapeo. Para eso, realice los siguientes pasos:

1. Acceda al Admin.
2. En el módulo Marketplace, seleccione Integraciones.
3. Seleccione la opción Configuración.
4. En la integración Mercado Libre, haga clic en el ícono de engranaje<img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
5. Elija la opción **Carga de mapeo**.
6. Seleccione **Elegir un archivo**.
7. Ahora, seleccione la plantilla de mapeo de categorías, atributos y variaciones de Mercado Libre.
8. Haga clic en **Subir archivo**.

## Activando la guía de tallas

Necesita acceder a su cuenta de Mercado Libre para activar la guía de tallas. Deberá seguir los siguientes pasos: 

1. Acceda a su cuenta en Mercado Libre.
2. Haga clic en la opción **Ventas**.
3. En el menú del lado izquierdo, seleccione la opción **Publicaciones**.
4. Haga clic en los 3 puntos <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/5h4riyTF3EAYAM2e04up4O/73040d1e9e6892c6feea96a9bcc6560e/3_pontos.JPG" /> ubicados en el lado derecho de su anuncio. 
5. Seleccione **Alterar**.
6. En la opción Guía de tallas, seleccione la tabla que creó.
7. Haga clic en **Confirmar**.
