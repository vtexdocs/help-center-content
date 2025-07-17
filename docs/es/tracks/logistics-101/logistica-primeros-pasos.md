---
title: 'Logística: primeros pasos'
id: 6Y8C1JuPtO5E61Ew91tq1a
status: PUBLISHED
createdAt: 2022-03-07T13:26:13.581Z
updatedAt: 2022-04-07T21:31:16.973Z
publishedAt: 2022-04-07T21:31:16.973Z
firstPublishedAt: 2022-03-07T13:52:25.531Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: getting-started-with-logistics
locale: es
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugES: logistica-101
---


El módulo **Inventario y envío** es responsable de la configuración logística de tu tienda VTEX. En este módulo, la tienda gestiona el _stock_, las tarifas de envío, la disponibilidad de los ítems y las entregas. Este módulo debe configurarse según la estrategia de negocio de la tienda, ya que las funcionalidades disponibles en el módulo están directamente relacionadas con la experiencia del cliente final.

Este artículo es el primero de una serie de primeros pasos para las configuraciones logísticas. La pista contiene información básica para ayudar a entender la logística en las tiendas VTEX y cómo se estructuran las configuraciones en la plataforma.

<div class="alert alert-danger">
Antes de configurar la logística de tu tienda, configura lo siguiente:
<body>
<ol>
<li><a href="https://help.vtex.com/es/tutorial/crear-una-politica-comercial--563tbcL0TYKEKeOY4IAgAE">Política comercial</li></a>
<li><a href="https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR">Catálogo</a></li>
<li><a href="https://help.vtex.com/es/tracks/precios-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu">Precios</a></li>
</ol>
</body>
</div>

La pista reúne los artículos:

* [Logística: primeros pasos](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/6Y8C1JuPtO5E61Ew91tq1a): un resumen de cómo está organizado el módulo Inventario y envío.
* [Estrategias de envío](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4IPeNztIXsZI4oA5TyES9N): contiene la configuración básica necesaria para que tu tienda VTEX ofrezca opciones de envío a los clientes. En este artículo, puedes consultar un resumen de cómo la plataforma procesa los muelles, el _stock_ y las políticas de envío, así como el orden sugerido de registro de estos puntos.
* _[Stock](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/2XyUVa0UKMyHTmwqyA5Bx6)_: contiene información sobre la gestión de los ítems en _stock_ y explica las funcionalidades de la sección.
* [Costos y simulación de envío](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/3by48jFhzpZEseYFpH9uVt): explica cómo registrar los costos de envío y cómo utilizar la herramienta de simulación de envío de la tienda.
* [Entregas programadas y capacidad de entrega](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/5TuyqHRCCwYMaDv4r8rZdo): explica cómo la tienda debe ofrecer a los clientes las entregas programadas, así como gestionar la capacidad de entrega. 

<div class = "alert alert-info"> Si tu tienda ya ha dado los primeros pasos en el módulo de <b>Inventario y envío</b>, consulta el artículo <a href="https://help.vtex.com/es/tutorial/logistics--53udnvI5eBy8DKo8FOjMoP">Logística</a>, para acceder rápidamente a la información de las secciones del módulo <b>Inventario y envío</b>. 
Consulta el artículo <a href="https://help.vtex.com/en/tutorial/logistics-glossary--16DSSiXn548rsidi0A8Hby">Glosario de logística</a> para consultar el significado de los términos logísticos utilizados en VTEX.
Las configuraciones logísticas disponibles mediante <a href="https://developers.vtex.com/vtex-rest-api/reference/logistics-api-overview">API</a>. 
</div>

El módulo de **Inventario y envío** se divide en las siguientes secciones:

* **[Estrategia de envío](/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)**: configuración básica de la estructura de envío de la tienda.  
* **[Capacidad de entrega](/es/tutorial/gestionar-capacidad-de-entrega--2y217FQZCjD0I1n62yxVcz)**: control de la capacidad de las entregas programadas.
* **[Gestionar _stock_](/es/tutorial/gestionar-items-en-inventario--tutorials_139)**: sección en la que el administrador de la tienda puede comprobar la disponibilidad de los ítems y controlar la reserva y la salida de los ítems vendidos.
* **[Tarifas de envío](/es/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM)**: para registrar y consultar las tarifas de entrega ofrecidas a los clientes.
* **[Simulador de envío](/es/tutorial/simulador-de-envio--tutorials_144):** herramienta de simulación de entrega que permite al administrador de la tienda validar los escenarios de entrega disponibles para cada región y producto.
* **[Envío por geolocalización](/es/tutorial/gestionar-geolocalizacion--tutorials_138)**: recurso para registrar los lugares de entrega sin utilizar los códigos postales.
* **[Feriados](/es/tutorial/registrar-feriados--2ItOthSEAoyAmcwsuiO6Yk)**: sección para registro de feriados que afectan a las entregas de tu tienda. 
* **Configuración**: configuraciones logísticas generales, como la activación de la notificación de stock crítico.
* **[Puntos de recogida](/es/tutorial/puntos-de-recogida--2fljn6wLjn8M4lJHA6HP3R)**: sección para registrar los puntos físicos donde los clientes pueden recoger sus pedidos.

![estoque e entregaES](https://images.ctfassets.net/alneenqid6w5/21rlEVE55jPh2hYBKTn99U/a66b016481c796b9170823b1c111d3d9/estoque_e_entregaES.png)

<div class = "alert alert-info">
Los clientes que utilizan <a href="https://vtex.com/ar-es/">VTEX Shipping Network</a> acceden a la funcionalidad a través del módulo Inventario y envío.
</div>

Consulta los siguientes artículos de la pista para conocer el orden en que deben configurarse estas secciones y cómo interpreta la plataforma esta configuración.

