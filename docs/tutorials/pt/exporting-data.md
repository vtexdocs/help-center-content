---
title: Exportar dados do Master Data v1
id: tutorials_1125
status: PUBLISHED
createdAt: 2017-04-27T21:57:19.601Z
updatedAt: 2023-03-28T23:31:33.420Z
publishedAt: 2023-03-28T23:31:33.420Z
firstPublishedAt: 2017-04-27T23:03:43.216Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: exportando-dados
legacySlug: exportando-dados
subcategory: 2AThnkEZAYbk4G4EIs53rL
---

A exportação de dados em massa de registros no Master Data v1 pode ser feita tanto por API quanto por planilha. Este documento tem como objetivo demonstrar o passo a passo necessário para a exportação de dados por planilha.

<div class="alert alert-warning">
A operação de exportar dados do Master Data não é instantânea, e o tempo de execução dela depende da quantidade de dados no Master Data. Por isso, em lojas com muitos dados e com uma alta frequência de atualização, o arquivo exportado pode ficar desatualizado em relação aos novos dados. Caso isso ocorra, a solução deve ser exportar os dados novamente, de preferência quando não há muitas atualizações ocorrendo (por exemplo, fora do horário comercial ou em fins de semana).
</div>

## Como exportar

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data.**
2. Clique na aba **Aplicações**.
3. Clique em visualizar (ícone da direita) no formulário desejado.
![visualizar button master data](https://images.ctfassets.net/alneenqid6w5/2x1xCx4tEeV6eMPy4VRFpE/0e59f11450a93765e037da555f8d6c09/visualizar_button_export_data.png)
4. Isso irá carregar a listagem do formulário selecionado.
5. Clique no botão **Exportar XLS.**
6. Selecione os campos que deseja receber no relatório.
7. Preencha o e-mail para o qual deseja enviar o relatório (o campo virá preenchido automaticamente com o e-mail do usuário logado, mas pode ser alterado).
8. Clique no botão **Exportar.**

## Dados exportados de clientes

Veja abaixo a lista de campos de dados exportados de clientes da aba **Clientes** no Profile System (CRM) do Master Data v1.

| Campo     | Descrição     | Origem     |
| ---------- | ---------- | ---------- |
| email       | Email do Cliente	       | Cadastro       |
| firstName       | Primeiro Nome do Cliente	       | Cadastro       |
| lastName       | Último Nome do Cliente	       | Cadastro       |
| document       | Número do CPF ou CNPJ do Cliente	       | Cadastro       |
| documentType       | Tipo do documento do Cliente	       | Cadastro       |
| homePhone       | Telefone de cadastro do Cliente	       | Cadastro       |
| tradeName       | PJ- Nome Fantasia	       | Cadastro       |
| businessPhone       | PJ – Telefone do Cadastro	       | Cadastro       |
| corporateName       | PJ – Razão Social	       | Cadastro       |
| isCorporate       | PJ- Identifica que é PJ	       | Cadastro       |
| stateRegistration       | PJ- Inscrição Estadual	       | Cadastro       |
| isFreeStateRegistration       | PJ- Inscrição Estadual Isento	       | Cadastro       |
| corporateDocument       | PJ- Número do CNPJ	       | Cadastro       |
| isNewsletterOptIn       | Optin Newsletter	       | Cadastro       |
| createdIn       | Data de Criação do Registro	       | Interno       |
| updatedIn       | Data da última atualização do registro no CRM	       | Interno       |
| lastInteractionIn       | Data da última atualização do registro no CRM	       | Interno       |
| userId       | ID do cliente no CRM	       | Interno       |
| createdBy       | Usuário que criou o registro	       | Interno       |
| lastInteractionBy       | Usuário que alterou o registro	       | Interno       |
| updatedBy       | Usuário que alterou o registro	       | Interno       |
| rclastsession       | ID da sessão do script de navegação	       | Script de Navegação       |
| rclastsessiondate       | Data da Última sessão de navegação salva	       | Script de Navegação       |
| checkouttag       | Lista dos passos do Checkout que o cliente foi	       | Script de Navegação       |
| categoryVisitedTag       | Lista das últimas Categorias Visitadas	       | Script de Navegação       |
| searchTermTag       | Lista dos últimos termos buscados no site	       | Script de Navegação       |
| visitedProductWithStockOutSkusTag       | Lista dos últimos Ids dos Produtos Visitados Sem Estoque	       | Script de Navegação       |
| productVisitedTag       | Lista dos últimos IDs dos Produtos Visitados	       | Script de Navegação       |
| brandVisitedTag       | Lista das últimas Marcas Visitados	       | Script de Navegação       |
| rclastcart       | URl para remontar o carrinho com todos os produtos	       | Script de Navegação       |
| rclastcartvalue       | Valor do último carrinho	       | Script de Navegação       |
| carttag       | Lista dos últimos IDs dos SKUs do Carrinho	       | Script de Navegação       |

Lembrando que estes são os campos que vêm por default no formulário **Cliente**. Caso a loja tenha personalizado a entidade Cliente, podem haver outros campos criados.
