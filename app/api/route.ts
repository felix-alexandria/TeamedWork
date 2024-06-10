import { NextRequest, NextResponse } from "next/server";
import { dbConfig } from "../utils/dbConfig";
import bcrypt from "bcryptjs";
import users from "../model/userModel";

export const GET = async (
  req: NextRequest,
  res: NextResponse
): Promise<Response> => {
  try {
    await dbConfig();

    const getData = await users.find();

    return NextResponse.json({
      message: "creating Agent successful",
      status: 201,
      data: getData,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error creating Agent",
      status: 404,
    });
  }
};
export const POST = async (
  req: NextRequest,
  res: NextResponse
): Promise<Response> => {
  try {
    await dbConfig();

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const { name, email, password, homeAddress, telephoneNo } = await req.json;

    const getData = await users.create({
      name,
      email,
      password,
      homeAddress,
      telephoneNo,
    });

    return NextResponse.json({
      message: "creating Agent successful",
      status: 201,
      data: getData,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error creating Agent",
      status: 404,
    });
  }
};
