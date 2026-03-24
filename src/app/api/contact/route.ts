import { NextResponse } from "next/server";
import { isValidEmail, normalizeEmail } from "@/lib/validation/email";

const MAX_NAME_LENGTH = 120;
const MAX_SUBJECT_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 5000;

function isValidString(value: unknown): value is string {
  return typeof value === "string";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: unknown;
      email?: unknown;
      subject?: unknown;
      message?: unknown;
    };

    if (
      !isValidString(body.name) ||
      !isValidString(body.email) ||
      !isValidString(body.subject) ||
      !isValidString(body.message)
    ) {
      return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
    }

    const name = body.name.trim();
    const email = normalizeEmail(body.email);
    const subject = body.subject.trim();
    const message = body.message.trim();

    if (!name || !subject || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    if (
      name.length > MAX_NAME_LENGTH ||
      subject.length > MAX_SUBJECT_LENGTH ||
      message.length > MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    return NextResponse.json({ message: "Your message has been received." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
  }
}
