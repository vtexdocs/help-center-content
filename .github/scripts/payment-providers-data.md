# Payment providers data (`public/payment-providers.json`)

Single source of truth for the **List of Payment Providers by Country** table, rendered natively in these articles by the `<PaymentProvidersTable />` component (defined in the [helpcenter](https://github.com/vtexdocs/helpcenter) repository):

- PT: `docs/pt/tutorials/pagamentos/configurações-de-pagamentos/lista-de-provedores-de-pagamento-por-pais.md`
- EN: `docs/en/tutorials/payments/payment-settings/list-of-payment-providers-by-country.md`
- ES: `docs/es/tutorials/pagos/configuración-de-pagos/lista-de-proveedores-de-pago-por-pais.md`

One JSON file serves **all three languages**: country names are generated in the reader's language from the ISO country code (via `Intl.DisplayNames`), flags are derived from the same code, and Yes/No labels are localized by the component. Editing this one file updates PT, EN, and ES simultaneously.

## Data format

Each provider is one entry:

```json
{
  "name": "Aarin",
  "payoutSplit": true,
  "docs": {
    "pt": "https://help.vtex.com/pt/tutorial/configurar-pagamento-com-aarin--2kVQVFqutbZYK3I6XBVgLp",
    "en": "https://help.vtex.com/en/tutorial/setting-up-payments-with-aarin--2kVQVFqutbZYK3I6XBVgLp",
    "es": "https://help.vtex.com/es/tutorial/configurar-pago-con-aarin--2kVQVFqutbZYK3I6XBVgLp"
  },
  "countries": ["BR"]
}
```

## Common edits

- **Add a country to a provider**: add its [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) (uppercase) to `countries`.
- **Add a provider**: copy an existing entry and adjust. Keep the list alphabetically sorted by `name`.
- **Remove a provider/country**: delete the entry/code.
- **Payout split available only in some countries**: use the object form for the exceptions:

  ```json
  "countries": ["AR", { "code": "BR", "payoutSplit": true }, "CL"]
  ```

- **No doc page for a locale**: set it to `null` (the component falls back to the EN link).

## Validation

Before committing:

```bash
node .github/scripts/validatePaymentProviders.mjs
```

CI runs the same check on every PR that touches the data file and blocks merging if it finds invalid country codes, duplicate providers/countries, or links outside help.vtex.com.

## History

The data was migrated in June 2026 from three hand-maintained HTML tables (one per language) served by an iframe. The migration found and fixed several inconsistencies between the language versions (wrong flags, conflicting countries, and contradictory payout split values) — the single-file model exists to prevent that class of drift.
