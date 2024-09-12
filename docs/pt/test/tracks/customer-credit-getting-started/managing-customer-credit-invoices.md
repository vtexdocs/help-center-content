---
title: 'Gerenciando títulos no Customer Credit'
id: vtf5UVQcmlb0kHBZYYmM3
status: PUBLISHED
createdAt: 2024-02-07T21:31:46.690Z
updatedAt: 2024-02-09T12:30:53.684Z
publishedAt: 2024-02-09T12:30:53.684Z
firstPublishedAt: 2024-02-07T21:44:30.527Z
contentType: trackArticle
productTeam: Financial
slug: gerenciando-titulos-no-customer-credit
locale: pt
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugPT: customer-credit-como-comecar
---

A tela de __Títulos__ no Admin VTEX (__Aplicativos > Customer Credit > Títulos__), permite que você tenha acesso as informações de todos títulos emitidos por clientes cadastrados no Customer Credit em sua loja. Por meio desta funcionalidade, você pode executar as seguintes ações:

- [Filtrar visualização de títulos](#filtro-de-titulos) 
- [Verificar detalhes de cada título](#detalhes-do-titulo)
- [Liquidar títulos](#liquidar-titulos)
<br>
<br>
![Invoices_PT](https://images.ctfassets.net/alneenqid6w5/6otbbLNAHn0hHmKvkYmrj2/3ac50b7bdade789abccccda8abe14352/Invoices_PT.JPG)

## Filtro de títulos

Para selecionar a lista de títulos a ser exibida é possível clicar em um dos quatro status (Aberto, Pago, Cancelado ou Vencido), ou inserir o número de identificação do pedido para qual o título foi emitido.

>⚠️ No Customer Credit, todos os títulos são criados com o status **Aberto**.

## Detalhes do título

Ao clicar sobre um título específico, a página __Detalhes do título__ apresenta as seguintes informações: valor do título emitido, data de vencimento, link de pagamento (caso exista), identificação da conta onde foi emitido, identificação do pedido e observações (mensagens específicas sobre o título).

## Liquidar títulos

Para facilitar o processo de pagamento de um título, é possível fornecer um link de pagamento diretamente ao cliente. Este link pode ser adicionado no título de duas formas:

- Utilizar a função `IMPORTAR` para inserir dados de uma planilha .csv.
- Via endpoint [PUT Change Invoice](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-creditAccountId-/invoices/-invoiceId-) do Customer Credit API.

>ℹ️ Após você realizar um dos procedimentos acima, o cliente terá acesso ao botão **PAGAR** que ficará disponível na sua área do cliente no site da loja (**Minha Conta > Meus Créditos**).

### Liquidação individual

Após confirmar o pagamento de um título, você pode liquidá-lo da seguinte forma:

1. No Admin VTEX, acesse __Aplicativos > Customer Credit > Títulos__, ou digite __Títulos__ na barra de busca no topo da página.
2. Clique sobre o título desejado.
3. Na página __Detalhes do título__, clique sobre __Marcar como pago__.
4. Na página de __Títulos__, confirme que o status do título está indicado como __Pago__.

### Liquidação em massa

Caso você deseje confirmar o pagamento de vários títulos ao mesmo tempo, siga os passos abaixo:

1. No Admin VTEX, acesse __Aplicativos > Customer Credit > Títulos__, ou digite __Títulos__ na barra de busca no topo da página.
2. Clique no botão `EXPORTAR`.
3. Acesse a planilha .csv baixada e modifique a informação do campo `Status` para `Paid` nas linhas correspondentes ao títulos que deseja liquidar. Salve a planilha. 
4. Clique no botão `IMPORTAR`.
5. Selecione ou insira a planilha .csv no espaço __Solte aqui seu CSV ou escolha ou arquivo__.
6. Clique no botão `IMPORTAR ARQUIVO`.
7. Após a planilha ser carregada no Admin, verifique na tela de __Títulos__ se os títulos atualizados estão descritos como __Pago__. 

### Liquidação por API

Você também pode liquidar um título por meio do endpoint [PUT - Change invoice](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-creditAccountId-/invoices/-invoiceId-). Para mais informações sobre os endpoints da API de Customer Credit , acesse [Customer Credit API - Overview](https://developers.vtex.com/docs/api-reference/customer-credit-api#overview).

