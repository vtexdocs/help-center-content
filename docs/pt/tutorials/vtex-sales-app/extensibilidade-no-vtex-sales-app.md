---
title: 'Extensibilidade no VTEX Sales App'
createdAt: 2026-04-09T19:46:33.357Z
updatedAt: 2026-04-09T19:46:33.357Z
contentType: tutorial
productTeam: Shopping
slugEN: extensibility-in-vtex-sales-app
locale: pt
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com nosso [Suporte](https://help.vtex.com/pt/support).

A Extensibilidade é a solução que permite às lojas complementarem a jornada de venda padrão no VTEX Sales App com os recursos necessários a sua operação. Este artigo aprensenta as principais características e casos de uso das extensões e orienta como implementar a solução.

> ⚠️ A implementação da Extensibilidade do Sales App é responsabilidade dos clientes e parceiros. Para isso, recomendamos seguir nossa documentação oficial.

## Funcionamento da Extensibilidade

A Extensibilidade é uma solução nativa para as lojas VTEX integrarem com APIs externas e interagirem com dados de outras aplicações com segurança e estabilidade.

Existem sete pontos de extensão no Sales App e cada um permite a interação dos usuários com dados e funções específicas. Estes pontos estão disponíveis nos seguintes contextos:

* Carrinho de compras e checkout:

  ![extensibilidade_vtex_sales_app_1_cart_checkout_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_1_cart_checkout_PT.png)

* Menu e modal lateral:

  ![extensibilidade_vtex_sales_app_2_menu_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_2_menu_PT.png)

  ![extensibilidade_vtex_sales_app_3_drawer_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_3_drawer_PT.png)

  > ℹ️ Ao clicar no componente da extensão do menu, é aberto o modal que fica à esquerda da interface. Isso permite às lojas criarem múltiplos fluxos de navegação interna.

* Página de detalhes do produto (PDP)

  ![extensibilidade_vtex_sales_app_4_pdp_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_4_pdp_PT.png)

## Segurança e estabilidade de extensões

Sendo uma solução nativa, a Extensibilidade evita comportamentos inesperados e contribui para a segurança e estabilidade da operação da loja. Seu desenvolvimento foi pensado principalmente para os seguintes objetivos:

* Aumentar a segurança com que as pessoas desenvovedoras implementam códigos no Sales App.
* Promover a estabilidade da aplicação, mesmo em cenários de falhas em customizações feitas pela loja.
* Preservar a compatibilidade das extensões com customizações, de forma que evoluções no Sales App não comprometam as modificações existentes.

## Casos de uso da Extensibilidade

Entre os muitos cenários possíveis viabilizados pelas extensões, alguns exemplos são:

* **Integrar serviços ou dados externos:** Integrar programas de fidelidade, venda de serviços adicionais como garantias ou seguros, aplicação de descontos em troca de produtos, motores de comissionamento ou financiamento, ou outros dados e serviços gerados externamente. Geralmente esses serviços já são usados no ecommerce e/ou na loja física.
* **Integrar dados da VTEX:** Integrar dados e soluções da VTEX essenciais para os eu negócio e que não fazem parte da jornada padrão do Sales App.
* **Centralizar tarefas do vendedores:** Permitir que o vendedor realize tarefas cotidianas em uma única plataforma, como captura de leads ou consulta de dados.

## Passo a Passo do Projeto

### Passo 0: Preparação e Definição de Requisitos do projetos

Antes de iniciar o desenvolvimento, é fundamental que o **Merchant, Parceiro** ou a **Agência Parceira** defina o escopo do recurso a ser implementado. Este processo deve ser apoiado pelas nossas *documentações* oficiais e de acordo com o recurso a ser implementado.

### Passo 1: Mapeamento de Requisitos e UX

* Mapeie o passo a passo técnico ou as histórias de usuário (ex: "durante o checkout, o cliente precisa inserir o seu cpf para acessar seus bônus").  
  * Nesse momento, todos requisitos e fluxos do projeto devem ser mapeados.  
* **Recomendação de Design:** se você já tem o recurso implementado no seu ecommerce, Siga a mesma experiência. Utilize nosso material no **Figma** com os pontos de extensão já desenhados como apoio, se precisar.  
* **Recomendação de projeto:** Se o seu projeto tiver requisitos e fluxos complexos é indicado um designer ou gestor de produtos para definicoes de requisitos

Dica: MCP de Extensibilidade

Temos um MCP (inserir link de como instalar) que desenvolvedores podem instalar para auxiliar na fase de definição de projeto, implementação e orientações para o deploy. Nessa etapa, o MCP é capaz de:

* Levantar os requisitos de experiência: Identificar o que as regras de negócio, fluxo esperados e pontos utilizados.Se já existir um projeto ele pode ser utilizado de exemplo para esse levantamento.  
* Estruturar Requisitos: Diferenciar claramente as ações esperadas na experiência do usuário (UX) das ações esperadas pela API (Backend).
* Definir UI dos componentes: o MCP de Extensão já conhece as guidelines de design e pode propor uma interface baseada nos requisitos levantados, acelerando o trabalho do desenvolvedor e sem necessitar de um designer dedicado

### Passo 2: Viabilidade Técnica e Feedback

Antes do código, o desenvolvedor deve validar se os requisitos se alinham aos hooks e funções existentes nos pontos de extensão e mapear as integrações necessárias de acordo com a documentacão.

> ❗ Caso identifique a inexistência de um hook ou função necessária, abra um ticket para a VTEX explicando seu caso de uso e necessidade para que possamos considerar a necessidade em evoluções do produto.

### Passo 3: Implementação

Após o planejamento o desenvolver deve implementar , podendo rodar de maneira local o projeto, em uma conta VTEX com o Sales App instalado e configurado. Geralmente o merchant, parceiras e agencias já possuem essa conta. Caso contrário, será necessário instalar o Sales App na sua conta VTEX.

Dica: MCP de Extensibilidade

O MCP também pode ajudar na etapa de implementação, com um planejamento e especificações bem definidas, ele poderá desenvolver o front e guiar às integrações necessárias. Ele conhece os hooks e funções, além de toda documentação de extensão, faststore, sales app e VTEX.

### Passo 4: Deploy

Depois que o fluxo estiver testado e validado. O deploy na conta em desenvolvimento pode ser feito seguindo a documentação.

Dica: MCP de Extensibilidade

O MCP também é capaz de guiar o desenvolvedor com o passo a passo para deploy.

> Recomendações para Parceiros com múltiplos clientes utilizando a extensão

Para parceiros que desenvolvem módulos que podem ser reaproveitados em diferentes clientes, a priori a extensão deverá ser copiada para cada repositório. Mas recomendamos entrar em contato com o time de VTEX Sales App para ter sugestões de como habilitar para diferentes cliente.
