import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Auth = () => {
  const [searchParams] = useSearchParams();
  const createNew = searchParams.get("createNew");

  return (
    <div className="mt-36 flex flex-col items-center gap-10">
      <h1 className="text-xl font-extrabold">
        {createNew ? "Hold Up! Let's login first!" : "Login/SignUp"}
      </h1>
      <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

    </div>
  );
};

export default Auth;
