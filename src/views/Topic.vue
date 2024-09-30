<template>
    <div class="bg-indigo-600 dark:bg-blue-800 sm:rounded-lg transition-colors duration-500">
        <div class="bg-white sm:rounded-lg  sm:mt-10 px-4 sm:p-6">
            <h3 class="text-base font-semibold leading-6 text-gray-900">开发喵AI 3IN1</h3>
            <div class="mx-auto max-w-7xl  lg:flex lg:gap-x-16 lg:px-8">
                <aside class="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
                    <nav class="flex-none px-4 sm:px-6 lg:px-0">
                        <ul role="list" class="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
                            <li class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold">➕ New Chat</li>
                            <li v-for="item in chatBox" :key="item.name">
                                <div
                                    :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold']">
                                    <component :is="item.icon"
                                        :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
                                        aria-hidden="true" />
                                    {{ item.name }}
                                </div>
                            </li>
                            
                        </ul>
                        
                    </nav>
                </aside>
                <main class="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                    <div>
                        chat
                    </div>
                    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-10 lg:max-w-4xl">
                        <topicFoot />
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import topicFoot from '../components/topic/topic-foot.vue';
import {
    BellIcon,
    CreditCardIcon,
    CubeIcon,
    FingerPrintIcon,
    UserCircleIcon,
    UsersIcon,
} from '@heroicons/vue/24/outline'
const chatBox = [
    { name: 'chat1', href: '#', icon: UserCircleIcon, current: true },
    { name: 'chat2', href: '#', icon: FingerPrintIcon, current: false },
]
// the app height
const height = ref(`${window.innerHeight}px`);

// change the app height to the window hight.
const resizeWindow = () => {
    height.value = `${window.innerHeight}px`;
};

// and add the resize event when the component mounts.
onMounted(() => {
    window.addEventListener("resize", resizeWindow);
});

// remove the event when un-mounting the component.
onUnmounted(() => {
    window.removeEventListener("resize", resizeWindow);
});
const newChat = ref([])
</script>