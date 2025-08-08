---
title: 'Corregir error de redireccionamiento en PagSeguro'
id: 5b1lVDQ9HUKQs4Wy24uWq2
status: PUBLISHED
createdAt: 2018-02-15T16:07:47.669Z
updatedAt: 2024-02-16T12:41:04.461Z
publishedAt: 2024-02-16T12:41:04.461Z
firstPublishedAt: 2018-02-15T17:26:16.189Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slugEN: fix-redirect-error-in-pagseguro
locale: es
legacySlug: corregir-error-de-redirecionamento-en-pagseguro
---

> ❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

Si usted está encontrando __problemas de redireccionamiento__ utilizando Pagseguro, es probable que el *redirect* de PagSeguro esté configurado de forma incorrecta.

Para corregir el problema, hay dos opciones: Configurar el PagSeguro *con redirect* de la forma correcta o configurar PagSeguro *sin redirect*.

## Configurar PagSeguro *con redirect*

### Configurar Afiliación de Gateway PagSeguro

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PagSeguro__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos __email__ y __token__ con la información proporcionada por PagSeguro.
5. Siga la guía __Configuração do redirecionamento__ descrita en el panel de configuración.
6. Haga clic en `Guardar`.

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
