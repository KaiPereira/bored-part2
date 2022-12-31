import Head from 'next/head'
import Image from 'next/image'
import React from "react"
import { Configuration, OpenAIApi } from "openai";
const config = new Configuration({ apiKey: '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' });
const openai = new OpenAIApi(config);

export default function Home() {
  const [input, changeInput] = React.useState()
  const [content, changeContent] = React.useState()

  function changeINput(e) {
    changeInput(e.target.value)
  }

  const prompt = `
    ${input}:
    `;

    const generate = async (prompt) => {
        
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 1443
        });

        changeContent(completion.data.choices[0].text)
    }

  return (
    <>
      <input type="text" onChange={changeINput} />
      <button onClick={() => generate(prompt)}>Test</button>
      {content}
    </>
  )
}
