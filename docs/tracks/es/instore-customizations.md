---
title: 'Como personalizar el inStore'
id: 4mwdBrFsmE2EPE0FzgX28b
status: DRAFT
createdAt: 2020-06-28T16:45:29.940Z
updatedAt: 2021-11-25T13:59:37.209Z
publishedAt: 
firstPublishedAt: 2020-06-28T17:11:13.723Z
contentType: trackArticle
productTeam: Shopping
slug: instore-personalizaciones
locale: es
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: instore-personalizaciones
---

>❗ La mayoría de las personalizaciones de inStore implican cambiar el archivo JavaScript `checkout-instore-custom.js`. Esta operación solo debe ser realizada por personas con experiencia en programación. Cambios incorrectos en este archivo pueden causar errores críticos.

## Acceso al archivo de personalización del inStore

Usted puede acceder al archivo de personalización directamente desde la URL de la página o mediante la navegación en el panel administrativo de VTEX.

### Accediendo directamente

Actualmente, la mayoría de las personalizaciones de inStore se realizan cambiando el archivo `checkout-instore-custom.js`, que se encuentra en la configuración de Checkout, dentro del panel administrativo de su tienda VTEX.

Para acceder a este archivo directamente, puede ingresar la siguiente URL en su navegador: `https://{{AccountName}}.myvtex.com/admin/portal#/sites/default/code/files/checkout-instore-custom.js`

En este caso, `{{AccountName}}` debe reemplazarse con el nombre de su cuenta en VTEX.

### Accediendo desde el menú Admin

Alternativamente, puede buscar el archivo de configuración desde la página de inicio de VTEX Admin, a través de `https://{{AccountName}}.myvtex.com/admin`.

En el menú principal, haga clic en __Checkout__ y luego haga clic en el símbolo de engranaje de la tienda, como se muestra en la imagen a continuación.

![20. inStore Customizations - 1 - ES.png?h=250](https://images.ctfassets.net/alneenqid6w5/4EDg8NKDGXRYEG6C8t6TjM/5e7c8c88e79ad04b7c6b0a31795a0b20/20._inStore_Customizations_-_1_-_ES.png_h_250)

Haga clic en la pestaña __Código__ y luego en el archivo `checkout-instore-custom.js`, que se encuentra en la lista de archivos a la derecha.

![20. inStore Customizations - 2 - ES.png?h=250](https://images.ctfassets.net/alneenqid6w5/6mGe02KwVH7z0HGy6UpgKQ/6d4d983a3aa4bf7e3ec98540b3bc23f0/20._inStore_Customizations_-_2_-_ES.png_h_250)

## Cambiar el archivo de personalización del inStore

`checkout-instore-custom.js` es un archivo JavaScript que acepta una serie de funciones, variables y objetos responsables de cambiar los comportamientos estándar de la aplicación inStore.

Para realizar cualquier cambio, simplemente agregue o modifique las líneas de código directamente en el cuadro de edición de archivos, en el Admin de VTEX, y finalmente haga clic en el botón __Guardar__, como se muestra en la imagen a continuación.

![20. inStore Customizations - 3 - ES.png?h=250](https://images.ctfassets.net/alneenqid6w5/7xWS4qln2lhLN1CgM9VwOy/69495b399f32730531e0b8eb553d6d94/20._inStore_Customizations_-_3_-_ES.png_h_250)

>⚠️ Siga siempre las instrucciones de personalización en esta documentación y realice solo los cambios como se indica aquí.

## Personalizaciones en la tienda

Estas son algunas de las principales personalizaciones que se pueden realizar hoy en inStore. La mayoría de ellos requieren cambios en el archivo `checkout-instore-custom.js`:

- Configurar la identificación del cliente
- Cambiar el idioma de la tienda
- Activar campo de observación en la pantalla de pedido
- Habilitar la transferencia de carrito entre dispositivos
- Habilitar recomendaciones de productos
- Activar filtro de pedidos por vendedor
- Forzar disponibilidad de stock
- Agregar texto adicional en la impresión del pedido
