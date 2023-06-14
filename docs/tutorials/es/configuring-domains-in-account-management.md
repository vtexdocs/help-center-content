---
title: 'Configuración del dominio de su tienda'
id: tutorials_2450
status: PUBLISHED
createdAt: 2017-04-27T21:55:00.603Z
updatedAt: 2023-05-31T22:31:46.690Z
publishedAt: 2023-05-31T22:31:46.690Z
firstPublishedAt: 2017-04-27T23:03:51.625Z
contentType: tutorial
productTeam: Identity
author: authors_3
slug: configuracion-de-dominios-del-gestion-de-la-cuenta
locale: es
legacySlug: configuracion-de-dominios-del-license-manager
subcategory: yMp6sKDiJEi66CGAIQ4ma
---

La configuración de dominios es necesaria para que la URL accedida sea correctamente direccionada a una tienda VTEX. A continuación puede aprender cómo [registrar un nuevo dominio](#registrar-nuevo-dominio) o [cambiar el dominio de una tienda activa](#cambiar-dominio-de-tienda).

<div class="alert alert-danger">
En caso de que su operación tenga más de una cuenta o subcuentas VTEX, no intercambie dominios entre ellas. Esto provocará errores en diferentes aspectos de tu tienda.
</div>

<div class="alert alert-warning">
Si agregas más de un dominio como host de tu tienda, todos ellos mostrarán el mismo contenido. Sin embargo, recomendamos registrar solo un dominio y utilizar redirecciones para los demás. Obtenga más información sobre redirecciones:
<ul><li><a href=”https://help.vtex.com/es/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ”>Redirección de otras direcciones</a></li>
  <li><a href=”https://help.vtex.com/es/tutorial/configurando-acesso-sem-www--tutorials_4278”>Configurar acceso sin www</a></li></ul> 
</div>

## Subdominio

Todo dominio registrado de esta forma debe contener un subdominio, que puede ser o no `www`. Por ejemplo:

- `mitienda.com` - No es válido ya que no contiene un subdominio.
- `www.mitienda.com` - Dominio válido.
- `tienda.mimarca.com` - Dominio válido.

<div class = "alert alert-info">
  Obtenga más información sobre como <a href="https://help.vtex.com/es/tutorial/configuring-access-without-www--tutorials_4278">configurar acceso sin www</a>.
</div>

## Registrar nuevo dominio

1. Haz clic en tu avatar de perfil, marcado con la inicial de tu email.
2. Haz clic en el botón **Configuración de la cuenta**. 
3. Seleccione **Cuenta**.
4. Haz clic en la pestaña **Tiendas.**
5. Haz clic en el botón de acciones <i class="fas fa-ellipsis-v"></i> correspondiente a la tienda donde deseas registrar el dominio.
6. Ingresa el dominio en el campo **Hosts.**
7. Haz clic en el botón `Agregar`.
8. Haz clic en el botón `Guardar`.

Luego de eso será posible [configurar el apuntamiento de DNS para VTEX](https://help.vtex.com/es/tutorial/configurando-el-apuntamiento-del-dns-para-vtex--tutorials_4280).

## Cambiar dominio de tienda

La plataforma VTEX está lista para cambios de domínio sin impactos negativos. Sólo es necesario seguir los pasos abajo:

1. Crear nuevas entradas Host. Todavía el DNS del nuevo dominio no debe estar apuntado para VTEX.
2. Fijar las configuraciones del nuevo Portal. Es paso es fundamental para que el Checkout funcione correctamente. Es necesario fijar si los “Sites” registrados están relacionados con algún Account Name creado en License Manager. Lea más acerca de las [configuraciones del Portal](/es/faq/configurar-template-en-el-smartcheckout/).
3. Apuntar DNS del nuevo dominio para VTEX. Lea más acerca del [apuntamento de DNS](/es/tutorial/configurando-el-apuntamiento-del-dns-para-vtex/).
4. Después de la propagación de DNS del nuevo host, elimine los antiguos y conserve solo los nuevos.

