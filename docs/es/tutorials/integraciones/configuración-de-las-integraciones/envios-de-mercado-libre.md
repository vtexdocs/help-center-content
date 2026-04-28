---
title: 'Envíos de Mercado Libre'
id: 4fbF0Glf0R2YUCxYof4aIL
status: PUBLISHED
createdAt: 2025-09-29T19:29:40.317Z
updatedAt: 2025-09-29T19:55:28.724Z
publishedAt: 2025-09-29T19:55:28.724Z
firstPublishedAt: 2025-09-29T19:55:28.724Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: mercado-libre-envios
legacySlug: envios-de-mercado-libre
locale: es
subcategoryId: 
---

La integración con Mercado Libre ofrece dos modalidades logísticas que permiten entregas rápidas utilizando la infraestructura propia del seller (vendedor) o de partners: [**Envíos Flex**](#envios-flex) y [**Envíos Turbo**](#envios-turbo).  
Ambas modalidades se pueden configurar y gestionar desde la interfaz del Admin VTEX en **Admin VTEX > Marketplace > Mercado Libre > Preferencias > Logística.**  

> ℹ️ Mercado Libre define los sellers y sus respectivos anuncios que son elegibles para utilizar las modalidades de envío **Flex** y **Turbo.** 

## Envíos Flex

**Envíos Flex** se utiliza cuando el plazo de entrega de la compra es el **mismo día.** Es decir, los pedidos realizados antes del horario de corte que definas llegan el mismo día al comprador. Esta modalidad solo funciona en zonas urbanas específicas, calculadas con base en la dirección de tu almacén. 

### Activar Envíos Flex 

Para activar esta modalidad de envío sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Marketplace > Mercado Libre > Preferencias > Logística > Envíos Flex.**  
2. Haz clic en **Ventanas de entrega.**  
3. Elige entre las opciones **Entrega el mismo día** o **Entrega al día siguiente.**  
4. Configura la siguiente información:
 - Días de entrega   
 - Horarios de envío   
 - Capacidad de envío    
 - Horario de corte  
5. Haz clic en el botón `Guardar`.  
6. En el submenú lateral **Zona de cobertura** selecciona las regiones que deseas atender con **Envíos Flex.**  
7. Haz clic en el botón `Guardar`.  

### Configuración adicional

Para que la modalidad **Envíos Flex** funcione correctamente, debes seguir los siguientes pasos después de la [activación](#activar-envios-flex):  

1. Crear un [campo personalizado](/es/docs/tutorials/registrar-especificaciones-o-campos-de-producto) en el módulo [Categorías](/es/docs/tracks/categorias-definicion-de-concepto) para cada categoría en la que deseas aplicar **Envío Flex**.  El campo debe tener las siguientes especificaciones:  

| **Tipo de campo** | **Nombre del campo** |**Valor del campo**|
|:---:|:---:|:---:|
| CheckBox | Flex |Activar|

> ❗ El **tipo** y el **nombre** deben ser exactamente iguales a los valores de la tabla, de lo contrario la modalidad de envío no funcionará. 

2. Después de crear el campo, debes activarlo en cada producto elegible para la modalidad de envío.  

#### Desactivar Envíos Flex

Para desactivar la modalidad **Envíos Flex** sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Marketplace > Mercado Libre > Preferencias > Logística > Envíos Flex.**   
2. Haz clic en el menú de acciones <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.  
3. Haz clic en la opción **Desactivar Envíos Flex.**  
4. En la ventana emergente que aparece en la pantalla, haz clic en el botón `Continuar a Mercado Libre`.  
5. En el Centro de vendedores de Mercado Libre, desactiva la opción de envío.  

## Envíos Turbo

**Envíos Turbo** es una extensión de **Envíos Flex** y solo funciona si [**Envíos Flex**](#envios-flex) está activo. Esta es una modalidad de entregas **ultrarrápidas,** donde el pedido se entrega en hasta **tres horas** después de la compra. Esta modalidad solo funciona dentro de un radio de ocho kilómetros calculados con base en la dirección de tu almacén.  

**Envíos Turbo** solo se aplica a productos con las siguientes características:  

| **Altura** | **Anchura** |**Longitud**|**Peso**|
|:---:|:---:|:---:|:---:|
| 70 centímetros | 70 centímetros |70 centímetros|30 kilos|

### Configurar Envíos Turbo

Para configurar la modalidad **Envíos Turbo** debes seguir los pasos a continuación:

1. Configurar **horarios de entrega** seleccionando al menos tres horarios para los envíos.    
2. Configurar el **radio de cobertura.**  

> ℹ️ Los intervalos que se muestran en la pantalla de configuración son fijos y no se pueden personalizar.

#### Activar Envíos Turbo 

Para activar esta modalidad de envío sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Marketplace > Mercado Libre > Preferencias > Logística > Envíos Turbo.**  
2. Haz clic en **Ventanas de entrega.**  
3. Selecciona los horarios de envío.  
4. Define el número **Máximo de envíos.**  
5. Haz clic en el botón `Guardar`.  
6. En la pestaña lateral **Radio de cobertura** selecciona el radio de distancia que deseas atender con **Envíos Turbo.**  
7. Haz clic en el botón `Guardar`.  

#### Desactivar Envíos Turbo

Para desactivar la modalidad **Envíos Turbo** sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Marketplace > Mercado Libre > Preferencias > Logística > Envíos Turbo.**  
2. Haz clic en el menú de acciones <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.  
3. Haz clic en la opción **Desactivar Envíos Turbo.**  
4. En la ventana emergente que se muestra en la pantalla, haz clic en el botón `Continuar a Mercado Libre`.   
5. En el Centro de vendedores de Mercado Libre, desactiva la opción de envío.  

