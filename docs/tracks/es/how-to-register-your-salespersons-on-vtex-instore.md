---
title: Registrar vendedores en el VTEX inStore
id: 4CazVGbuookKSACceaMgUc
status: DRAFT
createdAt: 2018-03-15T20:23:48.390Z
updatedAt: 2020-02-13T20:06:52.556Z
publishedAt: 
firstPublishedAt: 2018-03-15T20:24:39.584Z
contentType: trackArticle
productTeam: Shopping
slug: registrar-vendedores-en-el-vtex-instore
trackId: 
trackSlugES: 
---

Este guía le ayudará a usted a entender detalles técnicos de la plataforma VTEX que influyen el funcionamiento del inStore. Para tener una visión a nivel de negocios del producto, recomendamos que lea el Guía VTEX inStore para comerciantes.

### Cómo registrar un vendedor

El registro del vendedor deja la app tener una asociación del vendedor identificado con una tienda. Así, cuando la app identifique un vendedor, ella es capaz de hacer dos cosas:

1. Identificar las vendas que haga un vendedor para extraer informes;
2. Cargar los precios, condiciones de pago y disponibilidad del producto de la tienda de la que forma parte el dependiente.

La identificación del vendedor se obtiene como muestra la siguiente imagen:
![identificacao-vendedor](//images.contentful.com/alneenqid6w5/2LhlUtsEYouEY4i4iYOIOq/d556be06047c26ee85f392ba7256f9f8/identificacao-vendedor.png)

Para registrar los vendedores que la pantalla arriba permite identificar basta acceder a su Masterdata. Cuando haya accedido al Masterdata, usted deberá buscar el área con el título `Profile System`. En esa área encuentre la palabra `Vendedores` y haga clic en `listar` como muestra la imagen a continuación.
![masterdata-home-vendedores](//images.contentful.com/alneenqid6w5/32iOuRESyIwEwSE4WcEWmu/b64645e6f940399933df3db5b40d6a4f/masterdata-home-vendedores.png)

Cuando usted haga clic en `listar`, una lista de vendedores registrados va a aparecer, como muestra la imagen siguiente. Haga clic en `Novo` para registrar un nuevo vendedor.
![masterdata-lista-vendedores](//images.contentful.com/alneenqid6w5/xsepOCP9Dwiys6MKkQGY4/4717c2ff41b7b52a43b549294877713f/masterdata-lista-vendedores.png)

Complete la información del vendedor en el formulario. En el campo `Loja`, usted debe comenzar a digitar el nombre de la tienda para que aparezca una caja de selección. Cuando aparezca el nombre de la tienda, haga clic en el nombre, verifique si toda la información está correcta y luego haga clic en `Salvar`.
![masterdata-novo-vendedor](//images.contentful.com/alneenqid6w5/7mfVtDbemWWA6yqqYIQgwC/a498d9fbd2dcfbe87546711d8d8c7a36/masterdata-novo-vendedor.png)

También será necesario configurar um perfil de acceso para ese vendedor en su License Manager. Basta hacer clic en `Usuarios` y crear un nuevo con el mismo email que fue puesto en el Masterdata, el Perfil de Acceso que debe adicionarse es el `Vendedor inStore` y después recuerde de hacer clic en `Salvar`.

*Nuevos vendedores deberán crear y confirmar su contraseña a través de un email enviado a cada usuario registrado.*

![license-manager-novo-vendedor](//images.contentful.com/alneenqid6w5/98ppRH68esOwU2cWSiM4w/501c79f9cc247103868a026581f7573c/license-manager-novo-vendedor.png)
