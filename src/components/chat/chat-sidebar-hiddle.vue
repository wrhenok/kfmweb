<template>
  <TransitionRoot as="template" :show="sidebarOpen">
    <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
      <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
        enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-900/80" />
      </TransitionChild>

      <div class="fixed inset-0 flex">
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0" leave-to="-translate-x-full">
          <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
              enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
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

                  <li class="mt-auto">
                    <a href="#"
                      class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                      <Cog6ToothIcon class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
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
</template>

<script setup>
import { ref, inject,onUpdated } from "vue";
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import {
    Cog6ToothIcon,
    HomeIcon,
    XMarkIcon,
} from "@heroicons/vue/24/outline";
//对话
const chatSession = ref([
    { name: "Team", nowTime: "昨天", chatHistory: [{}], current: false },
    { name: "Projects", nowTime: "今天", chatHistory: [{}], current: false },
]);
// const props = defineProps({
//     sidebarOpen: Boolean,
// });

onUpdated(() => {
    console.log("sidebarOpen", sidebarOpen)
})

const sidebarOpen = inject("sidebarOpen")
</script>
