---
title: 'Programación de funcionalidades para eventos especiales'
id: 2nd50tPWdKK4waXRZLg0JI
status: PUBLISHED
createdAt: 2021-08-05T20:48:01.843Z
updatedAt: 2021-08-18T16:16:38.061Z
publishedAt: 2021-08-18T16:16:38.061Z
firstPublishedAt: 2021-08-18T16:16:38.061Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: scheduling-features-for-special-events
locale: es
legacySlug: programacion-de-funcionalidades-para-eventos-especiales
subcategoryId: 6JKhEq9rlIFpyrLoOBERot
---

En VTEX, es posible programar algunas funcionalidades con antelación para un evento especial, como el Black Friday. Esto ayuda a las tiendas en la planificación de eventos y reduce el riesgo de errores al crear las condiciones para un evento próximo.

En este artículo trataremos los siguientes temas:

- [Programar precios](#programar-precios)
- [Programar promociones](#programar-promociones)
- [Programas tasas](#programar-tasas)
- [Programar contenido](#programar-contenido)

## Programar precios

Para programar los precios fijos de su tienda para un evento específico, siga los pasos descritos en el artículo [Programar precios](https://help.vtex.com/es/tutorial/programacion-de-precio-en-pricing-v2--4vVha6TGzYkguWuMOqCcCk). 

## Programar promociones

La programación de la promoción se hace durante su creación. Es posible programar todos los tipos de promoción VTEX - [Promoción Regular](https://help.vtex.com/es/tracks/promociones--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI), [Comprar Juntos](https://help.vtex.com/es/tutorial/comprar-juntos-registro-de-promocion--tutorials_323), [Más por Menos](https://help.vtex.com/es/tutorial/crear-promocion-lleve-mas-por-menos--tutorials_325), [Descuento Progresivo](https://help.vtex.com/es/tutorial/descuento-progresivo--tutorials_324), [Comprar y Obtener](https://help.vtex.com/es/tutorial/como-funciona-la-promocion-compre-y-gane--tutorials_322) y [Promoción de Campaña](https://help.vtex.com/es/tutorial/promocion-de-campana--1ChYXhK2AQGuS6wAqS8Ume). 

Para programar una promoción, siga los pasos a continuación:

1. Vaya al módulo de **Tasas y Promociones**.
2. Haga clic en la página **Promociones**.
3. Haga clic en el botón `Nueva promoción`.
4. Haga clic en el tipo de promoción que desea crear.
5. En la sección **¿Cuáles son los datos generales de la promoción?**, rellene el campo **Validez** con las fechas y horas de inicio y término de la promoción. Para programar la promoción, debe introducir una fecha y una hora posteriores a las de su creación.
6. Rellene los [campos restantes de la promoción](https://help.vtex.com/es/tutorial/registro-promocion-regular--tutorials_327) según su estrategia.
7. Haga clic en `Guardar`.

Consulte el artículo [Ejemplos de promociones](https://help.vtex.com/es/tutorial/ejemplos-de-promociones--5A8UTc7knvAscxo7e7rMFD) para ver ejemplos de promociones que se pueden configurar en VTEX.

## Programar tasas

Al igual que la promoción, la programación de las tasas se realiza durante su creación. Para programar una tasa, siga los pasos a continuación:

1. Vaya al módulo de **Tasas y Promociones**.
2. Haga clic en la página **Tasas**.
3. Haga clic en el botón `Nueva Tasa`.
4. En la sección **¿Cuáles son los datos generales de la tasa?**, rellene el campo **Validez** con las fechas y horas de inicio y término del periodo de validez de la tasa. Para programar la tasa, debe introducir una fecha y una hora posteriores a las de su creación.
5. Rellene [los demás campos de la tasa](https://help.vtex.com/es/tutorial/creating-surchargestaxes--tutorials_321#campos).
6. Haga clic en `Guardar`.

## Programar contenido

La programación de contenidos a través de Site Editor se puede hacer tanto al [crear](https://help.vtex.com/es/tutorial/managing-page-and-template-content--3tMbx6HXy4Fy5r9EhboG37#crear-contenido) como al [editar](https://help.vtex.com/es/tutorial/managing-page-and-template-content--3tMbx6HXy4Fy5r9EhboG37#editar-contenido) un bloque.  

>⚠️ La programación de contenidos solo está disponible para las tiendas desarrolladas en [VTEX IO](https://vtex.com/es-es/store-framework/). 

Para programar un contenido, siga los pasos a continuación:

1. Vaya al módulo de **CMS**.
2. Haga clic en la página **Site Editor**.
3. Utilice el campo de la URL en la esquina superior para navegar a la página que muestra el bloque cuyo contenido será sobrescrito.
4. Seleccione el bloque para el que desea crear un nuevo contenido. Puede seleccionarlo en lista de la derecha o en la interfaz:

![seta-interface](https://images.ctfassets.net/alneenqid6w5/6IhPT84ZmkV83ooydYNLLc/89b848f0f5678a4ce69c9f095e3abcbc/seta-interface.png)

5. Haga clic en `Configuración` en la esquina superior derecha.
6. Haga clic en el botón `Nuevo contenido`.
7. Utilice el campo Fecha Personalizada para programar la fecha en que el bloque se mostrará en su tienda.
  - **Establecer una fecha de inicio:** fecha y hora en que comienza a mostrarse el bloque. Para programar el contenido, debe introducir una fecha y una hora posteriores a las de la creación o edición del bloque.
  - **Establecer una fecha final:** fecha y hora en que deja de mostrase el bloque. 
8. Rellene los campos restantes según la configuración disponible para el bloque.
9. Haga clic en `Guardar`.
