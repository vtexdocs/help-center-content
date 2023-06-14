---
title: Configurar split de pagos
id: 4EOhp8cdVXaHl68KykPG6
status: DRAFT
createdAt: 2020-11-05T20:01:18.593Z
updatedAt: 2021-06-28T19:50:56.234Z
publishedAt: 
firstPublishedAt: 2020-11-06T19:14:51.014Z
contentType: trackArticle
productTeam: Financial
slug: configurar-split-de-pagos
trackId: 1ouDg8q56Kuz1AgtJUY9nv
trackSlugES: split-de-pagos
---

Actualmente, el split de pagos solo es soportado por dos adquirentes:  

- VTEX Payment
- [PagarMeV2](https://help.vtex.com/es/tutorial/configurar-gateway-pagarmev2--5TugxXNMOs0Ocyg4uqussM?&utm_source=autocomplete "PagarMeV2")

A continuación, vea cómo configurar el split de pagos para cada adquirente.

## Configuración de split para PagarMe
 Siga estos pasos:

1. Acceda al __Admin__.
2. Haga clic en el módulo __Pagos__.
3. Luego, haga clic en __Configuración__.
4. En la parte superior de la página, haga clic en la pestaña __Afiliaciones__.
5. Haga clic en el __botón verde "+"__.
6. En la sección __Otros__, seleccione la opción __PagarMeV2__. 
7. En el lado izquierdo, complete el campo __Nombre de la afiliación__.
8. Después, complete los campos __Application Key__ y __Application Token__ con los datos proporcionados por PagarMe.
9. En captura automática de pagos seleccione una de las opciones:
  - **Utilizar el comportamiento recomendado del procesador de pagos**: la captura no es automática y se programa de acuerdo con el delay especificado por el conector en el que el proveedor, además de indicar si el pago fue autorizado, puede especificar (o recomendar) un número de días para la captura en el momento de la respuesta a la autorización por parte del Gateway (este es el comportamiento estándar de la plataforma).
  - **Inmediatamente: Captura automática al autorizar el pago**: la captura es automática y se produce justo después de la autorización, incluso si la transacción cuenta con un análisis antifraude.
  - **Inmediatamente: Captura automática al aprobar el análisis de riesgo de fraude**: la captura es automática y ocurre justo después de la autorización y el análisis antifraude (si selecciona este comportamiento y no cuenta con análisis antifraude, la captura del pago ocurrirá de la misma manera que en el comportamiento **Inmediatamente: Captura automática al autorizar el pago**).
  - **Desactivado: No se captura automáticamente**: la captura no ocurre automáticamente

10. En __¿Activar split y enviar receptores?__, seleccione la opción __Sí__. 
11. En __Responsabilidad por las tarifas de pago__, seleccione el __agente__ que será responsable por el pago de las tarifas.
12. En __Responsabilidad por los chargebacks__, seleccione el __agente__ que será responsable por el pago del chargeback. 
13. Haga clic en el __botón Salva__ para guardar los ajustes.

En caso de dudas, puede consultar el artículo [cómo configurar el Gateway PagarMeV2](https://help.vtex.com/es/tutorial/configurar-gateway-pagarmev2--5TugxXNMOs0Ocyg4uqussM?&utm_source=autocomplete "cómo configurar el gateway PagarMeV2") para obtener más información. 

## Configuración de split en VTEX Payment 
Siga estas instrucciones:

1. Acceda al __Admin__.
2. Haga clic en el módulo __Pagos__.
3. Luego, haga clic en __Configuración__.
4. En la parte superior de la página, haga clic en la pestaña Afiliaciones.
5. Haga clic en el __botón verde "+"__.
6. En la sección Otros, seleccione la opción __"VTEX Payment"__.
7. En el lado izquierdo, complete el campo __Nombre de la afiliación__.
8. Después, complete el campo __Application Key__ con el dato proporcionado por VTEX 
9. En **Captura de pago automática**, seleccione un opción.
10. En captura automática de pagos seleccione una de las opciones:
  - **Utilizar el comportamiento recomendado del procesador de pagos**: la captura no es automática y se programa de acuerdo con el delay especificado por el conector en el que el proveedor, además de indicar si el pago fue autorizado, puede especificar (o recomendar) un número de días para la captura en el momento de la respuesta a la autorización por parte del Gateway (este es el comportamiento estándar de la plataforma).
  - **Inmediatamente: Captura automática al autorizar el pago**: la captura es automática y se produce justo después de la autorización, incluso si la transacción cuenta con un análisis antifraude.
  - **Inmediatamente: Captura automática al aprobar el análisis de riesgo de fraude**: la captura es automática y ocurre justo después de la autorización y el análisis antifraude (si selecciona este comportamiento y no cuenta con análisis antifraude, la captura del pago ocurrirá de la misma manera que en el comportamiento **Inmediatamente: Captura automática al autorizar el pago**).
  - **Desactivado: No se captura automáticamente**:la captura no ocurre automáticamente.
11. En __¿Activar split y enviar receptores?__, seleccione __Sí__.
12. 11. En __Responsabilidad por las tarifas de pago__, seleccione el __agente__ que será responsable por el pago de las tarifas.
13. En __Responsabilidad por los chargebacks__, seleccione el __agente__ que será responsable por el pago del chargeback. 
13. Haga clic en el __botón Salva__ para guardar los ajustes.
