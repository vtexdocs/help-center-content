---
title: 'Tabla de tallas de Mercado Libre'
id: 5dCc9IJ83SjllG75BVCWnr
status: PUBLISHED
createdAt: 2024-07-23T20:28:35.058Z
updatedAt: 2024-10-28T16:30:52.006Z
publishedAt: 2024-10-28T16:30:52.006Z
firstPublishedAt: 2024-07-23T21:11:23.954Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: mercado-libre-size-chart
locale: es
legacySlug: tabla-de-tallas-de-mercado-libre
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

La tabla de tallas permite a los clientes saber el tamaño aproximado del producto que desean comprar, brindándoles así una mejor experiencia al momento de seleccionar el tamaño de un producto. Al informar detalladamente las tallas del producto, evitas devoluciones y reclamos por tamaño incorrecto.  

Al recibir menos devoluciones, tu reputación en Mercado Libre mejora junto con la exposición de tus productos. La tabla de tallas está disponible para los productos de las categorías **calzado, top clothes** y **bottom clothes**. Las tallas aparecen en centímetros (cm).  

La tabla de tallas es personalizable, lo que significa que puedes seleccionar opciones de tabla que se ajusten a tus necesidades, que incluyen las tallas de cada tamaño del producto disponible.  

## Agregar tabla personalizada

Para agregar una tabla de tallas personalizada, debes seguir los pasos a continuación:  

1. Accede al Admin VTEX y ve a **Marketplace > Conexiones > Marketplace e integraciones**.  
2. Selecciona la integración con **Mercado Libre**.  
3. Selecciona la opción `Realizar mapeo`. Se abrirá una nueva ventana con la interfaz de mapeo.  
4. En la sección **Tabla de medidas**, haz clic en el ícono +.  
5. Selecciona la opción **Tabla personalizada**.  
6. Ingresa un nombre válido para tu tabla en el campo **Nombre de la tabla**.  
7. En el campo **Dominio**, selecciona la opción para tu tabla personalizada.  
8. En el campo **Género**, selecciona la opción correspondiente al género del producto. Existen siete tipos de géneros:  
   - **Femenino**  
   - **Masculino**  
   - **Niñas**  
   - **Niños**  
   - **Bebés**  
   - **Sin género**  
   - **Sin género infantil**  
9. En el campo **Tipo de medidas,** escoge la opción de tipo de medidas. Hay tres modelos diferentes:
  - **Medidas corporales**  
  - **Medidas de la prenda**  
  - **Ambas medidas**  
11. En el campo **Tamaño principal**, escoge la opción de modelo de tabla. Hay cinco modelos diferentes:  
   - **BR:** utiliza las tallas estándar en Brasil.  
   - **Tamaño de la marca:** utiliza las tallas estándar de la marca del producto seleccionado.  
   - **US:** utiliza las tallas estándar de los tamaños en Estados Unidos. Las tallas pueden variar según el género.  
   - **EU:** utiliza las tallas estándar de los tamaños en la Unión Europea.  
   - **UK:** utiliza las tallas estándar de los tamaños en el Reino Unido.  
