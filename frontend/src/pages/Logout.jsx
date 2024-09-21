import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/ContextProvider";

function Logout() {
  const { user, setUser } = useAuth();
  const handleLogout = () => {
    try {
      setUser({
        ...user,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="md:px-3 md:py-2 px-5 py-2 md:mx-4 mx-0 bg-red-600 text-white font-medium rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
