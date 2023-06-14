---
title: 'Criar multiloja / multidomínio'
id: tutorials_510
status: PUBLISHED
createdAt: 2017-04-27T22:03:17.733Z
updatedAt: 2023-06-07T14:07:30.944Z
publishedAt: 2023-06-07T14:07:30.944Z
firstPublishedAt: 2017-04-27T23:03:27.832Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: como-criar-multiloja-multidominio
legacySlug: como-criar-multiloja-multidominio
subcategory: yMp6sKDiJEi66CGAIQ4ma
---

Multiloja ou multidomínio é uma segunda loja administrada dentro de um mesmo painel administrativo VTEX. Esse recurso geralmente é utilizado quando a loja tem outras marcas mas existe uma similaridade de logística e métodos de pagamento ou quando a loja precisa de outro ambiente, por exemplo para vendas B2B.

Em um ambiente multidomínio é possível definir layouts distintos (além de produtos e/ou preços) para cada loja, variando de acordo com o domínio acessado. Exemplo: accountname.com.br, b2baccountname.com.br etc.

## Configuração no Gerenciamento da conta

O primeiro passo na configuração da multiloja é configurar uma nova loja na página de detalhes da conta. Saiba como fazer isso com o guia de [Gerenciamento de conta](https://help.vtex.com/pt/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq).

Note que você também precisa especificar qual é o domínio da sua nova loja. Saiba mais com o guia [Configurando o domínio da sua loja](https://help.vtex.com/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450).

## Configuração no CMS

A configuração no CMS irá de fato criar o ambiente que poderá ser acessado pelos clientes. O passo a passo abaixo demonstra como criar um website já copiando a estrutura de pastas do seu website principal, visando facilitar a criação de seu layout. Porém, essa configuração também pode ser feita criando um website novo.

1. Acesse o módulo **CMS > Layout**.
2. Clique em **CMS**.
3. Clique em **Sites and channels**.
4. Clique em seu website principal.
5. Clique no botão **Copiar Website**.
6. Clique novamente em **Sites and channels**, na coluna lateral.
7. Clique sobre o website criado.
8. Altere o nome.
9. Clique no botão **Salvar Website**.
10. Na mesma tela, clique no botão **Adicionar**.
11. Preencha o campo **Store name from License Manager** com o valor da loja criado no passo anterior no Gerenciamento da conta.
12. Preencha o campo **Políticas comerciais disponíveis** selecionando as políticas comerciais que irá associar a esta loja.
13. Clique no botão **Salvar Binding**.
14. Clique no botão **Salvar Website**.

Atente-se à ordenação de suas políticas comerciais. Elas sempre devem ser ordenadas de acordo com seu uso em websites, ou seja, primeiro as políticas comerciais que são usadas por websites (principal, b2b etc.) e depois as políticas comerciais que não estão associadas a nenhum website (políticas comerciais de marketplace, por exemplo). 

Isto porque se existir uma política comercial não associada a nenhum website, ela está disponível a todos eles. E caso ela venha antes da política comercial associada ao website, este assumirá a política comercial incorreta. 

Para saber mais detalhes sobre a relação entre websites e políticas comerciais, [acesse nosso artigo](/pt/faq/como-funciona-a-relacao-entre-websites-e-politicas-comerciais).

### Edite o dicionário

Também é possível definir variáveis específicas para cada website utilizando o dicionário. Para isso, dentro do website, clique em **dicionário**.
