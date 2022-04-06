import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../FirebaseConfig/Firebase";

const Header = ({ user, setLoggedInUser }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-center h-16 border-b-2  w-full  font-bold text-black flex place-content-between bg-white header">
      <div className="text-2xl text-left font-bold mt-3">
        <Link to={"/home"} exact>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAhFBMVEX/VyL/////Uhf/UBH/hWn/n4z/Tgr/SAD/sqP/4dz/VBv/SgD/QwD/9fP/0sr/dFH/b0r/kHf/t6j/f2H/YjX/aUH/yL7/zsX/1s7/o5D/7uv/moT/Wyn/eVj/5eD/jXP/vK//xLj/qpj/Xi//l3//g2X/6ub/ZTv/bEX/3df/e1r/inDZEuLkAAAHAklEQVR4nO2d6XqqMBBACVGiJLigtSrVurW31vd/v2u3W5cACZNAhpvzvzTnA7NOZgLSdoKmG2Adb4gfb4gfb4if/9lwnnZPHRycuulc13A2ESyiIRZoxETnUcNwE/IwwEbI9lJHieF6yptubTViNlEy7Im46aZWhtJ+ueEza7qZIMRdl3NrOEH6hf7jTvHGsBM13UIwt4rXhjvcn+gXYp1veBRNt84EcZhvGODtRS+hnTzDHvZe5oern+KlIW26ZaaIH+SGs7a8wiBgR6lhB99cNA96kBq2YaT4IZIZ9ttkyNYSw217foZBwGcSwx7+CdsvUU9iuGjNYHGGLiSG3VYZdr0hdrwhfrwhfrwhfrxhNWIacaYJj6iVvSELhiEX+3H62F8mGiz7g032JiwcAxk3jMTLNiFVeRwzbvhNGjbktFdd74vNnhl1NGpIeQrU+2T2ZHIFbtJQHGTtrYLJYz1zhmF8lDW2GssHY9sMxgz5ypzfBwdTu2GmDFlmVvDc4xg6GzJkKHamBc8jhxlFM4aiJ2silIERRSOGzMIb/MDIWzRhGI3tCBKSGuhuDBiGb7YECXmGDxoGDBl0nlbEHjz0ww3Z1qIgWYN/imDD0PBIf0sX+p2CDcWrXUPStCE1NtvOIwUuNKCGYmnbEBo1ATQMX6wLkh3sOwUa8oF9wyWsO4Ua2hckZAQaE2GGobX52iWwQ3eYId/WYQgLDYEZMtuD4RdNGtYiSIaQHyLIMB7VY3iADIkgw/C5HkNQVwMyvPhjq4BitECGkaXdi1tAwaAwQysbUPcMHDecZZO3fchFHuFqVzLouG34GDMaFvf2cSSKuyynDTO1aTOlRa/RZcOu6nQk5gULTYcNNbZ04z8oDXVawjYIDR91pszxFKGh3nwyf8vHXcMHrTVB/o6Iu4Z6E+b85bS7hnoNw2g41ftKZ3nPcdfwpBXDxdZ5z3HXcKPVMpr7HHcNtbaQChabDhvqXEUt2Fx22JAMlcf8+/wAOAzJm9qYGIttwUOcNjwvEMsfFvOnwpg4tw3JaxYIURj/LIbb4kc4bvhJsly+vq4/6d9SfjKAwRDGEXJwgcIwgZyRojAExQ3hMIQc5eMwhHymOAwhmUiQGJJh5e8UiyE5Vb2ggMaQzB9EFMb6mngMCen3OqM/geB6Z96YDL+Zj7U+WISGhCxHGv0OSkNCntVHD6SGZKK8jYfVUD3qFK1hqvpTRGtIVKeqeA1XikMGXsMKgVvIDFWD3byhN2wOb+gNvaE3tI839IYGDZO0MypleGa1mnSeD4uCEhxuGh4+NwHV+KjAQSP2pHLnzxXD5KnCZnUsFqUPdsUwKQliz4OVKzpiuK+au6swNsMhQ8BlelGWqcEJQ9CxX1lKHycMlffDZJTdbXTCEJS8npUk1nLCEJSYhOeUpXLKEJTvIT9k2CFDUJpHFIagVAFl6RqcMMwgN5TLBkQnDOeAeLS4LPuUE4aa1xGuYCU/Q0cMq1eNCoclj3bEkKQVFcP7Qn6OGp4Vq3yofFqeIc0VQ7IeKa/xv8tsUq6UZ9IZQ0L6u5dhGasz7++Tl85pnC22Kk91ydAStRjSmrJGSNnVcQZcV+YPKbWccoenJtS+Ub36B8vA8yD71zWheskYlkVJNKH2TS3xNAXXPq2zVp3Vwwyj/DwIttnUEvUVhB3ZP68F5V0uYFbBmtKZSVBeekLzJpat4myhnjoKaBiXLuMsoZ6kDpyhtZneVCOBMtSwob7mRX2jEp4p+b4MvX36GlsHYMNGZm46aWHgGct5/YtErZtsBrLOW8/ofcur1vaWAcP4qWbDJ63NLRPVH+h7rYKrGm92/cBrSZj8zVjzzM5MFRZuPff8PzLdQ0lDlXRYXW9xrH3YY6oaEp/UIjjRP1Y2VtGKTu3XEFhOqzTMWFWy2G6xkjPbSkX1TFaWYyubr3H5Xu281aRhEIrMVlWdpCsqxj0YNTw/ThxsrDX6B4VMRfUYnh/IpjuDZQLPHHdTBmmQacOPxMeMDbN0Nj/epRPS4zifpdmQsajB+hb5ljTi2vVy7wvomqiga8nQIbwhfrwhfrwhfrwhfrwhfrwhfrwhfrwhfrwhfv5Tw0WrDBcSQ1jxVse4CLf/NQRVVHSNi9C7X0NYeVrHuIjyvbhq1CbDi8ogF4bquTOd57Ls9IVhi36IbCA1bM9nGu+J3HDRlvHi6uj96lJjS17ideTkleGmHYrXUYXXF1OHbehOWUryDRP42WTj3Mbb3Vwu1ggWd5ToNk7r9vp0P8L9ofK7IPu7C+LJCPPAL8kXJrkC36sextIwUSzJaye75J9kAhbr0QgxZ9IbyvI0Bkn6JnhEQyzQiIthzqXB3EQNyaCXnTo4OGW9QW5sXXkqCux4Q/x4Q/x4Q/x4Q/z8BTlnqxjtklRjAAAAAElFTkSuQmCC"
            alt=""
            width="45px"
            className="ml-5"
          />
        </Link>
      </div>
      <div className="flex text-center">
        <button className="text-lg md:mr-5 ml-4 h-10 mt-3 border-2 rounded-lg text-center text-blue-400 w-56 border-blue-400 hover:bg-blue-500 hover:text-white hover:underline font-bold">
          <Link to={user?.displayName ? "/createpost" : "/Createaccount"}>
            {user?.displayName ? "Create Post" : "Create Account"}
          </Link>
        </button>
        <div className="flex flex-col">
          <div>
            <button className="text-xl md:ml-4 md:mr-5 h-10 w-24 md:w-36 text-black mt-3 rounded-lg hover:bg-gray-200 ">
              <Link
                to={user?.displayName ? "" : "/login"}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {user?.displayName ? (
                  <img
                    src={
                      user.photoURL ||
                      "https://avatars.githubusercontent.com/u/35"
                    }
                    alt=""
                    className="border-2 border-red-900 rounded-full w-8 h-8 ml-12 "
                  />
                ) : (
                  "Login"
                )}
              </Link>
            </button>
          </div>
          {user?.displayName
            ? isOpen && (
                <div className="bg-white border-2 w-36   md:mt-5 rounded-lg cursor-pointer absolute md:relative mt-16 ">
                  <p
                    className="text-lg font-bold hover:bg-gray-100 w-full md:p-2 rounded-lg h-10 text-left hover:underline"
                    onClick={() => {
                      if (user?.displayName) {
                        localStorage.removeItem("user");
                        auth.signOut();
                        setLoggedInUser({});
                        history.push("/login");
                        setIsOpen(false);
                      }
                    }}
                  >
                    Logout
                  </p>
                  <p
                    className="text-lg font-bold hover:bg-gray-200 w-full md:p-2 rounded-lg h-10 text-left hover:underline"
                    onClick={() => {
                      history.push("/dashboard");
                      setIsOpen(false);
                      setTimeout(() => {
                        setIsOpen(false);
                      }, 3000);
                    }}
                  >
                    Dashboard
                  </p>
                </div>
              )
            : null}
        </div>
      </div>
    </nav>
  );
};

export default Header;
