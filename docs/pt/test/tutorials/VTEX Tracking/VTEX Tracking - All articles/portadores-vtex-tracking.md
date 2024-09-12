---
title: 'Portadores (VTEX Tracking)'
id: 5tVSpunaXVT6gQDSl9jTow
status: PUBLISHED
createdAt: 2020-07-07T21:17:10.987Z
updatedAt: 2021-06-30T21:08:30.294Z
publishedAt: 2021-06-30T21:08:30.294Z
firstPublishedAt: 2020-07-07T21:20:16.312Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slug: portadores-vtex-tracking
locale: pt
legacySlug: portadores-vtex-tracking
subcategoryId: 7yiFRk9TGfMNeyhT83UljP
---

Portadores são os motoristas que realizam as entregas do VTEX Tracking. Os portadores podem ser funcionários, terceirizados ou prestadores de serviços da sua empresa. 

Os portadores devem ser cadastrados no VTEX Tracking para que sua operação de entrega seja integrada ao sistema.  Pela plataforma web é possível adicionar um novo portador, consultar e editar portadores já cadastrados. 

A partir dos dados inseridos pelo portador,o sistema calcula a estimativa de tempo de entrega. O cálculo é feito pela plataforma do VTEX Tracking utilizando as informações de localização do GPS do smartphone do portador. Todo o acompanhamento diário do portador pode ser visto pela plataforma web e o portador deve utilizar o aplicativo[ móvel do VTEX Tracking](https://help.vtex.com/pt/tutorial/tutorial-aplicativo-movel-vtex-tracking--5qYuqbMVlQBfpdCzC0X6jv).  

Esse artigo tem as informações necessárias para:

*   [Criar um novo portador](#criarnovoportador);
*   [Preencher os campos de cadastro do portador](#camposdecadastrodeportador);
*   [Consultar os dados de um portador já cadastrado](#consultarportador);
*   [Editar dados de um portador já cadastrado](#editardados).

## Criar novo portador

Para adicionar um novo portador, vá na plataforma web no menu à esquerda:

1. Acesse o módulo `Configurações da Conta`.
2. Acesse a aba `Portadores`.
3. Clique em `Novo Portador`.
4. [Preencha os campos de cadastro de portador](#camposdecadastrodeportador).
5. Clique em `Criar`.

### Campos de cadastro de portador

#### Dados pessoais

*   **Nome: **(obrigatório) nome do portador. 
*   **Sobrenome:** (obrigatório) sobrenome do portador. 
*   **RG:** número da carteira de identidade (RG) do portador. 
*   **CPF:** número do CPF do portador. 
*   **P.I.S:** número do P.I.S do portador. 
*   **Matrícula:** número de matrícula do portador. 
*   **Endereço:** endereço do portador. Pode ser inserido para fins de consulta, não impacta o funcionamento do sistema.
*   **Fuso horário:** o fuso horário da localização do portador.

Os campos que não são obrigatórios são utilizados para fins de consulta, não impactam o funcionamento do sistema.

>❗ Se o campo Fuso horário não for preenchido será considerado o fuso horário de Brasília (UTC -03:00) para o cálculo do horário da entrega para o cliente final.

#### Dados de cadastro

*   **Usuário de login:**  (obrigatório) será sempre o Prefixo (criado pelo tracking) - nome ou descrição de seu desejo.
*   **Ativo:** marque essa caixa de seleção para que o perfil do portador seja ativado.
*   **Email:** o email do usuário para realizar o login na conta do portador. Esse campo é obrigatório.
*   **Senha:** defina uma senha para acesso à conta do portador.
*   **Código externo:** código de identificação do portador. Só funciona via integração.
*   **Selecione o arquivo:** envio da foto do motorista. Esta foto irá aparecer no email e SMS comunicando ao cliente horário e os dados da entrega, garantindo uma maior satisfação, confiança e segurança do cliente final. Caso tenha efetuado o cadastro sem a imagem, adicione em outro momento clicando em editar no canto direito do usuário selecionado.

Os campos que não são obrigatórios são utilizados para fins de consulta, não impactam o funcionamento do sistema.

>❗ Se ao fazer o cadastro o email do portador não for preenchido, o portador não conseguirá utilizar o aplicativo VTEX Tracking.

#### Dados de contato

*   **Telefone:** telefone de contato do portador. 
*   **Celular:** telefone de contato do portador.

## Consultar portador

1. Acesse o módulo `Configurações da Conta`.
2. Acesse a aba `Portadores`.
3. Clique em `Consultar Portadores`. Uma vez no painel, é possível:

    *   Buscar portadores pelo nome ou usuário, utilizando a barra de busca.
    *   Filtrar a busca por portadores, marcando os campos de **Todos, Ativos** e **Inativos.**
    *   Selecionar um portador, e conferir detalhes de sua conta, clicando no botão `:`.

## Editar dados 

1. Acesse o módulo `Configurações da Conta`.
2. Acesse a aba `Portadores`.
3. Clique em `Consultar Portadores`.
4. Clique no botão `:` ao lado do nome do portador.
5. Altere os campos desejados.
6. Clique em `Salvar`.