12. En el campo **Template**, haz clic en CSV. Se descargará una plantilla de la tabla que deberás completar según las instrucciones de la sección [Completar la plantilla de la tabla de tallas](#completar-la-plantilla-de-la-tabla-de-tallas).

## Completar la plantilla de la tabla de tallas

Debes enviar una **tabla de tallas** para cada categoría mapeada. Todas las columnas de la tabla deben estar rellenadas. Si decides no utilizar algunas tallas estándar, rellena el valor con un `-`.  
En esta plantilla debes configurar las columnas y completarlas con los valores de los tamaños y medidas en centímetros de los respectivos tamaños.  

Para configurar la plantilla automáticamente, accede a **Datos> Texto en columnas** en el menú de Excel, selecciona la opción **Delimitado** y haz clic en Siguiente. En el campo **Delimitadores**, selecciona la opción **Coma**, haz clic en __Siguiente__, y termina haciendo clic en __Finalizar__.  

### Tabla de calzado

La plantilla de la tabla de tallas para calzado tiene las siguientes columnas:  

| Columna | Descripción | Contenido |
| :---- | :---- | :---- |
| **Foot Length** | Medida en centímetros del tamaño del pie. | Completa cada fila con la medida en centímetros de las tallas que rellenarás en las siguientes columnas. Ejemplo: 45 cm. |
| **Foot Length to** | Medida en centímetros del tamaño máximo que debe tener el pie para acomodar la talla respectiva. | Completa cada fila con las medidas máximas en centímetros de las tallas que rellenarás en las siguientes columnas. Ejemplo: 50 cm. |
| **Manufacturer Size** | Se refiere al tamaño estándar de un producto según las especificaciones del fabricante.. | Rellena cada fila con la medida estándar de la marca del producto. |
| **BR Size** | Número de la medida estándar de la talla en Brasil. | Rellena cada fila con la talla correspondiente seguido de BR. Ejemplo: 38 BR. |
| **US Size** | Número de la medida estándar de la talla en Estados Unidos. Las medidas pueden variar según el género. | Rellena cada fila con la talla correspondiente seguido de US. Ejemplo: 24 US. |
| **EU Size** | Número de la medida estándar del tamaño en la Unión Europea. | Rellena cada fila con la talla correspondiente seguido de EU. Ejemplo: 38 EU. |
| **UK Size** | Número de la medida estándar de la talla en el Reino Unido. | Rellena cada fila con la talla correspondiente seguido de UK. Ejemplo: 12 UK. |  

### Tabla de top clothes

La plantilla de la tabla de tallas para ropa de la parte superior tiene las siguientes columnas:  

| Columna | Descripción | Contenido |
| :---: | ----- | ----- |
| **Size** | Talla de la ropa. | Rellena cada fila con las tallas de la ropa. Ejemplo: L. |
| **Filtrable_size** | Talla filtrable disponible para la categoría. | Rellena cada fila con la talla disponible para filtrar. Ejemplo: XL.  |
| **Chest_circumference_from** | Circunferencia del pecho (tórax). Inicio del intervalo de medidas. | Rellena cada fila con la medida mínima del tórax para la talla en centímetros. Ejemplo: 80 cm. |
| **Chest_circumference_to** | Circunferencia del pecho (tórax). Fin del intervalo de medidas. | Rellena cada fila con la medida máxima del tórax para la talla en centímetros. Ejemplo: 88 cm. |
| **Waist_circumference_from** | Circunferencia de la cintura. Inicio del intervalo de medidas. | Rellena cada fila con la medida mínima de la anchura de la cintura en centímetros. Ejemplo: 70 cm. |
| **Waist_circumference_to** | Circunferencia de la cintura. Fin del intervalo de medidas. | Rellena cada fila con la medida máxima de la anchura de la cintura en centímetros. Ejemplo: 77 cm. |
| **Person_height_from** | Altura de la persona. Inicio del intervalo de medidas. | Rellena cada fila con la medida mínima de la altura de una persona en centímetros. Ejemplo: 168 cm. |
| **Person_height_to** | Altura de la persona. Fin del intervalo de medidas. | Rellena cada fila con la medida máxima de la altura de una persona en centímetros. Ejemplo: 178 cm. |
| **Hip_circumference_from** | Circunferencia de la cadera. Inicio del intervalo de medidas. | Rellena cada fila con la medida mínima de la anchura de la cadera en centímetros. Ejemplo: 109 cm. |
| **Hip_circumference_to** | Circunferencia de la cadera. Fin del intervalo de medidas. | Rellena cada fila con la medida mínima de la anchura de la cadera en centímetros. Ejemplo: 119 cm. |
| **Neck_circumference_from** | Circunferencia del cuello. Inicio del intervalo de medidas. | Rellena cada fila con la medida mínima de la anchura del cuello. Ejemplo: 35 cm. |
| **Neck_circumference_to** | Circunferencia del cuello. Fin del intervalo de medidas. | Rellena cada fila con la medida máxima de la anchura del cuello. Ejemplo: 38 cm. |

### Tabla de top clothes

La plantilla de la tabla de medidas para ropa de la parte inferior tiene las siguientes columnas:  

| Columna | Descripción | Contenido |
| :---: | ----- | ----- |
| **Size** | Talla de la ropa. | Rellena cada fila con las tallas de la ropa. Ejemplo: L. |
| **Filtrable_size** | Talla filtrable disponible para la categoría. | Rellena cada fila con la talla disponible para filtrar. Ejemplo: 44\.  |
| **Waist_circumference_from** | Circunferencia de la cintura. Inicio del intervalo de medidas. | Rellena cada fila con la medida mínima de la anchura de la cintura en centímetros. Ejemplo: 70 cm. |
| **Waist_circumference_to** | Circunferencia de la cintura. Fin del intervalo de medidas. | Rellena cada fila con la medida máxima de la anchura de la cintura en centímetros. Ejemplo: 77 cm. |
| **Hip_circumference_from** | Circunferencia de la cadera. Inicio del intervalo de medidas. | Rellena cada fila con la medida mínima de la anchura de la cadera para la talla en centímetros. Ejemplo: 109 cm. |
| **Hip_circumference_to** | Circunferencia de la cadera. Fin del intervalo de medidas. | Rellena cada fila con la medida máxima de la anchura de la cadera para la talla en centímetros. Ejemplo: 115 cm. |
| **Length_from_inseam_to_ankle_from** | Largo de la pierna medido desde la entrepierna al tobillo. Inicio del intervalo de medidas. | Rellena cada fila con la medida mínima del tamaño de la pierna en centímetros. Ejemplo: 75 cm. |
| **Length_from_inseam_to_ankle_to** | Largo de la pierna medido desde la entrepierna al tobillo. Fin del intervalo de medidas. | Rellena cada fila con la medida máxima del tamaño de la pierna en centímetros. Ejemplo: 85 cm. |
| **Length_from_waist_to_ankle_from** | Largo de la pierna medido desde la cintura al tobillo. Inicio del intervalo de medidas. | Rellena cada fila con la medida mínima del tamaño de la pierna en centímetros. Ejemplo: 80 cm. |
| **Length_from_waist_to_ankle_to**  | Largo de la pierna medido desde la cintura al tobillo. Fin del intervalo de medidas. | Rellena cada fila con la medida máxima del tamaño de la pierna en centímetros. Ejemplo: 88 cm. |
| **Thigh_circumference_from** | Circunferencia del muslo. Inicio del intervalo de medidas. | Rellena cada fila de la columna con la medida mínima del tamaño del muslo en centímetros. Ejemplo: 50 cm. |
| **Thigh_circumference_to** | Circunferencia del muslo. Fin del intervalo de medidas. | Rellena cada fila de la columna con la medida máxima del tamaño del muslo en centímetros. Ejemplo: 58 cm. |
| **Person_height_from** | Altura de la persona. Inicio del intervalo de medidas. | Rellena cada fila con la medida mínima de la altura de una persona en centímetros. Ejemplo: 188 cm. |
| **Person_height_to** | Altura de la persona. Fin del intervalo de medidas. | Rellena cada fila con la medida máxima de la altura de una persona en centímetros. Ejemplo: 193 cm. |

<div class="alert alert-info">
Es importante reforzar la necesidad de usar espacio entre el número y la medida (cm), separar los números con puntos (.), rellenar todas las columnas y verificar si los campos <b>Género</b> y <b>Tamaño</b> fueron seleccionados correctamente.
  </div>

## Cargar la tabla de medidas

Luego de completar la plantilla de mapeo, debes cargarla. Para hacerlo, accede al **Admin VTEX > Marketplace > Conexiones > Marketplace e integraciones** o ingresa **Marketplace e integraciones** en la barra de búsqueda en la parte superior del Admin y sigue los pasos a continuación:  

1. Busca la integración de **Mercado Libre**.  
2. Selecciona la opción `Realizar mapeo`. Se abrirá una nueva ventana con la página de mapeo.  
3. En la sección **Tabla de medidas**, haz clic en el ícono `+`.  
4. Selecciona la opción Tabla personalizada.  
5. Haz clic en `Selecciona un archivo`.  
6. Selecciona el archivo de la plantilla.  
7. Haz clic en `Agregar`.

Al terminar, habrás creado tu tabla de medidas personalizada con éxito.  

<div class="alert alert-info">
Si ocurre un error en la tabla, se indicará el problema en la pantalla de carga. Debes resolver el error y cargar la plantilla nuevamente.
</div>
