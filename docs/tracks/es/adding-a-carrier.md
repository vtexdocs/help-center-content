---
title: 'Registrar una transportadora'
id: 55MezrFTw2limlgT7KUg6l
status: DRAFT
createdAt: 2019-08-22T12:48:28.695Z
updatedAt: 2022-03-08T18:43:37.944Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:51:47.591Z
contentType: trackArticle
productTeam: Post-purchase
slug: registrar-una-transportadora
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugES: logistica-101
---

Las transportadoras, que son configuradas como **Políticas de Envío** en VTEX, son las empresas responsables de hacer la distribución de los productos vendidos por un comercio electrónico. En el registro de la política de envío, es posible configurar plazos, precios, modalidades y entregas diferentes, permitiendo una logística altamente personalizada.

## Cómo registrar una política de envío
1. Acceda al módulo **Inventario y Envío**.
2. Acceda a la pestaña **Estrategia de Envío**.
3. Haga clic en el botón **Crear Política de Envío**.
4. Complete los campos que se muestran.
5. Haga clic en **Guardar**.

## Cómo excluir una transportadora
1. Acceda al módulo **Inventario y Envío**.
2. Acceda a la pestaña **Estrategia de Envío**.
3. Pase el mouse sobre la transportadora que desea excluir.
4. Haga clic en el ícono de **Eliminar**.   
5. Haga clic en el botón **Eliminar**.

## Cómo editar una transportadora
1. Acceda al módulo **Inventario y Envío**
2. Acceda a la pestaña **Estrategia de Envío**.
3. Haga clic en la **Política de Envío** que desee editar. 
4. Altere las configuraciones deseadas.

> *Para alterar la plantilla de flete, basta con descargar el modelo, y subir la plantilla actualizada.*

5. Haga clic en el botón **Guardar**.

## Campos de registro de transportadoras 
Para registrar una transportadora, debe rellenar una serie de campos.  
Los campos disponibles son los siguientes:

- **Activa**  
Flag para indicar si la política de envío está activa o no.

- **Nombre**  
Nombre interno de la política de envío.

- **Id**  
Identificador interno y para integradores. Debe rellenarse solo con letras y números. Si no se rellena, se creará un ID automáticamente.

- **Método de envío**
El tipo de entrega escogido por el cliente, sirve para separar los diferentes servicios de entrega de una misma transportadora. Es el nombre que se mostrará al cliente en el momento de finalizar la compra, p. ej.: expreso vs. normal. Sirve para definir la competencia entre los tipos de entrega de cada transportadora, para elegir la mejor opción en el Checkout. Sepa más sobre tipo de entrega.

- **Cargar las tarifas de envío**  
Es la tabla con los valores y plazos de flete asumidos por la transportadora. Sepa más sobre la plantilla de flete.

- **Suma de dimensiones**  
Son los límites máximos de los bordes del paquete, aceptados por la transportadora. Cuando se alcanza este valor, o bien la entrega se divide en paquetes o no es realizada por esta transportadora. Datos que la transportadora comunica cuando cierra el contrato.

- **Borde más grande**  
Es la medida más grande aceptada por la transportadora. Cuando se alcanza este valor, la entrega se divide en paquetes o no es realizada por esta transportadora.

- **Factor de peso cúbico**
Factor que se utilizará para calcular el peso cúbico. Suma de las medidas, dividida por el factor cúbico. Sepa más sobre el cálculo del peso cúbico.

- **Factor de peso mínimo**
Utilice el peso cúbico solamente si supera este valor. Límite de peso donde, a partir de ahí, se considerará el cálculo del peso cúbico para el flete.

- **Fines de Semana y Feriados**  
Active los flags para habilitar la entrega en los siguientes escenarios: “Entrega los sábados”, “Entrega los domingos”, “Entrega los feriados”.

- **Modalidades activas**  
Especificaciones de productos que requieren una entrega especial. Son las limitaciones de envío del producto que la transportadora permite.  
Sepa más sobre las modalidades. Marque los flags para activar la entrega en los siguientes escenarios: “químicos”, “productos electrónicos”, “muebles”, “vidrio”, “líquidos”, “colchones”, “refrigerados”, “neumáticos”, “línea blanca” y “armas de fuego”.

- **Mínimo de ítems**
Cantidad mínima de ítems aceptada por la transportadora para el flete.

- **Valor mínimo**
Valor mínimo aceptado por la transportadora para el flete.

- **Máximo valor**
Valor máximo aceptado por la transportadora para el flete.

- **Lista de puntos de recogida**
Active este flag para abrir la opción de Puntos de Recogida. Haga clic en el menú desplegable y seleccione entre `Tags`, `Puntos de Recogida` y `Sellers` previamente registrados.

- **Configuración de tiempo**  
Selecciona el día y el horario de apertura y cierre en los siguientes escenarios. Puede añadir más de un plazo por escenario.

- **Horario de operación**  
Días y horas en que operará la transportadora. Se utiliza para definir la disponibilidad de la transportadora para la operación logística de su tienda. [Sepa más sobre la configuración de los horarios de operación de una transportadora](https://help.vtex.com/es/tutorial/horario-de-funcionamento-das-transportadoras--2oGpbInIgdxSWUi3TZjdCS).

- **[Entrega programada](https://help.vtex.com/es/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi)**
La entrega programada es una funcionalidad que permite definir períodos de entrega personalizados, pudiendo definir plazos y precios específicos, poniendo a disposición del cliente la posibilidad de elegir el rango de horarios en el que desea recibir su pedido. Sepa más sobre la entrega programada.

