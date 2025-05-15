import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      await signOut();
      navigate("/");
    } catch (err) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    }
  };
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center p-10 bg-black text-white rounded-md text-lg">
      <div className="bg-gray-800 p-6 shadow-md text-white h-110">
        <Tabs defaultValue="information" className="w-[400px] ">
          <TabsList className="grid w-full grid-cols-2 bg-gray-200 h-10 rounded p-1.5 ">
            <TabsTrigger
              className="bg-gray-200 data-[state=active]:bg-white"
              value="information"
            >
              <h1 className="">Information</h1>
            </TabsTrigger>
            <TabsTrigger
              className="bg-gray-200 data-[state=active]:bg-white"
              value="password"
            >
              <h1>Password</h1>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="information">
            <Card className="h-70">
              <CardHeader>
                <CardTitle>Information</CardTitle>
                <CardDescription>
                  Make changes to your Personal Information here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="fullname"
                    defaultValue=""
                    placeholder="Enter your Full Name"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    defaultValue=""
                    placeholder="Enter your user"
                  />
                </div>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card className="h-70">
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        <button className="w-full mt-4 bg-green-600 text-white rounded-md  h-13 hover:bg-green-800">
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
