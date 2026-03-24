const EMAIL_MAX_LENGTH = 254;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function normalizeEmail(value: string): string {
  const trimmed = value.trim();
  const atIndex = trimmed.indexOf("@");

  if (atIndex === -1) {
    return trimmed;
  }

  const localPart = trimmed.slice(0, atIndex);
  const domainPart = trimmed.slice(atIndex + 1).toLowerCase();
  return `${localPart}@${domainPart}`;
}

export function isValidEmail(value: string): boolean {
  const normalized = normalizeEmail(value);

  if (!normalized || normalized.length > EMAIL_MAX_LENGTH) {
    return false;
  }

  return EMAIL_PATTERN.test(normalized);
}
