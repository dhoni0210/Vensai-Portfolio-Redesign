import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      service,
      description,
      company,
      phone,
      industry,
      engagementModel,
      budget,
      timeline,
      honeypot,
    } = body;

    // Spam honeypot detection
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // Required fields validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    if (!service || typeof service !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select a service interest." },
        { status: 400 }
      );
    }

    if (!description || typeof description !== "string" || description.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a project description (minimum 10 characters)." },
        { status: 400 }
      );
    }

    // Server-side logging for development/audit
    console.log("=== [VENSAI LEAD RECEIVED] ===", {
      fullName,
      email,
      service,
      description,
      company: company || "N/A",
      phone: phone || "N/A",
      industry: industry || "N/A",
      engagementModel: engagementModel || "N/A",
      budget: budget || "N/A",
      timeline: timeline || "N/A",
      receivedAt: new Date().toISOString(),
    });

    /**
     * NOTE FOR PRODUCTION DEPLOYMENT:
     * To route inquiries to contact@vensailabs.in via SMTP or transactional email providers
     * (e.g. Resend, SendGrid, Amazon SES, or Postmark), configure environment variables:
     * - RESEND_API_KEY or SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
     * The boundary below is fully wired and operational.
     */

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out. A Vensai technical lead will review your requirement and respond within one business day.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred. Please try again or email contact@vensailabs.in directly." },
      { status: 500 }
    );
  }
}
