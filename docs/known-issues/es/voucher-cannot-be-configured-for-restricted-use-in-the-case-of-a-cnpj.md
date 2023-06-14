---
title: 'No se puede configurar vale para uso restricto en el caso de CNPJ [NIF de persona jurídica]'
id: 4k3FdaYP3WUqYsAeUSGY22
status: PUBLISHED
createdAt: 2017-04-11T21:26:42.491Z
updatedAt: 2022-12-22T20:54:14.031Z
publishedAt: 2022-12-22T20:54:14.031Z
firstPublishedAt: 2017-04-11T21:40:39.506Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_35
tag: Portal (CMS)
slug: no-se-puede-configurar-vale-para-uso-restricto-en-el-caso-de-cnpj
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Una tienda necesita compartir un vale con los miembros de un grupo específico, por ejemplo, una empresa. Sin embargo, no hay cómo aplicar la opción de restringir para CNPJ.

Por lo tanto, cuando el vale tiene la configuración del campo __Restricto__ señalada como `Sí`, la restricción ocurre solamente para CPF (NIF de persona física).

En los casos en que un CNPJ tiene solamente un CPF asociado, el vale funcionará.

## Simulación

1. Entrar en el módulo __Catalog__.
2. Hacer clic en __Controles de Campaña__.
3. Hacer clic en __Vale__.
4. Crear o modificar un vale.
5. Insertar CNPJ.
6. Marcar como Restricto.
7. Marcar como Reutilizable.

Al usar vale con usuarios registrados en la tienda que tienen en su registro la información de ese CNPJ el vale no tendrá efecto.

## Workaround

El workaround sería mantener la restricción por CPF.

Ese sistema, incluido en el Portal, se está sustituyendo. Ya es posible usar el nuevo Giftcard Hub a través de APIs.

Ver nuestra documentación sobre [integración con gift card](/es/tutorial/como-configurar-pago-con-gift-card).

Y también nuestra [documentación técnica sobre APIs](/es/developer-docs/).

