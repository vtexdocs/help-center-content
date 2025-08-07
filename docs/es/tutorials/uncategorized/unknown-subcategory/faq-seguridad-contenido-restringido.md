---
title: 'FAQ - Seguridad (contenido restringido)'
id: 7AmPOGXykmE9SYyYDzdAZ4
status: DRAFT
createdAt: 2022-05-26T00:09:53.997Z
updatedAt: 2024-05-28T16:45:09.328Z
publishedAt: 
firstPublishedAt: 2022-06-02T18:56:44.116Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: faq-security-restricted-content
legacySlug: faq-seguridad-contenido-restringido
locale: es
subcategoryId: 
---

# FAQ - Seguridad (contenido restringido)

<div class="alert alert-danger">
  <p>No compartas las respuestas de estas preguntas frecuentes con usuarios que no tengan acceso al Admin VTEX.</p>
</div>

Para asistir con las evaluaciones de riesgos de los clientes, VTEX proporciona páginas de preguntas frecuentes con respuestas a las principales preguntas sobre la estructura y seguridad de la plataforma. Este contenido solo está disponible para los usuarios con acceso al Admin VTEX. Las preguntas y respuestas públicas están disponibles en Preguntas frecuentes - Seguridad en VTEX Help Center.

Haz clic en los siguientes puntos para acceder a las preguntas y respuestas de cada tema:

