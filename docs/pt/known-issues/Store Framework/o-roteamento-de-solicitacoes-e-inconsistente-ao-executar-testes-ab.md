---
title: "O roteamento de solicitações é inconsistente ao executar testes A/B"
id: 5ukS8DTwmWsM0fNWQLYFQ1
status: PUBLISHED
createdAt: 2023-11-08T21:42:53.184Z
updatedAt: 2025-03-14T14:05:38.931Z
publishedAt: 2025-03-14T14:05:38.931Z
firstPublishedAt: 2023-11-08T21:42:53.723Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: o-roteamento-de-solicitacoes-e-inconsistente-ao-executar-testes-ab
locale: pt
kiStatus: Fixed
internalReference: 931246
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As solicitações HTTP de navegação do Store não respeitam o cookie de seleção de espaço de trabalho durante a sessão. Na verdade, durante uma única sessão, um usuário pode receber respostas de todos os espaços de trabalho que estão sendo testados.

O problema ocorre quando o cookie `VtexWorkspace` expira ou é excluído durante a navegação do usuário. Quando isso acontece, é gerado um novo cookie de espaço de trabalho, que pode ser o mesmo de antes ou um diferente. Se ele for alterado e o usuário não atualizar a página, o problema poderá ocorrer. Se o usuário ainda estiver navegando no momento da expiração, as interações subsequentes poderão permanecer associadas ao espaço de trabalho antigo, causando o problema. No entanto, esse cenário é relativamente raro, dependendo de sessões longas e da expiração do cookie sem uma atualização da página.

## Simulação



1. Crie um teste A/B em sua loja usando o VTEX IO CLI
2. Abra a guia "Application" (Aplicativo) no Chrome DevTools (ou equivalente em seu navegador)
  1. Navegue pela loja e limpe seu cookie `VtexWorkspace` ou espere que ele expire
  2. Você deverá ver os valores mudarem eventualmente, mesmo que o cookie da sessão não tenha sido alterado.
3. Abra a guia "Network" (Rede) no Chrome DevTools (ou equivalente em seu navegador)
  1. Navegue pela loja e observe as solicitações HTTP que são feitas
  2. Você deve ver que a string de consulta `workspace` é definida com valores diferentes durante toda a sessão



## Workaround


Não há nenhuma solução alternativa disponível.






