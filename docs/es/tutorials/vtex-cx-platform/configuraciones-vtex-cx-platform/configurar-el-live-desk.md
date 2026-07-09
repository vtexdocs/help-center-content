---
title: 'Configure Live Desk'
createdAt: 2026-07-07T10:05:01.763Z
updatedAt: 2026-07-07T10:20:04.339Z
contentType: tutorial
productTeam: Post-purchase
slugEN: configure-live-desk
locale: en
---

La página **Preferencias de Live Desk** te permite configurar el comportamiento del soporte humano de tu operación en VTEX CX Platform. En ella defines las reglas de transferencia y cierre de chats, organizas los departamentos de atención y gestionas los representantes de tu equipo. El gerente de atención podrá realizar cambios en el departamento que gestiona, tales como horario laboral, agregar o remover agentes, crear nuevas colas, remover y agregar etiquetas.

> ⚠️ Para configurar Live Desk, debes ser administrador de la organización o moderador del proyecto. Solo un administrador o moderador puede configurar Live Desk.

Para acceder a la página de preferencias de Live Desk, accede a **Configuración > Live Desk** dentro del proyecto.

## General

La pestaña **General** reúne las configuraciones que determinan cómo se distribuyen, transfieren y cierran los chats en tu operación.

### Configuración

La sección **Configuración** contiene preferencias generales del soporte humano de tu tienda. Para activar o desactivar una configuración, haz clic en el botón de alternancia junto a ella.

| Configuración | Descripción |
| --- | --- |
| **Permitir que agentes de IA transfieran conversaciones a soporte humano** | Permite que un agente de IA reenvíe la conversación a un representante humano. Al activar esta opción, describe en el campo de texto los escenarios o criterios que requieren transferencia a soporte humano, en hasta 1000 caracteres. |
| **Permitir interacciones solo para representantes online** | Impide que representantes offline o en pausa respondan a chats en curso. |
| **Transferir chats en masa a otra cola o representante** | Te permite transferir varios chats a la vez a otra cola o a otro representante. |
| **Bloquear transferencia de chats a representantes offline** | Impide la transferencia de chats a representantes que están offline. |
| **Finalizar chats en masa** | Te permite cerrar varios chats a la vez. |
| **Bloquear el cierre de chats que están en cola** | Impide el cierre de chats que están esperando atención. |
| **Asumir chats en masa** | Permite que el representante asuma varios chats a la vez. |
| **Permitir que representantes elijan de qué colas reciben chats** | Permite que los representantes elijan las colas que atenderán. Cuando está activado, el recurso es visible solo para representantes en el módulo **Live Desk** dentro de **Operaciones**. |
| **Mostrar el contador con el número de chats esperando soporte humano** | Muestra la cantidad de chats esperando soporte humano. |
| **Mostrar departamento del chat en la lista de conversaciones** | Muestra el departamento de cada atención en la lista de conversaciones. Cuando está activada, se mostrará una etiqueta con el departamento del chat junto al nombre del contacto. |

### Pausas personalizadas

Las pausas personalizadas son estados que los representantes pueden usar para indicar que están temporalmente no disponibles, como en un horario de almuerzo. Puedes agregar hasta 10 estados diferentes.

Para crear una pausa personalizada, escribe un nombre para la pausa en el campo **Nuevo estado** (por ejemplo, Descanso) y haz clic en `Agregar`. La pausa personalizada aparecerá abajo.

Para eliminar una pausa personalizada, haz clic en el nombre de la pausa personalizada y luego en `Eliminar`.

En esta pestaña también puedes activar la opción **Mostrar temporizador de estado en pausas personalizadas del representante** para mostrar hace cuánto tiempo el representante está en pausa.

## Departamentos

La pestaña **Departamentos** te permite crear y gestionar los departamentos de atención de tu operación, como soporte, ventas o finanzas. Cada departamento agrupa colas y representantes responsables de un tipo de demanda.

