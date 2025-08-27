---
title: 'Exclusão de dados de clientes'
id: 1R9Fn7A06Ifj4R9YD4JTKU
status: PUBLISHED
createdAt: 2022-04-14T13:28:53.209Z
updatedAt: 2025-04-10T14:19:21.979Z
publishedAt: 2025-04-10T14:19:21.979Z
firstPublishedAt: 2022-04-14T13:50:08.688Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: erasing-customer-data
legacySlug: exclusao-de-dados-de-clientes
locale: pt
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

De acordo com regulações de proteção de dados, como a [LGPD e a GDPR](https://vtex.com/us-en/privacy-and-agreements/vtex-commitment/), empresas que armazenam dados pessoais de clientes devem atender a solicitações de exclusão de cadastro. A VTEX permite que lojistas solicitem a exclusão desses dados diretamente pelo Copilot.

## 1. Verificar dados armazenados no Master Data

Antes de [solicitar a exclusão de dados de clientes via Copilot](#solicitar-exclusao-de-dados-do-cliente-via-copilot), siga estas etapas:

1. **Identifique onde os dados estão armazenados:** Verifique quais entidades de dados do [Master Data](https://help.vtex.com/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) armazenam dados de clientes na sua operação.
2. **Exclua entidades personalizadas manualmente:** Se sua loja armazena dados de clientes em entidades personalizadas, você deverá excluí-las manualmente antes de solicitar a remoção via Copilot. Para instruções, consulte a seção [Entidades de dados personalizadas](#entidades-de-dados-personalizadas). Siga este processo apenas para entidades personalizadas. Não exclua as [entidades nativas](#entidades-nativas-do-master-data) CL e AD do Master Data.

### Entidades nativas do Master Data

Após a [solicitação de exclusão de dados](#solicitar-exclusao-de-dados-do-cliente-via-copilot), a VTEX excluirá os dados das entidades de dados nativas CL e AD. É importante que você não exclua dados destas entidades.

### Entidades de dados personalizadas

Se sua loja armazena informações de clientes em entidades de dados personalizadas (que não sejam CL e AD), você deve excluí-las manualmente antes de solicitar a exclusão de dados de clientes via Copilot. Para isso, use a API do Master Data:

1. Localize o documento correspondente ao cliente utilizando o endpoint [Search document](https://developers.vtex.com/vtex-rest-api/reference/searchdocuments-1). 

2. Exclua o documento correspondente utilizando o endpoint [Delete document](https://developers.vtex.com/vtex-rest-api/reference/deletedocument-1).

> ❗ Não realize esse processo para as entidades nativas **CL** e **AD**.

## 2. Configurar perfil de acesso

Para solicitar a exclusão de dados, crie um [perfil de acesso customizado](https://help.vtex.com/pt/tutorial/criar-perfil-de-acesso) chamado **Lei Geral de Proteção de Dados** com os seguintes recursos do [License Manager](https://help.vtex.com/pt/tutorial/license-manager-resources):

- **Write user rights requests** (do produto **User Rights**);
- **Open Support Ticket** (do produto **VTEX Support**).

![perfil-de-acesso-gdpr](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/seguran%C3%A7a/seguran%C3%A7a-para-lojistas/exclusao-de-dados-de-clientes_1.jpg)

Em seguida, atribua este perfil de acesso ao usuário que será responsável pela solicitação de exclusão de dados de clientes.

## 3. Solicitar exclusão de dados do cliente via Copilot

Com os dados verificados e o perfil configurado, siga estes passos para realizar a solicitação via Copilot:

1. Faça login no Admin VTEX com a conta em que a exclusão será realizada, utilizando um usuário com o perfil de acesso **Lei Geral de Proteção de Dados** configurado em [2. Configurar perfil de acesso](#2-configurar-perfil-de-acesso).
2. Clique no botão **Copilot** no canto superior direito.
3. Envie a mensagem: `Eu quero excluir um cliente da plataforma VTEX`.
    ![copilot-excluir-cliente-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/seguran%C3%A7a/seguran%C3%A7a-para-lojistas/exclusao-de-dados-de-clientes_2.gif)
4. Quando solicitado, informe o email do cliente que deseja excluir. É possível solicitar a exclusão de apenas um cliente por vez. Portanto, cada solicitação deve conter apenas um email.

Após essa etapa, a solicitação será encaminhada ao suporte da VTEX, e você receberá o ID do ticket de suporte para acompanhamento.

Na conclusão do chamado, será enviado para o email associado ao ticket a comprovação de que os dados foram excluídos com sucesso dos produtos VTEX.
