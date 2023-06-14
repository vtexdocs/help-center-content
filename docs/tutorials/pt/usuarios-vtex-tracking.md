---
title: 'Usuários (VTEX Tracking)'
id: 1zn5nrvkoWtx0pcabbRhSZ
status: PUBLISHED
createdAt: 2020-07-07T21:04:54.830Z
updatedAt: 2021-11-30T00:13:03.427Z
publishedAt: 2021-11-30T00:13:03.427Z
firstPublishedAt: 2020-07-07T21:16:14.114Z
contentType: tutorial
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
slug: usuarios-vtex-tracking
locale: pt
legacySlug: usuarios-vtex-tracking
subcategory: 7yiFRk9TGfMNeyhT83UljP
---

Existem vários perfis de usuários que operam o sistema VTEX Tracking. Cada perfil pode realizar uma série de ações na plataforma, como lançar entregas, criar rotas, definir motoristas, assim como monitorar o andamento das entregas e acompanhar indicadores logísticos. Para operar as funcionalidades VTEX Tracking no dia a dia, é necessário criar usuários para todos que acessarão a plataforma. Neste artigo você aprenderá a:

- Consultar usuário  
- Criar usuário  
- Editar dados de usuário  
- Redefinir senha de acesso  
- Campos de cadastro de usuário  

## Consultar usuário

1. Acesse o módulo **Configurações da Conta**.  
2. Acesse a aba **Usuários**.  
3. Clique em **Consultar usuário**.  

Uma vez no painel, é possível:

- Buscar usuários pelo nome, utilizando a barra de busca.   
- Conferir detalhes de um usuário como email e data de criação.  
- Gerar um relatório de disponibilidade, clicando no botão Ações.  
O relatório contém informações sobre o último acesso, e status do usuário (se está offline ou online).

## Criar novo usuário

1. Acesse o módulo **Configurações da Conta**.  
2. Acesse a aba **Usuários**.  
3. Clique em **Novo usuário**.  
4. Preencha os campos de cadastro de usuário.   
5. Clique em **Criar**.  

## Editar dados de usuário

1. Acesse o módulo **Configurações da Conta**.
2. Acesse a aba **Usuários**.
3. Clique em **Consultar usuário**.
4. Clique no botão `:` ao lado do nome do usuário desejado.
5.  Clique em **Editar**.
6. Edite os campos de cadastro desejados. 
7. Clique em **salvar**.

## Redefinir senha de acesso

<div class="alert alert-warning">Você não poderá escolher uma nova senha. Se optar por resetar a senha de acesso, o sistema irá gerar uma senha aleatória para o usuário.
</div>

1. Acesse o módulo **Configurações da Conta**.  
2. Acesse a aba **Usuários**.  
3. Clique em **Consultar usuário**.  
4. Clique no botão **Ações**.  
5. Clique em **Resetar senha**.  
6. Na nova página que se abriu, clique em **Resetar**.  

Uma nova senha, com caracteres gerados aleatoriamente, será definida. Ela aparecerá na caixa de aviso.

## Campos de cadastro de usuário

#### Informações da conta
- **Empresa:** (obrigatório) é o contratante do serviço VTEX Tracking, cadastrado na sua conta.
- **Nome de usuário:** (obrigatório) nome do usuário a ser cadastrado.
- **e-mail** (obrigatório) e-mail do usuário para realizar o login na sua conta.
- **Senha:** (obrigatório) defina uma senha para acesso à sua conta.
- **Parceiro:** cadastrado anteriormente. Só preencha se for configurar um perfil de um Parceiro. Confira como [cadastrar um parceiro](https://help.vtex.com/pt/tutorial/parceiros-vtex-tracking--2xEHQ98hoMzgkrdhkpOedQ).
- **Filial:** cadastrada anteriormente. Só preencha se for configurar um perfil de uma Filial. Confira como [cadastrar uma filial](https://help.vtex.com/pt/tutorial/filial-vtex-tracking--6mD8L390WPORidxGp9TKfp).
- **Transportadora:** cadastrada anteriormente. Só preencha se for configurar um perfil de uma Transportadora. Confira como [cadastrar uma transportadora](https://help.vtex.com/pt/tutorial/transportadoras-vtex-tracking--2HVE5D2fheT4cDPjiApL1Y).
- **Inativo:** marque a caixa de seleção para desativar o acesso do usuário. 

#### Configurações de Chat

- **Transportadora:** para acessar o chat de determinada transportadora, marque a caixa de seleção correspondente.
- **Estado:** marque as caixas de seleção correspondentes aos estados que seu atendimento por chat se aplica. 

## Grupos de usuários

- **Gerentes Embarcador:** possui acesso geral, são usuários com maior visibilidade de funcionalidades VTEX Tracking. Pode também alterar entregas dentro de uma transportadora atrelada. 
- **Operadores Embarcador:** acesso à operação e inclusão de entregas no sistema. Não tem acesso a *embarcador, relatórios home dashboard,  monitoramento*.
- **Parceiro:** acesso restrito a status de entrega através do módulo relatório. Acesso apenas à  visualização de relatórios. Não tem acesso a *embarcador, Dashboard na home page, entrega, atendimento/criação de rotas, cadastro, e monitoramento*. 
- **Transportadora:** transportadora que não é cliente VTEX Tracking, só presta serviços a esse cliente. Consegue lançar entregas para que o cliente VTEX Tracking gerencie. Acesso à operação e inclusão de entregas. Não tem acesso a *embarcador, Dashboard na home page, cadastros de usuários, grupos, parceiros e ranking de motorista*.
- **Central de Atendimento:** acesso ao SAC, uso exclusivo do chat para atendimento. O chat permite a comunicação entre operadores de SAC e portadores na hora da entrega, em caso de dificuldades.  Não tem acesso a *embarcador, Dashboard na home page, criação de  usuários, grupos, portador, veículo, cliente e relatórios*. 
- **Rest API:** toda integração via API Rest. Confira nossa documentação no Developer Portal. Usuários que inserem dados de entrega de forma manual, pela própria plataforma do VTEX Tracking não fazem parte desse perfil. 
- **Integração VTEX:** todo cliente VTEX com integração. Confira nossa documentação no Developer Portal. 

