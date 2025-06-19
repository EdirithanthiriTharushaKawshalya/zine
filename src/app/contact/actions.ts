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

  // Create email content
  const emailContent = `
    New Contact Form Submission - LAL STUDIO
    
    Client Details:
    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone: ${phone || "Not provided"}
    
    Service Requested: ${service}
    Event Date: ${eventDate || "Not specified"}
    
    Project Details:
    ${message || "No additional details provided"}
    
    ---
    This message was sent from the LAL STUDIO website contact form.
    Submitted at: ${new Date().toLocaleString()}
  `

  try {
    // Log the submission (in production, you'd send an actual email here)
    console.log("=== NEW CONTACT FORM SUBMISSION ===")
    console.log("Email would be sent to: lalstudio82@gmail.com")
    console.log("From:", email)
    console.log("Subject: New LAL STUDIO Contact Form Submission")
    console.log("Content:", emailContent)
    console.log("=====================================")

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect with success message
    redirect("/contact?success=true")
  } catch (error) {
    console.error("Error processing contact form:", error)
    redirect("/contact?error=true")
  }
}
