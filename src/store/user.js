import { defineStore } from "pinia";
import { api } from "@/api/axios";


export const useUserStore = defineStore("userStore", {

  state: () => ({

    name: "",
    id: null,
    email: "",

  }),


  getters: {

    getUserName: (state) =>
      state.name,


    placeholder: (state) => {
      return `what's good, ${state.name}?`;
    }

  },


  actions: {


    async login(email, password) {


      const response =
        await api.post(
          "/users/login",
          {
            email,
            password,
          }
        );


      const user =
        response.data;


      localStorage.setItem(
        "access_token",
        user.access_token
      );


      localStorage.setItem(
        "user",
        JSON.stringify({
          id:user.id,
          name:user.name,
          email:user.email,
        })
      );


      this.setUser(user);


      return user;

    },


    logout() {

      localStorage.removeItem(
        "access_token"
      );


      localStorage.removeItem(
        "user"
      );


      this.name = "";

      this.id = null;

      this.email = "";

    },


    setUser(user) {

      this.name = user.name;

      this.id = user.id;

      this.email = user.email;

    },


  },


});