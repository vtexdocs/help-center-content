---
title: 'Match de anuncios Amazon'
id: 7fRfoP69kYgg8znImMhyQ0
status: PUBLISHED
createdAt: 2023-05-29T15:07:38.220Z
updatedAt: 2023-07-27T21:32:07.360Z
publishedAt: 2023-07-27T21:32:07.360Z
firstPublishedAt: 2023-05-29T16:38:11.840Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: amazon-offer-matching
legacySlug: match-de-anuncios-amazon
locale: es
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Cada vez que se envía a Amazon un [SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) con [EAN](https://sellercentral.amazon.es/ap/signin?clientContext=261-8757701-2350731&openid.return_to=https%3A%2F%2Fsellercentral.amazon.es%2Fhome&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=sc_es_amazon_v2&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&mons_redirect=sign_in&ssoResponse=eyJ6aXAiOiJERUYiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiQTI1NktXIn0.OXnfPkFrVoFi4dXfMrd7Kwek1FssNeqXCta87Q1sSl7DqyJ98__Ryw.4muN2tysN_PkuvSf.GznbHEikHTllZro87ZYZUVtkWUrdodtIbspeQgF7icUzljTLsJ9OJCcDhh3SWh6pjIEoME_cB7BjSiYsMxXdzC_6AmgEYy6ZwL4Fbh3ihkizNyVPa1j09UxedsZRR3M0Q5ScowfAIkBLN3E-_dLmYWprisRLsH4P7E5Mgqwe_kYo3nw8cyd8thAySiZqAqsohOOz9vlb.nEUzoBpuJOR05XA169HidA) registrado en VTEX, el marketplace realiza el proceso de matching (hallar coincidencias), que consiste en unificar los anuncios de un mismo producto a través de su EAN.  

El EAN registrado en VTEX se utiliza para hacer la equivalencia con los [ASIN](https://afiliados.amazon.com.mx/) (*Amazon Standard Identification Number, o número de identificación estándar de Amazon*) correspondientes en Amazon. Para hacer el emparejamiento entre EAN y ASIN, es necesario realizar el matching manualmente. La correspondencia entre EAN y ASIN debe ser exacta para que los anuncios se vinculen correctamente.  

![Presentación match de anuncios](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/configuraci%C3%B3n-de-las-integraciones/match-de-anuncios-amazon_1.gif)

## Pestaña Oportunidad  

En la pestaña __Oportunidad__, el seller puede realizar el match de productos enviados a Amazon individualmente o en masa y buscar por nombre de producto. Al hacer clic en el ícono <i class="fas fa-ellipsis-v"></i>, el seller podrá elegir entre `ver detalles` de los productos y `ver anuncio sugerido` del producto relacionado en Amazon.  

A continuación te explicamos más sobre la estructura de esta pestaña.  

- __Barra de búsqueda:__ situada en la parte superior de la pestaña. El seller puede utilizarla para buscar por nombre completo o parcial del producto y SKU enviado.  
- __Casilla de selección:__ situada a la izquierda de la imagen de cada anuncio. Debe estar marcada para realizar el match con aquel anuncio.  
- __Contador:__ aparece junto al nombre de la pestaña y muestra el número de productos listados para realizar el match, es decir, la coincidencia.  
- __Tu anuncio:__ todos los anuncios enviados se mostrarán en esta columna, siguiendo esta estructura:  
  - Imagen del producto  
  - Nombre del producto  
  - Marca  

- __Sugerencia Amazon:__ se trata de anuncios con ASINs correspondientes, y se presentarán con la siguiente estructura:  
  - Imagen del producto  
  - Nombre del producto  
  - Marca  

## Pestaña Anuncios  

En la pestaña __Anuncios__, el seller puede visualizar todos los anuncios ya aprobados, buscar por nombre de producto, y al hacer clic en el ícono <i class="fas fa-ellipsis-v"></i> podrá elegir entre `ver detalles` de los productos y `ver anuncio sugerido` del producto correspondiente en Amazon.  

A continuación te explicamos más sobre la estructura de esta pestaña.  

- __Barra de búsqueda:__ situada en la parte superior de la pestaña. El seller puede utilizarla para buscar por nombre completo o parcial del producto y SKU aprobado.  
- __Contador:__ aparece junto al nombre de la pestaña y muestra el número de anuncios ya aprobados.  
- __Tu anuncio:__ todos los anuncios enviados y aprobados se mostrarán en esta columna, siguiendo esta estructura:  
  - Imagen del producto  
  - Nombre del producto  
  - Marca  

- __Anuncio vinculado:__ son anuncios vinculados en Amazon con el ASIN correspondiente, y se mostrarán siguiendo esta estructura:  
  - Imagen del producto  
  - Nombre del producto  
  - Marca  

## Cómo realizar el matching manual entre productos  

Tras el [envío](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD), los productos estarán disponibles en la página de Match de anuncios Amazon. Para visualizar los anuncios no aprobados, accede al Admin VTEX, haz clic en *Marketplace >* __Match de anuncios Amazon__ o utiliza la barra de búsqueda de la parte superior de la página.  

### Match individual de anuncios  

En la pestaña `Oportunidad`, al hacer clic sobre el ícono <i class="fas fa-ellipsis-v"></i> que aparece al lado de cada producto, se muestran dos opciones `Ver detalles` y `Ver anuncio sugerido`. Ambas redirigen a nuevas páginas, una al match individual del producto y la otra para ver el anuncio sugerido publicado en el sitio web de Amazon, respectivamente.

Estos son los botones disponibles en cada una de las páginas y sus acciones: 

- **Botón `Rechazar`:** este botón elimina la sugerencia de match y el seller deberá enviar nuevamente el producto si lo desea, siguiendo el [tutorial de envío de productos](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD).
- **Botón `Rechazar y pedir revisión`:** si el seller no está de acuerdo con la sugerencia de match y desea pedir una revisión a Amazon, debe escoger esta opción. Al hacer clic en este botón, se redirigirá al seller a la página para abrir tickets de soporte de Amazon y la sugerencia de match se mostrará en la lista de oportunidades.
El seguimiento de la revisión se debe realizar mediante el dashboard de tickets de Amazon.
- **Botón `Publicar`:** si el seller está de acuerdo con la sugerencia propuesta por Amazon, solo basta hacer clic en `Publicar`.

Para aprobar el match, el seller debe seguir los pasos a continuación:  

1. En la pestaña `Oportunidad`, haz clic en el ícono <i class="fas fa-ellipsis-v"></i>.  
2. Haz clic en la opción `Ver detalles`.  
3. Consulta la información que aparece en la página.    
![Match individual de anuncios](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/configuraci%C3%B3n-de-las-integraciones/match-de-anuncios-amazon_2.png)

4. Según la conclusión del análisis, haz clic en uno de los botones disponibles: `Publicar`, `Rechazar y pedir revisión` o `Rechazar`.

Tras la confirmación, tus anuncios se enviarán y se pondrán en cola para su procesamiento. Una vez aprobado, el anuncio aparecerá en la pestaña __Anuncios__, donde podrás __"ver detalles" de tu anuncio, ver "anuncio sugerido por Amazon"__ y __buscar__ anuncios en la barra de búsqueda.  

### Match de anuncios en masa

En la pestaña `Oportunidad`, todos los productos listados que presenten equivalencia entre Tu anuncio y Sugerencia de Amazon necesitan aprobarse manualmente. Para aprobar correspondencias de SKU y ASIN sigue los pasos a continuación.  

1. En la pestaña `Oportunidad`, marca la casilla situada junto al título de los anuncios con equivalencia SKU <> ASIN.  
Al seleccionar los productos, aparecerá en la pantalla el siguiente pop up indicando cuántos productos se han seleccionado.  

![popupES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/configuraci%C3%B3n-de-las-integraciones/match-de-anuncios-amazon_3.png)

2. Al finalizar la selección de productos, haz clic en `Publicar seleccionados`.  

3. En el pop up de confirmación del matching, comprueba los anuncios elegidos y haz clic en `Publicar seleccionados`.  

![Confirmacioin del matching](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/configuraci%C3%B3n-de-las-integraciones/match-de-anuncios-amazon_4.png)

Tras la confirmación, tus anuncios se enviarán y se pondrán en cola para su procesamiento. Una vez aprobado, el anuncio aparecerá en la pestaña __Anuncios__, donde podrás __"ver detalles" de tu anuncio__, __ver "anuncio sugerido" por Amazon__ y __buscar__ anuncios en la barra de búsqueda.  

Los anuncios que no devuelvan coincidencias deberán ser reenviados. Para ello, consulta el [tutorial de envío de productos](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD).  

Antes de realizar un nuevo envío, asegúrate de que los campos `categoría global` y `EAN` están configurados como se indica en el paso a paso la [Preconfiguraciones del catálogo](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#3-pre-configuracoes-no-catalogo), y que todos los productos cumplen los requisitos de la [plantilla de atributos obligatorios de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon).

