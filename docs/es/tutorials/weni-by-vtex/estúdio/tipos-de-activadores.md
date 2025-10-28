---
title: 'Tipos de Activadores'
id: 6yVuYFp3lrmZL0C7AUdEac
status: PUBLISHED
createdAt: 2025-09-12T17:43:13.439Z
updatedAt: 2025-10-03T14:20:34.035Z
publishedAt: 2025-10-03T14:20:34.035Z
firstPublishedAt: 2025-10-03T14:20:34.035Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: triggers-types
legacySlug: tipos-de-activadores
locale: es
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

La palabra clave es la primera palabra en un mensaje y puede usarse para iniciar el flujo. Por ejemplo, puedes definir un activador usando la ""palabra clave"" para iniciar el flujo y registrar contactos en tu servicio.

Todos los pasos descritos aquí se realizarán en la pestaña ""**Activadores**"", ubicada dentro del módulo ""**Estudio**"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_1.png)

Para facilitar la navegación en este artículo, si deseas ir directamente a un tipo de activador específico, simplemente haz clic en su nombre a continuación:

- [Crea una palabra clave de mensaje que lance un flujo.](#Para_crear_una_palabra_clave_que_inicie_un_flujo)
- [Crea una palabra clave de mensaje que permita a las personas unirse a un grupo.](#Creando_una_palabra_clave_de_mensaje_que_permite_que_las_personas_ingresen_a_un_grupo)
- [Inicia un flujo después de recibir un mensaje que no coincide con ninguna palabra clave.](#Iniciar_un_flujo_después_de_recibir_un_mensaje_que_no_ha_sido_gestionado_en_otro_lugar)
- [Comienza un flujo en el futuro o en un horario.](#Iniciar_un_flujo_en_el_futuro_o_dentro_de_un_cronograma)
- [Inicia un flujo después de recibir una llamada.](#Iniciar_un_flujo_después_de_recibir_una_llamada)
- [Inicia un flujo después de una llamada perdida.](#Iniciar_un_flujo_después_de_una_llamada_perdida)
- [Inicia un flujo después de cerrar un ticket.](#Iniciar_un_flujo_después_del_cierre_de_ticket_con_un_agente_humano)

#### Para crear una palabra clave que inicie un flujo:

-  Haz clic en el botón ""Crear una palabra clave que inicie un flujo"".
![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_2.png)

-    En ""Palabra clave"", puedes definir una palabra que funcione como palabra clave

-   En ""Activar cuando"", elegirás entre dos opciones:**El mensaje comienza con la palabra clave**: Si la frase escrita por el usuario comienza con una palabra clave, el flujo seleccionado se activará

-   **El mensaje contiene solo la palabra clave**: El flujo seleccionado se activará si el usuario escribe únicamente la palabra clave.

-    En ""Flujo"", defines el flujo que se iniciará cuando se use la palabra clave

-   En ""Solo grupos"", es posible incluir o no incluir las reglas de este disparador para grupos de contacto específicos . Deja el espacio en blanco si deseas aplicar esta regla a todos los usuarios

-   Haz clic en la caja ""Crear Activador"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_3.png)

#### Creando una palabra clave de mensaje que permite que las personas ingresen a un grupo:

Usando este disparador para agregar un contacto a un grupo. Este disparador es útil para gestionar contactos que desean desvincularse de un grupo utilizando palabras clave como ""parar"" o ""congelar un registro""

Para crear un activador con una palabra clave que una contactos a un grupo:

-    Haz clic en el botón ""Crear una palabra clave de mensaje que permita que las personas se unan a un grupo"":

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_4.png)

-    Introduce una palabra clave en ""Unir palabra clave"".

-  Elige el grupo al que te gustaría agregar tus contactos en ""Grupo para unirse"".

-  Opcional: En ""Respuesta"", puedes seleccionar un mensaje para enviar.

-  En ""Flujo"", puedes elegir qué flujo se iniciará.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_5.png)

#### Iniciar un flujo después de recibir un mensaje que no ha sido gestionado en otro lugar:

Utiliza este activador para iniciar un flujo después de recibir un mensaje no capturado (cuando el mensaje no ha sido gestionado en otro lugar por otros activadores). Este activador puede emplearse para mensajes no tratados, ofreciendo un flujo informativo que explique tu servicio y dirija al usuario a un flujo adecuado.

-    Haz clic en el botón ""Inicie un flujo después de recibir un mensaje que no coincide con ninguna palabra clave""

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_6.png)

-    En ""Flujo"", puedes elegir qué flujo se iniciará.

-  En ""Solo grupos"", puedes seleccionar el/los grupo(s) en los que el disparador será incluido o no

-  si dejas el campo vacío, el disparador se aplicará a todos los contactos.

-  Haz clic en ""Crear Activador"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_7.png)

Si tu proyecto cuenta con atención humana, en el campo ""Grupos para Excluir"", selecciona el grupo en el que están las personas del equipo de atención humana para que el bot no interactúe con ellas durante el momento de la atención humana.
#### Iniciar un flujo en el futuro o dentro de un cronograma

Utiliza este activador para programar un flujo en un momento futuro, repitiéndolo diariamente, semanalmente o mensualmente. Para iniciar el flujo en el futuro o de forma programa
da:

-    Haz clic en el botón ""Empezar un flujo en el futuro o en un horario"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_8.png)

-    Elige la fecha en la que te gustaría programar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_9.png)

-    Justo debajo, en ""Repeat"", puedes optar por repetir el flujo diariamente, semanalmente o mensualmente (siendo opcional este uso).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_10.png)

-    Elige el flujo que deseas iniciar y selecciona a qué contactos o grupos se transmitirá o no el flujo.

-  Haz clic en ""Crear Activador"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_11.png)

#### Iniciar un flujo después de recibir una llamada

-  Haz clic en el botón ""Inicie un flujo después de recibir una llamada"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_12.png)

-    En ""Flujo"", puedes elegir qué flujo se iniciará.

-  En ""Solo grupos"", puedes seleccionar el/los grupo(s) en los que el disparador será incluido o no

-  si dejas el campo vacío, el activador se aplicará a todos los contactos.

-  Haz clic en ""Crear Activador"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_13.png)

#### Iniciar un flujo después de una llamada perdidaUtiliza este disparador después de una llamada perdida.

-    Haz clic en el botón ""Inicie un flujo después de una llamada perdida""

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_14.png)

-    En ""Flujo"", puedes elegir qué flujo se iniciará.

-  En ""Solo grupos"", puedes seleccionar el/los grupo(s) en los que el activador será incluido o no

-  si dejas el campo vacío, el activador se aplicará a todos los contactos.

-  Haz clic en ""Crear Activador"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_15.png)

#### Iniciar un flujo después del cierre de ticket con un agente humano

Utiliza este disparador para activar el flujo de finalización de atención humana en Weni Chats.

-    Haz clic en el botón ""Inicie un flujo después de cerrar un ticket.""

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_16.png)

-    En ""Flujo"", puedes elegir qué flujo se iniciará.

-  En ""Solo grupos"", puedes seleccionar el/los grupo(s) en los que el activador será o no incluido

-  si dejas el campo vacío, el activador se aplicará a todos los contactos.

-  Haz clic en ""Crear Activador"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/tipos-de-activadores_17.png)
