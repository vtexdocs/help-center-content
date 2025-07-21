---
title: "Error al aprobar skus rechazados o revisados por Calidad de la Oferta"
id: 7fRMTxq7CFRkyZeK08AGIg
status: PUBLISHED
createdAt: 2023-11-23T13:46:30.453Z
updatedAt: 2024-03-25T12:22:46.687Z
publishedAt: 2024-03-25T12:22:46.687Z
firstPublishedAt: 2023-11-23T13:46:31.370Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: error-al-aprobar-skus-rechazados-o-revisados-por-calidad-de-la-oferta
locale: es
kiStatus: Fixed
internalReference: 940998
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un sku falla las reglas de Calidad de Oferta creadas por el Marketplace, va directamente a la "Pestaña de Revisión" o "Pestaña de Rechazados" de Skus Recibidos.

Sin embargo, al intentar aprobar el sku, se devuelve un mensaje de error: "Lo sentimos, algo ha ido mal en el Catálogo. Por favor, inténtelo de nuevo o póngase en contacto con VTEX si el problema persiste".

Esto sucede porque el módulo Matcher no fue capaz de llenar la información del producto y del sku después de enviar el sku a estas Fichas (puedes verificar esto usando las APIs):
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Marketplace/error-al-aprobar-skus-rechazados-o-revisados-por-calidad-de-la-oferta_1.png)


##

## Simulación



1. Crear una regla opcional u obligatoria sobre la Calidad de la Oferta;
2. 2. Espere a que un sku falle la regla y vaya a la pestaña Revisado/Rechazado;
3. Intente aprobar el sku y obtenga un mensaje de error;
4. 4. Compruebe a través de la API si el objeto de coincidencias se rellena como en la imagen anterior.



## Workaround


Aprobar el sku a través de la API pasando la información correcta del producto y del sku manualmente.





