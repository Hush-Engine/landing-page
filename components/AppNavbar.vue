<template>
  <nav class="bg-black p-4">
        <div class="container mx-auto flex items-center justify-between">
            <a class="text-white font-semibold text-lg">
              <NuxtLink to="/">
                Hush Engine
              </NuxtLink>
            </a>
            <div class="flex space-x-4">
                <a class="text-white">
                  Docs
                </a>
                <a class="text-white">
                  <NuxtLink to="/blog">Blog</NuxtLink>
                </a>
                <a class="text-white">
                  <NuxtLink to="/about">About</NuxtLink>
                </a>
            </div>
        </div>
    </nav>
</template>

<style>
</style>