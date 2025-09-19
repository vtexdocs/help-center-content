---
title: 'Criar promoção Compre Junto'
id: tutorials_323
status: PUBLISHED
createdAt: 2017-04-27T22:08:34.791Z
updatedAt: 2025-02-24T16:17:27.631Z
publishedAt: 2025-02-24T16:17:27.631Z
firstPublishedAt: 2017-04-27T23:03:15.238Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: buy-together
legacySlug: compre-junto
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Na promoção Compre Junto, você pode oferecer descontos quando dois ou mais produtos são adicionados ao carrinho ao mesmo tempo. O desconto pode ser aplicado de duas formas:

- Desconto para ambos os produtos: o desconto será aplicado assim que os produtos forem adicionados ao carrinho.
- Desconto para um dos produtos: configure uma condição de quantidade mínima para que o desconto seja aplicado a apenas um dos produtos no carrinho.

**Exemplos de promoção Compre Junto**

A seguir, você encontrará alguns exemplos práticos de como configurar e aplicar descontos utilizando a promoção Compre Junto. Esses exemplos demonstram as diferentes formas de conceder descontos ao adicionar produtos ao carrinho de compras:

Desconto por compra de produtos em conjunto:

- Promoção: compre uma calça e ganhe 10% de desconto em um cinto.
- Condição: adicione ambos os produtos ao carrinho para receber o desconto.

Desconto por compra combinada de itens:

- Promoção: compre um par de tênis e um par de meias e ganhe 15% de desconto.
- Condição: receba o desconto ao comprar os dois itens juntos.

Desconto por quantidade de produtos adicionados ao carrinho:

- Promoção: compre três livros e ganhe 5% de desconto no terceiro livro.
- Condição: receba o desconto ao adicionar três livros ao carrinho.

Neste artigo, detalharemos os passos necessários para criar e configurar uma promoção Compre Junto:

