/**
 * Validates public/payment-providers.json, the data source for the
 * <PaymentProvidersTable /> component used by the "List of Payment Providers
 * by Country" articles (PT/EN/ES).
 *
 * Run locally before committing changes to the data file:
 *
 *   node .github/scripts/validatePaymentProviders.mjs
 *
 * CI runs this automatically on every PR that touches the data file
 * (.github/workflows/validate-payment-providers.yml).
 *
 * See .github/scripts/payment-providers-data.md for the data format and editing
 * instructions.
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', '..', 'public', 'payment-providers.json')

const errors = []

let data
try {
  data = JSON.parse(readFileSync(dataPath, 'utf8'))
} catch (error) {
  console.error(`Invalid JSON in ${dataPath}: ${error.message}`)
  process.exit(1)
}

if (!Array.isArray(data.providers) || data.providers.length === 0) {
  errors.push('"providers" must be a non-empty array')
}

const LOCALES = ['pt', 'en', 'es']
const HELP_URL = /^https:\/\/help\.vtex\.com\//
const ISO_CODE = /^[A-Z]{2}$/
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

const seenProviders = new Set()

for (const provider of data.providers ?? []) {
  const name = provider.name
  const where = `provider "${name ?? '?'}"`

  if (!name || typeof name !== 'string') {
    errors.push('Provider with missing or invalid "name"')
    continue
  }

  const key = name.toLowerCase()
  if (seenProviders.has(key)) errors.push(`Duplicate provider: "${name}"`)
  seenProviders.add(key)

  if (typeof provider.payoutSplit !== 'boolean') {
    errors.push(`${where}: "payoutSplit" must be true or false`)
  }

  if (!provider.docs || typeof provider.docs !== 'object') {
    errors.push(`${where}: missing "docs" object`)
  } else {
    for (const locale of LOCALES) {
      const url = provider.docs[locale]
      if (url === null) continue // explicitly no doc for this locale
      if (typeof url !== 'string' || !HELP_URL.test(url)) {
        errors.push(`${where}: docs.${locale} must be a help.vtex.com URL or null (got ${JSON.stringify(url)})`)
      }
    }
  }

  if (!Array.isArray(provider.countries) || provider.countries.length === 0) {
    errors.push(`${where}: "countries" must be a non-empty array`)
    continue
  }

  const seenCountries = new Set()
  for (const country of provider.countries) {
    const code = typeof country === 'string' ? country : country?.code

    if (typeof country === 'object') {
      if (typeof country?.payoutSplit !== 'boolean') {
        errors.push(`${where}: country object ${JSON.stringify(country)} must have a boolean "payoutSplit"`)
      }
    }

    if (typeof code !== 'string' || !ISO_CODE.test(code)) {
      errors.push(`${where}: invalid country code ${JSON.stringify(code)} (must be ISO 3166-1 alpha-2, uppercase)`)
      continue
    }

    // Intl.DisplayNames echoes the code back when it's not a known region
    if (regionNames.of(code) === code) {
      errors.push(`${where}: "${code}" is not a known country/region code`)
    }

    if (seenCountries.has(code)) errors.push(`${where}: duplicate country "${code}"`)
    seenCountries.add(code)
  }
}

const totalRows = (data.providers ?? []).reduce((sum, p) => sum + (p.countries?.length ?? 0), 0)

if (errors.length) {
  console.error(`${errors.length} error(s) in payment-providers.json:\n`)
  for (const error of errors) console.error(` - ${error}`)
  process.exit(1)
}

console.log(`OK: ${data.providers.length} providers, ${totalRows} provider/country rows.`)
