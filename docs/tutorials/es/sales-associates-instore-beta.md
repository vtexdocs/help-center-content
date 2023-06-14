---
title: Vendedores inStore (Beta)
id: 4rzit1pzp28km4HSDEdrEC
status: DRAFT
createdAt: 2022-12-02T18:05:56.305Z
updatedAt: 2023-04-26T15:16:49.107Z
publishedAt: 
firstPublishedAt: 2022-12-02T18:40:20.036Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: vendedores-instore-beta
legacySlug: vendedores-instore-beta
subcategory: 5SE2asHiQtHKfbnFru8RWH
---

<div class ="alert alert-info">
<p>Esta funcionalidad se encuentra en etapa Beta, lo que significa que estamos trabajando para mejorarla. En caso de duda, póngase en contacto con <a href="https://support.vtex.com/hc/pt-br/requests">nuestro Soporte</a>.</p>
</div>

**Vendedores** es una de las páginas de **Configuración de la tienda** del Admin VTEX que muestra la lista de vendedores registrados en la aplicación inStore de la tienda. Desde aquí, puedes gestionar la información de los vendedores en todas las cuentas franquicias de tu tienda.

**Vendedores** é uma página das **Configurações da loja** del Admin VTEX que muestra la lista de vendedores registrados en la aplicación [inStore](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf) de la tienda. Desde aquí, puedes gestionar la información de los vendedores en todas las [cuentas franquicias](https://help.vtex.com/es/tutorial/que-es-una-cuenta-franquicia--kWQC6RkFSCUFGgY5gSjdl) de tu tienda.

Esta página te permite gestionar tus vendedores a través de las siguientes acciones:

* [Crear](#crear-vendedor)
* [Buscar](#buscar-vendedor)
* [Filtrar](#filtrar-vendedores)
* [Editar](#editar-vendedor)
* [Eliminar](#eliminar-vendedor)

![vendedores-es](https://images.ctfassets.net/alneenqid6w5/1PDeYBlqDILaEOFGOE7H8x/7ca04713635ff6b9975ebbdddcd2ccc8/image.png)

La página contiene la siguiente información:

  | Columna | Descripción                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Nombre             | Nombre que identifica el vendedor, definido en la etapa [Crear vendedor](#crear-vendedor). |
| Código           | Código identificador de cada vendedor, el mismo registrado en el sistema de la tienda física.                                                                                                 |
| Tienda             | Nombre identificador de la [cuenta franquicia](https://help.vtex.com/es/tutorial/que-es-una-cuenta-franquicia--kWQC6RkFSCUFGgY5gSjdl) en la que el vendedor está registrado.                              |
| Email            | Email de acceso de cada vendedor.                                                                                                                                           |

## Crear vendedor

Puedes crear un vendedor siguiendo los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > inStore > Vendedores**, o escribe **Vendedores** en la barra de búsqueda en la parte superior de la página
2. Haz clic en el botón `+ Agregar vendedor`.
3. Rellena los [campos de registro del vendedor](#campos-de-registro-del-vendedor).
4. Haz clic en `Agregar`.
5. Haz clic en `Guardar` para confirmar el registro del vendedor.  

Después de registrado, el vendedor recibirá un email de confirmación y se le redirigirá a la opción de inicio de sesión del vendedor en la aplicación inStore.

![email-vendedor-pt](https://images.ctfassets.net/alneenqid6w5/28VbbIXujzHcE3BriNtZPq/3aa9729eb2211875302b7316dbe46c93/image.png)

<div class ="alert alert-warning">
<p>Los vendedores registrados en inStore no tienen permiso para acceder al Admin VTEX. Si un vendedor intenta iniciar sesión en el Admin, se eliminará su registro.</p> 
</div>

### Campos de registro del vendedor

#### Identificación

* **Nombre del vendedor:** nombre del vendedor que se creará. Campo obligatorio.
* **Código del vendedor:** código que identifica al vendedor, el mismo que el registrado en el sistema de la tienda física.
* **Email:** email de acceso del vendedor para inStore. Campo obligatorio.

#### Tienda física

* **Tienda:** [cuenta franquicia](https://help.vtex.com/es/tutorial/que-es-una-cuenta-franquicia--kWQC6RkFSCUFGgY5gSjdl) en la que el vendedor será registrado. Campo obligatorio.

<div class ="alert alert-info">
<p>Los cambios pueden tardar hasta 15 minutos en procesarse y aplicarse en inStore.</p> 
</div>

## Buscar vendedor

Puedes buscar un vendedor utilizando la barra de búsqueda. Tienes la opción de buscar por nombre del vendedor, nombre de la tienda y email del vendedor.

## Filtrar vendedores

Haz clic en el filtro `Tienda` para filtrar los vendedores por el nombre de una tienda física específica.

## Editar vendedor

Si es necesario actualizar la tienda de un vendedor, debes editarla en el registro del vendedor. Puedes editar un vendedor siguiendo los pasos a continuación:

1. En la fila del vendedor que deseas editar, haz clic en <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en <i class="fas fa-pencil-alt"></i> `Editar`.
3. Cambia la información que desees.
4. Haz clic en `Guardar` para finalizar.

## Eliminar vendedor

Puedes eliminar un vendedor siguiendo los pasos a continuación:

1. En la fila del vendedor que deseas editar, haz clic en <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en <i class="fas fa-trash"></i> `Eliminar`.
3. Haz clic en `Eliminar` para confirmar y finalizar.

Después de eliminado, el vendedor perderá el acceso a la aplicación inStore y no podrá iniciar sesión.

## Más información

* [¿Qué es inStore?](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf)
* [¿Qué es una cuenta franquicia?](https://help.vtex.com/es/tutorial/que-es-una-cuenta-franquicia--kWQC6RkFSCUFGgY5gSjdl)
