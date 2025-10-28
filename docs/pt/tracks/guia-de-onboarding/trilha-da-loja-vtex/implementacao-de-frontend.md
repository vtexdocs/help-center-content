---
title: 'Implementação de frontend'
id: 67SCtUreXxKYWhZh8n0zvZ
status: PUBLISHED
createdAt: 2024-01-31T22:25:47.689Z
updatedAt: 2025-08-01T17:28:03.949Z
publishedAt: 2025-08-01T17:28:03.949Z
firstPublishedAt: 2024-02-22T14:07:19.178Z
contentType: trackArticle
productTeam: Others
slugEN: frontend-implementation
locale: pt
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: trilha-da-loja-vtex
order: 7
---

O frontend de uma loja online, também conhecido como frente de loja, é a interface visual e interativa da loja através da qual os clientes da loja interagem com produtos e executam ações, como navegar por categorias, pesquisar, e adicionar produtos ao carrinho.

Este artigo tem como objetivo auxiliar na escolha de qual tecnologia usar para construir a frente de loja e quais configurações são necessárias para cada uma, considerando os seguintes pontos:

- Tecnologias de desenvolvimento de frente de loja da VTEX.
- Principais funcionalidades de cada tecnologia.
- Etapas de desenvolvimento.

O foco da implementação de frontend é uma etapa com foco em definir as tecnologias a serem implementadas, de acordo com as necessidades do negócio relacionadas à frente de loja.

