import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(request: Request): Promise<Response> {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const response = await new Promise<Response>((resolve) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: "auto", folder: "momentor" },
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              resolve(
                NextResponse.json(
                  { error: "Upload failed" },
                  { status: 500 }
                )
              );
            } else {
              resolve(
                NextResponse.json({
                  url: result?.secure_url,
                })
              );
            }
          }
        )
        .end(buffer);
    });

    return response;
  } catch (error) {
    console.error("Internal upload error:", error);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}
