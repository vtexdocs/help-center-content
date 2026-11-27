---
title: 'Agent Builder'
createdAt: 2025-07-23T12:24:11.906Z
updatedAt: 2026-11-12T18:32:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: agent-builder-overview
locale: es
categoryCover: true
---

Agent Builder es la herramienta de VTEX CX Platform para configurar, gestionar y probar agentes de inteligencia artificial (IA) que interactúan con los clientes. A través de estos agentes, es posible automatizar la atención relacionada con distintas necesidades, como consultas sobre pedidos, información sobre productos del catálogo y solicitudes de cancelación.

El funcionamiento de los agentes se basa en una estructura de colaboración entre dos tipos de agentes:

- **Agente orquestador (manager):** punto de contacto con el cliente, responsable de conducir la conversación, interpretar las solicitudes recibidas y activar a los agentes colaboradores adecuados para cada situación.
- **Agentes colaboradores:** agentes especializados en determinadas tareas o dominios de conocimiento, responsables de proporcionar información o ejecutar acciones de acuerdo con las solicitudes enviadas por el agente orquestador.

VTEX CX Platform ofrece agentes colaboradores predefinidos para distintos escenarios de atención. Puedes seleccionar los agentes adecuados a las necesidades de tu operación, configurarlos y probarlos en Agent Builder. Para conocer los agentes disponibles, consulta [Agentes oficiales de VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/agentes-oficiais-da-vtex-cx-platform).

Si tu operación tiene necesidades específicas que no están cubiertas por los agentes oficiales, también es posible desarrollar agentes personalizados mediante el [CLI de VTEX CX Platform](https://developers.vtex.com/docs/guides/using-the-weni-by-vtex-cli).

## Páginas de Agent Builder

Para acceder a Agent Builder, selecciona la organización y el proyecto que deseas gestionar en la página de inicio de VTEX CX Platform. Agent Builder está compuesto por las siguientes páginas:

- [Mis agentes](https://help.vtex.com/es/docs/tutorials/agent-builder-meus-agentes): área de gestión y prueba de los agentes colaboradores y de configuración del agente orquestador.
- [Base de conocimiento](https://help.vtex.com/es/docs/tutorials/base-de-conhecimento): conjunto de archivos, sitios web y textos que sirven como fuentes de información para que los agentes respondan a los clientes.
- [Flujo de automatización](https://help.vtex.com/es/docs/tutorials/visao-geral-fluxo-de-automacao): área de configuración de flujos automatizados que determinan las interacciones y respuestas de los agentes según los mensajes de los clientes.
