---
title: 'La interfaz de usuario detallada de las organizaciones B2B sólo muestra 100 primeros vendedores'
id: 6gZm70bIF0p92u6WtDZqdO
status: PUBLISHED
createdAt: 2024-01-15T21:29:19.105Z
updatedAt: 2024-08-26T13:48:07.233Z
publishedAt: 2024-08-26T13:48:07.233Z
firstPublishedAt: 2024-01-15T21:29:19.660Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organizations-detail-ui-only-shows-100-first-sellers
locale: es
kiStatus: Fixed
internalReference: 966450
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


B2B Organizations Detail UI sólo muestra 100 primeros vendedores; la UI no tiene paginación, lo que hace imposible seleccionar un vendedor si no está en la primera página.


##

## Simulación



- Asegúrese de que la cuenta tiene más de 100 vendedores registrados;
- Acceda a la pestaña de vendedores en la Interfaz detallada de organizaciones B2B;
- Sólo se mostrarán los 100 primeros vendedores.



## Workaround



- Realiza un getOrganizationById vía graphQL usando la app:

    { getOrganizationById(id:""){ id name tradeName status collections { id } paymentTerms { id } priceTables customFields { name type value useOnRegistration } salesChannel sellers { id name }}

- Realiza una mutación utilizando los datos del graphQL anterior:

    mutation { updateOrganization ( id: "", name: "" tradeName: "" status: "active" collections: [] paymentTerms: [] priceTables: [] customFields: [] salesChannel: null sellers: [{ id: "", name: "" }] ) { id }}





