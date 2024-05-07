import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { UtopiaHero } from "@/components/utopia-hero";


export const dynamic = "force-dynamic";



export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (

   
    <div>
       <UtopiaHero/>
    </div>
  );
}