---
title: 'FAQ - Seguridad 2'
id: 1ayXEtqawI9yuxFXutiITh
status: DRAFT
createdAt: 2022-05-26T13:33:48.633Z
updatedAt: 2022-08-22T12:33:50.220Z
publishedAt: 
firstPublishedAt: 2022-06-09T22:09:20.893Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: faq-seguridad-2
locale: es
legacySlug: faq-seguridad-2
subcategory: 
---

# FAQ - Seguridad 2

Temas:
- [Controles criptográficos](#controles-criptograficos)
- [Clasificación y protección de datos](#clasificacion-y-proteccion-de-datos)
- [Segregación de entornos](#segregacion-de-entornos)
- [Seguridad de la red](#seguridad-de-la-red)
- [Arquitectura de seguridad](#arquitectura-de-seguridad)
- [Seguridad física y centro de datos](#seguridad-fisica-y-centro-de-datos)
- [Gestión de vulnerabilidades](#gestion-de-vulnerabilidades)
- [Monitoreo de seguridad](#monitoreo-de-seguridad)
- [Respuesta y mitigación de incidentes](#respuesta-y-mitigacion-de-incidentes)
- [Recuperación ante desastres y continuidad de negocio](#recuperacion-ante-desastres-y-continuidad-de-negocio)

Ver más temas en la parte 1 de este FAQ. Ingrese su [nombre de cuenta](https://help.vtex.com/es/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC#) VTEX para acceder a la documentación.
<iframe src="https://help.vtex.com/insertaccountname?id=7AmPOGXykmE9SYyYDzdAZ4" title="Ingrese su nombre de cuenta y haga click en el botón." frameBorder="0" width="400" height="50"></iframe>

## Controles criptográficos

### Proporcionar una lista de todas las opciones de criptografía configurables y los niveles de encriptación que permite la solución.

VTEX ha establecido normas de criptografía para todos sus clientes, tanto para los datos en reposo como para los datos en tránsito. Los datos en tránsito requieren TLS 1.2 o superior para garantizar que solo se utilizan métodos de encriptación seguros. Este canal es la mejor opción para proteger este tipo de información, ya que este enfoque simplifica la implementación al no hacer recaer demasiada responsabilidad en los clientes que pueden variar desde servicios pesados ​del lado del servidor hasta aplicaciones de JavaScript de navegador ligeras. Al trabajar con el almacenamiento o los datos en reposo, VTEX puede utilizar uno de los siguientes algoritmos para soportar las aplicaciones que necesitan encriptar los datos:
- Encriptación bidireccional
RSA con claves de 2048 bits
AES-256

- Encriptación unidireccional
PBKDF2 basada en SHA-256 

### ¿Se guardan las claves de encriptación en un lugar seguro?

Las claves de encriptación son proporcionadas por el servicio de AWS. Las claves de acceso se almacenan en un entorno segregado con la debida protección criptográfica. Por ejemplo, las contraseñas de acceso tienen su hash calculado (algoritmo PBKDF2 basado en SHA-256) y solo se almacena este valor. 

## Clasificación y protección de datos
### ¿Utiliza VTEX la anonimización de datos?

En cuanto a la anonimización de los datos, VTEX ha estado utilizando la tokenización como mecanismo para sustituir cualquier dato sensible por otro valor. Básicamente, los datos originales son completamente irrecuperables. 

## Segregación de entornos
### ¿Hay segregación de entornos dentro de la empresa?

Nuestro entorno es un entorno de nube multiusuario que se usa para diferentes funcionalidades y módulos de nuestra plataforma. La plataforma implementa un proceso y una arquitectura de alto nivel para la segregación lógica, lo que significa que, en circunstancias comunes, el software, la información y los datos proporcionados por el cliente no se comparten entre sí. En términos de producción x etapa x preproducción y/u otros entornos, aplicados a diferentes etapas de nuestro DLC, mantenemos entornos segregados a nivel de cuenta. Además, VTEX opera 100 % en la nube de AWS. Nuestra infraestructura está segmentada a través de subredes VPC (Amazon Virtual Private Cloud), grupos de seguridad y ACL. Asimismo, cualquier acceso al entorno de producción se realiza a través de una VPN (Virtual Private Network). 

## Seguridad de la red
### ¿Están las redes de producción internas segregadas de alguna manera, por ejemplo, mediante la restricción y/o filtrado del tráfico entre redes? Si es así, explicar.

Las redes de producción están completamente aisladas de las redes externas. Los colaboradores de VTEX encargados del funcionamiento de los entornos de producción pueden necesitar una eventual conexión VPN (Virtual Private Network) para acceder a la red de producción. Los load balancers de acceso externo son los únicos objetos a los que se accede a través de la zona DMZ y las capas de la plataforma y la base de datos residen en subredes separadas de la zona DMZ y tienen capas de protección para que se pueda acceder a ellas. 

### ¿Utiliza VTEX la protección de acceso a la red mediante firewalls implementados?

Sí, además de los firewalls locales del sistema operativo en los servidores, contamos con los grupos de seguridad de AWS, la configuración del ELB y el enrutamiento VPC para obtener la funcionalidad del firewall. Como la implementación de nuestras aplicaciones se realiza de forma automática y todos los logs se recopilan y concentran, ni siquiera nuestro personal necesita acceder diariamente a nuestros servidores. El acceso habitual al entorno de producción se produce mediante la consola de AWS o nuestras propias aplicaciones web y API. Por esta razón, nuestros grupos de seguridad y ELB están configurados para que solo se permita el acceso HTTP y HTTPS para los ELB que exponen cualquier recurso publicado. Cuando se requiera un posible acceso adicional, se puede solicitar y poner a disposición temporalmente para el propósito específico. 

### Definir los controles que VTEX utiliza para mitigar los ataques DDoS (Distributed Denial of Service).

La defensa contra los ataques DDoS y de fuerza bruta se realiza en dos capas. Se compone de una capa a nivel de CDN y una regla de limitación adaptativa que se implementa en el proxy frontal que se sitúa delante de cada uno de los microservicios VTEX. Los ataques DDoS también son mitigados por AWS Shield. 

### ¿Tiene la solución IDS y IPS? Si es así, ¿con qué frecuencia se revisan las reglas IDS / IPS?

Utilizamos la herramienta Lacework como solución IDS/IPS. La herramienta no está basada en reglas, sino que realiza la detección de intrusiones mediante machine learning. El método de Lacework se basa en generar modelos en función de los accesos comunes (que se producen a diario) y notificar en caso de accesos «diferentes». Gracias a esto, no necesitamos crear reglas: las reglas se crean automáticamente dado el uso de la plataforma. 

## Arquitectura de seguridad
### ¿Cómo funciona el proceso de «hardening»?

VTEX siempre crea sus entornos utilizando la última AMI (Amazon Machine Image) proporcionada por AWS para cada servicio de implementación, ya sea Elastic Beanstalk, OpsWorks o simplemente Cloud Formation. Así, aprovechamos la protección de seguridad que AWS proporciona a las instancias implementadas por sus servicios y complementamos las configuraciones de seguridad con nuestros procesos de hardening específicos para cada activo. 

### Proporcionar detalles técnicos sobre los recursos de seguridad de la infraestructura que hospeda la plataforma.

La plataforma VTEX es una solución SaaS (Software as a Service) y está hospedada en un entorno controlado y que tiene controles de seguridad implementados, incluyendo: protección de la red (filtrado y protección del tráfico entrante y saliente, WAF, monitoreo automatizado en tiempo real y alertas de entorno), línea base, hardening de los activos y controles de acceso físicos y lógicos, y todos los demás controles necesarios para garantizar que la plataforma sea cada vez más segura y esté en cumplimiento. 

### Explicar cómo funciona la configuración inicial de seguridad de la solución.

De forma estándar, el entorno y las instancias implementadas que recibirán los requests de los usuarios empresariales ya estarán protegidos, ya que se comparten entre todos los usuarios empresariales y se implementan según nuestro proceso automatizado.
La configuración del entorno del usuario empresarial también puede afectar la seguridad; y hay documentación disponible para garantizar que se aplique la configuración adecuada en https://help.vtex.com/.  

## Seguridad física y centro de datos
### ¿Tiene VTEX medidas de seguridad para la protección física de los dispositivos y equipos de la red?

VTEX es una empresa de 100 % comercio en la nube (AWS) y no dispone de ningún servidor/máquina física para prestar los servicios.
Nuestros datos y los de nuestros clientes están hospedados en Amazon (Amazon Web Services), un proveedor de servicios de infraestructura de nube pública. VTEX tiene acuerdos con estos proveedores para garantizar una línea base de seguridad física y protección ambiental para ejecutar nuestros servicios. Puedes consultar todos los controles de seguridad físicos que AWS ofrece en el siguiente link: https://aws.amazon.com/pt/compliance/data-center/controls/. 

### ¿Cómo aplica VTEX las medidas de seguridad física para proteger el centro de datos?

VTEX es una empresa de 100 % comercio en la nube que utiliza AWS como proveedor de centro de datos. AWS opera sus centros de datos de acuerdo con las pautas Tier III+ (https://aws.amazon.com/es/compliance/uptimeinstitute/). Acerca de la seguridad de oficinas: VTEX tiene oficinas en todo el mundo. Tenemos un control de seguridad física como monitoreo y control de acceso en todas las oficinas de VTEX. El acceso físico está controlado en los puntos de entrada del edificio por el equipo de seguridad profesional que utiliza sistemas de vigilancia como torniquetes de acceso y otros medios electrónicos. Este equipo registra las salidas y entradas de las personas autorizadas a través de registros. 

Las oficinas disponen de cámaras de circuito cerrado de televisión (CCTV). Las imágenes se mantienen de acuerdo con los requisitos legales y de cumplimiento. También disponemos de energía y extinción de incendios que corresponden con las medidas más avanzadas del sector para ayudar a evitar fallos y sobrecargas eléctricas. 

### ¿En qué países y lugares se encuentran los centros de datos?

VTEX utiliza principalmente las siguientes regiones de datos dentro de AWS para cada propósito respectivo:
 - AWS Northern Virginia: almacenamiento de datos primarios.
 - AWS Northern California: ubicación de copia de seguridad. 

## Gestión de vulnerabilidades
### ¿VTEX permite a los clientes realizar verificaciones de vulnerabilidad mediante escaneos y pruebas de penetración (pentests) independientes preestablecidos por un consultor independiente?

Como las instancias de VTEX están hospedadas en la infraestructura de AWS, no es posible realizar auditorías personales de los sistemas. AWS cuenta con varios programas de conformidad (https://aws.amazon.com/compliance/programs/) que garantizan que las instancias se mantienen en un entorno seguro. VTEX no permite el acceso a las instalaciones y archivos con el fin de realizar auditorías de los sistemas y procedimientos internos. VTEX cuenta con informes elaborados por una empresa auditora independiente. Para demostrar el cumplimiento y el compromiso de la empresa con la privacidad, seguridad, cumplimiento y gobernanza, hay documentos, políticas y certificaciones disponibles en: https://vtex.com/us-en/trust/. Además, reforzando su compromiso de garantizar una infraestructura segura para sus clientes, VTEX siempre está en búsqueda de nuevas certificaciones.

En cuanto a los escaneos de vulnerabilidad, el cliente puede realizar estas pruebas en su entorno en cualquier momento, siempre que se cumplan dos condiciones:
- El cliente no puede utilizar ataques reales para intentar hacer fallar los sistemas de producción.
- El usuario empresarial no puede intentar acceder a datos que no le pertenezcan. 

### VTEX realiza regularmente escaneos de vulnerabilidad, ¿con qué periodicidad se realizan?

Las verificaciones de vulnerabilidad se realizan de forma continua. Cada una debe repetirse hasta que se superen sin que se observen problemas para ser aceptadas por el auditor durante nuestros periodos de recertificación. 

### Explicar el proceso de divulgación de las vulnerabilidades de la plataforma a los clientes, en particular, ¿cómo y cuándo se notifica a los clientes y qué información se comparte?

VTEX cuenta con un plan de gestión de vulnerabilidades documentado que incluye alertas automáticas e ingenieros de guardia para mitigar cualquier problema que surja. Además de la mitigación inmediata, se recopilan todos los detalles relacionados a un incidente y se comparten con los usuarios empresariales afectados lo antes posible, incluyendo un cronograma de eventos, las acciones tomadas y los posibles riesgos. 

### ¿Cuál es el plazo de corrección de vulnerabilidades?

Nuestro procedimiento de gestión de vulnerabilidades establece un plazo de corrección que varía según la criticidad de la vulnerabilidad. 

### ¿Cómo se lleva a cabo la gestión de vulnerabilidades en términos concretos? ¿El proceso está documentado? ¿En qué medida se gestionan y corrigen las vulnerabilidades identificadas?

Los escaneos de vulnerabilidad se realizan de forma continua, están restringidos a un número autorizado de personas y utilizan sistemas aprobados y dedicados. Las vulnerabilidades del sistema y del software se corrigen mediante un proceso de gestión de parches. El equipo asegura la coordinación entre todos los desarrolladores implicados y ayuda a reproducir y, si es necesario, desarrollar un parche de seguridad. Después de la implementación, se realiza otra prueba para garantizar que la corrección sea efectiva. Si se obtienen resultados positivos, se cierra el caso y, si es necesario, se crea una análisis forense de forma similar a la fase de gestión de problemas. Además, nuestros clientes pueden realizar escaneos de vulnerabilidades cuando lo consideren necesario y compartir el resultado con VTEX para ayudar a mitigar las vulnerabilidades encontradas. El tiempo exacto requerido varía según la vulnerabilidad. Algunos sistemas sensibles también cuentan con IDS y antivirus para la detección y gestión de incidentes. Muchos administradores de la tienda también encargan sus propias pruebas de penetración de forma regular, lo que significa que la plataforma VTEX se prueba a fondo varias veces al mes. Después de las pruebas de penetración, llevamos a cabo planes de acción para mitigar cualquier problema. 

### Explicar el proceso de divulgación de vulnerabilidades de la solución para los clientes, en particular, ¿cómo y cuándo se notifica a los clientes y qué información se comparte?

VTEX cuenta con un plan de gestión de vulnerabilidades documentado que incluye alertas automáticas e ingenieros de guardia para mitigar cualquier problema que surja. Además de la mitigación inmediata, se recopilan todos los detalles relacionados a un incidente y se comparten con los usuarios empresariales afectados lo antes posible, incluyendo un cronograma de eventos, las acciones tomadas y los posibles riesgos. 

### ¿Las personalizaciones o configuraciones del producto realizadas por los clientes podrían introducir vulnerabilidades de seguridad en la plataforma? Si es así, ¿cómo se gestionan estas eventualidades?

Los clientes pueden realizar cualquier tipo de personalización y/o adaptación de la plataforma en su entorno. 
Nuestro equipo de seguridad y desarrollo se ocupa de las vulnerabilidades de los sistemas VTEX de forma ágil. Cabe mencionar que como la plataforma es personalizable, las vulnerabilidades que impliquen personalizaciones realizadas durante el desarrollo de la plataforma son responsabilidad del cliente.  

## Monitoreo de seguridad
### ¿Guarda la empresa logs de las solicitudes de acceso?

Todos los cambios en el entorno de producción se autentican, registran y auditan a través de AWS Cloudtrail. Disponemos de un proceso de gestión de accesos que incluye el acceso a los entornos de producción y relacionados. Otras líneas base de seguridad, como la segregación de entornos y la autenticación de dos factores forman parte de algunos sistemas y se están extendiendo a todos los sistemas VTEX.

### ¿Registra la empresa los eventos de seguridad?

Utilizamos una herramienta para centralizar los logs, y también como una forma de implementar las funcionalidades de SIEM. Los logs suelen conservarse por 18 meses. Utilizamos las soluciones internas y de AWS como herramientas de análisis de seguridad continuo y análisis de vulnerabilidad en la nube. Cuando no es continuo, el uso de estas herramientas es al menos trimestral como mínimo.  VTEX se encarga de proporcionar y actualizar periódicamente la solución con nuevas funcionalidades y de monitorear por completo su funcionamiento. Además, hay un equipo especializado que garantiza el escalamiento potencial de la solución en acciones estacionales o de aumento de la demanda y un monitoreo constante del rendimiento en la tienda basado en una heurística propia.

### ¿Protege el servidor de email contra spoofing?

VTEX utiliza Google Workspace como herramienta de comunicación. Para proteger nuestro servidor de email contra la falsificación, hemos configurado tanto el SPF, que especifica los servidores y dominios autorizados para enviar emails a nombre de nuestra organización, como el DKIM, que añade una firma digital a cada mensaje enviado. De este modo, los servidores de destino pueden confirmar que el mensaje procede de nuestra organización. 

### ¿Se utiliza antivirus en el entorno corporativo?

Sí, tenemos tecnología antivirus y la exigimos en todos los endpoints y servidores para garantizar nuestra seguridad y la de nuestros clientes. 

## Respuesta y mitigación de incidentes
### ¿Hay un plan formal de respuesta a incidentes?

Sí, VTEX tiene un procedimiento de respuesta a incidentes de seguridad documentado que cubre las principales etapas del proceso: preparación, identificación del incidente, contención, erradicación, recuperación y postincidente. El procedimiento también contempla un plan de comunicación que se aplica a todas las etapas de respuesta. También disponemos de playbooks de asistencia y pruebas de invasión anuales (gray box).  

### ¿Exige el plan de respuesta a incidentes que se notifique al tercero cuando se confirme el acceso no autorizado a los sistemas y datos con alcance?

Sí, tenemos un plazo de 24 horas para notificar a los clientes afectados por incidentes de seguridad. 

### ¿Tiene la empresa un programa de pruebas de penetración? ¿Con qué frecuencia?

Las pruebas se realizan anualmente en la empresa. Además, los clientes tienen derecho a realizar pruebas de penetración y escaneos de vulnerabilidad en su entorno cuando lo deseen y siempre que se notifique previamente. Puedes compartir los resultados con VTEX para que podamos resolver cualquier posible problema. Por razones de seguridad, no compartimos los resultados de nuestras pruebas de penetración. 

### ¿Cuenta VTEX con un procedimiento de respuesta a incidentes relacionados con la fuga de datos y que cumpla con las leyes de protección de datos personales?

VTEX tiene implementado un procedimiento interno de respuesta a incidentes con datos personales. Este procedimiento determina las reglas para la detección, verificación, investigación, clasificación, notificación y remediación de este tipo de incidentes. 

### Definir los controles que la empresa utiliza para mitigar los ataques de ransomware.

Utilizamos varias soluciones de monitoreo que generan alertas que son monitoreadas 24x7 por un equipo cualificado y capacitado para que cualquier mitigación necesaria pueda ser ejecutada en el mismo momento en que una sospecha haya sido identificada. Además, realizamos escaneos de vulnerabilidades en nuestro entorno trimestralmente y encargamos una prueba de penetración anual con el objetivo de mitigar las vulnerabilidades. Para el ransomware, específicamente, también empleamos estrategias de seguridad de respaldo. 

### ¿Qué medidas se toman en caso de robo de las credenciales de un cliente (detección, revocación, pruebas para actuar)?

En cuanto detectamos un posible incidente, contamos con profesionales que están siempre en alerta para atender al cliente perjudicado por el incidente y ponemos en marcha rápidamente las acciones internas relacionadas con este tipo de incidentes (clasificación del incidente, plan de respuesta, plan de comunicación, etc.). Esto es posible porque tenemos un equipo de seguridad de guardia disponible 24x7 que presta servicio en diferentes zonas horarias. 

### ¿Cómo se gestionan los incidentes en el ámbito de la comunicación con los clientes (email, teléfono, portal web)?

Disponemos de un procedimiento de respuesta a incidentes. Actuamos de forma rápida y eficaz para que los servicios de nuestros clientes no estén indisponibles. Informamos a nuestros clientes a través del portal VTEX y, en casos puntuales de mayor atención, mediante un comunicado posterior al incidente. 

## Recuperación ante desastres y continuidad de negocio
### ¿Dispone VTEX de un plan de continuidad de negocio? 

VTEX cuenta con un plan de continuidad de negocio diseñado para preparar a la empresa para hacer frente a los efectos de una emergencia. El objetivo es que la existencia de este documento proporcione la base para un retorno relativamente rápido y fácil al funcionamiento ordinario de nuestro negocio, independientemente de la causa. 

### ¿Tiene VTEX un plan de recuperación ante desastres?

VTEX cuenta con un plan de recuperación ante desastres centrado en garantizar la continuidad de las operaciones y la disponibilidad de los recursos críticos en caso de desastre. 
Nuestro plan contiene instrucciones sobre qué acciones tomar y cómo responder a incidentes no planificados y caracterizados como crisis. Estos incidentes pueden estar relacionados con desastres naturales, ciberataques y cualquier otro evento disruptivo. Nuestro plan cuenta con importantes etapas de recuperación, como la definición de los indicadores RPO y RTO y las pruebas de copia de seguridad. 

### ¿Cuál es el RTO (Recovery Time Objective) y el RPO (Recovery Point Objective) de la recuperación ante desastres?

El RPO es la edad máxima de los datos de la copia de seguridad antes de que dejen de ser útiles. Está directamente relacionado con la política de retención de copias de seguridad. El RPO de referencia para VTEX es de 24 horas. Sin embargo, este plazo es el RPO general de la plataforma y se refiere a la frecuencia de las copias de seguridad del catálogo de productos. Los sistemas transaccionales, como Checkout, utilizan enfoques que pueden llevar el punto de recuperación a la última transacción guardada. El RTO es el tiempo máximo que debe transcurrir para que se reanuden los servicios normales. El tiempo de inactividad del servicio puede estar relacionado con la interrupción de la aplicación, la corrupción o pérdida de datos, el fallo del servidor de datos o la interrupción de la zona o región de disponibilidad de AWS. El RTO de línea base para VTEX es:
- Interrupción de la aplicación: 10 minutos.
- Corrupción de datos / pérdida de datos: 30 minutos.
- Fallo del servidor de datos: 1 hora.
- Interrupción de la zona de disponibilidad de AWS: 4 horas.
- Interrupción en la región de AWS: 24 horas. 

### ¿Cuáles son las tecnologías utilizadas en VTEX para el debido monitoreo y alertas en caso de indisponibilidad de la plataforma?

Somos una plataforma de comercio en la nube 100 % hospedada en AWS. En nuestra arquitectura de recuperación ante desastres hemos establecido una relación de dependencia con el proveedor de la nube. Para apoyarnos en el proceso de RD contamos con VTEX Healthcheck, un robot que actúa como cliente de la tienda, navegando y comprando, a través de diferentes escenarios de uso. Por lo tanto, nuestra tecnología de monitoreo con VTEX Healthcheck nos ayuda a identificar posibles fallos e indisponibilidades, y si se producen más de tres fallos consecutivos nuestras alertas se activan y los equipos responsables actúan para verificar e identificar la causa. 
Además, tenemos una capa adicional, VTEX Store Dash, que monitorea la navegación real y los datos de pedidos recopilados de todas las tiendas atendidas por VTEX. Una caída repentina del contador de pedidos por segundo indica un posible problema con la plataforma y se activan alertas para que los equipos encargados realicen una verificación.  

### ¿Prueba VTEX periódicamente el plan de recuperación ante desastres?

El plan de recuperación ante desastres se pone a prueba al menos una vez al año para que sea eficaz cuando se necesite. No es necesario probar todo el plan en un solo evento. Los diferentes componentes o procesos con ciclos de vida independientes pueden probarse de acuerdo con su relevancia y recurrencia necesaria. Sin embargo, cada una de estas partes debe ser probada con la frecuencia anual requerida. Si alguna parte del plan resulta ineficaz, deberá elaborarse una nueva versión del proceso para solucionar el problema. Los eventos previos a Black Friday y a CyberMonday son la oportunidad habitual para realizar rutinas de pruebas de recuperación ante desastres.​​

