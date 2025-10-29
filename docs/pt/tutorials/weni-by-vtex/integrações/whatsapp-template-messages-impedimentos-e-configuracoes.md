---
title: 'Whatsapp Template Messages: impedimentos e configurações'
id: 4bc7imLyUicKHtCIJVGNSE
status: PUBLISHED
createdAt: 2025-09-15T15:07:41.131Z
updatedAt: 2025-10-03T14:20:32.609Z
publishedAt: 2025-10-03T14:20:32.609Z
firstPublishedAt: 2025-10-03T14:20:32.609Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-template-messages-impediments-and-configurations
legacySlug: whatsapp-template-messages-impedimentos-e-configuracoes
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Aqui você encontrará soluções para possíveis impedimentos, reprovações e erros no processo de criação, envio e alterações nas Template Messages do WhatsApp. Siga os tópicos abaixo para mais informações.

#### **Processo de aprovação (Responsabilidade da Meta)**

Depois de criar o modelo, você poderá enviá-lo para aprovação. Pode levar até 24 horas para que uma decisão seja tomada. Assim que a decisão for tomada, uma notificação aparecerá no Gerenciador do WhatsApp. Além disso, a Meta enviará um e-mail para os administradores do Gerenciador de Negócios. Caso você tenha assinado as atualizações sobre alterações de status do modelo de mensagem, a Meta também enviará uma notificação via webhook. Consulte [Como monitorar alterações de status](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#monitoring-status-changes) para mais detalhes.

Se for aprovado, o modelo de mensagem ficará com o status ""Ativo – Qualidade Pendente"", permitindo que você comece a enviá-lo aos clientes. Se rejeitado, o modelo poderá ser [editado](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#editing) e reenviado para aprovação. Outra possibilidade é [fazer uma apelação](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#appeals) da decisão.

#### **Motivos comuns para rejeição**

Estes são os erros mais comuns que levam à rejeição do envio e devem ser evitados:

- Os parâmetros de variáveis estão ausentes ou apresentam chaves incompatíveis. O formato correto da variável é `{{1}}`.
- Os parâmetros de variáveis têm caracteres especiais, como `#`, `$` ou `%`.
- Os parâmetros de variáveis não são sequenciais. Por exemplo, `{{1}}`, `{{2}}`, `{{4}}` e `{{5}}` são definidos. No entanto, o parâmetro `{{3}}` não existe.
- O modelo de mensagem apresenta conteúdo que viola a Política Comercial do WhatsApp: quando você promove a venda de bens e serviços, todas as mídias e mensagens relacionadas aos seus produtos são consideradas transações. Isso inclui descrições, preços, tarifas, impostos e/ou divulgações legais obrigatórias. As transações precisam estar em conformidade com a [Política Comercial do WhatsApp](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fcommerce-policy%2F&h=AT0qf7_b-yrgVDelnD3fuDfz_vGZiDui4Pi-AkDznxAd0JjhWKsxWA0NAoB3XeggYwHlNXYGszef2BexuCsPAZfQL-dsJtP1X2BRWQ1P-922hXRAPQt4uZYj7lQXevly_FOwCz3t7gurucAl-Yt6Nw) .
- O modelo de mensagem tem conteúdo que viola a [Política de WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-policy%2F&h=AT1J8kpVBJiMDl8B06FLsqpEAowC8KSJVgyaqFYeY77EBBkHHmdjVbx0IutgNC0NqoTpviU80xX2n4WyFeixWSGu8S3qBh3oLfpF22tNrW6E27x97peET9KaR7zioFzhSSmqoTm_xLgNuyq04LKGrA) : não solicite identificadores sensíveis dos usuários. Por exemplo, não peça aos clientes que compartilhem números completos de cartões de crédito e débito individuais, números de conta financeira, número de identificação nacional nem outras informações confidenciais. Isso inclui não solicitar aos usuários documentos que possam conter identificadores sensíveis. Solicitar identificadores parciais (por exemplo, os últimos 4 dígitos do CPF) é aceitável.
- O conteúdo é potencialmente abusivo ou ameaçador. Por exemplo, ameaça o cliente com ações legais ou constrangimento público.
- O modelo de mensagem é uma duplicata de um existente. Se um modelo for enviado com o mesmo texto de um existente no corpo e no rodapé, a duplicata será rejeitada. Uma notificação de rejeição incluindo o motivo aparecerá na Qualidade da Conta no Gerenciador do WhatsApp e será enviada por email. Na notificação de Qualidade da Conta, é possível consultar o nome e o idioma do modelo existente que tem o mesmo conteúdo do duplicado rejeitado. Você também pode editar e reenviar o modelo. Vale lembrar que esta verificação não se aplica aos modelos de OTP.

#### **Edição**

É possível editar o modelo por meio do Gerenciador do WhatsApp ou do ponto de extremidade [Modelo de mensagem](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates#edit-a-message-template) . Caso seja editado e reenviado para aprovação, o modelo de mensagem ficará com o status **Em análise** e não poderá ser enviado a clientes até que esteja **Ativo**.

#### **Como enviar modelos de mensagem**

Quando o modelo for aprovado, você poderá enviá-lo aos clientes. Para enviar um modelo de mensagem, consulte [Enviar modelos de mensagem](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates) para usuários da API de Nuvem ou [Como enviar modelos de mensagem](https://developers.facebook.com/docs/whatsapp/message-templates/creation) para usuários da API Local.

Somente modelos com status **Ativo** (por exemplo, **Ativo – Qualidade pendente**, **Ativo – Alta qualidade**) podem ser enviados para os clientes.

O status pode ser alterado automaticamente de **Ativo** para **Pausado** ou **Desativado** com base no feedback dos clientes. Por isso, recomendamos que você [monitore as alterações de status](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#monitoring-status-changes) e tome as medidas apropriadas quando um modelo de mensagem do qual você depende seja pausado ou desativado ou corra esse risco.

#### **Status**

Os modelos podem ter os status a seguir.

- **Em análise**: indica que o modelo ainda está em análise. A análise pode levar até 24 horas.
- **Rejeitado**: o modelo foi rejeitado durante o processo de análise. Consulte [Apelações](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#appeals) .
- **Ativo – Qualidade pendente**: o modelo de mensagem ainda precisa receber feedback dos clientes em relação à qualidade. Os modelos de mensagem com esse status podem ser enviados aos clientes. Consulte [Classificação de qualidade](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#quality-rating) .
- **Ativo – Alta qualidade**: o modelo recebeu pouco ou nenhum feedback negativo dos clientes. Os modelos de mensagem com esse status podem ser enviados aos clientes. Consulte [Classificação de qualidade](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#quality-rating) .
- **Ativo – Qualidade média**: o modelo recebeu feedback negativo de diversos clientes e pode ser pausado ou desativado em breve. Os modelos de mensagem com esse status podem ser enviados aos clientes. Consulte [Classificação de qualidade](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#quality-rating) .
- **Ativo – Qualidade baixa**: o modelo recebeu feedback negativo de diversos clientes. Os modelos com esse status podem ser enviados aos clientes, mas talvez sejam suspensos ou desativados em breve. Por isso, recomendamos que você resolva os problemas relatados pelos clientes. Consulte [Classificação de qualidade](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#quality-rating) .
- **Pausado**: o modelo foi pausado devido a feedback negativo recorrente dos clientes. Os modelos de mensagem com esse status não podem ser enviados aos clientes. Consulte [Pausa no modelo](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#template-pausing) .
- **Desativado**: o modelo foi desativado devido a feedback negativo recorrente dos clientes ou à violação de uma ou mais das nossas políticas. Os modelos de mensagem com esse status não podem ser enviados aos clientes. Talvez seja possível editar um modelo de mensagem desativado e fazer uma apelação. Consulte [Apelações](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#appeals) .
- **Apelação solicitada**: indica que foi feita uma apelação. Consulte [Apelações](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#appeals) .

Você pode consultar o status de um modelo em **Gerenciador do WhatsApp** > **Visão geral**. Depois, passe o mouse sobre o ícone da mala (**Ferramentas de conta**) e clique em **Modelos de mensagem**. Caso você tenha mais de uma conta do WhatsApp Business, selecione a conta cujo status do modelo você quer consultar na lista de contas no menu suspenso do canto superior direito.

![](https://scontent.fmcz13-1.fna.fbcdn.net/v/t39.8562-6/309269237_1081395155854929_4735374635237418650_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6825c5&_nc_eui2=AeE-PRagTPBgJGJdy9t06oIIkMP5l5fD85mQw_mXl8Pzmb3kowujDptCNFBl-2_xKAtgHJWlbC-b1vr_SW8lk9Ia&_nc_ohc=V2_plnYxSOEAX_I4Pu4&_nc_ht=scontent.fmcz13-1.fna&oh=00_AT9NEuGxAp-3xyvBoVlEfy1pzN1ZxEcmdxm5lAO_4OInWg&oe=63545B09)

#### **Como monitorar alterações de status**

O status de um modelo pode mudar automaticamente com base em decisões da análise, resultados de apelações ou mudanças na [classificação de qualidade](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#quality-rating) . Se o status de um modelo for alterado, você receberá uma notificação por email, no Gerenciador de Negócios e no webhook.

Como você pode enviar somente modelos de mensagem com status **Ativo**, recomendamos que você assine o campo `message_template_status_update webhook` para receber notificações sobre as alterações de status nos modelos. Consulte [Configuração de Webhooks](https://developers.facebook.com/docs/whatsapp/business-management-api/guides/set-up-webhooks) para saber como assinar esse campo e [Atualizações no modelo de mensagem](https://developers.facebook.com/docs/whatsapp/business-management-api/webhooks/components#message-template-updates) para exemplos de cargas de webhook.

Se você configurou os webhooks e viu que a qualidade de um modelo está caindo, acesse **Gerenciador do WhatsApp** > **Modelos de mensagem** e passe o mouse sobre o modelo de mensagem em questão. Uma dica será exibida e mostrará informações sobre o problema. Com base nessas informações, é possível optar por [editar o modelo](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#editing) e enviá-lo para reaprovação, utilizar um modelo diferente ou alterar a lógica de negócios do seu app. Caso você edite o modelo de mensagem e ele seja aprovado, a classificação de qualidade melhorará gradualmente se ele não receber feedback negativo com frequência.

#### **Classificação de qualidade**

Os modelos de mensagem têm uma classificação de qualidade baseada no uso e no feedback dos clientes. Quando o status for **Ativo**, classificação do modelo de mensagem aparecerá no Gerenciador do WhatsApp ao lado do status:

- Ativo – **Qualidade pendente** (realce em verde)
- Ativo – **Alta qualidade** (realce em verde)
- Ativo – **Qualidade média** (realce em amarelo)
- Ativo – **Qualidade baixa** (realce em vermelho)

Inicialmente, os modelos de mensagem aprovados têm a classificação **Qualidade pendente**. Se um modelo de mensagem receber feedback negativo continuamente, isso causará mudança no status do modelo. Enquanto o modelo de mensagem tiver o status **Ativo**, independentemente da classificação de qualidade, ele poderá ser enviado aos clientes. Quando o status for alterado, ele não pode ser enviado aos clientes até que fique ativo novamente.

Não oferecemos webhooks para feedback de modelo de mensagem ou alterações na classificação de qualidade. Entretanto, podemos enviar uma notificação de webhook quando houver alterações no status dos modelos. Por isso, recomendamos que você configure os webhooks, fique atento às alterações no status do modelo e tome as medidas apropriadas antes que o modelo seja pausado ou desativado. Consulte [Como monitorar alterações de status](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#monitoring-status-changes) .

#### **Pausa no modelo**

Disponibilizada para empresas configuradas no Brasil, no México e na Colômbia em 7 de setembro de 2022 e em todos os outros países em 6 de outubro de 2022\.

Se um modelo de mensagem atingir a classificação de qualidade mais baixa (status **Ativo – Qualidade baixa**), ele será automaticamente pausado por um período para proteger a classificação de qualidade dos números de telefone que o usaram. As durações das pausas são as seguintes:

- Primeira instância: **Pausado** por 3 horas.
- Segunda instância: **Pausado** por 6 horas.
- Terceira instância: **Desativado**.

Quando um modelo de mensagem é pausado (status **Pausado**), ele não pode ser enviado aos clientes. Por isso, você precisa interromper as campanhas de mensagens automáticas que dependam desse modelo. Apesar de a tentativa de envio de um modelo pausado não ser cobrada e não contar contra o [limite de mensagens](https://developers.facebook.com/docs/whatsapp/messaging-limits) , a API as rejeitará. Retome essas campanhas somente quando o status do modelo voltar a ser **Ativo**.

Você pode editar um modelo pausado caso acredite que isso fará com que ele receba menos feedback negativo. Porém, se você fazer isso, o modelo ficará com o status **Em análise** e não poderá ser enviado aos clientes até que seja aprovado novamente e tenha o status **Ativo**.

Também é possível alterar a lógica dos negócios (definição do público-alvo, parâmetros de entrega, entre outros) caso você acredite que isso está influenciando o feedback negativo.

Inicialmente, a pausa não afetará o número de telefone comercial nem reduzirá o limite de mensagens. Outros modelos de mensagem com alta qualidade podem continuar sendo enviados do número de telefone. Entretanto, se a empresa continuar usando modelos com **Qualidade baixa** depois de eles serem pausados, o número de telefone poderá ser afetado em algum momento.

#### **Notificações de pausa**

Quando um modelo de mensagem for pausado, enviaremos uma notificação no Gerenciador do WhatsApp, por email e webhook (caso você tenha assinado webhooks de alterações nos modelos de mensagem). Consulte [Como monitorar alterações de status](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#monitoring-status-changes) para ver informações sobre a configuração do webhook e [Exemplos – Modelo pausado](https://developers.facebook.com/docs/whatsapp/business-management-api/webhooks/components#template-paused) para ver um exemplo de carga de webhook.

#### **Retomar**

O modelo será retomado automaticamente depois da conclusão da pausa descrita acima. Depois de retomado, o modelo terá status **Ativo** e poderá ser enviado aos clientes novamente. Caso você não tenha interrompido as campanhas de mensagens automáticas que dependiam do modelo, elas voltarão a funcionar. No entanto, recomendamos que você interrompa as campanhas que dependam de modelos suspensos até que eles sejam retirados da pausa, porque as nossas APIs rejeitarão as solicitações.

A classificação de qualidade do modelo também será definida para um valor baseado no feedback mais recente.

Assim como as notificações de pausa, enviaremos notificações pelo Gerenciador do WhatsApp, por email e webhook quando o status do modelo for definido como **Ativo**.

#### **Apelações**

Caso o envio seja rejeitado, você poderá fazer uma apelação. Vale lembrar que as apelações devem [incluir um exemplo](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#samples) . Se um modelo aprovado for desativado, você também poderá [editá-lo](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#editing)  e reenviá-lo para aprovação.

No **Gerenciador do WhatsApp**:

1. Passe o mouse sobre o ícone de mala (**Ferramentas da conta**) e clique em **Modelos de mensagem**.
2. Se você tiver várias contas do WhatsApp Business, use o menu suspenso no canto superior direito para selecionar a conta cujos modelos você quer gerenciar.
3. Encontre o modelo de mensagem que você quer de editar e clique nele.
4. Edite o conteúdo do modelo.
5. Clique no botão **Adicionar exemplo**. Adicione as variáveis de valores e imagens.
6. Clique em **Enviar**.

A META analisa e toma uma decisão dentro de 24 horas.

#### **Saiba mais**

- [Política do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-policy%2F%3Ffbclid%3DIwAR1jLRqG2MmfXVpoC8OxG2zTl5Ub96hEm-Kq7ucQ9K5dNB8GDFaAupD530Q&h=AT36YeReOstrqxnKTzgq1y-r_1Ob87yrZtjfdejYpzyb5x_-O76Lptsh-I9eddFQhs7ijenYsMuyS_j5f0REQZ8IdJoL5vKaphzynwgfAav-DtNlcnC-iWBZN3KyVY4gdLKezYRLheBfFcg_nzrPaA) : saiba mais sobre as políticas para empresas.
- [Política Comercial do WhatsApp](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fcommerce-policy%2F%3Ffbclid%3DIwAR3hJYolZAcjC0qlRoD3yAnxxDqcFfZWC9ckfMsownlLmmTNMmCWUBRBEwQ&h=AT3ol3uyDf5Ojn8nJYc5KRBV8cDeo5UiTAfDQM1B_ZIamZ39CjEoG9RO6inUQKNKrCX7wbtZUJ7bJjmDA4KIBzJ6ZJ1E841-mDihwVik4agXMDieprqwFgWo8ebGSwPgj-g3htULojJjNADBqzQMlw) : saiba mais sobre as políticas comerciais.
- [Aplicação das Políticas](https://developers.facebook.com/docs/whatsapp/overview/policy-enforcement/) : saiba mais sobre como aplicamos as políticas
