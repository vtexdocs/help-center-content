---
title: 'License Manager: novos recursos para a gestão de usuários administrativos'
id: 6rRaLNUe7mtKW5jGx84Vd4
status: PUBLISHED
createdAt: 2025-08-07T21:36:15.196Z
updatedAt: 2025-08-07T21:50:35.459Z
publishedAt: 2025-08-07T21:50:35.459Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2025-08-07-license-manager-new-resources-for-managing-admin-users
locale: pt
legacySlug: license-manager-novos-recursos-para-a-gestao-de-usuarios-administrativos
announcementImageID: 'undefined'
announcementSynopsisPT: 'Simplificamos a gestão de usuários com novos recursos no License Manager.'
---

Criamos dois novos [recursos no License Manager](/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) para simplificar e padronizar o controle de acesso, agrupando ações relacionadas à gestão de usuários administrativos no Admin VTEX de forma mais intuitiva.

## O que mudou?

Consolidamos recursos legados de leitura e escrita de informações de [usuários](/pt/tutorial/gerenciando-usuarios--tutorials_512) e [perfis de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) em dois novos recursos do produto *License Manager*:

| Nome do novo recurso | Chave do novo recurso (`resource_key`) | Descrição |
| ----- | ----- | ----- |
| Edit Admin Users | `EditAdminUsers` | Permite criar, editar e remover usuários administrativos. |
| View Admin Users | `ViewAdminUsers` | Permite visualizar informações de usuários e perfis de acesso. |

Esses novos recursos substituem os recursos legados listados abaixo no [gerenciamento de usuários](/pt/tutorial/gerenciando-usuarios--tutorials_512) no Admin VTEX:

| Nome do recurso legado | Chave do recurso legado (`resource_key`) | Descrição do recurso legado | Nome do novo recurso | Chave do novo recurso (`resource_key`) |
| ----- | ----- | ----- | ----- | ----- |
| Get paged users | `Get_Users_Paged` | Permite listar usuários administrativos da conta. | View Admin Users | `ViewAdminUsers` |
| Find user by email | `Get_User_By_Identifier` | Permite buscar usuários administrativos por email. | View Admin Users | `ViewAdminUsers` |
| Get paged roles | `Get_Roles_Paged` | Permite listar perfis de acesso da conta. | View Admin Users | `ViewAdminUsers` |
| Save user | `Save_User` | Permite criar ou editar usuários administrativos. | Edit Admin Users | `EditAdminUsers` |
| Remove user | `Remove_User` | Permite revogar o acesso de usuários administrativos. | Edit Admin Users | `EditAdminUsers` |

## Por que fizemos essa mudança?

Agrupar recursos com escopos semelhantes melhora a rastreabilidade das ações, reduz a redundância e facilita o gerenciamento de permissões com base em perfis de acesso. A mudança torna mais simples entender e controlar quais ações administrativas cada perfil de acesso pode realizar.

## O que precisa ser feito?

Nenhuma ação imediata é necessária. Analisamos os perfis de acesso existentes e atualizamos automaticamente suas permissões:

* Se um perfil de acesso já tinha um ou mais dos recursos legados, o novo recurso equivalente foi adicionado.  
* Nenhuma permissão anterior foi removida.  
* Os recursos legados não foram deprecados.

Recomendamos revisar os perfis de acesso existentes na sua conta para entender como os novos recursos foram aplicados. Em caso de dúvidas, consulte a [documentação do License Manager](/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3).
