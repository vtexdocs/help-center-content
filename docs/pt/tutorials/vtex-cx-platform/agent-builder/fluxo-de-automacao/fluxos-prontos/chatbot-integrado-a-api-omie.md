---
title: "Chatbot integrado a API Omie"
id: 1W5RJ85YEpDtSliYRE90xB
status: PUBLISHED
createdAt: 2025-09-17T14:21:19.010Z
updatedAt: 2026-11-12T12:20:00.000Z
publishedAt: 2025-10-03T14:20:03.593Z
firstPublishedAt: 2025-10-03T14:20:03.593Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: chatbot-integrado-a-api-omie
legacySlug: chatbot-integrado-a-api-omie
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Este template envia a **segunda via em PDF** e faz a **captura de leads** (contatos que ainda não são clientes). O template foi desenvolvido no VTEX CX Platform e usa a API da [Omie](https://www.omie.com.br/).

[Demonstração do template](https://www.youtube.com/watch?v=7HtP5Vdm0nc)

## Antes de começar

Para consumir a [API da Omie](https://developer.omie.com.br/), é necessário um aplicativo Omie com as credenciais [AppKey e AppSecret](https://app.omie.com.br/my-apps/).

## Segunda via em PDF

Para a funcionalidade de envio da **Segunda via de boleto em PDF** usamos o **Módulo Geral** para o credenciamento dos clientes e o **Módulo de Finanças** para a listagem de lançamentos e boletos.

Para o fornecimento de segunda via de boletos, por questão de segurança da informação, o usuário precisa informar o **CPF ou CNPJ**. Após o usuário informar CPF ou CNPJ, consultamos o recurso [ListarClientes](https://app.omie.com.br/api/v1/geral/clientes/#ListarClientes) para verificar o cadastro do cliente ou fornecedor para prosseguir com a confirmação dos dados. A confirmação dos dados pode ser feita de 2 formas:

  * **4 últimos dígitos do Telefone cadastrado na Omie**
  * **E-mail cadastrado na Omie**

Você pode escolher se a confirmação vai ser por e-mail ou usando os 4 últimos dígitos do telefone cadastrado. Sempre que quiser, você pode personalizar o seu tipo de credenciamento.
Após o usuário estar credenciado, ele receberá as informações financeiras das parcelas através do recurso de [Lançamentos](https://app.omie.com.br/api/v1/financas/pesquisartitulos/#PesquisarLancamentos). Após o chatbot enviar os lançamentos, usamos o recurso de [ObterURLBoleto](https://app.omie.com.br/api/v1/financas/pesquisartitulos/#ObterURLBoleto) para enviar o PDF do boleto referente a esse lançamento.

## Captura de leads

A captura de leads usa o **Módulo CRM** para criar **Contatos e Oportunidades**.

A captura de leads do chatbot é usada para não clientes e você pode personalizar as mensagens de acordo com o seu negócio. As principais informações que coletamos para a criação do contato e oportunidade são: **nome**, **telefone** e **e-mail**.

Para criar o contato desse lead no módulo de CRM usamos o recurso [IncluirContato](https://app.omie.com.br/api/v1/crm/contatos/#IncluirContato). Para criar uma oportunidade e associar a este contato, usamos o recurso [IncluirOportunidade](https://app.omie.com.br/api/v1/crm/oportunidades/#IncluirOportunidade). É importante ressaltar que nosso chatbot template cria oportunidades associando a um vendedor, a uma conta, a uma origem e a uma solução.

Para usar este template, entre em contato com a equipe comercial da VTEX e solicite uma demonstração.
