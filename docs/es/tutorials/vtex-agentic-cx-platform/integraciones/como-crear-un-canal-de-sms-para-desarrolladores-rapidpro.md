---
title: 'Cómo crear un canal de SMS - Para desarrolladores (RapidPro)'
id: 3vQxJJOAjRC2eizkGZ4mix
status: PUBLISHED
createdAt: 2025-09-15T14:10:36.156Z
updatedAt: 2025-10-03T14:20:33.769Z
publishedAt: 2025-10-03T14:20:33.769Z
firstPublishedAt: 2025-10-03T14:20:33.769Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: how-to-create-an-sms-channel-for-developers-rapidpro
legacySlug: como-crear-un-canal-de-sms-para-desarrolladores-rapidpro
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

La plataforma RapidPro permite a las organizaciones crear visualmente aplicaciones de mensajería interactivas y escalables y es un servicio alojado para configurar canales SMS.

Para obtener más información, visite el sitio del proyecto en <http://rapidpro.github.io/rapidpro>. Docenas de canales son compatibles en colaboración con empresas de SMS y redes sociales que se comunican de diferentes maneras dentro de la plataforma. La integración de SMS puede realizarse básicamente de tres formas:

- Usando el Canal Integrado a RapidPro
- Usando una API REST (API Externa)
- Usando Conexión SMSC (Kannel)

1. **Canal Integrado a RapidPro**

Esta es la forma más rápida de integrar el canal SMS a la plataforma, ya que tiene funcionalidad incorporada para enviar y recibir mensajes a servicios externos disponible para todos los espacios de trabajo. Esta integración consta de dos partes:

**Mensajes Salientes**

Cuando necesitamos enviar un mensaje saliente, se hará un POST a esta URL con los parámetros 'texto', 'para', 'de', 'canal' e 'id'. Ejemplo:

POST <https://google.com.br> Tipo de contenido: application/json Body: {""id"": 1241244, ""texto"": ""El amor es paciente. El amor es amable."", ""para"": ""\+250788123123"", ""to\_no\_plus"": ""250788123123"", ""from"": ""\+5582999489287"", ""from\_no\_plus"": ""5582999489287"", ""channel"": 346}

**Mensajes Entrantes**

Cuando su servicio recibe un nuevo mensaje, debe notificarnos mediante un POST a la siguiente URL, pasando los parámetros 'from' y 'text'. Opcionalmente, los llamantes también pueden enviar un parámetro 'date' en formato ISO\-8601 (ej: 2012\-04\-23T18:25:43\.511Z) para especificar la hora en que se recibió el mensaje. Ejemplo:

POST [https://rapidpro.ilhasoft.mobi/c/ex/a86f686f\-9168\-4dd9\-a03e\-77f11b265b56/receive](https://rapidpro.ilhasoft.mobi/c/ex/a86f686f-9168-4dd9-a03e-77f11b265b56/receive) from\=%2B250788123123\&text\=El\+amor\+es\+paciente.\+El\+amor\+es\+amable.\&date\=2012\-04\-23T18:25:43\.511Z

1. **API REST (API Externa)**

La plataforma se conecta fácilmente con muchos canales mediante una API HTTP, que estará disponible para todos los espacios de trabajo para agregar canales del mismo agregador. El Agregador de SMS debe proporcionar la siguiente información para la integración:

- Documentación completa de su API Pública, que incluya métodos de autenticación, parámetros de entrada y formato de salida para cada nodo final;
- Un número de teléfono de prueba proporcionado por el agregador;
- Acceso a una cuenta de prueba en la consola del agregador para que los desarrolladores validen la integración durante el desarrollo;
- Detalles de contacto del equipo de soporte del Agregador de SMS para resolver dudas de integración.

1. **Conexión SMSC (Kannel)**

En el caso de una conexión SMSC, es necesario conectarse a una Red Privada Virtual (VPN) por motivos de seguridad, y Weni guía este proceso para ayudar a los clientes a hacer estas conexiones de manera segura. Existen muchos protocolos que se pueden integrar, como SMPP, UCP/EMI y CIMD3, dependiendo de lo que el agregador de SMS proporcione para la integración de terceros. El primer paso de la integración depende del agregador de SMS, por lo que se requiere la siguiente información:

- Documentación: la documentación necesaria para conectarse a la VPN del agregador, enviar y recibir mensajes a través de sus servicios;
- Formulario de Red Privada Virtual (VPN): normalmente, el agregador de SMS tiene un formulario que requiere información de la empresa que desea comunicarse con sus servicios a través de una conexión VPN.
- Credenciales SMSC: Weni necesita nombre de usuario, contraseña, puerto y cualquier otra información necesaria para enviar y recibir mensajes para el agregador.

Una vez que se completen los elementos anteriores, Weni se conecta a la VPN y notifica al agregador para enrutar los mensajes entrantes al servidor de Weni, y comienza la fase de prueba. Durante estas fases, es necesario contactar directamente a los miembros del equipo de Weni, por lo que pueden utilizarse los siguientes contactos:

Correo electrónico: suporte@weni.ai
