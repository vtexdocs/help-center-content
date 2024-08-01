---
title: 'Match de anuncios de Mercado Libre'
id: 1C4HjNLbNk2Y6evD0luXMr
status: PUBLISHED
createdAt: 2024-05-06T21:14:40.722Z
updatedAt: 2024-06-20T21:30:01.461Z
publishedAt: 2024-06-20T21:30:01.461Z
firstPublishedAt: 2024-05-06T21:49:40.831Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: match-de-anuncios-de-mercado-libre
locale: es
legacySlug: match-de-anuncios-mercado-livre
subcategory: 
---

<div class="alert alert-info">
Esta funcionalidad está en fase beta. Esto significa que estamos trabajando para mejorarlo. Si tienes alguna duda, por favor ponte en contacto con nuestro equipo de <a href="https://vtexhelp.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fsupport.vtex.com%2Fhc%2Fpt-br%2Frequests&theme=hc&locale=pt-br&brand_id=144968&auth_origin=144968%2Ctrue%2Ctrue">soporte</a>
</div>  

Al realizar la [integración con Mercado Libre](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq), el seller envía al marketplace los anuncios que desea vender en la plataforma. De este modo, Mercado Libre ofrece al seller oportunidades de match con anuncios de tipo **catálogo**, que pueden ocupar un espacio resaltado en el marketplace.

Antes de continuar, es importante familiarizarse con las definiciones específicas de la funcionalidad **Match de anuncios de Mercado Libre** descritas a continuación:  

| **Término** | **Significado** |
|:---:|:---:|
| **Anuncios** | Un anuncio es un [SKU](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) de un seller enviado al marketplace con precio y stock configurados. |
| **Canal de ventas** | Marketplace en el que el seller anuncia sus productos. |
| **Catálogo Mercado Libre** | Anuncio preexistente en Mercado Libre que permite al seller vincular su producto y mejorar su visibilidad. |
| **Oportunidades** | Una **oportunidad** es un producto del seller que se puede vincular a un producto del catálogo de Mercado Libre. El objetivo de la oportunidad es proporcionar al seller una herramienta que pueda realizar la asociación entre los productos. |

En este artículo, puedes explorar los siguientes temas:  

