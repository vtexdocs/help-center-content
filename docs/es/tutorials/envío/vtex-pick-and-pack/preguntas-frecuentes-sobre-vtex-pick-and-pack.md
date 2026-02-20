---
title: 'Preguntas frecuentes sobre VTEX Pick and Pack'
id: 2Rvf9vTS35vmOhkE2i0xcs
status: PUBLISHED
createdAt: 2025-05-16T16:11:28.033Z
updatedAt: 2025-05-16T17:08:31.224Z
publishedAt: 2025-05-16T17:08:31.224Z
firstPublishedAt: 2025-05-16T17:06:40.015Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-faq
legacySlug: preguntas-frecuentes-sobre-vtex-pick-and-pack
locale: es
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

Esta guía tiene como objetivo responder las preguntas más frecuentes sobre VTEX Pick and Pack.

- [Configuración general](#configuracion-general)
  - [¿VTEX Pick and Pack procesará todos los pedidos de mi tienda?](#vtex-pick-and-pack-procesara-todos-los-pedidos-de-mi-tienda)
  - [¿Los alistadores preparan un solo pedido por vez o varios al mismo tiempo?](#los-alistadores-preparan-un-solo-pedido-por-vez-o-varios-al-mismo-tiempo)
- [Configuración de alistamiento](#configuracion-de-alistamiento)
  - [¿Puede el alistador modificar el pedido durante el alistamiento?](#puede-el-alistador-modificar-el-pedido-durante-el-alistamiento)
  - [¿Necesita la aprobación de un administrador?](#si-el-alistador-puede-agregar-sustituir-o-remover-ítems-necesita-la-aprobacion-de-un-administrador)
  - [¿Cuál es el límite de cambios que se pueden realizar?](#si-se-permiten-modificaciones-en-los-pedidos-cual-es-el-límite-de-cambios-que-se-pueden-realizar)
  - [¿Cómo ubica el alistador los ítems que debe alistar?](#como-ubica-el-alistador-los-ítems-que-debe-alistar)
- [Configuración de empaque](#configuracion-de-empaque)
  - [¿Cuáles son los tamaños y tipos de paquetes que pueden utilizarse?](#cuales-son-los-tamaños-y-tipos-de-paquetes-que-pueden-utilizarse)

## Configuración general

### ¿VTEX Pick and Pack procesará todos los pedidos de mi tienda?

La integración de las funcionalidades de VTEX Pick and Pack con los pedidos de tu tienda no es automática. Debes configurar filtros para definir las características que deben tener los pedidos gestionados por Pick and Pack, siguiendo los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración** o ingresa `Configuración` en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **General** en la sección **Pedidos**.
3. Selecciona los [filtros](/es/docs/tutorials/vtex-pick-and-pack-configuracion) en la página **General**.
4. Haz clic en **Guardar**.

### ¿Los alistadores preparan un solo pedido por vez o varios al mismo tiempo?

Es posible definir si el flujo de la hoja de trabajo se realizará con un pedido por vez o con múltiples pedidos. Para configurar cómo se prepararán los pedidos, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración** o ingresa `Configuración` en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **General** en la sección **Hojas de trabajo**.
3. En la sección **Gestión de pedidos** elige la opción que deseas configurar:
   - **Pedido único**: preparación de pedido individual.
   - **Múltiples pedidos**: agiliza la preparación de varios pedidos al mismo tiempo, de forma más eficiente y práctica.
4. Haz clic en **Guardar**.

## Configuración de alistamiento

### ¿Puede el alistador modificar el pedido durante el alistamiento?

El alistador puede agregar, sustituir y rechazar ítems del pedido, así como aumentar la cantidad o ajustar el precio de un ítem. Sin embargo, para que el alistador pueda realizar estas acciones, es necesario activar los permisos correspondientes. Para configurar los permisos, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración** o ingresa `Configuración` en la barra de búsqueda en la parte superior de la página.
2. Haz clic en [**Alistamiento**](/es/docs/tutorials/vtex-pick-and-pack-configuracion#separacao) en la sección **Hojas de trabajo**.
3. En **Alistamiento**, selecciona las acciones que el alistador podrá ejecutar:
   - Permitir observaciones en los ítems
   - Solicitar confirmación para alistar ítems
   - Permitir agregar ítems
   - Permitir sustitución de ítems
   - Permitir rechazar ítems
   - Permitir cambios de precio de ítems
   - Permitir cambios en la cantidad de los ítems
4. Haz clic en **Guardar**.

### Si el alistador puede agregar, sustituir o remover ítems, ¿necesita la aprobación de un administrador?

El alistador puede modificar un pedido sin necesidad de aprobación por parte de un administrador, aunque puedes activar este requisito siguiendo los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración** o ingresa `Configuración` en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Alistamiento** en la sección **Hojas de trabajo**.
3. En [**Alistamiento**](/es/docs/tutorials/vtex-pick-and-pack-configuracion#separacao), habilita la opción **Activar flujo de aprobaciones**.
4. Haz clic en **Guardar**.

### Si se permiten modificaciones en los pedidos, ¿cuál es el límite de cambios que se pueden realizar?

Puedes establecer un límite en la cantidad de veces que se pueden modificar el precio y la cantidad de los ítems en un pedido. Para definir un límite, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración** o ingresa `Configuración` en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Alistamiento** en la sección **Hojas de trabajo**.
3. En [**Alistamiento**](/es/docs/tutorials/vtex-pick-and-pack-configuracion#separacao), establece el límite de cambios en la opción **Número máximo de cambios de precio en ítems del pedido**.
4. Haz clic en **Guardar**.

### ¿Cómo ubica el alistador los ítems que debe alistar?

La ubicación de los ítems se refiere al lugar específico donde está almacenado cada ítem en el stock, facilitando y simplificando el proceso de alistamiento. Para activar la ubicación de los ítems sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración** o ingresa `Configuración` en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **General** en la sección **Ítems**.
3. Habilita la opción **Activar ubicación del ítem**.
4. Haz clic en **Guardar**.

## Configuración de empaque

### ¿Cuáles son los tamaños y tipos de paquetes que pueden utilizarse?

Los tipos y tamaños de empaques utilizados por la tienda deben estar registrados en Pick and Pack. Para agregar un empaque, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración** o ingresa `Configuración` en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Empaque** en la sección **Hojas de trabajo**.
3. En **[Empaque](/es/docs/tutorials/vtex-pick-and-pack-configuracion#empacotamento)**, haz clic en la pestaña **Tipos de empaque**.
4. Haz clic en el botón **Crear tipo de empaque** y llena el formulario con la información solicitada.
5. Haz clic en **Guardar**.

