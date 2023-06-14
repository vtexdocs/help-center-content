---
title: Promoções (Beta)
id: 4jUEX3NcdMtxUPHey1nInn
status: DRAFT
createdAt: 2021-02-23T21:24:12.421Z
updatedAt: 2022-05-16T12:00:47.348Z
publishedAt: 
firstPublishedAt: 2021-02-25T12:26:08.175Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: promocoes-beta
legacySlug: promocoes-beta
subcategory: 6iTRZiMeCGXYiO2ckABFZi
---

<div class="alert alert-danger">
<p>Esta funcionalidade será descontinuada no dia 16 de maio de 2022. Em caso de dúvidas, entre em contato com <a href= "https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</p>
</div>

A plataforma VTEX disponibiliza uma forma otimizada e prática de cadastrar diversos tipos de promoção que se adequam a diferentes cenários. Por meio de uma interface centralizada para gerenciamento de promoções, sua loja pode oferecer mais benefícios focados na atração e fidelização de clientes.

O módulo Beta de __Promoções__ apresenta flexibilidade na criação de cenários de promoção com condições específicas para cada contexto. Por exemplo, você pode definir descontos sobre preço e frete ou oferecer brindes para os seus clientes através de promoções agendadas e/ou segmentadas. 

O módulo de __Promoções__ está disponível no Admin através do menu __Promoções e Taxas__ > __Promoções__.

## Lista de promoções

A página inicial apresenta a lista de promoções em uma grade que permite visualizar facilmente informações básicas a respeito da promoção (nome, efeito, itens afetados, período de validade e status da promoção). Com apenas um clique, você pode:

