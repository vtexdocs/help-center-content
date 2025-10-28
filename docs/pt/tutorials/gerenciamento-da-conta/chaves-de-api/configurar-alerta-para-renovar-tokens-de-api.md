---
title: 'Configurar alerta para renovar tokens de API'
id: kcGIFysFt02FDuhsfjQwZ
status: PUBLISHED
createdAt: 2024-09-30T18:38:54.891Z
updatedAt: 2025-08-13T14:18:37.743Z
publishedAt: 2025-08-13T14:18:37.743Z
firstPublishedAt: 2024-10-08T18:42:01.264Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: configuring-alerts-to-renew-api-tokens
legacySlug: configurar-a-duracao-de-chaves-de-api-beta
locale: pt
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

A página **Chaves de API** permite configurar um alerta para recomendar a renovação de tokens de API para chaves geradas internamente.

[Renovar tokens](/pt/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3]) periodicamente é importante para garantir a segurança, limitar a exposição a riscos e controlar o acesso a recursos, minimizando o impacto de chaves comprometidas.

![token-renewal-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/chaves-de-api/configurar-alerta-para-renovar-tokens-de-api_1.png)

Por padrão, o alerta de renovação aparece após 3 meses, a não ser que outra opção seja selecionada. Para configurar a periodicidade do alerta, siga o procedimento abaixo:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** \> **Chaves de API**.  
2. Clique em `Configurações`.  
3. Selecione a opção com o período desejado:  
   * **3 meses** (recomendado)  
   * **6 meses**  
4. Clique em `Aplicar`.

A periodicidade do alerta será aplicada a todas as chaves novas e existentes e terá a data de criação da chave como referência para a contagem do tempo.

> ℹ️ O token não expira após o prazo definido. A configuração determina apenas quando a interface vai recomendar a renovação, sem desabilitar a utilização do token. O alerta funciona como um lembrete para [renovar manualmente o token](/pt/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3).

## Exibição do alerta

Ao atingir o prazo definido, o alerta para renovação aparece ao lado da chave na aba **Geradas**:

![renew-recommended-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/chaves-de-api/configurar-alerta-para-renovar-tokens-de-api_2.png)

 O alerta laranja significa que o token passou do prazo recomendado de uso em até 3 meses.

![renew-highly-recommended-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/chaves-de-api/configurar-alerta-para-renovar-tokens-de-api_3.png)

O alerta vermelho significa que o token está em uso há 3 meses ou mais além do prazo determinado.

Quando visualizar uma chave com o alerta, [renove o token](/pt/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3) assim que possível. Após a renovação, o alerta reaparece após o período selecionado (3 ou 6 meses), considerando a data de renovação mais recente como ponto de partida para a contagem do tempo.

## Saiba mais

* [Chaves de API](/pt/tutorial/chaves-de-api--4bFEmcHXgpNksoePchZyy6)  
* [Chaves geradas](/pt/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc)  
* [Renovar token de API](/pt/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3)
