const { createClient } = require("@supabase/supabase-js");
export const findUser = async (email: string) => {
  const supabase = await createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
  const {
    data: { users },
  } = await supabase.auth.admin.listUsers();
  if (!users) {
    console.log("error occured");
  }
  for (const user of users) {
    const temp = await user.email;
    if (email === temp) {
      console.log("found it");
      return true;
    }
  }
  return false;
};
