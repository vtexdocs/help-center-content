---
title: 'Renovar token de API'
id: 7r4AzptYjXErGHadg9LnJ3
status: PUBLISHED
createdAt: 2024-09-30T18:40:04.374Z
updatedAt: 2025-08-13T14:19:22.951Z
publishedAt: 2025-08-13T14:19:22.951Z
firstPublishedAt: 2024-10-08T19:47:39.925Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: renewing-api-tokens
legacySlug: renovar-token-de-api-beta
locale: es
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

Cuanto más antiguo sea el token, mayor será el riesgo de exposición y los posibles daños para la operación. El procedimiento de renovación de tokens garantiza la continuidad de la seguridad de tu tienda y minimiza posibles vulnerabilidades.

Renueva el token de API con frecuencia, si posible antes de recibir la alerta de renovación para mantener la seguridad de la tienda.

Sigue los pasos a continuación para renovar el token de una clave de API:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Comprueba que estás en la pestaña **Generadas**.  
3. En la fila de la clave de API deseada, haz clic en el menú (⋮) y después en <i class="fas fa-sync"></i> `Renovar token`.  

   Podrás visualizar el nuevo token mediante un link de acceso único, válido por hasta 24 horas, si no se accede a él dentro de ese plazo.

4. Para copiar el link de acceso único al nuevo token en el portapapeles, haz clic en `Copiar`. Este link solo se mostrará una vez.
5. Marca una de las siguientes opciones en la sección **Eliminar token antiguo**:

   * **Después:** será necesario [eliminar manualmente](#eliminar-token-antigo) el token antiguo en cuanto el nuevo token esté en uso en las integraciones. Ambos tokens serán válidos y funcionales hasta que se elimine el antiguo. En la lista de la pestaña **Generadas**, en la columna **Duración del token**, se mostrará el plazo de validez de los dos tokens, hasta que se elimine el antiguo.

   * **Ahora:** el token antiguo se eliminará del sistema cuando finalice el proceso de renovación y a partir de ese momento solo será válido el token nuevo.

   > ℹ️ Si se cierra la página antes de seleccionar una de las dos opciones, se aplicará la opción **Después**, lo que significa que tendrás que eliminar el token antiguo manualmente.

6. Haz clic en `Finalizar`.
7. Accede al link copiado o compártelo con la persona que usará el nuevo token. El link solo podrá utilizarse una vez y su validez es de 24 horas si no se accede a él.
8. Haz clic en `Copiar` para copiar el token de la API al portapapeles. Este secreto solo se mostrará una vez, asegúrate de guardarlo en un lugar seguro.

![one-time-link-es](//images.ctfassets.net/alneenqid6w5/6EPIyJw435gQ2QkLoBBi9G/c7a035ef36ca085ac1f0cd95d7727b48/one-time-link-es.png)

Al completar la renovación, no será posible renovar el token nuevamente hasta que el link de acceso único sea utilizado o expire después de 24 horas. Si es necesario, puedes [deshacer la renovación del token](#deshacer-renovacion-de-token) mientras el link siga en vigor.

Si el link de acceso único expira antes de ser utilizado, repite el proceso para renovar el token y generar un nuevo link.

> ⚠️ La URL oficial para acceder al token siempre sigue el formato `share.vtex.com/credentials/{token}`. El `{token}` es un identificador aleatorio generado cuando se crea o renueva la clave. Comprueba el formato del link antes de abrirlo para evitar riesgos de phishing o acceso a páginas maliciosas.

## Eliminar token antiguo

> ⚠️ Asegúrate de que el token antiguo no está siendo utilizado por ninguna integración antes de eliminarlo. Este procedimiento no puede deshacerse.

Sigue las instrucciones para eliminar manualmente un token antiguo tras la renovación. Este procedimiento solo es posible si se selecciona la opción **Después** al renovar un token.

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Comprueba que estás en la pestaña **Generadas**.
3. En la fila de una clave de API que tenga la alerta *Eliminación pendiente \- Token antiguo*, haz clic en el menú (⋮) y luego en <i class="far fa-trash-alt"></i> `Eliminar token antiguo`.  

   ![delete-pending-es](//images.ctfassets.net/alneenqid6w5/2v3HtEXyMaNMI7rgu9bcx2/d278169140677436ebfaab64e86d2c0d/delete-pending-es.png)

4. Para confirmar, haz clic en `Eliminar`.

## Deshacer renovación de token

> ⚠️ Este procedimiento solo es posible mientras el token antiguo no haya sido [eliminado](#eliminar-token-antiguo). Si se eliminó el token antiguo, será necesario renovar el token de nuevo o [eliminar la clave de API](https://help.vtex.com/es/tutorial/clave-generada--7fnU4iZdvZKbxCaT3Ymdjc#eliminar-clave).

Si renovaste el token por error u olvidaste copiar el nuevo token generado, sigue los pasos a continuación para deshacer la renovación.

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Comprueba que estás en la pestaña **Generadas**.  
3. En la fila de la clave de API deseada, haz clic en el ícono de menú (⋮) y después en <i class="fas fa-undo"></i> `Deshacer renovación`.  
4. Para confirmar, haz clic en `Deshacer`.

## Más información

* [Claves de API](https://help.vtex.com/es/tutorial/claves-de-api--4bFEmcHXgpNksoePchZyy6)
* [Configurar alerta para renovar tokens de API](https://help.vtex.com/es/tutorial/configurar-la-duracion-de-las-claves-de-api--kcGIFysFt02FDuhsfjQwZ)
* [Claves generadas](https://help.vtex.com/es/tutorial/claves-generadas--7fnU4iZdvZKbxCaT3Ymdjc)