En la sección **Gestión de departamentos**, puedes:

- Buscar un departamento por nombre en el campo **Filtrar por nombre del departamento**.
- Ordenar la lista de departamentos por orden alfabético, más reciente o más antiguo.
- Editar o eliminar un departamento haciendo clic en el menú `⋮` en la tarjeta del departamento.
- Crear un nuevo departamento.

### Crear un nuevo departamento

Para crear un departamento, sigue las instrucciones a continuación:

1. Haz clic en <i class="fas fa-plus" aria-hidden="true"></i> `Nuevo departamento`.
2. Completa la información de cada etapa del asistente de configuración, descritas en las secciones a continuación.
3. Después de completar las cuatro etapas, haz clic en `Crear`.

#### Etapa 1: Configurar departamento y jornada laboral

En la primera etapa, elige entre las siguientes opciones:

- **Personalizar nuevo departamento (recomendado):** configurar todos los detalles del departamento manualmente.
- **Crear departamento predeterminado (más rápido):** crear un departamento con configuraciones predefinidas.

Si eliges **Personalizar nuevo departamento**, sigue las instrucciones a continuación:

1. En **Define un nombre para el departamento y sus gerentes**, completa los siguientes campos:
   - **Nombre del departamento:** Ingresa un nombre para identificar el departamento, como Finanzas o Soporte.
   - **Agregar gerente:** Busca y selecciona los responsables del departamento por nombre o email.
2. En **Configuración de la jornada laboral**, configura los días y horarios de funcionamiento del departamento:
   - Activa **Copiar la jornada laboral de un departamento ya configurado** para reutilizar las configuraciones de otro departamento existente.
       
       Luego, elige el departamento que quieres copiar.
   - Selecciona los días de la semana en que el departamento estará activo haciendo clic en cada día.
     
      Después, elige los intervalos de horario. Puedes elegir hasta dos intervalos para cada día.
   - Activa **Feriados en Brasil** para incluir automáticamente los feriados nacionales.
     - Haz clic en `Ver todos los feriados` para consultar la lista completa.
     - Para excluir un feriado, desactiva el botón referente al feriado.
   - Haz clic en `+ Agregar fechas específicas` para incluir fechas en que el departamento no funcionará, como recesos o feriados corporativos.
3. En **Define un límite en la cantidad de chats simultáneos por representante**, ingresa el número máximo de chats que cada representante puede recibir al mismo tiempo. Este límite puede ser excedido cuando el representante elige chats manualmente o recibe transferencia de chats.
  
   Ingresa `0` para que los representantes tomen chats directamente de la cola, sin distribución automática.

   > ⚠️ El límite de un representante prevalece en relación con el límite del equipo o del departamento. Por ejemplo, si el equipo tiene un límite de 20 chats pero un representante tiene un límite de 25 chats, ese representante podrá realizar hasta 25 atenciones.

4. Haz clic en `Continuar`.

#### Etapa 2: Configurar cola

- **Crear una cola personalizada (recomendado):** definir los detalles de la cola manualmente.
- **Crear cola predeterminada (más rápido):** crear una cola con configuraciones predefinidas.

Si eliges **Crear una cola personalizada**, sigue las instrucciones a continuación:
1. Completa **Nombre de la cola** con un nombre para la cola, como _Pagos_ o _Intercambios_.
2. Activa **Limitar el número de chats esperando atención** para definir un techo para la cola. Cuando se alcance el límite, no se crearán nuevos chats.
3. Haz clic en el menú **Agregar representante** para buscar y seleccionar los representantes para la cola.
4. Para agregar más de una cola al departamento, haz clic en `+ Agregar cola` y repite la información.
5. Luego, haz clic en `Continuar`.

#### Etapa 3: Configurar opciones y mensajes

En la tercera etapa, configura las opciones de atención, mensajes automatizados y etiquetas del departamento. Sigue las instrucciones a continuación:

