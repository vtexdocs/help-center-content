---
title: 'Extensibilidade no VTEX Sales App'
createdAt: 2026-05-18T19:46:33.357Z
updatedAt: 2026-05-18T19:46:33.357Z
contentType: tutorial
productTeam: Shopping
slugEN: extensibility-in-vtex-sales-app
locale: pt
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com nosso [Suporte](https://help.vtex.com/pt/support).

A Extensibilidade é a funcionalidade que permite à loja complementar a jornada de venda padrão no VTEX Sales App com os recursos necessários ao seu modelo de negócios. Este artigo apresenta as principais características e casos de uso das extensões e orienta na sua implementação.

## Funcionamento da Extensibilidade

A Extensibilidade é uma solução nativa para as lojas integrarem com APIs externas e interagirem com dados de outras aplicações com segurança e estabilidade.

Existem sete pontos de extensão no Sales App e cada um permite a interação dos usuários com dados e funções específicas. Estes pontos estão disponíveis nos seguintes contextos da jornada de venda:

* Carrinho de compras e checkout:

  ![extensibilidade_vtex_sales_app_1_cart_checkout_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_1_cart_checkout_PT.png)

* Menu e modal lateral:

  ![extensibilidade_vtex_sales_app_2_menu_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_2_menu_PT.png)

  ![extensibilidade_vtex_sales_app_3_drawer_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_3_drawer_PT.png)

  > ℹ️ Ao clicar no componente da extensão do menu, é aberto um modal à esquerda da interface, o que permite à loja criar múltiplos fluxos de navegação internos.

* Página de detalhes do produto (PDP):

  ![extensibilidade_vtex_sales_app_4_pdp_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_4_pdp_PT.png)

## Segurança e estabilidade de extensões

Sendo uma solução nativa, a Extensibilidade evita comportamentos inesperados e contribui para a continuidade das operações da loja. Alguns dos principais objetivos da funcionalidade são:

* **Segurança:** aumentar a segurança para desenvolvedores na implementação de códigos.
* **Estabilidade:** promover a estabilidade da aplicação, mesmo em cenários de falhas em customizações.
* **Compatibilidade:** preservar a compatibilidade das extensões com customizações, de forma que as evoluções do Sales App não comprometam as modificações realizadas pela loja.

## Casos de uso de extensões

A tabela a seguir apresenta exemplos nos quais o lojista se beneficia da Extensibilidade:

| Contexto | Descrição |
| :--- | :--- |
| Integração com serviços ou dados externos | Integração com programas de fidelidade, venda de serviços adicionais (como garantias ou seguros), aplicação de descontos em troca de produtos, comissionamento ou financiamento internos, entre outros. Em geral, são integrações com dados e serviços externos que já são utilizados no ecommerce ou loja física. |
| Integração com dados da VTEX | Integrar soluções da VTEX que não fazem parte da jornada padrão do Sales App, como o ecossistema de marketplace ou algumas soluções de pagamento, por exemplo. |
| Centralização de tarefas de vendedores | Permitir que o vendedor capture leads ou consulte determinados dados da gestão da loja, entre outros. Ao realizarem todas as tarefas cotidianas em uma única plataforma, os vendedores ganham em agilidade e eficiência. |

## Implementação da Extensibilidade

Para realizar a implementação, siga as orientações das próximas seções.

> ❗ A implementação da Extensibilidade do Sales App é responsabilidade dos lojistas e parceiros. Para isso, recomendamos seguir nossa documentação oficial.

### Antes de começar

Recomendamos que desenvolvedores instalem a **Skill de Extensibilidade**, que auxilia nas etapas de definição e implementação do projeto. Saiba mais em [VTEX Sales App Extensions Skill](#link1).

### 1. Planejar escopo do projeto

O primeiro passo é o planejamento, no qual o lojista ou parceiro deve delimitar o escopo do que será implementado.

**Exemplo:** uma loja vende material para construção e o escopo do seu projeto será adicionar à página de produto (PDP) uma calculadora que mede a quantidade de material necessário por metro quadrado (m²) construído. Por exemplo, o cliente da loja descobre que precisará comprar 16 quilogramas (kg) de argamassa para quatro metros quadrados.

### 2. Mapear experiência do usuário e requisitos técnicos

O segundo passo é mapear de forma detalhada os fluxos da experiência do usuário (UX) e os requisitos técnicos para essa implementação.

> ⚠️ Caso o projeto tenha fluxos e requisitos muito complexos, recomendamos designar para esta etapa um profissional especializado, como um designer ou gestor de produtos, por exemplo.

**Exemplo:** na loja de material para construção, de forma simplificada, o mapeamento incluiria como o usuário acessa a calculadora no fluxo de compra, como a calculadora aparece no storefront e quais cálculos ela permite realizar. O mapeamento dos requisitos técnicos envolveria detalhar como as operações dessa calculadora vão se relacionar com os dados dos sistemas de Checkout, Catálogo e Inventário da loja na implementação.

> ℹ️ Quando o recurso já está implementado no ecommerce, a experiência do usuário no Sales App deve ser a mais similar possível, para manter a consistência da experiência nos canais de venda da loja.

### 3. Checar a viabilidade técnica

O terceiro passo é validar a viabilidade técnica do projeto. Para isso, o desenvolvedor deve verificar se a implementação dos requisitos e integrações mapeados são compatíveis com as especificações dos pontos de extensão, conforme apresentado na [documentação de Extensibilidade para desenvolvedores](#link2).

> ⚠️ Caso seja identificada a inexistência de alguma função ou configuração obrigatória, recomendamos entrar em contato com nosso [Suporte](https://help.vtex.com/pt/support), descrevendo o caso de uso e as limitações encontradas.

### 4. Implementar o projeto

Por fim, o desenvolvedor implementa as extensões, conforme descrito na [documentação técnica de Extensibilidade](#link3). Recomendamos validar a implementação com testes locais antes de disponibilizar as extensões para os clientes da loja.

> ℹ️ A **Skill de Extensibilidade** pode auxiliar na etapa de implementação do projeto. Saiba mais em [VTEX Sales App Extensions Skill](#link4).
