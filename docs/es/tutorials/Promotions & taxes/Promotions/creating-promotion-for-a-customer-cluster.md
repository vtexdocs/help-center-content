---
title: 'Crear promoción para un clúster de clientes'
id: tutorials_342
status: PUBLISHED
createdAt: 2017-04-27T22:07:51.509Z
updatedAt: 2024-08-05T17:40:23.033Z
publishedAt: 2024-08-05T17:40:23.033Z
firstPublishedAt: 2017-04-27T23:03:15.652Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: creando-promociones-cluster-clientes
locale: es
legacySlug: creando-promociones-cluster-clientes
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

La promoción para un clúster de clientes es una promoción que será válida apenas para un grupo predeterminado de clientes, informado por el módulo Master Data. Esta promoción solo se otorgará al cliente que forma parte de este clúster luego de iniciar sesión en el sitio web, y solamente se mostrará en el carrito de compras.

Configurar clústeres de clientes le permite crear una variedad de promociones personalizadas para públicos segmentados.

Antes de crear una promoción, debe definir la propiedad que determina si un cliente forma parte o no del clúster. Para ello, puede utilizar campos que ya existen en el perfil del cliente (por ejemplo: `email`) o [crear un grupo de clientes en el módulo de Master Data](https://help.vtex.com/es/tutorial/como-criar-um-cluster-de-clientes#).

Con la propiedad definida, siga las instrucciones que se indican a continuación.

1. En el Admin VTEX, accede a *Promociones > Promociones*, o escribe *Promociones* en la barra de búsqueda en la parte superior de la página.
2. Busque la promoción en la que desea realizar esta configuración o cree [una nueva promoción](https://help.vtex.com/es/tutorial/como-criar-promocoes/#).
3. Navegue hasta el área **¿Qué condiciones para la promoción sea válida?**.
4. Seleccione la opción **Clúster de Clientes**.
5. Seleccione la configuración de criterios que desee:
    *   **Todos los siguientes:** debe cumplir todos los requisitos para que se le incluya en la promoción.
    *   **Al menos uno de los siguientes:** si el cliente cumple con cualquiera de los criterios enumerados, se le incluirá en la promoción.
6. Rellene el campo con el clúster que desea asociar a la promoción.[Vea a continuación más información sobre cómo completar este campo](#como-completar-el-campo-cluster-de-clientes). Puede añadir más de un clúster haciendo clic en el botón `+`.
7. Haga clic en `Guardar`.

>ℹ️ El límite de clústeres que pueden ingresarse en la opción **clúster de clientes** es 50.

## Cómo completar el campo Clúster de clientes

Hay dos criterios posibles para seleccionar un clúster para la promoción y, por lo tanto, dos opciones para rellenar el campo **Clúster de clientes:** 

*   Con una [función de igualdad](#funcion-de-igualdad): `{nombredelapropriedad}={valor}`
*   Con una [función contains](#funcion-contains): `{nombredelapropriedad} contains {valor}`

Nótese que en ambas opciones, `{nombredelapropriedad}` debe cambiarse por el nombre del campo en la entidad de datos y `{"valor"}` debe sustituirse por el valor definido en Master Data.

>ℹ️ El uso de las comillas varía en [función del tipo de campo](https://help.vtex.com/es/tutorial/criando-entidade-de-dados--tutorials_1265#) creado en Master Data.

### Función de igualdad

La expresión `{nombredelapropriedad}={"valor"}` debe utilizarse en caso de necesidad de que la información contenida en el perfil del cliente para la propiedad en cuestión sea exactamente igual al valor introducido en la expresión.

En la siguiente configuración, por ejemplo, solo los registros de ``empleados`` con el valor `true` (utilizado en un campo **[booleano](https://help.vtex.com/es/tutorial/criando-entidade-de-dados--tutorials_1265#)**, donde los valores son siempre verdaderos o falsos) recibirán la promoción.

De esta manera también se podría establecer `empleado=false`, donde solo los registros de `empleado` con un valor `false` en el campo obtendrían la promoción.

![Campo funcionário Master Data ES](//images.ctfassets.net/alneenqid6w5/1GQftbj5FuIiQ4mUweacwa/8fdaea6b5ced25c76bea649ccc0e9e12/Campo_funcion__rio_Master_Data_ES.png)

![Cluster de clientes ES](//images.ctfassets.net/alneenqid6w5/1IOHFLD9w840WEuceWMk4Q/cb74a3f5ecba7fe987381e62543a13de/Cluster_de_clientes_ES.png)

Dado un campo **[Varchar](https://help.vtex.com/es/tutorial/criando-entidade-de-dados--tutorials_1265#)**, podríamos configurar `empleado="sí"` para que solo los clientes con el valor `"sí"` en el campo recibieran la promoción.

>⚠️ Para los campos de tipo **Varchar**, el valor introducido en la sección **Clúster de clientes** de la promoción distingue los caracteres minúsculos de los mayúsculos. Esto significa que si se completa la opción de Clúster de Clientes de forma diferente a la definida para el campo en Master Data, la promoción no se aplicará.

Por lo tanto, considerando el ejemplo anterior de un campo de tipo **Varchar** con los valores `"sí"` y `"no"`, el registro en la promoción debe ser `empleado="sí"`. Si se introduce el término `empleado="Sí"` en la promoción, por ejemplo, el clúster de clientes deseado no recibirá la promoción.

### Función contains

La expresión `{nombredelapropiedad} contains {valor}` debe utilizarse cuando la información contenida en el perfil del cliente para la propiedad en cuestión debe **contener** el valor introducido en la expresión.

Por ejemplo, si quiere crear un clúster sólo con clientes cuyas direcciones de correo electrónico contengan `@test.com`, la configuración sería igual a la representada en la imagen siguiente.

![Campo Email Master Data](//images.ctfassets.net/alneenqid6w5/5aeXd0Ro72P1GlzVeBiVVZ/4bfb1189f8f967ef9ed77e081291931b/Campo_Email_Master_Data.png)

![cluster email ES](//images.ctfassets.net/alneenqid6w5/5LKj1wrG3zL54lfh4R2MzQ/8139bb8d0546b62edf917418c5c92c5b/cluster_email_ES.PNG)

En este caso, `email contains test.com` será verdadero, por ejemplo, cuando el valor sea `joao@test.com` y falso cuando el valor sea `joao@test.org`.
