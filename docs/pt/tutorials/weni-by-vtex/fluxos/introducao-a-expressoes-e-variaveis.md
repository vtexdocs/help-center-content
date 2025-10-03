---
title: 'Introdução a expressões e variáveis'
id: 4MDzN6Z7Sau2Xt1eyyQ4Ik
status: PUBLISHED
createdAt: 2025-09-16T16:14:16.027Z
updatedAt: 2025-10-03T14:20:04.285Z
publishedAt: 2025-10-03T14:20:04.285Z
firstPublishedAt: 2025-10-03T14:20:04.285Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: expressions-and-variables-introduction
legacySlug: introducao-a-expressoes-e-variaveis
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

A criação de um fluxo é feita visando conectar um conjunto de ações por completo a fim de obter algum resultado.

As variáveis servem justamente para armazenar os valores e resultados dessas etapas, para persistir os dados. Por exemplo, a opção **Aguarde por Resposta** abaixo gerará uma variável de fluxo denominada _nome_ como resposta do contato. Além disso, a variável será usada para salvar os dados no campo de contato _Nome_.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/introducao-a-expressoes-e-variaveis_1.png)

Variáveis começam com o símbolo @. Porém, você também pode avançar para as expressões de uso mais complexo, utilizando `@( `. As expressões são modeladas dentro de sintaxes específicas e a sua ideia é tratar dados para manipular as variáveis salvas pela plataforma.

Ao usar variáveis de fluxo, também é possível especificar sub-tópicos que você deseja. Veja o exemplo abaixo:
  * `@results.gender.category` retorna a categoria em que a resposta dos contatos foi localizada;
  * `@results.gender.value` retorna a resposta completa dada pelo usuário;

Todas as variáveis e expressões apresentam o seu real valor quando o contato está ativo no fluxo. Se você digitar uma variável ou expressão de forma incorreta, a mensagem não será substituída e a fórmula errada será exibida ao usuário.

### Outras variáveis

Além da expressão `@results` existem também outras expressões que usamos bastante, são elas:

#### **`@contact`**
Essa expressão é usada para resgatar valores salvos em campos de contatos **padr ão** na Weni Plataforma e são atualizados através do cartão Update Contact (Atualizar o Contato). Exemplos:
  * `@contact.name:`Nome do contato
  * `@contact.first_name:`Primeiro nome do contato

#### **`@fields`**
Essa expressão é usada para resgatar valores salvos em campos de contatos que **n ão são padrões** na Weni Plataforma, através do cartão Update Contact (Atualizar o Contato). Campos de contato são muito utilizados para armazenar informações gerais sobre o contato, pois essas informações podem ser resgatadas em qualquer fluxo usando a expressão `@fields.`⁣, por exemplo:
  * `@fields.idade:`Idade do contato
  * `@fields.email:`Email do contato, caso esteja sendo salvo em campo de contato ao invés de URN

#### **`@urns`**
Essa expressão é usada para resgatar o identificador do canal principal do contato na Weni Plataforma (se o projeto não for anônimo), por exemplo:
  * `@urns.whatsapp:`Número do WhatsApp
  * `@urns.mailto:`Email do contato

#### **`@webhook`**
Essa expressão é usada para resgatar valores retornados da última chamada webhook feita no fluxo, por exemplo:
  * `@webhook.results.cliente:`Nome do cliente retornado da API, caso retorne somente 1 objeto
  * `@webhook.results.0.cliente:`Nome do cliente retornado da API. Caso retorne em array é necessário dizer a posição do array que deseja na expressão, usando 0, 1, 2 e assim por diante.

Para entender mais sobre expressões, assista nosso [Weni Responde sobre esse assunto](https://comunidade.weni.ai/t/expressoes-e-variaveis/248).
