---
title: 'Configurar el adquirente Cappta para el inStore'
id: 5FuKPBLD27Izx6Ou40CI6F
status: DRAFT
createdAt: 2020-06-28T15:24:26.367Z
updatedAt: 2021-02-23T15:46:54.731Z
publishedAt: 
firstPublishedAt: 2020-06-28T15:26:52.495Z
contentType: trackArticle
productTeam: Shopping
slug: configurar-el-adquirente-cappta-para-el-instore
locale: es
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugES: configurar-el-adquirente-cappta-para-el-instore
---

Para permitir transacciones a través de máquinas de tarjetas con inStore, usted necesita un adquiriente o un subadquirector para procesar sus pagos.

__Cappta__ es una sub-adquirente homologado por inStore en Brasil.

>⚠️ Si desea utilizar Cappta en un país diferente o si desea utilizar otro adquiriente que no esté homologado actualmente, usted deberá crear la integración con la aplicación de ese adquiriente. Para hacerlo, consulte el artículo [ Integrar el inStore a un nuevo adquirente de pago](https://help.vtex.com/es/tracks/instore-integration--6NTqymtXmL9cNy8w1ouAod).

>ℹ️ Actualmente, Cappta es compatible con las siguientes plataformas y dispositivos:
>
> Windows 8 o superior, con máquina de tarjeta USB Ingenico
>
> Android
> 

Antes de instalar la aplicación Cappta, asegúrese de haber completado el paso anterior de configuración del módulo de Pagos. Si ha completado este paso, siga los pasos a continuación para instalar y configurar el adquirente Cappta para el inStore.


## ¿Qué es Cappta?

Cappta es un sub-adquirente homologado por inStore que puede realizar transacciones a través de varios adquirentes (Stone, Cielo, Rede, etc.) Para obtener más información, visite el [sitio web de Cappta](http://www.cappta.com .br).

Actualmente, la integración funciona para sistemas Android y Windows. Si elige Cappta para procesar sus pagos, el proceso de instalación y configuración es el siguiente:


## Descargue la aplicación Cappta Pague

- **Android**: es posible descargar la aplicación directamente desde Google Play Store o mediante el siguiente enlace: https://play.google.com/store/apps/details?id=com.cappta.gpandroid
- **Windows**: es posible descargar el ejecutable **CapptaGpPlus** desde el siguiente enlace: https://github.com/Cappta/Homologa/tree/master/Instalador

## Cómo configurar la aplicación en su dispositivo
- **Android**: el flujo de configuración de la aplicación es el mismo que cualquier otra aplicación instalada en un smartphone o tablet. Abra la aplicación e ingrese la información de acceso (CNPJ, POS, Contraseña). Si no conoce esta información, comuníquese con Cappta.
- **Windows**: para configurar, ejecute el archivo .exe y complete la información de acceso (CNPJ, POS, Contraseña). Si no conoce esta información, comuníquese con Cappta.

>⚠️ Debe asegurarse de que la opción **pago web** esté habilitada en su cuenta de Cappta.

## Empareje la máquina de tarjetas

Si está utilizando una máquina de tarjeta Bluetooth, deberá emparejar la máquina con el dispositivo en el que se ejecutan inStore y la aplicación del adquirente, para que puedan comunicarse con la máquina.

El modo de emparejamiento puede variar según la máquina, pero en general, es necesario presionar el botón "0" (cero) para que la máquina ingrese al "modo de emparejamiento" y muestre la contraseña de emparejamiento. Luego, simplemente acceda a la configuración de Bluetooth del dispositivo (tablet o smartphone) y haga clic en el nombre de la máquina. El sistema debe solicitar la contraseña de emparejamiento.