* [Gestión de riesgos](#gestión-de-riesgos)
* [Control de acceso, identificación y autenticación](#control-de-acceso-identificación-y-autenticación)
* [Seguridad de la plataforma](#seguridad-de-la-plataforma)
* [Seguridad de los datos](#seguridad-de-los-datos)
* [Seguridad de la red](#seguridad-de-la-red)
* [Gestión de vulnerabilidades](#gestión-de-vulnerabilidades)
* [Monitoreo de seguridad](#monitoreo-de-seguridad)
* [Respuesta y mitigación de incidentes](#respuesta-y-mitigación-de-incidentes)
* [Recuperación ante desastres y continuidad de negocio](#recuperación-ante-desastres-y-continuidad-de-negocio)

## Gestión de riesgos

### ¿Cómo gestiona VTEX los riesgos de ciberseguridad en la plataforma y en la infraestructura interna?

VTEX realiza análisis periódicos de amenazas y vulnerabilidades en la plataforma, en los procesos operativos y en el negocio. La identificación de riesgos nos ayuda a mejorar los sistemas de monitoreo y notificación para hacer frente a su eventual materialización, ya sea notificando a las personas capaces de gestionarlos o activando acciones automatizadas que puedan mitigarlos o eliminarlos.

### ¿Tiene VTEX un programa de gestión de riesgos de los proveedores?

VTEX cuenta con un sólido proceso de gestión de riesgos de terceros. Esto se lleva a cabo a través de una evaluación cuidadosa y continua de los partners y proveedores con el fin de identificar, analizar y mitigar los riesgos asociados a las actividades realizadas por esos colaboradores externos. El objetivo de este proceso es garantizar la seguridad y compliance en todas las interacciones con terceros, reforzando de esta manera la postura de gestión de riesgos de la organización.

Para integrarse a nuestro ecosistema, exigimos que los terceros adopten medidas de seguridad adecuadas. Esta condición asegura que todas las partes mantengan altos estándares de seguridad de la información, lo que contribuye a la integridad y confiabilidad de nuestro entorno operativo.

Si deseas obtener más información sobre los partners que actúan como subencargados en nuestros procesos operativos, accede a la página[ Subencargados VTEX](https://vtex.com/mx-es/privacy-and-agreements/subprocessors/).

## Control de acceso, identificación y autenticación

### ¿Tiene VTEX una política de contraseñas para los empleados? En caso afirmativo, ¿cuáles son los criterios considerados?

Adoptamos una configuración segura y una política de contraseñas robusta para el acceso a nuestros sistemas internos que incluyen requisitos como número mínimo de caracteres y caracteres especiales, periodicidad del cambio de contraseñas, no utilización de contraseñas anteriores y control e inactividad de la sesión. Presentamos un ejemplo a continuación:

* Longitud mínima de 16 caracteres.
* Combinación de letras, mayúsculas y minúsculas, números y caracteres especiales (`%`, `#`, `$`, `@`, `&`, entre otros).
* No repetir números o letras, en secuencia o series obvias, como `aaaabbbb`, `12345678`, `asdfghjk`.
* Utilizar cifrado complejo para que las credenciales de autenticación sean ilegibles durante la transmisión y almacenamiento en todos los componentes del sistema.
* Opción de cambiar contraseña en el primer inicio de sesión desactivada.
* No utilizar contraseñas anteriores.

### ¿La plataforma cierra la sesión por inactividad?

La plataforma VTEX dispone de un mecanismo de cierre de sesión por inactividad. Se cierra la sesión del cliente en el entorno de checkout automáticamente después de 15 minutos de inactividad.

## Seguridad de la plataforma

### ¿Cómo la plataforma almacena y mantiene la base de usuarios? ¿Cómo se almacenan y protegen las credenciales de los usuarios?

Las contraseñas en la plataforma VTEX utilizan una combinación de hash y sal. Actualmente utilizamos algoritmos de hash SHA1 y PBKDF2 con una sal al principio o al final que proporciona una capa adicional de seguridad. Los emails de los usuarios se almacenan y separan lógicamente en función de una determinada cuenta de la tienda, y no se puede acceder a ellos de forma cruzada, ni siquiera los empleados de VTEX. Las bases de datos que contienen los emails y los hashes están completamente cifradas con AES-256.

### ¿Cómo funciona el proceso de hardening?

VTEX siempre crea sus entornos utilizando la AMI (imagen de máquina de Amazon) más reciente proporcionada por AWS para los servicios de implementación, ya sea Elastic Beanstalk, OpsWorks o simplemente Cloud Formation. Así, aprovechamos la protección de seguridad que AWS proporciona a las instancias implementadas por sus servicios y complementamos las configuraciones de seguridad con nuestros procesos de hardening específicos para cada activo.

### ¿Qué recursos de seguridad tiene la infraestructura que aloja la plataforma?

La plataforma VTEX es una solución SaaS (Software as a Service) hospedado en un entorno muy controlado y que cuenta con una amplia gama de medidas de seguridad. Esto incluye protección de red con filtros y protección del tráfico de entrada y salida, así como también el uso de WAF (Web Application Firewall) para proteger los activos internos, implementar monitoreo automático en tiempo real y recibir alertas de los entornos.

También se llevan a cabo otras acciones como la implementación de líneas base, el hardening de activos y el establecimiento de controles de acceso físicos y lógicos, entre otros procedimientos necesarios. El objetivo de estas medidas es garantizar que la plataforma esté constantemente protegida y que cumpla con los más altos estándares de seguridad del mercado.

## Seguridad de los datos

### ¿Qué medidas toma VTEX para prevenir la fuga de datos?

Invertimos en medidas preventivas y métodos que aumentan la seguridad de nuestra plataforma y de la infraestructura en la que se basa. Además, constantemente reforzamos la gestión de accesos a los sistemas, especialmente a los que contienen datos sensibles, y siempre aplicamos el mínimo privilegio posible. También tenemos pautas generales que deben seguirse al operar en un entorno regulado, como con los datos de las tarjetas de pago (PCI-DSS) y a los que les apliquen las leyes de protección de datos, etc.

Analizamos la forma en que se tratan los datos en diferentes entornos, internos o externos, para evitar exponerlos sin necesidad y reducir el perímetro de seguridad. Otros esfuerzos para prevenir la fuga de datos son concienciar a los profesionales sobre buenas prácticas de seguridad de la información y proporcionar capacitación constante. Además, automatizamos los controles de procesos basándonos en el principio de que las computadoras mantienen la uniformidad con mayor eficacia. Por último, vigilamos de cerca la evolución del proceso de protección contra fugas de datos y lo actualizamos continuamente a medida que surgen nuevos riesgos, demandas tecnológicas o estrategias de la empresa.

## Seguridad de la red

### ¿Están las redes de producción internas segregadas de alguna manera, por ejemplo, mediante la restricción y/o filtrado del tráfico entre redes?

Las redes de producción de VTEX están totalmente aisladas de las redes externas, lo que garantiza un entorno altamente seguro. Los empleados responsables del funcionamiento de los entornos de producción pueden necesitar ocasionalmente una conexión VPN (red privada virtual) para acceder a esta red.

Los equilibradores de carga son los únicos objetos a los que se accede externamente a través de la DMZ (zona desmilitarizada), mientras que las capas de la plataforma y la base de datos se encuentran en subredes separadas de la DMZ. Estas capas están protegidas por medidas de seguridad adicionales, garantizando que solo los usuarios autorizados puedan acceder a ellas. Esta estructura de red proporciona una capa de protección adicional y mantiene los datos sensibles y los sistemas de VTEX protegidos contra amenazas externas.

### ¿Utiliza VTEX la protección de acceso a la red mediante firewalls?

VTEX implementa firewalls para proteger el acceso a las redes. Además de los firewalls locales de los sistemas operativos en los servidores, contamos con varias capas de seguridad en la infraestructura de AWS.

Utilizamos grupos de seguridad AWS, configuración ELB (Elastic Load Balancing) y enrutamiento VPC (Virtual Private Cloud) para lograr funcionalidades de firewall en nuestros sistemas. Estas medidas garantizan que solo se permita el tráfico autorizado en nuestra red, reforzando la seguridad de los datos y servicios.

Gracias a que el proceso de implementación de aplicaciones está automatizado y que todos los logs están centralizados, nuestro equipo no necesita acceso directo a los servidores a diario. El acceso al entorno de producción suele realizarse a través de la consola AWS o de nuestras aplicaciones web y API.

Para garantizar una capa de seguridad adicional, nuestros grupos de seguridad y ELB están configurados para solo permitir acceso HTTP y HTTPS a los ELB que exponen recursos públicamente. Si alguna tarea específica requiere acceso adicional, podemos solicitar y autorizar este acceso temporalmente de forma controlada y segura. Estas prácticas garantizan la integridad y seguridad de nuestra infraestructura de red.

### ¿Qué controles utiliza VTEX para mitigar ataques DDoS (ataques distribuidos de denegación de servicio)?

Para mitigar ataques DDoS, VTEX utiliza una estrategia basada en dos capas de defensa. La primera capa se encuentra en el nivel de la CDN (Content Delivery Network), en el que se aplican medidas de seguridad para filtrar y bloquear tráfico malicioso antes de que llegue a la infraestructura principal.

Además, se aplica una regla de limitación adaptativa en el proxy frontal que se sitúa delante de todos los microservicios de VTEX. Esta regla ayuda a detectar y limitar tráfico malicioso o excesivo, reduciendo así el impacto de posibles ataques DDoS.

VTEX también aprovecha los beneficios de[ AWS Shield](https://aws.amazon.com/es/shield/?nc1=h_ls), además de las medidas internas, que es un servicio proporcionado por Amazon Web Services para proteger contra ataques DDoS. Esta combinación de estrategias en varias capas refuerza significativamente la capacidad de VTEX de mitigar y responder ante ataques DDoS, garantizando la disponibilidad e integridad de nuestros servicios.

Los clientes tienen la opción de reforzar la seguridad de sus tiendas contratando un WAF (Web Application Firewall) al adquirir el producto add-on VTEX Shield además de las medidas de protección estándar implementadas por VTEX. Un WAF ofrece una capa de protección adicional y ayuda a filtrar y bloquear tráfico malicioso antes de que llegue a la tienda. Esta solución personalizada permite que los clientes adopten las medidas de seguridad que satisfagan sus necesidades específicas y garanticen una protección más robusta contra posibles ciberataques. Adquirir VTEX Shield permite a los retailers garantizar una protección completa y proactiva para sus tiendas online y tener mayor tranquilidad y confianza en sus negocios digitales.

### ¿Cuenta VTEX con un IDS (sistema de detección de intrusiones) y un IPS (sistema de prevención de intrusiones)? En caso afirmativo, ¿con qué frecuencia se revisan las reglas?

Sí, la solución VTEX incluye sistemas IDS e IPS. Estos sistemas juegan un papel fundamental en la detección y prevención de actividades maliciosas en nuestra infraestructura de red y otros sistemas.

Las reglas IDS e IPS se revisan periódicamente para garantizar que se ajustan a las amenazas y vulnerabilidades más recientes. La revisión se lleva a cabo con bastante frecuencia y es parte integral de nuestro proceso de seguridad. El objetivo es mantener nuestros sistemas actualizados y protegidos contra las técnicas de ataque más recientes y vulnerabilidades emergentes.

La práctica de revisión constante de las reglas IDS e IPS refleja nuestro compromiso con la seguridad y protección de los datos de nuestros clientes, garantizando que siempre estamos adelantados a la constante evolución de las ciberamenazas.

## Gestión de vulnerabilidades

### ¿Cuál es el plazo de corrección de vulnerabilidades?

Elaboramos nuestro procedimiento de gestión de vulnerabilidades cuidadosamente para garantizar la eficaz corrección de posibles fallos de seguridad. Tenemos políticas internas establecidas que definen el plazo de corrección tomando en cuenta la criticidad y complejidad de las vulnerabilidades identificadas. El plazo varía para garantizar que se les asigne mayor prioridad a las vulnerabilidades más críticas y urgentes y, por otro lado, que las menos graves se atiendan adecuadamente sin comprometer la seguridad del sistema. De esta forma, podemos gestionar los riesgos de seguridad con mayor eficiencia y mantener nuestros sistemas protegidos contra posibles amenazas.

### ¿Permite VTEX que los clientes realicen verificaciones de vulnerabilidad mediante escaneos y pruebas de penetración (pentests) independientes preestablecidas por un consultor independiente?

Las instancias de VTEX están alojadas en la infraestructura de AWS, lo que impide la realización de auditorías personales de los sistemas. AWS cuenta con estrictos [programas de conformidad (compliance)](https://aws.amazon.com/es/compliance/programs/) para garantizar la seguridad de las instancias.

VTEX no autoriza el acceso a las instalaciones o archivos para la realización de auditorías en nuestros sistemas y procedimientos internos. En su lugar, VTEX recibe informes de una empresa auditora especializada e independiente. Para demostrar nuestro cumplimiento y compromiso con la privacidad, seguridad, compliance y gobernanza, VTEX divulga sus documentos, políticas y certificaciones en un [portal de seguridad](https://vtex.com/mx-es/trust/). Asimismo, como parte del compromiso permanente con la seguridad, VTEX siempre busca obtener nuevas certificaciones.

Los clientes tienen permiso para realizar[ escaneos de vulnerabilidad](https://help.vtex.com/es/tutorial/testes-de-penetracao-e-aviso-de-vulnerabilidade--6jodF6s1I50Fg84ZwutOCb#reportar-vulnerabilidade) en sus propios entornos, bajo dos condiciones: no realizar ataques reales que puedan impactar el sistema de producción y no intentar acceder a datos que no sean de su propiedad.

### ¿Cómo se lleva a cabo la gestión de vulnerabilidades en términos concretos? ¿El proceso está documentado? ¿En qué medida se gestionan y corrigen las vulnerabilidades identificadas?

Los escaneos de vulnerabilidad son realizados de forma continua por un grupo restringido de individuos autorizados utilizando sistemas aprobados y dedicados. Cuando se detectan vulnerabilidades en el sistema o software, accionamos un proceso de gestión de parches para realizar las correcciones necesarias. Nuestro equipo coordina efectivamente la participación de todos los desarrolladores responsables para apoyar la reproducción y, de ser necesario, el desarrollo de parches de seguridad. Después de la implementación de las correcciones, realizamos pruebas adicionales para garantizar la eficacia de las soluciones. Si los resultados son positivos, cerramos el caso y llevamos a cabo un análisis similar a la etapa de gestión de problemas, de ser necesario.

## Monitoreo de seguridad

### ¿Están protegidos los logs del sistema contra alteraciones, falsificaciones o accesos indebidos?

Nuestras aplicaciones cuentan con sistemas de registro de auditoría que capturan y almacenan logs relevantes para garantizar compliance con nuestras normas internas y leyes aplicables. Los logs abarcan una variedad de eventos, incluyendo eventos de seguridad, privacidad y autenticación (inicios de sesión fallidos y exitosos y bloqueos de cuenta), de acuerdo con los requisitos normativos; además de los eventos básicos para nuestros análisis internos. De este modo, mantenemos un registro completo y detallado de todas las actividades relevantes en la plataforma y garantizamos la transparencia, seguridad y compliance en nuestras operaciones.

### ¿VTEX registra eventos de seguridad?

Nuestra organización utiliza una herramienta para centralizar los registros de actividad, así como para implementar recursos SIEM (Security Information and Event Management). Por lo general, los registros se conservan durante un periodo de 18 meses. Tanto las soluciones propias como las proporcionadas por AWS se utilizan para analizar continuamente la seguridad y examinar las vulnerabilidades en la nube. Estas herramientas se utilizan por lo menos trimestralmente.

El equipo de VTEX es responsable de disponibilizar y mantener la solución actualizada con nuevas funcionalidades, además de monitorear todo su funcionamiento. También contamos con un equipo especializado que garantiza la capacidad de escalar la solución en periodos estacionales o durante un aumento en la demanda y continuamente monitorea el desempeño de las tiendas con base en una heurística propia.

### ¿Protege VTEX el servidor de email contra spoofing (suplantación de identidad)?

VTEX utiliza Google Workspace como su principal herramienta de comunicación. Para reforzar la seguridad de nuestro servidor de email contra falsificaciones, implementamos medidas como SPF (Sender Policy Framework) y DKIM (DomainKeys Identified Mail). SPF establece una lista de servidores y dominios autorizados para enviar emails a nombre de nuestra organización, mientras que DKIM agrega una firma digital única a cada mensaje enviado. Estas medidas garantizan que los servidores de destino puedan autenticar el origen de los mensajes, lo que ofrece una capa de protección adicional contra posibles actividades fraudulentas. El equipo de seguridad de VTEX es el único que gestiona estas configuraciones.

### ¿Se protegen los endpoints con antivirus?

Contamos con una sólida tecnología antivirus que integramos con todos nuestros endpoints y servidores. Esto es imprescindible para reforzar la seguridad no solo de nuestra infraestructura, sino también para proteger la información y datos sensibles de nuestros clientes. Al hacer obligatoria la instalación de antivirus en todos los dispositivos y servidores, mitigamos de forma proactiva las posibles ciberamenazas, garantizando así una experiencia segura y fiable para todos los que participan en nuestras operaciones.

## Respuesta y mitigación de incidentes

### ¿El plan de respuesta ante incidentes establece criterios de notificación?

Sí, como parte de nuestros protocolos operativos, nos comprometemos a notificar a los clientes afectados dentro de un plazo máximo de 24 horas tras confirmar cualquier incidente de seguridad. Esto es importante para garantizar la transparencia y proporcionar la información necesaria a nuestros clientes para que puedan tomar medidas apropiadas para proteger sus datos y sistemas. Además, al divulgar la información de incidentes de seguridad con prontitud, demostramos nuestro compromiso continuo con la ciberseguridad y la confianza de nuestros clientes.

## Recuperación ante desastres y continuidad de negocio

### ¿Cuál es el RPO (Recovery Point Objective) y el RTO (Recovery Time Objective) de la recuperación ante desastres?

El RPO es la antiguedad máxima de los datos de copia de seguridad antes de que se consideren obsoletos y está directamente relacionado con la política de retención de copia de seguridad. En VTEX, el RPO estándar es de 24 horas. Sin embargo, es importante resaltar que este plazo se refiere a la frecuencia de las copias de seguridad de Catálogo; en los sistemas transaccionales como Checkout, el punto de recuperación es la última transacción guardada.

El RTO es el tiempo máximo permitido para que se restauren los servicios. El tiempo de inactividad de un servicio puede ser ocasionado por una interrupción de la aplicación, corrupción o pérdida de datos, fallos del servidor o interrupción en la zona o región de disponibilidad de AWS. Consulta el RTO estándar por tipo de inactividad en la siguiente tabla:

| Tipo de inactividad | RTO estándar |
|---|---|
| Interrupción de la aplicación | 10 minutos |
| Corrupción o pérdida de datos | 30 minutos |
| Fallo del servidor de datos | 1 hora |
| Interrupción de la zona de disponibilidad de AWS | 4 horas |
| Interrupción en la región de AWS | 24 horas |