> ℹ️ O frontend pode ser implementado pelo time de desenvolvimento interno da empresa ou pelos nossos [parceiros de implementação](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#parceiros-de-implementacao). [Usuários](/pt/tutorial/gerenciando-usuarios--tutorials_512) com acesso ao Admin VTEX podem consultar a lista dos nossos parceiros pelo [Partner Portal](https://partnerportal.vtex.com/).

## Antes de começar

Antes de começar a implementação do frontend, é recomendado que a loja tenha as seguintes etapas configuradas:

| Etapa | Descrição |
| ----- | --------- |
| Definição da arquitetura da loja e sua estratégia de vendas | O time definiu a arquitetura da sua loja VTEX de acordo com as estratégias e necessidades do seu modelo de negócio.<br><br>Mais informações no artigo [Contas e arquitetura](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl). |
| Configuração dos perfis de acesso | O time configurou os acessos necessários para usar a plataforma VTEX para cada [usuário](/pt/tutorial/gerenciando-usuarios--tutorials_512).<br><br>Mais informações no artigo [Perfis de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc). |
| Configuração do catálogo | O time configurou o [catálogo](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalogo) com os produtos, a árvore de categoria e informações relacionadas, como descrições, imagens e preços, a fim de preencher e testar a loja, incluindo recursos como páginas de listagem de produtos (PLP), funcionalidade de pesquisa, páginas de detalhes de produtos (PDP) e checkout.<br><br>A ausência de um catálogo pode resultar em testes incompletos e problemas de integração de dados, atrasando a implementação.<br><br>Mais informações no artigo [Módulos da VTEX I](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7). |
| Definição dos aplicativos necessários à operação da loja | O time definiu os aplicativos, nativos ou de terceiros, necessários para a operação da loja.<br><br>Para lojas que serão construídas usando [Store Framework](#store-framework), existe uma lista de apps nativos e de terceiros.<br><br>Mais informações no artigo [VTEX IO apps](https://developers.vtex.com/docs/vtex-io-apps). |

> ℹ️ A [etapa de desenvolvimento](#etapas-de-desenvolvimento) pode acontecer em paralelo com outras etapas da [Integrações de backend](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) e [configuração de módulos](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7), como por exemplo as configurações de meios de pagamentos e logística. Isso vai depender do tipo de [arquitetura e planejamento](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl) escolhidos para a loja VTEX e deve ser acompanhado pela [agência implementadora](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#parceiros-de-implementacao) ou [Suporte VTEX](/pt/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/7w7cUmbrdPEKpTMItjXEB8).

## Tecnologias de desenvolvimento de frontend na VTEX

A VTEX possui três tecnologias distintas para o desenvolvimento de frente de loja: a [FastStore](#FastStore), o [Store Framework](#store-framework) e o [CMS Portal Legado](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj). O CMS Portal Legado foi a primeira tecnologia da VTEX para construção de frente de loja, baseada em HTML, CSS e JavaScript, e todo o desenvolvimento e a edição do código dessa tecnologia são feitos via Admin VTEX.

> ⚠️ Apesar de ainda ser usado por algumas lojas, o [CMS Portal Legado](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) é uma tecnologia legada e não está mais disponível para lojas que estão iniciando com a VTEX.

As próximas seções são sobre as principais características e funcionalidades da FastStore e do Store Framework.

## FastStore

FastStore é uma inovação em tecnologia de frente de loja para times de desenvolvimento criarem lojas com foco em performance e estabilidade, além de ser uma tecnologia de fácil manutenção, inclusive na edição de páginas do site da loja. 

Esta tecnologia é um _toolkit open-source_ baseado em _React_ e na arquitetura [Jamstack](https://jamstack.org/). Para obter mais informações, basta consultar o portal de documentação da [FastStore](https://www.faststore.dev/docs).

### Principais funcionalidades da FastStore

A tabela a seguir apresenta algumas das principais funcionalidades da FastStore:

| Funcionalidade | Descrição |
| -------------- | --------- |
| [Starter](https://starter.vtex.app/) | Template funcional projetado para o desenvolvimento rápido da loja, e que já integra os componentes da [FastStore UI](https://www.faststore.dev/components). Inclui páginas como Home, páginas de lista de produtos (PLPs), páginas de detalhes do produto (PDPs) e também a funcionalidade minicart. |
| [FastStore UI](https://www.faststore.dev/components) | Biblioteca de componentes para ecommerce que fornece recursos e estilo básico, tornando mais rápida a implementação e personalização de frentes de loja. |
| Tecnologia *headless* | Processo de customização que separa o código da loja desenvolvido pelo time de desenvolvimento do código base fornecido pela VTEX. Isso simplifica as atualizações do frontend da loja, permitindo atualizações sem impactar o código customizado. |
| Integração com o [GitHub](https://github.com/) | Os times de desenvolvimento podem gerenciar todo o código da frente de loja utilizando o [GitHub](https://github.com/). |
| [Headless CMS](https://www.faststore.dev/docs/headless-cms-overview) | Sistema de gerenciamento de conteúdo (CMS) que permite a edição e criação de novas páginas e a pré-visualização de mudanças no conteúdo. |
| Verificações automatizadas | Testes funcionais e a avaliação da performance da loja e da qualidade do código são executados continuamente de forma automatizada para detectar lentidão e bugs durante todo o estágio de desenvolvimento da frente de loja. |
| Integração com [Intelligent Search](https://www.faststore.dev/docs/getting-started-requirements#enable-the-vtex-intelligent-search-app-in-your-account) | Funcionalidade de preenchimento automático na barra de pesquisa, juntamente com sugestões de pesquisa e produtos com base em preferências configuráveis. |
| Integrações com [Checkout](https://www.faststore.dev/docs/go-live/4-integrating-the-vtex-checkout), [Minha Conta](https://www.faststore.dev/docs/go-live/5-integrating-the-vtex-order-placed-and-my-account) e [Login](https://www.faststore.dev/docs/go-live/3-integrating-the-the-vtex-login) | Integração com outras etapas da jornada de compra dos clientes. Lojas VTEX previamente desenvolvidas com o Store Framework podem manter configurações relacionadas ao Checkout, Minha Conta e Login quando migradas para a FastStore, pois ambas se beneficiam da mesma infraestrutura. |

## Store Framework

Store Framework é uma solução já estabelecida de tecnologia *framework* de implementação de frentes de loja *low-code* com foco no modelo composable commerce, ou seja, o framework possibilita a combinação de diferentes apps do [VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io) para formar a frente de loja.

Nesta tecnologia, a implementação e o lançamento da loja são focados em componentes pré-construídos, também conhecidos como blocos, e na possibilidade de customização desses componentes, conforme a necessidade do modelo de negócio. Este *framework* é baseado em:

- React
- TypeScript
- Node.js
- GraphQL

Para obter mais informações, basta acessar o artigo [What is VTEX Store Framework](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework).

### Ambiente de desenvolvimento

Ao falar de implementação de frontend, é preciso lembrar que o [VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io) não é uma tecnologia de construção de frente de loja, mas sim uma plataforma de desenvolvimento. O Store Framework é uma tecnologia de construção de frente de loja que é executada pelo VTEX IO, que por sua vez é uma solução de desenvolvimento e execução em nuvem de aplicativos personalizados e frentes de loja.

Isso significa que ao trabalhar com VTEX IO, a pessoa desenvolve seu código localmente. Porém, quando se trata de implantar e executar a loja, o VTEX IO gerencia a infraestrutura, CI/CD e segurança, além de cuidar do processo de implantação. A imagem abaixo apresenta como estes conceitos se relacionam entre si:

![Arquitetura de desenvolvimento frontend](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/trilha-da-loja-vtex/implementacao-de-frontend_1.png)

### Principais funcionalidades do Store Framework

A tabela a seguir apresenta algumas das principais funcionalidades do Store Framework:

| Funcionalidade | Descrição |
| -------------- | --------- |
| [Starter](https://github.com/vtex-apps/store-theme) | Template funcional projetado para o desenvolvimento rápido da loja, e que já integra os componentes pré-construídos. |
| [Componentes pré-construídos](https://developers.vtex.com/docs/vtex-io-apps) | Componentes nativos baseados em *React*. |
| Arquitetura modular | Personalização e reutilização do código de elementos da interface para lançar e replicar lojas rapidamente. |
| [Workspaces e ambientes de testes](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace) | Permite criar diferentes versões da loja e testá-las previamente para realizar alterações com segurança. |
| [Site Editor](/pt/tutorial/site-editor-visao-geral--299Dbeb9mFczUTyNQ9xPe1) | Sistema de gerenciamento de conteúdo (CMS) para edição de templates e construção de novas páginas no site da loja. |
| [Testes A/B nativos](https://developers.vtex.com/docs/guides/ab-tests) | Permite testar e validar qual a versão da loja com as maiores taxas de conversão. |
| Integração com [Intelligent Search](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) | Funcionalidade de preenchimento automático na barra de pesquisa, juntamente com sugestões de pesquisa e produtos com base em suas preferências. |
| [Progressive Web App (PWA)](/pt/tutorial/habilitando-notificacoes-pwa-da-loja--1be3ZPhbsgZSbE7h5H46pG) | Permite experiências nativas semelhantes a aplicativos em qualquer dispositivo com tecnologia pronta para PWA. |
| [Cross-border](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/5qgXy9Erm7FDP3UB5Ox8Bs?&utm_source) | Permite que uma loja [multiloja](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#multiloja) VTEX opere em diferentes países com uma abordagem própria para cada um deles. |
| Integração com Checkout, [Minha Conta](/pt/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh) e Login | Integração com outras etapas da jornada de compra do cliente. |

## Escolhendo a tecnologia de frontend

Ao escolher entre Store Framework e FastStore, o time deve avaliar as necessidades específicas do projeto e considerar a experiência da equipe com ambas as tecnologias.

O Store Framework é uma opção mais madura, oferecendo uma estrutura flexível adequada para casos de uso complexos, bem como suporte para lojas que operam internacionalmente e com vários idiomas. 
Para lojas B2B, o Store Framework é uma ótima opção, uma vez que disponibiliza o [B2B Suite](https://developers.vtex.com/docs/apps/vtex.b2b-suite), um aplicativo que permite o gerenciamento de organizações, permissões de frente de loja, e configurações de checkout para relacionamentos comerciais B2B.

A FastStore é uma alternativa em evolução mais recente focada na performance da loja. Esta solução oferece uma experiência de carregamento rápido, o que é essencial para manter os visitantes da loja engajados e reduzir as taxas de abandono de carrinho. Para casos de uso mais simples e com foco em performance, a FastStore pode ser a tecnologia mais recomendada. 

> ℹ️ A equipe de [suporte da VTEX](/pt/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/7w7cUmbrdPEKpTMItjXEB8) pode auxiliar no momento de escolher entre uma das tecnologias de storefront disponíveis.

A tabela abaixo compara as duas tecnologias de acordo com suas principais funcionalidades:

<table>
    <tr>
        <td>**Funcionalidade**</td>
        <td>**Store Framework**</td>
        <td>**FastStore**</td>
    </tr>
    <tr>
      <td>*Starter* (template inicial)</td>
        <td>O [Store Theme](https://github.com/vtex-apps/store-theme) é o template inicial no qual o time pode usar de base para iniciar o projeto da loja ou iniciar do zero.</td>
        <td>O [Starter FastStore](https://starter.vtex.app/) já é disponibilizado ao finalizar o [Onboarding da FastStore](https://www.faststore.dev/docs/getting-started/1-faststore-onboarding/overview). Isso permite que o time comece o projeto com um template base focado em performance.</td>
    </tr>
    <tr>
        <td>Desempenho</td>
        <td>Os recursos de SSR (*Server Side Rendering*) geram todo o HTML de uma página no servidor em resposta a uma solicitação de página, enquanto o SPA (*Single Page Application*) carrega elementos como o cabeçalho apenas uma vez que a página é carregada.</td>
        <td>Possibilidade de máxima performance, já que utiliza a arquitetura [Jamstack](https://jamstack.org/) para criar as páginas do site da loja com antecedência, tornando a entrega do site mais rápida e eficiente em termos de recursos.</td>
    </tr>
    <tr>
        <td>Tech Stack</td>
        <td>
            <ul>
                <li>TypeScript</li>
                <li>React</li>
                <li>GraphQL</li>
                <li>Node.js</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>GraphQL</li>
                <li>Node.js</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Customizações de componentes</td>
        <td>Flexível e de fácil personalização.</td>
        <td>Permite a customização de componentes nativos e garante a performance da loja a partir de boas práticas.</td>
    </tr>
    <tr>
        <td>Gerenciamento do código</td>
        <td>Utiliza [Workspaces](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace) e a arquitetura do VTEX IO para o versionamento, atualização e rollback dos componentes e aplicativos.</td>
        <td>Utiliza o GitHub e o conceito de [branches](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) para a colaboração. Os usuários autorizados no repositório da frente de loja no GitHub podem visualizar e colaborar com o código.</td>
    </tr>
    <tr>
        <td>*Community and Support*</td>
        <td>
            <ul>
                <li>[Documentação oficial](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework)</li>
                <li>[VTEX community](https://community.vtex.com/c/store-development/store-framework/17)</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>[Documentação oficial](https://www.faststore.dev/docs)</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>*Performance Monitoring and Analytics*</td>
        <td>
            <ul>
                <li>Possibilidade de configurar o [VTEX Google Tag Manager](https://developers.vtex.com/docs/guides/google-tag-manager) para analisar dados de navegação da loja.</li>
                <li>Possibilidade de aumentar o desempenho do site da loja usando ferramentas de [otimização de desempenho](https://developers.vtex.com/docs/guides/vtex-io-documentation-best-practices-for-optimizing-performance).</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Possibilidade de configurar o módulo de Analytics nativo.</li>
                <li>Possibilidade de aumentar o desempenho do site da loja usando ferramentas indicadas para tecnologia.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Sistema de Gerenciamento de Conteúdo (CMS)</td>
        <td>Compatível com o [Site Editor](/pt/tutorial/site-editor-visao-geral--299Dbeb9mFczUTyNQ9xPe1).</td>
        <td>Compatível com o [Headless CMS](https://www.faststore.dev/docs/headless-cms-overview).</td>
    </tr>
</table>

## Etapas de desenvolvimento

Antes de lançar a loja em produção e do [go-live](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/6xYnNxDHUcY6FyChgziCoH), é importante listar as configurações e funcionalidades essenciais a serem incluídas na frente de loja. Essas definições auxiliam na definição do Mínimo Produto Viável (MVP) para a frente de loja. Por isso, os próximos tópicos indicam:

- [Requisitos para um MVP da FastStore](#requisitos-para-um-mvp-da-faststore)
- [Requisitos para um MVP do Store Framework](#requisitos-para-um-mvp-do-store-framework)

> ℹ️ As recomendações a seguir são para configurações básicas de frente de loja. Dependendo da [arquitetura escolhida](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl) para a operação da loja, outras configurações podem ser necessárias.

### Desenvolvendo com a FastStore

O time de desenvolvimento deve iniciar um novo projeto com a FastStore através do processo de [Onboarding](https://www.faststore.dev/docs/getting-started/1-faststore-onboarding). Ao final desse processo, o time estará com uma loja básica e funcional baseada no [Starter da FastStore](https://starter.vtex.app/). Feito isso, os requisitos básicos da página já estarão implementados, são eles:

- Home
- *Product Listing Page* (PLP)
- *Product Details Page* (PDP)
- *Minicart*

![FastStore template](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/trilha-da-loja-vtex/implementacao-de-frontend_2.png)

#### Requisitos para um MVP da FastStore

São apresentados a seguir os requisitos para cada tema:

- Catálogo
  - [Cadastrar produtos e SKUs](/pt/tutorial/cadastrando-produtos--tutorials_2567)
  - [Construir a árvore de categorias](/pt/tutorial/cadastrar-uma-categoria--tutorials_206) ([departamentos](/pt/tutorial/o-que-e-um-departamento--22rKjmYWVmmKAK8CWa8yKw), [categorias](/pt/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg) e [subcategorias](/pt/tutorial/o-que-e-uma-subcategoria--2cb0aRkG3i6AeiAMM24iwY))
  - [Definir filtros e tipos de especificações por categoria](/pt/tutorial/criando-grupo-de-especificacoes-em-uma-categoria--tutorials_246)
  - [Cadastrar imagens dos SKUs](/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY#imagens)
  - [Cadastrar preços dos SKUs](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29)
  - [Gerenciar inventário](/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139)
- VTEX Intelligent Search
  - [Integrar a app de Intelligent Search na conta](https://www.faststore.dev/docs/getting-started-requirements#enable-the-vtex-intelligent-search-app-in-your-account)
- Integração com Headless CMS
  - [Configurar o Headless CMS na conta](https://www.faststore.dev/docs/headless-cms-integration/1-configuring-the-vtex-account)
  - [Definir content types e seções que estarão disponíveis](https://www.faststore.dev/docs/headless-cms-integration/2-setting-up-the-headless-cms)
  - Criar e editar páginas usando o Headless CMS no Admin VTEX
- Página Home
  - Editar os componentes e estilos já apresentados no [Starter](https://starter.vtex.app/)
- Página de Login
  - [Integrar com o VTEX Login](https://www.faststore.dev/docs/go-live/3-integrating-the-the-vtex-login)
  - Editar os componentes e estilos já apresentados no [Starter](https://starter.vtex.app/)
- Product Listing Page (PLP)
  - Editar os componentes e estilos já apresentados no [Starter](https://starter.vtex.app/office)
- Product Details Page (PDP)
  - Editar os componentes e estilos já apresentados no [Starter](https://starter.vtex.app/4k-philips-monitor-99988213/p)
- Minicart configuration
  - Editar os componentes e estilos já apresentados no [Starter](https://starter.vtex.app/)
- Checkout
  - Integrar com o [VTEX Checkout](https://www.faststore.dev/docs/go-live/4-integrating-the-vtex-checkout)
  - Integrar com [VTEX Order Placed e My Account](https://www.faststore.dev/docs/go-live/5-integrating-the-vtex-order-placed-and-my-account)
- Logística
  - [Cadastrar doca](/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW)
  - [Cadastrar estratégia de envio](/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)
  - [Relacionar estratégia de envio e estoque com a doca](/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW)
- Payments
  - [Configurar o conector Promissórias](/pt/tutorial/configurar-o-conector-promissorias--7Gy0SJRVS0Qi2CuWMAqQc0)
  - [Cadastrar afiliações de gateway](/pt/tutorial/afiliacoes-de-gateway--tutorials_444)
- Performance e SEO
  - Aumentar o desempenho do site da loja usando ferramentas indicadas [para tecnologia](https://v1.faststore.dev/how-to-guides/performance)
- Métricas
  - Configurar o módulo de [Analytics](https://v1.faststore.dev/reference/sdk/analytics)

### Desenvolvendo com o Store Framework

O time de desenvolvimento deve iniciar um novo projeto com o Store Framework clonando e [linkando](https://developers.vtex.com/docs/guides/vtex-io-documentation-linking-an-app) o [Store Theme](https://github.com/vtex-apps/store-theme) em um [workspace de desenvolvimento](https://developers.vtex.com/docs/guides/vtex-io-documentation-creating-a-development-workspace). O Store Theme é um template funcional básico para iniciar a loja com componentes e páginas essenciais, tais como:

- *Home*
- *Product Listing Page* (PLP)
- *Product Details Page* (PDP)

![Store Framework template](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/trilha-da-loja-vtex/implementacao-de-frontend_3.png)

#### Requisitos para um MVP do Store Framework

São apresentados a seguir os requisitos para cada tema:

- Catálogo
  - [Cadastrar produtos e SKUs](/pt/tutorial/cadastrando-produtos--tutorials_2567)
  - [Construir a árvore de categorias](/pt/tutorial/cadastrar-uma-categoria--tutorials_206) ([departamentos](/pt/tutorial/o-que-e-um-departamento--22rKjmYWVmmKAK8CWa8yKw), [categorias](/pt/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg) e [subcategorias](/pt/tutorial/o-que-e-uma-subcategoria--2cb0aRkG3i6AeiAMM24iwY))
  - [Definir filtros e tipos de especificações por categoria](/pt/tutorial/criando-grupo-de-especificacoes-em-uma-categoria--tutorials_246)
  - [Cadastrar imagens dos SKUs](/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY#imagens)
  - [Cadastrar preços dos SKUs](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29)
  - [Gerenciar inventário](/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139)
- VTEX Inteligent Search
  - [Integrar a app de Intelligent Search na conta](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG)
- Página Home
  - Editar os componentes e estilos já apresentados no [Starter](https://storetheme.vtex.com/)
- Página de Login
  - Integrar com o VTEX Login
  - Editar os componentes e estilos já apresentados no [Starter](https://storetheme.vtex.com/)
- Product Listing Page (PLP)
  - Editar os componentes e estilos já apresentados no [Starter](https://storetheme.vtex.com/clothing?_q=clothing&map=ft)
- Product Details Page (PDP)
  - Editar os componentes e estilos já apresentados no [Starter](https://storetheme.vtex.com/ten-top-shirts/p)
- Minicart configuration
  - Editar os componentes e estilos já apresentados no [Starter](https://storetheme.vtex.com/)
- Logística
  - [Cadastrar doca](/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW)
  - [Cadastrar estratégia de envio](/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)
  - [Relacionar estratégia de envio e estoque com doca](/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW)
- Pagamentos
  - [Configurar o conector Promissórias](/pt/tutorial/configurar-o-conector-promissorias--7Gy0SJRVS0Qi2CuWMAqQc0)
  - [Cadastrar afiliações de gateway](/pt/tutorial/registering-gateway-affiliations/)
- Performance
  - Aumentar o desempenho do site da loja usando ferramentas de [otimização de desempenho](https://developers.vtex.com/docs/guides/vtex-io-documentation-best-practices-for-optimizing-performance)
- Métricas
  - Configurar o [Google Tag Manager](https://developers.vtex.com/docs/guides/google-tag-manager)
