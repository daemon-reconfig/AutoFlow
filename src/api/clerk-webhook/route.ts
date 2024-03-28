import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        const body = await req.json();
        const {id, email_address, first_name, image_url } =body?.data
        const email = email_address[0]?.email_address
        console.log(email)
        await db.user.upsert({
            where: {clerkId: id},
            update: {
                email,
                firstName: first_name,
                profileImage: image_url
            },
            create: {
                clerkId: id,
                email,
                firstName: first_name || '',
                profileImage: image_url || '',
            },
        })
        return new NextResponse('User updated successfully', {status: 200})
    } catch (error) {
        console.error(error)
        return new NextResponse('An error occurred', {status: 500})
    }
}