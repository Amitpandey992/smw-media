import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env['CLOUDINARY_CLOUD_NAME'] as string,
  api_key: process.env['CLOUDINARY_API_KEY'] as string,
  api_secret: process.env['CLOUDINARY_API_SECRET'] as string,
});

export const uploadToCloudinary = (
  buffer: Buffer,
  folder: string,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "auto" },
      (error, result) => {
        if (error) return reject(error);
        if (result) return resolve(result.secure_url);
        reject(new Error("Unknown Cloudinary upload error"));
      },
    );

    uploadStream.end(buffer);
  });
};

export const deleteFromCloudinary = async (publicId: string): Promise<void> => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Cloudinary deletion failed:", error);
  }
};
