---
title: 'Change seller para afiliações que suportam split nativo: FAQ'
id: 2TcTp83SYrZ5GK9jOUwTam
status: PUBLISHED
createdAt: 2021-02-04T17:15:55.230Z
updatedAt: 2023-03-31T12:53:55.772Z
publishedAt: 2023-03-31T12:53:55.772Z
firstPublishedAt: 2021-02-04T18:32:32.831Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: change-seller-for-affiliations-that-support-native-split-faq
locale: pt
legacySlug: change-seller-para-afiliacoes-que-suportam-split-nativo-faq
---

Durante o processo de compra em um Marketplace, pode ocorrer a necessidade de alteração de seller - quem entrega o produto ao consumidor final. Um dos motivos mais comuns é a falta de estoque, o que acaba acarretando no cancelamento da venda.

Com a funcionalidade de __Change seller__ para marketplaces com afiliações que suportam split de pagamentos, é possível fazer a [alteração do seller](https://help.vtex.com/pt/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete) e garantir que a venda seja efetivada, evitando reembolsos de pagamento e burocracias desnecessárias.

Acesse o artigo [Afiliações com split nativo e alteração de seller](https://help.vtex.com/pt/announcements/afiliacoes-com-split-nativo-e-alteracao-de-seller?utm_source=newsletter-pt&utm_medium=email-text&utm_campaign=jan-2021%0A%0A), para mais detalhes sobre o funcionamento da solução, e caso tenha interesse em saber como utilizá-la, confira o tutorial [Como usar o Change Seller](https://help.vtex.com/pt/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete).

Abaixo compilamos as principais dúvidas que podem surgir quanto ao change seller.

### Será possível realizar o change seller utilizando os comportamentos de liquidação (captura) automática?

Não. Ao optar pela liquidação automática, o pagamento é liquidado logo após autorização e/ou análise do antifraude. É nesse momento que enviamos as informações sobre recebedores e taxas de pagamento para os adquirentes.

Por isso, para ter acesso ao change seller, a afiliação com split deve ser configurada em um desses comportamentos de liquidação no campo __Captura automática de pagamento__:

- __Use O Comportamento Recomendado Pelo Processador de Pagamentos__.
- __Desativado: Não Capturado Automaticamente__.

![Captura automática de pagamento](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Financial/change-seller-para-afiliacoes-que-suportam-split-nativo-faq_1.png)

### Selecionando o comportamento de liquidação não automática, quando o pagamento será liquidado?

A liquidação será realizada no momento de faturamento do pedido. Caso o faturamento leve muitos dias para acontecer, a liquidação seguirá o padrão configurado na afiliação, conforme abaixo:

1. __Use O Comportamento Recomendado Pelo Processador de Pagamentos:__ a liquidação é agendada de acordo com o período especificado pelo conector. Este período, além de indicar se o pagamento foi autorizado, pode especificar (ou recomendar) um número de dias para a liquidação no momento da resposta do adquirente. O número de dias a ser especificado pelo parceiro depende de um acordo comercial entre você, cliente, e seu provedor de pagamentos.

2. __Desativado - Não Capturado Automaticamente:__ a  liquidação não acontece de forma automática.

### Será possível realizar o change seller após a liquidação do pagamento?

Não, a janela para change seller acontecerá entre autorização e liquidação. 

Quando o pagamento é liquidado, as informações sobre recebedores e valores são enviadas para os adquirentes e não podem mais ser alteradas.

### Será possível realizar change seller em afiliações com split para todos os meios de pagamento?

Não. Pagamentos com split suportam change seller apenas quando foram realizados com um ou dois cartões de crédito. Isso acontece porque, na maior parte dos provedores de pagamento, meios como o boleto ou cartão de débito têm o valor capturado imediatamente. Sendo assim, não conseguimos oferecer uma janela de tempo para a realização do change seller.

>⚠️ Em casos de tentativa de change seller com meios de pagamento que não seja cartão de crédito, você receberá a seguinte mensagem de erro na chamada da API: "Error when updating additional data for transaction = 722726D8B04C4AAFB1EC945076FD2913. Payout split was already done"

### Será possível realizar reembolsos parciais ou totais dos pedidos?

Sim, reembolsos parciais e totais acontecerão normalmente. 

### O que acontecerá caso a troca de seller resulte em uma diminuição ou aumento no valor dos produtos e/ou frete?

O valor liquidado do consumidor final permanecerá o mesmo. Sendo assim, o split levará em consideração o valor original e aplicará as regras de comissionamento e divisão de recebíveis sobre esse valor.

Para casos em que o novo seller tem preço superior ao seller original, nossa solução de change seller possui uma trava de segurança que só permite mudar o seller se a diferença de valores (produtos + frete) não ultrapassar R$ 0,30.

Se o novo seller tiver um preço inferior ao do seller original será possível seguir com a mudança, mesmo com o valor liquidado permanecendo o mesmo.

Como o split de pagamentos levará em consideração o valor inicial da liquidação, o novo seller receberá valor superior ao preço em que anunciava o produto.

## Exemplo

### Novo seller com preço até $0,30 superior

Um produto foi comprado no marketplace __Coinshop__ e o fulfillment (conjunto de operações e atividades desde o recebimento do pedido até o momento da entrega do produto ao cliente final) foi realizado pelo seller __parceiro01__ em que o preço do produto era R$0,02 e frete de R$5,00. Havia 10% de comissão apenas sobre produtos para Coinshop.

O valor autorizado no cartão do consumidor será de R$5,02.

Foi necessário realizar o change seller e, após a mudança, o pedido foi designado para um novo seller chamado __Parceiro02__ cujo preço era R$0,30.

Na tela do seller __Parceiro02__ podemos notar um decréscimo de R$0,28 com a identificação "Desconto de Coinshop" (apesar do preço para o seller Parceiro02 ser de R$ 0,30, o valor pago a ele foi de apenas R$ 0,02)

>ℹ️ Vale ressaltar que nesse caso o change seller foi possível pois a diferença era inferior a R$0,30, caso fosse de R$0,31 ou mais o change seller não aconteceria.

Após o faturamento do pedido, o valor de R$5,02 foi liquidado e a divisão do pagamento, efetivado.

O __cálculo da divisão__ desses recebíveis ficou da seguinte maneira:

| Recebedor     | Cálculo     | Total     |
| ---------- | ---------- | ---------- |
| Marketplace Coinshop      | Comissão x Valor do produto = 10%(0,02)     | 0,002 (apenas ilustrativo)   |
| Seller Parceiro02       | Total do pedido - Comissão = 5,02 - 0,002       | 5,018 (apenas ilustrativo)     |

Sendo assim, apesar do preço para o seller __parceiro02__ ser de R$0,30 que somado ao frete deveria dar um total de R$5,30, o valor dividido foi de apenas R$5,02.

### Novo seller com preço inferior

Um produto foi comprado no marketplace __Coinshop__ e o fulfillment (conjunto de operações e atividades desde o recebimento do pedido até o momento da entrega do produto ao cliente final) foi realizado pelo seller __Tupinicoin__, cujo preço do produto era R$0,60 e o frete grátis. Havia 10% de comissão apenas sobre produtos da Coinshop.

Foi necessário realizar o change seller e, após a mudança, o pedido foi designado para um novo seller chamado __Japacoin__, cujo preço era R$0,04.

Na tela do novo seller sinaliza-se um acréscimo de R$ 0,56 no preço do produto, com a identificação "Acréscimo de Coinshop" (apesar do preço para o seller Japacoin ser de R$ 0,04, o valor pago a ele foi de R$ 0,60).

Com relação à distribuição desses recebíveis com o seller, a divisão seria realizada da seguinte maneira:

| Recebedor     | Cálculo     | Total     |
| ---------- | ---------- | ---------- |
| Marketplace Coinshop     | Comissão x Valor do produto = 10%(0,60)       | 0,06 (apenas ilustrativo)       |
| Seller Japacoin     | Total do pedido - Comissão = 0,60-0,06      | 0,54 (apenas ilustrativo)       |

>ℹ️ Vale relembrar que em casos onde o preço do novo seller é inferior ao preço do seller original, não existirá uma trava de segurança de R$0,30

Sendo assim, apesar do preço para o seller Japacoin ser de R$ 0,04, o valor dividido foi de R$ 0,60.

### Como posso ter visibilidade sobre as diferenças nos valores?

Durante o processo de change seller, o marketplace pode utilizar a API para simulação de carrinho. 

Com a informação dos sellers em mãos, você pode simular carrinhos para verificar a disponibilidade dos produtos. Para mais informações, confira este tutorial do nosso Help Center - [Como usar o Change Seller](https://help.vtex.com/pt/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete).

Durante a etapa de simulação você pode verificar o preço dos produtos e do frete no novo seller para decidir se quer optar pela troca de seller.

Uma vez efetuado o change seller, será possível identificar as diferenças de valores apenas na __tela de pedidos do novo seller__ para qual o pedido foi designado, conforme imagens da pergunta 6.
