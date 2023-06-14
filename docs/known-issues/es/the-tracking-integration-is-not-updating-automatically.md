---
title: La integración de rastreo no está realizando la actualización automática
id: 2e9RR7AnEewejyOwQBKa2c
status: PUBLISHED
createdAt: 2020-11-11T19:38:05.072Z
updatedAt: 2022-12-22T20:43:07.680Z
publishedAt: 2022-12-22T20:43:07.680Z
firstPublishedAt: 2020-11-12T14:37:01.052Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: la-integracion-de-rastreo-no-esta-realizando-la-actualizacion-automatica
kiStatus: Backlog
internalReference: 
---

## Sumario

VTEX ofrece una integración de rastreo automático de pedidos. Además de que estos estén asociados a una transportadora que proporcione la funcionalidad de rastreo y que esté registrada en las [Políticas de Envío](https://help.vtex.com/es/tutorial/gestionar-transportista--tutorials_140), los pedidos deben estar relacionados con su respectivo rastreo.

La actualización automática del rastreo efectuada por las transportadoras no está funcionando en las tiendas VTEX. Por lo tanto, aunque las transportadoras y los pedidos estén configurados correctamente, las verificaciones automáticas sobre el status de la entrega no se están realizando y los emails de actualización de status no se están enviando a los clientes.  


## Simulación

Según lo detallado en el artículo [¿Cuáles transportadoras ponen a disposición el rastreo de pedidos?](https://help.vtex.com/es/tutorial/cuales-transportistas-ponen-a-disposicion-el-rastreo-de-flete--frequentlyAskedQuestions_303), para cada transportadora existe un método para  implantar la integración del rastreo automático de pedidos —el cual verifica automáticamente el status de la entrega cada seis horas, hasta por 12 días y medio, y envía un email al cliente cuando ocurre algún cambio en este. 

Normalmente, el cliente puede verificar el status actualizado de la entrega accediendo a la información del pedido y a través de los emails que recibe cuando ocurre algún cambio en el mismo. Sin embargo, por el momento, estas actualizaciones del status de la entrega no están disponibles para los clientes, a pesar de que los pedidos cuenten con la configuración de rastreo automático.  


## Workaround

Usted también puede actualizar los datos de rastreo activamente utilizando el endpoint [Update Order Tracking Status](https://developers.vtex.com/vtex-developer-docs/reference/tracking#updatetrackingstatus) de Orders API.

También es posible [ingresar la variable](https://help.vtex.com/es/tutorial/incluir-variaveis-do-pedido-no-template-de-e-mail-transacional--694Bn8eOeAWYQeaWGaOISe#otras-variables-de-emails-de-pedido) `trackingURL` en algunas [plantillas del Centro de Mensajes](https://help.vtex.com/es/tutorial/lista-de-templates-de-correo-eletronico-en-el-message-center--3g2S2kqBOoSGcCaqMYK2my), como **Order invoiced** y **Order shipped**, para que el cliente pueda seguir el rastreo a través de un link.


