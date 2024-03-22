export function concatWithLastMessage(messages: string[], text: string) {
  const texts = structuredClone(messages);
  const lastMsgIdx = texts.length - 1;
  texts[lastMsgIdx] = `${texts[lastMsgIdx]}\n${text}`;
  return texts;
}
