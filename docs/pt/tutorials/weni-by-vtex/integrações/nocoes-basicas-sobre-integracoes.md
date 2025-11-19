---
title: 'Noções básicas sobre Integrações'
id: 5x9gjiQTdD6lrQLJziRozj
status: PUBLISHED
createdAt: 2025-09-15T15:52:46.844Z
updatedAt: 2025-10-03T14:20:32.177Z
publishedAt: 2025-10-03T14:20:32.177Z
firstPublishedAt: 2025-10-03T14:20:32.177Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: the-basics-of-integrations
legacySlug: nocoes-basicas-sobre-integracoes
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

### Integração via API

Integração é a ação realizar busca, modificar ou enviar informações para um serviço. As integrações se subdividem em duas:

- **Nativa**: A Weni plataforma consegue integrar com APIs que tem formato REST/Json através de um **cartão Webhook** ou através de uma aplicação pré-existente no menu de Integrações.
- **Não-nativa**: Fazemos integrações não nativas para API's que não são REST/Json. Porém, nesse caso, devemos analisar o esforço e escopo da solicitação, visto que usamos serviços externos para consumir e modelar a API, por exemplo [Back4app](https://www.back4app.com/#) e [Pipedream](https://pipedream.com/).

### O que é API?

É uma forma de comunicação entre sistemas, em que um deles fornece informações e serviços que podem ser utilizados pelo outro (Weni Plataforma). Normalmente uma API possui:

- URL
- Documentação explicando como ela pode ser utilizada
- Endpoints/recursos disponíveis
- Formas de Autenticação para usar a API, se for necessário.

### O que é Webhook?

Webhook é uma tecnologia utilizada para permitir a comunicação entre duas aplicações em tempo real. Na Weni Plataforma podemos buscar e até mesmo atualizar informações em outros sistemas através do cartão **Chamar Webhook**. Isso quer dizer que, para consumir uma API, você irá utilizar um cartão Webhook:

Para passar informações para um sistema usando API você deve usar o corpo da requisição (body) ou passar diretamente na URL (query). A documentação da API vai dizer como deve ser feito.

Nessa imagem podemos ver a documentação da API da Weni:

Nesta imagem podemos ver como ficaria o corpo da requisição para criar um contato com nome e número de WhatsApp:

> **Dica:** O card Chamar Webhook permite o uso de variáveis, como, por exemplo, @results @contact e @fields. [Saiba mais sobre variáveis aqui.](https://help.vtex.com/pt/docs/tutorials/introducao-a-expressoes-e-variaveis)

### Como saber se a API pode ser integrada nativamente?

A documentação da API funciona como um manual que nos ajuda a entender como integrar. Nela será informado se as requisições são na arquitetura nativa da Weni plataforma: REST/Json.

> **Nota:** Se a arquitetura da sua API não for REST/Json, ainda é possível fazer a integração, porém será necessário modelar essa API.

### Como visualizar a chamada de API na Weni plataforma?

Para visualizar o retorno da API, acesse o log de Webhooks no Módulo Fluxos:

Tem mais dúvidas sobre API? Joga na nossa [comunidade](https://comunidade.weni.ai/) 😉 Temos uma equipe especialista para tirar suas dúvidas.
