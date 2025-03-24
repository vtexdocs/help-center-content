---
title: 'Match de anuncios de Mercado Libre'
id: 43uD4LPU5PLUWe11IaWwyR
status: CHANGED
createdAt: 2024-09-09T15:11:51.966Z
updatedAt: 2024-09-26T13:45:03.913Z
publishedAt: 2024-09-26T13:38:29.627Z
firstPublishedAt: 2024-09-09T15:16:41.777Z
contentType: trackArticle
productTeam: Channels
slugEN: match-offers-mercado-livre
locale: es
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugES: configurar-integracion-con-mercado-libre
---

Al realizar la [integración con Mercado Libre](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq), el seller envía al marketplace los anuncios que desea vender en la plataforma. De este modo, Mercado Libre ofrece al seller oportunidades de match con anuncios de tipo **catálogo**, que pueden ocupar un espacio resaltado en el marketplace.

Antes de continuar, es importante familiarizarse con las definiciones específicas de la funcionalidad **Match de anuncios de Mercado Libre** descritas a continuación:  

| **Término** | **Significado** |
|:---:|:---:|
| **Anuncios** | Un anuncio es un [SKU](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) de un seller enviado al marketplace con precio y stock configurados. |
| **Catálogo Mercado Libre** | Anuncio preexistente en Mercado Libre que permite al seller vincular su producto y mejorar su visibilidad. |
| **Oportunidades** | Una **oportunidad** es un producto del seller que se puede vincular a un producto del catálogo de Mercado Libre. El objetivo de la oportunidad es proporcionar al seller una herramienta que pueda realizar la asociación entre los productos. |

En este artículo, puedes explorar los siguientes temas:  

