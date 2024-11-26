---
title: 'Como funciona a promoção Compre e ganhe'
id: tutorials_322
status: PUBLISHED
createdAt: 2017-04-27T22:08:41.148Z
updatedAt: 2024-02-19T11:48:37.254Z
publishedAt: 2024-02-19T11:48:37.254Z
firstPublishedAt: 2017-04-27T23:03:14.992Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: buy-one-get-one
locale: pt
legacySlug: compre-e-ganhe
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

A promoção do tipo Compre e ganhe é utilizada para oferecer frete grátis ou um brinde caso determinado produto seja comprado. Por exemplo, “compre uma televisão e não pague o frete”, ou ainda “compre um video game e ganhe um jogo”.

Neste artigo, detalharemos os passos necessários para configurar uma promoção Compre e Ganhe:

1. [Quais os dados gerais desta promocao?](#1-quais-os-dados-gerais-desta-promoção)
    - [Restringir esta promoção a produtos dos sellers](#restringir-esta-promoção-a-produtos-dos-sellers)
    - [Política Comercial](#política-comercial)
2. [Compre e ganhe](#2-compre-e-ganhe)
3. [Quais as condições para a promoção ser válida?](#3-quais-as-condicoes-para-a-promocao-ser-valida)
4. [Restrições e limitações de uso](#4-restricoes-e-limitaçoes-de-uso)

# Criar a promoção

No Admin VTEX, acesse **Promoções > Promoções** ou digite **Promoções** na barra de busca no topo da página.

1. Clique no botão `Criar promoção`.
2. Selecione a opção **Compre e ganhe**.
3. Preencha os campos da promoção.
4. Clique em `Salvar`.

# 1. Quais são os dados gerais desta promoção?

Nesta seção, fornecemos informações detalhadas sobre os dados gerais desta promoção.
- **Nome:** nome da promoção. Campo obrigatório.
- **Status:** ativa ou inativa a promoção.
- **Descrição**: o objetivo desse campo é que seja usado para comunicação interna na sua loja, a fim de deixar claro se a promoção é devido à alguma campanha, queima de estoque, etc.
- **Data de expiração:** data e hora de início e de fim da promoção. Pode ser usada uma data e/ou horário futuros, para que a promoção comece a ser aplicada no site. Caso seja configurada desta forma, o status da promoção será exibido das seguintes formas:
    - Agendada: antes da data e horário de início selecionados.
    - Ativa: durante o período programado para a promoção.
    - Inativa: após a data e horário de término selecionados.
- **Usar configurações de recorrência:** ao selecionar esta opção, é permitido realizar configurações de recorrência, por exemplo, dia da semana e horário.
- **Tipo e valor do desconto:** permite selecionar uma das opções abaixo:
    1. **Preço Máximo por Item:** define o preço máximo para cada item da compra.
    2. **Frete grátis:** desconto total sobre o valor do frete.
    3. **Brinde:** desconto total sobre o valor do produto definido como brinde. Ao selecionar essa opção, é possível indicar o SKU (por nome ou ID) que será considerado brinde, escolher se o [multiplicador de brindes](https://help.vtex.com/pt/tutorial/o-que-significa-ativar-o-multiplicador-de-brinde-em-uma-promocao--1gydgkmjEWcoo2CskUwuYK) deve ser ativado e a quantidade máxima de produtos que poderão ser utilizados como brindes na promoção. Para mais informações sobre este tipo de desconto, acesse  [Configurar promoção Compre e ganhe para um SKU específico](https://help.vtex.com/pt/tutorial/configurar-promocao-compre-e-ganhe-para-um-sku-especifico).
- **Informações adicionais (opcional):** permite incluir informações adicionais a promoção composto de um nome e valor.
- **Destaque nos produtos:** insere uma tag com o nome da promoção. Utilizada na vitrine e na página do produto. Essa flag só será inserida caso use o controle correto de exibição de promoção no template. <vtex.cmc:discountHightLight>.

![Dados gerais da promoção](https://images.ctfassets.net/alneenqid6w5/4s7Zxlvv0aIThx2WW2JMO3/131b38791a109e9629dcbfd9b203e80f/Dados_gerais_da_promo__o-PT.png)

## Restringir esta promoção a produtos dos sellers

Nesta seção, é possível definir para quais sellers a promoção será aplicada. Você pode determinar quais sellers serão incluídos ou excluídos do desconto.

- Iguais a: selecione os nomes dos sellers desejados para incluí-los.
- Diferentes de: selecione os nomes dos sellers desejados para excluí-los.

Para que a promoção seja válida para todos os sellers, deixe a seleção vazia.

>⚠️ Não é possível selecionar diretamente um seller white label. Para incluir um seller white na promoção, existem duas opções:1. Restringir os sellers à loja principal. Essa restrição adiciona todos os sellers white label da sua loja à promoção.2. Deixar a seleção vazia, incluindo todos os sellers. Aqui, todos os tipos de sellers - white label ou não - serão adicionados à promoção.

![Restringir esta promoção a produtos dos sellers](//images.ctfassets.net/alneenqid6w5/3Up0CJMzHHY9rZO0LLRXuw/cf6fdde6e939077f04001cb3e76f02b5/Restringir_esta_promo__o_a_produtos_dos_sellers.png)

## Política comercial

Esta seção estabelece as políticas comerciais válidas para a promoção. Você pode incluir ou excluir políticas comerciais do desconto.

- **Iguais a:** selecione as políticas comerciais desejadas incluí-las.
- **Diferentes de:** selecione as políticas comerciais desejadas excluí-las.
- **Fornecido por mim (Minha loja):** seleção de políticas comerciais com produtos da sua loja. Pode ser selecionada mais de uma política comercial.
- **Entregue por mim (Lojas de terceiros):** seleção de políticas comerciais em que seus produtos estão de lojas de terceiros. Pode ser selecionada mais de uma política comercial.

Para que a promoção seja válida para todas as políticas comerciais, deixe a seleção vazia.

![Política comercial-PT](//images.ctfassets.net/alneenqid6w5/1EUrXEMs0tyZ6J1ulXco9i/8810800a350cb0b9688d296e3f985fef/Politica_comerical-PT.png)

# 2. Compre e Ganhe

Esta seção define as coleções, SKUs e quantidade mínima que devem ser preenchidas.

- **Coleções**: digite o nome de uma ou mais coleções de produtos que deseja oferecer esse tipo de desconto. A promoção será aplicada somente aos produtos que estejam nas coleções cadastradas nesse campo.
- **SKUs**: permite inserir o nome ou ID dos SKUs nos quais deseja que o desconto seja aplicado. É possível realizar a  importação de uma lista de SKUs, que deve estar salvo em um arquivo de texto (**.txt**) com cada ID descrito em uma linha diferente.
- **Quantidade mínima**: permite definir a quantidade mínima de produtos que devem ser inseridos no carrinho, para que o desconto seja concedido. Esse campo é de preenchimento obrigatório.

>⚠️ A promoção não será criada caso os campos de Coleções ou SKUs não estejam preenchidos.

>⚠️ Uma promoção Compre e Ganhe pode ser criada com o máximo de 100 SKUs diferentes ao mesmo tempo.

![Compre e Ganhe](//images.ctfassets.net/alneenqid6w5/27rGDqH0dMTcgA8m7cWs27/e818e8a1252f1b46032be2d043fa62cb/Compre_e_Ganhe.png)

# 3. Quais condições para a promoção ser válida?

Nesta seção, detalharemos as condições em que você deve aplicar para que uma promoção seja considerada válida.

- **Usar BIN de restrição:** permite ativar ou desativar a restrição do BIN, limitando quais cartões de créditos poderão ser utilizados na promoção criada. É possível realizar a importação de uma lista de BINs, que deve estar salvo em um arquivo de texto (.txt) com cada BIN descrito em uma linha diferente.
- **Cluster de Clientes:** permite ativar ou desativar a utilização do cluster de clientes. Quando ativado, é possível escolher um cluster de cliente criado por meio do [Master Data](https://help.vtex.com/pt/tutorial/como-criar-um-cluster-de-clientes).
- **Tipo de frete:** permite escolher se a promoção será aplicada em um ou mais tipos de fretes selecionados**.**  Quando ativado, escolha um tipo de frete, e quando desativado, você terá a opção de escolher aplicar o desconto no frete mais barato.
- **Meio de pagamento:** permite escolher se a promoção será aplicada em um ou mais tipos de meios de pagamento selecionados.
- **Utm_source:** o desconto será concedido caso a navegação seja realizada com a utm_source com o valor cadastrado.
- **Utm_campaign:** o desconto será concedido caso a navegação seja realizada com a utm_campaign com o valor cadastrado.

![Quais as condições para a promoção ser válida?](//images.ctfassets.net/alneenqid6w5/4zOT1bHe70Z1wbN2wQjCXD/dfad1e2b79fbcc2381cb4474d2674ad6/Quais_as_condi__es_para_a_promo__o_ser_v_lida.png)

# 4. Restrições e Limitações de uso

Nesta seção você encontrará informações importantes sobre quais condições e restrições se aplicam à promoção.

- **Quantas vezes essa promoção pode ser aplicada na sua loja:** permite restringir a aplicação da promoção na loja por um determinado número de vezes ou utilizá-la de forma ilimitada.
- **Quantas vezes essa promoção pode ser aplicada na sua loja por clientes:** permite restringir a aplicação da promoção na loja a cada cliente por um determinado número de vezes ou utilizá-la de forma ilimitada.
- **Somente para itens iguais:** Se esta opção estiver habilitada, a promoção é aplicada somente se a quantidade mínima de itens (cadastrados anteriormente) for atingida utilizando o mesmo SKU no carrinho. Caso a opção esteja desabilitada, a promoção será aplicada mesmo quando a quantidade mínima de itens for adicionada no carrinho, independentemente dos SKUs serem diferentes ou iguais.
- **Permitir acumular promoções:** permite que essa promoção possa ser aplicada no carrinho em conjunto com outras promoções que ofereçam o mesmo tipo de desconto.

![Restrições e limitações de uso](//images.ctfassets.net/alneenqid6w5/71kLc3PWSLecGA49Iytuyd/5d83ca212086a91d2f672e520e69e7e8/Restri__es_e_limita__es_de_uso.png)
