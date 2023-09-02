"use server";

export const sendDiscordMessage = async (message: string) =>{
    try{
        const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: message
            })
        });
        const data = await response.json();
        console.log(data);
    }catch(err:any){
        console.log(err);
    }
}