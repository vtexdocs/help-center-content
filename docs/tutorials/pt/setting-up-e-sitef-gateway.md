---
title: 'Configurar gateway e-SiTef'
id: 6UEi0QAlU6BXz5RgWj34Ac
status: PUBLISHED
createdAt: 2021-12-06T14:51:20.250Z
updatedAt: 2023-03-23T15:04:33.914Z
publishedAt: 2023-03-23T15:04:33.914Z
firstPublishedAt: 2021-12-06T17:37:55.667Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-gateway-e-sitef
locale: pt
legacySlug: configurar-gateway-e-sitef
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, você pode utilizar o gateway e-Sitef para receber pagamentos por meio de cartões de crédito, débito e PIX. Para configurar este gateway, siga os passos abaixo:

## Configurar afiliação de gateway e-SiTef
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
4. Na aba __Afiliações de Gateways__, clique no botão __+__.
5. Clique em __ESITEF__.
6. Nos campos __Application Key__ e __Application Token__, insira as informações que foram fornecidas pela e-SiTef.
7. No campo __Captura automática de pagamento__, selecione uma das seguintes opções:
<br>
<ul>
<br>
    	<li><b>Use o comportamento recomendado pelo processador de pagamentos</b>: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li><b>Imediatamente: captura automática ao autorizar o pagamento</b>: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li><b>Imediatamente: captura automática ao passar a análise de risco de fraude</b>: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Imediatamente: Captura Automática Ao Autorizar O Pagamento").</li>
   		<li><b>Agendada: defina quando a captura automática será realizada</b>: ao selecionar esta opção, o campo <b>Prazo agendado em horas para a captura automática</b> estará disponível, e deve ser preenchido com o período no qual a captura automática acontecerá. Este período deve estar em acordo com os limites permitidos pelo provedor de pagamento.</li>        
   		<li><b>Desativado: não capturado automaticamente</b>: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>
6. No campo __Captura antecipada (em horas)__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação). Você também pode desativar a função.
7. Em __Alterar tempo máximo para captura automática (em dias)__, preencha com o período máximo de dias no qual deve ocorrer a captura automática.
8. Em __Soft Descriptor__, você pode inserir uma string personalizada (caracteres) que serão impressos na fatura do cliente.
9. Em __Habilitar Pré-autorização__, selecione se você deseja que as compras feitas com cartão de crédito tenham o valor reservado (pré-autorizada a captura após a aprovação da transação).
10. No campo __Captura antecipada após anti-fraude (em horas)__, escolha em quanto tempo você deseja que a captura seja realizada (depois da análise do antifraude). Você também pode desativar a função.
11. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, a Sitef com pre-auth vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a Sitef com pre-auth). 

Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
