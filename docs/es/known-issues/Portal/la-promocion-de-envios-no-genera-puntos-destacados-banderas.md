---
title: "La promoción de envíos no genera puntos destacados / banderas"
id: wwCzhTue5cSNhKFLFX9lP
status: PUBLISHED
createdAt: 2022-04-25T14:00:46.027Z
updatedAt: 2022-11-25T22:09:40.171Z
publishedAt: 2022-11-25T22:09:40.171Z
firstPublishedAt: 2022-04-25T14:00:46.772Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: la-promocion-de-envios-no-genera-puntos-destacados-banderas
locale: es
kiStatus: Backlog
internalReference: 527111
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los porcentajes de envío, el envío máximo, el envío gratuito y las promociones de regalo no están generando puntos destacados / banderas en los PDP y PLP.



## Simulación


- Cree una promoción de envío y establezca "La promoción es destacada" en Sí;
- Asegúrese de que no está utilizando ninguna restricción en el carrito (rango de código postal, grupo de clientes, etc., para más información https://help.vtex.com/tutorial/configuring-promotions-with-a-highlightflag--tutorials_2295);
- Asegúrese de que está utilizando el ViewPart correcto para mostrar esta información en el frente, para las tiendas del Portal: https://help.vtex.com/tutorial/lista-de-controles-para-templates?locale=pt, para las tiendas IO: https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-highlights
- Compruebe el PDP o PLP, la información destacada no estará disponible.



## Workaround


No hay ninguna solución.

