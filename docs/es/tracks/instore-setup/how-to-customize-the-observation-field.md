---
title: 'Cómo personalizar el campo de observación'
id: 3os5JpgOpiU500Yz2zOl19
status: ARCHIVED
createdAt: 2019-05-22T19:00:51.038Z
updatedAt: 2020-08-03T20:02:10.252Z
publishedAt: 
firstPublishedAt: 2019-05-22T21:10:23.345Z
contentType: trackArticle
productTeam: Shopping
slug: como-customizar-el-campo-de-observacion
locale: es
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugES: instore-setup
---

inStore tiene un campo "Observación" donde se puede guardar informaciones  adicionales en el pedido. Los datos se envían al OMS a través del campo `openTextField`, pudiendo ser recuperados posteriormente en el Admin o a través de la API.

Si desea personalizar este campo para recibir algún dato específico, por ejemplo, el DNI del vendedor, es posible hacerlo a través de una configuración en inStore.

Para cambiar el nombre del texto que se muestra por estándar, basta con editar el archivo `checkout-instore-custom.js` presente en el admin del Portal. Allí usted necesita encontrar el objeto `window.INSTORE_CONFIG` y añadir el fragmento de código disponible a continuación:

```
window.LOCALE_MESSAGES = {
  locale: "es",
  messages: {
    es: {
      cartObservation: "DNI Vendedor", // título que aparece en el carrito
      cartObservationTitle: "DNI Vendedor", // título que aparece en la ventana modal de observación 
      observationNote: "Digite el DNI del vendedor" // descripción de la ventana modal de observación 
    }
  }
};
```
>❗ No quite ninguna de las otras propiedades presentes en el objeto
> `window.INSTORE_CONFIG`, para evitar que se rompan otras funcionalidades.

Si fuera necesario aplicar alguna lógica de validación o máscara a los datos ingresados en este campo, puede incluir en el archivo `checkout-instore-custom.js` una función que escuche el evento `note.visible` que se dispara cuando se abre la ventana modal y luego desarrollar su lógica.

```
document.addEventListener(
  "note.visible",
  function() {
    // agregar la lógica de máscara, validación,  etc
    // ejemplo: para obtener el elemento textarea de observación es posible hacer
    // var note = document.getElementById('note')
  },
  false
);
```

Si necesita algo más avanzado, como realizar un request específico basado en los datos ingresados, puede escuchar el evento `note.change` que se emite toda vez que se presiona el botón para guardar los datos.

```
document.addEventListener(
  "note.change",
  function(inputData) {
    // agregar lógica que utiliza los datos
    // siendo "inputData" el contenido del campo 
  },
  false
);
```
