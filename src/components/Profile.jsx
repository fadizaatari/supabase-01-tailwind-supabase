import { LoadingData } from "./MyComponents.jsx";
import { useSupabaseData } from "./Myfunctions.js";
import { Slider } from "@/components/ui/slider";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

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
import Header from "./Header";

const Profile = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();
  const [SliderValue, setSlider] = useState(100);

  const tableName = "profiles";
  const id = session.user.id;
  const fieldid = "id";
  const { data, loading, error } = useSupabaseData(tableName, fieldid, id);

  if (loading) {
    return <LoadingData />;
  }

  if (error) {
    return <ErrorFetchingData error={error} />;
  }

  if (data) {
    return (
      <div>
        <div>
          <Header />
          <div className=" top-0 left-0 h-screen w-screen flex justify-center items-center p-10 bg-black text-white rounded-md text-lg">
            <div className="bg-gray-800 p-6 rounded-md shadow-md text-white">
              <Tabs defaultValue="information" className="w-[400px] ">
                <TabsList className="grid w-full grid-cols-2 bg-gray-200 h-10 rounded p-1.5">
                  <TabsTrigger
                    className="bg-gray-200 data-[state=active]:bg-white"
                    value="information"
                  >
                    <h1 className="">Personal Information</h1>
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
                        <Label htmlFor="firstname">First Name</Label>
                        <Input
                          id="firstname"
                          defaultValue=""
                          value={data[0].first_name}
                          placeholder="Enter your First Name"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="lastname">Last Name</Label>
                        <Input
                          id="lastname"
                          defaultValue=""
                          value={data[0].last_name}
                          placeholder="Enter your Last Name"
                        />
                      </div>
                      <div className="space-y-1">
                        <p>{SliderValue}</p>
                        <Slider
                          onValueChange={(value) => setSlider(value)}
                          className="mt-2"
                          defaultValue={[10]}
                          min={100}
                          max={500}
                          step={100}
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
                        Change your password here. After saving, you'll be
                        logged out.
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
        </div>
      </div>
    );
  }
};

export default Profile;
