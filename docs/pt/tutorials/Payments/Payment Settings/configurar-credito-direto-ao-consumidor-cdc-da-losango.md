---
title: 'Configurar crédito direto ao consumidor (CDC) da Losango'
id: 4vfoIULHTs8S9t3WDyldCE
status: PUBLISHED
createdAt: 2020-11-23T20:29:21.353Z
updatedAt: 2024-01-23T18:47:11.153Z
publishedAt: 2024-01-23T18:47:11.153Z
firstPublishedAt: 2020-11-23T21:04:18.389Z
contentType: tutorial
productTeam: Financial
author: 56yU9Wz6mLwmzo82TjgAHy
slugEN: configure-direct-consumer-credit-cdc-by-losango
locale: pt
legacySlug: configurar-credito-direto-ao-consumidor-cdc-da-losango
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O crédito direto ao consumidor é uma modalidade de empréstimo contratado no ato da compra, sem precisar passar por bancos. Esta opção é bastante utilizada no Brasil na compra de bens de valor elevado. Alguns dos principais motivos para adotar essa opção de crédito incluem:

- a falta de recursos para fazer o pagamento à vista; 
- aumento do poder de compra do consumidor; 
- vantagens por conta do processo menos burocrático; 
- possibilidade de parcelamento de compras sem cartão de crédito.

Geralmente, as lojas solicitam apenas documentações pessoais, como RG, CPF, comprovante de residência e algum demonstrativo de atividade remunerada. Após a análise e aprovação do crédito, o cliente recebe um título que comprova a compra e deverá ser pago em parcelas no longo prazo. A loja, por outro lado, continua recebendo o valor à vista. Dessa maneira, disponibilizar o crediário é uma boa opção para aumentar as vendas no e-commerce.

Para utilizar o __Crédito Direto ao Consumidor (CDC) da Losango__ na sua loja, siga as instruções abaixo. Se essa for a primeira vez que você configura um meio de pagamento na VTEX, recomendamos aprender os [fundamentos do módulo de Pagamentos](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG) antes de seguir em frente.

>ℹ️ Caso deseje mais informações técnicas sobre a integração, consulte a [documentação técnica da Losango](https://assets.ctfassets.net/alneenqid6w5/5FVOQoVWOAgaZsKlNHoCCr/83db071b0a7c04c02736d0d4d9fcadc0/DOC_TECNICO_Overview_de_Integrac__a__o_-_CDC_Online_-_v20191111.pdf" target="_blank).

## Cadastro como parceiro Losango

Antes de oferecer o [Crediário Losango](https://www2.losango.com.br/empresas/crediario) na sua loja, é preciso se tornar um parceiro Losango. Para isso faça o [pré-cadastro no site](https://www2.losango.com.br/empresas/seja-nosso-parceiro) e aguarde o resultado do processo de aprovação. Guarde os dados fornecidos pelo banco, eles serão necessários para a etapa de configuração.

## Configuração na VTEX

Após a aprovação do seu cadastro, a Losango enviará informações adicionais para configuração da sua loja. Para fazer a configuração na VTEX, tenha em mãos os dados fornecidos pelo banco na contratação do serviço: __Código do lojista__, __Canal__, __Application Key__ e __Application Token__. 

### Customização do checkout

Após a aprovação do seu cadastro, a Losango enviará um script pré-aprovado de customização do checkout da sua loja. Este script faz parte da configuração, uma vez que será necessário redirecionar o cliente para o ambiente CDC Online para concluir o pagamento do pedido.

Tendo em mãos o script pré-aprovado de customização, siga as instruções abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Checkout**, ou digite **Checkout** na barra de busca no topo da página.
2. Clique no ícone <img src="https://images.ctfassets.net/alneenqid6w5/3d4KBPLr2piZGC48KD3qgh/6f808efc5450f36faa773d4c7d848b68/CDC-Losango-1.png" style="width: 23px;" /> correspondente ao site que será customizado
    ![CDC-Losango-2](https://images.ctfassets.net/alneenqid6w5/7iUE1B4xlYF96gMs0oMfUn/2a55fcd4cc8f0239a0785634e29a18df/CDC-Losango-2.png)
3. Clique na aba Código e selecione o arquivo `checkout6-custom.js`.
    ![CDC-Losango-3](//images.ctfassets.net/alneenqid6w5/248J5RJvoSq2olzQoPsNKn/3598c85f81649667f21d4d5fa40d71b4/CDC-Losango-3.png)
4. Cole o script pré-aprovado de customização __no fim do campo de texto__.
5. Clique no botão __Salvar__ para confirmar as alterações.

Com isso, a opção de pagamento __Losango em até 24x__ aparecerá corretamente no checkout, assim que as [condições de pagamento](#criar-condicoes-de-pagamento) associadas forem ativadas. A escolha do meio de pagamento na VTEX aparecerá como na imagem abaixo.

![CDC-Losango-4](https://images.ctfassets.net/alneenqid6w5/5dzHuCYPxHpy88Q2RjfZeJ/4ad6d24322184f7f756a9d994ed63e94/CDC-Losango-4.png)

>⚠️ **Atenção:** Modificar de forma incorreta os scripts de customização do checkout podem quebrar sua loja ou parar as vendas. Em caso de erros, por favor, apague o conteúdo deste script.

### Configuração do conector de pagamentos

Com os dados configurados na base de dados digital da Losango, siga as instruções abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Losango-CDC__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com os dados fornecidos pela Losango. Não se esqueça de __Salvar__ ao concluir o preenchimento.

![CDC-Losango-7](https://images.ctfassets.net/alneenqid6w5/50xjhDq3CwFR522i1k5sZS/982931d897d8739dc3950dda408c5e2a/CDC-Losango-7.png)

### Criar condições de pagamento

Para finalizar a configuração do CDC Online Losango e disponibilizar este meio de pagamento na sua loja, siga as instruções abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página. 
2. Acesse a aba **Condições de Pagamento**. Clique no ícone <img src="https://images.ctfassets.net/alneenqid6w5/3VXFXGXxCMc9cRMehCiuth/6ae901b40c89d05d4c252feb8df14f5a/CDC-Losango-5.png" style="width: 23px;" /> e escolha __Losango__.

    ![CDC-Losango-8](//images.ctfassets.net/alneenqid6w5/1sGB3vlu73A9Ms6EmbIeeG/e22c65c4e528e23f2c00caef0a930323/CDC-Losango-8.png)

3. Configure e ative a [condição de pagamento](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3) com as regras desejadas. Não se esqueça de __Salvar__ ao concluir o preenchimento.

Se todos passos forem concluídos com sucesso, sua loja passará a oferecer o crédito direto ao consumidor (CDC) da Losango como meio de pagamento para seus clientes.
