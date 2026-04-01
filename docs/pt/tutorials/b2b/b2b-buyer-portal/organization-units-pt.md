---
title: 'Organization Units'
createdAt: '2026-03-06T10:00:00.000Z'
updatedAt: '2026-03-16T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: organization-units
locale: pt
---

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam B2B Buyer Portal, atualmente disponível para contas selecionadas.

Em operações B2B, o comprador é uma empresa e não um consumidor individual. Cada empresa é representada por uma organização compradora que mantém relacionamento comercial com a loja.

Empresas geralmente possuem múltiplas filiais, departamentos, centros de custo e fluxos internos de aprovação. Cada uma dessas áreas pode ter autonomia de compra, orçamento próprio ou regras financeiras específicas. As Organization Units permitem representar essa estrutura dentro de uma loja VTEX com operação B2B.

## Estrutura de organizações compradoras

Uma loja VTEX com operação B2B pode conter múltiplas organizações compradoras. Cada organização:

* Possui seu próprio contrato  
* Opera de forma independente das demais organizações  
* Pode ter múltiplas subdivisões internas (Organization Units)

As Organization Units são utilizadas para modelar a estrutura interna de uma única organização compradora.

A hierarquia da operação segue o seguinte modelo:

![organization-units-pt_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/b2b-buyer-portal/organization-units-pt_1.png)

Uma Organization Unit é uma subdivisão hierárquica dentro de uma organização compradora específica. Essa estrutura define como regras comerciais e acessos são aplicados.

Em vez de criar múltiplas contas ou múltiplas organizações compradoras para representar áreas internas da mesma empresa, é possível organizar sua hierarquia internamente por meio de Organization Units e aplicar regras distintas para cada área, mantendo uma única organização compradora.

## Estrutura hierárquica de Organization Units

A estrutura de Organization Units segue um modelo em árvore. Toda organização compradora possui uma **unidade raiz**, que representa a organização como um todo. A partir dela, podem ser criadas **unidades filhas**, que representam subdivisões como filiais, departamentos ou centros de custo.

![organization-units-pt_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/b2b-buyer-portal/organization-units-pt_2.png)

A unidade raiz é o nível mais alto da hierarquia. As unidades filhas podem existir em múltiplos níveis, refletindo a estrutura real da empresa. Existem regras gerais definidas no [contrato](#contrato), mas cada unidade pode possuir [regras específicas](#configuracoes-por-organization-unit), respeitando sua posição na hierarquia.

## Contrato

Cada organização compradora possui seu próprio contrato B2B. Esse contrato é associado à **unidade raiz** da organização.

As condições comerciais definidas no contrato são herdadas pelas unidades filhas. Isso significa que preços, políticas e acordos comerciais negociados com a empresa são aplicados a toda a estrutura. Após essa herança, é possível definir [configurações por unidade](#configuracoes-por-organization-unit), permitindo segmentação interna sem necessidade de múltiplos contratos ou contas separadas.

Para entender como contratos são configurados e gerenciados, consulte:

* [Contratos B2B](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt)

## Configurações por Organization Unit

Mesmo compartilhando o mesmo contrato, cada unidade pode operar com regras próprias. Entre as configurações que podem variar por Organization Unit estão:

* Sortimento de produtos visíveis  
* Métodos e condições de pagamento  
* Endereços de entrega e faturamento  
* Campos contábeis  
* Regras de aprovação de pedidos

Essa segmentação permite alinhar a operação da loja às políticas internas da empresa compradora.

Saiba mais na documentação a seguir:

* [Buying Policies](https://help.vtex.com/pt/docs/tutorials/buying-policies)  
* [Visão geral de Budgets](https://help.vtex.com/pt/docs/tutorials/visao-geral-de-budgets)  
* [Campos contábeis](https://help.vtex.com/pt/docs/tutorials/campos-contabeis)

## Usuários de Organization Units

A unidade à qual o usuário está vinculado define sua operação dentro da plataforma. No momento do login na loja, a plataforma identifica a Organization Unit do usuário e aplica automaticamente as regras configuradas para aquela unidade.

## Perfis de acesso e permissões do storefront

O escopo de atuação do usuário membro de uma Organization Unit em uma loja B2B é definido pela combinação de dois elementos:

* **Organization Units**, que determinam o grupo em que o usuário está contido.  
* **Perfis de acesso do storefront**, que definem o papel do usuário na organização reunindo determinadas permissões para realizar ações na frente de loja.

Saiba mais em [Membros da organização compradora](https://help.vtex.com/pt/docs/tutorials/membros-da-organizacao-compradora).

## Experiência de compra

As Organization Units garantem que a experiência de navegação reflita a estrutura organizacional da empresa compradora.

Cada área da empresa opera com:

* Regras comerciais adequadas  
* Permissões compatíveis com seu papel  
* Governança e autonomia

Dessa forma, a plataforma permite que uma única empresa B2B opere com múltiplas estruturas internas, mantendo consistência contratual e controle operacional.
