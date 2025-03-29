"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
    const user = await currentUser();

    if (!user) throw new Error("user is not logged in ");
    if (!apiKey) throw new Error("No api key");
    if (!apiSecret) throw new Error("No api secret");

    const client = new StreamClient(apiKey, apiSecret);

    const token = client.generateUserToken({user_id: user.id})
    return token; 
}