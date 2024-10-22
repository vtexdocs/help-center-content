---
title: ' Criar uma promoção por assinatura'
id: 3ROT13HYNeUIv0plDqgNed
status: PUBLISHED
createdAt: 2019-10-31T14:21:23.412Z
updatedAt: 2024-08-09T19:35:32.700Z
publishedAt: 2024-08-09T19:35:32.700Z
firstPublishedAt: 2019-11-05T18:40:57.634Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1E4UkWguFZAXjkguvNHPIv
slugEN: creating-a-subscription-promotion
locale: pt
legacySlug: como-criar-uma-promocao-por-assinatura
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Neste artigo, você encontrará o passo a passo para criar promoções de assinatura em [Promoção Regular](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI). 

1. Acesse o módulo **Promoções e Taxas**.
2. Clique em **Promoções**.
3. Clique no botão `Nova Promoção`.
4. Selecione o botão `Promoção Regular`.
5. Selecione o campo **É um pedido de assinatura** na seção **Quais as condições para a promoção ser válida?**. Essa opção define que a promoção será aplicada em pedidos de assinatura. Apenas os produtos com assinatura no carrinho receberão o desconto. Para entender as possibilidades de configuração, veja as condições a seguir:
 ![frequenciapt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Promotions & taxes/Promotions/como-criar-uma-promocao-por-assinatura_1.png)
- **Pedido original**: pedidos que geram as assinaturas, mas ainda não fazem parte dos ciclos de assinatura.
- **Pedidos recorrentes**: pedidos que fazem parte dos ciclos de assinatura.
- **Filtrar por**: seleção que filtra quais pedidos de assinatura que serão válidos para a promoção.
  - **Frequência**: seleção da frequência dos pedidos por assinatura em dias, semanas, meses ou anos.
  - **Número do ciclo**: seleção dos ciclos da assinatura que serão incluídos à promoção. Essa opção é desbloqueada apenas se **Pedidos recorrentes** for selecionado anteriormente. 

Configure corretamente a frequência e o ciclo para garantir que a promoção seja aplicada aos pedidos recorrentes. A frequência define o intervalo entre os pedidos, enquanto o ciclo determina a partir de qual pedido a promoção será aplicada. Se você não configurar ambos os parâmetros, a promoção pode não ser aplicada conforme esperado, afetando apenas o primeiro pedido ou nenhum dos pedidos recorrentes. Portanto, selecione e configure ambos os parâmetros de acordo com as necessidades específicas da promoção.

**Exemplo**: Ao selecionar **Frequência** a cada 2 semanas e **Número do ciclo** igual a 4, a promoção só será aplicada no quarto ciclo, ou seja, assim que este pedido for repetido. Veja este cenário ilustrado na tabela a seguir:

| Data       | Número do ciclo | Validez                    |
|------------|-----------------|----------------------------|
| 25/12/2021 | Primeiro ciclo  | A promoção será válida     |
| 08/01/2022 | Segundo ciclo   | A promoção não será válida |
| 22/01/2022 | Terceiro ciclo  | A promoção não será válida |
| 05/02/2022 | Quarto ciclo    | A promoção será válida     |

>ℹ️ Não é possível configurar promoções por UTM e promoções de assinatura usando cupom em pedidos recorrentes, o cupom será aplicado apenas a pedidos originais.

<ol start="6">
<li>Preencha <a href="https://help.vtex.com/pt/tutorial/promocao-regular--tutorials_327" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">os campos restantes da promoção</a>.</li><br>
<li>Clique em <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Salvar</span> para finalizar.</li>
</ol>
