---
title: 'Criar promoção de campanha'
id: 1ChYXhK2AQGuS6wAqS8Ume
status: PUBLISHED
createdAt: 2018-12-02T18:57:52.792Z
updatedAt: 2025-09-24T14:00:05.744Z
publishedAt: 2025-09-24T14:00:05.744Z
firstPublishedAt: 2018-12-03T16:52:03.595Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6qOjO5gpEs8scQ8OugaEaW
slugEN: campaign-promotion
legacySlug: promocao-de-campanha
locale: pt
subcategoryId: 2cI57eZ3ZiWSeaQs26Gwys
---

A **Promoção de Campanha** está sempre vinculada a uma **audiência de campanha**, ou seja, um público-alvo específico.

Esse tipo de promoção inclui todas as possibilidades da Promoção Regular e oferece recursos adicionais, como:

* Público-alvo específico

* Frete grátis para todos os fretes disponíveis

* Tabela de preços promocionais

* Brinde entregue por *seller*

Antes de criar uma promoção de campanha, é necessário criar a [audiência de campanha](/pt/tutorial/criar-audiencia-de-campanhas--6cnuDZJzIkIeocewAQQK4K) para definir o público que será impactado. Com isso, é possível selecionar segmentos de clientes elegíveis e configurar os critérios que servirão como gatilho da promoção.

**Exemplo:** Se você criar uma audiência de campanha cujo público-alvo seja de clientes que adicionam o produto A ao carrinho, poderá configurar a promoção de campanha para que esse público receba desconto no produto B.

> ❗ Audiências de campanha e suas promoções são válidas apenas para a conta principal da loja. As contas de sellers não oferecem essa funcionalidade. Caso sejam criadas em uma conta de seller, a audiência e a promoção de campanha não serão ativadas.

Para criar a promoção de campanha, siga os passos abaixo:

