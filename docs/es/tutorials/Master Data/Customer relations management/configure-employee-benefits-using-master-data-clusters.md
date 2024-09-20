---
title: 'Configurar los beneficios para empleados usando clusters de Master Data'
id: 58SNGrUE08Ya2GWTqKUi5m
status: PUBLISHED
createdAt: 2020-08-25T20:16:20.744Z
updatedAt: 2023-03-28T23:14:03.969Z
publishedAt: 2023-03-28T23:14:03.969Z
firstPublishedAt: 2020-08-28T15:15:56.627Z
contentType: tutorial
productTeam: Master Data
author: 4ubliktPJIsvyl1hq91RdK
slug: configurar-los-beneficios-para-empleados-usando-clusters-de-master-data
locale: es
legacySlug: configurar-las-promociones-para-empleados-usando-clusters-de-master-data, configurar-los-beneficios-para-empleados-usando-clusters-de-master-data
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

En VTEX, se puede aplicar una promoción o descuento a un grupo de clientes. Este grupo de clientes se puede definir por las propiedades que tienen en común.

>⚠️ Este artículo describe el funcionamiento de Master Data v1. Es importante evaluar cuál versión de Master Data satisface las necesidades de tu operación o ya está en uso.
>
> *<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
> Características de las versiones de Master Data
>  </a>
>
> *<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
> Master Data v2
>  </a>
> 

Este artículo muestra cómo configurar una promoción para los empleados. Se considera que los empleados son un grupo de clientes, por lo que se identifican mediante clústeres de Master Data.

Dado que los datos de los clientes se almacenan como documentos de la entidad de datos CL (Client o Cliente) en Master Data, el contenido de los campos definirá si el cliente pertenece a ese grupo. 

## ¿Qué es un clúster?

En Master Data, un clúster es un campo con un valor determinado para una entidad de datos. Uno o más clústeres definen este grupo de clientes con propiedades comunes en la entidad de datos CL.
Aquí, la propiedad común de los clientes será que también son empleados de la tienda. Se puede encontrar más información sobre los clústeres de clientes en el artículo [Crear clúster de clientes](https://help.vtex.com/es/tutorial/how-can-i-create-cluster-of-customers--frequentlyAskedQuestions_1724).

En este artículo se asume que los empleados están debidamente registrados con un campo booleano `isEmployee` establecido como true en sus respectivos documentos para la entidad de datos CL, como se muestra en la siguiente imagen.

Si no lo están, revise el artículo [Crear un campo en Master Data](https://help.vtex.com/es/tutorial/how-can-i-create-field-in-master-data) para crear un campo que identifique a los empleados y configurarlo adecuadamente para cada documento correspondiente a los mismos.
![Campo empleado](//images.ctfassets.net/alneenqid6w5/58zHOX5joCiSGRfGH1QcVS/a66c5d5bdd16ae4152d7f07b1483d5f2/Campo_empleado.png)

>ℹ️ Hay muchos detalles para configurar completamente una promoción. Si necesita información adicional sobre este asunto, consulte el artículo [Crear promociones](https://help.vtex.com/es/tutorial/creating-promotions-2).

Con el campo configurado, la promoción puede crearse siguiendo los siguientes pasos:

1. En el panel del Admin, haga clic en **Promociones** > **Promociones**.
2. Con el menú **Promociones** abierto, haga clic en **Nueva Promoción**, en la esquina superior derecha.
3. Elija el tipo de promoción que desea entre las opciones disponibles.
4. Rellene los campos necesarios para configurar la promoción. Hay muchos campos (por ejemplo: nombre, fecha de validez, tipo y cantidad de descuento, etc.) y algunos son específicos para el tipo de promoción seleccionado. Para más información sobre cómo configurar las promociones, puede consultar el artículo [Crear promociones](https://help.vtex.com/es/tutorial/creating-promotions-2).
5. Para aplicar la promoción solamente a los empleados, dentro de la sección 3 (¿Cuáles son las **condiciones** para que la promoción sea válida?), seleccione el recuadro de la opción  **Clúster de clientes**. 
6. En el campo inferior a **Clúster de clientes**, ingrese el clúster que identifica que los clientes son empleados (un par `{field}={value}`). En este caso, se usa `isEmployee=true` .
7. Al final de la página, haga clic en **Guardar**.

Después de esta configuración, la promoción ya debería estar funcionando como fue configurada. El descuento se muestra solo en el carrito de compra. La siguiente imagen muestra un ejemplo con 99% de descuento. ![Carrito con descuento](//images.ctfassets.net/alneenqid6w5/475MwMGUzp7GzqF0xYFVUq/856ec8d08b57e045760ad5e2eb76efa3/Carrinho_com_desconto.png)

