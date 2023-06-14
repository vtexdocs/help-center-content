---
title: Configurar modal para transportistas
id: 3jhLqxuPhuiq24UoykCcqy
status: CHANGED
createdAt: 2018-02-28T14:15:43.168Z
updatedAt: 2023-03-29T15:09:26.801Z
publishedAt: 2023-03-29T14:51:10.227Z
firstPublishedAt: 2018-02-28T18:37:55.622Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: configurar-modal
legacySlug: configurar-modal
subcategory: 1UL6Q7nUN6SkA2g2SUsECi
---

La configuración se realiza en los módulos de **Configuración de Envío** y **Catálogo**, en este orden. La activación del modal en **Configuración** y la asociación en la **transportadora** pondrán a disposición automáticamente en el registro del SKU un campo para clasificarlo como un modal que debe ser atendido por el transportista de ese tipo específico de producto.

Su **Estratégia de envío** debe estar estructurada para satisfacer este tipo específico de entrega. Es decir, el transportista que atiende el producto específico debe estar asociado a un muelle, y éste, a su vez, asociado a un inventario.

### Ejemplo

Imagine una tienda en la que la parte de los productos lácteos demanda un transportista que tiene sistema refrigerado para la entrega de productos perecederos. Por esta característica, es necesario garantizar que sólo este tipo de transportista haga la entrega de estos productos.

Primero debemos activar la opción del modal refrigerado y asociar el transportista específico para ese tipo. Es necesario seleccionar en cada producto el mismo modal, para hacer la conexión entre producto y logística.

## Cómo activar el modal y asociarlo a una transportadora

1. En el Admin VTEX, accede a **Configuración de la tienda > Envío > Configuración**, o escribe *Envío* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Envío*.        
2. En __Permitir el uso de las siguientes categorías de productos en el transporte__, seleccione los tipos de modales deseados.  
3. Haga clic en el botón **Guardar**.  
4. En el Admin VTEX, accede a **Envío > Estratégia de Envío**, o escribe *Estratégia de Envío* en la barra de búsqueda en la parte superior de la página.  
5. Seleccione la **Política de envío** que quiere cambiar.  
6. En el Admin VTEX, accede a **Envío > Estratégia de Envío**, o escribe _____ en la barra de búsqueda en la parte superior de la página.  
7. En la sección Modais de entrega, seleccione el __modal__ deseado para asociar a esta transportadora.  
8. Para finalizar, haga clic en **Guardar**.  

## Cómo vincular el SKU a un modal 

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs**, o escribe *Productos y SKUs* en la barra de búsqueda en la parte superior de la página.  
2. Haga clic en el SKU que desea cambiar.  
3. Después, en la pestaña **Configuraciones avanzadas**, seleccione un **Modal**.  
4. Para finalizar, haga clic en **Guardar**.  

