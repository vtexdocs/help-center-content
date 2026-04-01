---
title: "Configuraciones regionales"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-04-01T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: configuring-locales
locale: es
order: 1
---

Una configuración regional define el idioma y la configuración regional para el contenido de la tienda. Las configuraciones regionales permiten experiencias de compra en varios idiomas al permitirte configurar ajustes de idioma y reglas de resguardo.

Con las configuraciones regionales, puedes gestionar el contenido del storefront para múltiples mercados dentro de una sola tienda. En lugar de duplicar páginas o mantener tiendas separadas para cada región, puedes definir las configuraciones regionales de la tienda (por ejemplo, `en-US` o `pt-BR`) y crear versiones localizadas de la misma entrada de contenido.

En esta guía, aprenderás cómo configurar las configuraciones regionales para tu tienda.

## Antes de comenzar

* Antes de configurar las configuraciones regionales, debes comprender dos conceptos clave que determinan cómo aparece el contenido en el storefront. Conocer estos conceptos te ayuda a desarrollar una estrategia de localización efectiva y a evitar la duplicación innecesaria de contenido.

| Concepto | Descripción |
| :---- | :---- |
| **[Estrategias de configuración regional de resguardo](/es/docs/tutorials/understanding-locale-fallback-rules):** | Decide qué contenido muestra el sistema cuando una configuración regional no tiene su propio contenido localizado. |
| [**Conexión de configuración regional con bindings:**](#cómo-se-conectan-las-configuraciones-regionales-con-los-bindings) | Clarifica cómo el storefront elige la configuración regional correcta según la configuración del binding. |

* Para storefronts de [FastStore](https://developers.vtex.com/docs/guides/faststore): Debes implementar la función de Localización en el proyecto de la tienda. Para hacerlo, sigue las instrucciones de Manejo de la internacionalización con la función de Localización.

* Asegúrate de que el siguiente [recurso](https://help.vtex.com/es/docs/tutorials/license-manager-resources) esté asociado a tu [rol de usuario](https://help.vtex.com/es/docs/tutorials/roles):

| Producto | Categoría | Recurso |
| :---- | :---- | :---- |
| Commerce Content | Stores | Create Store |

## Acceder a la página de Configuraciones regionales

Para acceder a la página de **Configuraciones regionales**, abre el Admin de VTEX y ve a **Contenido > Tiendas**. Selecciona la tienda que deseas configurar haciendo clic en su tarjeta y, a continuación, haz clic en **Configuraciones regionales**.

![configuring-locales-overview](https://vtexhelp.vtexassets.com/assets/docs/src/locales-overview-es___3883f19cfb8cccdd9eb5579f16e05e00.png)

La siguiente tabla muestra las opciones disponibles en la página:

| Opción | Descripción |
| :---- | :---- |
| **Buscar** | Filtra la lista de configuraciones regionales existentes. |
| **Crear configuración regional** | Abre un panel lateral para agregar una nueva configuración de idioma y región a tu tienda. |
| **Configuración regional** | Muestra el nombre y el código de la configuración regional (por ejemplo, `Inglés (US)` e `en-US`), que representa la combinación específica de idioma y región configurada para la tienda. |
| **Idioma** | Especifica el idioma base asignado a la configuración regional (por ejemplo, inglés o portugués). |
| **Región** | Especifica la región o el país asociado al idioma (por ejemplo, Estados Unidos o Brasil). |
| **Configuración regional predeterminada** | Define la configuración regional predeterminada que el sistema seleccionará si no se proporciona ninguna configuración regional. |
| **Resguardo** | Define la configuración regional que el sistema muestra cuando el contenido no está disponible en la configuración regional seleccionada. |
| **Estado** | Indica si una configuración regional está **Activa** o **Inactiva**. Cuando una configuración regional está inactiva, el contenido no puede publicarse ni mostrarse en el storefront para esa configuración regional específica. |
| **Opciones (`⋮`)** | Abre un menú con las opciones: **Editar:** Editar la configuración específica de la configuración regional. **Desactivar:** Cambiar el estado de la configuración regional a **Inactivo**. |

## Crear una nueva configuración regional

Para crear una nueva configuración regional para tu tienda, sigue estos pasos:

1. En la página de **Configuraciones regionales**, haz clic en `Crear configuración regional`. Aparecerá un panel lateral para crear la configuración regional con los siguientes campos:

    ![creating-a-new-locale](https://vtexhelp.vtexassets.com/assets/docs/src/creating-locale-es___6a5f2c1a20f11f252344493caef5998c.png)

    | Nombre del campo | Descripción | Ejemplo de valor |
    | :---- | :---- | :---- |
    | **Nombre** | Agrega el nombre de la configuración regional. | `Inglés (US)` |
    | **Activo** | Selecciona esta casilla para hacer que la configuración regional esté disponible en tu tienda una vez creada. | - |
    | **Hacer esta la configuración regional predeterminada** | Selecciona esta opción para establecer la configuración regional como predeterminada. La configuración regional predeterminada sirve como fuente principal de contenido y como resguardo para otras configuraciones regionales. Al crear tu primera configuración regional, debes seleccionar esta opción. Puedes cambiar la configuración regional predeterminada más adelante. | - |
    | **Idioma** | Selecciona los idiomas disponibles. Para más información, consulta la lista de [Idiomas admitidos](/es/docs/tutorials/supported-languages-and-regions#idiomas-admitidos). | `Inglés (en)` |
    | **Región** | Selecciona la región disponible. Para más información, consulta la lista de [Regiones admitidas](/es/docs/tutorials/supported-languages-and-regions#regiones-admitidas). | `Canadá (CA)` |
    | **Configuración regional de resguardo** | Selecciona la configuración regional que se muestra cuando el contenido no está disponible en la configuración regional. Para crear una configuración regional de resguardo, sigue las instrucciones en [Establecer una configuración regional de resguardo](#establecer-una-configuración-regional-de-resguardo). | `en-US` |

2. Una vez que hayas completado los campos anteriores, haz clic en `Crear`.

## Crear la configuración regional predeterminada

La configuración regional predeterminada define el idioma y la región predeterminados para crear contenido para la tienda. Si una solicitud no especifica una configuración regional, el sistema devuelve automáticamente el contenido de la configuración regional predeterminada para garantizar que siempre se proporcione una respuesta.

### Establecer una configuración regional de resguardo

Al [crear una configuración regional](#crear-una-nueva-configuración-regional), puedes designar una **configuración regional de resguardo** como fuente de contenido cuando no se haya definido contenido en la configuración regional. Esto ayuda a reducir la duplicación de contenido al gestionar múltiples configuraciones regionales, definiendo contenido localizado solo para los campos que difieren. Esto significa que no tienes que traducir o duplicar cada campo para cada configuración regional, solo los que requieren cambios.

## Cómo se conectan las configuraciones regionales con los bindings

Las configuraciones regionales se asocian a los bindings del storefront mediante los códigos ISO de [idioma](https://www.iso.org/iso-639-language-code) y [país](https://www.iso.org/iso-3166-country-codes.html) (por ejemplo, `en-US`). Cada binding está configurado con un código ISO específico. Cuando el storefront solicita contenido, envía este código al CMS. El sistema entonces busca una configuración regional con un código ISO coincidente y devuelve el contenido correspondiente.

Por ejemplo:

* Si un binding está configurado con `en-US`, el CMS devuelve el contenido de la configuración regional Inglés-US.
* Si un binding está configurado con `pt-BR`, el CMS devuelve el contenido de la configuración regional Portugués-BR.
* Si ninguna configuración regional coincide con el código ISO del binding, el sistema devuelve el contenido de la configuración regional predeterminada.
