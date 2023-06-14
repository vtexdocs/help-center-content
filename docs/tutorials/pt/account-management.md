---
title: 'Gerenciamento de contas'
id: tutorials_6285
status: DRAFT
createdAt: 2017-04-27T21:48:34.322Z
updatedAt: 2023-06-01T13:45:18.066Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:18.953Z
contentType: tutorial
productTeam: Identity
author: authors_2
slug: gerenciamento-de-contas
locale: pt
legacySlug: como-gerenciar-contas
subcategory: yMp6sKDiJEi66CGAIQ4ma
---

O gerenciamento das suas contas é feito no **Gerenciamento da conta**. Dentro do módulo, clique no avatar do seu perfil, marcado pela inicial do seu email, depois em **Configurações de conta** > **Conta**.

Na página de cada conta você encontra dados básicos sobre a loja virtual, configurações de domínio e multidomínio, chaves de acesso para APIs, logotipo da empresa e informações de contato.

<div class="alert alert-info">
Alguns desses dados são úteis somente para a VTEX, e podem não refletir em alteração das informações exibidas na loja.
</div>

## Botão de Ativo/Inativo

Ao ser desativado, esse botão torna a loja inacessível para usuários finais.

## Botão de "em produção"

Por padrão, o status inicial da loja é fora de produção. Nesse status, ainda não há tráfego para a loja.

Além disso, de acordo com o contrato padrão da VTEX, não é cobrada nenhuma porcentagem sobre as vendas enquanto a loja não estiver em produção.

## Dados da Empresa

Aqui ficam quatro dados gerais sobre a sua empresa:
- Nome da conta, ou seja, o nome identificador da conta, usado na URL de acesso ao Admin. Não pode ser alterado.
- Nome fantasia
- Razão social
- CNPJ

## Loja

