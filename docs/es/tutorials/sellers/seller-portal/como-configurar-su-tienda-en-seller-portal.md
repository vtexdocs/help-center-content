---
title: 'Seller Portal: primeros pasos del seller'
id: 6w1vBdRH2uuBGmUqgNQjwK
status: PUBLISHED
createdAt: 2021-01-26T15:08:22.524Z
updatedAt: 2024-05-30T22:41:41.434Z
publishedAt: 2024-05-30T22:41:41.434Z
firstPublishedAt: 2021-09-15T20:50:27.452Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-set-up-your-store-on-seller-portal
legacySlug: como-configurar-su-tienda-en-seller-portal
locale: es
subcategoryId: 4hisB47iAVZk4r3SEmMoG
---

Uno de los principales desafíos para los minoristas, distribuidores e industrias que están migrando hacia un modelo de *marketplace* y de *dropshipping* es incorporar nuevos *seller partners* y ofrecer las herramientas adecuadas para el éxito de esta alianza. Desde la integración hasta el envío y la recepción de pedidos, pasando por la sincronización de catálogos. El proceso puede ser lento, complejo y costoso. 

Desarrollamos el *Seller Portal* para traer más velocidad y simplicidad a la jornada de nuestros clientes, ayudando a desbloquear nuevas fuentes de ingresos para los mismos.

*Seller Portal* es una edición de la plataforma VTEX que que se enfoca en conectar los *sellers* VTEX y los sellers externos para que vendan sus productos en los *marketplaces*. Con el portal, los *sellers* tienen todas las funcionalidades esenciales para el funcionamiento del comercio electrónico en grandes vitrinas, aportando visibilidad y conversión de las ventas.

Ahora, los *marketplaces* que ya están hospedados en VTEX pueden invitar y conectarse con *sellers* de forma más rápida y sin problemas y, así, ampliar la variedad de productos disponibles y la base de clientes.  

Por medio de *Seller Portal*, los *sellers* pueden:

- Entorno conectado al *marketplace* de forma automática.   
- Activar su catálogo en el *marketplace* para vender inmediatamente.     
- Gestionar productos compartidos a través del catálogo compartido con el marketplace.   
- Actualizar el stock y los precios de los productos.  
- Gestionar y facturar todos sus pedidos en el marketplace, pudiendo procesar pagos.   
- Crear y gestionar la estrategia de logística de tu operación.
- Reducir el *time-to-revenue* de sus ventas.   

## ¿Qué esperar de Seller Portal?

Conozca algunos detalles sobre el lanzamiento de la versión Beta de Seller Portal:     

- Solo los marketplaces podrán crear y gestionar las promociones de los productos.
- La arquitectura del catálogo puede ser compartida entre el marketplace y el seller a través de la compartición de productos. Sin embargo, el seller puede crear sus propios productos y definir categorías, marcas y especificaciones.
- Cuando el seller decide compartir el catálogo con el marketplace, los productos compartidos tienen las mismas categorías, marcas y especificaciones definidas por el marketplace. Sin embargo, solo las categorías se importan al entorno del seller en su totalidad. Las marcas se importan solo cuando se importa un producto y las especificaciones no se importan.
- Si el marketplace procesa los pagos, la comisión y el traspaso de la facturación del seller debe hacerse fuera de VTEX.   
- El soporte a la experiencia del seller será proporcionado por el propio marketplace.  

**Lo que se lanza ahora:**

- Ambiente conectado al marketplace automáticamente  
- Gestión de pedidos del marketplace   
- Gestión logística de su operación  
- Catálogo compartido con el marketplace   
- Gestionar el surtido de productos del propio seller  

## Configurar su tienda

