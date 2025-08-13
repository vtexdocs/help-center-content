---
title: 'Crear consulta personalizada en Master Data v1'
id: tutorials_799
status: PUBLISHED
createdAt: 2017-04-27T21:57:44.496Z
updatedAt: 2024-07-17T13:34:47.245Z
publishedAt: 2024-07-17T13:34:47.245Z
firstPublishedAt: 2017-04-27T23:03:43.119Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-custom-queries-in-master-data-v1
legacySlug: creando-una-cconsulta-customizada-en-el-vtex-master-data
locale: es
subcategoryId: 2AThnkEZAYbk4G4EIs53rL
---

Una consulta personalizada en Master Data es un filtro o combinación de filtros que se pueden guardar y utilizar directamente desde la lista de registros en un formulario. 

## Prerrequisitos

Antes de crear una consulta es necesario seguir los pasos descritos en [Filtrar datos en Master Data](https://help.vtex.com/es/tutorial/filtrando-dados-no-master-data--tutorials_778) para configurar un filtro tanto en la entidad de datos como en el formulario.

## Guardar una consulta

Sigue los pasos a continuación para filtrar los registros de un formulario y guardar una consulta personalizada.

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data**.
2. Comprueba que estás en la pestaña **Aplicaciones**.
3. En la aplicación deseada, identifica el formulario que deseas ver y haz clic en el ícono de lista <i class="fas fa-bars"></i>.

    Serás redirigido a la lista de registros del formulario. En el lado izquierdo verás los filtros configurados. 

4. Para filtrar, selecciona el nombre del filtro y su valor, y haz clic en `Filtrar`.

    Puedes filtrar por varios campos a la vez y por varios valores en el mismo campo. Para eliminar un filtro, basta con hacer clic en la `X` situada junto al valor.

5. Haz clic en el botón `Guardar consulta`.
6. Asigna un nombre a la consulta personalizada.
7. Haz clic en `OK`.
8. Haz clic en `OK` nuevamente.
9. Haz clic en la pestaña **Aplicaciones**.
10. Haz clic en el botón `Volver a cargar aplicaciones`.

Tras seguir las instrucciones anteriores, la consulta aparecerá como una opción de vista en la lista del formulario.

![consultas-2-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/master-data/master-data-v1-applications/crear-consulta-personalizada-en-master-data-v1_1.png)

También puedes acceder a las consultas guardadas haciendo clic en el botón **Consultas**, en la lista del formulario:

![consultas-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/master-data/master-data-v1-applications/crear-consulta-personalizada-en-master-data-v1_2.png)

## Configuración de consulta predeterminada

Para garantizar que un formulario siempre abra la lista utilizando una consulta personalizada en lugar de mostrar todos los registros, puedes configurar una consulta predeterminada. Para hacerlo, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data**.
2. Comprueba que estás en la pestaña **Aplicaciones**.
3. Haz clic en el símbolo de engranaje <i class="fas fa-cog"></i> de la aplicación donde deseas modificar el formulario.
4. Haz clic en el ícono de edición <i class="fas fa-edit"></i> en la fila del formulario donde deseas agregar la consulta predeterminada.
5. En la opción **Consulta predeterminada**, selecciona la consulta personalizada que deseas para que se muestre automáticamente al abrir la lista de registros del formulario.
6. Haz clic en el botón `Guardar`.
