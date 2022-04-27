import { Message } from "discord.js";

export function sendMessage(
  message: Message,
  replyContent: string,
  reply: boolean = false
) {
  const noticeTime = 2000;
  const responseTime = replyContent.length * 500 + noticeTime;

  setTimeout(() => {
    message.channel.sendTyping();
  }, noticeTime);

  setTimeout(() => {
    if (reply) {
      message.reply({ content: replyContent });
    } else {
      message.channel.send({ content: replyContent });
    }
  }, responseTime);
}
