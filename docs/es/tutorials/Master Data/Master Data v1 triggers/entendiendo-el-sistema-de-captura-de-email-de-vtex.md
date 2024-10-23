---
title: 'Captura de email'
id: 15oNhcDa7HA8ztfJnpvhmJ
status: PUBLISHED
createdAt: 2022-10-17T19:51:45.533Z
updatedAt: 2023-07-20T17:49:29.730Z
publishedAt: 2023-07-20T17:49:29.730Z
firstPublishedAt: 2022-10-17T19:53:55.523Z
contentType: tutorial
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: understanding-vtexs-email-capture-system
locale: es
legacySlug: entendiendo-el-sistema-de-captura-de-email-de-vtex
subcategoryId: 2nx7hMJmisofwqwy2P9l2i
---

El propósito de este artículo es mostrar cómo se recibe el correo electrónico de un usuario en el [Master Data CRM](https://help.vtex.com/es/tutorial/master-data--4otjBnR27u4WUIciQsmkAw). Para ello, se demostrará cómo **Checkout**, **RC.JS** y **Master Data** trabajan en conjunto para capturar la información de correo electrónico de un nuevo usuario.

Para una mejor comprensión, presentaremos un escenario (dividido en 3 pasos), donde el usuario completa con éxito su compra y el pedido se reenvía a OMS, mientras que su correo electrónico se transmite de forma segura a Master Data. En este contexto, las acciones del usuario y el flujo de la plataforma ocurren en el siguiente orden:

### Paso 1 (Relleno de correo electrónico)

| __Usuario__ | __Plataforma VTEX__ |
|------------------|------------------|
| Visita el sitio web de la tienda por primera vez (usuario sin registro) y navega la búsqueda del artículo deseado. | En el navegador, el módulo Portal solicita a RC.JS (request capture javascript) que transmita la información. |
| Agregue el producto al carrito y haga clic en el botón `Finalizar compra`. | El módulo Checkout envía el siguiente mensaje a RC.JS: “Hola, tenemos una transacción por realizarse. Por favor pase esta información”. |
| Complete su correo electrónico. | La información se envía al Profile System. En esta etapa, el correo electrónico solo lo captura Profile System, no RC.JS. |

### Paso 2 (Relleno de datos personales)

| __Usuario__ | __Plataforma VTEX__ |
|------------------|------------------|
| Rellene los datos personales obligatorios (nombre, apellido y CPF). | La información se envía al Profile System. En esta etapa, el correo electrónico solo lo captura Profile System, no RC.JS. |

### Paso 3 (Confirmación de envío de datos personales)

| __Usuario__ | __Plataforma VTEX__ |
|------------------|------------------|
| Haga clic en `Ir para la Entrega`. | Checkout solicita a RC.JS que transfiera la dirección de correo electrónico y la información del carrito a Master Data (a través del Profile System). |

>⚠️ Para que se pueda utilizar la función [carrito abandonado](https://help.vtex.com/es/tutorial/acesse-o-carrinho-abandonado-dos-clientes--4bbXy1TlzJaiCr41xKDN4e#), es necesario que el usuario haya rellenado los siguientes datos: e-mail, nombre, apellidos y CPF. La falta de alguno de estos datos, imposibilita la utilización del carrito abandonado.

| __Usuario__ | __Plataforma VTEX__ |
|------------------|------------------|
| Rellena los datos de envío y pago. | The Checkout orderForm becomes an order and is transmitted to the VTEX OMS. El orderForm de Checkout se convierte en un pedido y se transmite al VTEX OMS. La información completa del usuario (nombre, apellido, correo electrónico, carrito y toda la información adicional) se transmite a Master Data. La captura de correo electrónico puede tardar hasta 46 minutos en reflejarse correctamente en CRM. |

>ℹ️ Cada módulo VTEX es responsable de solicitar RC.JS para transmitir los datos capturados en la sesión. RC.JS está destinado a actuar como un "mensajero" de información.

![image (3)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Master Data/Master Data v1 triggers/entendiendo-el-sistema-de-captura-de-email-de-vtex_1.png)

