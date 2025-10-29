---
title: "Como funciona o desconto progressivo"
id: tutorials_324
status: PUBLISHED
createdAt: 2017-04-27T22:08:26.447Z
updatedAt: 2025-09-30T13:50:03.053Z
publishedAt: 2025-09-30T13:50:03.053Z
firstPublishedAt: 2017-04-27T23:03:15.195Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: progressive-discount
legacySlug: desconto-progressivo
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

O desconto progressivo é uma funcionalidade que permite criar promoções com percentuais de desconto crescentes, à medida que o cliente adiciona mais produtos ao carrinho. Essa estratégia é ideal para estimular compras em maiores quantidades, recompensando o cliente com benefícios proporcionais ao volume adquirido.

![Desconto Progressivo gift-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/desconto-progressivo_1.gif)

Para configurar o **Desconto progressivo**, você precisa executar os seguintes passos:

- [Criar Desconto Progressivo](#Criar-desconto-progressivo)
- [Condições do Desconto Progressivo](#condicoes-do-desconto-progressivo)
- [Condições para aplicar a promoção](#condicoes-para-aplicar-a-promocao)
- [Configurar restrições para o uso da promoção](#configurar-restricoes-para-o-uso-da-promocao)
- [Configurar acúmulo e concorrência](#configurar-acumulo-e-concorrencia)
- [Exibir a promoção na página de produto](#exibir-a-promocao-na-pagina-de-produto)

## Criar Desconto Progressivo

Para criar o desconto progressivo, siga as etapas abaixo:

1. No Admin VTEX, acesse **Promoções > Promoções** ou digite **Promoções** na barra de busca no topo da página.
2. Clique em `Criar promoção`.
3. Selecione a opção **Desconto Progressivo**.
4. Preencha os campos da página. Na tabela abaixo você encontra detalhes para preenchimento.
5. Clique em Salvar.

| Campo                                    | Descrição                                                                                                                                                                                                                                                                                                                    | Exemplo                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nome**                                 | Escolha um nome claro e objetivo que reflita o propósito da promoção, facilitando a identificação pelos clientes (até 150 caracteres).                                                                                                                                                                                       | Queima de Estoque Verão.                                                                                                                                                                                                                                                                                                                                                                                        |
| **Status**                               | Defina se a promoção estará **Ativa** ou **Inativa**. Configure como <i class="fas fa-toggle-on" aria-hidden="true"></i> para aplicar a promoção conforme as datas e horários configurados. Configure como <i class="fas fa-toggle-off" aria-hidden="true"></i> para pausá-la, mesmo que esteja dentro do período definido. | ![Habilitar Promoções-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/desconto-progressivo_2.png) ![Desabilitar Promoções-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/desconto-progressivo_3.png) |
| **Descrição**                            | A descrição interna da promoção deve ser usada para registrar informações destinadas à comunicação interna da loja (até 10.000 caracteres). Este campo serve para especificar o motivo da promoção, por exemplo, uma campanha específica, ou queima de estoque.                                                              | Promoção destinada à liquidação de itens da coleção Verão.                                                                                                                                                                                                                                                                                                                                                      |
| **Data de início e horário de início**   | Selecione a data e o horário exatos para o início da promoção, garantindo que ela seja ativada no momento desejado. Certifique-se de ajustar conforme o planejamento da campanha para maximizar sua eficácia.                                                                                                                | ![Data e horário de início da Promoções-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/desconto-progressivo_4.png)                                                                                                                                                                                        |
| **Data de término e horário de término** | Defina o período de validade da promoção configurando a data e o horário exatos para sua desativação automática.                                                                                                                                                                                                             | ![Data de término e horário da Promoções-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/desconto-progressivo_5.png)                                                                                                                                                                                       |
| **Usar configurações de recorrência**    | Selecione esta opção para programar a repetição automática da promoção em dias e horários específicos. Configure os intervalos desejados para garantir recorrência conforme o planejamento.                                                                                                                                  | ![Usar recorrência-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/desconto-progressivo_6.png)                                                                                                                                                                                                             |

### Definir os sellers participantes

No canto direito da página, na seção **Sellers,** defina a quais sellers a promoção deve ser aplicada.

![Seller-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/desconto-progressivo_7.png)

Selecione uma das opções para a aplicação da promoção.

- **Todos:** nesta opção a promoção será aplicada a todos os sellers cadastrados. Use-a quando quiser que todos os produtos, de todos os sellers, façam parte da campanha.
- **Iguais a:** nesta opção a promoção será aplicada apenas a sellers específicos. Após selecionar esta opção, preencha o campo que aparecerá com o nome dos sellers desejados.
- **Diferentes de:** nesta opção você define quais sellers não serão afetados por essa promoção. Após escolher "Diferentes de", você poderá selecionar os sellers que não deseja incluir na campanha. Todos os demais sellers estarão incluídos.
- **Participantes**: com esta configuração, a promoção funciona no modo _opt-in_, em que a participação dos sellers é gerenciada por meio do [Seller opt-in or opt-out](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/calculatorconfiguration/-promotionId-/seller-opt). Nessa API, você pode definir quais sellers devem participar ou ser removidos da promoção.

Para mais informações, acesse o artigo [Seller opt-in promotions](https://developers.vtex.com/docs/guides/seller-opt-in-promotions).

### Selecionar políticas comerciais

No canto direito da página, na seção **Políticas Comerciais**, selecione as políticas comerciais válidas para o desconto. Você pode oferecer descontos para políticas comerciais onde [sua loja atua como marketplace](/pt/faq/o-que-e-um-marketplace) (**Minha loja**) ou como seller (**Lojas de terceiros - Fulfillment**).

Você pode escolher entre as seguintes opções:

- **Todas:** esta opção aplica a promoção a todas as políticas comerciais cadastradas, sem restrições. Todos os produtos, independentemente da política comercial associada, estarão incluídos na promoção.
- **Iguais a:** esta opção permite que você especifique quais políticas se aplicam aos produtos que receberão o desconto.
- **Diferentes de:** esta opção remove determinadas políticas, garantindo que o desconto não seja aplicado a produtos que seguem essas regras comerciais.

![Politica comercial-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/desconto-progressivo_8.png)

## Condições do Desconto progressivo

Determine as condições e os percentuais de desconto a serem aplicados. Veja a seguir quais condições estão disponíveis:

- **SKUs:** selecione os SKUs para os quais o desconto progressivo será aplicado. Essa opção restringe a promoção apenas aos produtos associados aos SKUs escolhidos.
- **Coleções:** selecione as [coleções](/pt/tutorial/criando-colecao-de-produtos--tutorials_244) de produtos onde o desconto progressivo será aplicado. Esta opção permite aplicar a promoção a um grupo de produtos pré-definidos.
- **Considerar somente itens iguais:** essa opção restringe o desconto a produtos idênticos. Por exemplo, se você adicionar diferentes SKUs pertencentes à mesma coleção, a promoção não será aplicada. A regra se baseia apenas na quantidade de um mesmo SKU presente no carrinho.
- **Desconto:** essa opção permite configurar o percentual de desconto aplicado ao atingir a quantidade mínima de itens definida. É possível criar até 10 intervalos de desconto progressivo.
- **Adicionar intervalo:** nesta opção é possível configurar níveis adicionais de desconto progressivo. Por exemplo, você pode definir que ao atingir 10 unidades o desconto será de 5%, e ao atingir 20 unidades, o desconto aumentará para 10%. O limite máximo de intervalos configuráveis é 10.

![Desconto Promoções-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/desconto-progressivo_9.png)

## Condições para aplicar a promoção

As condições permitem que a promoção seja ativada em circunstâncias específicas, conforme os critérios selecionados. Para adicionar uma condição, siga as instruções abaixo:

- **Número do BIN do cartão:** aplique a promoção apenas quando forem utilizados cartões de bandeiras, bancos ou categorias específicas identificadas por seus códigos BIN. Importe uma lista de BINs salva em um arquivo de texto (.txt) ou (.csv), com cada BIN descrito em uma linha diferente.
- **Cluster de clientes:** selecione um cluster de clientes já criado no Master Data, seguindo o formato `field=value` ou `field contains value`. Escolha uma das seguintes opções:

  - **Todos os seguintes**: aplique a promoção apenas se todos os critérios do cluster forem atendidos.
  - **Pelo menos um dos seguintes:** aplique a promoção se pelo menos um dos critérios do cluster for atendido.

- **Local de entrega:** aplica a promoção com base no endereço de entrega associado ao pedido. As condições podem ser configuradas utilizando os seguintes critérios:
  - **Países de entrega:** pecifique os países nos quais a promoção será válida. Você pode selecionar até 50 países nesta lista. A promoção será aplicada apenas para pedidos cuja entrega esteja associada aos países configurados.
- **CEP de entrega:** permite configurar intervalos de CEP para limitar a aplicação da promoção a regiões específicas.
  - **Escolha Incluir ou Excluir:** defina se a promoção será aplicada aos intervalos configurados (incluir) ou excluídas deles (Excluir).
  - **Configure os intervalos de CEP:** preencha os campos “De” e “Até” com os códigos postais desejados.
  - **Adicione múltiplos intervalos:** utilize a opção + Adicionar intervalo para incluir outros intervalos, conforme necessário.

![Local de entrega-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/desconto-progressivo_10.png)

- **UTM:** permite configurar a promoção para que seja aplicada quando o acesso ao site ocorrer por meio de uma URL com parâmetros UTM ou quando um cupom vinculado a esses parâmetros for utilizado. Defina os parâmetros UTM seguindo as regras de formatação , usando letras, números, hífens e sublinhados.

> ℹ️ O uso desses parâmetros é opcional e permite configurar descontos para campanhas específicas.

Defina os parâmetros abaixo, se necessário:

- **Utm_source:** permite o desconto quando a navegação for realizada com a utm_source configurado.
- **Utm_campaign:** permite o desconto quando a navegação for realizada com o parâmetro utm_campaign configurado.
- **Criar cupom a partir dos parâmetros UTM acima:** gere um cupom com base nos parâmetros UTM inseridos nos campos `UTM_source` e `UTM_campaign`.
- **Ver cupons vinculados:** permite visualizar os cupons que já foram associados aos parâmetros UTM definidos.
- **Meio de pagamento:** a promoção é aplicada somente quando o cliente utilizar um dos meios de pagamento previamente configurados. Entre as opções disponíveis, você pode selecionar:
  - Boleto Bancário.
  - Cartões de crédito, com as bandeiras Visa, Mastercard, entre outros.
  - Outros métodos, como Diners, Hipercard, entre outros.

## Configurar restrições para o uso da promoção

Nesta seção, define se a promoção pode ser combinada com outras promoções. As opções disponíveis são:

- **Limitar o uso da promoção na loja:** restringe a quantidade total de vezes que a promoção pode ser utilizada na loja.
- **Limitar o uso da promoção por cliente:** restringe o número de vezes que cada cliente pode utilizar a promoção.
- **Limitar a quantidade de itens elegíveis por carrinho:** restringe o número máximo de itens por pedido que podem receber o desconto da promoção.

## Configurar acúmulo e concorrência

Defina como a promoção será combinada com outras condições comerciais aplicadas na loja.

- **Permitir acumular com preços manuais:** selecione essa configuração para que a promoção seja aplicada a produtos cujo preço foi ajustado manualmente.

## Exibir a promoção na página de produto

Destaque a promoção na página de produto e adicione dados personalizados para customizações da loja nesta seção.

- **Destacar nos produtos:** marque esta opção para exibir a promoção diretamente nas páginas de produtos.

> ⚠️ Lembre-se [configurar essa exibição no módulo CMS](/pt/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295).

- **Informações adicionais:** clique em `Criar` para adicionar campos personalizados com nome e valor, que podem ser usados para customizações na loja.
