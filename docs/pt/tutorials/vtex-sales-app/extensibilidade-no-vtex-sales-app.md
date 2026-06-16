---
title: 'Extensibilidade no VTEX Sales App'
createdAt: 2026-05-18T19:46:33.357Z
updatedAt: 2026-06-16T19:46:33.357Z
contentType: tutorial
productTeam: Shopping
slugEN: vtex-sales-app-extensibility
locale: pt
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com nosso [Suporte](https://help.vtex.com/pt/support).

A **Extensibilidade** é a funcionalidade que permite personalizar a jornada padrão de vendas no VTEX Sales App por meio da inclusão de recursos alinhados ao modelo de negócio da loja. Com ela, a loja pode integrar experiências personalizadas em pontos específicos da interface sem precisar criar uma solução do zero.

Este artigo apresenta uma visão geral da funcionalidade, casos de uso das extensões e orientações para a implementação.

> ❗ A implementação da Extensibilidade do Sales App é responsabilidade dos lojistas e parceiros. Para isso, recomendamos seguir nossa [documentação para desenvolvedores](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation).

## Funcionamento da Extensibilidade

A Extensibilidade é uma solução nativa para as lojas integrarem-se a APIs externas e interagirem com dados de outras aplicações, com segurança e estabilidade. A funcionalidade usa pontos de extensão predefinidos, nos quais você pode renderizar componentes e adicionar recursos sem alterar o fluxo principal do Sales App.

Existem oito pontos de extensão no Sales App:

* `cart.cart-list.after`
* `cart.cart-item.after`
* `cart.order-summary.after`
* `pdp.sidebar.before`
* `pdp.sidebar.after`
* `pdp.content.after`
* `menu.item`
* `menu.drawer-content`

> ℹ️ Saiba mais sobre os pontos de extensão em [Exploring Sales App extensions](https://developers.vtex.com/docs/guides/exploring-sales-app-extensions).

Cada ponto de extensão permite a interação dos usuários com dados e funções específicas, e eles estão disponíveis nos seguintes contextos da jornada de venda:

* Carrinho de compras (`cart.cart-item.after`, `cart.cart-list.after`) e checkout (`cart.order-summary.after`):

  ![extensibilidade_vtex_sales_app_1_cart_checkout_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_1_cart_checkout_PT.png)

* Página de detalhes do produto (`pdp.sidebar.before`, `pdp.sidebar.after`, `pdp.content.after`):

  ![extensibilidade_vtex_sales_app_4_pdp_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_4_pdp_PT.png)
  
* Menu (`menu.item`) e modal lateral (`menu.drawer-content`):

  ![extensibilidade_vtex_sales_app_2_menu_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_2_menu_PT.png)

  ![extensibilidade_vtex_sales_app_3_drawer_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_3_drawer_PT.png)

  > ℹ️ Quando a pessoa usuária clica no componente da extensão do menu, o Sales App abre um modal à esquerda da interface. Esse comportamento permite criar múltiplos fluxos de navegação internos.

## Segurança e estabilidade de extensões

Sendo uma solução nativa, a Extensibilidade evita comportamentos inesperados e contribui para a continuidade das operações da loja. Alguns dos principais objetivos da funcionalidade são:

* **Segurança:** aumentar a segurança para desenvolvedores na implementação de código.
* **Estabilidade:** promover a estabilidade da aplicação, mesmo em cenários de falhas em customizações.
* **Compatibilidade:** preservar a compatibilidade das extensões com customizações, de forma que as evoluções do Sales App não comprometam as modificações realizadas pela loja.

## Casos de uso de extensões

A tabela a seguir apresenta exemplos nos quais o lojista se beneficia da Extensibilidade:

| Contexto | Descrição |
| :--- | :--- |
| Integração com serviços ou dados externos | Integração com programas de fidelidade, venda de serviços adicionais (como garantias ou seguros), aplicação de descontos em troca de produtos, comissionamento ou financiamento internos, entre outros. Em geral, são integrações com dados e serviços externos que já são utilizados no ecommerce ou loja física. |
| Integração com dados da VTEX | Integração com soluções da VTEX que não fazem parte da jornada padrão do Sales App, como o ecossistema de marketplace ou algumas soluções de pagamento. |
| Centralização de tarefas de vendedores | Centralização das tarefas cotidianas dos vendedores, como a captura de leads e a consulta a dados da gestão da loja, em uma única plataforma, para aumentar a agilidade e a eficiência. |

## Antes de começar

Recomendamos que desenvolvedores instalem a skill de extensões do Sales App, que auxilia nas etapas de definição e implementação do projeto. Saiba mais em [VTEX Sales App Extensions Skill](https://developers.vtex.com/docs/guides/vtex-sales-app-extensions-skill).

## Planejar escopo do projeto

O primeiro passo é o planejamento, no qual o lojista ou parceiro deve delimitar o escopo do que será implementado.

**Exemplo:** uma loja vende material para construção e o escopo do seu projeto será adicionar à página de produto (PDP) uma calculadora que mede a quantidade de material necessário por metro quadrado (m²) construído. O cliente da loja então será capaz de descobrir que precisa comprar 4 quilogramas (kg) de argamassa para cada metro quadrado.

## Mapear experiência do usuário e requisitos técnicos

O segundo passo é mapear de forma detalhada os fluxos da experiência do usuário (UX) e os requisitos técnicos para essa implementação.

> ⚠️ Caso o projeto tenha fluxos e requisitos muito complexos, recomendamos designar para esta etapa um profissional especializado, como um designer ou gestor de produtos, por exemplo.

**Exemplo:** na loja de materiais para construção, de forma simplificada, o mapeamento incluiria como o usuário acessa a calculadora no fluxo de compra, como ela é exibida na interface e quais cálculos ela permite realizar. O mapeamento dos requisitos técnicos envolveria detalhar como as operações dessa calculadora se relacionarão com os dados dos sistemas de Checkout, Catálogo e Inventário da loja durante a implementação.

> ℹ️ Quando o recurso já está implementado no ecommerce, a experiência do usuário no Sales App deve ser a mais similar possível, para manter a consistência da experiência nos canais de venda da loja.

## Checar a viabilidade técnica

O terceiro passo é validar a viabilidade técnica do projeto. Para isso, o desenvolvedor deve verificar se os requisitos e integrações mapeados são compatíveis com as especificações dos pontos de extensão, conforme apresentado na [documentação de Extensibilidade para desenvolvedores](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation).

> ⚠️ Caso seja identificada a inexistência de alguma função ou configuração obrigatória, recomendamos entrar em contato com nosso [Suporte](https://help.vtex.com/pt/support), descrevendo o caso de uso e as limitações encontradas.

## Implementar o projeto

Por fim, o desenvolvedor implementa as extensões, conforme descrito na [documentação técnica de Extensibilidade](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation). Recomendamos validar a implementação com testes locais antes de disponibilizar as extensões para os clientes da loja.

> ℹ️ A **Extensions Skill** pode auxiliar na etapa de implementação do projeto. Saiba mais em [VTEX Sales App Extensions Skill](https://developers.vtex.com/docs/guides/vtex-sales-app-extensions-skill).
