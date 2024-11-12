---
title: 'Crear vendedor con información adicional devuelve un error'
id: 4dbB48N1vHHdXjL1M1zANe
status: PUBLISHED
createdAt: 2023-01-26T17:12:54.701Z
updatedAt: 2023-02-06T20:34:14.426Z
publishedAt: 2023-02-06T20:34:14.426Z
firstPublishedAt: 2023-01-26T17:12:55.159Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: create-seller-with-additional-information-is-returning-an-error
locale: es
kiStatus: Fixed
internalReference: 741110
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Al intentar crear un vendedor a través de Admin y cumplimentar el formulario opcional de Información Adicional, se devuelve un error como este:
`El vendedor se ha añadido correctamente, pero no se ha podido guardar cierta información.`
 ![](https://vtexhelp.zendesk.com/attachments/token/FYe7irRht0psXP4PwkEH7fm05/?name=image.png)

A pesar del mensaje, el vendedor no se ha guardado realmente.


##

## Simulación



1. Vaya a gestión de vendedores y haga clic en crear nuevo vendedor;
2. Cumplimentar toda la información obligatoria;
3. Cumplimentar al menos un dato que es opcional en el apartado Información adicional;
4. Compruebe que aparece el mensaje de error.



## Workaround


Primero cree el vendedor sin la Información Adicional.
Después de que el vendedor se crea correctamente, volver a su configuración y cumplir con la información adicional.





