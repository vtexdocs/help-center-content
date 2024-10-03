---
title: 'Guía de referencia principal para Store Framework'
id: 5DuS29UYoDxairc3Qy39oP
status: ARCHIVED
createdAt: 2019-04-09T14:46:15.428Z
updatedAt: 2020-03-13T21:24:59.706Z
publishedAt: 
firstPublishedAt: 2019-04-09T18:12:50.599Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slugEN: store-framework-master-reference-guide
locale: es
legacySlug: untitled-entry-2019-04-09-at-02-46-15
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

A continuación podrá encontrar la lista de componentes disponibles para la implementación en su store theme:

| Nombre del componente | Descripción |
| ---------- | ---------- |
| `address-locator`  | el app address locator de VTEX útil para tiendas DeliveryTheme |
| `breadcrumb` | BreadCrumb de VTEX es un esquema de navegación secundaria que revela la ubicación del usuario en la tienda y es utilizado por el producto Dreamstore |
| `carousel` | El app carousel de VTEX es un store component muy popular que muestra una colección de banners, y este app es utilizado por el store theme|
| `category-menu` | El app Category Menu de VTEX muestra los detalles de un producto como imagen, nombre y precio. Este app es utilizado por el store theme |
| `login` | El app de Login de VTEX es responsable de controlar el inicio de sesión de usuario |
| `menu` | El app Menu de VTEX es un store component que muestra una barra con links y menús desplegables (drop-down), y este app es utilizado por el store theme |
| `minicart` | El app minicart de VTEX es un store component que muestra una lista de todos los ítems que un cliente añadió en nuestra API Checkout OrderForm, y este app es utilizado por el store theme |
| `my-account` | My account es un app canonical que cualquier VTEX store puede utilizar. Este app se encarga de gestionar los datos personales del cliente, tales como direcciones y tarjetas de crédito |
| `my-account-commons` | My Account Commons es un conjunto de componentes canonicales que pueden utilizarse para crear nuevas pestañas para ser insertadas en el app vtex.my-account |
| `order-placed` | El app OrderPlaced para VTEX IO Stores, que sustituye a checkout-confirmation-ui |
| `product-customizer` | El app de personalización de productos de VTEX |
| `product-details` | El app Category Menu de VTEX muestra los detalles de un producto como imagen,  nombre y precio. Este app es utilizado por el store theme |
| `product-kit` | El app Product Kit de VTEX muestra dos o más productos como un kit. Por lo general, estos productos se venden juntos y ofrecen un descuento. Este app es utilizado por el store theme |
| `product-summary` | El app Product Summary de VTEX resume las informaciones del producto, tales como nombre, precio e imagen |
| `search-result` | El app Search Result de VTEX es un store component que se encarga del resultado de nuestra API de búsqueda, y este app es utilizado por el store theme |
| `shelf` | El app Shelf de VTEX es un store component que muestra una colección de productos, y este app es utilizado por el store theme |
| `store-components` | Store Components de VTEX es una colección de componentes que pueden utilizarse para crear/ampliar otros apps de VTEX |
| `store-footer` | El app Footer de VTEX es un store component que muestra información acerca de la tienda, como dirección, redes sociales y formas de pago. Úselo para enlazar su política de privacidad, preguntas frecuentes, beneficios y asistencia |
| `store-header` | El app Header de VTEX es un store component que representa una barra de navegación fija en la parte superior, y es utilizada por el store theme |
| `store-icons` | Todos los componentes de los iconos de la tienda |
| `telemarketing` | El app telemarketing de VTEX es un store component que permite a un operador del call center hacerse pasar por un cliente en la tienda, y este app es utilizado por el store theme |
| `wishlist` | Un store component similar a una cuenta, pero diseñado para crear listas de deseos |
| `rich-text` | El Rich Text de VTEX convierte textos escritos en lenguaje markdown y muestra su contenido como elementos HTML |

| Componentes predeterminados dentro del proyecto store-components | Descripción |
| ---------- | ---------- |
| `Animation` | Animation es un componente de VTEX que muestra algunas animaciones en sus child props. Este componente puede ser importado y utilizado por cualquier app de VTEX. |
| `Availability Subscriber` | AvailabilitySubscriber es un componente de VTEX que muestra el formulario de suscripción de disponibilidad que se muestra cuando el producto no está disponible. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Buy Button` | BuyButton es un componente de VTEX responsable de controlar los eventos de adición de productos en el carrito. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Categories Highlights` | Categories Highlights es un banner que muestra dos o cuatro categorías en una posición de destaque en la tienda. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Collection Badges` | Collection Badges  es un componente de VTEX que renderizará una imagen con la lista de collection badges  ubicada en la parte inferior. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Container` | Container es un componente de VTEX que se utiliza para wrap code, aplicando estilos personalizados en el proceso. Se utiliza en todos los apps en la tienda para aplicar un comportamiento similar. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Discount Badge` | Discount Badge  es un componente de VTEX que muestra un descuento de un producto. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Gradient Collapse` | GradientCollapse es un componente de VTEX que oculta parte del child cuando es más grande que el collapseHeight dando al usuario las opciones de mostrar más o mostrar menos. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Greeting` | Greeting  es un componente de VTEX que reproduce un mensaje de bienvenida predeterminado con el nombre del usuario si está disponible en el orderForm. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Logo` | Logo es un componente de VTEX que muestra un logotipo de imagen. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Product Description` | ProductDescription es un componente de VTEX que muestra la descripción de un producto. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Product Images` | ProductImages es un componente de VTEX que reproduce un bundle de imágenes o video de un producto. Este componente puede ser importado y utilizado por cualquier app de VTEX. |
| `Product Name` | ProductName es un componente de VTEX que muestra el nombre del producto con otras informaciones tales como SKU o marca. Este componente puede ser importado y utilizado por cualquier app de VTEX. |
| `Product Price` | ProductPrice es un componente de VTEX que muestra el precio de un producto. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Product Specifications` | ProductSpecifications es un componente de VTEX que muestra las características técnicas de un producto. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `SKU Selector` | SKUSelector es un componente de VTEX responsable de controlar los eventos de selección de SKU para un producto. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Search Bar` | Search Bar es un componente de VTEX que muestra una barra de búsqueda con opciones de autocompletado y muestra los productos relacionados también. Este componente puede ser importado y utilizado por cualquier app VTEX. |
| `Share` | Share es un componente de VTEX que permite compartir una URL de un producto a través de redes sociales. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Shipping Simulator` | Shipping Simulator es un componente de VTEX que calcula la tarifa de envío basado en el código postal. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `Slider` | VTEX Slider es un slider que apunta a un buen soporte para SSR y puede mostrar uno o más slides por página |
| `notification` | Notification es un componente de VTEX que le permite mostrar un contenido de texto en bar style o inline. Este componente puede ser importado y utilizado por cualquier app de VTEX |
| `newsletter` | Newsletter es un componente de VTEX que muestra un formulario de boletín informativo. Este componente puede ser importado y utilizado por cualquier app de VTEX |

