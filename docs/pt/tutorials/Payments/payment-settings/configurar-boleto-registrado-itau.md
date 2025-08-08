---
title: 'Configurar boleto registrado Itaú (ItauShopline)'
id: 3TqzCHPU7KIYGsOKuUeQcq
status: PUBLISHED
createdAt: 2018-02-28T15:50:53.154Z
updatedAt: 2024-03-18T18:27:01.365Z
publishedAt: 2024-03-18T18:27:01.365Z
firstPublishedAt: 2018-02-28T19:38:07.445Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: setting-up-itau-registered-ticket
legacySlug: configurar-boleto-registrado-itau
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">Essa integração de pagamento não pode ser mais configurada na plataforma devido ao <a href="https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14">processo de remoção de provedores legados</a> e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.</div>

Para configurar o boleto registrado do Itaú, você pode escolher entre dois conectores diferentes: o __ItauShopline__ (que você vai aprender a configurar neste artigo) ou o [Boleto Itaú (Itaú Registrado)](/pt/tutorial/configurar-boleto-registrado-itau-itau-registrado). No caso do __ItauShopline__, ele faz um redirecionamento para o site do Itaú e a conciliação do boleto é feita automaticamente.

Depois de cadastrar uma dessas afiliações de gateway, você deverá configurar a condição de pagamento de boleto bancário. Assim, os boletos emitidos pela sua loja vão poder ser registrados pelo Itaú.

## Configurar afiliação de gateway ItauShopline
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __ItauShopline__.
4. Preencha os campos *companyCode* e *cypherkey* com os dados fornecidos pelo Itaú (o campo *cypherkey* deve ser preenchido com todas as letras maiúsculas).
5. No campo __Usar chave única__, selecione *Sim* para que a chave identificadora dos boletos registrados seja única.
6. No campo __Reference prefix__, você pode preencher um valor numérico que funcionará como prefixo dos números de registro para esta afiliação. Caso utilize mais de uma afiliação para emitir boletos para a mesma conta, é muito importante que este número seja diferente para cada afiliação.
7. Em __expireDays__, escolha o número de dias para o vencimento do boleto.
8. Em __Instruções__, preencha com as orientações necessárias para que o caixa possa receber o pagamento do boleto.
9. No campo __Boleto Registrado__, marque *Sim* para exigir a autenticação do comprador.
10. Clique no botão __Salvar__.

## Configurar a condição de pagamento Boleto Bancário
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de Pagamento__, clique no botão __+__.
3. Na seção __Boleto__, selecione a opção __Boleto Bancário__.
4. Preencha o nome da condição de pagamento, selecione a afiliação de gateway configurada acima (__ItauShopline__).
5. Caso deseje, você pode configurar uma [condição especial](/pt/tutorial/condicoes-especiais/) para essa condição de pagamento.
6. Clique no botão __Salvar__.
