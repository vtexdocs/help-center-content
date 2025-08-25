---
title: 'Criar Promoção Regular'
id: 7FjbeZdE2KMwk5L1t98pZI
status: PUBLISHED
createdAt: 2020-01-14T13:11:35.010Z
updatedAt: 2025-06-12T16:32:22.510Z
publishedAt: 2025-06-12T16:32:22.510Z
firstPublishedAt: 2020-01-22T13:55:43.369Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: creating-regular-promotions
locale: pt
trackId: 6asfF1vFYiZgTQtOzwJchR
trackSlugEN: promocoes
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

## Criar a promoção

Para criar uma Promoção Regular, siga os passos abaixo:

1. No Admin VTEX, acesse **Promoções > Promoções**, ou digite **Promoções** na barra de busca no topo da página.
2. Clique no botão **Criar promoção**.
3. Selecione a opção **Regular**.
4. Preencha os campos da promoção.
5. Clique em **Salvar**.

# 1. Quais os dados gerais desta promoção?

Nesta seção, você deve configurar as informações gerais da sua promoção. Os campos **Nome**, **Data de expiração** e **Qual o tipo e valor do desconto** são de preenchimento obrigatório.

- **Nome:** nome da promoção. Campo obrigatório.
- **Status:** opção que define se a promoção está ativa ou inativa.
- **Descrição:** descrição interna da promoção. O objetivo desse campo é que seja usado para comunicação interna na sua loja, a fim de deixar claro se a promoção é devido à alguma campanha, queima de estoque, etc.
- **Data de expiração:** data e hora de início e de fim da promoção. Pode ser usada uma data e/ou horário futuros, para que a promoção comece a ser aplicada no site. Caso seja configurada desta forma, o status da promoção será exibido das seguintes formas:
    - **Agendada:** antes da data e horário de início selecionados.
    - **Ativa:** durante o período programado para a promoção.
    - **Inativa:** após a data e horário de término selecionados.
