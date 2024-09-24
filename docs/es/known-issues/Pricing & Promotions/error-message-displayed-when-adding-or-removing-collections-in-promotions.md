---
title: 'Aparece un mensaje de error al añadir o eliminar colecciones en Promociones'
id: 5AsFQ2TTsThgMDDIQumcGO
status: PUBLISHED
createdAt: 2024-09-10T12:49:19.503Z
updatedAt: 2024-09-10T12:49:21.587Z
publishedAt: 2024-09-10T12:49:21.587Z
firstPublishedAt: 2024-09-10T12:49:21.587Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: aparece-un-mensaje-de-error-al-anadir-o-eliminar-colecciones-en-promociones
locale: es
kiStatus: Backlog
internalReference: 1095440
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al añadir o eliminar colecciones en las promociones, se muestra un mensaje de error en la interfaz de usuario: "Erro - ¡No se pueden crear criterios de búsqueda!". A pesar del mensaje de error, los cambios se guardan correctamente y aparece un mensaje "Promoção salva com sucesso!" debajo del error. El problema se observa específicamente cuando se utiliza el selector "_Diferente de:"_ con más de una colección en la lista. En particular, el error no se produce cuando se guarda una promoción con el selector _"Diferente de:"_ y sólo aparece una colección.


##

## Simulación



1. Accede al área de gestión de promociones en la interfaz de administración.
2. Crea o edita una promoción.
3. Utilice el selector "_Diferente de:"_ para añadir más de una colección.
4. Intente guardar la promoción.
**Comportamiento esperado**: La promoción debe guardarse sin mensajes de error.
**Comportamiento Observado**: Aparece un mensaje de error "Erro - ¡No se pueden crear criterios de búsqueda!", pero la promoción se guarda correctamente.
5. Pruebe el escenario con sólo una colección listada bajo el selector "_Diferente de:"_.
**Comportamiento observado**: No se produce el error y la promoción se guarda sin problemas.



## Workaround


La promoción se guarda correctamente a pesar del mensaje de error. Los usuarios pueden ignorar el mensaje de error y validar que los cambios se han aplicado volviendo a abrir la configuración de la promoción.






