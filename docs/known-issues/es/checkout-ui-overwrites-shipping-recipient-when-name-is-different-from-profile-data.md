---
title: 'La interfaz de pago sobrescribe el destinatario del envío cuando el nombre es diferente de los datos del perfil.'
id: 2IrL7DbWbzdgxZh6Us6n4q
status: PUBLISHED
createdAt: 2023-05-09T22:08:13.314Z
updatedAt: 2023-05-17T15:35:45.479Z
publishedAt: 2023-05-17T15:35:45.479Z
firstPublishedAt: 2023-05-09T22:08:14.290Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-interfaz-de-pago-sobrescribe-el-destinatario-del-envio-cuando-el-nombre-es-diferente-de-los-datos-del-perfil
locale: es
kiStatus: Fixed
internalReference: 822670
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Si un comprador tiene un perfil completo en el que el nombre y los apellidos difieren del destinatario del envío, cuando su perfil se rellena automáticamente al realizar el pago, la interfaz de usuario sobrescribe el Destinatario del envío con el valor del nombre y los apellidos combinados.



## Simulación



- Registre un comprador con un nombre y un apellido diferentes a los del destinatario del envío;
- Vaya a la caja y añada su correo electrónico para rellenar automáticamente la información del perfil;
- Compruebe el destinatario del envío, será el nombre y apellidos.



## Workaround


N/A



