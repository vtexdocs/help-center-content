---
title: 'Criar promoção de campanha'
id: 1ChYXhK2AQGuS6wAqS8Ume
status: PUBLISHED
createdAt: 2018-12-02T18:57:52.792Z
updatedAt: 2023-03-31T14:02:10.258Z
publishedAt: 2023-03-31T14:02:10.258Z
firstPublishedAt: 2018-12-03T16:52:03.595Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6qOjO5gpEs8scQ8OugaEaW
slugEN: campaign-promotion
legacySlug: promocao-de-campanha
locale: pt
subcategoryId: 2cI57eZ3ZiWSeaQs26Gwys
---

A promoção de campanha é sempre atrelada a uma audiência de campanha, ou seja, um público alvo específico. Esse tipo de promoção engloba todas as possibilidades presentes na [Promoção Regular](https://help.vtex.com/pt/tutorial/promocao-regular--tutorials_327) e algumas opções a mais, que são:

- Público alvo específico
- Frete grátis para todos os fretes disponíveis
- Tabela de preços promocionais
- Brinde entregue por seller

Antes de criar uma promoção de campanha, você precisa criar uma audiência de campanha para definir o público alvo da sua promoção. Assim, você seleciona segmentos de clientes elegíveis na promoção, que funcionam como gatilho, a partir de critérios de sua escolha.

Exemplo: se você configurar uma [audiência de campanha](https://help.vtex.com/pt/tutorial/criar-audiencia-de-campanhas--6cnuDZJzIkIeocewAQQK4K) cujo público alvo é de clientes que colocam o produto A no carrinho, na promoção de campanha você pode configurar que esse público vai receber um desconto sobre o produto B.

> ℹ️ Audiências de campanha e suas promoções são válidas apenas para a conta principal da loja. Contas de sellers não apresentam essa opção. Caso sejam criadas em uma conta de sellers, a audiência de campanha ou a promoção de campanha não serão ativadas.

Uma vez definida a [audiência de campanha](https://help.vtex.com/pt/tutorial/criar-audiencia-de-campanhas--6cnuDZJzIkIeocewAQQK4K), acesse o Admin e siga os passos abaixo para criar uma promoção de campanha.

1. No Admin VTEX, acesse *Promoções > Promoções*, ou digite *Promoções* na barra de busca no topo da página.
2. Clique no botão `Criar Promoção`.
3. Clique na opção `Promoção De Campanha`.
4. Preencha os [campos da promoção de campanha](#campos-da-promocao-de-campanha).
5. Clique em `Salvar`.

## Campos da promoção de campanha

O formulário de criação de uma promoção de campanha é dividido nas seções:

1. [Quais os dados gerais desta promoção?](#1-quais-sao-os-dados-gerais-desta-promocao)
  - [Restringir esta promoção a produtos dos sellers](#restringir-esta-promoção-a-produtos-dos-sellers)
  - [Política Comercial](#politica-comercial)
2. [Em quais itens esta promoção será aplicada?](#2-em-quais-itens-esta-promocao-sera-aplicada)
3. [Restrições e limitações de uso](#3-restricoes-e-limitacoes-de-uso)

Veja abaixo a descrição de todos os campos que você precisa preencher para criar uma promoção de campanha, correspondentes a cada seção.

### 1. Quais são os dados gerais desta promoção?

- **Nome:** nome da promoção.
- **Status:** ativa ou desativa a promoção.
- **Descrição:** descrição interna da promoção. Este campo pode ser utilizado para comunicação interna na sua loja, a fim de identificar melhor a promoção. Por exemplo, deixar claro que a promoção é devida à alguma audiência de campanha ou queima de estoque, por exemplo.
- **Validade:** data e horário de início e de fim da promoção. Você pode configurar uma data e horário de início futuros para agendar a promoção, se desejar. Nesse caso, a promoção terá o status **Agendada** até a data e o horário determinados. Enquanto a promoção estiver válida, ela terá o status **Ativa**. Ao término do período definido pela data de fim da promoção, o status será alterado para **Inativo** automaticamente.
- **Usar configurações de recorrência:** habilitar essa opção permite configurar a recorrência da sua promoção de campanha de acordo com as opções abaixo.
  - **Dia da semana:**
    - **Todos os dias da semana:** ao selecionar esta opção, a promoção será válida em todos os dias da semana.
    - **Dias específicos da semana:** ao selecionar esta opção, você pode escolher os dias da semana em que a promoção será válida.
  - **Hora do dia:**
    - **O dia todo:** ao selecionar esta opção, a promoção será válida durante o dia inteiro.
    - **Horários específicos:** ao selecionar esta opção, você pode escolher a hora de início e a hora de fim do período em que a promoção será válida.
- **Audiência de campanhas:** permite selecionar as audiências de campanhas que terão acesso a esta promoção. Para mais informações, leia o artigo [Audiência de campanhas](https://help.vtex.com/pt/tutorial/como-criar-campanhas).
- **Qual o tipo e valor do desconto?:** seleção que define o tipo e valor do desconto que será aplicado na promoção. Veja as opções de desconto a seguir:
  - **Nominal**: desconto que será concedido ao total do carrinho.
  - **Frete nominal**: desconto que será concedido ao valor do frete.
  - **Percentual**: percentual de desconto que será concedido ao valor do produto.
  - **Preço Máximo por Item**: o preço máximo para cada item da compra será o preço configurado acima.
  - **Frete percentual**: percentual de desconto que será concedido ao valor do frete. 
  - **Frete máximo**: valor máximo que o frete poderá assumir. 
  - **Frete grátis**: desconto total sobre o valor do frete.
  - **Brinde**: desconto total sobre o valor do produto definido como brinde. Você pode selecionar um ou mais SKUs como brinde ou mais de uma unidade do mesmo SKU. Para definir mais de um brinde, selecione a opção **Ativar multiplicador de brindes** e defina a quantidade desejada. Saiba mais sobre essa opção neste [artigo](https://help.vtex.com/pt/tutorial/o-que-significa-ativar-o-multiplicador-de-brinde-em-uma-promocao--1gydgkmjEWcoo2CskUwuYK#).

  > ℹ️ O produto **Brinde** também precisa ter um preço cadastrado, mesmo sendo dado de graça ao cliente.

  - **Desconto nominal baseado em fórmula**: desconto é calculado com a soma dos preços de produtos (total), com o frete (freight) e com o percentual de desconto desejado. É importante destacar que o frete implementado na fórmula será o menor disponível para o pedido, independente da seleção do cliente. O separador decimal deve ser sempre o ponto. Exemplo: o desconto será de 30% do valor do produto + valor do frete. Logo, a fórmula deve ser preenchida da seguinte maneira: `((total + freight) * 0.3)`.
  - **Valor fidelidade nominal**: crédito que será adicionado no programa de fidelidade da loja. 
  - **Valor fidelidade percentual**: crédito percentual que será adicionado no programa de fidelidade da loja. 
  - **Tabela de preços promocionais**: permite selecionar uma tabela de preços para ser utilizada como promoção. O preço promocional de cada SKU será o preço correspondente na tabela de preços selecionada. Você pode configurar no máximo cinco promoções de campanha simultâneas utilizando tabelas de preços promocionais na sua loja. O preço da tabela de preços será aplicado apenas se seu valor for menor que o preço configurado na política comercial utilizada na promoção. Além disso, as promoções de tabelas de preço concorrem com todas as outras promoções relativas ao preço, ou seja, caso exista mais de uma promoção de preço ativa e aplicável aos produtos em questão, o menor preço será aplicado. Saiba mais sobre concorrência de promoções no nosso artigo [Como funciona a concorrência de promoções](https://help.vtex.com/pt/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270).

Se você optar por um tipo de desconto referente ao frete (Frete percentual, Frete nominal, Frete máximo ou Frete grátis) ao criar a promoção de campanha, você também terá acesso às configurações abaixo.

- **Tipo de frete:** o desconto será concedido caso o tipo de frete escolhido pelo cliente seja o mesmo que o cadastrado na promoção. Esse critério somente será considerado se o tipo da promoção for relativo ao valor de frete, ou seja, somente se for um dos seguintes tipos: Frete percentual, Frete nominal, Frete máximo ou Frete grátis.
- **Aplicar o desconto somente no frete mais barato:** caso você habilite esta opção, o desconto do frete será aplicado somente no menor valor estimado para o frete. Esta opção já aparece habilitada por padrão, mas você pode desabilitá-la se desejar aplicar o desconto a outros tipos de frete. Leia o artigo [Configurar promoções de frete](https://help.vtex.com/pt/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW) para mais informações. Esse critério somente será considerado se o efeito da promoção for relativo ao valor de frete, ou seja, somente se for um dos seguintes efeitos: Frete percentual, Frete nominal, Frete máximo ou Frete grátis.
- **Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente:** a promoção será aplicada somente após o cliente efetivamente selecionar a forma de entrega em questão. Enquanto não for selecionada, ela ficará sem o desconto. Esse critério somente será considerado se o efeito da promoção for relativo ao valor de frete, ou seja, somente se for um dos seguintes efeitos: Frete percentual, Frete nominal, Frete máximo ou Frete grátis.
- **Aplicar para todos os fretes disponíveis:** caso você habilite esta opção, o desconto será aplicado a todas as formas de entregas disponíveis.

- **Destaque nos produtos**: permite definir se a sua loja vai exibir uma faixa de destaque informando sobre a promoção. Veja as opções a seguir:
  - **Sem destaque:** quando selecionada, esta opção não exibe a promoção na vitrine nem na página dos produtos contemplados pela promoção.
  - **Com destaque:** quando selecionada, esta opção habilita a inserção de uma faixa de destaque com o nome da promoção na vitrine e na página dos produtos contemplados. Para que a faixa seja inserida corretamente, é necessário utilizar o controle de exibição de promoção no template da loja: `<vtex.cmc:discountHightLight/>`. Para mais informações, acesse o nosso artigo [Controles de template](https://help.vtex.com/pt/tutorial/lista-de-controles-para-templates--tutorials_563).

#### Restringir esta promoção a produtos dos sellers

Nesta seção, é possível definir para quais sellers a promoção será aplicada. Você pode determinar quais sellers serão incluídos ou excluídos do desconto. 

- **Iguais a:** selecione os nomes dos sellers desejados para inclui-los.
- **Diferentes de:** selecione os nomes dos sellers desejados para exclui-los.

Para que a promoção seja válida para todos os sellers, deixe a seleção vazia.

> ⚠️ **Atenção:** não é possível selecionar diretamente um seller white label. Para incluir um seller white na promoção, existem duas opções:<ol>1. Restringir os sellers à loja principal. Essa restrição adiciona todos os sellers white label da sua loja à promoção.</ol><ol>2. Deixar a seleção vazia, incluindo todos os sellers. Aqui, todos os tipos de sellers - white label ou não - serão adicionados à promoção.</ol>

#### Política Comercial

Esta seção estabelece as políticas comerciais válidas para a promoção. Você pode incluir ou excluir políticas comerciais do desconto.

- **Iguais a:** selecione as políticas comerciais desejadas inclui-las.
- **Diferentes de:** selecione as políticas comerciais desejadas exclui-las.
- **Fornecido por mim (Minha loja):** seleção de políticas comerciais com produtos da sua loja. Pode ser selecionada mais de uma política comercial.
- **Entregue por mim (Lojas de terceiros):** seleção de políticas comerciais em que seus produtos estão de lojas de terceiros. Pode ser selecionada mais de uma política comercial.

Para que a promoção seja válida para todas as políticas comerciais, deixe a seleção vazia.

### 2. Em quais itens esta promoção será aplicada?

Nesta seção, você precisa escolher se a promoção será aplicada a todos os produtos cadastrados na sua loja ou apenas a produtos específicos, conforme ilustrado abaixo.

![promocoes-restricao-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/audi%C3%AAncia-de-campanhas/promocao-de-campanha_1.png)

Caso deseje aplicar a promoção a todo o seu catálogo, selecione a opção **Aplicar a todos os produtos**.

Para limitar a sua promoção a produtos específicos, selecione **Aplicar aos seguintes produtos **e, em seguida, preencha os critérios de seleção referentes a **Categorias**, **Marcas**, **Coleções **, **Produtos** e **SKUs**.

Você pode incluir ou excluir **Categorias**, **Marcas**, **Coleções**, **Produtos** e **SKUs** da promoção, utilizando os critérios **Iguais a** ou **Diferentes de**.

Veja um exemplo de preenchimento abaixo. Nesse caso, participam da promoção todos os produtos da categoria **Home Appliances** cuja marca é **Brastemp**, com exceção do produto **Refrigerator 100**.

![exemplo-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/audi%C3%AAncia-de-campanhas/promocao-de-campanha_2.png)

Nos campos **Produtos** e **SKUs**, existe a opção de fazer o upload de um arquivo **.txt** com um ID de produto ou de SKU por linha, em vez de selecionar um produto ou um SKU de cada vez. Para isso, você precisa clicar em **Escolher arquivo** e selecionar o arquivo **.txt** desejado.

> ⚠️ Se você selecionar **Aplicar aos seguintes produtos** e não preencher nenhum dos critérios de seleção, a promoção não será cadastrada e a mensagem **Defina os produtos elegíveis ou aplique a todos os produtos** será exibida. Nesse caso, você deve retornar e preencher os critérios de seleção ou optar por **Aplicar a todos os produtos**.

Para serem válidos na promoção, os produtos precisam atender a todas as condições cadastradas nesta seção.

### 3. Restrições e limitações de uso

- **Quantas vezes essa promoção será aplicada em sua loja:** limita a quantidade de vezes em que a promoção será aplicada. Quando você desmarca a opção **ilimitado**, você precisa incluir a quantidade limite desejada.
- **Quantas vezes essa promoção será aplicada em sua loja por cliente:** limita a quantidade de vezes em que cada cliente poderá utilizar a promoção. Quando você desmarca a opção **ilimitado**, você precisa incluir a quantidade limite desejada.
- **Definir quantidade máxima de itens afetados por carrinho:** limita a quantos itens do carrinho a promoção pode ser aplicada. Quando você desmarca a opção **ilimitado**, você precisa incluir a quantidade limite desejada. Exemplo: se você configurar a quantidade limite de 5 itens, mesmo que o seu cliente coloque 10 itens elegíveis para a promoção no carrinho, apenas 5 itens serão beneficiados.
- **Permitir acumular promoções:** permite que mais de uma promoção com o mesmo tipo de desconto seja concedida ao mesmo tempo.
- **Permitir acumular com preços manuais:** permite que a promoção seja aplicada a produtos cujos preços foram manualmente inseridos pelo televendas. Para utilizar esta opção, você precisa permitir a [inserção de preços manuais](https://help.vtex.com/pt/tutorial/funcionalidades-de-televendas--UqhiccIRIK2KD0OqkzJaS#inserir-preco-manual) na sua loja.

#### **SAIBA MAIS**

 * [Como criar Promoções](https://help.vtex.com/pt/tutorial/como-criar-promocoes)
 * [Como criar Audiências de campanhas](https://help.vtex.com/pt/tutorial/como-criar-campanhas)

