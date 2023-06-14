---
title: 'Gestión de cuentas'
id: tutorials_6285
status: DRAFT
createdAt: 2017-04-27T21:48:34.322Z
updatedAt: 2023-06-01T13:45:18.066Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:18.953Z
contentType: tutorial
productTeam: Identity
author: authors_2
slug: gestion-de-cuentas
legacySlug: como-gestionar-cuentas
subcategory: yMp6sKDiJEi66CGAIQ4ma
---

Para acceder a la Configuración de la cuenta, haz clic en tu avatar de perfil, marcado con la inicial de tu email, y luego haz clic en **Configuración de la cuenta** > **Cuenta**.

En la página de cada cuenta usted encuentra datos básicos sobre la tienda virtual, configuraciones de dominio y multidominio, claves de acceso a APIs, logotipo del empresa e información de contacto.

<div class="alert alert-info">
Algunos de esos datos son útiles solamente para VTEX, y pueden no reflejar modificación de la información exhibida en la tienda.
</div>

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

<div class="alert alert-danger">
En caso de que su operación tenga más de una cuenta o subcuentas VTEX, no intercambie dominios entre ellas. Esto provocará errores en diferentes aspectos de tu tienda.
</div>

Para agregar un nuevo host, haz clic en `Agregar un nuevo dominio` e introduce el dominio en el campo de texto.

<div class="alert alert-warning">
Si agregas más de un dominio como host de tu tienda, todos ellos mostrarán el mismo contenido. Sin embargo, recomendamos registrar solo un dominio y utilizar redirecciones para los demás. Obtenga más información sobre redirecciones:
<ul><li><a href=”https://help.vtex.com/es/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ”>Redirección de otras direcciones</a></li>
  <li><a href=”https://help.vtex.com/es/tutorial/configurando-acesso-sem-www--tutorials_4278”>Configurar acceso sin www</a></li></ul> 
</div>

#### Subdominios

Todo dominio registrado de esta forma debe contener un subdominio, que puede ser o no `www`. Por ejemplo:

- `mitienda.com` - No es válido ya que no contiene un subdominio.
- `www.mitienda.com` - Dominio válido.
- `tienda.mimarca.com` - Dominio válido.

## Contactos