- Ativar ou desativar promoções através do botão <i class="fas fa-toggle-on"></i>;
- Duplicar ou arquivar promoções através do botão <i class="fas fa-ellipsis-v"></i>
- Gerenciar as condições da promoção clicando em qualquer parte da linha do grid (veja [Nova promoção](#nova-promocao) para detalhamento das condições da promoção).

![promobeta1 acoes lista promocoes PT](//images.ctfassets.net/alneenqid6w5/1iLvxFtAqM5pFOz6enx8KU/75ce08a03318ebe1cf47d3a01b5b7c62/promobeta1_acoes_lista_promocoes_PT.gif)

A lista de promoções pode ser filtrada e ordenada conforme a sua necessidade. A filtragem da lista pode ser feita por *Efeito*, *Estado*, *Data início*, *Data fim* ou *Política comercial*.

![promobeta2 filtros lista promocoes PT](//images.ctfassets.net/alneenqid6w5/4UBGUJC4RTEA9alSeHmJlh/8bbb1eefeee7a0f8b4c6c8746249481f/promobeta2_filtros_lista_promocoes_PT.gif)

A ordenação pode ser crescente ou decrescente a partir das informações básicas da promoção, bastando clicar sobre o título.

![promobeta3 ordenacao lista promocoes PT](//images.ctfassets.net/alneenqid6w5/60Z7afuYC3PqwTEPCVLVYd/1c13ddd465a09fe39561b685a1dbe35f/promobeta3_ordenacao_lista_promocoes_PT.gif)

## Nova promoção
Na tela inicial, clique no botão **NOVA PROMOÇÃO** para acessar a página de criação de promoções, na qual você vai preencher uma variedade de campos para configurar as condições desejadas para a sua promoção.

![promobeta4 botao novapromocao PT](//images.ctfassets.net/alneenqid6w5/4Zp0NocPVWeIW44Ky8pWqo/e336ee376b77685d357999e5bd6430d2/promobeta4_botao_novapromocao_PT.png)

As condições da nova promoção, bem como os campos da tela, estão separados por grupos, sendo eles:

- [Informações gerais](#informacoes-gerais)
- [Agendamento](#agendamento)
- [Acumulação e concorrência](#acumulacao-e-concorrencia)
- [Efeito](#efeito)
- [Condições](#condicoes)
- [Cupons](#cupons)
- [Restrições](#restricoes)
- [Origem](#origem)
- [Aparência](#aparencia)

A combinação de diferentes seleções de condições permite criar múltiplos cenários com contextos específicos. Você pode, por exemplo, definir descontos sobre o frete para uma compra com um número determinado de produtos ou oferecer brindes a clientes específicos em determinados dias da semana. As opções são diversas, basta preencher os campos de acordo com sua necessidade.

### Informações gerais
- __Status__: opção que define se a promoção está ativa ou inativa.
- __Nome__: nome da promoção.
- __Descrição__: descrição interna da promoção. O objetivo desse campo é que seja usado para comunicação interna da loja, a fim de deixar claro se a promoção é devido a alguma campanha, queima de estoque, etc.

### Agendamento
- __Data e hora de início__: data e hora que determinam o início da promoção. Esse campo pode ser configurado com uma data e um horário futuros. Caso seja definida dessa forma, a promoção terá o status de agendada até que a data e o horário sejam atingidos.
- __Configurar data de expiração__: opção que ativa a configuração de uma data de expiração da promoção.
- __Data e hora de expiração__: data e hora que determinam o fim da promoção. Esse campo pode ser configurado com uma data e um horário posteriores à data e hora de início. Enquanto a promoção estiver válida, ela terá o status de ativa. Ao atingir a data e o horário de expiração, o status será alterado para “Finalizada” automaticamente.
- __Configurações de recorrência__: configurações adicionais de recorrência da promoção.
  - __Dias da semana__: define quais dias da semana são válidos para a promoção. Caso decida por dias específicos, é preciso selecioná-los.
  - __Horas do dia__: define quais horas do dia são válidas para a promoção. Caso decida por horários específicos, é preciso selecionar um intervalo de horas.

### Acumulação e concorrência
- __Acumular com outras promoções__: opção que permite que mais de uma promoção com o mesmo tipo de desconto seja concedida [ao mesmo tempo](https://help.vtex.com/pt/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270).
- __Acumular com preços manuais__: opção que permite que a promoção seja aplicada a produtos cujos preços foram manualmente inseridos pelo televendas. Para a correta usabilidade dessa opção, é necessária uma configuração prévia da loja para permitir a inserção dos preços manuais.

### Efeito
Nesta seção, você deve clicar no botão que contém o efeito desejado da promoção. Os efeitos disponíveis são: __Preço__, __Brinde__ ou __Frete__. Após a seleção do botão, os campos ficam visíveis.

#### Preço
Este efeito permite configurar um desconto no preço do carrinho ou de determinados produtos.

- __Tipo de desconto__
  - __Nominal__: desconto que será concedido no total do carrinho. Exemplo: desconto de R$20,00 em carrinhos que somam mais de R$150,00.
  - __Percentual__: percentual de desconto que será concedido ao valor do produto. Exemplo: desconto de 10% para produtos do Departamento Infantil.
  - __Tabela de Preços__: desconto aplicado pelo preço cadastrado na Tabela de Preços selecionada.
- __Itens afetados__
  - __Todo o catálogo__: essa opção indica se todos os produtos do catálogo são afetados pela promoção.
  - __Produtos específicos__: essa opção indica a quais produtos do catálogo a promoção se aplica. Você pode selecionar entre __Marca__, __Categoria__, __Coleção__, __Produto__, __Seller__ e __SKU do Produto__ para criar condições e definir se determinado grupo de produtos será afetado ou excluído da promoção. Exemplo: uma loja de roupas pode criar uma promoção de verão com todos os produtos no catálogo, exceto os que fazem parte da coleção de inverno.

#### Brinde
Este efeito gera um desconto total sobre o valor do produto definido como brinde. Exemplo: Ao comprar o shampoo, ganhe uma necessaire de brinde.

- __SKUs__: opção que permite selecionar o SKU que será o brinde da compra.
- __Quantidade máxima por compra__: opção que permite selecionar a quantidade máxima de brindes que uma compra pode receber.

<div class="alert alert-warning">
<p>O produto <b>Brinde</b> também precisa ter um preço cadastrado, mesmo que seja dado de graça ao cliente.</p>
</div>

#### Frete

- __Tipo de desconto__
  - __Nominal__: desconto que será concedido ao valor do frete. Exemplo: desconto de R$10,00 no valor do frete.
  - __Percentual__: percentual de desconto que será concedido ao valor do frete. Exemplo: desconto de 90% no valor do frete para a região sudeste.
  - __Valor máximo__: valor máximo que o frete poderá assumir. Caso o frete calculado seja mais barato que o valor máximo, será cobrado o frete de menor preço. Exemplo: se o lojista definir o frete máximo de R$20,00 na promoção e o frete calculado para determinado pedido for R$10,00, será cobrado somente o valor de R$10,00. Já se o frete calculado para o pedido for R$30,00, será cobrado apenas o valor máximo de R$20,00 de frete.
- __Itens afetados__
  - __Todo o catálogo__: essa opção indica se todos os produtos do catálogo são afetados pela promoção.
  - __Produtos específicos__: essa opção indica quais produtos do catálogo são afetados pela promoção. Para isso, você deve selecionar as condições dos produtos que vão fazer parte da promoção. É possível selecionar entre __Marca__, __Categoria__, __Coleção__, __Produto__, __Seller__ e __SKU do Produto__ para criar condições.

### Condições

- __Todos os clientes:__ essa opção indica que a promoção será aplicada a todos os clientes.
- __Clientes específicos:__ essa opção indica quais clientes serão afetados pela promoção. Para isso, você deve selecionar as condições dos clientes que vão fazer parte da promoção. É possível selecionar uma ou mais das seguintes condições:

  - __Produto no carrinho.__
  - __País de entrega.__
  - __BIN do cartão de crédito.__
  - __É primeira compra.__
  - __Número de parcelas.__
  - __Forma de pagamento.__
  - __Método do envio.__
  - __Faixa de preço total.__
  - __UTM Campaign.__
  - __UTM Source.__
  - __Faixa de código postal.__

<div class="alert alert-info">
<p>Caso você queira vincular um <a href= "https://help.vtex.com/pt/tutorial/como-criar-cupom--tutorials_319?&utm_source=autocomplete">cupom já existente</a> à nova promoção, é necessário selecionar as opções de UTM Campaign e UTM Source e informar os códigos do cupom.</p>
</div>

### Cupons
Caso você queira criar um novo cupom associado à promoção, clique em __NOVO CUPOM__ e preencha os campos a seguir:

- __Código__: código do cupom.
- __UTM Source__: código UTM source do cupom.
- __UTM Campaign__: código UTM campaign do cupom.

Ao clicar em __Opções Avançadas__, existe a possibilidade de configurar um campo adicional:

- __Limitar uso__: opção que limita a quantidade de vezes que o cupom pode ser utilizado.

<div class="alert alert-warning">
<p>Para salvar o novo cupom, é necessário clicar no botão <b>OK</b>. Se a janela for fechada sem essa confirmação, o cupom não será criado.</p>
</div>

Ao criar um novo cupom para a nova promoção, ele passará a ser exibido também na aba __Cupom__ do módulo __Promoções e Taxas__. Além disso, suas condições de UTM Source e/ou UTM Campaign serão vinculadas automaticamente à promoção nova no filtro __Clientes Específicos__.

<div class="alert alert-warning">
<p>Se as condições de UTM Source e UTM Campaign forem alteradas na configuração do filtro <b>Clientes Específicos</b> após a criação do cupom por esse fluxo, o cupom será excluído.</p>
</div>

### Restrições
- __Limitar uso na sua loja__: limita a quantidade de vezes que a promoção pode ser aplicada na loja.
- __Clientes específicos__: limita a quantidade de vezes que um cliente pode utilizar a promoção.
- __Número máximo de itens afetados por carrinho__: quantidade máxima de produtos em um carrinho que podem ser afetados pela promoção.
- __Restringir políticas comerciais__: define quais políticas comerciais se aplicam à promoção.

### Origem
- __Marketplace__: define se a promoção é válida apenas para pedidos feitos diretamente na loja.
- __Fulfillment__: define se a promoção é válida apenas para pedidos feitos em marketplaces em que sua loja atua como seller.

### Aparência
- __Destacar promoção nas prateleiras e páginas de produto__: define se é necessária [uma configuração adicional no módulo CMS](https://help.vtex.com/pt/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295) para que o aviso seja exibido.

