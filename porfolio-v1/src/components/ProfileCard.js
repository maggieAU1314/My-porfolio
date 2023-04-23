import AnimatedLetters from "./AnimatedLetters";
const ProfileCard = ({ page }) => {
  return (
    <section
      style={{ marginTop: 60 }}
      className="box relative isolate overflow-hidden bg-gray-900 px-6 py-36 sm:pt-11 sm:pb-32 lg:px-8 border-zinc-500 mx-10 mt-50 rounded-3xl opacity-70 text-white"
    >
      {page === 1 ? (
        <div className="mx-auto max-w-xl lg:max-w-2xl">
          <figure className="mt-10">
            <blockquote className="text-center text-4xl font-semibold  text-white sm:text-2xl sm:leading-9">
              <p className="text-4xl">Frontend Design & backend developer</p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-10 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white line-remove text-xl leading-10">
                  <span className="text-4xl ">
                    {" "}
                    As a full-stack programmer with both a comprehensive
                    background in computer science and an MBA degree, I possess
                    a unique blend of technical and business skills.
                  </span>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      ) : page === 2 ? (
        <div className="mx-auto max-w-xl lg:max-w-2xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              <p className="text-4xl">Software Development</p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-10 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white line-remove text-2xl">
                  <span className="text-4xl">
                    {" "}
                    Strong understanding of various tools for functional,I have
                    proven track record of writing code with comprehensive
                    tests, ensuring the reliability and scalability of software
                    systems.Proficient in source control methodologies using
                    git.
                  </span>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      ) : (
        <div className="mx-auto max-w-xl lg:max-w-2xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              <p className="text-4xl">Comprehensive problem solving</p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-10 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white line-remove text-2xl">
                  <span className="text-4xl">
                    With hands-on development experience in multiple fields,
                    including aviation and finance, I bring a unique perspective
                    to problem-solving and have the ability to approach
                    challenges from different angles.
                  </span>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};
export default ProfileCard;
