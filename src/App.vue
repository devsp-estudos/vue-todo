<script setup lang="ts">
import { ref } from 'vue'

const newTask = ref("")
const tasks = ref([
  {
    id: "1",
    name: "primeira tarefa"
  }
])

const addTask = () => {
  if (newTask.value.length <= 0) return alert("Preencha o campo!")

  const newObjTask = {
    id: String(Date.now()),
    name: newTask.value
  }

  tasks.value.push(newObjTask)

  newTask.value = ""
}
</script>

<template>
  <h1>Todo List</h1>

  <div class="container-new-task">
    <input placeholder="Nova tarefa:" v-model="newTask">
    <button @click="addTask">Adicionar</button>
  </div>

  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.name }}
    </li>
  </ul>
</template>

<style scoped>
h1 {
  text-align: center;
}

.container-new-task {
  width: 100%;
  display: flex;
  gap: 16px;
}

.container-new-task input {
  flex-grow: 1;
}
</style>
