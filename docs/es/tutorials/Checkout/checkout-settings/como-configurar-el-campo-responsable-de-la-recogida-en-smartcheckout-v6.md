---
title: 'Cómo configurar el campo "Responsable de la recogida" en SmartCheckout™ V6'
id: 2GsFnXUJxSOYEE6U2c4Syw
status: PUBLISHED
createdAt: 2018-11-09T12:18:14.596Z
updatedAt: 2023-07-27T17:07:55.563Z
publishedAt: 2023-07-27T17:07:55.563Z
firstPublishedAt: 2018-11-26T14:43:00.552Z
contentType: tutorial
productTeam: Shopping
author: 245tA425AIeioKAk2eaiwS
slugEN: how-to-set-up-the-responsible-for-pick-up-field-in-smartcheckout-v6
legacySlug: como-configurar-el-campo-responsable-de-la-recogida-en-smartcheckout-v6
locale: es
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

<div class="alert alert-info">
El campo <strong>Responsable de la recogida</strong> sólo está disponible para el <strong>SmartCheckout™ V6</strong>, versión compatible con la feature de Pick Up Points.
</div>

Los [puntos de recogida](/tutorial/configurar-pontos-de-retirada-pickup-points?locale=es) dan una opción más a sus clientes: en lugar de esperar la entrega, ellos pueden elegir ir hasta un punto definido y buscar los produtos personalmente. Por defecto, esta acción está vinculada al usuario registrado que efectuó la compra. Sin embargo, usted puede habilitar el campo `Responsable por la recogida` en el checkout de su tienda, para que su cliente pueda nombrar a otra persona para recoger el producto.

<div class="alert alert-warning">
Si tiene instalada la aplicación <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-checkout-ui-settings">Checkout UI Settings</a> en su tienda, el código CSS descrito en el procedimiento a continuación solo debe ingresarse a través de la aplicación. Los scripts insertados a través de la interfaz de administración VTEX (pestaña <b>Código > Archivos</b>) no se reproducen en las tiendas que tienen la aplicación instalada.
</div>

Para configurar el campo (que viene desactivado de forma predeterminada), siga los pasos abajo:

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Código__.
4. Desde el menú __Archivos__ ubicado en el lado derecho de la página, haga clic en `checkout6-custom.css`.
5. En el campo de edición del código _css_, incluya la información _css_ resaltada a continuación.
6. Haga clic en `Guardar`.

```
.vtex-omnishipping-1-x-container.shp-pickup-receiver{
    display: block; !import;
}
```

Después de seguir estos pasos, el campo `Responsable de la recogida` se mostrará en el checkout de su tienda.
