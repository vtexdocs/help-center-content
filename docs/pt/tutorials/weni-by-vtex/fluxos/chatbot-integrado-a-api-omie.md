---
title: 'Chatbot Integrado a API Omie'
id: 1W5RJ85YEpDtSliYRE90xB
status: PUBLISHED
createdAt: 2025-09-17T14:21:19.010Z
updatedAt: 2025-10-03T14:20:03.593Z
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

### Chatbot Template Omie

É um chatbot pronto para envio de **Segunda via em PDF** e **Captura de Leads** (possíveis clientes para o seu negócio). A Weni fornece soluções digitais para automatização da comunicação consciente, aberta e acessível. Este chatbot é um projeto template desenvolvido pela Weni, utilizando a API da [Omie](https://www.omie.com.br/).

Lembrando que, para consumir a [API da Omie](https://developer.omie.com.br/) é requisito possuir um aplicativo Omie com as seguintes credenciais: [AppKey e AppSecret](https://app.omie.com.br/my-apps/).

[Assista uma demonstração do Chatbot Template.](https://www.youtube.com/watch?v=7HtP5Vdm0nc)

#### Segunda via em PDF

Para a funcionalidade de envio da **Segunda via de boleto em PDF** usamos o **Módulo Geral** para Credenciamento dos clientes e **Módulo de Finanças** para listagem de lançamentos e boletos.

Para o fornecimento de segunda via de boletos, por questão de segurança da informação, o usuário precisa informar o **CPF ou CNPJ.** Após o usuário informar CPF ou CNPJ, consultamos o recurso [ListarClientes](https://app.omie.com.br/api/v1/geral/clientes/#ListarClientes) para verificar o cadastro do cliente ou fornecedor para prosseguir com a confirmação dos dados. A confirmação dos dados pode ser feita de 2 formas:
  * **4 últimos dígitos do Telefone cadastrado na Omie**
  * **Email cadastrado na Omie**

Você pode escolher se a confirmação vai ser por email ou usando os 4 últimos dígitos do telefone cadastrado. Sempre que quiser, você pode personalizar o seu tipo de credenciamento.
Após o usuário estar credenciado, ele receberá as informações financeiras das parcelas através do recurso de [Lançamentos](https://app.omie.com.br/api/v1/financas/pesquisartitulos/#PesquisarLancamentos). Após o chatbot enviar os lançamentos, usamos o recurso de [ObterURLBoleto](https://app.omie.com.br/api/v1/financas/pesquisartitulos/#ObterURLBoleto) para enviar o PDF do boleto referente a esse lançamento.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/chatbot-integrado-a-api-omie_1.png)

#### Captura de Leads

Para a funcionalidade de Captura de Leads usamos o **M ódulo CRM** para criar **Contatos e Oportunidades**.

A captura de leads do chatbot é usada para não clientes e você pode personalizar as mensagens de acordo com o seu negócio. As principais informações que coletamos para a criação do contato e oportunidade são: **nome** , **telefone** e **email**.

Para criar o contato desse lead no módulo de CRM usamos o recurso [IncluirContato](https://app.omie.com.br/api/v1/crm/contatos/#IncluirContato). Para criar uma oportunidade e associar a este contato, usamos o recurso [IncluirOportunidade](https://app.omie.com.br/api/v1/crm/oportunidades/#IncluirOportunidade). É importante ressaltar que nosso chatbot template cria oportunidades associando a um vendedor, uma conta, origem e solução.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/chatbot-integrado-a-api-omie_2.png)

🤩 Tem interesse nessa solução para o seu negócio? Entre em contato com nossa equipe comercial e solicite uma demonstração.

