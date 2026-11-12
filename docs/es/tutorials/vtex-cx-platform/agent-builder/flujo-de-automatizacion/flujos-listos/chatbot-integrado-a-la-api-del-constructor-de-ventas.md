---
title: "Chatbot integrado a la API del Constructor de Ventas"
id: 31l91LHeVDM8I2ldGxrrAn
status: PUBLISHED
createdAt: 2025-09-17T14:25:32.909Z
updatedAt: 2026-11-12T12:20:00.000Z
publishedAt: 2025-10-03T14:20:03.502Z
firstPublishedAt: 2025-10-03T14:20:03.502Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: construtor-de-vendas-api-integrated-chatbot
legacySlug: chatbot-integrado-a-la-api-del-constructor-de-ventas
locale: es
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Este template lista emprendimientos, envía dirección, materiales de campaña y planos, crea leads con el historial de la conversación y abre atenciones en el módulo Relacionamiento. El template se desarrolló en VTEX CX Platform y usa la [API del Constructor de Ventas](https://docs.cvcrm.com.br/).

Vea una demostración para entender cómo funciona el chatbot y sus reglas de negocio:
[Demostración del Chatbot Template CV @cvcrm | VTEX CX Platform](https://www.youtube.com/watch?v=Pdis7GPSeiU)

## Antes de comenzar

Para iniciar el uso de la integración, algunos datos son necesarios para configurar su chatbot:

- **Correo electrónico y token de consumo de la API del CV:** Cree un token y un correo electrónico para consumir la API del CV. Para saber cómo generar el token, consulte el artículo [Como gerar um token (Painel do Gestor)](https://suporte.cvcrm.com.br/kb/article/139171/como-gerar-um-token-painel-do-gestor).
- **Asuntos y subasuntos que se utilizarán en la atención:** Los asuntos y subasuntos son obligatorios para abrir una atención en el CV. Por lo tanto, para cada opción del menú que abra una atención en el CV, informe cuál será el ID del asunto y el ID del subasunto. Para saber cómo crearlos, vea el tutorial [Como criar um assunto e subassunto de atendimento (Painel do Gestor)](https://suporte.cvcrm.com.br/kb/article/159333/como-criar-um-assunto-e-subassunto-de-atendimento-painel-do-g).
