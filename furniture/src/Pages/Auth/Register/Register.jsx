import { Link, useNavigate } from "react-router";

const Register = () => {

const navigate = useNavigate()
const submitHandle = ()=> {
  navigate("/")
};

  return (
    <div className="lg:container ml-[25%] p-[40px] ">
      <div className="max-w-[648px] w-full min-h-[382px] p-[31px] mx-col  flex items-center justify-center flex-col rounded-lg shadow-2xl" >
        <h3 className="text-4xl text-yellow-700 font-semibold font-inter mb-5">Register</h3>
        <form onSubmit={submitHandle} className="flex flex-col items-center w-full space-y-4">
          <input type="text" placeholder="Your name..." className="outline-0 w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5" />
          <input type="email" placeholder="Your email..." className="outline-0 w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5" />
          <input type="password" placeholder="Your password..." className="outline-0 w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5" />
          <button type="submit" className="w-full h-[50px] bg-yellow-600 hover:bg-yellow-700 rounded-lg pl-3.5 text-base text-white font-semibold font-inter flex items-center justify-center cursor-pointer">REGISTER</button>
        </form>
        <p className="mt-4 text-[#868597] font-inter font-normal ">Already have an account<Link to={"/auth/login"} className="text-yellow-600 hover:text-yellow-700 font-inter ml-2">Login</Link></p>
      </div>
    </div>
  )
}

export default Register