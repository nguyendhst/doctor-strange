import { defineConfig } from "cypress";
const { createClient } = require("@supabase/supabase-js");
// import * as dotenv from "dotenv";
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("dotenv").config({ path: ".env.local" });

      on("task", {
        async creatNewAccount({ email, password }) {
          const supabase = await createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
          );
          const { data: user, error } = await supabase.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
          });
          if (error) {
            console.log("loi cmnr");
            throw error;
          }
          return user;
        },
      });
    },
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
