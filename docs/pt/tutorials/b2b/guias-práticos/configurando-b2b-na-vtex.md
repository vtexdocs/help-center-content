---
title: 'Configurar B2B na VTEX'
id: tutorials_238
status: PUBLISHED
createdAt: 2017-04-27T22:13:02.487Z
updatedAt: 2022-10-24T12:34:22.858Z
publishedAt: 2022-10-24T12:34:22.858Z
firstPublishedAt: 2017-04-27T23:03:10.539Z
contentType: tutorial
productTeam: Others
author: authors_3
slugEN: setting-up-b2b-on-vtex
legacySlug: configurando-b2b-na-vtex
locale: pt
subcategoryId: 2LrbEY7MFeKqmdfYLBCnfi
---

B2B (Business to Business) é a sigla utilizada no comércio eletrônico para definir transações comerciais entre empresas. Em outras palavras, é um ambiente onde uma empresa comercializa seus produtos para outras empresas.

Na VTEX, ambientes B2B normalmente são completamente ou parcialmente bloqueados para usuários anônimos, sendo obrigatória a autenticação para a visualização de informações comerciais dos produtos.

Veja abaixo as configurações necessárias para criar uma loja B2B, na VTEX.

> ℹ️ Toda loja B2B se preparando para entrar em produção e fazer configuração final de domínio deve contatar [nosso Suporte](https://support.vtex.com/hc/pt-br/requests) com antecedência e solicitar que a configuração interna seja feita.

## Pré-requisito

Se você já possui uma loja B2C (Business to Consumer) na VTEX, antes de seguir os passos descritos abaixo, você precisa criar uma multiloja para a sua operação B2B. Confira o artigo [Criar multiloja / multidomínio](/pt/tutorial/como-criar-multiloja-multidominio--tutorials_510) para mais informações.

## 1. Incluir regra condicional na Política Comercial do B2B

Esse é o passo mais importante para ativar o B2B. Ao configurar a Política Comercial do B2B, você deve preencher o campo __Regra Condicional__ para definir os usuários que poderão navegar no seu site.

Normalmente, nos B2Bs convencionais, esse campo é preenchido com o valor `approved="true"` (`approved` é o nome de um campo na entidade Cliente, no Master Data). Com essa regra, o sistema permite que apenas usuários autenticados e aprovados naveguem no site.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/guias-pr%C3%A1ticos/configurando-b2b-na-vtex_1.png)

## 2. Customizar layout de diretórios B2B

O B2B convencional exige navegação autenticada e aprovada, ou seja, usuários anônimos ou não aprovados não terão acesso às informações comerciais dos produtos até que cumpram essas exigências.

Veja as características básicas de cada tipo de usuário:

- **Usuário Anônimo**: é aquele que não se logou, ou seja, não se autenticou no site. Esse tipo de usuário não poderá visualizar informações dos produtos. Ele será redirecionado para o diretório `/sistema/401` (Não autorizado).
- **Usuário não aprovado**: é aquele que já tem cadastro e já está logado, mas seu cadastro não atende à regra condicional definida na política comercial. Em linhas gerais, seu registro no Master Data não atende à regra condicional. Esse tipo de usuário não poderá visualizar informações do produto. Ele será redirecionado para o diretório `/sistema/403` (Proibido).
- **Usuário aprovado**: é aquele que já tem cadastro e seu cadastro atende à regra condicional definida na política comercial. Esse tipo de usuário poderá visualizar informações dos produtos.

Dessa forma, para ter um ambiente B2B, será necessário customizar as pastas **401** e **403**, filhas da pasta **sistema**.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/guias-pr%C3%A1ticos/configurando-b2b-na-vtex_2.png)

Navegação por um usuário Anônimo (ao tentar acessar qualquer página, será redirecionado para 401):

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/guias-pr%C3%A1ticos/configurando-b2b-na-vtex_3.png)

Navegação por um usuário não aprovado (ao tentar acessar qualquer página, será redirecionado para 403):

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/guias-pr%C3%A1ticos/configurando-b2b-na-vtex_4.png)

## 3. Definir campos de pré-cadastro

O usuário que ainda não é cadastrado no site precisa ter uma interface para realizar o pré-cadastro. O pré-cadastro é um formulário com informações básicas do usuário. Apesar de básicas, essas informações devem ser suficientes para o lojista aprová-lo e liberá-lo para navegação no site.

Dessa forma, é necessário definir os campos desse pré-cadastro. Normalmente, os B2Bs utilizam informações de cliente (nome, e-mail, telefone, etc) e endereço (rua, bairro, cidade, etc) para esse pré-cadastro. Confira o artigo [Importar dados de clientes](/pt/tutorial/importando-dados-de-clientes-brasil--2zWYVOyj0sISYQmeUwCsI0 "Importar dados de clientes - Brasil") para mais informações sobre os dados necessários.

> ⚠️ O campo utilizado como regra condicional na política comercial nunca poderá fazer parte desse formulário, uma vez que o próprio usuário não pode realizar sua própria aprovação, cabendo à loja essa responsabilidade.

## 4. Criar formulário de pré-cadastro

Após definidos os campos, você deverá criar o formulário de pré-cadastro na pasta **/sistema/401**, pois é a única pasta para onde o usuário anônimo sempre será redirecionado.

As informações submetidas no formulário deverão ser enviadas para o CRM através das APIs do Master Data ([veja documentação](https://developers.vtex.com/reference/master-data-api-v2-overview), ou seja, será necessário desenvolver um JavaScript para aplicar essa função. Confira aqui um [exemplo de template HTML e JavaScript](//assets.contentful.com/alneenqid6w5/5PJaFVGdOwomgCYG66g2M4/ac29ba69fdd11cb8c87b88a0a6a62795/ExemploTemplateB2B.rar "Exemplo de template HTML e JS") com esse propósito.

## 5. Operação

Com tudo configurado e, finalmente, com o B2B em produção, a rotina do lojista dependerá das regras e necessidades de seu negócio. Basicamente, a cada novo cadastro, o lojista deverá avaliar o usuário e aprová-lo ou não na interface do CRM, que pode ser acessada pela URL `http://{nome_da_conta}.vtexcrm.com.br/`.

> ℹ️ Este artigo descreve as configurações básicas de um B2B, porém, é possível customizar o sistema para essa necessidade de várias formas, inclusive, enviando emails (triggers) a partir de eventos pré-definidos. 
