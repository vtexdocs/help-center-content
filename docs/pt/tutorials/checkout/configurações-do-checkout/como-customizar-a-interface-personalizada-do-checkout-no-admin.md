---
title: 'Como customizar a interface personalizada do Checkout no Admin'
id: 548aDBJciQu97Vh0BhEiWx
status: PUBLISHED
createdAt: 2024-01-04T13:27:04.734Z
updatedAt: 2024-01-04T18:28:45.989Z
publishedAt: 2024-01-04T18:28:45.989Z
firstPublishedAt: 2024-01-04T18:28:45.989Z
contentType: tutorial
productTeam: Shopping
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: how-to-customize-the-checkout-ui-custom-in-the-admin
legacySlug: como-customizar-a-interface-personalizada-do-checkout-no-admin
locale: pt
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

As customizações do Checkout descritas neste artigo são realizadas por meio do Checkout UI Custom app. Antes de iniciar as configurações, você deve verificar se o app está instalado na loja, ou realizar a instalação conforme o artigo [Checkout UI Custom](https://developers.vtex.com/docs/apps/vtex.checkout-ui-custom).

## Customizando o Checkout

No Admin VTEX, acesse **Configurações da loja > Storefront > Interface personalizada do checkout**, ou digite **Interface personalizada do checkout** na barra de busca no topo da página.

As funcionalidades de customização do app podem ser acessadas por meio das seguintes abas no Admin:

* [Interface](#interface)
* [Cores](#cores)
* [JavaScript](#javascript)
* [CSS](#css)
* [Histórico](#histórico)

## Interface

Nesta aba é possível realizar as seguintes configurações:

1. **Opções de pagamento estilo sanfona:** ao habilitar o botão, os meios de pagamentos são exibidos em cascata (sanfona), se houver até cinco meios de pagamentos. Quando desabilitado, os meios de pagamentos são exibidos em abas laterais.

2. **Data de entrega simplificada:** ao habilitar o botão você terá acesso à visualização da estimativa de entrega em formato de data, como por exemplo, segunda-feira,18/09/23.  Quando a opção estiver desabilitada, os dados fornecidos se limitarão a uma estimativa do prazo em dias, como por exemplo, Até 5 dias úteis.

3. **Mostrar preço unitário do item:** ao habilitar o botão, o usuário irá visualizar o valor unitário de cada produto e o valor total somado, de acordo com a quantidade do mesmo produto. Quando a opção estiver desabilitada, é possível visualizar apenas o valor unitário de cada produto.

4. **Exibir campo de anotações:** ao habilitar este botão é permitido visualizar uma caixa para incluir comentários adicionais ao pedido, como por exemplo uma mensagem de felicitações, caso o produto seja um presente ou alguma observação referente a entrega do produto. Quando desabilitado, não é exibido esta caixa de comentário.

5. **Remover a etapa de email:** ao habilitar o botão, a opção de preenchimento automático de dados via inserção do email é desabilitada. Quando desativado, é necessário preencher manualmente suas informações de contato.

6. **Formulário de endereço do Google:** esta é uma integração do formulário de endereço com o Google (em fase beta). Quando habilitado o botão, permite que ao digitar o endereço, seja oferecido sugestões de autopreenchimento, que quando selecionado realiza um preenchimento automático dos campos do endereço.

7. **Tamanho do texto:** essa configuração possibilita alterar o tamanho da fonte (em pixels) no Checkout.

8. **Arredondamento da borda:** essa configuração possibilita personalizar o formato de arredondamento da borda externa (em pixels) no Checkout.

9. **Arredondamento da borda do botão:** esta configuração permite personalizar o formato de arredondamento da borda dos botões (em pixels) no Checkout.

10. **Altura do campo de texto:** permite personalizar a espessura (em pixels) dos campos de texto no checkout.

11. **Largura máxima do conteúdo:** permite configurar a largura máxima (em pixels) da exibição das informações no Checkout.

12. **Borda do conteúdo:** permite configurar o [tipo de borda](https://www.w3schools.com/css/css_border.asp) das seções no Checkout.

13. **Família de fontes:** permite configurar os tipos de fontes utilizadas no Checkout.

## Cores

A aba Cores permite personalizar as cores do checkout de sua loja, permitindo alterar cores de fundo, botões, texto entre outros. Essa padronização garante uma harmonia visual consistente.

![Cores ](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configura%C3%A7%C3%B5es-do-checkout/como-customizar-a-interface-personalizada-do-checkout-no-admin_1.png)

## Javascript

A aba JavaScript  adiciona uma camada adicional de personalização à interface permitindo a inclusão de scripts.

![Java - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configura%C3%A7%C3%B5es-do-checkout/como-customizar-a-interface-personalizada-do-checkout-no-admin_2.png)

## CSS

A aba CSS permite customizações visuais da loja com a inclusão de código CSS.

![CSS - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configura%C3%A7%C3%B5es-do-checkout/como-customizar-a-interface-personalizada-do-checkout-no-admin_3.png)

## Histórico

Permite visualizar e restaurar customizações criadas e publicadas anteriormente.

![Histórico - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configura%C3%A7%C3%B5es-do-checkout/como-customizar-a-interface-personalizada-do-checkout-no-admin_4.png)

Para garantir que suas configurações sejam aplicadas com sucesso, basta realizar as configurações necessárias e clicar no botão `Publicar`.
