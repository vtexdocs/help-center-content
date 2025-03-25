---
title: 'Configurar pagamento com Pagosnet'
id: 5pLkVpXo3CL0no6jy5Oray
status: ARCHIVED
createdAt: 2023-09-29T12:47:41.264Z
updatedAt: 2024-03-18T19:11:58.894Z
publishedAt: 
firstPublishedAt: 2023-09-29T13:11:09.442Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-pagosnet
locale: pt
legacySlug: configurar-pagamento-com-pagosnet
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

Na VTEX, é possível realizar a integração com o provedor de pagamento Pagosnet. Por meio deste provedor, sua loja pode realizar vendas por meio do Pagosnet.

Para configurar Pagosnet, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __PagosNet__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Company Code__, __Register Plan User__, __Register Plan Password__, __Notification User__ e __Notification Password__ com as informações da sua conta Pagosnet.
5. No campo __Currency__, escolha a moeda das transações.
6. Em __Time Zone__, indique a região que define seu horário local.
7. Em __Expire Hours__, defina por quantas horas o sistema deve checar o status do pedido antes de sua expiração. 
8. Em __Cash Invoice Method__, selecione se deve ser utilizada invoice para pagamentos em cash.
9. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão `Instalar app` e siga as instruções de instalação.
10. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique em __Pagosnet__.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector Pagosnet pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
