<template>
  <div class="container">
    <div class="header">
      <div class="header-content">
        <div class="header-logo"></div>
        <div class="header-text">
          <h1>GenerativeAI</h1>
          <div class="badge">
            <span class="pill">AI</span>
            <span class="text">Bot</span>
          </div>
        </div>
      </div>
    </div>
    <main>
      <div class="w-full h-full">
        <div class="pb-1">
          <div class="flex flex-col items-center px-6 pb-10 pt-4" v-for="item in chat.messages">
            <div class="flex flex-row-reverse w-full pb-2">
              <div
                class="text-blue-600 border-blue-600 flex h-10 w-10 ml-4 items-center justify-center rounded-lg text-[1rem] bg-blue-100">
                {{ chat.username.charAt(0) }}
              </div>
              <div class="human-message">
                <p> {{ item.question }}</p>
              </div>
            </div>
            <div class="w-full pb-2 flex">
              <div class="flex mr-4 h-10 w-10 items-center justify-center rounded-lg bg-neutral-500">
                <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                  <path
                    d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                    fill="#FFF" />
                </svg>
              </div>
              <div class="w-fit max-w-[75%] p-4 bg-[#f2f2f2] text-[#737373] rounded-md text-sm font-normal leading-5">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class=" bottom-0 sticky bg-white">
      
      <form class="relative">
        <div class="flex overflow-hidden rounded-full shadow-2xl">
          <div class=" inset-y-0 left-0 flex items-center m-3 pl-3">
            <div class="grew items-center">
              <button type="button"
                class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                <PaperClipIcon class="h-5 w-5" aria-hidden="true" />
                <span class="sr-only">Attach a file</span>
              </button>
            </div>
          </div>

          <div class="grew w-full items-center">
            <label for="comment" class="sr-only">Add your comment</label>
            <textarea rows="2" name="comment" id="comment" v-model="sendMessage.question"
              class="block w-full resize-none border-0 bg-transparent m-1 px-3 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Add your comment..." />
          </div>

          <div class="flex-none w-10 h-10 m-3">
            <button @click="send"
              class="inline-flex items-center rounded-full bg-blue-600 p-2 text-sm text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
          </div>
        </div>
      </form>
    </footer>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { PaperClipIcon } from "@heroicons/vue/20/solid";

const chat = reactive({
  username: "kaifamiao",
  list: 1,
  messages: [{
    question: "What is a GenerativeAI?",
    answer: "Use these Tailwind CSS sidebar layout examples to build interfaces where the primary navigation is positioned to the side. These layouts are designed and built by the Tailwind CSS team, and include variety of different styles. All layouts are fullyresponsive and optimized for desktop, tablet, and mobile screen sizes.",
  }, {
    question: "Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:grow-0 to only apply the grow-0 utility on hover?",
    answer: "Use these Tailwind CSS sidebar layout examples to build interfaces where the primary navigation is positioned to the side. These layouts are designed and built by the Tailwind CSS team, and include variety of different styles. All layouts are fullyresponsive and optimized for desktop, tablet, and mobile screen sizes.",
  }, {
    question: "What is a GenerativeAI?",
    answer: "Use these Tailwind CSS sidebar layout examples to build interfaces"
  }
  ],



});

const sendMessage = ref({
  question: "",
  answer: "你好👋，有什么我可以帮你～",
  selectModel: "",
  selectPrompt: "",
  selectKB: "",
})

function send () {
  console.log("send");
  
  chat.messages.push({
    question: sendMessage.value.question,
    answer: sendMessage.value.answer
  })
  
  console.log("chat",chat);
  sendMessage.value.question = ""
  
}
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.header {
  padding: 0.5rem 1.5rem;
  background: #fff;
  border-bottom: 1px solid #0000001a;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header-logo {
  width: 2rem;
  height: 2rem;
  background: #0057ff;
  border-radius: 5px;
}

.header-text {
  display: flex;
  flex-direction: column;
  align-items: start;
  line-height: 1;
}

.header-text h1 {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5rem;
}

.header-text .badge {
  display: flex;
  align-items: center;
  gap: 3px;
}

.header-text .badge .pill {
  background-color: rgb(115, 115, 115);
  color: #fff;
  font-size: 9px;
  font-weight: 600;
  padding: 3px 3.5px;
  border-radius: 3px;
}

.header-text .badge .text {
  color: rgb(115, 115, 115);
  line-height: 1.25rem;
  font-size: 0.875rem;
  font-weight: 400;
}

main {
  flex-grow: 1;
  flex-shrink: 0;
  overflow: auto;
  width: 100%;
  height: auto;
  flex: 1 1 0%;
}

footer {
  padding: 0.75rem 0.5rem;
  border-top: 1px solid #0000001a;
}

.human-message {
  max-width: 75%;
  float: right;
  padding: 1rem 1.25rem;
  background-color: #0057ff;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
}

.reply-message {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.bot-message {
  width: fit-content;
  max-width: 75%;
  padding: 1rem 1.25rem;
  background-color: #f2f2f2;
  color: rgb(115, 115, 115);
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
}

.bot-icon {
  width: 2.5rem;
  height: 2.5rem;
  background-color: gray;
  border-radius: 10px;
  flex-shrink: 0;
  /* margin-top: auto; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-message {
  width: 100%;
  max-height: 72px;
  overflow: auto;
  overflow-wrap: break-word;
  resize: none;
  height: 50px;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-style: none;
  background-color: #f2f2f2;
  border-radius: 100px;
  padding-left: 1rem;
  padding-top: 10px;
  color: rgb(115, 115, 115);
}

/* Bot Icon */
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}

.input-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px;
}

.input-message {
  flex: 1;
  border: none;
  outline: none;
  resize: none;
  padding: 8px;
  font-size: 16px;
}

.send-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 8px;
}

.send-button:hover {
  background-color: #0056b3;
}
</style>