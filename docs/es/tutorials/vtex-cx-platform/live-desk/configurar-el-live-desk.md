---
title: 'Configurar Live Desk'
createdAt: 2026-07-07T10:05:01.763Z
updatedAt: 2026-07-07T10:20:04.339Z
contentType: tutorial
productTeam: Post-purchase
slugEN: configure-live-desk
locale: es
---

La página **Configuración de Live Desk** te permite configurar el comportamiento del soporte humano de tu operación en VTEX CX Platform. Puedes definir las reglas de transferencia y cierre de chats, organizar los departamentos de chats de soporte y gestionar los representantes de tu equipo. El gerente de soporte puede realizar cambios en su departamento, tales como establecer horarios, agregar o remover representantes, crear nuevas colas y remover y agregar tags.

> ⚠️ Para configurar Live Desk, debes ser administrador de la organización o moderador del proyecto. Solo los administradores o moderadores pueden configurar Live Desk.

Para acceder a la página de configuración de Live Desk, accede a **Configuración > Live Desk** en el proyecto.

## General

La pestaña **General** reúne los ajustes que determinan cómo se distribuyen, transfieren y finalizan los chats en tu operación.

### Preferencias del proyecto

La sección **Preferencias del proyecto** contiene preferencias generales del soporte humano de tu tienda. Para activar o desactivar una preferencia haz clic en el botón de alternancia junto a la misma.

| Preferencia | Descripción |
| --- | --- |
| **Permitir que agentes de IA transfieran conversaciones a soporte humano** | Permite que un agente de IA reenvíe la conversación a un representante humano. Al activar esta opción, describe en el campo de texto los escenarios o criterios que requieren transferencia a soporte humano en hasta 1000 caracteres. |
| **Permitir interacciones solo para representantes online** | Impide que representantes offline o en pausa respondan a chats en curso. |
| **Transferir chats en masa a otra cola o representante** | Permite transferir varios chats a la vez a otra cola o a otro representante. |
| **Bloquear transferencia de chats a representantes offline** | Impide la transferencia de chats a representantes que están offline. |
| **Finalizar chats en masa** | Permite cerrar varios chats a la vez. |
| **Bloquear finalización de chats en la cola** | Impide finalizar chats que están en espera de atención. |
| **Asignarse chats en masa** | Permite que el representante se asigne varios chats a la vez. |
| **Permitir que los representantes elijan sus colas dentro del departamento** | Permite que los representantes elijan las colas que van a atender. Cuando está activada, la función solo es visible para los representantes en el módulo **Live Desk** dentro de **Operaciones**. |
| **Mostrar el contador con el número de chats esperando soporte humano** | Muestra la cantidad de chats esperando soporte humano. |
| **Mostrar departamento del chat en la lista de conversaciones** | Muestra el departamento de cada chat de soporte en la lista de conversaciones. Cuando está activada, se mostrará una tag con el departamento del chat junto al nombre del contacto. |

### Pausas personalizadas

Las pausas personalizadas son status que los representantes pueden usar para indicar que están temporalmente no disponibles, como un horario de almuerzo. Puedes agregar hasta 10 status diferentes.

Para crear una pausa personalizada, ingresa un nombre para la pausa en el campo **Nuevo status** (por ejemplo, Descanso) y haz clic en `Agregar`. La pausa personalizada se mostrará debajo del campo.

Para eliminar una pausa personalizada haz clic en el nombre de la pausa personalizada y luego en `Eliminar`.

En esta sección también puedes activar la opción **Mostrar temporizador de status para pausas personalizadas** para mostrar el tiempo que el representante lleva en pausa.

## Departamentos

La pestaña **Departamentos** permite crear y gestionar los departamentos de atención de tu operación, como soporte, ventas o finanzas. Cada departamento agrupa colas y representantes responsables de un tipo de demanda.

En la sección **Departamentos en {organización}** puedes:

- Buscar un departamento por nombre en el campo **Filtrar por nombre del departamento**.
- Ordenar la lista de departamentos por Orden alfabético, Más recientes o Más antiguos.
- Editar o eliminar un departamento haciendo clic en el menú `⋮` en la tarjeta del departamento.
- Crear un nuevo departamento.

