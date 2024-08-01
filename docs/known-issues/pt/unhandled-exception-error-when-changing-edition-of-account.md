---
title: 'Erro "Unhandled exception" ao alterar a edição da conta'
id: 1NVjCrlRkadscl8fW9rOdA
status: PUBLISHED
createdAt: 2023-09-26T12:45:44.999Z
updatedAt: 2024-02-26T17:22:29.322Z
publishedAt: 2024-02-26T17:22:29.322Z
firstPublishedAt: 2023-09-26T12:45:45.927Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slug: erro-unhandled-exception-ao-alterar-a-edicao-da-conta
locale: pt
kiStatus: Backlog
internalReference: 907294
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Às vezes, quando alteramos a edição de uma conta ou espaço de trabalho, podemos encontrar o seguinte erro:


    - error: Exceção não tratada - erro: Informe o problema em https://github.com/vtex/toolbelt/issues


O erro não é consistente, não acontece o tempo todo.

Se o mestre da loja estiver usando o `edition-business` e quiser alterar a edição para `edition-store` em um espaço de trabalho, é mais provável que esse erro ocorra.

## Simulação


Se você tentar alterar a edição de qualquer conta de teste ou espaço de trabalho, esse erro acabará ocorrendo no processo.



## Workaround



- Execute o comando `vtex edition get` para ter certeza de que a edição não foi alterada. Às vezes, a edição é alterada mesmo quando o erro é exibido;
- Se os aplicativos também não foram atualizados, tente executar o comando `vtex update`;
- Aguarde um pouco e tente novamente;
- Também pode acontecer de o erro Unhandled exception não ser exibido, a edição será alterada, mas os aplicativos não serão atualizados. Nesse caso, basta executar o comando `vtex update`



