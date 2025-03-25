---
title: 'Slider-layout bug when using prop infinite as always on mobile'
id: 4JERnak05tr2K8ICjjPjrN
status: PUBLISHED
createdAt: 2023-10-17T17:38:34.443Z
updatedAt: 2023-10-17T17:38:35.106Z
publishedAt: 2023-10-17T17:38:35.106Z
firstPublishedAt: 2023-10-17T17:38:35.106Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: sliderlayout-bug-when-using-prop-infinite-as-always-on-mobile
locale: es
kiStatus: Backlog
internalReference: 920725
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el slider-layout está configurado como `infinite: "always"` en el móvil el componente presenta un bug intermitente. Después de un rato desplazando la estantería los productos dejarán de aparecer y en su lugar aparecerá un espacio en blanco.


##

## Simulación



- Establezca la propiedad `infinite: "always"`.
- En el móvil, intente desplazar los productos
- Eventualmente los productos dejarán de aparecer y el deslizador quedará en blanco



## Workaround


Utilice la opción `showNavigationArrows: "always"`, el problema solo ocurre al desplazarse





