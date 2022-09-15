import React, { useState } from "react";
import { connect } from "react-redux";
import { addBlogs } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
    return {
      blogs: state,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addBlogs: (obj) => dispatch(addBlogs(obj)),
    };
  };
const Blog = (props) => {
  const [blog, setBlog] = useState("");

  const add = () => {
    if (blog === "") {
      alert("Input is Empty");
    } else {
      props.addBlogs({
        id: Math.floor(Math.random() * 1000),
        item: blog,
        completed: false,
      });
      setBlog("");
    }
  };
  return (
    <div className="addBlog">
      <input
        type="text"
        className="blog-input"
        placeholder="Write your blog... "
        onChange={(e) => setBlog(e.target.value)}
        value={blog}
      />
     <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};

//we can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
