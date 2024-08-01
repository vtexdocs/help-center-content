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
slug: bitrix24
locale: pt
legacySlug: bitrix24
subcategory: 4y4ylvqceE6vVqEF8IWZix
---

Com essa integração é possível criar Leads via VTEX Assisted Sales (SuiteShare) (através do formulário de captura) diretamente no Bitrix24.

Para realizar a integração acesse no seu painel da VTEX Assisted Sales (SuiteShare) as integrações, você pode acessar de duas formas. 

Na dashboard em **Integrações”**, clique em **Ver todas as integrações**. Ou clique em _**Configurações > Integrações**_.

![Bitrix24_1](//images.ctfassets.net/alneenqid6w5/1FNycssXpEsblACNCy0eJx/5c5a7b399d4c6051e312e1b3b897a257/Bitrix24_1.png)

Selecione o Bitrix24 sales e clique em **Integrar**.

Selecione o [formulário de captura](https://help.vtex.com/pt/tutorial/formulario-de-captura--6NJ6JyS3x5P2iWEZGadHAo) que deseja conectar.

![Bitrix24_2](//images.ctfassets.net/alneenqid6w5/12eiYCSAdxKWQnXnG5TAGT/d2f2331416d7815b2ebb4cf6441637b6/Bitrix24_2.png)

Dentro do Bitrix24, no menu a esquerda, clique em _**Aplicativos > Market**_.

![Bitrix24_3](//images.ctfassets.net/alneenqid6w5/2fy2TlaXC9OJ4x9m8OT7Fw/a78dc1307d0865f1f05bc9c134d650d3/Bitrix24_3.png)

No menu superior, clique em **Recursos para desenvolvedores**.

![Bitrix24_4](//images.ctfassets.net/alneenqid6w5/5ICON3qpUxJ6gvoJWrmWC6/82d44a2fb708c421aa4b05a5095ae5f6/Bitrix24_4.png)

Na página a seguir, clique em **Outro**.

![Bitrix24_5](//images.ctfassets.net/alneenqid6w5/1gUel7t9l6x8DleZL10MFI/9afa3e49bf93432d0417b87621ff23d8/Bitrix24_5.png)

Na página a seguir, clique em **Webhook de entrada**.

![Bitrix24_6](//images.ctfassets.net/alneenqid6w5/6hUYhcVQE2qC2NclWfRXR7/0a2e1bfeca200c8efd6d5b10a7f0e5a5/Bitrix24_6.png)

Na página a seguir, troque o **Criador de pedido** para `crm.lead.add`.

![Bitrix24_7](//images.ctfassets.net/alneenqid6w5/4HUNOCnKRZQPS0HfB5cTR9/0aeae79037ae3093e2f1cef6623cd124/Bitrix24_7.png)

Copie a URL gerada no campo URL e clique em salvar. 

A URL copiada deve ser colada no campo **URL do Webhook** painel da VTEX Assisted Sales (SuiteShare) para cada um dos links que deseja integrar:

![Bitrix24_8](//images.ctfassets.net/alneenqid6w5/5ApW3fkTAHVrbhrbmbPqf8/8e04b9411b8cba3be9a26b51a26bfeda/Bitrix24_8.png)

Pronto, integração finalizada!
