---
title: 'Gerenciamento de contas'
id: tutorials_6285
status: ARCHIVED
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
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

O gerenciamento das suas contas é feito no **Gerenciamento da conta**. Dentro do módulo, clique no avatar do seu perfil, marcado pela inicial do seu email, depois em **Configurações de conta** > **Conta**.

Na página de cada conta você encontra dados básicos sobre a loja virtual, configurações de domínio e multidomínio, chaves de acesso para APIs, logotipo da empresa e informações de contato.

>ℹ️ Alguns desses dados são úteis somente para a VTEX, e podem não refletir em alteração das informações exibidas na loja.

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

>❗ Caso a sua operação possua mais de uma conta VTEX ou subcontas, não troque o domínio de uma conta para outra. Isso provocará falhas em diversos aspectos da sua loja.

Para adicionar um novo host, basta clicar em `Adicionar novo domínio` e inserir o domínio no campo de texto.

>⚠️ Se você adicionar mais de um domínio como host da sua loja, todos exibirão o mesmo conteúdo. No entanto, para atingir este objetivo recomendamos que cadastre apenas um domínio e use redirecionamentos para os outros. Saiba mais sobre redirecionamentos:
>
> *<a href=”https://help.vtex.com/pt/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ”>Redirecionamento de outros endereços</a>
>
> *<a href=”https://help.vtex.com/pt/tutorial/configurando-acesso-sem-www--tutorials_4278”>Configurar acesso sem www</a>

#### Subdomínios

Qualquer domínio registrado desta forma precisa conter subdomínio, que pode ou não ser `www`. Confira exemplos abaixo:

- `minhaloja.com` - Não é válido pois não contém subdomínio.
- `www.minhaloja.com` - Domínio válido.
- `loja.minhamarca.com` - Domínio válido.

## Contatos

A parte de **Contatos** é visível somente para o usuário que estiver cadastrado ali. Este cadastro define quem poderá utilizar o painel **[FullCleanUp](http://help.vtex.com/tutorial/entendendo-a-manutencao-da-base-de-dados/ "FullCleanUp")** e também quem poderá visualizar informações de **Segurança**. Este usuário é considerado o usuário titular.

Depois que um usuário preenche e salva **Nome** e **E-mail**, nos campos de contato, um e-mail automático é enviado a ele informando sobre o cadastro e solicitando geração de senha (caso este não possua nenhum acesso ao admin).

>ℹ️ O template deste e-mail automático pode ser alterado na [Central de mensagens](https://help.vtex.com/pt/tutorial/understanding-the-message-center--tutorials_84) modificando o template <i>account registration</i>.

![cadastro de conta](https://images.ctfassets.net/alneenqid6w5/5tBCNxqBxeWkqOgiIcEaQw/4e044e1f46911db85da4e5ea0a195226/cadastro_de_conta.jpg)

## Segurança

Nessa área são criados os [appKeys e appTokens](https://help.vtex.com/pt/tutorial/chaves-de-aplicacao) usados para autenticar integrações com a sua loja.

Apenas o usuário Titular tem permissão para criar appKeys e appTokens, uma vez que estes dão acesso à sua loja por API, o que pode ser crítico se não utilizado por profissionais habilitados.
