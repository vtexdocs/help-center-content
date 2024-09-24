---
title: 'Mantenimiento de Base de Datos (Full Cleanup)'
id: 34P9LGs7BCIQK6acQom802
status: PUBLISHED
createdAt: 2018-02-07T14:32:22.879Z
updatedAt: 2023-08-02T16:15:41.168Z
publishedAt: 2023-08-02T16:15:41.168Z
firstPublishedAt: 2018-02-07T16:44:48.971Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: database-maintenance-full-cleanup
locale: es
legacySlug: limpiar-base-de-datos-de-la-tienda
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

Al inicio del funcionamiento de una tienda VTEX, muchas veces es necesario probar las funcionalidades de la plataforma y  acostumbrarse a las herramientas, procesos y posibles resultados. Para revertir los resultados de algunas de estas operaciones, proporcionamos la siguiente URL para limpiar la base de datos de la tienda: 

`https://{AccountName}.myvtex.com/admin/Site/fullcleanup.aspx`

En esta página, usted puede limpiar el catálogo y reiniciar el indexador, retirando todos los productos de su tienda.

Por razones de seguridad, apenas el <a href="https://help.vtex.com/es/tutorial/que-es-el-usuario-master--3oPr7YuIkEYqUGmEqIMSEy">usuario Titular</a> de la cuenta tiene acceso al Mantenimiento de Base de Datos. En caso de que otro usuario, que no sea Titular, intente acceder a este módulo, se mostrará un mensaje indicando el correo electrónico del responsable de la cuenta y todos botones estarán inactivos.

Estas son las operaciones disponibles:

- __Volver a registrar los precios en SmartCheckout:__ cuando vuelve a registrar los precios en el SmartCheckout, el sistema sobrescribe los valores registrados de la versión anterior.

-  __Eliminar Productos del Indexador:__ al eliminar productos del indexador, ya no habrá productos que visualizar en su tienda.

  >⚠️ Las siguientes reglas se aplican al botón **Eliminar productos del indexador**:
>   <UL> <LI>Solamente las tiendas que tengan menos de 10 mil productos pueden realizar esta acción. Las tiendas que tengan un catálogo mayor deben [abrir un ticket con el equipo de soporte VTEX](https://help.vtex.com/es/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM) para realizar la limpieza del indexador y la reindexación de la base de datos.</LI>
>    <LI>Cuando un usuario elimina productos del indexador, se bloquea la cuenta para que no se pueda realizar esta acción por 24 horas.</LI>
>    <LI>Hay una fila para procesar las solicitudes generadas por el botón <i>Eliminar productos del indexador</i>. Puede ver el tiempo de espera aproximado en la interfaz de la página. La fila es global y se aplica a todos los usuarios para garantizar la seguridad de la plataforma VTEX.</LI></UL>

- __Eliminar Productos/SKU e ítems relacionados:__ al borrar productos y SKU, además de sus ítems relacionados, se eliminarán de forma definitiva de su tienda.

- __Eliminar Categorías, Tags, Campos e Ítems relacionados:__ al borrar categorías, marcas y campos, además de sus ítems relacionados, se eliminarán de forma definitiva de su tienda. Para que la exclusión se produzca, es necesario que antes se borren productos y SKU.

- __Eliminar sellers e ítems relacionados:__ al borrar sus sellers, además de sus ítems relacionados, se eliminarán de forma definitiva de su tienda.

- __Programar reindexación completa:__ al reindexar la base, usted entra en una fila para iniciar el proceso de indexación de sus productos. __Los productos de la tienda continúan disponibles para la venta durante el proceso de indexación__. Estos apenas entran en una fila para la actualización de datos y siguen disponibles en el sitio web para su venta. Atención: después de hacer clic en __Reindexar base__, el proceso se inicia automáticamente.

>⚠️ Es importante **Borrar productos del indexador** después de realizar cualquier otra operación en esta página. De lo contrario, su tienda puede experimentar errores al acceder a las páginas de productos, categorías o resultados de búsqueda. No es necesario **Borrar productos del indexador** después de **Programar reindexación completa**.