- [Estructura de la página](#estructura-de-la-pagina)  
- [Tipos de oportunidades](#tipos-de-oportunidades)  
- [Analizar oportunidades](#analizar-oportunidad)  

![overview-match-anuncios-meli](//images.ctfassets.net/alneenqid6w5/1H13oiY7fPnalkV6rn7fY2/9f50b70e2f52e4f14fa70104b085c6cc/overview-match-anuncios-meli-pt.png)

## Estructura de la página

La página **Match de anuncios Mercado Libre** tiene dos pestañas: [Oportunidades](#pestana-oportunidades) y [Catálogos activos](#pestana-catalogos-activos). A continuación se describen los datos disponibles en cada una.  

### Pestaña Oportunidades

En esta pestaña, se muestra una lista de los anuncios elegibles para el catálogo de Mercado Libre y las oportunidades se pueden filtrar por tipo y canal de ventas, si utilizas la integración **Mercado Livre Classic** y **Mercado Livre Premium**. También puedes buscar oportunidades ingresando el nombre del producto o el ID de SKU en la barra de búsqueda.  

Cada fila de la lista corresponde a un anuncio y presenta la siguiente información en columnas:  

- **Casilla de selección:** casilla utilizada para seleccionar los anuncios deseados y realizar la acción `Aceptar sugerencia`.  
- **Tu anuncio:** producto del catálogo VTEX configurado por el seller y enviado al marketplace.  
- **Sugerencia de catálogo:** producto del catálogo sugerido por Mercado Libre.  
- **Oportunidad:** tipo de acción para el anuncio del seller indicada por Mercado Libre.  
- **Analizar oportunidad:** botón que redirige al seller a la página [Analizar oportunidad](#analizar-oportunidad).  

### Pestaña Catálogos activos

En esta pestaña se muestra una lista de los anuncios actualmente vinculados al catálogo de Mercado Libre y permite filtrar anuncios por su status de relevancia y buscar por nombre de producto o ID de SKU.  

En la lista de catálogos activos, cada fila corresponde a un anuncio y presenta la siguiente información en columnas:  

- **Anuncio:** nombre y especificaciones del producto.  
- **SKU ID:** ID de SKU del producto.  
- **Status:** relevancia del anuncio en el catálogo de Mercado Libre.  
- **Analizar oportunidad:** botón que redirige al seller a la página [Analizar oportunidad](#analizar-oportunidad).  

En la parte superior de la pantalla, se muestra el número de catálogos activos que están en cada status de relevancia.  

![relevancia](//images.ctfassets.net/alneenqid6w5/4ktn7U1Dbqt7AhwdK1gtGn/3749ff23cf3e871dd8ae50941f806ae1/relevancia-pt.png)

<div class=”alert alert-info>
Los anuncios adquieren relevancia cuando ofrecen mejores precios y condiciones logísticas.
</div>

La relevancia de un anuncio registra si la oferta del seller se muestra como la primera oferta del catálogo en el marketplace. Los posibles status de una oferta son:  

- **Ganando relevancia:** el anuncio del seller está en primer lugar o en empate con el primero.  
- **Perdiendo relevancia:** el anuncio del seller no está en primer lugar en la búsqueda de ese producto.  
- **Procesando relevancia:** Mercado Libre está evaluando la información del anuncio.  

## Tipos de oportunidades

Los tres tipos de oportunidades que pueden mostrarse para los anuncios de un seller son: **Preaviso, Requerido** y **Opcional**. En todas las oportunidades listadas por Mercado Libre, el seller puede vincular el producto a un anuncio. Si el anuncio del seller no tiene una correspondencia con una oferta del catálogo, debe abrirse un ticket con el equipo de soporte de Mercado Libre.  

- **Preaviso:** este tipo de oportunidades son obligatorias y tienen un plazo para ser vinculadas. Esto quiere decir que el seller deberá asociar el producto a una oferta del catálogo de Mercado Libre. Si no se realiza la asociación en el plazo determinado por Mercado Libre, el marketplace moderará el anuncio del seller.  
![aviso](//images.ctfassets.net/alneenqid6w5/ZuWyKDvUpqIS4BEUzdnnd/3cc4b009ff17e214ac5f6914b680ae2c/Captura_de_tela_2024-04-30_184708.png)

- **Requerido:** este tipo de oportunidades son obligatorias, pero no tienen un plazo para asociarlas. Si no se vincula el anuncio, Mercado Libre puede moderar el anuncio del seller en el marketplace.  
![anuncio obligatorio](//images.ctfassets.net/alneenqid6w5/62kOh7xJ7zOxc8StS33BA/b12e5711b67e4597a5161cf676e69c15/obrigatorio-pt.png)

- **Opcional:** este tipo de oportunidades son opcionales. Si no se realiza la asociación, el anuncio del seller no pierde relevancia ni será moderado por el marketplace.  
![anuncio opcional](//images.ctfassets.net/alneenqid6w5/3Df2PgW8zBl7GKh32W0L07/c6ef9e482d18a074a5e93dc9e9e93204/opcional-pt.png)

## Analizar oportunidad

En la pestaña **Oportunidades**, se pueden analizar y vincular las oportunidades independientemente del tipo. La asociación se puede realizar [individualmente](#asociacion-individual) o en [masa](#asociacion-en-masa).

Para analizar una oportunidad, el seller utiliza la página **Match de anuncios**, a la que se puede acceder a través del ***Admin VTEX > Marketplace > Mercado Libre > Match de anuncios** o escribiendo **Match de anuncios** en la barra de búsqueda del Admin VTEX.  

La pantalla **Analizar oportunidad** se muestra cuando el seller hace clic en el botón `Analizar oportunidad` de uno de los anuncios disponibles en la pestaña **Oportunidades**.  
En el lado izquierdo de esta pantalla se muestra el producto registrado del seller en el catálogo VTEX y en el lado derecho el producto del catálogo de Mercado Libre sugerido para la asociación.  
![análisis de anuncios](//images.ctfassets.net/alneenqid6w5/3hEW8BHsxqSQ6DZFsyn29n/566860d4c95d6ea12073abdcf838ecb2/sugestao-individual-ii-pt.png)

### Asociación individual

Para asociar las oportunidades individualmente, sigue los pasos a continuación desde la página **Match de anuncios**:  

1. En la oportunidad deseada, haz clic en el botón **`Analizar oportunidad`**.  
2. Comprueba que los datos del anuncio sugerido por Mercado Libre sean compatibles con los datos de tu producto.  
3. Haz clic en el botón `Aceptar sugerencia`.  
4. Haz clic en el botón `Confirmar`.  
![aceptar sugerencia individual](//images.ctfassets.net/alneenqid6w5/1QKVIvkdadoicf7TsjfhRQ/b5de58ececcf925df1090c4b96f8d081/sugestao-individual-pt.png)

Después de realizar la asociación, el anuncio se publica en el catálogo de Mercado Libre y se envía a la pestaña **Catálogos activos** con el status **Procesando relevancia**.  

Si los productos no coinciden, el seller debe buscar un anuncio del catálogo de Mercado Libre que corresponda a su producto para asociarlo.  

Para buscar otros anuncios en el catálogo de Mercado Libre, el seller debe ingresar el nombre de su producto en la barra de búsqueda que está debajo de la foto principal del producto en la página **`Analizar oportunidad`**.  
![búsqueda de anuncios](//images.ctfassets.net/alneenqid6w5/2T5bvbMUTF9BeOGdIYtJ58/829ebd40c08e4ecdfde73902f32e917a/Captura_de_tela_2024-04-30_194057.png)

### Asociación en masa

Para asociar las oportunidades en masa, sigue los pasos a continuación desde la página **Match de anuncios**:  

1. Selecciona las oportunidades que deseas asociar. En la parte inferior de la pantalla se muestra un panel con el número de oportunidades seleccionadas.  
2. Haz clic en el botón `Aceptar sugerencias`.  
3. Haz clic en el botón `Confirmar`.  
![sugerencia-masiva](//images.ctfassets.net/alneenqid6w5/52VZCcnHAOMdyA1GWrFpH/982157da7e94b3b5dd80e171d5090c61/sugestao-massiva-pt.png)

Después de realizar la asociación, los anuncios se publican en el catálogo de Mercado Libre y se envían a la pestaña **Catálogos activos** con el status **Procesando relevancia**.  
