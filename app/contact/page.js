"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Head from "next/head";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call for sending email)
    // setSubmitted(true);
    alert("Form didn't submited! Feature upcomming! Stay with Us. Thank you");
  };

  return (
    <>
      <Head>
        <title>Contact - Tech Blog</title>
        <meta
          name="description"
          content="Contact us for any inquiries, questions, or collaborations."
        />
      </Head>
      <div className="container min-h-screen px-6 py-10 mx-auto">
        <Card className="max-w-full mx-auto rounded-lg shadow-lg lg:w-3/4">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-gray-800 dark:text-gray-100">
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">
              If you have any questions, feedback, or would like to collaborate
              on a project, feel free to reach out. I’m always happy to connect
              with fellow tech enthusiasts!
            </p>
            {submitted ? (
              <p className="text-green-500 dark:text-green-400">
                Thank you for reaching out! I will get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="mt-1"
                    required
                  />
                </div>
                <Button type="submit" className="w-full text-white ">
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ContactPage;
