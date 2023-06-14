---
title: Post Mortem OMS - Noviembre 2017
id: dCyxZuPKPC2ckccoMKqk4
status: PUBLISHED
createdAt: 2017-11-15T03:34:25.106Z
updatedAt: 2019-12-31T15:13:52.527Z
publishedAt: 2019-12-31T15:13:52.527Z
contentType: updates
productTeam: Post-purchase
author: authors_59
slug: post-mortem-oms-noviembre-2017
legacySlug: post-mortem-oms-noviembre-2017
announcementImageID: 
announcementSynopsisES: Este post tiene el objetivo de explicar el incidente ocurrido este viernes
---

Estimados clientes,

Este post tiene el objetivo de explicar el incidente ocurrido este viernes, 10 de noviembre, con nuestro módulo OMS.

Este incidente provocó la **interrupción de los servicios de integración e interrupción de las visualizaciones de los pedidos en el panel de control de VTEX**, nuestro Admin. **La captación de ventas no fue afectada**, y el checkout funcionó normalmente durante todos los días. No tuvimos informes de interrupciones en las ventas de ningún cliente durante el incidente.

VTEX siempre ha emprendido un esfuerzo - que se destaca por estar bastante por encima de los estándares de mercado - para garantizar que los sistemas de misión crítica tengan alta disponibilidad, elasticidad y seguridad. Llamamos a los sistemas de misión crítica a los responsables del cierre del pedido y del workflow del pedido a lo largo del proceso de fulfillment.

Ejemplos de sistemas de misión crítica son el Portal, el Gateway de Pagos, el Sistema de Promociones, el Pricing y el Checkout.

Cuando alguno de estos sistemas falla, se recupera automáticamente en hasta 10 minutos, o bien es capaz de recuperarse con pocas intervenciones manuales de nuestros ingenieros. Para lograr este nivel de confiabilidad, elasticidad y durabilidad, utilizamos en nuestra infraestructura soluciones de almacenamiento del tipo NoSQL, los llamados *Key-Value stores*.

En el caso de sistemas que no son de misión crítica, admitimos tiempos de recuperación más grandes y más procesos manuales para la recuperación. Para estos casos, nuestro objetivo de recuperación es de hasta 4 horas.

Esta disponibilidad puntual más pequeña viene acompañada de beneficios para estos sistemas. Nos permite construir features más sofisticadas y elaboradas. Además de que nuestro ciclo de desarrollo se vuelve mucho más rápido. Ejemplos de sistemas que no son de misión crítica son nuestro Admin, la API de búsqueda del OMS y el VTEX Insights.

El pasado viernes tuvimos dos grandes accidentes: uno de ellos alcanzó una API que no clasificamos como misión crítica, y otro alcanzó un servicio de misión crítica.

A continuación, detallamos los accidentes y nuestro plan de acción para mitigarlos.

## Accidente 1 - Interrupción de la API de búsqueda del OMS

- API de clasificación __no crítica__.
- Tiempo esperado de recuperación en caso de disrupción: __4 horas__.
- Tiempo que tardamos para recuperación parcial el viernes: __20 horas__.

Como todo accidente, éste ocurrió debido a una serie de incidentes que no fueron propiamente atacados en el momento en que ocurrieron.

Los servidores responsables de la búsqueda de los pedidos tuvieron, durante casi todo el año, pequeñas interrupciones de funcionamiento. Estas interrupciones eran recuperadas rápidamente por medio de maniobras simples, como pequeñas optimizaciones, restarts, escalonamiento vertical de los servidores, etc.

A pesar de que las maniobras han surtido efecto de recuperación en el momento de las interrupciones, mirando hacia atrás, percibimos que no fuimos suficientemente rigurosos en la identificación de la causa raíz de estos pequeños incidentes.

El viernes, esta falta de rigor cobró la cuenta: todas las pequeñas maniobras cabales se ejecutaron, además de otras más radicales, pero ninguna de ellas fue suficiente para recuperar la infraestructura de la búsqueda de pedidos.

