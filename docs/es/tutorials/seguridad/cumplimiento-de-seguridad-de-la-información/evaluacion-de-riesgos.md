---
title: 'Evaluación de riesgos'
id: 4K97IpqkpCpDYsZOSxtfkX
status: PUBLISHED
createdAt: 2022-05-26T13:08:53.479Z
updatedAt: 2025-10-24T23:03:49.398Z
publishedAt: 2025-10-24T23:03:49.398Z
firstPublishedAt: 2022-05-26T13:17:48.374Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: risk-assessment
legacySlug: el-proceso-de-risk-assessment
locale: es
subcategoryId: vONCJSxwN5qZiElOEtKkH
---

El proceso de evaluación de riesgos (risk assessment) es fundamental para el correcto funcionamiento de un programa de gestión de riesgos de proveedores. Este proceso se compone de cuestionarios de evaluación de riesgos de terceros diseñados para ayudar a una organización a identificar potenciales riesgos entre sus proveedores y partners terceros.

Los cuestionarios se envían a VTEX con el fin de:
* Evaluar si VTEX cumple los requisitos de seguridad establecidos por el cliente.
* Registrar detalles técnicos sobre la arquitectura de seguridad.
* Evaluar los posibles riesgos de la plataforma.

Para proporcionar más información acerca de las evaluaciones de riesgo realizadas por los clientes, VTEX ofrece páginas de preguntas frecuentes que responden las preguntas más comunes sobre la estructura y la seguridad de la plataforma.

