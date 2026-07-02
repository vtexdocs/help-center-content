---
title: "Analytics: Create custom dashboard"
createdAt: 2026-07-02T16:25:21.244Z
updatedAt: 2026-07-02T14:20:03.298Z
contentType: tutorial
productTeam: Post-purchase
slugEN: create-analytics-dashboard
locale: en
---

The **Analytics** module of VTEX CX Platform allows you to create custom dashboards with widgets that display specific metrics for your operation. You can use these dashboards to monitor support funnels, flow results, and VTEX sales data, among other data.

## Creating a dashboard

To create a custom dashboard, follow the instructions below:

1. In the **Analytics** module, click the menu next to the **Analytics** name.
2. Click `+ New dashboard`.
3. Enter a name for the dashboard, select your store currency, and choose a layout.
4. Click `Save`. The new dashboard will open.

> ⚠️ The chosen layout affects the widgets and the data they display. Square-format widgets offer three models: Runs, Flow results, and Data crossover. Column-format widgets offer four models: Funnel, Recurrence, VTEX, and Template conversion.

## Adding and configuring square widgets

After creating the dashboard, add the widgets you want to display. Each empty space on the dashboard corresponds to a widget to be configured.

To configure a square widget, follow the instructions below:

1. Click the square card button you want to configure. The **Widget gallery** will open on the side.
2. Select the type of widget you want to configure:
  - [Runs](#runs).
  - [Flow results](#flow-results).
  - [Data crossover](#data-crossover).
3. Fill in the configuration fields for the selected widget.
4. Click `Save`.

To reset a widget's settings, click `Reset widget` in the widget configuration panel.

### Runs

The **Runs** widget displays the list of runs for a flow.

To configure the widget, fill in the fields below:

1. In **Give the card a name**, enter a name to identify the widget on the dashboard.
2. Select the flow whose runs you want to monitor.
3. Choose an emoji for the widget. This step is optional. The emoji appears next to the metric and can help visually identify the widget.
4. Click `Save`.

### Flow results

The **Flow results** widget returns the result of a flow and allows you to perform basic operations with the data.

To configure the widget, fill in the fields below:

1. In **Give the card a name**, enter a name to identify the widget on the dashboard.
2. Select the flow you want to monitor.
3. In **Flow result**, search for or select the result you want to display.
4. In the **Operation** table, select the operations that will be applied to the result:
   - Total or Average.
   - Highest value or Lowest value.
5. To monitor data with a currency symbol, enable the **Currency** checkbox.
6. Choose an emoji for the widget. This step is optional. The emoji appears next to the metric and can help visually identify the widget.
7. Click `Save`.

### Data crossover

The **Data crossover** widget combines two values to generate a custom metric.

To configure the widget, fill in the fields below:

1. In **Give the card a name**, enter a name to identify the widget on the dashboard.
2. In **First value**, select the first flow and the result type:
   - **Flow runs:** Uses the number of runs as a value.
   - **Flow result:** Uses the result of a specific flow step as a value.
     - If you select **Flow result**, you need to choose a flow result and which type of data you want (sum, average, minimum, or maximum).
3. In **Second value**, select the second flow and the result type:
   - **Flow runs:** Uses the number of runs as a value.
   - **Flow result:** Uses the result of a specific flow step as a value.
     - If you select **Flow result**, you need to choose a flow result and which type of data you want (sum, average, minimum, or maximum).
4. In **Operation**, choose how the two values will be combined:
  - **Multiply:** Multiplies the first value by the second.
  - **Difference:** Calculates the difference between the two values.
  - **Sum:** Adds the two values.
  - **Percentage:** Calculates the percentage of the first value in relation to the second.
5. To monitor data with a currency symbol, enable the **Currency** checkbox.
6. Click `Save`.

## Adding and configuring column widgets

After creating the dashboard, add the widgets you want to display. Each empty space on the dashboard corresponds to a widget to be configured.

To configure a column widget, follow the instructions below:

1. Click the column button you want to configure. The **Widget gallery** will open on the side.
2. Select the type of widget you want to configure:
  - [Funnel](#funnel).
  - [Recurrence](#recurrence).
  - [VTEX](#vtex).
  - [Template conversion](#template-conversion).
3. Fill in the configuration fields for the selected widget.
4. Click `Save`.

To reset a widget's settings, click `Reset widget` in the widget configuration panel.

### Funnel

The **Funnel** widget displays data in a funnel chart, showing how the volume of support tickets decreases at each step of a flow.

To configure the widget, fill in the fields below:

1. In **First metric**, enter a name for the first metric and select the source flow.
2. In **Second metric**, enter a name for the second metric and select the source flow.
3. In **Third metric**, enter a name for the third metric and select the source flow.
4. To include other metrics, click `+ Add metric` and fill in the fields.
5. Click `Save`.

> ℹ️ The Funnel widget requires a minimum of three metrics to generate the visualization and accepts up to five metrics.

### Recurrence

The **Recurrence** widget displays recurring results in charts, such as ratings from a satisfaction survey or CSAT.

To configure the widget, fill in the fields below:

1. In **Metric name**, enter a name to identify the widget on the dashboard.
2. In **Select source flow**, select the desired flow.
3. In **Flow result**, search for or select the recurring result you want to visualize.
4. Click `Save`.

### VTEX

The **VTEX** widget displays sales data from your VTEX store.

To configure the widget, fill in the fields below:

1. In **Widget name**, enter a name to identify the widget on the dashboard.
2. In **UTM**, enter the VTEX UTM corresponding to your store and app.
3. Click `Save`.

### Template conversion

The **Template conversion** widget tracks the conversion rate between template messages sent and completed sales.

To configure the widget, fill in the fields below:

1. In **Widget name**, enter a name to identify the widget on the dashboard.
2. In **Set metadata**, select the WhatsApp number associated with sending the templates.
3. Then, select the templates whose conversion you want to track.
4. In **Set VTEX data**, enter the VTEX UTM corresponding to your store and app.
5. Click `Save`.
