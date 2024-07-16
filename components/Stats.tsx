"use client";

import useGithubStats from "react-github-user-stats";
import CountUp from "react-countup";

const Stats = () => {
  const { error, loading, userData } = useGithubStats("KuraoHikari");

  console.log("🚀 ~ file: Stats.tsx:6 ~ userData:", userData);
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          <div className="flex-1 flex gap-4 items-center justify-center">
            <CountUp
              end={userData?.public_repos}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p className="max-w-[100px] leading-snug to-white/80">
              Public Repos
            </p>
          </div>
          <div className="flex-1 flex gap-4 items-center justify-center">
            <CountUp
              end={userData?.followers}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p className="max-w-[100px] leading-snug to-white/80">
              Github Followers
            </p>
          </div>
          <div className="flex-1 flex gap-4 items-center justify-center">
            <CountUp
              end={userData?.total_stars}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p className="max-w-[100px] leading-snug to-white/80">
              Total Stars
            </p>
          </div>
          <div className="flex-1 flex gap-4 items-center justify-center">
            <CountUp
              end={userData?.public_gists}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p className="max-w-[100px] leading-snug to-white/80">
              Public Gists
            </p>
          </div>
          {/* <div>
            <CountUp
              end={userData?.followers}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
          </div>
          <div>
            <CountUp
              end={userData?.total_stars}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
          </div>

          <div>
            <CountUp
              end={userData?.public_gists}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Stats;
