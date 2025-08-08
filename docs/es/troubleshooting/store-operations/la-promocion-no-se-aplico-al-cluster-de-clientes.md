---
title: 'La promoción no se aplicó al clúster de clientes'
id: 1fQEKdmWwIAPfDQAbuP3Kr
status: PUBLISHED
createdAt: 2025-02-28T18:00:30.100Z
updatedAt: 2025-02-28T19:31:52.785Z
publishedAt: 2025-02-28T19:31:52.785Z
firstPublishedAt: 2025-02-28T19:31:52.785Z
contentType: tutorial
productTeam: Others
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: the-promotion-wasnt-applied-to-the-customer-cluster
legacySlug: la-promocion-no-se-aplico-al-cluster-de-clientes
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Promociones
  - Clúster
  - Perfil de clientes
  - Master Data
---

Puedes configurar una [promoción personalizada](https://help.vtex.com/es/tutorial/criando-promocao-para-um-cluster-de-clientes) para aplicarla a un grupo específico de usuarios de tu tienda, lo que se denomina como un [clúster de clientes](https://help.vtex.com/es/tutorial/como-criar-um-cluster-de-clientes--frequentlyAskedQuestions_1724). Sin embargo, en algunos casos la promoción no se muestra correctamente a ese subconjunto de clientes. Las principales causas son:

- Ausencia o registro incorrecto del valor del clúster durante la configuración de la promoción.
- Diferencia entre los valores registrados en la promoción y los valores asignados en los perfiles de los clientes.

## Solución

A continuación se describen algunas soluciones para asegurarte de que la promoción se muestre al clúster deseado.

### Verificar el valor del clúster configurado en la promoción

Para comprobar si un clúster de clientes está asociado a una promoción, sigue los pasos a continuación:

<blockquote><ui>1. En el Admin VTEX, accede a **Promociones > Promociones**, o escribe  **Promociones** en la barra de búsqueda en la parte superior de la página.</ui>

<blockquote><ui>2. Haz clic en la promoción que deseas verificar.</ui>

<blockquote><ui>3. En la sección **“¿Cuáles son las condiciones para que la promoción sea válida?”**, verifica que la opción **Clúster de clientes** esté marcada y si el campo tiene el [valor correcto del clúster deseado](https://help.vtex.com/es/tutorial/creando-promociones-cluster-clientes--tutorials_342#como-completar-el-campo-cluster-de-clientes).</ui>

![Cluster_es](//images.ctfassets.net/alneenqid6w5/1kmG4hIoavKPG1JKkKNKnU/ac5b26af7c4884341dd5551666deba5c/cluster_es.png)

 <blockquote><ui>> ⚠️ El valor ingresado en el campo debe ser exactamente igual al valor previamente asignado al clúster de clientes teniendo en cuenta que el sistema distingue entre mayúsculas y minúsculas (case sensitive). Por ejemplo, si el valor utilizado para un determinado identificador de clúster es `empleado=true` y en la promoción se ingresó `Empleado=true` o `empleado=True`, la promoción no se mostrará a los usuarios de ese clúster.</blockquote>

<blockquote><ui>4. Agrega o modifica el valor del clúster deseado según sea necesario.</ui>

<blockquote><ui>5. Haz clic en `Guardar`.</ui>

<blockquote><ui>> ℹ️ Para garantizar que una misma promoción se aplique simultáneamente a clústeres de clientes que tienen valores diferentes registrados, debes seleccionar la condición **Al menos uno de los siguientes** y configurar todos los valores de los clústeres en la promoción.</blockquote>

### Verificar el valor asignado en el perfil del cliente

Si una promoción tiene más de un valor asignado en el campo __Clúster de clientes__ y la condición seleccionada es __Todos los siguientes__, los clientes del clúster deben cumplir todos los criterios.

Por ejemplo, una promoción configurada con la condición __Todos los siguientes__ y valores `Empleado=true` y `code=platinum`, se aplicará solo a clientes que tengan un perfil de __empleado__ y el código __platinum__. Los clientes que solo cumplan uno de los requisitos no podrán utilizar la promoción.

Para resolver esta situación, puedes realizar una de las siguientes acciones:

- Cambiar la opción __Clúster de clientes__ a la condición __Al menos uno de los siguientes__, lo que permite acceso a la promoción tanto a los clientes identificados como __empleado__ como a los que tienen el código __platinum__.

- Mantener la opción __Clúster de clientes__ con la condición __Todos los siguientes__ y actualizar los registros de los clientes deseados en [Master Data](https://help.vtex.com/es/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) para que incluyan ambos criterios: ser __empleado__ y ser de la categoría __platinum__.

- Mantener la opción __Clúster de clientes__ con la condición __Todos los siguientes__ y utilizar otros valores que sean comunes a los clientes a los que deseas mostrar la promoción.
