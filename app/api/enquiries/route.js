import connectDB from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
const dns = require('node:dns/promises');
dns.setServers(['1.1.1.1', '8.8.8.8']);

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      domain,
      candidates,
      mode,
      location,
      countryCode,
    } = body;

    if (!name || !email || !phone || !mode || !countryCode) {
      return Response.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    const newEnquiry = await Enquiry.create({
      name,
      email,
      phone,
      company,
      domain,
      candidates,
      mode,
      location,
      countryCode,
    });

    return Response.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        enquiryId: newEnquiry._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry API error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong while saving the enquiry.",
      },
      { status: 500 }
    );
  }
}