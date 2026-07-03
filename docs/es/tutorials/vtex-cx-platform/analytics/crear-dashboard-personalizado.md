---
title: "Analytics: Crear dashboard personalizado"
createdAt: 2026-07-02T16:25:21.244Z
updatedAt: 2026-07-02T14:20:03.298Z
contentType: tutorial
productTeam: Post-purchase
slugEN: create-analytics-dashboard
locale: es
---

El módulo **Analytics** de VTEX CX Platform te permite crear dashboards personalizados con widgets que muestran métricas específicas de tu operación. Puedes usar estos dashboards para monitorear embudos de atención, resultados de flujo y datos de ventas de VTEX, entre otros datos.

## Crear dashboard

Para crear un dashboard personalizado, sigue las instrucciones a continuación:

1. En el módulo **Analytics**, haz clic en el menú junto al nombre **Analytics**.
2. Haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Nuevo dashboard`.
3. Ingresa un nombre para el dashboard, selecciona la moneda de tu tienda y elige un layout.
4. Haz clic en `Guardar`. Se abrirá el nuevo dashboard.

> ⚠️ El layout elegido afecta los widgets y los datos que muestran. Los widgets en formato de cuadrado ofrecen tres modelos: Ejecuciones, Resultados de flujo y Cruce de datos. Los widgets en formato de columna ofrecen cuatro modelos: Embudo, Recurrencia, VTEX y Conversión de plantilla.

## Agregar y configurar widgets cuadrados

Después de crear el dashboard, agrega los widgets que deseas mostrar. Cada espacio vacío en el dashboard corresponde a un widget por configurar.

Para configurar un widget cuadrado, sigue las instrucciones a continuación:

1. Haz clic en el botón de tarjeta cuadrada que deseas configurar. Se abrirá la **Galería de widgets** en el lateral.
2. Selecciona el tipo de widget que deseas configurar:
  - [Ejecuciones](#ejecuciones).
  - [Resultados de flujo](#resultados-de-flujo).
  - [Cruce de datos](#cruce-de-datos).
3. Completa los campos de configuración del widget seleccionado.
4. Haz clic en `Guardar`.

Para restablecer la configuración de un widget, haz clic en `Restablecer widget` en el panel de configuración del widget.

### Ejecuciones

El widget **Ejecuciones** muestra la lista de ejecuciones de un flujo.

Para configurar el widget, completa los siguientes campos:

1. En **Dale un nombre a la tarjeta**, ingresa un nombre para identificar el widget en el dashboard.
2. Selecciona el flujo cuyas ejecuciones deseas monitorear.
3. Elige un emoji para el widget. Este paso es opcional. El emoji aparece junto a la métrica y puede ayudar a identificar visualmente el widget.
4. Haz clic en `Guardar`.

### Resultados de flujo

El widget **Resultados de flujo** devuelve el resultado de un flujo y te permite realizar operaciones básicas con los datos.

Para configurar el widget, completa los siguientes campos:

1. En **Dale un nombre a la tarjeta**, ingresa un nombre para identificar el widget en el dashboard.
2. Selecciona el flujo que deseas monitorear.
3. En **Resultado de flujo**, busca o selecciona el resultado que deseas mostrar.
4. En la tabla **Operación**, selecciona las operaciones que se aplicarán al resultado:
   - Total o Promedio.
   - Valor más alto o Valor más bajo.
5. Para monitorear datos con símbolo de moneda, activa la casilla **Moneda**.
6. Elige un emoji para el widget. Este paso es opcional. El emoji aparece junto a la métrica y puede ayudar a identificar visualmente el widget.
7. Haz clic en `Guardar`.

### Cruce de datos

El widget **Cruce de datos** combina dos valores para generar una métrica personalizada.

Para configurar el widget, completa los siguientes campos:

1. En **Dale un nombre a la tarjeta**, ingresa un nombre para identificar el widget en el dashboard.
2. En **Primer valor**, selecciona el primer flujo y el tipo de resultado:
   - **Ejecuciones de flujo:** Utiliza el número de ejecuciones como valor.
   - **Resultado de flujo:** Utiliza el resultado de un paso específico del flujo como valor.
     - Si seleccionas **Resultado de flujo**, debes elegir un resultado de flujo y qué tipo de dato deseas (suma, promedio, mínimo o máximo).
3. En **Segundo valor**, selecciona el segundo flujo y el tipo de resultado:
   - **Ejecuciones de flujo:** Utiliza el número de ejecuciones como valor.
   - **Resultado de flujo:** Utiliza el resultado de un paso específico del flujo como valor.
     - Si seleccionas **Resultado de flujo**, debes elegir un resultado de flujo y qué tipo de dato deseas (suma, promedio, mínimo o máximo).
4. En **Operación**, elige cómo se combinarán los dos valores:
  - **Multiplicar:** Multiplica el primer valor por el segundo.
  - **Diferencia:** Calcula la diferencia entre los dos valores.
  - **Suma:** Suma los dos valores.
  - **Porcentaje:** Calcula el porcentaje del primer valor en relación con el segundo.
5. Para monitorear datos con símbolo de moneda, activa la casilla **Moneda**.
6. Haz clic en `Guardar`.

## Agregar y configurar widgets de columna

Después de crear el dashboard, agrega los widgets que deseas mostrar. Cada espacio vacío en el dashboard corresponde a un widget por configurar.

Para configurar un widget de columna, sigue las instrucciones a continuación:

1. Haz clic en el botón de columna que deseas configurar. Se abrirá la **Galería de widgets** en el lateral.
2. Selecciona el tipo de widget que deseas configurar:
  - [Embudo](#embudo).
  - [Recurrencia](#recurrencia).
  - [VTEX](#vtex).
  - [Conversión de plantilla](#conversión-de-plantilla).
3. Completa los campos de configuración del widget seleccionado.
4. Haz clic en `Guardar`.

Para restablecer la configuración de un widget, haz clic en `Restablecer widget` en el panel de configuración del widget.

### Embudo

El widget **Embudo** muestra datos en un gráfico de embudo, mostrando cómo el volumen de tickets de atención disminuye en cada paso de un flujo.

Para configurar el widget, completa los siguientes campos:

1. En **Primera métrica**, ingresa un nombre para la primera métrica y selecciona el flujo de origen.
2. En **Segunda métrica**, ingresa un nombre para la segunda métrica y selecciona el flujo de origen.
3. En **Tercera métrica**, ingresa un nombre para la tercera métrica y selecciona el flujo de origen.
4. Para incluir otras métricas, haz clic en `+ Agregar métrica` y completa los campos.
5. Haz clic en `Guardar`.

> ℹ️ El widget Embudo requiere un mínimo de tres métricas para generar la visualización y acepta hasta cinco métricas.

### Recurrencia

El widget **Recurrencia** muestra resultados recurrentes en gráficos, como calificaciones de una encuesta de satisfacción o CSAT.

Para configurar el widget, completa los siguientes campos:

1. En **Nombre de la métrica**, ingresa un nombre para identificar el widget en el dashboard.
2. En **Seleccionar flujo de origen**, selecciona el flujo deseado.
3. En **Resultado de flujo**, busca o selecciona el resultado recurrente que deseas visualizar.
4. Haz clic en `Guardar`.

### VTEX

El widget **VTEX** muestra datos de ventas de tu tienda VTEX.

Para configurar el widget, completa los siguientes campos:

1. En **Nombre del widget**, ingresa un nombre para identificar el widget en el dashboard.
2. En **UTM**, ingresa el UTM de VTEX correspondiente a tu tienda y app.
3. Haz clic en `Guardar`.

### Conversión de plantilla

El widget **Conversión de plantilla** rastrea la tasa de conversión entre mensajes de plantilla enviados y ventas completadas.

Para configurar el widget, completa los siguientes campos:

1. En **Nombre del widget**, ingresa un nombre para identificar el widget en el dashboard.
2. En **Configurar metadata**, selecciona el número de WhatsApp asociado con el envío de las plantillas.
3. Luego, selecciona las plantillas cuya conversión deseas rastrear.
4. En **Configurar datos de VTEX**, ingresa el UTM de VTEX correspondiente a tu tienda y app.
5. Haz clic en `Guardar`.
