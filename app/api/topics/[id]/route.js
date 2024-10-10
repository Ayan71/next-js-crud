import { NextResponse } from "next/server";
import dbConnect from "../../../libs/mongodb";
import Topic from "../../../models/topic";

export async function PUT (request,{params}){
    const {id}=params;
    const{newTitle:title,newDescription:description}=await request.json();
    await dbConnect();
    await Topic.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({message:"topic update"},{status:200})
}