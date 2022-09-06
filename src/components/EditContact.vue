<template>
<Header/>
  <div class="container">
    <div class="col-md-6">
      <div class="alert alert-danger mt-2" v-if="errors.length">
        <ul class="mb-0">
          <li v-for="(error, index) in errors" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>

      <form @submit.prevent="updateContact" novalidate>
        <fieldset>
          <div class="form-group">
            <label class="form-label mt-2">facility_number</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.facility_number"
              placeholder="name here"
            />
          </div>

          <div class="form-group">
            <label class="form-label mt-2">facility</label>
            <input
              type="email"
              class="form-control"
              v-model="contact.facility"
              placeholder="enter mail here"
            />
          </div>

          <div class="form-group">
            <label class="form-label mt-2">address1</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.address1"
              placeholder="enter designation"
            />
          </div>

          <div class="form-group">
            <label class="form-label mt-2">address2</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.address2"
              placeholder="enter contact no. here"
            />
          </div>

          <div class="form-group">
            <label class="form-label mt-2">city</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.city"
              placeholder="enter contact no. here"
            />
          </div>

          <div class="form-group">
            <label class="form-label mt-2">phone1</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.phone1"
              placeholder="enter contact no. here"
            />
          </div>

          <div class="form-group">
            <label class="form-label mt-2">phone2</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.phone2"
              placeholder="enter contact no. here"
            />
          </div>

          <div class="form-group">
            <label class="form-label mt-2">fax</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.fax"
              placeholder="enter contact no. here"
            />
          </div>

          <div class="form-group">
            <label class="form-label mt-2">web_url</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.web_url"
              placeholder="enter contact no. here"
            />
          </div>

          <button class="btn btn-danger mt-4">Submit</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "EditContact",
  components: {Header},
  data() {
    return {
      contact: {},
      facility_number: "",
      facility: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      phone1: "",
      phone2: "",
      fax: "",
      web_url: "",
      errors: [],
    };
  },
  created() {
    this.getContactById();
  },
  methods: {
    async getContactById() {
      let url = `http://127.0.0.1:8000/api/get_contact/${this.$route.params.id}`;
      await axios.get(url).then((response) => {
        console.log(response);
        this.contact = response.data;
      });
    },

    async updateContact() {
      this.errors = [];
     
     if (!this.contact.facility_number) {
        this.errors.push("Name is required");
      }

      if (!this.contact.facility) {
        this.errors.push("email is required");
      }

      if (!this.contact.address1) {
        this.errors.push("designation is required");
      }

      if (!this.contact.address2) {
        this.errors.push("contact no. is required");
      }
        if (!this.contact.city) {
        this.errors.push("contact no. is required");
      }
        if (!this.contact.state) {
        this.errors.push("contact no. is required");
      }
        if (!this.contact.phone1) {
        this.errors.push("contact no. is required");
      }
        if (!this.contact.phone2) {
        this.errors.push("contact no. is required");
      }
        if (!this.contact.fax) {
        this.errors.push("contact no. is required");
      }  if (!this.contact.web_url) {
        this.errors.push("contact no. is required");
      }

      if (!this.errors.length) {
        let formData = new FormData();
        formData.append("facility_number", this.contact.facility_number);
        formData.append("facility", this.contact.facility);
        formData.append("address1", this.contact.address1);
        formData.append("address2", this.contact.address2);
        formData.append("city", this.contact.city);
        formData.append("state", this.contact.state);
        formData.append("phone1", this.contact.phone1);
        formData.append("phone2", this.contact.phone2);
        formData.append("fax", this.contact.fax);
        formData.append("web_url", this.contact.web_url);


        let url = `http://127.0.0.1:8000/api/update_contact/${this.$route.params.id}`;
        await axios.post(url, formData).then((response) => {
            console.log(response);
            if (response.status == 200) {
             
              alert(response.data.message);
            } else {
              console.log("error");
            }
          })
          .catch((error) => {
            this.errors.push(error.response);
          });
      }
    },

  },

  mounted: function () {
    console.log("Edit Component from Component Loaded....");
  },
};
</script>
