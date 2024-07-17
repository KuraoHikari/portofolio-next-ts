import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: NextRequest, response: NextResponse) {
  //get all request
  const req = await request.json();
  const { firstname, lastname, email, phone, message } = req;
  console.log(
    "🚀 ~ file: route.ts:7 ~ irstname, lastname, email, phone, message:",
    firstname,
    lastname,
    email,
    phone,
    message
  );
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });

  const sheets = google.sheets({
    auth,
    version: "v4",
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "Sheet1!A2:C",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[firstname, lastname, email, phone, message]],
    },
  });
  return NextResponse.json({ message: "success" });
}
