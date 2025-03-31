<script>
</script>

<template>
  <div class="projects">
    <GithubProject name="Ishtar" href="https://github.com/cyccro/ishtar"
      description="A simple Tui based text editor made primarly for studies" />
    <GithubProject name="Sophie" href="https://github.com/cyccro/sophie"
      description="A mini 3D library written on top of Wgpu and SDL2" />
    <GithubProject name="Promisrs" href="https://github.com/cykna/promisrs"
      description="Basic promise-like concurrency implementation in rust" />
  </div>
</template>

<style>
.projects {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
}
</style>
