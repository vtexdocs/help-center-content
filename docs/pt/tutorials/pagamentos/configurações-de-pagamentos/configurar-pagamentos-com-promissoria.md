---
title: 'Configurar pagamentos com Promissória'
id: 5pW7avTwtyQcMu4uiW8quQ
status: PUBLISHED
createdAt: 2018-06-21T20:20:24.484Z
updatedAt: 2025-02-26T18:35:04.108Z
publishedAt: 2025-02-26T18:35:04.108Z
firstPublishedAt: 2018-06-25T15:42:31.515Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-payments-with-notes-payable
legacySlug: configurar-pagamentos-com-promissoria
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, sua loja pode receber pagamentos por meio de promissórias customizadas. Para isso, você deve seguir os seguintes passos:

- [Configurar provedor de pagamento](#configurar-provedor-de-pagamento)
- [Configurar Promissória](#configurar-promissoria)
- [Configurar condição de pagamento](#configurar-condicao-de-pagamento)

> ⚠️ As informações deste artigo não são referentes as condições de pagamento **Promissory** ou **CardPromissory** disponíveis no Admin em **Configurações da loja > Pagamentos > Configurações > Condições de pagamento**.

## Configurar provedor de pagamento

Para configurar um provedor de pagamento, acesse [Cadastrar provedores de pagamento e antifraude](/pt/tutorial/afiliacoes-de-gateway--tutorials_444#).

> ⚠️ Verifique se o provedor de pagamento desejado suporta o processamento de pagamento por promissória.

## Configurar Promissória

Após cadastrar o provedor de pagamento, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Clique na aba __Pagamentos Customizados__.
3. Em __Promissórias__, clique em uma das 5 caixas de configuração (Configurar).
4. Preencha os seguinte campos com as devidas informações:

- __Nome:__ Nome que será usado para identificar o pagamento.
- __Descrição:__ Detalhes sobre a condição de pagamento.
- __Validade da promissória:__ Tempo limite que seu cliente terá para pagar a promissória antes de perder a validade.
- __Autorizar automaticamente:__ Autorize ou não os pagamentos de forma automática. Recomendamos essa opção somente para casos em que o pagamento é feito na entrega ou retirada do pedido na loja. Ao escolher Yes, o status do pedido muda automaticamente para Preparando Entrega, sem passar por nenhuma verificação de pagamento.
- __Modificar margem:__ Margem percentual permitida para alteração no valor do pagamento realizado com promissória. Para alguns clientes, pode ser importante autorizar mudanças nos pedidos ([change order](/pt/tutorial/change-mudanca-em-pedidos--3d1XLIgPQcwaKGyMiWaYog?&utm_source=autocomplete)). Nesse caso, o campo _Modificar margem_ deve ser preenchido para determinar a margem percentual de alteração permitida.
- __Ativar divisão de pagamento:__ Escolha se utilizará a solução de [split de pagamentos](/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx?&utm_source=autocomplete). Caso opte por essa opção, quando a venda envolver lojas do marketplace, a promissória será dividida entre os sellers e o marketplace.
- __Faturamento automático:__ Quantidade de dias para faturamento automático da promissória após autorização. Promissórias são faturadas no momento da autorização do pagamento. Ao configurar esse campo, o faturamento deixará de acontecer na autorização e passará a ser feito após o número de dias definido pelo cliente.<br>

<ul>  
5. Clique em **Salvar**.  
</ul>

## Configurar condição de pagamento

Depois de concluir todas as etapas, o pagamento por promissória customizada estará configurado e pronto para ser utilizado em sua loja.

Para associá-lo a uma condição de pagamento, siga o artigo [Configurar condições de pagamento](/pt/tutorial/condicoes-de-pagamento).
