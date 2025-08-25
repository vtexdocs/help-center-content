---
title: 'Claves generadas'
id: 7fnU4iZdvZKbxCaT3Ymdjc
status: PUBLISHED
createdAt: 2024-09-30T18:39:21.339Z
updatedAt: 2025-08-13T14:19:10.482Z
publishedAt: 2025-08-13T14:19:10.482Z
firstPublishedAt: 2024-10-08T19:18:05.329Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: generated-keys
legacySlug: claves-generadas-beta
locale: es
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

Las claves de API internas son credenciales generadas y gestionadas por tu cuenta VTEX. Esto significa que debes tener acceso a todos los pares de claves y tokens de API (el equivalente a los nombres de usuario y contraseña) para las integraciones de API.

La pestaña **Generadas** presenta las claves de API creadas por tu cuenta. Puedes utilizar la barra de búsqueda para encontrar una clave por nombre o por el valor de **Identificación de la clave** generado al crearla.

![generated-keys-es](//images.ctfassets.net/alneenqid6w5/1BKpENJAjKlijTutL0wxLZ/b873af3d8a8403164088496a5b4ee1b0/generated-keys-es.png)

La página muestra la siguiente información en forma de tabla: 

| Columna | Descripción |
| :---- | :---- |
| **Clave/Nombre** | Clave de API, seguida del nombre definido cuando se creó la clave. Si el token se pasa del periodo de renovación recomendado (3 meses de forma predeterminada), se mostrará un ícono de alerta de renovación al lado de clave. Más información en [Configurar alerta de renovación de tokens de API](https://help.vtex.com/es/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ). |
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
     Marca solo los roles necesarios para la integración que utilizará la clave de API. El uso sin restricciones de roles muy permisivos aumenta el riesgo de ataques en las tiendas al filtrarse las credenciales de inicio de sesión.
   </div>

6. Haz clic en `Generar`.

   Podrás visualizar el nuevo token mediante un link de acceso único, válido por hasta 24 horas, si no se accede a él dentro de ese plazo.

7. Para copiar el link de acceso único al nuevo token en el portapapeles, haz clic en <i class="far fa-clone"></i> `Copiar`. Este link solo se mostrará una vez. En esta etapa, la clave ya está activa y disponible para su uso.
8. Haz clic en <i class="fas fa-times"></i> `Cerrar`.
9. Accede al link copiado o compártelo con la persona que usará el nuevo token. El link solo podrá utilizarse una vez y su validez es de 24 horas si no se accede a él.
10. Haz clic en `Copiar` para copiar el token de la API al portapapeles. Este secreto solo se mostrará una vez, asegúrate de guardarlo en un lugar seguro.

![one-time-link-es](//images.ctfassets.net/alneenqid6w5/6EPIyJw435gQ2QkLoBBi9G/c7a035ef36ca085ac1f0cd95d7727b48/one-time-link-es.png)

> ⚠️ La URL oficial para acceder al token siempre sigue el formato `share.vtex.com/credentials/{token}`. El `{token}` es un identificador aleatorio generado cuando se crea o renueva la clave. Comprueba el formato del link antes de abrirlo para evitar riesgos de phishing o acceso a páginas maliciosas.

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
  Solo se debe volver a activar una clave de API si estás seguro de que no se vio comprometida. Cuando la clave está activa, cualquier persona con el token de API asociado puede tener acceso a tu cuenta.
</div>

## Renovar token

Renovar el token de API con frecuencia es muy importante para mantener la seguridad de la tienda. Para garantizar la protección continua, renueva los tokens antes de recibir la [alerta](https://help.vtex.com/es/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ) de renovación siguiendo las instrucciones en [Renovar token de API](https://help.vtex.com/es/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3).

## Eliminar clave

Las claves de API que no se vayan a utilizar pueden eliminarse. Al eliminarlas, es posible mantener la lista organizada y facilitar la gestión de las claves en uso.  

> ⚠️ Asegúrate de que la clave de API no está siendo utilizada por ninguna integración antes de eliminarla. Este procedimiento no puede deshacerse.

Para eliminar una clave de API de forma permanente sigue los pasos a continuación:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Comprueba que estás en la pestaña **Generadas**.  
3. En la fila de la clave de API deseada, haz clic en el menú (⋮) y después en <i class="far fa-trash-alt"></i> `Eliminar clave`.
4. Marca la opción *Entiendo que esta acción no se puede deshacer*.  
5. Para confirmar, haz clic en `Eliminar`.

## Más información

* [Claves de API](https://help.vtex.com/es/tutorial/claves-de-api--4bFEmcHXgpNksoePchZyy6)
* [Renovar token de API](https://help.vtex.com/es/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3)
* [Configurar alerta para renovar tokens de API](https://help.vtex.com/es/tutorial/configurar-la-duracion-de-las-claves-de-api--kcGIFysFt02FDuhsfjQwZ)  
* [Claves terceras](https://help.vtex.com/es/tutorial/claves-terceras--1isU0HfKkeg0atlxRha14Q)
