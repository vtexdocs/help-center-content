---
title: 'Gestión de cuentas'
id: tutorials_6285
status: ARCHIVED
createdAt: 2017-04-27T21:48:34.322Z
updatedAt: 2023-06-01T13:45:18.066Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:18.953Z
contentType: tutorial
productTeam: Identity
author: authors_2
slugEN: account-management
locale: es
legacySlug: como-gestionar-cuentas
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

Para acceder a la Configuración de la cuenta, haz clic en tu avatar de perfil, marcado con la inicial de tu email, y luego haz clic en **Configuración de la cuenta** > **Cuenta**.

En la página de cada cuenta usted encuentra datos básicos sobre la tienda virtual, configuraciones de dominio y multidominio, claves de acceso a APIs, logotipo del empresa e información de contacto.

>ℹ️ Algunos de esos datos son útiles solamente para VTEX, y pueden no reflejar modificación de la información exhibida en la tienda.

## Botón de Activo/Inactivo

Cuando está desactivado, este botón hace que la tienda sea inaccesible para los usuarios finales.

## Botón de "en producción"

Por estándar, el status inicial de la tienda es fuera de producción. En este status, todavía no hay tráfico para la tienda.

Además, según el contrato estándar de VTEX, no se cobra ningún porcentaje sobre las ventas mientras la tienda no está en producción.

## Datos de la empresa

Aquí hay cuatro datos generales sobre su empresa:
- Nombre de la cuenta; es decir, el nombre identificador de la cuenta, utilizado en la URL de acceso al Admin. No se puede cambiar.
- Nombre Comercial 
- Razón social
- Número de Identificación Tributaria 

## Tienda

En esta sección puedes configurar las características que identifican a tu tienda:
- [Nombre de la tienda](https://help.vtex.com/en/tutorial/what-is-the-store-name--3gh9mTNeMgs6Qe44e8IqQK#)
- Nombre comercial
- Hosts

También puedes utilizar el botón `Configurar otra tienda` para [Crear multitienda](https://help.vtex.com/es/tutorial/como-criar-multiloja-multidominio--tutorials_510).

### Hosts

En la sección **Hosts** debes agregar el dominio principal de tu tienda, que ha sido [configurado con el apuntamiento de DNS](https://help.vtex.com/es/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280).

>❗ En caso de que su operación tenga más de una cuenta o subcuentas VTEX, no intercambie dominios entre ellas. Esto provocará errores en diferentes aspectos de tu tienda.

Para agregar un nuevo host, haz clic en `Agregar un nuevo dominio` e introduce el dominio en el campo de texto.

>⚠️ Si agregas más de un dominio como host de tu tienda, todos ellos mostrarán el mismo contenido. Sin embargo, recomendamos registrar solo un dominio y utilizar redirecciones para los demás. Obtenga más información sobre redirecciones:
>
> *<a href=”https://help.vtex.com/es/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ”>Redirección de otras direcciones</a>
>
> * <a href=”https://help.vtex.com/es/tutorial/configurando-acesso-sem-www--tutorials_4278”>Configurar acceso sin www</a>

#### Subdominios

Todo dominio registrado de esta forma debe contener un subdominio, que puede ser o no `www`. Por ejemplo:

- `mitienda.com` - No es válido ya que no contiene un subdominio.
- `www.mitienda.com` - Dominio válido.
- `tienda.mimarca.com` - Dominio válido.

## Contactos

La parte de **Contatos** es visible solamente para el usuario que esté registrado en ella. Este registro define quién podrá utilizar el panel **[FullCleanUp](http://help.vtex.com/es/tutorial/entendendo-a-manutencao-da-base-de-dados/)** y también quién podrá visualizar informaciones de **Seguridad**. Este usuario es considerado el "sponsor user".

Después que un usuario llena y guarda **Nombre** e **E-mail**, en los campos de contacto, un email automático le es enviado informando sobre el registro y solicitando generación de contraseña (si él no posee ningún acceso al admin).

>ℹ️ La plantilla para este correo electrónico automático se puede cambiar en el [Centro de mensajes](https://help.vtex.com/es/tutorial/understanding-the-message-center--tutorials_84) modificando la plantilla de <i>registro de cuenta</i>.

![registro de cuenta](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.jpg)

## Seguridad

En esta área se crean los [appKeys y appTokens](https://help.vtex.com/es/tutorial/chaves-de-aplicacao) utilizados para autenticar integraciones con su tienda.

Apenas el usuario Titular tiene permiso para crear appKeys y appTokens, ya que estos dan acceso a su tienda por API, lo que puede ser crítico si no lo utilizan profesionales habilitados.
