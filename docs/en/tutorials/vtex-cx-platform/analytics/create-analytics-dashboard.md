---
title: "Analytics: Create custom dashboard"
createdAt: 2026-07-02T16:25:21.244Z
updatedAt: 2026-07-02T14:20:03.298Z
contentType: tutorial
productTeam: Post-purchase
slugEN: create-analytics-dashboard
locale: en
---

The **Analytics** module of the VTEX CX Platform allows you to create custom dashboards with widgets that display specific metrics for your operation. You can use these dashboards to monitor support funnels, flow results, and VTEX sales data, among other data.

## Creating a dashboard

To create a custom dashboard, follow the instructions below:

1. In the **Analytics** module, click the arrow next to **Live Desk**.
2. Click <i class="fas fa-plus" aria-hidden="true"></i>`New dashboard`.
3. Enter the dashboard name, select the store currency, and choose a layout.
4. Click `Save`. The new dashboard will open.

> ⚠️ The chosen layout affects the widgets and the data they display. Card widgets are available in three models: Runs, Flow results, and Data crossing. Column-format widgets offer four models: Funnel, Recurrence, VTEX, and Template conversion.

## Adding and configuring card widgets

After creating the dashboard, add the widgets you want to display. Each empty space on the dashboard represents a slot for a widget you can configure.

To configure a card widget, follow the instructions below:

1. Click the configuration button of the card you want to configure. The **Widget gallery** will open on the side.
2. Select the type of widget you want to configure:
- [Runs](#runs).
- [Flow result](#flow-result).
- [Data crossing](#data-crossing).
3. Complete the configuration fields for the selected widget.
4. Click `Save`.

To reset a widget's settings, click `Reset widget` in the widget configuration window.

### Runs

The **Runs** widget displays the list of runs for a flow.

To configure this widget, complete the fields below:

1. In **Enter a name for the card**, enter a name to identify the widget on the dashboard.
2. Select the flow whose runs you want to monitor.
3. Choose an emoji for the widget. This step is optional. The emoji displays next to the metric and can help visually identify the widget.
4. Click `Save`.

### Flow result

The **Flow result** widget returns the result of a flow and allows you to perform basic operations with the data.

To configure this widget, complete the fields below:

1. In **Enter a name for the card**, enter a name to identify the widget on the dashboard.
2. Select the flow you want to monitor.
3. In **Flow result**, search for or select the result you want to display.
4. In **Operation**, select the operations that will apply to the result:
   - Total or Average.
   - Highest value or Lowest value.
5. To monitor data with a currency symbol, check the **Currency** box.
6. Choose an emoji for the widget. This step is optional. The emoji displays next to the metric and can help visually identify the widget.
7. Click `Save`.

### Data crossing

The **Data crossing** widget combines two values to generate a custom metric.

To configure this widget, complete the fields below:

1. In **Enter a name for the card**, enter a name to identify the widget on the dashboard.
2. In **First value**, select the first flow and the result type:
   - **Runs:** Uses the number of runs as a value.
   - **Flow result:** Uses the result of a specific flow step as a value.
     - If you select **Flow result**, you need to choose a flow result and the type of data you want (sum, average, minimum, or maximum).
3. In **Second value**, select the second flow and the result type:
   - **Runs:** Uses the number of runs as a value.
   - **Flow result:** Uses the result of a specific flow step as a value.
     - If you select **Flow result**, you need to choose a flow result and the type of data you want (sum, average, minimum, or maximum).
4. In **Operation**, choose how to combine the two values:
- **Multiply:** Multiplies the first value by the second.
- **Difference:** Calculates the difference between the two values.
- **Sum:** Adds the two values.
- **Percentage:** Calculates the percentage of the first value relative to the second.
5. To monitor data with a currency symbol, check the **Currency** box.
6. Click `Save`.

## Adding and configuring column widgets

After creating the dashboard, add the widgets you want to display. Each empty space on the dashboard represents a slot for a widget you can configure.

To configure a column widget, follow the instructions below:

1. Click the Configure button on the column you want to configure. The **Widget gallery** will open on the side.
2. Select the type of widget you want to configure:
- [Funnel](#funnel).
- [Recurrence](#recurrence).
- [VTEX](#vtex).
- [Template conversion](#template-conversion).
3. Complete the configuration fields for the selected widget.
4. Click `Save`.

To reset a widget's settings, click `Reset widget` in the widget configuration window.

### Funnel

The **Funnel** widget displays data in a funnel chart, showing how the volume of support chats decreases at each step of a flow.

To configure this widget, complete the fields below:

1. In **First metric**, enter a name for the first metric and select the source flow.
2. In **Second metric**, enter a name for the second metric and select the source flow.
3. In **Third metric**, enter a name for the third metric and select the source flow.
4. To add other metrics, click `+ Add metric` and complete the fields.
5. Click `Save`.

> ℹ️ The Funnel widget requires a minimum of three metrics to generate the view and accepts up to five metrics.

### Recurrence

The **Recurrence** widget displays recurring results in charts, such as ratings from a satisfaction survey or CSAT.

To configure this widget, complete the fields below:

1. In **Metric name**, enter a name to identify the widget on the dashboard.
2. In **Select source flow**, select the desired flow.
3. In **Flow result**, search for or select the recurring result you want to view.
4. Click `Save`.

### VTEX

The **VTEX** widget displays sales data from your VTEX store.

To configure this widget, complete the fields below:

1. In **Widget name**, enter a name to identify the widget on the dashboard.
2. In **UTM**, enter the VTEX UTM corresponding to your store and app.
3. Click `Save`.

### Template conversion

The **Template conversion** widget tracks the conversion rate between template messages sent and completed sales.

To configure this widget, complete the fields below:

1. In **Widget name**, enter a name to identify the widget on the dashboard.
2. In **Set metadata**, select the WhatsApp number associated with the template messages.
3. Select the templates you want to track conversions for.
4. In **Set VTEX data**, enter the VTEX UTM corresponding to your store and app.
5. Click `Save`.