Después de algunas horas de intentos fallidos, decidimos tomar caminos aún más radicales, como el de la simulación de un desastre, la recreación de toda la infraestructura de cero y luego la repopulación con los datos de los pedidos originales. De nuevo, ninguna de estas medidas tuvo el efecto deseado; las cargas en los servidores eran más grandes que lo normal, y también el nivel de las CPUs y memorias.

En paralelo, otro equipo de ingenieros estaba construyendo una infraestructura más moderna, con prácticas mejores y más recientes. Fue sólo con ese intento que comenzamos a tener éxito en el proceso de recuperación.

La recuperación de desastres para todos nuestros ambientes de búsqueda sigue un patrón de tres olas que siempre intentamos seguir: primero, recuperamos todos los ítems alterados en las últimas 24 horas; después todos los ítems alterados en el año corriente; y, finalmente, todos los ítems del dominio que deben permanecer buscables.

La primera ola comenzó cerca de las 22h (BRT), y duró cerca de 3 horas. La segunda terminó alrededor de las 15h (BRT) del sábado. Decidimos no ejecutar la tercera ola en su plenitud hasta después de la Black Friday, teniendo como única justificación el objetivo de mitigar un riesgo potencial (si usted viene a ser afectado por esa decisión, por favor, entre en contacto con nosotros).

La feature de exportación de pedidos fue reactivada hoy, 14 de noviembre, y está limitada a los pedidos que están en nuestra infraestructura de búsqueda (actualmente, el año 2017, y durante la semana, a partir del año 2016).

Todos sus pedidos se almacenan en nuestro repositorio NoSQL. __No hubo pérdida de datos originales ni corrupción de los mismos__. Por ahora, es posible acceder a ellos sólo a través de la API, usando los IDs de los pedidos. Como se dijo antes, esta es una situación que durará sólo hasta después de la Black Friday.

Como se describió anteriormente, falta de rigor y una serie de maniobras fallidas hicieron el tiempo de recuperación de la infraestructura de búsqueda de pedidos tomar un tiempo extremadamente más grande que el mínimo razonable en un escenario de crisis e inestabilidad. Nunca es demasiado decir cuánto lamentamos haber fallado el viernes, y la única manera de sentirnos mejores en relación a ese accidente es usarlo como aprendizaje y ejemplo de cómo no actuar en el futuro.

A continuación, se muestra una lista de las acciones que implementaremos a partir del aprendizaje que viene con esta falla:

1. Vamos, después de la Black Friday, rehacer la infraestructura de búsqueda utilizando las mejores prácticas y conocimientos disponibles.
2. Tendremos una estrategia más consciente de los tamaños de cada shard en nuestro sistema.
3. Vamos a monitorear más de cerca la generación de registros de estos sistemas e intentar identificar anomalías lo antes posible.
4. Vamos a monitorear más de cerca la latencia de ese servicio, siempre analizando los patrones de los requests más costosos, además de simplificar las features de búsqueda del OMS, enfocando su uso en la operación y abandonando su uso como herramienta de report, que es como muchos la utilizan actualmente. Con el tiempo, vamos a fortalecer la capacidad de Insights en detrimento de las capacidades del Admin del OMS.
5. Ampliaremos la ventana de recuperación de la primera ola - de 24 horas a 7 días -, de modo que el sistema pueda atender la mayoría de los casos después de la primera ola.
6. Crearemos formas de que la primera ola sea procesada más rápidamente, con más escala, a la mitad del tiempo en que fue procesada el viernes.
7. A medio plazo (+1 año), vamos a migrar la búsqueda hacia una infraestructura más homogénea en relación a los sistemas de la VTEX, para tener más expertos disponibles en situaciones de crisis.

Para nuestra cultura, queda la lección de que todo problema empujado hacia abajo de la alfombra repetidamente vuelve en la forma de un fantasma, que asombra a todos nosotros.

## Accidente 2 - Interrupción del procesamiento del workflow de pedidos

- Servicio de clasificación __crítica__.
- Tiempo esperado de recuperación en caso de disrupción: __10 minutos__.
- Tiempo que tardamos en recuperar el servicio el viernes: __6 horas__.

