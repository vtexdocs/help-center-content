---
title: 'Las condiciones de pago configuradas en Configuración B2B no se asignan tras aprobar Organizaciones'
id: 7pUMnYPWPHlhPzlWwTtWsL
status: PUBLISHED
createdAt: 2024-02-26T22:29:03.516Z
updatedAt: 2024-02-26T22:29:04.387Z
publishedAt: 2024-02-26T22:29:04.387Z
firstPublishedAt: 2024-02-26T22:29:04.387Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: payment-terms-configured-in-b2b-settings-is-not-assigned-after-approving-organizations
locale: es
kiStatus: Backlog
internalReference: 989507
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las condiciones de pago configuradas en los Ajustes de Organizaciones B2B no se guardan en los Detalles de la Organización.


##

## Simulación



- Configure las condiciones de pago por defecto en los Ajustes de Organizaciones B2B;
- Crear una solicitud de organización;
- Apruebe la solicitud de organización;
- Compruebe los detalles de la Organización; no tendrá ninguna condición de pago asignada.



## Workaround



- Asigne las condiciones de pago a la organización a través del administrador;
- Cree un disparador para el esquema de la entidad de la organización.




