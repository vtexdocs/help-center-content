---
title: 'Marketplace: Invitación de Sellers'
id: 6rb2FkcslmDueJ689Ulb9A
status: PUBLISHED
createdAt: 2021-08-12T12:36:37.703Z
updatedAt: 2023-03-31T14:52:27.801Z
publishedAt: 2023-03-31T14:52:27.801Z
firstPublishedAt: 2021-08-12T15:49:50.572Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: marketplace-invited-sellers
legacySlug: marketplace-sellers-invitados-beta
locale: es
subcategoryId: 4hisB47iAVZk4r3SEmMoG
---

La página de **Sellers invitados,** en el módulo _Marketplace,_ es donde los operadores de marketplace invitan a los sellers a conectarse a su marketplace. Para utilizar la funcionalidad, acceda al Admin y vaya a _MARKETPLACE > Invitación de sellers._ En esta página se puede invitar: 

- **Tiendas alojadas en VTEX:** utilizan su cuenta VTEX para conectarse al marketplace como seller.    
- **Tiendas que aún no tienen una cuenta VTEX:** la invitación incluye el flujo para crear una cuenta en el Seller Portal de VTEX.    

Además de permitir enviar invitaciones, la página tiene una lista de sellers, para que el marketplace tenga visibilidad sobre este proceso. La lista de sellers le permite buscar sellers por nombre o email y filtrar los resultados por status. Los sellers listados pueden tener dos status posibles:

- **Invitado:** sellers que ya han recibido una invitación para vender en el marketplace, pero que aún no han creado su cuenta VTEX o vinculado su cuenta existente.  
- **Aceptado:** sellers que ya han aceptado la invitación y han creado o conectado su cuenta.  

Para que nuevos sellers se integren en su marketplace, es necesario realizar algunas acciones en su entorno VTEX: [Invitar](#invitar-seller) y [Conectar](#conectar-seller).

![ES Seller invite](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/sellers/seller-portal/marketplace-sellers-invitados_1.jpg)

## Invitar Seller

La invitación se realiza mediante un enlace enviado al seller por email que contiene todo el proceso de integración en el marketplace. Para invitar a un nuevo seller:

1. En _MARKETPLACE_, acceda a la página de **Invitación de Sellers**.  
3. Haga clic en `Invitar seller`.  
4. Rellene los **Datos generales** del seller:  
    - **Nombre del seller:** nombre del representante comercial del seller, que orquestará la conexión junto con él. Esta persona debe [tener un perfil de acceso al OMS](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access).
    - **Email:** email del representante comercial del seller, que recibirá la invitación para crear una cuenta o conectar una cuenta existente.  
5. Seleccione el tipo de seller entre las opciones `Común` y `Whitelabel`.    
6. Si desea que el seller importe sus productos y árbol de categorías, active el botón **Compartir catálogo del marketplace**.     
7.  Si ha activado el botón en el paso anterior, determine cómo compartirá su catálogo con el seller:
    - **Canal de ventas:** definiendo una [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) asociada a los productos y árbol de categorías que quieras compartir con el seller.
    - **Colección:** definiendo una [colección](https://help.vtex.com/es/tutorial/tipos-de-colecao--5tKnhh8tMGIrVL7Fqirq7n) con los productos y el árbol de categorías para compartir con el seller. 
8. Haga clic en `Enviar invitación`.   

El seller recibirá por email una invitación para vender en su marketplace. 

> ℹ️ El enlace enviado por email al seller es válido durante 7 días. Después de hacer clic en el enlace, el seller tiene seis horas para completar el formulario de registro. Si no es posible completar el registro dentro de este período, el marketplace tiene que enviar la invitación de nuevo. Para ello, vaya a MARKETPLACE > Invitación de sellers. Busque al seller en la lista y haga clic en <i class="fas fa-paper-plane"></i> «Reenviar invitación».

## Conectar seller

Una vez que el seller acepte la invitación y finalice el registro de su cuenta, deberá conectarlo a su marketplace. Al conectar a un seller, este deja de tener el status _Invitado_ y pasa a ser un seller con status _Activo_, incluido en la página de Gestión de sellers. Para ello, siga los pasos a continuación.

 1. En _MARKETPLACE_, vaya a la página de **Invitación**.    
 2. En la fila del seller deseado, haga clic en el ícono <i class="fas fa-link"></i> Conectar seller.   
 Tenga en cuenta que solo los sellers con status `Aceptado` tendrán disponible esta opción.   
 3. Active el botón **Activar seller después** si desea que el seller no reciba pedidos. Puede activarlo después en la página de Gestión de sellers.    
 4. Haga clic en `Agregar`.   

Una vez conectado, el perfil del seller desaparecerá de la lista de Sellers invitados y se trasladará a la página de Gestión de sellers. Si lo conecta con el botón «Activar seller después» activado, el perfil del seller se va a crear en la página Gestión de sellers, pero con status _inactivo_.
