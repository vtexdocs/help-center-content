---
title: 'Como funciona a Minha Conta'
id: 2BQ3GiqhqGJTXsWVuio3Xh
status: PUBLISHED
createdAt: 2019-04-11T21:14:26.117Z
updatedAt: 2023-12-21T14:09:42.863Z
publishedAt: 2023-12-21T14:09:42.863Z
firstPublishedAt: 2019-05-21T19:48:15.019Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: how-my-account-works
legacySlug: como-funciona-o-my-account
locale: pt
subcategoryId: 1RWR7qSyaREbD5RfgCjdYG
---

A página __Minha Conta__ (__My Account__) oferece autonomia aos seus clientes para a gestão de pedidos e dados pessoais em uma única página. Esse recurso facilita a operação do seu negócio, reduzindo custos operacionais com serviços de atendimento ao cliente.

É possível configurar quais abas aparecem para o consumidor nas [configurações básicas](#configuracoes-basicas). As abas existentes são as seguintes:

- [Dados pessoais](#dados-pessoais)
- [Endereços](#enderecos)
- [Pedidos](#pedidos)
- [Cartões](#cartoes)
- [Assinaturas](#assinaturas)
- [Autenticação](#autenticacao)

> ℹ️ Para saber sobre a customização da funcionalidade **Minha conta**, veja a documentação para desenvolvedores [My Account - StoreV2 version](https://developers.vtex.com/docs/guides/vtex-my-account). É importante ressaltar que a VTEX não presta suporte a **Minha Conta** quando customizada.

## Dados pessoais

Nesta aba, o cliente pode gerenciar seus dados pessoais cadastrados na loja. É possível [editar as informações do perfil](#editar), [definir uma nova senha](#senha) e [escolher se deseja receber emails com promoções](#newsletter).

![profile PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/my-account/como-funciona-a-minha-conta_1.png)

### Editar

O botão `Editar` permite alterar as informações do perfil listadas abaixo.

* Nome
* Sobrenome
* CPF
* Telefone
* Gênero (opcional)
* Data de nascimento (opcional)

O botão `Incluir campos de pessoa jurídica` permite que o cliente preencha as informações abaixo sobre a sua empresa, caso seja pessoa jurídica.

* Razão social
* CNPJ
* Telefone corporativo
* Inscrição estadual
* Nome fantasia

### Senha

O botão `Redefinir senha` permite criar uma nova senha de acesso.

### Newsletter

O cliente pode marcar a opção **Quero receber e-mails com promoções** para receber as promoções da sua loja por email.

## Endereços

Todos os endereços informados em compras anteriores do cliente na sua loja podem ser encontrados nessa aba.

### Editar

O botão `Editar` permite alterar informações de endereços já cadastrados.

### Adicionar endereço

O botão `Adicionar endereço` permite incluir endereços diferentes daqueles já registrados em compras anteriores.

## Pedidos

> ℹ️ Em [Minha Conta](https://help.vtex.com/es/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh), os clientes conseguem acessar somente os seus pedidos criados nos últimos dois anos.

Essa aba traz a listagem completa dos pedidos realizados pelo cliente na sua loja. A lista é ordenada por data de criação e exibe detalhes como data do pedido, valor total da compra, ID do pedido, status e itens adquiridos.

![orders PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/my-account/como-funciona-a-minha-conta_2.png)

A aba **Pedidos** permite que o cliente acompanhe o andamento do pedido e realize solicitações como cancelamento e alteração.Veja abaixo todas as opções disponíveis.

* [Pedir novamente](#pedir-novamente)
* [Solicitar cancelamento](#solicitar-cancelamento)
* [Ver detalhes do pedido](#ver-detalhes-do-pedido)
    * [Alterar pedido](#alterar-pedido)

### Pedir novamente

Em `Pedir novamente`, o carrinho do pedido selecionado será duplicado. Isso significa que o cliente poderá gerar um novo carrinho, com os mesmos itens do carrinho original, para realizar uma nova compra.

### Solicitar cancelamento

O cliente pode solicitar o cancelamento do seu pedido a qualquer momento. Se solicitado durante o [tempo de carência para cancelamento](https://help.vtex.com/pt/tutorial/configurar-o-tempo-de-carencia-para-cancelamento-do-pedido--jYFdnPDtNm4WCEkYWqqC), não é necessário a aprovação da loja para a efetivação do cancelamento.

Saiba mais sobre [como funciona o cancelamento de um pedido quando o mesmo é solicitado pelo cliente](https://help.vtex.com/pt/tutorial/como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo).

### Ver detalhes do pedido

Ao clicar em um pedido da listagem, o cliente poderá visualizar todos os detalhes do seu pedido, como endereço de entrega, forma de pagamento utilizada e o total pago. Além disso, é possível visualizar informações de rastreio por itens do pedido e uma linha do tempo com todos os estados do [fluxo do pedido](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196).

O cliente também pode [Pedir novamente](#pedir-novamente) a partir desta página. Ao clicar em `Mais opções`, são exibidas as funcionalidades de [Alterar pedido](#alterar-pedido) (caso esteja ativada e o pedido esteja no status `Preparando Entrega`) e [Solicitar cancelamento](#solicitar-cancelamento).

![order details PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/my-account/como-funciona-a-minha-conta_3.png)

#### Alterar pedido

Se o pedido estiver no status `Preparando entrega`, é possível escolher `Alterar pedido` ao clicar em `Mais opções` na página de detalhes do pedido.

Para disponibilizar essa opção, o lojista precisa [permitir que clientes façam alterações em pedidos](https://help.vtex.com/pt/tutorial/como-funciona-a-substituicao-de-pedidos?locale=pt#como-ativar-a-substituicao-de-pedidos) nas configurações do módulo **Pedidos**.

Esse botão permite ao cliente mudar informações do pedido, como endereço, forma de pagamento e itens do carrinho, sem a necessidade de realizar um novo pedido ou de entrar em contato com a equipe de atendimento da loja. Leia o artigo [Como funciona a Substituição de Pedidos](https://help.vtex.com/pt/tutorial/como-funciona-a-substituicao-de-pedidos) para saber mais.

## Cartões

Na aba **Cartões**, o cliente tem autonomia para gerenciar os cartões de crédito relacionados à sua conta por meio das seguintes ações:

- Inclusão de novos cartões
- Remoção de cartões com data de vencimento expirada

Para adicionar novos cartões, siga os passos abaixo:

1. Abra a **Minha Conta** na loja.
2. Clique na aba **Cartões**.
3. Clique no botão **ADICIONAR CARTÃO**.
4. Insira os dados do cartão e do endereço de cobrança.
5. Clique no botão **SALVAR NOVO CARTÃO**.
6. Resolva o desafio do reCaptcha.
7. Ocorrerá um processo de validação do cartão automaticamente. Se não houver nenhum problema, você será redirecionado para a lista de cartões e o novo cartão irá aparecer na lista.

![Card ReCaptcha](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/my-account/como-funciona-a-minha-conta_4.gif)

Contudo, existem limitações que precisam ser consideradas pelas lojas que utilizam a autenticação [3DS](https://help.vtex.com/pt/tutorial/o-que-e-3d-secure--1eWPdop8mECuaEomQgkAIa) (V1 ou V2) em suas adquirentes:

* Caso o comprador tente cadastrar um novo cartão sem tê-lo utilizado previamente na sua loja, a mensagem_ Ocorreu um erro ao tentar cadastrar o cartão_ será exibida. Para mais detalhes, acesse nossa documentação [Salvar novo cartão não funciona com o uso do 3DS](https://help.vtex.com/pt/known-issues/the-save-new-card-option-does-not-work-when-using-3-d-secure-3ds--20INELA5LVhY1XqFWG7047).

* Em **Assinaturas**, não é possível primeiramente salvar o cartão e depois ativar a assinatura do serviço desejado. Em situações como essa, é necessário ativar a assinatura ao realizar a compra, dessa forma, o cartão será salvo automaticamente.

* Se o cartão de crédito salvo na aba **Cartões** estiver com a data de validade expirada, será necessário removê-lo e realizar uma nova compra para salvá-lo, pois devido à autenticação **3DS**, não é possível atualizar e confirmar os dados do cartão sem ter realizado uma transação na loja.

* Em casos de Marketplace, a opção `Salvar cartão` na aba **Cartões** não será possível para casos em que a condição de pagamento relativa ao cartão de crédito esteja associada apenas ao [seller white label](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa?&utm_source=autocomplete#o-que-e-um-seller-white-label). Isso acontece porque a validação do cartão é feita diretamente na conta principal, por meio de uma transação teste, no valor de R$1,50, que logo seguida é reembolsável.

    Em outras palavras, para que seja possível salvar o cartão, a [condição de pagamento](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3) de cartão de crédito precisa estar também na conta principal, neste caso, no Marketplace.

## Assinaturas

Nesta aba, o cliente pode gerenciar todas as suas assinaturas cadastradas, assim como modificar seus dados referentes a elas. Leia o artigo [Como funciona a assinatura](https://help.vtex.com/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453#como-o-cliente-da-sua-loja-visualiza-suas-assinaturas) para saber mais.

## Autenticação

Esta aba pode ser acessada no painel esquerdo pelo item **Autenticação** nas configurações de perfil do usuário. Na aba são encontradas opções para gerenciamento de senha e gerenciamento de sessões.

![My Authentication app PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/my-account/como-funciona-a-minha-conta_5.png)

### Gerenciamento de senha

O componente **Senha** permite que o usuário crie uma senha (caso ainda não possua) ou mude a senha existente. Para criar uma nova senha:

1. Clique no botão `DEFINIR SENHA`. Após clicar, aparecerão campos que irão permitir criar  senha e é enviado um email com um código para autorizar o procedimento. O endereço para o qual o email de verificação é enviado aparece no topo do componente.
2. No campo **Código**, insira o código de verificação recebido por email.
3. No campo **Nova senha**, insira a nova senha que deseja atribuir à sua conta. Abaixo do campo aparecem os requisitos que a senha deve obedecer para ser válida. Conforme a senha é digitada, os símbolos de cada requisito se alteram de vermelho para verde. A senha será válida somente se todos os símbolos estiverem verdes.
4. Após ter inserido uma senha válida, clique no botão `SALVAR SENHA` para concluir a criação da senha.  
![My Authentication create password PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/my-account/como-funciona-a-minha-conta_6.png)

Para mudar a senha atual:

1. Clique no botão `REDEFINIR SENHA`.
2. Digite a senha atual no campo correspondente.
3. Digite a nova senha no campo correspondente, obedecendo todos os requisitos.
4. Clique no botão `SALVAR SENHA` para concluir a mudança de senha.  
![My Authentication change password PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/my-account/como-funciona-a-minha-conta_7.png)

> ℹ️ Caso você tenha esquecido a senha, não é possível recuperá-la pelo componente de gerenciamento de senha. Para isso você deve sair da sessão atual, fazer uma tentativa de login usando email e senha, e clicar no link **Esqueci minha senha**.

### Gerenciamento de sessões

O componente **Gerenciamento de Sessões** permite visualizar todas as suas sessões ativas, incluindo a sessão atual, e de revogar o acesso às outras sessões remotamente.

Para visualizar as sessões ativas, clique no botão `VER SESSÕES` e você será encaminhado para a tela de gerenciamento de sessões. Nessa tela aparecem componentes com cada uma das sessões ativas. Dentro do componente de cada sessão aparece o tipo de dispositivo, há quanto tempo foi feito o último acesso, o navegador, o sistema operacional, o endereço de IP e a data e o horário do primeiro acesso. O primeiro componente se refere à sessão atual e não possui opção para deslogar. A partir do segundo componente, caso apareça, é possível ver as outras sessões.

Para revogar o acesso das outras sessões, clique no botão `DESLOGAR` da sessão desejada.

![My Authentication Session Management PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/my-account/como-funciona-a-minha-conta_8.png)

## Configurações básicas

No **My Orders**, você pode determinar quais seções estarão visíveis para o cliente no espaço dele. As opções configuráveis são as seguintes:

* Em **PROFILE**, a opção <a class="far fa-check-square"></a> _Show non-binary genders when editing profile_ determina se o cliente é tratado como termos de gênero neutros quando edita suas informações em [Dados pessoais](#dados-pessoais).
* Em **CARDS**, a opção <a class="far fa-check-square"></a> _Visible_ define se o cliente vai ter a seção [Cartões](#cartoes) para gerenciar seus cartões de crédito.
* Em **ORDERS**, a opção <a class="far fa-check-square"></a> _Visible_ determina se o cliente tem a seção [Pedidos](#pedidos) para acompanhar seus pedidos.
* Em **ADDRESSES**, a opção <a class="far fa-check-square"></a> _Visible_ define se o cliente vai ter a seção [Endereços](#enderecos) com detalhes do seu endereço.

![vtex-my-account_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/my-account/como-funciona-a-minha-conta_9.png)

Por padrão, as opções **CARDS** e **ORDERS** vem configuradas como visíveis. Para alterá-las ou habilitar outras configurações, realize os passos abaixo: 

1. No Admin VTEX, acesse **Aplicativos > Loja de aplicativos**, ou digite **Loja de aplicativos** na barra de busca no topo da página.
2. Na seção **Todos os aplicativos**, utilize a barra de busca para encontrar o _My account_.
3. No card do _My account_, clique em <i class="fas fa-cog" alt="engrenagem azul"></i> `Configurações`.
4. Marque <a class="far fa-check-square"></a> as caixas de seleção das opções que você deseja habilitar.
5. Clique em `Salvar`.

