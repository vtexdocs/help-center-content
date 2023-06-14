---
title: Corregir error de redireccionamiento en PagSeguro
id: 5b1lVDQ9HUKQs4Wy24uWq2
status: PUBLISHED
createdAt: 2018-02-15T16:07:47.669Z
updatedAt: 2019-12-31T14:23:59.281Z
publishedAt: 2019-12-31T14:23:59.281Z
firstPublishedAt: 2018-02-15T17:26:16.189Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slug: corregir-error-de-redirecionamento-en-pagseguro
legacySlug: corregir-error-de-redirecionamento-en-pagseguro
---

Si usted está encontrando __problemas de redireccionamiento__ utilizando Pagseguro, es probable que el *redirect* de PagSeguro esté configurado de forma incorrecta.

Para corregir el problema, hay dos opciones: Configurar el PagSeguro *con redirect* de la forma correcta o configurar PagSeguro *sin redirect*.

## Configurar PagSeguro *con redirect*

### Configurar Afiliación de Gateway PagSeguro

1. Acceda la sección de __Pagos__.
2. Haga clic en el botón __Configuración__.
3. Haga clic en la pestaña __Afiliaciones__.
4. Haga clic en el botón __+__ en la esquina superior derecha de la pantalla.
5. Haga clic en la afiliación __PagSeguro__.
6. Rellene los campos __email__ y __token__ con la información proporcionada por PagSeguro.

En su cuenta de PagSeguro, debe activar "Redirigir con código de transacción" (Mi cuenta > Integraciones > Página de redireccionamiento). El nombre del parámetro solicitado debe ser `psTransactionId`.

Después, haga clic en __Guardar__.

### Configurar Condición de Pago PagSeguro

1. Después de configurar correctamente la afiliación de gateway en el paso anterior, haga clic en la pestaña __Planes de Pago__.
2. Haga clic en el botón __+__ en la esquina superior derecha de la pantalla.
3. Haga clic en la condición __PagSeguro__.
4. En la flag __Status__, seleccione la opción __Activo__.
5. En __Proceso con la afiliación__, seleccione la afiliación de __PagSeguro__ registrada en el paso anterior.
6. Rellene los otros campos deseados para la [configuración de la condición de pago](/es/tutorial/condiciones-de-pago).
7. Haga clic en __Guardar__.

## Configurar el PagSeguro *sin redirect*

### Configurar afiliación de gateway PagSeguro sin redirect

1. Acceda la sección de __Pagos__.
2. Haga clic en el botón __Configuración__.
3. Haga clic en la pestaña __Afiliaciones__.
4. Haga clic en el botón __+__ en la esquina superior derecha de la pantalla.
5. Haga clic en la afiliación __PagSeguro sin redirect__.
6. Siga nuestro [tutorial de configuración de PagSeguro sin redirect](/es/tutorial/como-configurar-el-pagseguro-sin-redirect).

### Configurar la condición de pago

1. Después de configurar correctamente la afiliación de gateway en el paso anterior, haga clic en la pestaña __Planes de Pago__.
2. Haga clic en el botón __+__ en la esquina superior derecha de la pantalla.
3. Haga clic en la condición de pago deseada. En el caso de la afiliación PagSeguro sin redirect, ésta puede ser una [tarjeta de crédito](/es/tutorial/condiciones-de-pago) o [boleto bancario](/es/tutorial/como-configurar-boleto-bancario), por ejemplo.
4. En la flag __Status__, seleccione la opción __Activo__.
5. En __Proceso con la afiliación__, seleccione la afiliación de __PagSeguro sin redirect__ registrada en el paso anterior.
6. Haga clic en __Guardar__.
