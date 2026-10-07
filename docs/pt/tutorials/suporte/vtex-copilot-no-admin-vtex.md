---
title: 'VTEX Copilot no Admin VTEX'
createdAt: 2026-10-07T00:00:00.000Z
updatedAt: 2026-10-07T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: vtex-copilot-in-the-vtex-admin
locale: pt
---

O VTEX Copilot é o assistente de IA da VTEX disponível no Admin VTEX. Você faz perguntas em linguagem natural sobre pedidos, pagamentos, catálogo, promoções ou qualquer outro tema da sua loja, e o Copilot responde com base na documentação oficial da VTEX, consulta dados reais da sua loja, executa diagnósticos automáticos e ajuda você a resolver problemas.

Neste artigo, você vai encontrar:

- [O que o VTEX Copilot faz](#o-que-o-vtex-copilot-faz)
- [Como acessar](#como-acessar)
- [O que você pode pedir](#o-que-você-pode-pedir)
- [Diagnósticos automáticos](#diagnósticos-automáticos)
- [Anexar arquivos](#anexar-arquivos)
- [Alterações na loja com segurança](#alterações-na-loja-com-segurança)
- [Histórico de conversas](#histórico-de-conversas)
- [Boas práticas](#boas-práticas)
- [Privacidade e segurança](#privacidade-e-segurança)
- [Perguntas frequentes](#perguntas-frequentes)

## O que o VTEX Copilot faz

Na prática, o VTEX Copilot pode:

- **Responder dúvidas** sobre como a VTEX funciona, com base na documentação oficial e com o link da fonte.
- **Consultar dados da sua loja**, como o status de um pedido, a configuração de um produto ou as regras de uma promoção, usando as suas próprias permissões de acesso.
- **Executar diagnósticos automáticos** que verificam várias partes da loja de uma vez para encontrar a causa de problemas comuns. Por exemplo, "por que este produto não aparece na loja?".
- **Fazer alterações na loja**, como atualizar estoque, editar um cupom ou ativar um SKU, sempre explicando o impacto e pedindo a sua confirmação antes.
- **Abrir chamados para o Suporte VTEX** já preenchidos com o que foi conversado e com os arquivos anexados.
- **Informar sobre a VTEX**: status da plataforma, incidentes recentes e o que um anúncio ou uma nota de lançamento significa para a sua loja.

O Copilot entende e responde no seu idioma: você pode escrever em português, espanhol ou inglês.

## Como acessar

1. Em qualquer página do Admin VTEX, clique em **Copilot**, no canto superior direito. O Copilot abre em um painel lateral, ao lado da página em que você está.
2. Escreva sua pergunta no campo **Pergunte ao VTEX Copilot...** e clique em **Enviar**.

![Tela inicial do VTEX Copilot no Admin VTEX](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/suporte/vtex-copilot-no-admin-vtex_1.png)

Como você já está conectado ao Admin VTEX, não é necessário fazer login novamente: o Copilot usa o seu usuário e as suas permissões. E, como o painel fica aberto enquanto você navega, é possível conferir no Admin VTEX o que o Copilot respondeu sem fechar a conversa.

Na tela inicial, a seção **Experimente uma destas** traz sugestões prontas para começar:

| Sugestão | O que o Copilot faz |
| --- | --- |
| **Por que meu pedido está parado?** | Investiga um pedido que não avança e indica o que está bloqueando: status, pagamento, faturamento e manuseio. |
| **Por que meu SKU não aparece na loja?** | Verifica tudo que controla a visibilidade de um produto (status do produto e do SKU, preço, estoque e política comercial) e indica o que está faltando. |
| **Criar uma promoção ou um cupom** | Pergunta o que você precisa decidir (tipo, desconto, itens afetados e validade) e mostra exatamente o que será criado antes de aplicar. |
| **Excluir dados de um cliente (GDPR)** | Conduz a exclusão dos dados pessoais de um cliente, com uma prévia para você revisar antes de confirmar. |

## O que você pode pedir

O Copilot reúne especialistas em cada área da VTEX. Você não precisa escolher o especialista: basta fazer a pergunta, e o Copilot encaminha para a área certa.

| Tema | O que o Copilot cobre | Exemplo de pergunta |
| --- | --- | --- |
| **Pedidos e checkout** | Consulta, faturamento, cancelamento e rastreamento de pedidos, além do motivo de um pedido ter mudado ou parado. | "Qual é o status do pedido 1234567890-01?" |
| **Pagamentos** | Transações, meios de pagamento, condições de pagamento, gateways e antifraude. | "Por que o pagamento do pedido 1234567890-01 foi negado?" |
| **Catálogo** | Produtos, SKUs, categorias, marcas, imagens, especificações e canais de venda. | "Por que o SKU 4521 não aparece no site?" |
| **Preços e promoções** | Preços por canal e tabela de preços, promoções e cupons. | "Quais promoções se aplicam ao produto 123?" |
| **Estoque e entrega** | Estoque por armazém, reservas, políticas de envio, docas e pontos de retirada. | "Por que não há opção de entrega para o CEP 01310-100?" |
| **Marketplace** | Sellers, ofertas ativas, vínculos de SKU e afiliados. | "Quais sellers oferecem o SKU 4521?" |
| **Busca** | Resultados de busca, filtros, termos mais buscados e correção ortográfica. | "Por que meu produto não aparece quando busco 'tênis'?" |
| **Master Data** | Busca, edição, histórico e estrutura de registros de clientes e outras entidades. | "Quem alterou o cadastro do cliente x@y.com?" |
| **Usuários e permissões** | Usuários do Admin, perfis de acesso e permissões. | "Quais permissões o usuário x@y.com tem?" |
| **Segurança e privacidade** | Auditoria de segurança, políticas de acesso e solicitações de exclusão de dados (LGPD/GDPR). | "Faça uma auditoria de segurança na minha conta." |
| **Vale-presentes** | Saldo, histórico de uso e provedores de vale-presente. | "Qual é o saldo do vale-presente X?" |
| **Assinaturas** | Pedidos recorrentes, ciclos e renovações que falharam. | "Por que a assinatura do cliente x@y.com não renovou?" |
| **B2B** | Organizações, centros de custo, papéis de compradores e cotações. | "Quais centros de custo a organização X tem?" |
| **Message Center** | Templates, gatilhos e variáveis de e-mails transacionais. | "Quais variáveis posso usar no template de confirmação de pedido?" |
| **Desenvolvimento de loja** | VTEX IO, Store Framework, FastStore, Headless CMS e APIs da VTEX. | "Qual endpoint uso para atualizar o estoque de um SKU?" |
| **Dashboards** | Explicação dos dashboards do Admin VTEX, como Sales Performance e Store Overview. | "Como comparo uma campanha passada com hoje no dashboard?" |
| **Novidades da VTEX** | Status da plataforma, incidentes e notas de lançamento. | "A VTEX está com algum incidente agora?" |
| **Documentação** | Perguntas do tipo "como faço…" sobre qualquer funcionalidade da VTEX. | "Como crio uma promoção Leve 3 Pague 2?" |
| **Chamados** | Abertura de chamados técnicos para o Suporte VTEX. | "Abra um chamado sobre este problema." |

![VTEX Copilot respondendo sobre o status de um pedido](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/suporte/vtex-copilot-no-admin-vtex_2.png)

Enquanto trabalha, o Copilot mostra cada consulta que está fazendo na sua loja e, ao final da resposta, informa a conta em que trabalhou.

## Diagnósticos automáticos

Além de responder perguntas, o Copilot executa diagnósticos que verificam várias partes da loja de uma vez e entregam um relatório com a causa provável e o próximo passo. Peça um diagnóstico quando algo não funciona e você não sabe por onde começar:

| Peça assim | O que é verificado |
| --- | --- |
| "Analise o pedido 1234567890-01" ou "Por que este pedido está parado?" | O fluxo do pedido e onde ele travou: pagamento, nota fiscal, manuseio ou integração com o ERP. |
| "Por que o produto 123 não aparece na loja?" | Toda a cadeia de ativação no catálogo: produto, SKU, preço, estoque e indexação. |
| "Por que o SKU 4521 está indisponível no checkout para o CEP 01310-100?" | Preço, estoque e entrega para aquele SKU e CEP. |
| "Verifique o go-live do domínio www.minhaloja.com.br" | DNS, CDN e certificado SSL do domínio. |
| "Os problemas da loja vêm das minhas customizações?" | Cria um workspace de teste apenas com apps nativos da VTEX para você comparar. |
| "Meus clientes são deslogados o tempo todo" (lojas FastStore) | O domínio do cookie de login da loja. |
| "Qual é a arquitetura da minha loja?" | A tecnologia da loja (Store Framework, FastStore, Legacy ou headless) e a edição da conta. |
| "Faça uma auditoria de segurança" | As configurações de segurança da loja, como o reCAPTCHA contra bots e ataques de teste de cartão, com os valores recomendados. |

Em diagnósticos e perguntas mais complexas, a resposta pode levar alguns instantes, porque o Copilot verifica várias informações antes de responder.

## Anexar arquivos

Você pode enviar imagens e documentos para o Copilot analisar junto com a sua pergunta, como um print de erro, uma planilha exportada em PDF ou o comprovante de uma transação.

1. Clique em **Anexar arquivos**, ao lado do campo de mensagem.
2. Selecione os arquivos. São aceitos arquivos **JPG, PNG, WEBP, GIF e PDF** de até **4,3 MB** cada.
3. Escreva sua pergunta e envie.

O Copilot lê os arquivos durante a investigação e pode anexá-los a um chamado para o Suporte VTEX, se for necessário.

![Anexando um arquivo no VTEX Copilot](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/suporte/vtex-copilot-no-admin-vtex_3.png)

## Alterações na loja com segurança

Às vezes, a solução exige alterar algo na loja, como atualizar um preço, ativar um SKU ou mudar uma configuração. Para qualquer ação que modifique a loja, o Copilot segue estas regras:

1. **Explica o impacto antes:** o que vai mudar e o que isso significa para a loja em produção.
2. **Oferece o caminho manual:** se preferir, peça um passo a passo para fazer a alteração você mesmo no Admin VTEX ou pela API.
3. **Pede a sua confirmação** antes de alterar qualquer valor, a menos que você já tenha autorizado a correção na sua mensagem. Por exemplo: "Corrija o estoque do SKU 4521 no armazém principal para 10 unidades".
4. **Age com o seu usuário:** a alteração fica registrada em seu nome, da mesma forma que se você a fizesse no Admin VTEX.

![VTEX Copilot pedindo confirmação antes de alterar a loja](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/suporte/vtex-copilot-no-admin-vtex_4.png)

> ⚠️ Revise sempre a conta, os itens afetados e os valores antes de confirmar uma alteração. Se tiver dúvida, peça ao Copilot o passo a passo em vez de aplicar a alteração.

## Histórico de conversas

O Copilot guarda as suas conversas para você retomar de onde parou.

- Para ver conversas anteriores, clique no ícone de relógio no topo do painel para abrir o **Histórico de chat**. As conversas são agrupadas por data e você pode procurar uma conversa específica em **Buscar conversas…**.
- Para começar um assunto novo, clique no ícone **+** (**Novo chat**) no topo do painel.

![Histórico de conversas do VTEX Copilot](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/suporte/vtex-copilot-no-admin-vtex_5.png)

Dentro de uma conversa, o Copilot lembra o contexto recente. Perguntas como "e o segundo SKU?" funcionam logo depois de uma resposta relacionada.

## Boas práticas

Perguntas específicas recebem respostas melhores e mais rápidas.

**Envie todo o contexto em uma única mensagem.** Em vez de dividir o problema em várias mensagens curtas, descreva tudo de uma vez: o que aconteceu, desde quando, o que você já tentou e os IDs relevantes.

- ❌ "O pedido está com problema" → "é o pedido 1234" → "desde ontem"
- ✅ "O pedido 1234567890-01 está em 'Pronto para manuseio' desde ontem. O pagamento foi aprovado e há estoque. O que está bloqueando?"

**Um assunto por conversa.** Uma mensagem longa sobre um problema é ótima, mas uma mensagem com vários problemas diferentes não é. Um pedido parado e um produto que não aparece são assuntos diferentes: use um **Novo chat** para cada um.

**Informe IDs sempre que puder.** Número do pedido, ID do produto ou do SKU, nome da promoção, CEP ou e-mail do cliente ajudam o Copilot a ir direto ao ponto.

**Diga o que você esperava e o que aconteceu.**

- ❌ "A promoção não funciona"
- ✅ "A promoção 'BLACKFRIDAY10' deveria dar 10% de desconto no total do carrinho, mas no checkout o desconto aparece zerado"

**Use o vocabulário da área.** Termos específicos ajudam o Copilot a encaminhar a pergunta para o especialista certo. Por exemplo, para falar de checkout, diga "erro no checkout" em vez de "erro ao finalizar o pedido".

**Pergunte "como faço…" à vontade.** O Copilot responde com base na documentação oficial da VTEX e envia o link da fonte.

**Confie, mas verifique.** Como toda IA, o Copilot pode errar. Antes de agir com base em uma resposta, confira em qual conta ele trabalhou, o que exatamente ele está propondo e se a funcionalidade mencionada realmente existe. Se tiver dúvida, peça para ele mostrar o raciocínio ou a fonte.

## Privacidade e segurança

- **Seu login, suas permissões.** O Copilot usa a sua sessão do Admin VTEX e nunca uma credencial compartilhada. Ele só vê e altera o que o seu usuário pode ver e alterar. Se você não tem acesso ao módulo de Pagamentos, o Copilot também não tem.
- **Confirmação antes de alterações.** Nada é alterado na loja sem o seu pedido ou a sua confirmação.
- **Rastreabilidade.** Cada alteração fica registrada em nome do usuário que fez o pedido, da mesma forma que no Admin VTEX.

## Perguntas frequentes

**O Copilot disse que não tenho permissão. O que faço?**
O Copilot herda as permissões do seu usuário. Peça ao administrador da conta para revisar o seu [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) no Admin VTEX.

**O Copilot altera a loja sem me perguntar?**
Não. Perguntas de consulta são apenas respondidas. Qualquer alteração passa pela sua confirmação, a menos que você já tenha pedido explicitamente a correção na mensagem.

**Em que idioma o Copilot responde?**
No idioma em que você escreve: português, espanhol ou inglês. Para mudar o idioma, peça explicitamente, por exemplo: "responda em espanhol a partir de agora".

**A resposta parou no meio. O que faço?**
Envie uma nova mensagem pedindo para continuar, por exemplo: "continue a análise anterior". O histórico da conversa é mantido.

**Posso usar o Copilot em mais de uma conta?**
Sim. O Copilot trabalha na conta do Admin VTEX em que você está conectado. Para consultar outra conta, acesse o Admin VTEX dessa conta.
