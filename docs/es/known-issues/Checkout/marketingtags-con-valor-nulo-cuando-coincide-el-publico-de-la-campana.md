---
title: 'marketingTags con valor nulo cuando coincide el público de la campaña'
id: 17pTWB1gLNJgFy7KEZd8pk
status: PUBLISHED
createdAt: 2024-06-19T20:08:49.413Z
updatedAt: 2024-06-19T20:08:50.452Z
publishedAt: 2024-06-19T20:08:50.452Z
firstPublishedAt: 2024-06-19T20:08:50.452Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketingtags-with-null-value-when-campaign-audience-is-matched
locale: es
kiStatus: Backlog
internalReference: 1052895
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando una cuenta tiene un público de campaña y se hace coincidir con un usuario logueado, el checkout utiliza la información registrada en la sesión, que sólo tiene el id de la campaña. En `marketingTags`, debería tener el nombre de la campaña, pero es `null` ya que no hay información disponible en la sesión.


##

## Simulación



- Crear un público para la campaña;
- Inicie sesión con un usuario con el que coincida la campaña;
- Comprueba el campo `marketingData.marketingTags` en el orderForm, tendrá un valor nulo y el nombre de la campaña.
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)


##

## Workaround


N/A