* [Criar a promoção](#criar-a-promocao)  
* [Selecionar audiência da campanha](#selecionar-audiencia-da-campanha)  
* [Definir itens para ativação da promoção](#definir-itens-para-ativacao-da-promocao)  
* [Conferir as condições da promoção](#conferir-as-condicoes-da-promocao)  
* [Configurar restrições para o uso da promoção](#configurar-restricoes-para-o-uso-da-promocao)  * [Destacar a promoção na página de produto](#destacar-a-promocao-na-pagina-de-produto)

## Criar a promoção

Após criar a audiência de campanha, siga os passos abaixo:

1. No Admin VTEX, acesse **Promoções *\>* Promoções**, ou digite **Promoções** na barra de busca no topo da página.  
2. Clique em `Criar promoção`.  
3. Clique em `Promoção de Campanha`.  
4. Preencha os campos da promoção, conforme descrito na tabela abaixo. Campos com asterisco são de preenchimento obrigatório.  
5. Clique em `Salvar.`

| Campo | Descrição |
| ----- | --------- |
| **Nome** | Escolha um nome claro e objetivo para a promoção (até 150 caracteres). |
| **Status** | Defina se a promoção estará **Ativa** ou **Inativa**. Ative como <i class="fas fa-toggle-on" aria-hidden="true"></i> para aplicar a promoção conforme as datas e horários configurados. Desative como <i class="fas fa-toggle-off" aria-hidden="true"></i> para pausá-la, mesmo que esteja dentro do período definido. |
| **Descrição** | Use este campo para registrar o objetivo da promoção, como o tipo de campanha ou sazonalidade. O limite é de 10.000 caracteres. |
| **Data de início e horário de início** | Selecione a data e o horário exatos para ativar a promoção automaticamente. |
| **Data e horário de término** | Defina a data e o horário exatos para encerrar a promoção. Após esse momento, a campanha será desativada automaticamente. A data deve ser posterior à data e horário de início. |
| **Usar configurações de recorrência** | Marque esta opção para repetir automaticamente a promoção em dias e horários específicos. Isso permite configurar ações sazonais para dias e horários definidos. Após ativar, configure os dias e horários da recorrência de acordo com os parâmetros da campanha. |

### Definir os sellers

Na seção **Sellers**, defina se a promoção será aplicada a todos os sellers ou apenas a sellers específicos. As opções são:

* **Todos:** aplica a promoção a todos os *sellers* cadastrados. Deixe o campo de seleção em branco.  
* **Iguais a:** aplica a promoção apenas aos *sellers* informados. Insira os identificadores no campo correspondente.  
* **Diferentes de**: aplica a promoção a todos os *sellers*, exceto aos selecionados.

### Selecionar políticas comerciais

Na seção **Política comercial**, defina as políticas comerciais às quais a promoção será aplicada:

* **Todas**: aplica a promoção a todas as políticas comerciais cadastradas.

* **Iguais a**: aplica a promoção apenas às políticas selecionadas.

* **Diferentes de**: aplica a promoção a todas as políticas, exceto as selecionadas.

## Selecionar audiência da campanha

Defina quais audiências terão acesso a esta promoção. A promoção será aplicada somente aos usuários que atenderem às condições configuradas nas audiências selecionadas.

> ℹ️ Para criar novas audiências ou entender como configurá-las, acesse o artigo [Audiência de campanha](/pt/tutorial/como-criar-campanhas).

## Definir itens para ativação da promoção

Na seção **Na compra de**, configure os itens que funcionarão como gatilho para ativar a promoção de campanha, de acordo com a audiência definida anteriormente.

* **Aplicar a todos os itens da loja**: a promoção será ativada quando qualquer item da loja for adicionado ao carrinho pelo público-alvo da audiência.  
* **Aplicar aos itens que atendem a todas as restrições a seguir**: a promoção será ativada apenas quando forem adicionados ao carrinho itens que atendam a todas as condições configuradas.

As restrições podem ser configuradas com base em:

* **SKUs**: itens específicos identificados por SKU.  
  * **Iguais a**: aplica apenas aos SKUs listados.  
  * **Diferentes de**: aplica a todos os SKUs, exceto os listados.  
* **Produtos**: aplica a promoção com base no produto, independentemente do SKU.  
  * **Iguais a**: aplica apenas aos produtos selecionados.  
  * **Diferentes de**: aplica a todos os produtos, exceto os selecionados.  
* **Coleções**: aplica a promoção com base nas coleções cadastradas.  
  * **Iguais a**: aplica apenas às coleções selecionadas.  
  * **Diferentes de**: aplica a todas as coleções, exceto as selecionadas.  
* **Categorias**: aplica a promoção com base nas categorias do catálogo.  
  * **Iguais a**: aplica apenas às categorias selecionadas.  
  * **Diferentes de**: aplica a todas as categorias, exceto as selecionadas.  
* **Marcas**: aplica a promoção com base nas marcas dos produtos.  
  * **Iguais a**: aplica apenas às marcas selecionadas.  
  * **Diferentes de**: aplica a todas as marcas, exceto as selecionadas.

O cliente ganha

Selecione o benefício a ser aplicado quando as condições da promoção de campanha forem atendidas. As opções incluem:

* **Desconto**  
  * **Nominal**: concede um valor fixo de desconto sobre os itens ou pedido.  
  * **Percentual**: concede um desconto em porcentagem sobre o valor dos itens ou pedido.  
  * **Nominal fórmula**: calcula o desconto usando uma fórmula personalizada, subtraindo um valor absoluto definido pela lógica da fórmula.  
* **Frete**  
  * **Nominal**: aplica um desconto de valor fixo no frete.  
  * **Percentual**: aplica um desconto percentual sobre o valor do frete.  
  * **Grátis**: remove o custo do frete.  
  * **Máximo**: define um valor máximo que pode ser cobrado de frete. Qualquer valor que ultrapasse o máximo será descontado.  
* **Preço máximo**  
  * Define um valor limite que será aplicado como teto para o preço dos produtos elegíveis. Os itens não poderão ultrapassar esse valor após a aplicação da promoção.  
* **Brinde**  
  * **SKUs**: permite selecionar os SKUs (por nome ou ID) que serão oferecidos como brinde.  
  * **Quantidade de brindes**: define a quantidade de brindes que poderão ser selecionados, podendo ser por carrinho ou por item elegível.  
* **Valor de fidelidade**  
  * **Nominal**: atribui uma quantidade fixa de pontos de fidelidade.  
  * **Percentual**: calcula os pontos com base em uma porcentagem do valor do pedido.  
* **Tabela de preços promocionais**  
  * Aplica aos SKUs elegíveis os valores definidos em uma tabela de preços promocionais selecionada.

## Conferir as condições da promoção

As condições de aplicação da promoção de campanha são determinadas pelas audiências selecionadas anteriormente. A promoção será exibida e aplicada apenas para usuários que atenderem aos critérios configurados no público-alvo da campanha.

Para consultar ou editar as condições da audiência, clique em `Ver audiência.`

## Configurar restrições para o uso da promoção

Defina o número máximo de vezes que a promoção pode ser aplicada na loja ou por cliente.

* **Limitar o uso da promoção na loja**: ative esta opção para definir um número máximo de utilizações da promoção em toda a loja.  
* **Limitar o uso da promoção por cliente**: ative esta opção para restringir quantas vezes cada cliente pode aproveitar a promoção.

## Destacar a promoção na página de detalhes do produto

Defina nesta seção o destaque visual da promoção de campanha nos produtos exibidos na loja.

* **Destacar promoção nos produtos:**  ative esta opção para exibir um selo promocional nos produtos afetados pela promoção. Para que o destaque funcione corretamente, é necessário[configurar a exibição no módulo CMS da loja](/pt/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295).  
* **Informações adicionais:** clique em `Criar` para adicionar campos personalizados com nome e valor, que podem ser usados para customizações na loja.
