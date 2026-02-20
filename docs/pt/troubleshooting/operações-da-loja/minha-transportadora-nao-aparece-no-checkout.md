---
title: 'Minha transportadora não aparece no Checkout'
id:
status: PUBLISHED
createdAt: 2026-02-20T00:00:00.199Z
updatedAt: 2026-02-20T00:00:00.199Z
publishedAt: 2026-02-20T00:00:00.199Z
firstPublishedAt: 2026-02-20T00:00:00.199Z
contentType: tutorial
productTeam: Post-purchase
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: my-carrier-does-not-appear-at-checkout
legacySlug: minha-transportadora-nao-aparece-no-checkout
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Envio
  - Logística
  - Checkout
---
Em algumas situações, a transportadora pode não ser exibida como opção de entrega no Checkout ao finalizar um pedido na VTEX. Este artigo reúne os principais cenários que causam esse comportamento e apresenta as soluções recomendadas para cada caso.

> ℹ️ Antes de prosseguir, certifique-se de que todas as [transportadoras estão cadastradas](https://help.vtex.com/pt/docs/tutorials/transportadoras-na-vtex) corretamente na plataforma.

## Soluções

### Concorrência entre transportadoras do mesmo tipo

O Checkout exibe os [métodos de envio](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega/) dos produtos, não os nomes das transportadoras. O sistema prioriza a transportadora mais rápida ou com menor custo entre as opções de um mesmo método de envio. Assim, uma transportadora pode não aparecer se outra do mesmo tipo tiver menor prazo ou custo cadastrado.

1. Para exibir todas as transportadoras, acesse **Configurações da Loja > Envio > Configurações**.
2. Cadastre as transportadoras com métodos de envio diferentes.

### Transportadora não atende o endereço informado

Se o endereço de entrega do pedido estiver fora das faixas de CEP ou polígonos de geolocalização configurados na **Planilha de Frete** da transportadora, ela não será exibida.

1. Verifique na [Planilha de Frete](https://help.vtex.com/pt/tutorial/importar-planilha-de-frete) da transportadora se as faixas de CEP (`zipCodeStart`, `zipCodeEnd`) ou os polígonos de geolocalização (`PolygonName`) configurados abrangem o endereço de entrega do pedido.
2. Ajuste os campos de localização na planilha conforme necessário.

### Volume do pedido excede o máximo permitido

Caso o volume total dos itens no carrinho exceda o volume máximo cadastrado para a transportadora na **Planilha de Frete**, ela será automaticamente ignorada.

1. Acesse as configurações da transportadora em **Configurações da Loja > Envio > Configurações**.
2. Verifique se o volume máximo configurado para a transportadora corresponde ao limite real que ela pode transportar.
3. Ajuste o volume máximo na configuração da transportadora ou na [Planilha de Frete](https://help.vtex.com/pt/tutorial/importar-planilha-de-frete), se aplicável.

### Peso do pedido excede o máximo permitido

Se o peso total dos itens do pedido exceder o peso máximo cadastrado para a transportadora na **Planilha de Frete**, ela não aparecerá como opção.

1. Acesse as configurações da transportadora em **Configurações da Loja > Envio > Configurações**.
2. Verifique se o peso máximo configurado para a transportadora corresponde ao limite real que ela pode transportar.
3. Altere os valores nos campos `weightStart` e `weightEnd` na [Planilha de Frete](https://help.vtex.com/pt/tutorial/importar-planilha-de-frete).
4. Importe a [Planilha de Frete](https://help.vtex.com/pt/tutorial/importar-planilha-de-frete) novamente para a plataforma.

### Quebra de pacotes não permitida

Se o peso do pedido ultrapassar o limite da transportadora e a **Divisão de Carga** não estiver habilitada na sua loja, a transportadora não aparecerá no Checkout. Por exemplo: caso um pedido tenha 40kg, mas o peso máximo cadastrado na planilha de frete seja 30kg, os produtos somente poderão ser enviados por meio da divisão do pedido em dois pacotes (20 kg cada)

1. [Habilite a Divisão de Carga](https://help.vtex.com/pt/docs/tutorials/como-funciona-a-divisao-de-carga) em sua loja.
2. Esta configuração permite que pedidos sejam divididos em múltiplos pacotes quando o peso exceder o limite da transportadora, tornando-a uma opção viável.

### Otimização das Opções de Entrega no Checkout

A funcionalidade **Otimização das Opções de Entrega** pode estar ocultando opções de envio mais caras ou demoradas no Checkout.

1. Desabilite a função [Otimização das Opções de Entrega no Checkout](https://help.vtex.com/pt/docs/tutorials/otimizacao-das-opcoes-de-entrega-no-checkout) em sua loja.

> ⚠️ Ao desabilitar esta função no Admin VTEX, todas as opções disponíveis de entrega serão exibidas no processo do Checkout. Entretanto, caso a funcionalidade de múltiplas entregas esteja habilitada na loja e existam opções de entrega diferentes entre os itens selecionados no carrinho, as **Opções de entrega otimizadas** continuarão a ser exibidas. Ou seja, a otimização de entrega será necessária para lidar com os múltiplos pacotes (itens com diferentes opções de entrega).
