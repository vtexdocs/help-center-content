---
title: 'Salvar novo cartão não funciona com o uso do 3DS'
id: 20INELA5LVhY1XqFWG7047
status: PUBLISHED
createdAt: 2021-06-15T17:10:05.803Z
updatedAt: 2024-08-20T19:15:09.444Z
publishedAt: 2024-08-20T19:15:09.444Z
firstPublishedAt: 2021-06-15T18:33:22.941Z
contentType: knownIssue
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
tag: Order Management
slug: salvar-novo-cartao-nao-funciona-com-o-uso-do-3ds
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao tentar salvar um cartão no [My Account](https://help.vtex.com/pt/tutorial/how-does-my-account-work--2BQ3GiqhqGJTXsWVuio3Xh) de lojas que utilizam a autenticação [3DS](https://help.vtex.com/pt/tutorial/what-is-3d-secure--1eWPdop8mECuaEomQgkAIa) (V1 ou V2) em suas adquirentes, um erro é gerado e a mensagem *Ocorreu um erro ao tentar cadastrar o cartão é mostrada*. 

Este erro acontece caso o cartão não tenha sido validado pelo sistema. Para validar cartões é preciso associar o cartão à uma condição de pagamento. Ao associar uma condição de pagamento ao cartão, uma transação de BRL 1,50 é gerada (e cancelada em seguida) e o cartão é validado.  

No momento em que essa transação de BRL 1,50 for gerada, caso a loja utilize o [3DS](https://help.vtex.com/pt/tutorial/o-que-e-3d-secure--1eWPdop8mECuaEomQgkAIa) em suas adquirentes, o fluxo de autenticação será ativado e a validação do cartão será solicitada. Nesta etapa, a validação não poderá ser concluída pois não se trata de uma compra de um produto, o que impossibilita abrir o challenge do 3DS para conclusão do processo. Por esse motivo, o erro citado acima é exibido ao salvar um cartão.

## Simulação

Caso queira simular as etapas que levam até o erro, siga o passo a passo abaixo:

1. Acesse o __Admin__ VTEX.
2. Configure uma [adquirente](https://help.vtex.com/pt/tutorial/o-que-e-um-adquirente--7N1oRTG8dGmOiIugC0cs4E) para transacionar com 3DS (para V1 essa configuração fica do lado da adquirente, para a V2 veja mais detalhes em [Configurar fluxo de autenticação 3DS2](https://help.vtex.com/pt/tutorial/setting-up-3ds-2-authentication-flow--58XMn5LOA6fwrSkoDoAsg2)).
3. Configure um meio de pagamento de cartão de crédito (Master, Visa, American Express, etc.) para ser processado com a adquirente que você configurou.
4. Acesse a página inicial da sua loja.
5. Faça login com e-mail e senha.
6. Clique em __Minha Conta__.
7. Acesse a aba __Cartões__.
8. Clique em __Adicionar cartão__.
9. Preencha todos os campos e clique em __Salvar novo cartão__.
10. Um erro será gerado depois desse processo.

## Workaround

Para solucionar este erro, você pode criar uma condição de pagamento para cartão de crédito atrelado a uma adquirente que não esteja fazendo uso do 3DS (v1 ou v2).

