import Post from "./post";
import classes from './Post.module.css'

function PostList ()
{
    return (
        <ul className={classes.posts}>
            <Post author="bejo" body="belajar react tidak sulit"/>
            <Post author="banget" body="belajar di UPGRIS sangat Awsome !!!!"/>
        </ul>
    )
}

export default PostList