<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
            leave-to="-translate-x-full">
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
                          <div
                            :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                            <component :is="item.icon"
                              :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
                              aria-hidden="true" />
                            {{ item.name }}
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                          <a :href="team.href"
                            :class="[team.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                            <span
                              :class="[team.current ? 'text-indigo-600 border-indigo-600' : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600', 'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white']">{{
                                team.initial }}</span>
                            <span class="truncate">{{ team.name }}</span>
                          </a>
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

    <!-- 侧边栏部分 -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <h3>开发喵AI（3IN1）</h3>
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
                <li v-for="item in chatSession" :key="item.name" @click="selectChat(item)" class="cursor-pointer">
                  <div class="text-xs font-semibold leading-6 text-gray-400">{{ item.nowTime }}</div>
                  <div
                    :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                    {{ item.name }}
                  </div>
                </li>
              </ul>
            </li>
            <!-- <li>
              <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <a :href="team.href"
                    :class="[team.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                    <span
                      :class="[team.current ? 'text-indigo-600 border-indigo-600' : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600', 'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white']">{{
                        team.initial }}</span>
                    <span class="truncate">{{ team.name }}</span>
                  </a>
                </li>
              </ul>
            </li> -->
            <li class="mt-auto">
              <div
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                <Cog6ToothIcon class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" aria-hidden="true" />
                Settings
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72 bottom-0 sticky ">
      <div
          class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <!-- Separator -->
        <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />
        <div class="flex justify-end flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div class="flex items-center gap-x-4 lg:gap-x-6 relative flex-0 ">
            <!-- 分割线 -->
            <!-- <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" /> -->
            <Menu as="div" class="relative ">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full bg-gray-50"
                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     alt="" />
                <span class="hidden lg:flex lg:items-center">
                  <span class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">Tom Cook</span>
                  <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </MenuButton>
              <transition enter-active-class="transition ease-out duration-100"
                          enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                          leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                          leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                    class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a :href="item.href"
                       :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">{{
                        item.name }}</a>
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
          <div class="w-full h-full">
            <div class="pb-1">
              <div class="flex flex-col items-center px-6 pb-10 pt-4">
                <div class="w-full pb-2">
                  <div class="human-message">
                    <p>What is a GenerativeAI?</p>
                  </div>
                </div>

                <div class="w-full pb-2 reply-message">
                  <div class="bot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                      <path
                        d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                        fill="#FFF" />
                    </svg>
                  </div>
                  <div class="bot-message">
                    <p>Use these Tailwind CSS sidebar layout examples to build interfaces where the primary navigation is positioned to the side. These layouts are designed and built by the Tailwind CSS team, and include a variety of different styles. All layouts are fully responsive and optimized for desktop, tablet, and mobile screen sizes. </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="pb-1">
              <div class="flex flex-col items-center px-6 pb-10 pt-4">
                <div class="w-full pb-2">
                  <div class="human-message">
                    <p>What is a GenerativeAI?</p>
                  </div>
                </div>

                <div class="w-full pb-2 reply-message">
                  <div class="bot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                      <path
                        d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                        fill="#FFF" />
                    </svg>
                  </div>
                  <div class="bot-message">
                    <p>
                      hello
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="pb-1">
              <div class="flex flex-col items-center px-6 pb-10 pt-4">
                <div class="w-full pb-2">
                  <div class="human-message">
                    <p>What is a GenerativeAI?</p>
                  </div>
                </div>

                <div class="w-full pb-2 reply-message">
                  <div class="bot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                      <path
                        d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                        fill="#FFF" />
                    </svg>
                  </div>
                  <div class="bot-message">
                    <p>
                      hello
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="pb-1">
              <div class="flex flex-col items-center px-6 pb-10 pt-4">
                <div class="w-full pb-2">
                  <div class="human-message">
                    <p>What is a GenerativeAI?</p>
                  </div>
                </div>

                <div class="w-full pb-2 reply-message">
                  <div class="bot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                      <path
                        d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                        fill="#FFF" />
                    </svg>
                  </div>
                  <div class="bot-message">
                    <p>
                      hello
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="pb-1">
              <div class="flex flex-col items-center px-6 pb-10 pt-4">
                <div class="w-full pb-2">
                  <div class="human-message">
                    <p>What is a GenerativeAI?</p>
                  </div>
                </div>

                <div class="w-full pb-2 reply-message">
                  <div class="bot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                      <path
                        d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                        fill="#FFF" />
                    </svg>
                  </div>
                  <div class="bot-message">
                    <p>
                      hello
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="pb-1">
              <div class="flex flex-col items-center px-6 pb-10 pt-4">
                <div class="w-full pb-2">
                  <div class="human-message">
                    <p>What is a GenerativeAI?</p>
                  </div>
                </div>

                <div class="w-full pb-2 reply-message">
                  <div class="bot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                      <path
                        d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                        fill="#FFF" />
                    </svg>
                  </div>
                  <div class="bot-message">
                    <p>
                      hello
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="pb-1">
              <div class="flex flex-col items-center px-6 pb-10 pt-4">
                <div class="w-full pb-2">
                  <div class="human-message">
                    <p>What is a GenerativeAI?</p>
                  </div>
                </div>

                <div class="w-full pb-2 reply-message">
                  <div class="bot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                      <path
                        d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                        fill="#FFF" />
                    </svg>
                  </div>
                  <div class="bot-message">
                    <p>
                      hello
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="pb-1">
              <div class="flex flex-col items-center px-6 pb-10 pt-4">
                <div class="w-full pb-2">
                  <div class="human-message">
                    <p>What is a GenerativeAI?</p>
                  </div>
                </div>

                <div class="w-full pb-2 reply-message">
                  <div class="bot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                      <path
                        d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                        fill="#FFF" />
                    </svg>
                  </div>
                  <div class="bot-message">
                    <p>
                      hello
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="pb-1">
              <div class="flex flex-col items-center px-6 pb-10 pt-4">
                <div class="w-full pb-2">
                  <div class="human-message">
                    <p>What is a GenerativeAI?</p>
                  </div>
                </div>

                <div class="w-full pb-2 reply-message">
                  <div class="bot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                      <path
                        d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                        fill="#FFF" />
                    </svg>
                  </div>
                  <div class="bot-message">
                    <p>
                      hello
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="pb-1">
              <div class="flex flex-col items-center px-6 pb-10 pt-4">
                <div class="w-full pb-2">
                  <div class="human-message">
                    <p>What is a GenerativeAI?</p>
                  </div>
                </div>

                <div class="w-full pb-2 reply-message">
                  <div class="bot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                      <path
                        d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                        fill="#FFF" />
                    </svg>
                  </div>
                  <div class="bot-message">
                    <p>
                      hello
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="pb-1">
              <div class="flex flex-col items-center px-6 pb-10 pt-4">
                <div class="w-full pb-2">
                  <div class="human-message">
                    <p>What is a GenerativeAI?</p>
                  </div>
                </div>

                <div class="w-full pb-2 reply-message">
                  <div class="bot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                      <path
                        d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                        fill="#FFF" />
                    </svg>
                  </div>
                  <div class="bot-message">
                    <p>
                      hello
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="pb-1">
              <div class="flex flex-col items-center px-6 pb-10 pt-4">
                <div class="w-full pb-2">
                  <div class="human-message">
                    <p>What is a GenerativeAI?</p>
                  </div>
                </div>

                <div class="w-full pb-2 reply-message">
                  <div class="bot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                      <path
                        d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                        fill="#FFF" />
                    </svg>
                  </div>
                  <div class="bot-message">
                    <p>
                      hello
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="pb-1">
              <div class="flex flex-col items-center px-6 pb-10 pt-4">
                <div class="w-full pb-2">
                  <div class="human-message">
                    <p>What is a GenerativeAI?</p>
                  </div>
                </div>

                <div class="w-full pb-2 reply-message">
                  <div class="bot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                      <path
                        d="M147-376q-45 0-76-31.208Q40-438.417 40-483t31.208-75.792Q102.417-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587-817.583 587-773h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.235-100Q360-476 371.5-487.735q11.5-11.736 11.5-28.5Q383-533 371.265-544.5q-11.736-11.5-28.5-11.5Q326-556 314.5-544.265q-11.5 11.736-11.5 28.5Q303-499 314.735-487.5q11.736 11.5 28.5 11.5Zm274 0Q634-476 645.5-487.735q11.5-11.736 11.5-28.5Q657-533 645.265-544.5q-11.736-11.5-28.5-11.5Q600-556 588.5-544.265q-11.5 11.736-11.5 28.5Q577-499 588.735-487.5q11.736 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm0 0v-533 533Z"
                        fill="#FFF" />
                    </svg>
                  </div>
                  <div class="bot-message">
                    <p>
                      hello
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>

        <footer class="bottom-0 sticky">
          <div class="input-container">
            <textarea class="input-message" dir="auto" rows="1" placeholder="Write your message..."></textarea>
            <button class="send-button">Send</button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import topicFoot from '../components/topic/topic-foot.vue'
import Chat from '../components/topic/chat.vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3Icon,
  Cog6ToothIcon,
  HomeIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

//对话
const chatSession = [
  { name: 'Team', nowTime: "昨天", chatHistory: [{}], current: false },
  { name: 'Projects', nowTime: "今天", chatHistory: [{}], current: false },
]

const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

const sidebarOpen = ref(false)

const addChat = () => {
  console.log('addChat')
  chatSession.push({ name: 'Team', nowTime: "昨天", chatHistory: [{}], current: false })
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
  margin-top: auto;
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
  background-color: #fff;
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
