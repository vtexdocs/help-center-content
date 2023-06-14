---
title: 'Disclosure Layout no se puede utilizar correctamente cuando prop animado se establece como verdadero'
id: 14QweVpzLO8TsyI68H79ZG
status: PUBLISHED
createdAt: 2022-04-19T19:53:22.409Z
updatedAt: 2022-11-25T22:13:15.022Z
publishedAt: 2022-11-25T22:13:15.022Z
firstPublishedAt: 2022-04-19T19:53:23.090Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: disclosure-layout-no-se-puede-utilizar-correctamente-cuando-prop-animado-se-establece-como-verdadero
kiStatus: Backlog
internalReference: 417947
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Hay un problema en el diseño de divulgación que sólo activa el bloque para mostrar, pero no se cierra. Esto es causado por la animación de la prop, que no está funcionando correctamente cuando se establece en el diseño de divulgación y no permite ocultar el elemento después de la apertura.



## Simulación


Vaya a cualquier tienda usando disclosure-layout con prop animado como true.
Intenta mostrar y ocultar el elemento.

El contenido no se puede ocultar.




## Workaround


Añade el siguiente manejador en los estilos, esto debería evitar el problema en la animación porque la clase está siendo cambiada:

    .vtex-disclosure-layout-1-x-content--search-description-content--hidden {display: none;}

