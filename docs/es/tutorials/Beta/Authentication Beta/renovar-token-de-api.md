---
title: 'Renovar token de API (Beta)'
id: 7r4AzptYjXErGHadg9LnJ3
status: PUBLISHED
createdAt: 2024-09-30T18:40:04.374Z
updatedAt: 2024-10-08T20:11:38.561Z
publishedAt: 2024-10-08T20:11:38.561Z
firstPublishedAt: 2024-10-08T19:47:39.925Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: renewing-api-tokens
locale: es
legacySlug: renovar-token-de-api-beta
subcategoryId: 5uXA9a0laSLMkfbv6jQRDS
---

>ℹ️ Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solo tienen acceso a ella algunos clientes seleccionados. Si te interesa implementarla en el futuro, ponte en contacto con [nuestro soporte](https://support.vtex.com/hc/es-419).

Cuanto más antiguo sea el token, mayor será el riesgo de exposición y los posibles daños para la operación. El procedimiento de renovación de tokens garantiza la continuidad de la seguridad de tu tienda y minimiza posibles vulnerabilidades.

Para garantizar un acceso continuo a los recursos y preservar la seguridad, renueva el token de la API antes de que finalice su [periodo de duración](https://help.vtex.com/es/tutorial/configurar-la-duracion-de-claves-de-api--kcGIFysFt02FDuhsfjQwZ).

Sigue los pasos a continuación para renovar el token de una clave de API:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Comprueba que estás en la pestaña **Generadas**.  
3. En la fila de la clave de API deseada, haz clic en el menú (⋮) y después en <i class="fas fa-sync"></i> `Renovar token`.  
4. Haz clic en `Copiar` para copiar el token de la API al portapapeles. Este secreto solo se mostrará una vez, asegúrate de guardarlo en un lugar seguro.  
5. Marca una de las siguientes opciones en la sección **Eliminar token antiguo**:

   * **Después:** será necesario [eliminar manualmente](#eliminar-token-antigo) el token antiguo en cuanto el nuevo token esté en uso en las integraciones. Ambos tokens serán válidos y funcionales hasta que se elimine el antiguo. En la lista de la pestaña **Generadas**, en la columna **Duración del token**, se mostrará el plazo de validez de los dos tokens, hasta que se elimine el antiguo.

   * **Ahora:** el token antiguo se eliminará del sistema cuando finalice el proceso de renovación y a partir de ese momento solo será válido el token nuevo.

   >ℹ️ Si se cierra la página antes de seleccionar una de las dos opciones, se aplicará la opción **Después**, lo que significa que tendrás que eliminar el token antiguo manualmente.

6. Haz clic en `Finalizar`.

## Eliminar token antiguo

>⚠️ Asegúrate de que el token antiguo no está siendo utilizado por ninguna integración antes de eliminarlo. Este procedimiento no puede deshacerse.

Sigue las instrucciones para eliminar manualmente un token antiguo tras la renovación. Este procedimiento solo es posible si se selecciona la opción **Después** al renovar un token.

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Comprueba que estás en la pestaña **Generadas**.
3. En la fila de la clave de API deseada, haz clic en el menú (⋮) y después en <i class="far fa-trash-alt"></i> `Eliminar token antiguo`.  
4. Para confirmar, haz clic en `Eliminar`.

## Deshacer renovación de token

>⚠️ Este procedimiento solo es posible mientras el token antiguo no haya sido [eliminado](#eliminar-token-antiguo). Si se eliminó el token antiguo, será necesario renovar el token de nuevo o [eliminar la clave de API](https://help.vtex.com/es/tutorial/clave-generada--7fnU4iZdvZKbxCaT3Ymdjc#eliminar-clave).

Si renovaste el token por error u olvidaste copiar el nuevo token generado, sigue los pasos a continuación para deshacer la renovación.

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Comprueba que estás en la pestaña **Generadas**.  
3. En la fila de la clave de API deseada, haz clic en el ícono de menú (⋮) y después en <i class="fas fa-undo"></i> `Deshacer renovación`.  
4. Para confirmar, haz clic en `Deshacer`.

## Más información

* [Claves de API (beta)](https://help.vtex.com/es/tutorial/claves-de-api--4bFEmcHXgpNksoePchZyy6)
* [Configurar la duración de las claves de API (beta)](https://help.vtex.com/es/tutorial/configurar-la-duracion-de-las-claves-de-api--kcGIFysFt02FDuhsfjQwZ)
* [Claves generadas (beta)](https://help.vtex.com/es/tutorial/claves-generadas--7fnU4iZdvZKbxCaT3Ymdjc)