### Crear un nuevo departamento

Para crear un departamento sigue las instrucciones a continuación:

1. Haz clic en <i class="fas fa-plus" aria-hidden="true"></i> `Nuevo departamento`.
2. Completa la información de cada paso del asistente de configuración, según se describe en las secciones a continuación.
3. Después de completar los cuatro pasos, haz clic en `Crear`.

#### Paso 1: Configurar departamento y jornada laboral

![Etapa 1 do assistente de criação de setor](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/configurações-vtex-cx-platform/configurar-o-live-desk_1.png)

En el primer paso, elige entre las siguientes opciones:

- **Personalizar nuevo departamento (recomendado):** permite configurar todos los detalles del departamento manualmente.
- **Crear departamento predeterminado (más rápido):** permite crear un departamento con configuraciones predefinidas.

Si eliges **Personalizar nuevo departamento**, sigue las instrucciones a continuación:

1. En **Define un nombre para el departamento y sus gerentes**, completa los siguientes campos:
   - **Nombre del departamento:** ingresa un nombre para identificar el departamento, como Finanzas o Soporte.
   - **Agregar gerente:** busca y selecciona los responsables del departamento por nombre o email.

2. En **Días laborables**, configura los días y horarios de funcionamiento del departamento:
   - Activa **Copiar la configuración de días laborables de un departamento existente** para reutilizar la configuración de otro departamento.

     Luego elige el departamento que deseas copiar.
   - Selecciona los días de la semana en que el departamento estará activo haciendo clic en cada día.

     Después define los horarios. Puedes definir hasta dos intervalos para cada día.
   - Activa **Feriados en {País}** para incluir automáticamente los feriados nacionales.
     - Haz clic en `Ver todos los feriados` para consultar la lista completa.
     - Para excluir un feriado, desactiva el botón de alternancia de su entrada.
   - Haz clic en `+ Agregar fechas específicas` para incluir fechas en que el departamento no funcionará, como recesos o feriados corporativos.

3. En **Define un límite en la cantidad de chats simultáneos por representante** ingresa el número máximo de chats que cada representante puede recibir al mismo tiempo. Este límite puede ser excedido cuando el representante elige chats manualmente o recibe transferencia de chats.

   Ingresa `0` para que los representantes tomen chats directamente de la cola, sin distribución automática.

   > ⚠️ El límite del representante prevalece en relación con el límite del equipo o del departamento. Por ejemplo, si el equipo tiene un límite de 20 chats, pero un representante tiene un límite de 25 chats, ese representante podrá atender hasta 25 chats de soporte.

4. Haz clic en `Continuar`.

#### Paso 2: Configurar cola

![Etapa 2 do assistente de criação de setor](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/configurações-vtex-cx-platform/configurar-o-live-desk_2.png)

- **Crear cola personalizada (recomendado):** permite definir los detalles de la cola manualmente.
- **Crear cola predeterminada (más rápido):** permite crear una cola con configuraciones predefinidas.

Si eliges **Crear cola personalizada** sigue las instrucciones a continuación:

1. Completa **Nombre de la cola** con un nombre para la cola, como *Pagos* o *Cambios*.
2. Activa **Limitar chats** para definir un máximo para la cola. Cuando se alcance el límite, no se crearán nuevos chats.
3. Haz clic en el menú **Seleccionar representante** para buscar y seleccionar los representantes de la cola.
4. Para agregar más de una cola al departamento, haz clic en `+ Agregar cola` y llena los campos de la misma manera.
5. Haz clic en `Continuar`.

#### Paso 3: Configurar opciones y mensajes

![Etapa 3 do assistente de criação de setor](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/configurações-vtex-cx-platform/configurar-o-live-desk_3.png)

En el paso tres, configura las opciones de chats de soporte, mensajes automatizados y tags del departamento. Sigue las instrucciones a continuación:

