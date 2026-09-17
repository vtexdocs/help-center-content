---
title: 'Configurar o VTEX Sales App'
status: PUBLISHED
createdAt: 2026-09-17T00:00:00.000Z
updatedAt: 2026-09-17T00:00:00.000Z
contentType: trackArticle
productTeam: Shopping
slugEN: configure-vtex-sales-app
locale: pt
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 5
---

## ARTIGO ANTERIOR - CONTEÚDO PARCIAL DO ARTIGO "VTEX Sales App - Configurações Básicas"

`https://help.vtex.com/pt/docs/tracks/vtex-sales-app-configuracoes-basicas`

\\✅ O ARTIGO MISTURA AS CONFIGURAÇÕES BÁSICAS COM INSTALAÇÃO, MAS O RESTANTE DO CONTEÚDO JÁ FOI MOVIDO PARA O ARTIGO SOBRE INSTALAÇÃO

Após a instalação, você vai realizar as configurações básicas do aplicativo, descritas abaixo:

1. No Admin VTEX, acesse **Aplicativos > Hub de Extensões > Gerenciamento de Aplicativos**, ou digite **Gerenciamento de Aplicativos** na barra de busca no topo da página.
2. Na aba `Instalados`, encontre o **VTEX Sales App** e clique em <i class="fa-solid fa-gear"></i> `Configurações`.
3. Clique em `Avançado`.
4. [Cadastre o endereço da loja](#cadastre-o-endereco-da-loja).
5. [Registre o vendedor](#registre-o-vendedor).
6. [Configure os meios de pagamento](#configure-os-meios-de-pagamento).

### Cadastre o endereço da loja

Na tela **Cadastro de loja**, informe o nome da primeira loja física onde o **VTEX Sales App** será utilizado e o endereço completo da loja. Quando tiver preenchido todos os campos, clique em `Continuar`.

Posteriormente, você poderá adicionar outras lojas, se desejar.

### Registre o vendedor

Nesta seção, você precisa definir um email e um nome para serem usados como credenciais de login de um vendedor.  Se desejar, você pode incluir um código de identificação para o vendedor. Ao terminar, clique em `Continuar`.

> ⚠️ O email registrado nesta tela não pode ser um email já em uso no Admin VTEX.

Nesta etapa, você registra apenas um de seus vendedores. Após as configurações básicas, você poderá [adicionar outros vendedores](https://help.vtex.com/pt/docs/tracks/gerenciar-vendedores-no-vtex-sales-app). Para que o vendedor adquira acesso ao **Sales App**, confira a seção [Primeiro acesso do vendedor](https://help.vtex.com/pt/docs/tracks/gerenciar-vendedores-no-vtex-sales-app#primeiro-acesso-do-vendedor).

### Configure os meios de pagamento

O próximo passo é configurar os meios de pagamento que você vai aceitar no **VTEX Sales App**. Ative as opções desejadas utilizando o botão <i class="fas fa-toggle-on"></i>.

Há duas opções disponíveis:

* **Dinheiro:** ative esta opção se você quiser aceitar pagamentos em dinheiro.
* **Social selling:** ative esta opção para que todos os meios de pagamento configurados no Checkout do seu ecommerce sejam válidos para o **VTEX Sales App** ao utilizar [o carrinho compartilhado (Social Selling)](/pt/docs/tracks/compartilhar-carrinho-utilizando-o-vtex-sales-app-social-selling).

Após selecionar as opções desejadas, clique em `Continuar`.

## Configurar condições de pagamento

Após fazer as configurações básicas descritas, você precisa configurar as condições de pagamento no módulo de **Pagamentos**. Para isso, leia o guia [Configurar os métodos de pagamento para o VTEX Sales App](/pt/docs/tracks/configurar-metodos-de-pagamento-para-o-vtex-sales-app).

## Vincular o catálogo de produtos a uma vitrine de loja

Para que o catálogo da loja física seja refletido no **VTEX Sales App**, é necessário configurar o [binding](/pt/docs/tutorials/o-que-e-binding) no CMS (Layout - [CMS Portal (Legado)](/pt/docs/tracks/cms-portal-legado)). Essa configuração vincula a [política comercial](/pt/docs/tutorials/como-funciona-uma-politica-comercial) ao storefront correspondente, garantindo que os produtos sejam exibidos corretamente na vitrine.

Para configurar o binding e garantir que o catálogo da loja seja exibido no **VTEX Sales App**, siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront > Layout** ou digite **Layout** na barra de busca no topo da página.
2. Clique em CMS e selecione **Sites and channels**.
3. Selecione o website desejado na lista.
4. Na seção **Links**, clique na linha correspondente ao binding e, em seguida, clique em `Update`.
5. Na seção **Available Sales Channels**, marque a política comercial que deseja vincular ao binding.
6. Para salvar, clique em `Save Binding`.

> ⚠️ Certifique-se de que a política comercial esteja corretamente configurada no seu Admin VTEX antes de vinculá-la ao binding. Essa configuração é essencial para garantir que o catálogo da loja seja exibido corretamente no **VTEX Sales App**.

## Configurar logística

Para começar a utilizar o **VTEX Sales App**, você também precisa realizar as configurações logísticas de acordo com as estratégias que deseja implementar. Saiba mais em [Comércio Unificado](/pt/docs/tracks/comercio-unificado-101) e [Logística](/pt/docs/tracks/logistica-101) para mais informações.

___________________________________________________________________________________________

## ARTIGO ANTERIOR - "Gerenciar lojas físicas no VTEX Sales App"

`https://help.vtex.com/pt/docs/tracks/gerenciar-lojas-fisicas-no-vtex-sales-app`

\\🟨 CONTEÚDO PARCIAL - O ARTIGO MISTURA CRIAÇÃO DE CADASTRO DE LOJA FÍSICA COM GERENCIAMENTO - CONSIDERAR MOVER O CONTEÚDO SOBRE GERENCIAMENTO CRIANDO UM NOVO ARTIGO NA TRILHA "VTEX Sales App - Usando o app"

Loja física é uma página das Configurações da loja do Admin VTEX que apresenta a listagem de lojas físicas cadastradas no aplicativo VTEX Sales App. Nela, você pode gerenciar informações de todas as lojas físicas da conta.

## Cadastrar loja física

Você pode cadastrar uma loja física seguindo os passos a seguir:

1. No Admin VTEX, clique em .
2. No Admin VTEX, acesse **Configurações da loja > Sales App > Lojas físicas**, ou digite **Lojas físicas** na barra de busca no topo da página.
3. Clique no botão `+ Cadastrar loja`.
4. Preencha os [campos de cadastro da loja física](#campos-de-cadastro-da-loja-fisica).
5. Clique em `Cadastrar`.
6. Clique em `Salvar` para confirmar o cadastro da loja física.  

### Campos de cadastro da loja física

![loja-fisica2-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/canais-de-venda/omnichannel/vtex-sales-app-primeiros-passos-e-configuracoes/adicionar-lojas-ao-instore_2.png)

#### Identificação

* **Nome da loja:** nome da loja física que será cadastrada. Campo obrigatório.
* **Telefone comercial:** número de telefone comercial da loja física.

#### Endereço

* **País:** país onde a loja física está localizada. Campo obrigatório.
* **CEP:** CEP onde a loja física está localizada. Campo obrigatório.
* **Rua:** nome da rua onde a loja física está localizada. Campo obrigatório.
* **Número:** número do local onde a loja física está localizada na rua. Campo obrigatório.
* **Complemento:** complemento do endereço da loja física, como o número de sala de galeria.
* **Bairro:** bairro onde a loja física está localizada. Campo obrigatório.
* **Cidade:** cidade onde a loja física está localizada. Campo obrigatório.
* **Estado:** estado onde a loja física está localizada. Campo obrigatório.

#### Informações técnicas

* **Conta franquia:** nome da [conta franquia](/pt/docs/tutorials/o-que-e-conta-franquia) em que a loja física deve ser cadastrada.
* **Política comercial:** [política comercial](/pt/docs/tutorials/como-funciona-uma-politica-comercial) que será aplicada na loja física. Campo obrigatório.
* **Ponto de retirada:** [ponto de retirada](/pt/docs/tutorials/pontos-de-retirada) cadastrado para essa loja física, onde clientes retiram seus pedidos.

\\🟨 DRAFT ADICIONAR: "Para saber como gerenciar suas lojas físicas, confira o artigo [Gerenciar lojas físicas no VTEX Sales App](XXX)" - O ARTIGO SOBRE GERENCIAR LOJAS FÍSICAS PRECISA SER CRIADO NA TRILHA "VTEX Sales App - Usando o app" PORQUE SERÁ ARQUIVADO NO "Gerenciar lojas físicas no VTEX Sales App" DA TRILHA DE PRIMEIROS PASSOS

___________________________________________________________________________________________

## ARTIGO ANTERIOR - "Gerenciar vendedores no VTEX Sales App

`https://help.vtex.com/pt/docs/tracks/gerenciar-vendedores-no-vtex-sales-app`

\\🟨 CONTEÚDO PARCIAL - O ARTIGO MISTURA CRIAÇÃO DE CADASTRO DE VENDEDOR COM GERENCIAMENTO - CONSIDERAR MOVER O CONTEÚDO SOBRE GERENCIAMENTO CRIANDO UM NOVO ARTIGO NA TRILHA "VTEX Sales App - Usando o app"

\\🟨 CONSIDERAR SE MANTENHO O CONTEÚDO SOBRE "Primeiro acesso do vendedor" NO ARTIGO ATUAL OU SOMENTE NO ARTIGO A SER CRIADO SOBRE GERENCIAMENTO DE VENDEDORES

A categoria Vendedores representa uma seção dentro das Configurações da loja do Admin VTEX, exibindo a lista completa dos vendedores registrados no aplicativo **VTEX Sales App** da loja. Dentro dessa página, é possível administrar as informações dos vendedores em todas as [contas franquias](/pt/docs/tutorials/o-que-e-conta-franquia) da sua loja, realizando operações de [cadastrar](#cadastrar-vendedor), [buscar](#buscar-vendedor), [filtrar](#filtrar-vendedores), [editar](#editar-vendedor) e [inativar](#inativar-vendedor).

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

* **Loja:** [conta franquia](/pt/docs/tutorials/o-que-e-conta-franquia) em que o vendedor será cadastrado. Campo obrigatório.

> ℹ️ As alterações podem levar até 15 minutos para serem processadas e aplicadas no **Sales App**.

## Primeiro acesso do vendedor

Para obter acesso ao **Sales App**, o vendedor deverá seguir os passos abaixo:

> ℹ️ O vendedor não obtém acesso ao Admin VTEX da loja, pois a criação do acesso ao **Sales App** é feita em outro ambiente.

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
