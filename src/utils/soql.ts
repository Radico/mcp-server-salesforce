/**
 * Escapes a string literal for safe interpolation into a SOQL query.
 * Per SOQL string literal rules, backslashes and single quotes must be
 * backslash-escaped (backslash first, so an already-escaped quote isn't
 * double-escaped).
 */
export function escapeSoqlString(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
