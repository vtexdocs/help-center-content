---
title: 'Promoção Regular'
id: tutorials_327
status: PUBLISHED
createdAt: 2017-04-27T22:07:59.690Z
updatedAt: 2025-06-23T11:42:18.456Z
publishedAt: 2025-06-23T11:42:18.456Z
firstPublishedAt: 2017-04-27T23:03:15.647Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: regular-promotion
legacySlug: promocao-regular
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Na VTEX, é possível [criar vários tipos de promoção](https://help.vtex.com/pt/tutorial/como-criar-promocoes--tutorials_320#como-criar-promocoes) para cenários diferentes, porém o mais utilizado é a Promoção Regular. Esse tipo de promoção permite que sua loja combine múltiplas condições de aplicação, restrições de uso e benefícios.

## Criar a Promoção Regular
1. No Admin VTEX, acesse **Promoções > Promoções**, ou digite **Promoções** na barra de busca no topo da página.
2. Clique em `Criar promoção`.
3. Selecione a opção `Regular`.
4. Preencha os campos do formulário da promoção, conforme descrito nas seções:
    - [Em quais itens esta promoção será aplicada](#em-quais-itens-esta-promocao-sera-aplicada)
    - [Quais as condições para a promoção ser válida](#quais-as-condicoes-para-a-promocao-ser-valida)
    - [Restrições e limitações de uso](#restricoes-e-limitacoes)
5. Clique em `Salvar`.

### 1. Dados gerais da promoção
Os campos obrigatórios estão marcados com um asterisco (*).

| Campo                            | Descrição                                                                                                                                                                                                                                                                                                                                                     |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nome*                            | Escolha um nome claro e objetivo para a promoção.                                                                                                                                                                                                                                                                                                               |
| Status                           | Defina se a promoção estará Ativa ou Inativa. <br> Configure como <i class="fas fa-toggle-on" aria-hidden="true"></i> para aplicar a promoção conforme as datas e horários configurados. <br> Configure como <i class="fas fa-toggle-off" aria-hidden="true"></i> para pausá-la, mesmo que esteja dentro do período definido.             |
| Descrição                        | A descrição interna da promoção deve ser usada para registrar informações destinadas à comunicação interna da loja.                                                                                                                                                                                                                                           |
| Data e horário de início*        | Selecione a data e o horário exatos para o início da promoção, garantindo que ela seja ativada no momento desejado.                                                                                                                                                                                                                                           |
| Data e horário de término*       | Configure a data e o horário exatos para sua desativação.                                                                                                                                                                                                                                                                                                       |
| Usar configurações de recorrência | Selecione esta opção para programar a repetição automática da promoção em dias e horários específicos. Configure os intervalos desejados para garantir a recorrência.                                                                                                                                                                                         |
| Qual o tipo e valor do desconto?*| Selecione o tipo e valor do desconto que será aplicado na promoção. Veja as opções de desconto a seguir: <br> - **Nominal**: desconto concedido ao total do carrinho. <br> - **Frete nominal**: desconto concedido ao valor do frete. <br> - **Percentual**: percentual de desconto sobre o valor do produto. <br> - **Preço máximo por item**: preço máximo para cada item. <br> - **Frete percentual**: percentual de desconto no valor do frete. <br> - **Frete máximo**: valor máximo do frete. <br> - **Frete grátis**: desconto total do frete. <br> - **Brinde**: desconto total do produto definido como brinde. A quantidade máxima refere-se ao número de SKUs diferentes que o usuário pode selecionar. <br> &nbsp;&nbsp;&nbsp;&nbsp;- A caixa "Ativar multiplicador de brindes" só funciona em promoções do tipo "Compre e Ganhe". Em promoções regulares, a configuração estará disponível, mas sem efeito no carrinho. <br> &nbsp;&nbsp;&nbsp;&nbsp;> ℹ️ O produto brinde precisa ter um preço cadastrado, mesmo sendo oferecido gratuitamente ao cliente. |
| Desconto baseado em fórmula      | O desconto é calculado com base em fórmula com variáveis como soma dos preços de produtos, frete e quantidade de itens. O frete considerado será o menor disponível, independentemente da seleção do cliente. <br> **Exemplo**: `(total + freight) * 0.3`                                                                                                       |
| Valor fidelidade nominal         | Crédito adicionado ao programa de fidelidade. Ver: *Promoção regular com valor fidelidade*.                                                                                                                                                                                                                                                                    |
| Valor fidelidade percentual      | Crédito percentual adicionado ao programa de fidelidade. Ver: *Promoção regular com valor fidelidade*.                                                                                                                                                                                                                                                         |
| Tabela de preços promocionais    | Uma tabela de preços pode ser utilizada como promoção. O preço promocional de cada SKU será o preço correspondente na tabela selecionada.                                                                                                                                                                                                                      |
| Destaque nos produtos            | Insere uma caixa de seleção com o nome da promoção, exibida na vitrine e na PDP, desde que o template use `<vtex.cmc:discountHighLight/>`.                                                                                                                                                                                                                      |

> ℹ️ Promoções do tipo **Nominal** só serão apresentadas no carrinho, e não na vitrine ou na PDP.

#### Restringir esta promoção a produtos dos sellers

Nesta seção, é possível definir para quais sellers a promoção será aplicada. Você pode determinar quais sellers serão incluídos ou excluídos do desconto.

- **Iguais a:** selecione os nomes dos sellers desejados para incluí-los.
- **Diferentes de:** selecione os nomes dos sellers desejados para excluí-los.

Para que a promoção seja válida para todos os sellers, deixe a seleção vazia.

> ⚠️ Não é possível selecionar diretamente um seller white label. Para incluir um seller white na promoção, existem duas opções: <ol> <li>Restringir os sellers à loja principal. Essa restrição adiciona todos os sellers white label da sua loja à promoção.</li> <li>Deixar a seleção vazia, incluindo todos os sellers. Aqui, todos os tipos de sellers – white label ou não – serão adicionados à promoção.</li> </ol>

#### Política Comercial
Esta seção estabelece as políticas comerciais válidas para a promoção. Você pode incluir ou excluir políticas comerciais do desconto.

- **Iguais a:** selecione as políticas comerciais desejadas incluí-las.
- **Diferentes de:** selecione as políticas comerciais desejadas excluí-las.
- **Fornecido por mim (Minha loja):** seleção de políticas comerciais com produtos da sua loja. Pode ser selecionada mais de uma política comercial.
- **Entregue por mim (Lojas de terceiros):** seleção de políticas comerciais em que seus produtos estão de lojas de terceiros. Pode ser selecionada mais de uma política comercial.

Para que a promoção seja válida para todas as políticas comerciais, deixe a seleção vazia.

### 2. A quais itens esta promoção será aplicada
Nesta seção, você define se a promoção será aplicada a todos os produtos do catálogo ou apenas a produtos específicos. Siga as orientações abaixo para configurá-la corretamente:

- Se deseja aplicar a promoção a todo o catálogo, basta selecionar a opção **Aplicar a todos os produtos**. 
- Para restringir a promoção a produtos específicos, selecione **Aplicar aos produtos que atendem a todas as restrições a seguir**, e preencha os campos de acordo com seus critérios. Você pode definir:
    - Categorias
    - Marcas
    - Coleções
    - Produtos
    - SKUs

Cada campo oferece as opções **Iguais a** (inclusão) ou **Diferentes de** (exclusão), permitindo configurar combinações precisas.

No exemplo abaixo, a promoção foi configurada para incluir todos os produtos da categoria Alimentação, com a marca Pedigree, exceto o produto Ração Whiskas Sachê. Veja como os campos foram preenchidos:

![Tela quais itens-pt](//images.ctfassets.net/alneenqid6w5/4v5wXtdO7CzCCHI0F0heTC/0ec93a1795105467af51e999595bde9c/Tela_quais_itens-pt.png)

Para facilitar o preenchimento de produtos ou SKUs, você pode carregar um arquivo **.txt** contendo os IDs desejados. O arquivo deve listar um ID por linha. Para fazer o upload:

- Clique em **Selecione um arquivo em .txt** no campo correspondente ao produto ou SKU desejado.
- Selecione o arquivo **.txt** com os IDs de produtos ou SKUs.

> ⚠️ Se você selecionar **Aplicar aos seguintes produtos** e não preencher nenhum dos critérios de seleção, a promoção não será cadastrada e a mensagem **Defina os produtos elegíveis ou aplique a todos os produtos** será exibida. Nesse caso, você deve retornar e preencher os critérios de seleção ou optar por **Aplicar a todos os produtos**.

Para que os produtos sejam incluídos na promoção, eles devem atender a todas as condições configuradas nesta seção.

### 3. Quais as condições para a promoção ser válida?
O carrinho do cliente deve atender às condições cadastradas nesta seção para ser válido na promoção.

- **Valor mínimo e máximo do pedido:** para promoções de preço que ajustam diretamente o valor dos itens no carrinho, a ativação da promoção é baseada no preço original dos itens. E para promoções que oferecem outros benefícios, como frete gratuito ou brindes, o preço considerado para ativar a promoção é o preço já com descontos aplicados.
- **Valor acumulado em compras:** o desconto será concedido se o total de todas as compras já realizadas pelo cliente atender ao valor configurado.
- **Preço do item entre:** o desconto será concedido se o valor do item atender ao intervalo de valores preenchidos.
- **Preços "de" e "por" são iguais ou Preços "de" e "por" são diferentes:** se referem aos valores do cadastro do produto. Somente uma opção pode ser selecionada.
- **Usar BIN de restrição:** o desconto será concedido se o BIN do cartão estiver entre os números preenchidos.
- **Tags de marketing:** campo utilizado para associar a promoção a campanhas específicas.
- **Afiliados:** o afiliado é o identificador do seller para o marketplace. O desconto será aplicado nos afiliados selecionados. Veja o artigo [O que é afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0?locale=pt) para mais informações.
- **Cluster de clientes:** o desconto será concedido se o cliente estiver cadastrado no cluster selecionado. É importante destacar que o nome do cluster deve ser exatamente igual ao cadastrado, qualquer erro de grafia impedirá o funcionamento correto da configuração.
- **Países de entrega:** o desconto será concedido aos países selecionados neste campo.
- **O CEP de entrega deve:** o desconto será concedido se o CEP atender à regra configurada.
- **Tipo de frete:** o desconto será concedido se o tipo de frete escolhido pelo cliente for o mesmo que o cadastrado na promoção. Esse critério somente será considerado se o efeito da promoção for relativo ao Valor de Frete, ou seja, somente se for um dos seguintes efeitos: Frete percentual, Frete nominal, Frete máximo ou Frete grátis.
- **Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente:** a promoção será aplicada somente após o cliente efetivamente selecionar a forma de entrega em questão. Enquanto não for selecionada, ela ficará sem o desconto. Esse critério somente será considerado se o tipo da promoção for relativo ao valor de frete, ou seja, somente se for um dos seguintes tipos: Frete percentual, Frete nominal, Frete máximo ou Frete grátis.
- **Meio de pagamento:** o desconto será concedido se a forma de pagamento selecionada pelo cliente for a mesma cadastrada na promoção. Esse desconto será aplicado na finalização da compra somente quando o cliente selecionar a mesma forma de pagamento cadastrada.

    > ℹ️ Por padrão, você pode cadastrar até 20 meios de pagamento por promoção. Além disso, existe a possibilidade de customização para incluir até 100 meios de pagamento. Caso precise utilizar mais de 20, entre em contato com o [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

- **Número de parcelas:** o desconto será concedido se o número de parcelas selecionadas pelo cliente estiver no intervalo cadastrado. Esse campo não se aplica para a seleção de boleto.

    > ⚠️ Promoções por forma de pagamento e número de parcelas não atendem a pedidos pagos com dois cartões ou vale-compras.

- **utm_source:** o desconto será concedido se a navegação for realizada com o utm_source correspondente a qualquer um dos valores cadastrados. É importante destacar que o cliente pode inserir apenas um **utm_source** no checkout.
- **utm_campaign:** o desconto será concedido se a navegação for realizada com o utm_campaign correspondente ao valor cadastrado.
- **Criar cupom a partir das UTMs acima:** cria um cupom a partir das UTMs cadastradas para dar ao cliente acesso à essa promoção sem a necessidade das utms, apenas com o código do cupom.
- **utmi_cp:** o desconto será concedido caso a navegação seja realizada com o utmi_cp com o valor cadastrado (letras maiúsculas e minúsculas são tratadas como caracteres diferentes).

    > ℹ️ No campo das UTMs coloque somente o valor que as UTMs terão que assumir para ativar a promoção. Não é necessário colocar *?utm_source=* dentro do campo.

- **Apenas na primeira compra:** o desconto só será concedido na primeira compra do cliente.
- **Pedido de assinatura:** opção que define que a promoção será aplicada para pedidos de assinatura. Veja as condições para os tipos de pedido a seguir:

   Tipo de pedido:

     - **Pedido original:** pedidos que geram as assinaturas, mas ainda não fazem parte dos ciclos de assinatura.
     - **Pedidos recorrentes:** pedidos que fazem parte dos ciclos de assinatura.

   Filtrar por: 

     - **Frequência:** opção que define a frequência dos pedidos por assinatura - semanal, mensal, anual, entre outras.
     - **Número do ciclo:** seleção dos ciclos da assinatura que serão incluídos na promoção. Essa opção é desbloqueada apenas se a opção **Pedidos recorrentes** tiver sido selecionada anteriormente.

- **Aplicar o desconto mesmo se o cliente não estiver logado?:** esse campo fica disponível quando a opção "Apenas na primeira compra" é selecionada. Ao marcar essa opção, a promoção será aplicada ao cliente, mesmo que ele não tenha inserido email e senha. No entanto, o desconto será aplicado assim que o cliente for identificado, não sendo necessário que ele esteja logado. Se a opção estiver desmarcada, a promoção só será aplicada se o cliente acessar a conta com email e senha previamente cadastrados.

### 4. Restrições e limitações de uso

- **Quantas vezes essa promoção será aplicada em sua loja:** limita a quantidade de vezes que a promoção será aplicada. Quando a opção Ilimitado é desmarcada, é disponibilizado um campo para cadastrar a quantidade de vezes que deseja limitar. Uma vez que a promoção seja criada, essa condição só será aplicada a partir do dia em que foi configurada, não afetando os pedidos realizados anteriormente.
- **Quantas vezes essa promoção pode ser aplicada na sua loja por cliente:** habilita a quantidade cadastrada acima não mais para quantidade de uso total da promoção, e sim para a quantidade de vezes que cada cliente poderá receber a promoção. Caso o campo acima também esteja selecionado, ele terá uma prioridade maior de atuação que este limite.
- **Defina o número máximo de itens elegíveis por carrinho:** define quantos itens do carrinho serão afetados pela promoção. Leia [esse artigo](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy#limite-de-itens-com-promocao-no-carrinho) para saber como configurar o campo.
- **Permitir acumular promoções:** permite que mais de uma promoção, independente do tipo de desconto, seja concedida ao mesmo tempo. Saiba mais sobre [como funciona a concorrência de promoções](https://help.vtex.com/pt/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270#).
- **Permitir acumular com preços manuais:** permite que a promoção seja aplicada a produtos cujos preços foram manualmente inseridos pelo televendas. Para habilitar a funcionalidade de preços manuais, use o endpoint [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

