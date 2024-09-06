---
title: 'Configurar boleto registrado Itaú (Itaú Registrado)'
id: 6MEHf1oDTOkuWM2CaYi4gu
status: ARCHIVED
createdAt: 2018-11-30T18:23:45.696Z
updatedAt: 2024-03-18T18:01:00.472Z
publishedAt: 
firstPublishedAt: 2018-12-11T17:59:44.827Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-boleto-registrado-itau-itau-registrado
locale: pt
legacySlug: configurar-boleto-registrado-itau-itau-registrado
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

Para configurar o boleto registrado do Itaú, você pode escolher entre dois conectores diferentes: o __Boleto Itaú__ (também conhecido como __Itaú Registrado__ e que você vai aprender a configurar neste artigo) ou o [ItauShopline](https://help.vtex.com/pt/tutorial/configurar-boleto-registrado-itau--3TqzCHPU7KIYGsOKuUeQcq). No caso do __Boleto Itaú__, a geração do boleto é feita de forma transparente (sem redirecionamento para o site do Itaú), mas a conciliação é feita através de arquivos.

Depois de cadastrar uma dessas afiliações de gateway, você deverá configurar a condição de pagamento de boleto bancário. Assim, os boletos emitidos pela sua loja vão poder ser registrados pelo Itaú.

## Configurar afiliação de gateway Boleto Itaú (Itaú Registrado)

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __BankInvoiceItau__ na barra de busca e clique sobre o nome do provedor.
4. Informe o nome da sua empresa no campo __Nome da Empresa__. Lembre-se de que essa é a informação que vai vir no campo _Beneficiário_ do boleto.
5. No campo __CNPJ__, preencha com o número do CNPJ da sua empresa, sem pontuação.
6. Preencha os dados bancários da sua empresa nos campos __Agência__ e __Número de Conta__.
7. Em __Validade do boleto em dias__, escolha a quantidade de dias (contados a partir da geração do boleto) que seu cliente terá para fazer o pagamento.
8. No campo __Instruções no boleto ao Caixa__, escreva as instruções que serão impressas no boleto.
9. Preencha os campos de cadastro com os dados fornecidos pelo Itaú: _Portfólio ou Carteira_, _Convênio_ e _Código do Cedente_.
10. Em __Endereço do Beneficiário__, informe o endereço comercial da sua empresa (respeitando o limite de até _200 caracteres_).
11. No campo __Registrado?__, selecione a opção _Sim_. Ao fazer isso, novos campos vão surgir para você preencher.
12. Em __Ambiente de Autenticação__, informe o valor `beta`.
13. No campo __Tipo de Ambiente__, informe o valor `2`.
14. Preencha os campos seguintes com os dados fornecidos pelo Itaú: _Id do cliente_, _Secret do cliente_ e _Chave do itau_.
15. No campo __Dias para expiração da transação de boleto__, defina em quantos dias, depois do vencimento do boleto, a transação irá expirar.
16. Clique no botão __Salvar__.

## Configurar a condição de pagamento Boleto Bancário
1. Depois de configurada a afiliação de gateway __Boleto Itau__, clique na aba __Condições de Pagamento__. 
2. Então, clique no botão __+__.
3. Na seção __Boleto__, selecione a opção __Boleto Bancário__.
4. Preencha o nome da condição de pagamento, para facilitar sua identificação. 
5. Clique no botão __Status__ para ativá-la.
6. Selecione a afiliação de gateway configurada acima (__Boleto Itaú__).
7. Caso deseje, você pode configurar uma [condição especial](/pt/tutorial/condicoes-especiais/) para essa condição de pagamento.
8. Clique no botão __Salvar__.

