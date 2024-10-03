---
title: 'Configurar el adquirente Pagar.me para el inStore'
id: 1obqdkoH82yFWtaMbwcJKx
status: DRAFT
createdAt: 2020-06-28T15:32:06.737Z
updatedAt: 2021-02-23T15:39:04.382Z
publishedAt: 
firstPublishedAt: 2020-06-28T15:34:21.331Z
contentType: trackArticle
productTeam: Shopping
slugEN: setting-up-the-pagar-me-acquirer-for-instore
locale: es
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugES: configurar-el-adquirente-pagar-me-para-el-instore
---

Para permitir transacciones a través de máquinas de tarjetas usando inStore, usted necesita un adquiriente o un sub-adquirente para procesar sus pagos.

__Pagar.me__ es un sub-adquirente homologado por inStore en Brasil.

>⚠️ Si desea utilizar Pagar.me en un país diferente o si desea utilizar otro adquiriente que no esté certificado actualmente, usted deberá crear la integración con la aplicación de ese adquiriente. Para hacerlo, consulte el artículo [Integrar el inStore con un nuevo adquiriente de pagos](https://help.vtex.com/es/tracks/instore-integration--6NTqymtXmL9cNy8w1ouAod).

>ℹ️ Actualmente, el Pagar.me solo es compatible con los sistemas **Android**, con máquinas de tarjetas **Gertec MOBIPIN**.

Antes de instalar la aplicación de Pagar.me, asegúrese de haber completado el paso anterior de configuración del módulo Pagos. Si lo ha terminado, siga los pasos a continuación para instalar y configurar el adquirente Pagar.me para el inStore.


## ¿Qué es Pagar.me?

Pagar.me es un sub-adquirente homologado por inStore que acepta varias marcas de tarjetas (Visa, Mastercard, Elo, Amex, Diners, Discover, JBC, Aura, Hipercard, Hyper, VR, Alelo, Sodexo, Ticket). Para obtener más información, visite el [sitio web de Pagar.me](https://pagar.me).


## Descargue la aplicación Pagar.me inStore

- **Android**: usted puede descargar la aplicación directamente desde Google Play Store o mediante el siguiente enlace: https://play.google.com/store/apps/details?id=me.pagar.helix

## Cómo configurar la aplicación en su dispositivo

- **Android**: el flujo de instalación de la aplicación es el mismo que el de cualquier otra aplicación instalada en un smartphone o tablet. Para configurarlo, usted deve elegir la opción **Emparejar la máquina de tarjetas** y seleccionar la máquina que desea usar.

## Empareje la máquina de tarjetas

Si está utilizando una máquina de tarjetas Bluetooth, será necesario emparejar la máquina con el dispositivo en el que se ejecutan inStore y la aplicación del adquiriente, lo que les permitirá comunicarse con la máquina.

El modo de emparejamiento puede variar según la máquina, pero en general, es necesario presionar el botón "0" (cero) para que la máquina ingrese al "modo de emparejamiento" y muestre la contraseña de emparejamiento. Luego, acceda a la configuración de Bluetooth del dispositivo (tablet o smartphone) y haga clic en el nombre de la máquina. El sistema debe solicitar la contraseña de emparejamiento.
