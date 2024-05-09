import React from "react";
import Posts from "../components/about/Posts";
import Sidebar from "../components/about/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  const posts = [
    {
      title: "Going all-in with millennial design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://via.placeholder.com/150",
      date: "01 Jan 2024",
      category: "Wood",
    },
    {
      title: "Exploring new ways of decorating",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://via.placeholder.com/150",
      date: "02 Feb 2024",
      category: "Handmade",
    },
    {
      title: "Handmade pieces that took time to make",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://via.placeholder.com/150",
      date: "03 Mar 2024",
      category: "Wood",
    },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {posts.map((post, index) => (
              <Posts
                key={index}
                title={post.title}
                description={post.description}
                image={post.image}
                date={post.date}
                category={post.category}
              />
            ))}
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
