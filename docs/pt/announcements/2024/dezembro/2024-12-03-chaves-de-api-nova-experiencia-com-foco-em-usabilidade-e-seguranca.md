---
title: 'Chaves de API: nova experiência com foco em usabilidade e segurança'
id: 23b9SUp3kOQfpImskTww7a
status: PUBLISHED
createdAt: 2024-12-03T16:41:41.840Z
updatedAt: 2025-02-05T19:21:26.857Z
publishedAt: 2025-02-05T19:21:26.857Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2024-12-03-api-keys-new-experience-focused-on-usability-and-security
locale: pt
legacySlug: chaves-de-api-nova-experiencia-com-foco-em-usabilidade-e-seguranca
announcementImageID: 'undefined'
announcementSynopsisPT: 'Gerencie suas chaves de API com mais segurança: nova interface, duração de tokens e opções de renovação e exclusão.'
---

Introduzimos uma nova experiência de gerenciamento de [chaves de API](/pt/tutorial/chaves-de-api--4bFEmcHXgpNksoePchZyy6) para proporcionar um controle mais eficiente sobre suas credenciais.

A atualização inclui uma interface otimizada para facilitar a gestão e novas funcionalidades voltadas para segurança, como a definição da duração de tokens, a renovação de tokens e a exclusão de chaves não utilizadas.

![apikeys-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2024/dezembro/2024-12-03-chaves-de-api-nova-experiencia-com-foco-em-usabilidade-e-seguranca_1.png)

## O que mudou?

Veja todas as novidades a seguir:

| Alteração | Descrição |
| :---- | :---- |
| **Nomenclatura** | Alteramos a nomenclatura *chaves de aplicação* para *chaves de API* na interface do Admin. |
| **Design** | A interface de gerenciamento, criação e edição de chaves de API foi redesenhada para uma experiência mais intuitiva e eficiente. |
| **Separação de chaves** | Chaves geradas internamente e chaves de terceiros agora são separadas em abas distintas para facilitar o gerenciamento de cada tipo de chave. |
| **Duração de tokens** | Todos os tokens de API gerados internamente agora têm uma duração padrão de 3 meses, que pode ser alterada para 6 meses na interface.<br><br>A configuração se aplica a todos os tokens novos e existentes gerados na conta e terá a data de criação da chave como referência para a contagem da duração.<br><br>A duração de tokens terceiros é visível e configurável somente pela conta que criou o token.<br><br>Quando os tokens gerados se tornarem obsoletos, os lojistas serão informados na interface. Não há impacto no uso do token — o status obsoleto é apenas um recurso visual para indicar o estado do token e sugerir a renovação.<br><br>Saiba mais em [Configurar a duração de chaves de API](/pt/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ). |
| **Renovação de tokens** | Agora é possível renovar tokens de chaves geradas na conta. A funcionalidade permite optar por excluir o token antigo imediatamente ou em outro momento.<br><br>Ao optar por excluir em outro momento, os dois tokens estarão válidos e funcionais até a exclusão do antigo, permitindo que o lojista atualize o token utilizado em integrações sem prejudicar a operação. Saiba mais em [Renovar token de API](/pt/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3). |
| **Exclusão de chaves de API** | Os lojistas agora podem excluir chaves de API que não serão mais utilizadas. |
| **Permissões específicas** | Novas permissões necessárias para gerenciar chaves de API:<br><ul class="t-body c-on-base mb7 lh-copy"><li class="t-body c-on-base mb5 lh-copy">*View API Keys* (visualizar, filtrar, buscar e ordenar chaves de API geradas e terceiras)</li><li class="t-body c-on-base mb5 lh-copy">*Edit API Keys* (criar, excluir, mudar o status e adicionar ou remover permissões de chaves de API)</li><li class="t-body c-on-base mb5 lh-copy">*Renew API Token* (visualizar e renovar tokens de chaves geradas)</li><li class="t-body c-on-base mb5 lh-copy">*Edit API Keys settings* (editar configuração da duração de tokens de chaves geradas)</li></ul>Saiba mais em [Recursos do License Manager](/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3).<br><br>Os usuários com as permissões para controle de usuários e perfis de acesso vão obter as novas permissões de forma automática, conforme a tabela: <br><br><table><thead><tr class="bb b--muted-4"><th class="t-body fw5 c-muted-1 bw1 pa3 pb3 b--muted-4 tl">Usuários com…</th><th class="t-body fw5 c-muted-1 bw1 pa3 pb3 b--muted-4 tl">Recebem automaticamente…</th></tr></thead><tbody><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Get account by identifier</td><td class="t-body pa3 bb b--muted-4">View API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Get paged users</td><td class="t-body pa3 bb b--muted-4">View API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Get paged roles</td><td class="t-body pa3 bb b--muted-4">View API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Find user by email</td><td class="t-body pa3 bb b--muted-4">View API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Save user</td><td class="t-body pa3 bb b--muted-4">Edit API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Owner - Super Admin</td><td class="t-body pa3 bb b--muted-4">Edit API Keys settings</td></tr><tr class="bb b--muted-4"><td class="t-body pa3">[User Administrator - RESTRICTED](/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted)</td><td class="t-body pa3">Renew API Token</td></tbody></table> |

## Por que fizemos essa mudança?

O objetivo da nova experiência é proporcionar mais controle e segurança sobre suas chaves de API, com facilidade de uso. A interface agiliza a gestão de diferentes tipos de chaves e otimiza a visibilidade das informações.

Além disso, a configuração da duração de tokens adiciona uma camada extra de segurança, enquanto as opções de renovação garantem que a operação da loja não seja impactada.

## O que precisa ser feito?

Siga os passos abaixo para acessar a nova experiência:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta > Chaves de API**.  
2. Clique em `Testar nova experiência`.

É possível voltar para a versão anterior da página ao clicar em `Voltar à versão anterior`.

Para mais informações, acesse a documentação relacionada:

* [Chaves de API](/pt/tutorial/chaves-de-api--4bFEmcHXgpNksoePchZyy6)  
* [Configurar a duração de chaves de API](/pt/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ)  
* [Chaves geradas](/pt/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc)  
* [Renovar token de API](/pt/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3) 
* [Chaves terceiras](/pt/tutorial/chaves-terceiras--1isU0HfKkeg0atlxRha14Q)
