---
title: 'VTEX Sales App - Configurações Básicas'
id: 4L5SoLxE8O3YkxF7FKymrO
status: PUBLISHED
createdAt: 2020-06-28T13:51:53.895Z
updatedAt: 2023-05-31T15:55:29.064Z
publishedAt: 2023-05-31T15:55:29.064Z
firstPublishedAt: 2020-06-28T14:01:36.462Z
contentType: trackArticle
productTeam: Shopping
slug: instore-setup-basico
locale: pt
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugPT: instore-primeiros-passos-e-configuracoes
---

O VTEX Sales App é um dos principais produtos da VTEX para operações de [Comércio Unificado](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv). Ele é um aplicativo que permite à sua loja oferecer uma experiência omnichannel real, integrando seus canais online e físicos e colocando seus clientes no centro do negócio.

<div class="alert alert-info">
<p>Verifique se a sua loja cumpre todos os <a href="https://help.vtex.com/pt/tracks/instore-primeiros-passos--6N0QlieWqboSVU2ehgAVAb/1wtAanSRA3g2316dw7bw8u">pré-requisitos para usar o inStore</a> antes de começar a utilizá-lo.</p>
</div>

Para utilizar o VTEX Sales App, você precisa seguir os passos descritos a seguir na sua conta principal.

<div class="alert alert-warning">
<p> Não é necessário instalar ou configurar o VTEX Sales App nas contas franquias que representam lojas físicas. Você deve realizar o procedimento descrito neste artigo apenas na conta principal da marca.</p>
</div>

## Instalar o VTEX Sales App

O primeiro passo é instalar gratuitamente na conta principal da marca o aplicativo [VTEX Sales App Setup](https://apps.vtex.com/vtex-instore/p), disponível na VTEX App Store.

1. Acesse a página do [VTEX Sales App Setup](https://apps.vtex.com/vtex-instore/p) na VTEX App Store.
2. Clique em `Obter app`.
3. Digite o nome da sua conta principal na VTEX e clique em `Confirmar`.
4. Clique em `Fechar pedido`.
5. Clique em `Vá para a página de instalação`. Você será conduzido para a página do aplicativo VTEX Sales App Setup no Admin.
6. Clique em `Instalar`.

Ao instalar o VTEX Sales App, a página `checkout/instore` e seus respectivos arquivos (`checkout-instore-custom.js` e `checkout-instore-custom.css`) são criados automaticamente no site `default` dentro do **Checkout**. Por padrão, o VTEX Sales App deve ser utilizado sempre no site `default` da conta principal para simplificar a operação do ecommerce e evitar erros.

Para verificar o site `default`, acesse **Configurações da loja** > **Checkout** e clique em <i class="fas fa-cog"></i>. Verifique se a URL contém a palavra `default`, como no exemplo: `https://{{accountName}}.myvtex.com/admin/portal/#/sites/default/`. Outra opção é conferir em **Configurações da loja** > **CMS** > **Layout** > **CMS** > **Sites and channels**.

## Configurar o VTEX Sales App

Após a instalação você vai realizar as configurações básicas do aplicativo VTEX Sales App no Admin VTEX da conta principal, descritas abaixo.

1. Clique na aba  no módulo de **Configurações da conta** no Admin. No Admin VTEX, acesse **Aplicativos** > **Meus aplicativos**, ou digite **Meus aplicativos** na barra de busca no topo da página.
2. Encontre o VTEX Sales App e clique em <i class="fa-solid fa-gear"></i> `Configurações`.
3. Clique em `Avançado`.
4. [Cadastre o endereço da loja](#cadastre-o-endereco-da-loja).
5. [Registre o email e nome do vendedor](#registre-o-email-e-nome-do-vendedor).
6. [Configure os métodos de pagamento](#configure-os-meios-de-pagamento).

### Cadastre o endereço da loja

![cadastrar-loja-pt](//images.contentful.com/alneenqid6w5/51ICHIzuWsMAwPCVwQuQoB/071ec5240f968e662badf4e828954072/cadastrar-loja-pt.png)

Nesta tela, informe o nome da primeira loja física onde o VTEX Sales App será utilizado e o endereço completo da loja. Quando tiver preenchido todos os campos, clique em `Confirmar`.

Posteriormente, você poderá [adicionar outras lojas](https://help.vtex.com/pt/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/5PSjRstg7UU4lOm0s8aqKN), se desejar.

Se você optar por `Pular este passo`, uma loja fictícia será criada para fins de teste.

### Registre o email e nome do vendedor

![registrar-vendedor-pt](//images.contentful.com/alneenqid6w5/5PvZutdPYWkm7rj4HCrlPC/0316ea7fd74dae942a64e5fdb22f3807/registrar-vendedor-pt.png)

Você precisa definir um email e um nome para serem usados como credenciais de login de um vendedor. Quando estiver pronto, clique em `Confirmar`.

<div class="alert alert-warning">
<p>O email registrado nesta tela <strong>não</strong> pode ser um email já em uso no Admin da plataforma VTEX. Use emails de vendedores que não possuem acesso ao Admin.</p>
</div>

Nesta etapa, você registra apenas um de seus vendedores. Após as configurações básicas, você poderá [adicionar outros vendedores](https://help.vtex.com/pt/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/5PSjRstg7UU4lOm0s8aqKN).

Se você optar por `Pular este passo`, um vendedor fictício será criado com o email `instorevendedor@gmail.com` e o nome `Vendedor inStore`. Esse acesso é válido para entrar no aplicativo do inStore e pode ser utilizado para fins de teste.

### Configure os meios de pagamento

O próximo passo é configurar os meios de pagamento que você vai aceitar no inStore. Ative as opções desejadas utilizando o botão <i class="fas fa-toggle-on"></i>, conforme ilustrado abaixo.

![configurar-meios-de-pagamento-pt](//images.contentful.com/alneenqid6w5/3kjTg7Y2tUI5UErQBsGc02/5174724afd2987a4b8f578c1d74b87b9/configurar-meios-de-pagamento-pt.gif)

Existem duas opções:

* **Dinheiro**: ative esta opção se você quiser aceitar pagamentos em dinheiro.
* **Cartão**: se você já possui um contrato com um adquirente para receber pagamentos via cartão de crédito ou débito, pode selecioná-lo no menu suspenso de adquirente. Caso contrário, desative esta opção por enquanto.

Após selecionar as opções desejadas, clique em `Confirmar`. Você verá a mensagem de confirmação abaixo.

![sucesso-instore-pt](//images.contentful.com/alneenqid6w5/nVSjiQuE0EXIYecELJJFQ/79a0d24adb51e7ad68f371afe5ca0491/sucesso-instore-pt.png)

## Configurar condições de pagamento

Após fazer as configurações básicas descritas, você precisa configurar as condições de pagamento para o inStore no módulo de **Pagamentos**. Para isso, leia o guia [Configurar os métodos de pagamento para o inStore](https://help.vtex.com/pt/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy).

## Configurar logística

Além disso, para começar a utilizar o inStore, você também precisa realizar as configurações de __Logística__ de acordo com as estratégias que deseja implementar. Leia os guias sobre [Comércio Unificado](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) e [Logística](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx) para mais informações.
