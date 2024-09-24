---
title: 'Configurar la impresión de resumen del pedido'
id: 12GPLA7JdjXEZFLV3HokZU
status: ARCHIVED
createdAt: 2020-06-28T15:48:40.058Z
updatedAt: 2021-11-03T18:38:20.227Z
publishedAt: 
firstPublishedAt: 2020-06-28T16:03:06.919Z
contentType: trackArticle
productTeam: Shopping
slug: configurar-la-impresion-de-resumen-del-pedido
locale: es
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: instore-personalizaciones
---

Cuando el vendedor completa un pedido con inStore, puede imprimir un resumen de ese pedido. Pero, para habilitar esta funcionalidad, usted debe realizar algunas configuraciones.

![15. Configurar impressão de resumo do pedido - 1](//images.ctfassets.net/alneenqid6w5/I5tu0upqIMUVTCxTHFfmL/d25cd88a3601658aabea48fcee8e97f0/15._Configurar_impress__o_de_resumo_do_pedido_-_1.png)

Se requieren dos pasos:

1. Usando el Admin de VTEX, active la opción de configuración del dispositivo en el menú del inStore.
2. En el app de inStore, configure el dispositivo de la impresora.

## Habilite la opción de configuración del dispositivo

>❗ La habilitación de la opción de configuración del dispositivo se realiza mediante un cambio en el archivo JavaScript `checkout-instore-custom.js`. Esta operación solo debe ser realizada por personas con experiencia en programación. Cambios incorrectos en este archivo pueden causar errores críticos.

Primero, abra el archivo `checkout-instore-custom.js`, disponible en el Admin de su cuenta VTEX (si no sabe cómo acceder a este archivo, consulte el tutorial [Cómo personalizar el inStore](https://help.vtex.com/es/tracks/instore-customizacoes--1z9kBm12oBPyVNDo1ivVc2)).

En este archivo, agregue la propiedad `configureDeviceEnabled` con valor `true`. Además, agregue el objeto `printingConfig`, y dentro de él agregue la propiedad `printByBroker`, también con un valor `true`.

El código debería verse como el siguiente ejemplo:

```json
window.INSTORE_CONFIG = { 
  configureDeviceEnabled: true, 
  printingConfig: { 
    printByBroker: true 
  },
}
```

>❗ No elimine ninguna de las otras propiedades presentes en el objeto `window.INSTORE_CONFIG`, para evitar romper otras funciones.

Este cambio hará que la opción __Configurar dispositivo__ aparezca en el menú principal de inStore, como se muestra en la imagen a continuación. Es a través de esta opción que configuraremos la impresora.

![15. Configurar impressão de resumo do pedido - 2](//images.ctfassets.net/alneenqid6w5/KxD08Gfiwa8mj6y6KzaKu/7fab9110af8d1337f5646252b8c9387c/15._Configurar_impress__o_de_resumo_do_pedido_-_2.png)

>ℹ️ **Nota:** hay una opción para imprimir automáticamente el resumen del pedido tan pronto como se complete el pedido. Para habilitarla, agregue la propiedad `printPageAutomatically` con el valor `true` dentro del objeto `printingConfig`. Vea a continuación cómo se vería el código en este caso.

```json
window.INSTORE_CONFIG = { 
  configureDeviceEnabled: true, 
  printingConfig: { 
    printByBroker: true,
    printPageAutomatically: true
  },
}
```

>❗ Nuevamente, no elimine ninguna de las otras propiedades presentes en el objeto `window.INSTORE_CONFIG`, para evitar romper otras funciones.

## Configure el dispositivo de impresora en inStore

Ahora veamos cómo configurar una impresora conectada a inStore para imprimir resúmenes de pedidos.

>⚠️ En primer lugar, para conectar una impresora al sistema de inStore, es necesario tener un par de credenciales VTEX (AppKey y AppToken) con los permisos de acceso adecuados. Recomendamos que el perfil de acceso vinculado a estas credenciales sea `inStore Sales Person`. Sin embargo, también se puede usar un perfil con más poderes, como Admin Super.

Con AppKey y AppToken en mano, siga los pasos a continuación:

1. Conecte la impresora a la computadora en la que está instalado inStore (para descargar inStore en su computadora, acceda al artículo inStore -[ Descargar la aplicación](https://help.vtex.com/es/tracks/instore-setup-basico--zav76TFEZlAjnyBVL5tRc#descargar-la-aplicacion "Descargar la aplicación"). Recuerde que para usar la impresora, debe usar una computadora con un sistema operativo Windows (Windows 7 o superior son compatibles).
2. Abra la aplicación inStore e ingrese a la tienda donde desea configurar la impresora.
3. En el menú principal de inStore, en la sección Configuración, ahora debería aparecer la opción __Configurar dispositivo__. Haga clic en esa opción.

![15. Configurar impressão de resumo do pedido - 3](//images.ctfassets.net/alneenqid6w5/4BZ0V5CVUYA2Kwv49PfTYS/4fa9c04035ef00f8a0df9a9ae71b326b/15._Configurar_impress__o_de_resumo_do_pedido_-_3.png)

Usted encontrará el resumen del dispositivo configurado. Si es la primera vez que realiza esta configuración, los campos en esta pantalla estarán vacíos. Si un dispositivo se ha configurado previamente, mostrarán algumas informaciones sobre el dispositivo (nombre del dispositivo e impresora predeterminada). Haga clic en el botón __Editar__.

![15. Configurar impressão de resumo do pedido - 4](//images.ctfassets.net/alneenqid6w5/4Xrv2WFGkaQ5ejAYZlF3ly/10e8b6b922cd7ee0f970f8db15cae1f9/15._Configurar_impress__o_de_resumo_do_pedido_-_4.png)

Aparecerá un formulario que contiene los campos __AppKey__, __AppToken__ y __Nome__ con los que desea identificar el dispositivo. Después de ingresar estos datos, haga clic en __Configurar__.

Después de incluir los datos anteriores, los vendedores pueden seleccionar la impresora de la lista de opciones para imprimir un resumen de sus pedidos a través de inStore. El sistema identifica la impresora por internet.
