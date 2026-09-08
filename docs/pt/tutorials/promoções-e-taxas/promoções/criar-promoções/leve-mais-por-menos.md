---
title: 'Criar promoção Leve Mais por Menos'
id: tutorials_325
status: PUBLISHED
createdAt: 2017-04-27T22:08:17.186Z
updatedAt: 2025-09-30T13:52:31.023Z
publishedAt: 2025-09-30T13:52:31.023Z
firstPublishedAt: 2017-04-27T23:03:15.551Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: creating-a-more-for-less-promotion
legacySlug: leve-mais-por-menos
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

A promoção Leve Mais por Menos permite conceder descontos quando o cliente adiciona várias unidades do mesmo produto ao carrinho. Um exemplo comum é: "Leve 3 e pague 2". 

Neste artigo, detalharemos os passos necessários para configurar uma promoção Leve Mais por Menos:

- [Criar promoção Leve mais por menos](#criar-promocao-leve-mais-por-menos)
- [Configurar informações gerais ](#configurar-informacoes-gerais)
		- [Definir sellers participantes da promoção](#definir-sellers-participantes-da-promocao)
		- [Selecionar políticas comerciais para aplicar o desconto](#selecionar-politicas-comerciais-para-aplicar-o-desconto)

- [Configurar promoção Leve Mais por Menos](#configurar-promocao-leve-mais-por-menos)
		- [Configurações Avançadas](#configuracoes-avancadas)

- [Condições para aplicar a promoção](#condicoes-para-aplicar-a-promocao)
- [Configurar restrições para o uso da promoção](#configurar-restricoes-para-o-uso-da-promocao)
- [Configurar acúmulo e concorrência](#configurar-acumulo-e-concorrencia)
- [Exibir a promoção na página de produto](#exibir-a-promocao-na-pagina-de-produto)

## Criar promoção Leve mais por menos

1. No Admin VTEX, acesse **Promoções > Promoções**, ou digite **Promoções** na barra de busca no topo da página.
2. Clique no botão `Criar promoção`.
3. Selecione a opção **Leve mais por menos** e insira as informações necessárias. Abaixo você encontra detalhes sobre todas as informações a serem preenchidas.
4. Clique em `Salvar`.

Nesta etapa, você irá configurar as informações básicas da promoção. Preencha os seguintes campos:

| Campo                            | Descrição |
|----------------------------------|-----------|
| **Nome**                         | Insira um nome descritivo para a promoção (até 150 caracteres). |
| **Status**                       | Ativa ou Inativa. Quando Ativa, a promoção será aplicada conforme as datas e horários configurados. Se Inativa, a promoção ficará pausada, mesmo dentro do período programado. |
| **Descrição**                    | Escreva uma breve descrição da promoção (até 10.000 caracteres), destacando seus principais objetivos. |
| **Data de início e Horário de início** | Defina o início da promoção selecionando a data e o horário exatos nos quais ela será ativada. |
| **Data de término e Horário de término** | Especifique o período de validade da promoção. Defina a data e o horário exatos nos quais ela será automaticamente desativada. |
| **Usar configurações de recorrência** | Configure a recorrência ativando esta opção para repetir a promoção periodicamente. Use-a para campanhas semanais, mensais ou com intervalos específicos. |

### Definir sellers participantes da promoção
Defina se a promoção será aplicada a todos os seus sellers ou apenas a sellers específicos. Selecione uma das opções a seguir para a aplicação da promoção:

- **Todos:** a promoção será aplicada a todos os sellers cadastrados. Use essa opção quando quiser que todos os produtos, de todos os sellers, façam parte da campanha.
- **Iguais a:** selecione esta opção para incluir apenas sellers específicos na promoção. Após selecionar "Iguais a", você poderá escolher os sellers desejados no campo abaixo. Somente os sellers selecionados terão seus produtos incluídos na campanha.
- **Diferentes de:** selecione esta opção para excluir sellers específicos da promoção. Após escolher "Diferentes de", você poderá selecionar os sellers que não deseja incluir na campanha. Todos os demais sellers estarão incluídos.
- - **Participantes**: com esta configuração, a promoção funciona no modo opt-in, em que a participação dos sellers é gerenciada por meio do [Seller opt-in or opt-out](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/calculatorconfiguration/-promotionId-/seller-opt). Nessa API, você pode definir quais sellers devem participar ou ser removidos da promoção.

Para mais informações, acesse [Seller Opt-in for Promotions](https://developers.vtex.com/docs/guides/seller-opt-in-promotions)

### Selecionar políticas comerciais para aplicar o desconto
Selecione as políticas comerciais válidas para o desconto. Você pode oferecer descontos para políticas comerciais onde [sua loja atua como marketplace](/pt/docs/tutorials/o-que-e-um-marketplace) (Minha loja) ou como seller (Lojas de terceiros - Fulfillment).

Você pode escolher entre as seguintes opções:

- **Iguais a:** selecione as políticas comerciais que deseja associar à promoção. Essa opção permite que você especifique quais políticas se aplicam aos produtos que receberão o desconto.
- **Diferentes de:** selecione as políticas comerciais que deseja excluir da promoção. Essa opção remove determinadas políticas, garantindo que o desconto não seja aplicado a produtos que seguem essas regras comerciais.
- **Todas:** aplica a promoção a todas as políticas comerciais cadastradas, sem restrições. Todos os produtos, independentemente da política comercial associada, estarão incluídos na promoção.

## Configurar promoção Leve Mais por Menos
Nesta seção, você define as regras da promoção com base na quantidade de produtos que o cliente precisa adquirir para receber o desconto. Siga as instruções abaixo para preencher os campos:

- **O cliente compra [X] dos seguintes produtos:** informe a quantidade mínima de produtos que o cliente deve adicionar ao carrinho para se qualificar para o desconto. Insira o valor diretamente no campo numérico.
- **SKUs:** adicione os SKUs que farão parte da promoção, inserindo os identificadores dos produtos diretamente no campo. O limite para criar uma promoção de mais por menos condicionada por SKUs é de 100 SKUs.
- **Coleções:** selecione uma [coleção](/pt/docs/tutorials/criando-colecao-de-produtos) de produtos. Essa opção simplifica o gerenciamento da promoção para grupos de itens com características semelhantes.
- **O cliente leva [Y] dos [X] produtos com desconto:** defina quantos produtos o cliente pode levar com desconto ao atingir a quantidade mínima configurada. Insira o número no campo correspondente. Por exemplo, em uma promoção "Leve 3, pague 2", configure para que o cliente leve 2 produtos com desconto.
- **Desconto de:** determine o tipo e o valor do desconto a ser aplicado aos produtos. Selecione entre **% (porcentagem)** ou **valor fixo** e insira o valor desejado.

### Configurações avançadas
As configurações avançadas permitem definir como o desconto será aplicado aos produtos selecionados. Preencha os campos e escolha as opções adequadas às regras da promoção:

**O desconto deve ser aplicado:**

Considerando:
- **Qualquer item:** aplica o desconto a qualquer produto dentro dos critérios configurados, sem necessidade de serem idênticos.
- **Somente itens iguais:** o desconto será aplicado apenas quando os itens forem idênticos (mesmo SKU).

Aos produtos:
- **Mais baratos:** o desconto será concedido aos produtos de menor valor.
- **Mais caros:** o desconto será concedido aos produtos de maior valor.

#### Como o desconto deve ser distribuído?
- **Apenas entre os [X] itens que recebem desconto:** o benefício será aplicado exclusivamente à quantidade exata de itens especificada. Por exemplo, se 3 itens são configurados, apenas esses receberão o desconto.
- **Proporcionalmente entre os [X] itens:** o valor total do desconto será distribuído proporcionalmente entre todos os itens.

## Condições para aplicar a promoção
Defina as restrições que serão aplicadas à promoção. As condições permitem que a promoção seja ativada em circunstâncias específicas, conforme os critérios selecionados. 

Para adicionar uma condição para a promoção, siga as instruções abaixo:

- **Valor do pedido:** defina os limites de valor para aplicar a promoção com base na soma do valor original dos itens. Preencha os campos abaixo para configurar as condições:
    - **Valor mínimo do pedido:** defina o valor mínimo necessário para que a promoção seja ativada. Escolha quais itens serão considerados no cálculo: apenas os itens incluídos na promoção, somente os itens fora da promoção ou todos os itens do pedido.
    - **Valor máximo do pedido:** defina o valor máximo permitido para que a promoção seja aplicada. Selecione quais itens serão considerados no cálculo: apenas os itens incluídos na promoção, somente os itens fora da promoção ou todos os itens do pedido.
- **Meio de pagamento:** a promoção será aplicada somente quando o cliente utilizar um dos meios de pagamento previamente configurados. Entre as opções disponíveis, você pode selecionar:
    - Boleto Bancário.
    - Cartões de crédito, como Visa, Mastercard, entre outros.
    - Outros métodos, como Diners, Hipercard, entre outros.
- **Número do BIN do cartão:** aplique a promoção apenas quando forem utilizados cartões de bandeiras, bancos ou categorias específicas identificadas por seus códigos BIN. Importe uma lista de BINs salva em um arquivo de texto (.txt) ou (.csv), com cada BIN descrito em uma linha diferente.
- **Cluster de clientes:** selecione um [cluster de clientes](/pt/docs/tutorials/como-criar-um-cluster-de-clientes) já criado no Master Data, seguindo o formato `field=value` ou `field contains value`. Escolha uma das seguintes opções:
    - **Todos os seguintes:** aplique a promoção apenas se todos os critérios do cluster forem atendidos.
    - **Pelo menos um dos seguintes:** aplique a promoção se pelo menos um dos critérios do cluster for atendido.
- **UTM:** configure a promoção para ser aplicada quando o acesso ao site ocorrer por meio de uma URL com [parâmetros UTM](/pt/docs/tutorials/o-que-sao-as-utms-internas-utmi-cp-utmi-pc-e-utmi-p) ou quando um cupom vinculado a esses parâmetros for utilizado. Defina os parâmetros UTM seguindo as regras de formatação, utilizando apenas letras, números, hífens e sublinhados (underscores). Defina os parâmetros abaixo, se necessário:
    - **Utm_source:** aplique o desconto quando a navegação for realizada com a utm_source configurado.
    - **Utm_campaign:** aplique o desconto quando a navegação for realizada com o parâmetro utm_campaign configurado.
    - **Criar cupom a partir dos parâmetros UTM acima:** gere um cupom com base nos parâmetros UTM inseridos nos campos `UTM_source` e `UTM_campaign`.
    - **Ver cupons vinculados:** permite visualizar os cupons que já foram associados aos parâmetros UTM definidos.
- **Preço de lista:** permite restringir a promoção com base na presença ou ausência de preço de lista nos produtos selecionados. Escolha uma das opções abaixo:
    - **Não têm preço de lista definido:** aplica a promoção apenas para itens em que os valores "de" e "por" são iguais, indicando que não há [preço de lista](/pt/tutorial/precos-v2) configurado. 
    - **Têm preço de lista definido:** aplica a promoção apenas para itens em que os valores "de" e "por" são diferentes, indicando a existência de um preço de lista.

## Configurar restrições para o uso da promoção
Nesta seção, defina se a promoção poderá ser combinada com outras promoções. As opções disponíveis são:

- **Limitar o uso da promoção na loja:** restringe a quantidade total de vezes que a promoção pode ser utilizada na loja.
- **Limitar o uso da promoção por cliente:** restringe o número de vezes que cada cliente pode utilizar a promoção.
- **Limitar a quantidade de itens elegíveis por carrinho:** define o número máximo de itens por pedido que podem receber o desconto da promoção.

## Configurar acúmulo e concorrência
Defina como a promoção será combinada com outras condições comerciais aplicadas na loja:

- **Permitir acumular com outras promoções:** permite que a promoção seja aplicada simultaneamente com outras promoções, incluindo descontos adicionais, como frete grátis ou brindes. Para mais informações, acesse o artigo [Como funciona a concorrência de promoções](/pt/docs/tutorials/como-funciona-a-concorrencia-de-promocoes).
- **Permitir acumular com preços manuais:** selecione essa configuração para que a promoção seja aplicada a produtos cujo preço foi ajustado manualmente.

## Exibir a promoção na página de produto
Nesta seção, saiba como destacar a promoção na página de produto e adicionar dados personalizados para customizações da loja:

- **Destacar nos produtos:** marque esta opção para exibir a promoção diretamente nas páginas de produtos. 

> ⚠️ Lembre-se [configurar essa exibição no módulo CMS](/pt/docs/tutorials/configurando-promocao-com-destaque-flag).

- **Informações adicionais:** clique em `Criar` para adicionar campos personalizados com nome e valor, que podem ser usados para customizações na loja.

