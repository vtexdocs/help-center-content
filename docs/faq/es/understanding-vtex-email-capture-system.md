---
title: 'Entendiendo el sistema de captura de e-mail de VTEX'
id: 76N2RKIHOEIAwWK06CuSY4
status: DRAFT
createdAt: 2018-10-10T21:45:58.886Z
updatedAt: 2022-10-17T20:09:48.595Z
publishedAt: 
firstPublishedAt: 2018-10-10T21:54:45.519Z
contentType: frequentlyAskedQuestion
productTeam: Master Data
author: TnXcuQydAAOuwWACo864E
slug: entendiendo-el-sistema-de-captura-de-email-de-vtex
locale: es
legacySlug: entendiendo-el-sistema-de-captura-de-email-de-vtex
---

El propósito de este artículo es mostrar cómo se recibe el correo electrónico de un usuario en el [Master Data CRM](https://help.vtex.com/es/subcategory/visao-geral-do-master-data--5gtjaqCG7eIseyCI0aSqc2#). Para ello, se demostrará cómo **Checkout**, **RC.JS** y **Master Data** trabajan en conjunto para capturar la información de correo electrónico de un nuevo usuario.

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

<div class="alert alert-warning">
Para que se pueda utilizar la función <a href="https://help.vtex.com/es/tutorial/acesse-o-carrinho-abandonado-dos-clientes--4bbXy1TlzJaiCr41xKDN4e#">carrito abandonado</a>, es necesario que el usuario haya rellenado los siguientes datos: e-mail, nombre, apellidos y CPF. La falta de alguno de estos datos, imposibilita la utilización del carrito abandonado.
</div>

| __Usuario__ | __Plataforma VTEX__ |
|------------------|------------------|
| Rellena los datos de envío y pago. | The Checkout orderForm becomes an order and is transmitted to the VTEX OMS. El orderForm de Checkout se convierte en un pedido y se transmite al VTEX OMS. La información completa del usuario (nombre, apellido, correo electrónico, carrito y toda la información adicional) se transmite a Master Data. La captura de correo electrónico puede tardar hasta 46 minutos en reflejarse correctamente en CRM. |

<div class="alert alert-info">
Cada módulo VTEX es responsable de solicitar RC.JS para transmitir los datos capturados en la sesión. RC.JS está destinado a actuar como un "mensajero" de información.
</div>

![image (3)](https://images.ctfassets.net/alneenqid6w5/18dCifD9tOEo8mgUocamIc/958e0da9d2c7aa724f5c1c80bb0b616e/image__3_.png)

