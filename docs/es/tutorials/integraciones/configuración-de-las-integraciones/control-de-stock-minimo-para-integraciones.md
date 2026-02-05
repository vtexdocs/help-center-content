---
title: 'Control de stock mínimo para integraciones'
id: 5hvUNIiSeJ5QCaZQYpYf1D
status: PUBLISHED
createdAt: 2020-10-16T15:25:46.901Z
updatedAt: 2024-09-13T19:35:42.177Z
publishedAt: 2024-09-13T19:35:42.177Z
firstPublishedAt: 2020-10-16T17:29:32.622Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: minimum-stock-control-for-integrations
legacySlug: control-de-stock-minimo-para-integraciones
locale: es
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

El control de stock mínimo es una medida de seguridad creada para evitar la venta de productos que cuentan con un stock menor o igual al que el retailer definió en la configuración de la integración.  

Esa configuración está disponible en las siguientes integraciones:

- [Amazon](/es/docs/tracks/configurar-la-integracion-de-amazon)
- [B2W/SkyHub](/es/docs/tracks/configuracion-del-conector-b2w)
- [Carrefour](/es/docs/tracks/registro-de-la-integracion-de-carrefour)
- [Centauro](/es/docs/tracks/registro-de-la-integracion-de-centauro)
- [Dafiti](/es/docs/tracks/dafiti-marketplace)
- [Magazine Luiza](/es/docs/tracks/registro-de-la-integracion-de-magazine-luiza)
- [Mercado Livre](/es/docs/tracks/registro-de-la-integracion-de-mercado-libre)
- [Netshoes](/es/docs/tracks/registro-de-la-integracion-de-netshoes)
- [Casas Bahia](/es/docs/tracks/casas-bahia-marketplace)    

## Cómo funciona

Cuando se alcanza el stock mínimo, la integración envía al marketplace una actualización de stock igual a cero, eso garantiza que no se vendan más productos hasta que se actualice el stock nuevamente. Para que el retailer esté al tanto cuando esto suceda, se muestra un aviso en la página de stock, a la que puedes acceder desde **Marketplace > Conexiones > Stock**.  

## Configuración

Para configurar el stock mínimo en su integración, realice los siguientes pasos:

1. En el Admin VTEX accede a **Marketplace > Conexiones > Marketplaces e integraciones.**  
2. Selecciona la integración deseada.  
3. Haz clic en el botón `Editar`.  
4. En el campo **Stock mínimo,** ingresa el valor deseado.  
5. Haz clic en `Guardar`.  

Después de completar los pasos, el stock mínimo estará disponible para todas las categorías registradas en la integración que elegiste. Para verificar el stock de tus productos, accede al dashboard del stock en  **Marketplace > Conexiones > Stock.**

