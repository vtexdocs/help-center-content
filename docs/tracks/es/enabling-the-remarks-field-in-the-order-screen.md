---
title: 'Habilitar campo de observación en la pantalla de pedido'
id: 8Aj21R8bll0tdrxHWjVOs
status: DRAFT
createdAt: 2020-06-28T18:36:12.121Z
updatedAt: 2021-11-25T13:59:45.186Z
publishedAt: 
firstPublishedAt: 2020-06-28T18:40:29.042Z
contentType: trackArticle
productTeam: Shopping
slug: habilitar-campo-de-observacion-en-la-pantalla-de-pedido
locale: es
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: habilitar-campo-de-observacion-en-la-pantalla-de-pedido
---

<div class="alert alert-danger">
La personalización explicada en este artículo implica cambiar el archivo JavaScript <code>checkout-instore-custom.js</code>. Esta operación solo debe ser realizada por personas con experiencia en programación. Los cambios incorrectos en este archivo pueden causar errores críticos.
</div>

El app del inStore permite el uso de un campo de "Comentarios", donde es posible guardar información adicional con respecto a cada pedido.

Los datos ingresados en este campo se envían a través de la API al OMS, nuestro Sistema de Gestión de Pedidos. Completan el campo `openTextField`, que se puede recuperar en el Admin o mediante una llamada a la API.

Un ejemplo común de uso del campo de comentarios es el caso en que la tienda quiere recibir un número de identificación del vendedor que realizó la venta. El vendedor solo tiene que ingresar este número en el campo de comentarios cada vez que cierra un pedido.

El campo de comentarios se habilita mediante un cambio en el archivo `checkout-instore-custom.js`, dentro del objeto `window.INSTORE_CONFIG`. Al habilitar el campo, usted debe definir:

- El título del campo que aparece en el carrito.
- El título que aparece en el modal de comentarios.
- La descripción del modal de comentarios.

Esta información debe insertarse en el código como se muestra en el siguiente ejemplo.

```json
window.LOCALE_MESSAGES = {
  locale: "es",
  messages: {
    es: {
      cartObservation: "ID Vendedor", // título que aparece en el carrito
      cartObservationTitle: "ID Vendedor", // título que aparece en el modal de comentario
      observationNote: "Informe el ID del vendedor" // descipción del modal de comentario
    }
  }
};
```
 
<div class="alert alert-danger">
No elimine ninguna de las otras propiedades presentes en el objeto <code>window.INSTORE_CONFIG</code>, para evitar romper otras funciones.
</div>
                             
Si es necesario aplicar alguna lógica o máscara de validación a los datos ingresados en este campo, es posible incluir en el archivo `checkout-instore-custom.js` una función que escuche el evento `note.visible`, que se activa cuando el modal se abre, y luego desarrollar su lógica.

```json
document.addEventListener (
  "note.visible",
  function () {
    // agregar lógica de máscara, validación, etc.
    // ejemplo: para capturar el elemento "textarea" del campo de comentarios, puede usar el siguiente código:
    // var note = document.getElementById('note')
  },
  false
);
```

Si necesita algo más avanzado, como hacer una llamada específica basada en los datos ingresados, es posible escuchar el evento `note.change`, que se emite cada vez que se presiona el botón para guardar los datos.

```json
document.addEventListener (
  "note.change",
  function (inputData) {
    // agregar la lógica que usa los datos
    // el contenido del campo es el valor de "inputData"
  },
  false
);
```
