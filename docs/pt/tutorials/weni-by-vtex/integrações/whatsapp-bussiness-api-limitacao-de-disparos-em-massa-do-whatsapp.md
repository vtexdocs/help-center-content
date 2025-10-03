---
title: 'Whatsapp Bussiness API: Limitação de Disparos em Massa do WhatsApp'
id: 1mMpu05SPvb9ZDJTSSkTEp
status: PUBLISHED
createdAt: 2025-09-15T15:32:11.616Z
updatedAt: 2025-10-03T14:20:32.366Z
publishedAt: 2025-10-03T14:20:32.366Z
firstPublishedAt: 2025-10-03T14:20:32.366Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-bussiness-api-whatsapp-message-triggering-limitation
legacySlug: whatsapp-bussiness-api-limitacao-de-disparos-em-massa-do-whatsapp
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

### Limitação de Disparos em Massa do WhatsApp (WhatsApp Rate Limiting)

Após concluir o processo de aprovação e integração do WhatsApp, seu número de telefone com a Weni será ativado para o WhatsApp. Mesmo após a aprovação e habilitação do seu número, o WhatsApp possui uma política de progressão de envio de mensagens, impondo uma limitação.

Os limites de mensagens são o máximo de conversas iniciadas pela empresa (abertas devido ao envio de um modelo de marketing, utilidade ou autenticação a um usuário do WhatsApp) que um número de telefone comercial pode abrir em um período de 24 horas.

Inicialmente, os números de telefone comercial têm o limite de 250 conversas iniciadas pela empresa em um período de 24 horas, mas esse limite pode ser aumentado.

Devido a essa limitação, recomenda-se à empresa que deseja enviar mensagens para mais de 1\.000 usuários únicos (o que na Weni chamamos de contatos ativos) que as envie gradualmente ao longo do período de uma semana.

#### Limitações do WhatsApp

Existem diferentes níveis de limitação de disparos de mensagens no WhatsApp:

| Nível 1 | Limitado a 1\.000 destinatários únicos (contatos ativos) por dia. |
| --- | --- |
| Nível 2 | Limitado a 10\.000 destinatários únicos (contatos ativos) por dia. |
| Nível 3 | Limitado a 100\.000 destinatários únicos (contatos ativos) por dia. |
| Nível 4 | Sem limitações. |

Números recém-habilitados no WhatsApp iniciam no Nível 1\. O WhatsApp monitora o volume e a qualidade das mensagens e atualiza automaticamente o cliente dentre os níveis com base no número total de contatos ativos nos últimos 7 dias.

Se, dentro deste período de 7 dias, um número de telefone habilitado para o WhatsApp se comunicou com 2x a quantidade de contatos ativos do limite do seu nível por dia e tiver uma boa “classificação de qualidade” com o WhatsApp, esse número automaticamente se enquadrará no próximo nível no dia seguinte.

Observe que um número pode ser impedido de passar para o próximo nível, ou até mesmo descer um nível, se a ""classificação de qualidade"" interna do WhatsApp para o número for baixa. A Weni não pode influenciar nessa classificação e nem apresentá-la aos clientes na Plataforma. Mais a frente, falamos mais detalhes sobre a classificação de qualidade.Se você exceder o limite diário do seu nível, suas mensagens não serão entregues.Aviso Importante: A Weni não pode mover manualmente ou solicitar que os clientes sejam movidos entre os níveis de limite de mensagens. Além disso, o WhatsApp não iniciará um número em um nível superior ou aumentará manualmente o limite.

**Exemplo 1:** Um número de telefone aprovado pelo WhatsApp começa no nível 1\. No dia 1, o número dispara mensagens para 1\.000 contatos ativos. No dia 2, mais 1\.000 disparos são realizados para novos contatos ativos. No final do dia 2, esse número seria atualizado para o Nível 2 com base no envio de 2\.000 mensagens para contatos ativos distintos nos últimos 2 dias.

**Exemplo 2:** Um número de telefone aprovado pelo WhatsApp começa no nível 1\. No dia 1, o número dispara mensagens para 50 contatos ativos. No dia 2, o número dispara mensagens para 150 contatos ativos. No dia 3, o número dispara mensagens para 200 contatos ativos. Durante os dias 4 a 7, o número dispara mensagens para 400 contatos ativos todos os dias. No final do dia 7, o número seria atualizado para o nível 2 com base no envio de mensagens para 2\.000 contatos ativos nos últimos 7 dias.

Essa limitação **NÃO** se aplica a mensagens enviadas em resposta a uma mensagem iniciada pelo usuário em um período de 24 horas.

É possível aumentar o limite de mensagens para 1\.000 por conta própria pelos métodos a seguir. No entanto, limites mais altos só serão alcançados por meio do [ajuste automático](https://developers.facebook.com/docs/whatsapp/messaging-limits/#automatic-scaling), que acontece após o limite aumentar para 1\.000\.#### Classificação de Qualidade do WhatsApp

Como o WhatsApp criptografa as mensagens, ele depende do feedback do usuário para medir a qualidade das mensagens. O WhatsApp usa esse feedback para definir uma ""classificação de qualidade"" interna que pode afetar como os usuários se movem entre os níveis de limitação. Fatores como a frequência que o seu número é marcado em ""denunciar spam"" e ""bloquear"" podem influenciar a classificação de qualidade. Remetentes com uma baixa classificação de qualidade podem não estar qualificados para subir nos níveis apresentados anteriormente.

#### Para manter uma qualidade alta, o WhatsApp recomenda o seguinte:

Caso a verificação da empresa ou de identidade seja rejeitada, verifique se você está enviando mensagens de alta qualidade. Periodicamente, reavaliaremos sua atividade e a qualidade das mensagens. Com base nisso, poderemos [aprovar](https://developers.facebook.com/docs/whatsapp/messaging-limits/#increase-approvals) o aumento.

Veja a seguir algumas diretrizes para enviar mensagens de alta qualidade:

- Verifique se as mensagens seguem a [Política de Mensagens do WhatsApp Business](https://business.whatsapp.com/policy).
- Envie mensagens apenas a usuários que aceitaram receber contato da sua empresa.
- Crie mensagens altamente personalizadas e úteis para os usuários. Evite enviar mensagens introdutórias ou de boas-vindas que sejam vagas demais.
- Leve em conta a frequência: evite enviar muitas mensagens por dia aos clientes. Ao elaborar mensagens informativas, mantenha o foco no conteúdo e na concisão.
