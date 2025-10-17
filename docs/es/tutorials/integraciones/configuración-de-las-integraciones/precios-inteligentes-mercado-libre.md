---
title: 'Precios inteligentes de Mercado Libre'
id: 3J8t9EFFaaxmOloOqzU5Hz
status: PUBLISHED
createdAt: 2025-09-29T19:04:19.374Z
updatedAt: 2025-10-17T20:20:24.067Z
publishedAt: 2025-10-17T20:20:24.067Z
firstPublishedAt: 2025-09-29T19:25:29.346Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: smart-pricing-mercado-libre
legacySlug: precios-inteligentes-mercado-libre
locale: es
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

**Precios inteligentes** en la [integración de Mercado Libre](xxxxx) ofrece dos funcionalidades: **Sugerencias de precios** y el **Ajuste automático de precios**, que se describen más detalladamente a continuación.

Estas funcionalidades solo están disponibles para clientes que utilizan la integración **Mercado Libre Premium.**

## Sugerencias de precios

La funcionalidad **Sugerencias de precios** envía alertas a los sellers con sugerencias de ajuste de valor para sus anuncios publicados. Las sugerencias se basan en un análisis de productos similares de otros sellers.

Para activar **Sugerencias de precios** sigue los pasos a continuación:

1. Accede a **Admin VTEX > Marketplace > Mercado Libre > Preferencias > Precios inteligentes** o ingresa **Precios inteligentes** en la barra de búsqueda.
2. En la sección **Sugerencias de precios,** haz clic en el botón <i class="ph ph-play-circle"></i>. Se mostrará una ventana emergente de confirmación.
3. Haz clic en el botón `Confirmar`.

Después de activar la funcionalidad, debes monitorear las sugerencias generadas en el [módulo de precios](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) al que puedes acceder desde el Admin VTEX haciendo clic en **Marketplace > Conexiones > Precio**.

Puedes identificar todas las sugerencias de precios en el módulo Precio mediante el **ID** que sigue el formato `186-Automation`, como se muestra en la imagen a continuación:

![Precios inteligentes de Mercado Libre](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/configuraci%C3%B3n-de-las-integraciones/precios-inteligentes-mercado-libre_1.png)

## Ajuste automático de precios
**Ajuste automático de precios** permite a los sellers configurar reglas para que los precios de los anuncios publicados se actualicen de manera dinámica, siempre siguiendo el precio más bajo encontrado en anuncios similares en Mercado Libre y otros sitios web.

Para activar **Ajuste automático de precios** sigue los pasos a continuación:

1. Accede al **Admin VTEX > Marketplace > Mercado Libre > Preferencias > Precios inteligentes** o ingresa **Precios inteligentes** en la barra de búsqueda.
2. En la sección **Ajuste automático de precios,** haz clic en el botón `<i class="ph ph-plus"></i> Crear regla`. Se abrirá un panel lateral.
3. Llena los campos, `Información general` y `Comparar con precios`.   
4. Haz clic en el botón `Siguiente`.
5. Selecciona la categoría que deseas asociar a la regla.
6. Haz clic en el botón `<i class="ph ph-arrow-line-down"></i> Descargar SKUs para configuración` y llena los campos de **precio mínimo** y **precio máximo** de cada SKU.
7. Cargar la plantilla.
8. Haz clic en el botón `Confirmar`.
9. Haz clic en el botón `Activar regla` para crear y aplicar la nueva regla.

### Gestionar reglas

Puedes **editar, pausar** o **eliminar** cualquier regla existente.

#### Editar reglas

Para editar una regla sigue los pasos a continuación:

1. En la regla deseada haz clic en el botón <i class="ph ph-pencil-simple"></i>.  
2. Haz clic en el botón <i class="ph ph-arrow-line-down"></i> para descargar la plantilla.  
3. Edita los precios deseados en la plantilla.  
4. Carga la plantilla actualizada.  
5. Haz clic en `Confirmar cambios`.  

#### Pausar reglas

Para pausar una regla sigue los pasos a continuación:

1. En la regla deseada haz clic en el botón <i class="ph ph-pencil-simple"></i>.    
2. Haz clic en el ícono <i class="ph ph-pause-circle"></i>.    
3. Haz clic en el botón `Desactivar`.  

#### Eliminar reglas

Para eliminar una regla sigue los pasos a continuación:

1. En la regla deseada haz clic en el botón <i class="ph ph-pencil-simple"></i>.    
2. Haz clic en el ícono <i class="ph ph-trash"></i>.    
3. Haz clic en el botón `Eliminar`.
