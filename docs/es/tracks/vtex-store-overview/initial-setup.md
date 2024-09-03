---
title: 'Configuración inicial'
id: 4EPwTXx5oFdSG1dA3zIchz
status: PUBLISHED
createdAt: 2024-01-18T17:08:33.703Z
updatedAt: 2024-02-22T20:29:57.019Z
publishedAt: 2024-02-22T20:29:57.019Z
firstPublishedAt: 2024-02-22T14:06:26.997Z
contentType: trackArticle
productTeam: Others
slug: configuracion-inicial
locale: es
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugES: serie-de-la-tienda-vtex
---

Este artículo explica cómo obtener acceso al entorno VTEX abarcando información desde la firma del contrato con VTEX hasta la configuración inicial de la tienda.
Antes de empezar, es importante que te familiarices con los términos utilizados en el artículo, según se recogen en la siguiente tabla:

| **Término** | **Definición** |
| :---: | :--- |
| Admin VTEX / Entorno VTEX | Plataforma para gestionar la experiencia de ecommerce. |
| Master Service Agreement | El conjunto de políticas que rigen el uso de los servicios de la plataforma de ecommerce VTEX de acuerdo con los términos del contrato firmado entre la parte contratante y la parte contratada. |
| Anexo 1 - Order Form | Documento que complemente el **Master Services Agreement**. Se envía a la parte contratante para ser firmado digitalmente y contiene la información del acuerdo comercial y los datos jurídicos de la parte contratante y VTEX. |
| Autenticación | La acción de verificar la identidad del usuario que está iniciando sesión. |
| Autorización | Las acciones determinadas que el usuario puede realizar después de ser autenticado. |
| Canal de ventas | Tiendas donde los sellers pueden poner a la venta los productos de su catálogo. |
| Rol | El conjunto de recursos creado para asignarse a un tipo común de usuario. |
| Recursos de License Manager | Un recurso es una entidad asociada a una acción o información en la infraestructura VTEX. |
| Sponsor account | [Sponsor Account](https://developers.vtex.com/docs/guides/vtex-io-documentation-sponsor-account) es la cuenta responsable del desarrollo, mantenimiento y distribución de [Edition Apps](#edition-apps). Su objetivo principal es acelerar la instalación de varias aplicaciones y configuraciones en un grupo definido de cuentas. |

## Firmar el contrato

El proceso de contratación de VTEX se lleva a cabo entre el representante de ventas de VTEX, la contratante y el representante legal de ambas partes. Una vez se completa la negociación, la contratante recibe una solicitud de firma digital del Anexo 1 - Order Form, que contiene la siguiente información:

* Condiciones jurídicas establecidas en la negociación.
* Datos de los representantes legales de VTEX y la contratante.
* Datos de los testigos de VTEX y la contratante.
* Link al [MSA (Master Services Agreement)](https://vtex.com/mx-es/privacy-and-agreements/agreements/).

Tras la firma del contrato, todas las partes reciben por email una copia del MSA y el Anexo 1 - Order Form. Los clientes nuevos deben consultar el MSA (Master Services Agreement) y tener en cuenta la región en se encuentra la empresa.

Los clientes que hayan formalizado una asociación con VTEX mediante firma pueden encontrar el MSA en la parte superior del Anexo 1 - Order Form o en la [página de Contratos Anteriores](https://vtex.com/mx-es/privacy-and-agreements/agreements-archive/), conforme a la región y fecha de firma del Anexo 1.

## Recibir acceso al Admin VTEX

Tras la firma del acuerdo comercial, el [usuario titular](https://help.vtex.com/es/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy) recibirá acceso al Admin VTEX por email en hasta 10 días laborables.  El usuario titular es el principal responsable de la tienda y el único usuario que tiene acceso total a todas las secciones del Admin VTEX, incluyendo acciones importantes de mantenimiento y autorización.

Al principio, las principales acciones que solo pueden ser ejecutadas por el usuario titular son:

* Solicitar un entorno de prueba para el gerente de la cuenta.
* Agregar nuevos usuarios al entorno VTEX, lo que requiere conocimiento de los [roles](https://help.vtex.com/es/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy) existentes.
* [Activar inicio de sesión por autenticación de dos factores](https://help.vtex.com/es/tutorial/habilitar-login-por-autenticacao-de-2-fatores--4Ae1fcQi12g8u4SkQKCqWQ) para los operadores.
* Definir los [métodos de inicio de sesión](https://help.vtex.com/es/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs#inicio-de-sesion) para los clientes de la tienda.

Existen otras acciones que están restringidas a este usuario. Puedes ver la lista en el artículo [Usuario titular](https://help.vtex.com/es/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy#acciones-restringidas-al-usuario-titular).

>⚠️ El **usuario titular** difiere del usuario **Owner (Admin Super)**. El usuario **Owner (Admin Super)** es un [rol](https://help.vtex.com/es/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy) de [License Manager](https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) que define los permisos concedidos a un usuario y puede asignarse a varios usuarios. Sin embargo, solo hay un **usuario titular** por [cuenta](https://help.vtex.com/es/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC).

## Usuarios y permisos

Todos los usuarios administrativos registrados en una cuenta VTEX pueden ejecutar acciones de acuerdo con su [rol](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) asignado y con los respectivos permisos para acceder a los [recursos de la plataforma](https://help.vtex.com/es/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3). Por ejemplo, para recuperar una transacción, el usuario debe tener un rol con permiso para utilizar el recurso `View Payment Data`.

### Agregar usuarios administrativos

Los nuevos usuarios se deben registrar en el Admin VTEX a través de la página **Configuración de la cuenta**, siguiendo los pasos del artículo [Gestionar usuarios](https://help.vtex.com/es/tutorial/gerenciando-usuarios--tutorials_512). En esta página también puedes editar, eliminar o exportar usuarios.

### Definir roles y permisos para los usuarios

Para definir las acciones que un usuario puede realizar en el Admin VTEX, sigue las instrucciones del artículo [Roles](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc). Puedes asignar usuarios a [roles predefinidos](https://help.vtex.com/es/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy) o, si necesitas grupos de permisos más allá de los abarcados en estos roles, puedes crear [roles personalizados](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso).

## Autenticación para la plataforma y storefront

Debes configurar el método de [autenticación](https://help.vtex.com/es/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs) que los clientes emplearán para iniciar sesión en la tienda y que los usuarios administrativos utilizarán para iniciar sesión en el Admin VTEX. Existen diversas formas de completar la autenticación en el entorno VTEX. Por ejemplo, los métodos de código de acceso y contraseña siempre están disponibles, mientras que la autenticación mediante Google es opcional.

Para iniciar sesión en la tienda, VTEX ofrece la autenticación por código de acceso, contraseña, [Facebook](https://help.vtex.com/es/tutorial/cadastrar-client-id-e-client-secret-para-login-com-facebook) y [Google](https://help.vtex.com/es/tutorial/cadastrar-client-id-e-client-secret-para-login-com-google). Se pueden activar uno o más métodos de autenticación. Las instrucciones para activar las soluciones se detallan en el artículo [Autenticación](https://help.vtex.com/es/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs).

## Autenticación para integraciones y desarrollo de aplicaciones

La [autenticación](https://developers.vtex.com/docs/guides/authentication) es esencial en integraciones de API para conectar tu cuenta VTEX con sistemas externos y también para el desarrollo de [aplicaciones en la plataforma VTEX](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu#extensiones-y-aplicaciones). El proceso de autenticación garantiza la autorización del usuario para acceder a los recursos de la plataforma mediante credenciales como claves de aplicación o tokens.

La tabla a continuación detalla los tres tipos de autenticación disponibles:

| **Tipo de autenticación** | **Descripción** |
| :---: | :--- |
| Autenticación de requests a API mediante <a href="https://help.vtex.com/es/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet">claves de aplicación</a> (appKeys) | <p>Las claves de aplicación (appKeys) se utilizan para autenticar requests a API de VTEX. Los administradores de la tienda pueden crear las claves para diferentes integraciones.</p><p>Para más información, consulta <a href="https://developers.vtex.com/docs/guides/api-authentication-using-application-keys">API authentication using application keys</a>.</p> |
| Autenticación de requets a API mediante tokens de usuario | <p>Los tokens de usuarios se utilizan para autenticar requests a API, especialmente en aplicaciones <a href="https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ">frontend</a> desarrolladas con VTEX IO.</p><p>Para más información, consulta <a href="https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens">API authentication using user tokens</a>.</p> |
| Autenticación de aplicaciones mediante tokens de autenticación | <p>El uso de tokens de autenticación (auth tokens) es necesario para la autenticación cuando se desarrollan aplicaciones en VTEX IO.</p><p>Para más información, consulta <a href="https://developers.vtex.com/docs/guides/app-authentication-using-auth-tokens">App authentication using auth tokens</a>.</p> |

## Políticas comerciales

Las [políticas comerciales](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) son un concepto importante en VTEX. Una política comercial es un conjunto de configuraciones, que incluye:

* [Catálogo](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#catalogo)
* [Precios](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#precios)
* [Promociones](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#promociones)
* [Estrategias de envío](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#estrategia-de-envio)
* [Pagos](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#pagos)

Toda integración con un canal de ventas debe tener una política comercial asociada. Cuando alguna de las configuraciones antes mencionadas es diferente para un nuevo canal, es necesario crear una nueva política comercial.

Dependiendo de su arquitectura en VTEX, la tienda puede beneficiarse de tener más de una política comercial, o asociar estrategias de varias políticas comerciales a [multitiendas](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#multitienda) y [entornos adicionales](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#entorno-adicional). El artículo [Cuentas y arquitectura](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl) explica en detalle la relación entre estos conceptos.

<div>
Para <a href="https://help.vtex.com/es/tutorial/criar-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE">crear una política comercial</a> y para <a href="https://help.vtex.com/es/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X">contratar políticas comerciales adicionales</a>, debes ponerte en contacto con el <a href="https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/7w7cUmbrdPEKpTMItjXEB8">equipo de soporte de VTEX</a>.
</div>

## Edition Apps

[Edition Apps](https://developers.vtex.com/docs/guides/vtex-io-documentation-edition-app) son paquetes que agrupan configuraciones y aplicaciones. Se crean mediante [sponsor accounts](https://developers.vtex.com/docs/guides/vtex-io-documentation-sponsor-account) para facilitar la configuración de [cuentas franquicia](https://help.vtex.com/es/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl). Algunos ejemplos incluyen **Edition Store** y **Edition Business**, que se ofrecen de forma nativa. Toda Edition App depende de `vtex.edition-business` o `vtex.edition-store`.

Para editar una Edition App, debes ponerte en contacto con nuestro [equipo de soporte](https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/7w7cUmbrdPEKpTMItjXEB8). Ten en cuenta que solo la _sponsor account_ puede realizar cambios. Para crear una Edition App, se deben cumplir los requisitos descritos en [Developing an Edition App](https://developers.vtex.com/docs/guides/vtex-io-documentation-edition-app#developing-an-edition-app).

## VTEX IO CLI

[VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference) (command-line interface) es una herramienta de línea de comando desarrollada por VTEX y es una parte importante de la plataforma VTEX IO que permite que los equipos de desarrollo creen y personalicen tiendas y aplicaciones en la plataforma VTEX.

A través de VTEX IO CLI, los desarrolladores pueden realizar una variedad de tareas de desarrollo, tales como:

* **Crear proyectos:** la CLI permite crear y empezar proyectos en la plataforma VTEX IO y definir su estructura y configuración básicas.
* **Desarrollo local:** es posible desarrollar, personalizar y probar aplicaciones localmente antes de implementarlas en la plataforma VTEX.
* **Implementación:** la CLI facilita la implementación de aplicaciones en la plataforma VTEX IO y permite actualizar y gestionar las aplicaciones de manera eficiente.
* **Integración con el ecosistema VTEX:** VTEX IO CLI se integra con otros servicios y herramientas de la plataforma VTEX, lo que facilita la integración con API, bases de datos y otros recursos.

La instalación de VTEX IO CLI depende del sistema operativo utilizado. Para instalar la herramienta para el sistema operativo correspondiente, consulta las instrucciones en el artículo [Installing VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install).

Para conocer los comandos y funcionalidades de la CLI y empezar a utilizarla, consulta los artículos [Using VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-usage) y [Managing plugins](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-plugins).
