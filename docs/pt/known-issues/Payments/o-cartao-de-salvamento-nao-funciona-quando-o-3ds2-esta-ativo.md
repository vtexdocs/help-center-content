---
title: "O cartão de salvamento não funciona quando o 3DS2 está ativo"
id: 6rq9ndcI52WEW1onvc1uNd
status: PUBLISHED
createdAt: 2024-12-03T18:20:53.391Z
updatedAt: 2024-12-03T18:20:54.319Z
publishedAt: 2024-12-03T18:20:54.319Z
firstPublishedAt: 2024-12-03T18:20:54.319Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: o-cartao-de-salvamento-nao-funciona-quando-o-3ds2-esta-ativo
locale: pt
kiStatus: Backlog
internalReference: 319708
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando os clientes tentam adicionar um novo cartão de crédito na seção MyAccount de lojas que utilizam a autenticação 3DS (V1 ou V2), eles podem encontrar uma mensagem de erro informando: "Ocorreu um erro ao tentar salvar o cartão". Esse erro ocorre porque o cartão de crédito ainda não foi validado.

Para validar o cartão, ele deve ser associado a uma condição de pagamento. Quando essa associação for estabelecida, será feita uma cobrança de US$ 1,50 no cartão. No entanto, essa transação é posteriormente cancelada e o cartão é validado no processo.

Nas lojas em que os adquirentes empregam a autenticação 3DS, essa transação aciona o processo de autenticação e solicita uma solicitação de validação do cartão. No entanto, como não se trata de uma compra real, a etapa de "desafio" da autenticação 3DS não pode ser concluída, resultando no erro mencionado acima ao tentar salvar o cartão.

## Simulação


Para simular as etapas que levam ao erro, siga as instruções descritas abaixo:


1. Acesse a plataforma VTEX Admin.
2. Configure um adquirente que utilize a autenticação 3DS. Para a V1, verifique se ela está configurada corretamente. Para a V2, consulte nosso artigo "Configuração do fluxo de autenticação 3DS 2" para obter instruções mais detalhadas.
3. Configure um método de pagamento com cartão de crédito (por exemplo, Mastercard, Visa, American Express) a ser processado pelo adquirente configurado.
4. Visite a página inicial de sua loja.
5. Faça login fornecendo seu endereço de e-mail e senha.
6. Clique em "MyAccount" para acessar as configurações da sua conta.
7. Navegue até a seção "Credit cards" (Cartões de crédito).
8. Selecione a opção "Add new card" (Adicionar novo cartão).
9. Preencha todos os campos obrigatórios com as informações necessárias do cartão.
10. Clique em "Save new card" (Salvar novo cartão) para continuar a salvar os detalhes do cartão.
11. Seguir esse processo resultará no retorno de um erro, indicando o problema encontrado durante a adição do cartão

## Workaround


Você pode resolver esse erro adicionando uma condição de pagamento para um cartão de crédito associado a um adquirente que não usa o 3-D Secure (V1 ou V2)






