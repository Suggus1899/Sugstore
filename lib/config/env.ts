const requiredVars = [
  "NEXT_PUBLIC_AMAZON_TAG",
] as const;

export function validateEnv() {
  const missing: string[] = [];
  for (const key of requiredVars) {
    if (!process.env[key]) {
      missing.push(key);
    }
  }
  if (missing.length > 0) {
    console.warn(
      `[env] Variables missing: ${missing.join(", ")}. Usando valores por defecto.`
    );
  }
}
