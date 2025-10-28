---
title: 'Gestión de crédito a través de Customer Credit'
id: 5lihi3WBsV5mSIDqNvnoK0
status: PUBLISHED
createdAt: 2020-05-29T12:51:08.993Z
updatedAt: 2020-11-27T19:40:26.828Z
publishedAt: 2020-06-01T23:34:10.710Z
firstPublishedAt: 2020-05-29T13:00:01.098Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: managing-credit-with-customer-credit
legacySlug: gestion-crediticia-a-traves-del-customer-credit
locale: es
subcategoryId: 7EWKfPIGfmI0G8iMYK8Aiy
---

Conceder crédito a terceros es una estrategia utilizada en varios modelos de negocio. En el modelo B2B (Business to Business), en el que hasta cuatro empresas realizan acuerdos entre sí, no es diferente.

Pero antes de ahondar en la aplicación de esta estrategia, hagamos una definición más precisa del término "crédito". Toda empresa que acepte recibir pagos en cuotas debe establecer un valor máximo mensual para pagar estas pequeñas "deudas". Este valor es el límite de crédito.

En VTEX, el administrador de la tienda cuenta con [Customer Credit](/es/tutorial/customer-credit-visao-geral--1uIqTjWxIIIEW0COMg4uE0) para auxiliarlo en la gestión de este asunto. Se trata de una app que permite al usuario conceder crédito a los clientes —ya sean personas físicas o tiendas partners— que pueden utilizar este crédito como medio de pago.

En este artículo abordamos una sugerencia de flujo de implementación de Customer Credit en la estrategia B2B.

## Seleccione a sus clientes

Antes que nada, es necesario descargar Customer Credit de [VTEX App Store](https://apps.vtex.com/) y [configurarlo](/es/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/21ok0GBwmcIeaY2IukYMOg) en su tienda.

Dado que el propósito de su estrategia es conceder el crédito a algún partner, el siguiente paso es seleccionar a los clientes a los que desea ofrecer este crédito. 

Es importante observar que Customer Credit no tiene un límite de cuentas que se pueden registrar en la plataforma. Algunos clientes VTEX, por ejemplo, trabajan con miles de cuentas en Customer Credit. En un contexto B2B, este es un diferencial relevante, pues permite a los clientes VTEX hacer negocios con empresas de cualquier tamaño. 

Por lo tanto, los escenarios en los que se puede utilizar la app también son diversos. Por ejemplo, una distribuidora puede proporcionar y gestionar una base de mil cuentas simultáneamente, permitiendo la gestión y la concesión de crédito a la medida de cada cliente. 

### Ebitda

El proceso de selección de los clientes, sin embargo, debe ser cuidadoso. Después de todo, es esencial que las empresas elegidas sean capaces de asumir los costos de los títulos. 

Una de las formas de hacer este análisis es comprobar la salud financiera de cada cliente potencial a través de indicadores financieros como el __Ebitda__ (Earning Before Interest, Taxes, Depreciation and Amortization).

En los escenarios B2B, este indicador calcula el beneficio de una empresa antes de los intereses, impuestos, depreciación y amortización. Es decir, el beneficio bruto sin tener en cuenta los factores externos al negocio.

Si no tiene acceso al Ebitda, hay otros factores que, si se analizan conjuntamente, también pueden indicar la salud financiera de una empresa. Eston son:
- Registro en Seras
- Inscripción en Sintegra (Sistema Integrado de Información sobre Operaciones Interestatales con Mercancías y Servicios)
- Referencias bancarias y comerciales
- Contrato social
- Extracto bancario (en casos de crédito muy alto)

Este proceso puede ser realizado por un departamento de crédito o por empresas de software que realizan este análisis automáticamente en diversas fuentes. 

## Registre cuentas en la app

Ahora que los clientes han sido seleccionados, es posible [crear las cuentas respectivas en Customer Credit](/es/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU).

Actualmente, tenemos tres formas de que el administrador de la tienda realice esta operación:
- Registro de la base a través de la [API de Customer Credit](https://developers.vtex.com/reference/customer-credit-api-overview).
- Registro individual por el panel administrativo de VTEX.
- Registro masivo por importación de plantilla, con los datos de varias cuentas, también a través del panel administrativo. 

La tienda debe utilizar la forma que considere más conveniente para su negocio. Sin embargo, el número de cuentas puede ser un factor importante en la elección del método de registro.

### Bases pequeñas y medianas

Para un número reducido de registros, el cliente puede crear las cuentas una por una por el Admin. Es un proceso simple: basta con acceder a la sección de Cuentas de Customer Credit, hacer clic en el botón Nuevo y rellenar el formulario con:
- Tipo de documento
- Documento
- Correo electrónico
- Límite de crédito

![CustomerCredit1-ES.png h 250?h=250](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/customer-credit/gestion-crediticia-a-traves-del-customer-credit_1.png)

Si, por otro lado, la base tiene un gran número de cuentas, lo más indicado es importar una plantilla en formato CSV. Puede descargar un modelo de este documento en la sección de Cuentas y rellenarlo con la información necesaria. Para esto, haga clic en el botón __Importar__.

![CustomerCredit2-ES.png?h=250](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/customer-credit/gestion-crediticia-a-traves-del-customer-credit_2.png)

### Bases grandes

Cuando la tienda trabaja con gestión externa de crédito en su ERP, recomendamos que la operación se realice a través de la [API de Customer Credit](https://developers.vtex.com/reference/account-1#openanaccount). En este caso, utilice el endpoint __Open an Account__.

Otro diferencial de la API es que la operación registra la cuenta y al mismo tiempo le otorga un límite.

Puede consultar el tutorial sobre cómo registrar una cuenta para cada uno de estos métodos en la [guía de Introducción al Customer Credit](/es/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU).

Después de la configuración inicial, el siguiente paso es la [gestión de las cuentas](/es/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/4eknoeqaj6EGC20amsm6Gc) para asegurar un flujo de crédito saludable. 
