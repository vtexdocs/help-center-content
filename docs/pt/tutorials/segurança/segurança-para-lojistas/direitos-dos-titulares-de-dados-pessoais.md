---
title: 'Direitos dos titulares de dados pessoais'
id: 6imchxTx09icupKMbzHVIM
status: PUBLISHED
createdAt: 2023-04-26T18:56:45.938Z
updatedAt: 2023-06-22T21:47:26.569Z
publishedAt: 2023-06-22T21:47:26.569Z
firstPublishedAt: 2023-04-26T19:50:54.254Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: data-subject-rights
legacySlug: direitos-dos-titulares-de-dados-pessoais
locale: pt
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

Quando alguém realiza uma compra em uma loja virtual, deve inserir suas informações pessoais para realização de pagamento, entrega, emissão de nota fiscal, inscrição em promoções, entre outras ações. Neste contexto, cada pessoa tem direito de saber e decidir como seus dados pessoais são utilizados e para quais finalidades.

É importante que você esteja ciente dos direitos dos titulares de dados pessoais e preparado para ajudar seus clientes a exercê-los.

Neste artigo, você aprenderá como cumprir com os seguintes direitos dos titulares de dados:
- [Acesso e portabilidade](#acesso-e-portabilidade)
- [Retificação](#retificacao) 
- [Consentimento](#consentimento)
- [Exclusão](#exclusão)

> ❗ A VTEX não se responsabiliza por dados pessoais armazenados por sistemas integrados à sua loja, como por exemplo: ERPs, marketplaces externos, sellers externos, aplicativos de terceiros disponíveis na [VTEX App Store](https://help.vtex.com/pt/tutorial/visao-geral-apps--4xfsHXyAQTjbZNuiKl6Y0e) ou customizações implementadas pelo seu time de desenvolvimento. Você deve mapear estes dados e garantir a aplicabilidade dos direitos dos titulares de dados pessoais nestas instâncias, além dos processos descritos abaixo.

## Acesso e portabilidade

O direito de acesso permite que os clientes obtenham uma cópia de seus dados pessoais armazenados por sua loja. O direito de portabilidade permite que os clientes solicitem a transferência de seus dados pessoais para outro controlador de dados.

Caso seja solicitado por algum de seus clientes, você pode usar o Admin VTEX para acessar estes dados e exportá-los. Com isso, poderá então compartilhar estas informações com o cliente ou transferir para outro controlador de dados da forma que preferir.

### Acessando e exportando dados de clientes

Ao atender uma solicitação de acesso ou portabilidade, é importante garantir que você está acessando e exportando todas as informações referentes àquela pessoa armazenadas pela sua loja. Há diferentes módulos em que você pode encontrar essas informações e você deve conferir todos os que são pertinentes a depender da arquitetura de dados da sua loja. Confira abaixo detalhes de como fazer isso para cada um destes módulos.

#### Master Data v1

Você pode usar a [API do Master Data v1](https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search) ou o Admin VTEX para acessar e exportar dados de clientes armazenados no [Master Data v1](https://help.vtex.com/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw).

Caso deseje usar a API, seu time de desenvolvimento deve usar o [endpoint de busca do Master Data v1](https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search), buscando nas entidades de dados de clientes (**CL**), endereços (**AD**) e quaisquer outra que tenha configurado para receber informações pessoais de seus clientes. Filtre a busca pelo email do cliente.

Para exportar dados do Master Data v1 pelo painel Admin, siga estes passos:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data.**
2. Clique na aba **Aplicações.**
3. Clique em visualizar (ícone da direita) correspondente à entidade de dados desejada.
![visualizar button master data](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/seguran%C3%A7a/seguran%C3%A7a-para-lojistas/direitos-dos-titulares-de-dados-pessoais_1.png)
4. Use o [filtro do Master Data v1](https://help.vtex.com/tutorial/filtering-data-on-master-data--tutorials_778#how-to-use-filters) para filtrar apenas os dados referentes ao usuário desejado. Use o `email` ou `ID do usuário` como campo do filtro.
5. Clique no botão `Exportar XLS`.
6. Selecione a opção `Selecionar todos os campos`.
7. Caso deseje, altere o email para o qual deseja enviar o relatório.
8. Clique no botão `Exportar`.

Repita este passo a passo para as entidades de dados de clientes (**CL**), endereços (**AD**) e quaisquer outra que tenha configurado para receber informações pessoais de seus clientes.

> ℹ️ Saiba mais sobre como [filtrar dados](https://help.vtex.com/tutorial/filtering-data-on-master-data--tutorials_778#how-to-use-filters) e [exportar dados](https://help.vtex.com/pt/tutorial/exporting-data--tutorials_1125). na interface do Master Data v1.

#### Master Data v2

Para obter dados de clientes armazenados no Master Data v2, seu time de desenvolvimento deve usar a [API de busca do Master Data v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2#get-/api/dataentities/-dataEntityName-/search), buscando nas entidades de dados referentes a clientes, endereços e quaisquer outras que você configurou para receber informações pessoais. Filtre a busca pelo email do cliente.

#### Gerenciamento de pedidos

O módulo de gerenciamento de pedidos da VTEX armazena o histórico de pedidos dos seus clientes. Isso significa que também pode conter informações pessoais. Para acessar e exportar o histórico de pedidos de um cliente, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os Pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.  
2. Insira o endereço de email do cliente desejado no campo de busca.
3. Pressione `Enter`.
4. Clique no botão `Exportar` no canto direito superior da tela.

Você receberá um relatório com o histórico de pedidos por email.

## Retificação

O direito de retificação permite que os clientes solicitem alterações em suas informações pessoais se elas estiverem imprecisas ou incompletas, por exemplo. 

Seus clientes podem exercer seu direito de consentimento e de retificação de dados pessoais usando a página **Minha Conta** disponível na sua loja. Nesta página um cliente da sua loja pode realizar ações como:

- Visualizar seu histórico de pedidos.
- Visualizar e editar suas informações cadastrais.
- Visualizar e editar seus endereços cadastrados.
- Visualizar e editar seus meios de pagamento registrados.

> ℹ️ Saiba mais sobre a página [Minha Conta](https://help.vtex.com/pt/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh).

## Consentimento

O direito de consentimento dá aos seus clientes a oportunidade de manifestar seu aceite, geralmente documentado por um opt-in em um checkbox,  sobre como e para quê os dados são tratados.   

O consentimento não é necessário em todas as situações. Se você utilizar informações mínimas para completar um pedido (nome, endereço, cartão de crédito), ou emitir uma nota fiscal (CPF, itens da compra), o consentimento explícito não é necessário. Contudo, ele é necessário para algumas opções que clientes têm na sua loja. Veja abaixo quais são estas opções e como configurar, caso seja necessário.

### Inscrição em newsletter

Ao concluir uma compra no checkout VTEX, seus clientes poderão optar por se inscrever na newsletter da sua loja. Posteriormente, caso desejem alterar sua opção, podem gerenciar sua inscrição na seção [Minha Conta](https://help.vtex.com/pt/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh) da sua loja, na aba **Dados pessoais**. Esta é uma opção nativa das lojas VTEX.

Caso seja necessário, seu time de desenvolvimento pode [ajustar diretamente a opção de inscrição de um cliente específico](https://developers.vtex.com/docs/guides/newsletter-inclusion-master-data-v1) usando a API do Master Data v1.

> ℹ️ Saiba mais sobre a página Minha Conta. Confira também como seu time de desenvolvimento pode [ajustar diretamente a inscrição de um cliente na newsletter](https://developers.vtex.com/docs/guides/newsletter-inclusion-master-data-v1).

### Carrinho abandonado

A plataforma VTEX permite [configurar automação de carrinho abandonado](https://help.vtex.com/pt/tutorial/configurar-carrinho-abandonado--tutorials_740). Ou seja, configurar o envio automático de emails para clientes que acessaram a sua loja, adicionaram produtos ao carrinho e finalizaram a sessão sem comprar.

Para garantir o direito de consentimento para esta finalidade específica, você deve [configurar sua automação de carrinho abandonado](https://help.vtex.com/pt/tutorial/configurar-carrinho-abandonado--tutorials_740) de modo a permitir o envio de email apenas a clientes [inscritos na newsletter da loja](#inscricao-em-newsletter). Clientes inscritos na newsletter têm o campo `isNewsletterOptIn` configurado como `true` na entidade **CL** do [Master Data v1](https://help.vtex.com/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw).

### Avise-me

A função [Avise-me](https://help.vtex.com/pt/tutorial/configurar-a-opcao-avise-me--2VqVifQuf6Co2KG048Yu6e) permite que pessoas se inscrevam para receber notificação por email quando haja reposição de inventário de algum item de seu interesse.

Qualquer pessoa pode gerenciar o consentimento relativo ao [Avise-me](https://help.vtex.com/pt/tutorial/configurar-a-opcao-avise-me--2VqVifQuf6Co2KG048Yu6e) na própria página do produto de interesse.

### Salvar dados de perfil ou pagamento no momento de uma compra

O direito de consentimento permite que pessoas façam compras na sua loja sem que seus dados pessoais sejam armazenados pela loja para aplicações futuras.

Entre em contato com o seu time de desenvolvimento para disponibilizar esta opção de acordo com o guia [Habilitando opção de salvar dados de usuário](https://developers.vtex.com/docs/guides/enable-the-save-user-data-opt-in).

> ℹ️ Saiba mais sobre [automação de carrinho abandonado](https://help.vtex.com/pt/tutorial/configurar-carrinho-abandonado--tutorials_740).

## Exclusão

O direito de exclusão permite que os clientes solicitem que suas informações pessoais sejam excluídas da plataforma.

Caso algum cliente solicite a exclusão de seus dados da sua loja, você pode cumprir esse direito seguindo o guia [Exclusão de dados de clientes](https://help.vtex.com/pt/tutorial/exclusao-de-dados-de-clientes--1R9Fn7A06Ifj4R9YD4JTKU).
