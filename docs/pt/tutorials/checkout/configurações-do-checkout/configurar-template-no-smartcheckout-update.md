---
title: 'Configurar template no SmartCheckout'
id: ToTE5XB39t0SwtHgpgwSv
status: PUBLISHED
createdAt: 2019-08-27T17:48:08.831Z
updatedAt: 2025-05-29T17:21:39.692Z
publishedAt: 2025-05-29T17:21:39.692Z
firstPublishedAt: 2019-10-28T16:39:00.190Z
contentType: tutorial
productTeam: Shopping
author: authors_84
slugEN: configure-template-in-smartcheckout-update
legacySlug: configurar-template-no-smartcheckout-update
locale: pt
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

O __Portal__ é usado para renderizar as telas de __Checkout__ (Carrinho, Dados Pessoais, Endereço, Forma de Pagamento) e __OrderPlaced__ (Tela de confirmação de compra). Neste artigo será apresentado como cadastrar e configurar os recursos do Portal.

O módulo __Checkout__ no Admin, exibe os sites que estão cadastrados para a sua conta. Por meio dele, também é possível criar um novo site, editar e configurar informações sobre os sites já existentes.

> ℹ️ Cada site cadastrado corresponde a um multidomínio (caso a conta possua multidomínios contratados). Para contas que não utilizam multidomínios, não é necessário cadastrar mais de um site neste módulo. Saiba mais em [Criar multiloja/multidomínio](/pt/tutorial/como-criar-multiloja-multidominio--tutorials_510#).

## Criar novo site

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no botão `Novo Site`.
3. Preencha os seguintes campos:
<ul>
<br>
  <li>**Nome**: insira aqui o nome desejado para o site.</li>
  <li>**Loja**: preencher com o nome da conta, que pode ser encontrado em  **Configurações da Conta > Gerenciamento da Conta > Contas > Nome da Conta**.</li>
  </ul>
4. Clique em `Salvar`.

Criação do novo site: 

![Novo Site](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_1.png)

Acesso ao __Nome da Conta__: 

![PT Configuração da Conta Nome Loja](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_2.png)

## Editar e configurar site

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. Ao acessar o menu de opções azul localizado na parte superior da página, é possível realizar as seguintes ações:
   - __Sites__: retornar para a tela inicial dos sites cadastrados.
   - __Editar__: editar o "Nome" e "Loja".
   - __Checkout__: realizar configurações básicas, como Cálculo de frete, Google Tag Manager, entre outras.
   - __Pedidos__: configurar razões de cancelamento e de substituição de pedidos.
   - __Código__: exibir e criar templates relacionados ao site.
   - __Páginas__: exibir as páginas existentes para o site. 

Exemplo de sites existentes em uma mesma conta:
![PT Cards Portal](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_3.png)

Exemplo de páginas disponíveis para um site:
![PT Paginas Cropped (2)](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_4.png)

Caso deseje __excluir__ um site, clique no botão de exclusão do site desejado, como no exemplo indicado abaixo:
![PT Card Croppped Delete](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_5.png)

A seguir, vamos aprofundar o passo a passo da configuração das oções de menu: __Código__ e __Checkout__, sendo estas responsáveis por configurar as páginas de *Checkout* e *Order Placed*.

## Configurar Checkout

> ⚠️ Para realizar as configurações do Checkout, os usuários precisam ter um perfil de acesso com o [recurso do License Manager](/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) **Manage portal**. É necessário que o usuário que for criar o novo perfil de acesso tenha o perfil **Owner (Admin Super)**.

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Checkout__ e configure os campos abaixo, conforme necessário:
<ul>
<br>
  <li>**Título**: caso informado, será exibido no título das páginas de carrinho, finalização de compra e pedido confirmado.</li>
  <li>**Google Tag Manager**: informe o ID (no formato `GTM-XXXX`) do seu contêiner do [Google Tag Manager](https://www.google.com/tagmanager/), caso deseje usá-lo automaticamente.</li>
  <li>**Google Maps API Key**: a chave é utilizada em duas situações: quando a função de Entrega com base na coordenada geográfica está ativa ou caso esteja disponível a opção de **Retirada em loja**.</li>
  <li>**Cálculo das opções de Entrega (Beta e Stable)**: selecione se o cálculo do frete será feito a partir da planilha ou por geolocalização.</li>
  </ul>

![PT Editar Checkout](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_6.png)

## Configurar código

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Código__. Será exibido, à direita, um menu de __Arquivos__ e __Templates__ com todos os templates de seu site, configurados pelo sistema.

![PT Lista Código Templates](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_7.PNG)

### Configurar templates do menu "Código"

É possível customizar as páginas do seu site, além de configurar outras funcionalidades em HTML por meio do menu de __Arquivos__ e __Templates__. 

O código HTML preenchido no template corresponde ao que aparecerá nas páginas de __checkout__ e __order placed__ de seu site.

Dos templates disponíveis templates, os únicos que não podem ser alterados são __vtex-checkout__ e __vtex-orderPlaced__. Estes correspondem ao funcionamento nativo da plataforma, renderizando o conteúdo principal das páginas de __checkout__ e __order placed__.

> ⚠️ Javascripts incluídos diretamente em quaisquer templates do Portal serão ignorados pela plataforma. Ou seja, no momento da renderização da página, a plataforma o removerá. Isso porque o [SmartCheckout](/pt/tutorial/smartcheckout-preenchimento-automatico-de-dados-do-cliente--2Nuu3xAFzdhIzJIldAdtan#) apenas aceita scripts originados no Google Tag Manager. Assim, sempre que houver necessidade de realizar alguma customização (ou mesmo inserção de tags específicas) via javascript, utilize [Google Tag Manager](/pt/tutorial/integration-with-google-tag-manager--frequentlyAskedQuestions_616#).

### Exemplos de preenchimento de templates

Abaixo temos exemplos de como os códigos presentes nos templates do __checkout-header__, __checkout-footer__, __vtex-checkout__ e __vtex-orderPlaced__ podem ser preenchidos e a sua visualização correspondente no site:

- Template __checkout-header__ e cabeçalho da página do site:

![checkout-header-codigo-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_8.png)

![checkout-header-page-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_9.png)

- Template __checkout-footer__ e rodapé da página do site:

![checkout-footer-codigo-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_10.png)

![checkout-footer-page-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_11.png)

- Template __vtex-checkout__ e página do carrinho no Checkout:

![smartcheckout16.pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_12.png) 

![vtex-checkout-page-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_13.png)

- Template __vtex-orderPlaced__ e página do pedido confirmado:

![smartcheckout18.pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_14.png) 

![vtex-orderplaced-page-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_15.png)

### Contas com multidomínio

As contas que possuem multidomínio podem usar apenas um site, caso não haja necessidade de configurações específicas. Isso porque, ainda que exista apenas um site, a plataforma inclui uma classe na tag "body" de acordo com o domínio acessado. Dessa forma, é simples aplicar layouts diferentes para o mesmo site.

Classe inserida na tag "body" de acordo com o domínio acessado:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/configurar-template-no-smartcheckout-update_16.jpg)
