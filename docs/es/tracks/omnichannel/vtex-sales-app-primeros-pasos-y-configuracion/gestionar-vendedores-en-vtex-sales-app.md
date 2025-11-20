---
title: 'Gestionar vendedores en VTEX Sales App'
id: 5pqtuvi97FFZiGf7MlSe8q
status: PUBLISHED
createdAt: 2023-04-17T21:01:21.431Z
updatedAt: 2025-11-21T19:59:15.811Z
publishedAt: 2024-01-05T19:59:15.811Z
firstPublishedAt: 2023-04-25T20:13:04.431Z
contentType: trackArticle
productTeam: Shopping
slugEN: managing-sales-associates-in-vtex-sales-app
locale: es
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 6
---

Una vez realizadas las [configuraciones básicas de VTEX Sales App en el Admin](/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/4L5SoLxE8O3YkxF7FKymrO), es posible agregar nuevos vendedores al sistema o administrar vendedores ya registrados.

La categoría **Vendedores** representa una sección dentro del módulo **Configuración de la tienda** del Admin VTEX, mostrando la lista completa de vendedores registrados en la aplicación **VTEX Sales App**. Dentro de esta página, es posible gestionar la información de los vendedores en todas las [cuentas franquicia](https://help.vtex.com/es/docs/tutorials/que-es-una-cuenta-franquicia) de tu tienda, mediante operaciones de [registrar](#registrar-vendedor), [buscar](#buscar-vendedor), [filtrar](#filtrar-vendedores), [editar](#editar-vendedor) e [inativar](#inativar-vendedor).

La página contiene la siguiente información:

| Columna | Descripción                                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nombre  | Nombre que identifica el vendedor, definido en la etapa [Crear vendedor](#crear-vendedor).                                                                                    |
| Código | Código identificador de cada vendedor, el mismo registrado en el sistema de la tienda física.                                                                           |
| Tienda  | Nombre identificador de la [cuenta franquicia](/es/tutorial/que-es-una-cuenta-franquicia--kWQC6RkFSCUFGgY5gSjdl) en la que el vendedor está registrado. |
| Email   | Email de acceso de cada vendedor.                                                                                                                                         |

## Registrar vendedor

Puedes realizar el registro de un vendedor siguiendo los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > VTEX Sales App > Vendedores**, o escribe **Vendedores** en la barra de búsqueda en la parte superior de la página
2. Haz clic en el botón `+ Registrar vendedor`.
3. Rellena los [campos de registro del vendedor](#campos-de-registro-del-vendedor).
4. Haz clic en `Registrar`.
5. Haz clic en `Guardar` para confirmar el registro del vendedor.

Después de completar el registro, el vendedor podrá crear una contraseña de acceso, tal como se describe en la sección [Primer acceso del vendedor](#primer-acceso-del-vendedor).

### Campos de registro del vendedor

#### Identificación

* **Nombre del vendedor:** nombre del vendedor que se creará. Campo obligatorio.
* **Código del vendedor:** código que identifica al vendedor, el mismo que el registrado en el sistema de la tienda física.
* **Email:** email de acceso del vendedor para **VTEX Sales App**. Campo obligatorio.
* **Permitir acceso al desempeño de ventas de otros vendedores:** casilla de verificación que permite ver el desempeño de ventas de otros vendedores (cuando está marcada) o acceder a información sobre su propio desempeño de ventas (cuando no está marcada).

#### Tienda física

* **Tienda:** [cuenta franquicia](/es/tutorial/que-es-una-cuenta-franquicia--kWQC6RkFSCUFGgY5gSjdl) en la que el vendedor será registrado. Campo obligatorio.

> ℹ️ Los cambios pueden tardar hasta 15 minutos en procesarse y aplicarse en **VTEX Sales App**.

## Buscar vendedor

Puedes buscar información sobre un vendedor utilizando la barra de búsqueda, que te permite acceder al nombre y al email del vendedor, así como al nombre de la tienda en la que se encuentra registrado.

## Filtrar vendedores

Haz clic en el filtro `Tienda` para filtrar los vendedores por el nombre de una tienda física específica.

## Editar vendedor

Si es necesario actualizar la tienda de un vendedor, debes editarla en el registro del vendedor. Puedes editar un vendedor siguiendo los pasos a continuación:

1. En la fila del vendedor que deseas editar, haz clic en <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en <i class="fas fa-pencil-alt"></i> `Editar`.
3. Cambia la información que desees.
4. Haz clic en `Guardar` para finalizar.

## Inativar vendedor

Puedes inactivar un vendedor siguiendo los pasos a continuación:

1. En la fila del vendedor que deseas editar, haz clic en <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en <i class="fa-solid fa-box-archive"></i> `Inactivar`.
3. Haz clic en `Inactivar` para confirmar y finalizar.

Una vez inactivado, el vendedor perderá el acceso a la aplicación VTEX Sales App y no podrá iniciar sesión. Para eliminar definitivamente a un vendedor, contacta con nuestro [soporte](https://support.vtex.com/hc/es-419/requests).

## Primer acceso del vendedor

Para obtener acceso a **Sales App**, el vendedor debe seguir los pasos a continuación:

>ℹ️ El vendedor no obtiene acceso al Admin VTEX de la tienda, ya que el acceso a **Sales App** se gestiona en otro entorno.

1. Una vez que [registres al vendedor](#registrar-vendedor), este recibe un mensaje en su email.
2. El vendedor debe hacer clic en el link del mensaje para crear el acceso.
3. En la página que se abre tiene que ingresar el mismo email utilizado en el registro y hacer clic en continuar.
4. Después de recibir un código de confirmación por email, rellena el campo de código y hace clic en continuar.
5. En la ventana de opciones de acceso a **Sales App**, selecciona la opción para iniciar sesión con email y contraseña. La elección de esta opción es obligatoria; de lo contrario, se producirá un error.
6. En la ventana que se abre, el vendedor llena el campo con la contraseña que va a crear, que debe tener al menos:

    * 8 caracteres
    * 1 número
    * 1 letra mayúscula
    * 1 letra minúscula

7. Hace clic en el botón de confirmación.

    >⚠️ En esta etapa, es posible que la página muestre un mensaje de error. Esto no afecta a la creación de la contraseña y la página se puede cerrar.

Una vez hecho esto, el vendedor ya puede acceder a **Sales App**. Basta con que, en una nueva ventana del navegador, acceda al link `https://{nombretienda}.myvtex.com/assisted-sales/sales-app`, sustituyendo `{nombretienda}` por el nombre de la tienda, e ingresando la contraseña creada.

### Recuperar contraseña del vendedor

Si el vendedor olvida la contraseña puede recuperarla accediendo a **Sales App** por el link `https://{nombretienda}.myvtex.com/assisted-sales/sales-app`, sustituyendo `{nombretienda}` por el nombre de la tienda. Al elegir la opción de recuperar contraseña, puede completar el flujo de recuperación a través de su email de registro.
