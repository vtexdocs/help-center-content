---
title: 'Pagamento com dois cartões não funciona com 3DS2'
id: 7tjxz6qEsQz9o42diSqMpt
status: PUBLISHED
createdAt: 2021-06-15T15:24:52.846Z
updatedAt: 2022-12-22T20:43:02.853Z
publishedAt: 2022-12-22T20:43:02.853Z
firstPublishedAt: 2021-06-15T15:35:20.115Z
contentType: knownIssue
productTeam: Financial
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: the-pay-with-two-cards-option-does-not-work-when-using-3d-secure-20-3ds2
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao realizar o pagamento de uma compra com dois cartões utilizando uma afiliação que possui o [3DS2](https://help.vtex.com/pt/announcements/fluxo-de-autenticacao-3ds2-aceite-pagamentos-on-line-de-forma-mais-segura--6UdTjjVU1AcEQ2aE3Ftxsl) ativado, um erro acontece e não é possível finalizar a compra no checkout.

Isso acontece, pois um dos principais objetivos do [3DS2](https://help.vtex.com/pt/announcements/fluxo-de-autenticacao-3ds2-aceite-pagamentos-on-line-de-forma-mais-segura--6UdTjjVU1AcEQ2aE3Ftxsl) é a validação do perfil do comprador, e para alguns casos, ao fechar uma compra, o usuário precisará comprovar sua identidade cumprindo um desafio no checkout (comumente um popup com algumas instruções que deverão ser seguidas). 

Contudo, hoje a VTEX __não suporta a abertura de dois desafios ao mesmo tempo__ no checkout.  Por este motivo, não é possível efetuar o pagamento com 2 cartões quando ambas as condições de pagamento são processadas por uma afiliação com o 3DS2 ativado.

## Simulação

Caso queira simular as etapas que levam até o erro, siga o passo a passo abaixo:

1. Acesse o __Admin__ VTEX.
2. Configure uma [adquirente](https://help.vtex.com/pt/tutorial/o-que-e-um-adquirente--7N1oRTG8dGmOiIugC0cs4E) para transacionar com 3DS (para V1 essa configuração fica do lado da adquirente, para a V2 veja mais detalhes em [Configurar fluxo de autenticação 3DS 2](https://help.vtex.com/pt/tutorial/setting-up-3ds-2-authentication-flow--58XMn5LOA6fwrSkoDoAsg2)).
3. Configure __dois meios de pagamento__ de cartão de crédito (Master, Visa, American Express, etc.) para serem processados com a adquirente que você configurou. 
4. Acesse a página inicial da sua loja.
5. Selecione algum item para compra e siga até o checkout.
6. Preencha as informações necessárias e siga para o pagamento.
7. Clique em __Cartão de crédito__.
8. Selecione a opção __Pagar usando dois cartões__.
9. Adicione as informações de dois cartões cujas bandeiras estão configuradas como condição de pagamento a serem processadas com o adquirente que está com o 3DS2 ativado.
10. Um erro aparecerá na tela, impedindo o fechamento da compra.

## Solução

A solução para essa limitação é esconder a opção “pagar com dois cartões” no checkout da loja via customização (uma vez que essa é uma opção nativa e não temos como desativá-la no admin da VTEX). 


## Simulação



## Workaround



