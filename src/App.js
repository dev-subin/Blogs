import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { db } from "./FirebaseConfig/Firebase";
import Dashboard from "./pages/Dashboard";
import UserPosts from "./pages/UserPosts";
import UserContent from "./pages/UserContent";
import SinglePost from "./pages/SinglePost";
import { Redirect } from "react-router-dom";
function App() {
  const [loggedUser, setLoggedUser] = useState({});
  const [posts, setPosts] = useState([]);
  const dispatchLoggedInUser = (props) => {
    setLoggedUser(props);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedUser(JSON.parse(user));
    }
    db.collection("posts").onSnapshot((snap) => {
      setPosts(snap.docs.map((res) => res.data()));
    });
  }, []);

  const userData = posts.filter((res) => res.author === loggedUser.displayName);
  return (
    <Router>
      <Header user={loggedUser} setLoggedInUser={setLoggedUser} />
      <Route path="/:id/posts">
        <UserPosts data={posts} />
      </Route>
      <Route exact path="/:id/post/:blog">
        <SinglePost data={posts} />
      </Route>
      <Route path={"/"} exact render={() => <Redirect to="/home" />} />
      <Route path={"/home"} exact>
        <Home data={posts} />
      </Route>
      <Route path={"/createpost"}>
        {loggedUser.displayName ? (
          <CreatePost loggedInUser={loggedUser} />
        ) : (
          <h1 className="text-black">Please Login!</h1>
        )}
      </Route>
      <Route path={"/createaccount"}>
        <CreateAccount />
      </Route>
      <Route path={"/login"}>
        <Login setLoggedInUser={dispatchLoggedInUser} />
      </Route>
      <Route path={"/dashboard"}>
        {loggedUser.displayName ? (
          <Dashboard data={userData} />
        ) : (
          <h1 className="text-black">Please Login!</h1>
        )}
      </Route>
      <Route path={"/:id/post"}>
        <UserContent data={userData} />
      </Route>
    </Router>
  );
}

export default App;
