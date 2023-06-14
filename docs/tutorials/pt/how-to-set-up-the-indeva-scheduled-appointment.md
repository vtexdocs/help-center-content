---
title: 'Como configurar e usar o Atendimento Agendado da Indeva'
id: 4nWpoai0ChD2BKPCjcwoV0
status: DRAFT
createdAt: 2020-06-16T21:03:30.475Z
updatedAt: 2021-01-21T23:27:53.575Z
publishedAt: 
firstPublishedAt: 2020-06-16T21:22:44.494Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: como-configurar-e-usar-o-atendimento-agendado-da-indeva
legacySlug: como-configurar-e-usar-o-atendimento-agendado-da-indeva
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

A Indeva é uma empresa VTEX que já se consolidou no mercado de varejo como uma das principais soluções de interface entre o cliente final e o vendedor da loja física. E, para atender à demanda atual do mercado por ferramentas que possibilitem maior controle e segurança do fluxo de pedidos em lojas físicas, a empresa criou o Atendimento Agendado Indeva.

Por meio dessa feature, sua marca permite que seus clientes agendem visitas às lojas mais próximas de forma segura, confiável e personalizada. E sua loja passa a contar com uma fila de oportunidades de venda por atendimento agendado.

Este artigo explica como funciona essa feature e mostra o passo a passo para implementá-la.

<div class=”alert alert-info”>
Sua loja não precisa ter conta na VTEX para usar a feature de Atendimento Agendado da Indeva.
</div>

## Formulário de agendamento

O consumidor realiza o agendamento por meio de um formulário preparado pela Indeva. A loja deve inserir esse formulário em seu site por meio de um iFrame.

O fluxo de agendamento percorrido pelo cliente se inicia na escolha da loja física onde ele deseja ser atendido. Na imagem abaixo, vemos apenas uma loja cadastrada. Mas você pode cadastrar quantas lojas físicas desejar.

![indeva1](//images.ctfassets.net/alneenqid6w5/3QXzMhoJN1qYZZ6c8mlfcB/4cf28e34420ac49bfcaa6f78a9b2951a/indeva1.png)

<div class="alert alert-info">
É possível também fornecer ao cliente um link que conduz diretamente ao formulário de uma loja física específica. Basta adicionar o ID da loja ao final da URL. Dessa forma, o vendedor pode compartilhar o link de sua loja – por exemplo, por meio de um QR Code ou nas mídias sociais.
</div>

Ao clicar na loja desejada, o cliente é levado ao formulário. Ali, ele encontra informações sobre a loja (que devem ser definidas na etapa de implementação), além dos campos para inserir as informações sobre a visita:

- Data e horário
- Nome do cliente
- Número do Whatsapp do cliente
- E-mail do cliente
- Mensagem sobre o objetivo da visita
- Número de pessoas que farão a visita

Por fim, basta o cliente clicar em Agendar horário. Com isso, essa visita entrará na fila de agendamentos mostrados pelo aplicativo dos vendedores.

![indeva2](//images.ctfassets.net/alneenqid6w5/sD5kRl2jv7QxksElwMibF/5aa5ec8582c10891ee90bfcf556144aa/indeva2.png)

<div class=”alert alert-warning”>
Por enquanto, a confirmação do agendamento deve ser feita manualmente pela loja. O cliente não receberá nenhuma mensagem automática.
</div>

## Aplicativo dos vendedores

A app do Indeva Store organiza a fila de agendamentos realizados para cada loja física. Ele pode ser usado por vendedores ou gerentes para controle tanto dos próximos agendamentos quanto para visualização do histórico de visitas já atendidas.

![indeva3](//images.ctfassets.net/alneenqid6w5/71ZOQFSA8uKJKMdjrfsaX1/ae2b7836ab6e76efe752cfd3cdca0dd4/indeva3.png)

Ao clicar em um agendamento específico, o vendedor tem acesso aos detalhes desse agendamento: data e horário da visita, nome do cliente, mensagem enviada por ele, quantidade de pessoas e o número de telefone do cliente.

Se quiser entrar em contato com o cliente a partir dessa tela, o vendedor pode clicar no botão Abrir Whatsapp. Ele será levado diretamente para uma conversa com aquele cliente específico no aplicativo de mensagens.

![indeva4](//images.ctfassets.net/alneenqid6w5/6xnGRcIBINTYj7n9HDnTJ4/97e54074b046a5295936d66bd17761fe/indeva4.png)

<div class=”alert alert-info”>
O aplicativo pode ser instalado em diversos dispositivos da mesma loja, mas recomendamos que sua equipe use um aplicativo por loja, e não por vendedor.
</div>

## Implementação

### Cadastro das lojas no admin da Indeva

O primeiro passo para implementar a feature de Atendimento Agendado é cadastrar as lojas físicas no painel administrativo da Indeva.

É lá que você deve definir as informações que aparecerão no formulário de agendamento:

- Descrição do evento
- Duração de cada agendamento
- Máximo de reservas no mesmo horário
- Tempo de tolerância (em dias)
- Tempo mínimo de antecedência para cada agendamento
- Horários de abertura da loja

<div class=”alert alert-info”>
Cada loja física deve ser cadastrada e configurada individualmente.
</div>

### Implementação do formulário na loja online

<div class=”alert alert-info”>
Esta orientação é voltada para lojas que usam a plataforma VTEX. Em outras plataformas, o método de implementação do formulário será diferente.
</div>

Para inserir o iFrame com o formulário em sua loja VTEX, você deve criar uma nova página contendo esse iFrame.

Há duas opções de criação dessa página: 
- Por meio do CMS da VTEX.
- Por meio de um componente instalável via VTEX IO (neste caso, sua loja precisa usar a estrutura do VTEX IO).

Para criar a página no CMS, siga os passos abaixo:
No painel administrativo da VTEX, acesse o CMS e [crie um template de página](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/Y6dPEF6GzROQ8PuYKxrKe) contendo o código do iFrame.
[Associe esse template a um layout](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/53N9sPOOOCqBRaoqmqTAOw).

Para lojas que usam o VTEX IO, existe um componente que permite inserir o iFrame em uma página da loja. Entenda como fazer essa implementação na [documentação do componente vtex.iframe](https://vtex.io/docs/components/all/vtex.iframe@0.2.0/).

### Instalação do aplicativo

O app para os vendedores e gerentes da loja está disponível tanto para Android quanto para iOS. Basta fazer o download na app store da Apple ou do Android e instalar o aplicativo.

> Nome do aplicativo: __Indeva Store__

Após instalar e abrir o aplicativo, o vendedor deverá informar o token de 10 dígitos da loja para sincronizar o dispositivo e fazer o login.

![indeva5](//images.ctfassets.net/alneenqid6w5/8K9WlmZVH3omGfWus5jke/ce2eb6f9b3b9ba58ba119d285184aca5/indeva5.png)

Para receber o token, entre em contato com o time da Indeva pelos canais de suporte:
- __Telefone__: (21)3609-2830
- __E-mail__: suporte@indeva.com.br

Se sua loja for cliente Indeva, também é possível entrar em contato com o time por meio do chat no painel administrativo da plataforma Indeva.
