import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the lead data (in production, you would save this to a database)
    console.log("New lead submission:", {
      timestamp: new Date().toISOString(),
      data: body,
    });
    
    // Basic validation
    const requiredFields = ["name", "email", "company", "role", "aum", "region"];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM
    // 4. Send confirmation email to user
    
    // For now, just return success
    return NextResponse.json(
      { 
        message: "Lead submitted successfully",
        id: `lead_${Date.now()}` // Generate a simple ID
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
