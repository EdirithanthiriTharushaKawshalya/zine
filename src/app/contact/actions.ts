"use server"

export async function submitContactForm(formData: FormData) {
  // Extract form data
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const service = formData.get("service") as string
  const eventDate = formData.get("eventDate") as string
  const message = formData.get("message") as string

  // Create email content
  const emailContent = `
    New Contact Form Submission - LAL STUDIO
    
    Client Details:
    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone: ${phone}
    
    Service Requested: ${service}
    Event Date: ${eventDate || "Not specified"}
    
    Project Details:
    ${message}
    
    ---
    This message was sent from the LAL STUDIO website contact form.
  `

  try {
    // In a real application, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // For now, we'll simulate the email sending
    console.log("Email would be sent to: lalstudio82@gmail.com")
    console.log("Email content:", emailContent)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Thank you for your message! We will get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again or contact us directly at lalstudio82@gmail.com",
    }
  }
}