1. En **Opciones adicionales**, activa o desactiva las configuraciones según la necesidad de tu operación:

| Opción | Descripción |
| --- | --- |
| **Envío de plantillas de mensajes** | Permite que los representantes envíen plantillas de mensajes preconfiguradas durante el chat de soporte. |
| **Usar firma** | Agrega automáticamente el nombre del representante en cada mensaje enviado. |
| **Permitir a los representantes editar campos personalizables** | Permite que los representantes editen campos personalizados del contacto en la sección **Toda la información**. |

2. En **Mensajes automatizados**, configura el envío automático de mensajes a los contactos:

| Opción | Descripción |
| --- | --- |
| **Enviar mensaje automático a contactos en espera** | Envía un mensaje automático a contactos que esperan por un chat de soporte en la cola. El mensaje se muestra como si hubiera sido enviado por el representante asignado. |
| **Enviar mensaje automático al iniciar el soporte** | Envía un mensaje automático cuando se asigna el chat a un representante. El mensaje se muestra como si hubiera sido enviado por el representante asignado. |

3. En **Encuesta de satisfacción** activa **Enviar automáticamente una encuesta de satisfacción después de finalizar el chat de soporte en Live Desk** para recopilar feedback de los clientes al final de cada chat de soporte.

   Elige entre las opciones disponibles:

   - **Encuesta CSAT predeterminada (recomendado)**
   - **Flujos personalizados**

   > ⚠️ Para garantizar resultados precisos el flujo seleccionado debe utilizar una escala del 1 al 5.

4. En **Tags** configura las tags del departamento:
   - En el campo **Nombre de la tag** busca una tag existente o ingresa un nuevo nombre para crearla. Haz clic en `Agregar` para incluirla en el departamento.
   - Activa **Exigir tags al final del soporte humano** para que sea obligatorio agregar al menos una tag al cerrar un chat de soporte.

5. Después de completar los campos haz clic en `Continuar`.

#### Paso 4: Configurar mensaje rápido (opcional)

![Etapa 4 do assistente de criação de setor](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/configurações-vtex-cx-platform/configurar-o-live-desk_4.png)

En el paso cuatro, que es el último, configura mensajes rápidos para el departamento. Los mensajes rápidos son atajos que permiten a los representantes enviar respuestas estandarizadas con más agilidad durante el chat de soporte.

> ℹ️ Este paso es opcional. Puedes omitir la configuración de mensajes rápidos y completarla después en los ajustes del departamento.

Para agregar un mensaje rápido en **Configurar un mensaje rápido** sigue las instrucciones a continuación:

1. En **Atajo** ingresa la palabra o expresión que activará el mensaje. Por ejemplo: "Hola".
2. En **Mensaje** ingresa el texto que se enviará al activar el atajo. Por ejemplo: "Hola, ¿cómo puedo ayudarte hoy?". Este campo acepta hasta 1000 caracteres.
3. Para agregar más mensajes rápidos, haz clic en `+ Agregar nuevo mensaje rápido` y llena los mismos campos.
4. Cuando termines haz clic en `Crear`.

## Representantes

La pestaña **Representantes** permite ver y gestionar los representantes de tu operación.

La sección **Gestión de representantes** lista los representantes registrados. Para cada representante se muestra el nombre, email, departamento al que pertenece y número máximo de chats simultáneos que puede atender.

Puedes buscar un representante específico usando los siguientes filtros:

- **Filtrar por status**: muestra los representantes de acuerdo con su status actual, como online u offline.
- **Filtrar por representantes**: muestra uno o más representantes específicos.
- **Filtrar por departamentos**: muestra los representantes de un departamento.
- **Filtrar por colas**: muestra los representantes de una cola.

En esta pestaña también puedes realizar algunas acciones sobre los representantes:

- Cambiar departamentos y colas de representantes.
- Definir el límite de chats simultáneos de representantes.

Para aplicar una acción a uno o más representantes específicos marca la casilla junto al nombre de cada uno.

Para aplicar una acción a todos los representantes de la lista marca la casilla **Seleccionar todos los representantes**.
