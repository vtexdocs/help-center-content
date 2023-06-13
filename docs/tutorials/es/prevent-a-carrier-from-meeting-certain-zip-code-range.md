---
title: ¿Cómo impedir que un transportista atienda cierto rango de códigos postales?
id: 6GEYG5p9E4MOEy2qmY4uGa
status: PUBLISHED
createdAt: 2019-01-24T20:45:39.807Z
updatedAt: 2023-03-29T14:15:58.885Z
publishedAt: 2023-03-29T14:15:58.885Z
firstPublishedAt: 2019-01-24T22:03:33.994Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: impedir-que-transportista-atienda-cierto-rango-de-codigos-postales
legacySlug: impedir-que-transportista-atienda-cierto-rango-de-codigos-postales
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

Las franjas de código postal atendidas por un transportista son determinadas por la planilla de flete, que normalmente es enviada a la tienda por el propio transportista.

Pero es posible que usted necesite bloquear algún rango de códigos postales o un código postal específico. Es decir, usted puede querer impedir que, para determinado código postal o rango de códigos postales, ese transportista haga entregas, aunque por defecto pueda hacer.

Para ello, usted debe eliminar los códigos que no desea considerar en la planilla de flete.

### Ejemplo

Digamos que usted quiere excluir sólo el código postal __45920-000__ de la planilla.

Para ello, siga estos pasos:

1. En el Admin VTEX, accede a **Envío > Estratégia de Envío > Políticas de envío**, o escribe *Estratégia de Envío* en la barra de búsqueda en la parte superior de la página.  
2. Descargue la planilla de flete en **Descargar tarifas de envío**.   
3. Abra la planilla y busque las líneas correspondientes al rango de códigos donde el código postal a ser desconsiderado se encuadra, es decir: `ZipCodeStart` = __37900-001__ y `ZipCodeEnd` = __97904-999__.   
4. Cada una de estas líneas debe ser transformada en dos, de modo que el código postal 45920-000 sea ignorado. Por lo tanto, usted pasaría a tener: `ZipCodeStart` = __37900-001__ y `ZipCodeEnd` = __45919-999__ / `ZipCodeStart` = __45920-001__ y `ZipCodeEnd` = __97904-999__.

Con ello, la planilla de flete pasaría a "saltar" el código postal 45920-000. Por lo tanto, ya no se consideraría como una opción de dirección atendida por ese transportista.
