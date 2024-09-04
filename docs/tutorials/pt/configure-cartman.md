---
title: 'Configurar o Cartman'
id: 1ACMTStZYkMqB0lTgwg451
status: PUBLISHED
createdAt: 2019-09-03T15:02:48.303Z
updatedAt: 2024-03-13T18:18:17.017Z
publishedAt: 2024-03-13T18:18:17.017Z
firstPublishedAt: 2019-09-09T18:28:20.208Z
contentType: tutorial
productTeam: Shopping
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-o-cartman
locale: pt
legacySlug: configurar-o-cartman
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

O Cartman é uma ferramenta criada para auxiliar o lojista na análise de possíveis cenários no Checkout, simulando, compartilhando e investigando carrinhos nas lojas VTEX. Por padrão, esta ferramenta está disponível e ativada de forma automática para os seguintes domínios VTEX:

- `{accountname}.myvtex.com`
- `{accountname}.vtexcommercebeta.com.br`
- `{accountname}.vtexcommercestable.com.br`

Para os domínios oficiais de lojas (`www.{sualoja}.com`), é necessário [ativar o Cartman manualmente](#ativar-o-cartman-manualmente).

Neste artigo serão abordados os seguintes tópicos:

- [Ativar o Cartman manualmente](#ativar-o-cartman-manualmente)
- [Funções do Cartman](#funcoes-do-cartman)
  - [Simulador de promoções](#simulador-de-promocoes)
  - [Obter informações dos items no carrinho](#obter-as-informacoes-dos-items-no-carrinho)
  - [Adicionar itens específicos no carrinho](#adicionar-itens-especificos-no-carrinho)
  - [Adicionar itens aleatórios no carrinho](#adicionar-itens-aleatorios-no-carrinho)
  - [Definir dados de marketing](#definir-dados-de-marketing)
- [Desativar o Cartman](#desativar-o-cartman) 

>⚠️ Somente o lojista tem acesso ao **Cartman**. Suas funcionalidades não estão disponíveis para utilização dos usuários em uma loja.

## Ativar o Cartman manualmente

Para ativar o Cartman manualmente, siga os passos abaixo:

1. Acesse uma página de Checkout da sua loja (`https://{accountname}.myvtex.com/checkout/`).
2. Insira a query string `?cartman=on` no final da URL (`https://accountname.myvtex.com/checkout?cartman=on`).
3. No canto inferior direito da tela, clique no botão <img src="https://images.ctfassets.net/alneenqid6w5/2Z1d5lHtVM7E7SvL58C8UW/acc0fa24cc8ae2e008d4a8d0f466b035/cartman-removebg-preview.png" alt="cartman-icon" width="25"/> para acessar o Cartman.

## Funções do Cartman

### Simulador de promoções

Ao acessar o **Simulador de Promoções**, você pode visualizar as promoções criadas na sua loja que foram aplicadas no carrinho de compras e os motivos para sua ativação. Também é possível testar a aplicação de promoções antes de ativá-las, incluindo promoções agendadas e inativas.

Para saber usar essa ferramenta, leia o guia [Simulador de Promoções](https://help.vtex.com/pt/tutorial/simulador-de-promocoes-beta--4zc8SNqjqeIJ0ZRMhjlnvy).

### Obter as informações dos items no carrinho

Ao acessar o menu **Ver detalhes do item**, é possível verificar as informações específicas de cada um dos produtos selecionados no carrinho.

![Detalhes do item](https://images.ctfassets.net/alneenqid6w5/1EH9jYZZwOSTcCDKqoQocj/be488177768aa068425cd4fe3bfe9186/Detalhes_do_item.PNG)

### Adicionar itens específicos no carrinho

Em **Adicionar itens pelo ID do SKU**, novos itens podem ser inseridos no carrinho de acordo com o seu código de identificação (SKU ID). Os seguintes campos podem ser utilizados:

- **IDs dos SKUs**: número de identificação de um determinado item (SKU). Campo obrigatório.
- **Quantidade de cada item**: indicação de quantas unidades do SKU serão adicionadas no carrinho.
- **ID do seller**: número de identificação do seller que realizará a entrega do item.

![Adicionar itens pelo ID do SKU](https://images.ctfassets.net/alneenqid6w5/3HfuNsrFblpnncoUW2UQl2/d77dd07bcc3886f41bad702ac74da401/Adicionar_itens_pelo_ID_do_SKU.PNG)

### Adicionar itens aleatórios no carrinho

Em **Adicionar itens aleatórios**, novos itens do catálogo da loja podem ser inseridos no carrinho de forma aleatória (sem específicar qual item será adicionado). Para adicionar novos itens, um ou mais dos critérios abaixo podem ser selecionados:

- Número de itens
- Quantidade de cada item
- ID da categoria
- ID da marca
- ID da coleção
- ID do seller
- Faixa de preço (Preço de / Preço até)

![Adicionar itens aleatórios](https://images.ctfassets.net/alneenqid6w5/3vHoO3Pm1Vnsc2QXYOJMQW/805100572b36c043100c941fda45b732/Adicionar_itens_aleat__rios.PNG)

### Definir dados de marketing

Na opção **Definir dados de marketing**, é possível aplicar cupons de desconto em itens específicos e promoções baseadas em informações de marketing. Os seguintes campos podem ser utilizados:

- **utm_source**: a origem do tráfego, ou seja, por meio de qual site, anunciante ou publicação, o usuário chegou até a loja.
- **utm_medium**: a mídia de publicidade ou marketing utilizada para acessar o site da loja (banner, newsletter).
- **utm_campaign**: o nome da campanha utilizada para determinar o contexto do marketing (natal, lançamento).
- **utmi_cp**: utm interna utilizada para definir quando será aplicada uma determinada promoção, de acordo com a utm descrita na URL do pedido. 
- **Cupom**: código do cupom de desconto a ser adicionado no carrinho.

![Definir dados de marketing](https://images.ctfassets.net/alneenqid6w5/5jutuQsztAkNGjFHdPk27a/ae8e80765f7ff1255f03e5f48a4b4edb/Definir_dados_de_marketing.PNG)

Para saber mais sobre UTMs e UTMIs , acesse [O que são utm_source, utm_campaign e utm_medium](https://help.vtex.com/pt/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii#) e [O que são as UTMs internas utmi_cp, utmi_pc e utmi_p](https://help.vtex.com/pt/tutorial/o-que-sao-as-utms-internas-utmi_cp-utmi_pc-e-utmi_p#).

## Desativar o Cartman ##

O Cartman pode ser desativado a qualquer momento, conforme a necessidade do lojista. Para desativá-lo, siga os passos abaixo:

1. Acesse uma página de Checkout da sua loja (`https://{accountname}.myvtex.com/checkout/`).
2. No canto inferior direito da tela, clique no botão <img src="https://images.ctfassets.net/alneenqid6w5/2Z1d5lHtVM7E7SvL58C8UW/acc0fa24cc8ae2e008d4a8d0f466b035/cartman-removebg-preview.png" alt="cartman-icon" width="25"/>.
3. Na parte inferior do menu do Cartman, clique em `Desativar o Cartman`.

>ℹ️ Caso deseje reativar o **Cartman**, adicione novamente a query string `?cartman=on` em uma das páginas do Checkout de sua loja. Desta forma, o ícone azul estará novamente disponível no canto inferior direito da página.

