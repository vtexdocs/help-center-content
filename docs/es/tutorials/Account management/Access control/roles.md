---
title: 'Roles'
id: 7HKK5Uau2H6wxE1rH5oRbc
status: PUBLISHED
createdAt: 2020-04-08T15:21:05.110Z
updatedAt: 2024-10-28T19:08:43.136Z
publishedAt: 2024-10-28T19:08:43.136Z
firstPublishedAt: 2020-04-08T20:52:12.334Z
contentType: tutorial
productTeam: Identity
author: 127RQ7SUoFfyTh5gbXUpdM
slugEN: roles
locale: es
legacySlug: como-crear-perfil-de-acceso, perfiles-de-acceso
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

Toda acción en la plataforma VTEX, como acceder a una página en la interfaz administrativa, pulsar un botón o hacer una llamada a una de nuestras APIs, implica un request a nuestra infraestructura. Como es común que las interfaces administrativas sean compartidas por los diversos colaboradores de una empresa, es importante poder limitar el acceso a las acciones críticas dentro de una cuenta. De este modo, se minimiza la posibilidad de disrupciones en la operación de una tienda y se garantiza que cada usuario tenga acceso apenas a lo que le compete.

## ¿Qué es un rol?

En VTEX, utilizamos un sistema basado en **recursos** para obtener mayor precisión en el control de acceso. Un **recurso** es una entidad asociada a una acción o información dentro de nuestra infraestructura. Cada vez que nuestros sistemas reciben un request, se realiza un análisis de seguridad para asegurar que el usuario responsable de la llamada tiene el permiso necesario. Para que el request tenga éxito, el usuario debe tener en su cuenta los recursos asociados a ese request.  

