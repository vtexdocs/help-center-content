---
title: 'Segurança do SmartCheckout'
id: 3SrJuuhrqwePUg1rp1exfB
status: PUBLISHED
createdAt: 2022-05-12T21:08:03.866Z
updatedAt: 2022-11-14T18:27:54.308Z
publishedAt: 2022-11-14T18:27:54.308Z
firstPublishedAt: 2022-05-12T21:10:56.246Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: seguranca-do-smartcheckout
legacySlug: seguranca-do-smartcheckout
subcategory: 2TNXiKzLZOPxjMTyGiEeJu
---

O SmartCheckout™ é uma feature desenvolvida para aumentar suas vendas sem abrir mão da segurança. Isso é possível porque o SmartCheckout™ permite que o cliente inicie a compra somente com seu endereço de email. Os dados solicitados ao cliente são apenas os essenciais para envio, faturamento e comunicação.

Dessa forma, lojas VTEX podem se beneficiar com:
- Experiência de compra mais fluida e ágil.
- Aumento da taxa de recompra.
- Mais conversões.
- Mais segurança e menos preocupação com senhas.

## Essa funcionalidade é Segura?

Para explicar melhor como funciona o SmartCheckout™ do ponto de vista da segurança, vamos assumir dois personagens:
- Cliente, que já tem seus dados cadastrados na plataforma.
- Fraudador, que está com intenção de fazer a compra com dados de outra pessoa.

A hipótese de vulnerabilidade é que basta que um fraudador tenha o endereço de email de um cliente, para saber suas informações de cartão, endereço e, consequentemente, comprar usando os dados do cliente. Porém, isso não é possível já que a autenticação via email, se dá pelo envio de um código de acesso temporário para o endereço fornecido pelo cliente. Portanto, é preciso ter acesso à caixa de entrada do email usado.

Isso significa que, ao tentar realizar uma compra com um email de terceiros, um fraudador teria que realizar autenticação via login ou código de acesso por email. Sem autenticação também não é possível acessar nem editar dados de uma conta, como endereços de entrega, informações de pagamento ou email. Para compras com cartão de crédito, também é necessário inserir o código de segurança do cartão (CVV).

Além disso, a forma que as informações aparecem mascaradas no checkout é certificada pelo padrão [PCI-DSS](https://help.vtex.com/pt/tutorial/what-is-the-pci-ssc--4jo3Vkox3amSO2w4qIWa0E#) de segurança em pagamentos. Segundo este padrão, os últimos dígitos de um cartão não precisam ser ocultados. A forma com que a informação é exibida é suficiente apenas para o reconhecimento do meio de pagamento, mas insuficiente para realização de compras.

<div class = "alert alert-info">
<p>Com o VTEX Smartcheckout™ a segurança vem em primeiro lugar. Sempre que um email é reconhecido, todos os dados são preenchidos de uma maneira que garante que somente o proprietário do email reconheça suas informações.</p><p>Ao acessar a loja pelo domínio restrito <code>myvtex.com</code> operadores de loja podem ver os dados não mascarados no SmartCheckout a fim de realizar testes. Acesso por este domínio é restrito a administradores de loja com o devido nível de acesso, com as devidas credenciais.</p>
</div>