Este accidente fue más impactante para nuestros clientes en general que el primero. Durante las 6 horas, los pedidos de nuestros clientes no anduvieron en el workflow, es decir, no fueron enviados al antifraude y al ERP, y no siguieron adelante al recibir la notificación de shipping.

Al contrario de lo que normalmente ocurre, este accidente fue generado por pocos incidentes bastante específicos, con origen en el hecho de que los servidores que implementan la lógica del workflow de pedidos eran los mismos que alimentan el servidor de búsqueda.

Durante el accidente 1, una maniobra utilizada regularmente era el cierre de este farm de servidores con el objetivo de aliviar la carga en los servidores de búsqueda. Como los dos servicios estaban implementados en la misma infraestructura, cuando se apagaba un servicio, se apagaba el otro también, sin que nuestros ingenieros se atentaran a ese hecho.

Naturalmente, gran parte de nuestros clientes empezó a abrir llamados quejándose de que los pedidos no estaban "cayendo" en el ERP. Y fue ahí donde se encadenó otro incidente: existe un grupo de clientes, aparentemente grande, que hace la integración con el ERP usando el servicio de búsqueda de pedidos, en lugar de usar los feeds, que no dependen de la búsqueda.

Los primeros clientes a quejarse formaban parte de ese grupo que usa la búsqueda. El equipo de Customer Care, con el objetivo de dar espacio para que los ingenieros trabajaran en el problema, respondió a todos que la integración volvería a funcionar sólo cuando el servicio de búsqueda retornara a la normalidad. En un ambiente de crisis como ese, donde la comunicación debe ser poca y efectiva, ésta quedó siendo la verdad del momento.

Se trataba, sin embargo, de una ilusión, que sólo se volvió verdad porque se encadenó con el incidente anterior. Moraleja de la historia: a lo largo de todo el problema, ningún ingeniero se dio cuenta de que el servicio del workflow estaba apagado, y ningún agente del equipo de Customer Care tomó la decisión de pedir a un ingeniero que restablecera un servicio que, en principio, es completamente desacoplado del servicio de búsqueda.

Con el encadenamiento de estos dos incidentes, muchos de nuestros clientes se perjudicaron en sus operaciones a un costo muy bajo.

Los aprendizajes, con sus respectivas acciones, en este caso, son:
1. Vamos a separar los servicios de flujo de trabajo del servicio de alimentación de la búsqueda de pedidos y ponerlos en servidores separados.
2. Vamos a fortalecer el mindset de que servicio crítico no puede parar. Punto.
3. Incentivaremos a los agentes del Customer Care a abordar sin salvedades el equipo de producto durante una crisis, destacando el dolor del cliente para toda la empresa. La fricción entre agendas ligeramente diferentes, en este caso, es saludable e importante para el equilibrio de las prioridades durante una crisis, y trataremos mejor con ella.
4. Haremos un sprint de divulgación y concientización de las mejores prácticas de integración para los clientes, animándolos a usar el feed de integración, que es nuestra recomendación para misiones críticas. (Para más información sobre la integración vía feed, consulte nuestro [Guía de integración de ERPs - Pedidos](/es/tutorial/guia-de-integracion-de-erps-pedidos).

A pesar de que el accidente de viernes no afectó las ventas de nuestros clientes, él impactó negativamente las operaciones de fulfillment. Somos conscientes de que debemos tratar esta etapa del proceso de venta con tanta seriedad como la captación, sobre todo en un escenario en el que tenemos clientes cuyas ventas crecen 100% al año. Cada minuto cuenta a la hora del fulfillment, y siempre hay que recordarlo. Además, vemos crecer entre nuestros clientes cada vez más escenarios de omnichannel, en los que la entrega expresa es el gran factor diferencial.

De nuevo, sentimos mucho por no haber alcanzado un nivel de excelencia en nuestro servicio el viernes. Esperamos compensar este fallo recogiendo información sobre cada uno de los errores cometidos y transformándola en aprendizaje y acciones para una mejora significativa de nuestra tecnología y nuestros procesos.
