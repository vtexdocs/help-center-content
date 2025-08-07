---
title: 'VTEX Pick and Pack: Fulfillment'
id: 1zGUEItEEVsal6cuBEBNcA
status: PUBLISHED
createdAt: 2023-04-10T15:43:59.687Z
updatedAt: 2025-07-16T15:33:51.287Z
publishedAt: 2025-07-16T15:33:51.287Z
firstPublishedAt: 2023-04-10T17:57:34.714Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: vtex-pick-and-pack-fulfillment
locale: es
legacySlug: vtex-pick-and-pack-fulfillment
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

<div class = "alert alert-info">
Si tienes interés en implementarla en tu negocio, rellena nuestro <a href="https://vtex.com/co-es/contacto/">formulario</a> indicando en el campo <code>Comentarios</code> el nombre del producto deseado.
</div>

- [Ingreso a la aplicación](#ingreso-a-la-aplicacion)
    - [Página de inicio](#pagina-de-inicio)
- [Proceso de alistamiento](#proceso-de-alistamiento)
    - [Creación de hojas de trabajo](#creacion-de-hojas-de-trabajo)
    - [Alistamiento de ítems](#alistamiento-de-items)
    - [Rechazar ítems](#rechazar-items)
    - [Reemplazar ítems](#reemplazar-items)
    - [Observaciones al ítem o al pedido](#observaciones-al-item-o-al-pedido)
    - [Opciones de la hoja de trabajo dentro del menú](#opciones-de-la-hoja-de-trabajo-dentro-del-menu)
- [Proceso de empaquetado](#proceso-de-empaquetado)
    - [Empaquetado en masa o individual](#empaquetado-en-masa-o-individual)
        - [Empaquetado en masa](#empaquetado-en-masa)
        - [Empaquetado individual](#empaquetado-individual)
- [Proceso de envío](#proceso-de-envio)
- [Sección Pedidos - Admin](#seccion-pedidos---admin)
- [Sección Hojas de trabajo - Admin](#seccion-hojas-de-trabajo---admin)
- [Configuración de la aplicación](#configuracion-de-la-aplicacion)
    - [Configuración y alistamiento](#configuracion-y-alistamiento)
    - [Cambios en los pedidos](#cambios-en-los-pedidos)
    - [Motivos de rechazo y motivos de cambios de precio](#motivos-de-rechazo-y-motivos-de-cambios-de-precio)
        - [Límite de cambios](#limite-de-cambios)
        - [Hojas de trabajo para habilitar o deshabilitar funciones](#hojas-de-trabajo-para-habilitar-o-deshabilitar-funciones)
        - [Tags de hojas de trabajo](#tags-de-hojas-de-trabajo)
        - [Activar códigos EAN dinámicos](#activar-codigos-ean-dinamicos)
    - [Configuración de categorías](#configuracion-de-categorias)
    - [Configuración de empaquetado](#configuracion-de-empaquetado)
    - [Configuración de pedidos](#configuracion-de-pedidos)
    - [Configuración de automatización](#configuracion-de-automatizacion)
    - [Configuración de instalaciones](#configuracion-de-instalaciones)
    - [Configuración de catálogo](#configuracion-de-catalogo)

## Ingreso a la aplicación

Para empezar a utilizar Pick and Pack, es necesario tener acceso a la [aplicación](https://picking.pickingnpacking.com/login) como alistador. Como alistador podrás acceder a tu cuenta, iniciar sesión y encontrar pedidos. [Ir a la aplicación](https://picking.pickingnpacking.com/login).

Ingresa tu usuario debidamente registrado, contraseña y haz clic en  **iniciar sesión**.

![pick and pack 1](https://images.ctfassets.net/alneenqid6w5/3tIH46Q7spSVEa1nDMBaHU/6c9cf04d64fe02a4a4e27c0cbcfe9ea2/image26.png)

## Página de inicio

Al acceder, se habilita el dashboard del alistador, que te permitirá monitorizar, analizar y visualizar los indicadores clave de desempeño del alistador.

![pick and pack 2](https://images.ctfassets.net/alneenqid6w5/3Hx3ir28gfSdv60DupqIpj/d169addf3e5162f53fd4ffae4fabf172/image3.png)

- Permite visualizar de manera gráfica la cantidad de pedidos alistados durante los últimos días.
- Puedes consultar la cantidad de pedidos con alistamiento finalizado.
- Puedes consultar el tiempo total invertido en cada ítem de los pedidos procesados.
- Permite conocer la cantidad de hojas de trabajo con el proceso de alistamiento finalizado y las que están pendientes de realizar el proceso de empaquetado.
- - Permite conocer los pedidos pendientes que aún no han iniciado el proceso de alistamiento.

En la sección superior de la aplicación podrás encontrar las siguientes funcionalidades.

- **Selección de instalación,** ubicada a la derecha del ícono del usuario alistador. Al tocar, indica las instalaciones asociadas al usuario.

![pick and pack 3](https://images.ctfassets.net/alneenqid6w5/7KTcPX2RJjmo7QMfZxsxx8/b5b10100395ac08bc6cb78575e3eeaed/image15.png)

- **Menú**, donde figuran los accesos directos a las funcionalidades principales de la aplicación.

![pick and pack 4](https://images.ctfassets.net/alneenqid6w5/2633eMzDne2LCpYWqksCUm/e09e4962d5a17b8b68993387b2fcb719/image17.png)

## Proceso de alistamiento

### Creación de hojas de trabajo

Desde la página de inicio, toca la opción **Sin asignar.** 

Al ingresar, encontrarás pedidos que están listos para preparación, organizados por fecha de entrega de forma descendiente.

Los pedidos en color rojo son aquellos que llevan mucho tiempo sin ser gestionados y el verde representa aquellos más recientes.

<div class = "alert alert-info">
Las hojas de trabajo permitirán combinar varios pedidos, de modo que todos los ítems puedan ser alistados.
</div>

Elige los pedidos que deseas gestionar y haz clic en la opción  **Empezar a alistar.** En ese momento el sistema crea las hojas de trabajo, con su respectivo número de identificación, que estarán compuestas por los ítems de los pedidos seleccionados.

![pick and pack 5](https://images.ctfassets.net/alneenqid6w5/3ibz0RB8PSB3NdQnfVmXny/dc584f577881dbe47ff343a05ea0c528/image43.png)

![pick and pack 6](https://images.ctfassets.net/alneenqid6w5/79AdZNyZkpj3dK8uLfFUnz/ee0bd30e3073345a515d46c7e0de1019/image11.png)

De igual manera, se  habilitarán las acciones de alistamiento para cada producto que compone los pedidos asociados a las hojas de trabajo.

### Alistamiento de ítems

Hay varias formas de iniciar el alistamiento de los productos: 

Sitúate sobre el producto que deses alistar, y desliza hacia la izquierda.

![pick and pack 7](https://images.ctfassets.net/alneenqid6w5/1hGlv0xBZbzSxviLzKXHTW/05f428c28ca4faff07d563b48a8e60e6/image39.png)

Si se pulsa una vez sobre el producto, solo será alistada una unidad. Si se pulsa dos veces, se alistarán todas las unidades.

### Rechazar ítems

Existen varias formas de rechazar un producto:

Sitúate en el producto que deseas alistar, y desliza hacia el lado derecho.

![pick and pack 8](https://images.ctfassets.net/alneenqid6w5/57QUYlKaUtl360QlxWC4kt/af1d8ca336a5f911568f9ec948461bf4/image7.png)

Mantén pulsado el producto y se desplegará un menú, donde puedes seleccionar Descartar ítem.

![pick and pack 9](https://images.ctfassets.net/alneenqid6w5/2zRTW81m8FsoFpvNl70O4/b6b7f8ebe0d37d6439a348ed0735a5f0/image25.png)

Después, debe incluirse el motivo del rechazo. Si lo deseas, puedes rechazar una cantidad específica, ingresando la cifra para después pulsar la opción Descartar unidades. También puedes descartarlas todas, como se muestra en la captura de pantalla a continuación.

![pick and pack 10](https://images.ctfassets.net/alneenqid6w5/78Ghr0v7Dp1PkKqLF1Q4pZ/2fc6d278277e1aa09c19ffad4c05935d/image23.png)

### Reemplazar ítems

La opción **Reemplazar ítem** se encuentra en el menú que se despliega al tocar cada producto.

Si se accede a **Reemplaza ítem**, el sistema valida los pedidos a los que pertenece el producto. Si existen pedidos que comparten productos el sistema habilita el listado de los pedidos asociados.

![pick and pack 11](https://images.ctfassets.net/alneenqid6w5/2fFFzKLeIp6dNgknXAYuC/efdcba4627eadd592938dc8d4419218c/image21.png)

Selecciona los pedidos deseados y toca la opción **Reemplazar en los pedidos seleccionados.** Después, el sistema habilitará la pantalla **Reemplazar ítem.**

La pantalla Reemplazar ítem habilita los productos asociados al producto a reemplazar. Puedes utilizar el filtro de búsqueda.

![pick and pack 12](https://images.ctfassets.net/alneenqid6w5/3lGf61iDMk0nXqPtpIjTvM/3ff3f40f5609d481d8ee1d844a586a5a/image57.png)

Selecciona el producto deseado y haz clic en  la opción Reemplazar ítem: el sistema habilitará los campos de reemplazo.

![pick and pack 13](https://images.ctfassets.net/alneenqid6w5/1pYNdI9Az53pRgdg1cYTnm/aef41d13dbcfa7534c36fe94de3733ff/image35.png)

Se pueden ingresar los siguientes datos:
- Precio.
- Cantidad.
- Seleccionar el motivo de rechazo.
- Ingresar la descripción del rechazo.
- Modificar el precio.

Toca la opción **Confirmar reemplazo.**

### Observaciones al ítem o al pedido

Para ingresar observaciones sobre el producto, accede al menú del ítem y después a la opción **Agregar observaciones.**

![pick and pack 14](https://images.ctfassets.net/alneenqid6w5/1r3yi390cfL6GxMcbEAWyj/1f8138ce000a1408441d5f77dbed2d2b/image31.png)

Si existen pedidos que comparten producto, selecciona el pedido al que debe asociarse la observación. Ingresa la observación y toca la opción **Agregar observación.**

Para ingresar observaciones a la hoja de trabajo, nos ubicamos en el menú y seleccionamos la opción **Agregar observaciones.** Ingresamos las observaciones y tocamos en **Agregar observación.**

### Opciones de la hoja de trabajo dentro del menú

- **Listo para empaquetar:** permite alistar o rechazar todos los ítems asociados a la hoja de trabajo.
- **Pausar alistamiento:** al hacer clic sobre esta opción, la hoja de trabajo queda en estado de pausa para no afectar el rendimiento del alistador.
- **Imprimir lista de alistamiento:** disponibiliza un documento que enumera los ítems alistados de cada pedido.

![pick and pack 15](https://images.ctfassets.net/alneenqid6w5/7D4oZ5bWzb5BPeN43xH7HV/002a586863b4e1044aeac477b165cc2e/image45.png)

## Proceso de empaquetado

Al terminar con el alistamiento del pedido el status pasa a ser Listo para empaquetar, permitiendo realizar el proceso de empaquetado.

Existen varias formas de iniciar el empaque.

En el dashboard se encuentra la opción **Para empaquetar;** al acceder, nos redirige a la lista de hojas de trabajo pendientes por empacar. Desde el menú, accedemos a la lista de **Empaquetado** ubicada dentro de la opción **Pendiente.**

![pick and pack 15](https://images.ctfassets.net/alneenqid6w5/5wiF37YnG1uwyR3j3SjB50/f3634ddeab5a581319b18252955ae4b3/image9.png)

Dentro de la pestaña **Empaquetado** seleccionamos la hoja de trabajo que se encuentre en estado Listo para empaquetar o Empaquetado para iniciar o continuar el proceso de empaque.

Al acceder encontramos la lista de productos, donde podemos realizar un empaque individual o en masa.

![pick and pack 16](https://images.ctfassets.net/alneenqid6w5/76b06UUuKR7apFSGFXfetA/2a2b5bdfd1377b631e33102676adc9d3/image14.png)

### Empaquetado individual o en masa

#### Empaquetado en masa

Para realizar un empaquetado en masa, dirígete al icono en forma de caja ubicado al lado derecho del campo de búsqueda.

Al tocar, se abre una ventana donde seleccionar el pedido para hacer el empaque masivo. Elige el embalaje que deseas utilizar.

Verifica los productos del pedido que seleccionaste y toca la opción Empaquetar producto.

![pick and pack 17](https://images.ctfassets.net/alneenqid6w5/4cTjjNy4p1dcFjTFklDhhi/ccb4a42627f2d3e78a3ef26f23f9ee28/image5.png)

#### Empaquetado individual

Para realizar un empaquetado individual, selecciona el producto que necesitas empaquetar.

Si el producto está asociado a más de un pedido, el sistema lista los pedidos que puedes empaquetar; elige el pedido deseado.

Haz clic en **Nuevo Paquete** y selecciona el embalaje que deseas utilizar. 

Agrega las unidades y selecciona la opción **Empaquetar producto.**

## Proceso de envío

Una vez alistados todos los ítems, debes realizar el proceso de envío seleccionando desde el menú la opción **Para enviar.**

![pick and pack 18](https://images.ctfassets.net/alneenqid6w5/3JqIlsCpWHul7ou3md1N4h/8307b7628684191dfa7f712ca4293808/image18.png)

Se abrirá el listado de pedidos que se encuentran listos para envío, organizados por fecha de empaque. Haz clic sobre el pedido que deseas enviar.

Si el pedido contiene más de un paquete, se deben seleccionar los paquetes para crear el servicio de envío. Después, haz clic en **Siguiente.**

Para crear el servicio de envío, deben proporcionarse los siguientes datos:

- Fecha de recolección.
- Fecha de entrega.
- Seleccionar transportadora.

Al terminar, toca en la opción **Seleccionar y continuar.**

![pick and pack 18](https://images.ctfassets.net/alneenqid6w5/7mvhayvPfwyNkHgq5DMCWk/24ad3596a5d163694abc38f6b858a226/image16.png)

Verifica los datos del servicio y haz clic en la opción **Crear servicio.**

## Sección pedidos - Admin

Al entrar como Administrador tendrás acceso a la opción **Pedidos** desde el panel de Pick and Pack.

En esta sección se muestra la distribución de pedidos según el estado en el que se encuentre actualmente:

- Todos
- Pendiente
- Para enviar
- Entregados
- Cancelado
- Rechazado
- Exportar

Posee un filtro de búsqueda configurable según la necesidad de resultado del usuario. Se puede filtrar por:

- Fecha de creación
- Fecha de entrega
- Categorías
- Medios de pago
- Estrategia de envío

Cuenta con un botón para **cerrar** ventana, o en su defecto, para **borrar todos** los filtros seleccionados.

![pick and pack 20](https://images.ctfassets.net/alneenqid6w5/2cCfB2KdjWyRdvD8q9z4BF/3710266548a474dff6516120945ed626/image4.png)

La  sección Pedidos muestra la tabla de datos sin filtrar, con las opciones:

- ID del pedido
- Facturas
- Ítem(s)
- Envío
- Pago
- Tags
- Fecha de vencimiento
- Status

El usuario tendrá acceso a toda la información necesaria que corresponde al pedido.

Al seleccionar un pedido, se abrirá una ventana adicional en la cual se muestra el estado del pedido.

- Además se puede comprobar el tiempo de preparación y la fecha de entrega prevista.
- Las facturas del pedido.
- Los ítem(s): se observarán los ítems ya alistados, rechazados, reemplazados y otras acciones realizadas desde la aplicación.
- Las observaciones del pedido.
- La información de envío.
- La información del pago.
- La información adicional.
- Inicios de sesión.

## Sección hojas de trabajo - Admin

Al acceder como administrador, se podrá hacer un seguimiento de los pedidos y los flujos de datos de todas las acciones realizadas en la aplicación.

En la opción **Hojas de trabajo** se muestran las  siguientes secciones:

### Tiempo real

Muestra la cantidad de pedidos realizados y su porcentaje.

### Pedidos no asignados

En esta sección se encuentran los pedidos que aún no han sido asignados a ningún alistador; los pedidos en color rojo son los que llevan más tiempo y los que están en verde son los más recientes.

### Hojas de trabajo

En esta opción se podrán encontrar los pedidos que ya han iniciado un proceso de alistamiento desde la aplicación.

Al ingresar se muestra una tabla con las opciones:

- Todos
- Alistando
- Empaquetando
- Completado
- Cancelado

También posee la opción de Fijado, donde el usuario puede acceder a los pedidos en los que está trabajando actualmente.

### Filtro de Búsqueda

Además, cuenta con un filtro de búsqueda que permite encontrar los pedidos según la necesidad del usuario.

![pick and pack 21](https://images.ctfassets.net/alneenqid6w5/T6d3roLMCvoOMi52X7KMJ/3faf3580c22a2c289ff7aeef7c2ffc7f/image59.png)

## Configuración de la aplicación

Entra al panel de administrador de tu tienda VTEX utilizando tus credenciales de acceso. Después, en el menú **Pick and Pack,** haz clic en la opción **Configuración.**

Una vez dentro, encontrarás varias opciones que te permitirán personalizar los siguientes procesos:

- Alistamiento
- Categorías de los productos
- Empaquetado
- Pedidos
- Automatización
- Usuarios
- Catálogo
- Instalaciones

### Configuración y alistamiento

La estrategia de alistamiento está estructurada por olas, e incluye:

- Cambios en los pedidos.
- Motivos de reemplazo y rechazo.
- Motivos de cambio de precio.
- Límite de cambios de cantidad de ítems en el pedido.
- Límite de cambios de precio en ítems del pedido.
- Límite total de cambios en los pedidos.
- Hojas de trabajo.
- Tags de hojas de trabajo.
- Activar códigos EAN dinámicos.

<div class = "alert alert-info">
Alistamiento por olas significa que a medida que van llegando los pedidos estos pueden alistarse.
</div>

### Cambios en los pedidos

Activar o desactivar las siguientes funciones:

- Enviar cambios al OMS
- Permitir cambiar el precio de los ítems
- Permitir reemplazo de ítems
- Permitir rechazar ítems
- Permitir editar las cantidades de los ítems
- Permitir agregar observaciones en el pedido
- Permitir agregar observaciones en los ítems

### Motivos de rechazo y motivos de cambios de precio

Permiten configurar las opciones que el sistema va a habilitar dentro de la aplicación Pick and Pack. Solo debes hacer clic sobre los campos para crearlos o eliminarlos del listado.

#### Límite de cambios

Los límites de cambios de cantidad y precio de ítems en el pedido te permiten configurar el porcentaje (%) aceptado por cada tienda.

#### Hojas de trabajo para habilitar o deshabilitar las siguientes funciones:

- Permitir varios pedidos en una hoja de trabajo
- Activar alistamiento rápido
- Activar express fulfillment
- Permitir mover pedidos una vez iniciado el alistamiento
- Permitir mover pedidos entre hojas de trabajo

#### Tags de hojas de trabajo

<div class="alert alert-warning">
Solo debes hacer clic sobre el campo para crearlo o eliminarlo del listado.
</div>

Las tags ayudan como identificadores de las hojas de trabajo para poder realizar configuraciones, filtros o asignaciones  necesarias dentro del sistema.

#### Activar códigos EAN dinámicos

Existen tres tipos: precio, peso y cantidad. La configuración se compone de:

- **Prefijo:** corresponde al identificador que el sistema va a tomar en el momento de asociar los EAN dinámicos.
- **Identificador del ítem:** corresponde al tipo de identificador que el sistema va a tomar (RefID o SKU) para los identificadores.
- **Decimales:** cantidad de decimales que soporta.
- **Prueba:** permite verificar que la configuración esté correcta.

<div class = "alert alert-info">
Puedes seleccionar los tres tipos de configuraciones para la tienda.
</div>

<div class = "alert alert-info">
Si quieres eliminar un tipo puedes hacerlo dentro del campo haciendo clic sobre la X que lo acompaña.
</div>

<div class="alert alert-danger">
EAN dinámico es un código que se genera con el peso del producto para calcular el precio.
</div>

### Configuración de categorías

Aquí puedes realizar la configuración de las categorías que van a estar disponibles en la tienda, permitiendo importarlas y exportarlas. Esta configuración se realiza por Instalación.

También puedes definir el orden de alistamiento preferido para cada instalación. Este orden de alistamiento se aplica a todas las hojas de trabajo de una instalación específica.

La opción **Configuración rápida** replica la configuración de todas las Instalaciones asociadas a la tienda.

### Configuración de empaquetado

La configuración de empaquetado e impresión incluye: 

- Permitir informes sobre paquetes.
- Permitir empaquetado automático.
- Configuración de impresión de etiquetas de paquetes.
- Configuración de impresión de recibos.
- Sobres.

La configuración de impresión de etiquetas de los paquetes te permite realizar los ajustes de la hoja de impresión: 

- Formato
- Tamaño de la fuente
- Márgenes
- Dimensiones

La configuración de sobres te permite crear el tipo de empaque de la tienda.

En el momento de crearlos, el sistema proporciona los campos de configuración del paquete, que incluyen: 

- **Nombre.**
- **Tipo:* permite seleccionar si son bolsas, cajas, sobres, etc.
- **Código:** corresponde a la identificación que maneja la tienda.
- **Medidas.**

### Configuración de pedidos

La configuración de pedidos te permite habilitar la descarga de pedidos del OMS, teniendo en cuenta las siguientes configuraciones:

- Medios de pago.
- Métodos de envío.
- Tipo de envío.
- Tags del pedido.

### Configuración de automatización

Esta configuración permite crear, editar y eliminar usuarios de Pick and Pack.

Podemos asignar el rol Admin a los usuarios que se encuentran habitados.

También podemos crear usuarios Alistadores, asignarles instalaciones, realizar el proceso de empaquetado y asignación de categorías.

### Configuración de instalaciones

Para la gestión del usuario alistador, es importante la asignación de instalaciones (facilities), debido a que esto le permitirá ver los pedidos asociados y así podrá realizar la gestión del alistamiento.

Los alistadores pueden vincularse a una o varias instalaciones.

<div class = "alert alert-info">
Instalación: es el lugar físico donde existen alistadores recolectando productos.
</div>

### Configuración de catálogo

Te permite tener sincronizado el catálogo de VTEX con el de Pick and Pack.

Si existen nuevos productos dentro del catálogo se debe indexar el catálogo.

Además, incluimos la opción de agregar más EAN a los productos e indicar si son productos que deben mantenerse a temperatura ambiente, fríos o congelados.

