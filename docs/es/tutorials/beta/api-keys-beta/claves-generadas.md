---
title: 'Claves generadas (Beta)'
id: 7fnU4iZdvZKbxCaT3Ymdjc
status: PUBLISHED
createdAt: 2024-09-30T18:39:21.339Z
updatedAt: 2025-02-05T19:20:40.887Z
publishedAt: 2025-02-05T19:20:40.887Z
firstPublishedAt: 2024-10-08T19:18:05.329Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: generated-keys
legacySlug: claves-generadas-beta
locale: es
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

<div class="alert alert-info">
  <p>Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solo tienen acceso a ella algunos clientes seleccionados. Si te interesa implementarla en el futuro, ponte en contacto con <a href="https://support.vtex.com/hc/es-419">nuestro soporte</a>.</p>
</div>

Las claves de API internas son credenciales generadas y gestionadas por tu cuenta VTEX. Esto significa que debes tener acceso a todos los pares de claves y tokens de API (el equivalente a los nombres de usuario y contraseña) para las integraciones de API.

La pestaña **Generadas** presenta las claves de API creadas por tu cuenta.

![apikeys-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/api-keys-beta/claves-generadas_1.png)

La página muestra la siguiente información en forma de tabla: 

| Columna | Descripción |
| :---- | :---- |
| **Clave/Nombre** | Clave de API, seguida del nombre definido cuando se creó la clave. |
| **Duración del token** | Duración del token de API. |
| **Roles** | Roles asociados a la clave de API. |
| **Fecha de creación** | Fecha de creación de la clave de API. |
| **Status** | Status de la clave de API, que puede ser **Activa** o **Inactiva**. |

Esta página te permite realizar las siguientes acciones:

* [Generar clave](#generar-clave)  
* [Editar clave generada](#editar-clave-generada)
* [Desactivar o activar la clave generada](#desactivar-o-activar-la-clave-generada)
* [Renovar token](#renovar-token)
* [Eliminar clave](#eliminar-clave)

## Generar clave

Sigue las instrucciones a continuación para crear una nueva clave de API:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Comprueba que estás en la pestaña **Generadas**.  
3. Haz clic en `+ Generar clave`.  
4. Rellena el campo **Identificación de la clave** con el nombre para identificar la clave de API. Este campo es obligatorio.  
5. Selecciona los [roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) que se asociarán a la clave. De manera predeterminada, no se preselecciona ningún rol.

   <div class="alert alert-error">
     <p>Marca solo los roles necesarios para la integración que utilizará la clave de API. El uso sin restricciones de roles muy permisivos aumenta el riesgo de ataques en las tiendas al filtrarse las credenciales de inicio de sesión.</p>
   </div>

6. Haz clic en `Generar`.  
7. Después, haz clic en <i class="far fa-clone"></i> `Copiar` para copiar el token de API al portapapeles. Este secreto solo se mostrará una vez, asegúrate de guardarlo en un lugar seguro. En esta etapa, la clave ya está activa y disponible para su uso.
8. Haz clic en <i class="fas fa-times"></i>`Cerrar`.

## Editar clave generada

Sigue los pasos a continuación para realizar cambios en una clave de API:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Comprueba que estás en la pestaña **Generadas**.  
3. En la fila de la clave de API deseada, haz clic en el menú (⋮) y después en <i class="fas fa-pencil-alt"></i> `Editar`.  
4. Aplica los cambios deseados a partir de las opciones a continuación:

   * Cambiar los roles seleccionados para la clave de API.  
   * Desmarcar o marcar la opción **Activa** para [desactivar o activar la clave generada](#desactivar-o-activar-la-clave-generada).  
5. Haz clic en `Guardar`.

## Desactivar o activar la clave generada

Si una clave de API que tiene acceso a tu cuenta se ve comprometida, debes desactivarla inmediatamente para revocar el acceso a tu cuenta. Si es necesario, genera una nueva clave para reemplazarla.

Si cometes un error puedes volver a activar la clave de API para restablecer la integración afectada.

Sigue los pasos a continuación para desactivar o activar una clave de API:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Comprueba que estás en la pestaña **Generadas**.  
3. En la fila de la clave de API deseada, haz clic en el menú (⋮) y realiza una de las siguientes acciones:  
   * **Desactivar:** si la llave está **activa**, haz clic en <i class="far fa-pause-circle"></i> `Desactivar` para desactivarla. Esta acción interrumpirá las integraciones que usen la clave, así que utilízala con precaución. Es necesario hacer clic en `Desactivar` una vez más para confirmar la acción.  
   * **Activar:** si la clave está **desactivada**, haz clic en <i class="far fa-play-circle"></i> `Activar` para activarla.

<div class="alert alert-error">
  <p>Solo se debe volver a activar una clave de API si estás seguro de que no se vio comprometida. Cuando la clave está activa, cualquier persona con el token de API asociado puede tener acceso a tu cuenta.</p>
</div>

## Renovar token

El token correspondiente a una clave de API solo es válido durante el periodo estipulado al [configurar la duración de las claves de API](https://help.vtex.com/es/tutorial/configurar-la-duracion-de-las-claves-de-api--kcGIFysFt02FDuhsfjQwZ). Es necesario renovar el token de API antes de su vencimiento para mantener el acceso continuo a los recursos y garantizar la seguridad.

Para hacerlo, sigue los pasos descritos en [Renovar token de API](https://help.vtex.com/es/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3).

## Eliminar clave

Las claves de API que no se vayan a utilizar pueden eliminarse. Al eliminarlas, es posible mantener la lista organizada y facilitar la gestión de las claves en uso.  

<div class="alert alert-warning">
  <p>Asegúrate de que la clave de API no está siendo utilizada por ninguna integración antes de eliminarla. Este procedimiento no puede deshacerse.</p>
</div>

Para eliminar una clave de API de forma permanente sigue los pasos a continuación:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Comprueba que estás en la pestaña **Generadas**.  
3. En la fila de la clave de API deseada, haz clic en el menú (⋮) y después en <i class="far fa-trash-alt"></i> `Eliminar clave`.
4. Marca la opción *Entiendo que esta acción no se puede deshacer*.  
5. Para confirmar, haz clic en `Eliminar`.

## Más información

* [Claves de API (beta)](https://help.vtex.com/es/tutorial/claves-de-api--4bFEmcHXgpNksoePchZyy6)  
* [Configurar la duración de las claves de API (beta)](https://help.vtex.com/es/tutorial/configurar-la-duracion-de-las-claves-de-api--kcGIFysFt02FDuhsfjQwZ)  
* [Claves externas (beta)](https://help.vtex.com/es/tutorial/claves-externas--1isU0HfKkeg0atlxRha14Q)
