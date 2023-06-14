---
title: 'Dicionário de campos da exportação de clientes'
id: frequentlyAskedQuestions_1827
status: DRAFT
createdAt: 2019-01-24T20:45:59.094Z
updatedAt: 2022-08-04T22:36:28.271Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:10:59.946Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: dicionario-de-campos-da-exportacao-de-clientes
locale: pt
legacySlug: dicionario-de-campos-da-exportacao-de-clientes
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

Este documento tem como finalidade ajudar na identificação de campos padrões na [exportação](/pt/faq/como-realizar-a-exportacao-da-minha-base-de-clientes "exportação")\* da aba **Clientes** no Profile System (CRM) do Master Data v1.

Segue abaixo nossa lista identificando campo, significado e origem:

| Campo do Relatório     | Tradução     | Origem     |
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

\* [Veja como realizar uma exportação clicando aqui.](/pt/faq/como-realizar-a-exportacao-da-minha-base-de-clientes)
