---
title: "Las reglas de la tabla de precios no persisten al crear varias reglas sin actualizar la página."
id: 3ytvnLRltsfrNWpNVaCLr2
status: PUBLISHED
createdAt: 2025-07-08T12:48:18.889Z
updatedAt: 2025-07-08T12:57:31.528Z
publishedAt: 2025-07-08T12:57:31.528Z
firstPublishedAt: 2025-07-08T12:48:19.786Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: las-reglas-de-la-tabla-de-precios-no-persisten-al-crear-varias-reglas-sin-actualizar-la-pagina
locale: es
kiStatus: Backlog
internalReference: 1256473
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al crear varias reglas de precios para **Tablas de precios**, la interfaz no recarga correctamente las reglas existentes. Esto puede provocar que las reglas creadas anteriormente desaparezcan de la interfaz y, en algunos casos, se sobrescriban cuando se añaden nuevas reglas, lo que provoca la pérdida de datos. Este comportamiento no se produce cuando las reglas están asociadas a políticas comerciales, sólo a tablas de precios.

###


## Simulación



- Acceder al admin de cualquier cuenta
- Ir a la pantalla de Reglas de Precios
- Cree una regla de precios asociada a una **Tabla de Precios** (no a una Política Comercial).
- Sin actualizar la página, cree una segunda y tercera regla para la misma tabla de precios.
- Observe que:
  - La primera y la segunda regla pueden desaparecer de la interfaz de usuario.
  - Después de añadir la segunda regla, la primera ya no se mantiene.
- Reproduzca esto varias veces y confirme que sólo la última regla permanece guardada, mientras que las demás se pierden.



## Workaround


Actualice la página (F5) después de crear cada regla de precios para las tablas de precios. Esto asegura que la interfaz de usuario recargue todas las reglas existentes antes de añadir una nueva, evitando inconsistencias y la pérdida de reglas guardadas previamente.




