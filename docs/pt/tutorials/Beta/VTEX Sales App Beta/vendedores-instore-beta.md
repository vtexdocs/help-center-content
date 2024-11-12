---
title: 'Vendedores inStore (Beta)'
id: 4rzit1pzp28km4HSDEdrEC
status: DRAFT
createdAt: 2022-12-02T18:05:56.305Z
updatedAt: 2023-04-26T15:16:49.107Z
publishedAt: 
firstPublishedAt: 2022-12-02T18:40:20.036Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: sales-associates-instore-beta
locale: pt
legacySlug: vendedores-instore-beta
subcategoryId: 5SE2asHiQtHKfbnFru8RWH
---

>ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

**Vendedores** é uma página das **Configurações da loja** do Admin VTEX que apresenta a listagem de vendedores cadastrados no aplicativo [inStore](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf) da loja. Nela, você pode gerenciar informações dos vendedores em todas as [contas franquias](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) da sua loja.

Esta página permite que você gerencia seus vendedores a partir das seguintes ações:

* [Cadastrar](#cadastrar-vendedor)
* [Buscar](#buscar-vendedor)
* [Filtrar](#filtrar-vendedores)
* [Editar](#editar-vendedor)
* [Excluir](#excluir-vendedor)

![vendedores-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

A página apresenta as seguintes informações: 

  | Campos da coluna | Descrição                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Nome             | Nome que identifica o vendedor, definido na etapa [Cadastrar vendedor](#cadastrar-vendedor). |
| Código           | Código identificador de cada vendedor, o mesmo cadastrado no sistema da loja física.                                                                                                 |
| Loja             | Nome identificador da [conta franquia](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) que o vendedor está cadastrado.                              |
| Email            | Email de acesso referente a cada vendedor.                                                                                                                                           |

## Cadastrar vendedor

Você pode cadastrar um vendedor seguindo os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja** **> inStore > Vendedores**, ou digite **Vendedores** na barra de busca no topo da página.
2. Clique no botão `+ Cadastrar vendedor`.
3. Preencha os [campos de cadastro do vendedor](#campos-de-cadastro-do-vendedor).
4. Clique em `Cadastrar`.
5. Clique em `Salvar` para confirmar o cadastro do vendedor.  

Após o cadastro, o vendedor irá receber um email confirmando o cadastro e redirecionando para a opção de login do vendedor ao aplicativo inStore.

![email-vendedor-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

>⚠️ Os vendedores cadastrados no inStore não apresentam permissão para acessar o Admin VTEX. Caso um vendedor tente realizar o login no Admin seu cadastro será excluído.

### Campos de cadastro do vendedor

#### Identificação

* **Nome do vendedor:** nome do vendedor que será cadastrado. Campo obrigatório.
* **Código do vendedor:** código que identifica o vendedor, igual ao cadastrado no sistema da loja física.
* **Email:** email de acesso do vendedor ao inStore. Campo obrigatório.

#### Loja física

* **Loja:** [conta franquia](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) em que o vendedor será cadastrado. Campo obrigatório.

>ℹ️ As alterações podem levar até 15 minutos para serem processadas e aplicadas no inStore.

## Buscar vendedor

Você pode buscar um vendedor utilizando a barra de busca. É possível pesquisar pelo nome do vededor, nome da loja e email do vendedor.

## Filtrar vendedores

Clique no filtro `Loja` para filtrar os vendedores pelo nome de uma loja física específica. 

## Editar vendedor

É possível que seja necessário alterar a loja de um vendedor para uma nova loja, para isso é preciso editar seu cadastro. Você pode editar um vendedor seguindo os passos a seguir:

1. Na linha do vendedor que deseja editar, clique em <i class="fas fa-ellipsis-v"></i>.
2. Clique em <i class="fas fa-pencil-alt"></i> `Editar`.
3. Altere as informações que desejar.
4. Clique em `Salvar` para finalizar.

## Excluir vendedor

Você pode excluir um vendedor seguindo os passos a seguir.

1. Na linha do vendedor que deseja editar, clique em <i class="fas fa-ellipsis-v"></i>.
2. Clique em <i class="fas fa-trash"></i> `Excluir`.
3. Clique em `Excluir` para confirmar e finalizar.

Uma vez que o vendedor foi excluído, ele perderá o acesso ao aplicativo do inStore e não conseguirá mais realizar o login.

## Saiba mais

* [O que é o inStore?](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf)
* [O que é conta franquia?](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl)
