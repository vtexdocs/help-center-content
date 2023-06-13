---
title: La actualización del vendedor a través de Admin está devolviendo algunos campos al valor por defecto después de cambiarlo a través de la API
id: 2gtqnZmCW59OKoqRpU3UaQ
status: PUBLISHED
createdAt: 2022-06-30T12:21:23.852Z
updatedAt: 2022-11-25T22:00:35.980Z
publishedAt: 2022-11-25T22:00:35.980Z
firstPublishedAt: 2022-06-30T12:21:24.538Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: la-actualizacion-del-vendedor-a-traves-de-admin-esta-devolviendo-algunos-campos-al-valor-por-defecto-despues-de-cambiarlo-a-traves-de-la-api
kiStatus: Backlog
internalReference: 608120
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Después de utilizar las API del registro de vendedores para modificar campos como trustPolicy, SecutityPrivacyPolicy, ArchiveId y MerchantName y volver al administrador de la gestión de vendedores y guardar el vendedor a través de allí, la información de esos campos se establecerá de nuevo en el valor predeterminado.



## Simulación



1. Utilice la API "Actualizar Vendedor por Id. de Vendedor" y modifique el campo "trustPolicy" a "AllowEmailSharing" en lugar de "Default";
2. 2. Espere el tiempo de caché y compruebe mediante la API "Obtener datos del vendedor por Id" que el campo se ha actualizado.
3. Vaya a la interfaz de gestión de vendedores en el Admin y guarde el vendedor a través de allí (no es necesario cambiar nada);
4. 4. Espere el tiempo de caché y compruebe mediante la API "Get Seller Data By Id" que el campo ha vuelto al valor por defecto, en este caso "Default";



## Workaround


No hay solución por el momento.

