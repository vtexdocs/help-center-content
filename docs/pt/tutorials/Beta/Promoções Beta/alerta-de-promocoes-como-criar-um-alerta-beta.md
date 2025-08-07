---
title: 'Alerta de promoções: como criar um alerta (Beta)'
id: 14nC51OlGoCSBLlBkZhkRR
status: PUBLISHED
createdAt: 2022-11-18T17:08:57.812Z
updatedAt: 2024-09-27T14:06:11.570Z
publishedAt: 2024-09-27T14:06:11.570Z
firstPublishedAt: 2022-11-18T19:07:21.814Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: promotion-alerts-how-to-create-an-alert-beta
legacySlug: alerta-de-promocoes-como-criar-um-alerta-beta
locale: pt
subcategoryId: 6iTRZiMeCGXYiO2ckABFZi
---

<div class = "alert alert-info">
Este módulo está em fase Beta, o que significa que estamos trabalhando para aprimorá-lo. Em caso de dúvidas, entre em contato com <a href="https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.
</div>

Criar promoções é uma boa estratégia para atrair mais compradores para o ecommerce. Ao configurá-las, é fundamental ter atenção para que os descontos aplicados resultem nos efeitos esperados, pois erros durante o cadastro de promoções podem causar perdas de receita.

Para minimizar efeitos indesejados em promoções, a página **Alerta de promoções** possibilita que você crie alertas com condições de verificar se os preços e promoções estão corretos e defina [ações preventivas](#acoes-preventivas) para evitar vendas com preços inesperados. Entretanto, é necessário que um pedido seja realizado para ativar o primeiro alerta.

Caso as [condições](#condicoes) definidas no alerta sejam identificadas, o sistema gera um alerta com informações sobre o produto vendido a preços inesperados e aplica as [ações preventivas](#acoes-preventivas) for configurada, o cenário indesejado não ocorrerá novamente, pois a promoção terá sido desativada.

Por exemplo, imagine que você criou um alerta e, na etapa [Ações preventivas](#acoes-preventivas), marcou a opção `Desative as promoções imediatamente`. Assim, se um produto for vendido dentro das condições que foram definidas anteriormente, o sistema VTEX irá desativar imediatamente a promoção vigente.

Confira as instruções a seguir para criar um novo alerta:

1. No Admin VTEX, acesse *Promoções > Alerta de promoções* , ou digite *Alerta de promoções* na barra de busca no topo da página.
2. Clique em `Criar Alerta`. Você será direcionado(a) à página para cadastrar um novo alerta.
3. Preencha as informações do alerta:
   * **Status:** ao criar um novo alerta, ele automaticamente terá o status Ativo. Para desativá-lo, clique no switch <i class="fas fa-toggle-on"></i>.
   * **Nome:** nome que você deseja dar ao alerta de promoção.
   * **Descrição (opcional):** breve texto informativo sobre o alerta que está sendo criado.
4. Escolha as condições para ativar o alerta, conforme descrito na seção [Condições](#condicoes).
5. Defina as ações preventivas que serão executadas pelo alerta, conforme descrito na seção [Ações preventivas](#acoes-preventivas).
6. Determine as restrições para a aplicação do alerta, conforme descrito na seção [Restrições](#restricoes-opcional). Esta etapa é opcional.
7. Clique em `Salvar`.

Ao concluir, o novo alerta de promoção terá sido criado com sucesso.

<div class = "alert alert-info">
Ao configurar alertas para produtos com multiplicadores de unidade, como itens vendidos em frações (ex: 0,5 kg), é importante saber que o sistema pode sinalizar promoções incorretamente para esses produtos. Isso ocorre porque ele não consegue identificar com precisão o preço por grama ou outras frações de unidade. Por isso, recomendamos revisar os alertas com cuidado ao gerenciar itens pesáveis.
</div>

## Condições

Nesta seção do formulário,  você precisa configurar as condições para ativar o alerta. No campo `Quando o desconto for maior que`, insira um valor até 99,99. O valor será correspondente ao percentual (%) que será monitorado pela ferramenta.

Depois de determinar o percentual, você deverá escolher entre duas opções onde as condições do novo alerta serão aplicadas:

- **Em todo catálogo:** todos os produtos do seu Catálogo na VTEX serão incluídos no alerta.
- **Produtos específicos:** você poderá selecionar os produtos incluídos no alerta a partir dos critérios a seguir.
   * Marca
   * Coleção
   * Produto
   * Categoria
   * SKU

Em seguida, um campo surgirá para que você determine detalhes do critério que você selecionou anteriormente. Por exemplo, se você selecionou o critério **Marca**, deverá determinar qual marca será incluída na condição.

Depois de definir a condição, clique em `Confirmar`.

## Ações preventivas

Nesta seção, você deve configurar as ações a serem executadas quando o alerta for disparado. É possível selecionar uma ou duas ações:

- **Desative as promoções imediatamente:** clique sobre o *switch* <i class="fas fa-toggle-on"></i> para ativar a ação preventiva que desativa imediatamente a promoção caso ela não se encaixe nas condições definidas.
- **Alerte por e-mail:** clique sobre o *switch* <i class="fas fa-toggle-on"></i> para ativar o recebimento de um alerta via e-mail quando uma promoção não se encaixa nas condições definidas. Você deverá selecionar o e-mail em que deseja receber os alertas. 

## Restrições (opcional)

Nesta seção, você pode escolher quais promoções devem ser desconsideradas pelo alerta, se desejar.

Para isso, clique sobre o *switch* <i class="fas fa-toggle-on"></i> do campo `Excluir promoções específicas do alerta` para ativar a restrição. Um campo surgirá para que  você selecione as promoções específicas que serão excluídas do alerta.

Caso você ative essa opção e não selecione nenhuma promoção, o alerta não poderá ser salvo.

## Saiba mais

- [Alerta de promoção](https://help.vtex.com/pt/tutorial/alerta-de-promocoes-beta--3vDTjwoNtaxA1PUrkpEQLW)
- [Como funcionam as promoções](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR)
