import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BlogsCard = (props) => {
    const { title, description, url } = props.blog;
    return (
        <div>
            <div className="gx-5 p-5" style={{ color: 'black' }}>
                <Card className="text-center">
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <h1 className="h1">{title}</h1>
                        {/* <Card.Title>{title}</Card.Title> */}
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <div className="text-center">
                            <div class=" text-center box bg-1">
                                <a href={url}> <button class="button button--nina button--text-thick button--text-upper button--size-s" data-text="Read More">
                                    <span>R</span><span>e</span><span>a</span><span>d</span> <span>M</span><span>o</span><span>r</span><span>e</span>
                                </button></a>
                            </div>
                        </div>

                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
            </div>
        </div>
    );
};

export default BlogsCard;