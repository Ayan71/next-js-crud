import dbConnect from "../../libs/mongodb";
import { NextResponse } from "next/server";
import Topic from "../../models/topic";

export async function POST(request) {
  const { title, discription } = await request.json();
  await dbConnect();
  await Topic.create({ title, discription });
  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}

export async function GET() {
  await dbConnect();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(req){
  const id=req.nextUrl.searchParams.get("id");
  await dbConnect();
  await Topic.findByIdAndDelete(id)
  return NextResponse.json({message:"topic delete"},{status:200})
}


