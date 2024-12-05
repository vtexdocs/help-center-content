---
title: 'Restringir acesso público a campos do Master Data'
id: 5eu1N1h4Vqe8GY1yHXUsvz
status: PUBLISHED
createdAt: 2024-06-25T12:54:28.672Z
updatedAt: 2024-06-25T13:28:43.112Z
publishedAt: 2024-06-25T13:28:43.112Z
firstPublishedAt: 2024-06-25T13:28:43.112Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: restrict-public-access-to-master-data-fields
locale: pt
legacySlug: restringir-acesso-publico-a-campos-do-master-data
subcategoryId: WpbGhubuRZaNZilJSXnqu
---

No [Master Data v1](https://help.vtex.com/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw), é possível [criar entidades de dados](https://help.vtex.com/pt/tutorial/data-entity--tutorials_1265#criar-entidade-de-dados) com diferentes restrições de acesso para cada campo:

* Permitir a leitura sem credencial
* Permitir editar sem credencial
* Permitir filtrar sem credencial

Dependendo dos dados armazenados, o acesso público sem autenticação pode representar um risco para o seu negócio. Para impor a autenticação e restringir o acesso público aos campos que contêm dados confidenciais, siga as instruções abaixo.

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. No Master Data, clique em **Aplicações**.
3. Clique na engrenagem <i class="fas fa-cog"></i> ao lado de **Profile System**:

   ![1-master-data-confidential-data-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Master%20Data/Master%20Data%20v1%20settings/restringir-acesso-publico-a-campos-do-master-data_1.png)

4. Em **Configurações**, clique em **Estrutura de dados**.

   ![2-master-data-confidential-data-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Master%20Data/Master%20Data%20v1%20settings/restringir-acesso-publico-a-campos-do-master-data_2.png)
5. Clique na aba **Entidades de dados**.
6. Na linha da entidade de dados, clique no botão de edição <i class="fas fa-edit"></i>.

   ![3-master-data-confidential-data-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Master%20Data/Master%20Data%20v1%20settings/restringir-acesso-publico-a-campos-do-master-data_3.png)
7. Na linha do campo que contém um dado confidencial, clique na engrenagem <i class="fas fa-cog"></i>.

   ![4-master-data-confidential-data-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Master%20Data/Master%20Data%20v1%20settings/restringir-acesso-publico-a-campos-do-master-data_4.png)
8. Desmarque as opções a seguir:

   * **Permitir a leitura sem credencial**
   * **Permitir editar sem credencial**
   * **Permitir filtrar sem credencial**

   ![5-master-data-confidential-data-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Master%20Data/Master%20Data%20v1%20settings/restringir-acesso-publico-a-campos-do-master-data_5.png)

9. Clique em `Salvar`.
10. Na linha da entidade de dados alterada, clique no botão de publicação <i class="fas fa-save"></i> para que as configurações salvas sejam publicadas.
11. Clique em `OK`.

## Permissões necessárias

Após seguir as instruções anteriores, é obrigatório ter um [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) com as [permissões](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) necessárias para acessar as informações:

* Pelo menos um recurso da categoria **Generic resources** no produto **Master Data**: **READONLY_USER_CRM**, **POWER_USER_CRM**, **NOREMOVE_USER_CRM** ou **ADMIN_CRM**.
* Pelo menos um recurso da categoria **Dynamic storage generic resources** no produto **Dynamic Storage**:** READONLY_USER_DS**, **NOREMOVE_USER_DS**, **POWER_USER_DS** ou **ADMIN_DS**.
