---
title: "XML - Simbolo de moneda en campo 'Parcelamento'"
id: 4s7hBA1MAUgeEC2Q4K8gKM
status: ARCHIVED
createdAt: 2017-06-26T15:22:31.980Z
updatedAt: 2024-02-02T20:08:19.240Z
publishedAt: 
firstPublishedAt: 2017-06-26T23:18:58.653Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xml-currency-symbol-in-the-installment
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al configurar una moneda en un XML, la misma se aplica a todos los campos, excepto para el campo **Parcelamento**. 

El campo **Parcelamento** siempre muestra la moneda "R$", independientemente de que la moneda configurada sea diferente.

![Parcelamento](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)


## Simulación

1. Acceder al módulo "Catalog";
2. Acceder al menú "Configuración";
3. Acceder a "XML";
4. Cliquear en "Nuevo XML" (ó modificar uno existente haciendo click en el botón "Alterar");
5. Asignar un valor distinto de "R$" al campo "Símbolo de moeda nos preços";
6. Tildar "Exhibir el contenido" del campo "Parcelamento";
7. Taggear el campo "Parcelamento";
8. Cliquear en el boton "Salvar";
9. Revisar el XML creado.

## Workaround

Actualmente, para modificar la moneda en el campo **Parcelamento** no existe una solución paliativa. 

