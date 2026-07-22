export async function POST(request) {
  try {
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

    if (!name || !email || !phone || !mode) {
      return Response.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    console.log("New enquiry received:", {
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
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry API error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}