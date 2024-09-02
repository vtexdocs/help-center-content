---
title: 'La interfaz de usuario de la configuración no actualiza el "periodo de caducidad" de las cotizaciones'
id: 4CmuAYwDn7tcCiR9DQHSFb
status: PUBLISHED
createdAt: 2023-08-07T19:42:22.810Z
updatedAt: 2024-05-08T18:04:41.362Z
publishedAt: 2024-05-08T18:04:41.362Z
firstPublishedAt: 2023-08-07T19:43:56.788Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: la-interfaz-de-usuario-de-la-configuracion-no-actualiza-el-periodo-de-caducidad-de-las-cotizaciones
locale: es
kiStatus: Backlog
internalReference: 876576
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


B2B Quote settings UI no actualiza el valor del periodo de expiración; siempre es 30.


##

## Simulación



- Acceda a la página de configuración de Cotizaciones B2B y cambie el "periodo de caducidad".
- Actualice la página; no se aplica ningún cambio.



## Workaround



- Acceda a GraphQL IDE y seleccione vtex.b2b-quotes-graphql;
- Utilice la siguiente consulta para obtener la fecha de caducidad:

    { getAppSettings{ adminSetup { cartLifeSpan } }}

- Envíe una mutación para actualizar la fecha de caducidad a un valor diferente:

    mutation SaveAppSettings($input: AppSettingsInput!) { saveAppSettings(input: $input) { adminSetup { cartLifeSpan } }}{ "input": { "cartLifeSpan": }}





