---
title: "Cuenta de vendedor creada con edición/patrocinador incorrecto durante la incorporación"
id: 4Hux4THmu1cvgR05bEeFbH
status: PUBLISHED
createdAt: 2025-06-04T19:21:33.198Z
updatedAt: 2025-06-04T19:21:46.467Z
publishedAt: 2025-06-04T19:21:46.467Z
firstPublishedAt: 2025-06-04T19:21:46.467Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: cuenta-de-vendedor-creada-con-edicionpatrocinador-incorrecto-durante-la-incorporacion
locale: es
kiStatus: Backlog
internalReference: 1238783
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Durante el proceso de incorporación de nuevos vendedores a través del Portal del Vendedor, algunas cuentas se están creando con la edición y/o el patrocinador incorrectos. El comportamiento esperado es que la cuenta se aprovisione con la edición "edición-vendedor" patrocinada por la cuenta patrocinadora. Sin embargo, en algunos casos, la cuenta se crea utilizando la edición/esponsorización VTEX por defecto.

La investigación indica que este problema tiene su origen en fallos o eventos de reintento durante el proceso de aprovisionamiento IO. La carga útil enviada para la creación de la cuenta contiene la información correcta, pero si se produce un reintento interno dentro de IO, es posible que la edición/patrocinador no se aplique correctamente, lo que da lugar a un entorno de vendedor incoherente.


##

## Simulación



- Inicie el flujo de incorporación de un nuevo vendedor a la plataforma a través del Portal del Vendedor.
- El vendedor recibirá una invitación y la aceptará, desencadenando acciones internas de aprovisionamiento (Onboarding.Web, OnboardingBO, Billing).
- Supervise los registros de onboarding y creación de cuentas (especialmente vendor_onboarding, llamadas onboarding-api, creación de cuentas en Billing).
- Si se produce un error interno de IO o un reintento durante la configuración de la edición/patrocinador, la cuenta puede crearse con una edición y/o patrocinador incorrectos.
- El vendedor afectado no tendrá el entorno correcto, lo que afectará a las funciones y los permisos.



## Workaround


N/A