La parte de **Contatos** es visible solamente para el usuario que esté registrado en ella. Este registro define quién podrá utilizar el panel **[FullCleanUp](http://help.vtex.com/es/tutorial/entendendo-a-manutencao-da-base-de-dados/)** y también quién podrá visualizar informaciones de **Seguridad**. Este usuario es considerado el "sponsor user".

Después que un usuario llena y guarda **Nombre** e **E-mail**, en los campos de contacto, un email automático le es enviado informando sobre el registro y solicitando generación de contraseña (si él no posee ningún acceso al admin).

<div class="alert alert-info">
La plantilla para este correo electrónico automático se puede cambiar en el <a href="https://help.vtex.com/es/tutorial/understanding-the-message-center--tutorials_84">Centro de mensajes</a> modificando la plantilla de <i>registro de cuenta</i>.
</div>

![registro de cuenta](//images.ctfassets.net/alneenqid6w5/7uIJliLTJ6wEMeeoqiSMQ/6c37511bd70d8035b11e18abc99b36d0/registro_de_cuenta.jpg)

## Seguridad

En esta área se crean los [appKeys y appTokens](https://help.vtex.com/es/tutorial/chaves-de-aplicacao) utilizados para autenticar integraciones con su tienda.

Apenas el usuario Titular tiene permiso para crear appKeys y appTokens, ya que estos dan acceso a su tienda por API, lo que puede ser crítico si no lo utilizan profesionales habilitados.
piedad de la tienda a otro usuario.

## Tiendas

En la pestaña Tiendas, puedes:

- Consultar la [lista de tiendas](#tiendas).
- [Agregar una nueva tienda](#crear-tienda).
- [Editar tienda](#editar-tienda).
- [Eliminar tienda](#eliminar-tienda).

Al hacer clic en la pestaña **Tiendas** en la parte superior de la pantalla, verás una lista con la información de todas las tiendas creadas en tu cuenta VTEX.

![Página de detalles de la cuenta - Tiendas](//images.ctfassets.net/alneenqid6w5/rAFyEsEDLBDqj3UBGufrb/3d7a7f2d6029d2d36193ebe2d89c0fa9/2es.png)

Para cada tienda, puedes ver los siguientes detalles:

- Nombre de la tienda:** el identificador interno de la tienda.
- **Nombre comercial:** el nombre utilizado comercialmente.
- **Hosts:** los dominios asociados a la tienda.

Puedes utilizar el cuadro de búsqueda para filtrar las tiendas que aparecen en la lista por cualquiera de los atributos.

También puedes [crear una nueva tienda](#crear-tienda), [editar una tienda](#editar-tienda) o [eliminar](#eliminar-tienda) tiendas existentes.

### Crear tienda

Para crear una nueva tienda, sigue los pasos a continuación.

1. Ve a la página **Cuenta** haciendo clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en **Configuración de la cuenta** > **Cuenta**.
2. Haz clic en la pestaña **Tiendas** en la parte superior de la pantalla.
3. Haz clic en el botón `+ Nueva tienda`.
4. Rellena la información básica de la tienda:
	- Nombre de la tienda:** el identificador interno de la tienda.
	- **Nombre comercial:** el nombre utilizado comercialmente.
	- **Región:** el idioma predefinido asociado a esta tienda.
    - **Política comercial:** la [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#) que deseas asociar a la nueva tienda.
5. Si deseas iniciar el proceso [go-live](https://help.vtex.com/es/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM) para tu tienda, rellena el campo **Hosts** con el dominio de tu tienda. En caso contrario, deja este campo en blanco.
6. Haz clic en el botón `Crear`.

<div class = "alert alert-info">
  Para obtener más información sobre la configuración de los <b>Hosts</b> de tu tienda, consulta el artículo <a href="https://help.vtex.com/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450">Configurar el dominio de tu tienda</a>.
</div>

<div class="alert alert-warning">
No utilice un dominio de tipo ".com" en el campo Store name. Este tipo de entrada sólo puede existir en el campo Hosts.
</div>

### Editar tienda

Puedes editar la información de una tienda existente siguiendo los pasos a continuación.

1. Ve a la página **Cuenta** haciendo clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en **Configuración de la cuenta** > **Cuenta**.
2. Haz clic en la pestaña **Tiendas** en la parte superior de la pantalla.
3. Haz clic en el botón de acción <i class="fas fa-ellipsis-v"></i> correspondiente a la tienda que deseas editar.
4. Haz clic en `Editar`.
5. Verás la página de edición de la cuenta. Edita la información que desees.
6. Haz clic en `Guardar`.

### Eliminar tienda

Para eliminar una tienda, sigue los pasos a continuación.

1. Ve a la página **Cuenta** haciendo clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en **Configuración de la cuenta** > **Cuenta**.
2. Haz clic en la pestaña **Tiendas** en la parte superior de la pantalla.
3. Haz clic en el botón de acción <i class="fas fa-ellipsis-v"></i> correspondiente a la tienda que deseas eliminar.
4. Haz clic en `Eliminar`.
5. Verás un modal de confirmación. Haz clic en `Eliminar`.

<div class="alert alert-warning">
Ten en cuenta que la tienda principal, marcada con una estrella junto a su nombre en la lista de tiendas, no se puede eliminar.
</div>

Más información:
- [¿Qué es un nombre de cuenta?](https://help.vtex.com/es/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC)
- [Usuario titular](https://help.vtex.com/es/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy)
- [Transferir la propiedad de la tienda](https://help.vtex.com/es/tutorial/transferencia-de-propriedade-da-loja)
- [Configurando el dominio de tu tienda](https://help.vtex.com/es/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450)
- [Go-live](https://help.vtex.com/es/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM)

