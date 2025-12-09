import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { USER } from "@/features/portfolio/data/user";

export async function GET() {
  const robotoMedium = await readFile(
    join(process.cwd(), "src/assets/fonts/Roboto-Medium.ttf")
  );

  const phoneNumber = Buffer.from(USER.phoneNumber, "base64").toString();
  const email = Buffer.from(USER.email, "base64").toString();

  return new ImageResponse(
    (
      <div tw="w-full h-full flex items-center justify-center bg-black text-white p-16">
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 left-16" />
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 right-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 top-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 bottom-16" />

        <div tw="flex w-full h-full items-center">
          {/* ProfileHeader Section */}
          <div tw="flex flex-col items-center px-8">
            {/* Avatar with ring */}
            <div tw="flex mb-6">
              <img
                src="https://leotrapani.com/images/pfp.jpeg"
                alt="Leonardo Trapani"
                tw="w-40 h-40 rounded-full"
                style={{
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 0 0 4px black, 0 0 0 6px rgba(255, 255, 255, 0.1)",
                }}
              />
            </div>

            {/* Name with verified icon */}
            <div tw="flex items-center mb-2">
              <h1 tw="text-4xl font-semibold mr-2">{USER.displayName}</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fill="#3b82f6"
                  d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
                />
              </svg>
            </div>

            {/* Bio */}
            <p tw="text-base text-zinc-400">{USER.flipSentences[0]}</p>
          </div>

          {/* Separator */}
          <div
            tw="h-full w-12 mx-8"
            style={{
              backgroundImage:
                "repeating-linear-gradient(315deg, rgba(161, 161, 170, 0.56) 0, rgba(161, 161, 170, 0.56) 1px, transparent 0, transparent 50%)",
              backgroundSize: "10px 10px",
            }}
          />

          {/* Overview Section */}
          <div tw="flex flex-col flex-1 px-8">
            {/* Job items */}
            {USER.jobs.map((job, index) => (
              <div key={index} tw="flex items-center mb-4">
                <div tw="mr-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M10 11h4" />
                    <path d="M7 15h10" />
                  </svg>
                </div>
                <span tw="text-lg">
                  {job.title} @ {job.company}
                </span>
              </div>
            ))}

            {/* Grid items */}
            <div tw="flex flex-col mt-4">
              {/* MapPin - Address */}
              <div tw="flex items-center mb-3">
                <div tw="mr-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span tw="text-base">{USER.address}</span>
              </div>

              {/* Phone */}
              <div tw="flex items-center mb-3">
                <div tw="mr-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span tw="text-base">{phoneNumber}</span>
              </div>

              {/* Email */}
              <div tw="flex items-center mb-3">
                <div tw="mr-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span tw="text-base">{email}</span>
              </div>

              {/* Globe - Website */}
              <div tw="flex items-center mb-3">
                <div tw="mr-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <span tw="text-base">leotrapani.com</span>
              </div>

              {/* Calendar - Age */}
              <div tw="flex items-center">
                <div tw="mr-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                </div>
                <span tw="text-base">19 years old</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shark logo */}
        <div
          tw="absolute flex"
          style={{
            bottom: 16,
            right: 16,
          }}
        >
          <img
            src="https://leotrapani.com/images/shark-logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Roboto",
          data: robotoMedium,
          weight: 500,
        },
      ],
    }
  );
}
