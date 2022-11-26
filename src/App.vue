<script setup lang="ts">
import { ref } from 'vue'
import IconTrash from './components/icons/IconTrash.vue';

interface ITask {
  id: string
  name: string
}

const newTask = ref("")
const tasks = ref<ITask[]>([])

const addTask = () => {
  if (newTask.value.length <= 0) return alert("Preencha o campo!")

  const newObjTask = {
    id: String(Date.now()),
    name: newTask.value
  }

  tasks.value.push(newObjTask)

  console.log('newTask: ', newTask)

  newTask.value = ""
}

const deleteTask = (task: ITask) => {
  const idxTask = tasks.value.findIndex(obj => obj.id === task.id)

  if (idxTask < 0) return alert("Erro ao exluir a tarefa!")

  tasks.value.splice(idxTask, 1)
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
      <span>{{ task.name }}</span>

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
