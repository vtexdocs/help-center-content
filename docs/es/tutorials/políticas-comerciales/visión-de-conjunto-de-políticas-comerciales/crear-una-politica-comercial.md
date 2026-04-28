---
title: 'Crear una política comercial'
id: 563tbcL0TYKEKeOY4IAgAE
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.369Z
updatedAt: 2025-08-27T17:00:49.320Z
publishedAt: 2025-08-27T17:00:49.320Z
firstPublishedAt: 2019-01-24T22:14:00.848Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: creating-a-trade-policy
legacySlug: que-es-una-politica-comercial
locale: es
subcategoryId: 6J3wx7KM4oysymsWuUACyY
---

[Las políticas comerciales](https://help.vtex.com/es/docs/tutorials/como-funciona-una-politica-comercial) en VTEX sirven para agrupar configuraciones de catálogo, precios, promociones, stock, logística, segmentación de clientes y pagos para diferentes canales de venta. Los canales de venta pueden incluir marketplaces, tu propia tienda de ecommerce, tiendas físicas o tiendas B2B, por ejemplo.

## Gestionar políticas comerciales

La sección Políticas comerciales de tu Admin muestra una tabla con todas las políticas comerciales existentes. También puedes filtrar resultados, hacer búsquedas por palabra clave y ordenar en la tabla todas las políticas comerciales. El ID de la política comercial lo determina el sistema automáticamente, a partir del orden cronológico de creación de nuevas políticas.

Para definir la configuración de logística aplicada a una política comercial determinada, es necesario [crear o editar un muelle](https://help.vtex.com/es/docs/tutorials/gestionar-el-muelle) asociado a las transportadoras deseadas, ingresando el ID de la política comercial en el formulario de registro.

Para utilizar el mismo catálogo en más de una política comercial, consulta la documentación [Associate Product with Trade Policy](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/salespolicy/-tradepolicyId-).

## Agregar una política comercial

Accede al Admin VTEX para agregar una nueva política comercial. Si tienes el rol Owner (admin), podrás crear nuevas políticas directamente desde la interfaz.

Todas las acciones de creación se registran en los logs de auditoría del Admin, lo que permite identificar al usuario que realizó la acción. Para más información, consulta [Cómo funciona el informe de seguridad](https://help.vtex.com/es/docs/tutorials/informe-de-seguridad).

> ℹ️ La creación de una nueva política comercial puede generar costos adicionales, según lo previsto en el contrato de cada cliente. Si tienes dudas, consulta tu contrato o ponte en contacto con [Soporte VTEX](https://supporticket.vtex.com/support).

Para agregar una política comercial sigue las instrucciones a continuación:

1. En el Admin VTEX accede a **Configuración de la tienda \> Canales \> Políticas Comerciales** o escribe **Políticas Comerciales** en la barra de búsqueda.  
2. Haz clic en `Nueva política comercial`.  
3. Revisa la información que se muestra en la notificación y confirma para continuar.  
4. Completa los campos de la política comercial:

| Campo | Descripción |
| :---- | :---- |
| **Nombre** | Nombre de identificación interna de la política comercial. |
| **Colección** | Este campo quedó obsoleto y no está disponible para su uso. |
| **Sellers** | Define los sellers asociados a la política comercial. Si no se selecciona ningún seller, todos los sellers de la cuenta se considerarán automáticamente. |
| **Código de moneda** | Código de la moneda en la política comercial, como USD o EUR. Este campo se usa en la internacionalización de precios. Cuando la **configuración regional** del usuario no corresponde a la de la política comercial, los precios se muestran con el código ISO de la moneda y no con el símbolo local. |
| **Símbolo de moneda:** | símbolo de moneda, como $ o €. Se muestra para los usuarios cuya **configuración regional** corresponde a la configurada en la política. Si este campo no se completa, el sistema usa el símbolo predeterminado del código de moneda seleccionado. |
| **Decimales de moneda** | Número de decimales de la moneda. Usa este campo solo para sobrescribir el valor predeterminado definido por las normas ISO. Si no se completa, el sistema usa el valor predeterminado del código de moneda seleccionado. |
| **Código de país** | País asociado a la política comercial. |
| **Región** | Idioma y región de la política comercial, como es-MX. Este campo se usa con el **Código de moneda** para la internacionalización de precios. |
| **Zona horaria** | Zona horaria de la política comercial. |
| **¿Activo?** | Define si la política comercial está activa. |
| **Regla de condición** | Campo opcional que permite restringir la política comercial a clientes específicos con base en datos de Master Data. Cuando se llena este campo solo los usuarios que cumplen la condición definida tienen acceso a la política. Por ejemplo, isPremium=true aplica la política solo a clientes marcados como premium. Deja el campo en blanco si no quieres restringir el acceso. |
| **Heredar catálogo de política comercial** | Permite heredar el catálogo de otra política comercial existente. |

5\. Haz clic en `Guardar`.

## Más información

- [Como funciona una política comercial](/es/docs/tutorials/como-funciona-una-politica-comercial)  
- [Política comercial para marketplace](/es/docs/tutorials/configurar-politica-comercial-para-marketplace)  
- [Contratación de políticas comerciales adicionales](/es/docs/tutorials/contratacion-de-politicas-comerciales-adicionales)
- [Crear un muelle](/es/docs/tutorials/gestionar-el-muelle)  

