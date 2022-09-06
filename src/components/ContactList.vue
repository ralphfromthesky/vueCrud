<template>
<Header/>

  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">facility_number</th>
          <th scope="col">facility</th>
          <th scope="col">address1</th>
          <th scope="col">address2</th>
          <th scope="col">city</th>
          <th scope="col">state</th>
          <th scope="col">phone1</th>
          <th scope="col">phone2</th>
          <th scope="col">fax</th>
          <th scope="col">web_url</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-for="contact in contacts" :key="contact.id">
        <tr class="table-secondary">
          <th scope="row">{{ contact.id }}</th>
          <th scope="row">{{ contact.facility_number }}</th>
          <th scope="row">{{ contact.facility }}</th>
          <th scope="row">{{ contact.address1 }}</th>
          <th scope="row">{{ contact.address2 }}</th>
          <th scope="row">{{ contact.city }}</th>
          <th scope="row">{{ contact.state }}</th>
          <th scope="row">{{ contact.phone1 }}</th>
          <th scope="row">{{ contact.phone2 }}</th>
          <th scope="row">{{ contact.fax }}</th>
          <th scope="row">{{ contact.web_url }}</th>
          <th scope="row">
            <router-link
              :to="{
                name: 'EditContact',
                params: { id: contact.id },
              }"
              ><i class="bx bx-edit"></i
            ></router-link>

            <i
              @click.prevent="deleteContact(contact.id)"
              class="bx bxs-trash"
            ></i>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Header from '../components/Header.vue'

export default {
  name: "ContactList",
  components: {Header},
  data() {
    return {
      contacts: Array,
    };
  },
  created() {
    this.getContacts();
  },
  methods: {
    async getContacts() {
      let url = "http://127.0.0.1:8000/api/contacts";
      await axios
        .get(url)
        .then((response) => {
          this.contacts = response.data.contacts;
          console.log(this.contacts);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async deleteContact(id) {
      let url = `http://127.0.0.1:8000/api/delete_contact/${id}`;
      await axios
        .delete(url)
        .then((response) => {
          if (response.data.code == 200) {
            alert(response.data.message);
            this.getContacts();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    console.log("contact list component mounted");
  },
};
</script>

<style>
i:hover {
  transform: translateY(-20px);
  box-shadow: 20px 20px 32px #bebebe, -20px -20px 32px #ffffff;
}
i {
  font-size: 3rem;
  color: black;
  margin-right: 10px;
  transition: 0.6s;
}
</style>
