---
title: 'Gestionar tiendas físicas en VTEX Sales App'
id: 5PSjRstg7UU4lOm0s8aqKN
status: PUBLISHED
createdAt: 2020-06-29T13:30:51.354Z
updatedAt: 2023-07-26T18:59:24.074Z
publishedAt: 2023-07-26T18:59:24.074Z
firstPublishedAt: 2020-06-29T14:22:11.121Z
contentType: trackArticle
productTeam: Shopping
slugEN: adding-new-stores-to-instore
locale: es
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugES: instore-primeros-pasos-y-configuracion
---

Después de realizar las [configuraciones básicas de inStore en el Admin](/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/4L5SoLxE8O3YkxF7FKymrO), puede añadir otras tiendas físicas al sistema o gestionar tiendas ya registrados.

**Tienda física** es una de las páginas de **Configuración de la tienda** del Admin VTEX que muestra una lista de tiendas físicas registradas en la aplicación [VTEX Sales App](/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf). En ella, puedes gestionar la información de todas las tiendas físicas de la cuenta.

Esta página te permite realizar las siguientes acciones: 

* [Crear](#crear-tienda-física)
* [Buscar](#buscar-tienda-física)
* [Editar](#editar-tienda-física)
* [Inativar](#inativar-tienda-física)

![loja-fisica-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-first-steps-and-configurations/agregar-nuevos-tiendas-al-instore_1.png)

La página contiene la siguiente información:

| Columna   | Descripción                                                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Nombre               | Nombre que identifica la tienda física, definido en la etapa [Crear tienda física](#crear-tienda-física). |
| Teléfono comercial | Número de teléfono comercial de la tienda física.                                                                                                                                               |
| Ciudad             | Ciudad donde se encuentra la tienda física.                                                                                                                                                 |
| Estado             | Estado donde se encuentra la tienda física.                                                                                                                                                 |
| Cuenta franquicia     | [Cuenta franquicia](/es/tutorial/que-es-una-cuenta-franquicia--kWQC6RkFSCUFGgY5gSjdl) onde a loja física está cadastrada.                                                       |
| Política comercial | [Política comercial](/es/tutorial/como-funciona-una-politica-comercial--6Xef8PZiFm40kg2STrMkMV) que se aplica a la tienda física.                                              |

## Crear tienda física

Puedes crear una tienda física siguiendo los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > inStore > Tienda física**, o escribe **Tienda física** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el botón `+ Agregar tienda`.
3. Rellena los [campos de registro de la tienda física](#campos-de-registro-de-la-tienda-fisica).
4. Haz clic en `Agregar`.
5. Haz clic en `Guardar` para confirmar el registro de la tienda física.  

### Campos de registro de la tienda física

![loja-fisica2-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-first-steps-and-configurations/agregar-nuevos-tiendas-al-instore_2.png)

#### Identificación

* **Nombre de la tienda:** nombre de la tienda física que se agregará. Campo obligatorio.
* **Teléfono comercial:** número de teléfono comercial de la tienda física.

#### Dirección

* **País:** país dónde se encuentra la tienda física. Campo obligatorio
* **Código postal:** código postal de la tienda física. Campo obligatorio.
* **Calle:** nombre de la calle donde se encuentra la tienda física. Campo obligatorio.
* **Número:** número del local en la calle de la tienda física. Campo obligatorio.
* **Información adicional:** información adicional de la dirección de la tienda física, como el número de la oficina.
* **Barrio:** barrio donde se encuentra la tienda física. Campo obligatorio.
* **Ciudad:** ciudad donde se encuentra la tienda física. Campo obligatorio.
* **Estado:** estado donde se encuentra la tienda física. Campo obligatorio.

#### Información técnica

* **Cuenta de franquicia:** nombre de la [cuenta franquicia](/es/tutorial/que-es-una-cuenta-franquicia--kWQC6RkFSCUFGgY5gSjdl) en la que se debe registrar la tienda física.
* **Política comercial:** [política comercial](/es/tutorial/como-funciona-una-politica-comercial--6Xef8PZiFm40kg2STrMkMV) que será aplicada na loja física. Campo obrigatório.
* **Punto de recogida:** [punto de recogida](/es/tutorial/puntos-de-recogida--2fljn6wLjn8M4lJHA6HP3R) registrado para esta tienda física, donde los clientes recogen sus pedidos.

<div class ="alert alert-info">
<p>Los cambios pueden tardar hasta 15 minutos en procesarse y aplicarse en inStore.</p> 
</div>

## Buscar tienda física

Puedes buscar una tienda física utilizando la barra de búsqueda. Ingresa el nombre de la tienda física que deseas encontrar.

## Editar tienda física

Puedes editar los datos de una tienda física siguiendo los pasos a continuación:

1. En la fila de la tienda física que deseas editar, haz clic en <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en <i class="fas fa-pencil-alt"></i> `Editar`.
3. Cambia la información que desees.
4. Haz clic en `Guardar` para finalizar.

## Inativar tienda física

Puedes inativar una tienda física siguiendo los pasos a continuación:

1. En la fila de la tienda física que deseas editar, haz clic en <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en <i class="fa-solid fa-box-archive"></i> `Inativar`.
3. Haz clic en `Inativar` para confirmar y finalizar.

Al desactivar una tienda, todos los vendedores registrados en ella perderán el acceso a la aplicación inStore y ya no podrán conectarse.

Para eliminar definitivamente una tienda, póngase en contacto con nuestro [soporte](https://support.vtex.com/hc/es-419/requests).
