---
title: 'VTEX Sales App - Configurações Básicas'
id: 4L5SoLxE8O3YkxF7FKymrO
status: PUBLISHED
createdAt: 2020-06-28T13:51:53.895Z
updatedAt: 2025-11-11T23:01:37.261Z
publishedAt: 2025-02-20T23:01:37.261Z
firstPublishedAt: 2020-06-28T14:01:36.462Z
contentType: trackArticle
productTeam: Shopping
slugEN: vtex-sales-app-basic-settings
locale: pt
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 4
---

O VTEX Sales App é um dos principais produtos da VTEX para operações de [Comércio Unificado](/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv). Ele é um aplicativo que permite à sua loja oferecer uma experiência omnichannel real, integrando seus canais online e físicos e colocando seus clientes no centro do negócio.

> ℹ️ Verifique se a sua loja cumpre todos os [pré-requisitos para usar o VTEX Sales App](/pt/tracks/instore-primeiros-passos--6N0QlieWqboSVU2ehgAVAb/1wtAanSRA3g2316dw7bw8u) antes de começar a utilizá-lo.

Para utilizar o VTEX Sales App, você precisa seguir os passos descritos a seguir na sua conta principal.

> ⚠️  Não é necessário instalar ou configurar o VTEX Sales App nas contas franquias que representam lojas físicas. Você deve realizar o procedimento descrito neste artigo apenas na conta principal da marca.

## Instalar o VTEX Sales App

O primeiro passo é instalar gratuitamente na conta principal da marca o aplicativo [VTEX Sales App](https://apps.vtex.com/vtex-assisted-sales-admin/p), disponível na VTEX App Store.

1. Acesse a página do [VTEX Sales App Setup](https://apps.vtex.com/vtex-assisted-sales-admin/p) na VTEX App Store.
2. Clique em `Obter app`.
3. Digite o nome da sua conta principal na VTEX e clique em `Confirmar`.
4. Clique em `Fechar pedido`.
5. Clique em `Vá para a página de instalação`. Você será conduzido para a página do aplicativo VTEX Sales App no Admin VTEX.
6. Clique em `Instalar`.

Ao instalar o VTEX Sales App, a página `checkout/instore` e seus respectivos arquivos (`checkout-instore-custom.js` e `checkout-instore-custom.css`) são criados automaticamente no site `default` dentro do **Checkout**. Por padrão, o VTEX Sales App deve ser utilizado sempre no site `default` da conta principal para simplificar a operação do ecommerce e evitar erros.

Para verificar o site `default`, acesse **Configurações da loja > Checkout** e clique em <i class="fas fa-cog"></i>. Verifique se a URL contém a palavra `default`, como no exemplo: `https://{{accountName}}.myvtex.com/admin/portal/#/sites/default/`. Outra opção é conferir em **Storefront > Layout > CMS > Sites and channels**.

## Configurar o VTEX Sales App

Após a instalação você vai realizar as configurações básicas do aplicativo VTEX Sales App, descritas abaixo.

1. No Admin VTEX, acesse **Aplicativos > Hub de Extensões > Gerenciamento de Aplicativos**, ou digite **Gerenciamento de Aplicativos** na barra de busca no topo da página.
2. Na aba `Instalados`, encontre o VTEX Sales App e clique em <i class="fa-solid fa-gear"></i> `Configurações`.
4. Clique em `Avançado`.
5. [Cadastre o endereço da loja](#cadastre-o-endereco-da-loja).
6. [Registre o vendedor](#registre-o-vendedor).
7. [Configure os meios de pagamento](#configure-os-meios-de-pagamento).

### Cadastre o endereço da loja

Na tela **Cadastro de loja**, informe o nome da primeira loja física onde o VTEX Sales App será utilizado e o endereço completo da loja. Quando tiver preenchido todos os campos, clique em `Continuar`.

Posteriormente, você poderá [adicionar outras lojas](/pt/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/5PSjRstg7UU4lOm0s8aqKN), se desejar.

### Registre o vendedor

Nesta seção, você precisa definir um email e um nome para serem usados como credenciais de login de um vendedor.  Se desejar, você pode incluir um código de identificação para o vendedor. Ao terminar, clique em `Continuar`.

> ⚠️ O email registrado nesta tela **não** pode ser um email já em uso no Admin da plataforma VTEX. Use emails de vendedores que não possuem acesso ao Admin.

Nesta etapa, você registra apenas um de seus vendedores. Após as configurações básicas, você poderá [adicionar outros vendedores](/pt/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/5PSjRstg7UU4lOm0s8aqKN).

### Configure os meios de pagamento

O próximo passo é configurar os meios de pagamento que você vai aceitar no inStore. Ative as opções desejadas utilizando o botão <i class="fas fa-toggle-on"></i>.

Há duas opções disponíveis:

* **Dinheiro:** ative esta opção se você quiser aceitar pagamentos em dinheiro.
* **Social selling:** ative esta opção para que todos os meios de pagamento configurados no Checkout do seu ecommerce sejam válidos para o VTEX Sales App ao utilizar [o carrinho compartilhado (Social Selling)](/pt/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/6deiffo22iKkY27PkfstXy).

Após selecionar as opções desejadas, clique em `Continuar`.

## Configurar condições de pagamento

Após fazer as configurações básicas descritas, você precisa configurar as condições de pagamento para o inStore no módulo de **Pagamentos**. Para isso, leia o guia [Configurar os métodos de pagamento para o VTEX Sales App](/pt/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy).

## Vincular o catálogo de produtos a uma vitrine de loja

Para que o catálogo da loja física seja refletido no VTEX Sales App, é necessário configurar o [binding](/pt/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W) no CMS (Layout - [CMS Legado](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj)). Essa configuração vincula a [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) ao storefront correspondente, garantindo que os produtos sejam exibidos corretamente na vitrine.

Para configurar o binding e garantir que o catálogo da loja seja exibido no VTEX Sales App, siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront > Layout** ou digite **Layout** na barra de busca no topo da página.
2. Clique em CMS e selecione **Sites and channels**.
3. Selecione o website desejado na lista.
4. Na seção **Links**, clique na linha correspondente ao binding e, em seguida, clique em `Update`.
5. Na seção **Available Sales Channels**, marque a política comercial que deseja vincular ao binding.
6. Para salvar, clique em `Save Binding`.

> ⚠️ Certifique-se de que a política comercial esteja corretamente configurada no seu Admin VTEX antes de vinculá-la ao binding. Essa configuração é essencial para garantir que o catálogo da loja seja exibido corretamente no VTEX Sales App.

## Configurar logística

Para começar a utilizar o VTEX Sales App, você também precisa realizar as configurações de Logística de acordo com as estratégias que deseja implementar. Leia os guias sobre [Comércio Unificado](/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) e [Logística](/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx) para mais informações.
