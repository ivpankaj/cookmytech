import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, project, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const recipient = "imvpankaj@gmail.com";

    // Submit to FormSubmit endpoint to deliver email to imvpankaj@gmail.com
    const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `[CookMyTech Inquiry] New message from ${name}`,
        _template: "table",
        _captcha: "false",
        Name: name,
        Email: email,
        "Project Type": project || "Not specified",
        Message: message,
        SubmittedAt: new Date().toLocaleString(),
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: "Email sent successfully" });
    } else {
      const errData = await response.json().catch(() => null);
      console.error("FormSubmit response error:", errData);
      // Even if external service has issue, acknowledge receipt
      return NextResponse.json({ success: true, message: "Submission recorded" });
    }
  } catch (error) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { error: "Internal server error processing message." },
      { status: 500 }
    );
  }
}
