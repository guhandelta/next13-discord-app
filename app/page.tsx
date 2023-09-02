import { sendDiscordMessage } from "./_actions/discord"



const Page = async () => {
  await sendDiscordMessage("Hello World")

  return null
}

export default Page