import AnimatedLetters from "./AnimatedLetters";
import { useState } from "react";

const links = [
  { name: "first  work experience", href: "my-modal-1" },
  { name: "second work experience", href: "my-modal-2" },
  { name: "third  work experience", href: "my-modal-3" },
  { name: "forth  work experience", href: "my-modal-4" },
  { name: "fifth  work experience", href: "my-modal-5" },
];

const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

const Portfolio = () => {
  return (
    <>
      <div>
        <AnimatedLetters
          strArray={"Portfolio".split("")}
          customerData="Portfolio"
        />
      </div>
      <div
        style={{ marginTop: 40 }}
        className="relative box isolate overflow-hidden bg-gray-900 py-24 sm:pt-32 opacity-70 mx-10 mt-50 rounded-3xl"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              WORK ON.......
            </h2>
            <p className="mt-6 text-3xl leading-8 text-gray-300 line-remove p-4">
              <span>
                A work achievement refers to the success or accomplishment that
                a person has achieved in their job. This can include completing
                important tasks, reaching goals, improving work efficiency,
                gaining the trust of clients, and enhancing leadership skills,
                among other things. A successful work achievement not only
                brings personal honor and pride but also contributes to the
                success of the company.
              </span>
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid text-2xl grid-cols-1 gap-x-8 gap-y-6  font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid, no-script-url
                <label
                  key={link.name}
                  htmlFor={link.href}
                  style={{ cursor: "pointer" }}
                >
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </label>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-2xl mt-4 leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative  w-11/12 max-w-3xl min-h-16 ">
          <label
            htmlFor="my-modal-1"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-5xl font-bold text-white">Experience</h3>
          <p className="text-2xl py-4 text-white">
            • Responsible for overseeing flight operations, managing KPI, and
            leading training initiatives for employees; Served as an operations
            instructor and senior internal auditor, providing systematic
            training to young instructors and employees; Managed and maintained
            relationships with key clients, conducted regular communication and
            visits, and provided targeted solutions.
          </p>
          <h3 className="text-5xl font-bold text-white"> Achievement</h3>
          <p className="text-2xl py-4 text-white">
            • Led a team of operations instructors and improved department
            satisfaction by 20%, resulting in a more efficient and effective
            workforce; Successfully achieved an annual departmental API
            completion rate of 98% or higher.
          </p>
        </div>
      </div>

      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative  w-11/12 max-w-3xl min-h-16 ">
          <label
            htmlFor="my-modal-2"
            className="btn btn-sm btn-circle absolute right-2 top-2 text-white"
          >
            x
          </label>
          <h3 className="text-5xl font-bold text-white">Experience</h3>
          <p className="text-2xl py-4 text-white">
            • Led the customization and launch of funding products, managed
            structured accounts and external investors' investment strategies,
            resulting in the successful launch of several high-yield, low-risk
            investment products that generated substantial profits and boosted
            the company's reputation ; Conducted regular multi-dimensional
            communication with institutional clients to provide market insights,
            recommend suitable investment products, offer investment advice and
            market consultations, and assisted clients in product design and
            transactions, earning their trust and support.
          </p>
          <h3 className="text-5xl font-bold text-white"> Achievement</h3>
          <p className="text-2xl py-4 text-white">
            • Successfully issued and managed high-performing specialized
            account products, resulting in a 40% increase in revenue within 3
            years. Developed and maintained relationships with institutional
            clients, resulting in a 50% increase in assets under management
            within 2 years, Managed a complex market environment, resulting in
            the successful acquisition of a new bank's trust to manage 5 billion
            RMB capital.
          </p>
        </div>
      </div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative  w-11/12 max-w-3xl min-h-16">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-5xl font-bold text-white">Experience</h3>
          <p className="text-2xl py-4 text-white">
            • Responsible for overseeing flight operations, managing KPI, and
            leading training initiatives for employees; Served as an operations
            instructor and senior internal auditor, providing systematic
            training to young instructors and employees; Managed and maintained
            relationships with key clients, conducted regular communication and
            visits, and provided targeted solutions.
          </p>
          <h3 className="text-5xl font-bold text-white"> Achievement</h3>
          <p className="text-2xl py-4 text-white">
            • Led a team of operations instructors and improved department
            satisfaction by 20%, resulting in a more efficient and effective
            workforce; Successfully achieved an annual departmental API
            completion rate of 98% or higher.
          </p>
        </div>
      </div>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative  w-11/12 max-w-3xl">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-5xl font-bold text-white">Experience</h3>
          <p className="text-2xl py-4 text-white">
            • Responsible for overseeing flight operations, managing KPI, and
            leading training initiatives for employees; Served as an operations
            instructor and senior internal auditor, providing systematic
            training to young instructors and employees; Managed and maintained
            relationships with key clients, conducted regular communication and
            visits, and provided targeted solutions.
          </p>
          <h3 className="text-5xl font-bold text-white"> Achievement</h3>
          <p className="text-2xl py-4 text-white">
            • Led a team of operations instructors and improved department
            satisfaction by 20%, resulting in a more efficient and effective
            workforce; Successfully achieved an annual departmental API
            completion rate of 98% or higher.
          </p>
        </div>
      </div>

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative  w-11/12 max-w-5xl">
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-5xl font-bold text-white">Experience</h3>
          <p className="text-2xl py-4 text-white">
            • Responsible for overseeing flight operations, managing KPI, and
            leading training initiatives for employees; Served as an operations
            instructor and senior internal auditor, providing systematic
            training to young instructors and employees; Managed and maintained
            relationships with key clients, conducted regular communication and
            visits, and provided targeted solutions.
          </p>
          <h3 className="text-5xl font-bold text-white"> Achievement</h3>
          <p className="text-2xl py-4 text-white">
            • Led a team of operations instructors and improved department
            satisfaction by 20%, resulting in a more efficient and effective
            workforce; Successfully achieved an annual departmental API
            completion rate of 98% or higher.
          </p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
