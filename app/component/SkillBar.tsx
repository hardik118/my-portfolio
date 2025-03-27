import { SkillsMarquee } from "./Techrowmoving";

export const SkillBar = () => {
  return (
    <div className="h-auto w-full py-10 px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-yellow-500 text-xl sm:text-2xl md:text-3xl font-semibold">
          EXPERIENCE
        </h1>

        <div className="flex flex-col gap-2 items-center justify-center mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl">
          <h1>
            My Tech stack includes{" "}
            <span className="text-blue-500">Diverse</span>,{" "}
            <span className="text-pink-500">up-to-date</span>,{" "}
            <span className="text-purple-500">Essential Skills</span> that could
            be extremely beneficial for your organization.
          </h1>
          <h1>
            Enabling me to deliver{" "}
            <span className="text-green-600">Cutting Edge Solutions</span>.
          </h1>
        </div>

        <div className="mt-6 w-full">
          <SkillsMarquee />
        </div>
      </div>
    </div>
  );
};
