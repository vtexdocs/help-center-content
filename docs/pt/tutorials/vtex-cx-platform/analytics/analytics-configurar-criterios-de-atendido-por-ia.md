---
title: "Analytics: Configurar critérios de Atendido por IA"
createdAt: 2026-11-27T12:00:00.000Z
updatedAt: 2026-11-27T12:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: analytics-configuring-handled-by-ai-criteria
locale: pt
---

Os atendimentos são classificados como **Atendido por IA** ou **Não atendido por IA**, com base em uma série de critérios. Você pode visualizar, adicionar, editar e excluir esses critérios pelo dashboard **Conversacional**.

Para visualizar e gerenciar os critérios, clique no ícone de três pontos (<i class="fas fa-ellipsis-v" aria-hidden="true"></i>). O painel lateral **Critérios de Atendido por IA** apresenta duas seções:

- **Critérios-base**: aplicados a todos os projetos. Você não pode editá-los nem removê-los.
- **Seus critérios**: aplicados somente ao projeto específico. Você pode adicionar, editar e excluir seus critérios. O limite é de 10 critérios personalizados.

## Adicionar um critério

Para adicionar um critério personalizado, siga os passos a seguir:

1. Na tela de **Critérios de Atendido por IA**, clique em `Adicionar critério`.
2. Escreva seu critério no campo de mensagem e clique em `Validar`. (Por exemplo: "Caso o problema do cliente não consiga ou não possa ser resolvido virtualmente, considere que um atendimento foi atendido pela IA quando o cliente tem informações suficientes sobre o procedimento correto a seguir e/ou sabe o que fazer para resolver seu problema".)

    > ❗ A IA rejeita critérios vazios, ofensivos, fora de escopo, impossíveis de avaliar a partir de uma conversa ou que contradizem um critério-base. O painel explica por que o critério foi invalidado. Reescreva o critério e tente validar novamente.

3. Quando o seu critério for validado, clique em `Salvar`.

Uma vez salvo, esse critério contará para a métrica de **Atendido por IA** a partir da próxima avaliação diária. As conversas e métricas anteriores não serão alteradas.
