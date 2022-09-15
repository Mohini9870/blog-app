import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addBlogs,
  completeBlogs,
  removeBlogs,
  updateBlogs,
} from "../redux/reducer";
import BlogItem from "./BlogItem";
import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    blogs: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBlog: (obj) => dispatch(addBlogs(obj)),
    removeBlog: (id) => dispatch(removeBlogs(id)),
    updateBlog: (obj) => dispatch(updateBlogs(obj)),
    completeBlog: (id) => dispatch(completeBlogs(id)),
  };
};

const DisplayBlogs = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="displayblogs">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {props.blogs.length > 0 && sort === "active"
            ? props.blogs.map((item) => {
                return (
                  item.completed === false && (
                    <BlogItem
                      key={item.id}
                      item={item}
                      removeBlog={props.removeBlog}
                      updateBlog={props.updateBlog}
                      completeBlog={props.completeBlog}
                    />
                  )
                );
              })
            : null}
          {/* for completed items */}
          {props.blogs.length > 0 && sort === "completed"
            ? props.blogs.map((item) => {
                return (
                  item.completed === true && (
                    <BlogItem
                      key={item.id}
                      item={item}
                      removeBlog={props.removeBlog}
                      updateBlog={props.updateBlog}
                      completeBlog={props.completeBlog}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {props.blogs.length > 0 && sort === "all"
            ? props.blogs.map((item) => {
                return (
                  <BlogItem
                    key={item.id}
                    item={item}
                    removeBlog={props.removeBlog}
                    updateBlog={props.updateBlog}
                    completeBlog={props.completeBlog}
                  />
                );
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBlogs);