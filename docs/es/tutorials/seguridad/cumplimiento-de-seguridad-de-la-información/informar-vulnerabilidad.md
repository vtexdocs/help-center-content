---
title: 'Informar vulnerabilidad'
id: 2veBKt7ZGkjdqlMU3F0JYC
status: PUBLISHED
createdAt: 2025-04-16T18:54:42.584Z
updatedAt: 2025-04-16T19:00:52.236Z
publishedAt: 2025-04-16T19:00:52.236Z
firstPublishedAt: 2025-04-16T19:00:52.236Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: reporting-vulnerabilities
legacySlug: reportar-vulnerabilidade
locale: es
subcategoryId: vONCJSxwN5qZiElOEtKkH
---

Animamos a nuestros clientes a que informen responsablemente de cualquier vulnerabilidad de seguridad que crean haber encontrado durante durante el uso habitual de la plataforma.

Quienes deseen informar una vulnerabilidad deben trabajar primero con sus propios equipos de seguridad y desarrollo para realizar una evaluación de seguridad y eliminar falsos positivos o problemas derivados de configuraciones personalizadas. Se analizarán únicamente los casos que sean compatibles con la [definición de vulnerabilidad](#definicion-de-vulnerabilidad).

> ⚠️ Consulta el documento [Prácticas de seguridad de VTEX](https://vtex.com/mx-es/security/security-practices/) y nuestras [Preguntas frecuentes sobre seguridad](https://help.vtex.com/es/tutorial/the-risk-assessment-process--4K97IpqkpCpDYsZOSxtfkX) antes de informar cualquier vulnerabilidad. Estos documentos aclaran nuestros procesos y ayudan a eliminar los falsos positivos.

Después de este procedimiento, si existe una vulnerabilidad, sigue los pasos a continuación para reportarla:

1. Descarga el [modelo de informe de vulnerabilidades](https://assets.ctfassets.net/alneenqid6w5/7FNzoEpl67wH6crmW98If2/3e2fd05877617f746294ecacb8ace8e6/Modelo_-_Comunicaci__n_de_vulnerabilidad_-_ES.pdf).
2. Rellena el modelo con los detalles de cada vulnerabilidad encontrada. Agrega todos los datos posibles sobre las vulnerabilidades encontradas para explicar la sospecha identificada, proporcionando pruebas e imágenes que nos ayuden a comprender, reproducir y validar el problema.

    Las vulnerabilidades se deben informar de manera individual según el modelo establecido. Si encontraste más de una vulnerabilidad en tu prueba, rellena varios modelos y adjúntalos a tu ticket.

  > ⚠️ Toda la información solicitada debe rellenarse, dado que es importante para la evaluación. El equipo de Seguridad de VTEX no atenderá vulnerabilidades que no sigan el patrón establecido.

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
