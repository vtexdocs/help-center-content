---
title: '¿Por qué no recibo el e-mail de Carrito Abandonado?'
id: 5ERWuLh9ajnTiHuRSsNje3
status: PUBLISHED
createdAt: 2019-03-15T16:46:36.370Z
updatedAt: 2022-05-20T15:36:07.176Z
publishedAt: 2022-05-20T15:36:07.176Z
firstPublishedAt: 2019-03-15T17:15:34.657Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 6JCq5z9N5xvlHKhhoEcvjM
slugEN: why-i-do-not-receive-my-abandoned-cart-emails
locale: es
legacySlug: por-que-no-recibo-el-email-de-carrito-abandonado
---

En algunos casos, la configuración de [Trigger](/es/tutorial/criando-trigger-no-master-data?locale=es "Trigger") para el [carrito abandonado](/es/tutorial/setting-up-abandoned-carts--tutorials_740) podrá no funcionar correctamente. Este comportamiento se debe a algunas configuraciones indebidas. Sin embargo, estos errores pueden ser fácilmente corregidos por los [Master Data](/es/tutorial/o-que-e-o-master-data?locale=es).

Siga el paso a paso a continuación  para acceder a la página de configuraciones:

1. Acceda al módulo __Master Data__
2. Luego abajo de "Links rápidos", haga clic en __Crear Aplicación__.
3. Del lado izquierdo de la pantalla, en "Configuraciones", haga clic en __Estructura de Datos__.
4. Al ser dirigido a una nueva página, vuelva a autenticarse con su __login VTEX__
5. Con todo correcto, haga clic en la pestaña __Trigger__.
6. En la esquina superior izquierda de la pantalla, digite el código del carrito que desea editar en la barra de búsqueda
7. Por último, haga clic en el icono de lápiz debajo de __ "Acciones" __

La pestaña __“Condiciones”__ agrupa las principales configuraciones para el disparo de Trigger. Así, es posible hacer las verificaciones para garantizar que todos los datos fueron incluidos correctamente y corregir posibles errores.

Verifique los siguientes parámetros:
- __Status “Activo”__
Trigger funcionará correctamente apenas si el status seleccionado es “Activo”. Cualquier otro status seleccionado implica un error en el disparo de Trigger.

- __Email para notificación de errores__
No se debe rellenar el campo de “Email para la notificación de errores”. Si durante su verificación de datos este campo estuviera rellenado, déjelo vacío. 

- __Email de origen__
También no debe rellenarse el campo de “Email de origen”.

- __Nombre de exhibición del email de origen__ 
No es posible rellenar el espacio para el nombre de exhibición del email de origen. En caso de que haya alguna información en este campo, límpielo.    

- __Condiciones de aplicación__
En el caso de Carrito Abandonado, es importante configurar dos filtros: "Checkout Diferente de Finalizado" y "Checkout No Está Nulo". Los valores diferentes de estas dos configuraciones pueden perjudicar el disparo.

Después de la verificación, es imprescindible guardar todas las informaciones hechas. Posteriormente, los correos electrónicos serán enviados como de costumbre.

> ⚠️ Además, es importante resaltar que el tiempo de una sesión dura **30 minutos**. Solo después de ese tiempo el sistema considerará la programación del Trigger de Carrito Abandonado. Es decir, el tiempo considerado es el del período de la sesión sumado a la programación del Trigger.

