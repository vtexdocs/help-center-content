---
title: 'Cómo importar puntos de recogida (pickup points) por planilla'
id: 6jqlX7MFOga6cMoWKqiugU
status: ARCHIVED
createdAt: 2018-12-18T12:12:03.208Z
updatedAt: 2020-07-03T20:09:24.814Z
publishedAt: 
firstPublishedAt: 2018-12-27T18:17:55.655Z
contentType: tutorial
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slug: como-importar-puntos-de-recogida-pickup-points-por-planilla
locale: es
legacySlug: como-importar-puntos-de-recogida-pickup-points-por-planilla
subcategoryId: 1c5Btie9ou2Gg2iUo0ggqM
---

Los puntos de recogida, también conocidos como pickup points, son parte importante de cualquier estrategia [omnichannel](/es/announcement/cambie-su-negocio-con-la-experiencia-omnichannel-vtex).

Puede [configurar puntos de recogida uno a uno](/es/tutorial/configurar-puntos-de-recogida-pickup-points) o hacer esto mediante la importación de una planilla XLS [(como la de este ejemplo)](//assets.ctfassets.net/alneenqid6w5/2QZFVRKdaoOkykE4AUkw6m/bdf62b6d028819b5b8c08ef7a27eadc6/pickups_example.xls). Usando un archivo XLS, usted registra todos los pickup points de una sola vez (siempre que no supere los 10 MB).

>ℹ️ Un archivo XLS de **10 MB** permite el registro de, aproximadamente, **50 mil** puntos de recogida. Para importar un número mayor, es necesario dividirlos en más de una planilla y hacer un upload a la vez.



## Cómo subir la planilla
1. En el menú lateral, haga clic en __Inventario y envío__, en la sección __Pedidos__.
2. En las opciones que se abren, haga clic en __Puntos de recogida__.
3. Haga clic en __Subir un XLS__, en la esquina superior derecha de la página. ![Subir XLS (ES)](//images.ctfassets.net/alneenqid6w5/33W20ReDnWc4U4gIgeaOUW/b2eada442c781b9b21397aeb60deb127/Subir_XLS__ES_.png)
4. Un modal va a surgir, permitiendo que usted envíe su archivo (con extensión `.xls`) o baje la [planilla de ejemplo](//assets.ctfassets.net/alneenqid6w5/2QZFVRKdaoOkykE4AUkw6m/bdf62b6d028819b5b8c08ef7a27eadc6/pickups_example.xls). Recuerde que esta planilla viene con valores de ejemplo rellenados, que deben ser borrados y reemplazados por los datos de sus propios puntos de recogida. ![modal (ES)](//images.ctfassets.net/alneenqid6w5/2CxrD2w27CYIAwqYGwUEqu/ca5cebd0c3c7bc457f4f93fbee98178d/modal__ES_.png)
5. Con todo hecho correctamente, los nuevos puntos de recogida estarán configurados y disponibles para sus clientes.



## Cómo rellenar la planilla correctamente
Para que la hoja de trabajo cumpla su papel, es fundamental que usted rellene cada columna de la manera correcta. Si los estándares no se respetan, el sistema no podrá procesar la información.


### Datos obligatorios

&bull; Las columnas `Name`, `PostalCode`, `Latitude`, `Longitude` y `CountryAcronym`__son obligatorias__. Todos los puntos de recogida deben tener estas columnas rellenadas correctamente.


### Columna BusinessHours

&bull; Esta columna indica el funcionamiento del punto de recogida y debe rellenarse en el formato `DiaDeLaSemana,HoraInicio,HoraFinal`, sin espacios y usando comas.

&bull; La información de funcionamiento del punto de recogida debe separarse cada día. Es decir, cada día debe tener sus datos incluidos en la tabla siguiendo el modelo `DiaDeLaSemana,HoraInicio,HoraFinal`.

&bull; Los días de la semana deben cumplimentarse de acuerdo con los códigos:
> 0 = Domingo
> 
> 1 = Lunes
> 
> 2 = Martes
> 
> 3 = Miércoles
> 
> 4 = Jueves
> 
> 5 = Viernes
> 
> 6 = Sábado

&bull; Las horas deben obedecer el estándar __24h__ y deben estar en el formato `hh:mm`, donde `hh` representan las horas y `mm` los minutos.

&bull; Usted debe informar, uno a uno, los días de la semana y el horario de funcionamiento del punto de recogida, siempre separados por punto y coma (y sin espacios).


### Columna PickupHolidays

&bull; Para incluir el funcionamiento en un feriado, es necesario rellenar la columna `PickupHolidays` informando la fecha, hora de inicio y hora de fin de la atención (sin espacios y usando comas).

&bull; Los feriados deben ser incluidos uno a uno. Para incluir más de un feriado, debe separarlos utilizando punto y coma (`;`) y sin espacios.

&bull; La fecha, al contrario de lo que ocurre con un día de semana común, debe cumplimentarse en el formato ISO: `yyyy-mm-dd`, donde `yyyy` representan el año, `mm` el mes y `dd` el día.

&bull; Las horas deben obedecer el estándar __24h__ y deben estar en el formato `hh:mm`, donde `hh` representan las horas y `mm` los minutos.
