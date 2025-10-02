---
title: 'Gerenciamento de colaboradores'
id: 29zngGbq844ZEN9UwKdLrQ
status: PUBLISHED
createdAt: 2025-09-09T13:50:50.067Z
updatedAt: 2025-10-01T18:05:47.125Z
publishedAt: 2025-10-01T18:05:47.125Z
firstPublishedAt: 2025-10-01T17:49:38.065Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: employee-management-indeva
legacySlug: gerenciamento-de-colaboradores-indeva
locale: pt
subcategoryId: 2fZRuqcVChcJ9AhY4vzfl3
---

Este guia apresenta instruções para cadastrar e desligar colaboradores na plataforma Indeva, de acordo com o perfil de acesso (vendedor, gerente, supervisor, administrador ou franqueado).

## Cadastrando um colaborador
O processo de cadastro varia conforme o perfil do colaborador: 

- [Cadastrar um vendedor](/pt/tutorial/cadastro-de-vendedor-indeva--6aHQ7kz8MBAuM143sMnFqK)
- [Cadastrar um gerente](/pt/tutorial/cadastro-de-gerente-indeva--6r2bjS0LFdUX0kyt0NyWhf)
- [Cadastrar um usuário como supervisor, administrador ou franqueado](/pt/tutorial/gerenciar-acesso-de-usuarios-administrativos-na-plataforma-indeva--36VXnj6jIV0zfCSqgGGdrG)

### Erros comuns no cadastro de colaboradores
Veja abaixo os principais erros que podem ocorrer durante o cadastro de vendedores ou gerentes:

**Erro 1: Colaborador tem um período de data em conflito com a data escolhida em outra loja**
Se o colaborador já tiver sido cadastrado na Indeva e posteriormente desligado (por exemplo, após o cancelamento da loja), a data de início deve ser posterior à data de desligamento anterior.
Isso ocorre porque um período ativo anterior foi encerrado no sistema.

**Erro 2: CPF já está ativo na loja (nome da loja)**
Esse erro geralmente acontece quando o colaborador não foi desligado corretamente da última loja em que trabalhou. Verifique o histórico do cadastro do vendedor e revise os períodos ativos.

**Erro 3: CPF é inválido**
A plataforma Indeva aceita apenas CPFs válidos, conforme a legislação brasileira. Confira se houve erro de digitação. Se necessário, confirme o número com o colaborador.

> ℹ️ Para transferir um vendedor entre lojas, consulte o artigo [**Transferir vendedor de loja**](/pt/tutorial/transferir-colaborador-de-uma-loja-para-outra-indeva--6JMZTKvNMtIsPodR0EVMM7) e veja como realizar essa operação corretamente.

## Desligando um colaborador
O processo de desligamento segue caminhos diferentes, de acordo com o perfil do colaborador.

**Vendedor**
Acesse **Cadastros > Vendedores > Ações > Férias ou Inativar > Desligamento*.

**Gerente**
Para realizar o desligamento de um gerente:

Acesse **Cadastros > Gerentes > Ações > Férias ou Inativar > Desligamento**.

> ⚠️ Apenas usuários com acesso superior ao de **gerente** — como **supervisores**, **consultores**, **administradores** ou **franqueados** podem realizar o desligamento de um gerente.

### Situações em que a opção de desligamento não está disponível
As seguintes situações podem ocorrer nesse cenário:

#### 1. colaborador está vinculado como Vendedor Responsável
Se o colaborador estiver atribuído como Vendedor Responsável, será necessário removê-lo dessa função antes do desligamento. Para saber como fazer isso, consulte o artigo [Desativar vínculo de Vendedor Responsável]().

#### 2. Há um período de ausência registrado no perfil
Um período de ausência registrado impede que o botão de desligamento seja exibido.
Para remover essa restrição:

1. Acesse **Cadastros > Vendedores** e clique em **Filtros**.
2. Filtre pelos cadastros com períodos de licença ou férias.
3. No cadastro desejado, clique em **Ações > Editar período na loja**.
4. Altere ou remova a data de término da ausência e **salve**.

Após a edição, o botão de desligamento será exibido.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/cadastros-de-colaboradores/gerenciamento-de-colaboradores-indeva_1.gif)

> ⚠️ <br> O painel de cadastro exibe os períodos vinculados ao colaborador. Por esse motivo, o mesmo nome aparece mais de uma vez na listagem.
