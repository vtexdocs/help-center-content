---
title: 'Gestionar cotizaciones en B2B'
id: 34EDJHyBVsewtRu0NnPMCq
status: PUBLISHED
createdAt: 2024-08-08T11:03:45.696Z
updatedAt: 2024-08-30T11:11:24.892Z
publishedAt: 2024-08-30T11:11:24.892Z
firstPublishedAt: 2024-08-08T17:16:35.983Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: managing-b2b-quotes
locale: es
legacySlug: gestionar-cotizaciones-en-b2b
subcategoryId: 74CLq9axeDw1YPzAtCpktn
---

La aplicación Cotizaciones B2B permite a los clientes que utilizan la aplicación  Organizaciones B2B solicitar cotizaciones para sus carritos de compras y guardarlas para uso futuro, incluyendo ítems, cantidades y precios. Esto facilita la negociación de precios con los representantes de ventas de la tienda y los flujos de aprobación de pedidos dentro de la organización.

En este artículo encontrarás información sobre:

- [Permisos de acceso](#permisos-de-acceso)
- [Mis cotizaciones](#mis-cotizaciones)
- [Crear una cotización o guardar un carrito](#crear-una-cotización-o-guardar-un-carrito)
- [Información de la cotización](#información-de-la-cotización)
- [Editar una cotización](#editar-una-cotización)

## Permisos de acceso
Es necesario configurar algunos permisos para acceder a **Cotizaciones B2B**. Los permisos para utilizar las funcionalidades de cotizaciones y carritos guardados pueden variar dependiendo del rol del usuario.

| Permiso                                                        | Roles                                                                                                                                    |
|----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Crear cotizaciones y carritos                                  | Store Admin<br>Sales Admin<br>Sales Manager<br>Sales Representative<br>Organization Admin<br>Organization Approver<br>Organization Buyer |
| Acceder a las cotizaciones y carritos de mis centros de costos | Sales Representative<br>Organization Approver<br>Organization Buyer                                                                      |
| Acceder a las cotizaciones y carritos de mis organizaciones    | Sales Manager<br>Organization Admin                                                                                                      |
| Acceder a todas las cotizaciones y carritos                    | Store Admin<br>Sales Admin                                                                                                               |
| Crear pedidos a partir de cotizaciones y carritos              | Store Admin<br>Sales Admin<br>Sales Manager<br>Sales Representative<br>Organization Admin<br>Organization Approver                       |
| Rechazar cotizaciones y carritos                               | Store Admin<br>Sales Admin<br>Sales Manager<br>Sales Representative<br>Organization Admin<br>Organization Approver                       |
| Editar cotizaciones y carritos de mis centros de costos        | Sales Representative                                                                                                                     |
| Editar cotizaciones y carritos de mis organizaciones           | Sales Manager                                                                                                                            |

## Mis cotizaciones
La aplicación **Cotizaciones B2B** activa la página **Mis cotizaciones**, una interfaz para gestionar cotizaciones y carritos guardados en la tienda online. Para acceder a esta página, debes haber iniciado sesión y tener los [permisos](#permisos-de-acceso) necesarios.

Para acceder a Mis cotizaciones, sigue las instrucciones a continuación:

1. Accede a la tienda virtual e inicia sesión.
2. Haz clic en **Hola, {nombre de usuario}**.
3. Haz clic en **Mi cuenta**.
4. Haz clic en **Cotizaciones y carritos guardados** en la barra lateral.

En esta página, puedes utilizar los siguientes recursos:

- **Barra de búsqueda:** permite buscar cotizaciones específicas o carritos guardados por nombre.
- **Filtros:** permiten filtrar las cotizaciones o los carritos guardados que se muestran por **Status**, **Organización** o **Centro de costos**. Las dos últimas opciones están disponibles en **Más**.
- **Nueva cotización:** permite crear una cotización o carrito guardado pulsando el botón `Nueva cotización`. Para saber más, consulta la sección [Crear una cotización o carrito guardado](#crear-una-cotización-o-guardar-un-carrito).

La lista de cotizaciones y carritos guardados muestra la siguiente información:

- **Nombre de ref.:** nombre de referencia de la cotización o carrito guardado.
- **Subtotal:** subtotal del carrito asociado a la cotización o al carrito guardado.
- **Creada por:** email del usuario que creó la cotización o el carrito guardado.
- **Creada el:** fecha de creación de la cotización o del carrito guardado, en formato `DD/MM/AAAA`.
- **Vencimiento:** fecha de vencimiento de la cotización o del carrito guardado, en formato `DD/MM/AAAA`.
- **Status: status actual de la cotización o el carrito guardado, incluyendo las siguientes opciones:
    - **Lista:** la cotización o el carrito guardado está ahora disponible para realizar un pedido.
    - **Pendiente:** la cotización está pendiente de revisión y ajuste por parte de un usuario de ventas.
    - **Revisada:** la cotización está pendiente de revisión y ajuste adicionales por parte de un usuario de ventas.
    - **Rechazada:** la cotización o el carrito guardado ha sido rechazada y no se puede utilizar para realizar un pedido.
    - **Vencida:** la cotización o el carrito guardado alcanzó su fecha de vencimiento y no puede utilizarse para realizar un pedido.
    - **Realizada:** la cotización o el carrito guardado se utilizó para realizar un pedido y no se puede volver a utilizar.
- **Última actualización:** fecha de la última actualización de la cotización o el carrito guardado, en formato `DD/MM/AAAA`.
- **Organización:** nombre de la organización a la que está asociada la cotización o el carrito guardado.
- **Centro de costos:** nombre del centro de costos al que está asociada la cotización o el carrito guardado.

Los usuarios pueden hacer clic en cualquier fila o en el <i class="fas fa-ellipsis-v" aria-hidden="true"></i> y, a continuación, hacer clic en **Detalles** para ver y editar la información de una cotización, según sus permisos.

![Minhas cotações - ES](https://images.ctfassets.net/alneenqid6w5/53BQDZh9EBc8OrFTxfO1eD/95263971bac96765813a8473ff3b1e9e/Minhas_cota__es.png)

## Crear una cotización o guardar un carrito
Para crear una cotización o carrito guardado, es necesario tener el [permiso Crear cotizaciones y carritos](#permisos-de-acceso). Después de agregar productos al carrito en la tienda, utiliza el contenido del carrito para crear un carrito guardado o solicitar una cotización. Sigue las instrucciones a continuación:

<ol>
   <li>
      Agrega productos al carrito.
      <ul>
         <li>Haz clic en <strong>Crear cotización</strong> dentro del carrito.</li>
      </ul>
   </li>
   <li>
      Accede al storefront de la tienda y haz clic en <strong>Hola, {nombre de usuario}</strong>. Haz clic en <strong>Mi cuenta</strong>.
      <ul>
         <li>Haz clic en <strong>Cotizaciones y carritos guardados</strong> en la barra lateral.</li>
      </ul>
   </li>
   <li>Haz clic en <strong>Nueva cotización</strong>.</li>
   <li>Accede a la ruta <code>/b2b-quotes/create</code>.</li>
   <li>Ingresa el nombre de la cotización o carrito guardado.</li>
   <li>
      Asegúrate de que toda la información de la página Crear cotización es correcta:
      <ul>
         <li><strong>Subtotal original:</strong> subtotal del carrito antes de cualquier descuento.</li>
         <li><strong>Descuento porcentual:</strong> porcentaje del descuento ofrecido por un representante de ventas.</li>
         <li><strong>Subtotal cotizado:</strong> subtotal de la cotización, incluidos los descuentos ofrecidos por los representantes de ventas.</li>
         <li><strong>Imagen:</strong> imagen del producto seleccionado.</li>
         <li><strong>Código de ref.:</strong> código de referencia del producto seleccionado.</li>
         <li><strong>Nombre:</strong> nombre del producto.</li>
         <li><strong>Precio original:</strong> precio original del producto.</li>
         <li><strong>Precio cotizado:</strong> precio del producto, incluidos los descuentos ofrecidos por los representantes de ventas.</li>
         <li><strong>Cantidad:</strong> número de ítems.</li>
         <li><strong>Total:</strong> valor total considerando el precio cotizado y la cantidad de ítems.</li>
      </ul>
   </li>
   <li>Ingresa una observación en el campo <strong>Agregar observación</strong>, si es necesario.</li>
</ol>
>ℹ️ Las observaciones aquí añadidas serán visibles como parte del Historial de actualizaciones de la cotización o carrito guardado y podrán ser vistas por los vendedores u otros miembros de tu organización y centro de costos. Por ejemplo, si un usuario quiere solicitar un descuento específico al vendedor de la tienda B2B, puede incluir esta solicitud como observación.
<ol start="8">
   <li>
      Haz clic en una de las siguientes opciones:
      <ul>
         <li>
            <strong>Guardar para más tarde:</strong> se crea un carrito guardado. El status del carrito guardado recién creado cambia a <strong>Lista</strong>, lo que significa que cualquier usuario dentro de esa organización o centro de costos que tenga <a href="#">permisos</a> para realizar pedidos podrá utilizar el carrito inmediatamente desde la sección de Cotizaciones y carritos para realizar un pedido.
         </li>
         <li>
            <strong>Guardar cotización:</strong> se crea una cotización. El status de la cotización recién creada figurará como <strong>Pendiente</strong>, lo que significa que tendrá que ser revisada y ajustada por un vendedor antes de que se puedan aplicar descuentos especiales.
         </li>
      </ul>
   </li>
</ol>

Una cotización es esencialmente un carrito guardado con las cantidades y precios originales de los ítems del carrito del usuario.

![Crie uma cotação - ES](//images.ctfassets.net/alneenqid6w5/sIVQqxw1NtZLbqtI3K4we/2b38996c023fb754242a720a5a7066a3/Crie_uma_cota__o.png)

## Información de la cotización
La página Información de la cotización muestra toda la información sobre una cotización o carrito guardado, así como las acciones disponibles en función del status y de los [permisos del usuario](#permisos-de-acceso). Para acceder a esta página, ve a **Mi cuenta > Cotizaciones y carritos guardados**.

En esta página verás la siguiente información:

- **Nombre:** nombre de referencia de la cotización o carrito guardado.
- **Subtotal original:** subtotal del carrito antes de cualquier descuento.
- **Descuento porcentual:** porcentaje del descuento ofrecido por un representante de ventas.
- **Subtotal cotizado:** subtotal de la cotización, incluidos los descuentos ofrecidos por los representantes de ventas.
- **Vencimiento:** fecha de vencimiento de la cotización o del carrito guardado, en formato `DD/MM/AAAA`.
- **Status:** status actual de la cotización o carrito guardado, como se muestra en la página Mis cotizaciones.
- **Imagen:** imagen del producto seleccionado.
- **Código de ref.:** código de referencia del producto seleccionado.
- **Nombre:** nombre del producto.
- **Precio original:** precio original del producto.
- **Precio cotizado:** precio del producto, incluidos los descuentos ofrecidos por los representantes de ventas.
- **Cantidad:** número de ítems.
- **Total:** valor total considerando el precio cotizado y la cantidad de ítems.
- **Historial de actualizaciones:** incluye un historial de todos los eventos relacionados con la cotización, como su creación y los descuentos ofrecidos, incluidas las observaciones, si las hubiera.
- **Agregar observación:** campo opcional para ingresar comentarios u observaciones. Las observaciones aquí añadidas serán visibles como parte del Historial de actualizaciones de la cotización o carrito guardado. Por ejemplo, si un usuario quiere solicitar un descuento específico al vendedor de la tienda B2B, puede incluir esta solicitud como observación.

![Detalhes da cotação - ES](//images.ctfassets.net/alneenqid6w5/5XLea07XtuCRfGJyvX819I/8d46379fe54a26b3d3a0a6ecdc19d2b1/Detalhes_da_cota__o.png)

## Editar una cotización
Los usuarios con [permisos](#permisos-de-acceso) de edición, normalmente asociados a roles de ventas o administradores de tienda, pueden editar cotizaciones en la página Información de la cotización de la siguiente manera:

- **Modificar el precio o la cantidad de cada SKU:** editar directamente en las columnas Precio de la cotización y Cantidad de la lista de productos dentro de la cotización.
- **Aplicar descuento porcentual:** aplicar un porcentaje de descuento a toda la cotización arrastrando la barra de descuento hasta el porcentaje deseado. Esto anulará cualquier cambio realizado en los precios de productos individuales.
- **Modificar fecha de vencimiento:** cambia la fecha de vencimiento de la cotización.
- **Agregar observación:** ingresar un comentario opcional.

Después de editar la página de información de la cotización, guarda la cotización haciendo clic en `Guardar cotización`. Esto definirá el status de la cotización como **Lista** y notificará el cambio por email a todos los usuarios que hayan interactuado previamente con dicha cotización.

### Solicitar ajustes adicionales en una cotización
Los usuarios sin permisos de edición, pero con [permisos de acceso](#permisos-de-acceso), pueden agregar observaciones adicionales a una cotización o carrito a menos que el status actual sea **Lista**, **Pendiente** o **Revisada**.

Cuando un vendedor ajusta y guarda una cotización, el status cambia a **Lista**. A continuación, un miembro de la organización puede agregar observaciones y hacer clic en **Enviar al** **representante de ventas**, cambiando el status a **Revisada**. De este modo, el miembro de la organización puede solicitar ajustes adicionales de precios o cantidades.

### Rechazar una cotización o carrito guardado
Los usuarios con el [permiso](#permisos-de-acceso) para **Rechazar** cotizaciones y carritos pueden rechazar una cotización o carrito a menos que el status actual sea **Lista**, **Pendiente** o **Revisada**, haciendo clic en `Rechazar` en la página de información de la cotización. Una cotización o carrito guardado rechazados no se podrán editar ni utilizar para realizar un pedido.

### Utilizar una cotización o carrito guardado para realizar un pedido
Los usuarios con [permiso](#permisos-de-acceso) para realizar **Pedidos** desde cotizaciones y carritos pueden utilizar una cotización o carrito guardado para realizar un pedido, si el status actual es **Lista**, **Pendiente** o **Revisada**.

Para utilizar la cotización, haz clic en `Usar cotización` en la página de información de la cotización. Se te redirigirá al checkout con el contenido de la cotización o del carrito guardado, que se agregará automáticamente a tu carrito actual. Se eliminarán todos los ítems que estuvieran previamente en el carrito.

>⚠️ Si la aplicación Configuración de [checkout B2B](https://help.vtex.com/es/tutorial/b2b-checkout-settings--u7wG1SjmeCqXCSF2UsVok) está instalada, el checkout se bloqueará hasta que realices el pedido. Esto significa que no podrás modificar las cantidades de los productos ni agregar o remover nuevos productos. Si no hay suficientes ítems en stock para satisfacer la cantidad especificada en la cotización o carrito guardado, el sistema ajustará automáticamente la cantidad. Si un producto no está disponible, el checkout te permitirá removerlo del carrito.

Una vez realizado el pedido, el status de la cotización o carrito guardado cambiará automáticamente a **Realizada**, impidiendo que pueda ser utilizado posteriormente.
