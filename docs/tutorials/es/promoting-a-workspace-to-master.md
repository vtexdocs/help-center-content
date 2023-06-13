---
title: Promoviendo un workspace para master
id: EZrGbVVY1ECcEC0YE0aA8
status: DRAFT
createdAt: 2017-09-12T21:37:03.530Z
updatedAt: 2020-03-13T21:24:57.603Z
publishedAt: 
firstPublishedAt: 2019-05-16T17:44:09.660Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: promoviendo-un-workspace-para-master
legacySlug: promover-workspace-para-master
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Si su workspace ya está en modo de producción, su workspace puede ser promovido a master. Cuando promovemos un workspace para master, todos los cambios realizados en él estarán disponibles para el usuario final, es decir, su aplicación finalmente estará disponible para el público.

Después de que el desarrollador ya haya probado las configuraciones del workspace y esté seguro de que todo está bien, puede promover este workspace para master.

Para hacer esto, ingrese al workspace y use el siguiente comando:

`vtex workspace promote`

El estado de un workspace que es master es `production true`.
