<template>
    <div>
        <chatSidebarHiddle />
        <!-- 侧边栏部分 -->
        <chatSidebar />
        <!-- 分割线 -->
        <!-- <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" /> -->
        <div class="lg:pl-72 bottom-0 sticky">
            
            <chatHeader />
            <chatMain />
            <!-- <div class="container">
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
                <footer class=" bottom-0 sticky bg-white">
                    <chatFooter />
                </footer>
            </div> -->
        </div>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import chatMain from "../components/chat/chat-main.vue";
import chatFooter from "../components/chat/chat-footer.vue"
import chatHeader from "../components/chat/chat-header.vue";
import chatSidebar from "../components/chat/chat-sidebar.vue";
import chatSidebarHiddle from "../components/chat/chat-sidebar-hiddle.vue";

const sidebarOpen = ref(false)

provide("sidebarOpen", sidebarOpen);

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
