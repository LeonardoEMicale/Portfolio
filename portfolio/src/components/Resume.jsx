const Resume = () => {
  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Resume</h1>
      <p className="text-center py-8 my-2 text-base font-normal text-stone-500">
        If you want to know more about me, download mi CV
        <a
          target="blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1AvhGHFa5GENvdLLEqxHBCi4vh_xHdQ3j/edit?usp=drive_web&ouid=100891994405268193692&rtpof=true"
          download
          className="text-[#001b5e] underline font-bold m-1"
        >
          here
        </a>
      </p>
    </div>
  );
};

export default Resume;
