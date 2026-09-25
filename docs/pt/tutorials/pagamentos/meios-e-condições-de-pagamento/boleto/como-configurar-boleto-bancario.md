---
title: 'Configurar boleto bancário'
createdAt: 2017-04-27T22:04:55.249Z
updatedAt: 2026-09-25T13:30:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: how-to-configure-a-boleto
locale: pt
hidden: false
---

Na VTEX, sua loja pode vender por meio de boleto bancário. Para configurar esse meio de pagamento, siga estes passos:

1. [Cadastrar o provedor do boleto](#cadastrar-o-provedor-do-boleto)
2. [Configurar condição de pagamento](#configurar-condicao-de-pagamento)
3. [Validar a configuração](#validar-a-configuracao)

## Antes de começar

Antes de configurar o boleto bancário, verifique se sua loja tem:

- Contrato com um banco ou provedor de pagamento que processe boleto bancário. Para saber quais provedores estão disponíveis na sua operação, acesse [Lista de Provedores de Pagamento por País](/pt/docs/tutorials/lista-de-provedores-de-pagamento-por-pais).
- As credenciais fornecidas pelo banco ou provedor de pagamento, necessárias para o cadastro do provedor no Admin VTEX.
- Permissão de acesso ao módulo de pagamentos no Admin VTEX.

## Cadastrar o provedor do boleto

O boleto bancário é processado pelo provedor de pagamento cadastrado na sua loja. Para cadastrar esse provedor, siga estes passos:

1. No Admin VTEX, acesse __Configurações > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome do provedor que processa o boleto bancário na barra de busca e clique no resultado correspondente.
4. Preencha os campos do formulário de acordo com os dados informados pelo provedor ou banco.
5. Clique em `Salvar`.

> ℹ️ Os campos exibidos no formulário variam conforme o provedor. Para as instruções específicas de cada provedor, acesse o artigo desejado na subcategoria __Provedores de pagamento__ do Help Center.

## Configurar condição de pagamento

Para criar a condição de pagamento boleto bancário que será exibida no checkout, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de pagamento__, clique no botão de adicionar condição `+`.
3. Em __Boleto__, selecione a opção __Boleto Bancário__.
4. Ative a condição no campo __Status__.
5. Em __Processar com o provedor__, selecione o provedor configurado anteriormente.
6. (Opcional) Defina [condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais) para o boleto bancário.
7. Clique em `Salvar`.

> ⚠️ Depois de salvar a condição de pagamento, o boleto bancário pode demorar até 10 minutos para aparecer no checkout da sua loja como opção de pagamento.

## Vencimento e cancelamento do boleto

Alguns provedores de pagamento permitem configurar a validade do boleto, ou seja, o prazo (em dias) que o cliente tem para pagá-lo, na própria tela de configuração do provedor. Quando o provedor não oferece esse campo no Admin VTEX, a configuração precisa ser tratada diretamente com o suporte do provedor.

O prazo de cancelamento de um pedido com boleto não pago depende da validade do boleto e do prazo de liberação da reserva de estoque. Para conhecer o cálculo dos dois prazos, acesse [Em quanto tempo um pedido de boleto sem pagamento é cancelado?](/pt/docs/tutorials/em-quanto-tempo-um-pedido-de-boleto-sem-pagamento-e-cancelado).


## Resolver problemas

Se o boleto bancário não for exibido no checkout após o período de 10 minutos, verifique as seguintes causas:

- __Condição de pagamento inativa__: na aba __Condições de pagamento__, confirme se o campo __Status__ da condição do boleto bancário está ativo.
- __Provedor sem suporte ao boleto bancário__: confirme com o provedor de pagamento ou banco se o boleto bancário está disponível no sistema dele para a sua loja.
- __Provedor incorreto na condição__: confirme se o campo __Processar com o provedor__ indica o provedor que processa o boleto bancário.

## Próximos passos

- [Como é feita a aprovação de pagamento do boleto?](/pt/docs/tutorials/como-e-feita-a-aprovacao-de-pagamento-do-boleto)
- [Aprovar pagamento de boleto](/pt/docs/tutorials/como-aprovar-pagamento)
- [Em quanto tempo um pedido de boleto sem pagamento é cancelado?](/pt/docs/tutorials/em-quanto-tempo-um-pedido-de-boleto-sem-pagamento-e-cancelado)
- [Alterar o logotipo do boleto](/pt/docs/tutorials/como-alterar-a-logo-do-boleto)
