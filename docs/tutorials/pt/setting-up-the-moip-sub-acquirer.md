---
title: 'Configurar o subadquirente Moip'
id: 16yZI11GWC2KMMUAGmec0m
status: DRAFT
createdAt: 2018-02-27T16:01:35.629Z
updatedAt: 2022-12-23T20:30:33.976Z
publishedAt: 
firstPublishedAt: 2018-02-28T16:53:22.407Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-o-subadquirente-moip
locale: pt
legacySlug: configurar-o-subadquirente-moip
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

O Moip é um [subadquirente](/pt/tutorial/o-que-e-um-subadquirente) que oferece uma integração única para conectar sua loja a todas as partes envolvidas no fluxo de pagamento oferecendo proteção contra fraudes e uma solução de [checkout transparente](/pt/tutorial/o-que-e-checkout-transparente) (sem redirecionamentos).

>⚠️ As informações deste artigo são apenas referências de configuração para lojistas que já estejam utilizando o subadquirente Moip. Para novas afiliações, recomendamos a utilização do subadquirente [MoipV2](https://help.vtex.com/pt/tutorial/configurar-o-subadquirente-moipv2--4BipUcTxQ7cq2BiYzUDmEH).

Para configurar o Moip, siga os passos abaixo:

1. Acesse o __Admin__ VTEX.
2. Em __Pagamentos__, clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __Moip__.
5. Preencha os campos solicitados com as seguintes informações:

    - __Token e Key__: insira as informações fornecidas pelo MOIP.
    - __Recebimento__: defina se os pagamentos recebidos serão parcelados ou à vista.
    - __Captura de segurança antecipada__: defina em quanto tempo você deseja que a captura do pagamento seja realizada após a aprovação da transação e da análise antifraude. Caso você prefira, também é possível desativar a opção.
    - __Usar antifraude__: caso você tenha uma solução antifraude contratada, selecione sim para utilizá-la, caso contrário, mantenha não.

<ui>
  6. Clique em <b>Salvar</b>.
  </ui><br><br>

>⚠️ O MOIP não processa transações quando produtos com valor "$0,00" estão no carrinho.  Por exemplo: Se um [anexo](https://help.vtex.com/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm?&utm_source=autocomplete) de embalagem de presente for criado, o valor do item vai ser $ 0,00, o que impossibilita o processamento do pagamento.

## Configurar condição de pagamento

Ao finalizar todos os passos indicados, o Moip estará configurado na sua loja. Dessa forma, ao cadastrar uma condição de pagamento, ele estará disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com o Moip). 

Para saber como definir condições de pagamento, acesse a documentação [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

