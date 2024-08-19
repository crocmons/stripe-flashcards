import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
    return (

        <div className="flex items-center justify-center flex-col gap-10 my-14 md:my-24">
          <h1 className="text-4xl font-bold mt-24">
              Sign Up 
          </h1>
            <SignUp />;
        </div>
        )
}