---
title: 'Configurar Asignación de almacén'
id: 1yCEr7xQ0gVsTBB0ktMYVX
status: PUBLISHED
createdAt: 2025-09-19T17:08:56.742Z
updatedAt: 2025-09-19T19:10:28.249Z
publishedAt: 2025-09-19T19:10:28.249Z
firstPublishedAt: 2025-09-19T17:59:52.833Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: configuring-warehouse-assignment
legacySlug: configurar-asignacion-de-almacen
locale: es
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

La funcionalidad **Asignación de almacén** permite sincronizar los diferentes puntos logísticos registrados en el Admin de VTEX con los almacenes registrados en Mercado Libre. En este artículo presentamos la estructura de la página de esta funcionalidad, requisitos, acciones disponibles y asignación de almacenes.  

## Requisitos

Para utilizar la funcionalidad **Asignación de almacén** la cuenta VTEX debe cumplir con los siguientes tres requisitos:  

- La [asignación de almacén](/es/tutorial/alocacao-de-estoque-no-mercado-livre--6BfmmAFctWbi7hxJlxCU1S) debe estar activa.  
- Debe operar con el nuevo modelo de [registro de producto](/es/announcements/novo-modelo-de-anuncios-no-mercado-livre--3g7c72gcJk6WvKXNGfPTkb) y contar con al menos un anuncio registrado en este nuevo modelo.  
- Los almacenes deben estar activos en el módulo Estrategias de envío de VTEX.  

## Estructura de la página

Para acceder a la funcionalidad, accede al **Admin VTEX > Marketplace > Mercado Libre > Preferencias > Asignación de almacén.** 

Esta página contiene:  
- Barra de búsqueda   
- Filtro de status  
- Tabla con los almacenes de tu tienda VTEX  

### Barra de búsqueda y filtro

En la barra de búsqueda de la página puedes buscar almacenes VTEX. El filtro te permite seleccionar una de las opciones de status, **Pendiente** o **Asignado.**  

Estas opciones pueden utilizarse en conjunto para refinar aún más la búsqueda.  

### Tabla de almacenes

La tabla de almacenes se compone de las columnas, **Almacén VTEX, Tipo, Status** y **Almacén de Mercado Libre.**

- **Almacén VTEX** en esta columna figuran todos los almacenes activos en el módulo de [Estrategia de envío](/es/tutorial/gerenciar-estoque--tutorials_137).  
- **Tipo**  
- **Status** muestra si un almacén VTEX está asignado a uno de Mercado Libre o si está pendiente.  
- **Almacén de Mercado Libre** muestra el botón `Asignar` si un almacén VTEX presenta el status **Pendiente** y si el status es **Asignado,** muestra el nombre y el ID del almacén de Mercado Libre.  
> ℹ️ Un mismo almacén de Mercado Libre puede estar asignado a múltiples almacenes VTEX.  

## Asignar almacenes

Para asignar un almacén VTEX a un almacén de Mercado Libre sigue los pasos a continuación:  

1. En el Admin VTEX, accede a **Marketplace > Mercado Libre > Preferencias > Asignación de almacén**.  
2. Busca el almacén VTEX que deseas asignar.  
3. Haz clic en `Asignar`. Se abrirá una ventana con la lista de almacenes disponibles en Mercado Libre.  
4. Selecciona el almacén de Mercado Libre que deseas asignar.  
5. Haz clic en `Confirmar`. Se mostrará el mensaje **Asignación de almacén actualizada con éxito.**  

> ℹ️ Repite los pasos anteriores para cada almacén VTEX que desees asignar a un almacén de Mercado Libre.

Cada fila de la tabla presenta información sobre un único almacén VTEX. Además, el botón de <i class="ph ph-dots-three-vertical"></i> `opciones` permite realizar las siguientes acciones:  

- Ver detalles  
- Reasignar almacén  
- Ajustar la capacidad de envío  
- Gestionar almacén VTEX  
- Desasignar almacén  

### Ver detalles

Esta opción muestra la información de los almacenes de Mercado Libre asociados a los almacenes VTEX.  

1. Busca el almacén VTEX deseado.  
2. En el menú de acciones <i class="ph ph-dots-three-vertical"></i>, haz clic en Ver detalles.  
3. Se abrirá una ventana modal lateral con:  
  - Nombre de la tienda
  - Dirección completa
  - ID del almacén de Mercado Libre
  - Coordenadas de latitud y longitud

### Reasignar almacén

Esta opción permite cambiar la asociación entre un almacén VTEX y un almacén de Mercado Libre.  

1. Busca el almacén VTEX deseado.  
2. En el menú de acciones <i class="ph ph-dots-three-vertical"></i>, haz clic en Reasignar almacén.  
3. Se abrirá una ventana modal con la lista de almacenes disponibles en Mercado Libre.  
4. Selecciona un nuevo almacén.  
> ℹ️ El almacén actual se mostrará preseleccionado, pero es necesario seleccionar otro para realizar la reasignación.  
5. Haz clic en `Confirmar` para completar la reasignación.  

### Ajustar capacidad de envío

Esta opción permite definir el tiempo de preparación y el número máximo de pedidos que pueden procesarse por día en un almacén específico.  

1. Busca el almacén deseado.  
2. En el menú de acciones<i class="ph ph-dots-three-vertical"></i>, haz clic en Ajustar capacidad de envío.  
3. Se te redirigirá a la pantalla de tiempo de preparación y capacidad de envío.  
4. Para cada día de la semana, configura lo siguiente:  
  - Tiempo de preparación  
  - Hora límite (cutoff)  
  - Capacidad máxima de envío  
5. Haz clic en `Guardar`.  

> ⚠️ Los cambios realizados después de la hora de corte solo entrarán en vigor la semana siguiente.

### Gestionar almacén VTEX 

Al seleccionar esta opción, se te redirigirá a la pantalla de configuración del almacén, donde puedes editar los datos logísticos siguiendo los pasos a continuación.  

1. Selecciona el almacén deseado.  
2. En el menú de acciones <i class="ph ph-dots-three-vertical"></i>, haz clic en Gestionar almacén VTEX.  
3. Se te redirigirá al registro del almacén correspondiente en el [módulo Envío](/es/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP).  
4. Realiza los cambios deseados siguiendo el tutorial [Gestionar almacenes](/es/tutorial/gerenciar-estoque--tutorials_137).  

### Desasignar almacén

Esta opción te permite desvincular un almacén VTEX de un almacén de Mercado Libre siguiendo los pasos a continuación.  

1. Selecciona el almacén deseado.  
2. En el menú de acciones <i class="ph ph-dots-three-vertical"></i>, haz clic en Desasignar almacén.  
3. Haz clic en `Confirmar`.  

> ⚠️ Desasignar un almacén dejará el stock en Mercado Libre en cero, pero no afecta el stock en VTEX.  
