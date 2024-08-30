---
title: 'Configurar boleto registrado Bradesco'
id: bbnXBjvKOkWYiOosmASiA
status: DRAFT
createdAt: 2018-03-20T22:08:43.187Z
updatedAt: 2024-03-18T18:04:46.311Z
publishedAt: 
firstPublishedAt: 2018-03-21T17:27:23.026Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: configurar-boleto-registrado-bradesco
locale: pt
legacySlug: configurar-boleto-registrado-bradesco
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

Para configurar o boleto registrado do Bradesco, é necessário utilizar o conector do __Bradesco Registrado__ e configurar a condição de pagamento de boleto bancário. Desta forma, os boletos emitidos serão registrados pelo Bradesco.

>ℹ️ Atenção: antes de configurar o meio de pagamento no Admin VTEX, é preciso cadastrar a URL de notificação no [ Internet Banking Bradesco](https://meiosdepagamentobradesco.com.br/gl/login.jsp). Para isso, basta inserir o valor https://meiosdepagamentobradesco.com.br/notification no campo em questão.

Para realizar a configuração, siga os passos abaixo:

## Configurar afiliação de gateway Bradesco Registrado

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Bradesco Registrado__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos de cadastro com os dados fornecidos pelo Bradesco (Campos __Merchant ID__, __Login (email)__ e __Chave de Segurança__).
5. Em __Beneficiário__, preencha com a razão social da empresa beneficiária.
6. Em __Carteira__, verifique com o Bradesco se você é um *cliente antigo (25)* ou um *cliente novo (26)*.
7. No campo __Nosso numero prefixo__, preencha com um número para identificar os códigos gerados pela VTEX.
8. Em __Agência__, digite a informação fornecida pelo __Bradesco__.
9. No campo __Dias__, preencha com o número de dias para pagamento até a expiração do boleto.
10. Em __Instruções__, preencha com orientações para o pagamento do boleto.
11. Em __Boleto registrado__, marque *Sim* para exigir a autenticação do comprador.
12. Clique em `Salvar`.

## Configurar a condição de pagamento Boleto Bancário

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de Pagamento__, clique no botão `+`.
3. Na seção __Boleto__, selecione a opção __Boleto Bancário__.
4. Preencha o nome da condição de pagamento e selecione a afiliação de gateway configurada acima (__Bradesco Registrado__).
5. Caso deseje, você pode configurar uma [condição especial](https://help.vtex.com/pt/tutorial/condicoes-especiais/) para essa condição de pagamento.
6. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector Boleto Registrado Bradesco pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
