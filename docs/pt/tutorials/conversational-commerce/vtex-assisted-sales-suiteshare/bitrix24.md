---
title: 'Bitrix24'
id: 20sDDS5YuO4fqzRcqhsSeE
status: PUBLISHED
createdAt: 2022-08-30T19:05:44.679Z
updatedAt: 2022-09-30T20:22:10.643Z
publishedAt: 2022-09-30T20:22:10.643Z
firstPublishedAt: 2022-08-30T19:23:59.024Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: bitrix24
legacySlug: bitrix24
locale: pt
subcategoryId: 4y4ylvqceE6vVqEF8IWZix
---

Com essa integração é possível criar Leads via VTEX Assisted Sales (SuiteShare) (através do formulário de captura) diretamente no Bitrix24.

Para realizar a integração acesse no seu painel da VTEX Assisted Sales (SuiteShare) as integrações, você pode acessar de duas formas. 

Na dashboard em **Integrações”**, clique em **Ver todas as integrações**. Ou clique em _**Configurações > Integrações**_.

![Bitrix24_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/conversational-commerce/vtex-assisted-sales-suiteshare/bitrix24_1.png)

Selecione o Bitrix24 sales e clique em **Integrar**.

Selecione o [formulário de captura](/pt/tutorial/formulario-de-captura--6NJ6JyS3x5P2iWEZGadHAo) que deseja conectar.

![Bitrix24_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/conversational-commerce/vtex-assisted-sales-suiteshare/bitrix24_2.png)

Dentro do Bitrix24, no menu a esquerda, clique em _**Aplicativos > Market**_.

![Bitrix24_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/conversational-commerce/vtex-assisted-sales-suiteshare/bitrix24_3.png)

No menu superior, clique em **Recursos para desenvolvedores**.

![Bitrix24_4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/conversational-commerce/vtex-assisted-sales-suiteshare/bitrix24_4.png)

Na página a seguir, clique em **Outro**.

![Bitrix24_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/conversational-commerce/vtex-assisted-sales-suiteshare/bitrix24_5.png)

Na página a seguir, clique em **Webhook de entrada**.

![Bitrix24_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/conversational-commerce/vtex-assisted-sales-suiteshare/bitrix24_6.png)

Na página a seguir, troque o **Criador de pedido** para `crm.lead.add`.

![Bitrix24_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/conversational-commerce/vtex-assisted-sales-suiteshare/bitrix24_7.png)

Copie a URL gerada no campo URL e clique em salvar. 

A URL copiada deve ser colada no campo **URL do Webhook** painel da VTEX Assisted Sales (SuiteShare) para cada um dos links que deseja integrar:

![Bitrix24_8](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/conversational-commerce/vtex-assisted-sales-suiteshare/bitrix24_8.png)

Pronto, integração finalizada!
