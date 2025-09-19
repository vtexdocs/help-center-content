---
title: 'Mapear categorías y atributos de los productos para Mercado Libre'
id: 5XNeiye4rS4oao2MueSUeA
status: PUBLISHED
createdAt: 2018-08-13T12:58:18.100Z
updatedAt: 2024-07-23T21:39:55.195Z
publishedAt: 2024-07-23T21:39:55.195Z
firstPublishedAt: 2018-08-13T14:27:50.859Z
contentType: trackArticle
productTeam: Channels
slugEN: mapping-product-categories-and-attributes-to-mercado-libre
locale: es
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugEN: configurar-integracion-con-mercado-libre
order: 9
---

Después de realizar la configuración inicial de la integración, se puede enviar los productos al catálogo del marketplace. Para agilizar el proceso de catalogación de sus productos y permitir que estén disponibles para la venta en menos tiempo, deberá realizar el mapeo entre las características de los productos en su tienda VTEX y las características de los mismos productos en su tienda en el marketplace.

Para enviar tus productos a Mercado Libre, debes:

1. [Mapear las categorías de los productos.](#mapear-categorias)
2. [Mapear los atributos de los productos.](#mapear-atributos)

> ℹ️ Tus productos deben tener el [Stock](/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) e [Precio](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) configurados antes de enviarlos a Mercado Libre.

## Mapear categorías

Para acceder a la página de mapeo, debes ir a Admin **Marketplace > Marketplace e Integrações** y en la integración con Mercado Libre selecciona la opción `Realizar mapeo`.

Se te redirigirá a la página de mapeo de Mercado Libre que mostrará una lista con las categorías de tu tienda VTEX. El mapeo de categorías permite que haya una correspondencia entre las categorías de tu tienda y las categorías de Mercado Libre. Así, los productos enviados se mostrarán en la categoría equivalente en Mercado Libre.

En la página de mapeo, hay una barra de búsqueda que permite buscar la categoría por nombre. Además, en la sección **Categorías de la tienda**, se muestra una lista de las categorías de tu tienda VTEX.

La lista de categorías de tu tienda VTEX incluye el status del mapeo a través de íconos:

| Icono | Status | Descripción |
| ---------- | ---------- | ---------- | 
| <img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/marketplace/configurar-integracion-con-mercado-libre/mapear-categorias-y-atributos-de-los-productos-para-mercado-libre-mapper_2.JPG" /> | **Mapeado**| Indica que se completó el mapeo de la categoría. | 
| <img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/marketplace/configurar-integracion-con-mercado-libre/mapear-categorias-y-atributos-de-los-productos-para-mercado-libre-mapper_3.JPG" /> | **Mapeo incompleto** | La categoría está parcialmente mapeada y requiere que se rellenen los atributos obligatorios, indicados con un asterisco, para mapearla. | 
| <img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/marketplace/configurar-integracion-con-mercado-libre/mapear-categorias-y-atributos-de-los-productos-para-mercado-libre-mapper_4.JPG" /> | **Error en el mapeo** | Se produce un error en el mapeo cuando el marketplace elimina o cambia la categoría del producto.  Para resolver este problema, solo hay que rehacer el mapeo de categorías. | 
| <img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/marketplace/configurar-integracion-con-mercado-libre/mapear-categorias-y-atributos-de-los-productos-para-mercado-libre-mapper_5.JPG" /> | **No mapeada** | Indica que la categoría no fue mapeada. |

La página de mapeo también contiene las secciones **Categoría del marketplace** y **Mapeo de atributos**. Ambas aparecen como una opción de menú de selección en el que si se hace clic sobre la flecha, se muestran nuevos campos e información.

Para realizar el mapeo de categorías:

1. Accede al Admin.
2. Haz clic en **Marketplace > Marketplace e Integraciones.**
3. Haz clic en la integracion con Mercado Libre.
4. Selecciona la opción `Realizar mapeo`. Se abrirá una nueva ventana con la página de mapeo.
5. En la sección **Categorías de la tienda**, elige la categoría que deseas mapear.
6. En la sección **Categoría del marketplace**, selecciona la categoría correspondiente en el marketplace del producto que deseas enviar.  

Para finalizar el mapeo de la categoría, debes seguir las instrucciones a continuación desde el paso 6 hasta el final.

## Mapear atributos

![Home (8)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/marketplace/configurar-integracion-con-mercado-libre/mapear-categorias-y-atributos-de-los-productos-para-mercado-libre-mapper_1.gif)

El mapeo de los atributos permite que haya una correspondencia entre el patrón de tu tienda VTEX y el patrón utilizado por Mercado Libre. Cada categoría tiene atributos obligatorios en Mercado Libre y es necesario rellenarlos para que el mapeo pueda completarse. Los campos no mapeados no impiden que se realice el mapeo, sin embargo, mientras más atributos de tu producto se envíen a Mercado Libre, mejor clasificado estará en ese marketplace.

Para mapear los atributos, sigue los pasos a continuación:

1. Accede al Admin.
2. Haz clic en **Marketplace > Marketplace e Integraciones.**
3. Haz clic en la integracion con Mercado Libre.
4. Selecciona la opción `Realizar mapeo`. Se abrirá una nueva ventana con la página de mapeo.
5. En la sección **Mapeo de atributos**, rellena los campos con los atributos que deseas mapear (el asterisco indica que es obligatorio).
6. Si has rellenado los atributos *Color* o *Tamaño*, en la columna Valores de atributo, haz clic en el "`Color/Tamaño`" equivalente y selecciona la opción de valor correspondiente.
7. Si deseas personalizar un atributo, haz clic en el botón `Agregar valor personalizado` y crea un nombre para el valor del atributo personalizado.
8. Haz clic en `Guardar cambios`.

Al finalizar el mapeo de categorías y atributos correctamente, el status de la categoría cambiará a **Mapeado** <img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/marketplace/configurar-integracion-con-mercado-libre/mapear-categorias-y-atributos-de-los-productos-para-mercado-libre-mapper_6.JPG" /> y tus productos se anunciarán en el sitio web de Mercado Libre.  

Después del mapeo de productos de moda, como ropa y calzado, es necesario enviar la tabla de medidas del producto a Mercado Livre. Para saber cómo llenar y enviar la tabla de medidas, sigue el tutorial [Tabla de medidas de Mercado Livre](/pt/tutorial/tabela-de-medidas-do-mercado-livre--5dCc9IJ83SjllG75BVCWnr)
