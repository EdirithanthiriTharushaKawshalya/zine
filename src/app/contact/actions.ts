"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
  // Extract form data
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const service = formData.get("service") as string
  const eventDate = formData.get("eventDate") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!firstName || !lastName || !email || !service) {
    redirect("/contact?error=true")
    return
  }

  try {
    // Initialize Resend only at runtime, not at build time
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    // 1. Send confirmation email to customer
    await resend.emails.send({
      from: "STUDIO ZINE <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting STUDIO ZINE!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin: 0;">STUDIO ZINE</h1>
            <p style="color: #6b7280; margin: 5px 0;">Professional Photography & Videography</p>
          </div>
          
          <h2 style="color: #1f2937;">Thank you for your inquiry!</h2>
          
          <p>Dear ${firstName},</p>
          
          <p>Thank you for reaching out to STUDIO ZINE! We have received your inquiry and are excited to learn about your ${service.toLowerCase()} project.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Your Submission Details:</h3>
            <p><strong>Service:</strong> ${service}</p>
            ${eventDate ? `<p><strong>Event Date:</strong> ${eventDate}</p>` : ""}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            ${message ? `<p><strong>Project Details:</strong><br>${message}</p>` : ""}
          </div>
          
          <p><strong>What happens next?</strong></p>
          <ul>
            <li>We will review your project details carefully</li>
            <li>Our team will prepare a customized quote for your needs</li>
            <li>We'll contact you within 24 hours to discuss your vision</li>
          </ul>
          
          <p>If you have any urgent questions, feel free to reply to this email or contact us directly at <a href="mailto:contact.teamzine@gmail.com">contact.teamzine@gmail.com</a>.</p>
          
          <p>We look forward to capturing your special moments!</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Best regards,<br>
              <strong>STUDIO ZINE Team</strong><br>
              Professional Photography & Videography<br>
              📧 contact.teamzine@gmail.com<br>
              🌐 <a href="https://zine-ten.vercel.app">zine-ten.vercel.app</a>
            </p>
          </div>
        </div>
      `,
    })

    // 2. Send notification email to studio
    await resend.emails.send({
      from: "STUDIO ZINE Website <onboarding@resend.dev>",
      to: ["contact.teamzine@gmail.com"],
      subject: `New ${service} Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #2563eb; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
            <h1 style="margin: 0;">🎉 New Client Inquiry!</h1>
            <p style="margin: 10px 0 0 0;">Someone is interested in your ${service.toLowerCase()} services</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1e293b; margin-top: 0;">Client Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Name:</td>
                <td style="padding: 8px 0;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${
                phone
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service:</td>
                <td style="padding: 8px 0;">${service}</td>
              </tr>
              ${
                eventDate
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Event Date:</td>
                <td style="padding: 8px 0;">${eventDate}</td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Submitted:</td>
                <td style="padding: 8px 0;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          ${
            message
              ? `
          <div style="background-color: #fefce8; border-left: 4px solid #eab308; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #a16207; margin-top: 0;">Project Details:</h3>
            <p style="color: #713f12; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          `
              : ""
          }
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
            <h3 style="color: #047857; margin-top: 0;">Quick Actions:</h3>
            <p style="margin-bottom: 15px;">
              <a href="mailto:${email}?subject=Re: Your ${service} Inquiry&body=Hi ${firstName},%0D%0A%0D%0AThank you for your interest in our ${service.toLowerCase()} services. I'd love to discuss your project in more detail.%0D%0A%0D%0ABest regards,%0D%0ASTUDIO ZINE" 
                 style="background-color: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-right: 10px;">
                📧 Reply to Client
              </a>
              ${
                phone
                  ? `
              <a href="tel:${phone}" 
                 style="background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                📞 Call Client
              </a>
              `
                  : ""
              }
            </p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="color: #64748b; font-size: 14px;">
              This email was automatically generated from your STUDIO ZINE website contact form.
            </p>
          </div>
        </div>
      `,
    })

    // Redirect with success message
    redirect("/contact?success=true")
  } catch (error) {
    console.error("Error sending emails:", error)
    redirect("/contact?error=true")
  }
}
