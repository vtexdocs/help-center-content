---
title: 'Configurar pagamentos com PayClub'
id: 3C3bDia3Tyq48MOuMomcUW
status: DRAFT
createdAt: 2018-04-03T13:12:17.337Z
updatedAt: 2024-03-18T19:14:09.539Z
publishedAt: 
firstPublishedAt: 2018-04-03T15:07:32.416Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagamentos-com-payclub
locale: pt
legacySlug: configurar-pagamentos-com-payclub
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">Essa integração de pagamento não pode ser mais configurada na plataforma devido ao <a href="https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14">processo de remoção de provedores legados</a> e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.</div>

Você pode configurar o [subadquirente](/pt/tutorial/o-que-e-um-subadquirente) PayClub para receber pagamentos na sua loja. Nesta modalidade, seu cliente escolhe o __meio de pagamento__ PayClub e realiza a autenticação no ambiente externo da solução de pagamentos.

Para habilitar pagamentos com PayClub, siga os passos abaixo:

## Configurar afiliação de gateway PayClub
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __PayClub__.
4. Preencha os campos de cadastro com os dados fornecidos pela PayClub (campos _Código Adquirente_, _MerchantId_, _LocalId_, _ChavePrivadaAssinatura_, _ChavePrivadaCriptografia_, _ChavePublicaAssinaturaPayClub_, _ChavePublicaCriptografiaPayClub_ e _Simetrica_).
5. No campo __RUC__, informe o código de registro da sua loja.
6. Em __CodigoMoeda__, preencha com o código [ISO 4217](https://pt.wikipedia.org/wiki/ISO_4217) da moeda que será usada nos pagamentos.
7. No campo __Vector__, escreva a sequência de até 16 caracteres (somente letras e números) gerada pela sua loja.
8. Em __Zona Horaria__, defina o fuso horário para o download do arquivo de conciliação bancária.
9. Clique em __Salvar__.

## Configurar condição de pagamento PayClub
1. Já dentro das __Configurações__ do módulo de Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Selecione o meio de pagamento __PayClub__.
4. Clique no botão __Status__ para ativar essa condição de pagamento.
5. Em __Processar com a afiliação__, a opção _PayClub_ já vai estar selecionada (já que é a única disponível).
6. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa __Usar Antifraude__.
7. Você pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
8. Clique em __Salvar__.

Depois de seguir os passos indicados, o PayClub vai aparecer no checkout da sua loja como uma opção de pagamento. Depois de clicar em __Finalizar Compra__, seu cliente será redirecionado para autenticação no ambiente do PayClub.
