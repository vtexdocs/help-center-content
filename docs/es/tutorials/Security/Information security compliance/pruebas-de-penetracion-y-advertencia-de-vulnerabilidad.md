---
title: 'Pruebas de penetración y avisos de vulnerabilidad'
id: 6jodF6s1I50Fg84ZwutOCb
status: PUBLISHED
createdAt: 2022-11-30T14:20:37.453Z
updatedAt: 2024-08-28T19:20:39.486Z
publishedAt: 2024-08-28T19:20:39.486Z
firstPublishedAt: 2022-11-30T14:42:44.449Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: penetration-testing-and-vulnerability-notice
locale: es
legacySlug: evaluaciones-de-seguridad-e-informes-de-vulnerabilidad
subcategoryId: vONCJSxwN5qZiElOEtKkH
---

>ℹ️ Esta funcionalidad es parte de [VTEX Shield](https://help.vtex.com/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh).  Si ya es cliente de VTEX y desea adoptar VTEX Shield para su negocio, por favor, póngase en contacto con el [Soporte Comercial](https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Pueden aplicarse tarifas adicionales. Si aún no es cliente pero está interesado en esta solución, por favor, complete el [formulario de contacto](https://vtex.com/co-es/contacto/).

>⚠️ Si requiere un análisis de tu informe de prueba de penetración por parte del equipo de Seguridad de VTEX, es necesario contar con VTEX Shield. Además, todas las pruebas de penetración deben [programarse previamente con VTEX](#programar-prueba-de-penetracion). Se considerará un intento de acción no autorizada cualquier prueba realizada de forma autónoma sin notificación previa a VTEX.

VTEX evalúa rigurosamente los recursos de la plataforma, probando e identificando vulnerabilidades mediante escaneos y pruebas de penetración recurrentes. Las verificaciones de vulnerabilidad se realizan de forma continua.

Además de las comprobaciones estándar, las tiendas que utilizan [VTEX Shield](https://help.vtex.com/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) pueden realizar pruebas de penetración e informar sobre las vulnerabilidades encontradas, siempre que la programen con VTEX con antelación.

Las pruebas de penetración, o pentest, son un ataque simulado a un sistema informático, red o aplicación web para identificar y corregir vulnerabilidades de seguridad. Estas pruebas se realizan de forma ética para evaluar la seguridad de un sistema sin causar ningún daño real.

Consulta en esta guía el procedimiento para programar una prueba de penetración e informar una posible vulnerabilidad en la plataforma:

- [Programar prueba de penetración](#programar-prueba-de-penetracion)
  - [Informes de pruebas de penetración](#informes-de-pruebas-de-penetracion)
  - [Procedimientos no permitidos](#procedimientos-no-permitidos)
- [Informar vulnerabilidad](#informar-vulnerabilidad)
  - [Definición de vulnerabilidad](#definicion-de-vulnerabilidad)
  - [Respuesta de VTEX](#respuesta-de-vtex)

## Programar prueba de penetración

>⚠️ Únicamente las tiendas con [VTEX Shield](https://help.vtex.com/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) pueden programar pruebas de penetración y recibir una respuesta por parte del equipo de seguridad, que incluye acceso a un análisis detallado del informe de la prueba, como se describe en los procedimientos de esta guía.

Para realizar una prueba de penetración en el entorno de tu tienda es necesario programar una fecha con VTEX, para la organización interna y la planificación por parte del equipo de Seguridad. Sigue las instrucciones a continuación:

1. Abre un ticket con el [soporte de VTEX](https://help.vtex.com/es/support), para informar de que desea programar una prueba de penetración.
2. Nuestro equipo solicitará la información necesaria para programarla, incluyendo el [acuerdo de confidencialidad](https://assets.ctfassets.net/alneenqid6w5/5iw8rN7CdSn7PHKvMMcO19/ab46ae4025d506e052dcef5974f9007f/Pentest_NDA_.zip) firmado por los responsables de la tienda.

    Si contratas a una empresa tercera para realizar la prueba, los responsables de la misma también deben firmar el acuerdo de confidencialidad.

    VTEX recomienda a los clientes realizar sus pruebas de penetración con partners que dispongan de equipos con un nivel mínimo de certificación, prestando atención a los [procedimientos no permitidos](#procedimientos-no-permitidos).

    Las empresas con profesionales certificados en programas como [Certified Ethical Hacker](https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/) de EC-Council, [CompTIA PenTest+](https://www.comptia.org/pt/certificacoes/pentest) y [GIAC Exploit Researcher and Advanced Penetration Tester](https://www.giac.org/certifications/exploit-researcher-advanced-penetration-tester-gxpn/) suelen entregar informes más detallados y estandarizados, lo que mejora la comunicación y la calidad de la evaluación.
3. Actualiza tu ticket con la información solicitada por VTEX, anexando el [acuerdo de confidencialidad](https://assets.ctfassets.net/alneenqid6w5/5iw8rN7CdSn7PHKvMMcO19/ab46ae4025d506e052dcef5974f9007f/Pentest_NDA_.zip) firmado tanto por los responsables de la tienda como por los responsables de la empresa tercera contratada para realizar la prueba.
4. Guarda el número de ticket, lo necesitarás para futuras comunicaciones.
5. Tras recibir la información, el equipo de VTEX se pondrá en contacto contigo para confirmar la realización de la prueba de penetración en hasta dos días útiles.
6. Realiza la prueba en la fecha programada (sujeta a la autorización de VTEX).
7. Envía un informe con los resultados en el mismo ticket al [soporte VTEX](https://help.vtex.com/es/support).

   >⚠️ Para garantizar el cumplimiento del plazo de análisis por parte de VTEX, es obligatorio seguir las pautas descritas en [Informes de pruebas de penetración](#informes-de-pruebas-de-penetracion).

   Designa a un miembro de tu equipo de seguridad como punto de contacto del equipo de seguridad de VTEX durante el proceso de análisis del informe de la prueba.

El equipo de seguridad de VTEX tiene como cometido realizar un análisis completo de todos los hallazgos reportados por el cliente durante las pruebas de penetración previamente autorizadas y programadas por VTEX.

En un plazo de 10 días laborables desde la recepción del [informe](#informes-de-pruebas-de-penetracion), el equipo identificará los falsos positivos y reclasificará la gravedad de las amenazas identificadas según sea necesario, siguiendo las prácticas recomendadas de VTEX. Cada decisión de este proceso estará justificada detalladamente para garantizar su total transparencia y comprensión.

>⚠️ Las tiendas que se están preparando para el go live y desean realizar una prueba de penetración también deben programarlo con anticipación. En este caso, es obligatorio enviar el informe con los resultados al [soporte VTEX](https://help.vtex.com/es/support) por lo menos **45 días** antes de la fecha prevista para el go live. Durante este periodo, VTEX analizará el resultado y abordará cualquier vulnerabilidad detectada en el proceso.

### Informes de pruebas de penetración

Para que VTEX cumpla con el plazo de 10 días laborables de análisis del informe, es necesario seguir estas directrices al crear el informe de la prueba de penetración:

* **Descripción del punto afectado**

    Proporciona información sobre la ubicación del problema detectado (URL, flujo de funcionalidades, entre otros).

* **Descripción del impacto en los negocios**

    Describe lo que ese problema de seguridad causa y cuáles son las ventajas del atacante.

* **Descripción de los criterios para clasificar la vulnerabilidad**

    Utiliza una estructura o documento que detalle los criterios utilizados para clasificar la gravedad de la supuesta vulnerabilidad identificada. 

* **Descripción del problema** 

    Añade imágenes para ilustrar el problema.

* **Descripción de los pasos para reproducir o prueba de concepto**

 Detalla los procedimientos para replicar el problema de seguridad, de ser posible, incluyendo imágenes.

* **Descripción del ataque** (opcional)

 Si se reporta un ataque en el informe, incluye una explicación de los problemas de seguridad utilizados para fomentar el ataque, junto con imágenes de las pruebas (los videos son opcionales).

### Procedimientos no permitidos

Recomendamos utilizar únicamente pruebas autorizadas para identificar vulnerabilidades. Los siguientes procedimientos no están permitidos:

* Realizar de pruebas de penetración sin programación previa con VTEX.
* Realizar acciones que puedan afectar negativamente a VTEX, sus productos o usuarios. Por ejemplo, spam, ataques de fuerza bruta, de denegación de servicio y otras acciones relativas a pruebas de seguridad informadas en el [acuerdo de confidencialidad](https://assets.ctfassets.net/alneenqid6w5/5iw8rN7CdSn7PHKvMMcO19/ab46ae4025d506e052dcef5974f9007f/Pentest_NDA_.zip).
* Acceder o intentar acceder a datos o información que no pertenecen a tu cuenta.
* Destruir o intentar corromper datos o información pertenecientes a VTEX.
* Realizar cualquier tipo de ataque físico o electrónico contra el personal o propiedades de VTEX.
* Técnicas de ingeniería social.
* Infringir cualquier ley y reglamento o incumplir cualquier acuerdo para descubrir vulnerabilidades.

## Informar vulnerabilidad

Animamos a nuestros clientes a que informen responsablemente de cualquier vulnerabilidad de seguridad que crean haber encontrado durante las pruebas autorizadas.

Quienes deseen informar una vulnerabilidad deben trabajar primero con sus propios equipos de seguridad y desarrollo para realizar una evaluación de seguridad y eliminar falsos positivos o problemas derivados de configuraciones personalizadas. Se analizarán únicamente los casos que sean compatibles con la [definición de vulnerabilidad](#definicion-de-vulnerabilidad).

>⚠️ Consulta el documento [Prácticas de seguridad de VTEX](https://vtex.com/mx-es/security/security-practices/) y nuestras [Preguntas frecuentes sobre seguridad](https://help.vtex.com/es/tutorial/the-risk-assessment-process--4K97IpqkpCpDYsZOSxtfkX) antes de informar cualquier vulnerabilidad. Estos documentos aclaran nuestros procesos y ayudan a eliminar los falsos positivos.

Después de este procedimiento, si existe una vulnerabilidad, sigue los pasos a continuación para reportarla:

1. Descarga el [modelo de informe de vulnerabilidades](https://assets.ctfassets.net/alneenqid6w5/7FNzoEpl67wH6crmW98If2/3e2fd05877617f746294ecacb8ace8e6/Modelo_-_Comunicaci__n_de_vulnerabilidad_-_ES.pdf).
2. Rellena el modelo con los detalles de cada vulnerabilidad encontrada. Agrega todos los datos posibles sobre las vulnerabilidades encontradas para explicar la sospecha identificada, proporcionando pruebas e imágenes que nos ayuden a comprender, reproducir y validar el problema.

    Las vulnerabilidades se deben informar de manera individual según el modelo establecido. Si encontraste más de una vulnerabilidad en tu prueba, rellena varios modelos y adjúntalos a tu ticket.

  >⚠️ Toda la información solicitada debe rellenarse, dado que es importante para la evaluación. El equipo de Seguridad de VTEX no atenderá vulnerabilidades que no sigan el patrón establecido.

3. Abre un ticket para nuestro [Soporte](https://help.vtex.com/support?/cultureInfo=es-419) para registrar el aviso de vulnerabilidad de seguridad. No olvides adjuntar el modelo de comunicación de vulnerabilidades y rellena todos los datos solicitados en el ticket de soporte.
4. Guarda tu número de ticket, ya que puedes necesitarlo en futuras comunicaciones.

### Definición de vulnerabilidad

VTEX considera una vulnerabilidad de seguridad cualquier falla en uno de nuestros componentes que pudiera permitir que la confidencialidad, integridad o disponibilidad del producto o de la infraestructura se vean comprometidas de algún modo.

No se consideran vulnerabilidad los siguientes casos: 

* Presencia o ausencia de encabezados HTTP (como por ejemplo X-Frame-Options, CSP o nosniff).
* Ausencia de atributos de seguridad en cookies.
* Problemas relacionados con la caché.
* Mensajes de error de seguimiento de pila (stack trace).
* Inyección de contenidos por usuarios administrativos.
* Partes personalizadas de la tienda.
* Autocompletar activado.

### Respuesta de VTEX

VTEX no se compromete a responder a informes en masa generados por verificadores automáticos. Si tu análisis se basa en un proceso automático de identificación de vulnerabilidades, recomendamos que los informes sean analizados por un profesional de seguridad para garantizar la validez de la vulnerabilidad encontrada antes de comunicarse con VTEX.

VTEX se compromete a responder a los tickets que reciba el equipo de [Soporte](https://help.vtex.com/support?/cultureInfo=es-419) lo antes posible, notificando la corrección de la vulnerabilidad o proporcionando motivos coherentes por los que los análisis o las correcciones puedan no llevarse a cabo.

VTEX pone todos los esfuerzos a su alcance para analizar, verificar y solucionar cualquier vulnerabilidad que se nos comunique y que pueda comprometer tu seguridad.