- [**Estructura de la página**](#estructura-de-la-pagina)  
- [**Tipos de oportunidades**](#tipos-de-oportunidades)  
- [**Analizar oportunidades**](#analizar-oportunidad)  

![overview-match-meli-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/mercado-libre-integration-set-up/match-de-anuncios-de-mercado-libre_1.png)

## Estructura de la página

La página **Match de anuncios Mercado Libre** tiene dos pestañas: [Oportunidades](#pestana-oportunidades) y [Catálogos activos](#pestana-catalogos-activos). A continuación se describen los datos disponibles en cada una.  

### Pestaña Oportunidades

En esta pestaña, se muestra una lista de los anuncios elegibles para el catálogo de Mercado Libre y las oportunidades se puede filtrar por tipo, si utilizas la integración **Mercado Livre Classic** y **Mercado Livre Premium**. También puedes buscar oportunidades ingresando el nombre del producto o el ID de SKU en la barra de búsqueda.  

Cada fila de la lista corresponde a un anuncio y presenta la siguiente información en columnas:  

- **Casilla de selección:** casilla utilizada para seleccionar los anuncios deseados y realizar la acción `Aceptar sugerencia`.  
- **Tu anuncio:** producto del catálogo VTEX configurado por el seller y enviado al marketplace.  
- **Sugerencia de catálogo:** producto del catálogo sugerido por Mercado Libre.  
- **Oportunidad:** tipo de acción para el anuncio del seller indicada por Mercado Libre.  
- **Analizar oportunidad:** botón que redirige al seller a la página [Analizar oportunidad](#analizar-oportunidad).  

>❗ Los productos disponibles en la pestaña **Oportunidades** se mostrarán con **error** en el menú Pedidos hasta que se realice el match de productos.

### Pestaña Catálogos activos

En esta pestaña se muestra una lista de los anuncios actualmente vinculados al catálogo de Mercado Libre y permite filtrar anuncios por su status de relevancia y buscar por nombre de producto o ID de SKU.  

En la lista de catálogos activos, cada fila corresponde a un anuncio y presenta la siguiente información en columnas:  

- **Anuncio:** nombre y especificaciones del producto.  
- **SKU ID:** ID de SKU del producto.  
- **Status:** relevancia del anuncio en el catálogo de Mercado Libre.  
- **Mejorar oportunidad:** flecha en la última columna. 

En la parte superior de la pantalla, se muestra el número de catálogos activos que están en cada status de relevancia.  

![relevancia](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/mercado-libre-integration-set-up/match-de-anuncios-de-mercado-libre_2.png)

<div class=”alert alert-info>
Los anuncios adquieren relevancia cuando ofrecen mejores precios y condiciones logísticas.
</div>

La relevancia de un anuncio registra si la oferta del seller se muestra como la primera oferta del catálogo en el marketplace. Los posibles status de una oferta son:  

- **Ganando relevancia:** el anuncio del seller está en primer lugar o en empate con el primero.  
- **Perdiendo relevancia:** el anuncio del seller no está en primer lugar en la búsqueda de ese producto.  
- **Procesando relevancia:** Mercado Libre está evaluando la información del anuncio.  

## Tipos de oportunidades

Los cuatro tipos de oportunidades que pueden mostrarse para los anuncios de un seller son: **Preaviso, Obligatorio**, **Opcional** y **Restringido**. En todas las oportunidades listadas por Mercado Libre, el seller debe vincular el producto a un anuncio. Si el anuncio del seller no tiene una correspondencia con una oferta del catálogo, se puede publicar el anuncio sin sugerencia haciendo clic en el botón `Publicar sin sugerencia`.  

- **Preaviso:** este tipo de oportunidades son obligatorias y tienen un plazo para ser vinculadas. Esto quiere decir que el seller deberá asociar el producto a una oferta del catálogo de Mercado Libre. Si no se realiza la asociación en el plazo determinado por Mercado Libre, el marketplace moderará el anuncio del seller.  
![aviso](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/mercado-libre-integration-set-up/match-de-anuncios-de-mercado-libre_3.png)

- **Obligatorio:** este tipo de oportunidades son obligatorias, pero no tienen un plazo para asociarlas. Si no se vincula el anuncio, Mercado Libre puede moderar el anuncio del seller en el marketplace.  
![anuncio obligatorio](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/mercado-libre-integration-set-up/match-de-anuncios-de-mercado-libre_4.png)

- **Opcional:** este tipo de oportunidades son opcionales. Si no se realiza la asociación, el anuncio del seller no pierde relevancia ni será moderado por el marketplace.  
![anuncio opcional](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/mercado-libre-integration-set-up/match-de-anuncios-de-mercado-libre_5.png)  
- **Restringido:** este tipo de oportunidades son obligatorias. Si no se realiza la asociación, el anuncio del seller no se publicará en Mercado Libre.
![restringido-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/mercado-libre-integration-set-up/match-de-anuncios-de-mercado-libre_6.png)

## Analizar oportunidad

En la pestaña **Oportunidades**, se pueden analizar y vincular las oportunidades independientemente del tipo. La asociación se puede realizar [individualmente](#asociacion-individual) o en [masa](#asociacion-en-masa).

Para analizar una oportunidad, el seller utiliza la página **Match de anuncios**, a la que se puede acceder a través del ***Admin VTEX > Marketplace > Mercado Libre > Match de anuncios** o escribiendo **Match de anuncios** en la barra de búsqueda del Admin VTEX.  

La pantalla **Analizar oportunidad** se muestra cuando el seller hace clic en el botón `Analizar oportunidad` de uno de los anuncios disponibles en la pestaña **Oportunidades**.  
En el lado izquierdo de esta pantalla se muestra el producto registrado del seller en el catálogo VTEX y en el lado derecho el producto del catálogo de Mercado Libre sugerido para la asociación. Además, en la parte superior derecha se encuentran los botones `Publicar sin sugerencia` y `Aceptar sugerencia`. 

![analisis-op-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/mercado-libre-integration-set-up/match-de-anuncios-de-mercado-libre_7.png)

### Asociación individual

Para asociar las oportunidades individualmente, sigue los pasos a continuación desde la página **Match de anuncios**:  

1. En la oportunidad deseada, haz clic en el botón `Analizar oportunidad`.  
2. Comprueba que los datos del anuncio sugerido por Mercado Libre sean compatibles con los datos de tu producto.  
3. Haz clic en el botón `Aceptar sugerencia` para los anuncios que tengan correspondencia y en `Publicar sugerencia` para los anuncios sin correspondencia.  
4. Haz clic en el botón `Confirmar`.  

![aceptar-sugerencia-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/mercado-libre-integration-set-up/match-de-anuncios-de-mercado-libre_8.png)

Después de realizar la asociación, el anuncio se publica en el catálogo de Mercado Libre y se envía a la pestaña **Catálogos activos** con el status **Procesando relevancia**.  

Si los productos no coinciden, el seller debe buscar un anuncio del catálogo de Mercado Libre que corresponda a su producto para asociarlo.  

Para buscar otros anuncios en el catálogo de Mercado Libre, el seller debe ingresar el nombre de su producto en la barra de búsqueda que está debajo de la foto principal del producto en la página **Analizar oportunidad**.  

![buscar-anuncio-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/mercado-libre-integration-set-up/match-de-anuncios-de-mercado-libre_9.png)

### Asociación en masa

Para asociar las oportunidades en masa, sigue los pasos a continuación desde la página **Match de anuncios**:  

1. Selecciona las oportunidades que deseas asociar. En la parte inferior de la pantalla se muestra un panel con el número de oportunidades seleccionadas.  
2. Haz clic en el botón `Aceptar sugerencias`.  
3. Haz clic en el botón `Confirmar`.  
![sugerencia-masiva](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/mercado-libre-integration-set-up/match-de-anuncios-de-mercado-libre_10.png)

Después de realizar la asociación, los anuncios se publican en el catálogo de Mercado Libre y se envían a la pestaña **Catálogos activos** con el status **Procesando relevancia**.  
