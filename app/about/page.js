import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="container min-h-screen px-6 py-10 mx-auto">
      <Card className="rounded-lg ">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-gray-800">
            About This Blog
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-gray-600">
            Welcome to my tech blog, where I share knowledge, insights, and
            experiences from the ever-evolving world of technology. I cover a
            range of topics, including web development, programming languages,
            tools, frameworks, and much more.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            This blog is powered by{" "}
            <span className="font-semibold text-blue-500">Next.js</span> and
            styled with{" "}
            <span className="font-semibold text-blue-500">Tailwind CSS</span>{" "}
            and <span className="font-semibold text-blue-500">shadcn</span>. I
            write my posts in markdown, making use of{" "}
            <span className="font-semibold text-blue-500">rehype</span> to
            transform and render rich, readable content. Whether you’re a
            beginner or an experienced developer, I hope you find something
            useful in the posts I share.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Stay tuned for regular updates, tutorials, and insights!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
