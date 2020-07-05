import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../form/Input";
import TextArea from "../form/Textarea";

const PostForm = ({ post, onChange, onBlue, loading, onSubmit }) => {
    cosnt { title, body, errors } = post;
    return (
        <Container>
            <Row>
                <Col className="mx-auto">
                    <Form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">
                        <Input
                            name="title"
                            type="text"
                            placeholder="Enter Post Title"
                            value="title"
                            onChange={onChange}
                            onBlur={onBlur}
                            text={{
                                module: "post",
                                label: "Title",
                                error: errors.title
                            }}
                        />
                        <TextArea
                            name="body"
                            placeholder="Write our post here..."
                            value={body}
                            onChange={onChnage}
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