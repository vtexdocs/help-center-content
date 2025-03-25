---
title: 'Configurar el adquirente SiTef para el inStore'
id: 1Vr97VGNNWpaoyXe0rKV8U
status: DRAFT
createdAt: 2020-06-28T15:39:28.422Z
updatedAt: 2021-02-23T15:47:12.481Z
publishedAt: 
firstPublishedAt: 2020-06-28T15:42:37.386Z
contentType: trackArticle
productTeam: Shopping
slugEN: setting-up-the-sitef-acquirer-for-instore
locale: es
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugES: configurar-el-adquirente-sitef-para-el-instore
---

>⚠️ Es importante señalar que la integración con SiTef es una solución certificado, pero aún no se ha probado a gran escala.

Para permitir transacciones a través de máquinas de tarjetas usando el inStore, usted necesita un adquiriente o un sub-adquirente para procesar sus pagos.

__SiTef__ es un sub-adquirente homologado por inStore en Brasil.

>⚠️ Si desea utilizar SiTef en un país diferente o si desea utilizar otro adquiriente que no esté certificado actualmente, deberá crear la integración con la aplicación de ese adquiriente. Para hacerlo, consulte el artículo [Integrar el inStore con un nuevo adquiriente de pagos](https://help.vtex.com/es/tracks/instore-integration--6NTqymtXmL9cNy8w1ouAod).

>ℹ️ Actualmente, SiTef es compatible con los sistemas **Android** e **iOS**, con máquinas de tarjetas Ingenico o cualquier otra máquina certificada por SiTef.

Antes de instalar la aplicación SiTef, asegúrese de haber completado el paso anterior de configuración del módulo de Pagos.

## ¿Qué es SiTef?

SiTef es un sub-adquirente homologado por inStore que puede realizar transacciones a través de varios adquirentes (Stone, Cielo, Rede, etc.)

## Descargue la aplicación VTEX SiTef

- **Android**: puede descargar la aplicación directamente desde Google Play Store o mediante el siguiente enlace: https://play.google.com/store/apps/details?id=com.vtex.sitef
- **iOS**: puede descargar la aplicación directamente desde Apple Store o mediante el siguiente enlace: https://itunes.apple.com/us/app/vtex-sitef/id1214909778?mt=8

## Cómo configurar la aplicación en su dispositivo

Instalar la aplicación en Android e iOS es lo mismo que instalar cualquier otra aplicación instalada en un smartphone o tablet. Sin embargo, la configuración depende de un paso adicional además de abrir la aplicación e ingresar la información de acceso (`Store Id` e `Operator Id`).

Antes de ingresar esta información, es necesario definir qué servidor SiTef desea usar. Actualmente hay dos opciones:
- GSURF
- Servidor local

### GSURF

GSURF es una compañía que ofrece un servidor SiTef a través de VPN. Esto hace que sea muy fácil configurar pagos con SiTef, ya que el cliente no necesita infraestructura dedicada. Por lo tanto, si desea recibir transacciones con este sistema, esta es la opción más recomendada.

Al configurar el conector SiTef, disponible en VTEX Payments, deberá especificar `GSURF.SSL` como protocolo para que la aplicación VTEX SiTef envíe transacciones al servidor remoto.

>⚠️ **Importante:**: cuando utilice GSURF como protocolo, asegúrese de que su red permita los siguientes accesos:
>
> 
> **Versiones de firewall (solo tráfico saliente):**
>
> **Rango de IP:** 187.103.176.0/20 189.85.171.160/28 18.231.194.64/26
>
> **Puertos:** UDP-443; TCP-443; TCP-55844; TCP-55845
>
> **DNS LOCAL:** UDP-53 (resolución de nombre en gsurfnet.com)
> 

### Servidor local

También es posible utilizar un servidor local SiTef para recibir transacciones, configurando una infraestructura dedicada a esto. En este caso, es necesario contactar a SiTef para definir los requisitos para esta configuración local.

En el conector SiTef de VTEX Payments, usted deberá especificar el IP de este servidor local para que la aplicación VTEX SiTef pueda enviarle transacciones.

## Empareje la máquina de tarjetas

Si está utilizando una máquina de tarjetas Bluetooth, deberá emparejar la máquina con el dispositivo en el que se ejecutan inStore y la aplicación del adquirente, lo que les permitirá comunicarse con la máquina.

El modo de emparejamiento puede variar según la máquina, pero en general, es necesario presionar el botón "0" (cero) para que la máquina ingrese al "modo de emparejamiento" y muestre la contraseña de emparejamiento. Luego, acceda a la configuración de Bluetooth del dispositivo (tablet o smartphone) y haga clic en el nombre de la máquina. El sistema debe solicitar la contraseña de emparejamiento.
