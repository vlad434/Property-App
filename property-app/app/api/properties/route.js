import connectDB from "@/config/database";

export const GET = async (request) => {
  try {
    await connectDB();

    return new Response(JSON.stringify({ message: "hello world" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
