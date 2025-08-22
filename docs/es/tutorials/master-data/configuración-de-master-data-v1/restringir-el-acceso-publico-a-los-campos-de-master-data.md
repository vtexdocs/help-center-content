---
title: 'Restringir el acceso público a los campos de Master Data'
id: 5eu1N1h4Vqe8GY1yHXUsvz
status: PUBLISHED
createdAt: 2024-06-25T12:54:28.672Z
updatedAt: 2024-06-25T13:28:43.112Z
publishedAt: 2024-06-25T13:28:43.112Z
firstPublishedAt: 2024-06-25T13:28:43.112Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: restrict-public-access-to-master-data-fields
legacySlug: restringir-el-acceso-publico-a-los-campos-de-master-data
locale: es
subcategoryId: WpbGhubuRZaNZilJSXnqu
---

En [Master Data v1](https://help.vtex.com/es/tutorial/master-data--4otjBnR27u4WUIciQsmkAw), puedes [crear entidades de datos](https://help.vtex.com/es/tutorial/entidade-de-datos--tutorials_1265#crear-entidad-de-datos) con diferentes restricciones de acceso para cada campo:

* Permitir la lectura sin credenciales
* Permitir editar sin credenciales
* Permitir filtrar sin credenciales

Dependiendo de los datos almacenados, el acceso público sin autenticación puede suponer un riesgo para tu negocio. Para aplicar la autenticación y restringir el acceso público a los campos que contienen datos confidenciales, sigue las instrucciones abajo.

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data.**
2. En Master Data, haz clic en **Aplicaciones**.
3. Haz clic en el engranaje <i class="fas fa-cog"></i> al lado de **Profile System**:

   ![1-master-data-confidential-data-es](//images.ctfassets.net/alneenqid6w5/2Ulq3zVfRfAkmXYzC1fCCq/74b070908ad01d2f304ef85b3336d90a/1-master-data-confidential-data-es.png)
4. En **Configuración**, haz clic en **Estructura de datos**.

   ![2-master-data-confidential-data-es](//images.ctfassets.net/alneenqid6w5/3F2667ZvZymEE03zyoHSsh/af70a12de57c62150baa2889bfcbbeb3/2-master-data-confidential-data-es.png)
5. Haz clic en la pestaña **Entidades de datos**.
6. En la fila de la entidad de datos, haz clic en el botón de edición <i class="fas fa-edit"></i>.

   ![3-master-data-confidential-data-es](//images.ctfassets.net/alneenqid6w5/4yZP09vrLVx5FtLUAW8Q1b/7807d93ab778a6f4634f7e1a5eb7a38d/3-master-data-confidential-data-es.png)
7. En la fila del campo que contiene datos personales (o que, cuando se utiliza junto con otros campos, constituye datos personales) haz clic en el engranaje <i class="fas fa-cog"></i>. 

   ![4-master-data-confidential-data-es](//images.ctfassets.net/alneenqid6w5/5FZRbvfibWYENZIeoGGvXk/a6f2536154ec9a8dba14d237a00da7db/4-master-data-confidential-data-es.png)
8. Desmarca las siguientes opciones:

   * **Permitir la lectura sin credenciales**
   * **Permitir editar sin credenciales**
   * **Permitir filtrar sin credenciales**

   ![5-master-data-confidential-data-es](//images.ctfassets.net/alneenqid6w5/1FTKHYceHs2H5HkDV6lwCv/d59c8ed7478226d25f870226b421068c/5-master-data-confidential-data-es.png)
9. Haz clic en `Guardar`.
10. En la fila de la entidad de datos modificada, haz clic en el botón Publicar <i class="fas fa-save"></i> para que se publique la configuración guardada.
11. Haz clic en `OK`.

## Permisos necesarios

Después de seguir las instrucciones anteriores, es obligatorio disponer de un [rol](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) con los [permisos](https://help.vtex.com/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3) necesarios para acceder a la información:

* Al menos un recurso de la categoría **Generic resources** en el producto **Master Data**: **READONLY_USER_CRM**, **POWER_USER_CRM**, **NOREMOVE_USER_CRM** o **ADMIN_CRM**.
* Al menos un recurso de la categoría **Dynamic storage generic resources** en el producto **Dynamic Storage**:** READONLY_USER_DS**, **NOREMOVE_USER_DS**, **POWER_USER_DS** o **ADMIN_DS**.
