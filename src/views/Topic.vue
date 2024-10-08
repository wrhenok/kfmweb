<template>
    <div>
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-900/80" />
                </TransitionChild>

                <div class="fixed inset-0 flex">
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                        enter-from="-translate-x-full" enter-to="translate-x-0"
                        leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                        leave-to="-translate-x-full">
                        <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                                leave-to="opacity-0">
                                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                                    <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                                        <span class="sr-only">Close sidebar</span>
                                        <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </TransitionChild>
                            <!-- 折叠区域 -->
                            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                                <div class="flex h-16 shrink-0 items-center">
                                    开发喵AI（3IN1）
                                    <HomeIcon class="h-6 w-6 text-black" aria-hidden="true" />
                                </div>
                                <nav class="flex flex-1 flex-col">
                                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" class="-mx-2 space-y-1">
                                                <li v-for="item in chatSession" :key="item.name">
                                                    <div :class="[
                                                        item.current
                                                            ? 'bg-gray-50 text-indigo-600'
                                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                                    ]">
                                                        <component :is="item.icon" :class="[
                                                            item.current
                                                                ? 'text-indigo-600'
                                                                : 'text-gray-400 group-hover:text-indigo-600',
                                                            'h-6 w-6 shrink-0',
                                                        ]" aria-hidden="true" />
                                                        {{ item.name }}
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="text-xs font-semibold leading-6 text-gray-400">
                                                Your teams
                                            </div>
                                            <ul role="list" class="-mx-2 mt-2 space-y-1">
                                                <li v-for="team in teams" :key="team.name">
                                                    <a :href="team.href" :class="[
                                                        team.current
                                                            ? 'bg-gray-50 text-indigo-600'
                                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                                    ]">
                                                        <span :class="[
                                                            team.current
                                                                ? 'text-indigo-600 border-indigo-600'
                                                                : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                                            'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white',
                                                        ]">{{ team.initial }}</span>
                                                        <span class="truncate">{{ team.name }}</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="mt-auto">
                                            <a href="#"
                                                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                                                <Cog6ToothIcon
                                                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                                    aria-hidden="true" />
                                                Settings
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- 侧边栏部分 -->
        <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 pr-6 pb-4">
                <div class="flex h-16 shrink-0 items-center">
                    <h3>开发喵AI）</h3>
                    <img class="h-8 w-auto" src="../assets/logo/logo.png" alt="Your Company" />
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

        <div class="lg:pl-72 bottom-0 sticky">
            <div
                class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
                    <span class="sr-only">Open sidebar</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
                <!-- Separator -->
                <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />
                <div class="flex justify-end flex-1 gap-x-4 self-stretch lg:gap-x-6">
                    <div class="flex items-center gap-x-4 lg:gap-x-6 relative flex-0">
                        <!-- 分割线 -->
                        <!-- <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" /> -->
                        <Menu as="div" class="relative">
                            <MenuButton class="-m-1.5 flex items-center p-1.5">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full bg-gray-50"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" />
                                <span class="hidden lg:flex lg:items-center">
                                    <span class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                                        aria-hidden="true">Tom Cook</span>
                                    <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </MenuButton>
                            <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                                <MenuItems
                                    class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                    <a :href="item.href" :class="[
                                        active ? 'bg-gray-50' : '',
                                        'block px-3 py-1 text-sm leading-6 text-gray-900',
                                    ]">{{ item.name }}</a>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </div>

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
                    <chatMain></chatMain>
                </main>

                <footer class="bottom-0 sticky bg-white">
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
                                <textarea rows="2" name="comment" id="comment"
                                    class="block w-full resize-none border-0 bg-transparent m-1 px-3 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    placeholder="Add your comment..." />
                            </div>

                            <div class="flex-none w-10 h-10 m-3">
                                <button type="submit"
                                    class="inline-flex items-center rounded-full bg-blue-600 p-2 text-sm text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
                            </div>

                        </div>
                        <!-- <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 px-2">
                            <div class="grew items-center">
                                <button type="button"
                                    class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                                    <PaperClipIcon class="h-5 w-5" aria-hidden="true" />
                                    <span class="sr-only">Attach a file</span>
                                </button>
                            </div>
                            <div class="flex-none w-10 h-10 mr-3">
                                <button type="submit"
                                    class="inline-flex items-center rounded-full bg-blue-600 p-2 text-sm text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
                            </div>
                        </div> -->
                    </form>
                </footer>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import {
    Bars3Icon,
    Cog6ToothIcon,
    HomeIcon,
    XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon, PaperClipIcon } from "@heroicons/vue/20/solid";
import chatMain from "../components/topic/chat-main.vue";
//对话
const chatSession = ref([
    { name: "Team", nowTime: "昨天", chatHistory: [{}], current: false },
    { name: "Projects", nowTime: "今天", chatHistory: [{}], current: false },
]);


const userNavigation = [
    { name: "Your profile", href: "#" },
    { name: "Sign out", href: "#" },
];

const sidebarOpen = ref(false);

function addChat() {
    console.log("addChat");

    chatSession.value.unshift({
        name: "Team",
        nowTime: "昨天",
        chatHistory: [{}],
        current: false,
    });
};


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