- [Criar promoção](#criar-promocao)
- [Informações gerais da promoção](#informacoes-gerais-da-promocao)
  - [Definir sellers participantes da promoção](#definir-sellers-participantes-da-promocao)
  - [Selecionar políticas comerciais para aplicar o desconto](#selecionar-politicas-comerciais-para-aplicar-o-desconto)
- [Listas de itens do Compre Junto e seus desconto](#listas-de-itens-do-compre-junto-e-seus-descontos)
- [Definir condições para aplicar a promoção](#definir-condicoes-para-aplicar-a-promocao)
- [Configurar restrições para o uso da promoção](#configurar-restricoes-para-o-uso-da-promocao)
- [Exibir a promoção na página de produto](#exibir-a-promocao-na-pagina-de-produto)

## Criar a promoção

1. No Admin VTEX, acesse **Promoções > Promoções** ou digite **Promoções** na barra de busca no topo da página.
2. Clique em `Criar promoção`.
3. Selecione a opção **Compre Junto** e insira as informações necessárias. Abaixo você encontra detalhes sobre todas as informações a serem preenchidas.
4. Clique em `Salvar`.

## Informações gerais da promoção

Defina as informações principais da promoção, como nome, descrição e período de vigência.

- **Nome:** defina um nome claro e objetivo para a promoção (até 150 caracteres).
- **Status:** defina se a promoção estará **Ativa** ou **Inativa**. Quando estiver **Ativa**, a promoção será aplicada de acordo com as datas e os horários configurados. Se estiver **Inativa**, será pausada, mesmo que esteja dentro do período definido.
- **Descrição:** escreva uma breve descrição da promoção (até 10.000 caracteres), destacando seus principais objetivos.
- **Data de início:** insira a data de início da promoção.
- **Horário de início:** insira o horário de início da promoção.
- **Data de término:** insira a data em que a promoção será finalizada. A data deve ser posterior à data atual.
- **Horário de término:** insira o horário exato de término da promoção.
- **Usar configurações de recorrência:** habilite essa opção para repetir a promoção automaticamente em dias e horários específicos.

### Definir sellers participantes da promoção

Defina se a promoção será aplicada a todos os sellers ou apenas a sellers específicos. Selecione uma das opções a seguir para a aplicação da promoção.

- **Todos:** a promoção será aplicada a todos os sellers cadastrados. Use essa opção quando quiser que todos os produtos, de todos os sellers, façam parte da campanha.
- **Iguais a:** selecione esta opção para incluir apenas sellers específicos na promoção. Após selecionar "Iguais a", você poderá escolher os sellers desejados no campo abaixo. Somente os sellers selecionados terão seus produtos incluídos na campanha.
- **Diferentes de:** selecione esta opção para excluir sellers específicos da promoção. Após escolher "Diferentes de", você poderá selecionar os sellers que *não deseja incluir* na campanha. Todos os demais sellers estarão incluídos.

### Selecionar políticas comerciais para aplicar o desconto

Selecione as políticas comerciais que oferecerão o desconto. Você pode oferecer descontos para políticas comerciais onde [sua loja atua como marketplace](/pt/faq/o-que-e-um-marketplace) (Minha loja) ou como seller (Lojas de terceiros - Fulfillment).

Você pode escolher entre as seguintes opções:

- **Iguais a:** selecione as políticas comerciais que deseja incluir na promoção. Essa opção permite que você especifique quais políticas se aplicam aos produtos que receberão o desconto.
- **Diferentes de:** selecione as políticas comerciais que deseja excluir da promoção. Essa opção remove determinadas políticas, garantindo que o desconto não seja aplicado a produtos que seguem essas regras comerciais.
- **Todas:** aplica a promoção a todas as políticas comerciais cadastradas, sem restrições. Todos os produtos, independentemente da política comercial associada, estarão incluídos na promoção.

## Listas de itens do Compre Junto e seus descontos

A promoção **Compre Junto** permite que você combine produtos de duas listas distintas para oferecer descontos aos seus compradores. A primeira lista contém os produtos principais, que ao serem adicionados ao carrinho, podem ativar a promoção. A segunda lista serve como complemento, onde, ao adicionar produtos desta lista junto com os itens da primeira, é possível oferecer descontos adicionais.

Veja abaixo como configurar as **Listas 1 e 2** para ativar as condições de desconto e garantir que os produtos sejam corretamente combinados no carrinho de compras.

**Lista 1**

- **SKUs:** insira o nome ou ID dos SKUs que você deseja incluir na primeira lista da promoção. Por exemplo, se a promoção é para uma calça ou um par de tênis, cadastre esses itens aqui. Caso os produtos tenham variações, como tamanhos "P" e "G", você deve adicionar o SKU do tamanho "P" na **Lista 1** e o SKU do tamanho "G" na **Lista 2**. Insira manualmente ou faça o upload de uma planilha para importar os SKUs em massa.
- **Desconto:** insira o percentual de desconto que será aplicado aos SKUs da **Lista 1**. Por exemplo, se a promoção oferece 15% de desconto, insira "15" para que esse desconto seja concedido ao SKU adicionado ao carrinho. Esse campo é obrigatório e deve ser preenchido mesmo que o desconto seja zero. Caso o desconto deva ser aplicado apenas para os SKUs da **Lista 2**, insira "0" neste campo para a **Lista 1**.
- **Quantidade mínima:** defina o número mínimo de unidades do SKU selecionado na Lista 1 que devem ser adicionadas ao carrinho para que o desconto seja aplicado.

**Lista 2**

- **SKUs:** selecione os SKUs adicionais que, quando adicionados ao carrinho junto com os SKUs da **Lista 1**, ativarão o desconto configurado. A promoção só será ativada se os produtos da **Lista 1** e da **Lista 2** forem adicionados ao carrinho.
- **Desconto:** insira o percentual de desconto que será aplicado aos SKUs da **Lista 2** quando os SKUs da **Lista 1** forem adicionados ao carrinho. O valor deve ser inserido em percentual (%). Por exemplo, para conceder 10% de desconto na compra de um cinto combinado com uma calça da **Lista 1**, insira "10" no campo.

> ℹ️ Mantenha SKUs diferentes na Lista 1 e na Lista 2. Não repita o mesmo SKU em ambas as listas.

## Definir condições para aplicar a promoção

Defina as restrições que serão aplicadas à promoção. As condições permitem que a promoção seja ativada em circunstâncias específicas, conforme os critérios selecionados. Para adicionar uma condição, siga as instruções abaixo:

- **Valor do pedido**
  - **Valor mínimo do pedido:** defina o valor mínimo necessário para que a promoção seja ativada. Escolha quais itens serão considerados no cálculo: apenas os itens incluídos na promoção, somente os itens fora da promoção ou todos os itens do pedido.
  - **Valor máximo do pedido:** defina o valor máximo permitido para que a promoção seja aplicada. Selecione quais itens serão considerados no cálculo: apenas os itens incluídos na promoção, somente os itens fora da promoção ou todos os itens do pedido.

- **Número do BIN  do cartão:** aplique a promoção apenas quando forem utilizados cartões de bandeiras, bancos ou categorias específicas identificadas por seus códigos BIN. Importe uma lista de BINs salva em um arquivo de texto (.txt) ou (.csv), com cada BIN descrito em uma linha diferente.

- **Cluster de clientes:** selecione um [cluster de clientes](/pt/tutorial/como-criar-um-cluster-de-clientes) já criado no Master Data, seguindo o formato `field=value` ou `field contains value`. Em seguida escolha uma das seguintes opções:
  - **Todos os seguintes:** aplique a promoção apenas se todos os critérios do cluster forem atendidos.
  - **Pelo menos um dos seguintes:** aplique a promoção se pelo menos um dos critérios do cluster for atendido.

- **UTM:** configure a promoção para ser aplicada quando o acesso ao site ocorrer por meio de uma URL com parâmetros UTM ou quando um cupom vinculado a esses parâmetros for utilizado. Os parâmetros UTM são opcionais e permitem aplicar descontos em campanhas específicas. Defina os parâmetros UTM seguindo as regras de formatação, utilizando apenas letras, números, hífens e sublinhados. Se necessário, preencha os seguintes parâmetros:

  - **Utm_source:** aplique o desconto quando a navegação for realizada com a utm_source configurado.
  - **Utm_campaign:** aplique o desconto quando a navegação for realizada com o parâmetro *utm_campaign* configurado.
  - **Criar cupom a partir dos parâmetros UTM acima:** gere um cupom com base nos parâmetros UTM inseridos nos campos "UTM_source" e "UTM_campaign”.
  - **Ver cupons vinculados:** permite visualizar os cupons que já foram associados aos parâmetros UTM definidos. Ao criar cupons a partir de UTMs, não use o nome `new`, pois isso gera uma URL inválida.

## Configurar restrições para o uso da promoção

Nesta seção, defina se a promoção poderá ser combinada com outras promoções. As opções disponíveis são:

- **Limitar o uso da promoção na loja:** restringe a quantidade total de vezes que a promoção pode ser utilizada na loja.
- **Limitar o uso da promoção por cliente:** restringe o número de vezes que cada cliente pode utilizar a promoção.

## Exibir a promoção na página de produto

Destaque a promoção na página de produto e adicione dados personalizados para customizações da loja nesta seção.

- **Destacar nos produtos:** marque esta opção para exibir a promoção diretamente nas páginas de produtos. Lembre-se de [configurar essa exibição no módulo CMS](/pt/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295).
- **Informações adicionais:** clique em **Criar** para adicionar campos personalizados com nome e valor, que podem ser usados para customizações na loja.

Veja abaixo o formulário de criar promoções Compre Junto:

![Informação geral - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/promo%C3%A7%C3%B5es/compre-junto_1.gif)
