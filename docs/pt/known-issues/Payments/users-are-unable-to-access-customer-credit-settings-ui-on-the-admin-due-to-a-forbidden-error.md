---
title: 'Os usuários não podem acessar as configurações de crédito do cliente UI no Admin devido a um erro proibido'
id: 3RBofop7gS1VlKEDHozclF
status: PUBLISHED
createdAt: 2022-02-24T13:19:29.719Z
updatedAt: 2023-02-24T13:28:28.626Z
publishedAt: 2023-02-24T13:28:28.626Z
firstPublishedAt: 2022-02-24T13:19:30.032Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: os-usuarios-nao-podem-acessar-as-configuracoes-de-credito-do-cliente-ui-no-admin-devido-a-um-erro-proibido
locale: pt
kiStatus: Backlog
internalReference: 380931
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Os usuários não podem acessar a interface de configuração de crédito do cliente na interface de administração e observamos o seguinte erro "Proibido" na operação de configuração de consultas.

Este comportamento é devido à forma como o aplicativo de crédito do cliente utiliza o GraphQL para recuperar estas informações. Ele faz um pedido a esta rota de `/ faturamento/empresa', que utiliza a ficha do usuário administrativo. Esta chamada API é utilizada para exibir informações de identificação triviais na página. Portanto, o usuário que tenta abrir as configurações CC deve ter o recurso get_company habilitado no recurso do gerenciador de licenças.

Embora isto não deva impedir o usuário de acessar as configurações de crédito do cliente, portanto, o aplicativo deve mudar a forma como ele lida com este fluxo.


##

## Simulação


Tente abrir a página de configurações de Crédito ao Cliente com um usuário sem o recurso `get_company` no módulo LM.


##

## Workaround


Certifique-se de que o usuário tenha o recurso `get_company` habilitado em sua função. Além disso, há um cache nesta operação.





