---
title: "O Portal mantém os UTM's após o log out quando se utiliza o Callcenter Operator."
id: 4dogeU7iMoTXBWwv5DyR8u
status: PUBLISHED
createdAt: 2022-03-18T19:04:54.519Z
updatedAt: 2024-02-16T20:27:34.500Z
publishedAt: 2024-02-16T20:27:34.500Z
firstPublishedAt: 2022-03-18T19:04:55.239Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: portal-keeps-utms-after-logging-out-when-using-callcenter-operator
locale: pt
kiStatus: No Fix
internalReference: 534838
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


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

