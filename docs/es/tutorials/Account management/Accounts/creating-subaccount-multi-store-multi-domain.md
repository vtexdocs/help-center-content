---
title: 'Crear subconta / multitienda / multidominio '
id: tutorials_510
status: PUBLISHED
createdAt: 2017-04-27T22:03:17.733Z
updatedAt: 2024-01-18T17:56:47.931Z
publishedAt: 2024-01-18T17:56:47.931Z
firstPublishedAt: 2017-04-27T23:03:27.832Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: crear-subconta-multitienda-multidominio
locale: es
legacySlug: como-crear-multitienda-multidominio
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

Subconta, multitienda o multidominio es una segunda tienda administrada dentro de un mismo panel administrativo VTEX. Esta feature generalmente se utiliza cuando la tienda tiene otras marcas pero existe una similitud de logística y medios de pago o cuando la tienda necesita otro ambiente, por ejemplo para las ventas de B2B.

La creación de una multitienda es gratuita para el comerciante. Sin embargo, si necesita [contratar una póliza comercial adicional](https://help.vtex.com/es/tutorial/contratacion-de-politicas-comerciales-adicionales--61vuFOw4yGh6nwSmkLJL1X), se aplicarán costes adicionales.

En un ambiente multidominio es posible definir layouts distintos (además de productos y/o precios) para cada tienda, variando de acuerdo con el dominio accedido. Ejemplo: accountname.com, b2baccountname.com.br, etc.

## Configurar nueva tienda en Gestión de la cuenta

El primer paso para configurar la multitienda es configurar una nueva tienda en la página de detalles de la cuenta. Aprende cómo hacerlo con el artículo de [Gestión de cuentas](https://help.vtex.com/en/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq).

Ten en cuenta que también debes especificar el dominio de tu nueva tienda. Obtén más información con el artículo [Configuración del dominio de tu tienda](https://help.vtex.com/tutorial/configuring-domains-in-account-management--tutorials_2450).

## Configurar website en el CMS - Portal Legado

La configuración en el CMS - Portal Legado realmente crea el ambiente para que los clientes pueden tener acceso. El paso a paso siguiente muestra cómo crear un website ya copiando la estructura de carpetas de su website principal para facilitar la creación de su layout. Sin embargo, esta configuración también se puede hacer creando un website nuevo.

1. Acceda al módulo **Storefront > Layout**.
2. Haga clic en **CMS**.
3. Haga clic en **Sites and channels**.
4. Haga clic en su website principal.
5. Haga clic en el botón `Copy Website`.
6. Haga clic de nuevo en **Sites and channels** en la columna lateral.
7. Haga clic en el website creado.
8. Cambie el nombre.
9. Haga clic en el botón `Save Website`.
10. En la misma pantalla, haga clic en el botón `Agregar`.
11. Rellene el campo **Store name from License Manager** con el valor de la tienda creada en el paso anterior en __Gestión de la cuenta__.
12. Rellene el campo **Available sales policies** seleccionando las políticas comerciales que se asociarán a esta tienda.
13. Haga clic en el botón `Save Binding`.
14. Haga clic en el botón `Save Website`.

Se atente a la ordenación de sus políticas comerciales. Ellas siempre deben ser ordenadas de acuerdo con su uso en websites, es decir, primero las políticas comerciales que son usadas por websites (principal, b2b, etc.) y luego las políticas comerciales que no están asociadas a ningún website (políticas comerciales de marketplace, por ejemplo). 

Esto es porque si existe una política comercial no asociada a ningún website, ella está disponible para todos ellos. Y en caso de que venga antes de la política comercial asociada al website, éste asumirá la política comercial incorrecta.

Para conocer más detalles sobre la relación entre websites y políticas comerciales, [accede a nuestro artículo](/es/faq/como-funciona-la-relacion-entre-sitios-web-y-politicas-comerciales).

### Editar el diccionario

También es posible definir variables específicas para cada website mediante el diccionario. Para ello, dentro del website, haga clic en **diccionario**.

## Eliminar subcuenta / multitienda / multidominio

Para eliminar una multitienda existente, siga los pasos descritos en la [sección Eliminar tienda de la guía Gestión de la cuenta](https://help.vtex.com/es/tutorial/gestion-de-la-cuenta--2vhUVOKfCaswqLguT2F9xq#eliminar-tienda). El nombre de la subcuenta eliminada no puede volver a utilizarse.

## Más información

- [Elegir entre arquitectura multitienda o entorno adicional](https://help.vtex.com/es/tutorial/elegir-entre-arquitectura-multitienda-o-entorno-adicional--4HRNpa1OCKZ5YzP8yiilBL)