Haz clic en los puntos a continuación para acceder a las FAQ de cada tema:
* [Políticas y compliance](#políticas-y-compliance)
* [Educación y concienciación sobre seguridad](#educación-y-concienciación-sobre-seguridad)
* [Gestión de activos](#gestión-de-activos)
* [Datos y privacidad](#datos-y-privacidad)
* [Cifrado](#cifrado)
* [Control de acceso, identificación y autenticación](#control-de-acceso-identificación-y-autenticación)
* [Seguridad de la plataforma](#seguridad-de-la-plataforma)
* [Auditoría de logs](#auditoría-de-logs)
* [Desarrollo seguro](#desarrollo-seguro)
* [Seguridad física y centros de datos](#seguridad-física-y-centros-de-datos)
* [Gestión de vulnerabilidades](#gestión-de-vulnerabilidades)
* [Respuesta y mitigación de incidentes](#respuesta-y-mitigación-de-incidentes)
* [Recuperación ante desastres y continuidad de negocios](#recuperación-ante-desastres-y-continuidad-de-negocios)

Parte de la información sobre seguridad está restringida a usuarios con acceso al Admin VTEX, por lo que no está presente en el Help Center de VTEX. Para consultar esa información, ingresa a continuación el nombre de tu cuenta VTEX:

Ingrese su [nombre de cuenta](/es/docs/tutorials/que-es-account-name) VTEX para acceder a la documentación.
<iframe src="https://vtexhelp.myvtex.com/insertaccountname?id=1ayXEtqawI9yuxFXutiITh" title="Ingrese su nombre de cuenta y haz click en el botón." frameBorder="0" width="400" height="50"></iframe>

> ⚠️ Si tiene dificultades para acceder a las preguntas frecuentes, intente instalar la última versión de la aplicación `vtex.admin-docs` usando la [CLI de VTEX](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference) y repetir el proceso.

## Preguntas frecuentes - Seguridad

### Políticas y compliance

#### ¿Dispone VTEX de una política de seguridad de la información? ¿Con qué frecuencia se revisa? ¿Esta política se ha distribuido y comunicado a toda la empresa?
VTEX adopta un enfoque riguroso en materia de seguridad de la información, revisando anualmente su política de seguridad de la información mediante un proceso de gestión de documentos. Todos los empleados aceptan formalmente esta política, que se comunica a toda la empresa a través de nuestros canales internos. La política se basa en las mejores prácticas de seguridad que están alineadas con la norma ISO/IEC 27001 y marcos de referencia reconocidos por el mercado. Además, cumple con los requisitos de las leyes de protección de datos y otras obligaciones de VTEX.

#### ¿Los controles de seguridad de la información de VTEX se someten a auditorías realizas por empresas terceras? ¿Qué certificaciones tiene VTEX?
VTEX, comprometida con la transparencia y la excelencia en sus prácticas, somete periódicamente sus controles de seguridad de la información a auditorías realizadas por profesionales independientes. Estos auditores actúan con imparcialidad y objetividad, garantizando una evaluación rigurosa y sin sesgos de las medidas aplicadas por VTEX. La importancia de esta práctica radica en la validación externa de las políticas y procedimientos, garantizando que se ajustan a las normas, marcos de gestión y mejores prácticas de seguridad. La auditoría realizada por profesionales independientes refuerza la confianza de clientes, partners y otras partes interesadas, demostrando el compromiso de VTEX con el mantenimiento de altos estándares de seguridad de la información. Actualmente contamos con las siguientes certificaciones:
* SOC 1 - Tipo 2: informe de control interno sobre sistemas de información financiera.
* SOC 2 - Tipo 2: informe que abarca la seguridad, disponibilidad, integridad, confidencialidad y privacidad.
* PCI DSS: validación de controles para proteger los datos del titular de la tarjeta y reducir el fraude de tarjetas de crédito.

Todas estas certificaciones están disponibles en la página [Compliance](https://vtex.com/mx-es/compliance/) en [Trust Hub](https://vtex.com/mx-es/trust/). Además, en calidad de empresa de capital abierto, VTEX aplica los controles exigidos por la ley SOX (Sarbanes-Oxley).

#### ¿Quién es el responsable de gestionar el programa de seguridad de la información de VTEX?
En nuestra organización, tenemos líderes ejecutivos a cargo del programa de seguridad de la información, así como un delegado de protección de datos (DPO) encargado de coordinar el programa de privacidad. Los equipos, formados por ingenieros y analistas altamente especializados en seguridad de la información, están estructurados de forma específica para brindar soporte a los procesos clave de seguridad.

#### En materia de ciberseguridad, ¿las políticas de seguridad de la información se analizan críticamente y se mantienen para que las obligaciones legales, reglamentarias o contractuales aplicables se cumplan? ¿Con qué frecuencia se revisan?
Nuestras políticas y procedimientos de seguridad de la información se han elaborado sobre la base de las mejores prácticas y directrices del mercado, como la norma ISO/IEC 27001. Utilizamos herramientas internas de VTEX para gestionar estos instrumentos, y garantizamos su idoneidad a través de revisiones anuales llevadas a cabo por líderes y especialistas en seguridad.

#### ¿Cómo se gestiona el calendario de auditorías y certificaciones de VTEX?
VTEX cuenta con un equipo especializado en seguridad dedicado a gestionar las certificaciones, garantizando el cumplimiento de todos los requisitos necesarios. Este equipo trabaja para garantizar que todas las certificaciones aplicables se obtengan y renueven de manera eficaz, reforzando el compromiso de la empresa con los más altos estándares de seguridad.

#### ¿Cuántas personas forman el equipo de seguridad de la información?
VTEX cuenta con un equipo formado por gerentes, ingenieros y analistas altamente especializados en seguridad de la información. Nuestro equipo está estructurado de manera organizada y se compromete a brindar soporte en los procesos principales de seguridad. El equipo de seguridad opera en régimen de disponibilidad 24 horas al día, los 7 días de la semana, y con presencia en diferentes zonas horarias, garantizando una cobertura continua que va más allá del horario comercial.

Además del equipo de seguridad de la información, otros equipos de VTEX también cuentan con personas específicamente asignadas para actuar en los procesos de seguridad, lo que demuestra el compromiso global de la organización con la integridad y protección de los datos.

#### ¿Las políticas y controles de seguridad de la información se aplican contractualmente a los proveedores terceros?
Todos los proveedores y partners que participan en el procesamiento de nuestros datos o los de nuestros clientes están sujetos a acuerdos contractuales que incluyen cláusulas de seguridad. Estos contratos establecen directrices y requisitos específicos para garantizar una adecuada protección de datos, asegurando el compromiso de todas las partes con los más altos estándares de seguridad de la información. Aprende más sobre nuestros [proveedores terceros de infraestructura](https://vtex.com/mx-es/privacy-and-agreements/subprocessors/).

### Educación y concienciación sobre seguridad

#### ¿Dispone VTEX de procesos y procedimientos de concienciación de seguridad informática?
VTEX cuenta con varios programas de capacitación recurrentes en seguridad de la información:
* Onboarding de seguridad para todos los nuevos empleados, que abarca temas como la estructura del equipo de seguridad, canales de comunicación, documentos normativos, políticas, herramientas aprobadas y obligaciones externas, buenas prácticas de seguridad, contraseñas seguras, ingeniería social y gestión de documentos.
* Capacitación mensual sobre las mejores prácticas de seguridad y sugerencias para las actividades del día a día.
* Reuniones globales que se repiten mensualmente sobre temas emergentes de seguridad de la información, actualizaciones e información sobre controles de seguridad y buenas prácticas de seguridad de la información.
* Envío periódico de phishing simulado, herramienta para reportar phishing y capacitación para todos los empleados que hagan clic en la simulación de phishing.
* Iniciativas presenciales sobre buenas prácticas de seguridad, controles físicos y técnicos.

También contamos con un documento con directrices sobre seguridad de la información y concienciación que describe las iniciativas mencionadas anteriormente.

#### ¿Hay capacitación técnica para el equipo de seguridad?
Se imparte capacitación interna sobre prácticas de desarrollo seguro, controles de seguridad de la información, respuesta a incidentes y otras capacitaciones que abordan el contexto técnico de la seguridad y la privacidad.

#### ¿Cuenta VTEX con un programa de concienciación enfocado en la reducción de impacto y protección contra el malware? ¿Reciben los empleados capacitación sobre este tema?
La empresa cuenta con programas internos de concienciación sobre el malware y sus posibles consecuencias. A través de comunicaciones internas y sesiones de capacitación, VTEX mantiene a todos sus empleados al tanto de los riesgos asociados al malware, cómo puede afectar a sus dispositivos y cómo identificar posibles señales de infección. Ante cualquier sospecha de presencia de malware, se ha instruido a los empleados para que contacten al equipo responsable.

Además, mantenemos la protección contra el malware mediante un monitoreo constante utilizando nuestras herramientas de seguridad. Las instancias cuentan con software antimalware que realiza un monitoreo activo del malware en los entornos de producción. Si se detecta malware, la instancia afectada se detiene para permitir que los procesos de escalado automático creen una nueva instancia limpia desde cero.

### Gestión de activos

#### ¿Cómo gestiona VTEX los activos más críticos de la organización?
Los activos se gestionan de forma centralizada a través de un sistema de gestión de inventario que almacena y monitorea el propietario, la ubicación, el status, el mantenimiento y la información descriptiva de los activos propiedad de AWS. Después de su adquisición, los activos son escaneados y rastreados y se comprueba y monitorea la propiedad, status y resolución de los activos en proceso de mantenimiento.

#### ¿Cómo realiza VTEX el inventario de los activos dentro de la empresa?
VTEX opera 100 % en la nube y es el mayor socio de AWS en América Latina. Por lo tanto, no es necesario realizar un inventario físico de los activos. Para el inventario de software utilizamos el inventario de AWS Systems Manager, que proporciona visibilidad en nuestro entorno informático de AWS. En el entorno corporativo, empleamos una solución especializada gestionar los endpoints y aplicar reglas de seguridad.

#### ¿Cómo lleva a cabo VTEX la destrucción y eliminación de sus activos (medios extraíbles, almacenamiento flash, etc.)?
Los dispositivos de almacenamiento de multimedia utilizados para almacenar los datos de los clientes se clasifican como críticos y se tratan adecuadamente, como de alto impacto, a lo largo de su ciclo de vida. Existen normas rigurosas sobre cómo instalar, mantener y finalmente destruir los dispositivos cuando ya no son útiles. Cuando un dispositivo de almacenamiento llega al final de su vida útil, se desactiva utilizando las técnicas detalladas en NIST 800-88.

### Datos y privacidad

#### ¿La empresa dispone de una política de privacidad y protección de datos? ¿Con qué frecuencia se revisa? ¿Esta política se ha distribuido y comunicado a toda la empresa?
Sí, VTEX dispone de políticas de privacidad y protección de datos, que se revisan anualmente. Las políticas de privacidad interna y externa han sido distribuidas y comunicadas a toda la empresa a través de nuestro canal de anuncios internos. La política de privacidad interna se encuentra alojada en nuestra herramienta de documentos corporativos internos para que todos los empleados puedan consultarla. Accede a la [Política de Privacidad Externa](https://vtex.com/mx-es/privacy-and-agreements/external-notice/) (External Privacy Notice).

#### ¿La organización cuenta con un DPO (Data Protection Officer) o delegado de protección de datos?

Sí, VTEX cuenta con un DPO encargado de coordinar el programa de privacidad: puedes ponerte en contacto a través del correo [dpo@vtex.com](mailto:dpo@vtex.com).

#### ¿Qué tipo de datos personales trata VTEX en nombre de sus clientes?
VTEX, como encargada del tratamiento, procesa los datos personales de los compradores solo cuando es necesario, de acuerdo con los requisitos de cada módulo de la plataforma para llevar a cabo las operaciones de ecommerce. Consulta a continuación la lista de los datos personales que pueden ser tratados por VTEX:
* Nombre
* Email
* Dirección IP
* Información de navegación ([cookies](https://vtex.com/mx-es/privacy-and-agreements/vtex-platform-cookies-information/))
* Información del carrito
* Información e historial de pedidos
* Dirección de envío
* Número de documento de identidad (cuando lo exija el país en el que opera la tienda)
* Historial de tarjeta de regalo
* Carrito abandonado
* Conversaciones de [Conversation Tracker](/es/docs/tutorials/comprendiendo-el-conversation-tracker)
* Contraseñas de sesión (cifradas)
* Tokens generados

La lista de datos anterior se encuentra detallada en el [Data Processing Addendum (DPA)](/es/tracks/datos-y-privacidad--4Lc0i0an0DgnEtB0AUwlcq/5f8hTEw3xOALgqzus9VXKd#data-processing-addendum-dpa).

#### ¿Cómo asegura VTEX el cumplimiento del Reglamento General de Protección de Datos (RGPD) y de la Ley General de Protección de Datos de Brasil (LGPD)?
VTEX se compromete a cumplir toda la normativa aplicable en materia de protección de datos, incluidos el RGPD y la LGPD. Puedes obtener más información sobre nuestras políticas, contratos y compromiso con el cumplimiento de la protección de datos en nuestro sitio web, en la página [Privacidad y Contratos](https://vtex.com/mx-es/privacy-and-agreements/).

Consulta nuestro [Data Processing Addendum (DPA)](https://vtex.com/mx-es/privacy-and-agreements/data-processing-addendum/) para entender cómo tratamos los datos personales en VTEX.

#### ¿Qué derechos de los titulares garantiza la plataforma VTEX?
VTEX actúa como encargada del tratamiento de los datos de los consumidores finales procesados por nuestros clientes (retailers). Por este motivo, VTEX no podrá responder directamente a las solicitudes de los titulares. Si el titular de datos (o sus representantes) envía una solicitud, VTEX se lo comunicará al retailer, según lo indique el propio titular.

Como responsable del tratamiento, el retailer define las bases jurídicas y los fines del tratamiento de datos. Si por razones técnicas, contractuales o legales no puedes atender la solicitud, es posible justificar el motivo de la negativa.

Si necesitas ayuda para ejercer los derechos de titulares de datos de alguno de los clientes de tu tienda, consulta [Eliminación de los datos de clientes](/es/docs/tutorials/eliminacion-de-los-datos-de-clientes).

#### ¿Dispone VTEX de una política de clasificación de la información?
VTEX ha establecido una política de clasificación de la información con el objetivo de orientar a sus empleados sobre la correcta categorización de la información, en función de su nivel de criticidad. Nuestra política tiene como objetivo garantizar la seguridad, integridad y confidencialidad de los datos de VTEX, así como ayudar a gestionar el acceso a esta información de manera apropiada. La política establece los siguientes niveles de clasificación: público, interno y confidencial, y especifica las medidas de seguridad asociadas a cada categoría.

#### ¿De qué manera los datos entran en contacto con terceros, proyectos tercerizados o subcontratados y cómo se protegen y monitorean estas interacciones?
La infraestructura de VTEX depende enteramente de proveedores terceros, lo que garantiza que los partners externos no tienen acceso a los datos de los inquilinos (tenants). Consulta la lista completa de nuestros subencargados en [Subencargados VTEX](https://vtex.com/mx-es/privacy-and-agreements/subprocessors/).

La seguridad del tratamiento y envío de datos a terceros es una prioridad fundamental para VTEX. Contamos con un enfoque integral que combina tecnología avanzada, procesos de seguridad rigurosos y capacitación continua para empleados. Utilizamos medidas tecnológicas, como el cifrado sólido, para proteger los datos durante su envío y procesamiento. Además, hemos implementado estrictos procesos de seguridad de la información y controles de acceso para garantizar que solamente tengan acceso a los datos personas autorizadas. Como parte de nuestras acciones, también realizamos inversiones continuas en actualizaciones y optimizaciones para garantizar una protección efectiva de los datos compartidos con partners terceros. Consulta [Prácticas de seguridad](https://vtex.com/mx-es/security/security-practices/) para saber más sobre nuestras medidas de seguridad vigentes.

#### ¿Se puede garantizar que los datos no migren más allá de una región geográfica definida?
Actualmente, la mayoría de los datos almacenados por VTEX se basan en AWS us-east-1. Esto significa que el cliente no puede definir la región geográfica, pero también significa que VTEX no migrará los datos fuera de esa región a menos que el cliente lo autorice.

#### ¿Utiliza VTEX la anonimización de datos?
En cuanto a la anonimización de los datos, VTEX ha estado utilizando la tokenización como mecanismo para sustituir cualquier dato sensible por otro valor. Básicamente, los datos originales son completamente irrecuperables.

#### ¿Qué puertos y protocolos utiliza VTEX para transferir datos? ¿Cómo se protegen?
VTEX no transfiere datos a través de servidores, por lo que todos nuestros datos se transfieren vía HTTPS a través del puerto 443. Todos los datos sensibles se almacenan cifrados. Los datos en tránsito se cifran con TLS 1.2 y los datos en reposo lo hacen utilizando los algoritmos AES-256 o RSA con claves de al menos 2048 bits.

### Cifrado

#### ¿Cuáles son las opciones de cifrado en tránsito y en reposo?
VTEX cuenta con estándares de criptografía definidos para todos sus clientes, tanto para datos en reposo como en tránsito. Para cumplir los requisitos de certificaciones como PCI y SOC 2, VTEX mantiene los datos de los usuarios cifrados en todo momento, tanto en almacenamiento como en tránsito.

Los datos en tránsito están protegidos por el estándar de seguridad del protocolo TLS 1.2 y cualquier conexión que intente utilizar métodos de cifrado obsoletos y poco seguros será denegada.

Al trabajar con el almacenamiento o los datos en reposo, VTEX puede utilizar uno de los siguientes algoritmos para operar con las aplicaciones que necesitan cifrar datos:
* Cifrado bidireccional
    * RSA con claves de 2048 bits o más
    * AES-256
* Cifrado unidireccional
    * PBKDF2 basado en SHA-256

Todos los sistemas relevantes realizan copias de seguridad automáticas, con frecuencia predeterminada diaria, pero puede ajustarse según sea necesario para garantizar la integridad y disponibilidad de los datos.

#### ¿Las claves de cifrado se guardan en un lugar seguro?
Para garantizar un alto nivel de seguridad, las claves de cifrado las proporciona el servicio AWS, reconocido por su fiabilidad y solidez en términos de seguridad. Además, las claves de acceso se almacenan en un área segregada con la adecuada protección de cifrado, garantizando la confidencialidad e integridad de la información.

Las contraseñas de inicio de sesión son un buen ejemplo: antes de almacenarse, las contraseñas pasan por un proceso de hash utilizando el algoritmo PBKDF2 basado en SHA-256. En este proceso solo se almacena el valor hash resultante, lo que garantiza que las contraseñas originales permanezcan seguras y no sean accesibles directamente. Estas medidas de seguridad adicionales garantizan la protección de datos sensibles y dan tranquilidad a los usuarios sobre la confidencialidad de su información.

### Control de acceso, identificación y autenticación

#### ¿Dispone VTEX de una política de gestión de acceso lógico?
VTEX gestiona eficazmente el acceso lógico, garantizando un control y monitoreo adecuados de los permisos de acceso a sistemas y datos. Nuestras prácticas garantizan el cumplimiento de las políticas de seguridad, aplicando medidas como el principio de privilegio mínimo y la segregación de funciones para garantizar que los usuarios solo tengan acceso a la información necesaria para desempeñar sus funciones específicas, en función de sus necesidades legítimas.

Nuestro procedimiento de revocación de accesos se activa inmediatamente, con la participación directa del equipo de seguridad de VTEX.

En el entorno corporativo contamos con una política de gestión de accesos que sigue las mejores prácticas del mercado. Esto incluye la implementación de la autenticación de dos factores para acceder a nuestros servidores y el uso de VPN cuando sea necesario.

#### ¿Cómo se gestiona la concesión de accesos a los sistemas internos de VTEX?
En el entorno empresarial, un equipo centralizado se encarga de la gestión de accesos, desde la concesión hasta la revocación, estableciendo métricas y ejecutando procedimientos de concesión de acceso.

Dentro de este equipo, hay grupos específicos encargados de gestionar los sistemas críticos de la empresa. De este modo, cuando un empleado necesita acceso, inicia el proceso a través de nuestro canal de servicio digital, centralizado y automatizado.

A continuación, la solicitud de acceso se evalúa para garantizar que el empleado en cuestión necesita y debe recibir el acceso solicitado. Antes de que el acceso se conceda, el flujo pasa por varias etapas de autenticación, validación y aprobación formal de la solicitud.

#### ¿Limita VTEX el acceso de acuerdo con el principio de mínimo privilegio?
Sí, VTEX restringe el acceso de acuerdo con el principio de mínimo privilegio. Esto significa que los usuarios reciben [permisos de acceso](/es/docs/tutorials/recursos-del-license-manager) solo para lo estrictamente necesario en el desempeño de sus funciones, lo que minimiza el riesgo de exposición indebida de información sensible y fortalece la seguridad de los sistemas y datos.

#### ¿Cómo se estructura la arquitectura de autenticación y la gestión de identidades disponible en la plataforma VTEX?
La plataforma VTEX cuenta con una solución de identidad lista para usar llamada VTEX ID. También brindamos soporte para la integración de [proveedores de identidad SSO](https://developers.vtex.com/docs/guides/login-integration-guide) en el Admin y en el sitio web de la tienda.

El Admin usa [SAML 2.0](https://developers.vtex.com/docs/guides/login-integration-guide-admin-saml2) como protocolo de autenticación, y los clientes de VTEX pueden integrar un proveedor de identidad existente utilizando SAML 2.0 como estándar. El sitio web de la tienda puede integrarse con proveedores de identidad externos a través del protocolo [OAuth 2.0](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2).

Disponemos de un proceso de [gestión de accesos](/es/docs/tutorials/roles) que incluye el acceso a los entornos de producción y otros entornos relacionados.

A continuación, incluimos links a contenido técnico más detallado sobre nuestros controles de autenticación:
* [Login integration guide](https://developers.vtex.com/docs/guides/login-integration-guide)
* [SAML 2 integration](https://developers.vtex.com/docs/guides/login-integration-guide-admin-saml2)
* [OAuth 2.0 integration](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2)

#### ¿Qué recursos de seguridad en la autenticación y gestión de identidades están disponibles en la plataforma?
Las contraseñas en VTEX ID deben cumplir con los siguientes requisitos:
* Longitud mínima de 8 caracteres + token MFA de 6 dígitos.
* Mínimo de 1 carácter en mayúscula.
* Mínimo de 1 carácter numérico.
* Mínimo de 1 carácter especial.
* No se pueden repetir las últimas 4 contraseñas utilizadas.

Los retailers pueden optar por aplicar la opción [vencimiento de la contraseña](/es/docs/tutorials/autenticacion#aplicar-expiracao-de-senha) a los usuarios del Admin tras un periodo específico, que puede ser de 15, 30 o 90 días.

Además, tienen la opción de integrar un proveedor de identidad externo, lo que les permitiría definir sus propias políticas de contraseña personalizadas. Para más información, consulta [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide).

Si una cuenta se bloquea debido a que el usuario ingresa incorrectamente la contraseña (medida de seguridad), el usuario legítimo aún puede iniciar sesión a través de otros métodos, como recibir un token por email o usar un[ inicio de sesión social integrado](/es/docs/tutorials/configurar-inicio-de-sesion-con-facebook-y-google) (Google o Facebook), lo que evita posibles ataques de fuerza bruta contra contraseñas débiles.

#### ¿Ofrece la plataforma VTEX inicio de sesión único (SSO)?
Como capa adicional de seguridad, proporcionamos el recurso de inicio de sesión único (SSO), disponible tanto en el Admin VTEX de la tienda (entorno administrativo) como en el storefront para los clientes.

El lenguaje de marcado para confirmaciones de seguridad (SAML) es un estándar para el intercambio de datos de autenticación y autorización entre dominios. SAML 2.0, protocolo basado en XML, facilita el SSO en navegadores web. Este protocolo utiliza tokens seguros firmados digitalmente y mensajes cifrados para transmitir datos entre partes de confianza.

Para más información, consulta la guía de integración [Admin (SAML 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-admin-saml2).

#### ¿Dispone la plataforma de identificación, control de acceso y segregación de los datos de los clientes mediante controles físicos o lógicos?
VTEX mantiene la segregación de los datos de los clientes mediante sólidos controles lógicos. Todas nuestras aplicaciones son multiinquilino (multitenant) y exigen identificar la tienda de origen en cada request, registrando toda la información específica de cada tienda con su identificador correspondiente. De este modo, toda nuestra infraestructura de servidores se comparte con nuestros clientes.

Es importante destacar que no existe un método de acceso integrado; cada cliente tiene acceso exclusivo a su propia información, lo que garantiza la seguridad y privacidad de los datos.

Este enfoque nos brinda agilidad en las mejoras y correcciones de bugs, mientras posibilita una escalabilidad eficiente para satisfacer las necesidades específicas de cada cliente, manteniendo siempre la seguridad y la resiliencia.

#### ¿Cómo se gestiona el acceso de usuario en la plataforma, incluyendo la transferencia, adición, edición y eliminación de cuentas?
La gestión de usuarios administrativos se realiza directamente a través del Admin VTEX. A los usuarios administrativos se les asignan perfiles de acceso que pueden contener uno o varios [permisos](/es/docs/tutorials/recursos-del-license-manager), establecidos por el [usuario titular](/es/docs/tutorials/que-es-el-usuario-titular) de la cuenta o por usuarios con roles User Administrator - RESTRICTED o con un rol personalizado que contenga el [recurso](/es/docs/tutorials/recursos-del-license-manager) Save User. Para más información, consulta [Gestionar usuarios](/es/docs/tutorials/gestionar-usuarios-administradores).

#### ¿Dispone la plataforma de funcionalidades para gestionar, organizar y personalizar los permisos de gestión de la tienda?
Cada acción en VTEX, como acceder a una página en el Admin o hacer una llamada de API, implica un request a nuestra infraestructura. Para garantizar la seguridad de estas operaciones contamos con License Manager, el sistema encargado de comprobar si un usuario tiene los permisos adecuados para realizar una acción en la plataforma. Para facilitar la gestión de estos permisos, License Manager se basa en recursos y roles.

Un recurso es una entidad asociada a una acción o información dentro de nuestra infraestructura. Por ejemplo, el recurso Product management permite a un usuario acceder y editar el formulario de registro de productos en el Catálogo. Para obtener más detalles sobre cada recurso disponible, consulta [Recursos del License Manager](/es/docs/tutorials/recursos-del-license-manager).

Los [roles](/es/docs/tutorials/roles) determinan el conjunto de recursos a los que un grupo de usuarios puede acceder en VTEX. Cada usuario administrativo puede ser asociado a uno o varios roles. Al crear un nuevo rol, tienes la opción de utilizar uno de los [Roles de usuario predefinidos](/es/docs/tutorials/roles-de-usuario-predefinidos) que proporciona VTEX o crear [uno personalizado](/es/docs/tutorials/roles), seleccionando cada recurso necesario.

### Seguridad de la plataforma

#### ¿La plataforma utiliza certificados SSL (Secure Sockets Layer)?
SSL (Secure Sockets Layer) es un protocolo desarrollado para aumentar la seguridad de los datos transmitidos por internet. Las conexiones vía SSL son especialmente recomendables para enviar información como números de tarjetas de crédito, contraseñas y cualquier otra información confidencial a través de Internet.

No es necesario solicitar la compra del certificado SSL, ya que VTEX genera uno para tu tienda y garantiza su renovación automática. El certificado se emite a través de Let's Encrypt y su creación es responsabilidad de VTEX en el momento del go live de la tienda. Aprende más en [Certificado de seguridad (SSL)](/es/docs/tutorials/certificado-de-seguridad-ssl).

#### ¿Cómo se gestionan los parches de seguridad?
Nuestros clientes no son responsables de aplicar los parches, ya que VTEX realiza un proceso de gestión de parches que asegura que todos los inquilinos utilicen la misma versión de software.

VTEX gestiona los releases de software en actualizaciones principales, secundarias y parches. Los parches y las actualizaciones secundarias no afectan a los contratos de API y pueden extenderse a todos los clientes sin afectar la funcionalidad de la tienda. Los componentes del sistema operativo y de las aplicaciones, como bibliotecas, se actualizan periódicamente y se someten a rigurosos controles de seguridad.

#### ¿Se monitorea la plataforma para evaluar su desempeño? ¿Cuáles son las variables que definen la escalabilidad de la plataforma?
La plataforma VTEX es una solución SaaS (Software as a Service) y se puede acceder a ella mediante cualquier navegador de internet. VTEX se encarga de proporcionar y actualizar periódicamente la solución con nuevas funcionalidades y de monitorear por completo su funcionamiento. Además, hay equipos especializados que garantizan la escalabilidad de la plataforma monitoreando constantemente el desempeño de cada tienda.

#### ¿Restringe la plataforma el acceso a IP públicas en internet?
Es posible bloquear el acceso al entorno administrativo de la tienda (VTEX Admin) para IP específicas. No obstante, el sitio web de la tienda permanece abierto al público en general. Para solicitar bloqueos específicos, ponte en contacto con nuestro [soporte](https://supporticket.vtex.com/support).

#### ¿Funciona la solución con un protocolo seguro (HTTPS)?
La plataforma VTEX funciona con el protocolo seguro HTTPS. Este protocolo garantiza que la comunicación entre los componentes del sistema se mantenga protegida y los datos se transporten de modo seguro.

#### ¿La solución utiliza WAF?
Contamos con una solución de WAF como parte del producto add-on [VTEX Shield](/es/docs/tutorials/vtex-shield). Consulta la documentación de [WAF](/es/docs/tutorials/web-application-firewall-waf) para más información.

#### ¿Utiliza la plataforma VTEX el concepto API first?
VTEX prioriza el desarrollo de API first, donde todos los datos que se manejan en la plataforma pueden ser manipulados a través de API. Aprende más sobre las [API de VTEX](https://developers.vtex.com/docs/api-reference).

VTEX segrega las capas de backend, API, frontend y componentes, garantizando que cada responsable solo interactúa con la capa que le compete. Accede a la documentación para desarrolladores en el [Developer Portal](https://developers.vtex.com/).

#### ¿Proporciona la solución detección de anomalías, es decir, tiene la capacidad de detectar comportamientos inusuales y posibles tráficos maliciosos, además de los comportamientos de cuentas de usuario?
La plataforma VTEX está constantemente monitoreada por un sistema de monitoreo gestionado por el equipo de seguridad de VTEX. Disponemos de un conjunto integral de controles que abarca toda la plataforma y se encuentra conectado a los sistemas en todo momento para detectar una amplia gama de anomalías. Este monitoreo es un esfuerzo continuo y gradual, y nuestro equipo responsable trabaja constantemente para agregar nuevas reglas y alertas.

Algunas de estas alertas se reenvían a nuestros equipos internos, mientras que otras se envían directamente a los administradores de cada tienda. También hay alertas que solo se registran y no generan notificaciones. Por ejemplo, los intentos fallidos de inicio de sesión se limitan y registran, pero no generan alertas. Sin embargo, el propietario de la cuenta recibirá un email si un usuario intenta modificar las credenciales administrativas.

El producto add-on [VTEX Shield](/es/docs/tutorials/vtex-shield) genera algunas alertas adicionales para reforzar aún más la seguridad y ofrece a los retailers más independencia para realizar su propio monitoreo.

#### ¿Cómo se monitorea la plataforma para evaluar su desempeño? ¿Cuáles son las variables que definen la escalabilidad de la solución?
Nuestra plataforma está equipada con varios indicadores de rendimiento que nos alertan de posibles problemas. Los indicadores incluyen métricas de CPU y memoria de los servidores, tiempo de respuesta de cada request y volumen promedio de ventas. Mantenemos un monitoreo continuo de estos y otros indicadores, con el soporte de una inteligencia artificial (IA) basada en una heurística propia. Esta IA identifica y notifica a nuestro equipo cada vez que se produce una desviación del estándar previsto.

Para atender estas alertas, contamos con un equipo de ingenieros disponible las 24 horas del día, 7 días a la semana. Este equipo está siempre de guardia y listo para intervenir en caso de que ocurran problemas técnicos, garantizando así la estabilidad y el buen funcionamiento de nuestra plataforma.

### Auditoría de logs

#### ¿Cuál es el contenido mínimo de logs que registra la plataforma?
Todas las operaciones sensibles que tienen lugar en la plataforma se registran automáticamente en logs y esta funcionalidad no puede ser desactivada. VTEX almacena todos los logs de errores de la plataforma VTEX en un software SIEM (Security Information and Event Management), cuyos datos están disponibles para el equipo de VTEX con el fin de analizar y mejorar el producto. Además, VTEX monitorea determinados patrones en los logs de la aplicación y la infraestructura que sugieren riesgos potenciales para la seguridad del sistema. En caso de identificarlos, se emiten alertas o incluso se aplican contramedidas automáticas.

Asimismo, VTEX también registra diversas operaciones, incluyendo autores y marcas de tiempo en [Audit](/es/docs/tutorials/audit), un módulo disponible en el Admin VTEX que permite buscar e investigar el historial de logs mediante el uso de filtros. Cada módulo de la plataforma cuenta con un equipo de desarrollo específico que analiza y decide la información que se registra en ese módulo. Consulta la lista de[ Eventos disponibles en Audit](/es/docs/tutorials/eventos-disponibles-en-audit).

#### ¿Cómo pueden los clientes de VTEX acceder en tiempo real a todos los logs de la plataforma?
VTEX no permite el acceso a sus sistemas internos, con el fin de preservar la privacidad y seguridad de nuestros clientes, así como para garantizar el cumplimiento de la normativa y legislación vigente.

Sin embargo, disponibilizamos logs de diversos [eventos](/es/docs/tutorials/eventos-disponibles-en-audit) en [Audit](/es/docs/tutorials/audit) y permitimos que nuestros clientes soliciten logs de eventos específicos abriendo un ticket vía [soporte](https://supporticket.vtex.com/support). Además, pueden implementar una capa de proxy inverso antes de VTEX, lo que proporciona una mayor visibilidad de los requests que llegan a su entorno. Este enfoque permite a los clientes tener un control más detallado y personalizado del flujo de datos en su infraestructura, manteniendo al mismo tiempo la seguridad y privacidad necesarias.

### Desarrollo seguro

#### ¿Cuáles son las mejores prácticas de seguridad en desarrollo que utiliza la empresa?
El proceso de desarrollo de software sigue etapas automatizadas para garantizar su eficiencia. Cuando un equipo de desarrollo finaliza una pieza del software, esta se marca con una identificación en el sistema de control de versiones. Esto activa automáticamente su implementación en un entorno de prueba denominado `BETA` o en producción real, conocido como STABLE.

Además de las pruebas realizadas por especialistas o incluso por los propios clientes en el entorno BETA, existen pruebas automáticas que se actualizan para ajustarse a cambios en el software o su infraestructura. Estas pruebas son esenciales para detectar problemas que puedan surgir en la nueva versión o debido a cuestiones técnicas. Este enfoque garantiza la estabilidad y calidad del software durante todo su ciclo de vida.

#### ¿Están los entornos de desarrollo, staging/QA y producción totalmente segregados? ¿Tienen los desarrolladores de la empresa acceso al entorno de producción?
Sí, todos los entornos están totalmente segregados. El entorno de producción solo puede implementarse mediante el proceso de gestión de cambios, que está automatizado.

#### ¿Existen pautas y estándares de codificación de seguridad para el desarrollo de aplicaciones?
Los desarrolladores de VTEX siguen los principios OWASP para garantizar la calidad y la seguridad del código. La revisión por pares es obligatoria, proporcionando un nivel adicional de garantía de calidad y seguridad. Además, cada código de producción es aprobado por al menos dos desarrolladores que tienen conocimientos de seguridad.

Los ingenieros de VTEX adoptan los métodos descritos en OWASP Top 10 para evitar la inserción de código malicioso. Para reforzar aún más la seguridad, VTEX ha implementado un sistema de escaneo de código en el repositorio, revisado minuciosamente por especialistas en seguridad.

Todos los miembros del equipo han recibido capacitación en desarrollo seguro, y estos conocimientos se optimizan continuamente mediante capacitación y pruebas periódicas.

#### ¿VTEX realiza análisis de vulnerabilidad en bibliotecas y paquetes de software?
Sí, VTEX cuenta con un proceso de análisis de vulnerabilidades en bibliotecas y paquetes de software como parte de sus prácticas de seguridad. Este análisis se realiza periódicamente para identificar cualquier vulnerabilidad o fallo de seguridad presente en las bibliotecas y paquetes utilizados en el desarrollo de software. Este enfoque proactivo ayuda a garantizar que solo se integren en los sistemas de la empresa componentes seguros y libres de vulnerabilidades, reforzando así la seguridad de sus soluciones y protegiendo los datos de los clientes.

### Seguridad física y centros de datos

#### ¿Dispone VTEX de medidas de seguridad para la protección física de los dispositivos y equipos de red?
La plataforma VTEX es una solución SaaS (Software as a Service) alojada en un entorno altamente controlado y seguro. Como parte de nuestra política de gestión de riesgos, los proveedores son reevaluados periódicamente en relación con sus prácticas de seguridad y compliance. Es importante destacar que VTEX es una empresa 100% cloud commerce, que opera exclusivamente en la infraestructura de Amazon Web Services (AWS). No tenemos servidores físicos propios para prestar servicios.

Tanto nuestros datos como los de nuestros clientes se encuentran alojados en AWS, uno de los principales proveedores a nivel mundial de servicios de infraestructura en la nube pública. Tenemos acuerdos con AWS para garantizar una línea base de seguridad física y protección del entorno para la ejecución de nuestros servicios. Sugerimos a nuestros clientes que revisen los [controles de seguridad física proporcionados por AWS](https://aws.amazon.com/es/compliance/data-center/controls/?nc1=h_ls) como parte de su debida diligencia al considerar la seguridad de los datos en la plataforma VTEX.

#### ¿Cómo aplica VTEX las medidas de seguridad física para proteger el centro de datos?
VTEX es una empresa basada íntegramente en cloud commerce, que utiliza Amazon Web Services (AWS) como proveedor de sus centros de datos. AWS opera sus centros de datos de acuerdo con las [directrices de Tier III+](https://aws.amazon.com/es/compliance/uptimeinstitute/?nc1=h_ls), asegurando así un alto estándar de confiabilidad y seguridad.

En cuanto a la seguridad de nuestras oficinas, VTEX mantiene oficinas en diversas partes del mundo y aplica estrictos controles de seguridad física en todas sus instalaciones. Esto incluye monitoreo y control de acceso en todas las oficinas, supervisados por un equipo de seguridad profesional. El acceso físico está estrictamente controlado en los puntos de entrada de los edificios, mediante sistemas de vigilancia como torniquetes y otros dispositivos electrónicos. Todos los accesos autorizados se registran para garantizar un control total de las entradas y salidas.

Además, nuestras oficinas están equipadas con sistemas de circuito cerrado de cámaras de televisión (CCTV), que garantizan la vigilancia continua y la grabación de imágenes de acuerdo con los requisitos legales y de cumplimiento de la normativa. También implementamos controles avanzados de energía y supresión de incendios, en línea con las mejores prácticas del sector, para evitar fallos y sobretensiones eléctricas, garantizando la seguridad e integridad de nuestras instalaciones físicas.

#### ¿En qué países y ubicaciones se encuentran los centros de datos?
Principalmente, VTEX utiliza las siguientes regiones de datos de AWS para los propósitos descritos:
* AWS Norte de Virginia: almacenamiento de datos primario.
* AWS Norte de California: local de backup

### Gestión de vulnerabilidades

#### ¿Con qué frecuencia realiza VTEX escaneos de vulnerabilidad?
Las evaluaciones de vulnerabilidad se realizan de forma continua. Cada verificación debe ser realizada nuevamente hasta que sea aprobada sin encontrar problemas. Un auditor las aceptará durante los periodos de recertificación.

#### ¿Las personalizaciones o configuraciones del producto realizadas por los clientes podrían introducir vulnerabilidades de seguridad en la plataforma? En caso afirmativo, ¿cómo se gestionan estas eventualidades?
Los retailers y cualquier agencia implementadora que estos contraten tienen la libertad de realizar personalizaciones y ajustes en la plataforma dentro de sus propios entornos. En caso de que se detecten vulnerabilidades en los sistemas de VTEX, nuestro equipo de seguridad y desarrollo actúa con rapidez para solucionar estos problemas. Debido a la naturaleza personalizable de la plataforma, es responsabilidad del retailer y de la agencia implementadora hacer frente a las vulnerabilidades que puedan surgir como resultado de las personalizaciones realizadas durante el desarrollo. Para más información, consulta[ Responsabilidades en el ecosistema VTEX](/es/docs/tutorials/responsabilidades-en-el-ecosistema-vtex#agencias-implementadoras).

### Respuesta y mitigación de incidentes

#### ¿Dispone VTEX de un plan formal de respuesta a incidentes?
Sí, VTEX cuenta con un protocolo formal de respuesta a incidentes de seguridad que abarca las fases clave del proceso: preparación, identificación de amenazas, contención, eliminación, recuperación y restauración. Este procedimiento también incluye un plan de comunicación integrado que se aplica en todas las fases de la respuesta. Además, contamos con manuales detallados para orientar al equipo de servicio. También realizamos pruebas de penetración de caja gris (gray box) anualmente para evaluar y aumentar continuamente nuestras medidas de seguridad.

#### ¿Dispone VTEX de un calendario de pruebas de penetración? ¿Con qué frecuencia se realizan las pruebas?

Las pruebas de penetración (pentest) se realizan cada seis meses en VTEX. Compartimos el **Certificado de prueba de penetración** de las pruebas más recientes realizadas en nuestra plataforma por una consultoría de seguridad externa independiente, respetable y técnicamente competente.

Para obtener el documento, sin costo, [abre un ticket con Soporte VTEX](/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex).

#### ¿Cuenta VTEX con un procedimiento de respuesta a incidentes para fuga de datos que cumpla con las leyes de protección de datos personales?
Sí, el plan de respuesta a incidentes de seguridad de VTEX prevé incidentes relacionados con fugas de datos y cumple con las leyes de protección de datos personales. Abarca las etapas esenciales del proceso: preparación, identificación de amenazas, contención, eliminación, recuperación y restauración. Este procedimiento también incluye un plan de comunicación integrado que se aplica en todas las fases de la respuesta.

#### ¿Qué controles utiliza VTEX para mitigar los ataques de ransomware?
VTEX utiliza un enfoque integral para mitigar los ataques de ransomware, empleando medidas como antivirus avanzados, firewalls y filtros de contenido para bloquear el malware. Además, mantenemos copias de seguridad periódicas de los datos críticos, lo que garantiza la capacidad de restaurarlos sin ceder a las exigencias de los atacantes. Las actualizaciones de seguridad y la capacitación para concienciar a los empleados son prioritarias, junto con el monitoreo constante de las actividades para detectar comportamientos sospechosos. Estas medidas combinadas forman una sólida defensa contra la creciente amenaza del ransomware.

### Recuperación ante desastres y continuidad de negocio

#### ¿Dispone VTEX de un plan de continuidad de negocio?
VTEX cuenta con un plan de continuidad de negocio cuidadosamente diseñado para hacer frente a los problemas derivados de las emergencias. Este plan pretende establecer una base sólida para la reanudación rápida y eficaz de las operaciones habituales, independientemente de la naturaleza de la emergencia, garantizando así una transición fluida y minimizando los posibles impactos.

#### ¿Dispone VTEX de un plan de recuperación ante desastres?
VTEX ha adoptado un plan de recuperación ante desastres centrado en garantizar la continuidad operativa y la disponibilidad de recursos críticos en situaciones de emergencia. Este plan abarca directrices detalladas sobre cómo actuar ante incidentes imprevistos, caracterizados como crisis, que pueden surgir de catástrofes naturales, ciberataques o cualquier otro suceso disruptivo. Incorporamos etapas cruciales de recuperación, incluida la definición de objetivos RPO (Recovery Point Objective) y RTO (Recovery Time Objective), así como la realización de pruebas de copia de seguridad, garantizando la eficacia y una rápida aplicación del plan en escenarios reales.

#### ¿Prueba VTEX periódicamente el plan de recuperación ante desastres?
El plan de recuperación ante desastres se prueba al menos una vez al año para garantizar su eficacia. No probamos todo el plan en un solo evento; los distintos componentes o procesos con ciclos de vida independientes se prueban en función de su relevancia y la frecuencia requerida. En cualquier caso, cada pieza se somete a pruebas anuales.

Si alguna parte del plan resulta ineficaz, deberá elaborarse una nueva versión del proceso para solucionar el problema. Tradicionalmente, los eventos previos al Black Friday y al Cyber Monday ofrecen la oportunidad ideal para realizar pruebas de recuperación ante desastres.
