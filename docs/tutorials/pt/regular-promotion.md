---
title: 'Promoção Regular'
id: tutorials_327
status: CHANGED
createdAt: 2017-04-27T22:07:59.690Z
updatedAt: 2022-12-08T19:33:36.098Z
publishedAt: 2022-08-23T19:50:18.784Z
firstPublishedAt: 2017-04-27T23:03:15.647Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: promocao-regular
locale: pt
legacySlug: promocao-regular
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

Na VTEX, é possível [criar vários tipos de promoção](https://help.vtex.com/pt/tutorial/como-criar-promocoes--tutorials_320#como-criar-promocoes) para cenários diferentes, porém o mais utilizado é a Promoção Regular. Esse tipo de promoção permite que sua loja ofereça descontos de forma poderosa e flexível, combinando múltiplas condições, restrições e benefícios. 

Neste artigo, detalhamos o funcionamento de cada campo durante as etapas de configuração de uma Promoção Regular listadas abaixo.

1. [Quais os dados gerais desta promoção?](#1-quais-os-dados-gerais-desta-promocao)
    - [Restringir esta promoção a produtos dos sellers](#restringir-esta-promocao-a-produtos-dos-sellers)
    - [Política Comercial](#politica-comercial)
2. [Em quais itens esta promoção será aplicada?](#2-em-quais-itens-esta-promocao-sera-aplicada)
3. [Quais as condições para a promoção ser válida?](#3-quais-as-condicoes-para-a-promocao-ser-valida)
4. [Restrições e limitações de uso](#4-restricoes-e-limitacoes-de-uso)

Para entender como funciona a implementação das promoções, leia nosso artigo de [Exemplos de Promoção](https://help.vtex.com/pt/tutorial/promotion-examples--5A8UTc7knvAscxo7e7rMFD?&utm_source=autocomplete#).

## 1. Quais os dados gerais desta promoção?

Nesta seção, você deve configurar as informações gerais da sua promoção. Os campos **Nome**, **Validade** e **Qual o tipo e valor do desconto** são de preenchimento obrigatório.

- **Nome**: nome da promoção.
- **Status**: opção que define se a promoção está ativa ou inativa.
- **Descrição**: descrição interna da promoção. O objetivo desse campo é que seja usado para comunicação interna na sua loja, a fim de deixar claro se a promoção é devido à alguma campanha, queima de estoque, etc.
- **Validade**: data e hora de início e de fim da promoção. Pode ser usada uma data e horário futuros, para que a promoção comece a ser aplicada no site. Caso seja configurada dessa forma, a promoção terá o status de agendada até que a data e horário sejam atingidos. Enquanto a promoção estiver válida, esta terá o status de ativa, e ao término da data e hora definidos o status será alterado para inativo automaticamente.
- **Usar configurações de recorrência**: essa opção é do tipo caixa de seleção, que quando marcada disponibiliza sete outras caixas de seleção, para que sejam selecionados os dias da semana e as horas do dia em que a promoção será aplicada. Se deseja que a promoção seja aplicada em qualquer dia da semana, não selecione essa opção.
- **Qual o tipo e valor do desconto?**: seleção que define o tipo e valor do desconto que será aplicado na promoção. Veja as opções de desconto a seguir:

  - **Nominal**: desconto que será concedido ao total do carrinho.
  - **Frete nominal**: desconto que será concedido ao valor do frete.
  - **Percentual**: percentual de desconto que será concedido ao valor do produto.
  - **Preço Máximo por Item**: o preço máximo para cada item da compra será o preço configurado acima.
  - **Frete percentual**: percentual de desconto que será concedido ao valor do frete. 
  - **Frete máximo**: valor máximo que o frete poderá assumir. 
  - **Frete grátis**: desconto total sobre o valor do frete.
  - **Brinde**: desconto total sobre o valor do produto definido como brinde. Você pode selecionar um ou mais SKUs como brinde ou mais de uma unidade do mesmo SKU. Para definir mais de um brinde, selecione a opção **Ativar multiplicador de brindes** e defina a quantidade desejada. Saiba mais sobre essa opção neste [artigo](https://help.vtex.com/pt/tutorial/o-que-significa-ativar-o-multiplicador-de-brinde-em-uma-promocao--1gydgkmjEWcoo2CskUwuYK#).
  <div class = "alert alert-info">
  <p>O produto Brinde também precisa ter um preço cadastrado, mesmo sendo oferecido gratuitamente ao cliente.</p>
 </div>

  - **Desconto nominal baseado em fórmula**: o desconto é calculado com base na fórmula que você pode criar usando como variáveis a soma dos preços de produtos, o frete e a quantidade de itens. Observe que o frete considerado pela fórmula será o menor disponível para o pedido, independentemente da seleção do cliente. O separador decimal deve ser sempre o ponto. Exemplo: se o desconto for 30% do valor total do produto + valor do frete, a fórmula deve ser `(total + freight) * 0.3`. Para obter mais informações sobre a fórmula, leia nossa [documentação](https://help.vtex.com/pt/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV).
  - **Valor fidelidade nominal**: crédito que será adicionado no programa de fidelidade da loja. Leia [Promoção regular com valor fidelidade](https://help.vtex.com/pt/tutorial/promocao-regular-com-valor-fidelidade--3FCip23ZtvG0sDt0rVGVmR) para mais informações.
  - **Valor fidelidade percentual**: crédito percentual que será adicionado no programa de fidelidade da loja. Leia [Promoção regular com valor fidelidade](https://help.vtex.com/pt/tutorial/promocao-regular-com-valor-fidelidade--3FCip23ZtvG0sDt0rVGVmR) para mais informações.
  - **Tabela de preços promocionais**: uma tabela de preços pode ser utilizada como promoção. O preço promocional de cada SKU será o preço correspondente na tabela de preços selecionada.

- **Destaque nos produtos**: insere uma flag com o nome da promoção, utilizada na vitrine e na página de produto. Essa flag só será inserida caso use o controle correto de exibição de promoção no template: `<vtex.cmc:discountHightLight/>`

<div class = "alert alert-info">
  <p><b>OBS:</b> Promoções do tipo <b>Nominal</b> só serão apresentadas no carrinho, e não na vitrine ou na página de produto.</p>
</div>

### Restringir esta promoção a produtos dos sellers

Nesta seção, é possível definir para quais sellers a promoção será aplicada. Você pode determinar quais sellers serão incluídos ou excluídos do desconto. 

- **Iguais a:** selecione os nomes dos sellers desejados para inclui-los.
- **Diferentes de:** selecione os nomes dos sellers desejados para exclui-los.

Para que a promoção seja válida para todos os sellers, deixe a seleção vazia.

<div class = "alert alert-warning">
  <p><b>Atenção:</b> não é possível selecionar diretamente um seller white label. Para incluir um seller white na promoção, existem duas opções:</p><ol>1. Restringir os sellers à loja principal. Essa restrição adiciona todos os sellers white label da sua loja à promoção.</ol><ol>2. Deixar a seleção vazia, incluindo todos os sellers. Aqui, todos os tipos de sellers - white label ou não - serão adicionados à promoção.</ol>
</div>

### Política Comercial

Esta seção estabelece as políticas comerciais válidas para a promoção. Você pode incluir ou excluir políticas comerciais do desconto.

- **Iguais a:** selecione as políticas comerciais desejadas inclui-las.
- **Diferentes de:** selecione as políticas comerciais desejadas exclui-las.
- **Fornecido por mim (Minha loja):** seleção de políticas comerciais com produtos da sua loja. Pode ser selecionada mais de uma política comercial.
- **Entregue por mim (Lojas de terceiros):** seleção de políticas comerciais em que seus produtos estão de lojas de terceiros. Pode ser selecionada mais de uma política comercial.

Para que a promoção seja válida para todas as políticas comerciais, deixe a seleção vazia.

## 2. Em quais itens esta promoção será aplicada?

Nesta seção, você precisa escolher se a promoção será aplicada a todos os produtos cadastrados na sua loja ou apenas a produtos específicos, conforme ilustrado abaixo.

![promocoes-restricao-pt](https://images.ctfassets.net/alneenqid6w5/55xxIduLJDJrwQMuk4OgRu/359155bac11f7ac88a4d12a041cf8b96/image.png)

Caso deseje aplicar a promoção a todo o seu catálogo, selecione a opção **Aplicar a todos os produtos**.

Para limitar a sua promoção a produtos específicos, selecione **Aplicar aos seguintes produtos **e, em seguida, preencha os critérios de seleção referentes a **Categorias**, **Marcas**, **Coleções **, **Produtos** e **SKUs**.

Você pode incluir ou excluir **Categorias**, **Marcas**, **Coleções**, **Produtos** e **SKUs** da promoção, utilizando os critérios **Iguais a** ou **Diferentes de**.

Veja um exemplo de preenchimento abaixo. Nesse caso, participam da promoção todos os produtos da categoria **Vestido** cuja marca é **Farm**, com a exceção do produto **Vestido Rosas**.

![exemplo-pt](https://images.ctfassets.net/alneenqid6w5/69J3NHBR8yLbbn04SSc5er/6c40e996aece6e87b82b0bc71a50f3e5/image.png)

Nos campos **Produtos** e **SKUs**, existe a opção de fazer o upload de um arquivo **.txt** com um ID de produto ou de SKU por linha, em vez de selecionar um produto ou um SKU de cada vez. Para isso, você precisa clicar em **Escolher arquivo** e selecionar o arquivo **.txt** desejado.

<div class = "alert alert-warning">
<p>Se você selecionar <strong>Aplicar aos seguintes produtos</strong> e não preencher nenhum dos critérios de seleção, a promoção não será cadastrada e a mensagem <strong>Defina os produtos elegíveis ou aplique a todos os produtos</strong> será exibida. Nesse caso, você deve retornar e preencher os critérios de seleção ou optar por <strong>Aplicar a todos os produtos</strong>.</p>
</div>

Para serem válidos na promoção, os produtos precisam atender a todas as condições cadastradas nesta seção.

## 3. Quais as condições para a promoção ser válida?

O pedido do cliente deve atender às condições cadastradas nesta seção para ser válido na promoção.

- **Valor mínimo e máximo do pedido:** a promoção será aplicada levando em conta o valor "bruto" do carrinho, sem considerar demais promoções ou frete.
- **Valor acumulado em compras:** o desconto será concedido caso o total de todas as compras já realizadas pelo cliente, esteja atendendo ao valor preenchido.
- **Valor do item entre:** o desconto será concedido caso o valor do item estiver atendendo ao intervalo de valores preenchidos.
- **Preço "de" e "por" são iguais** ou **Preço "de" e "por" são diferentes:**  se refere aos valores do cadastro do produto. Somente uma opção pode ser selecionada.
- **Restrição de Promoção por BIN:** o desconto será concedido caso o BIN do cartão esteja entre os número preenchidos preenchidos.
- **Marketing Tags:** campo utilizado para restringir a ativação da promoção caso a compra seja realizada pelo [módulo de Assinaturas da VTEX](https://help.vtex.com/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453#). 
- **Afiliados:** identificador de pedidos do marketplace. O desconto será aplicado nos afiliados selecionados. Veja o artigo [O que é afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0?locale=pt) para mais informações.
- **Cluster de clientes:** o desconto será concedido caso o cliente esteja cadastrado no cluster selecionado. É importante destacar que o nome do cluster deve ser exatamente como cadastrado, qualquer erro de grafia impedirá o funcionamento correto da configuração.
- **Países de entrega**: o desconto será concedido aos países selecionados neste campo.
- **O CEP de entrega deve:** o desconto será concedido caso o CEP esteja atendendo à regra configurada.
- **Tipo de frete:** o desconto será concedido caso o tipo de frete escolhido pelo cliente seja o mesmo que o cadastrado na promoção. Esse critério somente será considerado se o efeito da promoção for relativo ao Valor de Frete, ou seja, somente se for um dos seguintes efeitos: Frete percentual, Frete nominal, Frete máximo ou Frete grátis.
- **Aplicar o desconto somente no frete mais barato:** caso você habilite esta opção, o desconto do frete será aplicado somente no menor valor estimado para o frete. Esta opção já aparece habilitada por padrão, mas você pode desabilitá-la se desejar aplicar o desconto a outros tipos de frete. Leia o artigo [Configurar promoções de frete](https://help.vtex.com/pt/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW) para mais informações. Esse critério somente será considerado se o tipo da promoção for relativo ao valor de frete, ou seja, somente se for um dos seguintes tipos: Frete percentual, Frete nominal, Frete máximo ou Frete grátis.
- **Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente**: a promoção será aplicada somente após o cliente efetivamente selecionar a forma de entrega em questão. Enquanto não for selecionada, ela ficará sem o desconto. Esse critério somente será considerado se o tipo da promoção for relativo ao valor de frete, ou seja, somente se for um dos seguintes tipos: Frete percentual, Frete nominal, Frete máximo ou Frete grátis.
- **Meio de pagamento:** o desconto será concedido caso a forma de pagamento selecionada pelo cliente seja a mesma cadastrada na promoção. Esse desconto somente será aplicado na finalização da compra, quando o cliente selecionar a mesma forma de pagamento cadastrada.

  <div class = "alert alert-info">
  <p> Por padrão, você pode cadastrar até 20 meios de pagamento por promoção. Além disso, existe a possibilidade de customização para incluir até 100 meios de pagamento. Caso precise utilizar mais de 20, entre em contato com o <a href="https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</p>
 </div>

- **Número de parcelas**: o desconto será concedido caso o número de parcelas selecionadas pelo cliente estiver no intervalo cadastrado. Esse campo não se aplica para a seleção de boleto. 

<div class = "alert alert-warning">
  <p><b>Atenção</b>: promoções por forma de pagamento e número de parcelas não atendem a pedidos pagos com dois cartões ou vale-compras.</p>
</div>

- **Utm_source:** o desconto será concedido caso a navegação seja realizada com as **utm_source** correspondente a qualquer um dos valores cadastrados. É importante destacar que o cliente pode inserir apenas um **utm_source** no checkout.
- **Utm_campaign:** o desconto será concedido caso a navegação seja realizada com a utm_campaign com o valor cadastrado.
- **Criar cupom a partir das UTMs acima:** cria um cupom a partir das UTMs cadastradas para dar ao cliente acesso à essa promoção sem a necessidade das utms, apenas com o código do cupom.
- **Utmi_cp:** o desconto será concedido caso a navegação seja realizada com a utmi_cp com o valor cadastrado (case sensitive).

<div class = "alert alert-info">
     <p>No campo das UTMs coloque somente o valor que as UTMs terão que assumir para ativar a promoção. Não é necessário colocar <i>?utm_source=</i> dentro do campo.</p>
  </div>

- **Apenas na primeira compra:** o desconto só será concedido na primeira compra do cliente.
- **É um pedido de assinatura**: opção que define que a promoção será aplicada para pedidos de assinatura. Veja as condições a seguir:
  - **Pedido original**: pedidos que geram as assinaturas, mas ainda não fazem parte dos ciclos de assinatura.
  - **Pedidos recorrentes**: pedidos que fazem parte dos ciclos de assinatura.
  - **Filtrar por**: seleção que filtra quais pedidos de assinatura que serão válidos para a promoção.
      - **Frequência**: seleção da frequência dos pedidos por assinatura - semanal, mensal e anual.
      - **Número do ciclo**: seleção dos ciclos da assinatura que serão incluídos à promoção. Essa opção é desbloqueada apenas se **Pedidos recorrentes** for selecionado anteriormente.

- **Aplicar o desconto mesmo se o cliente não estiver logado:** este campo é disponibilizado quando o campo **Apenas na primeira compra** é selecionado. Se este campo é marcado, a promoção será aplicada mesmo que o consumidor não tenha inserido e-mail e senha. Quando desmarcado, a promoção somente será aplicada se o consumidor tiver acessado com e-mail e senha, previamente cadastrados.

## 4. Restrições e limitações de uso

- **Quantas vezes essa promoção será aplicada em sua loja:** limita a quantidade de vezes  em que a promoção será aplicada. Quando a opção **ilimitada** é desmarcada, é disponibilizado um campo para cadastrar a quantidade de vezes que deseja limitar. Uma vez que a promoção já foi criada, essa condição só será aplicada a partir do dia em que foi configurada, não afetando os pedidos realizados anteriormente.
- **Quantas vezes essa promoção será aplicada em sua loja por cliente:** habilita a quantidade cadastrada acima não mais para quantidade de uso total da promoção, e sim para a quantidade de vezes que cada cliente poderá receber a promoção. Caso o campo acima também esteja selecionado, ele terá uma prioridade maior de atuação que este limite.
- **Definir quantidade máxima de itens afetados por carrinho**: define quantos itens do carrinho serão afetados pela promoção. Leia [esse artigo](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy#limite-de-itens-com-promocao-no-carrinho) para saber como configurar o campo.
- **Permitir acumular promoções:** permite que mais de uma promoção, independente do tipo de desconto, seja concedida ao mesmo tempo. Saiba mais sobre [como funciona a concorrência de promoções](https://help.vtex.com/pt/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270#).
- **Permitir acumular com preços manuais:**  permite que a promoção seja aplicada a produtos cujos preços foram manualmente inseridos pelo televendas. Para habilitar a funcionalidade de preços manuais, use o endpoint [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).

