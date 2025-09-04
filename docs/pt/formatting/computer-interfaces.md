---
title: 'Interfaces de usuário'
id: formatting0003-pt
status: PUBLISHED
createdAt: 2025-09-03T15:00:00.388Z
publishedAt: 2025-09-03T15:00:00.388Z
firstPublishedAt: 2025-09-03T15:00:00.388Z
contentType: trackArticle
productTeam: Education
slugPT: interfaces-de-usuário
locale: pt
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugPT: interfaces-de-usuário
---

> ⚠️ O conteúdo a seguir explica como citar interfaces em tutoriais e guias. Para escrever textos para interfaces, consulte a seção [Interface copy](https://contentguide.vtex.com/docs/interface-copy) do portal Content Style Guide.

## Placeholders

Os placeholders indicam onde devem ser adicionadas informações dinâmicas ou que são fornecidas pelo usuário. Eles ajudam a garantir clareza e consistência ao se referir a variáveis, parâmetros ou campos personalizáveis. Ao documentar placeholders, siga as regras de formatação específicas para garantir legibilidade e consistência.

Para informações que devem ser fornecidas pelo usuário, como variáveis de URL, use placeholders entre chaves.

| ✅ Correto | ❌ Incorreto |
| :--- | :--- |
| <code>\{accountName\}.myvtex.com/admin</code> | <ul><li><code>\{\{accountName\}\}.myvtex.com/admin</code></li><li>`accountName.myvtex.com/admin`</li></ul> |

Ao citar um placeholder em um texto corrido, formate-o como código e sem chaves.

| ✅ Correto | ❌ Incorreto |
| :--- | :--- |
| O `accountName` deve ser substituído pelo nome da sua conta. | O <code>\{accountName\}</code> deve ser substituído pelo nome da sua conta. |

## Labels de ação

Labels de ação são elementos interativos que disparam ações, como botões. Seu nome e representação devem ser claros para evitar confusão durante a interação do usuário. Ao citar botões em guias ou tutoriais, use uma formatação padronizada para diferenciá-los do restante do texto.

Ao referir-se a labels de ação em uma lista, instruções numeradas, texto contínuo ou lista com tópicos, formate o nome do botão como código.

| ✅ Correto | ❌ Incorreto |
| :--- | :--- |
| <ol><li>No módulo Marketplace, clique em `Integrações`.</li><li>No card de Google Shopping, clique em `Integrar`.</li><li>Clique em `Salvar`.</li></ol> | <ol><li>No módulo `Marketplace`, clique em **Integrações**.</li><li>No card de *Google Shopping*, clique em `Integrar`.</li><li>Clique em “Salvar configuração”.</li></ol> |

## Labels de conteúdo

As labels de conteúdo, como títulos, menus e cabeçalhos de colunas, ajudam a estruturar a interface e orientar a navegação. Mantenha a consistência na forma como são apresentadas a fim de melhorar a experiência do usuário. Ao mencioná-las em guias ou tutoriais, use a formatação adequada para diferenciá-las do texto comum e tornar a leitura mais clara.

Use negrito em texto corrido para elementos da interface, como títulos, nomes de módulos, elementos de tabela e sequências que envolvem labels de conteúdo entre os sinais de maior e menor (>).

| ✅ Correto | ❌ Incorreto |
| :--- | :--- |
| <ul><li>Selecione a coluna **Status**.</li><li>Acesse a página do Admin e, no módulo **Produtos**, clique em **Configuração da loja** > **inStore** > **Identificação do cliente**.</li></ul> | <ul><li>Selecione a coluna `Status`.</li><li>Acesse a página do Admin e, no módulo **Produtos**, clicar em `Configurações da loja` > `inStore` > `Identificação do cliente`.</li></ul> |

## Ícones

Ícones representam funcionalidades de forma visual e devem equilibrar estética e acessibilidade. Por isso, é importante usá-los com cuidado. Ao mencioná-los em guias ou tutoriais, inclua labels descritivos e utilize a formatação adequada.

Ícones são incluídos no texto para representar elementos da interface e ajudar o usuário a reconhecê-los durante a leitura da documentação. Sempre que usar um ícone, adicione uma legenda descritiva para garantir a acessibilidade.

*   Para documentação, prefira adicionar ícones após uma label.
*   O ícone deve ser o mesmo da interface. Se não houver ícones na interface, não os use.

| ✅ Correto | ❌ Incorreto |
| :--- | :--- |
| Clique no botão de busca 🔍. | <ul><li>Clique no botão da lupa.</li><li>Clique no botão da 🔍 busca.</li><li>Clique no botão da 🔍 lupa.</li></ul> |

Ao adicionar um ícone em HTML, inclua o atributo `aria-hidden="true"` para que os leitores de tela ignorem a tag HTML do ícone embutido.

> ℹ️ Ícones incorporados com `aria-hidden = false` podem interromper os leitores de tela, atrapalhando a leitura completa da frase.

| ✅ Correto | ❌ Incorreto |
| :--- | :--- |
| Clique no botão `` `<i class="fas fa-search" aria-hidden="true"></i>` `` de busca. | Clique no botão `` `<i class="fas fa-search"></i>` `` de busca. |
