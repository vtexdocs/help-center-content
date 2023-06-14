---
title: Mapear categorías y atributos de los productos para Mercado Libre
id: 5XNeiye4rS4oao2MueSUeA
status: PUBLISHED
createdAt: 2018-08-13T12:58:18.100Z
updatedAt: 2022-09-05T19:01:28.441Z
publishedAt: 2022-09-05T19:01:28.441Z
firstPublishedAt: 2018-08-13T14:27:50.859Z
contentType: trackArticle
productTeam: Channels
slug: mapear-categorias-y-atributos-de-los-productos-para-mercado-libre-mapper
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugES: configurar-integracion-con-mercado-libre
---

Después de realizar la configuración inicial de la integración, se puede enviar los productos al catálogo del marketplace. Para agilizar el proceso de catalogación de sus productos y permitir que estén disponibles para la venta en menos tiempo, deberá realizar el mapeo entre las características de los productos en su tienda VTEX y las características de los mismos productos en su tienda en el marketplace.

Para enviar tus productos a Mercado Libre, debes:

1. [Mapear las categorías de los productos.](#mapear-categorias)
2. [Mapear los atributos de los productos.](#mapear-atributos)

<div class = "alert alert-info">
Tus productos deben tener el <a href="https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb">Stock</a> e <a href="https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP">Precio</a> configurados antes de enviarlos a Mercado Libre.
</div>

## Mapear categorías

Para acceder a la página de mapeo, debes ir a Admin *MARKETPLACE > Integraciones > Configuración* y en la tarjeta de integración con Mercado Libre seleccionar el ícono de engranaje <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" /> y hacer clic en la opción `Realizar mapeo`.

Se te redirigirá a la página de mapeo de Mercado Libre que mostrará una lista con las categorías de tu tienda VTEX. El mapeo de categorías permite que haya una correspondencia entre las categorías de tu tienda y las categorías de Mercado Libre. Así, los productos enviados se mostrarán en la categoría equivalente en Mercado Libre.

En la página de mapeo, hay una barra de búsqueda que permite buscar la categoría por nombre. Además, en la sección **Categorías de la tienda**, se muestra una lista de las categorías de tu tienda VTEX.

La lista de categorías de tu tienda VTEX incluye el status del mapeo a través de íconos:

| Icono | Status | Descripción |
| ---------- | ---------- | ---------- | 
| <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/6Ry65cPvgGmChmE3RipFio/deec73c3e429f63dfa8971ae8c848221/mapeado_mapper.JPG" /> | **Mapeado**| Indica que se completó el mapeo de la categoría. | 
| <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/6v4eFsWHVy8F5VIqTVLQD9/e63d945d60a958a37246f57d919eede8/mapeamentoincompleto_mapper.JPG" /> | **Mapeo incompleto** | La categoría está parcialmente mapeada y requiere que se rellenen los atributos obligatorios, indicados con un asterisco, para mapearla. | 
| <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/lsN6TxCm1e6frHvIQ8xjt/491ad1e6d99ab858e2a76d0ea31e1a39/erromapeamento_mapper.JPG" /> | **Error en el mapeo** | Se produce un error en el mapeo cuando el marketplace elimina o cambia la categoría del producto.  Para resolver este problema, solo hay que rehacer el mapeo de categorías. | 
| <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/3nVJUJHetaqPHThGGpoG8T/d7f667b269105a5c65aa7b16b1aace21/incompleto_mapper.JPG" /> | **No mapeada** | Indica que la categoría no fue mapeada. |

La página de mapeo también contiene las secciones **Categoría del marketplace** y **Mapeo de atributos**. Ambas aparecen como una opción de menú de selección en el que si se hace clic sobre la flecha, se muestran nuevos campos e información.

Para realizar el mapeo de categorías:

1. Accede al Admin.
2. En el módulo Marketplace, seleccione **Integraciones** y haz clic en `Configuración`.
3. En la tarjeta de Mercado Libre, haz clic en el ícono de engranaje <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
4. Selecciona la opción `Realizar mapeo`. Se abrirá una nueva ventana con la página de mapeo.
5. En la sección **Categorías de la tienda**, elige la categoría que deseas mapear.
6. En la sección **Categoría del marketplace**, selecciona la categoría correspondiente en el marketplace del producto que deseas enviar.  

Para finalizar el mapeo de la categoría, debes seguir las instrucciones a continuación desde el paso 6 hasta el final.

## Mapear atributos

![Home (8)](https://images.ctfassets.net/alneenqid6w5/1WVspX796PMYQcgOycbhVC/5de9a1c9a262f8556b2eb82b9fd6cf20/Home__8_.gif)

El mapeo de los atributos permite que haya una correspondencia entre el patrón de tu tienda VTEX y el patrón utilizado por Mercado Libre. Cada categoría tiene atributos obligatorios en Mercado Libre y es necesario rellenarlos para que el mapeo pueda completarse. Los campos no mapeados no impiden que se realice el mapeo, sin embargo, mientras más atributos de tu producto se envíen a Mercado Libre, mejor clasificado estará en ese marketplace.

Para mapear los atributos, sigue los pasos a continuación:

1. Accede al Admin.
2. En el módulo Marketplace, seleccione **Integraciones** y haz clic en `Configuración`.
3. En la tarjeta de Mercado Libre, haz clic en el ícono de engranaje <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
4. Selecciona la opción `Realizar mapeo`. Se abrirá una nueva ventana con la página de mapeo.
5. En la sección **Mapeo de atributos**, rellena los campos con los atributos que deseas mapear (el asterisco indica que es obligatorio).
6. Si has rellenado los atributos *Color* o *Tamaño*, en la columna Valores de atributo, haz clic en el "`Color/Tamaño`" equivalente y selecciona la opción de valor correspondiente.
7. Si deseas personalizar un atributo, haz clic en el botón `Agregar valor personalizado` y crea un nombre para el valor del atributo personalizado.
8. Haz clic en `Guardar cambios`.

Al finalizar el mapeo de categorías y atributos correctamente, el status de la categoría cambiará a **Mapeado** <img class="shadow-4" src="https://images.contentful.com/alneenqid6w5/6Zu9VaGjbucOthXQsFwTD1/8681ab7d7e4fd12b41daae3c69afd552/mapper_correto.JPG" /> y tus productos se anunciarán en el sitio web de Mercado Libre.

### Tabla de medidas 

La tabla de medidas permite a los clientes saber el tamaño aproximado del producto que desean comprar, brindándoles así una mejor experiencia al momento de seleccionar el tamaño de un producto. Al informar detalladamente las medidas del producto, te evitas devoluciones y reclamos por tamaño incorrecto.

Al recibir menos devoluciones, tu reputación en Mercado Libre mejora junto con la exposición de tus productos. La tabla de medidas está disponible para los productos de la categoría `Calzado`. Las medidas aparecen en centímetros (cm).

La tabla de medidas no solo es personalizable, lo cual posibilita la elección de diferentes opciones según las necesidades de cada uno, sino que también incluye las medidas aproximadas del tamaño de cada producto disponible.  

#### Agregar tabla personalizada

Para agregar una tabla de medidas personalizada, debes seguir los pasos a continuación: 

1. Accede al Admin VTEX.
2. En el *MARKETPLACE*, selecciona la opción **Integraciones** y haz clic en `Configuración`.
3. En el recuadro de Mercado Libre, haz clic en el ícono de engranaje <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
4. Selecciona la opción `Realizar mapeo`. Se abrirá una nueva ventana con la interfaz de mapeo.
5. En la sección **Tabla de medidas**, haz clic en el ícono `+`.
6. Selecciona la opción *Tabla personalizada*.
7. Ingresa un nombre válido para tu tabla en el campo **Nombre de la tabla**.
8. En el campo **Dominio**, selecciona la opción para tu tabla personalizada.
9. En el campo **Género**, selecciona la opción correspondiente al género del producto. Existen cinco tipos de géneros:
   * **Mujeres**
   * **Hombres**
   * **Niñas**
   * **Niños**
   * **Sin género**
10. En el campo **Tamaño principal**, escoge la opción de modelo de tabla. Hay cinco modelos diferentes:
    * **BR:** usa los tamaños estándar en Brasil.
    * **Tamaño de la marca:** usa los tamaños estándar de la marca del producto seleccionado.
    * **US:** usa las medidas estándar de los tamaños en Estados Unidos. Las medidas pueden variar según el género.
    * **EU:** usa las medidas estándar de los tamaños en la Unión Europea.
    * **UK:** usa las medidas estándar de los tamaños en el Reino Unido.
11. En el campo **Template**, haz clic en `CSV`. Se descargará una plantilla de la tabla que deberás completar según las instrucciones de la sección Completar la plantilla de la Tabla de medidas.

#### Completar la plantilla de la Tabla de medidas

Cuando la completes, debes rellenar todas las columnas. Si optas por no completarla o usar algunas medidas estándar, rellena la plantilla con un `-`.

En esa plantilla, deberás configurar las columnas y completarlas con los valores de los tamaños y medidas en centímetros de los respectivos tamaños.

Para configurar la plantilla automáticamente, accede a *Datos > Texto para columnas*, selecciona la opción **Delimitado** y haz clic en `Avanzar`. En el campo **Delimitadores**, selecciona la opción **Coma**, haz clic en `Avanzar`, y termina haciendo clic en `Finalizar`.

La plantilla de la tabla de medidas contiene las siguientes columnas:

| **Columna** | **Descripción** | **Contenido** |
| ---------- | ---------- | ---------- |
| **Foot Length** | Medida en centímetros del tamaño | Completa cada línea con la medida en centímetros de los tamaños que completarás en las siguientes columnas |
| **Foot Length to** | Medida en centímetros del tamaño máximo que debe tener el pie para acomodar el tamaño respectivo | Completa cada línea con las medidas máximas en centímetros de los tamanõs que completarás en las seguintes columnas |
| **Manufacturer Size** | Número de la medida estándar del tamaño de la marca del producto seleccionado | Completa cada línea con la medida estándar de la marca del producto |
| **BR Size** | Número de la medida estándar del tamaño en Brasil | Completa cada línea con el tamaño correspondiente seguido de BR. Por ejemplo, 38 BR |
| **US Size** | Número de la medida estándar del tamaño en Estados Unidos. Las medidas pueden variar según el género | PCompleta cada línea con el tamaño correspondiente seguido de US. Por ejemplo, 24 US |
| **EU Size** | Número de la medida estándar del tamaño en la Unión Europea | Completa cada línea con el tamaño correspondiente seguido de EU. Por ejemplo, 38 EU |
| **UK Size** | Número de la medida estándar del tamaño en el Reino Unido | Completa cada línea con el tamaño correspondiente seguido de UK. Por ejemplo, 12 UK |

<div class = "alert alert-info">
Es importante reforzar la necesidad de usar “espacio” entre el número y la medida (cm), separar los números con puntos (.), llenar todas las columnas y verificar si los campos <b>Género</b> y <b>Tamaño</b> fueron seleccionados correctamente
</div>

#### Cargar la tabla de medidas

Luego de completar la plantilla de mapeo, cárgala:

1. Accede al Admin VTEX.
2. En el *MARKETPLACE*, selecciona la opción **Integraciones** y haz clic en `Configuración`.
3. En el recuadro de Mercado Libre, haz clic en el ícono de engranaje <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
4. Selecciona la opción `Realizar mapeo`. Se abrirá una nueva ventana con la interfaz de mapeo.
5. En la sección **Tabla de medidas**, haz clic en el ícono `+`.
6. Selecciona la opción *Tabla personalizada*.
7. Haz clic en `Elegir un archivo`.
8. Selecciona el archivo de la plantilla.
9. Haz clic en `Agregar`.

Al terminar, habrás creado con éxito tu tabla de medidas personalizada.

<div class = "alert alert-info">Si ocurre un error en la tabla, se indicará el problema para ser resuelto y se deberá realizar la carga nuevamente.</div>
