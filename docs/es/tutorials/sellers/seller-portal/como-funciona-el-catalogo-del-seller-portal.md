---
title: 'Seller Portal: Cómo funciona el Catálogo'
id: 7pMB6YOt6YQDQQbzFB4Pxp
status: PUBLISHED
createdAt: 2021-02-02T22:30:31.929Z
updatedAt: 2021-10-01T19:27:02.367Z
publishedAt: 2021-10-01T19:27:02.367Z
firstPublishedAt: 2021-09-15T20:53:40.080Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-the-seller-portal-catalog-works
legacySlug: como-funciona-el-catalogo-del-seller-portal
locale: es
subcategoryId: 4hisB47iAVZk4r3SEmMoG
---

El Catálogo del Seller Portal es un módulo donde usted configura el surtido de productos de su tienda. Para que sus clientes vean sus productos en el marketplace, usted debe configurarlos a través del Catálogo. 

## Arquitectura del Catálogo

La arquitectura del Catálogo del Seller Portal se basa en algunos conceptos fundamentales que se distribuyen según la siguiente jerarquía:

![ilustra-catalogoES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/sellers/seller-portal/como-funciona-el-catalogo-del-seller-portal_1.png)

- **Categorías:** formas de organizar sus productos. Usted no puede agregar sus propias Categorías, ya que el marketplace define cuáles estarán disponibles para categorizar sus productos. Es obligatorio que cada producto esté relacionado con una de las categorías que fueron creadas por el marketplace.   
- **Marcas:**  parte de los atributos que caracterizan a los Productos de su tienda. Permite que sus clientes puedan encontrar lo que buscan de forma más específica.   
- **Productos:** ítems a la venta que se muestran en la vitrina del marketplace.  Podemos entenderlos como una definición más genérica de los ítems que se venden en su tienda.  
- **Productos Compartidos:** productos en común entre su catálogo y lo que se ofrece en el marketplace. Usted no necesita registrar estos productos, puede solo definir su precio y stock en el módulo de Productos Compartidos. El panel de este módulo le informa automáticamente todos los productos que el marketplace habilitó específicamente para su tienda como seller. Vea [cómo gestionar productos compartidos](/es/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu).   
- **Especificaciones:** propiedades adicionales que se pueden aplicar a los productos de su tienda. La especificación de producto generalmente se utiliza para crear filtros de navegación en el marketplace o para mostrar información adicional en la pantalla del producto.   
- **Variaciones:** características que definen un tipo de producto específico y lo diferencian de las otras opciones ofrecidas por su tienda. Son los ítems que los consumidores realmente compran y que están efectivamente disponibles en su stock.  
- **Anuncios:** nombre que le damos a un producto o variación de un seller que posee condiciones propias de precio y stock, y que ha sido enviado a un canal, el marketplace. Vea más sobre [anuncios](/es/tutorial/anuncios-y-envio-de-productos-al-marketplace--3RwSj7AyBoPtFbXkS7REiu).  

## Ejemplos de categoría, producto y variaciones

### Moda

Vamos a utilizar como ejemplo una tienda del segmento de Moda. El catálogo de esta tienda puede tener un producto llamado *Camiseta masculina roja*. Para que pueda comprar el ítem que desea, el cliente necesita escoger la talla de la camiseta. De esta forma, las variaciones asociadas a este producto pueden ser:

Camiseta masculina roja - Talla S
Camiseta masculina roja - Talla M
Camiseta masculina roja - Talla L

El Producto es aquello que se *ofrece* en la vitrina del marketplace. Cuando se ofrece un ítem, un marketplace no suele exhibir detalles específicos de un producto, tal como la talla de la camiseta, en su vitrina. Lo que se *vende* es la «Camiseta masculina roja», pero lo que el consumidor compra es la «Camiseta masculina roja - Talla M». Un usuario no comprará simplemente una «Camiseta». En realidad, la **unidad física del producto** enviada a la dirección de entrega será, por ejemplo «Camiseta roja - Talla M».

La comprensión del concepto de producto influye directamente en la estrategia de exhibición de los ítems en la vitrina del marketplace. Los productos se muestran en las vitrinas mientras que las variaciones son seleccionadas por el cliente ya dentro de la página del producto.

### Electrodomésticos

Ahora, vamos a analizar el escenario de electrodomésticos. Uno de los departamentos más comunes de una tienda de este sector es el de artículos para «Cocina». Una de las divisiones de este departamento es la **categoría** «Microondas».

Sin embargo, hay varios tipos diferentes de microondas. De este modo, usted puede elegir un «Microondas con Panel Integrado», con la posibilidad de que este electrodoméstico sea «127V» o «220V». De este modo, podemos entender el voltaje como la especificación que diferencia los SKUs del producto «Microondas con Panel Integrado».

## Artículos Relacionados

- [Seller Portal: Productos Compartidos](/es/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu)      
- [Seller Portal: Detalles del Producto](/es/tutorial/seller-portal-detalhes-do-produto--K0WWsERWj7aQtmZinhYoP)      
- [Seller Portal: Primeros Pasos](/es/tutorial/seller-portal-primeiros-passos--6w1vBdRH2uuBGmUqgNQjwK)    

