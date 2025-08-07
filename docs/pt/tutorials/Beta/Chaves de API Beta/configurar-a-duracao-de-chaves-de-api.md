---
title: 'Configurar a duração de chaves de API (Beta)'
id: kcGIFysFt02FDuhsfjQwZ
status: PUBLISHED
createdAt: 2024-09-30T18:38:54.891Z
updatedAt: 2025-02-05T19:49:54.000Z
publishedAt: 2025-02-05T19:49:54.000Z
firstPublishedAt: 2024-10-08T18:42:01.264Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: configuring-the-duration-of-api-keys
legacySlug: configurar-a-duracao-de-chaves-de-api-beta
locale: pt
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

<div class="alert alert-info">
  <p>Esta funcionalidade está na fase Beta fechada, o que significa que somente clientes selecionados têm acesso a ela no momento. Caso tenha interesse em implementá-la futuramente, entre em contato com <a href="https://support.vtex.com/hc/pt-br">nosso Suporte</a>.</p>
</div>

A página **Chaves de API** permite configurar a duração dos tokens de API gerados ao criar uma chave. Definir uma duração para chaves de API é importante para garantir a segurança, limitar a exposição a riscos e controlar o acesso a recursos, minimizando o impacto de chaves comprometidas.

![apikeys-settings-pt](//images.ctfassets.net/alneenqid6w5/2fwTDGaDljmOzza1hZRPyw/b6e85ab01786d99648bbcdb38574973d/apikeys-settings-pt.png)

Por padrão, o prazo de duração aplicado a chaves de API é de 3 meses, a não ser que outra opção seja selecionada.

Ao atingir o prazo definido, a chave de API aparece com o status *Obsoleto* na aba **Geradas**.

<div class="alert alert-warning">
  <p>A duração somente modifica o status na interface do Admin VTEX, sem desabilitar a utilização da chave. É recomendado <a href="https://help.vtex.com/pt/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3">renovar manualmente o token</a> de chaves obsoletas.</p>
</div>

Para configurar a duração dos tokens de API, siga o procedimento abaixo:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta > Chaves de API*.  
2. Clique em <i class="fas fa-cog"></i> `Configurações`.  
3. Selecione a opção com o prazo de duração desejado:

   * **3 meses** (recomendado)  
   * **6 meses**  
4. Clique em `Aplicar`.

O prazo de duração definido será aplicado a todas as chaves novas e existentes e terá a data de criação da chave como referência para a contagem da duração.

## Saiba mais

* [Chaves de API (Beta)](https://help.vtex.com/pt/tutorial/chaves-de-api--4bFEmcHXgpNksoePchZyy6)  
* [Chaves geradas (Beta)](https://help.vtex.com/pt/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc)  
* [Chaves terceiras (Beta)](https://help.vtex.com/pt/tutorial/chaves-terceiras--1isU0HfKkeg0atlxRha14Q)
