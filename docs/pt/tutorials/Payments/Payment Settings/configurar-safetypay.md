---
title: 'Configurar gateway SafetyPay'
id: lf89DOdeveuMOI4Q0CwgC
status: ARCHIVED
createdAt: 2018-02-22T13:57:16.523Z
updatedAt: 2024-03-18T19:57:00.504Z
publishedAt: 
firstPublishedAt: 2018-02-22T15:12:57.862Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: setup-safetypay
locale: pt
legacySlug: configurar-safetypay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

SafetyPay é uma solução de pagamentos que conecta diretamente o checkout da sua loja ao banco do seu cliente. Nesta solução, o seu cliente escolhe a SafetyPay como meio de pagamento e é *redirecionado* para o ambiente seguro do internet banking escolhido. Uma vez redirecionado, o cliente pode fazer uma transferência bancária e realizar o pagamento do pedido.

Para configurar o SafetyPay, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __SafetyPay__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos de cadastro com os dados fornecidos pela SafetyPay (Campos *ApiKey, SignatureKey, Custom Merchant Name*).
5. O campo __Tracking Code__ é opcional. Ele pode ser utilizado para você realizar análises de marketing.
6. No campo __Product ID__, preencha com o meio de pagamento desejado: __Express__ para transferência bancária ou __Cash__ para pagamento em dinheiro.
7. Em __Currency__, selecione a moeda das transações.
8. Em __Language__, escolha o idioma que será utilizado na UI.
9. No campo __Time To Expire (in hours)__, escolha o tempo de expiração do pagamento.
10. No campo __Time To Expire for Lottery Payment (in days)__, escolha o tempo de expiração de pagamentos a serem feitos em lotéricas (aplica-se somente ao Brasil).  
11. Clique em `Salvar`.

## Configurar condição de pagamento SafetyPay

1. Já dentro das __Configurações__ do módulo Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Clique no meio de pagamento __Safety Pay__.
4. Clique no botão __Status__, para ativar esta condição de pagamento.
5. Caso deseje, marque a caixa __Usar Antifraude__ para ativar o antifraude básico.
7. Você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais) para utilização do SafetyPay.
8. Clique em __Salvar__.

Pronto! Agora o SafetyPay já está configurado em sua loja e estará disponível no checkout para o fechamento de compras.
