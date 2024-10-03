---
title: 'Configurar split de pagamento'
id: 4EOhp8cdVXaHl68KykPG6
status: ARCHIVED
createdAt: 2020-11-05T20:01:18.593Z
updatedAt: 2021-06-28T19:50:56.234Z
publishedAt: 
firstPublishedAt: 2020-11-06T19:14:51.014Z
contentType: trackArticle
productTeam: Financial
slugEN: configure-payment-split
locale: pt
trackId: 1ouDg8q56Kuz1AgtJUY9nv
trackSlugPT: split-de-pagamento
---

Atualmente, o split de pagamentos só é suportado por duas adquirentes:

- [VTEX Payment](https://help.vtex.com/pt/tracks/vtex-payment--7iCCIoIZFmd9OabU6QlmXu/1lZWKCGdy7xpYjukTLfFJL "VTEX Payment")
- [PagarMeV2](https://help.vtex.com/pt/tutorial/configurar-gateway-pagarmev2--5TugxXNMOs0Ocyg4uqussM?&utm_source=autocomplete "PagarMeV2")

Confira como configurar o split de pagamento em cada uma das adquirentes a seguir.

## Configuração do split para PagarMe
 Confira o passo a passo:

1. Acesse o __Admin__.
2. Clique no módulo __Pagamentos__.
3. Em seguida, clique em __Configurações__.
4. No topo da página, vá para a aba __Afiliações de Gateway__.
5. Clique no __botão verde “+”__.
6. Na seção Outros, selecione a opção __PagarMeV2__. 
7. Do lado esquerdo, preencha o campo __Nome da Afiliação__.
8. Preencha os campos __AppKey__ e __AppToken__ com os dados fornecidos pela PagarMe
9. Em **Captura automática de pagamento** selecione uma das opções:
  - __Use O Comportamento Recomendado Pelo Processador de Pagamentos__: a captura não é automática sendo agendada de acordo com o delay especificado pelo conector no qual o provider além de indicar se o pagamento foi autorizado, pode especificar (ou recomendar) um número de dias para a captura no momento da resposta à autorização pelo Gateway (este é o comportamento padrão da plataforma).
  - __Imediatamente: Captura Automática Ao Autorizar O Pagamento__: a captura é automática e acontece logo após a autorização mesmo que a transação possua uma análise antifraude.
  - __Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude:__ a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento __Imediatamente: Captura Automática Ao Autorizar O Pagamento__).
  - __Desativado: Não Capturado Automaticamente__: a captura não acontece de forma automática.
10. Em __Ativar split e enviar recebedores?__, selecione a opção __Sim__. 
11. Em __Responsabilidade pelas tarifas de pagamento__, selecione qual __agente__ será responsável pelo pagamento das taxas.
12. Em __Responsabilidade pelos chargebacks__, selecione qual __agente__ será responsável pelo pagamento do chargeback. 
13. Clique no botão __Salvar__.

Em caso de dúvidas, você pode consultar o artigo de [como configurar o Gateway PagarMeV2](https://help.vtex.com/pt/tutorial/configurar-gateway-pagarmev2--5TugxXNMOs0Ocyg4uqussM?&utm_source=autocomplete "como configurar o Gateway PagarMeV2") para mais detalhes. 

## Configuração do split para VTEX Payment 

Siga as instruções:

1. Acesse o __Admin__.
2. Clique no módulo __Pagamentos__.
3. Em seguida, clique em __Configurações__.
4. No topo da página, vá para a aba __Afiliações de Gateway__.
5. Clique no __botão verde “+”__.
6. Na seção Outros, selecione a opção __"VTEX Payment"__.
7. Do lado esquerdo, preencha o campo __Nome da Afiliação__.
8. Preencha o campo __AppKey__ com o dado fornecido pela VTEX. 
9. Em **Captura automática de pagamento** selecione uma das opções:
  - __Use O Comportamento Recomendado Pelo Processador de Pagamentos__: a captura não é automática sendo agendada de acordo com o delay especificado pelo conector no qual o provider além de indicar se o pagamento foi autorizado, pode especificar (ou recomendar) um número de dias para a captura no momento da resposta à autorização pelo Gateway (este é o comportamento padrão da plataforma).
  - __Imediatamente: Captura Automática Ao Autorizar O Pagamento__: a captura é automática e acontece logo após a autorização mesmo que a transação possua uma análise antifraude.
  - __Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude:__ a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento Imediatamente: Captura Automática Ao Autorizar O Pagamento).
  - __Desativado: Não Capturado Automaticamente__: a  captura não acontece de forma automática.
10. Em __Ativar split e enviar recebedores__, selecione a opção __Sim__.
11. Em __Responsabilidade pelas tarifas de pagamento__, selecione qual __agente__ será responsável pelo pagamento das taxas.
12. Em __Responsabilidade pelos chargebacks__, selecione qual __agente__ será responsável pelo pagamento do chargeback.
13. Clique no botão __Salvar__.
