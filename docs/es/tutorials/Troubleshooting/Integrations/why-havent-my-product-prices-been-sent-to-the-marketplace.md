---
title: '¿Por qué no se enviaron los precios de los productos de mi tienda al marketplace?'
id: 7LMjXNoYJXsgPyKFkk6I25
status: PUBLISHED
createdAt: 2024-09-13T18:09:21.855Z
updatedAt: 2024-09-13T18:21:24.321Z
publishedAt: 2024-09-13T18:21:24.321Z
firstPublishedAt: 2024-09-13T18:21:24.321Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: por-que-no-se-enviaron-los-precios-de-los-productos-de-mi-tienda-al
locale: es
legacySlug: no-se-enviaron-los-precios-de-los-productos-al-marketplace
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
---

**Tags:** marketplace, integración, precio  
**Palabras clave:** marketplace, integración, precio  

El precio de un producto se envía al marketplace tras dos procesos: [la configuración del precio en la tienda del seller](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) y la catalogación de productos. Si uno de estos procesos no se lleva a cabo, el precio del producto del seller no estará disponible en el marketplace.  

## Solución

Para resolver el problema, primero hay que identificar cuál de los procesos presenta error y aplicar la corrección necesaria. 

### Configuración del módulo Precios

La [configuración del módulo Precio](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) es donde el seller crea, edita y almacena los datos de precios de los SKUs vendidos en su tienda.  

Los mensajes de error de integración están disponibles en el menú Precio del Admin. Para acceder, ve a **Marketplace > Conexiones > Precio.**  

Consulta en la tabla siguiente los posibles mensajes de error relativos a la configuración de precios y las medidas necesarias para corregirlos.  

|**Mensaje de error**|**Significado**|**Acción requerida**|
|:--:|:--:|:--:|
|Sale price cannot be updated to 29,99. Can not offer more then 70% off.| El seller no puede ofrecer más del 70 % de descuento sobre el [precio base](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) de un producto.| Cambia el precio del descuento a un valor que esté dentro del porcentaje exigido por el marketplace.|
|Comprueba que este SKU tiene un precio registrado para esta política o que el precio no venció.| El precio del SKU no se ha registrado en la [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) utilizada en la integración con el marketplace o ha vencido.| Registra el precio del SKU en la política comercial utilizada para integrar la tienda con el marketplace.|

### Catalogación de productos

La catalogación de productos es el proceso de ajustar cada producto enviado por el seller a las categorías y marcas del marketplace. Este proceso es manual y lo realiza exclusivamente el marketplace.  

Para saber si tu producto está pasando por este proceso, ponte en contacto con el marketplace.  

Si los productos ya están catalogados, es necesario volver a procesar el envío de los precios de los productos siguiendo los pasos a continuación:  

1. En Admin VTEX, haz clic en **Marketplace > Conexiones > Precio**.  
2. Haz clic en el producto con status **Procesado con error**.  
3. Haz clic en el botón `Acciones`.  
4. Haz clic en **Reprocesar**.  

Repite el proceso para cada producto con el status **Procesado con error**. Si el error persiste, ponte en contacto con el equipo de [soporte VTEX](https://help.vtex.com/es/support).

