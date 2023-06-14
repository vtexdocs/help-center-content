---
title: 'cardholderDocument no se envía a antifraude.'
id: 4KiYd2Duw9Njxl96zuIOIX
status: PUBLISHED
createdAt: 2023-05-22T18:24:46.148Z
updatedAt: 2023-05-22T18:24:46.652Z
publishedAt: 2023-05-22T18:24:46.652Z
firstPublishedAt: 2023-05-22T18:24:46.652Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: cardholderdocument-no-se-envia-a-antifraude
kiStatus: Backlog
internalReference: 829864
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Al crear el payload a enviar para el análisis antifraude, no estamos instanciando el cardholderDocument según los datos del doc, Send Antifraud Data, aunque la configuración en el manifiesto se haga según nuestra documentación, el comprador estará obligado a ponerlo en el checkout si así lo configura en la afiliación de antifraude, pero en ningún caso se enviará información sobre el documento del titular de la tarjeta al proveedor antifraude en el análisis de riesgo.



##

## Simulación



1. Configurar el desplegable "Campo documento titular tarjeta" como obligatorio u opcional;
2. Registrar una regla con antifraude configurada;
3. Realizar una compra rellenando la información del CPF en la tarjeta-UI en el momento del pago
4. Compruebe que en el cuerpo Enviar datos antifraude no se envía el cardholderDocument.



## Workaround


No hay solución disponible