Nesta seção, você pode configurar características que identificam sua loja:
- [Nome da loja](https://help.vtex.com/en/tutorial/what-is-the-store-name--3gh9mTNeMgs6Qe44e8IqQK#).
- Nome fantasia.
- Hosts.

Você também pode usar o botão `Configurar outra loja` para [Criar multiloja](https://help.vtex.com/pt/tutorial/como-criar-multiloja-multidominio--tutorials_510).

### Hosts

Na seção **Hosts** você deve adicionar o domínio principal da sua loja, que foi [configurado com apontamento de DNS](https://help.vtex.com/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280).

<div class="alert alert-danger">
Caso a sua operação possua mais de uma conta VTEX ou subcontas, não troque o domínio de uma conta para outra. Isso provocará falhas em diversos aspectos da sua loja.
</div>

Para adicionar um novo host, basta clicar em `Adicionar novo domínio` e inserir o domínio no campo de texto.

<div class="alert alert-warning">
Se você adicionar mais de um domínio como host da sua loja, todos exibirão o mesmo conteúdo. No entanto, para atingir este objetivo recomendamos que cadastre apenas um domínio e use redirecionamentos para os outros. Saiba mais sobre redirecionamentos:
<ul><li><a href=”https://help.vtex.com/pt/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ”>Redirecionamento de outros endereços</a></li>
<li><a href=”https://help.vtex.com/pt/tutorial/configurando-acesso-sem-www--tutorials_4278”>Configurar acesso sem www</a></li></ul> 
</div>

#### Subdomínios

Qualquer domínio registrado desta forma precisa conter subdomínio, que pode ou não ser `www`. Confira exemplos abaixo:

- `minhaloja.com` - Não é válido pois não contém subdomínio.
- `www.minhaloja.com` - Domínio válido.
- `loja.minhamarca.com` - Domínio válido.

## Contatos

A parte de **Contatos** é visível somente para o usuário que estiver cadastrado ali. Este cadastro define quem poderá utilizar o painel **[FullCleanUp](http://help.vtex.com/tutorial/entendendo-a-manutencao-da-base-de-dados/ "FullCleanUp")** e também quem poderá visualizar informações de **Segurança**. Este usuário é considerado o usuário titular.

Depois que um usuário preenche e salva **Nome** e **E-mail**, nos campos de contato, um e-mail automático é enviado a ele informando sobre o cadastro e solicitando geração de senha (caso este não possua nenhum acesso ao admin).

<div class="alert alert-info">
O template deste e-mail automático pode ser alterado na <a href="https://help.vtex.com/pt/tutorial/understanding-the-message-center--tutorials_84">Central de mensagens</a> modificando o template <i>account registration</i>.
</div>

![cadastro de conta](https://images.ctfassets.net/alneenqid6w5/5tBCNxqBxeWkqOgiIcEaQw/4e044e1f46911db85da4e5ea0a195226/cadastro_de_conta.jpg)

## Segurança

Nessa área são criados os [appKeys e appTokens](https://help.vtex.com/pt/tutorial/chaves-de-aplicacao) usados para autenticar integrações com a sua loja.

Apenas o usuário Titular tem permissão para criar appKeys e appTokens, uma vez que estes dão acesso à sua loja por API, o que pode ser crítico se não utilizado por profissionais habilitados.
 lojas](#lojas).
- [Adicionar nova loja](#criar-loja).
- [Editar loja](#editar-loja).
- [Excluir loja](#excluir-loja).

Ao clicar na aba **Lojas**, na parte superior da tela, você verá uma lista com as informações de todas as lojas criadas na sua conta VTEX. 

![Página de detalhes da conta - Lojas](https://images.ctfassets.net/alneenqid6w5/rAFyEsEDLBDqj3UBGufrb/70dea056a37a7cffd997803160605978/2pt.png)

Para cada loja, você pode visualizar os seguintes detalhes:

- **Nome da loja:** identificador interno da loja.
- **Nome comercial:** nome utilizado comercialmente.
- **Hosts:** domínios associados à loja.

Você pode usar a caixa de busca para filtrar as lojas exibidas na lista por qualquer um dos atributos.

Além disso, você poderá [criar uma nova loja](#criar-loja), [editar uma loja](#editar-loja) ou [excluir](#excluir-loja) lojas existentes.

### Criar loja

Para criar uma nova loja, siga os passos:

1. Acesse a página de **Conta**, clicando no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Conta**.
2. Clique na aba **Loja** na parte superior da tela.
3. Clique no botão `+ Nova loja`.
4. Preencha as informações básicas da loja:
    - **Nome da loja:**  identificador interno da loja.
    - **Nome comercial:** nome utilizado comercialmente.
    - **Localidade:** idioma predefinido associado a esta loja.
    - **Canal de vendas:** [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#) que deseja associar à nova loja.
5. Se deseja iniciar o processo de [go-live](https://help.vtex.com/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM) da sua loja, preencha o campo **Hosts** com o domínio da sua loja. Caso contrário, deixe este campo em branco.
6. Clique no botão `Criar`.

<div class = "alert alert-info">
  Para saber mais sobre a configuração de <b>Hosts</b> da sua loja, confira o artigo  <a href="https://help.vtex.com/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450">Configurando o domínio da sua loja</a>.
</div>

<div class="alert alert-warning">
Não utilize um domínio do tipo ".com" no campo Nome da Loja. Esse tipo de entrada só pode existir nos campos Hosts.
</div>

### Editar loja

Você pode editar informações de uma loja existente com estes passos:

1. Acesse a página de **Conta**, clicando no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Conta**.
2. Clique na aba **Loja** na parte superior da tela.
3. Clique no botão de ações <i class="fas fa-ellipsis-v"></i> correspondente à loja que deseja editar.
4. Clique em `Editar`.
5. Você verá a página de edição de conta. Edite as informações que deseja.
6. Clique em `Salvar`.

### Excluir loja

Para excluir uma loja, siga estes passos:

1. Acesse a página de **Conta**, clicando no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Conta**.
2. Clique na aba **Loja** na parte superior da tela.
3. Clique no botão de ações <i class="fas fa-ellipsis-v"></i> correspondente à loja que deseja excluir.
4. Clique em `Excluir`.
5. Você verá um modal de confirmação. Clique em `Excluir`.

<div class="alert alert-warning">
Note que a loja principal, sinalizada com uma estrela ao lado do nome na lista de lojas, não pode ser excluída.
</div>

Saiba mais:
- [O que é nome de conta?](https://help.vtex.com/pt/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC)
- [Usuário titular](https://help.vtex.com/pt/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy)
- [Transferir a propriedade da loja](https://help.vtex.com/pt/tutorial/transferencia-de-propriedade-da-loja)
- [Configurando o domínio da sua loja](https://help.vtex.com/pt/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450)
- [Go-live](https://help.vtex.com/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM)

