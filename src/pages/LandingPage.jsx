import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gray-900 p-6">
      <div className="mt-16 text-center w-60 max-w-2xl mx-10 ">
        {/* Heading */}
        <h2 className="mb-10 sm:mb-16 text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold">
          The only URL Shortener you&rsquo;ll ever need!{" "}
          <span className="inline-block animate-bounce text-4xl">👇</span>
        </h2>

        {/* Form */}
        <form className="mb-16 flex flex-col items-center gap-6">
          <div className="flex items-center w-full max-w-xl justify-center gap-2">
            <Input
              placeholder="Paste your long URL here..."
              className="flex-1 border border-gray-600 shadow-sm bg-gray-800 w-80 h-80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 "
            />
            <Button className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 ease-in-out shadow">
              🔗 Shorten!
            </Button>
          </div>
        </form>

        {/* Image */}
        <div className="mb-16">
          <img
            src="/landing-page.png"
            alt="Landing Page"
            className="w-full max-w-xl h-auto mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Accordion */}
        <div className="mb-20 bg-gray-800 rounded-md p-4">
          <Accordion
            type="multiple"
            collapsible
            className="w-full max-w-xl mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How does the Linkly URL shortener work?
              </AccordionTrigger>
              <AccordionContent>
                When you enter a long URL, our system generates a shorter version of
                that URL. This shortened URL redirects to the original long URL when
                accessed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Do I need an account to use the app?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Creating an account allows you to manage your URLs, view
                analytics, and customize your short URLs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What analytics are available for my shortened URLs?
              </AccordionTrigger>
              <AccordionContent>
                You can view the number of clicks, geolocation data of the clicks,
                and device types (mobile/desktop) for each of your shortened URLs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
