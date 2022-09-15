import "./css/main.css";
import DisplayBlogs from "./Components/DisplayBlogs";
import Blog from "./Components/Blog";

import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Blog App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Blog />
        <DisplayBlogs />
      </motion.div>
    </div>
  );
}

export default App;