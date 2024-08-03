---
title: 'El canal de ventas configurado en Configuración B2B no se asigna después de aprobar Organizaciones'
id: 7kxMtk2YHJdk5uPdj5wBs5
status: PUBLISHED
createdAt: 2023-07-21T20:03:44.671Z
updatedAt: 2023-07-21T20:03:45.295Z
publishedAt: 2023-07-21T20:03:45.295Z
firstPublishedAt: 2023-07-21T20:03:45.295Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: el-canal-de-ventas-configurado-en-configuracion-b2b-no-se-asigna-despues-de-aprobar-organizaciones
locale: es
kiStatus: Backlog
internalReference: 866933
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El canal de ventas configurado en los Ajustes de Organizaciones B2B no se guarda en los Detalles de la Organización.


##

## Simulación



- Configure un canal de ventas predeterminado en Configuración de Organizaciones B2B;
- Crear una solicitud de organización;
- Apruebe la solicitud de organización;
- Compruebe los detalles de la Organización; no tendrá ningún canal de ventas asignado.



## Workaround



- Asigne el canal de ventas a la organización a través del administrador;
- Cree un disparador para el esquema de la entidad de la organización:

    "v-triggers": [{ "name": "define-canal-deventas-por-defecto", "active": true, "condition": "salesChannel is null", "action": {"type": "guardar", "dataEntity": "organizaciones", "json": { "id": "{!id}", "salesChannel": "{añade aquí el salesChannelId definido en Configuración de organizaciones B2B}" } } }]





