---
title: 'Puntos de recogida: radio máximo ampliado a 1000 km'
createdAt: '2026-09-30T00:00:00.000Z'
updatedAt: '2026-09-30T00:00:00.000Z'
contentType: updates
productTeam: Post-purchase
slugEN: 2026-09-30-maximum-pickup-point-radius-extended-to-1000-km
locale: es
announcementSynopsisPT: 'El límite de radio entre el punto de recogida y la dirección del cliente cambió de 50 km a 1000 km, y ahora se puede configurar directamente en el Admin VTEX sin necesidad de abrir un ticket.'
tags:
  - Optimización
  - Logística
---

El límite máximo del radio de búsqueda de puntos de recogida se amplió de 50 km a 1000 km. Con este cambio, la tienda puede ajustar el radio directamente en el Admin VTEX sin necesidad de abrir un ticket con el Soporte VTEX.

## ¿Qué cambió?

Antes, el radio máximo entre el punto de recogida y la dirección del cliente era de 50 km. Para usar un valor diferente, era necesario abrir un ticket para evaluación del equipo de Soporte VTEX.

Ahora, el radio puede configurarse con valores de hasta 1000 km directamente en la interfaz de configuración de envío de la tienda.

Las operaciones diarias de la tienda no cambian. El cambio afecta solo al valor máximo permitido en esta configuración.

## ¿Qué se necesita hacer?

No es necesario abrir un ticket. Para cambiar el radio de puntos de recogida, sigue los pasos a continuación:

1. En el Admin VTEX accede a **Configuración de la tienda > Envío > Configuración** o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página. También puedes acceder directamente a través de la URL `https://{accountName}.myvtex.com/admin/logistics#/config`, sustituyendo `{accountName}` por el nombre de tu cuenta.
2. Define el valor deseado para el radio de puntos de recogida hasta un máximo de 1000 km. Los valores superiores a 1000 km no se aplican, aunque la interfaz permita ingresarlos.
   > ℹ️ Recomendamos configurar el radio más pequeño que cubra el área atendida por tu operación y ampliarlo solo si es necesario. Radios mayores aumentan el tiempo de búsqueda de puntos de recogida, lo que puede afectar el tiempo de respuesta del checkout.
3. Guarda los cambios.

> ⚠️ Esta configuración se realiza a nivel de **cuenta**. Si tienes cuentas franquicia, debes cambiar la configuración en cada una de ellas.

## Más información

- [Puntos de recogida](https://help.vtex.com/es/docs/tutorials/puntos-de-recogida)
