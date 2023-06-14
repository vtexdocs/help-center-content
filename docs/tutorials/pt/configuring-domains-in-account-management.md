---
title: 'Configurando o domínio da sua loja'
id: tutorials_2450
status: PUBLISHED
createdAt: 2017-04-27T21:55:00.603Z
updatedAt: 2023-05-31T22:31:46.690Z
publishedAt: 2023-05-31T22:31:46.690Z
firstPublishedAt: 2017-04-27T23:03:51.625Z
contentType: tutorial
productTeam: Identity
author: authors_3
slug: configurando-dominios-no-gerenciamento-da-conta
legacySlug: configurando-dominios-no-license-manager
subcategory: yMp6sKDiJEi66CGAIQ4ma
---

A configuração de domínios é necessária para que o endereço acessado seja corretamente direcionado a uma loja na VTEX. Abaixo você pode ver como [cadastrar um novo domínio](#cadastrar-um-novo-dominio) ou [mudar o domínio de uma loja ativa](#mudar-o-dominio-da-loja).

<div class="alert alert-danger">
Caso a sua operação possua mais de uma conta VTEX ou subcontas, não troque o domínio de uma conta para outra. Isso provocará falhas em diversos aspectos da sua loja.
</div>

<div class="alert alert-warning">
Se você adicionar mais de um domínio como host da sua loja, todos exibirão o mesmo conteúdo. No entanto, para atingir este objetivo recomendamos que cadastre apenas um domínio e use redirecionamentos para os outros. Saiba mais sobre redirecionamentos:
<ul><li><a href=”https://help.vtex.com/pt/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ”>Redirecionamento de outros endereços</a></li>
<li><a href=”https://help.vtex.com/pt/tutorial/configurando-acesso-sem-www--tutorials_4278”>Configurar acesso sem www</a></li></ul> 
</div>

## Subdomínio

Qualquer domínio registrado desta forma precisa conter subdomínio, que pode ou não ser `www`. Confira exemplos abaixo:

- `minhaloja.com` - Não é válido pois não contém subdomínio.
- `www.minhaloja.com` - Domínio válido.
- `loja.minhamarca.com` - Domínio válido.

<div class = "alert alert-info">
  Saiba mais sobre como <a href="https://help.vtex.com/pt/tutorial/configuring-access-without-www--tutorials_4278">configurar acesso sem www</a>.
</div>

## Cadastrar um novo domínio

1. Clique no avatar do seu perfil, marcado pela inicial do seu email.
2. Clique no botão **Configurações da conta**.
3. Clique em **Conta**.
4. Clique na aba **Lojas**.
5. Clique no botão de ações <i class="fas fa-ellipsis-v"></i> correspondente à loja em que deseja cadastrar o domínio.
6. Insira o domínio no campo **Hosts.**
7. Clique no botão `Adicionar`.
8. Clique no botão `Salvar`.

Após isso será possível [configurar o apontamento de DNS para a VTEX](https://help.vtex.com/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280).

## Mudando o domínio de uma loja

A plataforma VTEX é preparada para suportar mudanças de domínios sem impactos negativos. Para isso, basta seguir o passo a passo abaixo:

1. Crie novas entradas host para a loja desejada. Nesse momento, o DNS do novo domínio ainda não deve estar apontado para a VTEX. 
2. Confira configurações do novo Portal. Esse passo é fundamental para que o Checkout continue funcionando após a mudança. É necessário conferir se os Sites configurados estão relacionados a algum Account Name inexistente no License Manager. Leia mais sobre [configurações do portal](/pt/faq/configurar-template-no-smartcheckout/).
3. Aponte DNS do novo domínio para a VTEX. Leia mais sobre [apontamento de DNS](/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex/).
4. Após a propagação de DNS do novo host, exclua os hosts antigos, mantendo apenas o novo.

