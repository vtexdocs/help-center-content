---
title: 'Tutoriais'
id: edu0011-pt
status: PUBLISHED
createdAt: 2025-11-25T19:24:22.388Z
updatedAt: 2025-11-25T11:55:00.388Z
publishedAt: 2025-11-25T19:24:22.388Z
firstPublishedAt: 2025-11-25T19:24:22.388Z
contentType: trackArticle
productTeam: Education
slugPT: tutoriais
locale: pt
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugPT: tutoriais
---

Um tutorial é um guia completo e detalhado que ensina aos usuários como realizar uma série de tarefas ou ajuda a entender conceitos de forma mais específica.

Neste guia, serão apresentadas diretrizes gerais, modelos e exemplos de tutoriais.

> ℹ️ Revise as diretrizes de [Melhores práticas para escrever documentação](https://contentguide.vtex.com/docs/documentation/documentation-overview#best-practices-for-writing-documentation).

## Diferenças entre um tutorial e um guia prático

Embora tanto os tutoriais quanto os [guias práticos](https://contentguide.vtex.com/docs/documentation/how-to-guides-template) sejam recursos instrucionais, eles apresentam algumas diferenças em sua estrutura e finalidade:

<details>
<summary><b>Objetivo</b></summary>

| **Tutorial** | **Guia prático** |
| ------------ | ---------------- |
| Orientado à aprendizagem. Ensina um conceito, habilidade ou processo mais amplo em detalhes. | Orientado para tarefas. Foca em ajudar o usuário a concluir uma tarefa ou objetivo específico. |

</details>

<details>
<summary><b>Escopo</b></summary>

| **Tutorial** | **Guia prático** |
| ------------ | ---------------- |
| Abrange uma série de etapas ou conceitos, geralmente relacionados ao aprendizado de uma nova habilidade. | Tem um escopo mais restrito, geralmente explicando uma tarefa ou processo em etapas. |

</details>

<details>
<summary><b>Conteúdo</b></summary>

| **Tutorial** | **Guia prático** |
| ------------ | ---------------- |
| Educativo, informando contexto, histórico e explicações. | Prático, com instruções diretas e focadas em tarefas. |

</details>

<details>
<summary><b>Público</b></summary>

| **Tutorial** | **Guia prático** |
| ------------ | ---------------- |
| Usuários que desejam aprender uma habilidade ou entender um conceito de forma detalhada. | Usuários que precisam alcançar rapidamente um objetivo específico, geralmente com conhecimento prévio. |

</details>

## Como escrever um tutorial

| **Tópico** | **Descrição** |
| --------- | ------------ |
| **Título** | Indique diretamente o objetivo do tutorial com um verbo em infinitivo. Considere o seu público-alvo e a ação específica que deseja que eles realizem. Por exemplo: `Gerenciar usuários em organizações B2B` |
| **Antes de começar** (opcional)  | Liste todos os pré-requisitos necessários que o usuário precisa cumprir ou concluir antes de seguir as etapas do guia, incluindo: <ol><li>Requisitos de ferramentas e software: especifique os requisitos mínimos do sistema, como versões do sistema operacional, instalações de software específicas e configurações de hardware.</li><li>Criação ou configuração de conta: se o usuário precisar criar uma conta ou definir configurações específicas, forneça instruções claras ou links para recursos relevantes.</li><li>Conhecimentos ou habilidades básicas: se o guia pressupõe um certo nível de familiaridade com conceitos ou ferramentas específicos, descreva brevemente esses pré-requisitos ou forneça links para recursos de aprendizagem adicionais.</li></ol> |
| **Etapas** | As etapas devem ser apresentadas como uma lista. A lista aparece nos modelos após a frase "Confira uma visão geral das partes". <ol><li>Fornece instruções detalhadas e passo a passo para concluir a tarefa ou atingir o objetivo.</li><li>Divide o processo em etapas, garantindo que cada etapa seja clara e acionável.</li><li>Considera o que o usuário precisa realizar até o final do guia e descreve todas as etapas necessárias para isso. Por exemplo, se o objetivo é gerenciar um módulo no Admin, considere cada ação que o usuário precisa fazer no processo até chegar lá.</li></ol> |
| **Conteúdo das etapas**  | <ol><li>Cada etapa deve orientar o usuário de um ponto a outro em uma sequência lógica. Quando for relevante, inclua exemplos, arquivos de mídia ou avisos para ajudar os usuários.</li><li>Cada linha das instruções deve corresponder a uma etapa a ser realizada pelo usuário.</li><li>Não assuma que o usuário já tem determinado conhecimento. Por exemplo, se o usuário precisar pressionar `Enter` em uma etapa, inclua essa instrução como parte da etapa.</li><li>Use colchetes angulares (`>`) para dividir etapas complexas ou combinar etapas simples para ações sequenciais. Exemplo: *1. No Admin VTEX, acesse _Loja > Site Editor_*.</li><li>Mantenha a consistência do tempo verbal ao longo das instruções usando verbos no imperativo. Exemplo: *1. Clique em Arquivo > Novo > Documento.*.</li></ol>|
| **Títulos das etapas**  | Nos títulos das etapas do tutorial, comece com um verbo em infinitivo para descrever ações, como `Adicionar uma doca` ou `Configurar seu ambiente`. Isso indica claramente o objetivo de cada etapa e mantém a coerência com o tom didático do tutorial. Expressa que o usuário realizará a ação descrita.|

## Modelos de tutorial

<details>
<summary><b>Modelo 1</b></summary>

```md
# [Título do tutorial]

[Forneça uma breve descrição do tutorial, incluindo as habilidades ou conhecimentos que o usuário irá adquirir ao final dele.]

Confira uma visão geral das partes:

<Flex>

<WhatsNextCard
title="Etapa 1. título"
description="Forneça uma breve descrição da etapa."
linkTo="https://developers.vtex.com/docs/guides"
linkTitle="Ver mais"
/>

<WhatsNextCard
title="Etapa 2. título"
descrição="Forneça uma breve descrição da etapa."
linkTo="https://developers.vtex.com/docs/guides"
linkTitle="Ver mais"
/>

<WhatsNextCard
title="Etapa 3. título"
description="Forneça uma breve descrição da etapa."
linkTo="https://developers.vtex.com/docs/guides"
linkTitle="Ver mais"
/>

...

## Antes de começar

[Liste todos os pré-requisitos que o usuário deve cumprir ou completar antes de seguir as etapas do guia.]

</Flex>
```

</details>
<details>
<summary><b>Modelo 2</b></summary>

```md
# [Título do tutorial]

[Forneça uma breve descrição do tutorial, incluindo as habilidades ou conhecimentos que o usuário irá adquirir ao final dele.]

Confira uma visão geral das partes:

- [Etapa 1. Título](https://developers.vtex.com/docs/add-the-step-slug-here)
- [Etapa 2. Título](https://developers.vtex.com/docs/add-the-step-slug-here)
- [Etapa 3.](https://developers.vtex.com/docs/add-the-step-slug-here)
...

## Antes de começar

[Liste todos os pré-requisitos que o usuário deve ter ou cumprir antes de seguir as etapas do guia.]

</Flex>
```

</details>

## Exemplos de tutorial

- [Getting started: Storefront apps](https://www.google.com/url?q=https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developing-storefront-apps-using-react-and-vtex-io&sa=D&source=docs&ust=1736199224966224&usg=AOvVaw0BptDzlbA0vq4Xi6GkqX1E)
- [Getting started: Pixel apps](https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developnativeintegrationswithpixelapps)
- [Getting started: FastStore](https://developers.vtex.com/docs/guides/faststore/getting-started-overview)
- [Getting started: Store Framework](https://developers.vtex.com/docs/guides/getting-started-3)
