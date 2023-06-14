---
title: Configurar o gateway TNSPay
id: 6jIUr6Va00QyEuMEGAmQA6
status: PUBLISHED
createdAt: 2018-03-02T12:43:42.795Z
updatedAt: 2023-03-29T01:14:08.864Z
publishedAt: 2023-03-29T01:14:08.864Z
firstPublishedAt: 2018-03-02T15:56:49.389Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-o-gateway-tnspay
legacySlug: configurar-o-gateway-tnspay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

O TNSPay é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) com certificação PCI e que oferece uma série de recursos de segurança para facilitar o processamento de [compras recorrentes](/pt/faq/como-funciona-a-compra-recorrente).

Para configurar o TNSPay, siga os passos abaixo:

## Configurar afiliação de gateway TNSPay
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __TNSPay__.
4. Preencha os campos de cadastro com os dados fornecidos (ou registrados) pelo TNSPay: campos _MerchantID_, _UserName_, _Password_, _Version_, _Acquirer_.
5. No campo __Currency__, escolha a moeda que vai ser utilizada nas transações.
6. Em __Tokenize credit card__, você deve escolher se vai usar ou não a funcionalidade de [tokenização](/pt/faq/como-funciona-a-compra-recorrente#tokenizacao-do-cartao) do TNSPay.
7. Em __Use 3DSecure__, você define quando utilizar o [protocolo 3DS](/pt/tutorial/o-que-e-3d-secure) (que exige a autenticação do usuário junto ao banco emissor).
8. Já em __3DSecure Minimum Value__, você determina qual o valor mínimo (expresso em centavos) para aplicar o protocolo 3DS. Essa configuração só é válida se você selecionou a opção _Just above a custom value_ no campo __Use 3DSecure__.
9. No campo __Plan Ids__, você deve adicionar os _plan ids_, separados por vírgulas e com a indicação da quantidade de parcelas.
10. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da tranasação e da análise do antifraude). Você também pode desativar a função.
11. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o TNSPay vai estar configurado na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ele vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com o TNSPay).
Para saber como definir condições de pagamento, acesse [este artigo](/pt/tutorial/condicoes-de-pagamento).
