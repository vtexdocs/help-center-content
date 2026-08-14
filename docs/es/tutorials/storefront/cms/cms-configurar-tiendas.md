---
title: "Configurar tiendas"
createdAt: "2026-07-20T17:08:52.219Z"
updatedAt: "2026-07-20T17:08:52.219Z"
contentType: tutorial
productTeam: CMS
slugEN: cms-configuring-stores
locale: es
---

Las tiendas definen cada storefront que consumirá contenido del CMS (por ejemplo, un proyecto de FastStore) y configuran su modelo de contenido, sus configuraciones y su comportamiento de localización. Una tienda:

* Define la relación con un storefront (por ejemplo: ID de tienda “faststore”, esquema utilizado, repositorio de tienda vinculado).
* Contiene la configuración de la tienda, como:  
  * Nombre de la tienda  
  * Configuración regional: las configuraciones regionales que existen para esa tienda, cuál es la predeterminada y cómo funcionan las reglas de resguardo entre configuraciones regionales (ejemplo: fr-CA recurre a en-CA).
  * URL de vista previa usada para la vista previa de entradas y ramas.

![stores-overview-ui](https://vtexhelp.vtexassets.com/assets/docs/src/cms-stores-overview-ui___47bd3ce39fbc854394fcc934c8c8c0ef.png)

Para acceder a la página Tiendas, abre el Admin y accede a **Storefront > Contenido > Tiendas.**

## Crear una tienda

Para crear una tienda sigue los pasos a continuación:

1. En la página **Tiendas**, haz clic en `Agregar tienda`.  
2. En el campo **Nombre de la tienda** ingresa un nombre para la tienda.
3. En **Storefront**, selecciona una de las siguientes opciones:  

    * **FastStore:** selecciona esta opción si la tienda usa FastStore. Luego, elige la versión correspondiente de FastStore: `v3` o `v4`.
    * **Headless:** selecciona esta opción si la tienda usa una implementación headless personalizada.

4. En la sección **Configuración regional predeterminada**, completa los campos de la configuración regional predeterminada de la tienda:
   * **Nombre:** ingresa un nombre para identificar la configuración regional.
   * **Idioma:** selecciona el idioma predeterminado.
   * **Región:** selecciona la región predeterminada.
5. Haz clic en `Crear tienda`. La nueva tienda se mostrará en la página **Tiendas**.

## Gestionar una tienda

Para gestionar una de las tiendas de tu cuenta sigue los pasos a continuación:

1. En la página **Tiendas**, haz clic en la tarjeta de la tienda que deseas gestionar, por ejemplo, **FastStore**.  
2. En la página Tiendas verás las siguientes opciones que puedes gestionar:  [Información general](#información-general), [Configuraciones regionales](#configuraciones-regionales) y [Configuraciones de compilación](#configuración-de-compilación):

### Información general

En la pestaña **General** puedes ver y editar la identificación básica de la tienda y las configuraciones de nivel superior que definen cómo el storefront interactúa con el CMS.

![general-information-tab](https://vtexhelp.vtexassets.com/assets/docs/src/cms-general%20information-overview___2497ce5674751230c817ecffaf98f28c.png)

Para editar el nombre de la tienda haz clic en `Editar`. Puedes ver los siguientes campos:

| Campo | Explicación |
| :---- | :---- |
| **Nombre** | Nombre de la tienda mostrado en el CMS. |
| **Storefront** | Implementación de storefront conectada al CMS, como FastStore o una implementación headless personalizada. |
| **URL** | URL del storefront conectado a la tienda. |
| **API** | Endpoint de API usado por el storefront para comunicarse con el CMS. |

### Configuraciones regionales

La pestaña **Configuraciones regionales** define el idioma y las configuraciones regionales del contenido de la tienda. Para más información, consulta la guía [Configurar configuraciones regionales](https://help.vtex.com/docs/tutorials/configuring-locales).

![locales-tab](https://vtexhelp.vtexassets.com/assets/docs/src/cms-locales-tab___b0ea3a987998523c52ed26d1133b53cb.png)

### Configuración de compilación

La pestaña Configuración de compilación define cómo el CMS interactúa con el storefront durante los flujos de vista previa y publicación. En esta sección, configuras el endpoint que se utiliza cuando los editores hacen clic en **Vista previa** y el webhook que permite volver a compilar los storefronts después de publicar contenido.

En esta pestaña se muestran los siguientes campos:

| Nombre del campo | Descripción | Ejemplo del valor |
| :---- | :---- | :---- |
| **Repositorio de la tienda** | La URL del repositorio donde está alojado el código frontend de la tienda. Este repositorio se usa para identificar el proyecto de storefront relacionado con esta tienda. |  |
| **Vista previa** | URL de webhook que proporciona la vista previa de las páginas en el CMS. | `https://{accountName}.vtex.app/api/preview` |