> ⚠️ El límite para cada cuenta en el Seller Portal es de 100 mil productos. Para obtener más información, póngase en contacto con [nuestro equipo de soporte](https://support.vtex.com/hc/pt-br/requests).

Para comenzar a vender sus productos en el marketplace, se debe configurar su tienda en el Seller Portal. Este artículo explica el flujo completo de esa configuración inicial, e indica otra documentación más detallada sobre los pasos a seguir. La configuración básica de Seller Portal incluye los pasos a continuación.

### 1. Catálogo

El Catálogo de Seller Portal es el módulo donde usted configura el surtido de productos de su tienda. Para que el cliente vea sus productos en el marketplace, usted necesita registrarlos y configurarlos a través del Catálogo, por el Seller Portal o por la API REST.

Para acceder al Catálogo en el Seller Portal, navegue por la barra lateral haciendo clic en **Productos > Productos compartidos / Productos**.

Para gestionar el Catálogo del Seller Portal mediante la API REST, consulte la documentación de la [Catalog API - Seller Portal](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal).

Conozca más leyendo los siguientes artículos:

- [Seller Portal: Cómo funciona el Catálogo](/es/tutorial/seller-portal-como-funciona-o-catalogo--7pMB6YOt6YQDQQbzFB4Pxp)      
- [Lista de Productos](/es/tutorial/lista-de-produtos-beta--49vxWqoaWRZC4atwLz6cMg)
- [Cómo Crear un Producto](/es/tutorial/como-criar-um-produto-beta--671zAWe0B9eCikzDu7kB1G)    
- [Categorías](/es/tutorial/categories-beta--798zOqqqbeec776xhcXSuV)    
- [Marcas](/es/tutorial/marcas-beta--3QvNtxO57U0QPNOGutv7Sy)
- [Seller Portal: Productos Compartidos](/es/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu)      
- [Seller Portal: Detalles del Producto](/es/tutorial/seller-portal-detalhes-do-produto--K0WWsERWj7aQtmZinhYoP)      

### 2. Precios

Para que se venda un producto, su cliente necesita saber cuánto cuesta cada ítem que se exhibe en el marketplace. El módulo de Precios es el sistema encargado de crear, editar y almacenar los datos de precios de sus productos y sus variaciones. Para acceder al módulo de precios, navegue por la barra lateral haciendo clic en Productos > Lista de precios / Reglas de precio.

 Para aprender más, lea los siguientes artículos:

- [Información general del módulo de Precios](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP)  
- [Registro de precios](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29)  

### 3. Logística

La configuración de la logística de su Seller Portal le permite establecer una estrategia de stock y entrega de la manera que mejor se adapte a su negocio. Estos ajustes se utilizan al realizar el checkout de un pedido, por ejemplo, para que el sistema pueda calcular el flete. También son necesarios después de que se registra un pedido y se autoriza su pago, momento en el cual el trayecto hasta el cliente final comienza realmente.

La ruta logística que compone una entrega comienza en el almacén, pasa por los muelles, y luego las transportadoras terminan el proceso, entregando los productos en las direcciones de destino.

Seller Portal ya trae algunas funcionalidades preconfiguradas para facilitar su interacción con la plataforma. Para acceder a los módulos de logística, navegue por la barra lateral haciendo clic en Envío > Tarifas de envío / Simulador de envío / Puntos de recogida / Estrategia de envío. Su cuenta ya tiene un almacén y un muelle estándar registrados, y no necesita cambiar esta configuración para que su tienda pueda vender en el marketplace. Sin embargo, es necesario finalizar la configuración logística registrando las siguientes funcionalidades:

- [Transportadora](/es/tutorial/politica-de-envio--tutorials_140)    
- [Tarifas de envío](/es/tutorial/gerenciar-valores-de-frete--tutorials_141)    
- [Geolocalización](/es/tutorial/gerenciar-geolocalizacao--tutorials_138)    
- [Plantilla de flete](/es/tutorial/planilha-de-frete--tutorials_127)    

### 4. Stock

Para que sus productos se vendan en el marketplace, debe actualizar la cantidad de ítems disponibles en su stock. Seller Portal cuenta con la herramienta Gestionar ítems en inventario, con la cual usted puede actualizar la cantidad de ítems disponibles en un stock determinado, cuando sea necesario. Para acceder al stock, navegue por la barra lateral haciendo clic en Productos > Gestión del stock. Conozca más leyendo el siguiente artículo:    

- [Gestionar inventario](/es/tutorial/gerenciar-itens-em-estoque--tutorials_139)

### 5. Pago

El módulo de Pagos es el sistema que se encarga de gestionar todas las acciones relacionadas con el flujo financiero de su tienda. Es importante recordar que cada tienda tiene sus propias particularidades y funcionamiento, lo que influye en la forma de construir el módulo de Pagos de su negocio. Para configurar su flujo financiero es fundamental, por lo tanto, tener en cuenta las necesidades y los propósitos reales de la tienda, y lo acordado con el marketplace.    

Tanto el seller como el marketplace pueden ser responsables de procesar el pago de una cuenta. Esto se debe acordar entre los dos antes de iniciar la configuración de pago en Seller Portal.     

**Marketplace procesando el pago:** todo el flujo de pagos es responsabilidad del marketplace, por lo tanto, el seller no tiene necesidad de configurar ninguna función. Es importante señalar que la comisión y el traspaso de la facturación del seller se hace fuera de VTEX.  

__Seller procesando el pago:__ si se designa al seller como procesador de pagos, siga los pasos listados en los siguientes artículos para configurar el módulo de Pagos de su tienda.    

Aprenda más leyendo los siguientes artículos:  

- [Cómo funciona el módulo de Pagos](/es/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG)    
- [Cómo funciona el split de pagos entre los sellers y el marketplace](/es/tracks/split-de-pagamentos--1ouDg8q56Kuz1AgtJUY9nv/ctgx6ulwy40P0BV07LW9y)     
- [Configurar afiliados](/es/tutorial/como-configurar-afiliado--tutorials_187)    
- [Configurar un conector de pagos](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/7pAEMAo4iqNHwYOarZ3zgm)     
- [ Configurar una condición de pago](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3)    
- [Cómo configurar el antifraude](/es/tutorial/como-configurar-antifraude--tutorials_446)  

### 6. Vender productos

Cada vez que se crea un producto o una variación en Seller Portal, se envía automáticamente al marketplace. Sin embargo, esto no significa que este producto esté listo para exhibirse en la vitrina del marketplace y luego venderse. Usted necesita configurar las condiciones de precio y stock para que el mismo esté disponible para la venta.

Anuncio es el nombre que le damos a un producto o variación de un seller, que ha sido enviado al marketplace y cuyas condiciones de precio y stock se configuraron. Cuando usted lleva a cabo estas configuraciones, el producto de su tienda se convierte, de hecho,  en un anuncio en la vitrina del marketplace. Conozca más leyendo nuestro artículo:  

- [Seller Portal: Anuncios y Envío de Productos al Marketplace](/es/tutorial/anuncios-y-envio-de-productos-al-marketplace--3RwSj7AyBoPtFbXkS7REiu)

### 7. Pedidos
En el momento en que el cliente final de la tienda presiona el botón *Pagar*, se genera un pedido en VTEX. Esto significa que ahora usted podrá realizar el seguimiento del flujo del pedido en el módulo de Gestión de pedidos dentro del panel de administración de su tienda. Es decir, puede conocer los detalles de cada paso del progreso del pedido. Para acceder al módulo de pedidos, navegue por la barra lateral haciendo clic en  Pedidos > Todos los pedidos / Transacciones. Conozca más leyendo nuestro artículo:

- [Como funcionan pedidos en VTEX](/es/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2sl6hj2eqwgqbDgTF6y5qE)  

### 8. Crear y gestionar promociones.

La página **Promociones** en el Seller Portal permite a los retaillers y marketplaces crear promociones y administrar una lista completa de promociones registradas, simplificando la administración de promociones.

Para aprender más, lea los siguientes artículos:

- [Seller Portal: Promociones](/es/tutorial/seller-portal-promocoes--73LL7Ja0P4JbD77AH0jHwu)  
- [Seller portal: crear una promoción](/es/tutorial/seller-portal-criar-uma-promocao--kzNPEaiJE8EWkDzO9dbBI)  

### 9. Supervisar Gestión de anuncios

El módulo «Gestión de anuncios» permite a los sellers supervisar el envío de anuncios a todos los canales integrados con la tienda y su sincronización. La página principal posee dos componentes que muestran, en tiempo real, el status de los anuncios y sus actualizaciones a partir de los datos procedentes del marketplace y de otros módulos VTEX.  Es donde los sellers pueden dar seguimiento a todas las interacciones de tipo Catálogo, Precio o Stock en sus anuncios para identificar errores durante el envío y sincronización de los anuncios.

Para aprender más, lea los siguientes artículos:

- [Módulo Gestión de anuncios](/es/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE)  
- [Gestión de anuncios: detalles del anuncio](/es/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P)  
- [Gestión de anuncios: detalles de la interacción](/es/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf)

### 9. Dashboard Desempeño de Ventas

El menú _Dashboards_ es el panel de información de tu comercio unificado. Los análisis presentados proporcionan información que ayuda a tomar decisiones y a priorizar las tareas de diferentes áreas, desde operaciones hasta comercial y marketing. Los dashboards incluyen datos actualizados de todos los canales de ventas en los que opera tu tienda con VTEX, incluyendo las métricas principales que afectan a los ingresos de tu tienda.

## Configuración opcional

Hay funcionalidades adicionales que se pueden efectuar en su tienda. No es obligatorio aplicarlas, pues su tienda estará operando y vendiendo productos en el marketplace incluso sin los pasos que se enumeran a continuación.

### 1. Configuraciones de tienda, cuenta y perfil

Hemos agrupado toda la configuración de su tienda en Configuración de la tienda en el menú de navegación lateral. Los ajustes que se aplican a la cuenta de su tienda, o perfil de usuario se acceden por separado.

**Configuración de la tienda**
Estas configuraciones son las que se aplican a su tienda, *storefront* y cómo los usuarios interactúan con su tienda. Estos incluyen Configuración de pedidos, Plantillas de email, Configuración de envío y Configuración de productos. Para acceder a esta funcionalidad, haga clic en el ícono Configuración de la tienda en el menú de navegación lateral. 

El módulo Plantillas de Email solo debe usarse si el seller y el marketplace acuerdan que el seller es responsable de comunicarse con el cliente final durante el flujo de un pedido. Sugerimos que el seller se ponga en contacto con el mercado para obtener más información.

**Configuraciones de la cuenta**
Estas configuraciones son las que se aplican a la cuenta de su tienda VTEX. Estos incluyen Roles de Usuario, Usuarios y Cuenta. Para acceder a esta funcionalidad, haga clic en el avatar de su perfil en la esquina superior derecha > Configuraciones de la cuenta.

Si más personas en su operación necesitan acceder al Seller Portal, puede registrar nuevos usuarios. Los propietarios de cuentas pueden agregar nuevos usuarios, lo que permite que más personas accedan al Seller Portal. Para obtener más información, consulte los siguientes artículos:

- [Gestión de cuentas](/es/tutorial/visao-geral-do-modulo-license-manager/)
- [Administrar usuarios](/es/tutorial/gerenciando-usuarios--tutorials_512)
- [Perfiles de acceso](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc)

**Configuración del usuario**
Esta configuración se aplica a su perfil de usuario individual. Incluye datos personales y autenticación. Para acceder a esta funcionalidad, haga clic en el avatar de su perfil en la esquina superior derecha > Configuración del usuario.

### 2. Integrar su ERP

Si su negocio ya tiene un sistema ERP en funcionamiento, puede integrarlo con VTEX. La integración le permite importar una serie de informaciones relevantes a Seller Portal de forma masiva y automática. 

La integración con el Catálogo debe realizarse manualmente a través de la interfaz del Seller Portal  o de forma masiva a través de la API REST, utilizando la [Catalog API - Seller Portal](https://developers.vtex.com/docs/api-reference/catalog-api-seller-portal). No es posible integrar el Catálogo por medio de plantilla ni SOAP API (Webservice).

Las funcionalidades configuradas a partir de la integración también pueden hacerse manualmente a través de Seller Portal, siguiendo la configuración básica citada al principio de este artículo.

La integración permitirá configurar las siguientes funcionalidades via API REST:

- Crear y editar productos, marcas y categorías
- Importar precios.  
- Importar stock.  
- Configurar la integración de pedidos.  
- Configurar el procesamiento de los pedidos.  

No habrá necesidad de configurar estos módulos manualmente a través de Seller Portal. Le recomendamos que solo revise los datos de precio y stock que fueron ingresados por la integración. 

Para integrar con su ERP, lea nuestra [guía de integración con ERP](https://developers.vtex.com/docs/guides/erp-integration-guide). 

> ℹ️ Para generar las claves de acceso necesarias para integrarse con su ERP, haga clic en el **avatar de su perfil**, marcado con la inicial de su correo electrónico y vaya a **Configuración de la cuenta> Claves de aplicación**.
