import { useState } from "react";
import React from "react";
import "./App.css";
import Profile from "./components/ProfileCard";
import ProfileCard from "./components/ProfileCard";

const users = [
  {
    name: "Sunita verma",
    title: "Frontend Developer",
    image: "src/assets/images/front-end.jpg",
    email: "sunita@0987546@gmail.com",
    location: "Hisar",
  },
  {
    name: " pooja",
    title: "UI/UX Designer",
    image: "src/assets/images/ui.avif",
    email: "pooja@example.com",
    location: "Bhiwani",
  },
  {
    name: "poonam",
    title: "back-end developer ",
    image: "src/assets/images/ui.avif",
    email: "poonam@example.com",
    location: "Chandigarh",
  },
  {
    name: "manisha",
    title: "CMS Developer",
    image: "src/assets/images/ui.avif",
    email: "manisha@example.com",
    location: "Gurgaon",
  },
  {
    name: "manisha",
    title: "social media",
    image: "src/assets/images/ui.avif",
    email: "manisha@example.com",
    location: "Delhi",
  },
  {
    name: "nisha",
    title: "Full-stack developer",
    image: "src/assets/images/front-end.jpg",
    email: "nisha@0987546@gmail.com",
    location: "Noida",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-5">
        <h1 className="text-3xl font-bold mb-6 text-center ">Team Profiles</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user, index) => (
            <ProfileCard
              key={index}
              name={user.name}
              title={user.title}
              image={user.image}
              email={user.email}
              location={user.location}
            />
          ))}
        </div>
      </div>
      <Profile />
    </>
  );
}

export default App;
