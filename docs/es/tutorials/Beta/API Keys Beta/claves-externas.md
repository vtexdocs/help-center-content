---
title: 'Claves terceras (Beta)'
id: 1isU0HfKkeg0atlxRha14Q
status: PUBLISHED
createdAt: 2024-09-30T18:40:42.116Z
updatedAt: 2025-06-04T21:31:47.252Z
publishedAt: 2025-06-04T21:31:47.252Z
firstPublishedAt: 2024-10-08T20:11:36.474Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: external-keys
locale: es
legacySlug: claves-externas-beta
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

<div class="alert alert-info">
  <p>Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solo tienen acceso a ella algunos clientes seleccionados. Si te interesa implementarla en el futuro, ponte en contacto con <a href="https://support.vtex.com/hc/es-419">nuestro soporte</a>.</p>
</div>

Las claves de API externas son credenciales generadas y administradas por otras cuentas VTEX. Al agregar [roles](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) a las claves de API (el equivalente a nombres de usuario) proporcionadas por terceros, puedes permitirles acceso a recursos específicos de tu cuenta.

La pestaña **Externas** enumera las claves de API externas agregadas a tu cuenta.

![apikeys-external-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Beta/API%20Keys%20Beta/claves-externas_1.png)

La página muestra la siguiente información en forma de tabla:

| Columna | Descripción |
| :---- | :---- |
| **Clave/Propietario** | Clave de la API seguida del nombre de la cuenta externa propietaria de la clave. |
| **Roles** | Roles asociados a la clave de API externa. |
| **Agregado el** | Fecha en la que se agregó la clave de API externa. |
| **Status** | Status de la clave de API externa, que puede ser **Activa** o **Inactiva**. |

Esta página te permite realizar las siguientes acciones: 

* [Agregar clave externa](#agregar-clave-externa)  
* [Editar clave externa](#editar-clave-externa)  
* [Eliminar clave externa](#eliminar-clave-externa)

## Agregar clave externa

Para agregar una clave externa a tu cuenta sigue los pasos a continuación:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Haz clic en la pestaña **Externas**.  
3. Haz clic en `Agregar clave`.  
4. Rellena el campo **Identificación de la clave** con el nombre para identificar la clave de API.   
5. Selecciona los [roles](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) que se asociarán a la clave. De manera predeterminada, no se preselecciona ningún rol.  

   <div class="alert alert-danger">
     <p>Marca solo los roles necesarios para la integración que utilizará la clave de API. El uso sin restricciones de roles muy permisivos aumenta el riesgo de ataques en las tiendas causados por la filtración de las credenciales de inicio de sesión.</p>
   </div>

6. Haz clic en `Agregar`.

## Editar clave externa

Sigue los pasos a continuación para realizar cambios en una clave de API externa:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Haz clic en la pestaña **Externas**.  
3. En la fila de la clave de API deseada, haz clic en el ícono de menú (⋮) y después en <i class="fas fa-pencil-alt"></i> `Editar`.  
4. Cambia los roles asociados con la clave de API.  
5. Haz clic en `Guardar`.

## Remover clave externa

Para remover una clave de API externa sigue las instrucciones a continuación:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Haz clic en la pestaña **Externas**.  
3. En la fila de la clave de API deseada, haz clic en el menú (⋮) y después en <i class="fas fa-times"></i> `Remover`.  
4. Para confirmar, haz clic en `Remover`.

## Más información

* [Claves de API (beta)](/es/tutorial/claves-de-api--4bFEmcHXgpNksoePchZyy6)
* [Configurar la duración de las claves de API (beta)](/es/tutorial/configurar-la-duracion-de-las-claves-de-api--kcGIFysFt02FDuhsfjQwZ)
* [Claves generadas (beta)](/es/tutorial/claves-generadas--7fnU4iZdvZKbxCaT3Ymdjc)
