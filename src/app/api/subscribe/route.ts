import { NextResponse } from "next/server";
import { isValidEmail, normalizeEmail } from "@/lib/validation/email";

const MAX_EMAIL_LENGTH = 254;

function isValidString(value: unknown): value is string {
  return typeof value === "string";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: unknown };

    if (!isValidString(body.email)) {
      return NextResponse.json({ message: "Invalid request." }, { status: 400 });
    }

    const email = normalizeEmail(body.email);

    if (!email || email.length > MAX_EMAIL_LENGTH || !isValidEmail(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    return NextResponse.json({ message: "You are subscribed to updates." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
}
