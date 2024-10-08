<template>
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
  </form>
</template>

<script setup>
import { PaperClipIcon } from "@heroicons/vue/20/solid";

</script>

<style scoped>
</style>