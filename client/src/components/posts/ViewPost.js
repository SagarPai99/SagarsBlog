
import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import "./post.scss";

const ListPost = ({ posts }) => {
   return (
      <div className="grid-container mx-3">
         {posts.map(post => (
            <Link to={`/blog/post/${post._id}`} key={post._id}>
               <Post post={post} />
            </Link>
         ))}
      </div>
   );
};

ListPost.propTypes = {
   posts: PropTypes.array.isRequired
};

export default ListPost;
view rawListPost.js hosted with ❤ by GitHub
import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import getFormattedDate from "../../utils/getFormattedDate";
import "./post.scss";

const Post = ({ post }) => {
   const postDate = getFormattedDate(post.date);
   return (
      <Card className="deckStyle" style={{ border: "none" }}>
         <Card.Body className="postCover">
            <Card.Title className="text-center p-5">{post.title}</Card.Title>
         </Card.Body>
         <Card.Footer>
            <small className="text-muted">Posted on: {postDate}</small>
         </Card.Footer>
      </Card>
   );
};

Post.propTypes = {
   post: PropTypes.object.isRequired
};

export default Post;
view rawPost.js hosted with ❤ by GitHub
@import "../../sass/styles";

// ############ List Post #####################

.grid-container {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(260px, 400px));
   grid-gap: 1em;
}

a:link {
   text-decoration: none !important;
}

.deckStyle {
   @include box-shadow($cardShadowInitial);
}

.deckStyle:hover {
   @include transition(0.4s);
   @include box-shadow($cardShadowHover);
}

// ######### Post ############

.postCover {
   background: $themeColor;
   color: $light;
}

// ############# ViewPost ##############

.viewPost {
   overflow-wrap: break-word;
}

.postTitle {
   color: $primaryColor;
}

.footerStyle {
   color: $subtitleColor;
}

// #################################
view rawpost.scss hosted with ❤ by GitHub
import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../form/Input";
import Textarea from "../form/Textarea";

const PostForm = ({ post, onChange, onBlur, loading, onSubmit }) => {
   const { title, body, errors } = post;
   return (
      <Container>
         <Row>
            <Col className="mx-auto">
               <Form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">
                  <Input
                     name="title"
                     type="text"
                     placeholder="Enter Post Title"
                     value={title}
                     onChange={onChange}
                     onBlur={onBlur}
                     text={{
                        module: "post",
                        label: "Title",
                        error: errors.title
                     }}
                  />
                  <Textarea
                     name="body"
                     placeholder="Write your post here..."
                     value={body}
                     onChange={onChange}
                     onBlur={onBlur}
                     text={{
                        module: "post",
                        label: "Description",
                        error: errors.body
                     }}
                  />
                  <Button
                     variant="outline-info"
                     type="submit"
                     disabled={loading}
                     className="mt-3"
                  >
                     Submit
                  </Button>
               </Form>
            </Col>
         </Row>
      </Container>
   );
};

PostForm.propTypes = {
   post: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired,
   onBlur: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onSubmit: PropTypes.func.isRequired
};

export default PostForm;
view rawPostForm.js hosted with ❤ by GitHub
import React from "react";
import PropTypes from "prop-types";
import getFormattedDate from "../../utils/getFormattedDate";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./post.scss";

const ViewPost = ({ post, auth, onDelete, onEdit }) => {
   const postDate = getFormattedDate(post.date);
   return (
      <Container className="mt-4 viewPost">
         <Row>
            <Col className="text-center postTitle">
               <h2>{post.title}</h2>
            </Col>
         </Row>
         <Row className="my-4" style={{ whiteSpace: "pre-wrap" }}>
            <Col>{post.body}</Col>
         </Row>
         <Row className="d-flex flex-column font-italic footerStyle">
            <Col>Created by : {post.author}</Col>
            <Col>Date: {postDate}</Col>
         </Row>
         {auth && (
            <Row className="mt-4">
               <Col className="text-center">
                  <Button
                     className="mr-2"
                     variant="outline-info"
                     onClick={onEdit}
                  >
                     Edit
                  </Button>
                  <Button variant="outline-danger" onClick={onDelete}>
                     Delete
                  </Button>
               </Col>
            </Row>
         )}
      </Container>
   );
};

ViewPost.propTypes = {
   post: PropTypes.object.isRequired,
   auth: PropTypes.bool.isRequired,
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
};

export default ViewPost;