import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="w-full py-6 ">
      <div className="container px-6 mx-auto">
        <Card className="border-none rounded-lg ">
          <CardContent className="space-y-4 text-center">
            <h3 className="text-lg font-semibold">
              Suhag Blog by Md Abdus Salam Suhag
            </h3>
            <p className="">
              Sharing knowledge, tutorials, and insights on web development and
              technology.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-between py-4 md:flex-row">
            <p className="">
              &copy; {new Date().getFullYear()} Suhag&apos;s Blog. All Rights
              Reserved.
            </p>
            <div className="flex mt-4 space-x-4 md:mt-0">
              <a
                href="https://github.com/md-suhag"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/suhag102"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                LinkedIn
              </a>
              <a
                href="https://facebook.com/mdas.suhag"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Facebook
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;
