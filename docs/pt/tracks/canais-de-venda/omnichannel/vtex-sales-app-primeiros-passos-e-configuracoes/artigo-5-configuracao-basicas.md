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

\\O ARTIGO MISTURA CRIAÇÃO DE CADASTRO DE LOJA FÍSICA COM CONFIGURAÇÕES BÁSICAS
\\CONSIDERAR MOVER O CONTEÚDO SOBRE GERENCIAMENTO DE LOJAS FÍSICAS PARA A TRILHA "VTEX Sales App - Usando o app"

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

## ARTIGO ANTERIOR - CONTEÚDO PARCIAL DO ARTIGO "Gerenciar lojas físicas no VTEX Sales App"

`https://help.vtex.com/pt/docs/tracks/gerenciar-lojas-fisicas-no-vtex-sales-app`

\\O ARTIGO MISTURA CRIAÇÃO DE CADASTRO DE LOJA FÍSICA COM SEU GERENCIAMENTO

Loja física é uma página das Configurações da loja do Admin VTEX que apresenta a listagem de lojas físicas cadastradas no aplicativo VTEX Sales App. Nela, você pode gerenciar informações de todas as lojas físicas da conta.
