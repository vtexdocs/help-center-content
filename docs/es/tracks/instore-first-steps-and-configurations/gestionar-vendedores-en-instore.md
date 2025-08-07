---
title: 'Gestionar vendedores en VTEX Sales App'
id: 5pqtuvi97FFZiGf7MlSe8q
status: PUBLISHED
createdAt: 2023-04-17T21:01:21.431Z
updatedAt: 2024-01-05T19:59:15.811Z
publishedAt: 2024-01-05T19:59:15.811Z
firstPublishedAt: 2023-04-25T20:13:04.431Z
contentType: trackArticle
productTeam: Shopping
slugEN: managing-sales-associates-in-instore
locale: es
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugES: instore-primeros-pasos-y-configuracion
---

Una vez realizadas las [configuraciones básicas de VTEX Sales App en el Admin](/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/4L5SoLxE8O3YkxF7FKymrO), es posible agregar nuevos vendedores al sistema o administrar vendedores ya registrados.
La categoría **Vendedores** representa una sección dentro del módulo **Configuración de la tienda** del Admin VTEX, mostrando la lista completa de vendedores registrados en la aplicación [VTEX Sales App](/es/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf). Dentro de esta página, es posible gestionar la información de los vendedores en todas las [cuentas franquicia]() de tu tienda, mediante operaciones de [crear](#crear-vendedor), [buscar](#buscar-vendedor), [filtrar](#filtrar-vendedore), [editar](Editar) y [eliminar](#eliminar-vendedor).

![vendedores-es](https://images.ctfassets.net/alneenqid6w5/1PDeYBlqDILaEOFGOE7H8x/7ca04713635ff6b9975ebbdddcd2ccc8/image.png)

La página contiene la siguiente información:

| Columna | Descripción                                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nombre  | Nombre que identifica el vendedor, definido en la etapa[Crear vendedor](#crear-vendedor).                                                                                    |
| Código | Código identificador de cada vendedor, el mismo registrado en el sistema de la tienda física.                                                                           |
| Tienda  | Nombre identificador de la[cuenta franquicia](/es/tutorial/que-es-una-cuenta-franquicia--kWQC6RkFSCUFGgY5gSjdl) en la que el vendedor está registrado. |
| Email   | Email de acceso de cada vendedor.                                                                                                                                         |

## Registrar vendedor

Puedes realizar el registro de un vendedor siguiendo los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > VTEX Sales App > Vendedores**, o escribe **Vendedores** en la barra de búsqueda en la parte superior de la página
2. Haz clic en el botón `+ Registrar vendedor`.
3. Rellena los [campos de registro del vendedor](#campos-de-registro-del-vendedor).
4. Haz clic en `Registrar`.
5. Haz clic en `Guardar` para confirmar el registro del vendedor.

Una vez registrado, el vendedor recibirá un email de confirmación de registro y será redirigido a la aplicación VTEX Sales App para iniciar sesión como vendedor.

<div class ="alert alert-warning">
<p>Los vendedores registrados en VTEX Sales App no tienen permiso para acceder al Admin VTEX. Si un vendedor intenta iniciar sesión en el Admin, se eliminará su registro.</p> 
</div>

### Campos de registro del vendedor

#### Identificación

* **Nombre del vendedor:** nombre del vendedor que se creará. Campo obligatorio.
* **Código del vendedor:** código que identifica al vendedor, el mismo que el registrado en el sistema de la tienda física.
* **Email:** email de acceso del vendedor para VTEX Sales App. Campo obligatorio.
* **Permitir acceso al desempeño de ventas de otros vendedores:** casilla de verificación que permite ver el desempeño de ventas de otros vendedores (cuando está marcada) o acceder a información sobre su propio desempeño de ventas (cuando no está marcada).

#### Tienda física

* **Tienda:** [cuenta franquicia](/es/tutorial/que-es-una-cuenta-franquicia--kWQC6RkFSCUFGgY5gSjdl) en la que el vendedor será registrado. Campo obligatorio.

<div class ="alert alert-info">
<p>Los cambios pueden tardar hasta 15 minutos en procesarse y aplicarse en VTEX Sales App.</p> 
</div>

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
