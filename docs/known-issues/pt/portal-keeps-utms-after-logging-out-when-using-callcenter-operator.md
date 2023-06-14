---
title: "O Portal mantém os UTM's após o log out quando se utiliza o Callcenter Operator."
id: 4dogeU7iMoTXBWwv5DyR8u
status: PUBLISHED
createdAt: 2022-03-18T19:04:54.519Z
updatedAt: 2022-11-25T22:10:46.942Z
publishedAt: 2022-11-25T22:10:46.942Z
firstPublishedAt: 2022-03-18T19:04:55.239Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: o-portal-mantem-os-utms-apos-o-log-out-quando-se-utiliza-o-callcenter-operator
kiStatus: No Fix
internalReference: 534838
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O Portal mantém os UTM's após o log out quando se utiliza o Callcenter Operator.



## Simulação



- Login com um Operador de Call Center;
- Com este Operador de Call Center, faça o login com informações do cliente;
- Use um utmi_cp no URL;
- Sair deste cliente/usuário (mantendo o Operador da Central de Atendimento logado);
- Login com outro cliente/usuário;
- Verifique se este novo usuário terá o mesmo utmi_cp inserido para o último usuário.



## Workaround



- Use o cartman para remover as informações do UTM.

