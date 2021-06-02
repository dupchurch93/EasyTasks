import { useState, MouseEvent, useEffect } from "react";
import { Redirect,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, login } from "../../../store/session";
import { RootState } from "../../../store";


const SignUpForm = () => {
  const dispatch = useDispatch();

  // Initialize the state of all form inputs
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([])

  // Grab the user from the redux store
  const sessionUser = useSelector((state: RootState) => state.session.user);

  useEffect(() => {
    let newErrors: any = []

    let emailPattern = new RegExp("\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b")
 
    if (!emailPattern.test(email)) {
      newErrors.push("Not a valid email, please try again")
    }

    let passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{6,20}$")

    if (!passwordPattern.test(password)) {
      newErrors.push("Not a valid password, please try again")
    }
  
    if (password !== repeatPassword) {
      newErrors.push("Passwords do not match")
      
      // .catch(async (res) => {
        //   const data = await res.json();
      //   if (data && data.errors) {
        //     newErrors = data.errors;
      //   }
      // });
    }
    if (newErrors.length) {
      setErrors(newErrors)
    }
  }, [errors])

  const onSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    // let newErrors: any = []

    // let emailPattern = new RegExp("\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b")
 
    // if (!emailPattern.test(email)) {
    //   newErrors.push("Not a valid email, please try again")
    // }

    // let passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{6,20}$")

    // if (!passwordPattern.test(password)) {
    //   newErrors.push("Not a valid password, please try again")
    // }
  
    // if (password !== repeatPassword) {
    //   newErrors.push("Passwords do not match")
      
    //   // .catch(async (res) => {
    //     //   const data = await res.json();
    //   //   if (data && data.errors) {
    //     //     newErrors = data.errors;
    //   //   }
    //   // });
    // }
    // if (newErrors.length) {
    //   setErrors(newErrors)
    // }

    if (errors.length === 0) {
      await dispatch(createUser({ username, email, password }));
      await setUsername("");
      await setEmail("");
      await setPassword("");
      await setRepeatPassword("");
    }
  };

  const loginAsDemo = async (e: MouseEvent<HTMLButtonElement>) => {
    setEmail("demo@aa.io");
    setPassword("password");
    await dispatch(login(email, password));
  };

  const updateUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

  if (sessionUser.id) {
    return <Redirect to="/" />;
  }

  return (
    <div className="flex justify-center w-screen h-screen items-center" style={{
      backgroundImage: `url(
      "https://static.vecteezy.com/system/resources/thumbnails/001/834/369/small/collection-of-different-colored-sheets-of-sticky-notes-vector.jpg"
      )`,
    }}>
      <form className="" data-testid="login-form" onSubmit={onSignUp}>
        <div className="flex shadow-signUp border border-black w-96 max-w-sm mx-auto my-24 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:min-w-4xl">
          {errors.map((error) => {
            <div>{error}</div>
          })}
          <div className="w-full px-6 py-8 md:px-8">
            <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
              EasyTask
            </h2>

            <p className="text-xl text-center text-gray-600 dark:text-gray-200">
              Getting stuff done made easy.
            </p>

            <a
              href="#"
              className="flex items-center justify-center mt-4 text-gray-600 rounded-lg shadow-md dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <div className="px-4 py-3">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign up with Google
              </span>
            </a>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

              <div
                className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or sign up with email
              </div>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                // for="LoggingEmailAddress"
              >
                Username
              </label>
              <input
                id="username"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="username"
                placeholder="Username"
                value={username}
                onChange={updateUsername}
              />
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                // for="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="email"
                data-testid="email-input"
                name="email"
                placeholder="Email"
                value={email}
                onChange={updateEmail}
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Password
                </label>
              </div>

              <input
                id="signUpPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                data-testid="password-input"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={updatePassword}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Confirm Password
                </label>
              </div>

              <input
                id="signUpRepeatPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                data-testid="repeat_password-input"
                name="repeat_password"
                type="password"
                placeholder="Enter your password"
                value={repeatPassword}
                onChange={updateRepeatPassword}
              />
            </div>

            <div className="mt-8">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-royalBlue rounded hover:bg-royalBlueLight focus:outline-none focus:bg-royalBlueLight"
                data-testid="submit-button"
                type="submit"
              >
                Sign Up
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <Link to="/login"
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                Or Login
              </Link>

              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};


// <div>
//   <button onClick={loginAsDemo}>Try as Demo User</button>
// </div>
// </form>
export default SignUpForm;
