---
title: 'Aprendizaje Zero Shot'
id: 5Qk9g3o19n26jSz7cnbVL8
status: PUBLISHED
createdAt: 2025-09-16T16:48:11.308Z
updatedAt: 2025-10-03T14:20:03.861Z
publishedAt: 2025-10-03T14:20:03.861Z
firstPublishedAt: 2025-10-03T14:20:03.861Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: zero-shot-learning
legacySlug: aprendizaje-zero-shot
locale: es
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Zero Shot es una técnica de procesamiento de lenguaje natural que permite a los **agentes inteligentes reconocer caracter ísticas que no han sido entrenadas previamente**. Zero Shot no necesita datos de entrenamiento, lo que permite acelerar el proceso de creación de IA y clasificar frases de manera rápida y precisa. Sus mayores beneficios son: aumentar la adhesión de los clientes, mejorar la comprensión durante la conversación con el usuario final y facilitar la implementación de IA en nuevos proyectos.

Algunas informaciones importantes sobre el modelo:
  * ZeroShot se muestra superior en la clasificación en portugués, español e inglés en comparación con los líderes actuales del mercado:

Zero Shot| 78,4% Exactitud
---|---
GPT-4-Turbo| 76,8% Exactitud
Claude 3 (Sonnet)| 77,6% Exactitud
  * Al menos 3 veces más rápido en la clasificación (inferencia);
  * Modelo eficiente incluido en su plan Weni, sin necesidad de llamadas de API o costos adicionales;
  * Implementación fácil y rápida.

Vea un video rápido y explicativo: [video.](https://youtu.be/RDRgSXIJRrM)

#### Aplicación y Funcionalidades

El funcionamiento de la aplicación de Zero Shot consiste en recibir como entrada una frase, que será categorizada, e identificar a qué categoría pertenece esta entrada según el contexto del cliente. Las categorías se definen a través de Frases de comando, que sirven de contexto para identificar y generar la clasificación correcta. A partir de los datos de entrada, se espera que el modelo devuelva la categoría de la frase.

Cuando hablamos de contexto, tenga en cuenta que siempre que use Zero Shot, debemos configurar las Frases de Comando. Estas frases instruir án a la inteligencia para clasificar sus intenciones (llamadas ""Clases"") de acuerdo con las reglas que usted defina.

#### Zero Shot en la Práctica

Hay dos formas de crear una IA de clasificación de tipo Zero Shot en la Plataforma Weni: a través de las tarjetas de flujo** ""Clasificar automáticamente"" y ""Esperar por respuesta inteligente"".**

#### **Esperar por respuesta inteligente**

Con la tarjeta **"" Esperar por respuesta inteligente""**, puede esperar la respuesta del usuario y enviar esa respuesta directamente a su Clasificación de IA, de modo que pueda crear sus categorías y tratar cada intención según desee:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/aprendizaje-zero-shot_1.png)

En el ejemplo siguiente, creamos las intenciones y sus respectivos contextos para que podamos categorizar y tratar las solicitudes del usuario:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/aprendizaje-zero-shot_2.png)

Recuerde, cada categoría debe tener una Frase de Comando. **Estas frases instruir án a la inteligencia y puede usar estos ejemplos:**
- Cuando el usuario quiere saber cuáles son las modalidades y los plazos de entrega > Entrega
- Cuando el usuario quiere saber por qué su pedido se retrasó o si se retrasará > Atraso
- Cuando el usuario quiere reemplazar un producto o hablar sobre un producto que fue reemplazado o cambiar un artículo > Substitución

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/aprendizaje-zero-shot_3.png)

#### **Clasificar automáticamente **

Con la tarjeta ""Clasificar automáticamente"", puede utilizar una expresión o variables como entrada para la clasificación de la intención (Clase) del usuario. Normalmente, esta tarjeta se usa cuando ya tiene un texto para tratar y no necesita esperar una respuesta del usuario antes de consultar la Inteligencia Artificial:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/aprendizaje-zero-shot_4.png)
