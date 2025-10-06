---
title: 'Cómo configurar Suscripciones en su tienda'
id: 1FA9dfE7vJqxBna9Nft5Sj
status: PUBLISHED
createdAt: 2019-01-31T16:00:03.228Z
updatedAt: 2025-09-02T18:16:03.375Z
publishedAt: 2025-09-02T18:16:03.375Z
firstPublishedAt: 2019-01-31T16:01:57.927Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-configure-subscriptions
legacySlug: como-configurar-suscripcion-v2
locale: es
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

> ℹ️ La instalación del módulo de Suscripciones se realiza solicitando [nuestro Soporte](https://support.vtex.com/hc/es-419/requests).

El sistema de **Suscripciones** es una aplicación desarrollada por VTEX para facilitar las ventas recurrentes. Funciona como un programador automático, que repite un pedido en la frecuencia deseada por el cliente de su tienda.

Su cliente puede indicar la periodicidad con la que desea repetir la compra de un determinado producto y el sistema vuelve a realizar el pedido de compra automáticamente en cada periodo programado, de forma recurrente. 

Esa compra se realiza automáticamente, en cada periodo programado, con las mismas características configuradas en el pedido original. La suscripción es una forma simple de ahorrarle tiempo a su cliente, proporcionando a su tienda un flujo de ventas programado. 

Para activar la funcionalidad, será necesario:

1. [Instalar el módulo Suscripciones](#1-instalar-el-modulo-suscripciones).
2. [Configurar medios de pago](#2-configurar-medios-de-pago).
3. [Crear un plan de suscripción](#3-crear-un-plan-de-suscripción)
4. [Configurar perfiles de acceso de Suscripciones](#4-configurar-perfiles-de-acceso-de-suscripciones).  

## 1. Instalar el módulo Suscripciones

Para instalar el módulo Suscripciones, abre un ticket con [nuestro Soporte](https://support.vtex.com/hc/es-419). Debes indicar la cuenta VTEX y seleccionar la opción **Técnico**.

El tiempo estimado de respuesta es de hasta 24 horas, de acuerdo con [nuestro SLA](https://help.vtex.com/es/faq/como-funciona-el-soporte-de-vtex--3kACEfni4m8Yxa1vnf2ebe#support-plans).

## 2. Configurar medios de pago

Para configurar los medios de pago de pedidos de suscripción, realice los siguientes pasos:

1. Acceda al módulo de **Suscripciones** de su Admin.  
2. Haga clic en la pestaña **Configuraciones**.
3. Marque la casilla de selección del medio de pago que desea colocar a disposición como **Activado**.

Actualmente, los siguientes medios de pago están habilitados para pedidos de suscripciones: 

- **Tarjeta de crédito**
- **Boleto bancario** (medio de pago disponible en Brasil)

> ℹ️ Para colocar a disposición la opción de pago **Tarjeta de crédito**, contacte al adquirente de cu tienda y verifique si acepta transacciones de compras recurrentes de tarjetas con token (sin CVV). El sistema de **Suscripciones** utilizará los mismos datos de la tarjeta empleada en la primera compra para realizar las demás compras de suscripción, garantizando la seguridad de todo el proceso.

Para habilitar este tipo de transacción en el conector, el gestor de la tienda deberá solicitar al adquirente la habilitación para transaccionar pagos recurrentes. Acceda a nuestro artículo sobre [Registrar afiliaciones de gateway](/es/tutorial/afiliaciones-de-gateway--tutorials_444).

## 3. Crear un plan de suscripción

En el módulo __Suscripciones__, necesita crear planes de suscripción para ponerlos a disposición de sus clientes y asociar productos a esos planes. Los planes se utilizan para indicar que la función __Suscripciones__ está activa para determinados productos y para mostrar la frecuencia de las suscripciones disponibles. Consulte el artículo [Cómo crear un plan de suscripción](/es/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) para obtener más información sobre este proceso.

Existe otra opción para crear un plan de suscripción, que consiste en crear manualmente un anexo de SKU en el __Catálogo__. El **anexo de SKU** se encarga de indicar que la funcionalidad de Suscripción está activa para esa SKU, y también qué frecuencias están disponibles. Consulte el artículo [Cómo crear un anexo de suscripción](/es/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK) para obtener más información sobre este proceso.

## 4. Configurar perfiles de acceso para Suscripciones

Hay una serie de recursos relacionados con Suscripciones que están disponibles en el módulo **Perfiles de acceso** de su tienda. Estos recursos permiten el acceso de los usuarios de su Admin VTEX a determinadas funcionalidades, para operar el módulo de Suscripciones. Para saber más sobre los perfiles de acceso, consulte nuestro [artículo](/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso).

> ⚠️ Si el usuario no tiene los permisos necesarios para acceder a los datos en las pantallas de **Suscripciones**, el sistema mostrará una alerta indicando que no tiene estos permisos, y el usuario no podrá ver los datos.

Vea los recursos relacionados con el módulo de Suscripciones en la siguiente tabla:

| Nombre del Recurso en la pantalla Perfiles de acceso | Nombre de la clave       | Descripción                                                                        |
|---------------------------------------------|---------------------|----------------------------------------------------------------------------------|
| Subscription view only                      | SubscriptionViewer  |  Solo visualización de las listas relativas a suscriptores y pedidos.            |
| Subscription view and edit                  | SubscriptionManage  | Permite las ediciones y acciones, pero no tiene acceso a gráficos y relaciones no monetarias. |
| Subscription metrics and reports            | SubscriptionMetrics | Visualización de gráficos, valores y tendencias.            |
| Subscription admin                          | SubscriptionAdmin   | Permite la configuración de Suscripciones.                                               |

Para configurar los perfiles de acceso de Suscripciones, realice las siguientes instrucciones:

1. En el módulo **Configuración de la cuenta**, acceda a **Roles de usuario**.
2. Haga clic en el botón `Nuevo rol`.
3. Complete el **Nombre del rol**.
4. En **Productos y recursos**, seleccione `Subscriptions`.
5. Marque las casillas de los recursos que desea agregar.
6. Haga clic en `Guardar`.

Una vez que Suscripciones esté configurada en su tienda, acceda a nuestro artículo para verificar cómo [gestionar suscripciones](/es/tutorial/como-gerenciar-assinaturas--6Jk50FPbv6iuz1OsFypv8x).

Se puede probar el flujo de compra de una suscripción a partir de la perspectiva del cliente de su tienda. Para comprender cómo su cliente genera un pedido de suscripción, consulte nuestro artículo sobre [cómo funciona Suscripciones](/es/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453).
