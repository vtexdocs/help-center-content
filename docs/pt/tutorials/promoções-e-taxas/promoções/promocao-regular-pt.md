---
title: 'Promoção Regular'
id: tutorials_327
status: PUBLISHED
createdAt: 2017-04-27T22:07:59.690Z
updatedAt: 2025-08-28T18:35:47.144Z
publishedAt: 2025-08-28T18:35:47.144Z
firstPublishedAt: 2017-04-27T23:03:15.647Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: regular-promotion
legacySlug: promocao-regular
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

A VTEX permite a [criação de diferentes tipos de promoção](https://help.vtex.com/pt/tutorial/como-criar-promocoes--tutorials_320#como-criar-promocoes) para atender a variados cenários comerciais, sendo a **Promoção Regular** a mais comum. Esse tipo de promoção oferece uma forma estruturada de conceder descontos, permitindo a combinação de múltiplas condições, restrições de uso e benefícios.

Para configurar a Promoção Regular, siga os passos abaixo:

- [Criar a promoção](#criar-a-promocao)  
- [Definir condições da Promoção regular](#definir-condicoes-da-promocao-regular)  
- [Configurar condições de aplicação da promoção](#configurar-condicoes-de-aplicacao-da-promocao)  
- [Configurar restrições para o uso da promoção](#configurar-restricoes-para-o-uso-da-promocao)  
- [Configurar acúmulo e concorrência](#configurar-acumulo-e-concorrencia)  
- [Destacar a promoção na página de produto](#destacar-a-promocao-na-pagina-de-produto)

## Criar a promoção

Para criar a promoção no Admin VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse **Promoções > Promoções**, ou digite **Promoções** na barra de busca no topo da página.  
2. Clique em `Criar promoção`.  
3. Selecione a opção **Regular**`.`  
4. Preencha os campos da página. A tabela abaixo exibe os detalhes necessários.  
5. Clique em `Salvar`.

| Campo | Descrição |
| ----- | --------- |
| **Nome** | Escolha um nome claro e objetivo para a promoção (até 150 caracteres). |
| **Status** | Defina se a promoção estará **Ativa** ou **Inativa**. Ative como <i class="fas fa-toggle-on" aria-hidden="true"></i> para aplicar a promoção conforme as datas e horários configurados. Desative como <i class="fas fa-toggle-off" aria-hidden="true"></i> para pausá-la, mesmo que esteja dentro do período definido. |
| **Descrição** | Use este campo para registrar o objetivo da promoção, como o tipo de campanha ou sazonalidade. O limite é de 10.000 caracteres. |
| **Data de início e horário de início** | Selecione a data e o horário exatos para ativar a promoção automaticamente. |
| **Data e horário de término** | Defina a data e o horário exatos para encerrar a promoção. Após esse momento, a campanha será desativada automaticamente. A data deve ser posterior à data e horário de início. |
| **Usar configurações de recorrência** | Marque esta opção para repetir automaticamente a promoção em dias e horários específicos. Isso permite configurar ações sazonais para dias e horários definidos. Após ativar, configure os dias e horários da recorrência de acordo com os parâmetros da campanha. |

### Definir os sellers

Nesta seção, defina se a promoção será aplicada a todos os sellers ou apenas a sellers específicos. Escolha uma das opções abaixo:

- **Todos:** aplica a promoção a todos os Sellers cadastrados. Use esta opção quando a campanha incluir todos os produtos de todos os sellers.  
- **Iguais a:** aplica a promoção apenas aos Sellers informados. Insira os identificadores no campo correspondente.  
- **Diferentes de**: aplica a promoção a todos os Sellers, exceto os informados.

### Selecionar políticas comerciais

Escolha as políticas comerciais às quais a promoção será aplicada:

- **Todas:** aplica a promoção a todas as políticas comerciais cadastradas.  
- **Iguais a:** selecione as políticas comerciais que deseja incluir.  
- **Diferentes de:** selecione as políticas comerciais que deseja excluir.

## Definir condições da Promoção regular

Na seção **Na compra de**, defina quais itens devem estar no carrinho para ativar a promoção:

- **Aplicar a todos os itens da loja:** a promoção será aplicada a todos os itens da sua loja.  
- **Aplicar aos itens que atendem às restrições definidas**: a promoção será aplicada apenas aos itens que atenderem aos critérios.

As restrições podem ser configuradas com base em:

- **SKUs:** permite aplicar a promoção a itens específicos identificados por SKU.  
  - **Iguais a**: aplica apenas aos SKUs listados.  
  - **Diferentes de**: aplica a todos, exceto os listados.  
- **Produtos:** baseie-se no produto, independentemente do SKU.  
  - **Iguais a**: aplica a promoção apenas aos produtos selecionados.  
  - **Diferentes de**: aplica a promoção a todos os produtos, exceto os selecionados.  
- **Coleções:** aplique com base nas coleções cadastradas.  
  - **Iguais a**: aplica a promoção somente às coleções selecionadas.  
  - **Diferentes de**: aplica a promoção a todas as coleções, exceto as selecionadas.  
- **Categorias**: aplique com base nas categorias do catálogo.  
  - **Iguais a**: aplica a promoção apenas às categorias selecionadas.  
  - **Diferentes de**: aplica a promoção a todas as categorias, exceto as selecionadas.  
- **Marcas:** aplique a promoção com base nas marcas dos produtos.  
  - **Iguais a**: aplica a promoção apenas às marcas selecionadas.  
  - **Diferentes de**: aplica a promoção a todas as marcas, exceto as selecionadas.

**O cliente ganha:**  
Selecione o benefício a ser aplicado quando as condições forem atendidas. As opções incluem:

- **Desconto**  
  - **Nominal:** define um valor fixo de desconto (ex: R$ 20,00).  
  - **Percentual:** aplica um desconto em porcentagem (ex: 10%).  
  - **Nominal fórmula:** defina um desconto nominal, calculado com base em uma fórmula. Esse tipo de desconto não é percentual, ele subtrai um valor absoluto do total do pedido ou do item, conforme a lógica configurada na fórmula.  
- **Frete**  
  - **Nominal:** define um valor fixo de desconto para frete.  
  - **Percentual**: aplica um desconto percentual sobre o frete.  
  - **Grátis**: remove o custo do frete.  
  - **Máximo**: define um valor máximo que pode ser cobrado. Qualquer valor calculado que ultrapasse o máximo será descontado.  
- **Preço máximo:** define um valor limite que será aplicado como teto para o preço dos produtos elegíveis. Os itens não poderão ultrapassar esse valor após a aplicação da promoção.  
- **Brinde**  
  - **SKUs:** permite a seleção dos SKUs (por nome ou ID) correspondentes ao brinde oferecido.  
  - **Quantidade de brindes:** define a quantidade de brindes que poderão ser selecionados, podendo ser por carrinho ou por item elegível.  
- **Valor de fidelidade**  
  - **Nominal**: atribui uma quantidade fixa de pontos.  
  - **Percentual**: calcula os pontos com base no valor do pedido.  
- **Tabela de preços promocionais**: aplica aos SKUs o valor definido em uma tabela de preços selecionada.

## Configurar condições de aplicação da promoção

Nesta seção, você define os critérios que precisam ser atendidos para que a promoção seja aplicada. É possível combinar diferentes condições de acordo com a configuração da campanha.

- **Valor do pedido**: aplique a promoção quando o valor total do carrinho atingir ou ultrapassar o valor definido.  
- **Preço do item**: aplique a promoção apenas a itens com valor unitário dentro do intervalo configurado.  
- **Preço de lista**: considere o valor original do produto (sem descontos) para validar a aplicação da promoção.  
- **Número do BIN do cartão:** aplique a promoção apenas quando o cartão utilizado pertencer a uma bandeira, banco ou categoria identificada por um número BIN específico. Importe um arquivo `.txt` ou `.csv` com a lista de BINs, informando um número por linha.  
- **Tags de marketing**: aplique a promoção quando a compra for realizada por meio do [módulo de assinaturas](https://help.vtex.com/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453) da VTEX.  
- **Afiliados**: selecione os afiliados marketplaces ou parceiros elegíveis para a promoção. Para mais informações acesse [O que é afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0).  
- **Cluster de clientes:** selecione um [cluster de clientes](https://help.vtex.com/pt/tutorial/desconto-progressivo--tutorials_324) já criado no Master Data, seguindo o formato `field=value` ou `field contains value`. Escolha uma das seguintes opções:  
  - **Todos os seguintes**: aplique a promoção apenas se todos os critérios do cluster forem atendidos.  
  - **Pelo menos um dos seguintes:** aplique a promoção se pelo menos um dos critérios do cluster for atendido.  
- **Local de entrega:** aplica a promoção com base no endereço de entrega associado ao pedido. As condições podem ser configuradas utilizando os seguintes critérios:  
  - **Países de entrega:** selecione os países de entrega nos quais a promoção será aplicada. Você pode adicionar até 50 países nesta lista. A promoção será aplicada apenas para pedidos cuja entrega esteja associada aos países configurados.  
  - **CEP de entrega:** permite configurar intervalos de CEP para limitar a aplicação da promoção a regiões específicas.  
    - **Escolha Incluir ou Excluir:** defina se a promoção será aplicada aos intervalos configurados (incluir) ou excluídas deles (Excluir).  
    - **Configure os intervalos de CEP:** preencha os campos “De” e “Até” com os códigos postais desejados.  
    - **Adicione múltiplos intervalos:** utilize a opção **Adicionar intervalo** para incluir múltiplos intervalos de CEP, conforme os critérios da campanha.  
- **Tipo de frete**: aplica a promoção somente quando for selecionado um dos tipos de frete definidos.  
- **Meios de pagamento:** a promoção é aplicada somente quando o cliente utilizar um dos meios de pagamento previamente configurados e não houver mais de um meio de pagamento no carrinho.  
- **Número de parcelas**: aplica a promoção apenas se o número de parcelas estiver dentro do intervalo configurado.  
  - **Mínimo de parcelas**: defina o número mínimo de parcelas exigido para que a promoção seja válida.  
  - **Máximo de parcelas**: defina o número máximo de parcelas permitido. A promoção será aplicada apenas se o número de parcelas do pedido for igual ou inferior ao valor definido.

> ℹ️ Essa condição não se aplica a pagamentos via boleto, vale-presente ou pedidos com mais de um meio de pagamento.

- **UTM:** aplique a promoção quando o acesso à loja for feito por uma URL com parâmetros UTM ou quando o cliente usar um cupom vinculado a esses parâmetros. Use apenas letras, números, hífens e *underscores* ao definir os valores dos campos UTM. Para mais detalhes, consulte o artigo [Rastreamento de campanhas com parâmetros UTM](https://help.vtex.com/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium).

**Defina os parâmetros abaixo, se necessário:**

- **Utm_source:** permite o desconto quando a navegação for realizada com a utm_source configurada.  
- **Utm_campaign:** permite o desconto quando a navegação for realizada com o parâmetro utm_campaign configurado.  
- **Criar cupom a partir dos parâmetros UTM acima:** gere um cupom com base nos parâmetros UTM inseridos nos campos `UTM_source` e `UTM_campaign`.  
- **Utmi_cp:** o desconto será aplicado apenas se a navegação incluir o parâmetro `utmi_cp` com o valor cadastrado. Para mais detalhes, consulte o artigo [O que são as UTMs internas utmi_cp, utmi_pc e utmi_p](https://help.vtex.com/pt/tutorial/what-are-the-internal-utms).  
- **Ver cupons vinculados:** permite visualizar os cupons que já foram associados aos parâmetros UTM definidos.

## Configurar restrições para o uso da promoção

Use esta seção para limitar quantas vezes a promoção pode ser aplicada na loja ou por cliente.

- **Limitar o uso da promoção na loja**: ative esta opção para definir um número máximo de utilizações da promoção em toda a loja.  
- **Limitar o uso da promoção por cliente**: ative esta opção para restringir quantas vezes cada cliente pode aproveitar a promoção.  
- **Limitar a quantidade de itens elegíveis:** permite restringir o número máximo de itens por pedido que podem receber o desconto. O comportamento dessa configuração varia de acordo com a opção selecionada em **"O cliente ganha"**.  
  - Para as condições **Desconto nominal**, **Desconto nominal: fórmula** e **Preço máximo por item**, o limite é aplicado ao total de itens no carrinho.  
  - Para a condição **Desconto percentual**, é possível escolher se o limite será aplicado por carrinho, por produto ou por SKU.

## Configurar acúmulo e concorrência

Defina se a promoção pode ser aplicada junto com outras promoções ou com preços ajustados manualmente. Essas configurações controlam como a promoção se comporta em cenários combinados.

- **Permitir acumular com outras promoções:** permite combinar esta promoção com outras que estejam ativas no mesmo pedido. Por padrão, a promoção já acumula descontos de frete e brindes. Para mais detalhes, consulte o artigo [Como funciona a concorrência de promoções](https://help.vtex.com/pt/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270).  
- **Permitir acumular com preços manuais**: permite que a promoção seja aplicada mesmo quando o produto já possui um preço definido manualmente.

## Destacar a promoção na página de produto

Use esta seção para destacar a promoção visualmente nos produtos exibidos na vitrine da loja.

- **Destacar promoção nos produtos:** ative esta opção para exibir um selo promocional nos produtos afetados pela promoção. Para que o destaque funcione corretamente, é necessário [configurar a exibição no módulo CMS da loja](https://help.vtex.com/pt/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295).  
- **Informações adicionais:** clique em `Criar` para adicionar campos personalizados com nome e valor, que podem ser usados para customizações na loja.

