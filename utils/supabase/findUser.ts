const { createClient } = require("@supabase/supabase-js");
export const findUser = async (email: string) => {
  const supabase = await createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
  );
  const {
    data: { users },
  } = await supabase.auth.admin.listUsers();
  if (!users) {
    console.log("error occured");
  }
  // console.log("list users: ", users);
  for (const user of users) {
    const temp = await user.email;
    console.log(user.email);
    if (email === temp) {
      console.log("found it");
      return true;
    }
  }
  return false;
};
