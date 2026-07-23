---
title: "Historial de versiones"
createdAt: 2026-07-09T17:08:52.219Z
updatedAt: 2026-07-09T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: cms-version-history
locale: es
---

El CMS mantiene un historial de versiones para cada entrada, registrando quién hizo cada cambio y cuándo. Este historial te permite revisar cómo evolucionó el contenido con el tiempo, comparar estados anteriores y restaurar una versión anterior con un solo clic mediante la funcionalidad Restaurar versión anterior.

En esta guía, aprenderás a consultar la línea de tiempo del historial de versiones y restaurar una versión anterior de una entrada.

![version-history-overview](https://vtexhelp.vtexassets.com/assets/docs/src/cms-versioning___1a610e124a85b4fc41630dd75556960c.gif)

## Comprender la línea de tiempo del historial de versiones

El historial de versiones registra cada evento de guardado de una entrada. Cada vez que guardas contenido en la rama `main` o en otra rama, el CMS crea una nueva versión y almacena el nombre del usuario que hizo el cambio y la fecha en que se guardó. Para abrir el historial de versiones de una entrada:

1. En el Admin VTEX, ve a **Storefront > Todo el contenido**.  
2. Haz clic en la entrada que deseas revisar.  
3. Abre el panel lateral Historial de versiones desde la barra de herramientas de la entrada.

La línea de tiempo muestra todas las versiones guardadas de la entrada en orden cronológico. Para cada versión, puedes ver:

* La fecha y hora en que se guardó la versión.  
* El usuario que hizo el cambio.  
* La rama en la que se guardó la versión, como `main` u otra rama.  
* Qué versión está publicada actualmente en la rama `main`.

> ⚠️ Solo se pueden restaurar las versiones fusionadas en la rama `main`.

## Ver una versión anterior

Ver una versión anterior te permite inspeccionar contenido anterior antes de decidir si lo restauras. Para ver una versión anterior, sigue estos pasos:

1. En el panel lateral Historial de versiones, pasa el cursor sobre la versión que deseas revisar.  
2. Haz clic en `Ver versión`.

El formulario de la entrada se actualiza para mostrar el contenido como existía en ese momento. Puedes leer todos los campos y secciones, pero no puedes editar el contenido en esta vista. Después de verlo, puedes elegir una de las siguientes acciones:

| Acción | Descripción |
| :---- | :---- |
| Restaurar en main | Duplica la versión y la publica en la rama `main` como una nueva versión en el storefront. |
| Restaurar en rama | Duplica la versión y la agrega a una rama seleccionada para seguir editándola, sin afectar el storefront. |
| Cerrar | Cierra la versión anterior y vuelve al estado actual sin aplicar ningún cambio. |

## Restaurar una versión anterior

Con la funcionalidad Restaurar versión anterior, puedes volver a publicar contenido de una versión anterior sin volver a ingresar datos antiguos manualmente. La acción de restauración duplica la versión seleccionada y conserva todo el historial intermedio. Esta funcionalidad es útil en los siguientes escenarios:

* Página con errores después de que termina una campaña.  
  * Tu equipo actualizó la página de inicio para una promoción, pero el layout posterior a la campaña ahora muestra contenido incorrecto. Restaura la versión previa a la campaña directamente en `main` para corregir el storefront.  
* Reutilizar contenido de una campaña anterior.  
  * Quieres reutilizar el layout de Black Friday del año pasado como punto de partida para la campaña de este año. Restaura esa versión en una rama, actualiza las fechas y las ofertas, y fusiona la rama en `main` cuando esté lista.

### Restaurar en main

Usa Restaurar en main para publicar de inmediato una versión anterior en el storefront.

1. En el panel lateral Historial de versiones, pasa el cursor sobre la versión que deseas restaurar.  
2. Haz clic en `Ver versión`.  
3. Revisa el contenido para confirmar que es la versión correcta.  
4. Haz clic en `Restaurar en main`.

El CMS duplica la versión seleccionada, la agrega a la rama `main` como una nueva versión y la publica en el storefront. El historial de versiones se conserva y todas las versiones intermedias permanecen en la línea de tiempo.

> ⚠️ El contenido puede permanecer en caché durante algunos minutos después de restaurarlo en `main`. Espera un breve momento antes de confirmar que el cambio está disponible en el storefront.

### Restaurar en rama

Usa Restaurar en rama para traer una versión anterior a una rama y seguir editándola antes de publicarla.

1. En el panel lateral Historial de versiones, pasa el cursor sobre la versión que deseas restaurar.  
2. Haz clic en `Ver versión`.  
3. Revisa el contenido para confirmar que es el punto de partida correcto.  
4. Haz clic en `Restaurar en rama`.  
5. Selecciona la rama de destino.

El CMS duplica la versión seleccionada y la agrega a la rama elegida. El storefront no se ve afectado hasta que fusionas la rama en la rama `main`. Para más información sobre cómo fusionar una rama, consulta [Gestionando versiones y ramas](https://help.vtex.com/es/docs/tutorials/gestionando-versiones-y-branches).
