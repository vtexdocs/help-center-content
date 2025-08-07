---
title: "Voucher (GiftCard) de cliente no localizado en el módulo administrativo al realizar consulta por CPF"
id: 57ReN0F8H6iAsimuMoUe8Q
status: PUBLISHED
createdAt: 2017-07-27T15:42:13.805Z
updatedAt: 2022-12-22T15:07:19.226Z
publishedAt: 2022-12-22T15:07:19.226Z
firstPublishedAt: 2017-07-27T17:11:11.501Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_31
tag: Portal (CMS),Payments
slugEN: voucher-giftcard-de-cliente-no-localizado-en-el-modulo-administrativo-al-realizar-consulta-por-cpf
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al realizar una consulta de GiftCard en el Admin, por ID (documento), el voucher del cliente no aparece.

![vale](//images.contentful.com/alneenqid6w5/78Mt2DDgaIwg2I66gSYGgM/66de95f8e3b3b73d20a0165f4da67f88/vale.png)

## Simulación

Al realizar una consulta por ID, el sistema incluye una máscara en el siguiente formato: 999.999.999-99. Sin embargo, cuando un Voucher es creado por API, su ID se registra en el siguiente formato: 99999999999 (sin punto y guión).

Para simular el escenario:

1. Cree un Gift Card por API relacionándolo con un cliente (Documentación para la creación de Gift Cards: https://documenter.getpostman.com/view/18468/giftcard-system/6YtyvrM);
2. Acceda al módulo administrativo de los vouchers y haga una consulta por el ID del cliente relacionado;
3. El voucher no será listado porque el ID consultado seguirá el estándar 999.999.999-99 y el ID registrado seguirá el estándar 99999999999.

## Workaround

Para evitar el problema, es posible, en el propio campo del filtro con máscara, quitar los puntos y el guión.

Para consultar un ID sin puntos y guiones (creado por API), siga estos pasos:
1. Escriba el CPF en el campo de consulta;
2. Quite los puntos y el guión;
3. Haga clic en "Buscar".

