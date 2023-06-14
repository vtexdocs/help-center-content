---
title: 'Cómo migrar de Recurrencia para el módulo Suscripciones'
id: 3nJ4pbsRHEyKmvoN0foYRi
status: DRAFT
createdAt: 2020-02-19T20:12:20.544Z
updatedAt: 2021-04-20T19:49:22.182Z
publishedAt: 
firstPublishedAt: 2020-03-02T01:17:13.783Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: como-migrar-de-recurrencia-v1-para-suscripciones-v2
legacySlug: como-migrar-de-recurrencia-v1-para-suscripciones-v2
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

El **Sistema de Suscripciones** es una app desarrollada por VTEX para facilitar las ventas recurrentes, sustituyendo el módulo de *Recurrencia*. Funciona como un programador automático, realizando una recompra en la frecuencia deseada por el cliente de la tienda. Su cliente indica con qué frecuencia desea repetir la compra de un determinado SKU y el sistema rehace el pedido de la compra automáticamente en cada período programado, con las mismas características configuradas en el pedido original. La suscripción es una forma simple de ahorrarle tiempo a su cliente, trayendo un flujo programado más de ventas a su tienda. 

Su tienda puede encajar en uno de los tres escenarios dentro del proceso de migración para el módulo de Suscripciones:

**1. Tiene instalado el módulo Recurrencia, pero no se utiliza.**
Es decir, no tiene clientes activos que utilicen la recurrencia de hecho. En este caso, se recomienda seguir el proceso de [configuración del módulo de Suscripciones](https://help.vtex.com/es/tutorial/como-configurar-suscripciones--1FA9dfE7vJqxBna9Nft5Sj#3-metodos-de-pago-para-la-transaccion-de-pedidos-de-suscripcion) normalmente. No se deben migrar los datos.    

**2. Tiene  instalado el módulo Recurrencia v1, con clientes activos.** 
En este caso, realice el procedimiento que se indica más abajo.  

**3. No tiene instalado el módulo de Recurrencia.** 
 En este caso, **no** recomendamos instalar el módulo de Recurrencia. Debe [configurar el módulo de Suscripciones](https://help.vtex.com/es/tutorial/como-configurar-suscripciones--1FA9dfE7vJqxBna9Nft5Sj#3-metodos-de-pago-para-la-transaccion-de-pedidos-de-suscripcion) directamente.    



## Flujo para la instalación y migración de Suscripciones 


 1. Configure el [módulo de Suscripciones](https://help.vtex.com/es/tutorial/como-configurar-suscripciones--1FA9dfE7vJqxBna9Nft5Sj) en su tienda.    

 2. Valide las [personalizaciones de front-end](https://help.vtex.com/es/subcategory/configuracion-de-cms-6kovkwzMRyeOOc2iEC4suM) de su tienda.     

 > *Puede personalizar el flujo de compra y My Account.*  

 3. Personalice los **correos electrónicos transaccionales** para Suscripciónes.  

 > *Consulte el procedimiento completo para esta etapa [aquí.](https://help.vtex.com/es/tutorial/correos-electronicos-transaccionales-para-pedidos-de-suscripcion--2NYHqHMRqZ43Cn6s84ZCB5)*  

 4. Valide las **integraciones de su tienda vinculadas a Suscripciónes.**    

 > *Integraciones pueden involucrar el ERP y el CRM de su tienda, entre otros servicios y plataformas. Consulte nuestra documentación de APIs [aqui](https://developers.vtex.com/reference/subscriptions-api-v2-overview)*  

 5. Valide las **Transacciones y métodos de pago.**    

 > *Consulte más información para esta etapa [aquí.](https://help.vtex.com/es/tutorial/como-configurar-suscripciones--1FA9dfE7vJqxBna9Nft5Sj#3-metodos-de-pago-para-la-transaccion-de-pedidos-de-suscripcion)*  

 6. Asocie los **anexos de SKU** creados en el paso 1 con los SKUs deseados.    
 7. **Pruebe el flujo completo.**  

 > *Haga una compra de prueba realizando el siguiente flujo:*  
 *a) Comprar cualquier SKU a través de un usuario de prueba.  
 b) Revisar si la transacción inicial fue aprobada, o si hubo un error de pago.  
 c) Revisar el funcionamiento de postventa (configuración de logística, correos electrónicos del centro de mensajes, funcionamiento del  OMS y módulo de Suscripciones).  
 d) Crear la suscripción (pasos 1 a 6).  
 e) Realizar una nueva compra, esta vez añadiendo la suscripción para aquel SKU.   
 f) Validar la nueva transacción.*    

 8. Solicite la **migración de datos** de Suscripciones de su tienda.

 > *Solicite a [VTEX a través de ticket](https://support.vtex.com/hc/pt-br) la migración de los datos de los pedidos de suscripción ya realizados en Recurrencia, para el módulo de Suscripciones. VTEX será responsable de la correcta migración de datos.*

### Acompañamiento VTEX

Después de realizar los pasos anteriores, VTEX también ofrece los siguientes beneficios:

- **Capacitación con el equipo de su tienda**: reunión de migración para capacitación sobre la nueva interfaz del Admin.

- **Acompañamiento de la operación**: acompañamiento cercano antes, durante y después del lanzamiento, por su VTEX Account Manager y Experts VTEX.  
