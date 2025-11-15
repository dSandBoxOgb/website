// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     // const supabase = await createClient();

//     const body = await request.json();
//     const { name, email } = body;

//     if (!name || !email)
//       return NextResponse.json(
//         { error: "Email and Name are required" },
//         { status: 400 }
//       );

//     return NextResponse.json("", { status: 201 });
//   } catch () {
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
