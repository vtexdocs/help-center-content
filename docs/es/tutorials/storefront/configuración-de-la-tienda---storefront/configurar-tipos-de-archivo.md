---
title: 'Configurar tipos de archivo'
createdAt: 2026-08-12T15:00:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: configuring-file-types
locale: es
---

En el Admin VTEX puedes definir las dimensiones predeterminadas y el tamaño máximo (en KB) de los archivos usados en tu tienda, principalmente las imágenes de producto del catálogo. Esta configuración influye en la validación de la carga de imágenes en el Admin y en las tiendas **CMS Portal (Legado)**; también en los comportamientos del storefront, como el zoom y las miniaturas.

> ⚠️ La validación de **Tamaño máximo en KB** en la carga de imágenes de producto/SKU en el catálogo se aplica a tiendas [CMS Portal (Legado)](https://help.vtex.com/es/docs/tracks/cms-portal-legado) y [Store Framework](https://help.vtex.com/es/docs/tracks/implementacion-del-frontend#store-framework). Consulta más información en [Configurar zoom y miniaturas en tiendas CMS Portal (Legado)](https://help.vtex.com/es/docs/tutorials/configurar-zoom-y-miniaturas-en-tiendas-cms-portal-legado).

![Lista de tipos de archivos en el Admin](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/configurações-da-loja---storefront/configurando-tipos-de-arquivos_1.png)

> ℹ️ En la lista, la columna **Tamaños** muestra el resumen en formato `{anchura}px x {altura}px | {tamaño}KB`.

## Instrucciones

### Configurar tipos de archivos

Para configurar los tipos de archivos de tu tienda sigue estos pasos:

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Configuración**.
2. Haz clic en la pestaña **Tipos de archivos**.
3. En la lista, ubica el tipo deseado y haz clic en `Editar`.
4. Completa los campos descritos en [Campos del tipo de archivo](#campos-del-tipo-de-archivo).
5. Haz clic en `Guardar`.

> ⚠️ No cambies las dimensiones de un tipo si ya existen imágenes registradas con esa configuración. Si necesitas cambiar el tamaño, elimina y vuelve a registrar las imágenes del tipo modificado.

#### Campos del tipo de archivo

Al hacer clic en `Editar`, el formulario muestra los siguientes campos:

| Campo                                       | Descripción                                                                                                                                                                                                                               |
| :------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nombre**                                  | Identifica el tipo de archivo en la lista (por ejemplo, `Producto - Zoom` o `Producto - Thumb`).                                                                                                       |
| **Anchura x Altura**                        | Muestra las dimensiones predeterminadas en píxeles (`anchura` x `altura`) asociadas al tipo.                                                                                                           |
| **Tamaño máximo en KB**                     | Define el tamaño máximo del archivo en kilobytes (KB). Es el principal criterio de validación al cargar imágenes de producto en el catálogo.                                           |
| **Tipo**                                    | Define si el tipo es Imagen (usa anchura/altura y puede redimensionarse/comprimirse) o Archivo (archivo genérico, sin restricción de píxeles).                                      |
| **Casilla de ajuste de tamaño obligatorio** | Cuando se marca, esta casilla obliga a redimensionar la imagen según la anchura y la altura configuradas. Cuando se deja sin marcar, las dimensiones no se aplican de forma forzada al cargar el archivo. |

### Corregir cargas bloqueadas

La carga de imágenes de producto y de SKU en Catálogo respeta el **Tamaño máximo en KB** configurado para el tipo de archivo correspondiente.

Si el valor es **0 KB** o es demasiado bajo, el Admin puede rechazar la carga aunque:

- El archivo abra con normalidad en la computadora.
- La misma imagen se cargue sin error en otra cuenta o en otro entorno.
- El archivo cumpla con las [Buenas prácticas para el uso de imágenes en el catálogo](https://help.vtex.com/es/docs/tutorials/buenas-practicas-para-el-uso-de-imagenes-en-el-catalogo).

Para corregir cargas bloqueadas sigue estos pasos:

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Configuración > Tipos de archivos**.
2. Haz clic en `Editar` en el tipo de imagen de producto afectado (por ejemplo, `Producto - Principal` o `Producto - Giga`).
3. Aumenta el valor de **Tamaño máximo en KB** a un límite compatible con tus imágenes. Lo habitual en la plataforma son valores de varios miles de KB, por ejemplo 3000 KB.
4. Guarda la configuración e intenta cargar el archivo de nuevo en el registro del SKU.

> ⚠️ Las dimensiones configuradas como `0 px x 0 px` suelen indicar que no hay restricción de anchura/altura para ese tipo. En cambio, **0 KB** en el tamaño máximo bloquea las cargas.
