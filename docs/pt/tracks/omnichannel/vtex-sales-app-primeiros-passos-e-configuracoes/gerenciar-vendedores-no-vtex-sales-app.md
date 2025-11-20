---
title: 'Gerenciar vendedores no VTEX Sales App'
id: 5pqtuvi97FFZiGf7MlSe8q
status: PUBLISHED
createdAt: 2023-04-17T21:01:21.431Z
updatedAt: 2025-11-21T19:59:15.811Z
publishedAt: 2024-01-05T19:59:15.811Z
firstPublishedAt: 2023-04-25T20:13:04.431Z
contentType: trackArticle
productTeam: Shopping
slugEN: managing-sales-associates-in-vtex-sales-app
locale: pt
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 6
---

Após realizar as [configurações básicas do VTEX Sales App no Admin](/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/4L5SoLxE8O3YkxF7FKymrO), é possível adicionar novos vendedores ao sistema ou gerenciar os vendedores já cadastrados.

A categoria Vendedores representa uma seção dentro das Configurações da loja do Admin VTEX, exibindo a lista completa dos vendedores registrados no aplicativo **VTEX Sales App** da loja. Dentro dessa página, é possível administrar as informações dos vendedores em todas as [contas franquias](/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) da sua loja, realizando operações de [cadastrar](#cadastrar-vendedor), [buscar](#buscar-vendedor), [filtrar](#filtrar-vendedores), [editar](#editar-vendedor) e [excluir](#excluir-vendedor)].

![vendedores-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-primeiros-passos-e-configuracoes/gerenciar-vendedores-no-instore_1.png)

A página apresenta as seguintes informações:

  | Campos da coluna | Descrição                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Nome             | Nome que identifica o vendedor, definido na etapa [Cadastrar vendedor](#cadastrar-vendedor). |
| Código           | Código identificador de cada vendedor, o mesmo cadastrado no sistema da loja física.                                                                                                 |
| Loja             | Nome identificador da [conta franquia](/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) em que o vendedor está cadastrado.                              |
| Email            | Email de acesso referente a cada vendedor.                                                                                                                                           |

## Cadastrar vendedor

Você pode cadastrar um vendedor seguindo os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja** **> Sales App > Vendedores**, ou digite **Vendedores** na barra de busca no topo da página.
2. Clique no botão `+ Cadastrar vendedor`.
3. Preencha os [campos de cadastro do vendedor](#campos-de-cadastro-do-vendedor).
4. Clique em `Cadastrar`.
5. Clique em `Salvar` para confirmar o cadastro do vendedor.  

Após o cadastro feito pelo lojista, o vendedor poderá criar uma senha de acesso, conforme descrito na seção [Primeiro acesso do vendedor](#primeiro-acesso-do-vendedor).

### Campos de cadastro do vendedor

#### Identificação

* **Nome do vendedor:** nome do vendedor que será cadastrado. Campo obrigatório.
* **Código do vendedor:** código que identifica o vendedor, igual ao cadastrado no sistema da loja física.
* **Email:** email de acesso do vendedor ao Sales App. Campo obrigatório.
* **Permitir acesso à performance de vendas de outros vendedores:** caixa de seleção que permite a visualização da performance de vendas de outros vendedores (quando marcada) ou apenas o acesso à informações da sua própria performance de vendas (quando não marcada).

#### Loja física

* **Loja:** [conta franquia](/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) em que o vendedor será cadastrado. Campo obrigatório.

> ℹ️ As alterações podem levar até 15 minutos para serem processadas e aplicadas no Sales App.

## Buscar vendedor

Você pode buscar informações sobre um vendedor utilizando a barra de busca. Por meio dela, você tem acesso ao nome e email do vendedor, e nome da loja na qual ele está cadastrado.

## Filtrar vendedores

Clique no filtro `Loja` para filtrar os vendedores pelo nome de uma loja física específica. 

## Editar vendedor

É possível que seja necessário alterar a loja de um vendedor para uma nova loja, para isso é preciso editar seu cadastro. Você pode editar um vendedor seguindo os passos a seguir:

1. Na linha do vendedor que deseja editar, clique em <i class="fas fa-ellipsis-v"></i>.
2. Clique em <i class="fas fa-pencil-alt"></i> `Editar`.
3. Altere as informações que desejar.
4. Clique em `Salvar` para finalizar.

## Inativar vendedor

Você pode inativar um vendedor seguindo os passos a seguir:

1. Na linha do vendedor que deseja editar, clique em <i class="fas fa-ellipsis-v"></i>.
2. Clique em <i class="fa-solid fa-box-archive"></i> `Inativar`.
3. Clique em `Inativar` para confirmar e finalizar.

Uma vez que o vendedor foi inativado, ele perderá o acesso ao aplicativo do Sales App e não conseguirá mais realizar o login. Para excluir definitivamente um vendedor, entre em contato com nosso [suporte](https://support.vtex.com/hc/pt-br/requests).

## Primeiro acesso do vendedor

Para obter acesso ao **Sales App**, o vendedor deverá seguir os passos abaixo:

>ℹ️ O vendedor não obtém acesso ao Admin VTEX da loja, pois a criação do acesso ao **Sales App** é feita em outro ambiente.

1. Após ser [cadastrado pelo lojista](#cadastrar-vendedor), o vendedor recebe uma mensagem pelo email cadastrado.
2. Ele clica no link da mensagem para criar o acesso.
3. Na página aberta, ele preenche o email cadastrado e clica para continuar.
4. Após receber um código de confirmação pelo email, ele preenche o campo código.
5. Clica para continuar.
6. Na janela sobre como deseja entrar no Sales App, ele seleciona a opção para entrar com email e senha. A escolha desta opção é obrigatória, caso contrário haverá um erro.
7. Na janela aberta, o vendedor preenche o campo com a senha sendo criada, que precisa ter:

    * 8 caracteres
    * 1 número
    * 1 letra maiúscula
    * 1 letra minúscula

8. Ele clica para confirmar a criação da senha.

    >⚠️ Nesta etapa, é possível que a página apresente um erro de falta de acesso. Isso não influencia a criação da senha e a página pode ser fechada.

Feito isso, o vendedor será capaz de acessar o **Sales App**. Basta que em uma nova janela do navegador ele acesse o link `https://{nomeLoja}.myvtex.com/assisted-sales/sales-app`, substituindo `{nomeLoja}` pelo nome da loja, e utilize a senha criada.

### Recuperar senha do vendedor

Caso o vendedor esqueça a senha, ele pode recuperá-la acessando o **Sales App** pelo link `https://{nomeLoja}.myvtex.com/assisted-sales/sales-app`, substituindo `{nomeLoja}` pelo nome da loja. Ao escolher a opção para recuperar senha, ele consegue realizar o fluxo de recuperação por meio do seu email de cadastro.
