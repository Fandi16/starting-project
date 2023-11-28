import Post from "./post";
import NewPost from "./NewPost";
import classes from "../components/PostsList.module.css"
import Modal from "./Modal";
import { useState } from "react";

function PostList ()
{
    const [ enteredBody, setEnteredBody ] = useState( '' );
    const [ enteredAuthor, setEnteredAuthor ] = useState( '' );

    function bodyChangeHendler ( event )
    {
        setEnteredBody( event.target.value );
    }

    function authorChangeHendler ( event )
    {
        setEnteredAuthor( event.target.value );
    }
    return (
        <>
            <Modal>
                <NewPost
                    onBodyChange={ bodyChangeHendler }
                    onAuthorChange={authorChangeHendler}
                />
            </Modal>
            <ul className={ classes.posts }>
                <Post author={ enteredAuthor} body={enteredBody} />
                <Post author="bejo" body="ayo coba post disini"/>
            </ul>
        </>
    )
}

export default PostList