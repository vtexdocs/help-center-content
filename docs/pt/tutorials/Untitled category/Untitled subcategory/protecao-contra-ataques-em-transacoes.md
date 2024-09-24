---
title: 'Proteção contra ataques em transações'
id: 62oQBmi7UZlYlgb0Ha1hZ3
status: DRAFT
createdAt: 2021-10-25T19:02:59.690Z
updatedAt: 2024-03-01T15:58:16.139Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Financial
author: 7vIfbtqL5oztUGHLHXwy1E
slugEN: protection-against-transaction-attacks
locale: pt
legacySlug: protecao-contra-ataques-em-transacoes
subcategoryId: unknown-subcategory
---

# Proteção contra ataques em transações

A proteção contra ataques envolvendo transações é uma das soluções que a VTEX oferece para reduzir o risco de operações fraudulentas. Esta proteção é ativada automaticamente quando detectamos uma taxa muito alta de negação de autorizações de transações (acima de 90%) dentro de um curto período de tempo (15 minutos).

Na primeira versão, ao ser ativada, a proteção consistirá em aplicar uma alteração no fluxo de pagamento da compra. Este procedimento não causará um aumento no tempo do pedido ou na diminuição da conversão da loja. Uma vez que o pedido esteja fechado, o consumidor receberá a mensagem de pagamento aprovado (ou reprovado) posteriormente via mensagem eletrônica (email ou SMS).

>ℹ️ A proteção não impede totalmente que a loja sofra ataques de cartões, mas reduz de forma considerável o número desses eventos. Desta forma, as transações tornam-se mais seguras.

### Como habilitar a proteção contra ataques em transações?

Quando habilitada, se detectada uma alta taxa de negação de autorizações de transações em um curto período de tempo, a proteção será ativada automaticamente durante o período de 1h. Concluído este tempo, as autorizações de transações voltam ao fluxo normal automaticamente. 

Para habilitar a proteção, confira o passo a passo:

1. Acesse o __Admin__.
2. Clique em __Pagamentos__.
3. Em seguida, clique em __Transações__.
4. No canto superior direito, clilque no ícone de configurações.
5. Em __Proteção contra ataques__, clique no botão para habilitar (cor verde indica "habilitado").

![proteção-botao-configurações](//images.ctfassets.net/alneenqid6w5/1jhGP8FOgMtkEp0O8AqOnX/c36c317b8cd30966cd76901c897219f3/prote____o-botao-configura____es.png)

![proteção-opção-habilitar1](//images.ctfassets.net/alneenqid6w5/kk96NiBFAUzzuv23FbQeu/7f4c2e67f22c7aaa2886f9850a3fcc03/prote____o-op____o-habilitar1.png)

### Como desabilitar a proteção contra ataques em transações?

>❗ Desabilitar a proteção contra ataques em transações aumenta o risco para o lojista de fraude por teste de cartão (operação efetuada por um fraudador utilizando um grande número de dados de cartões para realizar transações fraudulentas). Em caso de ataques que possam prejudicar um ou mais sistemas internos da VTEX, a plataforma poderá reabilitar compulsoriamente a proteção contra ataques, e o lojista será informado desta operação.

Para desabilitar a proteção, confira o passo a passo:

1. Acesse o __Admin__.
2. Clique em __Pagamentos__.
3. Em seguida, clique em __Transações__.
4. Em __Proteção contra ataques__, clique no botão para desabilitar (cor cinza indica "não habilitado").

### Como identificar se a proteção contra ataques em transações foi ativada?

Sempre que a proteção for ativada, o lojista receberá uma comunicação por email (o mesmo cadastrado no SmtpConnector do Admin na loja).

O lojista também pode consultar um histórico de ameaças contendo as informações dos motivos de ativação e os períodos em que ocorreram. 

Para acessar estas informações, confira o passo a passo:

1. Acesse o __Admin__.
2. Clique em __Pagamentos__.
3. Em seguida, clique em __Transações__.
4. No canto superior direito, clique no ícone de configurações.
5. Em __Histórico de ameaças__, clique na seta à direita.
6. Para selecionar __Ameaças detectadas__ ou __Ameaças neutralizadas__, clique em uma das setas à direita.
7. Verifique os detalhes dos eventos na janela popup apresentada.

![proteção-opção-historico1](//images.ctfassets.net/alneenqid6w5/19hGY1Jjv5DOBXABIxCnxd/43d9eb3c6c754576e2879fbc9c5f62bc/prote____o-op____o-historico1.png)

![proteção-tela-historico1](//images.ctfassets.net/alneenqid6w5/6p6N8EV2PnhzbnxFUkOWda/bec651a71aa79f2374426afefe8cdf23/prote____o-tela-historico1.png)

![tela-ameaça-potencial1](//images.ctfassets.net/alneenqid6w5/4l9WCe1f7yYN9Gx0sczBXK/40dddb9cb38a2b415a57c262fc61faa0/tela-amea__a-potencial1.png)

![tela-ameaça-neutralizada1](//images.ctfassets.net/alneenqid6w5/68JvVENRbcGGOcBFXno54/fe85365340965f6d7927f2d6525d27a2/tela-amea__a-neutralizada1.png)

### Artigos relacionados

- [O que é antifraude?](https://help.vtex.com/pt/tutorial/o-que-e-antifraude)
- [Como configurar o antifraude](https://help.vtex.com/pt/tutorial/como-configurar-antifraude)
- [Visão geral de Pagamentos](https://help.vtex.com/pt/tutorial/pci-gateway-visao-geral)

