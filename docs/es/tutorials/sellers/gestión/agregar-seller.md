---
title: 'Agregar seller'
id: tutorials_392
status: PUBLISHED
createdAt: 2017-04-27T22:07:15.357Z
updatedAt: 2025-01-06T15:48:19.897Z
publishedAt: 2025-01-06T15:48:19.897Z
firstPublishedAt: 2017-04-27T23:03:22.826Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: adding-a-seller
legacySlug: configuracion-de-seller
locale: es
subcategoryId: 2xWRgEIlR2ookieEmm4KQu
---

[Gestión de sellers](/pt/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv) es la página donde los operadores del _marketplace_ agregan sellers, registran su información y gestionan su status. Este artículo describe los pasos necesarios para agregar un nuevo _seller_. La información ingresada al crear un seller no es visible en el _storefront_ del _marketplace_. Solo la pueden ver los usuarios del marketplace en **Admin VTEX > Marketplace > Gestión**. 

Para agregar un seller no identificable, también conocido como [seller white label](/es/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa), es necesario tener este modelo previsto en el contrato con VTEX. Una vez acordado un contrato con el representante de ventas de VTEX responsable de tu _marketplace_, solicita la [adición de una cuenta franquicia](/es/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) por medio de nuestro Soporte. Todas las cuentas franquicias se crean como un _seller white label_, y no es posible cambiar el tipo de _seller_ después de su creación. 

> ℹ️ Si quieres encontrar nuevos partners para vender en tu marketplace, utiliza  **Encontrar sellers,** que facilita la identificación y contacto entre marketplaces y sellers que operan en el ecosistema VTEX, además de conectores certificados (partners). 

1. En tu Admin VTEX, accede a **Marketplace > Gestión.**  
2. Haz clic en `Agregar seller`.  
3. Escoge un tipo de integración entre **Seller VTEX** y **Seller externo**.  
4. Rellena los campos según se describe a continuación.   
5. Haz clic en `Guardar`. 

**Integración**
- **Cuenta VTEX del seller:** rellena el [account name (nombre de cuenta)](/es/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) del _seller_.  
- **ID del afiliado:** código de identificación del [afiliado](/es/tutorial/como-configurar-afiliado--tutorials_187) definido por el _seller_ al registrar su _marketplace_. Este código debe ser informado por el _seller_ y se compone siempre de tres consonantes, que pueden repetirse o no. No se aceptan vocales.  
- **Pausar el seller después de crearlo:** marca la casilla para que el seller se cree con el status `Pausado`.  Al marcar esta casilla, puedes agregar el _seller_, catalogar sus anuncios y hacer todas las pruebas necesarias antes de publicarlos en tu _storefront_ para recibir pedidos.  

**Campos exclusivos para la integración de un seller externo**  
- **URL de fulfillment:** la URL de la API que realiza el _fulfillment_ de los pedidos del _seller_. Debe ser informada por el _seller_ al _marketplace_.  
- **Usuario:** nombre de usuario, si utilizas un _hub_ para la integración con el _seller_ externo.     
- **Contraseña:** contraseña, si utilizas un _hub_ para la integración con el _seller_ externo.    

**Información básica del seller**
- **Nombre del seller:** nombre de la tienda que venderá en tu _marketplace_.
- **ID del seller:** código para identificación interna del _seller_. El _seller_ puede crear el patrón que más le convenga en este caso, pero no podrá cambiar el código después de crearlo. Reglas para crear el código:  
    - No ingresar espacios o caracteres especiales.    
    - Solo usar letras minúsculas preferiblemente ya que el campo distingue entre mayúsculas y minúsculas.    
    - Utilizar un máximo de 50 caracteres.    
    - Evitar solo utilizar la palabra «list» como ID.    
    - Para _sellers white label_, el ID debe comenzar con el _[account name (nombre de cuenta)](/es/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC)_ del _marketplace_ seguido del identificador de su elección. Ejemplo: marketplaceseller1.    
- **Grupos del seller:** palabra clave que identifica el grupo al que este _seller_ pertenece para filtrarlo en lista de _sellers_. Define una palabra clave nueva para crear un grupo nuevo o repite una palabra ya utilizada para asociar el _seller_ a uno o más grupos existentes. Puedes crear grupos para _sellers_ de extensa cobertura, cuentas franquicia, _sellers_ externos, _partners_ premium, o cualquier otra categoría que se aplique a tu negocio. Sepa más en [Gestión de Sellers](/pt/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv).

**Acuerdos comerciales**
- **Políticas comerciales del marketplace:** selecciona las [políticas comerciales](/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) válidas para el _seller_ para asociar sus productos y condiciones de venta a diferentes contextos. Por ejemplo, la política comercial utilizada en el sitio web y la política comercial utilizada en una aplicación.    
- **Comisión de producto:** define el porcentaje de comisión que se aplica a los productos del _seller_.    
- **Comisión de envío:** define el porcentaje de comisión que se aplica al envío de los pedidos del _seller_.  
- **Agregar comisiones por categoría:** al marcar esta opción, selecciona las categorías de tu catálogo que tendrán comisiones específicas asociadas al _seller_. Puedes definir el porcentaje de comisión por productos y/o envío para la categoría seleccionada.     
- **Habilitar la participación en carritos con tarjeta de regalo:** campo que permite el uso de tarjetas de regalo del _marketplace_ en productos del _seller_ cuando los sellers procesan los pagos. Identifica compras realizadas con una tarjeta de regalo y solo se pasa al _seller_ el valor de la compra deducido de la tarjeta de regalo. Si solamente el _marketplace_ procesa los pagos, este campo no es aplicable. 

**Información adicional**  
- **Agregar logotipo:** carga la imagen del logotipo del seller en PNG, JPG o JPEG. El tamaño máximo aceptado es 500 kb.  
- **Nro. de registro de persona jurídica:** nro. de registro de persona jurídica del _seller_.    
- **Email:** dirección de _email_ del administrador encargado.  
- **Descripción:** texto con detalles sobre el _seller_. Debe tener un tono comercial pues el contenido puede aparecer en la vitrina del _marketplace_ al personalizar el CMS.  
- **Política de entrega:** descripción de la política de entrega previamente acordada entre el _marketplace_ y el _seller_.    
- **Cambios y devoluciones:** descripción de la política de cambios y devoluciones previamente acordada entre el _marketplace_ y el _seller_.
- **Política de privacidad y seguridad:** descripción de la política de seguridad previamente acordada entre el _marketplace_ y el _seller_.

> ℹ️ Con la nueva versión de la página, lanzada el 2022, eliminamos el campo Endpoint del Catálogo porque ya no es necesario para la integración con un nuevo seller. Si es necesario, aún es posible gestionar el campo a través de la API.

Después de rellenar los campos y hacer clic en **Guardar**, el _seller_ será agregado al _marketplace_. Para completar la configuración de tu tienda como _marketplace_ también debes [mapear las marcas, categorías y especificaciones del seller](/es/tutorial/mapeando-categorias-e-marcas-para-marketplace/) y [aprobar los anuncios recibidos](/es/tutorial/sugerindo-e-aprovando-skus/).

## Más información

- [Crear política comercial](/es/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE)  
- [Gestión de sellers](/pt/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv)  
- [Configuring a VTEX marketplace](/es/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)    
- [Actions for a VTEX marketplace operation](/es/tutorial/acoes-para-a-operacao-de-marketplaces-vtex--2SdIflvwywiOqCpczKCfev)  
