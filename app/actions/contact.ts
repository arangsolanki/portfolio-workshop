"use server";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

interface ContactResult {
    success: boolean;
    message: string;
}

export async function submitContact(formData: FormData): Promise<ContactResult> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const data: ContactFormData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
    };

    // Validation
    if (!data.name || data.name.length < 2) {
        return {
            success: false,
            message: "Please enter a valid name (at least 2 characters)",
        };
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        return {
            success: false,
            message: "Please enter a valid email address",
        };
    }

    if (!data.message || data.message.length < 10) {
        return {
            success: false,
            message: "Please enter a message (at least 10 characters)",
        };
    }

    // In a real application, you would:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Store the message in a database
    // 3. Send a notification to Slack/Discord

    console.log("Contact form submission:", data);

    return {
        success: true,
        message: "Thank you for your message! I'll get back to you within 24-48 hours.",
    };
}
