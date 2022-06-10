import React from "react";

function Jobpost() {
  return (
    <div className="shadow-2xl  w-96   rounded-2xl  p-5 m-20">
      <h1 className="text-center font-bold uppercase ">Jobpost</h1>
      <div>
        <label for=""> positon</label> <br />
        <input
          className="border-solid border-slate-300  border-2   rounded-lg "
          type="text"
          name=""
          id=""
        />
      </div>
      <br />
      <div>
        <label for=""> Locaton</label>
        <br />
        <input
          className="border-solid border-slate-300  border-2   rounded-lg "
          type="text"
          name=""
          id=""
        />
      </div>
      <br />
      <div>
        <label for=""> Exprence</label>
        <input
          className="border-solid border-slate-300  border-2   rounded-lg "
          type="text"
          name=""
          id=""
        />
      </div>
      <br />
      <div>
        <label for="">Employment Type </label> <br />
        <select className="border-solid border-slate-300  w-60   border-2   rounded-lg ">
          <option value="">Full Time</option>
          <option value="">part Time</option>
        </select>
      </div>
      <br />
      <div>
        <label for="">Salry Scal </label>
        <br />

        <select className="border-solid border-slate-300   w-60  border-2   rounded-lg ">
          <option value="">Full Time</option>
          <option value="">part Time</option>
        </select>
      </div>
      <br />
      <div>
        <label for="">icone </label>
        <input
          className="border-solid border-slate-300   w-60  border-2   rounded-lg "
          type="file"
          name=""
          id=""
        />
      </div>
      <br />
      <div>
        <label for="">Job Discription</label>
        <input
          className="border-solid border-slate-300   w-60  border-2   rounded-lg "
          type="textarea"
          name=""
          id=""
        />
      </div>
      <button
        type="submit"
        className="w-full h-10 mt-20 bg-indigo-700 rounded-3xl"
      >
        Post This Job
      </button>
    </div>
  );
}

export default Jobpost;