- **Usar configurações de recorrência:** ao selecionar esta opção, é permitido realizar configurações de recorrência, por exemplo, dia da semana e horário.
- **Qual o tipo e valor do desconto?:** permite selecionar uma das opções abaixo:
     - **Nominal:** desconto que será concedido ao total do carrinho.
     - **Frete nominal:** desconto que será concedido ao valor do frete.
     - **Percentual:** percentual de desconto que será concedido ao valor do produto.
     - **Preço Máximo por Item:** o preço máximo para cada item da compra será o preço configurado acima.
     - **Frete percentual:** percentual de desconto que será concedido ao valor do frete.
     - **Frete máximo:** valor máximo que o frete poderá assumir.
     - **Frete grátis:** desconto total sobre o valor do frete.
     - **Brinde:** desconto total sobre o valor do produto definido como brinde. Ao selecionar essa opção  é possível indicar o SKU por nome ou ID que será considerado como brinde, escolher se o [multiplicador de brindes](https://help.vtex.com/pt/tutorial/o-que-significa-ativar-o-multiplicador-de-brinde-em-uma-promocao--1gydgkmjEWcoo2CskUwuYK) deve ser ativado e a quantidade máxima de produtos que poderão ser utilizados como brindes na promoção.
> ℹ️ O produto Brinde também precisa ter um preço cadastrado, mesmo sendo oferecido gratuitamente ao cliente.

   - **Desconto nominal baseado em fórmula:** o desconto é calculado com base na fórmula que você pode criar usando como variáveis a soma dos preços de produtos, o frete e a quantidade de itens. Observe que o frete considerado pela fórmula será o menor disponível para o pedido, independentemente da seleção do cliente. O separador decimal deve ser sempre o ponto. Exemplo: se o desconto for 30% do valor total do produto + valor do frete, a fórmula deve ser (total + freight) * 0.3. Para obter mais informações sobre a fórmula, leia nossa [documentação](https://help.vtex.com/pt/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV).
   - **Valor fidelidade nominal:** crédito que será adicionado no programa de fidelidade da loja. Leia [Promoção regular com valor fidelidade](https://help.vtex.com/pt/tutorial/promocao-regular-com-valor-fidelidade--3FCip23ZtvG0sDt0rVGVmR) para mais informações.
   - **Valor fidelidade percentual:** crédito percentual que será adicionado no programa de fidelidade da loja. Leia [Promoção regular com valor fidelidade](https://help.vtex.com/pt/tutorial/promocao-regular-com-valor-fidelidade--3FCip23ZtvG0sDt0rVGVmR) para mais informações.
   - **Tabela de preços promocionais:** uma tabela de preços pode ser utilizada como promoção. O preço promocional de cada SKU será o preço correspondente na tabela de preços escolhida.
- **Informações adicionais (opcional):** permite  incluir informações adicionais a promoção composto de um nome e valor.
- **Destaque nos produtos:** insere uma flag com o nome da promoção, utilizada na vitrine e na página do produto. Essa flag só será inserida caso use o controle correto de exibição de promoção no template `vtex.cmc:discountHightLight/>`.

> ℹ️ Promoções do tipo Nominal só serão apresentadas no carrinho, e não na vitrine ou na página de produto.

## Restringir esta promoção a produtos dos sellers

Nesta seção, é possível definir para quais sellers a promoção será aplicada. Você pode determinar quais sellers serão incluídos ou excluídos do desconto.

- **Iguais a:** selecione os nomes dos sellers desejados para inclui-los.
- **Diferentes de:** selecione os nomes dos sellers desejados para exclui-los.

Para que a promoção seja válida para todos os sellers, deixe a seleção vazia.

> ⚠️ **Atenção:** não é possível selecionar diretamente um seller white label. Para incluir um seller white na promoção, existem duas opções:<ol>1. Restringir os sellers à loja principal. Essa restrição adiciona todos os sellers white label da sua loja à promoção.</ol><ol>2. Deixar a seleção vazia, incluindo todos os sellers. Aqui, todos os tipos de sellers - white label ou não - serão adicionados à promoção.</ol>

## Política comercial

Esta seção estabelece as políticas comerciais válidas para a promoção. Você pode incluir ou excluir políticas comerciais do desconto.

- **Iguais a:** selecione as políticas comerciais desejadas incluí-las.
- **Diferentes de:** selecione as políticas comerciais desejadas excluí-las.
- **Fornecido por mim (Minha loja):** seleção de políticas comerciais com produtos da sua loja. Pode ser selecionada mais de uma política comercial.
- **Entregue por mim (Lojas de terceiros):** seleção de políticas comerciais em que seus produtos estão de lojas de terceiros. Pode ser selecionada mais de uma política comercial.

Para que a promoção seja válida para todas as políticas comerciais, deixe a seleção vazia.

# 2. A quais itens esta promoção será aplicada?

Nesta seção, você precisa escolher se a promoção será aplicada a todos os produtos cadastrados na sua loja ou apenas a produtos específicos, conforme detalharemos abaixo:

- **Aplicar a todos os produtos:** permite aplicar a promoção a todo o seu catálogo.
- **Aplicar aos produtos que atendem a todas as restrições a seguir:** permite limitar a sua promoção a produtos específicos, e é necessário preencher os critérios de seleção referentes a **Categorias**, **Marcas**, **Coleções**, **Produtos **e **SKUs**.
- **Produtos:** permite escolher os produtos no qual a promoção será aplicada. É possível fazer o upload de um arquivo **(.txt)** com os IDs dos produtos.
- **SKUs:** permite escolher os SKUs dos produtos no qual a promoção será aplicada. É possível fazer o upload de um arquivo **(.txt)** com os SKUs dos produtos.

Você pode incluir ou excluir **Categorias**, **Marcas**, **Coleções**, **Produtos** e **SKUs** da promoção, utilizando os critérios **Iguais a** ou **Diferentes de**.

Para serem válidos na promoção, os produtos precisam atender a todas as condições cadastradas nesta seção.

![A quais itens esta promoção será aplicada - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/promocoes/criar-promocao-regular_1.png)

# 3. Quais as condições para a promoção ser válida?

O pedido do cliente deve atender às condições cadastradas nesta seção para ser válido na promoção.

- **Valor mínimo e máximo do pedido:** a promoção será aplicada levando em conta o valor “bruto” do carrinho, sem considerar demais promoções ou frete.
* **Valor acumulado em compras:** o desconto será concedido caso o total de todas as compras já realizadas pelo cliente, esteja atendendo ao valor preenchido.
- **Preço do item entre:** o desconto será concedido caso o valor do item esteja atendendo ao intervalo de valores preenchidos.
- **Preço "de" e "por" são iguais** ou **Preço "de" e "por" são diferentes:** se refere aos valores do cadastro do produto. Somente uma opção pode ser selecionada.
- **Usar BIN de restrição:** permite ativar ou desativar a restrição do BIN, limitando quais cartões de créditos poderão ser utilizados na promoção criada. É possível realizar a importação de uma lista de BINs, que deve estar salvo em um arquivo de texto (.txt) com cada BIN descrito em uma linha diferente.
- **Tags Marketing:** campo utilizado para restringir a ativação da promoção caso a compra seja realizada pelo [módulo de Assinaturas da VTEX](https://help.vtex.com/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453#).
- **Afiliados:** identificador de pedidos do marketplace. O desconto será aplicado nos afiliados selecionados. Veja o artigo [O que é afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0?locale=pt) para mais informações.
- **Cluster de clientes:** o desconto será concedido caso o cliente esteja cadastrado no cluster selecionado. É importante destacar que o nome do cluster deve ser exatamente como cadastrado, qualquer erro de grafia impedirá o funcionamento correto da configuração. Para mais informações, acesse [Criar cluster de clientes](https://help.vtex.com/pt/tutorial/como-criar-um-cluster-de-clientes).
- **Países de entrega:** o desconto será concedido aos países selecionados neste campo.
- **O CEP de entrega deve:** o desconto será concedido caso o CEP esteja atendendo à regra configurada. É importante ressaltar que os CEPs que não constam no cadastro não serão elegíveis para ativar a promoção. 
- **Tipo de frete:** o desconto será concedido caso o tipo de frete escolhido pelo cliente seja o mesmo que o cadastrado na promoção. Esse critério somente será considerado se o efeito da promoção for relativo ao Valor de Frete, ou seja, somente se for um dos seguintes efeitos: Frete percentual, Frete nominal, Frete máximo ou Frete grátis. Importante observar que esta configuração não pode ser combinada com a opção “Aplicar desconto ao frete mais barato”, já que uma opção invalida a outra.
- **Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente:** a promoção será aplicada somente após o cliente efetivamente selecionar a forma de entrega em questão. Enquanto não for selecionada, ela ficará sem o desconto. Esse critério somente será considerado se o tipo da promoção for relativo ao valor de frete, ou seja, somente se for um dos seguintes tipos: Frete percentual, Frete nominal, Frete máximo ou Frete grátis.
- **Meio de pagamento:** permite escolher se a promoção será aplicada em um ou mais tipos de meios de pagamento selecionados.
> ℹ️ Por padrão, você pode cadastrar até 20 meios de pagamento por promoção. Além disso, existe a possibilidade de customização para incluir até 100 meios de pagamento. Caso precise utilizar mais de 20, entre em contato com o [nosso Suporte.](https://vtexhelp.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fsupport.vtex.com%2Fhc%2Fpt-br%2Frequests&theme=hc&locale=pt-br&brand_id=144968&auth_origin=144968%2Ctrue%2Ctrue)
- **Número de parcelas:** o desconto será concedido caso o número de parcelas selecionadas pelo cliente estiver no intervalo cadastrado. Esse campo não se aplica para a seleção de boleto.
 > ⚠️ Promoções por forma de pagamento e número de parcelas não atendem a pedidos pagos com dois cartões ou vale-compras.
- **utm_source:** o desconto será concedido caso a navegação seja realizada com as **utm_source** correspondente a qualquer um dos valores cadastrados. É importante destacar que o cliente pode inserir apenas um **utm_source** no checkout.
- **utm_campaign:** o desconto será concedido caso a navegação seja realizada com a utm_campaign com o valor cadastrado.
- **Criar cupom a partir das UTMs acima:** cria um cupom a partir das UTMs cadastradas para dar ao cliente acesso à essa promoção sem a necessidade das utms, apenas com o código do cupom.
- **utmi_cp:** o desconto será concedido caso a navegação seja realizada com a utmi_cp com o valor cadastrado (case sensitive).
 > ℹ️ No campo das UTMs coloque somente o valor que as UTMs terão que assumir para ativar a promoção. Não é necessário colocar ?utm_source= dentro do campo.
- **Apenas na primeira compra:** o desconto só será concedido na primeira compra do cliente.
- **Aplicar o desconto mesmo se o cliente não estiver logado:** este campo é disponibilizado quando o campo **Apenas na primeira compra** é selecionado. Se este campo é marcado, a promoção será aplicada mesmo que o consumidor não tenha inserido e-mail e senha. Quando desmarcado, a promoção somente será aplicada se o consumidor tiver acessado com e-mail e senha previamente cadastrados.
- **Pedido de assinatura:** permite selecionar uma das opções abaixo:
    - **Pedido original:** são pedidos que geram as assinaturas, mas ainda não fazem parte dos ciclos de assinatura.
    - **Pedidos recorrentes:** são pedidos que fazem parte dos ciclos de assinatura.
    - **Filtrar por**: permite filtrar quais pedidos de assinatura são válidos para a promoção.
    - **Frequência:** seleção da frequência dos pedidos por assinatura - semanal, mensal e anual.  Para saber mais informações, acesse [Configurar frequência e data do ciclo de assinatura](https://help.vtex.com/pt/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK#configurar-frequencia-e-data-do-ciclo-de-assinatura).
   - **Número do ciclo:** permite selecionar os ciclos da assinatura que serão incluídos à promoção. Essa opção é desbloqueada apenas se **Pedidos recorrentes** forem selecionados anteriormente. 

# 4. Restrições e limitações de uso

Nesta seção você encontrará informações importantes sobre quais condições e restrições se aplicam à promoção.

- **Quantas vezes essa promoção será aplicada em sua loja:** limita a quantidade de vezes  em que a promoção será aplicada. Quando a opção **ilimitada** é desmarcada, é disponibilizado um campo para cadastrar a quantidade de vezes que deseja limitar. Uma vez que a promoção já foi criada, essa condição só será aplicada a partir do dia em que foi configurada, não afetando os pedidos realizados anteriormente.
- **Quantas vezes essa promoção será aplicada em sua loja por cliente:** O valor incluído neste campo determina o número máximo de vezes que cada cliente pode se beneficiar da promoção. Consideremos, por exemplo, um limite estabelecido de três utilizações. Caso a promoção seja aplicada três vezes em um único pedido, isso será considerado como uma única utilização em relação ao limite total. Assim, o cliente ainda terá a oportunidade de utilizar a promoção em mais dois pedidos diferentes. É importante destacar que este cálculo é independente da quantidade de vezes que a promoção é utilizada em cada pedido individualmente.
- **Definir o número máximo de itens elegíveis por carrinho:** define quantos itens do carrinho serão afetados pela promoção. Leia [esse artigo](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy#limite-de-itens-com-promocao-no-carrinho) para saber como configurar o campo.
- **Permitir acumular promoções:** permite que mais de uma promoção, independente do tipo de desconto, seja concedida ao mesmo tempo. Saiba mais sobre [como funciona a concorrência de promoções](https://help.vtex.com/pt/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270#).
- **Permitir acumular com preços manuais:** permite que a promoção seja aplicada a produtos cujos preços foram manualmente inseridos pelo televendas. Para habilitar a funcionalidade de preços manuais, use o endpoint [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

