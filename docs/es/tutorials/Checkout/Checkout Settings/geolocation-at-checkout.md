---
title: 'Configurar geolocalización en el Checkout'
id: tutorials_4345
status: PUBLISHED
createdAt: 2017-04-27T21:50:59.353Z
updatedAt: 2023-03-24T14:20:33.982Z
publishedAt: 2023-03-24T14:20:33.982Z
firstPublishedAt: 2017-04-27T23:11:15.960Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: geolocalizacion-en-el-checkout
locale: es
legacySlug: geolocalizacion-en-el-checkout
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

El objetivo de este tutorial es enseñar los pasos necesarios para utilizar la geolocalización en el checkout de su tienda. 

Por medio de esta funcionalidad, es posible hacer con que las entregas usen como base un punto geografico (latitud y longitud), y no un codigo postal.

### Como esto puede mejorar mi tienda?

La funcionalidad de geolocalización permite a su cliente la autogestión en la busqueda por la dirección de entrega.

O sea, en el momento del checkout, su cliente va tener una herramienta con la habilidad de geolocalizar las direcciones del Google Maps con un icono que marca la posición en el mapa.

Esto hace con que el usuario tenga más seguridad visual de que el pedido va llegar exactamente donde el elegió en el mapa, ya que las informaciónes de localización van a completarse automaticamente cuando el punto esté cargado.

Esta funcionalidad es muy util en regiones con la estructura de codigos postales mal definida.

### Configurando la logística

Para utilizar esta funcionalidad, siga los siguientes pasos:

Obtenga una Javascript API Key do Google Maps que le permita la integración con el servicio de geolocalización del Google. Aquí usted puede leer más sobre como obtenerla: 

[https://developers.google.com/maps/documentation/javascript/get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key)

Cuando tengas la API, siga los pasos adelante:

1. En el Admin VTEX, accede a __Configuración de la tienda > Envío > Envío por geolocalización__, o escribe __Envío por geolocalización__ en la barra de búsqueda en la parte superior de la página.
2. Ponga la API Key en el campo disponible y haga un click en __Registrar Llave__.

![Geolocalizacao 1 ES](//images.ctfassets.net/alneenqid6w5/3XL4C5B5SM48uGaeocUiw4/22560c9c40cc587cb7fa0884e48fcd5f/Geolocalizacao_1_ES.png)

>ℹ️ En algunos paises, el Google Maps no hace un mapping de buena calidad, lo que hace con que las direcciones queden mal escritas o incorrectas. En estes casos, la dirección debe ser alterada directamente en el mapa.

### Configurando el poligono

Para que esta configuración este correcta, es necesario registrar los poligonos correspondientes a cada una de las áreas de entrega en el mapa. Después, se debe asociarlas a las transportadoras que van hacer las entregas por medio de la inclusión de los IDs de estes poligonos en la tabla de flete. Vea como hacer esto en el artículo [Gestionar Geolocalización](/es/tutorial/gestionar-geolocalizacion/ "Gestionar Geolocalización").

### Configurando el Checkout

Después de crear el poligono y insertar el ID en la planilla de flete de la transportadora, el proximo paso es llenar la API Key del Google en las configuraciónes del Checkout:

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Checkout__.
4. En el campo **Google Maps API Key**, inserte la misma API Key utilizada en la etapa de logística.

![Google map keys](//images.ctfassets.net/alneenqid6w5/5Fly0uJ3DE9SmlK6I1oRNx/687470ae8e86c210d778e34057af2a5c/google_maps_api_key_es.PNG)

Asi que la API Key sea informada en las configuraciónes del Checkout, la geolocalización ya va estar visible en el checkout de la tienda.

### Cómo funciona la consulta del flete?

Con la geolocalización del checkout, el cálculo del flete siempre dará prioridad para esa característica, usando las informaciones de los poligonos (que engloban las coordenadas del destino seleccionado). 

Por lo tanto, aunque su cliente quiera usar el codigo postal, la geolocalización tendrá la preferencia del sistema a la hora de simular el valor del flete.
