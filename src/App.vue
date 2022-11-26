<script setup lang="ts">
import { ref } from "vue"
import { useStore } from "vuex"
import IconTrash from "./components/icons/IconTrash.vue"
import type { ITask } from "@/types/task"
import type { IStore } from "@/types/store"

const store = useStore<IStore>()
const newTask = ref("")

const addTask = () => {
  if (newTask.value.length <= 0) return alert("Preencha o campo!")

  store.commit("addTask", newTask.value)

  newTask.value = ""
}

const deleteTask = (task: ITask) => {
  const idxTask = store.state.tasks.findIndex(obj => obj.id === task.id)

  if (idxTask < 0) return alert("Erro ao exluir a tarefa!")

  store.commit("deleteTask", idxTask)
}
</script>

<template>
  <h1>Todo List</h1>

  <div class="container-new-task">
    <input placeholder="Nova tarefa:" v-model="newTask">
    <button @click="addTask">Adicionar</button>
  </div>

  <ul>
    <li v-for="(task, idx) in store.state.tasks" :key="task.id">
      <span>{{ idx + 1 }}) {{ task.name }}</span>

      <button @click="deleteTask(task)">
        <IconTrash />
      </button>
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
  margin-bottom: 32px;
}

.container-new-task input {
  flex-grow: 1;
}

.container-new-task button {
  background-color: buttonface;
  border-radius: 4px;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style-type: none;
  padding: 0;
}

li {
  padding: 16px 24px;
  border-radius: 10px;
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

li span {
  font-size: 20px;
}
</style>
