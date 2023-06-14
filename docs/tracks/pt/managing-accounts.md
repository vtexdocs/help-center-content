---
title: 'Gerenciar contas no Customer Credit'
id: 4eknoeqaj6EGC20amsm6Gc
status: PUBLISHED
createdAt: 2018-11-06T21:15:25.330Z
updatedAt: 2023-05-12T12:21:21.583Z
publishedAt: 2023-05-12T12:21:21.583Z
firstPublishedAt: 2018-11-07T17:10:45.883Z
contentType: trackArticle
productTeam: Financial
slug: gerenciando-contas
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugPT: customer-credit-como-comecar
---

A tela de Detalhes da Conta traz tudo o que você precisa saber sobre uma conta e suas configurações.

## Limite de crédito
O limite de crédito e indica o valor máximo de títulos em aberto que um cliente pode ter em um dado momento. Estabelecê-lo é obrigatório e o super Admin da conta pode alterar esse valor quantas vezes quiser.

Além disso, lembre-se que as alterações no limite de crédito são atualizadas em poucos minutos no sistema.

## Títulos
O título é o documento gerado quando um cliente fecha uma compra utilizando o Customer Credit como meio de pagamento. 

Em casos de compras parceladas, os títulos são referentes ao número de parcelas. Ou seja, se o cliente optou por fazer um pagamento em 10 parcelas, o sistema computará 10 títulos relacionados ao mesmo pedido. 

Independente do meio de pagamento, todos os títulos no sistema podem ser visualizados e gerenciados pelo Admin e,  assim como as contas, também podem ser exportados e editados em massa. 

### Estados de um título
Há quatro status possíveis para os títulos.

São eles:

- Aberto; 
- Pago; 
- Vencido;
- Cancelado. 

Vale ressaltar que um título é sempre criado com o status de aberto e, dependendo de ações feitas no Admin ou de chamadas de API, pode transitar para o estado de Pago ou Cancelado.

### Liquidação dos títulos

A forma como os títulos serão liquidados precisa ser controlada pela loja.

Uma das opções de liquidação de títulos é gerar um link de pagamento. Nesse caso, uma vez que o esteja configurado, o cliente verá um botão "Pagar" junto do título na tela de Meus Créditos, que o levará para o link indicado. 

Além disso, os links de pagamento podem ser adicionados via arquivo CSV pelo Admin ou via API. 

Desse modo, após ter recebido o pagamento referente a um título, basta marcá-lo como pago no nosso sitema. Isto pode ser feito de três maneiras: individualmente, em massa ou pela API.

#### Liquidação individual
Liquidar um título pelo Admin é bem simples. 

Os passos são:

1. Acesse o __Admin__;
2. Clique no módulo __Customer Credit__;
3. Em seguida, clique na seção __Títulos__;
4. Selecione o __título__ que deseja editar;
5. Clique no botão azul claro __“Marcar como pago”__.

Assim, o título terá o estado alterado para “Pago”.

#### Liquidação em massa
Caso sua conta tenha muito títulos em aberto, não é viável alterar o status de cada um individualmente. 

Desse modo, você pode utilizar o recurso de liquidação em massa, processo muito semelhante ao de atualização de contas em massa. O princípio é o mesmo: importar um arquivo CSV com os novos dados para o Admin. 

Nesse caso, você deve alterar os valores da coluna status de “Aberto” para “Pago” e salvar as edições.

Em seguida, basta seguir o passo a passo:

1. Acesse o __Admin__;
2. Clique no módulo __Customer Credit__;
3. Em seguida, clique na seção __Títulos__;
4. Depois, clique no botão __“Atualizar em massa”__;
5. Clique no botão cinza __“Escolher arquivo”__;
6. Selecione o __arquivo CSV__ desejado.

Aguarde o upload da planilha e os títulos serão liquidados todos de uma vez.

#### Liquidação por API
Para liquidar um título por meio de uma API, você pode utilizar o [endpoint](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-creditAccountId-/invoices/-invoiceId- "endpoint") `PUT Change Invoice`. Essa API serve para alterar o estado de um título, não apenas para liquidá-lo.

Preencha o body com as seguintes informações:

```json
{
"status": "string [Opened | Cancelled | Paid] (optional)", "observation": "string (optional)",
"paymentLink": "string (URL) (optional)"
}
```

Para mais detalhes, confira nossa [documentação técnica sobre o Customer Credit](https://developers.vtex.com/docs/guides/customer-credit-api-overview "documentação técnica sobre o Customer Credit").

## Dependentes adicionais
Conforme suas regras de negócio, você pode compartilhar o limite de crédito das contas com demais usuários. 

A funcionalidade permite você cadastre novos dependentes para uma conta. Estes, por sua vez, poderão compartilhar o mesmo crédito disponível para pagar compras no SmartCheckout.

Para cadastrar novos dependentes para uma conta, siga o passo a passo:

1. Acesse o __Admin__;
2. Clique no módulo __Customer Credit__;
3. Em seguida, clique na seção __Contas__;
4. Selecione a __conta__ que deseja editar;
5. No final da página, clique no botão azul __"Novo"__;
6. Preencha o campo em branco com o __e-mail__ do novo dependente;
7. Clique no botão azul __"Confirmar"__.

Isso fará com que o dependente recém-adicionado seja  exibido no box de dependentes adicionais daquela conta.
