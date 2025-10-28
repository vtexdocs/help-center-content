---
title: 'Weni Chats: Configurando el Atención Humana'
id: 2MnTerJXgAfJMRi0EqfTpp
status: PUBLISHED
createdAt: 2025-09-16T15:05:01.763Z
updatedAt: 2025-10-03T14:20:04.339Z
publishedAt: 2025-10-03T14:20:04.339Z
firstPublishedAt: 2025-10-03T14:20:04.339Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: weni-chats-setting-up-human-attendance
legacySlug: weni-chats-configurando-el-atencion-humana
locale: es
subcategoryId: 119WfAe6xGl5c0S1hLdHRQ
---

### Configurando el atención humana en el módulo Chats

Al igual que los otros módulos de la Plataforma Weni, el módulo **Chats** está dentro de un proyecto, por lo que es necesario que el usuario que lo configure sea administrador o moderador de dicho proyecto.

Para que un agente pueda utilizar el módulo Chats, es necesario que esté asignado a un **sector**, que es el nombre dado a un grupo de atención. Cada sector está compuesto por al menos un gerente, una cola y un agente.

El **gerente de atención** puede realizar cambios en el sector que administra, como ajustar el horario de atención, añadir o eliminar agentes, crear nuevas colas, y gestionar etiquetas (tags).

Toda esta gestión se lleva a cabo dentro del proyecto, en **Configuraciones > Chats**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/configuraciones-weni/weni-chats-configurando-el-atencion-humana_1.png)

### Sector

En el sector es donde se define el **horario de funcionamiento** de la atención humana, el **límite de atenciones simultáneas** por agente, y es posible añadir **etiquetas (tags)** para que los agentes clasifiquen el chat al finalizar la atención según el tema. Esto facilita búsquedas y la generación de informes posteriores.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/configuraciones-weni/weni-chats-configurando-el-atencion-humana_2.png)

### Colas

Un sector necesita tener al menos una cola. Las colas sirven para subdividir un sector, en caso de que se quiera tener un sector con más de un grupo de agentes. Si no es necesaria esta subdivisión, basta con crear una única cola.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/configuraciones-weni/weni-chats-configurando-el-atencion-humana_3.png)

Es posible ejemplificar el uso de colas en un sector de **Soporte Técnico**. Para este sector, puede ser útil tener las colas **Básico**, **Intermedio** y **Avanzado**, donde, a través de la filtración del bot, el contacto se dirige a la cola correspondiente según su necesidad.

Si el sector no requiere subdivisión, basta con crear una única cola.

Si un agente está asignado a más de una cola, ya sea dentro del mismo sector o en sectores diferentes, el módulo **Chats** distribuirá los atendimientos al agente según el **orden de llegada**.

### Tags(Etiquetas)

Las **tags** se utilizan para clasificar las características de la atención y permiten la búsqueda y filtración de los chats a partir de ellas. Al cerrar un chat, el agente utilizará las tags para clasificar el chat según el tema y otras características.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/configuraciones-weni/weni-chats-configurando-el-atencion-humana_4.png)
