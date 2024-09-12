---
title: 'Configurar template no SmartCheckout'
id: ToTE5XB39t0SwtHgpgwSv
status: PUBLISHED
createdAt: 2019-08-27T17:48:08.831Z
updatedAt: 2023-03-24T19:06:08.064Z
publishedAt: 2023-03-24T19:06:08.064Z
firstPublishedAt: 2019-10-28T16:39:00.190Z
contentType: tutorial
productTeam: Shopping
author: authors_84
slug: configurar-template-no-smartcheckout-update
locale: pt
legacySlug: configurar-template-no-smartcheckout-update
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

O __Portal__ é usado para renderizar as telas de __Checkout__ (Carrinho, Dados Pessoais, Endereço, Forma de Pagamento) e __OrderPlaced__ (Tela de confirmação de compra). Neste artigo será apresentado como cadastrar e configurar os recursos do Portal.

O módulo __Checkout__ no Admin, exibe os sites que estão cadastrados para a sua conta. Por meio dele, também é possível criar um novo site, editar e configurar informações sobre os sites já existentes.

>ℹ️ Cada site cadastrado corresponde a um multidomínio (caso a conta possua multidomínios contratados). Para contas que não utilizam multidomínios, não é necessário cadastrar mais de um site neste módulo. Saiba mais em [Criar multiloja/multidomínio](https://help.vtex.com/pt/tutorial/como-criar-multiloja-multidominio--tutorials_510#).

## Criar novo site

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no botão `Novo Site`.
3. Preencha os seguintes campos:
<ul>
<br>
  <li><b>Nome</b>: insira aqui o nome desejado para o site.</li>
  <li><b>Loja</b>: preencher com o nome da conta, que pode ser encontrado em  <b>Configurações da Conta > Gerenciamento da Conta > Contas > Nome da Conta</b>.</li>
  </ul>
4. Clique em `Salvar`.

Criação do novo site: 

![Novo Site](https://images.ctfassets.net/alneenqid6w5/3PE7SFAdM4qIpXtPrxC7oV/9404083232d8cae1101fd1e4e4a18b98/Novo_Site.png)

Acesso ao __Nome da Conta__: 

![PT Configuração da Conta Nome Loja](https://images.ctfassets.net/alneenqid6w5/5SDjJWbYx8qiYMuvaKNEF/7c3b2eaa76035f0d2682fb07053dc3a1/PT_Paint_Nome_da_Conta.png)

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
![PT Cards Portal](https://images.ctfassets.net/alneenqid6w5/3662yoC7zsRw8ME8bI7Efo/f3c845f13ea5586364b28b807cc3c3fa/PT_Cards_Portal.png)

Exemplo de páginas disponíveis para um site:
![PT Paginas Cropped (2)](https://images.ctfassets.net/alneenqid6w5/4d5vICcJDiNZFR8fIpn9j0/fb8cf9adceae47b99eac9f352b1b912f/PT_Paginas_Cropped__2_.png)

Caso deseje __excluir__ um site, clique no botão de exclusão do site desejado, como no exemplo indicado abaixo:
![PT Card Croppped Delete](https://images.ctfassets.net/alneenqid6w5/2c4FWLHb0TLa8mEJXOdmg4/71a9f95969d7e8cfe6c9d1379b4e5071/PT_Card_Croppped_Delete.png)

A seguir, vamos aprofundar o passo a passo da configuração das oções de menu: __Código__ e __Checkout__, sendo estas responsáveis por configurar as páginas de *Checkout* e *Order Placed*.

## Configurar Checkout

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Checkout__ e configure os campos abaixo, conforme necessário:
<ul>
<br>
  <li><b>Título</b>: caso informado, será exibido no título das páginas de carrinho, finalização de compra e pedido confirmado.</li>
  <li><b>Google Tag Manager</b>: informe o ID (no formato `GTM-XXXX`) do seu contêiner do <a href="https://www.google.com/tagmanager/">Google Tag Manager</a>, caso deseje usá-lo automaticamente.</li>
  <li><b>Google Maps API Key</b>: a chave é utilizada em duas situações: quando a função de Entrega com base na coordenada geográfica está ativa ou caso esteja disponível a opção de <b>Retirada em loja</b>.</li>
  <li><b>Cálculo das opções de Entrega (Beta e Stable)</b>: selecione se o cálculo do frete será feito a partir da planilha ou por geolocalização.</li>
  </ul>

![PT Editar Checkout](https://images.ctfassets.net/alneenqid6w5/nzvyVXocA6pW8l9pBvRzg/1059880c29b9e57e4505b654c9a40013/PT_Editar_Checkout.png)

## Configurar código

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Código__. Será exibido, à direita, um menu de __Arquivos__ e __Templates__ com todos os templates de seu site, configurados pelo sistema.

![PT Lista Código Templates](https://images.ctfassets.net/alneenqid6w5/57N9pQSWVF2e09URYV2avm/7cda1ca4cfe42d9c4fd503741121607d/PT_Lista_C__digo_Templates.PNG)

### Configurar templates do menu "Código"

É possível customizar as páginas do seu site, além de configurar outras funcionalidades em HTML por meio do menu de __Arquivos__ e __Templates__. 

O código HTML preenchido no template corresponde ao que aparecerá nas páginas de __checkout__ e __order placed__ de seu site.

Dos templates disponíveis templates, os únicos que não podem ser alterados são __vtex-checkout__ e __vtex-orderPlaced__. Estes correspondem ao funcionamento nativo da plataforma, renderizando o conteúdo principal das páginas de __checkout__ e __order placed__.

>⚠️ Javascripts incluídos diretamente em quaisquer templates do Portal serão ignorados pela plataforma. Ou seja, no momento da renderização da página, a plataforma o removerá. Isso porque o [SmartCheckout](https://help.vtex.com/pt/tutorial/smartcheckout-preenchimento-automatico-de-dados-do-cliente--2Nuu3xAFzdhIzJIldAdtan#) apenas aceita scripts originados no Google Tag Manager. Assim, sempre que houver necessidade de realizar alguma customização (ou mesmo inserção de tags específicas) via javascript, utilize [Google Tag Manager](https://help.vtex.com/pt/tutorial/integration-with-google-tag-manager--frequentlyAskedQuestions_616#).

### Exemplos de preenchimento de templates

Abaixo temos exemplos de como os códigos presentes nos templates do __checkout-header__, __checkout-footer__, __vtex-checkout__ e __vtex-orderPlaced__ podem ser preenchidos e a sua visualização correspondente no site:

- Template __checkout-header__ e cabeçalho da página do site:

![checkout-header-codigo-pt](https://images.ctfassets.net/alneenqid6w5/4VRv3IKpL8ZOSpANmu0gTG/072b530037076e75f17ebd809de557e3/PT_C__digo_Checkout_Header_Preenchido.png)

![checkout-header-page-pt](https://images.ctfassets.net/alneenqid6w5/4jO17CaVCHEn2mFRUu4smR/791259e534c7a081a5791b1e0c508df5/smartcheckout11.pt.png)

- Template __checkout-footer__ e rodapé da página do site:

![checkout-footer-codigo-pt](https://images.ctfassets.net/alneenqid6w5/h9oan75Htfkd7JCIReZQx/65cb5c227d520f6a6ff3e4e732a920c5/PT_C__digo_Checkout_Footer_preenchido.png)

![checkout-footer-page-pt](https://images.ctfassets.net/alneenqid6w5/7yiOKZsTi9n48HhTIj5pId/7784d3a57075f60888ba66acb5710ea9/checkout_footer.pt.png)

- Template __vtex-checkout__ e página do carrinho no Checkout:

![smartcheckout16.pt](https://images.ctfassets.net/alneenqid6w5/syu2Ul4PbhWNaCWbLQY84/a49ebebfaa7fd9df54cf6b2e757ffb9b/smartcheckout16.pt.png) 

![vtex-checkout-page-pt](https://images.ctfassets.net/alneenqid6w5/3X1KG01hUMDyVxvEAXDoeP/57e0e59e1dfd762cb8cea27de5b55c31/smartcheckout17.pt.png)

- Template __vtex-orderPlaced__ e página do pedido confirmado:

![smartcheckout18.pt](https://images.ctfassets.net/alneenqid6w5/cPYudq4bv8TpU8dkcndvB/f31f680cf8c4f9ae3ed049c11de03bae/smartcheckout18.pt.png) 

![vtex-orderplaced-page-pt](https://images.ctfassets.net/alneenqid6w5/6bJ25wGbKqO1KkFsJ5qtSF/291283a570adbe29b64c6076e2a197ec/smartcheckout19.pt.png)

### Contas com multidomínio

As contas que possuem multidomínio podem usar apenas um site, caso não haja necessidade de configurações específicas. Isso porque, ainda que exista apenas um site, a plataforma inclui uma classe na tag "body" de acordo com o domínio acessado. Dessa forma, é simples aplicar layouts diferentes para o mesmo site.

Classe inserida na tag "body" de acordo com o domínio acessado:

![](https://images.contentful.com/alneenqid6w5/4YAbMPcyqA8eqMM8ycokoU/836778d23afee9b0e793b27d9ab8cc0c/Portal16.jpg)
