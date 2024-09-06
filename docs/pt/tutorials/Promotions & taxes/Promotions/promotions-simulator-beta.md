---
title: 'Simulador de Promoções '
id: 4zc8SNqjqeIJ0ZRMhjlnvy
status: PUBLISHED
createdAt: 2022-09-13T21:22:59.620Z
updatedAt: 2024-03-13T19:31:16.281Z
publishedAt: 2024-03-13T19:31:16.281Z
firstPublishedAt: 2022-09-13T22:59:58.058Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: simulador-de-promocoes-beta
locale: pt
legacySlug: simulador-de-promocoes-beta
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

>⚠️ Os usuários devem possuir um [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) com autorização para acessar o módulo **Promoções **no Admin VTEX para utilizar o **Simulador de promoções**.

O **Simulador de promoções** é uma ferramenta que permite visualizar as promoções criadas na sua loja VTEX que foram aplicadas no carrinho de compras e os motivos para sua ativação. Também é possível testar a aplicação de promoções antes de ativá-las, incluindo promoções agendadas e inativas.

Com múltiplas possibilidades de configuração de promoções, o simulador possibilita ter visibilidade da [concorrência](https://help.vtex.com/pt/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270), do acúmulo de promoções durante a compra e das causas de ativação dessas promoções.

O **Simulador de promoções** está disponível para todas as lojas VTEX pelo [Cartman](https://help.vtex.com/pt/tutorial/configurar-o-cartman--1ACMTStZYkMqB0lTgwg451), ferramenta para lojistas na etapa do checkout. Para acessar o simulador, siga os passos abaixo:

1. Na barra superior do Admin VTEX, clique no botão `Pré-visualizar` para abrir a página de acesso restrito da sua loja.

    Se preferir, você pode acessá-la diretamente pela URL `https://{nomedaconta}.myvtex.com/`, substituindo `{nomedaconta}` pelo nome da sua conta VTEX.

2. Adicione produtos no carrinho e acesse o checkout em `https://{nomedaconta}.myvtex.com/checkout/#/cart`.
3. Clique no botão azul <img src="https://images.ctfassets.net/alneenqid6w5/2Z1d5lHtVM7E7SvL58C8UW/acc0fa24cc8ae2e008d4a8d0f466b035/cartman-removebg-preview.png" alt="cartman-icon" width="25"/> no canto inferior direito da página para iniciar o Cartman.
4. Clique em **Simulador de promoções**.

    Na nova janela, você verá uma listagem dos produtos presentes no seu carrinho. Será possível visualizar todas as promoções aplicadas e aplicáveis em cada um dos itens.

![Simulator-promo-pt-gif-1](https://images.ctfassets.net/alneenqid6w5/66PaJF2TBi2T1VBEFPlLuz/be250ed52b2c5abfcbf1a0debf120c98/simulador-promo-pt-230706.gif)

A interface do **Simulador de promoções** apresenta as seguintes informações:

| Coluna | Descrição |
|---|---|
| **Produtos** | Lista dos produtos contidos no carrinho. |
| **Preço** | Preço computado anterior às promoções (**De**) e preço final (**Por**) do produto com promoções aplicadas. |
| **Quantidade** | Quantidade de itens no carrinho. |
| **Total** | Preço total que será cobrado pelo produto, considerando descontos da promoção e quantidade de itens. |
| **Desconto** | Status do desconto no carrinho, que pode ser `Aplicado` ou `Não aplicado`. O status `Aplicado` indica que ao menos uma promoção foi aplicada ao produto. |

>ℹ️ Envie um feedback sobre sua experiência utilizando o **Simulador de promoções** a partir do botão de megafone <i class="fas fa-megaphone"></i> no canto direito da tela.

### Atualizar simulador

Se precisar adicionar ou remover itens do carrinho, você pode manter a janela do simulador aberta. Após fazer as alterações no carrinho, clique em `Atualizar` no **Simulador de promoções** para analisar as promoções aplicadas ao carrinho atualizado.

### Buscar e filtrar promoções

A ferramenta apresenta uma barra de busca para encontrar promoções pelo nome do produto ou nome da promoção. Além disso, você pode filtrar as promoções por **Tipo de promoção** ([Regular](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI), [Compre Junto](https://help.vtex.com/pt/tutorial/compre-junto--tutorials_323), [Leve Mais por Menos](https://help.vtex.com/pt/tutorial/leve-mais-por-menos--tutorials_325), [Desconto Progressivo](https://help.vtex.com/pt/tutorial/desconto-progressivo--tutorials_324), [Compre e Ganhe](https://help.vtex.com/pt/tutorial/compre-e-ganhe--tutorials_322) ou [Promoção de Campanha](https://help.vtex.com/pt/tutorial/promocao-de-campanha--1ChYXhK2AQGuS6wAqS8Ume)) e **Desconto** (Aplicado ou Não aplicado).

### Ver detalhes das promoções aplicadas

Ao clicar em cada produto, é possível visualizar mais informações sobre as promoções aplicadas, detalhes sobre seus efeitos e os motivos para ativá-las. Também é possível ver as promoções não aplicadas e as razões para não terem sido acionadas.

### Editar promoções

Para editar uma promoção, siga os passos abaixo:

1. No **Simulador de promoções**, clique na linha de um produto ou na seta <i class="fas fa-chevron-right"></i>.
2. Clique no nome da promoção que deseja editar.

   Você será redirecionado(a) ao formulário da promoção.

3. Edite os [campos da promoção](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#quais-os-dados-gerais-desta-promocao).
4. Ao concluir as alterações, clique no botão `Salvar`.

### Simular promoções

O **Simulador de promoções** possibilita testar a aplicação de uma outra promoção ou simular o que aconteceria ao desativar promoções aplicadas. Para isso, clique no botão `Selecionar promoções`, no topo direito da página, conforme ilustrado na imagem abaixo.

![ui-Simulator-promo-pt-gif-2](https://images.ctfassets.net/alneenqid6w5/4CkGZCw0142IDUwH8VVf7A/6bc4e0a9ee37002a0d265d57a156bff6/ui-simulador-promo-pt-230706.gif)

Para fazer uma simulação, siga as instruções abaixo:

1. No **Simulador de promoções**, clique em `Selecionar promoções`, no topo direito da página.

    Você verá uma lista com todas as promoções cadastradas na sua loja, incluindo ativas, pausadas, agendadas e finalizadas.

2. Selecione uma ou mais promoções para simular a aplicação delas no carrinho. Você também pode desmarcar promoções ativas, se desejar simular sua desativação.
3. Clique no botão `Simular`.

    Você verá o resultado da simulação a partir das promoções selecionadas. Para visualizar se as promoções testadas foram aplicadas aos itens do carrinho na simulação, observe o status da coluna **Desconto** ou clique no produto.

>ℹ️ É possível aplicar promoções em produtos que já possuem uma promoção ativa. Apesar do conflito entre elas, o sistema VTEX sempre seleciona a promoção mais benéfica para os clientes da sua loja, considerando o preço total dos itens ou frete.

### Saiba mais

* [Como funcionam as promoções](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR)
* [Promoções para cenários específicos](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy)
* [Configurar o Cartman](https://help.vtex.com/pt/tutorial/configurar-o-cartman--1ACMTStZYkMqB0lTgwg451)
