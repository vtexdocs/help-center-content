---
title: 'Sales Operations Agent y cartera de clientes en VTEX Sales App'
createdAt: 2026-10-06T00:00:00.000Z
updatedAt: 2026-10-16T00:00:00.000Z
contentType: tutorial
productTeam: Physical Stores
slugEN: sales-operations-agent-and-customer-portfolio-on-vtex-sales-app
locale: es
---

> ℹ️ **Sales Operations Agent** está en fase beta, lo que significa que estamos trabajando para mejorarlo. Actualmente, la disponibilidad es solo para cuentas seleccionadas que utilizan **Sales App B2B**. Si tienes alguna duda, ponte en contacto con [nuestro Soporte](https://help.vtex.com/support).

**Sales Operations Agent** es un agente de inteligencia artificial de [VTEX Sales App](/es/docs/tracks/que-es-vtex-sales-app) que permite administrar [equipos de ventas, vendedores y carteras de clientes](#conceptos) a través de una experiencia conversacional. Este artículo explica el funcionamiento del agente en el Admin VTEX y las acciones que puede realizar en operaciones B2B.

> ⚠️ **Sales Operations Agent** permite administrar equipos y carteras de clientes de [B2B Buyer Portal](/es/docs/tutorials/b2b-buyer-portal-es). Para más información sobre la gestión de vendedores de tiendas físicas, consulta el artículo [Gestionar vendedores en VTEX Sales App](/es/docs/tracks/gestionar-vendedores-en-vtex-sales-app).

## Prerrequisitos

Tu cuenta debe utilizar [B2B Buyer Portal](/es/docs/tutorials/b2b-buyer-portal-es). Si trabajas con equipos de ventas que atienden carteras de clientes, debes tener un [contrato B2B](/es/docs/tutorials/contratos-b2b-es) registrado.

## Conceptos

La siguiente tabla presenta la terminología utilizada en **Sales Operations Agent**:

| **Término**                                                              | **Significado**                                                                                                                                                                                                                                      |
| :------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Equipo](#realizar-acciones-en-equipos)                                  | Unidad de la estructura de ventas. Puede organizarse de forma jerárquica con equipos y subequipos, reflejando el organigrama de la organización comercial.                                                           |
| [Vendedor](#realizar-acciones-en-vendedores)                             | Persona del equipo comercial registrada a través del agente y con [rol](#permisos-de-acceso-de-vendedores) restringido.                                                                                                              |
| [Cartera de clientes](#realizar-acciones-en-carteras-de-clientes)        | Vínculo entre un contrato y un equipo o subequipo que permite a los vendedores ver y crear pedidos relacionados con el contrato. Más información en [Acceso de equipos a contratos](#acceso-de-equipos-a-contratos). |
| [Contrato B2B](/es/docs/tutorials/contratos-b2b-es) | [Contrato](/es/docs/tutorials/contratos-b2b-es) previamente registrado en la cuenta utilizado en la creación de carteras de clientes.                                                                           |

## Permisos de acceso

Para usar el agente, el [rol](/es/docs/tutorials/roles) del usuario debe tener los [recursos de License Manager](/es/docs/tutorials/recursos-del-license-manager) correspondientes a las acciones que se van a ejecutar.

> ℹ️ El agente no crea roles.

La siguiente tabla indica los recursos necesarios para cada acción:

| Producto           | Categoría                         | Recurso                                                       | Operaciones permitidas                                                                                         |
| :----------------- | :-------------------------------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------- |
| Organization Units | units                             | **View Organization Unit**                                    | Listar equipos y ver detalles, integrantes y contratos vinculados.                             |
| Organization Units | units                             | **Edit Organization Unit**                                    | Crear, renombrar, mover y desactivar equipos, agregar y remover usuarios y vincular contratos. |
| Organization Units | units                             | **Move Organization Unit**                                    | Transformar un equipo padre en subequipo o mover un subequipo dentro de la jerarquía.          |
| License Manager    | Services access control           | **Edit Admin Users**                                          | Crear, editar o remover usuarios o claves de aplicación.                                       |
| License Manager    | Services access control           | **View Admin Users**                                          | Listar todos los usuarios de la cuenta.                                                        |
| Dynamic Storage    | Dynamic storage generic resources | **Read only documents**                                       | Leer documentos.                                                                               |
| Dynamic Storage    | Dynamic storage generic resources | **Insert or update document (not remove)** | Crear y actualizar documentos, pero no removerlos.                                             |

> ℹ️ Si el usuario solo necesita consultar información, el recurso **Read only documents** de Dynamic Storage es suficiente.

Para otorgar el acceso mínimo necesario, recomendamos [crear un rol](/es/docs/tutorials/crear-nuevo-rol) personalizado solo con los recursos mencionados anteriormente. El agente no crea [roles](/es/docs/tutorials/crear-nuevo-rol).

### Permisos de acceso de vendedores

Al crear un vendedor, el agente le asigna automáticamente el rol [inStore Sales Person](/es/docs/tutorials/roles-de-usuario-predefinidos#instore-sales-person). No es posible asignar otro rol a los vendedores.

El rol [inStore Sales Person](/es/docs/tutorials/roles-de-usuario-predefinidos#instore-sales-person) permite a los usuarios acceder a **Sales App** para ver y crear pedidos en nombre de los clientes.

## Casos de uso

**Sales Operations Agent** interpreta tu instrucción, prepara y presenta el plan de cambio en la estructura comercial, y solo ejecuta la acción después de tu revisión y confirmación. Consulta algunos casos de uso:

- **Crear organigrama de ventas:** crear equipos y subequipos siguiendo la misma lógica de la operación, como estructuras por regiones, ciudades o carteras de clientes.
- **Registrar representantes de ventas:** registrar miembros del equipo comercial en la estructura de ventas, asociando a cada persona al equipo deseado.
- **Controlar carteras de clientes:** vincular [contratos B2B](/es/docs/tutorials/contratos-b2b-es) a un equipo o subequipo para definir los contratos a los que tendrán acceso los vendedores mediante **Sales App**.
- **Modificar varios registros simultáneamente:** modificar varios registros al mismo tiempo, ya sea de forma totalmente conversacional o mediante la importación de archivos `.xlsx`, `.csv`, `.txt` o `.json`.

## Acceder al agente

Para abrir **Sales Operations Agent**, en el Admin VTEX accede a **Apps > Gestión de ventas > Agente de equipo**. La interfaz se compone de un chat, como se muestra en la siguiente imagen:

![sales-operations-agent-interface-es](XXX)

La pantalla presenta algunas sugerencias para comenzar. Al hacer clic en una sugerencia o ingresar una instrucción en el chat y hacer clic en **Enviar**, el agente iniciará la interacción.

> ℹ️ Para más información sobre las acciones ejecutadas por el agente, consulta la sección [Gestionar equipos, vendedores y carteras de clientes](#gestionar-equipos-vendedores-y-carteras-de-clientes).

**Sales Operations Agent** puede ejecutar solicitudes de forma totalmente conversacional o hacer [cambios en masa](#realizar-acciones-en-masa-en-equipos-vendedores-y-carteras-de-clientes) mediante la importación de archivos, según se describe a continuación.

## Reglas de funcionamiento

El agente solo ejecuta acciones después de presentar un plan y obtener tu [confirmación](#revision-y-confirmacion-del-plan). Las reglas de funcionamiento son:

- **Respuestas sin suposiciones:** cuando no dispone de cierta información o no tiene permiso para acceder a ella, el agente comunica esa limitación.
- **Desambiguación de nombres:** cuando identifica nombres similares o duplicados, el agente solicita aclaraciones antes de crear el plan. Por ejemplo, si solicitas la creación de un equipo llamado "ventas sur" y ya existe un "VENTAS SUR", el agente lo comunicará.
- **Validación y control de usuarios:** cada [usuario](/es/docs/tutorials/gestionar-usuarios-administradores) puede consultar solo la información [permitida por los recursos de su rol](#permisos-de-acceso).
- **Validación de contratos:** el agente permite vincular solo contratos B2B previamente registrados en la cuenta.
- **Alerta de contrato compartido:** si un contrato ya está vinculado a otro equipo, el agente informa esta condición y permite realizar el vínculo.
- **Mensajes de error:** si se identifican errores o inconsistencias, el agente informa los motivos y presenta el plan de ejecución parcial con los datos válidos para que lo [revises y confirmes](#revision-y-confirmacion-del-plan).

### Restricciones de alcance

**Sales Operations Agent** tiene las siguientes restricciones:

- ❌ No accede ni modifica datos de compradores, contactos u organizaciones de [B2B Buyer Portal](/es/docs/tutorials/b2b-buyer-portal-es).
- ❌ No crea contratos B2B.
- ❌ No envía emails ni otros mensajes.
- ❌ No configura permisos de acceso de usuarios. La única excepción es el rol [inStore Sales Person](/es/docs/tutorials/roles-de-usuario-predefinidos#instore-sales-person), asignado de forma predeterminada al crear vendedores.
- ❌ No muestra historial de auditoría. Para consultar el historial, utiliza [Audit](/es/docs/tutorials/audit).

### Revisión y confirmación del plan

Antes de crear, editar o remover un elemento de forma conversacional o mediante la importación de archivos, el agente presenta un plan de lo que se ejecutará y solo realiza los cambios después de tu revisión y confirmación.

Si hay algún error o inconsistencia en la información recibida, el agente muestra los mensajes de error y una pantalla de validación con el plan de las acciones que se ejecutarán. Para archivos importados, el agente procesa todo el contenido y separa las filas válidas de las no válidas (cuando hay error): las filas válidas siguen el plan y las no válidas se rechazan con la indicación del motivo.

## Gestionar equipos, vendedores y carteras de clientes

**Sales Operations Agent** permite:

- [Realizar acciones en vendedores](#realizar-acciones-en-vendedores)
- [Realizar acciones en equipos](#realizar-acciones-en-equipos)
- [Realizar acciones en carteras de clientes](#realizar-acciones-en-carteras-de-clientes)
- [Realizar acciones en masa en equipos, vendedores y carteras de clientes](#realizar-acciones-en-masa-en-equipos-vendedores-y-carteras-de-clientes)

Las acciones se ejecutan solo después de la [confirmación del plan](#revision-y-confirmacion-del-plan) por un usuario con los [permisos de acceso](#permisos-de-acceso) necesarios.

> ⚠️ Los ejemplos de instrucción presentados en las secciones son ilustrativos y no son la única forma en que el agente puede entender y ejecutar una acción.

### Realizar acciones en vendedores

Los integrantes del equipo registrados por **Sales Operations Agent** se denominan vendedores. La siguiente tabla muestra las acciones que puedes realizar en vendedores:

| **Acción**                             | **Información necesaria**                                                                                                                                                                                                                                                                     | **Ejemplos de instrucción**                                                                                                                                     |
| :-------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Crear vendedor                         | Nombre del vendedor + email + nombre o ID del equipo. El código del vendedor y de la tienda son opcionales. Más información sobre las restricciones de este usuario en [Permisos de acceso de vendedores](#permisos-de-acceso-de-vendedores). | "Crea a José Almeida `jose@acme.com` en el equipo Norte" o "Registra a Ricardo Alvarado `ricardo.alvarado@empresa.com` código 204 y tienda 573 en Ventas Norte" |
| Agregar vendedor al equipo             | Nombre, ID o email del vendedor + nombre o ID del equipo.                                                                                                                                                                                                                     | "Agrega a Ricardo Alvarado al equipo Ventas Norte" o "Incluye a `jose.vendedor@acme.com` en Ventas Sur"                                                         |
| Buscar o ver información del vendedor  | Nombre, ID o email del vendedor.                                                                                                                                                                                                                                              | "¿A qué equipos pertenece Ricardo Alvarado?" o "¿Qué contratos atiende `jose@acme.com`?"                                                                        |
| Mover vendedor entre equipos           | Nombre, ID o email del vendedor + nombre o ID del equipo de destino.                                                                                                                                                                                                          | "Mueve a José Almeida al equipo Sur" o "Mueve el ID 7329 al equipo Norte"                                                                                       |
| Deshacer creación reciente de vendedor | Puedes deshacer creaciones recientes si estás en la misma sesión. Indica el nombre, ID o email del vendedor y la acción que se debe deshacer.                                                                                                                 | "Deshaz la creación del vendedor Ricardo Alvarado" o "Descarta la creación de José Almeida"                                                                     |
| Remover vendedor del equipo            | Nombre, ID o email del vendedor. Remover un vendedor de un equipo solo desvincula a la persona del equipo, sin dejar de existir como [usuario](#permisos-de-acceso-de-vendedores) de la cuenta.                                                               | "Remueve a José Almeida de Ventas Sur"                                                                                                                          |

> ℹ️ Cuando creas, agregas o remueves más de un vendedor en una misma acción, ya sea mediante un archivo o de forma conversacional, si se produce algún error, el agente muestra los mensajes de error y una pantalla de validación con las acciones que se realizarán. Debes revisar y confirmar este resumen para que la acción se ejecute.

### Realizar acciones en equipos

El equipo es la unidad de la estructura de ventas en el contexto de **Sales Operations Agent**. Puedes organizar los equipos de forma jerárquica, con equipos padre y subequipos.

> ⚠️ Después de transformar un equipo padre en un subequipo no puedes moverlo al nivel raíz de nuevo. Antes de crear los equipos, te recomendamos definir una jerarquía que refleje el organigrama de la organización comercial.

La siguiente tabla muestra las acciones que puedes realizar en equipos:

| **Acción**                            | **Información requerida**                                                                                                                               | **Ejemplos de instrucción**                                                                                                                                                                         |
| :------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Crear equipo                          | Nombre del equipo. Si estás creando un subequipo, indica también el nombre del equipo padre.                            | "Crea el equipo Ventas Sur" o "Crea el subequipo Zona Metropolitana dentro del equipo Norte" o "Crea mis equipos de ventas: Equipo Sur, Equipo Este, Equipo Norte." |
| Crear subequipos por vendedor         | Adjunta un archivo `.xlsx`, `.csv`, `.txt` o `.json` con los datos de los vendedores y el equipo de destino.                            | "Crea subequipos basados en la cartera de cada vendedor" o "Quiero crear subequipos basados en la cartera de cada vendedor"                                                                         |
| Editar nombre del equipo              | Nombre actual del equipo y el nuevo nombre.                                                                                             | "Edita el equipo Ventas Oeste para Ventas Sur" o "Cambia el nombre Ventas Sur por Ventas Sur Principal"                                                                                             |
| Mover equipo                          | Nombres del equipo que se moverá y del equipo de destino.                                                                               | "Mueve el equipo Ventas Oeste dentro del equipo Norte" o "Coloca el equipo Ventas Oeste bajo el equipo Ventas Norte"                                                                                |
| Ver detalles del equipo               | Nombre o ID del equipo + información que deseas ver (vendedores, contratos vinculados o subequipos).                 | "¿A qué contratos tiene acceso Ventas Oeste?" o "¿Qué vendedores existen en el equipo Ventas Este?"                                                                                                 |
| Listar equipos                        | Solo el comando.                                                                                                                        | "Lista los equipos" o "Muestra todos los equipos"                                                                                                                                                   |
| Deshacer creación reciente de equipos | En la misma sesión puedes deshacer equipos recién creados. Indica el nombre o ID del equipo y la acción que se deshará. | "Deshaz la creación de Ventas Oeste" o "Cancela el nuevo equipo 8934"                                                                                                                               |
| Desactivar equipo                     | Nombre o ID del equipo.                                                                                                                 | "Desactiva el equipo Ventas Oeste" o "Remueve el subequipo Ventas Sur"                                                                                                                              |

### Realizar acciones en carteras de clientes

La cartera de clientes representa los contratos a los que el equipo o subequipo tiene acceso para ver cotizaciones y crear pedidos. Para que un único vendedor atienda una cartera, crea un subequipo con él como único integrante.

La siguiente tabla muestra las acciones que puedes realizar en las carteras de clientes:

| **Acción**                            | **Información requerida**                                                                                                                                                                                                                                | **Ejemplos de instrucción**                                                                                                                                                         |
| :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vincular contrato a uno o más equipos | Nombre o ID del contrato + nombre o ID de uno o más equipos. También puedes realizar esta [acción en masa](#realizar-acciones-en-masa-en-equipos-vendedores-y-carteras-de-clientes) mediante la importación de archivos. | "Vincula el contrato `9eea9b43-c83c-42e9-86a8-fbef4ed228d5` al Equipo Oeste, Equipo Este y Equipo Norte" o "Crea la cartera de clientes del Equipo Este con el contrato Empresa AG" |
| Ver carteras de clientes              | Nombre o ID del equipo o del contrato.                                                                                                                                                                                                   | "¿A qué carteras atiende el Equipo Este?" o "¿A qué contratos se vinculó Ventas Oeste?"                                                                                             |
| Remover contrato de una cartera       | Nombre o ID del contrato + nombre o ID del equipo.                                                                                                                                                                                       | "Remueve el contrato `9eea9b43-c83c-42e9-86a8-fbef4ed228d5` de la cartera del Equipo Oeste" o "Remueve el contrato Empresa AG de la cartera del Equipo Este"                        |

> ⚠️ De forma predeterminada, cuando no vinculas un contrato a un equipo o subequipo, los vendedores pueden ver y crear pedidos para todos los contratos de la cuenta. Si no piensas usar carteras de clientes de forma segmentada, recomendamos no vincular contratos a equipos. De esta forma, toda tu lista de clientes estará disponible en **Sales App**.

#### Acceso de equipos a contratos

Vincular un contrato a un equipo define la cartera de clientes de ese equipo y cambia lo que el vendedor ve en **Sales App**.

- **Equipos con contratos vinculados:** los vendedores solo ven en **Sales App** las cotizaciones y pedidos correspondientes a los contratos vinculados. La creación de nuevos pedidos también queda restringida a esos contratos.
  - Ejemplo: el Equipo Oeste está vinculado a los contratos A y B, por lo que los vendedores de ese equipo solo pueden ver y crear pedidos para esos dos contratos.
- **Equipos sin contratos vinculados:** los vendedores ven todos los contratos de la cuenta.
  - Ejemplo: el Equipo Este no está vinculado a ningún contrato, por lo que los vendedores pueden ver y crear pedidos para todos los contratos de la cuenta.

> ⚠️ Te recomendamos confirmar los vínculos contractuales antes de definir restricciones al equipo de ventas.

### Realizar acciones en masa en equipos, vendedores y carteras de clientes

**Sales Operations Agent** te permite realizar acciones en masa mediante la importación de archivos en los formatos `.xlsx`, `.csv`, `.txt` o `.json`. Esto se aplica a los siguientes escenarios:

- **Equipos:** crear, mover, editar o desactivar equipos (la desactivación solo se aplica a equipos vacíos) y crear subequipos a partir de los vendedores.
- **Vendedores:** crear, agregar o remover vendedores de equipos.
- **Carteras de clientes:** vincular contratos a uno o más equipos.

Ejemplos de instrucción:

- "Crea 5 equipos regionales nuevos según el archivo"
- "Vincula los contratos con los equipos indicados en la plantilla"
- "Agrega todos los vendedores de la plantilla a los equipos indicados"
