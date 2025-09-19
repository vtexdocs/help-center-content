---
title: 'Gestionar Geolocalización'
id: tutorials_138
status: PUBLISHED
createdAt: 2017-04-27T22:17:36.462Z
updatedAt: 2024-11-13T18:38:14.968Z
publishedAt: 2024-11-13T18:38:14.968Z
firstPublishedAt: 2017-04-27T23:00:44.871Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: registering-geolocation
legacySlug: gestionar-geolocalizacion
locale: es
subcategoryId: 5ckGPo3O5OG4AESKucmAaS
---

Geolocalización es el catastro de las localizaciones de entrega, a partir de la latitud y longitud de las direcciones. Aquí podremos montar “polígonos” para una atención logística específica, normalmente utilizada en zonas rurales e industriales, donde, si hay la división por lotes, por ejemplo, o en áreas de riesgo, donde se hace necesario excluir determinados locales dentro de una misma región.

Su estructuración es dinámica, puede ser fácilmente y literalmente diseñada en el mapa la región que se delimitará. El polígono creado será utilizado en la plantilla de flete que es catastrada en el transportista.

## Cómo generar un polígono

Accediendo a través del enlace [Genere sus polígonos con geojson.io](http://geojson.io/#map=2/20.0/0.0), usted será redirigido a un sitio web, donde podrá diseñar en el mapa el área que desea atender. A medida que genera el polígono, en la pantalla de la derecha, usted tendrá acceso al JSON que identifica el área diseñada. Es a través de ese JSON que el sistema comprenderá el lugar de entrega. Vea los pasos abajo para generar el polígono:

1. In the VTEX Admin, go to **Store settings > Shipping > Envío por geolocalización**, or type *Geolocalización* in the search bar at the top of the page.  
2. Haga clic en el enlace __Genere sus polígonos con geojson.io__.
3. Encuentre en el mapa la región que hará la entrega, la usabilidad es bien próxima a la del Google Maps.
4. Seleccione la opción __Draw a polygon__ (diseño del pentágono) o __Draw a restangle__ (diseño del cuadrado). Esa opción queda luego abajo de la lupa en el lado derecho del mapa.
5. Haga clic en el mapa en el lugar donde desea que sea el primer punto del polígono, y siga haciendo clic para diseñar el área, de forma que la última línea deberá encontrar el primer punto.
6. Con el polígono listo, copie el JSon que queda en la pantalla de la derecha y pegue en un archivo de texto para no perder la información.

Usted usará ese JSon para añadir el polígono en la plataforma, que comprenderá a partir de ese lenguaje cuáles códigos postales están incluidos en esa área.

> ❗ En la configuración de un polígono, no es posible delimitar áreas superpuestas, o sea, no es posible superponer coordenadas geográficas.

## Cómo añadir un Polígono

Cuando se añade un polígono, usted lo nombra para que se pueda identificarlo en la plantilla de flete para su consulta a través del código postal. Para añadir el polígono, siga los pasos abajo:

1. In the VTEX Admin, go to **Store settings > Shipping > Envío por geolocalización**, or type *Geolocalización* in the search bar at the top of the page.  
2. Haga clic en el botón __Añadir nuevo Polígono__.
3. Digite en el campo __ID__, cualquier información en formato de string (letra o número) sin espacio, de forma que identifique el polígono y el área que él atiende, por ejemplo, `ZonaLeste1`.
4. En coordenadas pegue el JSon copiado en el paso anterior, a partir del segundo corchetes, después del ítem __coordinates__, de forma que en el inicio del código existan dos corchetes y, así, como en el final. 

Un ejemplo de cómo quedaría es:

```
[
[-43.199872970581055,-22.95491586987507],
[-43.18270683288574,-22.950331824285765],
[-43.16760063171387,-22.959736853678606],
[-43.18777084350586,-22.973013428819623],
[-43.199872970581055,-22.95491586987507]
];
```

Después, basta guardar.

> ⚠️ Es importante prestar atención a que, si utiliza la geolocalización y, por tanto, rellena la columna **PolygonName** de la [plantilla de flete](/es/tutorial/plantilla-de-flete--tutorials_127), la transportadora en cuestión no utilizará las columnas **ZipCodeStart** y **ZipCodeEnd**, que deberán rellenarse con `0`.

En **Configuración de la tienda > Storefront > Checkout**, en la [pestaña Checkout](/es/tutorial/geolocalizacao-no-checkout/), el campo API Key debe rellenarse con la misma clave que se utilizó para activar la geolocalización.

Habilita también todas las API de Google Cloud Platform para asegurarte de que la clave funciona:

*   [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)
*   [Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
*   [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)

## Cómo editar un Polígono

Caso necesite alterar algún lugar de entrega de un polígono que ya existe, usted puede editar el polígono, de forma tan simple como la de crearlo. Para eso, siga los pasos abajo:

1. In the VTEX Admin, go to **Store settings > Shipping > Envío por geolocalización**, or type *Geolocalización* in the search bar at the top of the page.  
2. Haga clic en __Editar__ en el polígono deseado.
3. Haga clic en el enlace __Genere sus polígonos con geojson.io__.
4. Vuelva a dibujar la imagen en el mapa.
5. Copie las coordenadas.
6. Haga clic en el enlace __Cambiar Coordenadas__, que está justo debajo del campo de coordenadas.
7. Pegue los nuevos valores.
8. Haga clic en el botón __Guardar__.

Aquí el proceso es todavía más simples, pues no será necesario alterar ninguna información en la plantilla de flete, visto que es a través del ID que el sistema hace la consulta.

> ⚠️ En el caso de que el transportista y la hoja de flete hayan sido creados antes de registrar el Polígono, recomendamos que sea editada la compañía que tiene vínculo con ese Polígono, para actualizar la relación. Con esto después de la Creación o Cambio de un Poligono, abra la compañía y haga clic en Guardar, sólo para sensibilizar una actualización.
