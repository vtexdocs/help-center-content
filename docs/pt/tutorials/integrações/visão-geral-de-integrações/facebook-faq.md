---
title: 'Facebook: FAQ'
id: 3t2RoCcVfXgmGrQ70PmPxr
status: PUBLISHED
createdAt: 2021-06-16T19:36:32.098Z
updatedAt: 2021-06-16T19:43:11.993Z
publishedAt: 2021-06-16T19:43:11.993Z
firstPublishedAt: 2021-06-16T19:43:11.993Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: facebook-faq
legacySlug: facebook-faq
locale: pt
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

Este guia tem como objetivo indicar soluções para problemas que podem surgir na Integração com o Facebook. Use o índice a seguir para navegação.

## [Anúncios e Produtos](#anuncios-e-produtos)
1. [Como resolver problemas de SKU com erros no bridge. Mensagem de erro: "Unsupported post request. Object with ID “XXXXX” does not exist...” ?](#como-resolver-problemas-de-sku-com-erros-no-bridge-mensagem-de-erro-unsupported-post-request-object-with-id-xxxxx-does-not-exist-)
2. [Como resolver problemas de SKU com erros no bridge. Mensagem de erro: “O sku não possui preço de venda cadastrado na VTEX. É um valor obrigatorio” ?](#como-resolver-problemas-de-sku-com-erros-no-bridge-mensagem-de-erro-o-sku-nao-possui-preco-de-venda-cadastrado-na-vtex-e-um-valor-obrigatorio-)

## [Configurações](#configuracoes)
1. [Como refazer o processo de autenticação ?](#como-refazer-o-processo-de-autenticacao-)
2. [Como configurar login com Facebook e Google ?](#como-configurar-login-com-facebook-e-google-)

## Anúncios e Produtos 
### Como resolver problemas de SKU com erros no bridge. Mensagem de erro: "Unsupported post request. Object with ID “XXXXX” does not exist...” ?

É necessário validar com o cliente se as informações cadastradas no card de configuração do Facebook, como e-mail do afiliado ou Id do Business Manager, estão válidas. 

### Como resolver problemas de SKU com erros no bridge. Mensagem de erro: “O sku não possui preço de venda cadastrado na VTEX. É um valor obrigatorio” ?

O primeiro passo a se investigar nesse cenário é se realmente o SKU não possui um preço cadastrado para a política comercial do Facebook.

Caso o SKU possua um preço, verifique o status desse SKU pois o erro também pode estar relacionado com a situação de ativo/inativo. A melhor forma de fazer isso é realizando uma simulação de checkout:

![face faq01](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/visão-geral-de-integrações/facebook-faq_1.JPG)

Nessa simulação é importante analisar os campos:

1. Message
2. Price
3. Estoque

Caso esteja tudo válido, abra um chamado. 

## Configurações
### Como refazer o processo de autenticação ?

Esse processo é indicado quando a integração está com algum problema de autenticação com o Facebook, ou mesmo que autenticado com sucesso esteja apresentando erro de permissão no envio ou atualização do catálogo.

#### Excluir o App de integração da VTEX no Facebook
1. Acesse o Facebook usando sua conta vinculada à VTEX.
2. No canto direito superior da tela, **clique no botão** <img class="shadow-4" src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/visão-geral-de-integrações/facebook-faq_2.JPG" />
3. Selecione a opção **Configurações e privacidade**, em seguida clique em **Configurações**.
4. Clique em **Integrações comerciais**.
5. Selecione a opção **VTEX Integration** e clique em **Remover**.

#### Excluir o catálogo VTEX existente 
1. Acesse a página do [Facebook Business Manager](https://business.facebook.com/).
2. Selecione a opção **Configurações**. 
3. Clique em **Configurações do Negócio**.
4. Selecione o catálogo da VTEX que deseja excluir e clique na lixeira <img class="shadow-4" src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/visão-geral-de-integrações/facebook-faq_3.JPG" />
5. Clique em **Confirmar**.

#### Excluir a configuração de integração do Facebook na VTEX
1. Acesse o Admin, selecione a opção **Integrações**.
2. Clique em **Configurações**.
3. Na integração Facebook, clique na engrenagem <i class="fas fa-cog"></i>
4. Escolha a opção **Editar configuração**.
5. Em Integração, selecione a opção **Desativar**.
6. Clique em **Salvar configuração**.

#### Refazer a configuração de integração do Facebook na VTEX
1. No menu do Admin, clique em **Integrações**.
2. Clique em **Configurações**.
3. No box do Facebook, clique em **Integrar**.
4. Preencha os campos exibidos na tela (veja [detalhamento dos campos](/pt/tracks/facebook-integration--7h8KvIC4DbRRc8VlyJ8PFc/747gwmk5oMkyb6FtwLo17B)).
5. Clique no botão **Salvar Configuração**.

Após refazer a configuração, é muito importante que na etapa de autenticação com o Facebook seja concedida as permissões solicitadas pelo APP, sem exceções.

### Como configurar login com Facebook e Google ?

Na VTEX, não é necessário criar uma conta ou logar para fazer uma compra. No entanto, caso o cliente queira efetuar alguma alteração nos dados informados durante a primeira compra, é necessário que ele comprove a posse do e-mail em questão.

Nativamente, a plataforma oferece opções de login com Email e Senha e, também, Login com Código de Acesso enviado para o email do cliente. Também oferecemos integrações opcionais nativas com Google e Facebook, que necessitam ser configuradas.

#### Faça o registro junto aos provedores
Antes de configurar nossa integração de login com o Google e Facebook, é necessário criar credenciais de OAuth 2.0 (protocolo utilizado para integração) nesses serviços. Para fazer isso, siga as instruções nos artigos indicados abaixo:

- [Facebook](/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-facebook)
- [Google](/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-google)

#### Configure na sua loja
Após a configuração no Facebook e/ou Google, é preciso configurar na sua loja a opção de login por esses dois provedores. Nos dois casos, você precisará ter em mãos o `Client ID` e o `Client Secret` cadastrados.

1. Acesse o módulo do VTEX ID pelo painel administrativo da loja no menu *Configurações Da Conta > Autenticação*.
2. Selecione o provedor e selecione **Editar**.
3. Preencha o formulário com o `Client ID` e o `Client Secret` cadastrado.
4. Ative o uso do provedor com o seu interruptor.

#### Valide a configuração
Com tudo configurado, você já pode testar a sua configuração. Recomendamos que faça isso já através da URL final que seus usuários utilizarão para acessar sua loja. Ao tentar efetuar login, as opções referentes aos provedores ativos devem ser disponibilizadas e o processo deve poder ser efetuado sem maiores problemas.
