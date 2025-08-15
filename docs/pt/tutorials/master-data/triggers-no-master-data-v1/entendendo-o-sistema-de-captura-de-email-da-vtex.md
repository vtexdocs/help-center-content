---
title: 'Captura de email'
id: 15oNhcDa7HA8ztfJnpvhmJ
status: PUBLISHED
createdAt: 2022-10-17T19:51:45.533Z
updatedAt: 2023-07-20T17:49:29.730Z
publishedAt: 2023-07-20T17:49:29.730Z
firstPublishedAt: 2022-10-17T19:53:55.523Z
contentType: tutorial
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: understanding-vtexs-email-capture-system
legacySlug: entendendo-o-sistema-de-captura-de-email-da-vtex
locale: pt
subcategoryId: 2nx7hMJmisofwqwy2P9l2i
---

O objetivo deste artigo é mostrar como o e-mail de um usuário é recebido no CRM do [Master Data](https://help.vtex.com/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw). Para isto, será demonstrado como o **Checkout**, **RC.JS** e **Master Data** trabalham em conjunto para capturar as informações de e-mail de um novo usuário.

Para melhor compreensão, iremos apresentar um cenário (dividido em 3 etapas), onde o usuário conclui sua compra com sucesso e o pedido é encaminhado ao OMS, enquanto o seu e-mail é transmitido de forma segura para o Master Data. Neste contexto, as ações do usuário e o fluxo da plataforma ocorrem na seguinte ordem:

### Etapa 1 (Preenchimento de email)

| __Usuário__ | __Plataforma VTEX__ |
|------------------|------------------|
| Visita pela primeira vez o site da loja (usuário sem cadastro) e navega a procura do item desejado. | No navegador, o módulo Portal solicita que o RC.JS (request capture javascript) passe as informações adiante. |
| Adiciona o produto ao carrinho e clica no botão `Fechar Pedido`. | O módulo Checkout envia ao RC.JS, a seguinte mensagem: “Olá, temos uma transação prestes a acontecer. Por favor, passe essa informação adiante”. |
| Preenche o seu e-mail. | A informação é encaminhada para o Profile System. Neste estágio, o e-mail é capturado apenas pelo Profile System, não pelo RC.JS. |

### Etapa 2 (Preenchimento de dados pessoais)

| __Usuário__ | __Plataforma VTEX__ |
|------------------|------------------|
| Preenche as informações pessoais obrigatórias (nome, sobrenome e CPF). | A informação é encaminhada para o Profile System. Neste estágio, o e-mail é capturado apenas pelo Profile System, não pelo RC.JS. |

### Etapa 3 (Confirmação de envio de dados pessoais)

| __Usuário__ | __Plataforma VTEX__ |
|------------------|------------------|
| Clica em `Ir para entrega`. | Checkout solicita que o RC.JS transfira o endereço de e-mail e as informações do carrinho para o Master Data (por meio do Profile System). |

> ⚠️ Para que a função do [carrinho abandonado](https://help.vtex.com/pt/tutorial/acesse-o-carrinho-abandonado-dos-clientes--4bbXy1TlzJaiCr41xKDN4e#) possa ser utilizada, é necessário que o usuário tenha preenchido as seguintes informações: e-mail, nome, sobrenome e CPF. A falta de um destes dados, impossibilita a utilização do carrinho abandonado.

| __Usuário__ | __Plataforma VTEX__ |
|------------------|------------------|
| Preenche as informações de frete e pagamento. | O orderForm do Checkout torna-se um pedido e é transmitido para o OMS da VTEX. As informações completas do usuário (nome, sobrenome, e-mail, carrinho e todas as informações adicionais) são transmitidas para o Master Data. A captura de e-mail pode levar até 46 minutos para ser corretamente refletida no CRM. |

> ℹ️ Cada módulo da VTEX é responsável por solicitar ao RC.JS que transmita os dados capturados na sessão. O RC.JS tem por função agir como um "mensageiro" de informações.

![image (3)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/master-data/triggers-no-master-data-v1/entendendo-o-sistema-de-captura-de-email-da-vtex_1.png)