1. En **Opciones extras**, activa o desactiva las configuraciones según la necesidad de tu operación:

   | Opción | Descripción |
   | --- | --- |
   | **Envío de plantillas de mensajes** | Permite que representantes envíen plantillas de mensajes preconfigurados durante la atención. |
   | **Usar firma** | Agrega automáticamente el nombre del agente en cada mensaje enviado. |
   | **Permitir que representantes editen información personalizada del contacto** | Permite que representantes editen campos personalizados del contacto en la sección **Toda la información**. |

2. En **Mensajes automatizados**, configura el envío automático de mensajes para los contactos:

   | Opción | Descripción |
   | --- | --- |
   | **Enviar mensaje automatizado a contactos esperando** | Envía un mensaje automatizado a contactos que esperan atención en la cola. El mensaje aparece como si fuera enviado por el representante asignado. |
   | **Enviar mensaje automatizado al iniciar la atención** | Envía un mensaje automatizado cuando el chat es asignado a un representante. El mensaje aparece como si fuera enviado por el representante asignado. |

3. En **Encuesta de satisfacción**, activa **Enviar automáticamente una encuesta de satisfacción después de que se cierre la atención de Live Desk** para recopilar feedback de los clientes al final de cada atención.
   
   Elige entre las opciones disponibles:
     - **Encuesta CSAT predeterminada (recomendado)**
     - **Flujos personalizados**

   > ⚠️ Para garantizar resultados precisos, el flujo seleccionado necesita usar una escala de 1 a 5.

4. En **Etiquetas**, configura las etiquetas del departamento:
   - En el campo **Nombre de la etiqueta**, busca una etiqueta existente o escribe un nuevo nombre para crearla. Haz clic en `Agregar` para incluirla en el departamento.
   - Activa **Exigir etiqueta al final de la atención humana** para hacer obligatorio el uso de por lo menos una etiqueta al cerrar una atención.
5. Después de completar los campos, haz clic en `Continuar`.

#### Etapa 4: Configurar mensaje rápido (opcional)

En la cuarta y última etapa, configura mensajes rápidos para el departamento. Los mensajes rápidos son atajos que permiten a los representantes enviar respuestas estandarizadas con más agilidad durante la atención.

> ℹ️ Esta etapa es opcional. Puedes omitir la configuración de mensajes rápidos y hacerla después en la configuración del departamento.

Para agregar un mensaje rápido en **Configurar un mensaje rápido**, sigue las instrucciones a continuación:

1. En **Atajo**, ingresa la palabra o expresión que activará el mensaje. Por ejemplo: "Hola".
2. En **Mensaje**, ingresa el texto que se enviará al activar el atajo. Por ejemplo: "Hola, ¿cómo puedo ayudarte hoy?". Este campo acepta hasta 1.000 caracteres.
3. Para agregar más mensajes rápidos, haz clic en `+ Agregar nuevo mensaje rápido` y repite la información.
4. Al final, haz clic en `Crear`.

## Representantes

La pestaña **Representantes** te permite ver y gestionar los representantes de tu operación.

La sección **Gestión de representantes** lista los representantes registrados. Para cada representante se muestran el nombre, el email, el departamento al que pertenece y el número máximo de chats simultáneos que puede atender.

Puedes encontrar un representante específico usando los siguientes filtros:

- **Filtrar por estado**: Muestra los representantes de acuerdo con el estado actual, como online u offline.
- **Filtrar por representantes**: Muestra uno o más representantes específicos.
- **Filtrar por departamentos**: Muestra los representantes de un departamento.
- **Filtrar por colas**: Muestra los representantes de una cola.

En esta pestaña también puedes realizar algunas acciones para los representantes:

- Cambiar departamentos y colas de representantes.
- Definir límite de chats simultáneos de representantes.

Para aplicar una acción a uno o más representantes específicos, marca la casilla de selección junto al nombre de cada uno.

Para aplicar una acción a todos los representantes de la lista, marca la casilla de selección **Seleccionar todos los representantes**.