Actualmente trabajamos con unos cientos de recursos diferentes en los productos VTEX. Para facilitar la gestión de acceso de usuarios por parte de los administradores de una cuenta, existe el concepto de **Rol de usuario**. Para más detalles, lea [Recursos del License Managerr](https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#).

Un **Rol de usuario** es un conjunto de recursos creados para satisfacer un tipo común de usuario. Por ejemplo, los operadores de call center suelen realizar un conjunto bien definido de tareas. Entendiendo esto, un administrador de cuenta, teniendo acceso a los [recursos](https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#) necesarios, puede crear un **rol** personalizado con todos los permisos necesarios para aquellos colaboradores y controlar el acceso de todos ellos al mismo tiempo.

### Tipos de roles

Al crear un nuevo **rol de usuario** para su tienda, puedes crear un perfil personalizado, seleccionando cada recurso necesario, o uno de los roles predefinidos. Vea aquí todos los [roles predefinidos](https://help.vtex.com/es/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#).

Para crear roles personalizados, lea más detalles en [Recursos del License Manager](https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#).

## Creando un rol

Los roles de acceso pueden ser gestionados a través del panel administrativo de su cuenta VTEX.  Para acceder a esta sección, en la barra superior de VTEX Admin, haz clic en el **avatar de tu perfil**, marcado con la inicial de tu correo electrónico, y luego en **Configuración de la cuenta** > **Roles de usuario**.

![Lista roles](https://images.ctfassets.net/alneenqid6w5/5SsjVcIztKJQ3yxY1udwOH/1b6a2abc5a10006d758e31806564d378/last_with_shadow_Wed_Apr__8_16_55_01_-03_2020.png)

Esta pantalla muestra una lista de todos los **roles** registrados para la cuenta. En una cuenta recién creada, apenas el rol de *Owner (Admin Super)* se listará. Este perfil da al usuario acceso sin restricciones a todos los **recursos** de la plataforma.

>⚠️ Algunos productos, como [VTEX Payment](https://help.vtex.com/es/tracks/vtex-payment--7iCCIoIZFmd9OabU6QlmXu/1lZWKCGdy7xpYjukTLfFJL), son contratados por separado. Los recursos asociados a estos productos no vienen incluidos en el rol de <i>Owner (Admin Super)</i>. Para activar los recursos asociados a estos productos, debes utilizar los roles correspondientes.

La cantidad de usuarios con el rol *Owner (Admin Super)* debe ser la menor posible. Además, debe asegurarse de tener visibilidad y control sobre quién recibe este acceso.

>⚠️ El uso sin restricciones de roles muy permisivos aumenta el riesgo de ataques en las tiendas por la fuga de credenciales de acceso.

En el caso de los usuarios que no deben tener acceso sin restricciones a la plataforma, es importante crear **roles** que limiten los recursos disponibles solo a los estrictamente necesarios para aquel tipo de usuario. Esto es posible haciendo clic en **Nuevo rol**.

![Nuevo perfil de acceso](//images.ctfassets.net/alneenqid6w5/5biL3DriciSnHKbgHvV2PE/377d5de0c9b4af5667a4e8f10c171ae0/last_with_shadow_Wed_Apr__8_17_06_18_-03_2020.png)

Esta pantalla le permite crear un nuevo rol. Esto puede hacerse en base a formatos ya definidos, creados por el equipo de VTEX para atender escenarios comunes en las operaciones, o de forma personalizada, seleccionando a qué recursos de cada producto deben tener acceso todos aquellos que tengan este rol asociado a su usuario.

Haciendo clic en **Elegir rol**, el menú *desplegable* presenta una lista de roles predefinidos.  

![Menú roles predefinidos](//images.ctfassets.net/alneenqid6w5/4XGZb5WvW216z8RfX5Vp3c/f4a7c9ba96cdf8f522b9fe60f6fcba3d/last_with_shadow_Wed_Apr__8_17_01_46_-03_2020.png)

Seleccionar uno de los roles listados permite inspeccionar qué recursos están incluidos en este rol, separados por producto.

>ℹ️ Vea aquí todos los [Roles de usuario predefinidos](https://help.vtex.com/es/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy).

![Nuevo rol salvo](//images.ctfassets.net/alneenqid6w5/5biL3DriciSnHKbgHvV2PE/377d5de0c9b4af5667a4e8f10c171ae0/last_with_shadow_Wed_Apr__8_17_06_18_-03_2020.png)

El rol **Call center operator**, por ejemplo, contiene un recurso del producto *Catálogo* que le permite ejecutar operaciones en una tienda en nombre de un cliente y un recurso de *OMS* que permite verificar el status de un pedido.

Para crear un rol personalizado, el administrador puede elegir la opción **Custom** del menú desplegable **Elegir rol.** Al hacer clic en el menú desplegable en **Elija un producto**, se listan todos los recursos asociados a cada producto.

![Configurando producto](//images.ctfassets.net/alneenqid6w5/1VE4awGJHyrsR2OkYwAzRQ/8a2512bebc4fa0ac44731d6a2ecfac6b/last_with_shadow_Wed_Apr__8_17_11_58_-03_2020.png)

Se puede añadir al rol tantos productos como se necesiten. Basta con hacer clic en el botón **Configure otro producto** al final de la lista de productos y recursos.

![Configurar otro producto](//images.ctfassets.net/alneenqid6w5/Dsc2k29SxUDKB8t6VXScn/6669a063adc5974cc1441e5764a69c41/last_with_shadow_Wed_Apr__8_17_12_07_-03_2020.png)

Al terminar la configuración de los productos y recursos, el administrador puede elegir un nombre para el perfil en **Nombre del rol** si se trata de una configuración personalizada.

![Nombre del rol](//images.ctfassets.net/alneenqid6w5/gTuv92HFXKn4jklYX0Hzj/2478849865fe4e5041eb97b7d3dd5dce/last_with_shadow_Wed_Apr__8_17_17_02_-03_2020.png)

>⚠️ Es importante elegir nombres descriptivos para los roles de acceso, para dejar claro qué tipo de usuario debe tener ese acceso. Lo ideal sería indicar la posición en la empresa o la actividad dentro del producto.

Las buenas prácticas en la gestión de los roles de usuario aumentan la seguridad de una operación y refuerzan la atención de todos los involucrados en los datos sensibles de una tienda y de sus clientes. Recomendamos la creación de roles análogos a las estructuras jerárquicas de la organización administradora. De esta manera, cada uno es responsable de la información a la que puede acceder.

También es posible añadir usuarios al rol, personalizado o predefinido, completando el correo electrónico del usuario que se incluirá en **Agregar usuarios a este rol**. Si el usuario no existe, se creará un nuevo usuario utilizando el correo electrónico como nombre también (el nombre y el correo electrónico serán iguales).

![Usuarios](//images.ctfassets.net/alneenqid6w5/1lSnygEawddufMz9IZ45Mj/bfbc7ba812a8d8e306eb9adca5f53e31/last_with_shadow_Wed_Apr__8_17_25_47_-03_2020.png)

Cuando haya terminado de configurar el rol, debe guardar el nuevo rol haciendo clic en el botón azul en la parte inferior de la página.

![Guardar rol](//images.ctfassets.net/alneenqid6w5/68NycUF3T52sg96R6HDIna/89a4b047d9eecbfb65c4078e16adaa5a/last_with_shadow_Wed_Apr__8_17_32_59_-03_2020.png)

Una vez creado, el nuevo rol se listará junto con los otros roles de usuario. Para verlo, en la barra superior de VTEX Admin, haz clic en el **avatar de tu perfil**, marcado con la inicial de tu correo electrónico, y luego en **Configuración de la cuenta** > **Roles de usuario**.

![Nueva lista roles de usuario](//images.ctfassets.net/alneenqid6w5/3uQ5SvsqjpFCSJimcg9naY/845ea841f71c1d74d2467cc782fd935e/last_with_shadow_Wed_Apr__8_17_43_02_-03_2020.png)
