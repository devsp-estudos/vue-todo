import { createStore } from "vuex"
import type { IStore } from "@/types/store"

export const appStore = createStore({
  state() {
    const store: IStore = {
      tasks: [],
    }
    return store
  },

  mutations: {
    addTask(state, taskName: string) {
      const newObjTask = {
        id: String(Date.now()),
        name: taskName
      }

      state.tasks.push(newObjTask)
    },

    deleteTask(state, idxTask: number) {
      state.tasks.splice(idxTask, 1)

    },
  }
})
