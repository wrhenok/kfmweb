<template>
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 pr-6 pb-4">
            <div class="flex p-3 h-16 shrink-0 items-center">
                <h3 class="m-2">GenerativeAI</h3>
                <img class="h-8 w-auto" src="../../assets/logo/logo.png" alt="Your Company" />
            </div>
            <nav class="flex flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                        <div @click="addChat"
                            class="text-gray-700 cursor-pointer hover:text-gray-600 hover:bg-indigo-300 group -mx-2 space-y-1 flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                            ➕ new Chat
                        </div>
                    </li>
                    <li>
                        <ul role="list" class="-mx-2 space-y-1">
                            <li v-for="item in chatSession" :key="item.name" @click="selectChat(item)"
                                class="cursor-pointer">
                                <div class="text-xs font-semibold leading-6 text-gray-400">
                                    {{ item.nowTime }}
                                </div>
                                <div :class="[
                                    item.current
                                        ? 'bg-gray-50 text-indigo-600'
                                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                ]">
                                    {{ item.name }}
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="absolute bottom-0  w-4/5 bg-white">
                        <div
                            class="text-gray-700 w-full mb-3  cursor-pointer hover:text-gray-600 hover:bg-indigo-300 group -mx-2 space-y-1 flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                            <Cog6ToothIcon class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                aria-hidden="true" />
                            Settings
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script  setup >
import { ref } from "vue";
import { Cog6ToothIcon } from "@heroicons/vue/24/outline";

//对话
const chatSession = ref([
    { name: "Team", nowTime: "10月4日", chatHistory: [{}], current: false },
    { name: "Projects", nowTime: "10月8日", chatHistory: [{}], current: false },
]);

function addChat() {
    chatSession.value.unshift({
        name: "Team",
        nowTime: new Date().getMonth+1 + "月" + new Date().getDate + "日" ,
        chatHistory: [{}],
        current: false,
    });
};


</script>