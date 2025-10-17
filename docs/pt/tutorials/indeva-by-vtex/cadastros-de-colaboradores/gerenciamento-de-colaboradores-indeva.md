---
title: 'Gerenciamento de colaboradores'
id: 29zngGbq844ZEN9UwKdLrQ
status: PUBLISHED
createdAt: 2025-09-09T13:50:50.067Z
updatedAt: 2025-10-17T17:27:38.429Z
publishedAt: 2025-10-17T17:27:38.429Z
firstPublishedAt: 2025-10-01T17:49:38.065Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: employee-management-indeva
legacySlug: gerenciamento-de-colaboradores-indeva
locale: pt
subcategoryId: 2fZRuqcVChcJ9AhY4vzfl3
---

Cadastre ou desligue colaboradores na plataforma **Indeva** conforme o perfil de acesso: **vendedor**, **gerente**, **supervisor**, **administrador** ou **franqueado**.

## Cadastrar colaborador

O processo de cadastro varia conforme o perfil do colaborador:

- [Cadastrar vendedor na plataforma Indeva](/pt/tutorial/cadastro-de-vendedor-indeva--6aHQ7kz8MBAuM143sMnFqK)  
- [Cadastrar gerente na plataforma Indeva](/pt/tutorial/cadastro-de-gerente-indeva--6r2bjS0LFdUX0kyt0NyWhf)  
- [Gerenciar usuários franqueados, supervisores e equivalentes na plataforma Indeva](/pt/tutorial/gerenciar-acesso-de-usuarios-administrativos-na-plataforma-indeva--36VXnj6jIV0zfCSqgGGdrG)

### Erros comuns no cadastro de colaboradores

Veja os principais erros que podem ocorrer durante o cadastro de vendedores ou gerentes:

**Erro 1: Colaborador tem período de data em conflito com outra loja**  
Se o colaborador já tiver sido cadastrado e desligado anteriormente (por exemplo, após o cancelamento da loja), a nova data de início precisa ser **posterior à data de desligamento anterior**.

**Erro 2: CPF já está ativo na loja (nome da loja)**  
Esse erro ocorre quando o colaborador não foi desligado corretamente da última loja.  
Verifique o histórico do cadastro e revise os períodos ativos.

**Erro 3: CPF inválido**  
A plataforma Indeva aceita apenas CPFs válidos conforme a legislação brasileira.  
Confira se houve erro de digitação e, se necessário, confirme o número com o colaborador.

> ℹ️ Para transferir um vendedor entre lojas, consulte o artigo [ Transferir vendedor entre lojas](/pt/tutorial/transferir-colaborador-de-uma-loja-para-outra-indeva--6JMZTKvNMtIsPodR0EVMM7) e veja como realizar essa operação corretamente.

## Desligar colaborador

O processo de desligamento muda conforme o perfil do colaborador:

**Vendedor**  
Acesse **Cadastros > Vendedores > Ações > Férias ou Inativar > Desligamento**.

**Gerente**  
Acesse **Cadastros > Gerentes > Ações > Férias ou Inativar > Desligamento**.

> ⚠️ Apenas usuários com acesso superior ao de **gerente**, como **supervisores**, **consultores**, **administradores** ou **franqueados**, podem realizar o desligamento de um gerente.

### Quando a opção de desligamento não aparece

Em alguns casos, o botão **Desligamento** pode não estar visível no cadastro do colaborador.  
Veja como resolver as situações mais comuns:

#### 1. Colaborador vinculado como Vendedor Responsável

Se o colaborador estiver atribuído como **Vendedor Responsável**, será necessário removê-lo dessa função antes do desligamento.

#### 2. Período de ausência registrado no perfil

Um período de ausência ativo impede que o botão de desligamento seja exibido.

Para remover essa restrição:

1. Acesse **Cadastros > Vendedores** e clique em **Filtros**.  
2. Filtre pelos cadastros com períodos de licença ou férias.  
3. No cadastro desejado, clique em **Ações > Editar período na loja**.  
4. Altere ou remova a data de término da ausência e clique em **Salvar**.

Após a edição, o botão de **Desligamento** será exibido novamente.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/cadastros-de-colaboradores/gerenciamento-de-colaboradores-indeva_1.gif)

> ⚠️ O painel de cadastro exibe todos os períodos vinculados ao colaborador. Por esse motivo, o mesmo nome pode aparecer mais de uma vez na listagem.

