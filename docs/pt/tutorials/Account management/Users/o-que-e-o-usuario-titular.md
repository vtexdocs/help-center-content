---
title: 'Usuário titular'
id: 3oPr7YuIkEYqUGmEqIMSEy
status: PUBLISHED
createdAt: 2019-01-24T20:45:43.693Z
updatedAt: 2022-10-25T15:05:55.777Z
publishedAt: 2022-10-25T15:05:55.777Z
firstPublishedAt: 2019-01-24T22:00:34.038Z
contentType: tutorial
productTeam: Identity
author: 56yU9Wz6mLwmzo82TjgAHy
slugEN: what-is-the-sponsor-user
locale: pt
legacySlug: o-que-e-o-usuario-master
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

Cada conta VTEX tem apenas um usuário Titular - o único a quem é dado acesso total a todas as seções do Admin, incluindo ações importantes de manutenção e autorização. 

<div class = "alert alert-warning"> 
Usuário Titular não é o mesmo que <b>Owner (Admin Super)</b>. O <b>Owner (Admin Super)</b> é um perfil de acesso do License Manager, que define permissões concedidas a um dado usuário da sua loja, podendo inclusive ser atribuído a múltiplos usuários.
</div>

A página de gerenciamento do Titular permite identificar o usuário Titular atual, transferir a propriedade da loja e visualizar o log de atividades associado às ações do usuário Titular. Para acessar esta página, clique em **Configurações da conta** > **Gerenciamento da conta** > **Conta**. Na seção Contato, clique em `Gerenciamento de titulares`.

## Ações restritas ao usuário titular

Somente o usuário Titular pode realizar as seguintes ações essenciais de manutenção e autorização:

* [Transferir a propriedade da loja](/pt/tutorial/transferencia-de-propriedade-da-loja) para um novo usuário Titular
* Operações de [manutenção de base (full cleanup)](/pt/tutorial/database-maintenance-full-cleanup--34P9LGs7BCIQK6acQom802), incluindo:
    * Recadastrar preços no SmartCheckout
    * Apagar produtos do indexador
    * Apagar produtos/SKUs e itens relacionados
    * Apagar categorias, marcas, campos e itens relacionados
    * Apagar sellers e itens relacionados
    * Agendar reindexação completa
* Autenticar sua conta em nossos conectores nativos, incluindo:
    * [Facebook](/pt/tracks/facebook-integration--7h8KvIC4DbRRc8VlyJ8PFc/5OP69kHWKca01wLH0w10jX)
    * [Google Shopping](/pt/tracks/integrating-with-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/44hAYlKYSRZMTNY3ELxeQ2)
    * [Mercado Livre](/pt/tracks/mercado-libre-integration-set-up--2YfvI3Jxe0CGIKoWIGQEIq/4leBEAd22Icm46kGeiGgak)
* [Aprovar solicitações de cancelamento de pedidos](/pt/tutorial/how-does-cancellation-work-when-requested-by-the-customer--3wEI6DUNtecooG2Ki4Akqo)

Além disso, quando a VTEX precisa comunicar informações sensíveis à loja, como mudanças em perfis de acesso, tal comunicação é feita direta e exclusivamente com o usuário Titular.

<div class="alert alert-info">
A criação de <a href="https://help.vtex.com/pt/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet">credenciais de autenticação</a> (appKey/appToken) para integrações via API não é mais restrita ao usuário Titular. Veja este <a href="https://help.vtex.com/pt/announcements/mudancas-no-nome-e-acoes-restritas-disponiveis-para-o-usuario-master">anúncio</a> para mais detalhes sobre esta mudança.
</div>

