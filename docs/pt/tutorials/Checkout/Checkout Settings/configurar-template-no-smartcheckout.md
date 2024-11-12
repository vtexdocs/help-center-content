---
title: 'Configurar template no SmartCheckout'
id: frequentlyAskedQuestions_599
status: ARCHIVED
createdAt: 2019-01-24T20:45:56.190Z
updatedAt: 2022-07-18T12:13:15.246Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:05:13.787Z
contentType: tutorial
productTeam: Shopping
author: authors_84
slugEN: configure-template-in-the-smartcheckout
locale: pt
legacySlug: configurar-template-no-smartcheckout
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

O __Portal__ é usado para renderizar as telas de Checkout (Carrinho > Dados pessoais > Endereço > Forma de Pagamento) e OrderPlaced (Tela de confirmação de compra). Aqui aprenderemos como cadastrar e configurar os recursos do portal.

No menu lateral do Admin, acesse o __Checkout__.

A primeira tela exibida será dos sites que estão cadastrados para a sua conta. 

Cada site cadastrado corresponde a um multidomínio, se a conta possuir multidomínio contratado. Para as contas que não utilizam multidomínio, o cadastro de mais de um site, nesse módulo, não fará sentido. Para maiores informações, acesse [criação de multiloja / multidomínio](https://help.vtex.com/pt/tutorial/como-criar-multiloja-multidominio#).

Nessa tela é possível **criar** um novo site, **editar** dados básicos de sites já existentes ou **configurá-los**.

Para criar um novo site, clique em __Novo Site__.

Agora, preencha os campos abaixo seguindo as instruções:

- **Título**: aqui você deve inserir o título do site. Este campo é livre.
- **Loja**: deve ser preenchido com um valor que corresponda a algum host da loja desejada. Este campo é único, ou seja, seu valor não pode ser repetido em outro site.

Veja a imagem abaixo:

![Novo Site](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

![smartcheckout2.pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

Clique em __Salvar__ para concluir o cadastro do novo site.

Para editar o site em vez de criar um novo, basta clicar no botão de engrenagem.

Com isto, o sistema exibe todas as informações de configuração e permite navegação pelas seguintes opções de menu:

- Sites: retorna para a tela inicial.
- Configuração: permite a edição do Nome e da Loja.
- Checkout: permite configurações básicas.
- Pedidos 
- Código: Templates relacionados ao site.
- Páginas: Exibe as páginas existentes para o site. Por padrão, são criadas duas páginas: **checkout **e **checkout/orderPlaced**. Como já dito, no inicio desse post, a página **checkout**corresponde às páginas de carrinho, dados pessoais, endereço e forma de pagamento. A página **checkout/orderPlaced** corresponde à página de Confirmação de Compra.

![smartcheckout3.pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

Em **Páginas** é possível **Criar** novas páginas, **Editar** e **Excluir** páginas existentes. Veja as duas imagens seguintes demonstrando **Edição** e **Exclusão**. A criação segue mesmas regras de edição.

Edição de Página:

![smartcheckout4.pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

Exclusão de Página:

![smartcheckout5.pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

Em **Configurações** podemos editar os campos abaixo:

- Título: Caso informado, será exibido no título das páginas de carrinho, finalização de compra e pedido confirmado.
- Google Tag Manager: Informe o ID (GTM-XXXX) do seu contêiner do [Google Tag Manager](https://www.google.com/tagmanager/ "Google Tag Manager") caso deseje usá-lo automaticamente
- Google Maps API Key: A chave é utilizada em dois casos: caso a função de Entrega com base na coordenada geográfica esteja ligada e caso a loja trabalhe com a opção de Retirada em um Ponto.
- Cálculo das opções de Entrega (Beta e Stable) 

Segue imagem exemplificando preenchimento desse formulário:

![smartcheckout6.pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)

Em **Código**, serão exibidos, a direita, todos os templates relacionados ao Site. Por padrão, o sistema configura os templates exemplificados na imagem abaixo:

![smartcheckout7.pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)

Desses templates, os únicos que não podem ser alterados são **vtex-checkout **e **vtex-orderPlaced**. Esses templates correspondem ao funcionamento nativo da plataforma, ou seja, são eles que renderizam o conteúdo principal dessas páginas, tanto o checkout quanto o orderPlaced.

Na imagem seguinte, demonstramos a área afetada, no checkout, pela configuração do template **checkout-footer**. Esse é apenas um exemplo de template vazio.

![smartcheckout8.pt](//images.ctfassets.net/alneenqid6w5/5zOhjcWGREbNGMMQcByTQe/a10257507cc13def1c061de57f71abcc/smartcheckout8.pt.png) ![smartcheckout9.pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_8.png)

Na próxima imagem, temos um exemplo equivalente ao anterior, porém, dessa vez, com código HTML preenchido. Note que o código preenchido na esquerda corresponde a área superior da direita. Esse é o template **checkout-header**.

![smartcheckout10.pt](//images.ctfassets.net/alneenqid6w5/3Y0fVHj9U5zvSJAAtRQ3Nd/159735c9a5a79fa274bc0a3c63377f24/smartcheckout10.pt.png) ![smartcheckout11.pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_9.png)

Como podemos ver na próxima imagem, todos os templates que possuem o prefixo **checkout**serão utilizados em todas as páginas do Checkout. Nesse exemplo, já estamos na página Forma de Pagamento e note que o header carregado é o mesmo do exemplo anterior.

![smartcheckout12.pt](//images.ctfassets.net/alneenqid6w5/5To5Y80RxE0NNan0zocQiV/16e89c5e0b13175285dcfa59025bc061/smartcheckout12.pt.png) ![smartcheckout13.pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_10.png)

Como nos templates do **checkout**, o mesmo acontece com os templates de orderPlaced. Ou seja, os templates com prefixo **orderPlaced** correspondem unicamente a página OrderPlaced (Confirmação de Compra).

![smartcheckout14.pt](//images.ctfassets.net/alneenqid6w5/1BKz1PqcVmyrmmxOJe3SW7/11badcd39ab3011e994ba7ef2f73c72b/smartcheckout14.pt.png) ![smartcheckout15.pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_11.png)

Como explicado acima, os únicos templates que não são permitidas alterações são **vtex-checkout** e **vtex-orderPlaced**. Esses templates renderizam ao conteúdo básico das páginas Checkout e OrderPlaced. A seguir, exemplos do conteúdo renderizado pelos templates.

Template **vtex-checkout**:

![smartcheckout16.pt](//images.ctfassets.net/alneenqid6w5/syu2Ul4PbhWNaCWbLQY84/a49ebebfaa7fd9df54cf6b2e757ffb9b/smartcheckout16.pt.png) ![smartcheckout17.pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_12.png)

Template **vtex-orderPlaced**:

![smartcheckout18.pt](//images.ctfassets.net/alneenqid6w5/cPYudq4bv8TpU8dkcndvB/f31f680cf8c4f9ae3ed049c11de03bae/smartcheckout18.pt.png) ![smartcheckout19.pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_13.png)

As contas que possuem multi domínio podem usar apenas um site, se não houver necessidade de configurações específicas. Isso porque, ainda que exista apenas um Site, a plataforma inclui uma classe na tag &lt;body&gt; de acordo com o domínio acessado. Dessa forma, é simples aplicar layouts diferentes para o mesmo site.

Classe inserida na tag &lt;body&gt; de acordo com o domínio acessado:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_14.jpg)

**Importante**: Todo javascript que for incluído diretamente em qualquer template do Portal será ignorado pela plataforma, ou seja, no momento da renderização da página, a plataforma o removerá. Isso porque o SmartCheckout apenas aceita scripts originados no Google Tag Manager. Assim, sempre que houver necessidade de realizar alguma customização (ou mesmo inserção de tags específicas) via javascript, faça essa inclusão via Google Tag Manager.
