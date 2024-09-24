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

![Novo Site](//images.ctfassets.net/alneenqid6w5/3PE7SFAdM4qIpXtPrxC7oV/9404083232d8cae1101fd1e4e4a18b98/Novo_Site.png)

![smartcheckout2.pt](//images.ctfassets.net/alneenqid6w5/6klkJKS7Jegp0YvISd4UFz/c84e643fa16420603a40a09f1942356f/smartcheckout2.pt.png)

Clique em __Salvar__ para concluir o cadastro do novo site.

Para editar o site em vez de criar um novo, basta clicar no botão de engrenagem.

Com isto, o sistema exibe todas as informações de configuração e permite navegação pelas seguintes opções de menu:

- Sites: retorna para a tela inicial.
- Configuração: permite a edição do Nome e da Loja.
- Checkout: permite configurações básicas.
- Pedidos 
- Código: Templates relacionados ao site.
- Páginas: Exibe as páginas existentes para o site. Por padrão, são criadas duas páginas: **checkout **e **checkout/orderPlaced**. Como já dito, no inicio desse post, a página **checkout**corresponde às páginas de carrinho, dados pessoais, endereço e forma de pagamento. A página **checkout/orderPlaced** corresponde à página de Confirmação de Compra.

![smartcheckout3.pt](//images.ctfassets.net/alneenqid6w5/6j24QAEDzt7QdGc5wC5ENH/c0d27ea44a8cb300ed4c87755f6a940f/smartcheckout3.pt.png)

Em **Páginas** é possível **Criar** novas páginas, **Editar** e **Excluir** páginas existentes. Veja as duas imagens seguintes demonstrando **Edição** e **Exclusão**. A criação segue mesmas regras de edição.

Edição de Página:

![smartcheckout4.pt](//images.ctfassets.net/alneenqid6w5/5CeBH7XHH2YZ73KORrJ5JA/0469b81979a8b9d1194294c6c6a0963d/smartcheckout4.pt.png)

Exclusão de Página:

![smartcheckout5.pt](//images.ctfassets.net/alneenqid6w5/4Nk7FXMSfMGtez5YzSFi42/d0199266c1344098581d330982770b14/smartcheckout5.pt.png)

Em **Configurações** podemos editar os campos abaixo:

- Título: Caso informado, será exibido no título das páginas de carrinho, finalização de compra e pedido confirmado.
- Google Tag Manager: Informe o ID (GTM-XXXX) do seu contêiner do [Google Tag Manager](https://www.google.com/tagmanager/ "Google Tag Manager") caso deseje usá-lo automaticamente
- Google Maps API Key: A chave é utilizada em dois casos: caso a função de Entrega com base na coordenada geográfica esteja ligada e caso a loja trabalhe com a opção de Retirada em um Ponto.
- Cálculo das opções de Entrega (Beta e Stable) 

Segue imagem exemplificando preenchimento desse formulário:

![smartcheckout6.pt](//images.ctfassets.net/alneenqid6w5/42MYGPJflf6kIhOvY05Mky/1e3354e60bc02de5ad0988e9a59d0928/smartcheckout6.pt.png)

Em **Código**, serão exibidos, a direita, todos os templates relacionados ao Site. Por padrão, o sistema configura os templates exemplificados na imagem abaixo:

![smartcheckout7.pt](//images.ctfassets.net/alneenqid6w5/6bJ9cMwGj9dEoXFrm8M1hP/45f5c580f98366f6ed8eeb1ad6186a54/smartcheckout7.pt.png)

Desses templates, os únicos que não podem ser alterados são **vtex-checkout **e **vtex-orderPlaced**. Esses templates correspondem ao funcionamento nativo da plataforma, ou seja, são eles que renderizam o conteúdo principal dessas páginas, tanto o checkout quanto o orderPlaced.

Na imagem seguinte, demonstramos a área afetada, no checkout, pela configuração do template **checkout-footer**. Esse é apenas um exemplo de template vazio.

![smartcheckout8.pt](//images.ctfassets.net/alneenqid6w5/5zOhjcWGREbNGMMQcByTQe/a10257507cc13def1c061de57f71abcc/smartcheckout8.pt.png) ![smartcheckout9.pt](//images.ctfassets.net/alneenqid6w5/1cz4RwceNJi7fTgxTaYVkH/3ec8f3b5362a74b0ab25a3baf1fb0cd1/smartcheckout9.pt.png)

Na próxima imagem, temos um exemplo equivalente ao anterior, porém, dessa vez, com código HTML preenchido. Note que o código preenchido na esquerda corresponde a área superior da direita. Esse é o template **checkout-header**.

![smartcheckout10.pt](//images.ctfassets.net/alneenqid6w5/3Y0fVHj9U5zvSJAAtRQ3Nd/159735c9a5a79fa274bc0a3c63377f24/smartcheckout10.pt.png) ![smartcheckout11.pt](//images.ctfassets.net/alneenqid6w5/16Ivg9yAPkvSRDzQ2JLG9h/bd1bb45eb3524f8312a82edc2da71656/smartcheckout11.pt.png)

Como podemos ver na próxima imagem, todos os templates que possuem o prefixo **checkout**serão utilizados em todas as páginas do Checkout. Nesse exemplo, já estamos na página Forma de Pagamento e note que o header carregado é o mesmo do exemplo anterior.

![smartcheckout12.pt](//images.ctfassets.net/alneenqid6w5/5To5Y80RxE0NNan0zocQiV/16e89c5e0b13175285dcfa59025bc061/smartcheckout12.pt.png) ![smartcheckout13.pt](//images.ctfassets.net/alneenqid6w5/3FWj22GAEYMHzssrZxcgze/8c823c3f6df9f0cc15ee050028a1247e/smartcheckout13.pt.png)

Como nos templates do **checkout**, o mesmo acontece com os templates de orderPlaced. Ou seja, os templates com prefixo **orderPlaced** correspondem unicamente a página OrderPlaced (Confirmação de Compra).

![smartcheckout14.pt](//images.ctfassets.net/alneenqid6w5/1BKz1PqcVmyrmmxOJe3SW7/11badcd39ab3011e994ba7ef2f73c72b/smartcheckout14.pt.png) ![smartcheckout15.pt](//images.ctfassets.net/alneenqid6w5/6eCGmlImxDRmGRpIyfvFDs/97ecf1e0821f9b33ca3a4764b456777c/smartcheckout15.pt.png)

Como explicado acima, os únicos templates que não são permitidas alterações são **vtex-checkout** e **vtex-orderPlaced**. Esses templates renderizam ao conteúdo básico das páginas Checkout e OrderPlaced. A seguir, exemplos do conteúdo renderizado pelos templates.

Template **vtex-checkout**:

![smartcheckout16.pt](//images.ctfassets.net/alneenqid6w5/syu2Ul4PbhWNaCWbLQY84/a49ebebfaa7fd9df54cf6b2e757ffb9b/smartcheckout16.pt.png) ![smartcheckout17.pt](//images.ctfassets.net/alneenqid6w5/qWTeYs6xpCvSSHJxRjOTq/df1d297f88bcabd7a31659bf8a615bd3/smartcheckout17.pt.png)

Template **vtex-orderPlaced**:

![smartcheckout18.pt](//images.ctfassets.net/alneenqid6w5/cPYudq4bv8TpU8dkcndvB/f31f680cf8c4f9ae3ed049c11de03bae/smartcheckout18.pt.png) ![smartcheckout19.pt](//images.ctfassets.net/alneenqid6w5/59SQfj6KKy9kWKKFla3YyV/e7625167d5ed26fe8394e5c6b559f8c5/smartcheckout19.pt.png)

As contas que possuem multi domínio podem usar apenas um site, se não houver necessidade de configurações específicas. Isso porque, ainda que exista apenas um Site, a plataforma inclui uma classe na tag &lt;body&gt; de acordo com o domínio acessado. Dessa forma, é simples aplicar layouts diferentes para o mesmo site.

Classe inserida na tag &lt;body&gt; de acordo com o domínio acessado:

![](//images.contentful.com/alneenqid6w5/4YAbMPcyqA8eqMM8ycokoU/836778d23afee9b0e793b27d9ab8cc0c/Portal16.jpg)

**Importante**: Todo javascript que for incluído diretamente em qualquer template do Portal será ignorado pela plataforma, ou seja, no momento da renderização da página, a plataforma o removerá. Isso porque o SmartCheckout apenas aceita scripts originados no Google Tag Manager. Assim, sempre que houver necessidade de realizar alguma customização (ou mesmo inserção de tags específicas) via javascript, faça essa inclusão via Google Tag Manager.
