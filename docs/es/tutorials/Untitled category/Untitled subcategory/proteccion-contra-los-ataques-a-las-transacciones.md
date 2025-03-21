---
title: 'Protección contra los ataques a las transacciones'
id: 62oQBmi7UZlYlgb0Ha1hZ3
status: DRAFT
createdAt: 2021-10-25T19:02:59.690Z
updatedAt: 2024-03-01T15:58:16.139Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Financial
author: 7vIfbtqL5oztUGHLHXwy1E
slugEN: protection-against-transaction-attacks
locale: es
legacySlug: proteccion-contra-los-ataques-a-las-transacciones
subcategoryId: unknown-subcategory
---

## Protección contra los ataques a las transacciones

La protección contra los ataques a las transacciones es una de las soluciones que ofrece VTEX para reducir el riesgo de operaciones fraudulentas. Esta protección se activa automáticamente cuando detectamos un índice muy elevado de denegación de autorizaciones de transacciones (superior al 90%) en un periodo de tiempo breve (15 minutos).

En su primera versión, cuando se active, la protección consistirá en aplicar un cambio en el flujo de pago de la compra. Esto no provocará un aumento del tiempo del pedido ni una disminución de la conversión de la tienda. Una vez cerrado el pedido, el consumidor recibirá posteriormente el mensaje de pago aprobado (o rechazado) a través de un mensaje electrónico (email o SMS).

>ℹ️ La protección no impide totalmente que la tienda sufra ataques a tarjetas, pero reduce considerablemente el número de estos eventos. De este modo, las transacciones se vuelven más seguras.

### ¿Cómo activar la protección contra los ataques a las transacciones?

Cuando está activada, si se detecta un alto índice de denegación de autorizaciones de transacciones en un periodo corto de tiempo, la protección se activará automáticamente durante una hora. Una vez transcurrido este tiempo, las autorizaciones de transacciones vuelven automáticamente al flujo normal. 

Para activar la protección, mira el paso a paso que se muestra a continuación.

1. Accede al __Admin__.
2. Haz clic en __Pagos__.
3. Haz clic en __Transacciones__.
4. En la esquina superior derecha, haz clic en el ícono de configuración;
5. En __Protección contra ataques__, haz clic en el botón para activarla (el color verde indica "activada").

![proteção-botao-configurações](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Untitled%20category/Untitled%20subcategory/proteccion-contra-los-ataques-a-las-transacciones_1.png)

![opción-de-protección-habilitada1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Untitled%20category/Untitled%20subcategory/proteccion-contra-los-ataques-a-las-transacciones_2.png)

### ¿Cómo desactivar la protección contra los ataques a las transacciones?

>❗ Desactivar la protección contra los ataques a las transacciones aumenta el riesgo de fraude de pruebas de tarjetas (operación realizada por un defraudador que utiliza un gran número de datos de tarjetas para realizar transacciones fraudulentas). En caso de ataques que puedan dañar uno o varios sistemas internos de VTEX, la plataforma podrá reactivar obligatoriamente la protección contra ataques, y el administrador de la tienda será informado de esta operación.

Para desactivar la protección, mira el paso a paso que se muestra a continuación.

1. Accede al __Admin__.
2. Haz clic en __Pagos__.
3. Haz clic en __Transacciones__.
4. En la esquina superior derecha, haz clic en el ícono de configuración.
5. En __Protección contra ataques__, haz clic en el botón para desactivarla (el color gris indica "no activada").

### ¿Cómo identificar si se ha activado la protección contra los ataques a las transacciones?

Cada vez que se active la protección, el administrador de la tienda recibirá una notificación por email (el mismo registrado en el SmtpConnector del Admin).

El administrador de la tienda también puede consultar el historial de amenazas que contiene información sobre los motivos de activación y los periodos en los que se produjeron. 

Para acceder a esta información, mira el paso a paso que se muestra a continuación.

1. Accede al __Admin__.
2. Haz clic en __Pagos__.
3. Haz clic en __Transacciones__.
4. En la esquina superior derecha, haz clic en el ícono de configuración.
5. En __Historial de amenazas__, haz clic en la flecha de la derecha.
6. Para seleccionar __Amenazas detectadas__ o __Amenazas neutralizadas__, haga clic en una de las flechas de la derecha. 
7. Verifica los detalles de los eventos en la ventana emergente que aparece.

![opción-protección-histórico1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Untitled%20category/Untitled%20subcategory/proteccion-contra-los-ataques-a-las-transacciones_3.png)

![pantalla-protección-histórico1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Untitled%20category/Untitled%20subcategory/proteccion-contra-los-ataques-a-las-transacciones_4.png)

![pantalla-amenaza-potencial1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Untitled%20category/Untitled%20subcategory/proteccion-contra-los-ataques-a-las-transacciones_5.png)

![pantalla-amenaza-neutralizada1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Untitled%20category/Untitled%20subcategory/proteccion-contra-los-ataques-a-las-transacciones_6.png)

### Artículos relacionados
- [¿Qué es una solución antifraude?](https://help.vtex.com/es/tutorial/o-que-e-antifraude)
- [Cómo configurar el antifraude](https://help.vtex.com/es/tutorial/como-configurar-antifraude)
- [Visión general del módulo Pagos](https://help.vtex.com/es/tutorial/pci-gateway-visao-geral)

