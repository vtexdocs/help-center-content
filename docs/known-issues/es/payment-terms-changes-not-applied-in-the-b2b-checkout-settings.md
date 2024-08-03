---
title: 'Los cambios en las condiciones de pago no se aplican en la configuración del pago B2B'
id: 12PfZx6O0MIUSIFdpQdUdI
status: PUBLISHED
createdAt: 2024-04-18T19:07:22.743Z
updatedAt: 2024-07-25T21:47:29.442Z
publishedAt: 2024-07-25T21:47:29.442Z
firstPublishedAt: 2024-04-18T19:07:23.644Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: los-cambios-en-las-condiciones-de-pago-no-se-aplican-en-la-configuracion-del-pago-b2b
locale: es
kiStatus: Fixed
internalReference: 1019548
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La actualización de las condiciones de pago en la interfaz de usuario de detalles de la organización para una organización no se aplica a la configuración de pago B2B.

Este comportamiento se debe a que la actualización solo se produce para la organización, pero la configuración de pago B2B utiliza información del centro de costes, que no se actualiza en la interfaz de detalles de la organización.



## Simulación



- Cree una organización;
- En la interfaz de usuario de detalles de la organización, actualice las condiciones de pago;
- Acceda al sitio web, monte un carrito y acceda a la caja; las Condiciones de pago seguirán siendo las mismas.



## Workaround



- Acceda a GraphQL IDE y seleccione vtex.b2b-organizations-graphql;
- Utilice la siguiente consulta para obtener los detalles del centro de costes:

    { getCostCenterById (id: "introduzca aquí el id del centro de costes"){ name addresses{ addressId addressType addressQuery postalCode country receiverName city state street number complement neighborhood geoCoordinates reference } phoneNumber businessDocument customFields{ name type value dropdownValues{ value label } useOnRegistration } stateRegistration paymentTerms{ id name } }}

- Utilice la siguiente consulta para obtener las condiciones de pago de la organización:

    { getOrganizationById(id: "introduzca aquí el id de la organización"){ paymentTerms{ id name } }}



- Enviar una mutación para actualizar el centro de coste, añadiendo las condiciones de pago de la organización a la respuesta del centro de coste:

    mutation updateCostCenter($id: ID!, $input: CostCenterInput!) { updateCostCenter( id: $id input: $input ){ id status }}{ "id": "", "input": { "nombre": "", "addresses": [{"addressId": "", "addressType": "", "addressQuery": "", "postalCode": "", "country": "", "receiverName": "", "city": "", "state": "", "street": "", "número": "", "complemento": null, "barrio": "", "geoCoordinates": [], "reference": null } ], "phoneNumber": "", "businessDocument": "", "customFields": [], "stateRegistration": "", "paymentTerms": [{ "id": "", "name": "" }, { "id": "", "name": "" }] }}







